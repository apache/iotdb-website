import{_ as a,C as l,O as r,P as s,ah as d,Q as o,U as e,ai as i,aW as n}from"./framework-374e0e89.js";const c={},h=o("h2",{id:"mlog-加载工具",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#mlog-加载工具","aria-hidden":"true"},"#"),e(" Mlog 加载工具")],-1),u=o("h3",{id:"工具介绍",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#工具介绍","aria-hidden":"true"},"#"),e(" 工具介绍")],-1),p=o("p",null,[e("MLogLoad 工具用于将重放 "),o("code",null,"mlog.bin"),e(" 中和 "),o("code",null,"tlog.txt"),e(" 中的元数据操作，将元数据信息加载到正在运行的 IoTDB 中。 与正在运行的 IoTDB 中的元数据存在冲突的待加载数据将会被跳过。")],-1),g={href:"https://iotdb.apache.org/UserGuide/V0.13.x/Maintenance-Tools/Export-Schema-Tool.html",target:"_blank",rel:"noopener noreferrer"},m=o("code",null,"mlog.bin",-1),b=o("code",null,"tlog.txt",-1),v=n(`<h3 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h3><p>Linux/MacOS</p><blockquote><p>./mLogLoad.sh -mlog /yourpath/mlog.bin -tlog /yourpath/tlog.txt -h 127.0.0.1 -p 6667 -u root -pw root</p></blockquote><p>Windows</p><blockquote><p>./mLogLoad.bat -mlog /yourpath/mlog.bin -tlog /yourpath/tlog.txt -h 127.0.0.1 -p 6667 -u root -pw root</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>usage: MLogLoad -mlog &lt;mlog file&gt; [-tlog &lt;tlog file&gt;] [-h &lt;receiver host&gt;]
       [-p &lt;receiver port&gt;] [-u &lt;user&gt;] [-pw &lt;password&gt;] [-help]
 -mlog &lt;mlog file&gt;    Need to specify a binary mlog.bin file to parse
                      (required)
 -tlog &lt;tlog file&gt;    Could specify a binary tlog.txt file to parse. Tags
                      and attributes will be ignored if not specified
                      (optional)
 -h &lt;receiver host&gt;   Could specify a specify the receiver host, default
                      is 127.0.0.1 (optional)
 -p &lt;receiver port&gt;   Could specify a specify the receiver port, default
                      is 6667 (optional)
 -u &lt;user&gt;            Could specify the user name, default is root
                      (optional)
 -pw &lt;password&gt;       Could specify the password, default is root
                      (optional)
 -help,--help         Display help information
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：当 tlog 未指定时，Mlog 加载工具会跳过标签点管理相关的元数据操作。</p><h3 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h3><p>假定服务器 192.168.0.101:6667 上运行一个 IoTDB 实例，想从将本地的元数据文件 <code>/yourpath/mlog.bin</code> 加载进此IoTDB实例。</p>`,9),f={href:"http://mLogLoad.sh",target:"_blank",rel:"noopener noreferrer"},_=n(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./mLogLoad.sh -f &quot;/yourpath/mlog.bin&quot; -h 192.168.0.101 -p 6667 -u root -pw root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>等待脚本执行完成之后，可以检查 IoTDB 实例中元数据已经被正确加载。</p><h3 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h3><ul><li>找不到或无法加载主类 MLogLoader <ul><li>可能是由于未设置环境变量 $IOTDB_HOME，请设置环境变量之后重试</li></ul></li></ul>`,4);function L(x,y){const t=l("ExternalLinkIcon");return r(),s("div",null,[d(`

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

`),h,u,p,o("p",null,[e("若正在运行的 IoTDB 中已有元数据，为避免重放删除操作影响元数据，建议使用 "),o("a",g,[e("导出元数据操作"),i(t)]),e(" 归档得到的 "),m,e(" 和 "),b,e(" 进行增量加载。")]),v,o("p",null,[e("进入到 "),o("a",f,[e("mLogLoad.sh"),i(t)]),e(" 所在文件夹中，执行如下语句：")]),_])}const T=a(c,[["render",L],["__file","MLogLoad-Tool.html.vue"]]);export{T as default};