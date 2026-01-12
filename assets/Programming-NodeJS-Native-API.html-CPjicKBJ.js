import{_ as n,c as a,b as e,o as l}from"./app-C1IcKGP3.js";const i={};function p(t,s){return l(),a("div",null,[...s[0]||(s[0]=[e(`<h1 id="node-js-原生接口" tabindex="-1"><a class="header-anchor" href="#node-js-原生接口"><span>Node.js 原生接口</span></a></h1><p>IoTDB 使用 Thrift 作为跨语言的 RPC 框架，因此可以通过 Thrift 提供的接口来实现对 IoTDB 的访问。本文档将介绍如何生成可访问 IoTDB 的原生 Node.js 接口。</p><h2 id="依赖" tabindex="-1"><a class="header-anchor" href="#依赖"><span>依赖</span></a></h2><ul><li>JDK &gt;= 1.8</li><li>Node.js &gt;= 16.0.0</li><li>thrift 0.14.1</li><li>Linux、Macos 或其他类 unix 系统</li><li>Windows+bash (下载 IoTDB Go client 需要 git ，通过 WSL、cygwin、Git Bash 任意一种方式均可)</li></ul><p>必须安装 thrift（0.14.1 或更高版本）才能将 thrift 文件编译为 Node.js 代码。下面是官方的安装教程，最终，您应该得到一个 thrift 可执行文件。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code class="language-"><span class="line"><span>http://thrift.apache.org/docs/install/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="编译-thrift-库-生成-node-js-原生接口" tabindex="-1"><a class="header-anchor" href="#编译-thrift-库-生成-node-js-原生接口"><span>编译 thrift 库，生成 Node.js 原生接口</span></a></h2><ol><li>在 IoTDB <a href="https://github.com/apache/iotdb" target="_blank" rel="noopener noreferrer">源代码</a> 文件夹的根目录中找到 pom.xml 文件。</li><li>打开 pom.xml 文件，找到以下内容：</li></ol><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code class="language-xml"><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">execution</span><span style="color:#ABB2BF;">&gt;</span></span>
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
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">execution</span><span style="color:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>参考该设置，在 pom.xml 文件中添加以下内容，用来生成 Node.js 的原生接口：</li></ol><div class="language-xml line-numbers-mode" data-highlighter="shiki" data-ext="xml" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code class="language-xml"><span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">execution</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">&gt;generate-thrift-sources-nodejs&lt;/</span><span style="color:#E06C75;">id</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">phase</span><span style="color:#ABB2BF;">&gt;generate-sources&lt;/</span><span style="color:#E06C75;">phase</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">goals</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">goal</span><span style="color:#ABB2BF;">&gt;compile&lt;/</span><span style="color:#E06C75;">goal</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;">goals</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;</span><span style="color:#E06C75;">configuration</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">generator</span><span style="color:#ABB2BF;">&gt;js:node&lt;/</span><span style="color:#E06C75;">generator</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">thriftExecutable</span><span style="color:#ABB2BF;">&gt;\${thrift.exec.absolute.path}&lt;/</span><span style="color:#E06C75;">thriftExecutable</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">thriftSourceRoot</span><span style="color:#ABB2BF;">&gt;\${basedir}/src/main/thrift&lt;/</span><span style="color:#E06C75;">thriftSourceRoot</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">includes</span><span style="color:#ABB2BF;">&gt;**/common.thrift,**/client.thrift&lt;/</span><span style="color:#E06C75;">includes</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">        &lt;</span><span style="color:#E06C75;">outputDirectory</span><span style="color:#ABB2BF;">&gt;\${project.build.directory}/generated-sources-nodejs&lt;/</span><span style="color:#E06C75;">outputDirectory</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    &lt;/</span><span style="color:#E06C75;">configuration</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">execution</span><span style="color:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>在 IoTDB <a href="https://github.com/apache/iotdb" target="_blank" rel="noopener noreferrer">源代码</a> 文件夹的根目录下，运行<code>mvn clean generate-sources</code>，</li></ol><p>这个指令将自动删除<code>iotdb/iotdb-protocol/thrift/target</code> 和 <code>iotdb/iotdb-protocol/thrift-commons/target</code>中的文件，并使用新生成的 thrift 文件重新填充该文件夹。</p><p>这个文件夹在 git 中会被忽略，并且<strong>永远不应该被推到 git 中！</strong></p><p><strong>注意</strong>不要将<code>iotdb/iotdb-protocol/thrift/target</code> 和 <code>iotdb/iotdb-protocol/thrift-commons/target</code>上传到 git 仓库中 ！</p><h2 id="使用-node-js-原生接口" tabindex="-1"><a class="header-anchor" href="#使用-node-js-原生接口"><span>使用 Node.js 原生接口</span></a></h2><p>将 <code>iotdb/iotdb-protocol/thrift/target/generated-sources-nodejs/</code> 和 <code>iotdb/iotdb-protocol/thrift-commons/target/generated-sources-nodejs/</code> 中的文件复制到您的项目中，即可使用。</p><h2 id="支持的-rpc-接口" tabindex="-1"><a class="header-anchor" href="#支持的-rpc-接口"><span>支持的 rpc 接口</span></a></h2><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" style="background-color:#282c34;color:#abb2bf;"><pre class="shiki one-dark-pro vp-code"><code class="language-"><span class="line"><span>// 打开一个 session</span></span>
<span class="line"><span>TSOpenSessionResp openSession(1:TSOpenSessionReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 关闭一个 session</span></span>
<span class="line"><span>TSStatus closeSession(1:TSCloseSessionReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 执行一条 SQL 语句</span></span>
<span class="line"><span>TSExecuteStatementResp executeStatement(1:TSExecuteStatementReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 批量执行 SQL 语句</span></span>
<span class="line"><span>TSStatus executeBatchStatement(1:TSExecuteBatchStatementReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 执行查询 SQL 语句</span></span>
<span class="line"><span>TSExecuteStatementResp executeQueryStatement(1:TSExecuteStatementReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 执行插入、删除 SQL 语句</span></span>
<span class="line"><span>TSExecuteStatementResp executeUpdateStatement(1:TSExecuteStatementReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 向服务器取下一批查询结果</span></span>
<span class="line"><span>TSFetchResultsResp fetchResults(1:TSFetchResultsReq req)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取元数据</span></span>
<span class="line"><span>TSFetchMetadataResp fetchMetadata(1:TSFetchMetadataReq req)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 取消某次查询操作</span></span>
<span class="line"><span>TSStatus cancelOperation(1:TSCancelOperationReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 关闭查询操作数据集，释放资源</span></span>
<span class="line"><span>TSStatus closeOperation(1:TSCloseOperationReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取时区信息</span></span>
<span class="line"><span>TSGetTimeZoneResp getTimeZone(1:i64 sessionId);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 设置时区</span></span>
<span class="line"><span>TSStatus setTimeZone(1:TSSetTimeZoneReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 获取服务端配置</span></span>
<span class="line"><span>ServerProperties getProperties();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 设置 database</span></span>
<span class="line"><span>TSStatus setStorageGroup(1:i64 sessionId, 2:string storageGroup);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建时间序列</span></span>
<span class="line"><span>TSStatus createTimeseries(1:TSCreateTimeseriesReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 创建多条时间序列</span></span>
<span class="line"><span>TSStatus createMultiTimeseries(1:TSCreateMultiTimeseriesReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 删除时间序列</span></span>
<span class="line"><span>TSStatus deleteTimeseries(1:i64 sessionId, 2:list&lt;string&gt; path)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 删除 database</span></span>
<span class="line"><span>TSStatus deleteStorageGroups(1:i64 sessionId, 2:list&lt;string&gt; storageGroup);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 按行插入数据</span></span>
<span class="line"><span>TSStatus insertRecord(1:TSInsertRecordReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 按 String 格式插入一条数据</span></span>
<span class="line"><span>TSStatus insertStringRecord(1:TSInsertStringRecordReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 按列插入数据</span></span>
<span class="line"><span>TSStatus insertTablet(1:TSInsertTabletReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 按列批量插入数据</span></span>
<span class="line"><span>TSStatus insertTablets(1:TSInsertTabletsReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 按行批量插入数据</span></span>
<span class="line"><span>TSStatus insertRecords(1:TSInsertRecordsReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 按行批量插入同属于某个设备的数据</span></span>
<span class="line"><span>TSStatus insertRecordsOfOneDevice(1:TSInsertRecordsOfOneDeviceReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 按 String 格式批量按行插入数据</span></span>
<span class="line"><span>TSStatus insertStringRecords(1:TSInsertStringRecordsReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 测试按列插入数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟</span></span>
<span class="line"><span>TSStatus testInsertTablet(1:TSInsertTabletReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 测试批量按列插入数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟</span></span>
<span class="line"><span>TSStatus testInsertTablets(1:TSInsertTabletsReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 测试按行插入数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟</span></span>
<span class="line"><span>TSStatus testInsertRecord(1:TSInsertRecordReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 测试按 String 格式按行插入数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟</span></span>
<span class="line"><span>TSStatus testInsertStringRecord(1:TSInsertStringRecordReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 测试按行插入数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟</span></span>
<span class="line"><span>TSStatus testInsertRecords(1:TSInsertRecordsReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 测试按行批量插入同属于某个设备的数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟</span></span>
<span class="line"><span>TSStatus testInsertRecordsOfOneDevice(1:TSInsertRecordsOfOneDeviceReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 测试按 String 格式批量按行插入数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟</span></span>
<span class="line"><span>TSStatus testInsertStringRecords(1:TSInsertStringRecordsReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 删除数据</span></span>
<span class="line"><span>TSStatus deleteData(1:TSDeleteDataReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 执行原始数据查询</span></span>
<span class="line"><span>TSExecuteStatementResp executeRawDataQuery(1:TSRawDataQueryReq req);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 向服务器申请一个查询语句 ID</span></span>
<span class="line"><span>i64 requestStatementId(1:i64 sessionId);</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19)])])}const c=n(i,[["render",p]]),o=JSON.parse('{"path":"/zh/UserGuide/V1.3.x/API/Programming-NodeJS-Native-API.html","title":"Node.js 原生接口","lang":"zh-CN","frontmatter":{"description":"Node.js 原生接口 IoTDB 使用 Thrift 作为跨语言的 RPC 框架，因此可以通过 Thrift 提供的接口来实现对 IoTDB 的访问。本文档将介绍如何生成可访问 IoTDB 的原生 Node.js 接口。 依赖 JDK >= 1.8 Node.js >= 16.0.0 thrift 0.14.1 Linux、Macos 或其他类 u...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Node.js 原生接口\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2026-01-12T10:25:39.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.3.x/API/Programming-NodeJS-Native-API.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Node.js 原生接口"}],["meta",{"property":"og:description","content":"Node.js 原生接口 IoTDB 使用 Thrift 作为跨语言的 RPC 框架，因此可以通过 Thrift 提供的接口来实现对 IoTDB 的访问。本文档将介绍如何生成可访问 IoTDB 的原生 Node.js 接口。 依赖 JDK >= 1.8 Node.js >= 16.0.0 thrift 0.14.1 Linux、Macos 或其他类 u..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2026-01-12T10:25:39.000Z"}],["meta",{"property":"article:modified_time","content":"2026-01-12T10:25:39.000Z"}],["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.3.x/API/Programming-NodeJS-Native-API.html"}]]},"git":{"createdTime":1768213539000,"updatedTime":1768213539000,"contributors":[{"name":"CritasWang","username":"CritasWang","email":"critas@outlook.com","commits":1,"url":"https://github.com/CritasWang"}]},"readingTime":{"minutes":4.07,"words":1222},"filePathRelative":"zh/UserGuide/V1.3.x/API/Programming-NodeJS-Native-API.md","autoDesc":true}');export{c as comp,o as data};
