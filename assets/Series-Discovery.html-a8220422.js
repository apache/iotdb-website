import{_ as e,O as n,P as s,ah as i,aW as a}from"./framework-374e0e89.js";const d={},t=a(`<h1 id="序列发现" tabindex="-1"><a class="header-anchor" href="#序列发现" aria-hidden="true">#</a> 序列发现</h1><h2 id="consecutivesequences" tabindex="-1"><a class="header-anchor" href="#consecutivesequences" aria-hidden="true">#</a> ConsecutiveSequences</h2><h3 id="函数简介" tabindex="-1"><a class="header-anchor" href="#函数简介" aria-hidden="true">#</a> 函数简介</h3><p>本函数用于在多维严格等间隔数据中发现局部最长连续子序列。</p><p>严格等间隔数据是指数据的时间间隔是严格相等的，允许存在数据缺失（包括行缺失和值缺失），但不允许存在数据冗余和时间戳偏移。</p><p>连续子序列是指严格按照标准时间间隔等距排布，不存在任何数据缺失的子序列。如果某个连续子序列不是任何连续子序列的真子序列，那么它是局部最长的。</p><p><strong>函数名：</strong> CONSECUTIVESEQUENCES</p><p><strong>输入序列：</strong> 支持多个输入序列，类型可以是任意的，但要满足严格等间隔的要求。</p><p><strong>参数：</strong></p><ul><li><code>gap</code>：标准时间间隔，是一个有单位的正数。目前支持五种单位，分别是&#39;ms&#39;（毫秒）、&#39;s&#39;（秒）、&#39;m&#39;（分钟）、&#39;h&#39;（小时）和&#39;d&#39;（天）。在缺省情况下，函数会利用众数估计标准时间间隔。</li></ul><p><strong>输出序列：</strong> 输出单个序列，类型为 INT32。输出序列中的每一个数据点对应一个局部最长连续子序列，时间戳为子序列的起始时刻，值为子序列包含的数据点个数。</p><p><strong>提示：</strong> 对于不符合要求的输入，本函数不对输出做任何保证。</p><h3 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h3><h4 id="手动指定标准时间间隔" tabindex="-1"><a class="header-anchor" href="#手动指定标准时间间隔" aria-hidden="true">#</a> 手动指定标准时间间隔</h4><p>本函数可以通过<code>gap</code>参数手动指定标准时间间隔。需要注意的是，错误的参数设置会导致输出产生严重错误。</p><p>输入序列：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------+---------------+
|                         Time|root.test.d1.s1|root.test.d1.s2|
+-----------------------------+---------------+---------------+
|2020-01-01T00:00:00.000+08:00|            1.0|            1.0|
|2020-01-01T00:05:00.000+08:00|            1.0|            1.0|
|2020-01-01T00:10:00.000+08:00|            1.0|            1.0|
|2020-01-01T00:20:00.000+08:00|            1.0|            1.0|
|2020-01-01T00:25:00.000+08:00|            1.0|            1.0|
|2020-01-01T00:30:00.000+08:00|            1.0|            1.0|
|2020-01-01T00:35:00.000+08:00|            1.0|            1.0|
|2020-01-01T00:40:00.000+08:00|            1.0|           null|
|2020-01-01T00:45:00.000+08:00|            1.0|            1.0|
|2020-01-01T00:50:00.000+08:00|            1.0|            1.0|
+-----------------------------+---------------+---------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的SQL语句：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> consecutivesequences<span class="token punctuation">(</span>s1<span class="token punctuation">,</span>s2<span class="token punctuation">,</span><span class="token string">&#39;gap&#39;</span><span class="token operator">=</span><span class="token string">&#39;5m&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+------------------------------------------------------------------+
|                         Time|consecutivesequences(root.test.d1.s1, root.test.d1.s2, &quot;gap&quot;=&quot;5m&quot;)|
+-----------------------------+------------------------------------------------------------------+
|2020-01-01T00:00:00.000+08:00|                                                                 3|
|2020-01-01T00:20:00.000+08:00|                                                                 4|
|2020-01-01T00:45:00.000+08:00|                                                                 2|
+-----------------------------+------------------------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="自动估计标准时间间隔" tabindex="-1"><a class="header-anchor" href="#自动估计标准时间间隔" aria-hidden="true">#</a> 自动估计标准时间间隔</h4><p>当<code>gap</code>参数缺省时，本函数可以利用众数估计标准时间间隔，得到同样的结果。因此，这种用法更受推荐。</p><p>输入序列同上，用于查询的SQL语句如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> consecutivesequences<span class="token punctuation">(</span>s1<span class="token punctuation">,</span>s2<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+------------------------------------------------------+
|                         Time|consecutivesequences(root.test.d1.s1, root.test.d1.s2)|
+-----------------------------+------------------------------------------------------+
|2020-01-01T00:00:00.000+08:00|                                                     3|
|2020-01-01T00:20:00.000+08:00|                                                     4|
|2020-01-01T00:45:00.000+08:00|                                                     2|
+-----------------------------+------------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="consecutivewindows" tabindex="-1"><a class="header-anchor" href="#consecutivewindows" aria-hidden="true">#</a> ConsecutiveWindows</h2><h3 id="函数简介-1" tabindex="-1"><a class="header-anchor" href="#函数简介-1" aria-hidden="true">#</a> 函数简介</h3><p>本函数用于在多维严格等间隔数据中发现指定长度的连续窗口。</p><p>严格等间隔数据是指数据的时间间隔是严格相等的，允许存在数据缺失（包括行缺失和值缺失），但不允许存在数据冗余和时间戳偏移。</p><p>连续窗口是指严格按照标准时间间隔等距排布，不存在任何数据缺失的子序列。</p><p><strong>函数名：</strong> CONSECUTIVEWINDOWS</p><p><strong>输入序列：</strong> 支持多个输入序列，类型可以是任意的，但要满足严格等间隔的要求。</p><p><strong>参数：</strong></p><ul><li><code>gap</code>：标准时间间隔，是一个有单位的正数。目前支持五种单位，分别是 &#39;ms&#39;（毫秒）、&#39;s&#39;（秒）、&#39;m&#39;（分钟）、&#39;h&#39;（小时）和&#39;d&#39;（天）。在缺省情况下，函数会利用众数估计标准时间间隔。</li><li><code>length</code>：序列长度，是一个有单位的正数。目前支持五种单位，分别是 &#39;ms&#39;（毫秒）、&#39;s&#39;（秒）、&#39;m&#39;（分钟）、&#39;h&#39;（小时）和&#39;d&#39;（天）。该参数不允许缺省。</li></ul><p><strong>输出序列：</strong> 输出单个序列，类型为 INT32。输出序列中的每一个数据点对应一个指定长度连续子序列，时间戳为子序列的起始时刻，值为子序列包含的数据点个数。</p><p><strong>提示：</strong> 对于不符合要求的输入，本函数不对输出做任何保证。</p><h3 id="使用示例-1" tabindex="-1"><a class="header-anchor" href="#使用示例-1" aria-hidden="true">#</a> 使用示例</h3><p>输入序列：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------+---------------+
|                         Time|root.test.d1.s1|root.test.d1.s2|
+-----------------------------+---------------+---------------+
|2020-01-01T00:00:00.000+08:00|            1.0|            1.0|
|2020-01-01T00:05:00.000+08:00|            1.0|            1.0|
|2020-01-01T00:10:00.000+08:00|            1.0|            1.0|
|2020-01-01T00:20:00.000+08:00|            1.0|            1.0|
|2020-01-01T00:25:00.000+08:00|            1.0|            1.0|
|2020-01-01T00:30:00.000+08:00|            1.0|            1.0|
|2020-01-01T00:35:00.000+08:00|            1.0|            1.0|
|2020-01-01T00:40:00.000+08:00|            1.0|           null|
|2020-01-01T00:45:00.000+08:00|            1.0|            1.0|
|2020-01-01T00:50:00.000+08:00|            1.0|            1.0|
+-----------------------------+---------------+---------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的SQL语句：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> consecutivewindows<span class="token punctuation">(</span>s1<span class="token punctuation">,</span>s2<span class="token punctuation">,</span><span class="token string">&#39;length&#39;</span><span class="token operator">=</span><span class="token string">&#39;10m&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+--------------------------------------------------------------------+
|                         Time|consecutivewindows(root.test.d1.s1, root.test.d1.s2, &quot;length&quot;=&quot;10m&quot;)|
+-----------------------------+--------------------------------------------------------------------+
|2020-01-01T00:00:00.000+08:00|                                                                   3|
|2020-01-01T00:20:00.000+08:00|                                                                   3|
|2020-01-01T00:25:00.000+08:00|                                                                   3|
+-----------------------------+--------------------------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,45);function l(r,c){return n(),s("div",null,[i(`

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

`),t])}const u=e(d,[["render",l],["__file","Series-Discovery.html.vue"]]);export{u as default};