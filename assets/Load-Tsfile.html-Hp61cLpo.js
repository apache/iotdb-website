import{_ as o,r as n,o as i,c as l,a as r,d as a,e,b as d,f as t}from"./app-EnSYQARc.js";const c={},p=t('<h1 id="load-external-tsfile-tool" tabindex="-1"><a class="header-anchor" href="#load-external-tsfile-tool" aria-hidden="true">#</a> Load External TsFile Tool</h1><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>The load external tsfile tool allows users to load tsfiles, delete a tsfile, or move a tsfile to target directory from the running Apache IoTDB instance. Alternatively, you can use scripts to load tsfiles into IoTDB, for more information.</p><h2 id="load-with-sql" tabindex="-1"><a class="header-anchor" href="#load-with-sql" aria-hidden="true">#</a> Load with SQL</h2><p>The user sends specified commands to the Apache IoTDB system through the Cli tool or JDBC to use the tool.</p><h3 id="load-tsfiles" tabindex="-1"><a class="header-anchor" href="#load-tsfiles" aria-hidden="true">#</a> load tsfiles</h3><p>The command to load tsfiles is <code>load &lt;path/dir&gt; [sglevel=int][verify=true/false][onSuccess=delete/none]</code>.</p><p>This command has two usages:</p><ol><li>Load a single tsfile by specifying a file path (absolute path).</li></ol><p>The first parameter indicates the path of the tsfile to be loaded. This command has three options: sglevel, verify, onSuccess.</p><p>SGLEVEL option. If the database correspond to the tsfile does not exist, the user can set the level of database through the fourth parameter. By default, it uses the database level which is set in <code>iotdb-datanode.properties</code>.</p><p>VERIFY option. If this parameter is true, All timeseries in this loading tsfile will be compared with the timeseries in IoTDB. If existing a measurement which has different datatype with the measurement in IoTDB, the loading process will be stopped and exit. If consistence can be promised, setting false for this parameter will be a better choice.</p><p>ONSUCCESS option. The default value is DELETE, which means the processing method of successfully loaded tsfiles, and DELETE means after the tsfile is successfully loaded, it will be deleted. NONE means after the tsfile is successfully loaded, it will be remained in the origin dir.</p><p>If the <code>.resource</code> file corresponding to the file exists, it will be loaded into the data directory and engine of the Apache IoTDB. Otherwise, the corresponding <code>.resource</code> file will be regenerated from the tsfile file.</p><p>Examples:</p><ul><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39;</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; verify=true</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; verify=false</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; sglevel=1</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; onSuccess=delete</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; verify=true sglevel=1</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; verify=false sglevel=1</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; verify=true onSuccess=none</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; verify=false sglevel=1 onSuccess=delete</code></li></ul><ol start="2"><li>Load a batch of files by specifying a folder path (absolute path).</li></ol><p>The first parameter indicates the path of the tsfile to be loaded. The options above also works for this command.</p><p>Examples:</p><ul><li><code>load &#39;/Users/Desktop/data&#39;</code></li><li><code>load &#39;/Users/Desktop/data&#39; verify=false</code></li><li><code>load &#39;/Users/Desktop/data&#39; verify=true</code></li><li><code>load &#39;/Users/Desktop/data&#39; verify=true sglevel=1</code></li><li><code>load &#39;/Users/Desktop/data&#39; verify=false sglevel=1 onSuccess=delete</code></li></ul><p><strong>NOTICE</strong>: When <code>$IOTDB_HOME$/conf/iotdb-datanode.properties</code> has <code>enable_auto_create_schema=true</code>, it will automatically create metadata in TSFILE, otherwise it will not be created automatically.</p><h2 id="load-with-script" tabindex="-1"><a class="header-anchor" href="#load-with-script" aria-hidden="true">#</a> Load with Script</h2>',22),h={href:"http://rewrite-tsfile.sh",target:"_blank",rel:"noopener noreferrer"},u=t(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./load-tsfile.bat <span class="token parameter variable">-f</span> filePath <span class="token punctuation">[</span>-h host<span class="token punctuation">]</span> <span class="token punctuation">[</span>-p port<span class="token punctuation">]</span> <span class="token punctuation">[</span>-u username<span class="token punctuation">]</span> <span class="token punctuation">[</span>-pw password<span class="token punctuation">]</span> <span class="token punctuation">[</span>--sgLevel int<span class="token punctuation">]</span> <span class="token punctuation">[</span>--verify true/false<span class="token punctuation">]</span> <span class="token punctuation">[</span>--onSuccess none/delete<span class="token punctuation">]</span>
<span class="token parameter variable">-f</span> 			File/Directory to be load, required
<span class="token parameter variable">-h</span> 			IoTDB Host address, optional field, <span class="token number">127.0</span>.0.1 by default
<span class="token parameter variable">-p</span> 			IoTDB port, optional field, <span class="token number">6667</span> by default
<span class="token parameter variable">-u</span> 			IoTDB user name, optional field, root by default
<span class="token parameter variable">-pw</span> 		IoTDB password, optional field, root by default
<span class="token parameter variable">--sgLevel</span> 	Sg level of loading Tsfile, optional field, default_storage_group_level <span class="token keyword">in</span> 				iotdb-common.properties by default
<span class="token parameter variable">--verify</span> 	Verify schema or not, optional field, True by default
<span class="token parameter variable">--onSuccess</span> Delete or remain origin TsFile after loading, optional field, none by default
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><p>Assuming that an IoTDB instance is running on server 192.168.0.101:6667, you want to load all TsFile files from the locally saved TsFile backup folder D:\\IoTDB\\data into this IoTDB instance.</p><p>First move to the folder <code>$IOTDB_HOME/tools/</code>, open the command line, and execute</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./load-rewrite.bat <span class="token parameter variable">-f</span> D:<span class="token punctuation">\\</span>IoTDB<span class="token punctuation">\\</span>data <span class="token parameter variable">-h</span> <span class="token number">192.168</span>.0.101 <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pw</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After waiting for the script execution to complete, you can check that the data in the IoTDB instance has been loaded correctly.</p><h3 id="q-a" tabindex="-1"><a class="header-anchor" href="#q-a" aria-hidden="true">#</a> Q&amp;A</h3><ul><li>Cannot find or load the main class <ul><li>It may be because the environment variable $IOTDB_HOME is not set, please set the environment variable and try again</li></ul></li><li>-f option must be set! <ul><li>The input command is missing the -f field (file or folder path to be loaded) or the -u field (user name), please add it and re-execute</li></ul></li><li>What if the execution crashes in the middle and you want to reload? <ul><li>You re-execute the command just now, reloading the data will not affect the correctness after loading</li></ul></li></ul>`,8);function f(m,b){const s=n("ExternalLinkIcon");return i(),l("div",null,[r(`

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

`),p,a("p",null,[e("Run rewrite-tsfile.bat if you are in a Windows environment, or "),a("a",h,[e("rewrite-tsfile.sh"),d(s)]),e(" if you are on Linux or Unix.")]),u])}const g=o(c,[["render",f],["__file","Load-Tsfile.html.vue"]]);export{g as default};
