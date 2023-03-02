import{_ as d,E as t,F as l,af as r,G as c,I as e,ag as a,ac as i,aT as s,C as o}from"./framework-a6959d27.js";const v={},u=s(`<h1 id="元数据操作" tabindex="-1"><a class="header-anchor" href="#元数据操作" aria-hidden="true">#</a> 元数据操作</h1><h2 id="数据库管理" tabindex="-1"><a class="header-anchor" href="#数据库管理" aria-hidden="true">#</a> 数据库管理</h2><p>数据库（Database）可以被视为关系数据库中的Database。</p><h3 id="创建数据库" tabindex="-1"><a class="header-anchor" href="#创建数据库" aria-hidden="true">#</a> 创建数据库</h3><p>我们可以根据存储模型建立相应的数据库。如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB &gt; CREATE DATABASE root.ln
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需要注意的是，database 的父子节点都不能再设置 database。例如在已经有<code>root.ln</code>和<code>root.sgcc</code>这两个 database 的情况下，创建<code>root.ln.wf01</code> database 是不可行的。系统将给出相应的错误提示，如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; CREATE DATABASE root.ln.wf01
Msg: 300: root.ln has already been created as database.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Database 节点名只支持中英文字符、数字、下划线的组合，如果想设置为纯数字或者包含其他字符，需要用反引号(\`\`)把 database 名称引起来。</p><p>还需注意，如果在 Windows 系统上部署，database 名是大小写不敏感的。例如同时创建<code>root.ln</code> 和 <code>root.LN</code> 是不被允许的。</p><h3 id="查看数据库" tabindex="-1"><a class="header-anchor" href="#查看数据库" aria-hidden="true">#</a> 查看数据库</h3>`,11),b=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show databases
IoTDB&gt; show databases root.*
IoTDB&gt; show databases root.**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+----+-------------------------+-----------------------+-----------------------+
|     database| ttl|schema_replication_factor|data_replication_factor|time_partition_interval|
+-------------+----+-------------------------+-----------------------+-----------------------+
|    root.sgcc|null|                        2|                      2|                 604800|
|      root.ln|null|                        2|                      2|                 604800|
+-------------+----+-------------------------+-----------------------+-----------------------+
Total line number = 2
It costs 0.060s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除数据库" tabindex="-1"><a class="header-anchor" href="#删除数据库" aria-hidden="true">#</a> 删除数据库</h3><p>用户可以使用<code>DELETE DATABASE &lt;PathPattern&gt;</code>语句删除该路径模式匹配的所有的数据库。在删除的过程中，需要注意的是数据库的数据也会被删除。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB &gt; DELETE DATABASE root.ln
IoTDB &gt; DELETE DATABASE root.sgcc
// 删除所有数据，时间序列以及数据库
IoTDB &gt; DELETE DATABASE root.**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="统计数据库数量" tabindex="-1"><a class="header-anchor" href="#统计数据库数量" aria-hidden="true">#</a> 统计数据库数量</h3><p>用户可以使用<code>COUNT DATABASES &lt;PathPattern&gt;</code>语句统计数据库的数量，允许指定<code>PathPattern</code> 用来统计匹配该<code>PathPattern</code> 的数据库的数量</p><p>SQL 语句如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show databases
IoTDB&gt; count databases
IoTDB&gt; count databases root.*
IoTDB&gt; count databases root.sgcc.*
IoTDB&gt; count databases root.sgcc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+
|     database|
+-------------+
|    root.sgcc|
| root.turbine|
|      root.ln|
+-------------+
Total line number = 3
It costs 0.003s

+-------------+
|     Database|
+-------------+
|            3|
+-------------+
Total line number = 1
It costs 0.003s

+-------------+
|     Database|
+-------------+
|            3|
+-------------+
Total line number = 1
It costs 0.002s

+-------------+
|     Database|
+-------------+
|            0|
+-------------+
Total line number = 1
It costs 0.002s

+-------------+
|     database|
+-------------+
|            1|
+-------------+
Total line number = 1
It costs 0.002s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function m(h,g){const n=o("RouterLink");return t(),l("div",null,[r(`

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

`),u,c("p",null,[e("在 database 创建后，我们可以使用 "),a(n,{to:"/zh/UserGuide/V1.1.x/Reference/SQL-Reference.html"},{default:i(()=>[e("SHOW DATABASES")]),_:1}),e(" 语句和 "),a(n,{to:"/zh/UserGuide/V1.1.x/Reference/SQL-Reference.html"},{default:i(()=>[e("SHOW DATABASES <PathPattern>")]),_:1}),e(" 来查看 database，SQL 语句如下所示：")]),b])}const x=d(v,[["render",m],["__file","Database.html.vue"]]);export{x as default};