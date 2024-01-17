import{_ as a,r as o,o as t,c as p,a as l,d as c,e as s,b as r,w as i,f as n}from"./app-1OOS2xKC.js";const d={},u=n('<h2 id="查询过滤条件" tabindex="-1"><a class="header-anchor" href="#查询过滤条件" aria-hidden="true">#</a> 查询过滤条件</h2><p>在 IoTDB 查询语句中，支持使用<strong>时间过滤</strong>和<strong>值过滤</strong>两种过滤条件。</p><p>支持的运算符如下：</p><ul><li>比较运算符：大于（<code>&gt;</code>）、大于等于（ <code>&gt;=</code>）、等于（ <code>=</code> 或 <code>==</code>）、不等于（ <code>!=</code> 或 <code>&lt;&gt;</code>）、小于等于（ <code>&lt;=</code>）、小于（ <code>&lt;</code>）。</li><li>范围包含运算符：包含（ <code>IN</code> ）。</li><li>逻辑运算符：与（ <code>AND</code> 或 <code>&amp;</code> 或 <code>&amp;&amp;</code>）、或（ <code>OR</code> 或 <code>|</code> 或 <code>||</code>）、非（ <code>NOT</code> 或 <code>!</code>）。</li></ul><h3 id="时间过滤条件" tabindex="-1"><a class="header-anchor" href="#时间过滤条件" aria-hidden="true">#</a> 时间过滤条件</h3>',5),k=n(`<p>示例如下：</p><ol><li><p>选择时间戳大于 2022-01-01T00:05:00.000 的数据：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1 <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">2022</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">05</span>:<span class="token number">00.000</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>选择时间戳等于 2022-01-01T00:05:00.000 的数据：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1 <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">=</span> <span class="token number">2022</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">05</span>:<span class="token number">00.000</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>选择时间区间 [2017-11-01T00:05:00.000, 2017-11-01T00:12:00.000) 内的数据：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1 <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;=</span> <span class="token number">2022</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">05</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">12</span>:<span class="token number">00.000</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><p>注：在上述示例中，<code>time</code> 也可写做 <code>timestamp</code>。</p><h3 id="值过滤条件" tabindex="-1"><a class="header-anchor" href="#值过滤条件" aria-hidden="true">#</a> 值过滤条件</h3><p>使用值过滤条件可以筛选数据值满足特定条件的数据。<strong>允许</strong>使用 select 子句中未选择的时间序列作为值过滤条件。</p><p>示例如下：</p><ol><li><p>选择值大于 36.5 的数据：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> temperature <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> temperature <span class="token operator">&gt;</span> <span class="token number">36.5</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>选择值等于 true 的数据：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token keyword">status</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">status</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>选择区间 (36.5,40] 的数据：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> temperature <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> temperature <span class="token operator">&gt;</span> <span class="token number">36.5</span> <span class="token operator">and</span> temperature <span class="token operator">&lt;</span> <span class="token number">40</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>选择值在特定范围内的数据：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> code <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> code <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token string">&#39;200&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;300&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;400&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;500&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>选择值在特定范围外的数据：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> code <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> code <span class="token operator">not</span> <span class="token operator">in</span> <span class="token punctuation">(</span><span class="token string">&#39;200&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;300&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;400&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;500&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h3 id="模糊查询" tabindex="-1"><a class="header-anchor" href="#模糊查询" aria-hidden="true">#</a> 模糊查询</h3><p>在值过滤条件中，对于 TEXT 类型的数据，支持使用 <code>Like</code> 和 <code>Regexp</code> 运算符对数据进行模糊匹配</p><h4 id="使用-like-进行模糊匹配" tabindex="-1"><a class="header-anchor" href="#使用-like-进行模糊匹配" aria-hidden="true">#</a> 使用 <code>Like</code> 进行模糊匹配</h4><p><strong>匹配规则：</strong></p><ul><li><code>%</code> 表示任意0个或多个字符。</li><li><code>_</code> 表示任意单个字符。</li></ul><p><strong>示例 1：</strong> 查询 <code>root.sg.d1</code> 下 <code>value</code> 含有<code>&#39;cc&#39;</code>的数据。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; select * from root.sg.d1 where value like &#39;%cc%&#39;
+-----------------------------+----------------+
|                         Time|root.sg.d1.value|
+-----------------------------+----------------+
|2017-11-01T00:00:00.000+08:00|        aabbccdd| 
|2017-11-01T00:00:01.000+08:00|              cc|
+-----------------------------+----------------+
Total line number = 2
It costs 0.002s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong> 查询 <code>root.sg.d1</code> 下 <code>value</code> 中间为 <code>&#39;b&#39;</code>、前后为任意单个字符的数据。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; select * from root.sg.device where value like &#39;_b_&#39;
+-----------------------------+----------------+
|                         Time|root.sg.d1.value|
+-----------------------------+----------------+
|2017-11-01T00:00:02.000+08:00|             abc| 
+-----------------------------+----------------+
Total line number = 1
It costs 0.002s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用-regexp-进行模糊匹配" tabindex="-1"><a class="header-anchor" href="#使用-regexp-进行模糊匹配" aria-hidden="true">#</a> 使用 <code>Regexp</code> 进行模糊匹配</h4><p>需要传入的过滤条件为 <strong>Java 标准库风格的正则表达式</strong>。</p><p><strong>常见的正则匹配举例：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>长度为3-20的所有字符：^.{3,20}$
大写英文字符：^[A-Z]+$
数字和英文字符：^[A-Za-z0-9]+$
以a开头的：^a.*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 1：</strong> 查询 root.sg.d1 下 value 值为26个英文字符组成的字符串。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> <span class="token keyword">select</span> * from root.sg.d1 where value regexp <span class="token string">&#39;^[A-Za-z]+$&#39;</span>
+-----------------------------+----------------+
<span class="token operator">|</span>                         Time<span class="token operator">|</span>root.sg.d1.value<span class="token operator">|</span>
+-----------------------------+----------------+
<span class="token operator">|</span><span class="token number">2017</span>-11-01T00:00:00.000+08:00<span class="token operator">|</span>        aabbccdd<span class="token operator">|</span> 
<span class="token operator">|</span><span class="token number">2017</span>-11-01T00:00:01.000+08:00<span class="token operator">|</span>              cc<span class="token operator">|</span>
+-----------------------------+----------------+
Total line number <span class="token operator">=</span> <span class="token number">2</span>
It costs <span class="token number">0</span>.002s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 2：</strong> 查询 root.sg.d1 下 value 值为26个小写英文字符组成的字符串且时间大于100的。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>IoTDB<span class="token operator">&gt;</span> <span class="token keyword">select</span> * from root.sg.d1 where value regexp <span class="token string">&#39;^[a-z]+$&#39;</span> and <span class="token function">time</span> <span class="token operator">&gt;</span> <span class="token number">100</span>
+-----------------------------+----------------+
<span class="token operator">|</span>                         Time<span class="token operator">|</span>root.sg.d1.value<span class="token operator">|</span>
+-----------------------------+----------------+
<span class="token operator">|</span><span class="token number">2017</span>-11-01T00:00:00.000+08:00<span class="token operator">|</span>        aabbccdd<span class="token operator">|</span> 
<span class="token operator">|</span><span class="token number">2017</span>-11-01T00:00:01.000+08:00<span class="token operator">|</span>              cc<span class="token operator">|</span>
+-----------------------------+----------------+
Total line number <span class="token operator">=</span> <span class="token number">2</span>
It costs <span class="token number">0</span>.002s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function m(v,b){const e=o("RouterLink");return t(),p("div",null,[l(`

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

`),u,c("p",null,[s("使用时间过滤条件可以筛选特定时间范围的数据。对于时间戳支持的格式，请参考 "),r(e,{to:"/zh/UserGuide/V0.13.x/Data-Concept/Data-Type.html"},{default:i(()=>[s("时间戳类型")]),_:1}),s(" 。")]),k])}const h=a(d,[["render",m],["__file","Query-Filter.html.vue"]]);export{h as default};
