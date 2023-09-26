import{_ as e,o as n,c as s,a as t,f as a}from"./app-342a215c.js";const i={},o=a(`<h1 id="time-series-processing" tabindex="-1"><a class="header-anchor" href="#time-series-processing" aria-hidden="true">#</a> Time Series Processing</h1><h2 id="change-points" tabindex="-1"><a class="header-anchor" href="#change-points" aria-hidden="true">#</a> CHANGE_POINTS</h2><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><p>This function is used to remove consecutive identical values from an input sequence.<br> For example, input:<code>1，1，2，2，3</code> output:<code>1，2，3</code>.</p><p><strong>Name：</strong> CHANGE_POINTS</p><p><strong>Input Series：</strong> Support only one input series.</p><p><strong>Parameters：</strong> No parameters.</p><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><p>Raw data：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------------------+---------------------------+---------------------------+---------------------------+---------------------------+---------------------------+
|                         Time|root.testChangePoints.d1.s1|root.testChangePoints.d1.s2|root.testChangePoints.d1.s3|root.testChangePoints.d1.s4|root.testChangePoints.d1.s5|root.testChangePoints.d1.s6|
+-----------------------------+---------------------------+---------------------------+---------------------------+---------------------------+---------------------------+---------------------------+
|1970-01-01T08:00:00.001+08:00|                       true|                          1|                          1|                        1.0|                        1.0|                     1test1|
|1970-01-01T08:00:00.002+08:00|                       true|                          2|                          2|                        2.0|                        1.0|                     2test2|
|1970-01-01T08:00:00.003+08:00|                      false|                          1|                          2|                        1.0|                        1.0|                     2test2|
|1970-01-01T08:00:00.004+08:00|                       true|                          1|                          3|                        1.0|                        1.0|                     1test1|
|1970-01-01T08:00:00.005+08:00|                       true|                          1|                          3|                        1.0|                        1.0|                     1test1|
+-----------------------------+---------------------------+---------------------------+---------------------------+---------------------------+---------------------------+---------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> change_points<span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">,</span> change_points<span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">,</span> change_points<span class="token punctuation">(</span>s3<span class="token punctuation">)</span><span class="token punctuation">,</span> change_points<span class="token punctuation">(</span>s4<span class="token punctuation">)</span><span class="token punctuation">,</span> change_points<span class="token punctuation">(</span>s5<span class="token punctuation">)</span><span class="token punctuation">,</span> change_points<span class="token punctuation">(</span>s6<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>testChangePoints<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+------------------------------------------+------------------------------------------+------------------------------------------+------------------------------------------+------------------------------------------+------------------------------------------+
|                         Time|change_points(root.testChangePoints.d1.s1)|change_points(root.testChangePoints.d1.s2)|change_points(root.testChangePoints.d1.s3)|change_points(root.testChangePoints.d1.s4)|change_points(root.testChangePoints.d1.s5)|change_points(root.testChangePoints.d1.s6)|
+-----------------------------+------------------------------------------+------------------------------------------+------------------------------------------+------------------------------------------+------------------------------------------+------------------------------------------+
|1970-01-01T08:00:00.001+08:00|                                      true|                                         1|                                         1|                                       1.0|                                       1.0|                                    1test1|
|1970-01-01T08:00:00.002+08:00|                                      null|                                         2|                                         2|                                       2.0|                                      null|                                    2test2|
|1970-01-01T08:00:00.003+08:00|                                     false|                                         1|                                      null|                                       1.0|                                      null|                                      null|
|1970-01-01T08:00:00.004+08:00|                                      true|                                      null|                                         3|                                      null|                                      null|                                    1test1|
+-----------------------------+------------------------------------------+------------------------------------------+------------------------------------------+------------------------------------------+------------------------------------------+------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function r(c,l){return n(),s("div",null,[t(`

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

`),o])}const p=e(i,[["render",r],["__file","Time-Series.html.vue"]]);export{p as default};
