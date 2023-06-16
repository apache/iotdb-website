import{_ as e,O as t,P as a,ah as n,aW as o}from"./framework-374e0e89.js";const i={},s=o(`<h1 id="ttl" tabindex="-1"><a class="header-anchor" href="#ttl" aria-hidden="true">#</a> TTL</h1><p>IoTDB supports storage-level TTL settings, which means it is able to delete old data automatically and periodically. The benefit of using TTL is that hopefully you can control the total disk space usage and prevent the machine from running out of disks. Moreover, the query performance may downgrade as the total number of files goes up and the memory usage also increase as there are more files. Timely removing such files helps to keep at a high query performance level and reduce memory usage.</p><h2 id="set-ttl" tabindex="-1"><a class="header-anchor" href="#set-ttl" aria-hidden="true">#</a> Set TTL</h2><p>The SQL Statement for setting TTL is as follow:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; set ttl to root.ln 3600000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This example means that for data in <code>root.ln</code>, only that of the latest 1 hour will remain, the older one is removed or made invisible.</p><h2 id="unset-ttl" tabindex="-1"><a class="header-anchor" href="#unset-ttl" aria-hidden="true">#</a> Unset TTL</h2><p>To unset TTL, we can use follwing SQL statement:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; unset ttl to root.ln
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After unset TTL, all data will be accepted in <code>root.ln</code></p><h2 id="show-ttl" tabindex="-1"><a class="header-anchor" href="#show-ttl" aria-hidden="true">#</a> Show TTL</h2><p>To Show TTL, we can use following SQL statement:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; SHOW ALL TTL
IoTDB&gt; SHOW TTL ON StorageGroupNames
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>The SHOW ALL TTL example gives the TTL for all storage groups. The SHOW TTL ON root.group1 , root.group2 , root.group3 example shows the TTL for the three storage groups specified. Note: the TTL for storage groups that do not have a TTL set will display as null.</p>`,14);function r(l,d){return t(),a("div",null,[n(`

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

`),s])}const c=e(i,[["render",r],["__file","TTL.html.vue"]]);export{c as default};