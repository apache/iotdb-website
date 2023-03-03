import{_ as l,E as o,F as r,af as p,G as e,I as a,ag as t,aT as s,C as i}from"./framework-6055ecdb.js";const c={},d=s('<h2 id="导入-tsfile" tabindex="-1"><a class="header-anchor" href="#导入-tsfile" aria-hidden="true">#</a> 导入 TsFile</h2><h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h3><p>加载外部 tsfile 文件工具允许用户向正在运行中的 Apache IoTDB 中加载 tsfile 文件。或者您也可以使用脚本的方式将tsfile加载进IoTDB。</p><h3 id="使用sql加载" tabindex="-1"><a class="header-anchor" href="#使用sql加载" aria-hidden="true">#</a> 使用SQL加载</h3><p>用户通过 Cli 工具或 JDBC 向 Apache IoTDB 系统发送指定命令实现文件加载的功能。</p><h4 id="加载-tsfile-文件" tabindex="-1"><a class="header-anchor" href="#加载-tsfile-文件" aria-hidden="true">#</a> 加载 tsfile 文件</h4><p>加载 tsfile 文件的指令为：<code>load &#39;&lt;path/dir&gt;&#39; [sglevel=int][verify=true/false][onSuccess=delete/none]</code></p><p>该指令有两种用法：</p><ol><li>通过指定文件路径(绝对路径)加载单 tsfile 文件。</li></ol><p>第一个参数表示待加载的 tsfile 文件的路径。load 命令有三个可选项，分别是 sglevel，值域为整数，verify，值域为 true/false，onSuccess，值域为delete/none。不同选项之间用空格隔开，选项之间无顺序要求。</p>',10),u=e("code",null,"iotdb-datanode.properties",-1),m={href:"http://root.sg",target:"_blank",rel:"noopener noreferrer"},k=s(`<p>VERIFY 选项表示是否对载入的 tsfile 中的所有时间序列进行元数据检查，默认为 true。开启时，若载入的 tsfile 中的时间序列在当前 iotdb 中也存在，则会比较该时间序列的所有 Measurement 的数据类型是否一致，如果出现不一致将会导致载入失败，关闭该选项会跳过检查，载入更快。</p><p>ONSUCCESS选项表示对于成功载入的tsfile的处置方式，默认为delete，即tsfile成功加载后将被删除，如果是none表明tsfile成功加载之后依然被保留在源文件夹。</p><p>若待加载的 tsfile 文件对应的<code>.resource</code>文件存在，会被一并加载至 Apache IoTDB 数据文件的目录和引擎中，否则将通过 tsfile 文件重新生成对应的<code>.resource</code>文件，即加载的 tsfile 文件所对应的<code>.resource</code>文件不是必要的。</p><p>示例：</p><ul><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39;</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; verify=true</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; verify=false</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; sglevel=1</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; onSuccess=delete</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; verify=true sglevel=1</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; verify=false sglevel=1</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; verify=true onSuccess=none</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; verify=false sglevel=1 onSuccess=delete</code></li></ul><ol start="2"><li>通过指定文件夹路径(绝对路径)批量加载文件。</li></ol><p>第一个参数表示待加载的 tsfile 文件夹的路径。选项意义与加载单个 tsfile 文件相同。</p><p>示例：</p><ul><li><code>load &#39;/Users/Desktop/data&#39;</code></li><li><code>load &#39;/Users/Desktop/data&#39; verify=false</code></li><li><code>load &#39;/Users/Desktop/data&#39; verify=true</code></li><li><code>load &#39;/Users/Desktop/data&#39; verify=true sglevel=1</code></li><li><code>load &#39;/Users/Desktop/data&#39; verify=false sglevel=1 onSuccess=delete</code></li></ul><p><strong>注意</strong>，如果<code>$IOTDB_HOME$/conf/iotdb-datanode.properties</code>中<code>enable_auto_create_schema=true</code>时会在加载tsfile的时候自动创建tsfile中的元数据，否则不会自动创建。</p><h3 id="使用脚本加载" tabindex="-1"><a class="header-anchor" href="#使用脚本加载" aria-hidden="true">#</a> 使用脚本加载</h3><p>若您在Windows环境中，请运行<code>$IOTDB_HOME/tools/load-tsfile.bat</code>，若为Linux或Unix，请运行<code>load-tsfile.sh</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./load-tsfile.bat <span class="token parameter variable">-f</span> filePath <span class="token punctuation">[</span>-h host<span class="token punctuation">]</span> <span class="token punctuation">[</span>-p port<span class="token punctuation">]</span> <span class="token punctuation">[</span>-u username<span class="token punctuation">]</span> <span class="token punctuation">[</span>-pw password<span class="token punctuation">]</span> <span class="token punctuation">[</span>--sgLevel int<span class="token punctuation">]</span> <span class="token punctuation">[</span>--verify true/false<span class="token punctuation">]</span> <span class="token punctuation">[</span>--onSuccess none/delete<span class="token punctuation">]</span>
<span class="token parameter variable">-f</span> 			待加载的文件或文件夹路径，必要字段
<span class="token parameter variable">-h</span> 			IoTDB的Host地址，可选，默认127.0.0.1
<span class="token parameter variable">-p</span> 			IoTDB的端口，可选，默认6667
<span class="token parameter variable">-u</span> 			IoTDb登录用户名，可选，默认root
<span class="token parameter variable">-pw</span> 		IoTDB登录密码，可选，默认root
<span class="token parameter variable">--sgLevel</span> 	加载TsFile自动创建Database的路径层级，可选，默认值为iotdb-common.properties指定值
<span class="token parameter variable">--verify</span> 	是否对加载TsFile进行元数据校验，可选，默认为True
<span class="token parameter variable">--onSuccess</span> 对成功加载的TsFile的处理方法，可选，默认为delete，成功加载之后删除源TsFile，设为none时会				保留源TsFile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用范例" tabindex="-1"><a class="header-anchor" href="#使用范例" aria-hidden="true">#</a> 使用范例</h4><p>假定服务器192.168.0.101:6667上运行一个IoTDB实例，想从将本地保存的TsFile备份文件夹D:\\IoTDB\\data中的所有的TsFile文件都加载进此IoTDB实例。</p><p>首先移动至<code>$IOTDB_HOME/tools/</code>，打开命令行，然后执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./load-tsfile.bat <span class="token parameter variable">-f</span> D:<span class="token punctuation">\\</span>IoTDB<span class="token punctuation">\\</span>data <span class="token parameter variable">-h</span> <span class="token number">192.168</span>.0.101 <span class="token parameter variable">-p</span> <span class="token number">6667</span> <span class="token parameter variable">-u</span> root <span class="token parameter variable">-pw</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>等待脚本执行完成之后，可以检查IoTDB实例中数据已经被正确加载</p><h4 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h4><ul><li>找不到或无法加载主类 <ul><li>可能是由于未设置环境变量$IOTDB_HOME，请设置环境变量之后重试</li></ul></li><li>提示-f option must be set! <ul><li>输入命令缺少待-f字段（加载文件或文件夹路径），请添加之后重新执行</li></ul></li><li>执行到中途崩溃了想重新加载怎么办 <ul><li>重新执行刚才的命令，重新加载数据不会影响加载之后的正确性</li></ul></li></ul><h2 id="导出-tsfile" tabindex="-1"><a class="header-anchor" href="#导出-tsfile" aria-hidden="true">#</a> 导出 TsFile</h2><p>TsFile 工具可帮您 通过执行指定sql、命令行sql、sql文件的方式将结果集以TsFile文件的格式导出至指定路径.</p>`,22),v={id:"使用-export-tsfile-sh",tabindex:"-1"},b=e("a",{class:"header-anchor",href:"#使用-export-tsfile-sh","aria-hidden":"true"},"#",-1),h={href:"http://export-tsfile.sh",target:"_blank",rel:"noopener noreferrer"},f=s(`<h4 id="运行方法" tabindex="-1"><a class="header-anchor" href="#运行方法" aria-hidden="true">#</a> 运行方法</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Unix/OS X</span>
<span class="token operator">&gt;</span> tools/export-tsfile.sh  <span class="token parameter variable">-h</span> <span class="token operator">&lt;</span>ip<span class="token operator">&gt;</span> <span class="token parameter variable">-p</span> <span class="token operator">&lt;</span>port<span class="token operator">&gt;</span> <span class="token parameter variable">-u</span> <span class="token operator">&lt;</span>username<span class="token operator">&gt;</span> <span class="token parameter variable">-pw</span> <span class="token operator">&lt;</span>password<span class="token operator">&gt;</span> <span class="token parameter variable">-td</span> <span class="token operator">&lt;</span>directory<span class="token operator">&gt;</span> <span class="token punctuation">[</span>-f <span class="token operator">&lt;</span>export filename<span class="token operator">&gt;</span> <span class="token parameter variable">-q</span> <span class="token operator">&lt;</span>query command<span class="token operator">&gt;</span> <span class="token parameter variable">-s</span> <span class="token operator">&lt;</span>sql file<span class="token operator">&gt;</span><span class="token punctuation">]</span>

<span class="token comment"># Windows</span>
<span class="token operator">&gt;</span> tools<span class="token punctuation">\\</span>export-tsfile.bat <span class="token parameter variable">-h</span> <span class="token operator">&lt;</span>ip<span class="token operator">&gt;</span> <span class="token parameter variable">-p</span> <span class="token operator">&lt;</span>port<span class="token operator">&gt;</span> <span class="token parameter variable">-u</span> <span class="token operator">&lt;</span>username<span class="token operator">&gt;</span> <span class="token parameter variable">-pw</span> <span class="token operator">&lt;</span>password<span class="token operator">&gt;</span> <span class="token parameter variable">-td</span> <span class="token operator">&lt;</span>directory<span class="token operator">&gt;</span> <span class="token punctuation">[</span>-f <span class="token operator">&lt;</span>export filename<span class="token operator">&gt;</span> <span class="token parameter variable">-q</span> <span class="token operator">&lt;</span>query command<span class="token operator">&gt;</span> <span class="token parameter variable">-s</span> <span class="token operator">&lt;</span>sql file<span class="token operator">&gt;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数:</p><ul><li><code>-h &lt;host&gt;</code>: <ul><li>IoTDB服务的主机地址。</li></ul></li><li><code>-p &lt;port&gt;</code>: <ul><li>IoTDB服务的端口号。</li></ul></li><li><code>-u &lt;username&gt;</code>: <ul><li>IoTDB服务的用户名。</li></ul></li><li><code>-pw &lt;password&gt;</code>: <ul><li>IoTDB服务的密码。</li></ul></li><li><code>-td &lt;directory&gt;</code>: <ul><li>为导出的TsFile文件指定输出路径。</li></ul></li><li><code>-f &lt;tsfile name&gt;</code>: <ul><li>为导出的TsFile文件的文件名，只需写文件名称，不能包含文件路径和后缀。如果sql文件或控制台输入时包含多个sql，会按照sql顺序生成多个TsFile文件。</li><li>例如：文件中或命令行共有3个SQL，-f 为&quot;dump&quot;，那么会在目标路径下生成 dump0.tsfile、dump1.tsfile、dump2.tsfile三个TsFile文件。</li></ul></li><li><code>-q &lt;query command&gt;</code>: <ul><li>在命令中直接指定想要执行的查询语句。</li><li>例如: <code>select * from root.** limit 100</code></li></ul></li><li><code>-s &lt;sql file&gt;</code>: <ul><li>指定一个SQL文件，里面包含一条或多条SQL语句。如果一个SQL文件中包含多条SQL语句，SQL语句之间应该用换行符进行分割。每一条SQL语句对应一个输出的TsFile文件。</li></ul></li><li><code>-t &lt;timeout&gt;</code>: <ul><li>指定session查询时的超时时间，单位为ms</li></ul></li></ul><p>除此之外，如果你没有使用<code>-s</code>和<code>-q</code>参数，在导出脚本被启动之后你需要按照程序提示输入查询语句，不同的查询结果会被保存到不同的TsFile文件中。</p><h4 id="运行示例" tabindex="-1"><a class="header-anchor" href="#运行示例" aria-hidden="true">#</a> 运行示例</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># Unix/OS X</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="q-a" tabindex="-1"><a class="header-anchor" href="#q-a" aria-hidden="true">#</a> Q&amp;A</h4><ul><li>建议在导入数据时不要同时执行写入数据命令，这将有可能导致JVM内存不足的情况。</li></ul>`,9);function g(T,x){const n=i("ExternalLinkIcon");return o(),r("div",null,[p(`

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

`),d,e("p",null,[a("SGLEVEL 选项，当 tsfile 对应的 database 不存在时，用户可以通过 sglevel 参数的值来制定 database 的级别，默认为"),u,a("中设置的级别。例如当设置 level 参数为1时表明此 tsfile 中所有时间序列中层级为1的前缀路径是 database，即若存在设备 root.sg.d1.s1，此时 "),e("a",m,[a("root.sg"),t(n)]),a(" 被指定为 database。")]),k,e("h3",v,[b,a(" 使用 "),e("a",h,[a("export-tsfile.sh"),t(n)])]),f])}const _=l(c,[["render",g],["__file","TsFile-Load-Export-Tool.html.vue"]]);export{_ as default};