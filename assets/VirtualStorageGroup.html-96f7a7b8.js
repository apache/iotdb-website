import{_ as i,M as u,N as c,af as l,O as o,Q as e,ag as t,ac as d,aT as n,C as a}from"./framework-ae7271bd.js";const h={},g=n('<h1 id="background" tabindex="-1"><a class="header-anchor" href="#background" aria-hidden="true">#</a> Background</h1><p>The storage group is specified by the user display. Use the statement &quot;SET STORAGE GROUP TO&quot; to specify the storage group. Each storage group has a corresponding StorageGroupProcessor.</p><p>To ensure eventually consistency, a insert lock (exclusive lock) is used to synchronize each insert request in each storage group. So the server side parallelism of data ingestion is equal to the number of storage group.</p><h1 id="problem" tabindex="-1"><a class="header-anchor" href="#problem" aria-hidden="true">#</a> Problem</h1><p>From background, we can infer that the parallelism of data ingestion of IoTDB is max(num of client, server side parallelism), which equals to max(num of client, num of storage group)</p><p>The concept of storage group usually is related to real world entity such as factory, location, country and so on. The number of storage groups may be small which makes the parallelism of data ingestion of IoTDB insufficient. We can&#39;t jump out of this dilemma even we start hundreds of client for ingestion.</p><h1 id="solution" tabindex="-1"><a class="header-anchor" href="#solution" aria-hidden="true">#</a> Solution</h1><p>Our idea is to group devices into buckets and change the granularity of synchronization from storage group level to device buckets level.</p>',8),p={href:"http://root.sg",target:"_blank",rel:"noopener noreferrer"},m={href:"http://root.sg",target:"_blank",rel:"noopener noreferrer"},f=n(`<h1 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h1><p>To use virtual storage group, you can set this config below:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>virtual_storage_group_num
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Recommended value is [virtual storage group number] = [CPU core number] / [user-defined storage group number]</p>`,4);function b(_,v){const r=a("ExternalLinkIcon"),s=a("RouterLink");return u(),c("div",null,[l(`

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

`),g,o("p",null,[e(`In detail, we use hash to group different devices into buckets called virtual storage group. For example, one device called "root.sg.d"(assume it's storage group is "`),o("a",p,[e("root.sg"),t(r)]),e('") is belonged to virtual storage group "'),o("a",m,[e("root.sg"),t(r)]),e('.[hash("root.sg.d") mod num_of_virtual_storage_group]"')]),f,o("p",null,[e("For more information, you can refer to "),t(s,{to:"/UserGuide/V0.13.x/Reference/Config-Manual.html"},{default:d(()=>[e("this page")]),_:1}),e(".")])])}const y=i(h,[["render",b],["__file","VirtualStorageGroup.html.vue"]]);export{y as default};
