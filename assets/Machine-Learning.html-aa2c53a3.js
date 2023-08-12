import{_ as e,o as n,c as i,a as s,f as a}from"./app-6e7c3980.js";const t={},r=a(`<h1 id="machine-learning" tabindex="-1"><a class="header-anchor" href="#machine-learning" aria-hidden="true">#</a> Machine Learning</h1><h2 id="ar" tabindex="-1"><a class="header-anchor" href="#ar" aria-hidden="true">#</a> AR</h2><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><p>This function is used to learn the coefficients of the autoregressive models for a time series.</p><p><strong>Name:</strong> AR</p><p><strong>Input Series:</strong> Only support a single input numeric series. The type is INT32 / INT64 / FLOAT / DOUBLE.</p><p><strong>Parameters:</strong></p><ul><li><code>p</code>: The order of the autoregressive model. Its default value is 1.</li></ul><p><strong>Output Series:</strong> Output a single series. The type is DOUBLE. The first line corresponds to the first order coefficient, and so on.</p><p><strong>Note:</strong></p><ul><li>Parameter <code>p</code> should be a positive integer.</li><li>Most points in the series should be sampled at a constant time interval.</li><li>Linear interpolation is applied for the missing points in the series.</li></ul><h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h3><h4 id="assigning-model-order" tabindex="-1"><a class="header-anchor" href="#assigning-model-order" aria-hidden="true">#</a> Assigning Model Order</h4><p>Input Series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------+
|                         Time|root.test.d0.s0|
+-----------------------------+---------------+
|2020-01-01T00:00:01.000+08:00|           -4.0|
|2020-01-01T00:00:02.000+08:00|           -3.0|
|2020-01-01T00:00:03.000+08:00|           -2.0|
|2020-01-01T00:00:04.000+08:00|           -1.0|
|2020-01-01T00:00:05.000+08:00|            0.0|
|2020-01-01T00:00:06.000+08:00|            1.0|
|2020-01-01T00:00:07.000+08:00|            2.0|
|2020-01-01T00:00:08.000+08:00|            3.0|
|2020-01-01T00:00:09.000+08:00|            4.0|
+-----------------------------+---------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> ar<span class="token punctuation">(</span>s0<span class="token punctuation">,</span><span class="token string">&quot;p&quot;</span><span class="token operator">=</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output Series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------------------+
|                         Time|ar(root.test.d0.s0,&quot;p&quot;=&quot;2&quot;)|
+-----------------------------+---------------------------+
|1970-01-01T08:00:00.001+08:00|                     0.9429|
|1970-01-01T08:00:00.002+08:00|                    -0.2571|
+-----------------------------+---------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function o(d,l){return n(),i("div",null,[s(`

​    Licensed to the Apache Software Foundation (ASF) under one
​    or more contributor license agreements.  See the NOTICE file
​    distributed with this work for additional information
​    regarding copyright ownership.  The ASF licenses this file
​    to you under the Apache License, Version 2.0 (the
​    "License"); you may not use this file except in compliance
​    with the License.  You may obtain a copy of the License at
​    
​        http://www.apache.org/licenses/LICENSE-2.0
​    
​    Unless required by applicable law or agreed to in writing,
​    software distributed under the License is distributed on an
​    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
​    KIND, either express or implied.  See the License for the
​    specific language governing permissions and limitations
​    under the License.

`),r])}const u=e(t,[["render",o],["__file","Machine-Learning.html.vue"]]);export{u as default};
