import{_ as i,r as o,o as a,c as s,a as r,d as e,e as t,b as l,w as c,f as h}from"./app-E1hm_6nQ.js";const d={},u=h('<h2 id="压缩方式" tabindex="-1"><a class="header-anchor" href="#压缩方式" aria-hidden="true">#</a> 压缩方式</h2><p>当时间序列写入并按照指定的类型编码为二进制数据后，IoTDB 会使用压缩技术对该数据进行压缩，进一步提升空间存储效率。虽然编码和压缩都旨在提升存储效率，但编码技术通常只适合特定的数据类型（如二阶差分编码只适合与 INT32 或者 INT64 编码，存储浮点数需要先将他们乘以 10m 以转换为整数），然后将它们转换为二进制流。压缩方式（SNAPPY）针对二进制流进行压缩，因此压缩方式的使用不再受数据类型的限制。</p><h3 id="基本压缩方式" tabindex="-1"><a class="header-anchor" href="#基本压缩方式" aria-hidden="true">#</a> 基本压缩方式</h3><p>IoTDB 允许在创建一个时间序列的时候指定该列的压缩方式。现阶段 IoTDB 支持以下几种压缩方式：</p><ul><li>UNCOMPRESSED（不压缩）</li><li>SNAPPY 压缩</li><li>LZ4 压缩</li><li>GZIP 压缩</li></ul>',5),m=e("h3",{id:"压缩比统计信息",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#压缩比统计信息","aria-hidden":"true"},"#"),t(" 压缩比统计信息")],-1),_=e("p",{memtable_flush_time:""},"压缩比统计信息文件：data/system/storage_groups/compression_ratio/Ratio-{ratio_sum}-",-1),p=e("ul",null,[e("li",null,"ratio_sum: memtable压缩比的总和"),e("li",null,"memtable_flush_time: memtable刷盘的总次数")],-1),f=e("p",null,[t("通过 "),e("code",null,"ratio_sum / memtable_flush_time"),t(" 可以计算出平均压缩比")],-1);function S(N,b){const n=o("RouterLink");return a(),s("div",null,[r(`

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

`),u,e("p",null,[t("压缩方式的指定语法详见本文 "),l(n,{to:"/zh/UserGuide/V0.13.x/Reference/SQL-Reference.html"},{default:c(()=>[t("SQL 参考文档")]),_:1}),t("。")]),m,_,p,f])}const L=i(d,[["render",S],["__file","Compression.html.vue"]]);export{L as default};
