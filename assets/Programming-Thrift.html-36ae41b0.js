import{_ as e,o as n,c as i,a as s,f as r}from"./app-30bb7365.js";const t={},d=r(`<h2 id="通信服务协议" tabindex="-1"><a class="header-anchor" href="#通信服务协议" aria-hidden="true">#</a> 通信服务协议</h2><h3 id="thrift-rpc-接口" tabindex="-1"><a class="header-anchor" href="#thrift-rpc-接口" aria-hidden="true">#</a> Thrift rpc 接口</h3><h4 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h4><p>Thrift 是一个远程方法调用软件框架，用来进行可扩展且跨语言的服务的开发。<br> 它结合了功能强大的软件堆栈和代码生成引擎，<br> 以构建在 C++, Java, Go,Python, PHP, Ruby, Erlang, Perl, Haskell, C#, Cocoa, JavaScript, Node.js, Smalltalk, and OCaml 这些编程语言间无缝结合的、高效的服务。</p><p>IoTDB 服务端和客户端之间使用 thrift 进行通信，实际使用中建议使用 IoTDB 提供的原生客户端封装：<br> Session 或 Session Pool。如有特殊需要，您也可以直接针对 RPC 接口进行编程</p><p>默认 IoTDB 服务端使用 6667 端口作为 RPC 通信端口，可修改配置项中的</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rpc_port=6667
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>更改默认接口</p><h4 id="rpc-接口" tabindex="-1"><a class="header-anchor" href="#rpc-接口" aria-hidden="true">#</a> rpc 接口</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// 打开一个 session
TSOpenSessionResp openSession(1:TSOpenSessionReq req);

// 关闭一个 session
TSStatus closeSession(1:TSCloseSessionReq req);

// 执行一条 SQL 语句
TSExecuteStatementResp executeStatement(1:TSExecuteStatementReq req);

// 批量执行 SQL 语句
TSStatus executeBatchStatement(1:TSExecuteBatchStatementReq req);

// 执行查询 SQL 语句
TSExecuteStatementResp executeQueryStatement(1:TSExecuteStatementReq req);

// 执行插入、删除 SQL 语句
TSExecuteStatementResp executeUpdateStatement(1:TSExecuteStatementReq req);

// 向服务器取下一批查询结果
TSFetchResultsResp fetchResults(1:TSFetchResultsReq req)

// 获取元数据
TSFetchMetadataResp fetchMetadata(1:TSFetchMetadataReq req)

// 取消某次查询操作
TSStatus cancelOperation(1:TSCancelOperationReq req);

// 关闭查询操作数据集，释放资源
TSStatus closeOperation(1:TSCloseOperationReq req);

// 获取时区信息
TSGetTimeZoneResp getTimeZone(1:i64 sessionId);

// 设置时区
TSStatus setTimeZone(1:TSSetTimeZoneReq req);

// 获取服务端配置
ServerProperties getProperties();

// 设置存储组
TSStatus setStorageGroup(1:i64 sessionId, 2:string storageGroup);

// 创建时间序列
TSStatus createTimeseries(1:TSCreateTimeseriesReq req);

// 创建多条时间序列
TSStatus createMultiTimeseries(1:TSCreateMultiTimeseriesReq req);

// 删除时间序列
TSStatus deleteTimeseries(1:i64 sessionId, 2:list&lt;string&gt; path)

// 删除存储组
TSStatus deleteStorageGroups(1:i64 sessionId, 2:list&lt;string&gt; storageGroup);

// 按行插入数据
TSStatus insertRecord(1:TSInsertRecordReq req);

// 按 String 格式插入一条数据
TSStatus insertStringRecord(1:TSInsertStringRecordReq req);

// 按列插入数据
TSStatus insertTablet(1:TSInsertTabletReq req);

// 按列批量插入数据
TSStatus insertTablets(1:TSInsertTabletsReq req);

// 按行批量插入数据
TSStatus insertRecords(1:TSInsertRecordsReq req);

// 按行批量插入同属于某个设备的数据
TSStatus insertRecordsOfOneDevice(1:TSInsertRecordsOfOneDeviceReq req);

// 按 String 格式批量按行插入数据
TSStatus insertStringRecords(1:TSInsertStringRecordsReq req);

// 测试按列插入数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟
TSStatus testInsertTablet(1:TSInsertTabletReq req);

// 测试批量按列插入数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟
TSStatus testInsertTablets(1:TSInsertTabletsReq req);

// 测试按行插入数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟
TSStatus testInsertRecord(1:TSInsertRecordReq req);

// 测试按 String 格式按行插入数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟
TSStatus testInsertStringRecord(1:TSInsertStringRecordReq req);

// 测试按行插入数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟
TSStatus testInsertRecords(1:TSInsertRecordsReq req);

// 测试按行批量插入同属于某个设备的数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟
TSStatus testInsertRecordsOfOneDevice(1:TSInsertRecordsOfOneDeviceReq req);

// 测试按 String 格式批量按行插入数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟
TSStatus testInsertStringRecords(1:TSInsertStringRecordsReq req);

// 删除数据
TSStatus deleteData(1:TSDeleteDataReq req);

// 执行原始数据查询
TSExecuteStatementResp executeRawDataQuery(1:TSRawDataQueryReq req);

// 向服务器申请一个查询语句 ID
i64 requestStatementId(1:i64 sessionId);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="idl-定义文件位置" tabindex="-1"><a class="header-anchor" href="#idl-定义文件位置" aria-hidden="true">#</a> IDL 定义文件位置</h4><p>IDL 定义文件的路径是 thrift/src/main/thrift/rpc.thrift，其中包括了结构体定义与函数定义</p><h4 id="生成文件位置" tabindex="-1"><a class="header-anchor" href="#生成文件位置" aria-hidden="true">#</a> 生成文件位置</h4><p>在 mvn 编译过程中，会调用 thrift 编译 IDL 文件，生成最终的。class 文件<br> 生成的文件夹路径为 thrift/target/classes/org/apache/iotdb/service/rpc/thrift</p>`,14);function a(l,c){return n(),i("div",null,[s(`

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

`),d])}const u=e(t,[["render",a],["__file","Programming-Thrift.html.vue"]]);export{u as default};
