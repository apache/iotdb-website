import{_ as n,o as s,c as a,a as e,f as t}from"./app-q7RXDTub.js";const p={},o=t(`<h1 id="聚合函数" tabindex="-1"><a class="header-anchor" href="#聚合函数" aria-hidden="true">#</a> 聚合函数</h1><p>聚合函数是多对一函数。它们对一组值进行聚合计算，得到单个聚合结果。</p><p>除了 <code>COUNT()</code>, <code>COUNT_IF()</code>之外，其他所有聚合函数都忽略空值，并在没有输入行或所有值为空时返回空值。 例如，<code>SUM()</code> 返回 null 而不是零，而 <code>AVG()</code> 在计数中不包括 null 值。</p><p>IoTDB 支持的聚合函数如下：</p><table><thead><tr><th>函数名</th><th>功能描述</th><th>允许的输入类型</th><th>必要的属性参数</th><th>输出类型</th></tr></thead><tbody><tr><td>SUM</td><td>求和。</td><td>INT32 INT64 FLOAT DOUBLE</td><td>无</td><td>DOUBLE</td></tr><tr><td>COUNT</td><td>计算数据点数。</td><td>所有类型</td><td>无</td><td>INT64</td></tr><tr><td>AVG</td><td>求平均值。</td><td>INT32 INT64 FLOAT DOUBLE</td><td>无</td><td>DOUBLE</td></tr><tr><td>EXTREME</td><td>求具有最大绝对值的值。如果正值和负值的最大绝对值相等，则返回正值。</td><td>INT32 INT64 FLOAT DOUBLE</td><td>无</td><td>与输入类型一致</td></tr><tr><td>MAX_VALUE</td><td>求最大值。</td><td>INT32 INT64 FLOAT DOUBLE</td><td>无</td><td>与输入类型一致</td></tr><tr><td>MIN_VALUE</td><td>求最小值。</td><td>INT32 INT64 FLOAT DOUBLE</td><td>无</td><td>与输入类型一致</td></tr><tr><td>FIRST_VALUE</td><td>求时间戳最小的值。</td><td>所有类型</td><td>无</td><td>与输入类型一致</td></tr><tr><td>LAST_VALUE</td><td>求时间戳最大的值。</td><td>所有类型</td><td>无</td><td>与输入类型一致</td></tr><tr><td>MAX_TIME</td><td>求最大时间戳。</td><td>所有类型</td><td>无</td><td>Timestamp</td></tr><tr><td>MIN_TIME</td><td>求最小时间戳。</td><td>所有类型</td><td>无</td><td>Timestamp</td></tr><tr><td>COUNT_IF</td><td>求数据点连续满足某一给定条件，且满足条件的数据点个数（用keep表示）满足指定阈值的次数。</td><td>BOOLEAN</td><td><code>[keep &gt;=/&gt;/=/!=/&lt;/&lt;=]threshold</code>：被指定的阈值或阈值条件，若只使用<code>threshold</code>则等价于<code>keep &gt;= threshold</code>,<code>threshold</code>类型为<code>INT64</code> <br> <code>ignoreNull</code>：可选，默认为<code>true</code>；为<code>true</code>表示忽略null值，即如果中间出现null值，直接忽略，不会打断连续性；为<code>false</code>表示不忽略null值，即如果中间出现null值，会打断连续性</td><td>INT64</td></tr><tr><td>TIME_DURATION</td><td>求某一列最大一个不为NULL的值所在时间戳与最小一个不为NULL的值所在时间戳的时间戳差</td><td>所有类型</td><td>无</td><td>INT64</td></tr><tr><td>MODE</td><td>求众数。注意：<br>1.输入序列的不同值个数过多时会有内存异常风险; <br>2.如果所有元素出现的频次相同，即没有众数，则返回对应时间戳最小的值; <br>3.如果有多个众数，则返回对应时间戳最小的众数。</td><td>所有类型</td><td>无</td><td>与输入类型一致</td></tr><tr><td>COUNT_TIME</td><td>查询结果集的时间戳的数量。与 align by device 搭配使用时，得到的结果是每个设备的结果集的时间戳的数量。</td><td>所有类型，输入参数只能为*</td><td>无</td><td>INT64</td></tr></tbody></table><h2 id="count-if" tabindex="-1"><a class="header-anchor" href="#count-if" aria-hidden="true">#</a> COUNT_IF</h2><h3 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>count_if<span class="token punctuation">(</span>predicate<span class="token punctuation">,</span> <span class="token punctuation">[</span>keep <span class="token operator">&gt;=</span><span class="token operator">/</span><span class="token operator">&gt;</span><span class="token operator">/</span><span class="token operator">=</span><span class="token operator">/</span><span class="token operator">!=</span><span class="token operator">/</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">&lt;=</span><span class="token punctuation">]</span>threshold<span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token string">&#39;ignoreNull&#39;</span><span class="token operator">=</span><span class="token string">&#39;true/false&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>predicate: 返回类型为<code>BOOLEAN</code>的合法表达式</p><p>threshold 及 ignoreNull 用法见上表</p><blockquote><p>注意: count_if 当前暂不支持与 group by time 的 SlidingWindow 一起使用</p></blockquote><h3 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h3><h4 id="原始数据" tabindex="-1"><a class="header-anchor" href="#原始数据" aria-hidden="true">#</a> 原始数据</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-------------+-------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="不使用ignorenull参数-忽略null" tabindex="-1"><a class="header-anchor" href="#不使用ignorenull参数-忽略null" aria-hidden="true">#</a> 不使用ignoreNull参数(忽略null)</h4><p>SQL:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> count_if<span class="token punctuation">(</span>s1<span class="token operator">=</span><span class="token number">0</span> <span class="token operator">&amp;</span> s2<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span> count_if<span class="token punctuation">(</span>s1<span class="token operator">=</span><span class="token number">1</span> <span class="token operator">&amp;</span> s2<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>db<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+--------------------------------------------------+--------------------------------------------------+
|count_if(root.db.d1.s1 = 0 &amp; root.db.d1.s2 = 0, 3)|count_if(root.db.d1.s1 = 1 &amp; root.db.d1.s2 = 0, 3)|
+--------------------------------------------------+--------------------------------------------------+
|                                                 2|                                                 1|
+--------------------------------------------------+--------------------------------------------------
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用ignorenull参数" tabindex="-1"><a class="header-anchor" href="#使用ignorenull参数" aria-hidden="true">#</a> 使用ignoreNull参数</h4><p>SQL:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> count_if<span class="token punctuation">(</span>s1<span class="token operator">=</span><span class="token number">0</span> <span class="token operator">&amp;</span> s2<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;ignoreNull&#39;</span><span class="token operator">=</span><span class="token string">&#39;false&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> count_if<span class="token punctuation">(</span>s1<span class="token operator">=</span><span class="token number">1</span> <span class="token operator">&amp;</span> s2<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token string">&#39;ignoreNull&#39;</span><span class="token operator">=</span><span class="token string">&#39;false&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>db<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+------------------------------------------------------------------------+------------------------------------------------------------------------+
|count_if(root.db.d1.s1 = 0 &amp; root.db.d1.s2 = 0, 3, &quot;ignoreNull&quot;=&quot;false&quot;)|count_if(root.db.d1.s1 = 1 &amp; root.db.d1.s2 = 0, 3, &quot;ignoreNull&quot;=&quot;false&quot;)|
+------------------------------------------------------------------------+------------------------------------------------------------------------+
|                                                                       1|                                                                       1|
+------------------------------------------------------------------------+------------------------------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="time-duration" tabindex="-1"><a class="header-anchor" href="#time-duration" aria-hidden="true">#</a> TIME_DURATION</h2><h3 id="语法-1" tabindex="-1"><a class="header-anchor" href="#语法-1" aria-hidden="true">#</a> 语法</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>    time_duration<span class="token punctuation">(</span>Path<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用示例-1" tabindex="-1"><a class="header-anchor" href="#使用示例-1" aria-hidden="true">#</a> 使用示例</h3><h4 id="准备数据" tabindex="-1"><a class="header-anchor" href="#准备数据" aria-hidden="true">#</a> 准备数据</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----------+-------------+
|      Time|root.db.d1.s1|
+----------+-------------+
|         1|           70|
|         3|           10|
|         4|          303|
|         6|          110|
|         7|          302|
|         8|          110|
|         9|           60|
|        10|           70|
|1677570934|           30|
+----------+-------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="写入语句" tabindex="-1"><a class="header-anchor" href="#写入语句" aria-hidden="true">#</a> 写入语句</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token string">&quot;CREATE DATABASE root.db&quot;</span><span class="token punctuation">,</span>
<span class="token string">&quot;CREATE TIMESERIES root.db.d1.s1 WITH DATATYPE=INT32, ENCODING=PLAIN tags(city=Beijing)&quot;</span><span class="token punctuation">,</span>
<span class="token string">&quot;INSERT INTO root.db.d1(timestamp,s1,s2,s3) values(1, 2, 10, true)&quot;</span><span class="token punctuation">,</span>
<span class="token string">&quot;INSERT INTO root.db.d1(timestamp,s1,s2,s3) values(2, null, 20, true)&quot;</span><span class="token punctuation">,</span>
<span class="token string">&quot;INSERT INTO root.db.d1(timestamp,s1,s2,s3) values(3, 10, 0, null)&quot;</span><span class="token punctuation">,</span>
<span class="token string">&quot;INSERT INTO root.db.d1(timestamp,s1,s2,s3) values(4, 303, 30, true)&quot;</span><span class="token punctuation">,</span>
<span class="token string">&quot;INSERT INTO root.db.d1(timestamp,s1,s2,s3) values(5, null, 20, true)&quot;</span><span class="token punctuation">,</span>
<span class="token string">&quot;INSERT INTO root.db.d1(timestamp,s1,s2,s3) values(6, 110, 20, true)&quot;</span><span class="token punctuation">,</span>
<span class="token string">&quot;INSERT INTO root.db.d1(timestamp,s1,s2,s3) values(7, 302, 20, true)&quot;</span><span class="token punctuation">,</span>
<span class="token string">&quot;INSERT INTO root.db.d1(timestamp,s1,s2,s3) values(8, 110, null, true)&quot;</span><span class="token punctuation">,</span>
<span class="token string">&quot;INSERT INTO root.db.d1(timestamp,s1,s2,s3) values(9, 60, 20, true)&quot;</span><span class="token punctuation">,</span>
<span class="token string">&quot;INSERT INTO root.db.d1(timestamp,s1,s2,s3) values(10,70, 20, null)&quot;</span><span class="token punctuation">,</span>
<span class="token string">&quot;INSERT INTO root.db.d1(timestamp,s1,s2,s3) values(1677570934, 30, 0, true)&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> time_duration<span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>db<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----------------------------+
|time_duration(root.db.d1.s1)|
+----------------------------+
|                  1677570933|
+----------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注：若数据点只有一个，则返回0，若数据点为null，则返回null。</p></blockquote><h2 id="count-time" tabindex="-1"><a class="header-anchor" href="#count-time" aria-hidden="true">#</a> COUNT_TIME</h2><h3 id="语法-2" tabindex="-1"><a class="header-anchor" href="#语法-2" aria-hidden="true">#</a> 语法</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>    count_time<span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="使用示例-2" tabindex="-1"><a class="header-anchor" href="#使用示例-2" aria-hidden="true">#</a> 使用示例</h3><h4 id="准备数据-1" tabindex="-1"><a class="header-anchor" href="#准备数据-1" aria-hidden="true">#</a> 准备数据</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----------+-------------+-------------+-------------+-------------+
|      Time|root.db.d1.s1|root.db.d1.s2|root.db.d2.s1|root.db.d2.s2|
+----------+-------------+-------------+-------------+-------------+
|         0|            0|         null|         null|            0|
|         1|         null|            1|            1|         null|
|         2|         null|            2|            2|         null|
|         4|            4|         null|         null|            4|
|         5|            5|            5|            5|            5|
|         7|         null|            7|            7|         null|
|         8|            8|            8|            8|            8|
|         9|         null|            9|         null|         null|
+----------+-------------+-------------+-------------+-------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="写入语句-1" tabindex="-1"><a class="header-anchor" href="#写入语句-1" aria-hidden="true">#</a> 写入语句</h4><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">DATABASE</span> root<span class="token punctuation">.</span>db<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> TIMESERIES root<span class="token punctuation">.</span>db<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>s1 <span class="token keyword">WITH</span> DATATYPE<span class="token operator">=</span>INT32<span class="token punctuation">,</span> ENCODING<span class="token operator">=</span>PLAIN<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> TIMESERIES root<span class="token punctuation">.</span>db<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>s2 <span class="token keyword">WITH</span> DATATYPE<span class="token operator">=</span>INT32<span class="token punctuation">,</span> ENCODING<span class="token operator">=</span>PLAIN<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> TIMESERIES root<span class="token punctuation">.</span>db<span class="token punctuation">.</span>d2<span class="token punctuation">.</span>s1 <span class="token keyword">WITH</span> DATATYPE<span class="token operator">=</span>INT32<span class="token punctuation">,</span> ENCODING<span class="token operator">=</span>PLAIN<span class="token punctuation">;</span>
<span class="token keyword">CREATE</span> TIMESERIES root<span class="token punctuation">.</span>db<span class="token punctuation">.</span>d2<span class="token punctuation">.</span>s2 <span class="token keyword">WITH</span> DATATYPE<span class="token operator">=</span>INT32<span class="token punctuation">,</span> ENCODING<span class="token operator">=</span>PLAIN<span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> root<span class="token punctuation">.</span>db<span class="token punctuation">.</span>d1<span class="token punctuation">(</span><span class="token keyword">time</span><span class="token punctuation">,</span> s1<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> root<span class="token punctuation">.</span>db<span class="token punctuation">.</span>d1<span class="token punctuation">(</span><span class="token keyword">time</span><span class="token punctuation">,</span> s2<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">9</span><span class="token punctuation">,</span><span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> root<span class="token punctuation">.</span>db<span class="token punctuation">.</span>d2<span class="token punctuation">(</span><span class="token keyword">time</span><span class="token punctuation">,</span> s1<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> root<span class="token punctuation">.</span>db<span class="token punctuation">.</span>d2<span class="token punctuation">(</span><span class="token keyword">time</span><span class="token punctuation">,</span> s2<span class="token punctuation">)</span> <span class="token keyword">VALUES</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">,</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询示例1：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> count_time<span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>db<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+
|count_time(*)|
+-------------+
|            8|
+-------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询示例2：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> count_time<span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>db<span class="token punctuation">.</span>d1<span class="token punctuation">,</span> root<span class="token punctuation">.</span>db<span class="token punctuation">.</span>d2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+
|count_time(*)|
+-------------+
|            8|
+-------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询示例3：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> count_time<span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>db<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">group</span> <span class="token keyword">by</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span>ms<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-------------+
|                         Time|count_time(*)|
+-----------------------------+-------------+
|1970-01-01T08:00:00.000+08:00|            2|            
|1970-01-01T08:00:00.002+08:00|            1|            
|1970-01-01T08:00:00.004+08:00|            2|            
|1970-01-01T08:00:00.006+08:00|            1|            
|1970-01-01T08:00:00.008+08:00|            2|            
+-----------------------------+-------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查询示例4：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> count_time<span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>db<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">group</span> <span class="token keyword">by</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span>ms<span class="token punctuation">)</span> align <span class="token keyword">by</span> device
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+----------+-------------+
|                         Time|    Device|count_time(*)|
+-----------------------------+----------+-------------+
|1970-01-01T08:00:00.000+08:00|root.db.d1|            2|
|1970-01-01T08:00:00.002+08:00|root.db.d1|            1|
|1970-01-01T08:00:00.004+08:00|root.db.d1|            2|
|1970-01-01T08:00:00.006+08:00|root.db.d1|            1|
|1970-01-01T08:00:00.008+08:00|root.db.d1|            2|
|1970-01-01T08:00:00.000+08:00|root.db.d2|            2|
|1970-01-01T08:00:00.002+08:00|root.db.d2|            1|
|1970-01-01T08:00:00.004+08:00|root.db.d2|            2|
|1970-01-01T08:00:00.006+08:00|root.db.d2|            1|
|1970-01-01T08:00:00.008+08:00|root.db.d2|            1|
+-----------------------------+----------+-------------+

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注：</p><ol><li>count_time里的表达式只能为*。</li><li>count_time不能和其他的聚合函数一起使用。</li><li>having语句里不支持使用count_time, 使用count_time聚合函数时不支持使用having语句。</li><li>count_time不支持与group by level, group by tag一起使用。</li></ol></blockquote>`,62);function i(l,c){return s(),a("div",null,[e(`

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

`),o])}const u=n(p,[["render",i],["__file","Aggregation.html.vue"]]);export{u as default};
