import{_ as n,o as s,c as e,a,f as l}from"./app-jUndaAnK.js";const t={},i=l(`<h2 id="查询结果分页" tabindex="-1"><a class="header-anchor" href="#查询结果分页" aria-hidden="true">#</a> 查询结果分页</h2><p>当查询结果集数据量很大，放在一个页面不利于显示，可以使用 <code>LIMIT/SLIMIT</code> 子句和 <code>OFFSET/SOFFSET </code>子句进行分页控制。</p><ul><li><code>LIMIT</code> 和 <code>SLIMIT</code> 子句用于控制查询结果的行数和列数。</li><li><code>OFFSET</code> 和 <code>SOFFSET</code> 子句用于控制结果显示的起始位置。</li></ul><h3 id="按行分页" tabindex="-1"><a class="header-anchor" href="#按行分页" aria-hidden="true">#</a> 按行分页</h3><p>用户可以通过 <code>LIMIT</code> 和 <code>OFFSET</code> 子句控制查询结果的行数，<code>LIMIT rowLimit</code> 指定查询结果的行数，<code>OFFSET rowOffset</code> 指定查询结果显示的起始行位置。</p><p>注意：</p><ul><li>当 <code>rowOffset</code> 超过结果集的大小时，返回空结果集。</li><li>当 <code>rowLimit</code> 超过结果集的大小时，返回所有查询结果。</li><li>当 <code>rowLimit</code> 和 <code>rowOffset</code> 不是正整数，或超过 <code>INT64</code> 允许的最大值时，系统将提示错误。</li></ul><p>我们将通过以下示例演示如何使用 <code>LIMIT</code> 和 <code>OFFSET</code> 子句。</p><ul><li><strong>示例 1：</strong> 基本的 <code>LIMIT</code> 子句</li></ul><p>SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token keyword">status</span><span class="token punctuation">,</span> temperature <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token keyword">limit</span> <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>含义：</p><p>所选设备为 ln 组 wf01 工厂 wt01 设备； 选择的时间序列是“状态”和“温度”。 SQL 语句要求返回查询结果的前 10 行。</p><p>结果如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+------------------------+-----------------------------+
|                         Time|root.ln.wf01.wt01.status|root.ln.wf01.wt01.temperature|
+-----------------------------+------------------------+-----------------------------+
|2017-11-01T00:00:00.000+08:00|                    true|                        25.96|
|2017-11-01T00:01:00.000+08:00|                    true|                        24.36|
|2017-11-01T00:02:00.000+08:00|                   false|                        20.09|
|2017-11-01T00:03:00.000+08:00|                   false|                        20.18|
|2017-11-01T00:04:00.000+08:00|                   false|                        21.13|
|2017-11-01T00:05:00.000+08:00|                   false|                        22.72|
|2017-11-01T00:06:00.000+08:00|                   false|                        20.71|
|2017-11-01T00:07:00.000+08:00|                   false|                        21.45|
|2017-11-01T00:08:00.000+08:00|                   false|                        22.58|
|2017-11-01T00:09:00.000+08:00|                   false|                        20.98|
+-----------------------------+------------------------+-----------------------------+
Total line number = 10
It costs 0.000s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>示例 2：</strong> 带 <code>OFFSET</code> 的 <code>LIMIT</code> 子句</li></ul><p>SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token keyword">status</span><span class="token punctuation">,</span> temperature <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token keyword">limit</span> <span class="token number">5</span> <span class="token keyword">offset</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>含义：</p><p>所选设备为 ln 组 wf01 工厂 wt01 设备； 选择的时间序列是“状态”和“温度”。 SQL 语句要求返回查询结果的第 3 至 7 行（第一行编号为 0 行）。</p><p>结果如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+------------------------+-----------------------------+
|                         Time|root.ln.wf01.wt01.status|root.ln.wf01.wt01.temperature|
+-----------------------------+------------------------+-----------------------------+
|2017-11-01T00:03:00.000+08:00|                   false|                        20.18|
|2017-11-01T00:04:00.000+08:00|                   false|                        21.13|
|2017-11-01T00:05:00.000+08:00|                   false|                        22.72|
|2017-11-01T00:06:00.000+08:00|                   false|                        20.71|
|2017-11-01T00:07:00.000+08:00|                   false|                        21.45|
+-----------------------------+------------------------+-----------------------------+
Total line number = 5
It costs 0.342s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>示例 3：</strong> <code>LIMIT</code> 子句与 <code>WHERE</code> 子句结合</li></ul><p>SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token keyword">status</span><span class="token punctuation">,</span>temperature <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">05</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span><span class="token operator">&lt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">12</span>:<span class="token number">00.000</span> <span class="token keyword">limit</span> <span class="token number">5</span> <span class="token keyword">offset</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>含义：</p><p>所选设备为 ln 组 wf01 工厂 wt01 设备； 选择的时间序列是“状态”和“温度”。 SQL 语句要求返回时间“ 2017-11-01T00：05：00.000”和“ 2017-11-01T00：12：00.000”之间的状态和温度传感器值的第 3 至 4 行（第一行） 编号为第 0 行）。</p><p>结果如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+------------------------+-----------------------------+
|                         Time|root.ln.wf01.wt01.status|root.ln.wf01.wt01.temperature|
+-----------------------------+------------------------+-----------------------------+
|2017-11-01T00:03:00.000+08:00|                   false|                        20.18|
|2017-11-01T00:04:00.000+08:00|                   false|                        21.13|
|2017-11-01T00:05:00.000+08:00|                   false|                        22.72|
|2017-11-01T00:06:00.000+08:00|                   false|                        20.71|
|2017-11-01T00:07:00.000+08:00|                   false|                        21.45|
+-----------------------------+------------------------+-----------------------------+
Total line number = 5
It costs 0.000s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>示例 4：</strong> <code>LIMIT</code> 子句与 <code>GROUP BY</code> 子句组合</li></ul><p>SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token keyword">status</span><span class="token punctuation">)</span><span class="token punctuation">,</span> max_value<span class="token punctuation">(</span>temperature<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">00</span>:<span class="token number">00</span><span class="token punctuation">,</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">07</span>T23:<span class="token number">00</span>:<span class="token number">00</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span>d<span class="token punctuation">)</span> <span class="token keyword">limit</span> <span class="token number">4</span> <span class="token keyword">offset</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>含义：</p><p>SQL 语句子句要求返回查询结果的第 3 至 6 行（第一行编号为 0 行）。</p><p>结果如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-------------------------------+----------------------------------------+
|                         Time|count(root.ln.wf01.wt01.status)|max_value(root.ln.wf01.wt01.temperature)|
+-----------------------------+-------------------------------+----------------------------------------+
|2017-11-04T00:00:00.000+08:00|                           1440|                                    26.0|
|2017-11-05T00:00:00.000+08:00|                           1440|                                    26.0|
|2017-11-06T00:00:00.000+08:00|                           1440|                                   25.99|
|2017-11-07T00:00:00.000+08:00|                           1380|                                    26.0|
+-----------------------------+-------------------------------+----------------------------------------+
Total line number = 4
It costs 0.016s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="按列分页" tabindex="-1"><a class="header-anchor" href="#按列分页" aria-hidden="true">#</a> 按列分页</h3><p>用户可以通过 <code>SLIMIT</code> 和 <code>SOFFSET</code> 子句控制查询结果的列数，<code>SLIMIT seriesLimit</code> 指定查询结果的列数，<code>SOFFSET seriesOffset</code> 指定查询结果显示的起始列位置。</p><p>注意：</p><ul><li>仅用于控制值列，对时间列和设备列无效。</li><li>当 <code>seriesOffset</code> 超过结果集的大小时，返回空结果集。</li><li>当 <code>seriesLimit</code> 超过结果集的大小时，返回所有查询结果。</li><li>当 <code>seriesLimit</code> 和 <code>seriesOffset</code> 不是正整数，或超过 <code>INT64</code> 允许的最大值时，系统将提示错误。</li></ul><p>我们将通过以下示例演示如何使用 <code>SLIMIT</code> 和 <code>SOFFSET</code> 子句。</p><ul><li><strong>示例 1：</strong> 基本的 <code>SLIMIT</code> 子句</li></ul><p>SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">05</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">12</span>:<span class="token number">00.000</span> slimit <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>含义：</p><p>所选设备为 ln 组 wf01 工厂 wt01 设备； 所选时间序列是该设备下的第二列，即温度。 SQL 语句要求在&quot;2017-11-01T00:05:00.000&quot;和&quot;2017-11-01T00:12:00.000&quot;的时间点之间选择温度传感器值。</p><p>结果如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-----------------------------+
|                         Time|root.ln.wf01.wt01.temperature|
+-----------------------------+-----------------------------+
|2017-11-01T00:06:00.000+08:00|                        20.71|
|2017-11-01T00:07:00.000+08:00|                        21.45|
|2017-11-01T00:08:00.000+08:00|                        22.58|
|2017-11-01T00:09:00.000+08:00|                        20.98|
|2017-11-01T00:10:00.000+08:00|                        25.52|
|2017-11-01T00:11:00.000+08:00|                        22.91|
+-----------------------------+-----------------------------+
Total line number = 6
It costs 0.000s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>示例 2：</strong> 带 <code>SOFFSET</code> 的 <code>SLIMIT</code> 子句</li></ul><p>SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">05</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">12</span>:<span class="token number">00.000</span> slimit <span class="token number">1</span> soffset <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>含义：</p><p>所选设备为 ln 组 wf01 工厂 wt01 设备； 所选时间序列是该设备下的第一列，即电源状态。 SQL 语句要求在&quot; 2017-11-01T00:05:00.000&quot;和&quot;2017-11-01T00:12:00.000&quot;的时间点之间选择状态传感器值。</p><p>结果如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+------------------------+
|                         Time|root.ln.wf01.wt01.status|
+-----------------------------+------------------------+
|2017-11-01T00:06:00.000+08:00|                   false|
|2017-11-01T00:07:00.000+08:00|                   false|
|2017-11-01T00:08:00.000+08:00|                   false|
|2017-11-01T00:09:00.000+08:00|                   false|
|2017-11-01T00:10:00.000+08:00|                    true|
|2017-11-01T00:11:00.000+08:00|                   false|
+-----------------------------+------------------------+
Total line number = 6
It costs 0.003s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>示例 3：</strong> <code>SLIMIT</code> 子句与 <code>GROUP BY</code> 子句结合</li></ul><p>SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> max_value<span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">00</span>:<span class="token number">00</span><span class="token punctuation">,</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">07</span>T23:<span class="token number">00</span>:<span class="token number">00</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span>d<span class="token punctuation">)</span> slimit <span class="token number">1</span> soffset <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>含义：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-----------------------------------+
|                         Time|max_value(root.ln.wf01.wt01.status)|
+-----------------------------+-----------------------------------+
|2017-11-01T00:00:00.000+08:00|                               true|
|2017-11-02T00:00:00.000+08:00|                               true|
|2017-11-03T00:00:00.000+08:00|                               true|
|2017-11-04T00:00:00.000+08:00|                               true|
|2017-11-05T00:00:00.000+08:00|                               true|
|2017-11-06T00:00:00.000+08:00|                               true|
|2017-11-07T00:00:00.000+08:00|                               true|
+-----------------------------+-----------------------------------+
Total line number = 7
It costs 0.000s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>示例 4：</strong> <code>SLIMIT</code> 子句与 <code>LIMIT</code> 子句结合</li></ul><p>SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token keyword">limit</span> <span class="token number">10</span> <span class="token keyword">offset</span> <span class="token number">100</span> slimit <span class="token number">2</span> soffset <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>含义：</p><p>所选设备为 ln 组 wf01 工厂 wt01 设备； 所选时间序列是此设备下的第 0 列至第 1 列（第一列编号为第 0 列）。 SQL 语句子句要求返回查询结果的第 100 至 109 行（第一行编号为 0 行）。</p><p>结果如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-----------------------------+------------------------+
|                         Time|root.ln.wf01.wt01.temperature|root.ln.wf01.wt01.status|
+-----------------------------+-----------------------------+------------------------+
|2017-11-01T01:40:00.000+08:00|                        21.19|                   false|
|2017-11-01T01:41:00.000+08:00|                        22.79|                   false|
|2017-11-01T01:42:00.000+08:00|                        22.98|                   false|
|2017-11-01T01:43:00.000+08:00|                        21.52|                   false|
|2017-11-01T01:44:00.000+08:00|                        23.45|                    true|
|2017-11-01T01:45:00.000+08:00|                        24.06|                    true|
|2017-11-01T01:46:00.000+08:00|                         22.6|                   false|
|2017-11-01T01:47:00.000+08:00|                        23.78|                    true|
|2017-11-01T01:48:00.000+08:00|                        24.72|                    true|
|2017-11-01T01:49:00.000+08:00|                        24.68|                    true|
+-----------------------------+-----------------------------+------------------------+
Total line number = 10
It costs 0.009s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,67);function o(p,c){return s(),e("div",null,[a(`

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

`),i])}const r=n(t,[["render",o],["__file","Pagination.html.vue"]]);export{r as default};
