import{_ as e,o as n,c as s,a,f as t}from"./app-d261fa6b.js";const i={},r=t(`<h2 id="最新点查询" tabindex="-1"><a class="header-anchor" href="#最新点查询" aria-hidden="true">#</a> 最新点查询</h2><p>最新点查询是时序数据库 Apache IoTDB 中提供的一种特殊查询，最新点查询返回时间序列中时间戳最大的数据点，即一条序列的最新状态。用户可以通过 <code>select last</code> 指定查询最新点。由于最新点数据表征了当前状态，因此在物联网数据分析场景中尤为重要。为了提供毫秒级的返回速度，Apache IoTDB 对最新点查询进行了缓存优化**，**满足用户对设备实时监控的性能需求。</p><p>SQL 语法：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token keyword">last</span> <span class="token operator">&lt;</span>Path<span class="token operator">&gt;</span> <span class="token punctuation">[</span>COMMA <span class="token operator">&lt;</span>Path<span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token operator">*</span> <span class="token keyword">from</span> <span class="token operator">&lt;</span> PrefixPath <span class="token operator">&gt;</span> <span class="token punctuation">[</span>COMMA <span class="token operator">&lt;</span> PrefixPath <span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token operator">*</span> <span class="token operator">&lt;</span>whereClause<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其含义是：查询时间序列 prefixPath.path 中最近时间戳的数据。</p><p><code>whereClause</code> 中当前只支持含有 <code>&gt;</code> 或 <code>&gt;=</code> 的时间过滤条件，任何其他过滤条件都将会返回异常。</p><p>结果集为四列的结构：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----+----------+-----+--------+
|Time|timeseries|value|dataType|
+----+----------+-----+--------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 1：</strong> 查询 root.ln.wf01.wt01.status 的最新数据点</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; select last status from root.ln.wf01.wt01
+-----------------------------+------------------------+-----+--------+
|                         Time|              timeseries|value|dataType|
+-----------------------------+------------------------+-----+--------+
|2017-11-07T23:59:00.000+08:00|root.ln.wf01.wt01.status|false| BOOLEAN|
+-----------------------------+------------------------+-----+--------+
Total line number = 1
It costs 0.000s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong> 查询 root.ln.wf01.wt01 下 status，temperature 时间戳大于等于 2017-11-07T23:50:00 的最新数据点。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; select last status, temperature from root.ln.wf01.wt01 where time &gt;= 2017-11-07T23:50:00
+-----------------------------+-----------------------------+---------+--------+
|                         Time|                   timeseries|    value|dataType|
+-----------------------------+-----------------------------+---------+--------+
|2017-11-07T23:59:00.000+08:00|     root.ln.wf01.wt01.status|    false| BOOLEAN|
|2017-11-07T23:59:00.000+08:00|root.ln.wf01.wt01.temperature|21.067368|  DOUBLE|
+-----------------------------+-----------------------------+---------+--------+
Total line number = 2
It costs 0.002s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function o(l,d){return n(),s("div",null,[a(`

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
