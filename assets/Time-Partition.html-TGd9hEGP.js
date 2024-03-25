import{_ as a,r as n,o as r,c as l,a as o,d as e,e as t,b as s,w as d,f as h}from"./app-dXzqLio8.js";const m={},u=h('<h1 id="time-partition" tabindex="-1"><a class="header-anchor" href="#time-partition" aria-hidden="true">#</a> Time partition</h1><h2 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h2><p>Time partition divides data according to time, and a time partition is used to save all data within a certain time range. The time partition number is represented by a natural number. Number 0 means January 1, 1970, it will increase by one every partition_interval milliseconds. Time partition number&#39;s calculation formula is timestamp / partition_interval. The main configuration items are as follows:</p><ul><li>time_partition_interval</li></ul><table><thead><tr><th style="text-align:center;">Name</th><th style="text-align:left;">time_partition_interval</th></tr></thead><tbody><tr><td style="text-align:center;">Description</td><td style="text-align:left;">Time range for dividing database, time series data will be divided into groups by this time range</td></tr><tr><td style="text-align:center;">Type</td><td style="text-align:left;">Int64</td></tr><tr><td style="text-align:center;">Default</td><td style="text-align:left;">604800000</td></tr><tr><td style="text-align:center;">Effective</td><td style="text-align:left;">Only allowed to be modified in first start up</td></tr></tbody></table><h2 id="configuration-example" tabindex="-1"><a class="header-anchor" href="#configuration-example" aria-hidden="true">#</a> Configuration example</h2><p>Enable time partition and set partition_interval to 86400000 (one day), then the data distribution is shown as the following figure:</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Data-Concept/Time-Partition/time_partition_example.png?raw=true" alt="time partition example"><ul><li><p>Insert one datapoint with timestamp 0, calculate 0/86400000 = 0, then this datapoint will be stored in TsFile under folder 0</p></li><li><p>Insert one datapoint with timestamp 1609459200010, calculate 1609459200010/86400000 = 18628, then this datapoint will be stored in TsFile under folder 18628</p></li></ul><h2 id="suggestions" tabindex="-1"><a class="header-anchor" href="#suggestions" aria-hidden="true">#</a> Suggestions</h2>',10),c=e("ul",null,[e("li",null,[e("p",null,"enable_timed_flush_unseq_memtable: Whether to enable timed flush unsequence memtable, enabled by default.")]),e("li",null,[e("p",null,"enable_timed_flush_seq_memtable: Whether to enable timed flush sequence memtable, disabled by default. It should be enabled when time partition is enabled, so inactive time partition's memtable can be flushed regularly.")])],-1);function p(f,b){const i=n("RouterLink");return r(),l("div",null,[o(`

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

`),u,e("p",null,[t("When enabling time partition, it is better to enable timed flush memtable, configuration params are detailed in "),s(i,{to:"/UserGuide/V1.0.x/Reference/DataNode-Config-Manual.html"},{default:d(()=>[t("Config manual for timed flush")]),_:1}),t(".")]),c])}const _=a(m,[["render",p],["__file","Time-Partition.html.vue"]]);export{_ as default};
