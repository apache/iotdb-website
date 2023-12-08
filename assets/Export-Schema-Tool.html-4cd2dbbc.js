import{_ as i,r as o,o as n,c as r,a as s,d as e,e as t,b as d,f as l}from"./app-d134a2c4.js";const c={},h=l(`<h2 id="export-schema" tabindex="-1"><a class="header-anchor" href="#export-schema" aria-hidden="true">#</a> Export Schema</h2><p>The schema export operation exports the information about store group, timeseries, and schema template in the current IoTDB in the form of <code>mlog.bin</code> and <code>tlog.txt</code> to the specified directory.</p><p>The exported <code>mlog.bin</code> and <code>tlog.txt</code> files can be incrementally loaded into an IoTDB instance.</p><h3 id="export-schema-with-sql" tabindex="-1"><a class="header-anchor" href="#export-schema-with-sql" aria-hidden="true">#</a> Export Schema with SQL</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>EXPORT SCHEMA &#39;&lt;path/dir&gt;&#39; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="export-schema-with-script" tabindex="-1"><a class="header-anchor" href="#export-schema-with-script" aria-hidden="true">#</a> Export Schema with Script</h3><p>Linux/MacOS</p><blockquote><p>./exportSchema.sh -d /yourpath/data/system/schema -o /yourpath/targetDir</p></blockquote><p>Windows</p><blockquote><p>./exportSchema.bat-d /yourpath/data/system/schema -o /yourpath/targetDir</p></blockquote><p>Export destination directory on server need to be specified when exporting metadata using scripting. Note that the target directory path must be absolute path.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>usage: ExportSchema -o &lt;target directory path&gt; [-h &lt;host address&gt;] [-p &lt;port&gt;] [-u &lt;user&gt;] [-pw &lt;password&gt;] [-help]
 -o &lt;target directory path&gt;   Need to specify a absolute target directory
                              path on server（required)
 -h &lt;host address&gt;            Could specify a specify the IoTDB host
                              address, default is 127.0.0.1 (optional)
 -p &lt;port&gt;                    Could specify a specify the IoTDB port,
                              default is 6667 (optional)
 -u &lt;user&gt;                    Could specify the IoTDB user name, default
                              is root (optional)
 -pw &lt;password&gt;               Could specify the IoTDB password, default is
                              root (optional)
 -help,--help                 Display help information
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="q-a" tabindex="-1"><a class="header-anchor" href="#q-a" aria-hidden="true">#</a> Q&amp;A</h3><ul><li>Cannot find or load the main class ExportSchema <ul><li>It may be because the environment variable $IOTDB_HOME is not set, please set the environment variable and try again</li></ul></li><li>Encounter an error, because: File ... already exist. <ul><li>There is already a mlog.bin or tlog.txt file in the target directory, please check the target directory and try again</li></ul></li></ul><h3 id="load-schema" tabindex="-1"><a class="header-anchor" href="#load-schema" aria-hidden="true">#</a> Load Schema</h3>`,15),p={href:"https://iotdb.apache.org/UserGuide/V0.13.x/Maintenance-Tools/MLogLoad-Tool.html",target:"_blank",rel:"noopener noreferrer"};function u(m,g){const a=o("ExternalLinkIcon");return n(),r("div",null,[s(`

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

`),h,e("p",null,[t("Please refer to "),e("a",p,[t("MLogLoad Tool"),d(a)])])])}const x=i(c,[["render",u],["__file","Export-Schema-Tool.html.vue"]]);export{x as default};
