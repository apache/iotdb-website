import{_ as e,o as s,c as t,a as n,f as a}from"./app-fozUjsec.js";const i={},o=a(`<h1 id="data-type-conversion-function" tabindex="-1"><a class="header-anchor" href="#data-type-conversion-function" aria-hidden="true">#</a> Data Type Conversion Function</h1><p>The IoTDB currently supports 6 data types, including INT32, INT64 ,FLOAT, DOUBLE, BOOLEAN, TEXT. When we query or evaluate data, we may need to convert data types, such as TEXT to INT32, or improve the accuracy of the data, such as FLOAT to DOUBLE. Therefore, IoTDB supports the use of cast functions to convert data types.</p><table><thead><tr><th>Function Name</th><th>Required Attributes</th><th>Output Series Data Type</th><th>Series Data Type Description</th></tr></thead><tbody><tr><td>CAST</td><td><code>type</code>: the type of the output data point, it can only be INT32 / INT64 / FLOAT / DOUBLE / BOOLEAN / TEXT</td><td>Determined by the required attribute <code>type</code></td><td>Converts data to the type specified by the <code>type</code> argument.</td></tr></tbody></table><h4 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h4><ol><li>The value of type BOOLEAN is <code>true</code>, when data is converted to BOOLEAN if INT32 and INT64 are not 0, FLOAT and DOUBLE are not 0.0, TEXT is not empty string or &quot;false&quot;, otherwise <code>false</code>.</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show timeseries root.sg.d1.*;
+-------------+-----+-------------+--------+--------+-----------+----+----------+
|   timeseries|alias|     database|dataType|encoding|compression|tags|attributes|
+-------------+-----+-------------+--------+--------+-----------+----+----------+
|root.sg.d1.s3| null|      root.sg|   FLOAT|     RLE|     SNAPPY|null|      null|
|root.sg.d1.s4| null|      root.sg|  DOUBLE|     RLE|     SNAPPY|null|      null|
|root.sg.d1.s5| null|      root.sg|    TEXT|   PLAIN|     SNAPPY|null|      null|
|root.sg.d1.s6| null|      root.sg| BOOLEAN|     RLE|     SNAPPY|null|      null|
|root.sg.d1.s1| null|      root.sg|   INT32|     RLE|     SNAPPY|null|      null|
|root.sg.d1.s2| null|      root.sg|   INT64|     RLE|     SNAPPY|null|      null|
+-------------+-----+-------------+--------+--------+-----------+----+----------+
Total line number = 6
It costs 0.006s
IoTDB&gt; select * from root.sg.d1;
+-----------------------------+-------------+-------------+-------------+-------------+-------------+-------------+
|                         Time|root.sg.d1.s3|root.sg.d1.s4|root.sg.d1.s5|root.sg.d1.s6|root.sg.d1.s1|root.sg.d1.s2|
+-----------------------------+-------------+-------------+-------------+-------------+-------------+-------------+
|1970-01-01T08:00:00.001+08:00|          1.1|          1.1|         test|        false|            1|            1|
|1970-01-01T08:00:00.002+08:00|         -2.2|         -2.2|        false|         true|           -2|           -2|
|1970-01-01T08:00:00.003+08:00|          0.0|          0.0|         true|         true|            0|            0|
+-----------------------------+-------------+-------------+-------------+-------------+-------------+-------------+
Total line number = 3
It costs 0.009s
IoTDB&gt; select cast(s1, &#39;type&#39;=&#39;BOOLEAN&#39;), cast(s2, &#39;type&#39;=&#39;BOOLEAN&#39;), cast(s3, &#39;type&#39;=&#39;BOOLEAN&#39;), cast(s4, &#39;type&#39;=&#39;BOOLEAN&#39;), cast(s5, &#39;type&#39;=&#39;BOOLEAN&#39;) from root.sg.d1;
+-----------------------------+-------------------------------------+-------------------------------------+-------------------------------------+-------------------------------------+-------------------------------------+
|                         Time|cast(root.sg.d1.s1, &quot;type&quot;=&quot;BOOLEAN&quot;)|cast(root.sg.d1.s2, &quot;type&quot;=&quot;BOOLEAN&quot;)|cast(root.sg.d1.s3, &quot;type&quot;=&quot;BOOLEAN&quot;)|cast(root.sg.d1.s4, &quot;type&quot;=&quot;BOOLEAN&quot;)|cast(root.sg.d1.s5, &quot;type&quot;=&quot;BOOLEAN&quot;)|
+-----------------------------+-------------------------------------+-------------------------------------+-------------------------------------+-------------------------------------+-------------------------------------+
|1970-01-01T08:00:00.001+08:00|                                 true|                                 true|                                 true|                                 true|                                 true|
|1970-01-01T08:00:00.002+08:00|                                 true|                                 true|                                 true|                                 true|                                false|
|1970-01-01T08:00:00.003+08:00|                                false|                                false|                                false|                                false|                                 true|
+-----------------------------+-------------------------------------+-------------------------------------+-------------------------------------+-------------------------------------+-------------------------------------+
Total line number = 3
It costs 0.012s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>The value of type INT32, INT64, FLOAT, DOUBLE are 1 or 1.0 and TEXT is &quot;true&quot;, when BOOLEAN data is true, otherwise 0, 0.0 or &quot;false&quot;.</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; select cast(s6, &#39;type&#39;=&#39;INT32&#39;), cast(s6, &#39;type&#39;=&#39;INT64&#39;), cast(s6, &#39;type&#39;=&#39;FLOAT&#39;), cast(s6, &#39;type&#39;=&#39;DOUBLE&#39;), cast(s6, &#39;type&#39;=&#39;TEXT&#39;) from root.sg.d1;
+-----------------------------+-----------------------------------+-----------------------------------+-----------------------------------+------------------------------------+----------------------------------+
|                         Time|cast(root.sg.d1.s6, &quot;type&quot;=&quot;INT32&quot;)|cast(root.sg.d1.s6, &quot;type&quot;=&quot;INT64&quot;)|cast(root.sg.d1.s6, &quot;type&quot;=&quot;FLOAT&quot;)|cast(root.sg.d1.s6, &quot;type&quot;=&quot;DOUBLE&quot;)|cast(root.sg.d1.s6, &quot;type&quot;=&quot;TEXT&quot;)|
+-----------------------------+-----------------------------------+-----------------------------------+-----------------------------------+------------------------------------+----------------------------------+
|1970-01-01T08:00:00.001+08:00|                                  0|                                  0|                                0.0|                                 0.0|                             false|
|1970-01-01T08:00:00.002+08:00|                                  1|                                  1|                                1.0|                                 1.0|                              true|
|1970-01-01T08:00:00.003+08:00|                                  1|                                  1|                                1.0|                                 1.0|                              true|
+-----------------------------+-----------------------------------+-----------------------------------+-----------------------------------+------------------------------------+----------------------------------+
Total line number = 3
It costs 0.016s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>When TEXT is converted to INT32, INT64, or FLOAT, the TEXT is first converted to DOUBLE and then to the corresponding type, which may cause loss of precision. It will skip directly if the data can not be converted.</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; select cast(s5, &#39;type&#39;=&#39;INT32&#39;), cast(s5, &#39;type&#39;=&#39;INT64&#39;), cast(s5, &#39;type&#39;=&#39;FLOAT&#39;) from root.sg.d1;
+----+-----------------------------------+-----------------------------------+-----------------------------------+
|Time|cast(root.sg.d1.s5, &quot;type&quot;=&quot;INT32&quot;)|cast(root.sg.d1.s5, &quot;type&quot;=&quot;INT64&quot;)|cast(root.sg.d1.s5, &quot;type&quot;=&quot;FLOAT&quot;)|
+----+-----------------------------------+-----------------------------------+-----------------------------------+
+----+-----------------------------------+-----------------------------------+-----------------------------------+
Empty set.
It costs 0.005s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax" aria-hidden="true">#</a> Syntax</h4><p>Example data:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; select text from root.test;
+-----------------------------+--------------+
|                         Time|root.test.text|
+-----------------------------+--------------+
|1970-01-01T08:00:00.001+08:00|           1.1|
|1970-01-01T08:00:00.002+08:00|             1|
|1970-01-01T08:00:00.003+08:00|   hello world|
|1970-01-01T08:00:00.004+08:00|         false|
+-----------------------------+--------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> cast<span class="token punctuation">(</span><span class="token keyword">text</span><span class="token punctuation">,</span> <span class="token string">&#39;type&#39;</span><span class="token operator">=</span><span class="token string">&#39;BOOLEAN&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cast<span class="token punctuation">(</span><span class="token keyword">text</span><span class="token punctuation">,</span> <span class="token string">&#39;type&#39;</span><span class="token operator">=</span><span class="token string">&#39;INT32&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cast<span class="token punctuation">(</span><span class="token keyword">text</span><span class="token punctuation">,</span> <span class="token string">&#39;type&#39;</span><span class="token operator">=</span><span class="token string">&#39;INT64&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cast<span class="token punctuation">(</span><span class="token keyword">text</span><span class="token punctuation">,</span> <span class="token string">&#39;type&#39;</span><span class="token operator">=</span><span class="token string">&#39;FLOAT&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cast<span class="token punctuation">(</span><span class="token keyword">text</span><span class="token punctuation">,</span> <span class="token string">&#39;type&#39;</span><span class="token operator">=</span><span class="token string">&#39;DOUBLE&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Result:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+--------------------------------------+------------------------------------+------------------------------------+------------------------------------+-------------------------------------+
|                         Time|cast(root.test.text, &quot;type&quot;=&quot;BOOLEAN&quot;)|cast(root.test.text, &quot;type&quot;=&quot;INT32&quot;)|cast(root.test.text, &quot;type&quot;=&quot;INT64&quot;)|cast(root.test.text, &quot;type&quot;=&quot;FLOAT&quot;)|cast(root.test.text, &quot;type&quot;=&quot;DOUBLE&quot;)|
+-----------------------------+--------------------------------------+------------------------------------+------------------------------------+------------------------------------+-------------------------------------+
|1970-01-01T08:00:00.001+08:00|                                  true|                                   1|                                   1|                                 1.1|                                  1.1|
|1970-01-01T08:00:00.002+08:00|                                  true|                                   1|                                   1|                                 1.0|                                  1.0|
|1970-01-01T08:00:00.003+08:00|                                  true|                                null|                                null|                                null|                                 null|
|1970-01-01T08:00:00.004+08:00|                                 false|                                null|                                null|                                null|                                 null|
+-----------------------------+--------------------------------------+------------------------------------+------------------------------------+------------------------------------+-------------------------------------+
Total line number = 4
It costs 0.078s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function l(d,r){return s(),t("div",null,[n(`

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

`),o])}const c=e(i,[["render",l],["__file","Conversion.html.vue"]]);export{c as default};
