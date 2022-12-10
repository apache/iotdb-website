(window.webpackJsonp=window.webpackJsonp||[]).push([[626],{1028:function(t,e,s){"use strict";s.r(e);var i=s(19),_=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"原生接口对比"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原生接口对比"}},[t._v("#")]),t._v(" 原生接口对比")]),t._v(" "),e("p",[t._v("此章节主要为Java原生接口与Python原生接口的差异性对比，主要为方便区分Java原生接口与Python原生的不同之处。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("序号")]),t._v(" "),e("th",[t._v("接口名称以及作用")]),t._v(" "),e("th",[t._v("Java接口函数")]),t._v(" "),e("th",[t._v("Python接口函数")]),t._v(" "),e("th",[e("div",{staticStyle:{width:"200pt"}},[t._v("接口对比说明")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("初始化Session")]),t._v(" "),e("td",[e("code",[t._v("Session.Builder.build(); Session.Builder().host(String host).port(int port).build(); Session.Builder().nodeUrls(List<String> nodeUrls).build(); Session.Builder().fetchSize(int fetchSize).username(String username).password(String password).thriftDefaultBufferSize(int thriftDefaultBufferSize).thriftMaxFrameSize(int thriftMaxFrameSize).enableRedirection(boolean enableCacheLeader).version(Version version).build();")])]),t._v(" "),e("td",[e("code",[t._v('Session(ip, port_, username_, password_,fetch_size=1024, zone_id="UTC+8")')])]),t._v(" "),e("td",[t._v("1.Python原生接口缺少使用默认配置初始化session     2.Python原生接口缺少指定多个可连接节点初始化session     3.Python原生接口缺失使用其他配置项初始化session")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("开启 Session")]),t._v(" "),e("td",[e("code",[t._v("void open() void open(boolean enableRPCCompression)")])]),t._v(" "),e("td",[e("code",[t._v("session.open(enable_rpc_compression=False)")])]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[t._v("关闭 Session")]),t._v(" "),e("td",[e("code",[t._v("void close()")])]),t._v(" "),e("td",[e("code",[t._v("session.close()")])]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("4")]),t._v(" "),e("td",[t._v("设置 Database")]),t._v(" "),e("td",[e("code",[t._v("void setStorageGroup(String storageGroupId)")])]),t._v(" "),e("td",[e("code",[t._v("session.set_storage_group(group_name)")])]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("5")]),t._v(" "),e("td",[t._v("删除 database")]),t._v(" "),e("td",[e("code",[t._v("void deleteStorageGroup(String storageGroup) void deleteStorageGroups(List<String> storageGroups)")])]),t._v(" "),e("td",[e("code",[t._v("session.delete_storage_group(group_name) session.delete_storage_groups(group_name_lst)")])]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("6")]),t._v(" "),e("td",[t._v("创建时间序列")]),t._v(" "),e("td",[e("code",[t._v("void createTimeseries(String path, TSDataType dataType,TSEncoding encoding, CompressionType compressor, Map<String, String> props,Map<String, String> tags, Map<String, String> attributes, String measurementAlias) void createMultiTimeseries(List<String> paths, List<TSDataType> dataTypes,List<TSEncoding> encodings, List<CompressionType> compressors,List<Map<String, String>> propsList, List<Map<String, String>> tagsList,List<Map<String, String>> attributesList, List<String> measurementAliasList)")])]),t._v(" "),e("td",[e("code",[t._v("session.create_time_series(ts_path, data_type, encoding, compressor,props=None, tags=None, attributes=None, alias=None) session.create_multi_time_series(ts_path_lst, data_type_lst, encoding_lst, compressor_lst,props_lst=None, tags_lst=None, attributes_lst=None, alias_lst=None)")])]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("7")]),t._v(" "),e("td",[t._v("创建对齐时间序列")]),t._v(" "),e("td",[e("code",[t._v("void createAlignedTimeseries(String prefixPath, List<String> measurements,List<TSDataType> dataTypes, List<TSEncoding> encodings,CompressionType compressor, List<String> measurementAliasList);")])]),t._v(" "),e("td",[e("code",[t._v("session.create_aligned_time_series(device_id, measurements_lst, data_type_lst, encoding_lst, compressor_lst)")])]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("8")]),t._v(" "),e("td",[t._v("删除时间序列")]),t._v(" "),e("td",[e("code",[t._v("void deleteTimeseries(String path) void deleteTimeseries(List<String> paths)")])]),t._v(" "),e("td",[e("code",[t._v("session.delete_time_series(paths_list)")])]),t._v(" "),e("td",[t._v("Python原生接口缺少删除一个时间序列的接口")])]),t._v(" "),e("tr",[e("td",[t._v("9")]),t._v(" "),e("td",[t._v("检测时间序列是否存在")]),t._v(" "),e("td",[e("code",[t._v("boolean checkTimeseriesExists(String path)")])]),t._v(" "),e("td",[e("code",[t._v("session.check_time_series_exists(path)")])]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("10")]),t._v(" "),e("td",[t._v("元数据模版")]),t._v(" "),e("td",[e("code",[t._v("public void createSchemaTemplate(Template template);")])]),t._v(" "),e("td"),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("11")]),t._v(" "),e("td",[t._v("插入Tablet")]),t._v(" "),e("td",[e("code",[t._v("void insertTablet(Tablet tablet) void insertTablets(Map<String, Tablet> tablets)")])]),t._v(" "),e("td",[e("code",[t._v("session.insert_tablet(tablet_) session.insert_tablets(tablet_lst)")])]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("12")]),t._v(" "),e("td",[t._v("插入Record")]),t._v(" "),e("td",[e("code",[t._v("void insertRecord(String prefixPath, long time, List<String> measurements,List<TSDataType> types, List<Object> values) void insertRecords(List<String> deviceIds,List<Long> times,List<List<String>> measurementsList,List<List<TSDataType>> typesList,List<List<Object>> valuesList) void insertRecordsOfOneDevice(String deviceId, List<Long> times,List<List<Object>> valuesList)")])]),t._v(" "),e("td",[e("code",[t._v("session.insert_record(device_id, timestamp, measurements_, data_types_, values_) session.insert_records(device_ids_, time_list_, measurements_list_, data_type_list_, values_list_) session.insert_records_of_one_device(device_id, time_list, measurements_list, data_types_list, values_list)")])]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("13")]),t._v(" "),e("td",[t._v("带有类型推断的写入")]),t._v(" "),e("td",[e("code",[t._v("void insertRecord(String prefixPath, long time, List<String> measurements, List<String> values) void insertRecords(List<String> deviceIds, List<Long> times,List<List<String>> measurementsList, List<List<String>> valuesList) void insertStringRecordsOfOneDevice(String deviceId, List<Long> times,List<List<String>> measurementsList, List<List<String>> valuesList)")])]),t._v(" "),e("td",[e("code",[t._v("session.insert_str_record(device_id, timestamp, measurements, string_values)")])]),t._v(" "),e("td",[t._v("1.Python原生接口缺少插入多个  Record的接口     2.Python原生接口缺少插入同属于一个 device 的多个 Record")])]),t._v(" "),e("tr",[e("td",[t._v("14")]),t._v(" "),e("td",[t._v("对齐时间序列的写入")]),t._v(" "),e("td",[e("code",[t._v("insertAlignedRecord insertAlignedRecords insertAlignedRecordsOfOneDevice insertAlignedStringRecordsOfOneDevice insertAlignedTablet insertAlignedTablets")])]),t._v(" "),e("td",[e("code",[t._v("insert_aligned_record insert_aligned_records insert_aligned_records_of_one_device insert_aligned_tablet insert_aligned_tablets")])]),t._v(" "),e("td",[t._v("Python原生接口缺少带有判断类型的对齐时间序列的写入")])]),t._v(" "),e("tr",[e("td",[t._v("15")]),t._v(" "),e("td",[t._v("数据删除")]),t._v(" "),e("td",[e("code",[t._v("void deleteData(String path, long endTime) void deleteData(List<String> paths, long endTime)")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("1.Python原生接口缺少删除一条数据的接口     2.Python原生接口缺少删除多条数据的接口")])]),t._v(" "),e("tr",[e("td",[t._v("16")]),t._v(" "),e("td",[t._v("数据查询")]),t._v(" "),e("td",[e("code",[t._v("SessionDataSet executeRawDataQuery(List<String> paths, long startTime, long endTime) SessionDataSet executeLastDataQuery(List<String> paths, long LastTime)")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("1.Python原生接口缺少原始数据查询的接口     2.Python原生接口缺少查询最后一条时间戳大于等于某个时间点的数据的接口")])]),t._v(" "),e("tr",[e("td",[t._v("17")]),t._v(" "),e("td",[t._v("IoTDB-SQL 接口-查询语句")]),t._v(" "),e("td",[e("code",[t._v("SessionDataSet executeQueryStatement(String sql)")])]),t._v(" "),e("td",[e("code",[t._v("session.execute_query_statement(sql)")])]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("18")]),t._v(" "),e("td",[t._v("IoTDB-SQL 接口-非查询语句")]),t._v(" "),e("td",[e("code",[t._v("void executeNonQueryStatement(String sql)")])]),t._v(" "),e("td",[e("code",[t._v("session.execute_non_query_statement(sql)")])]),t._v(" "),e("td")]),t._v(" "),e("tr",[e("td",[t._v("19")]),t._v(" "),e("td",[t._v("测试接口")]),t._v(" "),e("td",[e("code",[t._v("void testInsertRecord(String deviceId, long time, List<String> measurements, List<String> values) void testInsertRecord(String deviceId, long time, List<String> measurements,List<TSDataType> types, List<Object> values) void testInsertRecords(List<String> deviceIds, List<Long> times,List<List<String>> measurementsList, List<List<String>> valuesList) void testInsertRecords(List<String> deviceIds, List<Long> times,List<List<String>> measurementsList, List<List<TSDataType>> typesList,List<List<Object>> valuesList) void testInsertTablet(Tablet tablet) void testInsertTablets(Map<String, Tablet> tablets)")])]),t._v(" "),e("td",[t._v("Python  客户端对测试的支持是基于testcontainers库")]),t._v(" "),e("td",[t._v("Python接口无原生的测试接口")])]),t._v(" "),e("tr",[e("td",[t._v("20")]),t._v(" "),e("td",[t._v("针对原生接口的连接池")]),t._v(" "),e("td",[e("code",[t._v("SessionPool")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Python接口无针对原生接口的连接池")])]),t._v(" "),e("tr",[e("td",[t._v("21")]),t._v(" "),e("td",[t._v("集群信息相关的接口")]),t._v(" "),e("td",[e("code",[t._v("iotdb-thrift-cluster")])]),t._v(" "),e("td"),t._v(" "),e("td",[t._v("Python接口不支持集群信息相关的接口")])])])])])}),[],!1,null,null,null);e.default=_.exports}}]);