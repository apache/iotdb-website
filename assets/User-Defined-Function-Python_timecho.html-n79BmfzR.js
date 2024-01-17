import{_ as d,r,o as c,c as p,a as l,d as a,e,b as n,w as t,f as o}from"./app-1OOS2xKC.js";const i={},u=o('<h1 id="用户自定义函数-python" tabindex="-1"><a class="header-anchor" href="#用户自定义函数-python" aria-hidden="true">#</a> 用户自定义函数（Python）</h1><p>UDF（User Defined Function）即用户自定义函数。IoTDB 提供多种 Java 内建函数来满足您的计算需求，同时您还可以通过创建自定义 Python 函数来满足更多的计算需求。</p><p>根据此文档，您将会很快学会 Python UDF 的编写、注册、使用等操作。</p><h2 id="udf-类型" tabindex="-1"><a class="header-anchor" href="#udf-类型" aria-hidden="true">#</a> UDF 类型</h2><p>IoTDB 支持两种类型的 UDF 函数，如下表所示。</p><table><thead><tr><th>UDF 分类</th><th>描述</th></tr></thead><tbody><tr><td>UDTF（User Defined Timeseries Generating Function）</td><td>自定义时间序列生成函数。该类函数允许接收多条时间序列，最终会输出一条时间序列，生成的时间序列可以有任意多数量的数据点。</td></tr><tr><td>UDAF（User Defined Aggregation Function）</td><td>正在开发，敬请期待。</td></tr></tbody></table><h2 id="udf-依赖" tabindex="-1"><a class="header-anchor" href="#udf-依赖" aria-hidden="true">#</a> UDF 依赖</h2><ul><li>准备好 Python 运行环境，要求 Python 版本 &gt;= 3.7</li><li>开发 UDF 需要依赖 apache-iotdb 包：<code>pip3 install apache-iotdb</code></li></ul><h2 id="udtf-user-defined-timeseries-generating-function" tabindex="-1"><a class="header-anchor" href="#udtf-user-defined-timeseries-generating-function" aria-hidden="true">#</a> UDTF（User Defined Timeseries Generating Function）</h2><p>编写一个 UDTF 需要继承<code>UDTF</code>类，并至少实现<code>before_start</code>方法和一种<code>transform_row / transform_window</code>方法。</p><p>下表是所有可供用户实现的接口说明。</p><table><thead><tr><th style="text-align:left;">接口定义</th><th style="text-align:left;">描述</th><th>是否必须</th></tr></thead><tbody><tr><td style="text-align:left;"><code>def validate(self, validator: UDFParameterValidator):</code></td><td style="text-align:left;">在初始化方法<code>before_start</code>调用前执行，用于检测<code>UDFParameters</code>中用户输入的参数是否合法。</td><td>否</td></tr><tr><td style="text-align:left;"><code>def before_start( self, parameters: UDFParameters, configurations: UDTFConfigurations ):</code></td><td style="text-align:left;">初始化方法，在 UDTF 处理输入数据前，调用用户自定义的初始化行为。用户每执行一次 UDTF 查询，框架就会构造一个新的 UDF 类实例，该方法在每个 UDF 类实例被初始化时调用一次。在每一个 UDF 类实例的生命周期内，该方法只会被调用一次。</td><td>是</td></tr><tr><td style="text-align:left;"><code>def transform_row(self, row: Row, collector: PointCollector):</code></td><td style="text-align:left;">这个方法由框架调用。当您在<code>before_start</code>中选择以<code>RowByRowAccessStrategy</code>的策略消费原始数据时，这个数据处理方法就会被调用。输入参数以<code>Row</code>的形式传入，输出结果通过<code>PointCollector</code>输出。您需要在该方法内自行调用<code>collector</code>提供的数据收集方法，以决定最终的输出数据。</td><td>与下面的方法二选一</td></tr><tr><td style="text-align:left;"><code>def transform_window(self, row_window: RowWindow, collector: PointCollector):</code></td><td style="text-align:left;">这个方法由框架调用。当您在<code>before_start</code>中选择以<code>SlidingSizeWindowAccessStrategy</code>或者<code>SlidingTimeWindowAccessStrategy</code>的策略消费原始数据时，这个数据处理方法就会被调用。输入参数以<code>RowWindow</code>的形式传入，输出结果通过<code>PointCollector</code>输出。您需要在该方法内自行调用<code>collector</code>提供的数据收集方法，以决定最终的输出数据。</td><td>与上面的方法二选一</td></tr><tr><td style="text-align:left;"><code>def terminate(self, collector: PointCollector):</code></td><td style="text-align:left;">这个方法由框架调用。该方法会在所有的<code>transform</code>调用执行完成后，在<code>before_destory</code>方法执行前被调用。在一个 UDF 查询过程中，该方法会且只会调用一次。您需要在该方法内自行调用<code>collector</code>提供的数据收集方法，以决定最终的输出数据。</td><td>否</td></tr><tr><td style="text-align:left;"><code>def before_destroy(self): </code></td><td style="text-align:left;">UDTF 的结束方法。此方法由框架调用，并且只会被调用一次，即在处理完最后一条记录之后被调用。</td><td>否</td></tr></tbody></table>',12),h=o(`<h2 id="数据类型映射" tabindex="-1"><a class="header-anchor" href="#数据类型映射" aria-hidden="true">#</a> 数据类型映射</h2><table><thead><tr><th>IoTDB 中的数据类型</th><th>Python UDF 中的数据类型</th></tr></thead><tbody><tr><td>BOOLEAN</td><td>Boolean</td></tr><tr><td>INT32</td><td>Integer</td></tr><tr><td>INT64</td><td>BigInteger</td></tr><tr><td>FLOAT</td><td>Float</td></tr><tr><td>DOUBLE</td><td>Float</td></tr><tr><td>TEXT</td><td>Text</td></tr><tr><td>LONG</td><td>BigInteger</td></tr></tbody></table><h2 id="udf-注册" tabindex="-1"><a class="header-anchor" href="#udf-注册" aria-hidden="true">#</a> UDF 注册</h2><p>注册一个 UDF 可以按如下流程进行：</p><ol><li>实现一个完整的 UDF 类，假定这个类的存储在 DataNode 服务器的 <code>/home/iotdb/udf/udf.py</code> 路径下</li><li>使用以下 SQL 语句注册 UDF</li></ol><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">FUNCTION</span> <span class="token operator">&lt;</span>UDF<span class="token operator">-</span>NAME<span class="token operator">&gt;</span> <span class="token keyword">AS</span> <span class="token operator">&lt;</span>UDF<span class="token operator">-</span><span class="token keyword">FILE</span><span class="token operator">-</span>PATH<span class="token operator">&gt;</span> <span class="token keyword">LANGUAGE</span> PYTHON
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> <span class="token keyword">FUNCTION</span> udf1 <span class="token keyword">AS</span> <span class="token string">&#39;/home/iotdb/udf/udf.py&#39;</span> <span class="token keyword">LANGUAGE</span> PYTHON
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h3><p>由于 IoTDB 的 Python UDF 是借用 Java 反射技术动态装载的，因此您在装载过程中无需启停服务器。</p><p>UDF 函数名称是大小写不敏感的。</p><p>请不要给 UDF 函数注册一个内置函数的名字。使用内置函数的名字给 UDF 注册会失败。</p><h2 id="udf-卸载" tabindex="-1"><a class="header-anchor" href="#udf-卸载" aria-hidden="true">#</a> UDF 卸载</h2><p>卸载 UDF 的 SQL 语法如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">FUNCTION</span> <span class="token operator">&lt;</span>UDF<span class="token operator">-</span>NAME<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DROP</span> <span class="token keyword">FUNCTION</span> udf1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="udf-查询" tabindex="-1"><a class="header-anchor" href="#udf-查询" aria-hidden="true">#</a> UDF 查询</h2><p>UDF 的使用方法与普通内建函数的类似。</p><h3 id="支持的基础-sql-语法" tabindex="-1"><a class="header-anchor" href="#支持的基础-sql-语法" aria-hidden="true">#</a> 支持的基础 SQL 语法</h3><ul><li><code>SLIMIT</code> / <code>SOFFSET</code></li><li><code>LIMIT</code> / <code>OFFSET</code></li><li>支持值过滤</li><li>支持时间过滤</li></ul><h3 id="带-查询" tabindex="-1"><a class="header-anchor" href="#带-查询" aria-hidden="true">#</a> 带 * 查询</h3><p>假定现在有时间序列 <code>root.sg.d1.s1</code>和 <code>root.sg.d1.s2</code>。</p><ul><li><strong>执行<code>SELECT example(*) from root.sg.d1</code></strong></li></ul><p>那么结果集中将包括<code>example(root.sg.d1.s1)</code>和<code>example(root.sg.d1.s2)</code>的结果。</p><ul><li><strong>执行<code>SELECT example(s1, *) from root.sg.d1</code></strong></li></ul><p>那么结果集中将包括<code>example(root.sg.d1.s1, root.sg.d1.s1)</code>和<code>example(root.sg.d1.s1, root.sg.d1.s2)</code>的结果。</p><ul><li><strong>执行<code>SELECT example(*, *) from root.sg.d1</code></strong></li></ul><p>那么结果集中将包括<code>example(root.sg.d1.s1, root.sg.d1.s1)</code>，<code>example(root.sg.d1.s2, root.sg.d1.s1)</code>，<code>example(root.sg.d1.s1, root.sg.d1.s2)</code> 和 <code>example(root.sg.d1.s2, root.sg.d1.s2)</code>的结果。</p><h3 id="带自定义输入参数的查询" tabindex="-1"><a class="header-anchor" href="#带自定义输入参数的查询" aria-hidden="true">#</a> 带自定义输入参数的查询</h3><p>您可以在进行 UDF 查询的时候，向 UDF 传入任意数量的键值对参数。键值对中的键和值都需要被单引号或者双引号引起来。注意，键值对参数只能在所有时间序列后传入。下面是一组例子：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> example<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token string">&#39;key1&#39;</span><span class="token operator">=</span><span class="token string">&#39;value1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;key2&#39;</span><span class="token operator">=</span><span class="token string">&#39;value2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> example<span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">,</span> <span class="token string">&#39;key3&#39;</span><span class="token operator">=</span><span class="token string">&#39;value3&#39;</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> example<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">,</span> <span class="token string">&#39;key1&#39;</span><span class="token operator">=</span><span class="token string">&#39;value1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;key2&#39;</span><span class="token operator">=</span><span class="token string">&#39;value2&#39;</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="与其他查询的嵌套查询" tabindex="-1"><a class="header-anchor" href="#与其他查询的嵌套查询" aria-hidden="true">#</a> 与其他查询的嵌套查询</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> s1<span class="token punctuation">,</span> s2<span class="token punctuation">,</span> example<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span> <span class="token keyword">FROM</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> <span class="token operator">*</span><span class="token punctuation">,</span> example<span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1 <span class="token keyword">DISABLE</span> ALIGN<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> s1 <span class="token operator">*</span> example<span class="token punctuation">(</span><span class="token operator">*</span> <span class="token operator">/</span> s1 <span class="token operator">+</span> s2<span class="token punctuation">)</span> <span class="token keyword">FROM</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1<span class="token punctuation">;</span>
<span class="token keyword">SELECT</span> s1<span class="token punctuation">,</span> s2<span class="token punctuation">,</span> s1 <span class="token operator">+</span> example<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span><span class="token punctuation">,</span> s1 <span class="token operator">-</span> example<span class="token punctuation">(</span>s1 <span class="token operator">+</span> example<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span> <span class="token operator">/</span> s2<span class="token punctuation">)</span> <span class="token keyword">FROM</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看所有注册的-udf" tabindex="-1"><a class="header-anchor" href="#查看所有注册的-udf" aria-hidden="true">#</a> 查看所有注册的 UDF</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> FUNCTIONS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="用户权限管理" tabindex="-1"><a class="header-anchor" href="#用户权限管理" aria-hidden="true">#</a> 用户权限管理</h2><p>用户在使用 UDF 时会涉及到 3 种权限：</p><ul><li><code>CREATE_FUNCTION</code>：具备该权限的用户才被允许执行 UDF 注册操作</li><li><code>DROP_FUNCTION</code>：具备该权限的用户才被允许执行 UDF 卸载操作</li><li><code>READ_TIMESERIES</code>：具备该权限的用户才被允许使用 UDF 进行查询</li></ul>`,39);function k(g,f){const s=r("RouterLink");return c(),p("div",null,[l(`

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

`),u,a("p",null,[e("Python 版 UDF 接口语意和使用方式与 Java 版本 UDF 保持一致，具体可参考"),n(s,{to:"/zh/UserGuide/V1.2.x/stage/Operators-Functions/User-Defined-Function.html"},{default:t(()=>[e("Java UDF 使用方式")]),_:1}),e("。")]),h,a("p",null,[e("更多用户权限相关的内容，请参考 "),n(s,{to:"/zh/UserGuide/V1.2.x/stage/Administration-Management/Administration.html"},{default:t(()=>[e("权限管理语句")]),_:1}),e("。")])])}const F=d(i,[["render",k],["__file","User-Defined-Function-Python_timecho.html.vue"]]);export{F as default};
