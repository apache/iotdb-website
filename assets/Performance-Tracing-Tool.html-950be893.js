import{_ as e,o as n,c as i,a as s,f as t}from"./app-0da752e6.js";const a={},o=t(`<h2 id="性能追踪工具" tabindex="-1"><a class="header-anchor" href="#性能追踪工具" aria-hidden="true">#</a> 性能追踪工具</h2><blockquote><p>注意：0.13及以上版本中将不再支持0.12中的 <code>TRACING ON/OFF</code> 。</p></blockquote><p>IoTDB 支持使用 <code>TRACING</code> 关键词对查询语句进行性能追踪。用户可以分析查询语句执行中存在的潜在性能问题。</p><p>性能追踪的结果包括：</p><ol><li>执行过程中各个阶段的累积耗时。</li><li>与性能分析相关的统计信息。对于查询语句，包括查询的时间序列数、涉及访问的 Tsfile 文件数、需要扫描的 chunk 总数以及平均每个 chunk 包含的数据点个数、读取的 Page 总数以及其中乱序 Page 的个数。</li></ol><p><strong>示例：</strong></p><p>例如执行 <code>tracing select * from root</code>，输出结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Tracing Activties:
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function r(c,d){return n(),i("div",null,[s(`

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

`),o])}const u=e(a,[["render",r],["__file","Performance-Tracing-Tool.html.vue"]]);export{u as default};
