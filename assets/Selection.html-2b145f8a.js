import{_ as n,o as e,c as s,a as t,f as a}from"./app-77dc4b6e.js";const o={},i=a(`<h2 id="选择函数" tabindex="-1"><a class="header-anchor" href="#选择函数" aria-hidden="true">#</a> 选择函数</h2><p>目前 IoTDB 支持如下选择函数：</p><table><thead><tr><th>函数名</th><th>输入序列类型</th><th>必要的属性参数</th><th>输出序列类型</th><th>功能描述</th></tr></thead><tbody><tr><td>TOP_K</td><td>INT32 / INT64 / FLOAT / DOUBLE / TEXT</td><td><code>k</code>: 最多选择的数据点数，必须大于 0 小于等于 1000</td><td>与输入序列的实际类型一致</td><td>返回某时间序列中值最大的<code>k</code>个数据点。若多于<code>k</code>个数据点的值并列最大，则返回时间戳最小的数据点。</td></tr><tr><td>BOTTOM_K</td><td>INT32 / INT64 / FLOAT / DOUBLE / TEXT</td><td><code>k</code>: 最多选择的数据点数，必须大于 0 小于等于 1000</td><td>与输入序列的实际类型一致</td><td>返回某时间序列中值最小的<code>k</code>个数据点。若多于<code>k</code>个数据点的值并列最小，则返回时间戳最小的数据点。</td></tr></tbody></table><p>例如：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1<span class="token punctuation">,</span> top_k<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token string">&#39;k&#39;</span><span class="token operator">=</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> bottom_k<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token string">&#39;k&#39;</span><span class="token operator">=</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d2 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">2020</span><span class="token operator">-</span><span class="token number">12</span><span class="token operator">-</span><span class="token number">10</span>T20:<span class="token number">36</span>:<span class="token number">15.530</span><span class="token operator">+</span><span class="token number">08</span>:<span class="token number">00</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+--------------------+------------------------------+---------------------------------+
|                         Time|      root.sg1.d2.s1|top_k(root.sg1.d2.s1, &quot;k&quot;=&quot;2&quot;)|bottom_k(root.sg1.d2.s1, &quot;k&quot;=&quot;2&quot;)|
+-----------------------------+--------------------+------------------------------+---------------------------------+
|2020-12-10T20:36:15.531+08:00| 1531604122307244742|           1531604122307244742|                             null|
|2020-12-10T20:36:15.532+08:00|-7426070874923281101|                          null|                             null|
|2020-12-10T20:36:15.533+08:00|-7162825364312197604|          -7162825364312197604|                             null|
|2020-12-10T20:36:15.534+08:00|-8581625725655917595|                          null|             -8581625725655917595|
|2020-12-10T20:36:15.535+08:00|-7667364751255535391|                          null|             -7667364751255535391|
+-----------------------------+--------------------+------------------------------+---------------------------------+
Total line number = 5
It costs 0.006s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function c(d,l){return e(),s("div",null,[t(`

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

`),i])}const p=n(o,[["render",c],["__file","Selection.html.vue"]]);export{p as default};
