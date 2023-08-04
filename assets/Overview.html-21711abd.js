import{_ as a,r as d,o,c as n,a as i,d as e,e as t,b as l,f as s}from"./app-e22bde73.js";const c={},y=s('<h1 id="quick-start" tabindex="-1"><a class="header-anchor" href="#quick-start" aria-hidden="true">#</a> Quick Start</h1><h2 id="priority-of-operators" tabindex="-1"><a class="header-anchor" href="#priority-of-operators" aria-hidden="true">#</a> Priority of Operators</h2><table><thead><tr><th style="text-align:center;">priority</th><th style="text-align:left;">operator</th><th style="text-align:left;">meaning</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:left;"><code>-</code></td><td style="text-align:left;">Unary operator negative</td></tr><tr><td style="text-align:center;">1</td><td style="text-align:left;"><code>+</code></td><td style="text-align:left;">Unary operator positive</td></tr><tr><td style="text-align:center;">1</td><td style="text-align:left;"><code>!</code></td><td style="text-align:left;">Unary operator negation</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:left;"><code>*</code></td><td style="text-align:left;">Binary operator multiply</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:left;"><code>/</code></td><td style="text-align:left;">Binary operator division</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:left;"><code>%</code></td><td style="text-align:left;">Binary operator remainder</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:left;"><code>+</code></td><td style="text-align:left;">Binary operator add</td></tr><tr><td style="text-align:center;">3</td><td style="text-align:left;"><code>-</code></td><td style="text-align:left;">Binary operator minus</td></tr><tr><td style="text-align:center;">4</td><td style="text-align:left;"><code>&gt;</code></td><td style="text-align:left;">Binary compare operator greater than</td></tr><tr><td style="text-align:center;">4</td><td style="text-align:left;"><code>&gt;=</code></td><td style="text-align:left;">Binary compare operator greater or equal to</td></tr><tr><td style="text-align:center;">4</td><td style="text-align:left;"><code>&lt;</code></td><td style="text-align:left;">Binary compare operator less than</td></tr><tr><td style="text-align:center;">4</td><td style="text-align:left;"><code>&lt;=</code></td><td style="text-align:left;">Binary compare operator less or equal to</td></tr><tr><td style="text-align:center;">4</td><td style="text-align:left;"><code>==</code></td><td style="text-align:left;">Binary compare operator equal to</td></tr><tr><td style="text-align:center;">4</td><td style="text-align:left;"><code>!=</code>/<code>&lt;&gt;</code></td><td style="text-align:left;">Binary compare operator non-equal to</td></tr><tr><td style="text-align:center;">5</td><td style="text-align:left;"><code>REGEXP</code></td><td style="text-align:left;"><code>REGEXP</code> operator</td></tr><tr><td style="text-align:center;">5</td><td style="text-align:left;"><code>LIKE</code></td><td style="text-align:left;"><code>LIKE</code> operator</td></tr><tr><td style="text-align:center;">6</td><td style="text-align:left;"><code>IN</code></td><td style="text-align:left;"><code>IN</code> operator</td></tr><tr><td style="text-align:center;">7</td><td style="text-align:left;"><code>and</code>/<code>&amp;</code>/<code>&amp;&amp;</code></td><td style="text-align:left;">Binary logic operator and</td></tr><tr><td style="text-align:center;">8</td><td style="text-align:left;"><code>or</code>/ | / ||</td><td style="text-align:left;">Binary logic operator or</td></tr></tbody></table><h2 id="about" tabindex="-1"><a class="header-anchor" href="#about" aria-hidden="true">#</a> About</h2><p>For applications based on time series data, data quality is vital.<br><strong>UDF Library</strong> is IoTDB User Defined Functions (UDF) about data quality, including data profiling, data quality evalution and data repairing.<br> It effectively meets the demand for data quality in the industrial field.</p><h2 id="quick-start-1" tabindex="-1"><a class="header-anchor" href="#quick-start-1" aria-hidden="true">#</a> Quick Start</h2><ol><li>Download the JAR with all dependencies and the script of registering UDF.</li><li>Copy the JAR package to <code>ext\\udf</code> under the directory of IoTDB system (Please put JAR to this directory of all DataNodes if you use Cluster).</li><li>Run <code>sbin\\start-server.bat</code> (for Windows) or <code>sbin\\start-server.sh</code> (for Linux or MacOS) to start IoTDB server.</li><li>Copy the script to the directory of IoTDB system (under the root directory, at the same level as <code>sbin</code>), modify the parameters in the script if needed and run it to register UDF.</li></ol><h2 id="download" tabindex="-1"><a class="header-anchor" href="#download" aria-hidden="true">#</a> Download</h2>',8),g={href:"https://thulab.github.io/iotdb-quality/en/Download.html",target:"_blank",rel:"noopener noreferrer"};function h(f,p){const r=d("ExternalLinkIcon");return o(),n("div",null,[i(`

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

`),y,e("p",null,[t("Since our codes are still under review, there are no codes in Apache repository. Before finishing the review, the above files can be downloaded in our "),e("a",g,[t("old website"),l(r)]),t(".")])])}const u=a(c,[["render",h],["__file","Overview.html.vue"]]);export{u as default};
