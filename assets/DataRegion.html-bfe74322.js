import{_ as s,r,o as d,c,a as h,d as a,e,b as n,w as l,f as o}from"./app-8a2380a8.js";const u={},p=o('<h1 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h1><p>Database 由用户显示指定，使用语句&quot;CREATE DATABASE&quot;来指定 database，每一个 database 有多个对应的 data region</p><p>为了确保最终一致性，每一个 data region 有一个数据插入锁（排它锁）来同步每一次插入操作。<br> 所以服务端数据写入的并行度为 data region的数量。</p><h1 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h1><p>从背景中可知，IoTDB数据写入的并行度为 max(客户端数量，服务端数据写入的并行度)，也就是max(客户端数量，data region 数量)</p><p>在生产实践中，存储组的概念往往与特定真实世界实体相关（例如工厂，地点，国家等）。<br> 因此存储组的数量可能会比较小，这会导致IoTDB写入并行度不足。即使我们开再多的客户端写入线程，也无法走出这种困境。</p><h1 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案" aria-hidden="true">#</a> 解决方案</h1><p>我们的方案是将一个存储组下的设备分为若干个设备组（称为 data region），将同步粒度从存储组级别改为 data region 粒度。</p>',8),g=a("br",null,null,-1),_={href:"http://root.sg",target:"_blank",rel:"noopener noreferrer"},m={href:"http://root.sg",target:"_blank",rel:"noopener noreferrer"},f=o(`<h1 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h1><p>通过改变如下配置来设置每一个 database 下 data region 的数量：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>data_region_num
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>推荐值为[data region number] = [CPU core number] / [user-defined database number]</p>`,4);function b(x,S){const t=r("ExternalLinkIcon"),i=r("RouterLink");return d(),c("div",null,[h(`

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

`),p,a("p",null,[e("更具体的，我们使用哈希将设备分到不同的 data region 下，例如："),g,e(' 对于一个名为"root.sg.d"的设备（假设其存储组为"'),a("a",_,[e("root.sg"),n(t)]),e('"），它属于的 data region 为"'),a("a",m,[e("root.sg"),n(t)]),e('.[hash("root.sg.d") mod num_of_data_region]"')]),f,a("p",null,[e("参考"),n(i,{to:"/zh/UserGuide/V1.0.x/Reference/DataNode-Config-Manual.html"},{default:l(()=>[e("配置手册")]),_:1}),e("以获取更多信息。")])])}const A=s(u,[["render",b],["__file","DataRegion.html.vue"]]);export{A as default};
