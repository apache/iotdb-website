import{_ as r,r as d,o,c as u,a as c,d as e,e as i,b as n,w as l,f as a}from"./app-DXb3RAV5.js";const v={},p=e("h1",{id:"快速上手",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#快速上手","aria-hidden":"true"},"#"),i(" 快速上手")],-1),m=e("h2",{id:"快速上手-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#快速上手-1","aria-hidden":"true"},"#"),i(" 快速上手")],-1),b=e("h3",{id:"安装环境",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装环境","aria-hidden":"true"},"#"),i(" 安装环境")],-1),g=e("p",null,"安装前需要保证设备上配有 JDK>=1.8 的运行环境，并配置好 JAVA_HOME 环境变量。",-1),h=e("p",null,"设置最大文件打开数为 65535。",-1),x=e("h3",{id:"安装步骤",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装步骤","aria-hidden":"true"},"#"),i(" 安装步骤")],-1),_=e("p",null,"IoTDB 支持多种安装途径。用户可以使用三种方式对 IoTDB 进行安装——下载二进制可运行程序、使用源码、使用 docker 镜像。",-1),T=e("li",null,[e("p",null,"使用源码：您可以从代码仓库下载源码并编译，具体编译方法见下方。")],-1),f={href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"},I={href:"https://github.com/apache/iotdb/blob/master/docker/src/main",target:"_blank",rel:"noopener noreferrer"},S=a(`<h3 id="软件目录结构" tabindex="-1"><a class="header-anchor" href="#软件目录结构" aria-hidden="true">#</a> 软件目录结构</h3><ul><li>sbin 启动和停止脚本目录</li><li>conf 配置文件目录</li><li>tools 系统工具目录</li><li>lib 依赖包目录</li></ul><h3 id="iotdb-试用" tabindex="-1"><a class="header-anchor" href="#iotdb-试用" aria-hidden="true">#</a> IoTDB 试用</h3><p>用户可以根据以下操作对 IoTDB 进行简单的试用，若以下操作均无误，则说明 IoTDB 安装成功。</p><h4 id="启动-iotdb" tabindex="-1"><a class="header-anchor" href="#启动-iotdb" aria-hidden="true">#</a> 启动 IoTDB</h4><p>用户可以使用 sbin 文件夹下的 start-server 脚本启动 IoTDB。</p><p>Linux 系统与 MacOS 系统启动命令如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; nohup sbin/start-server.sh -f &gt;/dev/null 2&gt;&amp;1 &amp;
or
&gt; nohup sbin/start-server.sh -b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可选参数:</p><ul><li>默认不含任何参数时, iotdb 将在后台启动，并且不在控制台打印日志</li><li>&quot;-v&quot;: 查看iotdb版本</li><li>&quot;-f&quot;: 在控制台前台启动iotdb (v0.14前是默认设置)</li><li>&quot;-b&quot;: 在后台启动iotdb，控制台不打印日志</li><li>&quot;-p &lt;pidfile&gt;&quot;: 将pid保存到指定的文件中</li><li>&quot;-h&quot;: 查看帮助</li><li>&quot;printgc&quot;(必须是最后一个参数): 打印GC日志 (从v0.14起，该参数将被-g取代)</li><li>&quot;-g&quot;: 打印GC日志</li><li>&quot;-c &lt;config folder&gt;&quot;: 设置IOTDB_CONF变量的值，从而修改配置文件所在文件夹</li><li>&quot;-D &lt;a=b&gt;&quot;: 设置Java的系统环境变量或其他参数</li><li>&quot;-H &lt;filePath&gt; 当OOM异常时存储堆快照到&lt;filePath&gt; (仅 Linux/Mac生效, 且要求iotdb内存小于16GB)&quot;</li><li>&quot;-E &lt;\\filePath&gt; save error file of JVM to &lt;filePath&gt; (仅 Linux/Mac生效)&quot;</li><li>&quot;-X &lt;command&gt; 等价于JVM中 -XX:&lt;command&gt;&quot;</li><li></li></ul><p>Windows 系统启动命令如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; sbin\\start-server.bat 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Windows 系统支持 -c, -v, -f, -b 四个参数。</p><h4 id="使用-cli-工具" tabindex="-1"><a class="header-anchor" href="#使用-cli-工具" aria-hidden="true">#</a> 使用 Cli 工具</h4><p>IoTDB 为用户提供多种与服务器交互的方式，在此我们介绍使用 Cli 工具进行写入、查询数据的基本步骤。</p><p>初始安装后的 IoTDB 中有一个默认用户：root，默认密码为 root。用户可以使用该用户运行 Cli 工具操作 IoTDB。Cli 工具启动脚本为 sbin 文件夹下的 start-cli 脚本。启动脚本时需要指定运行 ip、port、username 和 password。若脚本未给定对应参数，则默认参数为&quot;-h 127.0.0.1 -p 6667 -u root -pw -root&quot;</p><p>以下启动语句为服务器在本机运行，且用户未更改运行端口号的示例。</p><p>Linux 系统与 MacOS 系统启动命令如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; sbin/start-cli.sh -h 127.0.0.1 -p 6667 -u root -pw root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Windows 系统启动命令如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; sbin\\start-cli.bat -h 127.0.0.1 -p 6667 -u root -pw root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动后出现如图提示即为启动成功。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> _____       _________  ______   ______
|_   _|     |  _   _  ||_   _ \`.|_   _ \\
  | |   .--.|_/ | | \\_|  | | \`. \\ | |_) |
  | | / .&#39;\`\\ \\  | |      | |  | | |  __&#39;.
 _| |_| \\__. | _| |_    _| |_.&#39; /_| |__) |
|_____|&#39;.__.&#39; |_____|  |______.&#39;|_______/  version x.x.x

IoTDB&gt; login successfully
IoTDB&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="iotdb-的基本操作" tabindex="-1"><a class="header-anchor" href="#iotdb-的基本操作" aria-hidden="true">#</a> IoTDB 的基本操作</h4><p>在这里，我们首先介绍一下使用 Cli 工具创建时间序列、插入数据并查看数据的方法。</p><p>数据在 IoTDB 中的组织形式是以时间序列为单位，每一个时间序列中有若干个数据-时间点对，每一个时间序列属于一个存储组。在定义时间序列之前，要首先使用 SET STORAGE GROUP 语句定义存储组。SQL 语句如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; SET STORAGE GROUP TO root.ln
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们可以使用 SHOW STORAGE GROUP 语句来查看系统当前所有的存储组，SQL 语句如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; SHOW STORAGE GROUP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行结果为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+
|storage group|
+-------------+
|      root.ln|
+-------------+
Total line number = 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>存储组设定后，使用 CREATE TIMESERIES 语句可以创建新的时间序列，创建时间序列时需要定义数据的类型和编码方式。此处我们创建两个时间序列，SQL 语句如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; CREATE TIMESERIES root.ln.wf01.wt01.status WITH DATATYPE=BOOLEAN, ENCODING=PLAIN
IoTDB&gt; CREATE TIMESERIES root.ln.wf01.wt01.temperature WITH DATATYPE=FLOAT, ENCODING=RLE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>为了查看指定的时间序列，我们可以使用 SHOW TIMESERIES &lt;Path&gt;语句，其中、&lt;Path&gt;表示时间序列对应的路径，默认值为空，表示查看系统中所有的时间序列。下面是两个例子：</p><p>使用 SHOW TIMESERIES 语句查看系统中存在的所有时间序列，SQL 语句如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; SHOW TIMESERIES
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行结果为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-----+-------------+--------+--------+-----------+----+----------+
|                   timeseries|alias|storage group|dataType|encoding|compression|tags|attributes|
+-----------------------------+-----+-------------+--------+--------+-----------+----+----------+
|root.ln.wf01.wt01.temperature| null|      root.ln|   FLOAT|     RLE|     SNAPPY|null|      null|
|     root.ln.wf01.wt01.status| null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|null|      null|
+-----------------------------+-----+-------------+--------+--------+-----------+----+----------+
Total line number = 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看具体的时间序列 root.ln.wf01.wt01.status 的 SQL 语句如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; SHOW TIMESERIES root.ln.wf01.wt01.status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行结果为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------------------+-----+-------------+--------+--------+-----------+----+----------+
|              timeseries|alias|storage group|dataType|encoding|compression|tags|attributes|
+------------------------+-----+-------------+--------+--------+-----------+----+----------+
|root.ln.wf01.wt01.status| null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|null|      null|
+------------------------+-----+-------------+--------+--------+-----------+----+----------+
Total line number = 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，我们使用 INSERT 语句向 root.ln.wf01.wt01.status 时间序列中插入数据，在插入数据时需要首先指定时间戳和路径后缀名称：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; INSERT INTO root.ln.wf01.wt01(timestamp,status) values(100,true);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们也可以向多个时间序列中同时插入数据，这些时间序列同属于一个时间戳：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; INSERT INTO root.ln.wf01.wt01(timestamp,status,temperature) values(200,false,20.71)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最后，我们查询之前插入的数据。使用 SELECT 语句我们可以查询指定的时间序列的数据结果，SQL 语句如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; SELECT status FROM root.ln.wf01.wt01
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------+------------------------+
|                   Time|root.ln.wf01.wt01.status|
+-----------------------+------------------------+
|1970-01-01T08:00:00.100|                    true|
|1970-01-01T08:00:00.200|                   false|
+-----------------------+------------------------+
Total line number = 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们也可以查询多个时间序列的数据结果，SQL 语句如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; SELECT * FROM root.ln.wf01.wt01
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查询结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------+--------------------------+-----------------------------+
|                   Time|  root.ln.wf01.wt01.status|root.ln.wf01.wt01.temperature|
+-----------------------+--------------------------+-----------------------------+
|1970-01-01T08:00:00.100|                      true|                         null|
|1970-01-01T08:00:00.200|                     false|                        20.71|
+-----------------------+--------------------------+-----------------------------+
Total line number = 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输入 quit 或 exit 可退出 Cli 结束本次会话。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; quit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>或</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,58),E=a(`<h4 id="停止-iotdb" tabindex="-1"><a class="header-anchor" href="#停止-iotdb" aria-hidden="true">#</a> 停止 IoTDB</h4><p>用户可以使用$IOTDB_HOME/sbin 文件夹下的 stop-server 脚本停止 IoTDB。</p><p>Linux 系统与 MacOS 系统停止命令如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; $sbin/stop-server.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Windows 系统停止命令如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; $sbin\\stop-server.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="iotdb-的权限管理" tabindex="-1"><a class="header-anchor" href="#iotdb-的权限管理" aria-hidden="true">#</a> IoTDB 的权限管理</h4><p>初始安装后的 IoTDB 中有一个默认用户：root，默认密码为 root。该用户为管理员用户，固定拥有所有权限，无法被赋予、撤销权限，也无法被删除。</p><p>您可以通过以下命令修改其密码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER USER &lt;username&gt; SET PASSWORD &lt;password&gt;;
Example: IoTDB &gt; ALTER USER root SET PASSWORD &#39;newpwd&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,10),w={href:"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Administration-Management/Administration.html",target:"_blank",rel:"noopener noreferrer"},D=a('<h3 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置" aria-hidden="true">#</a> 基础配置</h3><p>配置文件在&quot;conf&quot;文件夹下，包括：</p><ul><li>环境配置模块 (<code>iotdb-env.bat</code>, <code>iotdb-env.sh</code>),</li><li>系统配置模块 (<code>iotdb-engine.properties</code>)</li><li>日志配置模块 (<code>logback.xml</code>).</li></ul>',3);function O(B,L){const s=d("RouterLink"),t=d("ExternalLinkIcon");return o(),u("div",null,[c(`

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

`),p,m,e("p",null,[i("本文将介绍关于 IoTDB 使用的基本流程，如果需要更多信息，请浏览我们官网的 "),n(s,{to:"/zh/UserGuide/V0.13.x/IoTDB-Introduction/What-is-IoTDB.html"},{default:l(()=>[i("指引")]),_:1}),i(".")]),b,g,h,x,_,e("ul",null,[T,e("li",null,[e("p",null,[i("二进制可运行程序：请从 "),e("a",f,[i("下载"),n(t)]),i(" 页面下载最新的安装包，解压后即完成安装。")])]),e("li",null,[e("p",null,[i("使用 Docker 镜像：dockerfile 文件位于 "),e("a",I,[i("github"),n(t)])])])]),S,e("p",null,[i("想要浏览更多 IoTDB 数据库支持的命令，请浏览 "),n(s,{to:"/zh/UserGuide/V0.13.x/Reference/SQL-Reference.html"},{default:l(()=>[i("SQL Reference")]),_:1}),i(".")]),E,e("p",null,[i("权限管理的具体内容可以参考："),e("a",w,[i("权限管理"),n(t)])]),D])}const R=r(v,[["render",O],["__file","QuickStart.html.vue"]]);export{R as default};
