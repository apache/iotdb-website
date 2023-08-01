import{_ as s,o as e,c as n,a as t,f as a}from"./app-1ba67e78.js";const i={},o=a(`<h1 id="数据类型转换" tabindex="-1"><a class="header-anchor" href="#数据类型转换" aria-hidden="true">#</a> 数据类型转换</h1><h2 id="cast" tabindex="-1"><a class="header-anchor" href="#cast" aria-hidden="true">#</a> CAST</h2><h3 id="函数简介" tabindex="-1"><a class="header-anchor" href="#函数简介" aria-hidden="true">#</a> 函数简介</h3><p>当前IoTDB支持6种数据类型，其中包括INT32、INT64、FLOAT、DOUBLE、BOOLEAN以及TEXT。当我们对数据进行查询或者计算时可能需要进行数据类型的转换， 比如说将TEXT转换为INT32，或者提高数据精度，比如说将FLOAT转换为DOUBLE。所以，IoTDB支持使用cast函数对数据类型进行转换。</p><table><thead><tr><th>函数名</th><th>必要的属性参数</th><th>输出序列类型</th><th>功能类型</th></tr></thead><tbody><tr><td>CAST</td><td><code>type</code>:输出的数据点的类型，只能是 INT32 / INT64 / FLOAT / DOUBLE / BOOLEAN / TEXT</td><td>由输入属性参数<code>type</code>决定</td><td>将数据转换为<code>type</code>参数指定的类型。</td></tr></tbody></table><h3 id="类型转换说明" tabindex="-1"><a class="header-anchor" href="#类型转换说明" aria-hidden="true">#</a> 类型转换说明</h3><p>1.当INT32、INT64类型的值不为0时，FLOAT与DOUBLE类型的值不为0.0时，TEXT类型不为空字符串或者&quot;false&quot;时，转换为BOOLEAN类型时值为true，否则为false。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show timeseries root.sg.d1.*;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.当BOOLEAN类型的值为true时，转换为INT32与INT64类型的值为1，转换为FLOAT或者DOUBLE类型时值为1.0，转换为TEXT类型时值为&quot;true&quot;。当BOOLEAN类型的值为false时，转换为INT32与INT64类型的值为0，转换为FLOAT或者DOUBLE类型时值为0.0，转换为TEXT类型时值为&quot;false&quot;。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; select cast(s6, &#39;type&#39;=&#39;INT32&#39;), cast(s6, &#39;type&#39;=&#39;INT64&#39;), cast(s6, &#39;type&#39;=&#39;FLOAT&#39;), cast(s6, &#39;type&#39;=&#39;DOUBLE&#39;), cast(s6, &#39;type&#39;=&#39;TEXT&#39;) from root.sg.d1;
+-----------------------------+-----------------------------------+-----------------------------------+-----------------------------------+------------------------------------+----------------------------------+
|                         Time|cast(root.sg.d1.s6, &quot;type&quot;=&quot;INT32&quot;)|cast(root.sg.d1.s6, &quot;type&quot;=&quot;INT64&quot;)|cast(root.sg.d1.s6, &quot;type&quot;=&quot;FLOAT&quot;)|cast(root.sg.d1.s6, &quot;type&quot;=&quot;DOUBLE&quot;)|cast(root.sg.d1.s6, &quot;type&quot;=&quot;TEXT&quot;)|
+-----------------------------+-----------------------------------+-----------------------------------+-----------------------------------+------------------------------------+----------------------------------+
|1970-01-01T08:00:00.001+08:00|                                  0|                                  0|                                0.0|                                 0.0|                             false|
|1970-01-01T08:00:00.002+08:00|                                  1|                                  1|                                1.0|                                 1.0|                              true|
|1970-01-01T08:00:00.003+08:00|                                  1|                                  1|                                1.0|                                 1.0|                              true|
+-----------------------------+-----------------------------------+-----------------------------------+-----------------------------------+------------------------------------+----------------------------------+
Total line number = 3
It costs 0.016s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.当TEXT类型转换为INT32、INT64、FLOAT类型时，会先将TEXT类型的数据转换为DOUBLE类型，然后再转换为对应的类型，此时可能会存在损失精度的问题。如果无法转换的话则直接跳过。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; select cast(s5, &#39;type&#39;=&#39;INT32&#39;), cast(s5, &#39;type&#39;=&#39;INT64&#39;), cast(s5, &#39;type&#39;=&#39;FLOAT&#39;) from root.sg.d1;
+----+-----------------------------------+-----------------------------------+-----------------------------------+
|Time|cast(root.sg.d1.s5, &quot;type&quot;=&quot;INT32&quot;)|cast(root.sg.d1.s5, &quot;type&quot;=&quot;INT64&quot;)|cast(root.sg.d1.s5, &quot;type&quot;=&quot;FLOAT&quot;)|
+----+-----------------------------------+-----------------------------------+-----------------------------------+
+----+-----------------------------------+-----------------------------------+-----------------------------------+
Empty set.
It costs 0.009s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h3><p>测试数据：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; select text from root.test;
+-----------------------------+--------------+
|                         Time|root.test.text|
+-----------------------------+--------------+
|1970-01-01T08:00:00.001+08:00|           1.1|
|1970-01-01T08:00:00.002+08:00|             1|
|1970-01-01T08:00:00.003+08:00|   hello world|
|1970-01-01T08:00:00.004+08:00|         false|
+-----------------------------+--------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL语句：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> cast<span class="token punctuation">(</span><span class="token keyword">text</span><span class="token punctuation">,</span> <span class="token string">&#39;type&#39;</span><span class="token operator">=</span><span class="token string">&#39;BOOLEAN&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cast<span class="token punctuation">(</span><span class="token keyword">text</span><span class="token punctuation">,</span> <span class="token string">&#39;type&#39;</span><span class="token operator">=</span><span class="token string">&#39;INT32&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cast<span class="token punctuation">(</span><span class="token keyword">text</span><span class="token punctuation">,</span> <span class="token string">&#39;type&#39;</span><span class="token operator">=</span><span class="token string">&#39;INT64&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cast<span class="token punctuation">(</span><span class="token keyword">text</span><span class="token punctuation">,</span> <span class="token string">&#39;type&#39;</span><span class="token operator">=</span><span class="token string">&#39;FLOAT&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> cast<span class="token punctuation">(</span><span class="token keyword">text</span><span class="token punctuation">,</span> <span class="token string">&#39;type&#39;</span><span class="token operator">=</span><span class="token string">&#39;DOUBLE&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+--------------------------------------+------------------------------------+------------------------------------+------------------------------------+-------------------------------------+
|                         Time|cast(root.test.text, &quot;type&quot;=&quot;BOOLEAN&quot;)|cast(root.test.text, &quot;type&quot;=&quot;INT32&quot;)|cast(root.test.text, &quot;type&quot;=&quot;INT64&quot;)|cast(root.test.text, &quot;type&quot;=&quot;FLOAT&quot;)|cast(root.test.text, &quot;type&quot;=&quot;DOUBLE&quot;)|
+-----------------------------+--------------------------------------+------------------------------------+------------------------------------+------------------------------------+-------------------------------------+
|1970-01-01T08:00:00.001+08:00|                                  true|                                   1|                                   1|                                 1.1|                                  1.1|
|1970-01-01T08:00:00.002+08:00|                                  true|                                   1|                                   1|                                 1.0|                                  1.0|
|1970-01-01T08:00:00.003+08:00|                                  true|                                null|                                null|                                null|                                 null|
|1970-01-01T08:00:00.004+08:00|                                 false|                                null|                                null|                                null|                                 null|
+-----------------------------+--------------------------------------+------------------------------------+------------------------------------+------------------------------------+-------------------------------------+
Total line number = 4
It costs 0.078s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function l(d,u){return e(),n("div",null,[t(`

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

`),o])}const c=s(i,[["render",l],["__file","Conversion.html.vue"]]);export{c as default};
