import{_ as n,o as e,c as s,a,f as i}from"./app-02e7f176.js";const t={},d=i(`<h1 id="机器学习" tabindex="-1"><a class="header-anchor" href="#机器学习" aria-hidden="true">#</a> 机器学习</h1><h2 id="ar" tabindex="-1"><a class="header-anchor" href="#ar" aria-hidden="true">#</a> AR</h2><h3 id="函数简介" tabindex="-1"><a class="header-anchor" href="#函数简介" aria-hidden="true">#</a> 函数简介</h3><p>本函数用于学习数据的自回归模型系数。</p><p><strong>函数名:</strong> AR</p><p><strong>输入序列:</strong> 仅支持单个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE。</p><p><strong>参数:</strong></p><ul><li><code>p</code>：自回归模型的阶数。默认为1。</li></ul><p><strong>输出序列:</strong> 输出单个序列，类型为 DOUBLE。第一行对应模型的一阶系数，以此类推。</p><p><strong>提示:</strong></p><ul><li><p><code>p</code>应为正整数。</p></li><li><p>序列中的大部分点为等间隔采样点。</p></li><li><p>序列中的缺失点通过线性插值进行填补后用于学习过程。</p></li></ul><h3 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h3><h4 id="指定阶数" tabindex="-1"><a class="header-anchor" href="#指定阶数" aria-hidden="true">#</a> 指定阶数</h4><p>输入序列：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的 SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> ar<span class="token punctuation">(</span>s0<span class="token punctuation">,</span><span class="token string">&quot;p&quot;</span><span class="token operator">=</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------------------+
|                         Time|ar(root.test.d0.s0,&quot;p&quot;=&quot;2&quot;)|
+-----------------------------+---------------------------+
|1970-01-01T08:00:00.001+08:00|                     0.9429|
|1970-01-01T08:00:00.002+08:00|                    -0.2571|
+-----------------------------+---------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="representation" tabindex="-1"><a class="header-anchor" href="#representation" aria-hidden="true">#</a> Representation</h2><h3 id="函数简介-1" tabindex="-1"><a class="header-anchor" href="#函数简介-1" aria-hidden="true">#</a> 函数简介</h3><p>本函数用于时间序列的表示。</p><p><strong>函数名:</strong> Representation</p><p><strong>输入序列:</strong> 仅支持单个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE。</p><p><strong>参数:</strong></p><ul><li><code>tb</code>：时间分块数量。默认为10。</li><li><code>vb</code>：值分块数量。默认为10。</li></ul><p><strong>输出序列:</strong> 输出单个序列，类型为INT32，长度为<code>tb*vb</code>。序列的时间戳从0开始，仅用于表示顺序。</p><p><strong>提示:</strong></p><ul><li><code>tb </code>,<code>vb</code>应为正整数。</li></ul><h3 id="使用示例-1" tabindex="-1"><a class="header-anchor" href="#使用示例-1" aria-hidden="true">#</a> 使用示例</h3><h4 id="指定时间分块数量、值分块数量" tabindex="-1"><a class="header-anchor" href="#指定时间分块数量、值分块数量" aria-hidden="true">#</a> 指定时间分块数量、值分块数量</h4><p>输入序列：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的 SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> representation<span class="token punctuation">(</span>s0<span class="token punctuation">,</span><span class="token string">&quot;tb&quot;</span><span class="token operator">=</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;vb&quot;</span><span class="token operator">=</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-------------------------------------------------+
|                         Time|representation(root.test.d0.s0,&quot;tb&quot;=&quot;3&quot;,&quot;vb&quot;=&quot;2&quot;)|
+-----------------------------+-------------------------------------------------+
|1970-01-01T08:00:00.001+08:00|                                                1|
|1970-01-01T08:00:00.002+08:00|                                                1|
|1970-01-01T08:00:00.003+08:00|                                                0|
|1970-01-01T08:00:00.004+08:00|                                                0|
|1970-01-01T08:00:00.005+08:00|                                                1|
|1970-01-01T08:00:00.006+08:00|                                                1|
+-----------------------------+-------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="rm" tabindex="-1"><a class="header-anchor" href="#rm" aria-hidden="true">#</a> RM</h2><h3 id="函数简介-2" tabindex="-1"><a class="header-anchor" href="#函数简介-2" aria-hidden="true">#</a> 函数简介</h3><p>本函数用于基于时间序列表示的匹配度。</p><p><strong>函数名:</strong> RM</p><p><strong>输入序列:</strong> 仅支持两个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE。</p><p><strong>参数:</strong></p><ul><li><code>tb</code>：时间分块数量。默认为10。</li><li><code>vb</code>：值分块数量。默认为10。</li></ul><p><strong>输出序列:</strong> 输出单个序列，类型为DOUBLE，长度为<code>1</code>。序列的时间戳从0开始，序列仅有一个数据点，其时间戳为0，值为两个时间序列的匹配度。</p><p><strong>提示:</strong></p><ul><li><code>tb </code>,<code>vb</code>应为正整数。</li></ul><h3 id="使用示例-2" tabindex="-1"><a class="header-anchor" href="#使用示例-2" aria-hidden="true">#</a> 使用示例</h3><h4 id="指定时间分块数量、值分块数量-1" tabindex="-1"><a class="header-anchor" href="#指定时间分块数量、值分块数量-1" aria-hidden="true">#</a> 指定时间分块数量、值分块数量</h4><p>输入序列：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------+---------------+
|                         Time|root.test.d0.s0|root.test.d0.s1
+-----------------------------+---------------+---------------+
|2020-01-01T00:00:01.000+08:00|           -4.0|           -4.0|
|2020-01-01T00:00:02.000+08:00|           -3.0|           -3.0|
|2020-01-01T00:00:03.000+08:00|           -3.0|           -3.0|
|2020-01-01T00:00:04.000+08:00|           -1.0|           -1.0|
|2020-01-01T00:00:05.000+08:00|            0.0|            0.0|
|2020-01-01T00:00:06.000+08:00|            1.0|            1.0|
|2020-01-01T00:00:07.000+08:00|            2.0|            2.0|
|2020-01-01T00:00:08.000+08:00|            3.0|            3.0|
|2020-01-01T00:00:09.000+08:00|            4.0|            4.0|
+-----------------------------+---------------+---------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的 SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> rm<span class="token punctuation">(</span>s0<span class="token punctuation">,</span> s1<span class="token punctuation">,</span><span class="token string">&quot;tb&quot;</span><span class="token operator">=</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;vb&quot;</span><span class="token operator">=</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-----------------------------------------------------+
|                         Time|rm(root.test.d0.s0,root.test.d0.s1,&quot;tb&quot;=&quot;3&quot;,&quot;vb&quot;=&quot;2&quot;)|
+-----------------------------+-----------------------------------------------------+
|1970-01-01T08:00:00.001+08:00|                                                 1.00|
+-----------------------------+-----------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,55);function r(l,o){return e(),s("div",null,[a(`

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

`),d])}const u=n(t,[["render",r],["__file","Machine-Learning.html.vue"]]);export{u as default};
