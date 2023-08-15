import{_ as n,o as e,c as s,a as t,f as a}from"./app-d7e75f9d.js";const i={},l=a(`<h1 id="rust-native-api-native-api" tabindex="-1"><a class="header-anchor" href="#rust-native-api-native-api" aria-hidden="true">#</a> Rust Native API Native API</h1><p>IoTDB uses Thrift as a cross language RPC framework, so access to IoTDB can be achieved through the interface provided by Thrift. This document will introduce how to generate a native Rust interface that can access IoTDB.</p><h2 id="dependents" tabindex="-1"><a class="header-anchor" href="#dependents" aria-hidden="true">#</a> Dependents</h2><ul><li>JDK &gt;= 1.8</li><li>Rust &gt;= 1.0.0</li><li>thrift 0.14.1</li><li>Linux、Macos or like unix</li><li>Windows+bash</li></ul><p>Thrift (0.14.1 or higher) must be installed to compile Thrift files into Rust code. The following is the official installation tutorial, and in the end, you should receive a Thrift executable file.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>http://thrift.apache.org/docs/install/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="compile-the-thrift-library-and-generate-the-rust-native-interface" tabindex="-1"><a class="header-anchor" href="#compile-the-thrift-library-and-generate-the-rust-native-interface" aria-hidden="true">#</a> Compile the Thrift library and generate the Rust native interface</h2><ol><li>Find the pom.xml file in the root directory of the IoTDB source code folder.</li><li>Open the pom.xml file and find the following content:</li></ol><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>execution</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>generate-thrift-sources-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>phase</span><span class="token punctuation">&gt;</span></span>generate-sources<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>phase</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goals</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goal</span><span class="token punctuation">&gt;</span></span>compile<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goal</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goals</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>generator</span><span class="token punctuation">&gt;</span></span>java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>generator</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thriftExecutable</span><span class="token punctuation">&gt;</span></span>\${thrift.exec.absolute.path}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thriftExecutable</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thriftSourceRoot</span><span class="token punctuation">&gt;</span></span>\${basedir}/src/main/thrift<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thriftSourceRoot</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>execution</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>Referring to this setting, add the following content to the pom.xml file to generate the native interface for Rust:</li></ol><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>execution</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>generate-thrift-sources-rust<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>phase</span><span class="token punctuation">&gt;</span></span>generate-sources<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>phase</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goals</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goal</span><span class="token punctuation">&gt;</span></span>compile<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goal</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goals</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>generator</span><span class="token punctuation">&gt;</span></span>rs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>generator</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thriftExecutable</span><span class="token punctuation">&gt;</span></span>\${thrift.exec.absolute.path}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thriftExecutable</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thriftSourceRoot</span><span class="token punctuation">&gt;</span></span>\${basedir}/src/main/thrift<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thriftSourceRoot</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includes</span><span class="token punctuation">&gt;</span></span>**/common.thrift,**/client.thrift<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>includes</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>outputDirectory</span><span class="token punctuation">&gt;</span></span>\${project.build.directory}/generated-sources-rust<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>outputDirectory</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>execution</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>In the root directory of the IoTDB source code folder，run <code>mvn clean generate-sources</code>，</li></ol><p>This command will automatically delete the files in <code>iotdb/iotdb-protocol/thrift/target</code> and <code>iotdb/iotdb-protocol/thrift-commons/target</code>, and repopulate the folder with the newly generated throttle file.</p><h2 id="using-the-rust-native-interface" tabindex="-1"><a class="header-anchor" href="#using-the-rust-native-interface" aria-hidden="true">#</a> Using the Rust native interface</h2><p>copy <code>iotdb/iotdb-protocol/thrift/target/generated-sources-rust/</code> and <code>iotdb/iotdb-protocol/thrift-commons/target/generated-sources-rust/</code> in your project。</p><h2 id="rpc-interface" tabindex="-1"><a class="header-anchor" href="#rpc-interface" aria-hidden="true">#</a> rpc interface</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// open a session
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

// CREATE DATABASE
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function c(o,r){return e(),s("div",null,[t(`

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

`),l])}const d=n(i,[["render",c],["__file","Programming-Rust-Native-API.html.vue"]]);export{d as default};
