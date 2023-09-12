import{_ as a,r as s,o as r,c as l,a as c,d as i,e,b as o,f as n}from"./app-239fe767.js";const t={},u=n(`<h1 id="语法约定" tabindex="-1"><a class="header-anchor" href="#语法约定" aria-hidden="true">#</a> 语法约定</h1><h2 id="字面值常量" tabindex="-1"><a class="header-anchor" href="#字面值常量" aria-hidden="true">#</a> 字面值常量</h2><p>该部分对 IoTDB 中支持的字面值常量进行说明，包括字符串常量、数值型常量、时间戳常量、布尔型常量和空值。</p><h3 id="字符串常量" tabindex="-1"><a class="header-anchor" href="#字符串常量" aria-hidden="true">#</a> 字符串常量</h3><p>在 IoTDB 中，字符串是由<strong>单引号（<code>&#39;</code>）或双引号（<code>&quot;</code>）字符括起来的字符序列</strong>。示例如下：</p><div class="language-Plain%20Text line-numbers-mode" data-ext="Plain%20Text"><pre class="language-Plain%20Text"><code>&#39;a string&#39;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数值型常量" tabindex="-1"><a class="header-anchor" href="#数值型常量" aria-hidden="true">#</a> 数值型常量</h3><p>数值型常量包括整型和浮点型。</p><p>整型常量是一个数字序列。可以以 <code>+</code> 或 <code>-</code> 开头表示正负。例如：<code>1</code>, <code>-1</code>。</p><p>带有小数部分或由科学计数法表示的为浮点型常量，例如：<code>.1</code>, <code>3.14</code>, <code>-2.23</code>, <code>+1.70</code>, <code>1.2E3</code>, <code>1.2E-3</code>, <code>-1.2E3</code>, <code>-1.2E-3</code>。</p><p>在 IoTDB 中，<code>INT32</code> 和 <code>INT64</code> 表示整数类型（计算是准确的），<code>FLOAT</code> 和 <code>DOUBLE</code> 表示浮点数类型（计算是近似的）。</p><p>在浮点上下文中可以使用整数，它会被解释为等效的浮点数。</p><h3 id="时间戳常量" tabindex="-1"><a class="header-anchor" href="#时间戳常量" aria-hidden="true">#</a> 时间戳常量</h3>`,19),v={href:"https://iotdb.apache.org/zh/UserGuide/Master/Data-Concept/Data-Type.html",target:"_blank",rel:"noopener noreferrer"},m=n('<p>特别地，<code>NOW()</code>表示语句开始执行时的服务端系统时间戳。</p><h3 id="布尔型常量" tabindex="-1"><a class="header-anchor" href="#布尔型常量" aria-hidden="true">#</a> 布尔型常量</h3><p>布尔值常量 <code>TRUE</code> 和 <code>FALSE</code> 分别等价于 <code>1</code> 和 <code>0</code>，它们对大小写不敏感。</p><h3 id="空值" tabindex="-1"><a class="header-anchor" href="#空值" aria-hidden="true">#</a> 空值</h3><p><code>NULL</code>值表示没有数据。<code>NULL</code>对大小写不敏感。</p>',5);function h(p,b){const d=s("ExternalLinkIcon");return r(),l("div",null,[c(`

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

`),u,i("p",null,[e("时间戳是一个数据到来的时间点，在 IoTDB 中分为绝对时间戳和相对时间戳。详细信息可参考 "),i("a",v,[e("数据类型文档"),o(d)]),e("。")]),m])}const T=a(t,[["render",h],["__file","Literal-Values.html.vue"]]);export{T as default};
