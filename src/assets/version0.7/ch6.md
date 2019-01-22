<!-- TOC -->

- [6.1 Cli/shell tool](#61-clishell-tool)
    - [6.1.1 Cli/Shell Running Mode](#611-clishell-running-mode)
    - [6.1.2 Cli/Shell operation parameters](#612-clishell-operation-parameters)
- [Tsfile-Spark-Connector User Guide](#tsfile-spark-connector-user-guide)
    - [1. Dependency & Versions](#1-dependency--versions)
    - [2. Building](#2-building)
    - [3. TsFile Type <=> SparkSQL type](#3-tsfile-type--sparksql-type)
    - [4. TsFile Schema <-> SparkSQL Table Structure](#4-tsfile-schema---sparksql-table-structure)
        - [4.1. the default way](#41-the-default-way)
        - [4.2. unfolding delta_object column](#42-unfolding-delta_object-column)
    - [5. Examples](#5-examples)
        - [5.1 Scala API](#51-scala-api)
        - [5.2 spark-shell](#52-spark-shell)
            - [5.2.1 Start Spark](#521-start-spark)
                - [5.2.1.1 Local Mode](#5211-local-mode)
                - [5.2.1.2 Distributed Mode](#5212-distributed-mode)

<!-- /TOC -->
# 6.1 Cli/shell tool
IoTDB provides CLI / shell tools for users to start client and server programs. Here's how each CLI / shell tool works and its parameters,where \$IOTDB\_HOME represents the path of the IoTDB installation directory.

## 6.1.1 Cli/Shell Running Mode
After installation, there is a default user in IoTDB: root, and the default password is root. Users can use this user name to try to run the IoTDB client to test whether the server has started properly. The client startup script is the start-client script under the \$IOTDB\_HOME/bin folder. When starting the script, you need to specify the IP and PORT to run. The following is an example where the server is started locally and the user has not changed the running port number. The default port is 6667. If the user attempts to connect to the remote server or changes the port number of the server running, use the server's IP and PORT at - h and - p entries.

The Linux and MacOS system startup commands are as follows:
```
  Shell > \bin\start-client.sh -h 127.0.0.1 -p 6667 -u root -pw root
```
The Windows system startup commands are as follows:
```
  Shell > \bin\start-client.bat -h 127.0.0.1 -p 6667 -u root -pw root
```
After pressing Enter, the client can be started successfully. Successful startup occurs after startup as shown in the figure6.1.

![](./fig/6.1.jpg)

figure 6.1 Client login success status

After successful connection, users can use Client to input SQL commands to operate IoTDB Server.

Enter “quit” or “exit” to exit Client to end the session, and Client outputs “quit normally” to indicate successful exit. As shown in the figure6.2

![](./fig/6.2.jpg)

figure6.2 client exit success status

## 6.1.2 Cli/Shell operation parameters

|Parameter name|Parameter type|Whether the parameter is required| Explaination| Example |
|:---|:---|:---|:---|:---|
|-disableIS08601 |No parameters | No |If this parameter is set, IoTDB will print the timestamp in digital form|-disableIS08601|
|-h <`host`> |string with no quotation marks  required|Yes|The IP address of the IoTDB client connecting to the IoTDB server|-h 10.129.187.21|
|-help|No parameters|No|Print help information for IoTDB|-help|
|-p <`port`>|int|Yes|The port number of the IoTDB used to connect server. IoTDB runs on port 6667 by default|-p 6667|
|-pw <`password`>|string with no quotation marks  required|No|The password used for IoTDB to connect to the server. If no password is entered, IoTDB will prompt for the password on the Cli side|-pw root|
|-u <`username`>|string with no quotation marks  required|Yes|User name used for IoTDB to connect to the server|-u root|
|-maxPRC <`maxPrintRowCount`>|int|No|Set the maximum number of rows that IoTDB returns to the client command line|-maxPRC 10|

Following is a client command which connects the host with IP 10.129.187.21, port 6667, user name “root”, password “root”, and prints the timestamp in digital form. The maximum number of lines displayed on the IoTDB command line is 10.

The Linux and MacOS system startup commands are as follows:
```
  Shell >./bin/start-client.sh -h 10.129.187.21 -p 6667 -u root -pw root -disableIS08601 -maxPRC 10
```
The Windows system startup commands are as follows:
```
  Shell > \bin\start-client.bat -h 10.129.187.21 -p 6667 -u root -pw root -disableIS08601 -maxPRC 10
```
# Tsfile-Spark-Connector User Guide

TsFile-Spark-Connector implements the support of Spark for external data sources of Tsfile type. This enables users to read, write and query Tsfile by Spark.

## 1. Dependency & Versions

The versions required for Spark and Java are as follow:

| Spark Version | Scala Version | Java Version | TsFile |
| ------------- | ------------- | ------------ |------------ |
| `2.0+`        | `2.11`        | `1.8`        | `0.4.0`|

For more information about how to download and use TsFile, please see the following link: https://github.com/thulab/tsfile.git.

ATTENTION: Please check the jar packages in the root directory  of your spark and replace libthrift-0.9.2.jar and libfb303-0.9.2.jar with libthrift-0.9.1.jar and libfb303-0.9.1.jar respectively.

## 2. Building

```
mvn clean scala:compile compile package
```

## 3. TsFile Type <=> SparkSQL type

This library uses the following mapping the data type from TsFile to SparkSQL:

| TsFile 		   | SparkSQL|
| --------------| -------------- |
| BOOLEAN       		   | BooleanType    |
| INT32       		   | IntegerType    |
| INT64       		   | LongType       |
| FLOAT       		   | FloatType      |
| DOUBLE      		   | DoubleType     |
| ENUMS     		 		| StringType     |
| TEXT      				| StringType     |


## 4. TsFile Schema <-> SparkSQL Table Structure

The way to display TsFile is related to TsFile Schema. Take the following TsFile structure as an example: There are three Measurements in the Schema of TsFile: sensor1, sensor2, and sensor3. The existing data in the file is as follows:

<center>
<table style="text-align:center">
	<tr><th colspan="6">delta_object:root.car.turbine1</th></tr>
	<tr><th colspan="2">sensor_1</th><th colspan="2">sensor_2</th><th colspan="2">sensor_3</th></tr>
	<tr><th>time</th><th>value</td><th>time</th><th>value</td><th>time</th><th>value</td>
	<tr><td>1</td><td>1.2</td><td>1</td><td>20</td><td>2</td><td>50</td></tr>
	<tr><td>3</td><td>1.4</td><td>2</td><td>20</td><td>4</td><td>51</td></tr>
	<tr><td>5</td><td>1.1</td><td>3</td><td>21</td><td>6</td><td>52</td></tr>
	<tr><td>7</td><td>1.8</td><td>4</td><td>20</td><td>8</td><td>53</td></tr>
</table>
<span>A set of time-series data</span>
</center>

There are two ways to show it out:

### 4.1. the default way

Two columns will be created to store the full path of the device: time(LongType) and delta_object(StringType).

- `time` : Timestamp, LongType
- `delta_object` : Delta_object ID, StringType

Next, a column is created for each Measurement to store the specific data. The SparkSQL table structure is as follows:

<center>
	<table style="text-align:center">
	<tr><th>time(LongType)</th><th> delta_object(StringType)</th><th>sensor_1(FloatType)</th><th>sensor_2(IntType)</th><th>sensor_3(IntType)</th></tr>
	<tr><td>1</td><td> root.car.turbine1 </td><td>1.2</td><td>20</td><td>null</td></tr>
	<tr><td>2</td><td> root.car.turbine1 </td><td>null</td><td>20</td><td>50</td></tr>
	<tr><td>3</td><td> root.car.turbine1 </td><td>1.4</td><td>21</td><td>null</td></tr>
	<tr><td>4</td><td> root.car.turbine1 </td><td>null</td><td>20</td><td>51</td></tr>
	<tr><td>5</td><td> root.car.turbine1 </td><td>1.1</td><td>null</td><td>null</td></tr>
	<tr><td>6</td><td> root.car.turbine1 </td><td>null</td><td>null</td><td>52</td></tr>
	<tr><td>7</td><td> root.car.turbine1 </td><td>1.8</td><td>null</td><td>null</td></tr>
	<tr><td>8</td><td> root.car.turbine1 </td><td>null</td><td>null</td><td>53</td></tr>
	</table>

</center>


### 4.2. unfolding delta_object column

Expand the device column by "." into multiple columns, ignoring the root directory "root". Convenient for richer aggregation operations. If the user wants to use this display way, the parameter "delta_object_name" needs to be set in the table creation statement (refer to Example 5 in Section 5.1 of this manual), as in this example, parameter "delta_object_name" is set to "root.device.turbine". The number of path layers needs to be one-to-one. At this point, one column is created for each layer of the device path except the "root" layer. The column name is the name in the parameter and the value is the name of the corresponding layer of the device. Next, one column will be created for each Measurement to store the specific data.

Then The SparkSQL Table Structure is as follow:

<center>
	<table style="text-align:center">
	<tr><th>time(LongType)</th><th> device(StringType)</th><th> turbine(StringType)</th><th>sensor_1(FloatType)</th><th>sensor_2(IntType)</th><th>sensor_3(IntType)</th></tr>
	<tr><td>1</td><td> car </td><td> turbine1 </td><td>1.2</td><td>20</td><td>null</td></tr>
	<tr><td>2</td><td> car </td><td> turbine1 </td><td>null</td><td>20</td><td>50</td></tr>
	<tr><td>3</td><td> car </td><td> turbine1 </td><td>1.4</td><td>21</td><td>null</td></tr>
	<tr><td>4</td><td> car </td><td> turbine1 </td><td>null</td><td>20</td><td>51</td></tr>
	<tr><td>5</td><td> car </td><td> turbine1 </td><td>1.1</td><td>null</td><td>null</td></tr>
	<tr><td>6</td><td> car </td><td> turbine1 </td><td>null</td><td>null</td><td>52</td></tr>
	<tr><td>7</td><td> car </td><td> turbine1 </td><td>1.8</td><td>null</td><td>null</td></tr>
	<tr><td>8</td><td> car </td><td> turbine1 </td><td>null</td><td>null</td><td>53</td></tr>
	</table>

</center>

TsFile-Spark-Connector can display one or more TsFiles as a table in SparkSQL By SparkSQL. It also allows users to specify a single directory or use wildcards to match multiple directories. If there are multiple TsFiles, the union of the measurements in all TsFiles will be retained in the table, and the measurement with the same name will have the same data type by default. Note that if there is a situation with the same name but different data types, TsFile-Spark-Connector will not guarantee the correctness of the results.

The writing process is to write a DataFrame as one or more TsFiles. By default, two columns need to be included: time and delta_object. The rest of the columns are used as Measurement. If user wants to write the second table structure back to TsFile, user can set the "delta_object_name" parameter(refer to Section 5.1 of Section 5.1 of this manual).


## 5. Examples

The path of 'test.tsfile' used in the following examples is "data/test.tsfile". Please upload 'test.tsfile' to hdfs in advance and the directory is "/test.tsfile".


### 5.1 Scala API

* **Example 1**

	```scala
	import cn.edu.tsinghua.tsfile._
	
	//read data in TsFile and create a table
	val df = spark.read.tsfile("/test.tsfile")
	df.createOrReplaceTempView("tsfile_table")
	
	//query with filter
	val newDf = spark.sql("select * from tsfile_table where s1 > 1.2").cache()
	
	newDf.show()
	```

* **Example 2**

	```scala
	val df = spark.read
       .format("cn.edu.tsinghua.tsfile")
       .load("/test.tsfile ")
	df.filter("time < 10").show()
	```

* **Example 3**

	```scala
	//create a table in SparkSQL and build relation with a TsFile
	spark.sql("create temporary view tsfile_table using cn.edu.tsinghua.tsfile options(path = \"test.ts\")")
	
	spark.sql("select * from tsfile_table where s1 > 1.2").show()
	```
	
* **Example 4(using options to read)**

	```scala
	import cn.edu.tsinghua.tsfile._
	
	val df = spark.read.option("delta_object_name", "root.device.turbine").tsfile("/test.tsfile")
	     
	//create a table in SparkSQL and build relation with a TsFile
	df.createOrReplaceTempView("tsfile_table")
	 
	spark.sql("select * from tsfile_table where turbine = 'd1' and device = 'car' and time < 10").show()
	```

* **Example 5(write)**

	```scala
	import cn.edu.tsinghua.tsfile._
	
	val df = spark.read.tsfile("/test.tsfile").write.tsfile("/out")
	```
	
* **Example 6(using options to write)**

	```scala
	import cn.edu.tsinghua.tsfile._
	
	val df = spark.read.option("delta_object_name", "root.device.turbine").tsfile("/test.tsfile")
	     
	df.write.option("delta_object_name", "root.device.turbine").tsfile("/out")
	```


### 5.2 spark-shell
#### 5.2.1 Start Spark
##### 5.2.1.1 Local Mode
```
./spark-2.0.1-bin-hadoop2.7/bin/spark-shell  --jars  tsfile-0.4.0.jar,tsfile-spark-connector-0.4.0.jar
```
ATTENTION:

* Please replace "spark-2.0.1-bin-hadoop2.7/bin/spark-shell" with the real path of your spark-shell.
* Multiple jar packages are separated by commas without any spaces.
* The latest version used is v0.4.0.
* See https://github.com/thulab/tsfile.git for how to get tsfile-0.4.0.jar. The relevant command is: mvn clean package -Dmaven.test.skip=true.

##### 5.2.1.2 Distributed Mode
```
. /spark-2.0.1-bin-hadoop2.7/bin/spark-shell  --jars  tsfile-0.4.0.jar,tsfile-spark-connector-0.4.0.jar  --master spark://ip:7077
```
That is, the spark cluster is connected by spark-shell.
