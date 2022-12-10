(window.webpackJsonp=window.webpackJsonp||[]).push([[251],{652:function(e,s,t){"use strict";t.r(s);var a=t(19),i=Object(a.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"java-native-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-native-api"}},[e._v("#")]),e._v(" Java Native API")]),e._v(" "),s("h3",{attrs:{id:"dependencies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dependencies"}},[e._v("#")]),e._v(" Dependencies")]),e._v(" "),s("ul",[s("li",[e._v("JDK >= 1.8")]),e._v(" "),s("li",[e._v("Maven >= 3.6")])]),e._v(" "),s("h3",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),s("p",[e._v("In root directory:")]),e._v(" "),s("blockquote",[s("p",[e._v("mvn clean install -pl session -am -DskipTests")])]),e._v(" "),s("h3",{attrs:{id:"using-iotdb-java-native-api-with-maven"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-iotdb-java-native-api-with-maven"}},[e._v("#")]),e._v(" Using IoTDB Java Native API with Maven")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("<dependencies>\n    <dependency>\n      <groupId>org.apache.iotdb</groupId>\n      <artifactId>iotdb-session</artifactId>\n      <version>0.12.0</version>\n    </dependency>\n</dependencies>\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("h3",{attrs:{id:"native-apis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#native-apis"}},[e._v("#")]),e._v(" Native APIs")]),e._v(" "),s("p",[e._v("Here we show the commonly used interfaces and their parameters in the Native API:")]),e._v(" "),s("ul",[s("li",[e._v("Initialize a Session")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Session(String host, int rpcPort)\n\nSession(String host, String rpcPort, String username, String password)\n\nSession(String host, int rpcPort, String username, String password)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("ul",[s("li",[e._v("Open a Session")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Session.open()\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ul",[s("li",[e._v("Close a Session")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("​Session.close()\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ul",[s("li",[e._v("Set storage group")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("void setStorageGroup(String storageGroupId)    \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ul",[s("li",[e._v("Delete one or several storage groups")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("void deleteStorageGroup(String storageGroup)\nvoid deleteStorageGroups(List<String> storageGroups)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("ul",[s("li",[e._v("Create one or multiple timeseries")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("void createTimeseries(String path, TSDataType dataType,\n      TSEncoding encoding, CompressionType compressor, Map<String, String> props,\n      Map<String, String> tags, Map<String, String> attributes, String measurementAlias)\n      \nvoid createMultiTimeseries(List<String> paths, List<TSDataType> dataTypes,\n      List<TSEncoding> encodings, List<CompressionType> compressors,\n      List<Map<String, String>> propsList, List<Map<String, String>> tagsList,\n      List<Map<String, String>> attributesList, List<String> measurementAliasList)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])]),s("ul",[s("li",[e._v("Delete one or several timeseries")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("void deleteTimeseries(String path)\nvoid deleteTimeseries(List<String> paths)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("ul",[s("li",[e._v("Delete data before or equal to a timestamp of one or several timeseries")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("void deleteData(String path, long time)\nvoid deleteData(List<String> paths, long time)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("ul",[s("li",[e._v("Insert a Record，which contains multiple measurement value of a device at a timestamp. Without type info the server has to do type inference, which may cost some time")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("void insertRecord(String deviceId, long time, List<String> measurements, List<String> values)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ul",[s("li",[e._v("Insert a Tablet，which is multiple rows of a device, each row has the same measurements")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("void insertTablet(Tablet tablet)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ul",[s("li",[e._v("Insert multiple Tablets")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("void insertTablets(Map<String, Tablet> tablet)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ul",[s("li",[e._v("Insert multiple Records. Without type info the server has to do type inference, which may cost some time")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("void insertRecords(List<String> deviceIds, List<Long> times, \n                   List<List<String>> measurementsList, List<List<String>> valuesList)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("ul",[s("li",[e._v("Insert a Record，which contains multiple measurement value of a device at a timestamp. With type info the server has no need to do type inference, which leads a better performance")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("void insertRecord(String deviceId, long time, List<String> measurements,\n   List<TSDataType> types, List<Object> values)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("ul",[s("li",[e._v("Insert multiple Records. With type info the server has no need to do type inference, which leads a better performance")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("void insertRecords(List<String> deviceIds, List<Long> times,\n    List<List<String>> measurementsList, List<List<TSDataType>> typesList,\n    List<List<Object>> valuesList)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("ul",[s("li",[e._v("Insert multiple Records that belong to the same device.\nWith type info the server has no need to do type inference, which leads a better performance")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("void insertRecordsOfOneDevice(String deviceId, List<Long> times,\n    List<List<String>> measurementsList, List<List<TSDataType>> typesList,\n    List<List<Object>> valuesList)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("ul",[s("li",[e._v("Raw data query. Time interval include startTime and exclude endTime")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("SessionDataSet executeRawDataQuery(List<String> paths, long startTime, long endTime)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ul",[s("li",[e._v("Execute query statement")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("SessionDataSet executeQueryStatement(String sql)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ul",[s("li",[e._v("Execute non query statement")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("void executeNonQueryStatement(String sql)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h3",{attrs:{id:"native-apis-for-profiling-network-cost"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#native-apis-for-profiling-network-cost"}},[e._v("#")]),e._v(" Native APIs for profiling network cost")]),e._v(" "),s("ul",[s("li",[e._v("Test the network and client cost of insertRecords. This method NOT insert data into database and server just return after accept the request, this method should be used to test other time cost in client")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("void testInsertRecords(List<String> deviceIds, List<Long> times,\n              List<List<String>> measurementsList, List<List<String>> valuesList)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("or")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("void testInsertRecords(List<String> deviceIds, List<Long> times,\n    List<List<String>> measurementsList, List<List<TSDataType>> typesList,\n    List<List<Object>> valuesList)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("ul",[s("li",[e._v("Test the network and client cost of insertRecordsOfOneDevice.\nThis method NOT insert data into database and server just return after accept the request,\nthis method should be used to test other time cost in client")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("void testInsertRecordsOfOneDevice(String deviceId, List<Long> times,\n    List<List<String>> measurementsList, List<List<TSDataType>> typesList,\n    List<List<Object>> valuesList)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("ul",[s("li",[e._v("Test the network and client cost of insertRecord. This method NOT insert data into database and server just return after accept the request, this method should be used to test other time cost in client")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("void testInsertRecord(String deviceId, long time, List<String> measurements, List<String> values)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("or")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("void testInsertRecord(String deviceId, long time, List<String> measurements,\n    List<TSDataType> types, List<Object> values)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("ul",[s("li",[e._v("Test the network and client cost of insertTablet. This method NOT insert data into database and server just return after accept the request, this method should be used to test other time cost in client")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("void testInsertTablet(Tablet tablet)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h3",{attrs:{id:"coding-example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#coding-example"}},[e._v("#")]),e._v(" Coding example")]),e._v(" "),s("p",[e._v("To get more information of the following interfaces, please view session/src/main/java/org/apache/iotdb/session/Session.java")]),e._v(" "),s("p",[e._v("The sample code of using these interfaces is in example/session/src/main/java/org/apache/iotdb/SessionExample.java，which provides an example of how to open an IoTDB session, execute a batch insertion.")]),e._v(" "),s("h3",{attrs:{id:"session-pool-for-native-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#session-pool-for-native-api"}},[e._v("#")]),e._v(" Session Pool for Native API")]),e._v(" "),s("p",[e._v("We provide a connection pool (`SessionPool) for Native API.\nUsing the interface, you need to define the pool size.")]),e._v(" "),s("p",[e._v("If you can not get a session connection in 60 seconds, there is a warning log but the program will hang.")]),e._v(" "),s("p",[e._v("If a session has finished an operation, it will be put back to the pool automatically.\nIf a session connection is broken, the session will be removed automatically and the pool will try\nto create a new session and redo the operation.")]),e._v(" "),s("p",[e._v("For query operations:")]),e._v(" "),s("ol",[s("li",[e._v("When using SessionPool to query data, the result set is "),s("code",[e._v("SessionDataSetWrapper")]),e._v(";")]),e._v(" "),s("li",[e._v("Given a "),s("code",[e._v("SessionDataSetWrapper")]),e._v(", if you have not scanned all the data in it and stop to use it,\nyou have to call "),s("code",[e._v("SessionPool.closeResultSet(wrapper)")]),e._v(" manually;")]),e._v(" "),s("li",[e._v("When you call "),s("code",[e._v("hasNext()")]),e._v(" and "),s("code",[e._v("next()")]),e._v(" of a "),s("code",[e._v("SessionDataSetWrapper")]),e._v(" and there is an exception, then\nyou have to call "),s("code",[e._v("SessionPool.closeResultSet(wrapper)")]),e._v(" manually;")]),e._v(" "),s("li",[e._v("You can call "),s("code",[e._v("getColumnNames()")]),e._v(" of "),s("code",[e._v("SessionDataSetWrapper")]),e._v(" to get the column names of query result;")])]),e._v(" "),s("p",[e._v("Examples: "),s("code",[e._v("session/src/test/java/org/apache/iotdb/session/pool/SessionPoolTest.java")])]),e._v(" "),s("p",[e._v("Or "),s("code",[e._v("example/session/src/main/java/org/apache/iotdb/SessionPoolExample.java")])]),e._v(" "),s("h3",{attrs:{id:"new-interfaces"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new-interfaces"}},[e._v("#")]),e._v(" New Interfaces")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("void open(boolean enableRPCCompression)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Open a session, with a parameter to specify whether to enable RPC compression.\nPlease pay attention that this RPC compression status of client must comply with the status of IoTDB server")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("void insertRecord(String deviceId, long time, List<String> measurements,\n      List<TSDataType> types, List<Object> values)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("Insert one record, in a way that user has to provide the type information of each measurement, which is different from the original insertRecord() interface.\nThe values should be provided in their primitive types. This interface is more proficient than the one without type parameters.")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("void insertRecords(List<String> deviceIds, List<Long> times, List<List<String>> measurementsList, \n                   List<List<TSDataType>> typesList, List<List<Object>> valuesList)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("Insert multiple records with type parameters. This interface is more proficient than the one without type parameters.")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("void insertTablet(Tablet tablet, boolean sorted)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v('An additional insertTablet() interface that providing a "sorted" parameter indicating if the tablet is in order. A sorted tablet may accelerate the insertion process.')]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("void insertTablets(Map<String, Tablet> tablets)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("A new insertTablets() for inserting multiple tablets.")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("void insertTablets(Map<String, Tablet> tablets, boolean sorted)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v('insertTablets() with an additional "sorted" parameter.')]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("void testInsertRecord(String deviceId, long time, List<String> measurements, List<TSDataType> types, \n                      List<Object> values)\nvoid testInsertRecords(List<String> deviceIds, List<Long> times, List<List<String>> measurementsList, \n                      List<List<TSDataType>> typesList, List<List<Object>> valuesList)\nvoid testInsertTablet(Tablet tablet, boolean sorted)\nvoid testInsertTablets(Map<String, Tablet> tablets)\nvoid testInsertTablets(Map<String, Tablet> tablets, boolean sorted)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("p",[e._v("The above interfaces are newly added to test responsiveness of new insert interfaces.")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("void createTimeseries(String path, TSDataType dataType, TSEncoding encoding, CompressionType compressor, \t\n                      Map<String, String> props, Map<String, String> tags, Map<String, String> attributes, \n                      String measurementAlias)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("Create a timeseries with path, datatype, encoding and compression. Additionally, users can provide props, tags, attributes and measurementAlias。")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("void createMultiTimeseries(List<String> paths, List<TSDataType> dataTypes, List<TSEncoding> encodings, \n                           List<CompressionType> compressors, List<Map<String, String>> propsList, \n                           List<Map<String, String>> tagsList, List<Map<String, String>> attributesList, \n                           List<String> measurementAliasList)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("Create multiple timeseries with a single method. Users can provide props, tags, attributes and measurementAlias as well for detailed timeseries information.")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("boolean checkTimeseriesExists(String path)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Add a method to check whether the specific timeseries exists.")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("public Session(String host, int rpcPort, String username, String password,\n      boolean isEnableCacheLeader)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("Open a session and specifies whether the Leader cache is enabled. Note that this interface improves performance for distributed IoTDB, but adds less cost to the client for stand-alone IoTDB.")])])}),[],!1,null,null,null);s.default=i.exports}}]);