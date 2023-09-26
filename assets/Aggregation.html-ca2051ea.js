import{_ as n,o as s,c as a,a as e,f as t}from"./app-342a215c.js";const d={},o=t(`<h2 id="聚合函数" tabindex="-1"><a class="header-anchor" href="#聚合函数" aria-hidden="true">#</a> 聚合函数</h2><p>聚合函数是多对一函数。它们对一组值进行聚合计算，得到单个聚合结果。</p><p>除了 <code>COUNT()</code>, <code>COUNT_IF()</code>之外，其他所有聚合函数都忽略空值，并在没有输入行或所有值为空时返回空值。 例如，<code>SUM()</code> 返回 null 而不是零，而 <code>AVG()</code> 在计数中不包括 null 值。</p><p>IoTDB 支持的聚合函数如下：</p><table><thead><tr><th>函数名</th><th>功能描述</th><th>允许的输入类型</th><th>必要的属性参数</th><th>输出类型</th></tr></thead><tbody><tr><td>SUM</td><td>求和。</td><td>INT32 INT64 FLOAT DOUBLE</td><td>无</td><td>DOUBLE</td></tr><tr><td>COUNT</td><td>计算数据点数。</td><td>所有类型</td><td>无</td><td>INT64</td></tr><tr><td>AVG</td><td>求平均值。</td><td>INT32 INT64 FLOAT DOUBLE</td><td>无</td><td>DOUBLE</td></tr><tr><td>EXTREME</td><td>求具有最大绝对值的值。如果正值和负值的最大绝对值相等，则返回正值。</td><td>INT32 INT64 FLOAT DOUBLE</td><td>无</td><td>与输入类型一致</td></tr><tr><td>MAX_VALUE</td><td>求最大值。</td><td>INT32 INT64 FLOAT DOUBLE</td><td>无</td><td>与输入类型一致</td></tr><tr><td>MIN_VALUE</td><td>求最小值。</td><td>INT32 INT64 FLOAT DOUBLE</td><td>无</td><td>与输入类型一致</td></tr><tr><td>FIRST_VALUE</td><td>求时间戳最小的值。</td><td>所有类型</td><td>无</td><td>与输入类型一致</td></tr><tr><td>LAST_VALUE</td><td>求时间戳最大的值。</td><td>所有类型</td><td>无</td><td>与输入类型一致</td></tr><tr><td>MAX_TIME</td><td>求最大时间戳。</td><td>所有类型</td><td>无</td><td>Timestamp</td></tr><tr><td>MIN_TIME</td><td>求最小时间戳。</td><td>所有类型</td><td>无</td><td>Timestamp</td></tr><tr><td>COUNT_IF</td><td>求数据点连续满足某一给定条件，且满足条件的数据点个数（用keep表示）满足指定阈值的次数。</td><td>BOOLEAN</td><td><code>[keep &gt;=/&gt;/=/!=/&lt;/&lt;=]threshold</code>：被指定的阈值或阈值条件，若只使用<code>threshold</code>则等价于<code>keep &gt;= threshold</code>,<code>threshold</code>类型为<code>INT64</code><br> <code>ignoreNull</code>：可选，默认为<code>true</code>；为<code>true</code>表示忽略null值，即如果中间出现null值，直接忽略，不会打断连续性；为<code>false</code>表示不忽略null值，即如果中间出现null值，会打断连续性</td><td>INT64</td></tr></tbody></table><h3 id="count-if" tabindex="-1"><a class="header-anchor" href="#count-if" aria-hidden="true">#</a> COUNT_IF</h3><h4 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>count_if<span class="token punctuation">(</span>predicate<span class="token punctuation">,</span> <span class="token punctuation">[</span>keep <span class="token operator">&gt;=</span><span class="token operator">/</span><span class="token operator">&gt;</span><span class="token operator">/</span><span class="token operator">=</span><span class="token operator">/</span><span class="token operator">!=</span><span class="token operator">/</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&lt;=</span><span class="token punctuation">]</span>threshold<span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token string">&#39;ignoreNull&#39;</span><span class="token operator">=</span><span class="token string">&#39;true/false&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>predicate: 返回类型为<code>BOOLEAN</code>的合法表达式</p><p>threshold 及 ignoreNull 用法见上表</p><blockquote><p>注意: count_if 当前暂不支持与 group by time 的 SlidingWindow 一起使用</p></blockquote><h4 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h4><h5 id="原始数据" tabindex="-1"><a class="header-anchor" href="#原始数据" aria-hidden="true">#</a> 原始数据</h5><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-------------+-------------+
|                         Time|root.db.d1.s1|root.db.d1.s2|
+-----------------------------+-------------+-------------+
|1970-01-01T08:00:00.001+08:00|            0|            0|
|1970-01-01T08:00:00.002+08:00|         null|            0|
|1970-01-01T08:00:00.003+08:00|            0|            0|
|1970-01-01T08:00:00.004+08:00|            0|            0|
|1970-01-01T08:00:00.005+08:00|            1|            0|
|1970-01-01T08:00:00.006+08:00|            1|            0|
|1970-01-01T08:00:00.007+08:00|            1|            0|
|1970-01-01T08:00:00.008+08:00|            0|            0|
|1970-01-01T08:00:00.009+08:00|            0|            0|
|1970-01-01T08:00:00.010+08:00|            0|            0|
+-----------------------------+-------------+-------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="不使用ignorenull参数-忽略null" tabindex="-1"><a class="header-anchor" href="#不使用ignorenull参数-忽略null" aria-hidden="true">#</a> 不使用ignoreNull参数(忽略null)</h5><p>SQL:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> count_if<span class="token punctuation">(</span>s1<span class="token operator">=</span><span class="token number">0</span> <span class="token operator">&amp;</span> s2<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> count_if<span class="token punctuation">(</span>s1<span class="token operator">=</span><span class="token number">1</span> <span class="token operator">&amp;</span> s2<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>db<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+--------------------------------------------------+--------------------------------------------------+
|count_if(root.db.d1.s1 = 0 &amp; root.db.d1.s2 = 0, 3)|count_if(root.db.d1.s1 = 1 &amp; root.db.d1.s2 = 0, 3)|
+--------------------------------------------------+--------------------------------------------------+
|                                                 2|                                                 1|
+--------------------------------------------------+--------------------------------------------------
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="使用ignorenull参数" tabindex="-1"><a class="header-anchor" href="#使用ignorenull参数" aria-hidden="true">#</a> 使用ignoreNull参数</h5><p>SQL:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> count_if<span class="token punctuation">(</span>s1<span class="token operator">=</span><span class="token number">0</span> <span class="token operator">&amp;</span> s2<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;ignoreNull&#39;</span><span class="token operator">=</span><span class="token string">&#39;false&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> count_if<span class="token punctuation">(</span>s1<span class="token operator">=</span><span class="token number">1</span> <span class="token operator">&amp;</span> s2<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;ignoreNull&#39;</span><span class="token operator">=</span><span class="token string">&#39;false&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>db<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------------------------------------------------------------------+------------------------------------------------------------------------+
|count_if(root.db.d1.s1 = 0 &amp; root.db.d1.s2 = 0, 3, &quot;ignoreNull&quot;=&quot;false&quot;)|count_if(root.db.d1.s1 = 1 &amp; root.db.d1.s2 = 0, 3, &quot;ignoreNull&quot;=&quot;false&quot;)|
+------------------------------------------------------------------------+------------------------------------------------------------------------+
|                                                                       1|                                                                       1|
+------------------------------------------------------------------------+------------------------------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function i(r,l){return s(),a("div",null,[e(`

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

`),o])}const c=n(d,[["render",i],["__file","Aggregation.html.vue"]]);export{c as default};
