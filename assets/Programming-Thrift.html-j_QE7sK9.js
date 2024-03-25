import{_ as e,o as n,c as i,a as t,f as s}from"./app-dXzqLio8.js";const r={},a=s(`<h1 id="communication-service-protocol" tabindex="-1"><a class="header-anchor" href="#communication-service-protocol" aria-hidden="true">#</a> Communication Service protocol</h1><h2 id="thrift-rpc-interface" tabindex="-1"><a class="header-anchor" href="#thrift-rpc-interface" aria-hidden="true">#</a> Thrift rpc interface</h2><h3 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> introduction</h3><p>Thrift is a remote procedure call software framework for the development of extensible and cross-language services.<br> It combines a powerful software stack and code generation engine,<br> In order to build seamlessly integrated and efficient services among programming languages ​​such as C++, Java, Go, Python, PHP, Ruby, Erlang, Perl, Haskell, C#, Cocoa, JavaScript, Node.js, Smalltalk, and OCaml.</p><p>IoTDB server and client use thrift for communication. In actual use, it is recommended to use the native client package provided by IoTDB:<br> Session or Session Pool. If you have special needs, you can also program directly against the RPC interface</p><p>The default IoTDB server uses port 6667 as the RPC communication port, you can modify the configuration item</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rpc_port=6667
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>to change the default thrift port</p><h3 id="rpc-interface" tabindex="-1"><a class="header-anchor" href="#rpc-interface" aria-hidden="true">#</a> rpc interface</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// open a session
TSOpenSessionResp openSession(1:TSOpenSessionReq req);

// close a session
TSStatus closeSession(1:TSCloseSessionReq req);

// run an SQL statement in batch
TSExecuteStatementResp executeStatement(1:TSExecuteStatementReq req);

// execute SQL statement in batch
TSStatus executeBatchStatement(1:TSExecuteBatchStatementReq req);

// execute query SQL statement
TSExecuteStatementResp executeQueryStatement(1:TSExecuteStatementReq req);

// execute insert, delete and update SQL statement 
TSExecuteStatementResp executeUpdateStatement(1:TSExecuteStatementReq req);

// fetch next query result
TSFetchResultsResp fetchResults(1:TSFetchResultsReq req)

// fetch meta data
TSFetchMetadataResp fetchMetadata(1:TSFetchMetadataReq req)

// cancel a query 
TSStatus cancelOperation(1:TSCancelOperationReq req);

// close a query dataset
TSStatus closeOperation(1:TSCloseOperationReq req);

// get time zone
TSGetTimeZoneResp getTimeZone(1:i64 sessionId);

// set time zone
TSStatus setTimeZone(1:TSSetTimeZoneReq req);

// get server&#39;s properties
ServerProperties getProperties();

// set storage group
TSStatus setStorageGroup(1:i64 sessionId, 2:string storageGroup);

// create timeseries
TSStatus createTimeseries(1:TSCreateTimeseriesReq req);

// create multi timeseries
TSStatus createMultiTimeseries(1:TSCreateMultiTimeseriesReq req);

// delete timeseries
TSStatus deleteTimeseries(1:i64 sessionId, 2:list&lt;string&gt; path)

// delete sttorage groups
TSStatus deleteStorageGroups(1:i64 sessionId, 2:list&lt;string&gt; storageGroup);

// insert record
TSStatus insertRecord(1:TSInsertRecordReq req);

// insert record in string format
TSStatus insertStringRecord(1:TSInsertStringRecordReq req);

// insert tablet
TSStatus insertTablet(1:TSInsertTabletReq req);

// insert tablets in batch
TSStatus insertTablets(1:TSInsertTabletsReq req);

// insert records in batch
TSStatus insertRecords(1:TSInsertRecordsReq req);

// insert records of one device
TSStatus insertRecordsOfOneDevice(1:TSInsertRecordsOfOneDeviceReq req);

// insert records in batch as string format
TSStatus insertStringRecords(1:TSInsertStringRecordsReq req);

// test the latency of innsert tablet，caution：no data will be inserted, only for test latency
TSStatus testInsertTablet(1:TSInsertTabletReq req);

// test the latency of innsert tablets，caution：no data will be inserted, only for test latency
TSStatus testInsertTablets(1:TSInsertTabletsReq req);

// test the latency of innsert record，caution：no data will be inserted, only for test latency
TSStatus testInsertRecord(1:TSInsertRecordReq req);

// test the latency of innsert record in string format，caution：no data will be inserted, only for test latency
TSStatus testInsertStringRecord(1:TSInsertStringRecordReq req);

// test the latency of innsert records，caution：no data will be inserted, only for test latency
TSStatus testInsertRecords(1:TSInsertRecordsReq req);

// test the latency of innsert records of one device，caution：no data will be inserted, only for test latency
TSStatus testInsertRecordsOfOneDevice(1:TSInsertRecordsOfOneDeviceReq req);

// test the latency of innsert records in string formate，caution：no data will be inserted, only for test latency
TSStatus testInsertStringRecords(1:TSInsertStringRecordsReq req);

// delete data
TSStatus deleteData(1:TSDeleteDataReq req);

// execute raw data query
TSExecuteStatementResp executeRawDataQuery(1:TSRawDataQueryReq req);

// request a statement id from server
i64 requestStatementId(1:i64 sessionId);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="idl-file-path" tabindex="-1"><a class="header-anchor" href="#idl-file-path" aria-hidden="true">#</a> IDL file path</h3><p>IDL file path is &quot;thrift/src/main/thrift/rpc.thrift&quot; which includes interface and struct</p><h3 id="target-file-path" tabindex="-1"><a class="header-anchor" href="#target-file-path" aria-hidden="true">#</a> target file path</h3><p>We will use thrift compile IDL file in mvn Compilation, in which generate target .class file<br> target file path is &quot;thrift/target/classes/org/apache/iotdb/service/rpc/thrift&quot;</p>`,14);function d(l,c){return n(),i("div",null,[t(`

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

`),a])}const u=e(r,[["render",d],["__file","Programming-Thrift.html.vue"]]);export{u as default};
