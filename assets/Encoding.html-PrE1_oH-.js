import{_ as i,r,o as a,c as o,a as l,d,e,b as c,w as s,f as t}from"./app-PmNjAyI-.js";const L={},h=t('<h2 id="编码方式" tabindex="-1"><a class="header-anchor" href="#编码方式" aria-hidden="true">#</a> 编码方式</h2><h3 id="基本编码方式" tabindex="-1"><a class="header-anchor" href="#基本编码方式" aria-hidden="true">#</a> 基本编码方式</h3><p>为了提高数据的存储效率，需要在数据写入的过程中对数据进行编码，从而减少磁盘空间的使用量。在写数据以及读数据的过程中都能够减少 I/O 操作的数据量从而提高性能。IoTDB 支持多种针对不同类型的数据的编码方法：</p><ul><li>PLAIN 编码（PLAIN）</li></ul><p>PLAIN 编码，默认的编码方式，即不编码，支持多种数据类型，压缩和解压缩的时间效率较高，但空间存储效率较低。</p><ul><li>二阶差分编码（TS_2DIFF）</li></ul><p>二阶差分编码，比较适合编码单调递增或者递减的序列数据，不适合编码波动较大的数据。</p><ul><li>游程编码（RLE）</li></ul><p>游程编码，比较适合存储某些数值连续出现的序列，不适合编码大部分情况下前后值不一样的序列数据。</p>',9),I=t('<blockquote><p>游程编码（RLE）和二阶差分编码（TS_2DIFF）对 float 和 double 的编码是有精度限制的，默认保留 2 位小数。推荐使用 GORILLA。</p></blockquote><ul><li>GORILLA 编码（GORILLA）</li></ul><p>GORILLA 编码是一种无损编码，它比较适合编码前后值比较接近的数值序列，不适合编码前后波动较大的数据。</p><p>当前系统中存在两个版本的 GORILLA 编码实现，推荐使用<code>GORILLA</code>，不推荐使用<code>GORILLA_V1</code>（已过时）。</p><p>使用限制：使用 Gorilla 编码 INT32 数据时，需要保证序列中不存在值为<code>Integer.MIN_VALUE</code>的数据点；使用 Gorilla 编码 INT64 数据时，需要保证序列中不存在值为<code>Long.MIN_VALUE</code>的数据点。</p><ul><li>字典编码 （DICTIONARY）</li></ul><p>字典编码是一种无损编码。它适合编码基数小的数据（即数据去重后唯一值数量小）。不推荐用于基数大的数据。</p><h3 id="数据类型与编码的对应关系" tabindex="-1"><a class="header-anchor" href="#数据类型与编码的对应关系" aria-hidden="true">#</a> 数据类型与编码的对应关系</h3><p>前文介绍的五种编码适用于不同的数据类型，若对应关系错误，则无法正确创建时间序列。数据类型与支持其编码的编码方式对应关系总结如表格 2-3。</p><div style="text-align:center;"><p><strong>表格 2-3 数据类型与支持其编码的对应关系</strong></p><table><thead><tr><th style="text-align:center;">数据类型</th><th style="text-align:center;">支持的编码</th></tr></thead><tbody><tr><td style="text-align:center;">BOOLEAN</td><td style="text-align:center;">PLAIN, RLE</td></tr><tr><td style="text-align:center;">INT32</td><td style="text-align:center;">PLAIN, RLE, TS_2DIFF, GORILLA</td></tr><tr><td style="text-align:center;">INT64</td><td style="text-align:center;">PLAIN, RLE, TS_2DIFF, GORILLA</td></tr><tr><td style="text-align:center;">FLOAT</td><td style="text-align:center;">PLAIN, RLE, TS_2DIFF, GORILLA</td></tr><tr><td style="text-align:center;">DOUBLE</td><td style="text-align:center;">PLAIN, RLE, TS_2DIFF, GORILLA</td></tr><tr><td style="text-align:center;">TEXT</td><td style="text-align:center;">PLAIN, DICTIONARY</td></tr></tbody></table></div>',10);function p(u,A){const n=r("RouterLink");return a(),o("div",null,[l(`

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

`),h,d("p",null,[e("游程编码也可用于对浮点数进行编码，但在创建时间序列的时候需指定保留小数位数（MAX_POINT_NUMBER，具体指定方式参见本文 "),c(n,{to:"/zh/UserGuide/V0.13.x/Reference/SQL-Reference.html"},{default:s(()=>[e("SQL 参考文档")]),_:1}),e("）。比较适合存储某些浮点数值连续出现的序列数据，不适合存储对小数点后精度要求较高以及前后波动较大的序列数据。")]),I])}const N=i(L,[["render",p],["__file","Encoding.html.vue"]]);export{N as default};
