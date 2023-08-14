import{_ as a,r as n,o,c as r,a as s,d as e,e as t,b as l,f as d}from"./app-0b7998a5.js";const c={},h=d(`<h2 id="元数据导出操作" tabindex="-1"><a class="header-anchor" href="#元数据导出操作" aria-hidden="true">#</a> 元数据导出操作</h2><p>元数据导出操作会以 mlog.bin 和 tlog.txt 的形式将当前 IoTDB 中的存储组、时间序列、元数据模板信息进行归档，并导出到指定目录中。</p><p>导出的 mlog.bin 和 tlog.txt 文件可以增量的方式加载到已有元数据的 IoTDB 实例中。</p><h3 id="使用-sql-方式导出元数据" tabindex="-1"><a class="header-anchor" href="#使用-sql-方式导出元数据" aria-hidden="true">#</a> 使用 SQL 方式导出元数据</h3><p>元数据导出的 SQL 语句如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>EXPORT SCHEMA &#39;&lt;path/dir&gt;&#39; 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用脚本方式导出元数据" tabindex="-1"><a class="header-anchor" href="#使用脚本方式导出元数据" aria-hidden="true">#</a> 使用脚本方式导出元数据</h3><p>Linux/MacOS</p><blockquote><p>./exportSchema.sh -o /yourpath/targetDir -h 127.0.0.1 -p 6667 -u root -pw root</p></blockquote><p>Windows</p><blockquote><p>./exportSchema.bat -o /yourpath/targetDir -h 127.0.0.1 -p 6667 -u root -pw root</p></blockquote><p>使用脚本方式导出元数据时候，需要指定 IoTDB 元数据文件的导出目标目录（位于 IoTDB 服务器），注意导出目标目录必须为绝对路径。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>usage: ExportSchema -o &lt;target directory path&gt; [-h &lt;host address&gt;] [-p &lt;port&gt;] [-u &lt;user&gt;] [-pw &lt;password&gt;] [-help]
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h3><ul><li>找不到或无法加载主类 ExportSchema <ul><li>可能是由于未设置环境变量 $IOTDB_HOME，请设置环境变量之后重试</li></ul></li><li>Encounter an error, because: File ... already exist. <ul><li>目标目录下已有 mlog.bin 或者 tlog.txt 文件，请检查目标目录之后重试</li></ul></li></ul><h2 id="元数据加载操作" tabindex="-1"><a class="header-anchor" href="#元数据加载操作" aria-hidden="true">#</a> 元数据加载操作</h2>`,16),p={href:"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Maintenance-Tools/MLogLoad-Tool.html",target:"_blank",rel:"noopener noreferrer"};function u(m,g){const i=n("ExternalLinkIcon");return o(),r("div",null,[s(`

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

`),h,e("p",null,[t("参考 "),e("a",p,[t("MLog 加载工具"),l(i)])])])}const v=a(c,[["render",u],["__file","Export-Schema-Tool.html.vue"]]);export{v as default};
