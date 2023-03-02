import{_ as i,E as a,F as l,af as r,G as t,I as e,ag as d,aT as s,C as c}from"./framework-a6959d27.js";const n={},f=s('<h2 id="加载-tsfile" tabindex="-1"><a class="header-anchor" href="#加载-tsfile" aria-hidden="true">#</a> 加载 TsFile</h2><h3 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h3><p>加载外部 tsfile 文件工具允许用户向正在运行中的 Apache IoTDB 中加载、删除或移出 tsfile 文件。</p><h3 id="使用方式" tabindex="-1"><a class="header-anchor" href="#使用方式" aria-hidden="true">#</a> 使用方式</h3><p>用户通过 Cli 工具或 JDBC 向 Apache IoTDB 系统发送指定命令实现文件加载的功能。</p><h4 id="加载-tsfile-文件" tabindex="-1"><a class="header-anchor" href="#加载-tsfile-文件" aria-hidden="true">#</a> 加载 tsfile 文件</h4><p>加载 tsfile 文件的指令为：<code>load &#39;&lt;path/dir&gt;&#39; [autoregister=true/false][,sglevel=int][,verify=true/false]</code></p><p>该指令有两种用法：</p><ol><li>通过指定文件路径(绝对路径)加载单 tsfile 文件。</li></ol><p>第二个参数表示待加载的 tsfile 文件的路径，其中文件名称需要符合 tsfile 的命名规范，即<code>{systemTime}-{versionNum}-{in_space_compaction_num}-{cross_space_compaction_num}.tsfile</code>。load 命令有三个可选项，分别是 autoregister，值域为 true/false，sglevel，值域为整数，verify，值域为 true/false。不同选项之间用逗号连接，选项之间无顺序要求。</p><p>AUTOREGISTER 选项表示当待加载的 tsfile 文件中时间序列对应的元数据不存在时，用户可以选择是否自动创建 schema ，参数为 true 表示自动创建 schema，相反 false 表示不创建，缺省时默认创建 schema。</p>',11),p=t("code",null,"iotdb-engine.properties",-1),h={href:"http://root.sg",target:"_blank",rel:"noopener noreferrer"},u=s('<p>VERIFY 选项表示是否对载入的 tsfile 中的所有时间序列进行元数据检查，默认为 true。开启时，若载入的 tsfile 中的时间序列在当前 iotdb 中也存在，则会比较该时间序列的所有 Measurement 的数据类型是否一致，如果出现不一致将会导致载入失败，关闭该选项会跳过检查，载入更快。</p><p>若待加载的 tsfile 文件对应的<code>.resource</code>文件存在，会被一并加载至 Apache IoTDB 数据文件的目录和引擎中，否则将通过 tsfile 文件重新生成对应的<code>.resource</code>文件，即加载的 tsfile 文件所对应的<code>.resource</code>文件不是必要的。</p><p>示例：</p><ul><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39;</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; autoregister=false</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; autoregister=true</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; sglevel=1</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; verify=true</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; autoregister=true,sglevel=1</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; verify=false,sglevel=1</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; autoregister=false,verify=true</code></li><li><code>load &#39;/Users/Desktop/data/1575028885956-101-0.tsfile&#39; autoregister=false,sglevel=1,verify=true</code></li></ul><ol start="2"><li>通过指定文件夹路径(绝对路径)批量加载文件。</li></ol><p>第二个参数表示待加载的 tsfile 文件夹的路径，其中文件夹内所有文件名称需要符合 tsfile 的命名规范，即<code>{systemTime}-{versionNum}-{in_space_compaction_num}-{cross_space_compaction_num}.tsfile</code>。选项意义与加载单个 tsfile 文件相同。</p><p>示例：</p><ul><li><code>load &#39;/Users/Desktop/data&#39;</code></li><li><code>load &#39;/Users/Desktop/data&#39; autoregister=false</code></li><li><code>load &#39;/Users/Desktop/data&#39; autoregister=true</code></li><li><code>load &#39;/Users/Desktop/data&#39; autoregister=true,sglevel=1</code></li><li><code>load &#39;/Users/Desktop/data&#39; autoregister=false,sglevel=1,verify=true</code></li></ul><h4 id="删除-tsfile-文件" tabindex="-1"><a class="header-anchor" href="#删除-tsfile-文件" aria-hidden="true">#</a> 删除 tsfile 文件</h4><p>删除 tsfile 文件的指令为：<code>remove &#39;&lt;path&gt;&#39;</code></p><p>该指令通过指定文件路径删除 tsfile 文件，具体做法是将该 tsfile 和其对应的<code>.resource</code>和<code>.modification</code>文件全部删除。</p><p>示例：</p><ul><li><code>remove &#39;/Users/Desktop/data/data/root.vehicle/0/0/1575028885956-101-0.tsfile&#39;</code></li></ul><h4 id="卸载-tsfile-文件至指定目录" tabindex="-1"><a class="header-anchor" href="#卸载-tsfile-文件至指定目录" aria-hidden="true">#</a> 卸载 tsfile 文件至指定目录</h4><p>卸载 tsfile 文件的指令为：<code>unload &#39;&lt;path&gt;&#39; &#39;&lt;dir&gt;&#39;</code></p><p>该指令将指定路径的 tsfile 文件卸载并移动至目标文件夹（绝对路径）中，具体做法是在引擎中卸载该 tsfile，并将该 tsfile 文件和其对应的<code>.resource</code>文件移动到目标文件夹下</p><p>示例：</p><ul><li><code>unload &#39;/Users/Desktop/data/data/root.vehicle/0/0/1575028885956-101-0.tsfile&#39; &#39;/data/data/tmp&#39;</code></li></ul>',18);function g(m,_){const o=c("ExternalLinkIcon");return a(),l("div",null,[r(`

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

`),f,t("p",null,[e("SGLEVEL 选项，当 tsfile 对应的存储组不存在时，用户可以通过 sglevel 参数的值来制定存储组的级别，默认为"),p,e("中设置的级别。例如当设置 level 参数为1时表明此 tsfile 中所有时间序列中层级为1的前缀路径是存储组，即若存在设备 root.sg.d1.s1，此时 "),t("a",h,[e("root.sg"),d(o)]),e(" 被指定为存储组。")]),u])}const k=i(n,[["render",g],["__file","Load-External-Tsfile.html.vue"]]);export{k as default};