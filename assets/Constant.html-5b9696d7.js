import{_ as n,o as e,c as s,a as t,f as a}from"./app-dc5882c4.js";const o={},i=a(`<h2 id="常序列生成函数" tabindex="-1"><a class="header-anchor" href="#常序列生成函数" aria-hidden="true">#</a> 常序列生成函数</h2><p>常序列生成函数用于生成所有数据点的值都相同的时间序列。</p><p>常序列生成函数接受一个或者多个时间序列输入，其输出的数据点的时间戳集合是这些输入序列时间戳集合的并集。</p><p>目前 IoTDB 支持如下常序列生成函数：</p><table><thead><tr><th>函数名</th><th>必要的属性参数</th><th>输出序列类型</th><th>功能描述</th></tr></thead><tbody><tr><td>CONST</td><td><code>value</code>: 输出的数据点的值 <br><code>type</code>: 输出的数据点的类型，只能是 INT32 / INT64 / FLOAT / DOUBLE / BOOLEAN / TEXT</td><td>由输入属性参数 <code>type</code> 决定</td><td>根据输入属性 <code>value</code> 和 <code>type</code> 输出用户指定的常序列。</td></tr><tr><td>PI</td><td>无</td><td>DOUBLE</td><td>常序列的值：<code>π</code> 的 <code>double</code> 值，圆的周长与其直径的比值，即圆周率，等于 <em>Java标准库</em> 中的<code>Math.PI</code>。</td></tr><tr><td>E</td><td>无</td><td>DOUBLE</td><td>常序列的值：<code>e</code> 的 <code>double</code> 值，自然对数的底，它等于 <em>Java 标准库</em> 中的 <code>Math.E</code>。</td></tr></tbody></table><p>例如：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1<span class="token punctuation">,</span> s2<span class="token punctuation">,</span> const<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token string">&#39;value&#39;</span><span class="token operator">=</span><span class="token string">&#39;1024&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;type&#39;</span><span class="token operator">=</span><span class="token string">&#39;INT64&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> pi<span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">,</span> e<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1<span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>select s1, s2, const(s1, &#39;value&#39;=&#39;1024&#39;, &#39;type&#39;=&#39;INT64&#39;), pi(s2), e(s1, s2) from root.sg1.d1; 
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function d(c,l){return e(),s("div",null,[t(`

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

`),i])}const r=n(o,[["render",d],["__file","Constant.html.vue"]]);export{r as default};
