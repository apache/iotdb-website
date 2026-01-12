import{_ as n,c as e,b as a,o as l}from"./app-C1IcKGP3.js";const t={};function i(p,s){return l(),e("div",null,[...s[0]||(s[0]=[a(`<h1 id="rust-native-api-native-api" tabindex="-1"><a class="header-anchor" href="#rust-native-api-native-api"><span>Rust Native API Native API</span></a></h1><p>IoTDB uses Thrift as a cross language RPC framework, so access to IoTDB can be achieved through the interface provided by Thrift. This document will introduce how to generate a native Rust interface that can access IoTDB.</p><h2 id="dependents" tabindex="-1"><a class="header-anchor" href="#dependents"><span>Dependents</span></a></h2><ul><li>JDK &gt;= 1.8</li><li>Rust &gt;= 1.0.0</li><li>thrift 0.14.1</li><li>Linux、Macos or like unix</li><li>Windows+bash</li></ul><p>Thrift (0.14.1 or higher) must be installed to compile Thrift files into Rust code. The following is the official installation tutorial, and in the end, you should receive a Thrift executable file.</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code class="language-"><span class="line"><span>http://thrift.apache.org/docs/install/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="compile-the-thrift-library-and-generate-the-rust-native-interface" tabindex="-1"><a class="header-anchor" href="#compile-the-thrift-library-and-generate-the-rust-native-interface"><span>Compile the Thrift library and generate the Rust native interface</span></a></h2><ol><li>Find the pom.xml file in the root directory of the IoTDB source code folder.</li><li>Open the pom.xml file and find the following content:</li></ol><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code class="language-xml"><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">execution</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">&gt;generate-thrift-sources-java&lt;/</span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">phase</span><span style="color:#ABB2BF;">&gt;generate-sources&lt;/</span><span style="color:#E06C75;">phase</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">goals</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;</span><span style="color:#E06C75;">goal</span><span style="color:#ABB2BF;">&gt;compile&lt;/</span><span style="color:#E06C75;">goal</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">goals</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">configuration</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;</span><span style="color:#E06C75;">generator</span><span style="color:#ABB2BF;">&gt;java&lt;/</span><span style="color:#E06C75;">generator</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;</span><span style="color:#E06C75;">thriftExecutable</span><span style="color:#ABB2BF;">&gt;\${thrift.exec.absolute.path}&lt;/</span><span style="color:#E06C75;">thriftExecutable</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      &lt;</span><span style="color:#E06C75;">thriftSourceRoot</span><span style="color:#ABB2BF;">&gt;\${basedir}/src/main/thrift&lt;/</span><span style="color:#E06C75;">thriftSourceRoot</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">configuration</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">execution</span><span style="color:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>Referring to this setting, add the following content to the pom.xml file to generate the native interface for Rust:</li></ol><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code class="language-xml"><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">execution</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">&gt;generate-thrift-sources-rust&lt;/</span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">phase</span><span style="color:#ABB2BF;">&gt;generate-sources&lt;/</span><span style="color:#E06C75;">phase</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">goals</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">goal</span><span style="color:#ABB2BF;">&gt;compile&lt;/</span><span style="color:#E06C75;">goal</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;">goals</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">configuration</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">generator</span><span style="color:#ABB2BF;">&gt;rs&lt;/</span><span style="color:#E06C75;">generator</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">thriftExecutable</span><span style="color:#ABB2BF;">&gt;\${thrift.exec.absolute.path}&lt;/</span><span style="color:#E06C75;">thriftExecutable</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">thriftSourceRoot</span><span style="color:#ABB2BF;">&gt;\${basedir}/src/main/thrift&lt;/</span><span style="color:#E06C75;">thriftSourceRoot</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">includes</span><span style="color:#ABB2BF;">&gt;**/common.thrift,**/client.thrift&lt;/</span><span style="color:#E06C75;">includes</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">outputDirectory</span><span style="color:#ABB2BF;">&gt;\${project.build.directory}/generated-sources-rust&lt;/</span><span style="color:#E06C75;">outputDirectory</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;">configuration</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">execution</span><span style="color:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>In the root directory of the IoTDB source code folder，run <code>mvn clean generate-sources</code>，</li></ol><p>This command will automatically delete the files in <code>iotdb/iotdb-protocol/thrift/target</code> and <code>iotdb/iotdb-protocol/thrift-commons/target</code>, and repopulate the folder with the newly generated throttle file.</p><h2 id="using-the-rust-native-interface" tabindex="-1"><a class="header-anchor" href="#using-the-rust-native-interface"><span>Using the Rust native interface</span></a></h2><p>copy <code>iotdb/iotdb-protocol/thrift/target/generated-sources-rust/</code> and <code>iotdb/iotdb-protocol/thrift-commons/target/generated-sources-rust/</code> in your project。</p><h2 id="rpc-interface" tabindex="-1"><a class="header-anchor" href="#rpc-interface"><span>rpc interface</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code class="language-"><span class="line"><span>// open a session</span></span>
<span class="line"><span>TSOpenSessionResp openSession(1:TSOpenSessionReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// close a session</span></span>
<span class="line"><span>TSStatus closeSession(1:TSCloseSessionReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// run an SQL statement in batch</span></span>
<span class="line"><span>TSExecuteStatementResp executeStatement(1:TSExecuteStatementReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// execute SQL statement in batch</span></span>
<span class="line"><span>TSStatus executeBatchStatement(1:TSExecuteBatchStatementReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// execute query SQL statement</span></span>
<span class="line"><span>TSExecuteStatementResp executeQueryStatement(1:TSExecuteStatementReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// execute insert, delete and update SQL statement </span></span>
<span class="line"><span>TSExecuteStatementResp executeUpdateStatement(1:TSExecuteStatementReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// fetch next query result</span></span>
<span class="line"><span>TSFetchResultsResp fetchResults(1:TSFetchResultsReq req)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// fetch meta data</span></span>
<span class="line"><span>TSFetchMetadataResp fetchMetadata(1:TSFetchMetadataReq req)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// cancel a query </span></span>
<span class="line"><span>TSStatus cancelOperation(1:TSCancelOperationReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// close a query dataset</span></span>
<span class="line"><span>TSStatus closeOperation(1:TSCloseOperationReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// get time zone</span></span>
<span class="line"><span>TSGetTimeZoneResp getTimeZone(1:i64 sessionId);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// set time zone</span></span>
<span class="line"><span>TSStatus setTimeZone(1:TSSetTimeZoneReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// get server&#39;s properties</span></span>
<span class="line"><span>ServerProperties getProperties();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// CREATE DATABASE</span></span>
<span class="line"><span>TSStatus setStorageGroup(1:i64 sessionId, 2:string storageGroup);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// create timeseries</span></span>
<span class="line"><span>TSStatus createTimeseries(1:TSCreateTimeseriesReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// create multi timeseries</span></span>
<span class="line"><span>TSStatus createMultiTimeseries(1:TSCreateMultiTimeseriesReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// delete timeseries</span></span>
<span class="line"><span>TSStatus deleteTimeseries(1:i64 sessionId, 2:list&lt;string&gt; path)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// delete sttorage groups</span></span>
<span class="line"><span>TSStatus deleteStorageGroups(1:i64 sessionId, 2:list&lt;string&gt; storageGroup);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// insert record</span></span>
<span class="line"><span>TSStatus insertRecord(1:TSInsertRecordReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// insert record in string format</span></span>
<span class="line"><span>TSStatus insertStringRecord(1:TSInsertStringRecordReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// insert tablet</span></span>
<span class="line"><span>TSStatus insertTablet(1:TSInsertTabletReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// insert tablets in batch</span></span>
<span class="line"><span>TSStatus insertTablets(1:TSInsertTabletsReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// insert records in batch</span></span>
<span class="line"><span>TSStatus insertRecords(1:TSInsertRecordsReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// insert records of one device</span></span>
<span class="line"><span>TSStatus insertRecordsOfOneDevice(1:TSInsertRecordsOfOneDeviceReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// insert records in batch as string format</span></span>
<span class="line"><span>TSStatus insertStringRecords(1:TSInsertStringRecordsReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// test the latency of innsert tablet，caution：no data will be inserted, only for test latency</span></span>
<span class="line"><span>TSStatus testInsertTablet(1:TSInsertTabletReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// test the latency of innsert tablets，caution：no data will be inserted, only for test latency</span></span>
<span class="line"><span>TSStatus testInsertTablets(1:TSInsertTabletsReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// test the latency of innsert record，caution：no data will be inserted, only for test latency</span></span>
<span class="line"><span>TSStatus testInsertRecord(1:TSInsertRecordReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// test the latency of innsert record in string format，caution：no data will be inserted, only for test latency</span></span>
<span class="line"><span>TSStatus testInsertStringRecord(1:TSInsertStringRecordReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// test the latency of innsert records，caution：no data will be inserted, only for test latency</span></span>
<span class="line"><span>TSStatus testInsertRecords(1:TSInsertRecordsReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// test the latency of innsert records of one device，caution：no data will be inserted, only for test latency</span></span>
<span class="line"><span>TSStatus testInsertRecordsOfOneDevice(1:TSInsertRecordsOfOneDeviceReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// test the latency of innsert records in string formate，caution：no data will be inserted, only for test latency</span></span>
<span class="line"><span>TSStatus testInsertStringRecords(1:TSInsertStringRecordsReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// delete data</span></span>
<span class="line"><span>TSStatus deleteData(1:TSDeleteDataReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// execute raw data query</span></span>
<span class="line"><span>TSExecuteStatementResp executeRawDataQuery(1:TSRawDataQueryReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// request a statement id from server</span></span>
<span class="line"><span>i64 requestStatementId(1:i64 sessionId);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17)])])}const c=n(t,[["render",i]]),o=JSON.parse('{"path":"/UserGuide/V1.2.x/API/Programming-Rust-Native-API.html","title":"Rust Native API Native API","lang":"en-US","frontmatter":{"description":"Rust Native API Native API IoTDB uses Thrift as a cross language RPC framework, so access to IoTDB can be achieved through the interface provided by Thrift. This document will i...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Rust Native API Native API\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-01-12T10:25:39.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.2.x/API/Programming-Rust-Native-API.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Rust Native API Native API"}],["meta",{"property":"og:description","content":"Rust Native API Native API IoTDB uses Thrift as a cross language RPC framework, so access to IoTDB can be achieved through the interface provided by Thrift. This document will i..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2026-01-12T10:25:39.000Z"}],["meta",{"property":"article:modified_time","content":"2026-01-12T10:25:39.000Z"}],["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.2.x/API/Programming-Rust-Native-API.html"}]]},"git":{"createdTime":1768213539000,"updatedTime":1768213539000,"contributors":[{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":2.78,"words":834},"filePathRelative":"UserGuide/V1.2.x/API/Programming-Rust-Native-API.md","autoDesc":true}');export{c as comp,o as data};
