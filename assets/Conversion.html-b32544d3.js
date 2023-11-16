import{_ as e,o as t,c as s,a as n,f as d}from"./app-6767c077.js";const r={},i=d(`<h1 id="data-type-conversion-function" tabindex="-1"><a class="header-anchor" href="#data-type-conversion-function" aria-hidden="true">#</a> Data Type Conversion Function</h1><p>The IoTDB currently supports 6 data types, including INT32, INT64 ,FLOAT, DOUBLE, BOOLEAN, TEXT. When we query or evaluate data, we may need to convert data types, such as TEXT to INT32, or FLOAT to DOUBLE. IoTDB supports cast function to convert data types.</p><p>Syntax example:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> cast<span class="token punctuation">(</span>s1 <span class="token keyword">as</span> INT32<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The syntax of the cast function is consistent with that of PostgreSQL. The data type specified after AS indicates the target type to be converted. Currently, all six data types supported by IoTDB can be used in the cast function. The conversion rules to be followed are shown in the following table. The row represents the original data type, and the column represents the target data type to be converted into:</p><table><thead><tr><th></th><th><strong>INT32</strong></th><th><strong>INT64</strong></th><th><strong>FLOAT</strong></th><th><strong>DOUBLE</strong></th><th><strong>BOOLEAN</strong></th><th><strong>TEXT</strong></th></tr></thead><tbody><tr><td><strong>INT32</strong></td><td>No need to cast</td><td>Cast directly</td><td>Cast directly</td><td>Cast directly</td><td>!=0 : true<br>==0: false</td><td>String.valueOf()</td></tr><tr><td><strong>INT64</strong></td><td>Out of the range of INT32: throw Exception<br>Otherwise: Cast directly</td><td>No need to cast</td><td>Cast directly</td><td>Cast directly</td><td>!=0L : true<br>==0: false</td><td>String.valueOf()</td></tr><tr><td><strong>FLOAT</strong></td><td>Out of the range of INT32: throw Exception<br>Otherwise: Math.round()</td><td>Out of the range of INT64: throw Exception<br>Otherwise: Math.round()</td><td>No need to cast</td><td>Cast directly</td><td>!=0.0f : true<br>==0: false</td><td>String.valueOf()</td></tr><tr><td><strong>DOUBLE</strong></td><td>Out of the range of INT32: throw Exception<br>Otherwise: Math.round()</td><td>Out of the range of INT64: throw Exception<br>Otherwise: Math.round()</td><td>Out of the range of FLOAT：throw Exception<br>Otherwise: Cast directly</td><td>No need to cast</td><td>!=0.0 : true<br>==0: false</td><td>String.valueOf()</td></tr><tr><td><strong>BOOLEAN</strong></td><td>true: 1<br>false: 0</td><td>true: 1L<br>false: 0</td><td>true: 1.0f<br>false: 0</td><td>true: 1.0<br>false: 0</td><td>No need to cast</td><td>true: &quot;true&quot;<br>false: &quot;false&quot;</td></tr><tr><td><strong>TEXT</strong></td><td>Integer.parseInt()</td><td>Long.parseLong()</td><td>Float.parseFloat()</td><td>Double.parseDouble()</td><td>text.toLowerCase ==&quot;true&quot; : true<br>text.toLowerCase ==&quot;false&quot; : false<br>Otherwise: throw Exception</td><td>No need to cast</td></tr></tbody></table><h2 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>// timeseries
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function a(o,l){return t(),s("div",null,[n(`

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

`),i])}const c=e(r,[["render",a],["__file","Conversion.html.vue"]]);export{c as default};
