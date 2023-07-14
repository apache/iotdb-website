import{_ as p,r as l,o as c,c as i,a as r,d as s,e as n,b as e,w as t,f as o}from"./app-d263b843.js";const u={},d=s("h1",{id:"写入数据",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#写入数据","aria-hidden":"true"},"#"),n(" 写入数据")],-1),k=s("h2",{id:"cli写入数据",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#cli写入数据","aria-hidden":"true"},"#"),n(" CLI写入数据")],-1),m=o(`<p>注：写入重复时间戳的数据则原时间戳数据被覆盖，可视为更新数据。</p><h3 id="使用-insert-语句" tabindex="-1"><a class="header-anchor" href="#使用-insert-语句" aria-hidden="true">#</a> 使用 INSERT 语句</h3><p>使用 INSERT 语句可以向指定的已经创建的一条或多条时间序列中插入数据。对于每一条数据，均由一个时间戳类型的时间戳和一个数值或布尔值、字符串类型的传感器采集值组成。</p><p>在本节的场景实例下，以其中的两个时间序列<code>root.ln.wf02.wt02.status</code>和<code>root.ln.wf02.wt02.hardware</code>为例 ，它们的数据类型分别为 BOOLEAN 和 TEXT。</p><p>单列数据插入示例代码如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>IoTDB <span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span><span class="token keyword">status</span><span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span>
IoTDB <span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span>hardware<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;v1&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>以上示例代码将长整型的 timestamp 以及值为 true 的数据插入到时间序列<code>root.ln.wf02.wt02.status</code>中和将长整型的 timestamp 以及值为”v1”的数据插入到时间序列<code>root.ln.wf02.wt02.hardware</code>中。执行成功后会返回执行时间，代表数据插入已完成。</p><blockquote><p>注意：在 IoTDB 中，TEXT 类型的数据单双引号都可以来表示，上面的插入语句是用的是双引号表示 TEXT 类型数据，下面的示例将使用单引号表示 TEXT 类型数据。</p></blockquote><p>INSERT 语句还可以支持在同一个时间点下多列数据的插入，同时向 2 时间点插入上述两个时间序列的值，多列数据插入示例代码如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>IoTDB <span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span> <span class="token keyword">status</span><span class="token punctuation">,</span> hardware<span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&#39;v2&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此外，INSERT 语句支持一次性插入多行数据，同时向 2 个不同时间点插入上述时间序列的值，示例代码如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>IoTDB <span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span> <span class="token keyword">status</span><span class="token punctuation">,</span> hardware<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&#39;v3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">&#39;v4&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>插入数据后我们可以使用 SELECT 语句简单查询已插入的数据。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>IoTDB <span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果如图所示。由查询结果可以看出，单列、多列数据的插入操作正确执行。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+--------------------------+------------------------+
|                         Time|root.ln.wf02.wt02.hardware|root.ln.wf02.wt02.status|
+-----------------------------+--------------------------+------------------------+
|1970-01-01T08:00:00.001+08:00|                        v1|                    true|
|1970-01-01T08:00:00.002+08:00|                        v2|                   false|
|1970-01-01T08:00:00.003+08:00|                        v3|                   false|
|1970-01-01T08:00:00.004+08:00|                        v4|                    true|
+-----------------------------+--------------------------+------------------------+
Total line number = 4
It costs 0.004s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，我们可以省略 timestamp 列，此时系统将使用当前的系统时间作为该数据点的时间戳，示例代码如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>IoTDB <span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">(</span><span class="token keyword">status</span><span class="token punctuation">,</span> hardware<span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&#39;v2&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>注意：</strong> 当一次插入多行数据时必须指定时间戳。</p><h3 id="向对齐时间序列插入数据" tabindex="-1"><a class="header-anchor" href="#向对齐时间序列插入数据" aria-hidden="true">#</a> 向对齐时间序列插入数据</h3><p>向对齐时间序列插入数据只需在SQL中增加<code>ALIGNED</code>关键词，其他类似。</p><p>示例代码如下：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>IoTDB <span class="token operator">&gt;</span> <span class="token keyword">create</span> aligned timeseries root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1<span class="token punctuation">(</span>s1 INT32<span class="token punctuation">,</span> s2 <span class="token keyword">DOUBLE</span><span class="token punctuation">)</span>
IoTDB <span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1<span class="token punctuation">(</span><span class="token keyword">time</span><span class="token punctuation">,</span> s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span> aligned <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
IoTDB <span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1<span class="token punctuation">(</span><span class="token keyword">time</span><span class="token punctuation">,</span> s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span> aligned <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
IoTDB <span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果如图所示。由查询结果可以看出，数据的插入操作正确执行。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+--------------+--------------+
|                         Time|root.sg1.d1.s1|root.sg1.d1.s2|
+-----------------------------+--------------+--------------+
|1970-01-01T08:00:00.001+08:00|             1|           1.0|
|1970-01-01T08:00:00.002+08:00|             2|           2.0|
|1970-01-01T08:00:00.003+08:00|             3|           3.0|
+-----------------------------+--------------+--------------+
Total line number = 3
It costs 0.004s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="原生接口写入" tabindex="-1"><a class="header-anchor" href="#原生接口写入" aria-hidden="true">#</a> 原生接口写入</h2><p>原生接口 （Session） 是目前IoTDB使用最广泛的系列接口，包含多种写入接口，适配不同的数据采集场景，性能高效且支持多语言。</p><h3 id="多语言接口写入" tabindex="-1"><a class="header-anchor" href="#多语言接口写入" aria-hidden="true">#</a> 多语言接口写入</h3>`,28),v=s("h3",{id:"java",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#java","aria-hidden":"true"},"#"),n(" Java")],-1),h=s("br",null,null,-1),b=s("h3",{id:"python",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#python","aria-hidden":"true"},"#"),n(" Python")],-1),w=s("h3",{id:"c",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#c","aria-hidden":"true"},"#"),n(" C++")],-1),g=s("h3",{id:"go",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#go","aria-hidden":"true"},"#"),n(" Go")],-1),y=s("h2",{id:"rest-api写入",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#rest-api写入","aria-hidden":"true"},"#"),n(" REST API写入")],-1),f=o(`<p>示例如下：</p><div class="language-JSON line-numbers-mode" data-ext="JSON"><pre class="language-JSON"><code>{
      &quot;timestamps&quot;: [
            1,
            2,
            3
      ],
      &quot;measurements&quot;: [
            &quot;temperature&quot;,
            &quot;status&quot;
      ],
      &quot;data_types&quot;: [
            &quot;FLOAT&quot;,
            &quot;BOOLEAN&quot;
      ],
      &quot;values&quot;: [
            [
                  1.1,
                  2.2,
                  3.3
            ],
            [
                  false,
                  true,
                  true
            ]
      ],
      &quot;is_aligned&quot;: false,
      &quot;device&quot;: &quot;root.ln.wf01.wt01&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mqtt写入" tabindex="-1"><a class="header-anchor" href="#mqtt写入" aria-hidden="true">#</a> MQTT写入</h2>`,3),T=s("h2",{id:"批量数据导入",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#批量数据导入","aria-hidden":"true"},"#"),n(" 批量数据导入")],-1),x=s("p",null,"针对于不同场景，IoTDB 为用户提供多种批量导入数据的操作方式，本章节向大家介绍最为常用的两种方式为 CSV文本形式的导入 和 TsFile文件形式的导入。",-1),I=s("h3",{id:"tsfile批量导入",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#tsfile批量导入","aria-hidden":"true"},"#"),n(" TsFile批量导入")],-1),q=s("h3",{id:"csv批量导入",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#csv批量导入","aria-hidden":"true"},"#"),n(" CSV批量导入")],-1),_=s("h1",{id:"删除数据",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#删除数据","aria-hidden":"true"},"#"),n(" 删除数据")],-1),E=o(`<p>在 JAVA 编程环境中，您可以使用 JDBC API 单条或批量执行 DELETE 语句。</p><h2 id="单传感器时间序列值删除" tabindex="-1"><a class="header-anchor" href="#单传感器时间序列值删除" aria-hidden="true">#</a> 单传感器时间序列值删除</h2><p>以测控 ln 集团为例，存在这样的使用场景：</p><p>wf02 子站的 wt02 设备在 2017-11-01 16:26:00 之前的供电状态出现多段错误，且无法分析其正确数据，错误数据影响了与其他设备的关联分析。此时，需要将此时间段前的数据删除。进行此操作的 SQL 语句为：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">where</span> <span class="token keyword">time</span><span class="token operator">&lt;=</span><span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">26</span>:<span class="token number">00</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果我们仅仅想要删除 2017 年内的在 2017-11-01 16:26:00 之前的数据，可以使用以下 SQL:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">where</span> <span class="token keyword">time</span><span class="token operator">&gt;=</span><span class="token number">2017</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">00</span>:<span class="token number">00</span> <span class="token operator">and</span> <span class="token keyword">time</span><span class="token operator">&lt;=</span><span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">26</span>:<span class="token number">00</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>IoTDB 支持删除一个时间序列任何一个时间范围内的所有时序点，用户可以使用以下 SQL 语句指定需要删除的时间范围：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">10</span>
<span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">10</span>
<span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">20</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">10</span>
<span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">20</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&gt;=</span> <span class="token number">10</span>
<span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">20</span>
<span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;=</span> <span class="token number">20</span>
<span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">=</span> <span class="token number">20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意，当前的删除语句不支持 where 子句后的时间范围为多个由 OR 连接成的时间区间。如下删除语句将会解析出错：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>delete from root.ln.wf02.wt02.status where time &gt; 4 or time &lt; 0
Msg: 303: Check metadata error: For delete statement, where clause can only contain atomic
expressions like : time &gt; XXX, time &lt;= XXX, or two atomic expressions connected by &#39;AND&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果 delete 语句中未指定 where 子句，则会删除时间序列中的所有数据。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="多传感器时间序列值删除" tabindex="-1"><a class="header-anchor" href="#多传感器时间序列值删除" aria-hidden="true">#</a> 多传感器时间序列值删除</h2>`,14),S=o(`<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">26</span>:<span class="token number">00</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>需要注意的是，当删除的路径不存在时，IoTDB 不会提示路径不存在，而是显示执行成功，因为 SQL 是一种声明式的编程方式，除非是语法错误、权限不足等，否则都不认为是错误，如下所示。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>IoTDB<span class="token operator">&gt;</span> <span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf03<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
Msg: The statement <span class="token operator">is</span> executed successfully<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="删除时间分区-实验性功能" tabindex="-1"><a class="header-anchor" href="#删除时间分区-实验性功能" aria-hidden="true">#</a> 删除时间分区 （实验性功能）</h2><p>您可以通过如下语句来删除某一个 database 下的指定时间分区：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">DELETE</span> <span class="token keyword">PARTITION</span> root<span class="token punctuation">.</span>ln <span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上例中的 0,1,2 为待删除时间分区的 id，您可以通过查看 IoTDB 的数据文件夹找到它，或者可以通过计算<code>timestamp / partitionInterval</code>（向下取整）,<br> 手动地将一个时间戳转换为对应的 id，其中的<code>partitionInterval</code>可以在 IoTDB 的配置文件中找到（如果您使用的版本支持时间分区）。</p><p>请注意该功能目前只是实验性的，如果您不是开发者，使用时请务必谨慎。</p>`,8);function D(A,B){const a=l("RouterLink");return c(),i("div",null,[r(`

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

`),d,k,s("p",null,[n("IoTDB 为用户提供多种插入实时数据的方式，例如在 "),e(a,{to:"/zh/UserGuide/V1.2.x/QuickStart/Command-Line-Interface.html"},{default:t(()=>[n("Cli/Shell 工具")]),_:1}),n(" 中直接输入插入数据的 INSERT 语句，或使用 Java API（标准 "),e(a,{to:"/zh/UserGuide/V1.2.x/API/Programming-JDBC.html"},{default:t(()=>[n("Java JDBC")]),_:1}),n(" 接口）单条或批量执行插入数据的 INSERT 语句。")]),s("p",null,[n("本节主要为您介绍实时数据接入的 INSERT 语句在场景中的实际使用示例，有关 INSERT SQL 语句的详细语法请参见本文 "),e(a,{to:"/zh/UserGuide/V1.2.x/Reference/SQL-Reference.html"},{default:t(()=>[n("INSERT 语句")]),_:1}),n(" 节。")]),m,s("ul",null,[s("li",null,[v,s("p",null,[n("使用Java接口写入之前，你需要先建立连接，参考 "),e(a,{to:"/zh/UserGuide/V1.2.x/API/Programming-Java-Native-API.html"},{default:t(()=>[n("Java原生接口")]),_:1}),n("。"),h,n(" 之后通过 "),e(a,{to:"/zh/UserGuide/V1.2.x/API/Programming-Java-Native-API.html#%E6%95%B0%E6%8D%AE%E5%86%99%E5%85%A5"},{default:t(()=>[n(" JAVA 数据操作接口（DML）")]),_:1}),n("写入。")])]),s("li",null,[b,s("p",null,[n("参考 "),e(a,{to:"/zh/UserGuide/V1.2.x/API/Programming-Python-Native-API.html#%E6%95%B0%E6%8D%AE%E5%86%99%E5%85%A5"},{default:t(()=>[n(" Python 数据操作接口（DML）")]),_:1})])]),s("li",null,[w,s("p",null,[n("参考 "),e(a,{to:"/zh/UserGuide/V1.2.x/API/Programming-Cpp-Native-API.html"},{default:t(()=>[n(" C++ 数据操作接口（DML）")]),_:1})])]),s("li",null,[g,s("p",null,[n("参考 "),e(a,{to:"/zh/UserGuide/V1.2.x/API/Programming-Go-Native-API.html"},{default:t(()=>[n("Go 原生接口")]),_:1})])])]),y,s("p",null,[n("参考 "),e(a,{to:"/zh/UserGuide/V1.2.x/API/RestServiceV1.html#inserttablet"},{default:t(()=>[n("insertTablet (v1)")]),_:1}),n(" or "),e(a,{to:"/zh/UserGuide/V1.2.x/API/RestServiceV2.html#inserttablet"},{default:t(()=>[n("insertTablet (v2)")]),_:1})]),f,s("p",null,[n("参考 "),e(a,{to:"/zh/UserGuide/V1.2.x/API/Programming-MQTT.html#%E5%86%85%E7%BD%AE-mqtt-%E6%9C%8D%E5%8A%A1"},{default:t(()=>[n("内置 MQTT 服务")]),_:1})]),T,x,I,s("p",null,[n("TsFile 是在 IoTDB 中使用的时间序列的文件格式，您可以通过CLI等工具直接将存有时间序列的一个或多个 TsFile 文件导入到另外一个正在运行的IoTDB实例中。具体操作方式请参考"),e(a,{to:"/zh/UserGuide/V1.2.x/Maintenance-Tools/Load-Tsfile.html"},{default:t(()=>[n("TsFile 导入工具")]),_:1}),n("，"),e(a,{to:"/zh/UserGuide/V1.2.x/Maintenance-Tools/TsFile-Load-Export-Tool.html"},{default:t(()=>[n("TsFile 导出工具")]),_:1}),n("。")]),q,s("p",null,[n("CSV 是以纯文本形式存储表格数据，您可以在CSV文件中写入多条格式化的数据，并批量的将这些数据导入到 IoTDB 中，在导入数据之前，建议在IoTDB中创建好对应的元数据信息。如果忘记创建元数据也不要担心，IoTDB 可以自动将CSV中数据推断为其对应的数据类型，前提是你每一列的数据类型必须唯一。除单个文件外，此工具还支持以文件夹的形式导入多个 CSV 文件，并且支持设置如时间精度等优化参数。具体操作方式请参考 "),e(a,{to:"/zh/UserGuide/V1.2.x/Maintenance-Tools/CSV-Tool.html"},{default:t(()=>[n("CSV 导入导出工具")]),_:1}),n("。")]),_,s("p",null,[n("用户使用 "),e(a,{to:"/zh/UserGuide/V1.2.x/Reference/SQL-Reference.html"},{default:t(()=>[n("DELETE 语句")]),_:1}),n(" 可以删除指定的时间序列中符合时间删除条件的数据。在删除数据时，用户可以选择需要删除的一个或多个时间序列、时间序列的前缀、时间序列带、*路径对某一个时间区间内的数据进行删除。")]),E,s("p",null,[n("当 ln 集团 wf02 子站的 wt02 设备在 2017-11-01 16:26:00 之前的供电状态和设备硬件版本都需要删除，此时可以使用含义更广的 "),e(a,{to:"/zh/UserGuide/V1.2.x/Basic-Concept/Data-Model-and-Terminology.html"},{default:t(()=>[n("路径模式（Path Pattern）")]),_:1}),n(" 进行删除操作，进行此操作的 SQL 语句为：")]),S])}const N=p(u,[["render",D],["__file","Write-Delete-Data.html.vue"]]);export{N as default};
