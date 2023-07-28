import{_ as s,r as o,o as d,c,a as l,d as a,e,b as t,w as h,f as r}from"./app-045c081c.js";const u={},m=r('<h1 id="background" tabindex="-1"><a class="header-anchor" href="#background" aria-hidden="true">#</a> Background</h1><p>The database is specified by the user display.<br> Use the statement &quot;CREATE DATABASE&quot; to create the database.<br> Each database has a corresponding StorageGroupProcessor.</p><p>To ensure eventually consistency, a insert lock (exclusive lock) is used to synchronize each insert request in each database.<br> So the server side parallelism of data ingestion is equal to the number of database.</p><h1 id="problem" tabindex="-1"><a class="header-anchor" href="#problem" aria-hidden="true">#</a> Problem</h1><p>From background, we can infer that the parallelism of data ingestion of IoTDB is max(num of client, server side parallelism), which equals to max(num of client, num of database)</p><p>The concept of database usually is related to real world entity such as factory, location, country and so on.<br> The number of databases may be small which makes the parallelism of data ingestion of IoTDB insufficient. We can&#39;t jump out of this dilemma even we start hundreds of client for ingestion.</p><h1 id="solution" tabindex="-1"><a class="header-anchor" href="#solution" aria-hidden="true">#</a> Solution</h1><p>Our idea is to group devices into buckets and change the granularity of synchronization from database level to device buckets level.</p>',8),p=a("br",null,null,-1),f={href:"http://root.sg",target:"_blank",rel:"noopener noreferrer"},g={href:"http://root.sg",target:"_blank",rel:"noopener noreferrer"},b=r(`<h1 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h1><p>To use data region, you can set this config below:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>data_region_num
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Recommended value is [data region number] = [CPU core number] / [user-defined database number]</p>`,4);function _(v,x){const n=o("ExternalLinkIcon"),i=o("RouterLink");return d(),c("div",null,[l(`

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

`),m,a("p",null,[e("In detail, we use hash to group different devices into buckets called data region."),p,e(` For example, one device called "root.sg.d"(assume it's database is "`),a("a",f,[e("root.sg"),t(n)]),e('") is belonged to data region "'),a("a",g,[e("root.sg"),t(n)]),e('.[hash("root.sg.d") mod num_of_data_region]"')]),b,a("p",null,[e("For more information, you can refer to "),t(i,{to:"/UserGuide/V1.2.x/Reference/DataNode-Config-Manual.html"},{default:h(()=>[e("this page")]),_:1}),e(".")])])}const w=s(u,[["render",_],["__file","DataRegion.html.vue"]]);export{w as default};
