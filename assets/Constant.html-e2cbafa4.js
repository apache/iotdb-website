import{_ as e,o as t,c as n,a as s,f as a}from"./app-d4806199.js";const i={},o=a(`<h1 id="constant-timeseries-generating-functions" tabindex="-1"><a class="header-anchor" href="#constant-timeseries-generating-functions" aria-hidden="true">#</a> Constant Timeseries Generating Functions</h1><p>The constant timeseries generating function is used to generate a timeseries in which the values of all data points are the same.</p><p>The constant timeseries generating function accepts one or more timeseries inputs, and the timestamp set of the output data points is the union of the timestamp sets of the input timeseries.</p><p>Currently, IoTDB supports the following constant timeseries generating functions:</p><table><thead><tr><th>Function Name</th><th>Required Attributes</th><th>Output Series Data Type</th><th>Description</th></tr></thead><tbody><tr><td>CONST</td><td><code>value</code>: the value of the output data point <br><code>type</code>: the type of the output data point, it can only be INT32 / INT64 / FLOAT / DOUBLE / BOOLEAN / TEXT</td><td>Determined by the required attribute <code>type</code></td><td>Output the user-specified constant timeseries according to the attributes <code>value</code> and <code>type</code>.</td></tr><tr><td>PI</td><td>None</td><td>DOUBLE</td><td>Data point value: a <code>double</code> value of <code>π</code>, the ratio of the circumference of a circle to its diameter, which is equals to <code>Math.PI</code> in the <em>Java Standard Library</em>.</td></tr><tr><td>E</td><td>None</td><td>DOUBLE</td><td>Data point value: a <code>double</code> value of <code>e</code>, the base of the natural logarithms, which is equals to <code>Math.E</code> in the <em>Java Standard Library</em>.</td></tr></tbody></table><p>Example:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1<span class="token punctuation">,</span> s2<span class="token punctuation">,</span> const<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token string">&#39;value&#39;</span><span class="token operator">=</span><span class="token string">&#39;1024&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;type&#39;</span><span class="token operator">=</span><span class="token string">&#39;INT64&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> pi<span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">,</span> e<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1<span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Result:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select s1, s2, const(s1, &#39;value&#39;=&#39;1024&#39;, &#39;type&#39;=&#39;INT64&#39;), pi(s2), e(s1, s2) from root.sg1.d1; 
+-----------------------------+--------------+--------------+-----------------------------------------------------+------------------+---------------------------------+
|                         Time|root.sg1.d1.s1|root.sg1.d1.s2|const(root.sg1.d1.s1, &quot;value&quot;=&quot;1024&quot;, &quot;type&quot;=&quot;INT64&quot;)|pi(root.sg1.d1.s2)|e(root.sg1.d1.s1, root.sg1.d1.s2)|
+-----------------------------+--------------+--------------+-----------------------------------------------------+------------------+---------------------------------+
|1970-01-01T08:00:00.000+08:00|           0.0|           0.0|                                                 1024| 3.141592653589793|                2.718281828459045|
|1970-01-01T08:00:00.001+08:00|           1.0|          null|                                                 1024|              null|                2.718281828459045|
|1970-01-01T08:00:00.002+08:00|           2.0|          null|                                                 1024|              null|                2.718281828459045|
|1970-01-01T08:00:00.003+08:00|          null|           3.0|                                                 null| 3.141592653589793|                2.718281828459045|
|1970-01-01T08:00:00.004+08:00|          null|           4.0|                                                 null| 3.141592653589793|                2.718281828459045|
+-----------------------------+--------------+--------------+-----------------------------------------------------+------------------+---------------------------------+
Total line number = 5
It costs 0.005s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function c(d,r){return t(),n("div",null,[s(`

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

`),o])}const u=e(i,[["render",c],["__file","Constant.html.vue"]]);export{u as default};
