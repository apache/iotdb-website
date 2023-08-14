import{_ as e,o as n,c as s,a,f as i}from"./app-4b6ede22.js";const l={},o=i(`<h1 id="order-by" tabindex="-1"><a class="header-anchor" href="#order-by" aria-hidden="true">#</a> Order By</h1><h2 id="order-by-in-align-by-time-mode" tabindex="-1"><a class="header-anchor" href="#order-by-in-align-by-time-mode" aria-hidden="true">#</a> Order by in ALIGN BY TIME mode</h2><p>The result set of IoTDB is in ALIGN BY TIME mode by default and <code>ORDER BY TIME</code> clause can also be used to specify the ordering of timestamp. The SQL statement is:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">01</span>:<span class="token number">00</span> <span class="token keyword">order</span> <span class="token keyword">by</span> <span class="token keyword">time</span> <span class="token keyword">desc</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Results：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+--------------------------+------------------------+-----------------------------+------------------------+
|                         Time|root.ln.wf02.wt02.hardware|root.ln.wf02.wt02.status|root.ln.wf01.wt01.temperature|root.ln.wf01.wt01.status|
+-----------------------------+--------------------------+------------------------+-----------------------------+------------------------+
|2017-11-01T00:01:00.000+08:00|                        v2|                    true|                        24.36|                    true|
|2017-11-01T00:00:00.000+08:00|                        v2|                    true|                        25.96|                    true|
|1970-01-01T08:00:00.002+08:00|                        v2|                   false|                         null|                    null|
|1970-01-01T08:00:00.001+08:00|                        v1|                    true|                         null|                    null|
+-----------------------------+--------------------------+------------------------+-----------------------------+------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="order-by-in-align-by-device-mode" tabindex="-1"><a class="header-anchor" href="#order-by-in-align-by-device-mode" aria-hidden="true">#</a> Order by in ALIGN BY DEVICE mode</h2><p>When querying in ALIGN BY DEVICE mode, <code>ORDER BY</code> clause can be used to specify the ordering of result set.</p><p>ALIGN BY DEVICE mode supports four kinds of clauses with two sort keys which are <code>Device</code> and <code>Time</code>.</p><ol><li><p><code>ORDER BY DEVICE</code>: sort by the alphabetical order of the device name. The devices with the same column names will be clustered in a group view.</p></li><li><p><code>ORDER BY TIME</code>: sort by the timestamp, the data points from different devices will be shuffled according to the timestamp.</p></li><li><p><code>ORDER BY DEVICE,TIME</code>: sort by the alphabetical order of the device name. The data points with the same device name will be sorted by timestamp.</p></li><li><p><code>ORDER BY TIME,DEVICE</code>: sort by timestamp. The data points with the same time will be sorted by the alphabetical order of the device name.</p></li></ol><blockquote><p>To make the result set more legible, when <code>ORDER BY</code> clause is not used, default settings will be provided.<br> The default ordering clause is <code>ORDER BY DEVICE,TIME</code> and the default ordering is <code>ASC</code>.</p></blockquote><p>When <code>Device</code> is the main sort key, the result set is sorted by device name first, then by timestamp in the group with the same device name, the SQL statement is:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">01</span>:<span class="token number">00</span> <span class="token keyword">order</span> <span class="token keyword">by</span> device <span class="token keyword">desc</span><span class="token punctuation">,</span><span class="token keyword">time</span> <span class="token keyword">asc</span> align <span class="token keyword">by</span> device<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The result shows below:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-----------------+--------+------+-----------+
|                         Time|           Device|hardware|status|temperature|
+-----------------------------+-----------------+--------+------+-----------+
|1970-01-01T08:00:00.001+08:00|root.ln.wf02.wt02|      v1|  true|       null|
|1970-01-01T08:00:00.002+08:00|root.ln.wf02.wt02|      v2| false|       null|
|2017-11-01T00:00:00.000+08:00|root.ln.wf02.wt02|      v2|  true|       null|
|2017-11-01T00:01:00.000+08:00|root.ln.wf02.wt02|      v2|  true|       null|
|2017-11-01T00:00:00.000+08:00|root.ln.wf01.wt01|    null|  true|      25.96|
|2017-11-01T00:01:00.000+08:00|root.ln.wf01.wt01|    null|  true|      24.36|
+-----------------------------+-----------------+--------+------+-----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When <code>Time</code> is the main sort key, the result set is sorted by timestamp first, then by device name in data points with the same timestamp. The SQL statement is:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">01</span>:<span class="token number">00</span> <span class="token keyword">order</span> <span class="token keyword">by</span> <span class="token keyword">time</span> <span class="token keyword">asc</span><span class="token punctuation">,</span>device <span class="token keyword">desc</span> align <span class="token keyword">by</span> device<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The result shows below:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-----------------+--------+------+-----------+
|                         Time|           Device|hardware|status|temperature|
+-----------------------------+-----------------+--------+------+-----------+
|1970-01-01T08:00:00.001+08:00|root.ln.wf02.wt02|      v1|  true|       null|
|1970-01-01T08:00:00.002+08:00|root.ln.wf02.wt02|      v2| false|       null|
|2017-11-01T00:00:00.000+08:00|root.ln.wf02.wt02|      v2|  true|       null|
|2017-11-01T00:00:00.000+08:00|root.ln.wf01.wt01|    null|  true|      25.96|
|2017-11-01T00:01:00.000+08:00|root.ln.wf02.wt02|      v2|  true|       null|
|2017-11-01T00:01:00.000+08:00|root.ln.wf01.wt01|    null|  true|      24.36|
+-----------------------------+-----------------+--------+------+-----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When <code>ORDER BY</code> clause is not used, sort in default way, the SQL statement is：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">01</span>:<span class="token number">00</span> align <span class="token keyword">by</span> device<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The result below indicates <code>ORDER BY DEVICE ASC,TIME ASC</code> is the clause in default situation.<br><code>ASC</code> can be omitted because it&#39;s the default ordering.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-----------------+--------+------+-----------+
|                         Time|           Device|hardware|status|temperature|
+-----------------------------+-----------------+--------+------+-----------+
|2017-11-01T00:00:00.000+08:00|root.ln.wf01.wt01|    null|  true|      25.96|
|2017-11-01T00:01:00.000+08:00|root.ln.wf01.wt01|    null|  true|      24.36|
|1970-01-01T08:00:00.001+08:00|root.ln.wf02.wt02|      v1|  true|       null|
|1970-01-01T08:00:00.002+08:00|root.ln.wf02.wt02|      v2| false|       null|
|2017-11-01T00:00:00.000+08:00|root.ln.wf02.wt02|      v2|  true|       null|
|2017-11-01T00:01:00.000+08:00|root.ln.wf02.wt02|      v2|  true|       null|
+-----------------------------+-----------------+--------+------+-----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Besides，<code>ALIGN BY DEVICE</code> and <code>ORDER BY</code> clauses can be used with aggregate query，the SQL statement is：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">00</span>:<span class="token number">00.000</span><span class="token operator">+</span><span class="token number">08</span>:<span class="token number">00</span><span class="token punctuation">,</span><span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">03</span>:<span class="token number">00.000</span><span class="token operator">+</span><span class="token number">08</span>:<span class="token number">00</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">1</span>m<span class="token punctuation">)</span> <span class="token keyword">order</span> <span class="token keyword">by</span> device <span class="token keyword">asc</span><span class="token punctuation">,</span><span class="token keyword">time</span> <span class="token keyword">asc</span> align <span class="token keyword">by</span> device
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The result shows below:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-----------------+---------------+-------------+------------------+
|                         Time|           Device|count(hardware)|count(status)|count(temperature)|
+-----------------------------+-----------------+---------------+-------------+------------------+
|2017-11-01T00:01:00.000+08:00|root.ln.wf01.wt01|           null|            1|                 1|
|2017-11-01T00:02:00.000+08:00|root.ln.wf01.wt01|           null|            0|                 0|
|2017-11-01T00:03:00.000+08:00|root.ln.wf01.wt01|           null|            0|                 0|
|2017-11-01T00:01:00.000+08:00|root.ln.wf02.wt02|              1|            1|              null|
|2017-11-01T00:02:00.000+08:00|root.ln.wf02.wt02|              0|            0|              null|
|2017-11-01T00:03:00.000+08:00|root.ln.wf02.wt02|              0|            0|              null|
+-----------------------------+-----------------+---------------+-------------+------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="order-by-arbitrary-expressions" tabindex="-1"><a class="header-anchor" href="#order-by-arbitrary-expressions" aria-hidden="true">#</a> Order by arbitrary expressions</h2><p>In addition to the predefined keywords &quot;Time&quot; and &quot;Device&quot; in IoTDB, <code>ORDER BY</code> can also be used to sort by any expressions.</p><p>When sorting, <code>ASC</code> or <code>DESC</code> can be used to specify the sorting order, and <code>NULLS</code> syntax is supported to specify the priority of NULL values in the sorting. By default, <code>NULLS FIRST</code> places NULL values at the top of the result, and <code>NULLS LAST</code> ensures that NULL values appear at the end of the result. If not specified in the clause, the default order is ASC with NULLS LAST.</p><p>Here are several examples of queries for sorting arbitrary expressions using the following data:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-------------+-------+-------+--------+-------+
|                         Time|       Device|   base|  score|   bonus|  total|    
+-----------------------------+-------------+-------+-------+--------+-------+
|1970-01-01T08:00:00.000+08:00|     root.one|     12|   50.0|    45.0|  107.0|  
|1970-01-02T08:00:00.000+08:00|     root.one|     10|   50.0|    45.0|  105.0|
|1970-01-03T08:00:00.000+08:00|     root.one|      8|   50.0|    45.0|  103.0|       
|1970-01-01T08:00:00.010+08:00|     root.two|      9|   50.0|    15.0|   74.0|   
|1970-01-01T08:00:00.020+08:00|     root.two|      8|   10.0|    15.0|   33.0|  
|1970-01-01T08:00:00.010+08:00|   root.three|      9|   null|    24.0|   33.0|    
|1970-01-01T08:00:00.020+08:00|   root.three|      8|   null|    22.5|   30.5|   
|1970-01-01T08:00:00.030+08:00|   root.three|      7|   null|    23.5|   30.5|   
|1970-01-01T08:00:00.010+08:00|    root.four|      9|   32.0|    45.0|   86.0|  
|1970-01-01T08:00:00.020+08:00|    root.four|      8|   32.0|    45.0|   85.0|   
|1970-01-01T08:00:00.030+08:00|    root.five|      7|   53.0|    44.0|  104.0|
|1970-01-01T08:00:00.040+08:00|    root.five|      6|   54.0|    42.0|  102.0|     
+-----------------------------+-------------+-------+-------+--------+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When you need to sort the results based on the base score score, you can use the following SQL:</p><div class="language-Sql line-numbers-mode" data-ext="Sql"><pre class="language-Sql"><code>select score from root.** order by score desc align by device
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This will give you the following results:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------+-----+
|                         Time|   Device|score|
+-----------------------------+---------+-----+
|1970-01-01T08:00:00.040+08:00|root.five| 54.0|
|1970-01-01T08:00:00.030+08:00|root.five| 53.0|
|1970-01-01T08:00:00.000+08:00| root.one| 50.0|
|1970-01-02T08:00:00.000+08:00| root.one| 50.0|
|1970-01-03T08:00:00.000+08:00| root.one| 50.0|
|1970-01-01T08:00:00.000+08:00| root.two| 50.0|
|1970-01-01T08:00:00.010+08:00| root.two| 50.0|
|1970-01-01T08:00:00.010+08:00|root.four| 32.0|
|1970-01-01T08:00:00.020+08:00|root.four| 32.0|
|1970-01-01T08:00:00.020+08:00| root.two| 10.0|
+-----------------------------+---------+-----+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you want to sort the results based on the total score, you can use an expression in the <code>ORDER BY</code> clause to perform the calculation:</p><div class="language-Sql line-numbers-mode" data-ext="Sql"><pre class="language-Sql"><code>select score,total from root.one order by base+score+bonus desc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This SQL is equivalent to:</p><div class="language-Sql line-numbers-mode" data-ext="Sql"><pre class="language-Sql"><code>select score,total from root.one order by total desc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Here are the results:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+--------------+--------------+
|                         Time|root.one.score|root.one.total|
+-----------------------------+--------------+--------------+
|1970-01-01T08:00:00.000+08:00|          50.0|         107.0|
|1970-01-02T08:00:00.000+08:00|          50.0|         105.0|
|1970-01-03T08:00:00.000+08:00|          50.0|         103.0|
+-----------------------------+--------------+--------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you want to sort the results based on the total score and, in case of tied scores, sort by score, base, bonus, and submission time in descending order, you can specify multiple layers of sorting using multiple expressions:</p><div class="language-Sql line-numbers-mode" data-ext="Sql"><pre class="language-Sql"><code>select base, score, bonus, total from root.** order by total desc NULLS Last,
                                  score desc NULLS Last,
                                  bonus desc NULLS Last,
                                  time desc align by device
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here are the results:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+----------+----+-----+-----+-----+
|                         Time|    Device|base|score|bonus|total|
+-----------------------------+----------+----+-----+-----+-----+
|1970-01-01T08:00:00.000+08:00|  root.one|  12| 50.0| 45.0|107.0|
|1970-01-02T08:00:00.000+08:00|  root.one|  10| 50.0| 45.0|105.0|
|1970-01-01T08:00:00.030+08:00| root.five|   7| 53.0| 44.0|104.0|
|1970-01-03T08:00:00.000+08:00|  root.one|   8| 50.0| 45.0|103.0|
|1970-01-01T08:00:00.040+08:00| root.five|   6| 54.0| 42.0|102.0|
|1970-01-01T08:00:00.010+08:00| root.four|   9| 32.0| 45.0| 86.0|
|1970-01-01T08:00:00.020+08:00| root.four|   8| 32.0| 45.0| 85.0|
|1970-01-01T08:00:00.010+08:00|  root.two|   9| 50.0| 15.0| 74.0|
|1970-01-01T08:00:00.000+08:00|  root.two|   9| 50.0| 15.0| 74.0|
|1970-01-01T08:00:00.020+08:00|  root.two|   8| 10.0| 15.0| 33.0|
|1970-01-01T08:00:00.010+08:00|root.three|   9| null| 24.0| 33.0|
|1970-01-01T08:00:00.030+08:00|root.three|   7| null| 23.5| 30.5|
|1970-01-01T08:00:00.020+08:00|root.three|   8| null| 22.5| 30.5|
+-----------------------------+----------+----+-----+-----+-----+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In the <code>ORDER BY</code> clause, you can also use aggregate query expressions. For example:</p><div class="language-Sql line-numbers-mode" data-ext="Sql"><pre class="language-Sql"><code>select min_value(total) from root.** order by min_value(total) asc align by device
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This will give you the following results:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----------+----------------+
|    Device|min_value(total)|
+----------+----------------+
|root.three|            30.5|
|  root.two|            33.0|
| root.four|            85.0|
| root.five|           102.0|
|  root.one|           103.0|
+----------+----------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When specifying multiple columns in the query, the unsorted columns will change order along with the rows and sorted columns. The order of rows when the sorting columns are the same may vary depending on the specific implementation (no fixed order). For example:</p><div class="language-Sql line-numbers-mode" data-ext="Sql"><pre class="language-Sql"><code>select min_value(total),max_value(base) from root.** order by max_value(total) desc align by device
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This will give you the following results:<br> ·</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----------+----------------+---------------+
|    Device|min_value(total)|max_value(base)|
+----------+----------------+---------------+
|  root.one|           103.0|             12|
| root.five|           102.0|              7|
| root.four|            85.0|              9|
|  root.two|            33.0|              9|
|root.three|            30.5|              9|
+----------+----------------+---------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You can use both <code>ORDER BY DEVICE,TIME</code> and <code>ORDER BY EXPRESSION</code> together. For example:</p><div class="language-Sql line-numbers-mode" data-ext="Sql"><pre class="language-Sql"><code>select score from root.** order by device asc, score desc, time asc align by device
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This will give you the following results:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------+-----+
|                         Time|   Device|score|
+-----------------------------+---------+-----+
|1970-01-01T08:00:00.040+08:00|root.five| 54.0|
|1970-01-01T08:00:00.030+08:00|root.five| 53.0|
|1970-01-01T08:00:00.010+08:00|root.four| 32.0|
|1970-01-01T08:00:00.020+08:00|root.four| 32.0|
|1970-01-01T08:00:00.000+08:00| root.one| 50.0|
|1970-01-02T08:00:00.000+08:00| root.one| 50.0|
|1970-01-03T08:00:00.000+08:00| root.one| 50.0|
|1970-01-01T08:00:00.000+08:00| root.two| 50.0|
|1970-01-01T08:00:00.010+08:00| root.two| 50.0|
|1970-01-01T08:00:00.020+08:00| root.two| 10.0|
+-----------------------------+---------+-----+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,58);function t(r,d){return n(),s("div",null,[a(`

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

`),o])}const u=e(l,[["render",t],["__file","Order-By.html.vue"]]);export{u as default};
