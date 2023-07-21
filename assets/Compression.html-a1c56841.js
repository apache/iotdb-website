import{_ as s,r as o,o as n,c as a,a as r,d as e,e as i,b as c,w as l,f as d}from"./app-3b595f08.js";const h={},m=d('<h1 id="compression" tabindex="-1"><a class="header-anchor" href="#compression" aria-hidden="true">#</a> Compression</h1><p>When the time series is written and encoded as binary data according to the specified type, IoTDB compresses the data using compression technology to further improve space storage efficiency. Although both encoding and compression are designed to improve storage efficiency, encoding techniques are usually available only for specific data types (e.g., second-order differential encoding is only suitable for INT32 or INT64 data type, and storing floating-point numbers requires multiplying them by 10m to convert to integers), after which the data is converted to a binary stream. The compression method (SNAPPY) compresses the binary stream, so the use of the compression method is no longer limited by the data type.</p><h2 id="basic-compression-methods" tabindex="-1"><a class="header-anchor" href="#basic-compression-methods" aria-hidden="true">#</a> Basic Compression Methods</h2><p>IoTDB allows you to specify the compression method of the column when creating a time series, and supports the following compression methods:</p><ul><li><p>UNCOMPRESSED</p></li><li><p>SNAPPY</p></li><li><p>LZ4</p></li><li><p>GZIP</p></li><li><p>ZSTD</p></li><li><p>LZMA2</p></li></ul>',5),p=e("h2",{id:"compression-ratio-statistics",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#compression-ratio-statistics","aria-hidden":"true"},"#"),i(" Compression Ratio Statistics")],-1),u=e("p",{memtable_flush_time:""},"Compression ratio statistics file: data/system/compression_ratio/Ratio-{ratio_sum}-",-1),f=e("ul",null,[e("li",null,"ratio_sum: sum of memtable compression ratios"),e("li",null,"memtable_flush_time: memtable flush times")],-1),_=e("p",null,[i("The average compression ratio can be calculated by "),e("code",null,"ratio_sum / memtable_flush_time")],-1);function g(b,y){const t=o("RouterLink");return n(),a("div",null,[r(`

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

`),m,e("p",null,[i("The specified syntax for compression is detailed in "),c(t,{to:"/UserGuide/Master/Reference/SQL-Reference.html"},{default:l(()=>[i("Create Timeseries Statement")]),_:1}),i(".")]),p,u,f,_])}const w=s(h,[["render",g],["__file","Compression.html.vue"]]);export{w as default};
