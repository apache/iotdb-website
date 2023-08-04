import{_ as t,o as e,c as s,a as d,f as i}from"./app-e22bde73.js";const o={},r=i('<h1 id="原生接口对比" tabindex="-1"><a class="header-anchor" href="#原生接口对比" aria-hidden="true">#</a> 原生接口对比</h1><p>此章节主要为Java原生接口与Python原生接口的差异性对比，主要为方便区分Java原生接口与Python原生的不同之处。</p><table><thead><tr><th>序号</th><th>接口名称以及作用</th><th>Java接口函数</th><th>Python接口函数</th><th><div style="width:200pt;">接口对比说明</div></th></tr></thead><tbody><tr><td>1</td><td>初始化Session</td><td><code>Session.Builder.build(); Session.Builder().host(String host).port(int port).build(); Session.Builder().nodeUrls(List&lt;String&gt; nodeUrls).build(); Session.Builder().fetchSize(int fetchSize).username(String username).password(String password).thriftDefaultBufferSize(int thriftDefaultBufferSize).thriftMaxFrameSize(int thriftMaxFrameSize).enableRedirection(boolean enableCacheLeader).version(Version version).build();</code></td><td><code>Session(ip, port_, username_, password_,fetch_size=1024, zone_id=&quot;UTC+8&quot;)</code></td><td>1.Python原生接口缺少使用默认配置初始化session 2.Python原生接口缺少指定多个可连接节点初始化session 3.Python原生接口缺失使用其他配置项初始化session</td></tr><tr><td>2</td><td>开启 Session</td><td><code>void open() void open(boolean enableRPCCompression)</code></td><td><code>session.open(enable_rpc_compression=False)</code></td><td></td></tr><tr><td>3</td><td>关闭 Session</td><td><code>void close()</code></td><td><code>session.close()</code></td><td></td></tr><tr><td>4</td><td>设置 Database</td><td><code>void setStorageGroup(String storageGroupId)</code></td><td><code>session.set_storage_group(group_name)</code></td><td></td></tr><tr><td>5</td><td>删除 database</td><td><code>void deleteStorageGroup(String storageGroup) void deleteStorageGroups(List&lt;String&gt; storageGroups)</code></td><td><code>session.delete_storage_group(group_name) session.delete_storage_groups(group_name_lst)</code></td><td></td></tr><tr><td>6</td><td>创建时间序列</td><td><code>void createTimeseries(String path, TSDataType dataType,TSEncoding encoding, CompressionType compressor, Map&lt;String, String&gt; props,Map&lt;String, String&gt; tags, Map&lt;String, String&gt; attributes, String measurementAlias) void createMultiTimeseries(List&lt;String&gt; paths, List&lt;TSDataType&gt; dataTypes,List&lt;TSEncoding&gt; encodings, List&lt;CompressionType&gt; compressors,List&lt;Map&lt;String, String&gt;&gt; propsList, List&lt;Map&lt;String, String&gt;&gt; tagsList,List&lt;Map&lt;String, String&gt;&gt; attributesList, List&lt;String&gt; measurementAliasList)</code></td><td><code>session.create_time_series(ts_path, data_type, encoding, compressor,props=None, tags=None, attributes=None, alias=None) session.create_multi_time_series(ts_path_lst, data_type_lst, encoding_lst, compressor_lst,props_lst=None, tags_lst=None, attributes_lst=None, alias_lst=None)</code></td><td></td></tr><tr><td>7</td><td>创建对齐时间序列</td><td><code>void createAlignedTimeseries(String prefixPath, List&lt;String&gt; measurements,List&lt;TSDataType&gt; dataTypes, List&lt;TSEncoding&gt; encodings,CompressionType compressor, List&lt;String&gt; measurementAliasList);</code></td><td><code>session.create_aligned_time_series(device_id, measurements_lst, data_type_lst, encoding_lst, compressor_lst)</code></td><td></td></tr><tr><td>8</td><td>删除时间序列</td><td><code>void deleteTimeseries(String path) void deleteTimeseries(List&lt;String&gt; paths)</code></td><td><code>session.delete_time_series(paths_list)</code></td><td>Python原生接口缺少删除一个时间序列的接口</td></tr><tr><td>9</td><td>检测时间序列是否存在</td><td><code>boolean checkTimeseriesExists(String path)</code></td><td><code>session.check_time_series_exists(path)</code></td><td></td></tr><tr><td>10</td><td>元数据模版</td><td><code>public void createSchemaTemplate(Template template);</code></td><td></td><td></td></tr><tr><td>11</td><td>插入Tablet</td><td><code>void insertTablet(Tablet tablet) void insertTablets(Map&lt;String, Tablet&gt; tablets)</code></td><td><code>session.insert_tablet(tablet_) session.insert_tablets(tablet_lst)</code></td><td></td></tr><tr><td>12</td><td>插入Record</td><td><code>void insertRecord(String prefixPath, long time, List&lt;String&gt; measurements,List&lt;TSDataType&gt; types, List&lt;Object&gt; values) void insertRecords(List&lt;String&gt; deviceIds,List&lt;Long&gt; times,List&lt;List&lt;String&gt;&gt; measurementsList,List&lt;List&lt;TSDataType&gt;&gt; typesList,List&lt;List&lt;Object&gt;&gt; valuesList) void insertRecordsOfOneDevice(String deviceId, List&lt;Long&gt; times,List&lt;List&lt;Object&gt;&gt; valuesList)</code></td><td><code>session.insert_record(device_id, timestamp, measurements_, data_types_, values_) session.insert_records(device_ids_, time_list_, measurements_list_, data_type_list_, values_list_) session.insert_records_of_one_device(device_id, time_list, measurements_list, data_types_list, values_list)</code></td><td></td></tr><tr><td>13</td><td>带有类型推断的写入</td><td><code>void insertRecord(String prefixPath, long time, List&lt;String&gt; measurements, List&lt;String&gt; values) void insertRecords(List&lt;String&gt; deviceIds, List&lt;Long&gt; times,List&lt;List&lt;String&gt;&gt; measurementsList, List&lt;List&lt;String&gt;&gt; valuesList) void insertStringRecordsOfOneDevice(String deviceId, List&lt;Long&gt; times,List&lt;List&lt;String&gt;&gt; measurementsList, List&lt;List&lt;String&gt;&gt; valuesList)</code></td><td><code>session.insert_str_record(device_id, timestamp, measurements, string_values)</code></td><td>1.Python原生接口缺少插入多个 Record的接口 2.Python原生接口缺少插入同属于一个 device 的多个 Record</td></tr><tr><td>14</td><td>对齐时间序列的写入</td><td><code>insertAlignedRecord insertAlignedRecords insertAlignedRecordsOfOneDevice insertAlignedStringRecordsOfOneDevice insertAlignedTablet insertAlignedTablets</code></td><td><code>insert_aligned_record insert_aligned_records insert_aligned_records_of_one_device insert_aligned_tablet insert_aligned_tablets</code></td><td>Python原生接口缺少带有判断类型的对齐时间序列的写入</td></tr><tr><td>15</td><td>数据删除</td><td><code>void deleteData(String path, long endTime) void deleteData(List&lt;String&gt; paths, long endTime)</code></td><td></td><td>1.Python原生接口缺少删除一条数据的接口 2.Python原生接口缺少删除多条数据的接口</td></tr><tr><td>16</td><td>数据查询</td><td><code>SessionDataSet executeRawDataQuery(List&lt;String&gt; paths, long startTime, long endTime) SessionDataSet executeLastDataQuery(List&lt;String&gt; paths, long LastTime)</code></td><td></td><td>1.Python原生接口缺少原始数据查询的接口 2.Python原生接口缺少查询最后一条时间戳大于等于某个时间点的数据的接口</td></tr><tr><td>17</td><td>IoTDB-SQL 接口-查询语句</td><td><code>SessionDataSet executeQueryStatement(String sql)</code></td><td><code>session.execute_query_statement(sql)</code></td><td></td></tr><tr><td>18</td><td>IoTDB-SQL 接口-非查询语句</td><td><code>void executeNonQueryStatement(String sql)</code></td><td><code>session.execute_non_query_statement(sql)</code></td><td></td></tr><tr><td>19</td><td>测试接口</td><td><code>void testInsertRecord(String deviceId, long time, List&lt;String&gt; measurements, List&lt;String&gt; values) void testInsertRecord(String deviceId, long time, List&lt;String&gt; measurements,List&lt;TSDataType&gt; types, List&lt;Object&gt; values) void testInsertRecords(List&lt;String&gt; deviceIds, List&lt;Long&gt; times,List&lt;List&lt;String&gt;&gt; measurementsList, List&lt;List&lt;String&gt;&gt; valuesList) void testInsertRecords(List&lt;String&gt; deviceIds, List&lt;Long&gt; times,List&lt;List&lt;String&gt;&gt; measurementsList, List&lt;List&lt;TSDataType&gt;&gt; typesList,List&lt;List&lt;Object&gt;&gt; valuesList) void testInsertTablet(Tablet tablet) void testInsertTablets(Map&lt;String, Tablet&gt; tablets)</code></td><td>Python 客户端对测试的支持是基于testcontainers库</td><td>Python接口无原生的测试接口</td></tr><tr><td>20</td><td>针对原生接口的连接池</td><td><code>SessionPool</code></td><td></td><td>Python接口无针对原生接口的连接池</td></tr><tr><td>21</td><td>集群信息相关的接口</td><td><code>iotdb-thrift-cluster</code></td><td></td><td>Python接口不支持集群信息相关的接口</td></tr></tbody></table>',3);function n(a,l){return e(),s("div",null,[d(`

    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at
    
        http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.

`),r])}const g=t(o,[["render",n],["__file","Interface-Comparison.html.vue"]]);export{g as default};
