import{_ as e,o as n,c as s,a,f as t}from"./app-d263b843.js";const l={},i=t(`<h1 id="fill-null-value" tabindex="-1"><a class="header-anchor" href="#fill-null-value" aria-hidden="true">#</a> Fill Null Value</h1><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>When executing some queries, there may be no data for some columns in some rows, and data in these locations will be null, but this kind of null value is not conducive to data visualization and analysis, and the null value needs to be filled.</p><p>In IoTDB, users can use the FILL clause to specify the fill mode when data is missing. Fill null value allows the user to fill any query result with null values according to a specific method, such as taking the previous value that is not null, or linear interpolation. The query result after filling the null value can better reflect the data distribution, which is beneficial for users to perform data analysis.</p><h2 id="syntax-definition" tabindex="-1"><a class="header-anchor" href="#syntax-definition" aria-hidden="true">#</a> Syntax Definition</h2><p><strong>The following is the syntax definition of the <code>FILL</code> clause:</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>FILL <span class="token string">&#39;(&#39;</span> PREVIOUS <span class="token operator">|</span> LINEAR <span class="token operator">|</span> constant <span class="token string">&#39;)&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Note:</strong></p><ul><li>We can specify only one fill method in the <code>FILL</code> clause, and this method applies to all columns of the result set.</li><li>Null value fill is not compatible with version 0.13 and previous syntax (<code>FILL((&lt;data_type&gt;[&lt;fill_method&gt;(, &lt;before_range&gt;, &lt;after_range&gt;)?])+)</code>) is not supported anymore.</li></ul><h2 id="fill-methods" tabindex="-1"><a class="header-anchor" href="#fill-methods" aria-hidden="true">#</a> Fill Methods</h2><p><strong>IoTDB supports the following three fill methods:</strong></p><ul><li><code>PREVIOUS</code>: Fill with the previous non-null value of the column.</li><li><code>LINEAR</code>: Fill the column with a linear interpolation of the previous non-null value and the next non-null value of the column.</li><li>Constant: Fill with the specified constant.</li></ul><p><strong>Following table lists the data types and supported fill methods.</strong></p><table><thead><tr><th style="text-align:left;">Data Type</th><th style="text-align:left;">Supported Fill Methods</th></tr></thead><tbody><tr><td style="text-align:left;">boolean</td><td style="text-align:left;">previous, value</td></tr><tr><td style="text-align:left;">int32</td><td style="text-align:left;">previous, linear, value</td></tr><tr><td style="text-align:left;">int64</td><td style="text-align:left;">previous, linear, value</td></tr><tr><td style="text-align:left;">float</td><td style="text-align:left;">previous, linear, value</td></tr><tr><td style="text-align:left;">double</td><td style="text-align:left;">previous, linear, value</td></tr><tr><td style="text-align:left;">text</td><td style="text-align:left;">previous, value</td></tr></tbody></table><p><strong>Note:</strong> For columns whose data type does not support specifying the fill method, we neither fill it nor throw exception, just keep it as it is.</p><p><strong>For examples:</strong></p><p>If we don&#39;t use any fill methods:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> temperature<span class="token punctuation">,</span> <span class="token keyword">status</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sgcc<span class="token punctuation">.</span>wf03<span class="token punctuation">.</span>wt01 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">37</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">40</span>:<span class="token number">00.000</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>the original result will be like:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-------------------------------+--------------------------+
|                         Time|root.sgcc.wf03.wt01.temperature|root.sgcc.wf03.wt01.status|
+-----------------------------+-------------------------------+--------------------------+
|2017-11-01T16:37:00.000+08:00|                          21.93|                      true|
+-----------------------------+-------------------------------+--------------------------+
|2017-11-01T16:38:00.000+08:00|                           null|                     false|
+-----------------------------+-------------------------------+--------------------------+
|2017-11-01T16:39:00.000+08:00|                          22.23|                      null|
+-----------------------------+-------------------------------+--------------------------+
|2017-11-01T16:40:00.000+08:00|                          23.43|                      null|
+-----------------------------+-------------------------------+--------------------------+
Total line number = 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="previous-fill" tabindex="-1"><a class="header-anchor" href="#previous-fill" aria-hidden="true">#</a> <code>PREVIOUS</code> Fill</h3><p><strong>For null values in the query result set, fill with the previous non-null value of the column.</strong></p><p><strong>Note:</strong> If the first value of this column is null, we will keep first value as null and won&#39;t fill it until we meet first non-null value</p><p>For example, with <code>PREVIOUS</code> fill, the SQL is as follows:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> temperature<span class="token punctuation">,</span> <span class="token keyword">status</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sgcc<span class="token punctuation">.</span>wf03<span class="token punctuation">.</span>wt01 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">37</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">40</span>:<span class="token number">00.000</span> fill<span class="token punctuation">(</span>previous<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>result will be like:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-------------------------------+--------------------------+
|                         Time|root.sgcc.wf03.wt01.temperature|root.sgcc.wf03.wt01.status|
+-----------------------------+-------------------------------+--------------------------+
|2017-11-01T16:37:00.000+08:00|                          21.93|                      true|
+-----------------------------+-------------------------------+--------------------------+
|2017-11-01T16:38:00.000+08:00|                          21.93|                     false|
+-----------------------------+-------------------------------+--------------------------+
|2017-11-01T16:39:00.000+08:00|                          22.23|                     false|
+-----------------------------+-------------------------------+--------------------------+
|2017-11-01T16:40:00.000+08:00|                          23.43|                     false|
+-----------------------------+-------------------------------+--------------------------+
Total line number = 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="linear-fill" tabindex="-1"><a class="header-anchor" href="#linear-fill" aria-hidden="true">#</a> <code>LINEAR</code> Fill</h3><p><strong>For null values in the query result set, fill the column with a linear interpolation of the previous non-null value and the next non-null value of the column.</strong></p><p><strong>Note:</strong></p><ul><li>If all the values before current value are null or all the values after current value are null, we will keep current value as null and won&#39;t fill it.</li><li>If the column&#39;s data type is boolean/text, we neither fill it nor throw exception, just keep it as it is.</li></ul><p>Here we give an example of filling null values using the linear method. The SQL statement is as follows:</p><p>For example, with <code>LINEAR</code> fill, the SQL is as follows:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> temperature<span class="token punctuation">,</span> <span class="token keyword">status</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sgcc<span class="token punctuation">.</span>wf03<span class="token punctuation">.</span>wt01 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">37</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">40</span>:<span class="token number">00.000</span> fill<span class="token punctuation">(</span>linear<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>result will be like:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-------------------------------+--------------------------+
|                         Time|root.sgcc.wf03.wt01.temperature|root.sgcc.wf03.wt01.status|
+-----------------------------+-------------------------------+--------------------------+
|2017-11-01T16:37:00.000+08:00|                          21.93|                      true|
+-----------------------------+-------------------------------+--------------------------+
|2017-11-01T16:38:00.000+08:00|                          22.08|                     false|
+-----------------------------+-------------------------------+--------------------------+
|2017-11-01T16:39:00.000+08:00|                          22.23|                      null|
+-----------------------------+-------------------------------+--------------------------+
|2017-11-01T16:40:00.000+08:00|                          23.43|                      null|
+-----------------------------+-------------------------------+--------------------------+
Total line number = 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="constant-fill" tabindex="-1"><a class="header-anchor" href="#constant-fill" aria-hidden="true">#</a> Constant Fill</h3><p><strong>For null values in the query result set, fill with the specified constant.</strong></p><p><strong>Note:</strong></p><ul><li><p>When using the ValueFill, IoTDB neither fill the query result if the data type is different from the input constant nor throw exception, just keep it as it is.</p><table><thead><tr><th style="text-align:left;">Constant Value Data Type</th><th style="text-align:left;">Support Data Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>BOOLEAN</code></td><td style="text-align:left;"><code>BOOLEAN</code> <code>TEXT</code></td></tr><tr><td style="text-align:left;"><code>INT64</code></td><td style="text-align:left;"><code>INT32</code> <code>INT64</code> <code>FLOAT</code> <code>DOUBLE</code> <code>TEXT</code></td></tr><tr><td style="text-align:left;"><code>DOUBLE</code></td><td style="text-align:left;"><code>FLOAT</code> <code>DOUBLE</code> <code>TEXT</code></td></tr><tr><td style="text-align:left;"><code>TEXT</code></td><td style="text-align:left;"><code>TEXT</code></td></tr></tbody></table></li><li><p>If constant value is larger than Integer.MAX_VALUE, IoTDB neither fill the query result if the data type is int32 nor throw exception, just keep it as it is.</p></li></ul><p>For example, with <code>FLOAT</code> constant fill, the SQL is as follows:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> temperature<span class="token punctuation">,</span> <span class="token keyword">status</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sgcc<span class="token punctuation">.</span>wf03<span class="token punctuation">.</span>wt01 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">37</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">40</span>:<span class="token number">00.000</span> fill<span class="token punctuation">(</span><span class="token number">2.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>result will be like:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-------------------------------+--------------------------+
|                         Time|root.sgcc.wf03.wt01.temperature|root.sgcc.wf03.wt01.status|
+-----------------------------+-------------------------------+--------------------------+
|2017-11-01T16:37:00.000+08:00|                          21.93|                      true|
+-----------------------------+-------------------------------+--------------------------+
|2017-11-01T16:38:00.000+08:00|                            2.0|                     false|
+-----------------------------+-------------------------------+--------------------------+
|2017-11-01T16:39:00.000+08:00|                          22.23|                      null|
+-----------------------------+-------------------------------+--------------------------+
|2017-11-01T16:40:00.000+08:00|                          23.43|                      null|
+-----------------------------+-------------------------------+--------------------------+
Total line number = 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For example, with <code>BOOLEAN</code> constant fill, the SQL is as follows:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> temperature<span class="token punctuation">,</span> <span class="token keyword">status</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sgcc<span class="token punctuation">.</span>wf03<span class="token punctuation">.</span>wt01 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">37</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">40</span>:<span class="token number">00.000</span> fill<span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>result will be like:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-------------------------------+--------------------------+
|                         Time|root.sgcc.wf03.wt01.temperature|root.sgcc.wf03.wt01.status|
+-----------------------------+-------------------------------+--------------------------+
|2017-11-01T16:37:00.000+08:00|                          21.93|                      true|
+-----------------------------+-------------------------------+--------------------------+
|2017-11-01T16:38:00.000+08:00|                           null|                     false|
+-----------------------------+-------------------------------+--------------------------+
|2017-11-01T16:39:00.000+08:00|                          22.23|                      true|
+-----------------------------+-------------------------------+--------------------------+
|2017-11-01T16:40:00.000+08:00|                          23.43|                      true|
+-----------------------------+-------------------------------+--------------------------+
Total line number = 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,48);function o(r,p){return n(),s("div",null,[a(`

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

`),i])}const d=e(l,[["render",o],["__file","Fill.html.vue"]]);export{d as default};
