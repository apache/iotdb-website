import{_ as n,O as e,P as t,ah as s,aW as a}from"./framework-374e0e89.js";const i={},d=a(`<h1 id="趋势计算函数" tabindex="-1"><a class="header-anchor" href="#趋势计算函数" aria-hidden="true">#</a> 趋势计算函数</h1><p>目前 IoTDB 支持如下趋势计算函数：</p><table><thead><tr><th>函数名</th><th>输入序列类型</th><th>输出序列类型</th><th>功能描述</th></tr></thead><tbody><tr><td>TIME_DIFFERENCE</td><td>INT32 / INT64 / FLOAT / DOUBLE / BOOLEAN / TEXT</td><td>INT64</td><td>统计序列中某数据点的时间戳与前一数据点时间戳的差。范围内第一个数据点没有对应的结果输出。</td></tr><tr><td>DIFFERENCE</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>与输入序列的实际类型一致</td><td>统计序列中某数据点的值与前一数据点的值的差。范围内第一个数据点没有对应的结果输出。</td></tr><tr><td>NON_NEGATIVE_DIFFERENCE</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>与输入序列的实际类型一致</td><td>统计序列中某数据点的值与前一数据点的值的差的绝对值。范围内第一个数据点没有对应的结果输出。</td></tr><tr><td>DERIVATIVE</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>统计序列中某数据点相对于前一数据点的变化率，数量上等同于 DIFFERENCE / TIME_DIFFERENCE。范围内第一个数据点没有对应的结果输出。</td></tr><tr><td>NON_NEGATIVE_DERIVATIVE</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>统计序列中某数据点相对于前一数据点的变化率的绝对值，数量上等同于 NON_NEGATIVE_DIFFERENCE / TIME_DIFFERENCE。范围内第一个数据点没有对应的结果输出。</td></tr></tbody></table><p>例如：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1<span class="token punctuation">,</span> time_difference<span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">,</span> difference<span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">,</span> non_negative_difference<span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">,</span> derivative<span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">,</span> non_negative_derivative<span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">limit</span> <span class="token number">5</span> <span class="token keyword">offset</span> <span class="token number">1000</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-------------------+-------------------------------+--------------------------+---------------------------------------+--------------------------+---------------------------------------+
|                         Time|     root.sg1.d1.s1|time_difference(root.sg1.d1.s1)|difference(root.sg1.d1.s1)|non_negative_difference(root.sg1.d1.s1)|derivative(root.sg1.d1.s1)|non_negative_derivative(root.sg1.d1.s1)|
+-----------------------------+-------------------+-------------------------------+--------------------------+---------------------------------------+--------------------------+---------------------------------------+
|2020-12-10T17:11:49.037+08:00|7360723084922759782|                              1|      -8431715764844238876|                    8431715764844238876|    -8.4317157648442388E18|                  8.4317157648442388E18|
|2020-12-10T17:11:49.038+08:00|4377791063319964531|                              1|      -2982932021602795251|                    2982932021602795251|     -2.982932021602795E18|                   2.982932021602795E18|
|2020-12-10T17:11:49.039+08:00|7972485567734642915|                              1|       3594694504414678384|                    3594694504414678384|     3.5946945044146785E18|                  3.5946945044146785E18|
|2020-12-10T17:11:49.040+08:00|2508858212791964081|                              1|      -5463627354942678834|                    5463627354942678834|     -5.463627354942679E18|                   5.463627354942679E18|
|2020-12-10T17:11:49.041+08:00|2817297431185141819|                              1|        308439218393177738|                     308439218393177738|     3.0843921839317773E17|                  3.0843921839317773E17|
+-----------------------------+-------------------+-------------------------------+--------------------------+---------------------------------------+--------------------------+---------------------------------------+
Total line number = 5
It costs 0.014s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function o(r,c){return e(),t("div",null,[s(`

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

`),d])}const p=n(i,[["render",o],["__file","Variation-Trend.html.vue"]]);export{p as default};