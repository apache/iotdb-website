# Programming - Session
## Usage

### Dependencies

* JDK >= 1.8
* Maven >= 3.1

### How to package only client module

In root directory:
> mvn clean package -pl client -am -Dmaven.test.skip=true

### How to install in local maven repository

In root directory:
> mvn clean install -pl client -am -Dmaven.test.skip=true

### Using IoTDB Session with Maven

```java
<dependencies>
    <dependency>
      <groupId>org.apache.iotdb</groupId>
      <artifactId>iotdb-session</artifactId>
      <version>0.9.1</version>
    </dependency>
</dependencies>
```


### Examples with Session interfaces

Here we show the commonly used interfaces and their parameters in the Session:

#### Run the Session

* Initialize a Session

  	Session(String host, int port)

  	Session(String host, String port, String username, String password)

  	Session(String host, int port, String username, String password)

* Open a Session

  ​	Session.open()

* Close a Session

  ​	Session.close()

#### Operate the Session

* Set storage group

  ​	TSStatus setStorageGroup(String storageGroupId)

* Delete one or several storage groups

  ​	TSStatus deleteStorageGroup(String storageGroup)

  ```
  TSStatus deleteStorageGroups(List<String> storageGroups)
  ```

* Create one timeseries under a existing storage group

  ​	TSStatus createTimeseries(String path, TSDataType dataType, TSEncoding encoding, CompressionType compressor)

* Delete one or several timeseries

  ​	TSStatus deleteTimeseries(String path)

  ```
  TSStatus deleteTimeseries(List<String> paths)
  ```

* Delete one or several timeseries before a certain timestamp

  ​	TSStatus deleteData(String path, long time)

  ```
  TSStatus deleteData(List<String> paths, long time)
  ```

* Insert data into existing timeseries

  ```
  TSStatus insert(String deviceId, long time, List<String> measurements, List<String> values)
  ```

* Batch insertion into timeseries

  ​	TSExecuteBatchStatementResp insertBatch(RowBatch rowBatch)

#### Sample code

To get more information of the following interfaces, please view session/src/main/java/org/apache/iotdb/session/Session.java

The sample code of using these interfaces is in example/session/src/main/java/org/apache/iotdb/SessionExample.java，which provides an example of how to open an IoTDB session, execute a batch insertion.