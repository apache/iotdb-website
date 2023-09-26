import{_ as e,o as i,c as n,a as s,f as d}from"./app-342a215c.js";const a={},r=d(`<h1 id="路径结点名" tabindex="-1"><a class="header-anchor" href="#路径结点名" aria-hidden="true">#</a> 路径结点名</h1><p>路径结点名是特殊的标识符，其还可以是通配符 * 或 **。在创建时间序列时，各层级的路径结点名不能为通配符 * 或 **。在查询语句中，可以用通配符 * 或 ** 来表示路径结点名，以匹配一层或多层路径。</p><h2 id="通配符" tabindex="-1"><a class="header-anchor" href="#通配符" aria-hidden="true">#</a> 通配符</h2><p><code>*</code>在路径中表示一层。例如<code>root.vehicle.*.sensor1</code>代表的是以<code>root.vehicle</code>为前缀，以<code>sensor1</code>为后缀，层次等于 4 层的路径。</p><p><code>**</code>在路径中表示是（<code>*</code>）+，即为一层或多层<code>*</code>。例如<code>root.vehicle.device1.**</code>代表的是<code>root.vehicle.device1.*</code>, <code>root.vehicle.device1.*.*</code>, <code>root.vehicle.device1.*.*.*</code>等所有以<code>root.vehicle.device1</code>为前缀路径的大于等于 4 层的路径；<code>root.vehicle.**.sensor1</code>代表的是以<code>root.vehicle</code>为前缀，以<code>sensor1</code>为后缀，层次大于等于 4 层的路径。</p><p>由于通配符 * 在查询表达式中也可以表示乘法符号，下述例子用于帮助您区分两种情况：</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code># 创建时间序列 root.sg.\`a*b\`
create timeseries root.sg.\`a*b\` with datatype=FLOAT,encoding=PLAIN;
# 请注意，如标识符部分所述，a*b包含特殊字符，需要用\`\`括起来使用
# create timeseries root.sg.a*b with datatype=FLOAT,encoding=PLAIN 是错误用法

# 创建时间序列 root.sg.a
create timeseries root.sg.a with datatype=FLOAT,encoding=PLAIN;

# 创建时间序列 root.sg.b
create timeseries root.sg.b with datatype=FLOAT,encoding=PLAIN;

# 查询时间序列 root.sg.\`a*b\`
select \`a*b\` from root.sg
# 其结果集表头为
|Time|root.sg.a*b|

# 查询时间序列 root.sg.a 和 root.sg.b的乘积
select a*b from root.sg
# 其结果集表头为
|Time|root.sg.a * root.sg.b|
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="标识符" tabindex="-1"><a class="header-anchor" href="#标识符" aria-hidden="true">#</a> 标识符</h2><p>路径结点名不为通配符时，使用方法和标识符一致。<strong>在 SQL 中需要使用反引号引用的路径结点，在结果集中也会用反引号引起。</strong></p><p>需要使用反引号进行引用的部分特殊情况示例：</p><ul><li>创建时间序列时，如下情况需要使用反引号对特殊节点名进行引用：</li></ul><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code># 路径结点名中包含特殊字符，时间序列各结点为[&quot;root&quot;,&quot;sg&quot;,&quot;www.\`baidu.com&quot;]
create timeseries root.sg.\`www.\`\`baidu.com\`.a with datatype=FLOAT,encoding=PLAIN;

# 路径结点名为实数
create timeseries root.sg.\`111\` with datatype=FLOAT,encoding=PLAIN;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>依次执行示例中语句后，执行 show timeseries，结果如下：</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code>+---------------------------+-----+-------------+--------+--------+-----------+----+----------+
|                 timeseries|alias|database|dataType|encoding|compression|tags|attributes|
+---------------------------+-----+-------------+--------+--------+-----------+----+----------+
|            root.sg.\`111\`.a| null|      root.sg|   FLOAT|   PLAIN|     SNAPPY|null|      null|
|root.sg.\`www.\`\`baidu.com\`.a| null|      root.sg|   FLOAT|   PLAIN|     SNAPPY|null|      null|
+---------------------------+-----+-------------+--------+--------+-----------+----+----------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>插入数据时，如下情况需要使用反引号对特殊节点名进行引用：</li></ul><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code># 路径结点名中包含特殊字符
insert into root.sg.\`www.\`\`baidu.com\`(timestamp, a) values(1, 2);

# 路径结点名为实数
insert into root.sg(timestamp, \`111\`) values (1, 2);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查询数据时，如下情况需要使用反引号对特殊节点名进行引用：</li></ul><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code># 路径结点名中包含特殊字符
select a from root.sg.\`www.\`\`baidu.com\`;

# 路径结点名为实数
select \`111\` from root.sg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果集分别为：</p><div class="language-SQL line-numbers-mode" data-ext="SQL"><pre class="language-SQL"><code># select a from root.sg.\`www.\`\`baidu.com\` 结果集
+-----------------------------+---------------------------+
|                         Time|root.sg.\`www.\`\`baidu.com\`.a|
+-----------------------------+---------------------------+
|1970-01-01T08:00:00.001+08:00|                        2.0|
+-----------------------------+---------------------------+

# select \`111\` from root.sg 结果集
+-----------------------------+-------------+
|                         Time|root.sg.\`111\`|
+-----------------------------+-------------+
|1970-01-01T08:00:00.001+08:00|          2.0|
+-----------------------------+-------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function o(l,c){return i(),n("div",null,[s(`

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

`),r])}const v=e(a,[["render",o],["__file","NodeName-In-Path.html.vue"]]);export{v as default};
