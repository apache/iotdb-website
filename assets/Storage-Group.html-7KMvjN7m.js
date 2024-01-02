import{_ as r,r as n,o as i,c as d,a as l,d as c,e,b as a,w as o,f as s}from"./app-nKSDvTe9.js";const g={},u=s(`<h1 id="storage-group-management" tabindex="-1"><a class="header-anchor" href="#storage-group-management" aria-hidden="true">#</a> Storage Group Management</h1><h2 id="create-storage-group" tabindex="-1"><a class="header-anchor" href="#create-storage-group" aria-hidden="true">#</a> Create Storage Group</h2><p>According to the storage model we can set up the corresponding storage group. Two SQL statements are supported for creating storage groups, as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB &gt; set storage group to root.ln
IoTDB &gt; create storage group root.sgcc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>We can thus create two storage groups using the above two SQL statements.</p><p>It is worth noting that when the path itself or the parent/child layer of the path is already set as a storage group, the path is then not allowed to be set as a storage group. For example, it is not feasible to set <code>root.ln.wf01</code> as a storage group when two storage groups <code>root.ln</code> and <code>root.sgcc</code> exist. The system gives the corresponding error prompt as shown below:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; set storage group to root.ln.wf01
Msg: 300: root.ln has already been set to storage group.
IoTDB&gt; create storage group root.ln.wf01
Msg: 300: root.ln has already been set to storage group.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The LayerName of storage group can only be characters, numbers, underscores and hyphens.</p><p>Besides, if deploy on Windows system, the LayerName is case-insensitive, which means it&#39;s not allowed to set storage groups <code>root.ln</code> and <code>root.LN</code> at the same time.</p><h2 id="show-storage-group" tabindex="-1"><a class="header-anchor" href="#show-storage-group" aria-hidden="true">#</a> Show Storage Group</h2>`,10),h=s(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show storage group
IoTDB&gt; show storage group root.**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The result is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+
|storage group|
+-------------+
|    root.sgcc|
|      root.ln|
+-------------+
Total line number = 2
It costs 0.060s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="delete-storage-group" tabindex="-1"><a class="header-anchor" href="#delete-storage-group" aria-hidden="true">#</a> Delete Storage Group</h2><p>User can use the <code>DELETE STORAGE GROUP &lt;PathPattern&gt;</code> statement to delete all storage groups matching the pathPattern. Please note the data in the storage group will also be deleted.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB &gt; DELETE STORAGE GROUP root.ln
IoTDB &gt; DELETE STORAGE GROUP root.sgcc
// delete all data, all timeseries and all storage groups
IoTDB &gt; DELETE STORAGE GROUP root.**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function p(m,v){const t=n("RouterLink");return i(),d("div",null,[l(`

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

`),u,c("p",null,[e("After creating the storage group, we can use the "),a(t,{to:"/UserGuide/V0.13.x/Reference/SQL-Reference.html"},{default:o(()=>[e("SHOW STORAGE GROUP")]),_:1}),e(" statement and "),a(t,{to:"/UserGuide/V0.13.x/Reference/SQL-Reference.html"},{default:o(()=>[e("SHOW STORAGE GROUP <PathPattern>")]),_:1}),e(" to view the storage groups. The SQL statements are as follows:")]),h])}const f=r(g,[["render",p],["__file","Storage-Group.html.vue"]]);export{f as default};
