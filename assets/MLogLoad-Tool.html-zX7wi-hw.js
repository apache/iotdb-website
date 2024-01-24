import{_ as l,r as a,o as r,c as s,a as d,d as e,e as o,b as i,f as n}from"./app-fozUjsec.js";const c={},h=e("h2",{id:"mlog-加载工具",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#mlog-加载工具","aria-hidden":"true"},"#"),o(" Mlog 加载工具")],-1),u=e("h3",{id:"工具介绍",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#工具介绍","aria-hidden":"true"},"#"),o(" 工具介绍")],-1),p=e("p",null,[o("MLogLoad 工具用于将重放 "),e("code",null,"mlog.bin"),o(" 中和 "),e("code",null,"tlog.txt"),o(" 中的元数据操作，将元数据信息加载到正在运行的 IoTDB 中。"),e("br"),o(" 与正在运行的 IoTDB 中的元数据存在冲突的待加载数据将会被跳过。")],-1),g=e("br",null,null,-1),m={href:"https://iotdb.apache.org/UserGuide/V0.13.x/Maintenance-Tools/Export-Schema-Tool.html",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"mlog.bin",-1),v=e("code",null,"tlog.txt",-1),f=n(`<h3 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h3><p>Linux/MacOS</p><blockquote><p>./mLogLoad.sh -mlog /yourpath/mlog.bin -tlog /yourpath/tlog.txt -h 127.0.0.1 -p 6667 -u root -pw root</p></blockquote><p>Windows</p><blockquote><p>./mLogLoad.bat -mlog /yourpath/mlog.bin -tlog /yourpath/tlog.txt -h 127.0.0.1 -p 6667 -u root -pw root</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>usage: MLogLoad -mlog &lt;mlog file&gt; [-tlog &lt;tlog file&gt;] [-h &lt;receiver host&gt;]
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：当 tlog 未指定时，Mlog 加载工具会跳过标签点管理相关的元数据操作。</p><h3 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h3><p>假定服务器 192.168.0.101:6667 上运行一个 IoTDB 实例，想从将本地的元数据文件 <code>/yourpath/mlog.bin</code> 加载进此IoTDB实例。</p>`,9),_={href:"http://mLogLoad.sh",target:"_blank",rel:"noopener noreferrer"},L=n(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./mLogLoad.sh -f &quot;/yourpath/mlog.bin&quot; -h 192.168.0.101 -p 6667 -u root -pw root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>等待脚本执行完成之后，可以检查 IoTDB 实例中元数据已经被正确加载。</p><h3 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h3><ul><li>找不到或无法加载主类 MLogLoader <ul><li>可能是由于未设置环境变量 $IOTDB_HOME，请设置环境变量之后重试</li></ul></li></ul>`,4);function x(y,w){const t=a("ExternalLinkIcon");return r(),s("div",null,[d(`

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

`),h,u,p,e("p",null,[o("若正在运行的 IoTDB 中已有元数据，为避免重放删除操作影响元数据，建议使用"),g,e("a",m,[o("导出元数据操作"),i(t)]),o(" 归档得到的 "),b,o(" 和 "),v,o(" 进行增量加载。")]),f,e("p",null,[o("进入到 "),e("a",_,[o("mLogLoad.sh"),i(t)]),o(" 所在文件夹中，执行如下语句：")]),L])}const I=l(c,[["render",x],["__file","MLogLoad-Tool.html.vue"]]);export{I as default};
