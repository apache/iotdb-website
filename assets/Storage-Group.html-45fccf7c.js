import{_ as r,r as s,o,c as d,a as c,d as l,e,b as t,w as a,f as i}from"./app-e22bde73.js";const u={},h=i(`<h1 id="元数据操作" tabindex="-1"><a class="header-anchor" href="#元数据操作" aria-hidden="true">#</a> 元数据操作</h1><h2 id="存储组管理" tabindex="-1"><a class="header-anchor" href="#存储组管理" aria-hidden="true">#</a> 存储组管理</h2><h3 id="创建存储组" tabindex="-1"><a class="header-anchor" href="#创建存储组" aria-hidden="true">#</a> 创建存储组</h3><p>我们可以根据存储模型建立相应的存储组。创建存储组支持两种 SQL 语句，如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB &gt; set storage group to root.ln
IoTDB &gt; create storage group root.sgcc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>根据以上两条 SQL 语句，我们可以创建出两个存储组。</p><p>需要注意的是，存储组的父子节点都不能再设置存储组。例如在已经有<code>root.ln</code>和<code>root.sgcc</code>这两个存储组的情况下，创建<code>root.ln.wf01</code>存储组是不可行的。系统将给出相应的错误提示，如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; set storage group to root.ln.wf01
Msg: 300: root.ln has already been set to storage group.
IoTDB&gt; create storage group root.ln.wf01
Msg: 300: root.ln has already been set to storage group.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>存储组节点名只支持中英文字符、数字、下划线和中划线的组合。</p><p>还需注意，如果在 Windows 系统上部署，存储组名是大小写不敏感的。例如同时创建<code>root.ln</code> 和 <code>root.LN</code> 是不被允许的。</p><h3 id="查看存储组" tabindex="-1"><a class="header-anchor" href="#查看存储组" aria-hidden="true">#</a> 查看存储组</h3>`,11),g=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show storage group
IoTDB&gt; show storage group root.*
IoTDB&gt; show storage group root.**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+
|storage group|
+-------------+
|    root.sgcc|
|      root.ln|
+-------------+
Total line number = 2
It costs 0.060s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除存储组" tabindex="-1"><a class="header-anchor" href="#删除存储组" aria-hidden="true">#</a> 删除存储组</h3><p>用户可以使用<code>DELETE STORAGE GROUP &lt;PathPattern&gt;</code>语句删除该路径模式匹配的所有的存储组。在删除的过程中，需要注意的是存储组的数据也会被删除。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB &gt; DELETE STORAGE GROUP root.ln
IoTDB &gt; DELETE STORAGE GROUP root.sgcc
// 删除所有数据，时间序列以及存储组
IoTDB &gt; DELETE STORAGE GROUP root.**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function v(m,p){const n=s("RouterLink");return o(),d("div",null,[c(`

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

`),h,l("p",null,[e("在存储组创建后，我们可以使用 "),t(n,{to:"/zh/UserGuide/V0.13.x/Reference/SQL-Reference.html"},{default:a(()=>[e("SHOW STORAGE GROUP")]),_:1}),e(" 语句和 "),t(n,{to:"/zh/UserGuide/V0.13.x/Reference/SQL-Reference.html"},{default:a(()=>[e("SHOW STORAGE GROUP <PathPattern>")]),_:1}),e(" 来查看存储组，SQL 语句如下所示：")]),g])}const x=r(u,[["render",v],["__file","Storage-Group.html.vue"]]);export{x as default};
