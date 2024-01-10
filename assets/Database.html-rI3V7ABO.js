import{_ as i,r as d,o as l,c as r,a as o,d as c,e,b as n,w as s,f as t}from"./app-TbPccx1r.js";const u={},v=t(`<h1 id="database-management" tabindex="-1"><a class="header-anchor" href="#database-management" aria-hidden="true">#</a> Database Management</h1><h2 id="create-database" tabindex="-1"><a class="header-anchor" href="#create-database" aria-hidden="true">#</a> Create Database</h2><p>According to the storage model we can set up the corresponding database. Two SQL statements are supported for creating databases, as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB &gt; create database root.ln
IoTDB &gt; create database root.sgcc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>We can thus create two databases using the above two SQL statements.</p><p>It is worth noting that when the path itself or the parent/child layer of the path is already created as database, the path is then not allowed to be created as database. For example, it is not feasible to create <code>root.ln.wf01</code> as database when two databases <code>root.ln</code> and <code>root.sgcc</code> exist. The system gives the corresponding error prompt as shown below:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; CREATE DATABASE root.ln.wf01
Msg: 300: root.ln has already been created as database.
IoTDB&gt; create database root.ln.wf01
Msg: 300: root.ln has already been created as database.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The LayerName of database can only be characters, numbers, underscores. If you want to set it to pure numbers or contain other characters, you need to enclose the database name with backticks (\`\`).</p><p>Besides, if deploy on Windows system, the LayerName is case-insensitive, which means it&#39;s not allowed to create databases <code>root.ln</code> and <code>root.LN</code> at the same time.</p><h2 id="show-databases" tabindex="-1"><a class="header-anchor" href="#show-databases" aria-hidden="true">#</a> Show Databases</h2>`,10),b=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; SHOW DATABASES
IoTDB&gt; SHOW DATABASES root.**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The result is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+----+-------------------------+-----------------------+-----------------------+
|database| ttl|schema_replication_factor|data_replication_factor|time_partition_interval|
+-------------+----+-------------------------+-----------------------+-----------------------+
|    root.sgcc|null|                        2|                      2|                 604800|
|      root.ln|null|                        2|                      2|                 604800|
+-------------+----+-------------------------+-----------------------+-----------------------+
Total line number = 2
It costs 0.060s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="delete-database" tabindex="-1"><a class="header-anchor" href="#delete-database" aria-hidden="true">#</a> Delete Database</h2><p>User can use the <code>DELETE DATABASE &lt;PathPattern&gt;</code> statement to delete all databases matching the pathPattern. Please note the data in the database will also be deleted.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB &gt; DELETE DATABASE root.ln
IoTDB &gt; DELETE DATABASE root.sgcc
// delete all data, all timeseries and all databases
IoTDB &gt; DELETE DATABASE root.**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="count-databases" tabindex="-1"><a class="header-anchor" href="#count-databases" aria-hidden="true">#</a> Count Databases</h2><p>User can use the <code>COUNT DATABASE &lt;PathPattern&gt;</code> statement to count the number of databases. It is allowed to specify <code>PathPattern</code> to count the number of databases matching the <code>PathPattern</code>.</p><p>SQL statement is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; count databases
IoTDB&gt; count databases root.*
IoTDB&gt; count databases root.sgcc.*
IoTDB&gt; count databases root.sgcc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The result is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+
|     database|
+-------------+
|    root.sgcc|
| root.turbine|
|      root.ln|
+-------------+
Total line number = 3
It costs 0.003s

+-------------+
|     database|
+-------------+
|            3|
+-------------+
Total line number = 1
It costs 0.003s

+-------------+
|     database|
+-------------+
|            3|
+-------------+
Total line number = 1
It costs 0.002s

+-------------+
|     database|
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function m(h,g){const a=d("RouterLink");return l(),r("div",null,[o(`

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

`),v,c("p",null,[e("After creating the database, we can use the "),n(a,{to:"/UserGuide/V1.1.x/Reference/SQL-Reference.html"},{default:s(()=>[e("SHOW DATABASES")]),_:1}),e(" statement and "),n(a,{to:"/UserGuide/V1.1.x/Reference/SQL-Reference.html"},{default:s(()=>[e("SHOW DATABASES <PathPattern>")]),_:1}),e(" to view the databases. The SQL statements are as follows:")]),b])}const f=i(u,[["render",m],["__file","Database.html.vue"]]);export{f as default};
