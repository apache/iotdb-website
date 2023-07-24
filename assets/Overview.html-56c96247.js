import{_ as i,r as l,o as r,c,a as p,d as s,e,b as a,w as t,f as o}from"./app-c075fd0e.js";const u={},d=o(`<h1 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview</h1><h2 id="syntax-definition" tabindex="-1"><a class="header-anchor" href="#syntax-definition" aria-hidden="true">#</a> Syntax Definition</h2><p>In IoTDB, <code>SELECT</code> statement is used to retrieve data from one or more selected time series. Here is the syntax definition of <code>SELECT</code> statement:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SELECT</span> <span class="token punctuation">[</span><span class="token keyword">LAST</span><span class="token punctuation">]</span> selectExpr <span class="token punctuation">[</span><span class="token punctuation">,</span> selectExpr<span class="token punctuation">]</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="syntax-description" tabindex="-1"><a class="header-anchor" href="#syntax-description" aria-hidden="true">#</a> Syntax Description</h2><h3 id="select-clause" tabindex="-1"><a class="header-anchor" href="#select-clause" aria-hidden="true">#</a> <code>SELECT</code> clause</h3>`,6),m=s("li",null,[e("The "),s("code",null,"SELECT"),e(" clause specifies the output of the query, consisting of several "),s("code",null,"selectExpr"),e(".")],-1),h=s("li",null,[e("Each "),s("code",null,"selectExpr"),e(" defines one or more columns in the query result, which is an expression consisting of time series path suffixes, constants, functions, and operators.")],-1),v=s("li",null,[e("Supports using "),s("code",null,"AS"),e(" to specify aliases for columns in the query result set.")],-1),k=s("code",null,"LAST",-1),f=s("code",null,"SELECT",-1),b=s("h3",{id:"into-clause",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#into-clause","aria-hidden":"true"},"#"),e(),s("code",null,"INTO"),e(" clause")],-1),g=s("li",null,[s("code",null,"SELECT INTO"),e(" is used to write query results into a series of specified time series. The "),s("code",null,"INTO"),e(" clause specifies the target time series to which query results are written.")],-1),w=o('<h3 id="from-clause" tabindex="-1"><a class="header-anchor" href="#from-clause" aria-hidden="true">#</a> <code>FROM</code> clause</h3><ul><li>The <code>FROM</code> clause contains the path prefix of one or more time series to be queried, and wildcards are supported.</li><li>When executing a query, the path prefix in the <code>FROM</code> clause and the suffix in the <code>SELECT</code> clause will be concatenated to obtain a complete query target time series.</li></ul><h3 id="where-clause" tabindex="-1"><a class="header-anchor" href="#where-clause" aria-hidden="true">#</a> <code>WHERE</code> clause</h3>',3),y=o("<li>The <code>WHERE</code> clause specifies the filtering conditions for data rows, consisting of a <code>whereCondition</code>.</li><li><code>whereCondition</code> is a logical expression that evaluates to true for each row to be selected. If there is no <code>WHERE</code> clause, all rows will be selected.</li><li>In <code>whereCondition</code>, any IOTDB-supported functions and operators can be used except aggregate functions.</li>",3),T=s("h3",{id:"group-by-clause",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#group-by-clause","aria-hidden":"true"},"#"),e(),s("code",null,"GROUP BY"),e(" clause")],-1),x=o("<li>The <code>GROUP BY</code> clause specifies how the time series are aggregated by segment or group.</li><li>Segmented aggregation refers to segmenting data in the row direction according to the time dimension, aiming at the time relationship between different data points in the same time series, and obtaining an aggregated value for each segment. Currently only <strong>segmentation by time interval</strong> is supported, and more segmentation methods will be supported in the future.</li><li>Group aggregation refers to grouping the potential business attributes of time series for different time series. Each group contains several time series, and each group gets an aggregated value. Support <strong>group by path level</strong> and <strong>group by tag</strong> two grouping methods.</li><li>Segment aggregation and group aggregation can be mixed.</li>",4),S=s("h3",{id:"having-clause",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#having-clause","aria-hidden":"true"},"#"),e(),s("code",null,"HAVING"),e(" clause")],-1),I=o("<li>The <code>HAVING</code> clause specifies the filter conditions for the aggregation results, consisting of a <code>havingCondition</code>.</li><li><code>havingCondition</code> is a logical expression that evaluates to true for the aggregation results to be selected. If there is no <code>HAVING</code> clause, all aggregated results will be selected.</li><li><code>HAVING</code> is to be used with aggregate functions and the <code>GROUP BY</code> clause.</li>",3),q=o('<h3 id="order-by-clause" tabindex="-1"><a class="header-anchor" href="#order-by-clause" aria-hidden="true">#</a> <code>ORDER BY</code> clause</h3><ul><li>The <code>ORDER BY</code> clause is used to specify how the result set is sorted.</li><li>In ALIGN BY TIME mode: By default, they are sorted in ascending order of timestamp size, and <code>ORDER BY TIME DESC</code> can be used to specify that the result set is sorted in descending order of timestamp.</li><li>In ALIGN BY DEVICE mode: arrange according to the device first, and sort each device in ascending order according to the timestamp. The <code>ORDER BY</code> clause is not supported now.</li></ul><h3 id="fill-clause" tabindex="-1"><a class="header-anchor" href="#fill-clause" aria-hidden="true">#</a> <code>FILL</code> clause</h3>',3),_=s("li",null,[e("The "),s("code",null,"FILL"),e(" clause is used to specify the filling mode in the case of missing data, allowing users to fill in empty values ​​for the result set of any query according to a specific method.")],-1),E=s("h3",{id:"slimit-and-soffset-clauses",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#slimit-and-soffset-clauses","aria-hidden":"true"},"#"),e(),s("code",null,"SLIMIT"),e(" and "),s("code",null,"SOFFSET"),e(" clauses")],-1),L=s("li",null,[s("code",null,"SLIMIT"),e(" specifies the number of columns of the query result, and "),s("code",null,"SOFFSET"),e(" specifies the starting column position of the query result display. "),s("code",null,"SLIMIT"),e(" and "),s("code",null,"SOFFSET"),e(" are only used to control value columns and have no effect on time and device columns.")],-1),C=s("h3",{id:"limit-and-offset-clauses",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#limit-and-offset-clauses","aria-hidden":"true"},"#"),e(),s("code",null,"LIMIT"),e(" and "),s("code",null,"OFFSET"),e(" clauses")],-1),A=s("li",null,[s("code",null,"LIMIT"),e(" specifies the number of rows of the query result, and "),s("code",null,"OFFSET"),e(" specifies the starting row position of the query result display.")],-1),D=s("h3",{id:"align-by-clause",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#align-by-clause","aria-hidden":"true"},"#"),e(),s("code",null,"ALIGN BY"),e(" clause")],-1),F=s("li",null,[e("The query result set is "),s("strong",null,"ALIGN BY TIME"),e(" by default, including a time column and several value columns, and the timestamps of each column of data in each row are the same.")],-1),O=s("li",null,[e("It also supports "),s("strong",null,"ALIGN BY DEVICE"),e(". The query result set contains a time column, a device column, and several value columns.")],-1),B=o(`<h2 id="basic-examples" tabindex="-1"><a class="header-anchor" href="#basic-examples" aria-hidden="true">#</a> Basic Examples</h2><h3 id="select-a-column-of-data-based-on-a-time-interval" tabindex="-1"><a class="header-anchor" href="#select-a-column-of-data-based-on-a-time-interval" aria-hidden="true">#</a> Select a Column of Data Based on a Time Interval</h3><p>The SQL statement is:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> temperature <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">08</span>:<span class="token number">00.000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>which means:</p><p>The selected device is ln group wf01 plant wt01 device; the selected timeseries is the temperature sensor (temperature). The SQL statement requires that all temperature sensor values before the time point of &quot;2017-11-01T00:08:00.000&quot; be selected.</p><p>The execution result of this SQL statement is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-----------------------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="select-multiple-columns-of-data-based-on-a-time-interval" tabindex="-1"><a class="header-anchor" href="#select-multiple-columns-of-data-based-on-a-time-interval" aria-hidden="true">#</a> Select Multiple Columns of Data Based on a Time Interval</h3><p>The SQL statement is:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token keyword">status</span><span class="token punctuation">,</span> temperature <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">05</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">12</span>:<span class="token number">00.000</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>which means:</p><p>The selected device is ln group wf01 plant wt01 device; the selected timeseries is &quot;status&quot; and &quot;temperature&quot;. The SQL statement requires that the status and temperature sensor values between the time point of &quot;2017-11-01T00:05:00.000&quot; and &quot;2017-11-01T00:12:00.000&quot; be selected.</p><p>The execution result of this SQL statement is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+------------------------+-----------------------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="select-multiple-columns-of-data-for-the-same-device-according-to-multiple-time-intervals" tabindex="-1"><a class="header-anchor" href="#select-multiple-columns-of-data-for-the-same-device-according-to-multiple-time-intervals" aria-hidden="true">#</a> Select Multiple Columns of Data for the Same Device According to Multiple Time Intervals</h3><p>IoTDB supports specifying multiple time interval conditions in a query. Users can combine time interval conditions at will according to their needs. For example, the SQL statement is:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token keyword">status</span><span class="token punctuation">,</span>temperature <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01 <span class="token keyword">where</span> <span class="token punctuation">(</span><span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">05</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">12</span>:<span class="token number">00.000</span><span class="token punctuation">)</span> <span class="token operator">or</span> <span class="token punctuation">(</span><span class="token keyword">time</span> <span class="token operator">&gt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">35</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">37</span>:<span class="token number">00.000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>which means:</p><p>The selected device is ln group wf01 plant wt01 device; the selected timeseries is &quot;status&quot; and &quot;temperature&quot;; the statement specifies two different time intervals, namely &quot;2017-11-01T00:05:00.000 to 2017-11-01T00:12:00.000&quot; and &quot;2017-11-01T16:35:00.000 to 2017-11-01T16:37:00.000&quot;. The SQL statement requires that the values of selected timeseries satisfying any time interval be selected.</p><p>The execution result of this SQL statement is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+------------------------+-----------------------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="choose-multiple-columns-of-data-for-different-devices-according-to-multiple-time-intervals" tabindex="-1"><a class="header-anchor" href="#choose-multiple-columns-of-data-for-different-devices-according-to-multiple-time-intervals" aria-hidden="true">#</a> Choose Multiple Columns of Data for Different Devices According to Multiple Time Intervals</h3><p>The system supports the selection of data in any column in a query, i.e., the selected columns can come from different devices. For example, the SQL statement is:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> wf01<span class="token punctuation">.</span>wt01<span class="token punctuation">.</span><span class="token keyword">status</span><span class="token punctuation">,</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span>hardware <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln <span class="token keyword">where</span> <span class="token punctuation">(</span><span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">05</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">12</span>:<span class="token number">00.000</span><span class="token punctuation">)</span> <span class="token operator">or</span> <span class="token punctuation">(</span><span class="token keyword">time</span> <span class="token operator">&gt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">35</span>:<span class="token number">00.000</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">37</span>:<span class="token number">00.000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>which means:</p><p>The selected timeseries are &quot;the power supply status of ln group wf01 plant wt01 device&quot; and &quot;the hardware version of ln group wf02 plant wt02 device&quot;; the statement specifies two different time intervals, namely &quot;2017-11-01T00:05:00.000 to 2017-11-01T00:12:00.000&quot; and &quot;2017-11-01T16:35:00.000 to 2017-11-01T16:37:00.000&quot;. The SQL statement requires that the values of selected timeseries satisfying any time interval be selected.</p><p>The execution result of this SQL statement is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+------------------------+--------------------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="order-by-time-query" tabindex="-1"><a class="header-anchor" href="#order-by-time-query" aria-hidden="true">#</a> Order By Time Query</h3><p>IoTDB supports the &#39;order by time&#39; statement since 0.11, it&#39;s used to display results in descending order by time.<br> For example, the SQL statement is:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token keyword">order</span> <span class="token keyword">by</span> <span class="token keyword">time</span> <span class="token keyword">desc</span> <span class="token keyword">limit</span> <span class="token number">10</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The execution result of this SQL statement is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+--------------------------+------------------------+-----------------------------+------------------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="usage-in-different-clients" tabindex="-1"><a class="header-anchor" href="#usage-in-different-clients" aria-hidden="true">#</a> Usage in Different Clients</h2><p>Data query statements can be used in SQL command-line terminals, JDBC, JAVA / C++ / Python / Go and other native APIs, and RESTful APIs.</p>`,36),R=o(`<li><p>Execute query statements in native APIs such as JAVA / C++ / Python / Go. For details, please refer to the relevant documentation in the Application Programming Interface chapter. The interface prototype is as follows:</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">SessionDataSet</span> <span class="token function">executeQueryStatement</span><span class="token punctuation">(</span><span class="token class-name">String</span> sql<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>`,1);function G(Q,N){const n=l("RouterLink");return r(),c("div",null,[p(`

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

`),d,s("ul",null,[m,h,v,s("li",null,[e("Use the "),k,e(" keyword in the "),f,e(" clause to specify that the query is the last query. For details and examples, see the document "),a(n,{to:"/UserGuide/V1.0.x/Query-Data/Last-Query.html"},{default:t(()=>[e("Last Query")]),_:1}),e(".")]),s("li",null,[e("For details and examples, see the document "),a(n,{to:"/UserGuide/V1.0.x/Query-Data/Select-Expression.html"},{default:t(()=>[e("Select Expression")]),_:1}),e(".")])]),b,s("ul",null,[g,s("li",null,[e("For detailed instructions and examples, see the document "),a(n,{to:"/UserGuide/V1.0.x/Query-Data/Select-Into.html"},{default:t(()=>[e("SELECT INTO")]),_:1}),e(".")])]),w,s("ul",null,[y,s("li",null,[e("For details and examples, see the document "),a(n,{to:"/UserGuide/V1.0.x/Query-Data/Where-Condition.html"},{default:t(()=>[e("Where Condition")]),_:1}),e(".")])]),T,s("ul",null,[x,s("li",null,[e("For details and examples, see the document "),a(n,{to:"/UserGuide/V1.0.x/Query-Data/Group-By.html"},{default:t(()=>[e("Group By Aggregation")]),_:1}),e(".")])]),S,s("ul",null,[I,s("li",null,[e("For details and examples, see the document "),a(n,{to:"/UserGuide/V1.0.x/Query-Data/Having-Condition.html"},{default:t(()=>[e("Aggregation Result Filtering")]),_:1}),e(".")])]),q,s("ul",null,[_,s("li",null,[e("For details and examples, see the document "),a(n,{to:"/UserGuide/V1.0.x/Query-Data/Fill.html"},{default:t(()=>[e("Fill Null Value")]),_:1}),e(".")])]),E,s("ul",null,[L,s("li",null,[e("For details and examples of query result pagination, see the document "),a(n,{to:"/UserGuide/V1.0.x/Query-Data/Pagination.html"},{default:t(()=>[e("Result Set Pagination")]),_:1}),e(".")])]),C,s("ul",null,[A,s("li",null,[e("For details and examples of query result pagination, see the document "),a(n,{to:"/UserGuide/V1.0.x/Query-Data/Pagination.html"},{default:t(()=>[e("Result Set Pagination")]),_:1}),e(".")])]),D,s("ul",null,[F,O,s("li",null,[e("For details and examples, see the document "),a(n,{to:"/UserGuide/V1.0.x/Query-Data/Align-By.html"},{default:t(()=>[e("Query Alignment Mode")]),_:1}),e(".")])]),B,s("ul",null,[s("li",null,[s("p",null,[e("Execute the query statement in the SQL command line terminal: start the SQL command line terminal, and directly enter the query statement to execute, see "),a(n,{to:"/UserGuide/V1.0.x/QuickStart/Command-Line-Interface.html"},{default:t(()=>[e("SQL command line terminal")]),_:1}),e(".")])]),s("li",null,[s("p",null,[e("Execute query statements in JDBC, see "),a(n,{to:"/UserGuide/V1.0.x/API/Programming-JDBC.html"},{default:t(()=>[e("JDBC")]),_:1}),e(" for details.")])]),R,s("li",null,[s("p",null,[e("Used in RESTful API, see "),a(n,{to:"/UserGuide/V1.0.x/API/RestService.html"},{default:t(()=>[e("HTTP API")]),_:1}),e(" for details.")])])])])}const U=i(u,[["render",G],["__file","Overview.html.vue"]]);export{U as default};
