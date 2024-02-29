import{_ as e,o as n,c as a,a as s,f as t}from"./app-A_mHgNUs.js";const o={},i=t(`<h1 id="逻辑运算符" tabindex="-1"><a class="header-anchor" href="#逻辑运算符" aria-hidden="true">#</a> 逻辑运算符</h1><h2 id="一元逻辑运算符" tabindex="-1"><a class="header-anchor" href="#一元逻辑运算符" aria-hidden="true">#</a> 一元逻辑运算符</h2><ul><li>支持运算符：<code>!</code></li><li>输入数据类型：<code>BOOLEAN</code>。</li><li>输出数据类型：<code>BOOLEAN</code>。</li><li>注意：<code>!</code>的优先级很高，记得使用括号调整优先级。</li></ul><h2 id="二元逻辑运算符" tabindex="-1"><a class="header-anchor" href="#二元逻辑运算符" aria-hidden="true">#</a> 二元逻辑运算符</h2><ul><li><p>支持运算符</p><ul><li>AND:<code>and</code>,<code>&amp;</code>, <code>&amp;&amp;</code></li><li>OR:<code>or</code>,<code>|</code>,<code>||</code></li></ul></li><li><p>输入数据类型：<code>BOOLEAN</code>。</p></li><li><p>返回类型 <code>BOOLEAN</code>。</p></li><li><p>注意：当某个时间戳下左操作数和右操作数都为<code>BOOLEAN</code>类型时，二元逻辑操作才会有输出结果。</p></li></ul><p><strong>示例：</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> a <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">,</span> a <span class="token operator">&lt;=</span> b<span class="token punctuation">,</span> <span class="token operator">!</span><span class="token punctuation">(</span>a <span class="token operator">&lt;=</span> b<span class="token punctuation">)</span><span class="token punctuation">,</span> a <span class="token operator">&gt;</span> <span class="token number">10</span> <span class="token operator">&amp;&amp;</span> a <span class="token operator">&gt;</span> b <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行结果</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; select a, b, a &gt; 10, a &lt;= b, !(a &lt;= b), a &gt; 10 &amp;&amp; a &gt; b from root.test;
+-----------------------------+-----------+-----------+----------------+--------------------------+---------------------------+------------------------------------------------+
|                         Time|root.test.a|root.test.b|root.test.a &gt; 10|root.test.a &lt;= root.test.b|!root.test.a &lt;= root.test.b|(root.test.a &gt; 10) &amp; (root.test.a &gt; root.test.b)|
+-----------------------------+-----------+-----------+----------------+--------------------------+---------------------------+------------------------------------------------+
|1970-01-01T08:00:00.001+08:00|         23|       10.0|            true|                     false|                       true|                                            true|
|1970-01-01T08:00:00.002+08:00|         33|       21.0|            true|                     false|                       true|                                            true|
|1970-01-01T08:00:00.004+08:00|         13|       15.0|            true|                      true|                      false|                                           false|
|1970-01-01T08:00:00.005+08:00|         26|        0.0|            true|                     false|                       true|                                            true|
|1970-01-01T08:00:00.008+08:00|          1|       22.0|           false|                      true|                      false|                                           false|
|1970-01-01T08:00:00.010+08:00|         23|       12.0|            true|                     false|                       true|                                            true|
+-----------------------------+-----------+-----------+----------------+--------------------------+---------------------------+------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function r(l,c){return n(),a("div",null,[s(`

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

`),i])}const p=e(o,[["render",r],["__file","Logical.html.vue"]]);export{p as default};
