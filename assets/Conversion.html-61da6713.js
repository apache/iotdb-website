import{_ as e,o as s,c as t,a as n,f as d}from"./app-d7e75f9d.js";const i={},r=d(`<h1 id="数据类型转换" tabindex="-1"><a class="header-anchor" href="#数据类型转换" aria-hidden="true">#</a> 数据类型转换</h1><h2 id="cast" tabindex="-1"><a class="header-anchor" href="#cast" aria-hidden="true">#</a> CAST</h2><h3 id="函数简介" tabindex="-1"><a class="header-anchor" href="#函数简介" aria-hidden="true">#</a> 函数简介</h3><p>当前 IoTDB 支持6种数据类型，其中包括 INT32、INT64、FLOAT、DOUBLE、BOOLEAN 以及 TEXT。当我们对数据进行查询或者计算时可能需要进行数据类型的转换， 比如说将 TEXT 转换为 INT32，或者提高数据精度，比如说将 FLOAT 转换为 DOUBLE。IoTDB 支持使用cast 函数对数据类型进行转换。</p><p>语法示例如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> cast<span class="token punctuation">(</span>s1 <span class="token keyword">as</span> INT32<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>cast 函数语法形式上与 PostgreSQL 一致，AS 后指定的数据类型表明要转换成的目标类型，目前 IoTDB 支持的六种数据类型均可以在 cast 函数中使用，遵循的转换规则如下表所示，其中行表示原始数据类型，列表示要转化成的目标数据类型：</p><table><thead><tr><th></th><th><strong>INT32</strong></th><th><strong>INT64</strong></th><th><strong>FLOAT</strong></th><th><strong>DOUBLE</strong></th><th><strong>BOOLEAN</strong></th><th><strong>TEXT</strong></th></tr></thead><tbody><tr><td><strong>INT32</strong></td><td>不转化</td><td>直接转化</td><td>直接转化</td><td>直接转化</td><td>!=0 : true<br>==0: false</td><td>String.valueOf()</td></tr><tr><td><strong>INT64</strong></td><td>超出 INT32 范围：执行抛异常<br>否则：直接转化</td><td>不转化</td><td>直接转化</td><td>直接转化</td><td>!=0L : true<br>==0: false</td><td>String.valueOf()</td></tr><tr><td><strong>FLOAT</strong></td><td>超出 INT32 范围：执行抛异常<br>否则：四舍五入(Math.round())</td><td>超出 INT64 范围：执行抛异常<br>否则：四舍五入(Math.round())</td><td>不转化</td><td>直接转化</td><td>!=0.0f : true<br>==0: false</td><td>String.valueOf()</td></tr><tr><td><strong>DOUBLE</strong></td><td>超出 INT32 范围：执行抛异常<br>否则：四舍五入(Math.round())</td><td>超出 INT64 范围：执行抛异常<br>否则：四舍五入(Math.round())</td><td>超出 FLOAT 范围：执行抛异常<br>否则：直接转化</td><td>不转化</td><td>!=0.0 : true<br>==0: false</td><td>String.valueOf()</td></tr><tr><td><strong>BOOLEAN</strong></td><td>true: 1<br>false: 0</td><td>true: 1L<br>false: 0</td><td>true: 1.0f<br>false: 0</td><td>true: 1.0<br>false: 0</td><td>不转化</td><td>true: &quot;true&quot;<br>false: &quot;false&quot;</td></tr><tr><td><strong>TEXT</strong></td><td>Integer.parseInt()</td><td>Long.parseLong()</td><td>Float.parseFloat()</td><td>Double.parseDouble()</td><td>text.toLowerCase ==&quot;true&quot; : true<br>text.toLowerCase ==&quot;false&quot; : false<br>其它情况：执行抛异常</td><td>不转化</td></tr></tbody></table><h3 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// timeseries
IoTDB&gt; show timeseries root.sg.d1.**
+-------------+-----+--------+--------+--------+-----------+----+----------+--------+------------------+
|   Timeseries|Alias|Database|DataType|Encoding|Compression|Tags|Attributes|Deadband|DeadbandParameters|
+-------------+-----+--------+--------+--------+-----------+----+----------+--------+------------------+
|root.sg.d1.s3| null| root.sg|   FLOAT|   PLAIN|     SNAPPY|null|      null|    null|              null|
|root.sg.d1.s4| null| root.sg|  DOUBLE|   PLAIN|     SNAPPY|null|      null|    null|              null|
|root.sg.d1.s5| null| root.sg| BOOLEAN|   PLAIN|     SNAPPY|null|      null|    null|              null|
|root.sg.d1.s6| null| root.sg|    TEXT|   PLAIN|     SNAPPY|null|      null|    null|              null|
|root.sg.d1.s1| null| root.sg|   INT32|   PLAIN|     SNAPPY|null|      null|    null|              null|
|root.sg.d1.s2| null| root.sg|   INT64|   PLAIN|     SNAPPY|null|      null|    null|              null|
+-------------+-----+--------+--------+--------+-----------+----+----------+--------+------------------+

// data of timeseries
IoTDB&gt; select * from root.sg.d1;
+-----------------------------+-------------+-------------+-------------+-------------+-------------+-------------+
|                         Time|root.sg.d1.s3|root.sg.d1.s4|root.sg.d1.s5|root.sg.d1.s6|root.sg.d1.s1|root.sg.d1.s2|
+-----------------------------+-------------+-------------+-------------+-------------+-------------+-------------+
|1970-01-01T08:00:00.000+08:00|          0.0|          0.0|        false|        10000|            0|            0|
|1970-01-01T08:00:00.001+08:00|          1.0|          1.0|        false|            3|            1|            1|
|1970-01-01T08:00:00.002+08:00|          2.7|          2.7|         true|         TRue|            2|            2|
|1970-01-01T08:00:00.003+08:00|         3.33|         3.33|         true|        faLse|            3|            3|
+-----------------------------+-------------+-------------+-------------+-------------+-------------+-------------+

// cast BOOLEAN to other types
IoTDB&gt; select cast(s5 as INT32), cast(s5 as INT64),cast(s5 as FLOAT),cast(s5 as DOUBLE), cast(s5 as TEXT) from root.sg.d1
+-----------------------------+----------------------------+----------------------------+----------------------------+-----------------------------+---------------------------+
|                         Time|CAST(root.sg.d1.s5 AS INT32)|CAST(root.sg.d1.s5 AS INT64)|CAST(root.sg.d1.s5 AS FLOAT)|CAST(root.sg.d1.s5 AS DOUBLE)|CAST(root.sg.d1.s5 AS TEXT)|
+-----------------------------+----------------------------+----------------------------+----------------------------+-----------------------------+---------------------------+
|1970-01-01T08:00:00.000+08:00|                           0|                           0|                         0.0|                          0.0|                      false|
|1970-01-01T08:00:00.001+08:00|                           0|                           0|                         0.0|                          0.0|                      false|
|1970-01-01T08:00:00.002+08:00|                           1|                           1|                         1.0|                          1.0|                       true|
|1970-01-01T08:00:00.003+08:00|                           1|                           1|                         1.0|                          1.0|                       true|
+-----------------------------+----------------------------+----------------------------+----------------------------+-----------------------------+---------------------------+

// cast TEXT to numeric types
IoTDB&gt; select cast(s6 as INT32), cast(s6 as INT64), cast(s6 as FLOAT), cast(s6 as DOUBLE) from root.sg.d1 where time &lt; 2
+-----------------------------+----------------------------+----------------------------+----------------------------+-----------------------------+
|                         Time|CAST(root.sg.d1.s6 AS INT32)|CAST(root.sg.d1.s6 AS INT64)|CAST(root.sg.d1.s6 AS FLOAT)|CAST(root.sg.d1.s6 AS DOUBLE)|
+-----------------------------+----------------------------+----------------------------+----------------------------+-----------------------------+
|1970-01-01T08:00:00.000+08:00|                       10000|                       10000|                     10000.0|                      10000.0|
|1970-01-01T08:00:00.001+08:00|                           3|                           3|                         3.0|                          3.0|
+-----------------------------+----------------------------+----------------------------+----------------------------+-----------------------------+

// cast TEXT to BOOLEAN
IoTDB&gt; select cast(s6 as BOOLEAN) from root.sg.d1 where time &gt;= 2
+-----------------------------+------------------------------+
|                         Time|CAST(root.sg.d1.s6 AS BOOLEAN)|
+-----------------------------+------------------------------+
|1970-01-01T08:00:00.002+08:00|                          true|
|1970-01-01T08:00:00.003+08:00|                         false|
+-----------------------------+------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function a(l,o){return s(),t("div",null,[n(`

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

`),r])}const c=e(i,[["render",a],["__file","Conversion.html.vue"]]);export{c as default};
