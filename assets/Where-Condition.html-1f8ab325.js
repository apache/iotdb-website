import{_ as n,E as t,F as o,af as l,G as i,I as e,ag as r,ac as c,aT as s,C as p}from"./framework-6055ecdb.js";const d={},u=s('<h1 id="query-filter" tabindex="-1"><a class="header-anchor" href="#query-filter" aria-hidden="true">#</a> Query Filter</h1><p>In IoTDB query statements, two filter conditions, <strong>time filter</strong> and <strong>value filter</strong>, are supported.</p><p>The supported operators are as follows:</p><ul><li>Comparison operators: greater than (<code>&gt;</code>), greater than or equal ( <code>&gt;=</code>), equal ( <code>=</code> or <code>==</code>), not equal ( <code>!=</code> or <code>&lt;&gt;</code>), less than or equal ( <code>&lt;=</code>), less than ( <code>&lt;</code>).</li><li>Logical operators: and ( <code>AND</code> or <code>&amp;</code> or <code>&amp;&amp;</code>), or ( <code>OR</code> or <code>|</code> or <code>||</code>), not ( <code>NOT</code> or <code>!</code>).</li><li>Range contains operator: contains ( <code>IN</code> ).</li><li>String matches operator: <code>LIKE</code>, <code>REGEXP</code>.</li></ul><h2 id="time-filter" tabindex="-1"><a class="header-anchor" href="#time-filter" aria-hidden="true">#</a> Time Filter</h2>',5),m=s(`<p>An example is as follows:</p><ol><li><p>Select data with timestamp greater than 2022-01-01T00:05:00.000:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1 <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">2022</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">05</span>:<span class="token number">00.000</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Select data with timestamp equal to 2022-01-01T00:05:00.000:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1 <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">=</span> <span class="token number">2022</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">05</span>:<span class="token number">00.000</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Select the data in the time interval [2017-11-01T00:05:00.000, 2017-11-01T00:12:00.000):</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1 <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;=</span> <span class="token number">2022</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">05</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">12</span>:<span class="token number">00.000</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><p>Note: In the above example, <code>time</code> can also be written as <code>timestamp</code>.</p><h2 id="value-filter" tabindex="-1"><a class="header-anchor" href="#value-filter" aria-hidden="true">#</a> Value Filter</h2><p>Use value filters to filter data whose data values meet certain criteria. <strong>Allow</strong> to use a time series not selected in the select clause as a value filter.</p><p>An example is as follows:</p><ol><li><p>Select data with a value greater than 36.5:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> temperature <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> temperature <span class="token operator">&gt;</span> <span class="token number">36.5</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Select data with value equal to true:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token keyword">status</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">status</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Select data for the interval [36.5,40] or not:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> temperature <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> temperature <span class="token operator">between</span> <span class="token number">36.5</span> <span class="token operator">and</span> <span class="token number">40</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> temperature <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> temperature <span class="token operator">not</span> <span class="token operator">between</span> <span class="token number">36.5</span> <span class="token operator">and</span> <span class="token number">40</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Select data with values within a specific range:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> code <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> code <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token string">&#39;200&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;300&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;400&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;500&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Select data with values outside a certain range:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> code <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> code <span class="token operator">not</span> <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token string">&#39;200&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;300&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;400&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;500&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Select data with values is null:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> code <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> temperature <span class="token operator">is</span> <span class="token boolean">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Select data with values is not null:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> code <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> temperature <span class="token operator">is</span> <span class="token operator">not</span> <span class="token boolean">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="fuzzy-query" tabindex="-1"><a class="header-anchor" href="#fuzzy-query" aria-hidden="true">#</a> Fuzzy Query</h2><p>Fuzzy query is divided into Like statement and Regexp statement, both of which can support fuzzy matching of TEXT type data.</p><p>Like statement:</p><h3 id="fuzzy-matching-using-like" tabindex="-1"><a class="header-anchor" href="#fuzzy-matching-using-like" aria-hidden="true">#</a> Fuzzy matching using <code>Like</code></h3><p>In the value filter condition, for TEXT type data, use <code>Like</code> and <code>Regexp</code> operators to perform fuzzy matching on data.</p><p><strong>Matching rules:</strong></p><ul><li>The percentage (<code>%</code>) wildcard matches any string of zero or more characters.</li><li>The underscore (<code>_</code>) wildcard matches any single character.</li></ul><p><strong>Example 1:</strong> Query data containing <code>&#39;cc&#39;</code> in <code>value</code> under <code>root.sg.d1</code>.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; select * from root.sg.d1 where value like &#39;%cc%&#39;
+-----------------------------+----------------+
|                         Time|root.sg.d1.value|
+-----------------------------+----------------+
|2017-11-01T00:00:00.000+08:00|        aabbccdd| 
|2017-11-01T00:00:01.000+08:00|              cc|
+-----------------------------+----------------+
Total line number = 2
It costs 0.002s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 2:</strong> Query data that consists of 3 characters and the second character is <code>&#39;b&#39;</code> in <code>value</code> under <code>root.sg.d1</code>.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; select * from root.sg.device where value like &#39;_b_&#39;
+-----------------------------+----------------+
|                         Time|root.sg.d1.value|
+-----------------------------+----------------+
|2017-11-01T00:00:02.000+08:00|             abc| 
+-----------------------------+----------------+
Total line number = 1
It costs 0.002s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="fuzzy-matching-using-regexp" tabindex="-1"><a class="header-anchor" href="#fuzzy-matching-using-regexp" aria-hidden="true">#</a> Fuzzy matching using <code>Regexp</code></h3><p>The filter conditions that need to be passed in are regular expressions in the Java standard library style.</p><p><strong>Examples of common regular matching:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>All characters with a length of 3-20: ^.{3,20}$
Uppercase english characters: ^[A-Z]+$
Numbers and English characters: ^[A-Za-z0-9]+$
Beginning with a: ^a.*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 1:</strong> Query a string composed of 26 English characters for the value under root.sg.d1</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; select * from root.sg.d1 where value regexp &#39;^[A-Za-z]+$&#39;
+-----------------------------+----------------+
|                         Time|root.sg.d1.value|
+-----------------------------+----------------+
|2017-11-01T00:00:00.000+08:00|        aabbccdd| 
|2017-11-01T00:00:01.000+08:00|              cc|
+-----------------------------+----------------+
Total line number = 2
It costs 0.002s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 2:</strong> Query root.sg.d1 where the value value is a string composed of 26 lowercase English characters and the time is greater than 100</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; select * from root.sg.d1 where value regexp &#39;^[a-z]+$&#39; and time &gt; 100
+-----------------------------+----------------+
|                         Time|root.sg.d1.value|
+-----------------------------+----------------+
|2017-11-01T00:00:00.000+08:00|        aabbccdd| 
|2017-11-01T00:00:01.000+08:00|              cc|
+-----------------------------+----------------+
Total line number = 2
It costs 0.002s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26);function v(k,g){const a=p("RouterLink");return t(),o("div",null,[l(`

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

`),u,i("p",null,[e("Use time filters to filter data for a specific time range. For supported formats of timestamps, please refer to "),r(a,{to:"/UserGuide/V1.0.x/Data-Concept/Data-Type.html"},{default:c(()=>[e("Timestamp")]),_:1}),e(" .")]),m])}const b=n(d,[["render",v],["__file","Where-Condition.html.vue"]]);export{b as default};