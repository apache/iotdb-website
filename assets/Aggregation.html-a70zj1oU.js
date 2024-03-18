import{_ as t,o as e,c as n,a,f as s}from"./app-EhZKRBO2.js";const d={},i=s(`<h1 id="aggregate-functions" tabindex="-1"><a class="header-anchor" href="#aggregate-functions" aria-hidden="true">#</a> Aggregate Functions</h1><p>Aggregate functions are many-to-one functions. They perform aggregate calculations on a set of values, resulting in a single aggregated result.</p><p>All aggregate functions except <code>COUNT()</code> ignore null values and return null when there are no input rows or all values are null. For example, <code>SUM()</code> returns null instead of zero, and <code>AVG()</code> does not include null values in the count.</p><p>The aggregate functions supported by IoTDB are as follows:</p><table><thead><tr><th>Function Name</th><th>Function Description</th><th>Allowed Input Data Types</th><th>Output Data Types</th></tr></thead><tbody><tr><td>SUM</td><td>Summation.</td><td>INT32 INT64 FLOAT DOUBLE</td><td>DOUBLE</td></tr><tr><td>COUNT</td><td>Counts the number of data points.</td><td>All types</td><td>INT</td></tr><tr><td>AVG</td><td>Average.</td><td>INT32 INT64 FLOAT DOUBLE</td><td>DOUBLE</td></tr><tr><td>EXTREME</td><td>Finds the value with the largest absolute value. Returns a positive value if the maximum absolute value of positive and negative values is equal.</td><td>INT32 INT64 FLOAT DOUBLE</td><td>Consistent with the input data type</td></tr><tr><td>MAX_VALUE</td><td>Find the maximum value.</td><td>INT32 INT64 FLOAT DOUBLE</td><td>Consistent with the input data type</td></tr><tr><td>MIN_VALUE</td><td>Find the minimum value.</td><td>INT32 INT64 FLOAT DOUBLE</td><td>Consistent with the input data type</td></tr><tr><td>FIRST_VALUE</td><td>Find the value with the smallest timestamp.</td><td>All data types</td><td>Consistent with input data type</td></tr><tr><td>LAST_VALUE</td><td>Find the value with the largest timestamp.</td><td>All data types</td><td>Consistent with input data type</td></tr><tr><td>MAX_TIME</td><td>Find the maximum timestamp.</td><td>All data Types</td><td>Timestamp</td></tr><tr><td>MIN_TIME</td><td>Find the minimum timestamp.</td><td>All data Types</td><td>Timestamp</td></tr></tbody></table><p><strong>Example:</strong> Count Points</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token keyword">status</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Result:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------------------------+
|count(root.ln.wf01.wt01.status)|
+-------------------------------+
|                          10080|
+-------------------------------+
Total line number = 1
It costs 0.016s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function o(r,l){return e(),n("div",null,[a(`

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

`),i])}const c=t(d,[["render",o],["__file","Aggregation.html.vue"]]);export{c as default};
