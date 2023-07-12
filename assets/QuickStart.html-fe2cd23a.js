import{_ as r,r as d,o as l,c,a as u,d as e,e as i,b as t,w as o,f as n}from"./app-8019c90f.js";const h={},m=e("h1",{id:"quick-start",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#quick-start","aria-hidden":"true"},"#"),i(" Quick Start")],-1),v=e("h2",{id:"prerequisites",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#prerequisites","aria-hidden":"true"},"#"),i(" Prerequisites")],-1),b=e("p",null,"To use IoTDB, you need to have:",-1),p=e("ol",null,[e("li",null,"Java >= 1.8 (Please make sure the environment path has been set)"),e("li",null,'Set the max open files num as 65535 to avoid "too many open files" problem.')],-1),g=e("h2",{id:"installation",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#installation","aria-hidden":"true"},"#"),i(" Installation")],-1),f=e("p",null,"IoTDB provides you three installation methods, you can refer to the following suggestions, choose one of them:",-1),_=e("li",null,"Installation from source code. If you need to modify the code yourself, you can use this method.",-1),T=e("li",null,"Installation from binary files. Download the binary files from the official website. This is the recommended method, in which you will get a binary released package which is out-of-the-box.",-1),x={href:"https://github.com/apache/iotdb/blob/master/docker/src/main",target:"_blank",rel:"noopener noreferrer"},w=e("h2",{id:"download",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#download","aria-hidden":"true"},"#"),i(" Download")],-1),I=e("br",null,null,-1),S={href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"},E=n('<h2 id="configurations" tabindex="-1"><a class="header-anchor" href="#configurations" aria-hidden="true">#</a> Configurations</h2><p>Configuration files are under &quot;conf&quot; folder</p><ul><li>environment config module (<code>datanode-env.bat</code>, <code>datanode-env.sh</code>),</li><li>system config module (<code>iotdb-datanode.properties</code>)</li><li>log config module (<code>logback.xml</code>).</li></ul>',3),D=n(`<h2 id="start" tabindex="-1"><a class="header-anchor" href="#start" aria-hidden="true">#</a> Start</h2><p>You can go through the following step to test the installation, if there is no error after execution, the installation is completed.</p><h3 id="start-iotdb" tabindex="-1"><a class="header-anchor" href="#start-iotdb" aria-hidden="true">#</a> Start IoTDB</h3><p>IoTDB is a database based on distributed system. To launch IoTDB, you can first start standalone mode (i.e. 1 ConfigNode and 1 DataNode) to check.</p><p>Users can start IoTDB standalone mode by the start-standalone script under the sbin folder.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Unix/OS X
&gt; bash sbin/start-standalone.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Windows
&gt; sbin\\start-standalone.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Note: Currently, To run standalone mode, you need to ensure that all addresses are set to 127.0.0.1, If you need to access the IoTDB from a machine different from the one where the IoTDB is located, please change the configuration item <code>dn_rpc_address</code> to the IP of the machine where the IoTDB lives. And replication factors set to 1, which is by now the default setting.<br> Besides, it&#39;s recommended to use SimpleConsensus in this mode, since it brings additional efficiency.</p><h3 id="use-cli" tabindex="-1"><a class="header-anchor" href="#use-cli" aria-hidden="true">#</a> Use Cli</h3><p>IoTDB offers different ways to interact with server, here we introduce basic steps of using Cli tool to insert and query data.</p><p>After installing IoTDB, there is a default user &#39;root&#39;, its default password is also &#39;root&#39;. Users can use this<br> default user to login Cli to use IoTDB. The startup script of Cli is the start-cli script in the folder sbin. When executing the script, user should assign<br> IP, PORT, USER_NAME and PASSWORD. The default parameters are &quot;-h 127.0.0.1 -p 6667 -u root -pw -root&quot;.</p><p>Here is the command for starting the Cli:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Unix/OS X
&gt; bash sbin/start-cli.sh -h 127.0.0.1 -p 6667 -u root -pw root

# Windows
&gt; sbin\\start-cli.bat -h 127.0.0.1 -p 6667 -u root -pw root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The command line client is interactive so if everything is ready you should see the welcome logo and statements:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> _____       _________  ______   ______
|_   _|     |  _   _  ||_   _ \`.|_   _ \\
  | |   .--.|_/ | | \\_|  | | \`. \\ | |_) |
  | | / .&#39;\`\\ \\  | |      | |  | | |  __&#39;.
 _| |_| \\__. | _| |_    _| |_.&#39; /_| |__) |
|_____|&#39;.__.&#39; |_____|  |______.&#39;|_______/  version x.x.x


Successfully login at 127.0.0.1:6667
IoTDB&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="basic-commands-for-iotdb" tabindex="-1"><a class="header-anchor" href="#basic-commands-for-iotdb" aria-hidden="true">#</a> Basic commands for IoTDB</h3><p>Now, let us introduce the way of creating timeseries, inserting data and querying data.</p><p>The data in IoTDB is organized as timeseries, in each timeseries there are some data-time pairs, and every timeseries is owned by a database. Before defining a timeseries, we should define a database using create DATABASE, and here is an example:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; create database root.ln
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>We can also use SHOW DATABASES to check created databases:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; SHOW DATABASES
+-----------------------------------+
|                           Database|
+-----------------------------------+
|                            root.ln|
+-----------------------------------+
Database number = 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After the database is set, we can use CREATE TIMESERIES to create new timeseries. When we create a timeseries, we should define its data type and the encoding scheme. We create two timeseries as follow:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; CREATE TIMESERIES root.ln.wf01.wt01.status WITH DATATYPE=BOOLEAN, ENCODING=PLAIN
IoTDB&gt; CREATE TIMESERIES root.ln.wf01.wt01.temperature WITH DATATYPE=FLOAT, ENCODING=RLE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>To query the specific timeseries, use SHOW TIMESERIES &lt;Path&gt;. &lt;Path&gt; represents the path of the timeseries. Its default value is null, which means querying all the timeseries in the system(the same as using &quot;SHOW TIMESERIES root&quot;). Here are the examples:</p><ol><li>Query all timeseries in the system:</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; SHOW TIMESERIES
+-------------------------------+---------------+--------+--------+
|                     Timeseries|       Database|DataType|Encoding|
+-------------------------------+---------------+--------+--------+
|       root.ln.wf01.wt01.status|        root.ln| BOOLEAN|   PLAIN|
|  root.ln.wf01.wt01.temperature|        root.ln|   FLOAT|     RLE|
+-------------------------------+---------------+--------+--------+
Total timeseries number = 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Query a specific timeseries(root.ln.wf01.wt01.status):</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; SHOW TIMESERIES root.ln.wf01.wt01.status
+------------------------------+--------------+--------+--------+
|                    Timeseries|      Database|DataType|Encoding|
+------------------------------+--------------+--------+--------+
|      root.ln.wf01.wt01.status|       root.ln| BOOLEAN|   PLAIN|
+------------------------------+--------------+--------+--------+
Total timeseries number = 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Insert timeseries data is the basic operation of IoTDB, you can use ‘INSERT’ command to finish this. Before insert you should assign the timestamp and the suffix path name:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; INSERT INTO root.ln.wf01.wt01(timestamp,status) values(100,true);
IoTDB&gt; INSERT INTO root.ln.wf01.wt01(timestamp,status,temperature) values(200,false,20.71)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The data we’ve just inserted displays like this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; SELECT status FROM root.ln.wf01.wt01
+-----------------------+------------------------+
|                   Time|root.ln.wf01.wt01.status|
+-----------------------+------------------------+
|1970-01-01T08:00:00.100|                    true|
|1970-01-01T08:00:00.200|                   false|
+-----------------------+------------------------+
Total line number = 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>We can also query several timeseries data at once like this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; SELECT * FROM root.ln.wf01.wt01
+-----------------------+--------------------------+-----------------------------+
|                   Time|  root.ln.wf01.wt01.status|root.ln.wf01.wt01.temperature|
+-----------------------+--------------------------+-----------------------------+
|1970-01-01T08:00:00.100|                      true|                         null|
|1970-01-01T08:00:00.200|                     false|                        20.71|
+-----------------------+--------------------------+-----------------------------+
Total line number = 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The commands to exit the Cli are:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; quit
or
IoTDB&gt; exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36),y=n(`<h3 id="stop-iotdb" tabindex="-1"><a class="header-anchor" href="#stop-iotdb" aria-hidden="true">#</a> Stop IoTDB</h3><p>The server can be stopped with ctrl-C or the following script:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Unix/OS X
&gt; bash sbin/stop-standalone.sh

# Windows
&gt; sbin\\stop-standalone.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note: In Linux, please add the &quot;sudo&quot; as far as possible, or else the stopping process may fail.<br> More explanations are in Cluster/Cluster-setup.md.</p><h3 id="administration-management" tabindex="-1"><a class="header-anchor" href="#administration-management" aria-hidden="true">#</a> Administration management</h3><p>There is a default user in IoTDB after the initial installation: root, and the default password is root. This user is an administrator user, who cannot be deleted and has all the privileges. Neither can new privileges be granted to the root user nor can privileges owned by the root user be deleted.</p><p>You can alter the password of root using the following command：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALTER USER &lt;username&gt; SET PASSWORD &lt;password&gt;;
Example: IoTDB &gt; ALTER USER root SET PASSWORD &#39;newpwd&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,8),B={href:"https://iotdb.apache.org/UserGuide/V1.0.x/Administration-Management/Administration.html",target:"_blank",rel:"noopener noreferrer"},A=n('<h2 id="basic-configuration" tabindex="-1"><a class="header-anchor" href="#basic-configuration" aria-hidden="true">#</a> Basic configuration</h2><p>The configuration files is in the <code>conf</code> folder, includes:</p><ul><li>environment configuration (<code>datanode-env.bat</code>, <code>datanode-env.sh</code>),</li><li>system configuration (<code>iotdb-datanode.properties</code>)</li><li>log configuration (<code>logback.xml</code>).</li></ul>',3);function N(R,O){const a=d("RouterLink"),s=d("ExternalLinkIcon");return l(),c("div",null,[u(`

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

`),m,e("p",null,[i("This short guide will walk you through the basic process of using IoTDB. For a more-complete guide, please visit our website's "),t(a,{to:"/UserGuide/V1.2.x/IoTDB-Introduction/What-is-IoTDB.html"},{default:o(()=>[i("User Guide")]),_:1}),i(".")]),v,b,p,g,f,e("ul",null,[_,T,e("li",null,[i("Using Docker：The path to the dockerfile is "),e("a",x,[i("github"),t(s)])])]),w,e("p",null,[i("You can download the binary file from:"),I,e("a",S,[i("Download Page"),t(s)])]),E,e("p",null,[i("For more, see "),t(a,{to:"/UserGuide/V1.2.x/Reference/DataNode-Config-Manual.html"},{default:o(()=>[i("Config")]),_:1}),i(" in detail.")]),D,e("p",null,[i("For more on what commands are supported by IoTDB SQL, see "),t(a,{to:"/UserGuide/V1.2.x/Reference/SQL-Reference.html"},{default:o(()=>[i("SQL Reference")]),_:1}),i(".")]),y,e("p",null,[i("More about administration management："),e("a",B,[i("Administration Management"),t(s)])]),A])}const C=r(h,[["render",N],["__file","QuickStart.html.vue"]]);export{C as default};
