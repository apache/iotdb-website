import{_ as p,r as c,o as i,c as l,a as d,d as e,e as n,b as o,w as t,f as s}from"./app-d263b843.js";const r={},u=s(`<h1 id="语法约定" tabindex="-1"><a class="header-anchor" href="#语法约定" aria-hidden="true">#</a> 语法约定</h1><h2 id="字面值常量" tabindex="-1"><a class="header-anchor" href="#字面值常量" aria-hidden="true">#</a> 字面值常量</h2><p>该部分对 IoTDB 中支持的字面值常量进行说明，包括字符串常量、数值型常量、时间戳常量、布尔型常量和空值。</p><h3 id="字符串常量" tabindex="-1"><a class="header-anchor" href="#字符串常量" aria-hidden="true">#</a> 字符串常量</h3><p>字符串是由单引号（<code>&#39;</code>）或双引号（<code>&quot;</code>）字符括起来的字符序列。示例如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;a string&#39;</span>
<span class="token string">&quot;another string&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>字符串字面值的使用场景：</p><ul><li><code>INSERT</code> 或者 <code>SELECT</code> 中用于表达 <code>TEXT</code> 类型数据的场景</li><li>SQL 中 UDF 和 Trigger 的 Java 类全类名</li><li><code>CREATE TRIGGER</code> 语句中描述触发器属性的键值对</li><li>UDF 函数输入参数中的属性</li><li><code>LOAD</code> / <code>REMOVE</code> / <code>SETTLE</code> 指令中的文件路径</li><li>用户密码</li></ul><p>通过以下几种方式可以在字符串内使用引号：</p><ul><li>在引号前使用转义符 (\\)。</li><li>在单引号括的的字符串内，双引号无需特殊处理。同理，在双引号括的的字符串内，单引号无需特殊处理。</li></ul><p>关于引号和转义字符的使用示例如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token string">&#39;string&#39;</span>  <span class="token comment">// string</span>
<span class="token string">&#39;&quot;string&quot;&#39;</span>  <span class="token comment">// &quot;string&quot;</span>
<span class="token string">&#39;&quot;&quot;string&quot;&quot;&#39;</span>  <span class="token comment">// &quot;&quot;string&quot;&quot;</span>
<span class="token string">&#39;str\\&#39;ing&#39;</span>  <span class="token comment">// str&#39;ing</span>
<span class="token string">&#39;\\&#39;string&#39;</span>  <span class="token comment">// &#39;string</span>
<span class="token string">&quot;string&quot;</span> <span class="token comment">// string</span>
<span class="token string">&quot;&#39;string&#39;&quot;</span>  <span class="token comment">// &#39;string&#39;</span>
<span class="token string">&quot;&#39;&#39;string&#39;&#39;&quot;</span>  <span class="token comment">// &#39;&#39;string&#39;&#39;</span>
<span class="token string">&quot;str\\&quot;ing&quot;</span>  <span class="token comment">// str&quot;ing</span>
<span class="token string">&quot;\\&quot;string&quot;</span>  <span class="token comment">// &quot;string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数值型常量" tabindex="-1"><a class="header-anchor" href="#数值型常量" aria-hidden="true">#</a> 数值型常量</h3><p>数值型常量包括整型和浮点型。</p><p>整型常量是一个数字序列。可以以 <code>+</code> 或 <code>-</code> 开头表示正负。例如：<code>1</code>, <code>-1</code>。</p><p>带有小数部分或由科学计数法表示的为浮点型常量，例如：<code>.1</code>, <code>3.14</code>, <code>-2.23</code>, <code>+1.70</code>, <code>1.2E3</code>, <code>1.2E-3</code>, <code>-1.2E3</code>, <code>-1.2E-3</code>。</p><p>在 IoTDB 中，<code>INT32</code> 和 <code>INT64</code> 表示整数类型（计算是准确的），<code>FLOAT</code> 和 <code>DOUBLE</code> 表示浮点数类型（计算是近似的）。</p><p>在浮点上下文中可以使用整数，它会被解释为等效的浮点数。</p><h3 id="时间戳常量" tabindex="-1"><a class="header-anchor" href="#时间戳常量" aria-hidden="true">#</a> 时间戳常量</h3>`,19),k=s(`<p>特别地，<code>NOW()</code>表示语句开始执行时的服务端系统时间戳。</p><h3 id="布尔型常量" tabindex="-1"><a class="header-anchor" href="#布尔型常量" aria-hidden="true">#</a> 布尔型常量</h3><p>布尔值常量 <code>TRUE</code> 和 <code>FALSE</code> 分别等价于 <code>1</code> 和 <code>0</code>，它们对大小写不敏感。</p><h3 id="空值" tabindex="-1"><a class="header-anchor" href="#空值" aria-hidden="true">#</a> 空值</h3><p><code>NULL</code>值表示没有数据。<code>NULL</code>对大小写不敏感。</p><h2 id="标识符" tabindex="-1"><a class="header-anchor" href="#标识符" aria-hidden="true">#</a> 标识符</h2><p>在 IoTDB 中，触发器名称、UDF函数名、元数据模板名称、用户与角色名等被称为标识符。</p><p>标识符命名有以下约束：</p><ul><li>在不含引用的标识符中，允许出现以下字符： <ul><li>[0-9 a-z A-Z _ : @ # $ { }] （字母，数字，部分特殊字符）</li><li>[&#39;\\u2E80&#39;..&#39;\\u9FFF&#39;] （UNICODE 中文字符）</li></ul></li><li>标识符允许使用数字开头、允许全部为数字（<strong>不推荐！</strong>）。</li><li>标识符是大小写敏感的。</li><li>注意：用户与角色名对大小写不敏感，并且不允许转义特殊字符。</li></ul><p>如果标识符要包含不允许的特殊字符，或者使用系统关键字，需要用反引号（\`）对标识符进行引用。反引号引用的标识符中出现反引号需要反斜杠转义。</p><p>示例如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>id  <span class="token comment">// 合法，被解析为 id</span>
ID  <span class="token comment">// 合法，被解析为 ID，与 id 不同</span>
id0  <span class="token comment">// 合法，被解析为 id0</span>
_id  <span class="token comment">// 合法，被解析为 _id</span>
<span class="token number">0</span>id  <span class="token comment">// 合法，被解析为 0id</span>
<span class="token number">233</span>  <span class="token comment">// 合法，被解析为 233 (不推荐！)</span>
ab<span class="token operator">!</span>  <span class="token comment">// 不合法，包含不被允许的特殊字符</span>
<span class="token identifier"><span class="token punctuation">\`</span>ab!<span class="token punctuation">\`</span></span>  <span class="token comment">// 合法，被解析为 ab!</span>
<span class="token identifier"><span class="token punctuation">\`</span>&quot;ab&quot;<span class="token punctuation">\`</span></span>  <span class="token comment">// 合法，被解析为 &quot;ab&quot;</span>
<span class="token identifier"><span class="token punctuation">\`</span>a<span class="token punctuation">\`</span></span>b<span class="token identifier"><span class="token punctuation">\`</span>  // 不合法，反引号应使用反斜杠进行转义
<span class="token punctuation">\`</span></span>a\\<span class="token punctuation">\`</span>b<span class="token identifier"><span class="token punctuation">\`</span>  // 合法，被解析为 a<span class="token punctuation">\`</span></span>b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="路径节点名" tabindex="-1"><a class="header-anchor" href="#路径节点名" aria-hidden="true">#</a> 路径节点名</h2><p>我们称一个路径中由 <code>.</code> 分割的部分叫做节点（node name）。</p><p>路径节点名的约束与标识符基本一致，但要额外注意以下几点：</p><ul><li><code>root</code> 只允许出现时间序列的开头，若其他层级出现 <code>root</code>，则无法解析，提示报错。</li><li>无论是否使用反引号引用，路径分隔符（<code>.</code>）都不能出现在路径节点名中。 如果路径节点名中一定要出现 <code>.</code> （不推荐！），需要用单引号或双引号括起。在这种情况下，为避免引发歧义，引号被系统视为节点名的一部分。</li><li>在反引号括起的路径节点名中，单引号和双引号需要使用反斜杠进行转义。</li><li>特别地，如果系统在 Windows 系统上部署，那么存储组层级名称是<strong>大小写不敏感</strong>的。例如，同时创建 <code>root.ln</code> 和 <code>root.LN</code> 是不被允许的。</li></ul><p>示例如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> TIMESERIES root<span class="token punctuation">.</span>a<span class="token punctuation">.</span>b<span class="token punctuation">.</span>s1<span class="token operator">+</span>s2<span class="token operator">/</span>s3<span class="token punctuation">.</span>c <span class="token keyword">WITH</span> DATATYPE<span class="token operator">=</span>INT32<span class="token punctuation">,</span> ENCODING<span class="token operator">=</span>RLE
<span class="token comment">// 解析失败！</span>

<span class="token keyword">CREATE</span> TIMESERIES root<span class="token punctuation">.</span>a<span class="token punctuation">.</span>b<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>s1+s2/s3<span class="token punctuation">\`</span></span><span class="token punctuation">.</span>c <span class="token keyword">WITH</span> DATATYPE<span class="token operator">=</span>INT32<span class="token punctuation">,</span> ENCODING<span class="token operator">=</span>RLE
<span class="token comment">// root.a.b.\`s1+s2/s3\`.c 将被解析为 Path[root, a, b, s1+s2/s3, c]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> TIMESERIES root<span class="token punctuation">.</span>a<span class="token punctuation">.</span>b<span class="token punctuation">.</span><span class="token keyword">select</span> <span class="token keyword">WITH</span> DATATYPE<span class="token operator">=</span>INT32<span class="token punctuation">,</span> ENCODING<span class="token operator">=</span>RLE
<span class="token comment">// 解析失败！</span>

<span class="token keyword">CREATE</span> TIMESERIES root<span class="token punctuation">.</span>a<span class="token punctuation">.</span>b<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>select<span class="token punctuation">\`</span></span> <span class="token keyword">WITH</span> DATATYPE<span class="token operator">=</span>INT32<span class="token punctuation">,</span> ENCODING<span class="token operator">=</span>RLE
<span class="token comment">// root.a.b.\`select\` 将被解析为 Path[root, a, b, select]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> TIMESERIES root<span class="token punctuation">.</span>a<span class="token punctuation">.</span>b<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>s1.s2<span class="token punctuation">\`</span></span><span class="token punctuation">.</span>c <span class="token keyword">WITH</span> DATATYPE<span class="token operator">=</span>INT32<span class="token punctuation">,</span> ENCODING<span class="token operator">=</span>RLE
<span class="token comment">// 解析失败！</span>

<span class="token keyword">CREATE</span> TIMESERIES root<span class="token punctuation">.</span>a<span class="token punctuation">.</span>b<span class="token punctuation">.</span><span class="token string">&quot;s1.s2&quot;</span><span class="token punctuation">.</span>c <span class="token keyword">WITH</span> DATATYPE<span class="token operator">=</span>INT32<span class="token punctuation">,</span> ENCODING<span class="token operator">=</span>RLE
<span class="token comment">// root.a.b.&quot;s1.s2&quot;.c 将被解析为 Path[root, a, b, &quot;s1.s2&quot;, c]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> TIMESERIES root<span class="token punctuation">.</span>a<span class="token punctuation">.</span>b<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>s1&quot;s2<span class="token punctuation">\`</span></span><span class="token punctuation">.</span>c <span class="token keyword">WITH</span> DATATYPE<span class="token operator">=</span>INT32<span class="token punctuation">,</span> ENCODING<span class="token operator">=</span>RLE
<span class="token comment">// 解析失败！</span>

<span class="token keyword">CREATE</span> TIMESERIES root<span class="token punctuation">.</span>a<span class="token punctuation">.</span>b<span class="token punctuation">.</span><span class="token identifier"><span class="token punctuation">\`</span>s1\\&quot;s2<span class="token punctuation">\`</span></span><span class="token punctuation">.</span>c <span class="token keyword">WITH</span> DATATYPE<span class="token operator">=</span>INT32<span class="token punctuation">,</span> ENCODING<span class="token operator">=</span>RLE
<span class="token comment">// root.a.b.\`s1\\&quot;s2\`.c 将被解析为 Path[root, a, b, s1\\&quot;s2, c]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关键字和保留字" tabindex="-1"><a class="header-anchor" href="#关键字和保留字" aria-hidden="true">#</a> 关键字和保留字</h2><p>关键字是在 SQL 具有特定含义的词，不能直接用于标识符或路径节点名，需要使用反引号进行转义。保留字是关键字的一个子集，保留字不能用于标识符或路径节点名（即使进行了转义）。</p>`,23),m=s('<h2 id="表达式" tabindex="-1"><a class="header-anchor" href="#表达式" aria-hidden="true">#</a> 表达式</h2><p>IoTDB 支持在 <code>select</code> 子句中执行由数字常量、时间序列、算数运算表达式和时间序列生成函数（包括用户自定义函数）组成的任意嵌套表达式。</p><p>注意：当参与表达式的路径节点名由纯数字、单引号、或双引号组成（不推荐！）时，必须使用反引号（`）括起，以免引起歧义。示例如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment">-- 存在时间序列： root.sg.d.0, root.sg.d.&#39;a&#39; 和 root.sg.&quot;d&quot;.b</span>\n<span class="token keyword">select</span> <span class="token number">0</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d  <span class="token comment">-- 存在歧义，解析失败</span>\n<span class="token keyword">select</span> <span class="token string">&#39;a&#39;</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d <span class="token comment">-- 存在歧义，解析失败</span>\n<span class="token keyword">select</span> <span class="token string">&quot;d&quot;</span><span class="token punctuation">.</span>b <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg <span class="token comment">-- 存在歧义，解析失败</span>\n<span class="token keyword">select</span> <span class="token identifier"><span class="token punctuation">`</span>0<span class="token punctuation">`</span></span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d  <span class="token comment">-- 对时间序列 root.sg.d.0 进行查询</span>\n<span class="token keyword">select</span> <span class="token identifier"><span class="token punctuation">`</span>0<span class="token punctuation">`</span></span> <span class="token operator">+</span> <span class="token number">0</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d <span class="token comment">-- 表达式，对时间序列 root.sg.d.0 的每一个查询结果加 0</span>\n<span class="token keyword">select</span> myudf<span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">`</span>&#39;a&#39;<span class="token punctuation">`</span></span><span class="token punctuation">,</span> <span class="token string">&#39;x&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d <span class="token comment">-- 表达式，调用函数 myudf，第一个参数为时间序列 root.sg.d.&#39;a&#39;，第二个参数为字符串常量 &#39;x&#39;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="引用符号" tabindex="-1"><a class="header-anchor" href="#引用符号" aria-hidden="true">#</a> 引用符号</h2><h3 id="双引号-、单引号" tabindex="-1"><a class="header-anchor" href="#双引号-、单引号" aria-hidden="true">#</a> 双引号（&quot;）、单引号（&#39;）</h3><p>双引号、单引号的使用场景如下：</p><ol><li>字符串字面值由单引号或双引号括起的字符串表示。</li><li>如果要在路径节点名中使用路径分隔符（<code>.</code>），则需要将路径节点名用单引号或双引号括起。在这种情况下，为避免引发歧义，引号被系统视为节点名的一部分。</li></ol><h3 id="反引号" tabindex="-1"><a class="header-anchor" href="#反引号" aria-hidden="true">#</a> 反引号（`）</h3><p>反引号的使用场景如下：</p><ol><li>在标识符中使用特殊字符时，标识符需要使用反引号括起。</li><li>在路径节点名中使用除路径分隔符之外的特殊字符时，路径节点名需要使用反引号括起。在这种情况下，反引号不会被系统视为节点名的一部分。</li></ol><h3 id="反斜杠" tabindex="-1"><a class="header-anchor" href="#反斜杠" aria-hidden="true">#</a> 反斜杠（\\）</h3><p>反斜杠的使用场景如下：</p><ul><li>在字符串常量中，出现双引号或单引号时，要使用反斜杠进行转义。 <ul><li>如：&quot;str\\&quot;ing&quot; 解析为 str&quot;ing、&#39;str\\&#39;ing&#39; 解析为 str&#39;ing。</li></ul></li><li>在标识符中，出现反引号时，要使用反斜杠进行转义。 <ul><li>如：`na\\`me` 解析为 na`me。</li></ul></li><li>在路径节点名中，出现双引号或单引号时，要使用反斜杠进行转义。注意，为了避免歧义，反斜杠会被系统视为节点名的一部分。 <ul><li>如：root.sg1.d1.&quot;a\\&quot;b&quot; 解析为 Path[root, sg1, d1, &quot;a\\&quot;b&quot;]、root.sg1.d1.&#39;a\\&#39;b&#39; 解析为 Path[root, sg1, d1, &#39;a\\&#39;b&#39;]、root.sg1.d1.`a\\&quot;b` 解析为 Path[root, sg1, d1, a\\&quot;b]、root.sg1.d1.`a\\&#39;b` 解析为 Path[root, sg1, d1, a\\&#39;b]。</li></ul></li></ul><h2 id="了解更多" tabindex="-1"><a class="header-anchor" href="#了解更多" aria-hidden="true">#</a> 了解更多</h2><p>请阅读代码仓库中的词法和语法描述文件：</p><p>词法文件：<code>antlr/src/main/antlr4/org/apache/iotdb/db/qp/sql/IoTDBSqlLexer.g4</code></p><p>语法文件：<code>antlr/src/main/antlr4/org/apache/iotdb/db/qp/sql/IoTDBSqlParser.g4</code></p>',18);function h(v,b){const a=c("RouterLink");return i(),l("div",null,[d(`

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

`),u,e("p",null,[n("时间戳是一个数据到来的时间点，在 IoTDB 中分为绝对时间戳和相对时间戳。详细信息可参考 "),o(a,{to:"/zh/UserGuide/V0.13.x/Data-Concept/Data-Type.html"},{default:t(()=>[n("数据类型文档")]),_:1}),n("。")]),k,e("p",null,[n("关于 IoTDB 的关键字和保留字列表，可以查看 "),o(a,{to:"/zh/UserGuide/V0.13.x/Reference/Keywords.html"},{default:t(()=>[n("关键字和保留字")]),_:1}),n(" 。")]),m])}const E=p(r,[["render",h],["__file","Syntax-Conventions.html.vue"]]);export{E as default};
