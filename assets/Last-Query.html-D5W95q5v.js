import{_ as e,o as t,c as s,a,f as n}from"./app-yEzVYvK-.js";const i={},r=n(`<h1 id="last-query" tabindex="-1"><a class="header-anchor" href="#last-query" aria-hidden="true">#</a> Last Query</h1><p>The last query is a special query provided in the time series database Apache IoTDB. The last query returns the data point with the largest timestamp in the time series, that is, the latest state of a sequence. Users can specify the last query through <code>select last</code>. It is especially important in IoT data analysis scenarios as the latest point data characterizes the current state. In order to provide a millisecond-level return speed, Apache IoTDB optimizes the cache for the last query to meet users&#39; performance requirements for real-time monitoring of devices.</p><p>The last query is to return the most recent data point of the given timeseries in a three column format.</p><p>The SQL statement is defined as:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token keyword">last</span> <span class="token operator">&lt;</span>Path<span class="token operator">&gt;</span> <span class="token punctuation">[</span>COMMA <span class="token operator">&lt;</span>Path<span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token operator">*</span> <span class="token keyword">from</span> <span class="token operator">&lt;</span> PrefixPath <span class="token operator">&gt;</span> <span class="token punctuation">[</span>COMMA <span class="token operator">&lt;</span> PrefixPath <span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token operator">*</span> <span class="token operator">&lt;</span>WhereClause<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>which means: Query and return the last data points of timeseries prefixPath.path.</p><p>Only time filter with &#39;&gt;&#39; or &#39;&gt;=&#39; is supported in &lt;WhereClause&gt;. Any other filters given in the &lt;WhereClause&gt; will give an exception.</p><p>The result will be returned in a four column table format.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>| Time | timeseries | value | dataType |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Note:</strong> The <code>value</code> colum will always return the value as <code>string</code> and thus also has <code>TSDataType.TEXT</code>. Therefore the colum <code>dataType</code> is returned also which contains the <em>real</em> type how the value should be interpreted.</p><p><strong>Example 1:</strong> get the last point of root.ln.wf01.wt01.status:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; select last status from root.ln.wf01.wt01
+-----------------------------+------------------------+-----+--------+
|                         Time|              timeseries|value|dataType|
+-----------------------------+------------------------+-----+--------+
|2017-11-07T23:59:00.000+08:00|root.ln.wf01.wt01.status|false| BOOLEAN|
+-----------------------------+------------------------+-----+--------+
Total line number = 1
It costs 0.000s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 2:</strong> get the last status and temperature points of root.ln.wf01.wt01, whose timestamp larger or equal to 2017-11-07T23:50:00。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; select last status, temperature from root.ln.wf01.wt01 where time &gt;= 2017-11-07T23:50:00
+-----------------------------+-----------------------------+---------+--------+
|                         Time|                   timeseries|    value|dataType|
+-----------------------------+-----------------------------+---------+--------+
|2017-11-07T23:59:00.000+08:00|     root.ln.wf01.wt01.status|    false| BOOLEAN|
|2017-11-07T23:59:00.000+08:00|root.ln.wf01.wt01.temperature|21.067368|  DOUBLE|
+-----------------------------+-----------------------------+---------+--------+
Total line number = 2
It costs 0.002s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function o(l,d){return t(),s("div",null,[a(`

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

`),r])}const p=e(i,[["render",o],["__file","Last-Query.html.vue"]]);export{p as default};
