import{_ as e,o as n,c as s,a,f as t}from"./app-342a215c.js";const o={},l=t(`<h1 id="order-by" tabindex="-1"><a class="header-anchor" href="#order-by" aria-hidden="true">#</a> Order By</h1><h2 id="order-by-in-align-by-time-mode" tabindex="-1"><a class="header-anchor" href="#order-by-in-align-by-time-mode" aria-hidden="true">#</a> order by in ALIGN BY TIME mode</h2><p>The result set of IoTDB is in ALIGN BY TIME mode by default and <code>ORDER BY TIME</code> clause can also be used to specify the ordering of timestamp. The SQL statement is:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">01</span>:<span class="token number">00</span> <span class="token keyword">order</span> <span class="token keyword">by</span> <span class="token keyword">time</span> <span class="token keyword">desc</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>执行结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+--------------------------+------------------------+-----------------------------+------------------------+
|                         Time|root.ln.wf02.wt02.hardware|root.ln.wf02.wt02.status|root.ln.wf01.wt01.temperature|root.ln.wf01.wt01.status|
+-----------------------------+--------------------------+------------------------+-----------------------------+------------------------+
|2017-11-01T00:01:00.000+08:00|                        v2|                    true|                        24.36|                    true|
|2017-11-01T00:00:00.000+08:00|                        v2|                    true|                        25.96|                    true|
|1970-01-01T08:00:00.002+08:00|                        v2|                   false|                         null|                    null|
|1970-01-01T08:00:00.001+08:00|                        v1|                    true|                         null|                    null|
+-----------------------------+--------------------------+------------------------+-----------------------------+------------------------+
Total line number = 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="order-by-in-align-by-device-mode" tabindex="-1"><a class="header-anchor" href="#order-by-in-align-by-device-mode" aria-hidden="true">#</a> order by in ALIGN BY DEVICE mode</h2><p>When querying in ALIGN BY DEVICE mode, <code>ORDER BY</code> clause can be used to specify the ordering of result set.</p><p>ALIGN BY DEVICE mode supports four kinds of clauses with two sort keys which are <code>Device</code> and <code>Time</code>.</p><ol><li><p><code>ORDER BY DEVICE</code>: sort by the alphabetical order of the device name. The devices with the same column names will be clustered in a group view.</p></li><li><p><code>ORDER BY TIME</code>: sort by the timestamp, the data points from different devices will be shuffled according to the timestamp.</p></li><li><p><code>ORDER BY DEVICE,TIME</code>: sort by the alphabetical order of the device name. The data points with the same device name will be sorted by timestamp.</p></li><li><p><code>ORDER BY TIME,DEVICE</code>: sort by timestamp. The data points with the same time will be sorted by the alphabetical order of the device name.</p></li></ol><blockquote><p>To make the result set more legible, when <code>ORDER BY</code> clause is not used, default settings will be provided.<br> The default ordering clause is <code>ORDER BY DEVICE,TIME</code> and the default ordering is <code>ASC</code>.</p></blockquote><p>When <code>Device</code> is the main sort key, the result set is sorted by device name first, then by timestamp in the group with the same device name, the SQL statement is:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">01</span>:<span class="token number">00</span> <span class="token keyword">order</span> <span class="token keyword">by</span> device <span class="token keyword">desc</span><span class="token punctuation">,</span><span class="token keyword">time</span> <span class="token keyword">asc</span> align <span class="token keyword">by</span> device<span class="token punctuation">;</span>
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
Total line number = 6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When <code>Time</code> is the main sort key, the result set is sorted by timestamp first, then by device name in data points with the same timestamp. The SQL statement is:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">01</span>:<span class="token number">00</span> <span class="token keyword">order</span> <span class="token keyword">by</span> <span class="token keyword">time</span> <span class="token keyword">asc</span><span class="token punctuation">,</span>device <span class="token keyword">desc</span> align <span class="token keyword">by</span> device<span class="token punctuation">;</span>
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
Total line number = 6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When <code>ORDER BY</code> clause is not used, sort in default way, the SQL statement is：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">01</span>:<span class="token number">00</span> align <span class="token keyword">by</span> device<span class="token punctuation">;</span>
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
Total line number = 6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Besides，<code>ALIGN BY DEVICE</code> and <code>ORDER BY</code> clauses can be used with aggregate query，the SQL statement is：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">00</span>:<span class="token number">00.000</span><span class="token operator">+</span><span class="token number">08</span>:<span class="token number">00</span><span class="token punctuation">,</span><span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">03</span>:<span class="token number">00.000</span><span class="token operator">+</span><span class="token number">08</span>:<span class="token number">00</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">1</span>m<span class="token punctuation">)</span> <span class="token keyword">order</span> <span class="token keyword">by</span> device <span class="token keyword">asc</span><span class="token punctuation">,</span><span class="token keyword">time</span> <span class="token keyword">asc</span> align <span class="token keyword">by</span> device
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
Total line number = 6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27);function i(r,p){return n(),s("div",null,[a(`

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

`),l])}const c=e(o,[["render",i],["__file","Order-By.html.vue"]]);export{c as default};
