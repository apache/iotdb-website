import{_ as d,r,o,c as l,a as t,d as s,e,b as i,f as a}from"./app-d463a4e4.js";const c={},u=a(`<h1 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h1><p><strong>如何查询我的 IoTDB 版本</strong></p><p>有几种方法可以识别您使用的 IoTDB 版本：</p><ul><li>启动 IoTDB 的命令行界面：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; ./start-cli.sh -p 6667 -pw root -u root -h localhost
 _____       _________  ______   ______    
|_   _|     |  _   _  ||_   _ \`.|_   _ \\   
  | |   .--.|_/ | | \\_|  | | \`. \\ | |_) |  
  | | / .&#39;\`\\ \\  | |      | |  | | |  __&#39;.  
 _| |_| \\__. | _| |_    _| |_.&#39; /_| |__) | 
|_____|&#39;.__.&#39; |_____|  |______.&#39;|_______/  version x.x.x
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>检查 pom.xml 文件：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;version&gt;x.x.x&lt;/version&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>使用 JDBC API:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>String iotdbVersion = tsfileDatabaseMetadata.getDatabaseProductVersion();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>使用命令行接口：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show version
show version
+---------------+
|version        |
+---------------+
|x.x.x          |
+---------------+
Total line number = 1
It costs 0.241s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>在哪里可以找到 IoTDB 的日志</strong></p><p>假设您的根目录是：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">pwd</span>
/workspace/iotdb

$ <span class="token function">ls</span> <span class="token parameter variable">-l</span>
server/
cli/
pom.xml
Readme.md
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假如 <code>$IOTDB_HOME = /workspace/iotdb/server/target/iotdb-server-{project.version}</code></p><p>假如 <code>$IOTDB_CLI_HOME = /workspace/iotdb/cli/target/iotdb-cli-{project.version}</code></p><p>在默认的设置里，logs 文件夹会被存储在<code>IOTDB_HOME/logs</code>。您可以在<code>IOTDB_HOME/conf</code>目录下的<code>logback.xml</code>文件中修改日志的级别和日志的存储路径。</p><p><strong>在哪里可以找到 IoTDB 的数据文件</strong></p><p>在默认的设置里，数据文件（包含 TsFile，metadata，WAL）被存储在<code>IOTDB_HOME/data/datanode</code>文件夹。</p><p><strong>如何知道 IoTDB 中存储了多少时间序列</strong></p><p>使用 IoTDB 的命令行接口：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show timeseries root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在返回的结果里，会展示<code>Total timeseries number</code>，这个数据就是 IoTDB 中 timeseries 的数量。</p><p>在当前版本中，IoTDB 支持直接使用命令行接口查询时间序列的数量：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; count timeseries root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果您使用的是 Linux 操作系统，您可以使用以下的 Shell 命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; grep &quot;0,root&quot; $IOTDB_HOME/data/system/schema/mlog.txt |  wc -l
&gt;   6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>可以使用 Hadoop 和 Spark 读取 IoTDB 中的 TsFile 吗？</strong></p>`,28),p={href:"https://github.com/apache/iotdb/tree/master/hadoop",target:"_blank",rel:"noopener noreferrer"},v={href:"https://github.com/apache/iotdb/tree/master/spark",target:"_blank",rel:"noopener noreferrer"},m={href:"https://github.com/apache/iotdb/tree/master/grafana",target:"_blank",rel:"noopener noreferrer"},g=a(`<p><strong>IoTDB 如何处理重复的数据点</strong></p><p>一个数据点是由一个完整的时间序列路径（例如：<code>root.vehicle.d0.s0</code>) 和时间戳唯一标识的。如果您使用与现有点相同的路径和时间戳提交一个新点，那么 IoTDB 将更新这个点的值，而不是插入一个新点。</p><p><strong>我如何知道具体的 timeseries 的类型</strong></p><p>在 IoTDB 的命令行接口中使用 SQL <code>SHOW TIMESERIES &lt;timeseries path&gt;</code>:</p><p>例如：如果您想知道所有 timeseries 的类型 &lt;timeseries path&gt; 应该为 <code>root</code>。上面的 SQL 应该修改为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show timeseries root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果您想查询一个指定的时间序列，您可以修改 &lt;timeseries path&gt; 为时间序列的完整路径。比如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show timeseries root.fit.d1.s1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>您还可以在 timeseries 路径中使用通配符：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show timeseries root.fit.d1.*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>如何更改 IoTDB 的客户端时间显示格式</strong></p><p>IoTDB 客户端默认显示的时间是人类可读的（比如：<code>1970-01-01T08:00:00.001</code>)，如果您想显示是时间戳或者其他可读格式，请在启动命令上添加参数<code>-disableISO8601</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; $IOTDB_CLI_HOME/sbin/start-cli.sh -h 127.0.0.1 -p 6667 -u root -pw root -disableISO8601
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>怎么处理来自<code>org.apache.ratis.grpc.server.GrpcLogAppender</code>的<code>IndexOutOfBoundsException</code></strong></p><p>这是我们的依赖Ratis 2.4.1的一个内部错误日志，不会对数据写入和读取造成任何影响。<br> 已经报告给Ratis社区，并会在未来的版本中修复。</p>`,15);function _(b,h){const n=r("ExternalLinkIcon");return o(),l("div",null,[t(`

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

`),t(" TOC "),u,s("p",null,[e("是的。IoTDB 与开源生态紧密结合。IoTDB 支持 "),s("a",p,[e("Hadoop"),i(n)]),e(", "),s("a",v,[e("Spark"),i(n)]),e(" 和 "),s("a",m,[e("Grafana"),i(n)]),e(" 可视化工具。")]),g])}const I=d(c,[["render",_],["__file","Frequently-asked-questions.html.vue"]]);export{I as default};
