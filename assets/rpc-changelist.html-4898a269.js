import{_ as t,o as e,c as d,a,f as r}from"./app-c075fd0e.js";const i={},n=r('<h1 id="_0-12-x-0-13-x" tabindex="-1"><a class="header-anchor" href="#_0-12-x-0-13-x" aria-hidden="true">#</a> 0.12.x -&gt; 0.13.x</h1><p>Last Updated on 2022.1.17 by Xin Zhao.</p><h2 id="_1-delete-old" tabindex="-1"><a class="header-anchor" href="#_1-delete-old" aria-hidden="true">#</a> 1. Delete Old</h2><table><thead><tr><th>Latest Changes</th><th>Related Committers</th></tr></thead></table><h2 id="_2-add-new" tabindex="-1"><a class="header-anchor" href="#_2-add-new" aria-hidden="true">#</a> 2. Add New</h2><table><thead><tr><th>Latest Changes</th><th>Related Committers</th></tr></thead><tbody><tr><td>Add TSTracingInfo</td><td>Minghui Liu</td></tr><tr><td>Add structs and interfaces to append, prune, query and unset Schema Template (detail: TSAppendSchemaTemplateReq, TSPruneSchemaTemplateReq, TSQueryTemplateReq, TSQueryTemplateResp, TSUnsetSchemaTemplateReq, appendSchemaTemplate, pruneSchemaTemplate, querySchemaTemplate, unsetSchemaTemplate), and serializedTemplate in TSCreateSchemaTemplateReq</td><td>Xin Zhao</td></tr><tr><td>Add struct TSInsertStringRecordsOfOneDeviceReq</td><td>Hang Zhang</td></tr><tr><td>Add method TSStatus insertStringRecordsOfOneDevice(1:TSInsertStringRecordsOfOneDeviceReq req)</td><td>Hang Zhang</td></tr><tr><td>Add TSDropSchemaTemplateReq, TSStatus dropSchemaTemplate</td><td>Xin Zhao</td></tr><tr><td>Add TSCreateAlignedTimeseriesReq</td><td>Haonan Hou</td></tr></tbody></table><h2 id="_3-update" tabindex="-1"><a class="header-anchor" href="#_3-update" aria-hidden="true">#</a> 3. Update</h2><table><thead><tr><th>Latest Changes</th><th>Related Committers</th></tr></thead><tbody><tr><td>Add Optional field <code>isAligned</code> for all TSInsertReqs</td><td>Haonan Hou</td></tr><tr><td>Change schemaNames from required to optional in TSCreateSchemaTemplateReq</td><td>Xin Zhao</td></tr><tr><td>Change TSCreateAlignedTimeseriesReq, from <code>i32 compressor</code> to <code>List&lt;i32&gt; compressors</code></td><td>Minghui Liu</td></tr></tbody></table><h1 id="_0-11-x-version-2-0-12-x-version-1" tabindex="-1"><a class="header-anchor" href="#_0-11-x-version-2-0-12-x-version-1" aria-hidden="true">#</a> 0.11.x(version-2) -&gt; 0.12.x(version-1)</h1><p>Last Updated on 2021.01.19 by Xiangwei Wei.</p><h2 id="_1-delete-old-1" tabindex="-1"><a class="header-anchor" href="#_1-delete-old-1" aria-hidden="true">#</a> 1. Delete Old</h2><table><thead><tr><th>Latest Changes</th><th>Related Committers</th></tr></thead></table><h2 id="_2-add-new-1" tabindex="-1"><a class="header-anchor" href="#_2-add-new-1" aria-hidden="true">#</a> 2. Add New</h2><table><thead><tr><th>Latest Changes</th><th>Related Committers</th></tr></thead><tbody><tr><td>Add timeout in TSFetchResultsReq and TSExecuteStatementReq</td><td>Xiangwei Wei</td></tr></tbody></table><h2 id="_3-update-1" tabindex="-1"><a class="header-anchor" href="#_3-update-1" aria-hidden="true">#</a> 3. Update</h2><table><thead><tr><th>Latest Changes</th><th>Related Committers</th></tr></thead></table><h1 id="_0-10-x-version-2-0-11-x-version-3" tabindex="-1"><a class="header-anchor" href="#_0-10-x-version-2-0-11-x-version-3" aria-hidden="true">#</a> 0.10.x (version-2) -&gt; 0.11.x (version-3)</h1><p>Last Updated on 2020-10-27 by Xiangwei Wei.</p><h2 id="_1-delete-old-2" tabindex="-1"><a class="header-anchor" href="#_1-delete-old-2" aria-hidden="true">#</a> 1. Delete Old</h2><table><thead><tr><th>Latest Changes</th><th>Related Committers</th></tr></thead><tbody><tr><td>Remove TSBatchExecuteStatementResp</td><td>Tian Jiang</td></tr></tbody></table><h2 id="_2-add-new-2" tabindex="-1"><a class="header-anchor" href="#_2-add-new-2" aria-hidden="true">#</a> 2. Add New</h2><table><thead><tr><th>Latest Changes</th><th>Related Committers</th></tr></thead><tbody><tr><td>set the input/output as TFramedTransport</td><td>Tian Jiang</td></tr><tr><td>Add timeout(optional) in TSFetchResultsReq and TSExecuteStatementReq</td><td>Xiangwei Wei</td></tr></tbody></table><h2 id="_3-update-2" tabindex="-1"><a class="header-anchor" href="#_3-update-2" aria-hidden="true">#</a> 3. Update</h2><table><thead><tr><th>Latest Changes</th><th>Related Committers</th></tr></thead><tbody><tr><td>Add sub-status in TSStatus</td><td>Tian Jiang</td></tr><tr><td>Change the result of executeBatchStatement as TSStatus</td><td>Tian Jiang</td></tr><tr><td>Change TSDeleteDataReq, delete timestamp and add startTime and endTime</td><td>Wei Shao</td></tr><tr><td>Add zoneId in TSOpenSessionReq</td><td>Xiangwei Wei</td></tr></tbody></table><h1 id="_0-9-x-version-1-0-10-x-version-2" tabindex="-1"><a class="header-anchor" href="#_0-9-x-version-1-0-10-x-version-2" aria-hidden="true">#</a> 0.9.x (version-1) -&gt; 0.10.x (version-2)</h1><p>Last Updated on 2020-5-25 by Kaifeng Xue.</p><h2 id="_1-delete-old-3" tabindex="-1"><a class="header-anchor" href="#_1-delete-old-3" aria-hidden="true">#</a> 1. Delete Old</h2><table><thead><tr><th>Latest Changes</th><th>Related Committers</th></tr></thead><tbody><tr><td>Remove TS_SessionHandle,TSHandleIdentifier</td><td>Tian Jiang</td></tr><tr><td>Remove TSStatus,TSExecuteInsertRowInBatchResp</td><td>Jialin Qiao</td></tr></tbody></table><h2 id="_2-add-new-3" tabindex="-1"><a class="header-anchor" href="#_2-add-new-3" aria-hidden="true">#</a> 2. Add New</h2><table><thead><tr><th>Latest Changes</th><th>Related Committers</th></tr></thead><tbody><tr><td>Add parameter sessionId in getTimeZone, getProperties, setStorageGroup, createTimeseries...</td><td>Tian Jiang</td></tr><tr><td>Add struct TSQueryNonAlignDataSet</td><td>Haonan Hou</td></tr><tr><td>Add struct TSInsertTabletsReq</td><td>Jialin Qiao</td></tr><tr><td>Add method insertTablets</td><td>Jialin Qiao</td></tr><tr><td>Add method testInsertTablets</td><td>Xiangdong Huang</td></tr><tr><td>add new field <code>inferType</code> in TSInsertRecordReq</td><td>Jialin Qiao</td></tr></tbody></table><h2 id="_3-update-3" tabindex="-1"><a class="header-anchor" href="#_3-update-3" aria-hidden="true">#</a> 3. Update</h2><table><thead><tr><th>Latest Changes</th><th>Related Committers</th></tr></thead><tbody><tr><td>Replace TS_SessionHandles with SessionIds, TSOperationHandle with queryIds</td><td>Tian Jiang</td></tr><tr><td>Add optional TSQueryNonAlignDataSet in TSExecuteStatementResp, TSFetchResultsResp and required bool isAlign in TSFetchResultsReq</td><td>Haonan Hou</td></tr><tr><td>Rename TSStatusType to TSStatus</td><td>Jialin Qiao</td></tr><tr><td>Remove sessionId in TSExecuteBatchStatementResp</td><td>Jialin Qiao</td></tr><tr><td>Rename insertRows to insertReords, insert to insertRecord, insertBatch to insertTablet</td><td>Jialin Qiao</td></tr><tr><td>Use TsDataType and binary rather than string in TSInsertInBatchReq and TSInsertReq</td><td>Kaifeng Xue</td></tr></tbody></table><h1 id="_0-8-x-0-9-x-version-1" tabindex="-1"><a class="header-anchor" href="#_0-8-x-0-9-x-version-1" aria-hidden="true">#</a> 0.8.x -&gt; 0.9.x (version-1)</h1><p>Last Updated on 2019-10-27 by Lei Rui.</p><h2 id="_1-delete-old-4" tabindex="-1"><a class="header-anchor" href="#_1-delete-old-4" aria-hidden="true">#</a> 1. Delete Old</h2><table><thead><tr><th>Latest Changes</th><th>Related Committers</th></tr></thead><tbody><tr><td>Delete struct TSSetStorageGroupReq</td><td>Jialin Qiao</td></tr><tr><td>Remove struct TSDataValue</td><td>Lei Rui</td></tr><tr><td>Remove struct TSRowRecord</td><td>Lei Rui</td></tr><tr><td>Remove optional string version in TSFetchMetadataResp</td><td>Genius_pig</td></tr><tr><td>Remove optional set&lt;string&gt; childPaths, nodesList, storageGroups, devices in TSFetchMetadataResp</td><td>Genius_pig</td></tr><tr><td>Remove optional map&lt;string, string&gt; nodeTimeseriesNum in TSFetchMetadataResp</td><td>Genius_pig</td></tr><tr><td>Remove optional list&lt;list&lt;string&gt;&gt; timeseriesList in TSFetchMetadataResp</td><td>Genius_pig</td></tr><tr><td>Remove optinoal optional i32 timeseriesNum in TSFetchMetadataResp</td><td>Genius_pig</td></tr><tr><td>Remove optional i32 nodeLevel in TSFetchMetadataReq</td><td>Genius_pig</td></tr></tbody></table><h2 id="_2-add-new-4" tabindex="-1"><a class="header-anchor" href="#_2-add-new-4" aria-hidden="true">#</a> 2. Add New</h2><table><thead><tr><th>Latest Changes</th><th>Related Committers</th></tr></thead><tbody><tr><td>Add struct TSBatchInsertionReq</td><td>qiaojialin</td></tr><tr><td>Add method TSExecuteBatchStatementResp insertBatch(1:TSBatchInsertionReq req)</td><td>qiaojialin</td></tr><tr><td>Add Struct TSStatusType</td><td>Zesong Sun</td></tr><tr><td>Add TSCreateTimeseriesReq</td><td>Zesong Sun</td></tr><tr><td>Add method TSStatus setStorageGroup(1:string storageGroup)</td><td>Zesong Sun, Jialin Qiao</td></tr><tr><td>Add method TSStatus createTimeseries(1:TSCreateTimeseriesReq req)</td><td>Zesong Sun</td></tr><tr><td>Add struct TSInsertReq</td><td>qiaojialin</td></tr><tr><td>Add method TSRPCResp insertRow(1:TSInsertReq req)</td><td>qiaojialin</td></tr><tr><td>Add struct TSDeleteDataReq</td><td>Jack Tsai, qiaojialin</td></tr><tr><td>Add method TSStatus deleteData(1:TSDeleteDataReq req)</td><td>Jack Tsai, Jialin Qiao, qiaojialin</td></tr><tr><td>Add method TSStatus deleteTimeseries(1:list&lt;string&gt; path)</td><td>qiaojialin</td></tr><tr><td>Add method TSStatus deleteStorageGroups(1:list&lt;string&gt; storageGroup)</td><td>Yi Tao</td></tr><tr><td>Add Struct TSExecuteInsertRowInBatchResp</td><td>Kaifeng Xue</td></tr><tr><td>Add method insertRowInBatch(1:TSInsertInBatchReq req);</td><td>Kaifeng Xue</td></tr><tr><td>Add method testInsertRowInBatch(1:TSInsertInBatchReq req);</td><td>Kaifeng Xue</td></tr><tr><td>Add method testInsertRow(1:TSInsertReq req);</td><td>Kaifeng Xue</td></tr><tr><td>Add method testInsertBatch(1:TSBatchInsertionReq req);</td><td>Kaifeng Xue</td></tr><tr><td>Add struct TSCreateMultiTimeseriesReq</td><td>qiaojialin</td></tr><tr><td>Add method createMultiTimeseries(1:TSCreateMultiTimeseriesReq req);</td><td>qiaojialin</td></tr></tbody></table><h2 id="_3-update-4" tabindex="-1"><a class="header-anchor" href="#_3-update-4" aria-hidden="true">#</a> 3. Update</h2><table><thead><tr><th>Latest Changes</th><th>Related Committers</th></tr></thead><tbody><tr><td>Add required string timestampPrecision in ServerProperties</td><td>1160300922</td></tr><tr><td>Add optional list&lt;string&gt; dataTypeList in TSExecuteStatementResp</td><td>suyue</td></tr><tr><td>Update TSStatus to use TSStatusType, instead of using <s>TS_StatusCode, errorCode and errorMessage</s></td><td>Zesong Sun</td></tr><tr><td>Rename item in enum TSProtocolVersion from <s>TSFILE_SERVICE_PROTOCOL_V1</s> to IOTDB_SERVICE_PROTOCOL_V1</td><td>qiaojialin</td></tr><tr><td>Rename method name from <s>TSExecuteStatementResp executeInsertion(1:TSInsertionReq req)</s> to TSExecuteStatementResp insert(1:TSInsertionReq req)</td><td>qiaojialin</td></tr><tr><td>Add required i32 compressor in TSCreateTimeseriesReq</td><td>Jialin Qiao</td></tr><tr><td>Add optional list&lt;string&gt; nodesList, optional map&lt;string, string&gt; nodeTimeseriesNum in TSFetchMetadataResp</td><td>jack870131</td></tr><tr><td>Add optional i32 nodeLevel in TSFetchMetadataReq</td><td>jack870131, Zesong Sun</td></tr><tr><td>Change the following methods&#39; returned type to be TSStatus: <br>TSStatus closeSession(1:TSCloseSessionReq req), <br>TSStatus cancelOperation(1:TSCancelOperationReq req), <br>TSStatus closeOperation(1:TSCloseOperationReq req), <br>TSStatus setTimeZone(1:TSSetTimeZoneReq req), <br>TSStatus setStorageGroup(1:string storageGroup), <br>TSStatus createTimeseries(1:TSCreateTimeseriesReq req), <br>TSStatus insertRow(1:TSInsertReq req), <br>TSStatus deleteData(1:TSDeleteDataReq req)</td><td>Zesong Sun, qiaojialin</td></tr><tr><td>Change from <s>required string path</s> to required list&lt;string&gt; paths in TSDeleteDataReq</td><td>qiaojialin</td></tr><tr><td>Add optional set&lt;string&gt; devices in TSFetchMetadataResp</td><td>Zesong Sun</td></tr><tr><td>Rename some fields in TSFetchMetadataResp: <s>ColumnsList</s> to columnsList, <s>showTimeseriesList</s> to timeseriesList, <s>showStorageGroups</s> to storageGroups</td><td>Zesong Sun</td></tr><tr><td>Change struct TSQueryDataSet to eliminate row-wise rpc writing</td><td>Lei Rui</td></tr><tr><td>Add optional i32 timeseriesNum in TSFetchMetadataResp</td><td>Jack Tsai</td></tr><tr><td>Add required i64 queryId in TSHandleIdentifier</td><td>Yuan Tian</td></tr><tr><td>Add optional set&lt;string&gt; childPaths in TSFetchMetadataResp</td><td>Haonan Hou</td></tr><tr><td>Add optional string version in TSFetchMetadataResp</td><td>Genius_pig</td></tr><tr><td>Add required i64 statementId in TSExecuteStatementReq</td><td>Yuan Tian</td></tr><tr><td>Add required binary time, required list&lt;binary&gt; valueList, required list&lt;binary&gt; bitmapList and remove required binary values, required i32 rowCount in TSQueryDataSet</td><td>Yuan Tian</td></tr><tr><td>Add optional i32 fetchSize in TSExecuteStatementReq,<br>Add optional TSQueryDataSet in TSExecuteStatementResp</td><td>liutaohua</td></tr><tr><td>Add optional map&lt;string, string&gt; props, optional map&lt;string, string&gt; tags, optional map&lt;string, string&gt; attributes and optional string aliasPath in TSCreateTimeseriesReq</td><td>Yuan Tian</td></tr></tbody></table>',40);function s(o,h){return e(),d("div",null,[a(`

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

`),n])}const u=t(i,[["render",s],["__file","rpc-changelist.html.vue"]]);export{u as default};
