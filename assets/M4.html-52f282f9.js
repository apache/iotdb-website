import{_ as n,E as e,F as s,af as i,aT as a}from"./framework-a6959d27.js";const t={},o=a(`<h2 id="m4" tabindex="-1"><a class="header-anchor" href="#m4" aria-hidden="true">#</a> M4</h2><h3 id="m4-1" tabindex="-1"><a class="header-anchor" href="#m4-1" aria-hidden="true">#</a> M4</h3><h4 id="函数简介" tabindex="-1"><a class="header-anchor" href="#函数简介" aria-hidden="true">#</a> 函数简介</h4><p>本函数使用 MAC (merging all chunks) 方法执行M4聚合查询。</p><p><strong>函数名：</strong> M4</p><p><strong>输入序列：</strong> 仅支持单个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE。</p><p><strong>参数：</strong></p><ul><li><code>tqs</code>: 查询的开始时间（含）。</li><li><code>tqe</code>: 查询的结束时间（不含）。</li><li><code>w</code>: M4聚合中的时间跨度数量。</li></ul><p><strong>输出序列：</strong> 每个时间跨度的首、尾、最小和最大值。</p><p><code>[tqs+(tqe-tqs)/w*(i-1),tqs+(tqe-tqs)/w*i), i=1,...,w.</code></p><p><strong>说明：</strong></p><ul><li>函数当前仅适用于 <code>research/M4-visualization</code> 分支。</li><li>输入参数需确保 <code>(tqe-tqs)</code> 是 <code>w</code> 的倍数。</li><li>查询时需在 where 语句后添加 <code>time&gt;=tqs and time&lt;tqe</code>。</li></ul><h4 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h4><p>输入序列:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+------------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的 SQL 语句:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> M4<span class="token punctuation">(</span>s0<span class="token punctuation">,</span><span class="token string">&#39;tqs&#39;</span><span class="token operator">=</span><span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;tqe&#39;</span><span class="token operator">=</span><span class="token string">&#39;100&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;w&#39;</span><span class="token operator">=</span><span class="token string">&#39;4&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>vehicle<span class="token punctuation">.</span>d0 <span class="token keyword">where</span> <span class="token keyword">time</span><span class="token operator">&gt;=</span><span class="token number">0</span> <span class="token operator">and</span> <span class="token keyword">time</span><span class="token operator">&lt;</span><span class="token number">100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出序列:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+----------------------------------------------------------------------------------+
|                         Time|                           M4(root.vehicle.d0.s0, &quot;tqs&quot;=&quot;0&quot;, &quot;tqe&quot;=&quot;100&quot;, &quot;w&quot;=&quot;4&quot;)|
+-----------------------------+----------------------------------------------------------------------------------+
|1970-01-01T08:00:00.000+08:00|  FirstPoint=(1,5.0), LastPoint=(20,20.0), BottomPoint=(1,5.0), TopPoint=(10,20.0)|
|1970-01-01T08:00:00.025+08:00|FirstPoint=(25,8.0), LastPoint=(45,30.0), BottomPoint=(25,8.0), TopPoint=(30,40.0)|
|1970-01-01T08:00:00.050+08:00|FirstPoint=(52,8.0), LastPoint=(54,18.0), BottomPoint=(52,8.0), TopPoint=(54,18.0)|
|1970-01-01T08:00:00.075+08:00|                                                                             empty|
+-----------------------------+----------------------------------------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function l(r,d){return e(),s("div",null,[i(`

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

`),o])}const p=n(t,[["render",l],["__file","M4.html.vue"]]);export{p as default};