import{_ as e,o as s,c as n,a as i,f as t}from"./app-e19a8f96.js";const a={},d=t(`<h1 id="series-discovery" tabindex="-1"><a class="header-anchor" href="#series-discovery" aria-hidden="true">#</a> Series Discovery</h1><h2 id="consecutivesequences" tabindex="-1"><a class="header-anchor" href="#consecutivesequences" aria-hidden="true">#</a> ConsecutiveSequences</h2><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><p>This function is used to find locally longest consecutive subsequences in strictly equispaced multidimensional data.</p><p>Strictly equispaced data is the data whose time intervals are strictly equal. Missing data, including missing rows and missing values, is allowed in it, while data redundancy and timestamp drift is not allowed.</p><p>Consecutive subsequence is the subsequence that is strictly equispaced with the standard time interval without any missing data. If a consecutive subsequence is not a proper subsequence of any consecutive subsequence, it is locally longest.</p><p><strong>Name:</strong> CONSECUTIVESEQUENCES</p><p><strong>Input Series:</strong> Support multiple input series. The type is arbitrary but the data is strictly equispaced.</p><p><strong>Parameters:</strong></p><ul><li><code>gap</code>: The standard time interval which is a positive number with an unit. The unit is &#39;ms&#39; for millisecond, &#39;s&#39; for second, &#39;m&#39; for minute, &#39;h&#39; for hour and &#39;d&#39; for day. By default, it will be estimated by the mode of time intervals.</li></ul><p><strong>Output Series:</strong> Output a single series. The type is INT32. Each data point in the output series corresponds to a locally longest consecutive subsequence. The output timestamp is the starting timestamp of the subsequence and the output value is the number of data points in the subsequence.</p><p><strong>Note:</strong> For input series that is not strictly equispaced, there is no guarantee on the output.</p><h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h3><h4 id="manually-specify-the-standard-time-interval" tabindex="-1"><a class="header-anchor" href="#manually-specify-the-standard-time-interval" aria-hidden="true">#</a> Manually Specify the Standard Time Interval</h4><p>It&#39;s able to manually specify the standard time interval by the parameter <code>gap</code>. It&#39;s notable that false parameter leads to false output.</p><p>Input series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------+---------------+
|                         Time|root.test.d1.s1|root.test.d1.s2|
+-----------------------------+---------------+---------------+
|2020-01-01T00:00:00.000+08:00|            1.0|            1.0|
|2020-01-01T00:05:00.000+08:00|            1.0|            1.0|
|2020-01-01T00:10:00.000+08:00|            1.0|            1.0|
|2020-01-01T00:20:00.000+08:00|            1.0|            1.0|
|2020-01-01T00:25:00.000+08:00|            1.0|            1.0|
|2020-01-01T00:30:00.000+08:00|            1.0|            1.0|
|2020-01-01T00:35:00.000+08:00|            1.0|            1.0|
|2020-01-01T00:40:00.000+08:00|            1.0|           null|
|2020-01-01T00:45:00.000+08:00|            1.0|            1.0|
|2020-01-01T00:50:00.000+08:00|            1.0|            1.0|
+-----------------------------+---------------+---------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> consecutivesequences<span class="token punctuation">(</span>s1<span class="token punctuation">,</span>s2<span class="token punctuation">,</span><span class="token string">&#39;gap&#39;</span><span class="token operator">=</span><span class="token string">&#39;5m&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+------------------------------------------------------------------+
|                         Time|consecutivesequences(root.test.d1.s1, root.test.d1.s2, &quot;gap&quot;=&quot;5m&quot;)|
+-----------------------------+------------------------------------------------------------------+
|2020-01-01T00:00:00.000+08:00|                                                                 3|
|2020-01-01T00:20:00.000+08:00|                                                                 4|
|2020-01-01T00:45:00.000+08:00|                                                                 2|
+-----------------------------+------------------------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="automatically-estimate-the-standard-time-interval" tabindex="-1"><a class="header-anchor" href="#automatically-estimate-the-standard-time-interval" aria-hidden="true">#</a> Automatically Estimate the Standard Time Interval</h4><p>When <code>gap</code> is default, this function estimates the standard time interval by the mode of time intervals and gets the same results. Therefore, this usage is more recommended.</p><p>Input series is the same as above, the SQL for query is shown below:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> consecutivesequences<span class="token punctuation">(</span>s1<span class="token punctuation">,</span>s2<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+------------------------------------------------------+
|                         Time|consecutivesequences(root.test.d1.s1, root.test.d1.s2)|
+-----------------------------+------------------------------------------------------+
|2020-01-01T00:00:00.000+08:00|                                                     3|
|2020-01-01T00:20:00.000+08:00|                                                     4|
|2020-01-01T00:45:00.000+08:00|                                                     2|
+-----------------------------+------------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="consecutivewindows" tabindex="-1"><a class="header-anchor" href="#consecutivewindows" aria-hidden="true">#</a> ConsecutiveWindows</h2><h3 id="usage-1" tabindex="-1"><a class="header-anchor" href="#usage-1" aria-hidden="true">#</a> Usage</h3><p>This function is used to find consecutive windows of specified length in strictly equispaced multidimensional data.</p><p>Strictly equispaced data is the data whose time intervals are strictly equal. Missing data, including missing rows and missing values, is allowed in it, while data redundancy and timestamp drift is not allowed.</p><p>Consecutive window is the subsequence that is strictly equispaced with the standard time interval without any missing data.</p><p><strong>Name:</strong> CONSECUTIVEWINDOWS</p><p><strong>Input Series:</strong> Support multiple input series. The type is arbitrary but the data is strictly equispaced.</p><p><strong>Parameters:</strong></p><ul><li><code>gap</code>: The standard time interval which is a positive number with an unit. The unit is &#39;ms&#39; for millisecond, &#39;s&#39; for second, &#39;m&#39; for minute, &#39;h&#39; for hour and &#39;d&#39; for day. By default, it will be estimated by the mode of time intervals.</li><li><code>length</code>: The length of the window which is a positive number with an unit. The unit is &#39;ms&#39; for millisecond, &#39;s&#39; for second, &#39;m&#39; for minute, &#39;h&#39; for hour and &#39;d&#39; for day. This parameter cannot be lacked.</li></ul><p><strong>Output Series:</strong> Output a single series. The type is INT32. Each data point in the output series corresponds to a consecutive window. The output timestamp is the starting timestamp of the window and the output value is the number of data points in the window.</p><p><strong>Note:</strong> For input series that is not strictly equispaced, there is no guarantee on the output.</p><h3 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1" aria-hidden="true">#</a> Examples</h3><p>Input series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------+---------------+
|                         Time|root.test.d1.s1|root.test.d1.s2|
+-----------------------------+---------------+---------------+
|2020-01-01T00:00:00.000+08:00|            1.0|            1.0|
|2020-01-01T00:05:00.000+08:00|            1.0|            1.0|
|2020-01-01T00:10:00.000+08:00|            1.0|            1.0|
|2020-01-01T00:20:00.000+08:00|            1.0|            1.0|
|2020-01-01T00:25:00.000+08:00|            1.0|            1.0|
|2020-01-01T00:30:00.000+08:00|            1.0|            1.0|
|2020-01-01T00:35:00.000+08:00|            1.0|            1.0|
|2020-01-01T00:40:00.000+08:00|            1.0|           null|
|2020-01-01T00:45:00.000+08:00|            1.0|            1.0|
|2020-01-01T00:50:00.000+08:00|            1.0|            1.0|
+-----------------------------+---------------+---------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> consecutivewindows<span class="token punctuation">(</span>s1<span class="token punctuation">,</span>s2<span class="token punctuation">,</span><span class="token string">&#39;length&#39;</span><span class="token operator">=</span><span class="token string">&#39;10m&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+--------------------------------------------------------------------+
|                         Time|consecutivewindows(root.test.d1.s1, root.test.d1.s2, &quot;length&quot;=&quot;10m&quot;)|
+-----------------------------+--------------------------------------------------------------------+
|2020-01-01T00:00:00.000+08:00|                                                                   3|
|2020-01-01T00:20:00.000+08:00|                                                                   3|
|2020-01-01T00:25:00.000+08:00|                                                                   3|
+-----------------------------+--------------------------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,45);function r(l,o){return s(),n("div",null,[i(`

​    Licensed to the Apache Software Foundation (ASF) under one
​    or more contributor license agreements.  See the NOTICE file
​    distributed with this work for additional information
​    regarding copyright ownership.  The ASF licenses this file
​    to you under the Apache License, Version 2.0 (the
​    "License"); you may not use this file except in compliance
​    with the License.  You may obtain a copy of the License at
​    
​        http://www.apache.org/licenses/LICENSE-2.0
​    
​    Unless required by applicable law or agreed to in writing,
​    software distributed under the License is distributed on an
​    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
​    KIND, either express or implied.  See the License for the
​    specific language governing permissions and limitations
​    under the License.

`),d])}const c=e(a,[["render",r],["__file","Series-Discovery.html.vue"]]);export{c as default};
