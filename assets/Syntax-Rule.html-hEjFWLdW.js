import{_ as t,r as d,o,c,a as r,d as e,e as n,b as a,w as i,f as l}from"./app-G4h01DGF.js";const p={},u=l(`<h1 id="语法约定" tabindex="-1"><a class="header-anchor" href="#语法约定" aria-hidden="true">#</a> 语法约定</h1><h2 id="字面值常量" tabindex="-1"><a class="header-anchor" href="#字面值常量" aria-hidden="true">#</a> 字面值常量</h2><p>该部分对 IoTDB 中支持的字面值常量进行说明，包括字符串常量、数值型常量、时间戳常量、布尔型常量和空值。</p><h3 id="字符串常量" tabindex="-1"><a class="header-anchor" href="#字符串常量" aria-hidden="true">#</a> 字符串常量</h3><p>在 IoTDB 中，字符串是由<strong>单引号（<code>&#39;</code>）或双引号（<code>&quot;</code>）字符括起来的字符序列</strong>。示例如下：</p><div class="language-Plain%20Text line-numbers-mode" data-ext="Plain%20Text"><pre class="language-Plain%20Text"><code>&#39;a string&#39;
&quot;another string&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景</h4><ul><li><p><code>INSERT</code> 或者 <code>SELECT</code> 中用于表达 <code>TEXT</code> 类型数据的场景。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code># insert 示例
insert into root.ln.wf02.wt02(timestamp,hardware) values(1, &#39;v1&#39;)
insert into root.ln.wf02.wt02(timestamp,hardware) values(2, &#39;\\\\&#39;)

+-----------------------------+--------------------------+
|                         Time|root.ln.wf02.wt02.hardware|
+-----------------------------+--------------------------+
|1970-01-01T08:00:00.001+08:00|                        v1|
+-----------------------------+--------------------------+
|1970-01-01T08:00:00.002+08:00|                        \\\\|
+-----------------------------+--------------------------+

# select 示例
select code from root.sg1.d1 where code in (&#39;string1&#39;, &#39;string2&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><code>LOAD</code> / <code>REMOVE</code> / <code>SETTLE</code> 指令中的文件路径。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code># load 示例
LOAD &#39;examplePath&#39;

# remove 示例
REMOVE &#39;examplePath&#39;

# SETTLE 示例
SETTLE &#39;examplePath&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>用户密码。</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code># 示例，write_pwd 即为用户密码
CREATE USER ln_write_user &#39;write_pwd&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>触发器和 UDF 中的类全类名，示例如下：</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code># 触发器示例，AS 后使用字符串表示类全类名
CREATE TRIGGER \`alert-listener-sg1d1s1\`
AFTER INSERT
ON root.sg1.d1.s1
AS &#39;org.apache.iotdb.db.engine.trigger.example.AlertListener&#39;
WITH (
  &#39;lo&#39; = &#39;0&#39;, 
  &#39;hi&#39; = &#39;100.0&#39;
)

# UDF 示例，AS 后使用字符串表示类全类名
CREATE FUNCTION example AS &#39;org.apache.iotdb.udf.UDTFExample&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Select 子句中可以为结果集中的值指定别名，别名可以被定义为字符串或者标识符，示例如下：</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>select s1 as &#39;temperature&#39;, s2 as &#39;speed&#39; from root.ln.wf01.wt01;

# 表头如下所示
+-----------------------------+-----------|-----+
|                         Time|temperature|speed|
+-----------------------------+-----------|-----+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>用于表示键值对，键值对的键和值可以被定义成常量（包括字符串）或者标识符，具体请参考键值对章节。</p></li></ul><h4 id="如何在字符串内使用引号" tabindex="-1"><a class="header-anchor" href="#如何在字符串内使用引号" aria-hidden="true">#</a> 如何在字符串内使用引号</h4><ul><li>在单引号引起的字符串内，双引号无需特殊处理。同理，在双引号引起的字符串内，单引号无需特殊处理。</li><li>在单引号引起的字符串里，可以通过双写单引号来表示一个单引号，即单引号 &#39; 可以表示为 &#39;&#39;。</li><li>在双引号引起的字符串里，可以通过双写双引号来表示一个双引号，即双引号 &quot; 可以表示为 &quot;&quot;。</li></ul><p>字符串内使用引号的示例如下：</p><div class="language-Plain%20Text line-numbers-mode" data-ext="Plain%20Text"><pre class="language-Plain%20Text"><code>&#39;string&#39;  // string
&#39;&quot;string&quot;&#39;  // &quot;string&quot;
&#39;&quot;&quot;string&quot;&quot;&#39;  // &quot;&quot;string&quot;&quot;
&#39;&#39;&#39;string&#39;  // &#39;string

&quot;string&quot; // string
&quot;&#39;string&#39;&quot;  // &#39;string&#39;
&quot;&#39;&#39;string&#39;&#39;&quot;  // &#39;&#39;string&#39;&#39;
&quot;&quot;&quot;string&quot;  // &quot;string
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数值型常量" tabindex="-1"><a class="header-anchor" href="#数值型常量" aria-hidden="true">#</a> 数值型常量</h3><p>数值型常量包括整型和浮点型。</p><p>整型常量是一个数字序列。可以以 <code>+</code> 或 <code>-</code> 开头表示正负。例如：<code>1</code>, <code>-1</code>。</p><p>带有小数部分或由科学计数法表示的为浮点型常量，例如：<code>.1</code>, <code>3.14</code>, <code>-2.23</code>, <code>+1.70</code>, <code>1.2E3</code>, <code>1.2E-3</code>, <code>-1.2E3</code>, <code>-1.2E-3</code>。</p><p>在 IoTDB 中，<code>INT32</code> 和 <code>INT64</code> 表示整数类型（计算是准确的），<code>FLOAT</code> 和 <code>DOUBLE</code> 表示浮点数类型（计算是近似的）。</p><p>在浮点上下文中可以使用整数，它会被解释为等效的浮点数。</p><h3 id="时间戳常量" tabindex="-1"><a class="header-anchor" href="#时间戳常量" aria-hidden="true">#</a> 时间戳常量</h3>`,19),v=l(`<p>特别地，<code>NOW()</code>表示语句开始执行时的服务端系统时间戳。</p><h3 id="布尔型常量" tabindex="-1"><a class="header-anchor" href="#布尔型常量" aria-hidden="true">#</a> 布尔型常量</h3><p>布尔值常量 <code>TRUE</code> 和 <code>FALSE</code> 分别等价于 <code>1</code> 和 <code>0</code>，它们对大小写不敏感。</p><h3 id="空值" tabindex="-1"><a class="header-anchor" href="#空值" aria-hidden="true">#</a> 空值</h3><p><code>NULL</code>值表示没有数据。<code>NULL</code>对大小写不敏感。</p><h2 id="标识符" tabindex="-1"><a class="header-anchor" href="#标识符" aria-hidden="true">#</a> 标识符</h2><h3 id="使用场景-1" tabindex="-1"><a class="header-anchor" href="#使用场景-1" aria-hidden="true">#</a> 使用场景</h3><p>在 IoTDB 中，触发器名称、UDF函数名、元数据模板名称、用户与角色名、连续查询标识、Pipe、PipeSink、键值对中的键和值、别名等可以作为标识符。</p><h3 id="约束" tabindex="-1"><a class="header-anchor" href="#约束" aria-hidden="true">#</a> 约束</h3><p>请注意，此处约束是标识符的通用约束，具体标识符可能还附带其它约束条件，如用户名限制字符数大于等于4，更严格的约束请参考具体标识符相关的说明文档。</p><p><strong>标识符命名有以下约束：</strong></p><ul><li><p>不使用反引号括起的标识符中，允许出现以下字符：</p><ul><li>[ 0-9 a-z A-Z _ ] （字母，数字，下划线）</li><li>[&#39;\\u2E80&#39;..&#39;\\u9FFF&#39;] （UNICODE 中文字符）</li></ul></li><li><p>标识符允许使用数字开头、不使用反引号括起的标识符不能全部为数字。</p></li><li><p>标识符是大小写敏感的。</p></li><li><p>标识符允许为关键字。</p></li></ul><p><strong>如果出现如下情况，标识符需要使用反引号进行引用：</strong></p><ul><li>标识符包含不允许的特殊字符。</li><li>标识符为实数。</li></ul><h3 id="如何在反引号引起的标识符中使用引号" tabindex="-1"><a class="header-anchor" href="#如何在反引号引起的标识符中使用引号" aria-hidden="true">#</a> 如何在反引号引起的标识符中使用引号</h3><p><strong>在反引号引起的标识符中可以直接使用单引号和双引号。</strong></p><p><strong>在用反引号引用的标识符中，可以通过双写反引号的方式使用反引号，即 \` 可以表示为 \`\`</strong>，示例如下：</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code># 创建模板 t1\`t
create schema template \`t1\`\`t\` 
(temperature FLOAT encoding=RLE, status BOOLEAN encoding=PLAIN compression=SNAPPY)

# 创建模板 t1&#39;t&quot;t
create schema template \`t1&#39;t&quot;t\` 
(temperature FLOAT encoding=RLE, status BOOLEAN encoding=PLAIN compression=SNAPPY)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="特殊情况示例" tabindex="-1"><a class="header-anchor" href="#特殊情况示例" aria-hidden="true">#</a> 特殊情况示例</h3><p>需要使用反引号进行引用的部分情况示例：</p><ul><li><p>触发器名称出现上述特殊情况时需使用反引号引用：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 创建触发器 alert.\`listener-sg1d1s1</span>
<span class="token keyword">CREATE</span> <span class="token keyword">TRIGGER</span> <span class="token identifier"><span class="token punctuation">\`</span>alert.\`\`listener-sg1d1s1<span class="token punctuation">\`</span></span>
<span class="token keyword">AFTER</span> <span class="token keyword">INSERT</span>
<span class="token keyword">ON</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>s1
<span class="token keyword">AS</span> <span class="token string">&#39;org.apache.iotdb.db.engine.trigger.example.AlertListener&#39;</span>
<span class="token keyword">WITH</span> <span class="token punctuation">(</span>
  <span class="token string">&#39;lo&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;hi&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;100.0&#39;</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>UDF 名称出现上述特殊情况时需使用反引号引用：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 创建名为 111 的 UDF，111 为实数，所以需要用反引号引用。</span>
<span class="token keyword">CREATE</span> <span class="token keyword">FUNCTION</span> <span class="token identifier"><span class="token punctuation">\`</span>111<span class="token punctuation">\`</span></span> <span class="token keyword">AS</span> <span class="token string">&#39;org.apache.iotdb.udf.UDTFExample&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>元数据模板名称出现上述特殊情况时需使用反引号引用：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 创建名为 111 的元数据模板，111 为实数，需要用反引号引用。</span>
<span class="token keyword">create</span> <span class="token keyword">schema</span> template <span class="token identifier"><span class="token punctuation">\`</span>111<span class="token punctuation">\`</span></span> 
<span class="token punctuation">(</span>temperature <span class="token keyword">FLOAT</span> encoding<span class="token operator">=</span>RLE<span class="token punctuation">,</span> <span class="token keyword">status</span> <span class="token keyword">BOOLEAN</span> encoding<span class="token operator">=</span>PLAIN compression<span class="token operator">=</span>SNAPPY<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>用户名、角色名出现上述特殊情况时需使用反引号引用，同时无论是否使用反引号引用，用户名、角色名中均不允许出现空格，具体请参考权限管理章节中的说明。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 创建用户 special\`user.</span>
<span class="token keyword">CREATE</span> <span class="token keyword">USER</span> <span class="token identifier"><span class="token punctuation">\`</span>special\`\`user.<span class="token punctuation">\`</span></span> <span class="token string">&#39;write_pwd&#39;</span>

<span class="token comment"># 创建角色 111</span>
<span class="token keyword">CREATE</span> ROLE <span class="token identifier"><span class="token punctuation">\`</span>111<span class="token punctuation">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>连续查询标识出现上述特殊情况时需使用反引号引用：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 创建连续查询 test.cq</span>
<span class="token keyword">CREATE</span> CONTINUOUS QUERY <span class="token identifier"><span class="token punctuation">\`</span>test.cq<span class="token punctuation">\`</span></span> 
<span class="token keyword">BEGIN</span> 
  <span class="token keyword">SELECT</span> max_value<span class="token punctuation">(</span>temperature<span class="token punctuation">)</span> 
  <span class="token keyword">INTO</span> temperature_max 
  <span class="token keyword">FROM</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token punctuation">.</span><span class="token operator">*</span> 
  <span class="token keyword">GROUP</span> <span class="token keyword">BY</span> <span class="token keyword">time</span><span class="token punctuation">(</span><span class="token number">10</span>s<span class="token punctuation">)</span> 
<span class="token keyword">END</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Pipe、PipeSink 名称出现上述特殊情况时需使用反引号引用：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token comment"># 创建 PipeSink test.*1</span>
<span class="token keyword">CREATE</span> PIPESINK <span class="token identifier"><span class="token punctuation">\`</span>test.*1<span class="token punctuation">\`</span></span> <span class="token keyword">AS</span> IoTDB <span class="token punctuation">(</span><span class="token string">&#39;ip&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;输入你的IP&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 创建 Pipe test.*2</span>
<span class="token keyword">CREATE</span> PIPE <span class="token identifier"><span class="token punctuation">\`</span>test.*2<span class="token punctuation">\`</span></span> <span class="token keyword">TO</span> <span class="token identifier"><span class="token punctuation">\`</span>test.*1<span class="token punctuation">\`</span></span> <span class="token keyword">FROM</span> 
<span class="token punctuation">(</span><span class="token keyword">select</span> <span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">from</span> root <span class="token keyword">WHERE</span> <span class="token keyword">time</span><span class="token operator">&gt;=</span>yyyy<span class="token operator">-</span>mm<span class="token operator">-</span>dd HH:MM:SS<span class="token punctuation">)</span> <span class="token keyword">WITH</span> <span class="token string">&#39;SyncDelOp&#39;</span> <span class="token operator">=</span> <span class="token string">&#39;true&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Select 子句中可以结果集中的值指定别名，别名可以被定义为字符串或者标识符，示例如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1 <span class="token keyword">as</span> temperature<span class="token punctuation">,</span> s2 <span class="token keyword">as</span> speed <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01<span class="token punctuation">;</span>
<span class="token comment"># 表头如下所示</span>
<span class="token operator">+</span><span class="token comment">-----------------------------+-----------+-----+</span>
<span class="token operator">|</span>                         <span class="token keyword">Time</span><span class="token operator">|</span>temperature<span class="token operator">|</span>speed<span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------------------------+-----------+-----+</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>用于表示键值对，键值对的键和值可以被定义成常量（包括字符串）或者标识符，具体请参考键值对章节。</p></li></ul><h2 id="关键字" tabindex="-1"><a class="header-anchor" href="#关键字" aria-hidden="true">#</a> 关键字</h2><p>关键字是在 SQL 具有特定含义的词，可以作为标识符。保留字是关键字的一个子集，保留字不能用于标识符。</p>`,23),m=e("h2",{id:"词法与文法详细定义",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#词法与文法详细定义","aria-hidden":"true"},"#"),n(" 词法与文法详细定义")],-1),k=e("p",null,"请阅读代码仓库中的词法和语法描述文件：",-1),h=e("p",null,[n("词法文件："),e("code",null,"antlr/src/main/antlr4/org/apache/iotdb/db/qp/sql/IoTDBSqlLexer.g4")],-1),b=e("p",null,[n("语法文件："),e("code",null,"antlr/src/main/antlr4/org/apache/iotdb/db/qp/sql/IoTDBSqlParser.g4")],-1);function g(w,E){const s=d("RouterLink");return o(),c("div",null,[r(`

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

`),u,e("p",null,[n("时间戳是一个数据到来的时间点，在 IoTDB 中分为绝对时间戳和相对时间戳。详细信息可参考 "),a(s,{to:"/zh/UserGuide/V1.2.x/Basic-Concept/Data-Type.html"},{default:i(()=>[n("数据类型文档")]),_:1}),n("。")]),v,e("p",null,[n("关于 IoTDB 的关键字列表，可以查看 "),a(s,{to:"/zh/UserGuide/V1.2.x/Reference/Keywords.html"},{default:i(()=>[n("关键字")]),_:1}),n(" 。")]),m,k,h,b])}const S=t(p,[["render",g],["__file","Syntax-Rule.html.vue"]]);export{S as default};
