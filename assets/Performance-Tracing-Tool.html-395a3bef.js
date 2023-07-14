import{_ as e,o as n,c as i,a as t,f as a}from"./app-c5738aea.js";const s={},o=a(`<h2 id="performance-tracing-tool" tabindex="-1"><a class="header-anchor" href="#performance-tracing-tool" aria-hidden="true">#</a> Performance Tracing Tool</h2><blockquote><p>Note: TRACING ON/OFF hasn&#39;t been supported yet.</p></blockquote><p>IoTDB supports the use of the <code>TRACING</code> clause to enable performance tracing of executed statements. Users can use the performance tracing tool to analyze potential performance problems in some statements.</p><p>Traceable statement: <code>SELECT</code> only.</p><p>The current performance analysis includes the following contents:</p><ol><li>The elapsed time of each stage of the execution process.</li><li>Statistics related to performance analysis. For query statements, it includes the number of time series queried, the number of Tsfile files accessed, the total number of chunks to be scanned, and the average number of data points contained in the chunk, the total number of pages read, and the number of overlapped pages.</li></ol><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><p>For example, execute <code>tracing select * from root</code>, will display the following contents:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Tracing Activties:
+------------------------------------------------------+------------+
|                                              Activity|Elapsed Time|
+------------------------------------------------------+------------+
|Start to execute statement: tracing select * from root|           0|
|                            Parse SQL to physical plan|           4|
|                              Create and cache dataset|          16|
|                              * Num of series paths: 3|            |
|                       * Num of sequence files read: 2|            |
|                     * Num of unsequence files read: 1|            |
|        * Num of sequence chunks: 6, avg points: 100.0|            |
|      * Num of unsequence chunks: 3, avg points: 100.0|            |
|         * Num of Pages: 9, overlapped pages: 0 (0.0%)|            |
|                                      Request complete|          20|
+------------------------------------------------------+------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function r(c,l){return n(),i("div",null,[t(`

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

`),o])}const u=e(s,[["render",r],["__file","Performance-Tracing-Tool.html.vue"]]);export{u as default};
