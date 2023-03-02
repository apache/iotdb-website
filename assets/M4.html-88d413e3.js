import{_ as e,E as n,F as s,af as i,aT as a}from"./framework-4edf7e71.js";const t={},o=a(`<h1 id="m4" tabindex="-1"><a class="header-anchor" href="#m4" aria-hidden="true">#</a> M4</h1><h2 id="m4-1" tabindex="-1"><a class="header-anchor" href="#m4-1" aria-hidden="true">#</a> M4</h2><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><p>This function is used to execute the M4 aggregation query using the MAC (merging all chunks) approach.</p><p><strong>Name:</strong> M4</p><p><strong>Input Series:</strong> Only supports a single input sequence, the type is INT32 / INT64 / FLOAT / DOUBLE</p><p><strong>Parameters:</strong></p><ul><li><code>tqs</code>: The start time (included) of the query time range.</li><li><code>tqe</code>: The end time (excluded) of the query time range.</li><li><code>w</code>: The number of time spans in the M4 aggregation.</li></ul><p><strong>Output Series:</strong> The first, last, bottom, and top points in each time span [tqs+(tqe-tqs)/w*(i-1),tqs+(tqe-tqs)/w*i), i=1,...,w.</p><p><strong>Note:</strong></p><ul><li>This function is right now only supported in the branch <code>research/M4-visualization</code> right now.</li><li>You need to make sure (tqe-tqs) is divisible by w.</li><li>You need to add <code>time&gt;=tqs and time&lt;tqe</code> in the where clause.</li></ul><h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h3><p>Input series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+------------------+
|                         Time|root.vehicle.d0.s0|
+-----------------------------+------------------+
|1970-01-01T08:00:00.001+08:00|               5.0|
|1970-01-01T08:00:00.002+08:00|              15.0|
|1970-01-01T08:00:00.005+08:00|              10.0|
|1970-01-01T08:00:00.008+08:00|               8.0|
|1970-01-01T08:00:00.010+08:00|              20.0|
|1970-01-01T08:00:00.020+08:00|              20.0|
|1970-01-01T08:00:00.025+08:00|               8.0|
|1970-01-01T08:00:00.027+08:00|              20.0|
|1970-01-01T08:00:00.030+08:00|              40.0|
|1970-01-01T08:00:00.033+08:00|               9.0|
|1970-01-01T08:00:00.035+08:00|              10.0|
|1970-01-01T08:00:00.040+08:00|              20.0|
|1970-01-01T08:00:00.045+08:00|              30.0|
|1970-01-01T08:00:00.052+08:00|               8.0|
|1970-01-01T08:00:00.054+08:00|              18.0|
|1970-01-01T08:00:00.120+08:00|               8.0|
+-----------------------------+------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> M4<span class="token punctuation">(</span>s0<span class="token punctuation">,</span><span class="token string">&#39;tqs&#39;</span><span class="token operator">=</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;tqe&#39;</span><span class="token operator">=</span><span class="token string">&#39;100&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;w&#39;</span><span class="token operator">=</span><span class="token string">&#39;4&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>vehicle<span class="token punctuation">.</span>d0 <span class="token keyword">where</span> <span class="token keyword">time</span><span class="token operator">&gt;=</span><span class="token number">0</span> <span class="token operator">and</span> <span class="token keyword">time</span><span class="token operator">&lt;</span><span class="token number">100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+----------------------------------------------------------------------------------+
|                         Time|                           M4(root.vehicle.d0.s0, &quot;tqs&quot;=&quot;0&quot;, &quot;tqe&quot;=&quot;100&quot;, &quot;w&quot;=&quot;4&quot;)|
+-----------------------------+----------------------------------------------------------------------------------+
|1970-01-01T08:00:00.000+08:00|  FirstPoint=(1,5.0), LastPoint=(20,20.0), BottomPoint=(1,5.0), TopPoint=(10,20.0)|
|1970-01-01T08:00:00.025+08:00|FirstPoint=(25,8.0), LastPoint=(45,30.0), BottomPoint=(25,8.0), TopPoint=(30,40.0)|
|1970-01-01T08:00:00.050+08:00|FirstPoint=(52,8.0), LastPoint=(54,18.0), BottomPoint=(52,8.0), TopPoint=(54,18.0)|
|1970-01-01T08:00:00.075+08:00|                                                                             empty|
+-----------------------------+----------------------------------------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18);function r(l,d){return n(),s("div",null,[i(`

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

`),o])}const p=e(t,[["render",r],["__file","M4.html.vue"]]);export{p as default};