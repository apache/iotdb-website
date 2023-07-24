import{_ as t,r as o,o as l,c as r,a as i,d as a,e,b as p,f as s}from"./app-c075fd0e.js";const c={},d=s('<h1 id="tsfile-load-and-export-tool" tabindex="-1"><a class="header-anchor" href="#tsfile-load-and-export-tool" aria-hidden="true">#</a> TsFile Load And Export Tool</h1><h2 id="tsfile-load-tool" tabindex="-1"><a class="header-anchor" href="#tsfile-load-tool" aria-hidden="true">#</a> TsFile Load Tool</h2><h3 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h3><p>The load external tsfile tool allows users to load tsfiles, delete a tsfile, or move a tsfile to target directory from the running Apache IoTDB instance. Alternatively, you can use scripts to load tsfiles into IoTDB, for more information.</p><h3 id="load-with-sql" tabindex="-1"><a class="header-anchor" href="#load-with-sql" aria-hidden="true">#</a> Load with SQL</h3><p>The user sends specified commands to the Apache IoTDB system through the Cli tool or JDBC to use the tool.</p><h4 id="load-tsfiles" tabindex="-1"><a class="header-anchor" href="#load-tsfiles" aria-hidden="true">#</a> load tsfiles</h4><p>The command to load tsfiles is <code>load &lt;path/dir&gt; [sglevel=int][verify=true/false][onSuccess=delete/none]</code>.</p><p>This command has two usages:</p><ol><li>Load a single tsfile by specifying a file path (absolute path).</li></ol><p>The first parameter indicates the path of the tsfile to be loaded. This command has three options: sglevel, verify, onSuccess.</p><p>SGLEVEL option. If the database correspond to the tsfile does not exist, the user can set the level of database through the fourth parameter. By default, it uses the database level which is set in <code>iotdb-datanode.properties</code>.</p><p>VERIFY option. If this parameter is true, All timeseries in this loading tsfile will be compared with the timeseries in IoTDB. If existing a measurement which has different datatype with the measurement in IoTDB, the loading process will be stopped and exit. If consistence can be promised, setting false for this parameter will be a better choice.</p><p>ONSUCCESS option. The default value is DELETE, which means the processing method of successfully loaded tsfiles, and DELETE means after the tsfile is successfully loaded, it will be deleted. NONE means after the tsfile is successfully loaded, it will be remained in the origin dir.</p><p>If the <code>.resource</code> file corresponding to the file exists, it will be loaded into the data directory and engine of the Apache IoTDB. Otherwise, the corresponding <code>.resource</code> file will be regenerated from the tsfile file.</p><p>Examples:</p><ul><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39;</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; verify=true</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; verify=false</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; sglevel=1</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; onSuccess=delete</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; verify=true sglevel=1</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; verify=false sglevel=1</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; verify=true onSuccess=none</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; verify=false sglevel=1 onSuccess=delete</code></li></ul><ol start="2"><li>Load a batch of files by specifying a folder path (absolute path).</li></ol><p>The first parameter indicates the path of the tsfile to be loaded. The options above also works for this command.</p><p>Examples:</p><ul><li><code>load &#39;/Users/Desktop/data&#39;</code></li><li><code>load &#39;/Users/Desktop/data&#39; verify=false</code></li><li><code>load &#39;/Users/Desktop/data&#39; verify=true</code></li><li><code>load &#39;/Users/Desktop/data&#39; verify=true sglevel=1</code></li><li><code>load &#39;/Users/Desktop/data&#39; verify=false sglevel=1 onSuccess=delete</code></li></ul><p><strong>NOTICE</strong>: When <code>$IOTDB_HOME$/conf/iotdb-datanode.properties</code> has <code>enable_auto_create_schema=true</code>, it will automatically create metadata in TSFILE, otherwise it will not be created automatically.</p><h3 id="load-with-script" tabindex="-1"><a class="header-anchor" href="#load-with-script" aria-hidden="true">#</a> Load with Script</h3>',23),m={href:"http://rewrite-tsfile.sh",target:"_blank",rel:"noopener noreferrer"},u=s(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./load-tsfile.bat <span class="token parameter variable">-f</span> filePath <span class="token punctuation">[</span>-h host<span class="token punctuation">]</span> <span class="token punctuation">[</span>-p port<span class="token punctuation">]</span> <span class="token punctuation">[</span>-u username<span class="token punctuation">]</span> <span class="token punctuation">[</span>-pw password<span class="token punctuation">]</span> <span class="token punctuation">[</span>--sgLevel int<span class="token punctuation">]</span> <span class="token punctuation">[</span>--verify true/false<span class="token punctuation">]</span> <span class="token punctuation">[</span>--onSuccess none/delete<span class="token punctuation">]</span>
<span class="token parameter variable">-f</span> 			File/Directory to be load, required
<span class="token parameter variable">-h</span> 			IoTDB Host address, optional field, <span class="token number">127.0</span>.0.1 by default
<span class="token parameter variable">-p</span> 			IoTDB port, optional field, <span class="token number">6667</span> by default
<span class="token parameter variable">-u</span> 			IoTDB user name, optional field, root by default
<span class="token parameter variable">-pw</span> 		IoTDB password, optional field, root by default
<span class="token parameter variable">--sgLevel</span> 	Sg level of loading Tsfile, optional field, default_storage_group_level <span class="token keyword">in</span> 				iotdb-common.properties by default
<span class="token parameter variable">--verify</span> 	Verify schema or not, optional field, True by default
<span class="token parameter variable">--onSuccess</span> Delete or remain origin TsFile after loading, optional field, none by default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h4><p>Assuming that an IoTDB instance is running on server 192.168.0.101:6667, you want to load all TsFile files from the locally saved TsFile backup folder D:\\IoTDB\\data into this IoTDB instance.</p><p>First move to the folder <code>$IOTDB_HOME/tools/</code>, open the command line, and execute</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./load-rewrite.bat <span class="token parameter variable">-f</span> D:<span class="token punctuation">\\</span>IoTDB<span class="token punctuation">\\</span>data <span class="token parameter variable">-h</span> <span class="token number">192.168</span>.0.101 <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pw</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After waiting for the script execution to complete, you can check that the data in the IoTDB instance has been loaded correctly.</p><h4 id="q-a" tabindex="-1"><a class="header-anchor" href="#q-a" aria-hidden="true">#</a> Q&amp;A</h4><ul><li>Cannot find or load the main class <ul><li>It may be because the environment variable $IOTDB_HOME is not set, please set the environment variable and try again</li></ul></li><li>-f option must be set! <ul><li>The input command is missing the -f field (file or folder path to be loaded) or the -u field (user name), please add it and re-execute</li></ul></li><li>What if the execution crashes in the middle and you want to reload? <ul><li>You re-execute the command just now, reloading the data will not affect the correctness after loading</li></ul></li></ul><p>TsFile can help you export the result set in the format of TsFile file to the specified path by executing the sql, command line sql, and sql file.</p><h2 id="tsfile-export-tool" tabindex="-1"><a class="header-anchor" href="#tsfile-export-tool" aria-hidden="true">#</a> TsFile Export Tool</h2><h3 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Unix/OS X</span>
<span class="token operator">&gt;</span> tools/export-tsfile.sh  <span class="token parameter variable">-h</span> <span class="token operator">&lt;</span>ip<span class="token operator">&gt;</span> <span class="token parameter variable">-p</span> <span class="token operator">&lt;</span>port<span class="token operator">&gt;</span> <span class="token parameter variable">-u</span> <span class="token operator">&lt;</span>username<span class="token operator">&gt;</span> <span class="token parameter variable">-pw</span> <span class="token operator">&lt;</span>password<span class="token operator">&gt;</span> <span class="token parameter variable">-td</span> <span class="token operator">&lt;</span>directory<span class="token operator">&gt;</span> <span class="token punctuation">[</span>-f <span class="token operator">&lt;</span>export filename<span class="token operator">&gt;</span> <span class="token parameter variable">-q</span> <span class="token operator">&lt;</span>read command<span class="token operator">&gt;</span> <span class="token parameter variable">-s</span> <span class="token operator">&lt;</span>sql file<span class="token operator">&gt;</span><span class="token punctuation">]</span>

<span class="token comment"># Windows</span>
<span class="token operator">&gt;</span> tools<span class="token punctuation">\\</span>export-tsfile.bat <span class="token parameter variable">-h</span> <span class="token operator">&lt;</span>ip<span class="token operator">&gt;</span> <span class="token parameter variable">-p</span> <span class="token operator">&lt;</span>port<span class="token operator">&gt;</span> <span class="token parameter variable">-u</span> <span class="token operator">&lt;</span>username<span class="token operator">&gt;</span> <span class="token parameter variable">-pw</span> <span class="token operator">&lt;</span>password<span class="token operator">&gt;</span> <span class="token parameter variable">-td</span> <span class="token operator">&lt;</span>directory<span class="token operator">&gt;</span> <span class="token punctuation">[</span>-f <span class="token operator">&lt;</span>export filename<span class="token operator">&gt;</span> <span class="token parameter variable">-q</span> <span class="token operator">&lt;</span>read command<span class="token operator">&gt;</span> <span class="token parameter variable">-s</span> <span class="token operator">&lt;</span>sql file<span class="token operator">&gt;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>-h &lt;host&gt;</code>: <ul><li>The host address of the IoTDB service.</li></ul></li><li><code>-p &lt;port&gt;</code>: <ul><li>The port number of the IoTDB service.</li></ul></li><li><code>-u &lt;username&gt;</code>: <ul><li>The username of the IoTDB service.</li></ul></li><li><code>-pw &lt;password&gt;</code>: <ul><li>Password for IoTDB service.</li></ul></li><li><code>-td &lt;directory&gt;</code>: <ul><li>Specify the output path for the exported TsFile file.</li></ul></li><li><code>-f &lt;tsfile name&gt;</code>: <ul><li>For the file name of the exported TsFile file, just write the file name, and cannot include the file path and suffix. If the sql file or console input contains multiple sqls, multiple files will be generated in the order of sql.</li><li>Example: There are three SQLs in the file or command line, and -f param is &quot;dump&quot;, then three TsFile files: dump0.tsfile、dump1.tsfile、dump2.tsfile will be generated in the target path.</li></ul></li><li><code>-q &lt;query command&gt;</code>: <ul><li>Directly specify the query statement you want to execute in the command.</li><li>Example: <code>select * from root.** limit 100</code></li></ul></li><li><code>-s &lt;sql file&gt;</code>: <ul><li>Specify a SQL file that contains one or more SQL statements. If an SQL file contains multiple SQL statements, the SQL statements should be separated by newlines. Each SQL statement corresponds to an output TsFile file.</li></ul></li><li><code>-t &lt;timeout&gt;</code>: <ul><li>Specifies the timeout period for session queries, in milliseconds</li></ul></li></ul><p>In addition, if you do not use the <code>-s</code> and <code>-q</code> parameters, after the export script is started, you need to enter the query statement as prompted by the program, and different query results will be saved to different TsFile files.</p><h3 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1" aria-hidden="true">#</a> example</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Unix/OS X</span>
<span class="token operator">&gt;</span> tools/export-tsfile.sh <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pw</span> root <span class="token parameter variable">-td</span> ./
<span class="token comment"># or</span>
<span class="token operator">&gt;</span> tools/export-tsfile.sh <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pw</span> root <span class="token parameter variable">-td</span> ./ <span class="token parameter variable">-q</span> <span class="token string">&quot;select * from root.**&quot;</span>
<span class="token comment"># Or</span>
<span class="token operator">&gt;</span> tools/export-tsfile.sh <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pw</span> root <span class="token parameter variable">-td</span> ./ <span class="token parameter variable">-s</span> ./sql.txt
<span class="token comment"># Or</span>
<span class="token operator">&gt;</span> tools/export-tsfile.sh <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pw</span> root <span class="token parameter variable">-td</span> ./ <span class="token parameter variable">-s</span> ./sql.txt <span class="token parameter variable">-f</span> myTsFile
<span class="token comment"># Or</span>
<span class="token operator">&gt;</span> tools/export-tsfile.sh <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pw</span> root <span class="token parameter variable">-td</span> ./ <span class="token parameter variable">-s</span> ./sql.txt <span class="token parameter variable">-f</span> myTsFile <span class="token parameter variable">-t</span> <span class="token number">10000</span>

<span class="token comment"># Windows</span>
<span class="token operator">&gt;</span> tools/export-tsfile.bat <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pw</span> root <span class="token parameter variable">-td</span> ./
<span class="token comment"># Or</span>
<span class="token operator">&gt;</span> tools/export-tsfile.bat <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pw</span> root <span class="token parameter variable">-td</span> ./ <span class="token parameter variable">-q</span> <span class="token string">&quot;select * from root.**&quot;</span>
<span class="token comment"># Or</span>
<span class="token operator">&gt;</span> tools/export-tsfile.bat <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pw</span> root <span class="token parameter variable">-td</span> ./ <span class="token parameter variable">-s</span> ./sql.txt
<span class="token comment"># Or</span>
<span class="token operator">&gt;</span> tools/export-tsfile.bat <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pw</span> root <span class="token parameter variable">-td</span> ./ <span class="token parameter variable">-s</span> ./sql.txt <span class="token parameter variable">-f</span> myTsFile
<span class="token comment"># Or</span>
<span class="token operator">&gt;</span> tools/export-tsfile.sh <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pw</span> root <span class="token parameter variable">-td</span> ./ <span class="token parameter variable">-s</span> ./sql.txt <span class="token parameter variable">-f</span> myTsFile <span class="token parameter variable">-t</span> <span class="token number">10000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="example-2" tabindex="-1"><a class="header-anchor" href="#example-2" aria-hidden="true">#</a> example</h3><ul><li>It is recommended not to execute the write data command at the same time when loading data, which may lead to insufficient memory in the JVM.</li></ul>`,18);function h(b,f){const n=o("ExternalLinkIcon");return l(),r("div",null,[i(`

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

`),d,a("p",null,[e("Run rewrite-tsfile.bat if you are in a Windows environment, or "),a("a",m,[e("rewrite-tsfile.sh"),p(n)]),e(" if you are on Linux or Unix.")]),u])}const k=t(c,[["render",h],["__file","TsFile-Load-Export-Tool.html.vue"]]);export{k as default};
