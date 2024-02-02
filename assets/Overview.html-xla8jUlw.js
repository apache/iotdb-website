import{_ as o,r as i,o as p,c,a as r,d as n,e as s,b as e,w as t,f as l}from"./app-a-RiV1so.js";const d={},u=l(`<h1 id="概述" tabindex="-1"><a class="header-anchor" href="#概述" aria-hidden="true">#</a> 概述</h1><p>在 IoTDB 中，使用 <code>SELECT</code> 语句从一条或多条时间序列中查询数据。</p><h2 id="语法定义" tabindex="-1"><a class="header-anchor" href="#语法定义" aria-hidden="true">#</a> 语法定义</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token punctuation">[</span><span class="token keyword">LAST</span><span class="token punctuation">]</span> selectExpr <span class="token punctuation">[</span><span class="token punctuation">,</span> selectExpr<span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">[</span><span class="token keyword">INTO</span> intoItem <span class="token punctuation">[</span><span class="token punctuation">,</span> intoItem<span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">]</span>
    <span class="token keyword">FROM</span> prefixPath <span class="token punctuation">[</span><span class="token punctuation">,</span> prefixPath<span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token punctuation">[</span><span class="token keyword">WHERE</span> whereCondition<span class="token punctuation">]</span>
    <span class="token punctuation">[</span><span class="token keyword">GROUP</span> <span class="token keyword">BY</span> {
        <span class="token punctuation">(</span><span class="token punctuation">[</span>startTime<span class="token punctuation">,</span> endTime<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">interval</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> slidingStep<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">|</span>
        <span class="token keyword">LEVEL</span> <span class="token operator">=</span> levelNum <span class="token punctuation">[</span><span class="token punctuation">,</span> levelNum<span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token operator">|</span>
        TAGS<span class="token punctuation">(</span>tagKey <span class="token punctuation">[</span><span class="token punctuation">,</span> tagKey<span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token punctuation">)</span>
    }<span class="token punctuation">]</span>
    <span class="token punctuation">[</span><span class="token keyword">HAVING</span> havingCondition<span class="token punctuation">]</span>
    <span class="token punctuation">[</span><span class="token keyword">ORDER</span> <span class="token keyword">BY</span> sortKey {<span class="token keyword">ASC</span> <span class="token operator">|</span> <span class="token keyword">DESC</span>}<span class="token punctuation">]</span>
    <span class="token punctuation">[</span>FILL <span class="token punctuation">(</span>{PREVIOUS <span class="token operator">|</span> LINEAR <span class="token operator">|</span> constant}<span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token punctuation">[</span>SLIMIT seriesLimit<span class="token punctuation">]</span> <span class="token punctuation">[</span>SOFFSET seriesOffset<span class="token punctuation">]</span>
    <span class="token punctuation">[</span><span class="token keyword">LIMIT</span> rowLimit<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">OFFSET</span> rowOffset<span class="token punctuation">]</span>
    <span class="token punctuation">[</span>ALIGN <span class="token keyword">BY</span> {<span class="token keyword">TIME</span> <span class="token operator">|</span> DEVICE}<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="语法说明" tabindex="-1"><a class="header-anchor" href="#语法说明" aria-hidden="true">#</a> 语法说明</h2><h3 id="select-子句" tabindex="-1"><a class="header-anchor" href="#select-子句" aria-hidden="true">#</a> <code>SELECT</code> 子句</h3>`,6),k=n("li",null,[n("code",null,"SELECT"),s(" 子句指定查询的输出，由若干个 "),n("code",null,"selectExpr"),s(" 组成。")],-1),m=n("li",null,[s("每个 "),n("code",null,"selectExpr"),s(" 定义查询结果中的一列或多列，它是一个由时间序列路径后缀、常量、函数和运算符组成的表达式。")],-1),v=n("li",null,[s("支持使用"),n("code",null,"AS"),s("为查询结果集中的列指定别名。")],-1),h=n("code",null,"SELECT",-1),b=n("code",null,"LAST",-1),f=n("h3",{id:"into-子句",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#into-子句","aria-hidden":"true"},"#"),s(),n("code",null,"INTO"),s(" 子句")],-1),w=n("li",null,[n("code",null,"SELECT INTO"),s(" 用于将查询结果写入一系列指定的时间序列中。"),n("code",null,"INTO"),s(" 子句指定了查询结果写入的目标时间序列。")],-1),T=l('<h3 id="from-子句" tabindex="-1"><a class="header-anchor" href="#from-子句" aria-hidden="true">#</a> <code>FROM</code> 子句</h3><ul><li><code>FROM</code> 子句包含要查询的一个或多个时间序列的路径前缀，支持使用通配符。</li><li>在执行查询时，会将 <code>FROM</code> 子句中的路径前缀和 <code>SELECT</code> 子句中的后缀进行拼接得到完整的查询目标序列。</li></ul><h3 id="where-子句" tabindex="-1"><a class="header-anchor" href="#where-子句" aria-hidden="true">#</a> <code>WHERE</code> 子句</h3>',3),g=n("li",null,[n("code",null,"WHERE"),s(" 子句指定了对数据行的筛选条件，由一个 "),n("code",null,"whereCondition"),s(" 组成。")],-1),y=n("li",null,[n("code",null,"whereCondition"),s(" 是一个逻辑表达式，对于要选择的每一行，其计算结果为真。如果没有 "),n("code",null,"WHERE"),s(" 子句，将选择所有行。")],-1),_=n("li",null,[s("在 "),n("code",null,"whereCondition"),s(" 中，可以使用除聚合函数之外的任何 IOTDB 支持的函数和运算符。")],-1),x=n("h3",{id:"group-by-子句",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#group-by-子句","aria-hidden":"true"},"#"),s(),n("code",null,"GROUP BY"),s(" 子句")],-1),S=n("li",null,[n("code",null,"GROUP BY"),s(" 子句指定对序列进行分段或分组聚合的方式。")],-1),I=n("li",null,[s("分段聚合是指按照时间维度，针对同时间序列中不同数据点之间的时间关系，对数据在行的方向进行分段，每个段得到一个聚合值。目前仅支持"),n("strong",null,"按时间区间分段"),s("，未来将支持更多分段方式。")],-1),E=n("li",null,[s("分组聚合是指针对不同时间序列，在时间序列的潜在业务属性上分组，每个组包含若干条时间序列，每个组得到一个聚合值。支持"),n("strong",null,"按路径层级分组"),s("和"),n("strong",null,"按序列标签分组"),s("两种分组方式。")],-1),L=n("li",null,"分段聚合和分组聚合可以混合使用。",-1),O=n("h3",{id:"having-子句",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#having-子句","aria-hidden":"true"},"#"),s(),n("code",null,"HAVING"),s(" 子句")],-1),A=l("<li><code>HAVING</code> 子句指定了对聚合结果的筛选条件，由一个 <code>havingCondition</code> 组成。</li><li><code>havingCondition</code> 是一个逻辑表达式，对于要选择的聚合结果，其计算结果为真。如果没有 <code>HAVING</code> 子句，将选择所有聚合结果。</li><li><code>HAVING</code> 要和聚合函数以及 <code>GROUP BY</code> 子句一起使用。</li>",3),C=l('<h3 id="order-by-子句" tabindex="-1"><a class="header-anchor" href="#order-by-子句" aria-hidden="true">#</a> <code>ORDER BY</code> 子句</h3><ul><li><code>ORDER BY</code> 子句用于指定结果集的排序方式。</li><li>按时间对齐模式下：默认按照时间戳大小升序排列，可以通过 <code>ORDER BY TIME DESC</code> 指定结果集按照时间戳大小降序排列。</li><li>按设备对齐模式下：先按照设备排列，每个设备内部按照时间戳大小升序排列，暂不支持使用 <code>ORDER BY</code> 子句。</li></ul><h3 id="fill-子句" tabindex="-1"><a class="header-anchor" href="#fill-子句" aria-hidden="true">#</a> <code>FILL</code> 子句</h3>',3),R=n("li",null,[n("code",null,"FILL"),s(" 子句用于指定数据缺失情况下的填充模式，允许用户按照特定的方法对任何查询的结果集填充空值。")],-1),D=n("h3",{id:"slimit-和-soffset-子句",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#slimit-和-soffset-子句","aria-hidden":"true"},"#"),s(),n("code",null,"SLIMIT"),s(" 和 "),n("code",null,"SOFFSET"),s(" 子句")],-1),V=n("li",null,[n("code",null,"SLIMIT"),s(" 指定查询结果的列数，"),n("code",null,"SOFFSET"),s(" 指定查询结果显示的起始列位置。"),n("code",null,"SLIMIT"),s(" 和 "),n("code",null,"SOFFSET"),s(" 仅用于控制值列，对时间列和设备列无效。")],-1),G=n("h3",{id:"limit-和-offset-子句",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#limit-和-offset-子句","aria-hidden":"true"},"#"),s(),n("code",null,"LIMIT"),s(" 和 "),n("code",null,"OFFSET"),s(" 子句")],-1),N=n("li",null,[n("code",null,"LIMIT"),s(" 指定查询结果的行数，"),n("code",null,"OFFSET"),s(" 指定查询结果显示的起始行位置。")],-1),Q=n("h3",{id:"align-by-子句",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#align-by-子句","aria-hidden":"true"},"#"),s(),n("code",null,"ALIGN BY"),s(" 子句")],-1),F=n("li",null,[s("查询结果集默认"),n("strong",null,"按时间对齐"),s("，包含一列时间列和若干个值列，每一行数据各列的时间戳相同。")],-1),B=n("li",null,[s("除按时间对齐之外，还支持"),n("strong",null,"按设备对齐"),s("，查询结果集包含一列时间列、一列设备列和若干个值列。")],-1),q=l(`<h2 id="sql-示例" tabindex="-1"><a class="header-anchor" href="#sql-示例" aria-hidden="true">#</a> SQL 示例</h2><h3 id="示例1-根据一个时间区间选择一列数据" tabindex="-1"><a class="header-anchor" href="#示例1-根据一个时间区间选择一列数据" aria-hidden="true">#</a> 示例1：根据一个时间区间选择一列数据</h3><p>SQL 语句为：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> temperature <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">08</span>:<span class="token number">00.000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其含义为：</p><p>被选择的设备为 ln 集团 wf01 子站 wt01 设备；被选择的时间序列为温度传感器（temperature）；该语句要求选择出该设备在 “2017-11-01T00:08:00.000” 时间点以前的所有温度传感器的值。</p><p>该 SQL 语句的执行结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-----------------------------+
|                         Time|root.ln.wf01.wt01.temperature|
+-----------------------------+-----------------------------+
|2017-11-01T00:00:00.000+08:00|                        25.96|
|2017-11-01T00:01:00.000+08:00|                        24.36|
|2017-11-01T00:02:00.000+08:00|                        20.09|
|2017-11-01T00:03:00.000+08:00|                        20.18|
|2017-11-01T00:04:00.000+08:00|                        21.13|
|2017-11-01T00:05:00.000+08:00|                        22.72|
|2017-11-01T00:06:00.000+08:00|                        20.71|
|2017-11-01T00:07:00.000+08:00|                        21.45|
+-----------------------------+-----------------------------+
Total line number = 8
It costs 0.026s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例2-根据一个时间区间选择多列数据" tabindex="-1"><a class="header-anchor" href="#示例2-根据一个时间区间选择多列数据" aria-hidden="true">#</a> 示例2：根据一个时间区间选择多列数据</h3><p>SQL 语句为：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token keyword">status</span><span class="token punctuation">,</span> temperature <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">05</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">12</span>:<span class="token number">00.000</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其含义为：</p><p>被选择的设备为 ln 集团 wf01 子站 wt01 设备；被选择的时间序列为供电状态（status）和温度传感器（temperature）；该语句要求选择出 “2017-11-01T00:05:00.000” 至 “2017-11-01T00:12:00.000” 之间的所选时间序列的值。</p><p>该 SQL 语句的执行结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+------------------------+-----------------------------+
|                         Time|root.ln.wf01.wt01.status|root.ln.wf01.wt01.temperature|
+-----------------------------+------------------------+-----------------------------+
|2017-11-01T00:06:00.000+08:00|                   false|                        20.71|
|2017-11-01T00:07:00.000+08:00|                   false|                        21.45|
|2017-11-01T00:08:00.000+08:00|                   false|                        22.58|
|2017-11-01T00:09:00.000+08:00|                   false|                        20.98|
|2017-11-01T00:10:00.000+08:00|                    true|                        25.52|
|2017-11-01T00:11:00.000+08:00|                   false|                        22.91|
+-----------------------------+------------------------+-----------------------------+
Total line number = 6
It costs 0.018s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例3-按照多个时间区间选择同一设备的多列数据" tabindex="-1"><a class="header-anchor" href="#示例3-按照多个时间区间选择同一设备的多列数据" aria-hidden="true">#</a> 示例3：按照多个时间区间选择同一设备的多列数据</h3><p>IoTDB 支持在一次查询中指定多个时间区间条件，用户可以根据需求随意组合时间区间条件。例如，</p><p>SQL 语句为：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token keyword">status</span><span class="token punctuation">,</span> temperature <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token keyword">where</span> <span class="token punctuation">(</span><span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">05</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">12</span>:<span class="token number">00.000</span><span class="token punctuation">)</span> <span class="token operator">or</span> <span class="token punctuation">(</span><span class="token keyword">time</span> <span class="token operator">&gt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">35</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">37</span>:<span class="token number">00.000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其含义为：</p><p>被选择的设备为 ln 集团 wf01 子站 wt01 设备；被选择的时间序列为“供电状态（status）”和“温度传感器（temperature）”；该语句指定了两个不同的时间区间，分别为“2017-11-01T00:05:00.000 至 2017-11-01T00:12:00.000”和“2017-11-01T16:35:00.000 至 2017-11-01T16:37:00.000”；该语句要求选择出满足任一时间区间的被选时间序列的值。</p><p>该 SQL 语句的执行结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+------------------------+-----------------------------+
|                         Time|root.ln.wf01.wt01.status|root.ln.wf01.wt01.temperature|
+-----------------------------+------------------------+-----------------------------+
|2017-11-01T00:06:00.000+08:00|                   false|                        20.71|
|2017-11-01T00:07:00.000+08:00|                   false|                        21.45|
|2017-11-01T00:08:00.000+08:00|                   false|                        22.58|
|2017-11-01T00:09:00.000+08:00|                   false|                        20.98|
|2017-11-01T00:10:00.000+08:00|                    true|                        25.52|
|2017-11-01T00:11:00.000+08:00|                   false|                        22.91|
|2017-11-01T16:35:00.000+08:00|                    true|                        23.44|
|2017-11-01T16:36:00.000+08:00|                   false|                        21.98|
|2017-11-01T16:37:00.000+08:00|                   false|                        21.93|
+-----------------------------+------------------------+-----------------------------+
Total line number = 9
It costs 0.018s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例4-按照多个时间区间选择不同设备的多列数据" tabindex="-1"><a class="header-anchor" href="#示例4-按照多个时间区间选择不同设备的多列数据" aria-hidden="true">#</a> 示例4：按照多个时间区间选择不同设备的多列数据</h3><p>该系统支持在一次查询中选择任意列的数据，也就是说，被选择的列可以来源于不同的设备。例如，SQL 语句为：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> wf01<span class="token punctuation">.</span>wt01<span class="token punctuation">.</span><span class="token keyword">status</span><span class="token punctuation">,</span> wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span>hardware <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln <span class="token keyword">where</span> <span class="token punctuation">(</span><span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">05</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">12</span>:<span class="token number">00.000</span><span class="token punctuation">)</span> <span class="token operator">or</span> <span class="token punctuation">(</span><span class="token keyword">time</span> <span class="token operator">&gt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">35</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">37</span>:<span class="token number">00.000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其含义为：</p><p>被选择的时间序列为 “ln 集团 wf01 子站 wt01 设备的供电状态” 以及 “ln 集团 wf02 子站 wt02 设备的硬件版本”；该语句指定了两个时间区间，分别为 “2017-11-01T00:05:00.000 至 2017-11-01T00:12:00.000” 和 “2017-11-01T16:35:00.000 至 2017-11-01T16:37:00.000”；该语句要求选择出满足任意时间区间的被选时间序列的值。</p><p>该 SQL 语句的执行结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+------------------------+--------------------------+
|                         Time|root.ln.wf01.wt01.status|root.ln.wf02.wt02.hardware|
+-----------------------------+------------------------+--------------------------+
|2017-11-01T00:06:00.000+08:00|                   false|                        v1|
|2017-11-01T00:07:00.000+08:00|                   false|                        v1|
|2017-11-01T00:08:00.000+08:00|                   false|                        v1|
|2017-11-01T00:09:00.000+08:00|                   false|                        v1|
|2017-11-01T00:10:00.000+08:00|                    true|                        v2|
|2017-11-01T00:11:00.000+08:00|                   false|                        v1|
|2017-11-01T16:35:00.000+08:00|                    true|                        v2|
|2017-11-01T16:36:00.000+08:00|                   false|                        v1|
|2017-11-01T16:37:00.000+08:00|                   false|                        v1|
+-----------------------------+------------------------+--------------------------+
Total line number = 9
It costs 0.014s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="示例5-根据时间降序返回结果集" tabindex="-1"><a class="header-anchor" href="#示例5-根据时间降序返回结果集" aria-hidden="true">#</a> 示例5：根据时间降序返回结果集</h3><p>IoTDB 支持 <code>order by time</code> 语句，用于对结果按照时间进行降序展示。例如，SQL 语句为：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token keyword">order</span> <span class="token keyword">by</span> <span class="token keyword">time</span> <span class="token keyword">desc</span> <span class="token keyword">limit</span> <span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>语句执行的结果为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+--------------------------+------------------------+-----------------------------+------------------------+
|                         Time|root.ln.wf02.wt02.hardware|root.ln.wf02.wt02.status|root.ln.wf01.wt01.temperature|root.ln.wf01.wt01.status|
+-----------------------------+--------------------------+------------------------+-----------------------------+------------------------+
|2017-11-07T23:59:00.000+08:00|                        v1|                   false|                        21.07|                   false|
|2017-11-07T23:58:00.000+08:00|                        v1|                   false|                        22.93|                   false|
|2017-11-07T23:57:00.000+08:00|                        v2|                    true|                        24.39|                    true|
|2017-11-07T23:56:00.000+08:00|                        v2|                    true|                        24.44|                    true|
|2017-11-07T23:55:00.000+08:00|                        v2|                    true|                         25.9|                    true|
|2017-11-07T23:54:00.000+08:00|                        v1|                   false|                        22.52|                   false|
|2017-11-07T23:53:00.000+08:00|                        v2|                    true|                        24.58|                    true|
|2017-11-07T23:52:00.000+08:00|                        v1|                   false|                        20.18|                   false|
|2017-11-07T23:51:00.000+08:00|                        v1|                   false|                        22.24|                   false|
|2017-11-07T23:50:00.000+08:00|                        v2|                    true|                         23.7|                    true|
+-----------------------------+--------------------------+------------------------+-----------------------------+------------------------+
Total line number = 10
It costs 0.016s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用方式" tabindex="-1"><a class="header-anchor" href="#使用方式" aria-hidden="true">#</a> 使用方式</h2><p>数据查询语句支持在 SQL 命令行终端、JDBC、JAVA / C++ / Python / Go 等编程语言 API、RESTful API 中使用。</p>`,37),P=l(`<li><p>在 JAVA / C++ / Python / Go 等编程语言 API 中执行查询语句，详见应用编程接口一章相应文档。接口原型如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">SessionDataSet</span> <span class="token function">executeQueryStatement</span><span class="token punctuation">(</span><span class="token class-name">String</span> sql<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,1);function U(z,M){const a=i("RouterLink");return p(),c("div",null,[r(`

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

`),u,n("ul",null,[k,m,v,n("li",null,[s("在 "),h,s(" 子句中使用 "),b,s(" 关键词可以指定查询为最新点查询，详细说明及示例见文档 "),e(a,{to:"/zh/UserGuide/V1.0.x/Query-Data/Last-Query.html"},{default:t(()=>[s("最新点查询")]),_:1}),s(" 。")]),n("li",null,[s("详细说明及示例见文档 "),e(a,{to:"/zh/UserGuide/V1.0.x/Query-Data/Select-Expression.html"},{default:t(()=>[s("选择表达式")]),_:1}),s(" 。")])]),f,n("ul",null,[w,n("li",null,[s("详细说明及示例见文档 "),e(a,{to:"/zh/UserGuide/V1.0.x/Query-Data/Select-Into.html"},{default:t(()=>[s("SELECT INTO（查询写回）")]),_:1}),s(" 。")])]),T,n("ul",null,[g,y,_,n("li",null,[s("详细说明及示例见文档 "),e(a,{to:"/zh/UserGuide/V1.0.x/Query-Data/Where-Condition.html"},{default:t(()=>[s("查询过滤条件")]),_:1}),s(" 。")])]),x,n("ul",null,[S,I,E,L,n("li",null,[s("详细说明及示例见文档 "),e(a,{to:"/zh/UserGuide/V1.0.x/Query-Data/Group-By.html"},{default:t(()=>[s("分段分组聚合")]),_:1}),s(" 。")])]),O,n("ul",null,[A,n("li",null,[s("详细说明及示例见文档 "),e(a,{to:"/zh/UserGuide/V1.0.x/Query-Data/Having-Condition.html"},{default:t(()=>[s("聚合结果过滤")]),_:1}),s(" 。")])]),C,n("ul",null,[R,n("li",null,[s("详细说明及示例见文档 "),e(a,{to:"/zh/UserGuide/V1.0.x/Query-Data/Fill.html"},{default:t(()=>[s("结果集补空值")]),_:1}),s(" 。")])]),D,n("ul",null,[V,n("li",null,[s("关于查询结果分页，详细说明及示例见文档 "),e(a,{to:"/zh/UserGuide/V1.0.x/Query-Data/Pagination.html"},{default:t(()=>[s("结果集分页")]),_:1}),s(" 。")])]),G,n("ul",null,[N,n("li",null,[s("关于查询结果分页，详细说明及示例见文档 "),e(a,{to:"/zh/UserGuide/V1.0.x/Query-Data/Pagination.html"},{default:t(()=>[s("结果集分页")]),_:1}),s(" 。")])]),Q,n("ul",null,[F,B,n("li",null,[s("详细说明及示例见文档 "),e(a,{to:"/zh/UserGuide/V1.0.x/Query-Data/Align-By.html"},{default:t(()=>[s("查询对齐模式")]),_:1}),s(" 。")])]),q,n("ul",null,[n("li",null,[n("p",null,[s("在 SQL 命令行终端中执行查询语句：启动 SQL 命令行终端，直接输入查询语句执行即可，详见 "),e(a,{to:"/zh/UserGuide/V1.0.x/QuickStart/Command-Line-Interface.html"},{default:t(()=>[s("SQL 命令行终端")]),_:1}),s("。")])]),n("li",null,[n("p",null,[s("在 JDBC 中执行查询语句，详见 "),e(a,{to:"/zh/UserGuide/V1.0.x/API/Programming-JDBC.html"},{default:t(()=>[s("JDBC")]),_:1}),s(" 。")])]),P,n("li",null,[n("p",null,[s("在 RESTful API 中使用，详见 "),e(a,{to:"/zh/UserGuide/V1.0.x/API/RestService.html"},{default:t(()=>[s("HTTP API")]),_:1}),s(" 。")])])])])}const H=o(d,[["render",U],["__file","Overview.html.vue"]]);export{H as default};
