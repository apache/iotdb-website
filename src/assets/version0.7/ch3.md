<!-- TOC -->

- [Chapter 3](#chapter-3)
    - [3.1 Key Concepts and Terminology](#31-key-concepts-and-terminology)
        - [3.1.1 Device](#311-device)
        - [3.1.2 Sensor](#312-sensor)
        - [3.1.3 Storage Group](#313-storage-group)
        - [3.1.4 Path](#314-path)
        - [3.1.5 Timeseries Path](#315-timeseries-path)
        - [3.1.6 Prefix Path](#316-prefix-path)
        - [3.1.7 Path With Star](#317-path-with-star)
        - [3.1.8 Timestamp](#318-timestamp)
        - [3.1.9 Value](#319-value)
        - [3.1.10 Point](#3110-point)
        - [3.1.11 Column](#3111-column)
    - [3.2 Data Type](#32-data-type)
    - [3.3 Coding](#33-coding)
        - [3.3.1 PLAIN](#331-plain)
        - [3.3.2 TS_2DIFF](#332-ts_2diff)
        - [3.3.3 RLE](#333-rle)
        - [3.3.4 GORILLA](#334-gorilla)
        - [3.3.5 Correspondence between data type and coding](#335-correspondence-between-data-type-and-coding)
    - [3.4 Compression](#34-compression)

<!-- /TOC -->
# Chapter 3
## 3.1 Key Concepts and Terminology
The following basic concepts are involved in IoTDB:
* device
* sensor
* storage group
* path
* timeseries path
* prefix path
* path with star
* timestamp
* value
* point
* column

A detailed description of the above concepts will be given in sections 3.1.1 to 3.1.11 of this chapter.

### 3.1.1 Device
A devices is an installation equipped with sensors in real scenarios. In IoTDB, all sensors should have their corresponding devices.

### 3.1.2 Sensor
A sensor is a detection equipment in an actual scene, which can sense the information to be measured, and can transform the sensed information into an electrical signal or other desired form of information output and send it to IoTDB. In IoTDB, all data and paths stored are organized in units of sensors.

### 3.1.3 Storage Group
Storage groups are used to let users define how to organize and isolate different time series data on disk. Time series belonging to the same storage group will be continuously written to the same file in the corresponding folder. The file may be closed due to user commands or system policies, and hence the data coming next from these sensors will be stored in a new file in the same folder. Time series belonging to different storage groups are stored in different folders.

Users can set any prefix path as a storage group. Provided that there are four time series `root.vehicle.d1.s1`, `root.vehicle.d1.s2`, `root.vehicle.d2.s1`, `root.vehicle.d2.s2`, two devices `d1` and `d2` under the path `root.vehicle` may belong to the same owner or the same manufacturer, so d1 and d2 are closely related. At this point, the prefix path root.vehicle can be designated as a storage group, which will enable IoTDB to store all devices under it in the same folder. Newly added devices under `root.vehicle` will also belong to this storage group.

Note: A full path (`root.vehicle.d1.s1` as in the above example) is not allowed to be set as a storage group.

Setting a reasonable number of storage groups can lead to performance gains: there is neither the slowdown of the system due to frequent switching of IO (which will also take up a lot of memory and result in frequent memory-file switching) caused by too many storage files (or folders), nor the block of write commands caused by too few storage files (or folders) (which reduces concurrency).

Users should balance the storage group settings of storage files according to their own data size and usage scenarios to achieve better system performance. (There will be officially provided storage group scale and performance test reports in the future).
Note: The prefix of a time series must belong to a storage group. Before creating a time series, the user must set which storage group the series belongs to. Only the time series whose storage group is set can be persisted to disk.

Once a prefix path is set as a storage group, the storage group settings cannot be changed.

After a storage group is set, all parent and child layers of the corresponding prefix path are not allowed to be set up again (for example, after `root.ln` is set as the storage group, the root layer and `root.ln.wf01` are not allowed to be set as storage groups).

### 3.1.4 Path
In IoTDB, a path is an expression that conforms to the following constraints:
```
path: LayerName (DOT LayerName)+
LayerName: Identifier | STAR
```
Among them, STAR is "*" and DOT is ".".

We call the middle part of a path between two "." as a layer, and thus `root.A.B.C` is a path with four layers. 

It is worth noting that in the path, root is a reserved character, which is only allowed to appear at the beginning of the time series mentioned below. If root appears in other layers, it cannot be parsed and an error is reported.

### 3.1.5 Timeseries Path
The timeseries path is the core concept in IoTDB. A timeseries path can be thought of as the complete path of a sensor that produces the time series data. All timeseries paths in IoTDB must start with root and end with the sensor. A timeseries path can also be called a full path.

For example, if device1 of the vehicle type has a sensor named sensor1, its timeseries path can be expressed as: `root.vehicle.device1.sensor1`.

Note: The layer of timeseries paths supported by the current IoTDB must be greater than or equal to four (it will be changed to two in the future).

### 3.1.6 Prefix Path
The prefix path refers to the path where the prefix of a timeseries path is located. A prefix path contains all timeseries paths prefixed by the path. For example, suppose that we have three sensors: `root.vehicle.device1.sensor1`, `root.vehicle.device1.sensor2`, `root.vehicle.device2.sensor1`, the prefix path `root.vehicle.device1` contains two timeseries paths `root.vehicle.device1.sensor1` and `root.vehicle.device1.sensor2` while `root.vehicle.device2.sensor1` is excluded.

### 3.1.7 Path With Star
In order to make it easier and faster to express multiple timeseries paths or prefix paths, IoTDB provides users with the path pith star. "\*" can appear in any layer of the path. According to the position where "\*" appears, the path with star can be divided into two types:

"\*" appears at the end of the path;

"\*" appears in the middle of the path;

When "\*" appears at the end of the path, it represents ("\*")+, which is one or more layers of "\*". For example, `root.vehicle.device1.*` represents all paths prefixed by `root.vehicle.device1` with layers greater than or equal to 4, like `root.vehicle.device1.*`, `root.vehicle.device1.*.*`, `root.vehicle.device1.*.*.*`, etc.

When "\*" appears in the middle of the path, it represents "\*" itself, i.e., a layer. For example, `root.vehicle.*.sensor1` represents a 4-layer path which is prefixed with `root.vehicle` and suffixed with `sensor1`.   

Note: "\*" cannot be placed at the beginning of the path.

Note: A path with "\*" at the end has the same meaning as a prefix path, e.g., `root.vehicle.*` and `root.vehicle` is the same.

### 3.1.8 Timestamp
The timestamp is the time point at which a data arrives. IoTDB timestamps are divided into two types: LONG and DATETIME (including DATETIME-INPUT and DATETIME-DISPLAY). When a user enters a timestamp, he can use a LONG type timestamp or a DATETIME-INPUT type timestamp, where the support format of the DATETIME-INPUT type timestamp is shown in Table 3-1.

**Table 3-1 Support format of DATETIME-INPUT type timestamp**

|format|
|:---:|
|yyyy-MM-dd HH:mm:ss|
|yyyy/MM/dd HH:mm:ss|
|yyyy.MM.dd HH:mm:ss|
|yyyy-MM-dd'T'HH:mm:ss|
|yyyy/MM/dd'T'HH:mm:ss|
|yyyy.MM.dd'T'HH:mm:ss|
|yyyy-MM-dd HH:mm:ssZZ|
|yyyy/MM/dd HH:mm:ssZZ|
|yyyy.MM.dd HH:mm:ssZZ|
|yyyy-MM-dd'T'HH:mm:ssZZ|
|yyyy/MM/dd'T'HH:mm:ssZZ|
|yyyy.MM.dd'T'HH:mm:ssZZ|
|yyyy/MM/dd HH:mm:ss.SSS|
|yyyy-MM-dd HH:mm:ss.SSS|
|yyyy.MM.dd HH:mm:ss.SSS|
|yyyy/MM/dd'T'HH:mm:ss.SSS|
|yyyy-MM-dd'T'HH:mm:ss.SSS|
|yyyy.MM.dd'T'HH:mm:ss.SSS|
|yyyy-MM-dd HH:mm:ss.SSSZZ|
|yyyy/MM/dd HH:mm:ss.SSSZZ|
|yyyy.MM.dd HH:mm:ss.SSSZZ|
|yyyy-MM-dd'T'HH:mm:ss.SSSZZ|
|yyyy/MM/dd'T'HH:mm:ss.SSSZZ|
|yyyy.MM.dd'T'HH:mm:ss.SSSZZ|
|ISO8601 standard time format|

IoTDB can support LONG types and DATETIME-DISPLAY types when displaying timestamps. The DATETIME-DISPLAY type can support user-defined time formats. The syntax of the custom time format is shown in Table 3-2.

**Table 3-2 The syntax of the custom time format**

|Symbol|Meaning|Presentation|Examples|
|:---:|:---:|:---:|:---:|
|G|era|era|era|
|C|century of era (>=0)|	number|	20|
| Y	|year of era (>=0)|	year|	1996|
|||||
| x	|weekyear|	year|	1996|
| w	|week of weekyear|	number	|27|
| e	|day of week	|number|	2|
| E	|day of week	|text	|Tuesday; Tue|
|||||
| y|	year|	year|	1996|
| D	|day of year	|number|	189|
| M	|month of year	|month|	July; Jul; 07|
| d	|day of month	|number|	10|
|||||
| a	|halfday of day	|text	|PM|
| K	|hour of halfday (0~11)	|number|	0|
| h	|clockhour of halfday (1~12)	|number|	12|
|||||
| H	|hour of day (0~23)|	number|	0|
| k	|clockhour of day (1~24)	|number|	24|
| m	|minute of hour|	number|	30|
| s	|second of minute|	number|	55|
| S	|fraction of second	|millis|	978|
|||||
| z	|time zone	|text	|Pacific Standard Time; PST|
| Z	|time zone offset/id|	zone|	-0800; -08:00; America/Los_Angeles|
|||||
| '|	escape for text	|delimiter|	　|
| ''|	single quote|	literal	|'|

### 3.1.9 Value
The value of a time series is actually the value sent by a sensor to IoTDB. This value can be stored by IoTDB according to the data type. At the same time, users can select the compression mode and the corresponding coding mode according to the data type of this value. See Sections 3.2 and 3.3 of this document for details on data type and corresponding coding.

### 3.1.10 Point
A data point is made up of a timestamp value pair (timestamp, value).

### 3.1.11 Column
A column of data contains all values belonging to a time series and the timestamps corresponding to these values. When there are multiple columns of data, IoTDB merges the timestamps into multiple < timestamp-value > pairs (timestamp, value, value,...).

## 3.2 Data Type
IoTDB supports six data types in total: BOOLEAN (Boolean), INT32 (Integer), INT64 (Long Integer), FLOAT (Single Precision Floating Point), DOUBLE (Double Precision Floating Point), TEXT (String).

The time series of FLOAT and DOUBLE type can specify MAX_POINT_NUMBER, which is the number of digits after the decimal point of the floating point number, if the coding method is RLE or TS_2DIFF (see Section 3.3). Refer to Section 7.1.2.2 of this document for more information on how to specify. If MAX_POINT_NUMBER is not specified, the system will use float_precision in the configuration file “tsfile-format.properties” for configuration (refer to section 5.2.2.2.1 of this document for the configuration method).

When the data type of data input by the user in the system does not correspond to the data type of the time series, the system will report type errors. As shown below, the second-order difference coding does not support the Boolean type:

```
IoTDB> create timeseries root.ln.wf02.wt02.status WITH DATATYPE=BOOLEAN, ENCODING=TS_2DIFF
error: encoding TS_2DIFF does not support BOOLEAN
```

## 3.3 Coding 
In order to improve the efficiency of data storage, it is necessary to encode data during data writing, thereby reducing the amount of disk space used. In the process of writing and reading data, the amount of data involved in the I/O operations can be reduced to improve performance. IoTDB supports four coding methods for different types of data:

* PLAIN
* TS_2DIFF
* RLE
* GORILLA

### 3.3.1 PLAIN
PLAIN coding, the default coding mode, i.e, no coding, supports multiple data types. It has high compression and decompression efficiency while suffering from low space storage efficiency.

### 3.3.2 TS_2DIFF
Second-order differential coding is more suitable for coding monotonically increasing or decreasing sequence data, and is not recommended for sequence data with large fluctuations.

Second-order differential coding can also be used to encode floating-point numbers, but it is necessary to specify reserved decimal digits (MAX_POINT_NUMBER, see Section 7.1.2.2 of this document for more information on how to specify) when creating time series. It is more suitable for storing sequence data where floating-point values appear continuously, monotonously increase or decrease, and it is not suitable for storing sequence data with high precision requirements after the decimal point or with large fluctuations.

### 3.3.3 RLE
Run-length coding is more suitable for storing sequence with continuous integer values, and is not recommended for sequence data with most of the time different values.

Run-length coding can also be used to encode floating-point numbers, but it is necessary to specify reserved decimal digits (MAX_POINT_NUMBER, see Section 7.1.2.2 of this document for more information on how to specify) when creating time series. It is more suitable for storing sequence data where floating-point values appear continuously, monotonously increase or decrease, and it is not suitable for storing sequence data with high precision requirements after the decimal point or with large fluctuations.

### 3.3.4 GORILLA
GORILLA coding is more suitable for floating-point sequence with similar values and is not recommended for sequence data with large fluctuations.

### 3.3.5 Correspondence between data type and coding
The four codings described in the previous sections are applicable to different data types. If the correspondence is wrong, the time series cannot be created correctly. The correspondence between the data type and its supported codings is summarized in Table 3-3.

**Table 3-3 The correspondence between the data type and its supported codings**

|Data Type	|Supported Coding|
|:---:|:---:|
|BOOLEAN|	PLAIN, RLE|
|INT32	|PLAIN, RLE, TS_2DIFF|
|INT64	|PLAIN, RLE, TS_2DIFF|
|FLOAT	|PLAIN, RLE, TS_2DIFF, GORILLA|
|DOUBLE	|PLAIN, RLE, TS_2DIFF, GORILLA|
|TEXT	|PLAIN|

## 3.4 Compression
When the time series is written and encoded as binary data according to the specified type, IoTDB compresses the data using compression technology to further improve space storage efficiency. Although both encoding and compression are designed to improve storage efficiency, encoding techniques are usually only available for specific data types (e.g., second-order differential encoding is only suitable for INT32 or INT64 data type, and storing floating-point numbers requires multiplying them by 10m to convert to integers), after which the data is converted to a binary stream. The compression method (SNAPPY) compresses the binary stream, so the use of the compression method is no longer limited by the data type.

IoTDB allows you to specify the compression method of the column when creating a time series. IoTDB now supports two kinds of compression: UNCOMPRESSOR (no compression) and SNAPPY compression. The specified syntax for compression is detailed in section 7.1.2.2 of this document.




