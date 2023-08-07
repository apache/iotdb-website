import{_ as e,r as t,o,c as p,a as l,d as n,e as s,b as c,w as i,f as d}from"./app-1a7a5d94.js";const u={},r=d(`<h2 id="查询写回-select-into" tabindex="-1"><a class="header-anchor" href="#查询写回-select-into" aria-hidden="true">#</a> 查询写回（SELECT ... INTO ...）</h2><p><code>SELECT ... INTO ...</code> 语句允许您将查询结果集写回到指定序列上。</p><h3 id="sql" tabindex="-1"><a class="header-anchor" href="#sql" aria-hidden="true">#</a> SQL</h3><h4 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h4><p><strong>下面是 <code>select</code> 语句的语法定义：</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>selectClause 
intoClause? 
fromClause 
whereClause? 
specialClause?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果去除 <code>intoClause</code> 子句，那么 <code>select</code> 语句即是单纯的查询语句。</p><p><code>intoClause</code> 子句是写回功能的标记语句。</p><p><strong>下面是 <code>intoClause</code> 子句的定义：</strong></p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>intoClause
  : <span class="token keyword">INTO</span> ALIGNED? intoPath <span class="token punctuation">(</span>COMMA intoPath<span class="token punctuation">)</span><span class="token operator">*</span>
  <span class="token punctuation">;</span>

intoPath
  : fullPath
  <span class="token operator">|</span> nodeNameWithoutStar <span class="token punctuation">(</span>DOT nodeNameWithoutStar<span class="token punctuation">)</span><span class="token operator">*</span>
  <span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>intoPath</code>（目标序列）支持两种方式指定：</p><ul><li><p>以 <code>root</code> 开头的完整序列名指定</p><ul><li><p>例子：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1<span class="token punctuation">,</span> s1 
<span class="token keyword">into</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>t1<span class="token punctuation">,</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>t2 
<span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>不以 <code>root</code> 开头的部分序列名指定，此时目标序列由 <code>from</code> 子句中的序列前缀和<code>intoPath</code>拼接而成</p><ul><li><p>例子：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1<span class="token punctuation">,</span> s1 
<span class="token keyword">into</span> t1<span class="token punctuation">,</span> t2 
<span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这等价于</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1<span class="token punctuation">,</span> s1 
<span class="token keyword">into</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>t1<span class="token punctuation">,</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>t2 
<span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ul><p><strong>在<code>intoPath</code> 中，您还可以使用 <code>\${i}</code>风格的路径匹配符来表示<code>from</code>子句中的部分路径。</strong></p><p>比如，对于路径<code>root.sg1.d1.v1</code>而言，<code>\${1}</code>表示<code>sg1</code>，<code>\${2}</code>表示<code>d1</code>，<code>\${3}</code>表示<code>v1</code>。</p><ul><li><p>例子：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1<span class="token punctuation">,</span> s1<span class="token punctuation">,</span> s1
<span class="token keyword">into</span> \${<span class="token number">1</span>}_t1<span class="token punctuation">,</span> \${<span class="token number">2</span>}<span class="token punctuation">,</span> root<span class="token punctuation">.</span>\${<span class="token number">2</span>}<span class="token punctuation">.</span>\${<span class="token number">1</span>}<span class="token punctuation">.</span>t2
<span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这等价于</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1<span class="token punctuation">,</span> s1<span class="token punctuation">,</span> s1
<span class="token keyword">into</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>sg_t1<span class="token punctuation">,</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>d1<span class="token punctuation">,</span> root<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>t2
<span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p><strong>您可以通过关键词 <code>ALIGNED</code> 指定 <code>intoPath</code>（目标序列）是否为一个对齐时间序列。</strong></p><p>当目标序列存在时，您需要保证源序列和目标时间序列的类型匹配。</p><p>当目标序列不存在时，系统将自动创建一个新的目标对齐时间序列。</p><ul><li><p>例子：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1<span class="token punctuation">,</span> s2<span class="token punctuation">,</span> s3
<span class="token keyword">into</span> aligned root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d2<span class="token punctuation">.</span>t1<span class="token punctuation">,</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d2<span class="token punctuation">.</span>t2<span class="token punctuation">,</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d2<span class="token punctuation">.</span>t3
<span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="支持写回的查询类型" tabindex="-1"><a class="header-anchor" href="#支持写回的查询类型" aria-hidden="true">#</a> 支持写回的查询类型</h4><p><strong>注意，除了下述类型的查询，其余类型的查询（如<code>LAST</code>查询和原始聚合查询）都不被支持。</strong></p><ul><li><p>原始序列查询</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1<span class="token punctuation">,</span> s1 
<span class="token keyword">into</span> t1<span class="token punctuation">,</span> t2 
<span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>时间序列生成函数查询（UDF查询）</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1<span class="token punctuation">,</span> sin<span class="token punctuation">(</span>s2<span class="token punctuation">)</span> 
<span class="token keyword">into</span> t1<span class="token punctuation">,</span> t2 
<span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>数学表达式查询</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1<span class="token punctuation">,</span> sin<span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">,</span> s1 <span class="token operator">+</span> s3 
<span class="token keyword">into</span> t1<span class="token punctuation">,</span> t2<span class="token punctuation">,</span> t3 
<span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>嵌套查询</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">-</span>s1<span class="token punctuation">,</span> sin<span class="token punctuation">(</span>cos<span class="token punctuation">(</span>tan<span class="token punctuation">(</span>s1 <span class="token operator">+</span> s2 <span class="token operator">*</span> s3<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> cos<span class="token punctuation">(</span>s3<span class="token punctuation">)</span><span class="token punctuation">,</span> top_k<span class="token punctuation">(</span>s1 <span class="token operator">+</span> s3<span class="token punctuation">,</span> <span class="token string">&#39;k&#39;</span><span class="token operator">=</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span> 
<span class="token keyword">into</span> t1<span class="token punctuation">,</span> t2<span class="token punctuation">,</span> t3 
<span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Fill 查询</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1 
<span class="token keyword">into</span> fill_s1 
<span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1 
<span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">=</span> <span class="token number">10</span> 
fill<span class="token punctuation">(</span><span class="token keyword">float</span> <span class="token punctuation">[</span>linear<span class="token punctuation">,</span> <span class="token number">1</span>ms<span class="token punctuation">,</span> <span class="token number">1</span>ms<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Group By 查询</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span> 
<span class="token keyword">into</span> group_by_s1 
<span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1 
<span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span>ms<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Group By Fill 查询</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> last_value<span class="token punctuation">(</span>s1<span class="token punctuation">)</span> 
<span class="token keyword">into</span> group_by_fill_s1 
<span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1 
<span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span>ms<span class="token punctuation">)</span> 
fill <span class="token punctuation">(</span><span class="token keyword">float</span><span class="token punctuation">[</span>PREVIOUS<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="支持写回的查询子句" tabindex="-1"><a class="header-anchor" href="#支持写回的查询子句" aria-hidden="true">#</a> 支持写回的查询子句</h4><p><strong>注意，除了下述子句，其余查询子句（如 <code>DESC</code> / <code>SOFFSET</code> 等）都不被支持。</strong></p><ul><li><p>支持值过滤</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1<span class="token punctuation">,</span> s1 
<span class="token keyword">into</span> t1<span class="token punctuation">,</span> t2 
<span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1
<span class="token keyword">where</span> s1 <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">and</span> s2 <span class="token operator">&lt;</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>支持时间过滤</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1<span class="token punctuation">,</span> s1 
<span class="token keyword">into</span> t1<span class="token punctuation">,</span> t2 
<span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1
<span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>LIMIT / OFFSET</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1<span class="token punctuation">,</span> s1 
<span class="token keyword">into</span> t1<span class="token punctuation">,</span> t2 
<span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1
<span class="token keyword">limit</span> <span class="token number">5</span> <span class="token keyword">offset</span> <span class="token number">1000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h4 id="其他限制" tabindex="-1"><a class="header-anchor" href="#其他限制" aria-hidden="true">#</a> 其他限制</h4><ul><li><code>select</code>子句中的源序列和<code>into</code>子句中的目标序列数量必须相同</li><li><code>select</code>子句不支持带 <code>*</code>/<code>**</code> 查询</li><li><code>into</code>子句中的目标序列不必预先创建（可使用自动创建schema功能），但是当<code>into</code>子句中的目标序列已存在时，您需要保证<code>select</code>子句中的源序列和<code>into</code>子句中的目标序列的数据类型一致</li><li><code>into</code>子句中的目标序列必须是互不相同的</li><li><code>from</code>子句只允许有一列序列前缀</li><li><code>from</code>子句不支持带 <code>*</code>/<code>**</code></li><li>由于时间序列生成函数查询（UDF查询）/ 数学表达式查询 / 嵌套查询 尚不支持对齐时间序列（Aligned Timeseries），所以如果您在<code>select</code>子句中使用了上述查询，并且对应操作数包含对齐时间序列，会提示错误</li></ul><h3 id="权限" tabindex="-1"><a class="header-anchor" href="#权限" aria-hidden="true">#</a> 权限</h3><p>用户必须有下列权限才能正常执行查询写回语句：</p><ul><li>所有 <code>select</code> 子句中源序列的 <code>READ_TIMESERIES</code> 权限</li><li>所有 <code>into</code> 子句中目标序列 <code>INSERT_TIMESERIES</code> 权限</li></ul>`,30),k=n("h3",{id:"配置参数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#配置参数","aria-hidden":"true"},"#"),s(" 配置参数")],-1),v=n("ul",null,[n("li",null,[n("code",null,"select_into_insert_tablet_plan_row_limit"),s("：执行 select-into 语句时，一个 insert-tablet-plan 中可以处理的最大行数。 默认为 10000。")])],-1);function m(b,g){const a=t("RouterLink");return o(),p("div",null,[l(`

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

`),r,n("p",null,[s("更多用户权限相关的内容，请参考"),c(a,{to:"/zh/UserGuide/V0.13.x/Administration-Management/Administration.html"},{default:i(()=>[s("权限管理语句")]),_:1}),s("。")]),k,v])}const w=e(u,[["render",m],["__file","Select-Into.html.vue"]]);export{w as default};
