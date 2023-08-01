import{_ as e,o as n,c as i,a as s,f as a}from"./app-1ba67e78.js";const t={},r=a(`<h2 id="查询性能追踪" tabindex="-1"><a class="header-anchor" href="#查询性能追踪" aria-hidden="true">#</a> 查询性能追踪</h2><p>IoTDB 支持使用 <code>TRACING</code> 关键词对查询语句进行性能追踪。用户可以使用性能追踪工具来分析语句执行中存在的潜在性能问题。</p><p>性能追踪的结果包括：</p><ol><li>查询执行过程中各个阶段的累积耗时。</li><li>与查询性能分析相关的统计信息，包括查询的时间序列数、涉及访问的 Tsfile 文件数、需要扫描的 chunk 总数以及平均每个 chunk 包含的数据点个数、读取的 Page 总数以及其中乱序 Page 的个数。</li></ol><p>例如执行 <code>tracing select * from root</code>，输出结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Tracing Activties:
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function c(o,d){return n(),i("div",null,[s(`

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

`),r])}const u=e(t,[["render",c],["__file","Tracing-Tool.html.vue"]]);export{u as default};
