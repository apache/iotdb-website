import{_ as s,o as n,c as a,a as e,f as t}from"./app-045c081c.js";const o={},p=t(`<h1 id="null-value-filter" tabindex="-1"><a class="header-anchor" href="#null-value-filter" aria-hidden="true">#</a> Null Value Filter</h1><p>In practical application, users may want to filter some rows with null values in the query result set. In IoTDB, the <code>WITHOUT NULL</code> clause can be used to filter null values in the result set. There are two filtering strategies: <code>WITHOUT NULL ANY</code>和<code>WITHOUT NULL ALL</code>. In addition, the <code>WITHOUT NULL</code> clause supports specifying the corresponding columns for filtering.</p><blockquote><p>WITHOUT NULL ANY: if one of the columns in the specified column set is null, the conditions are met for filtering.</p><p>WITHOUT NULL ALL: if all columns in the specified column set are null, the conditions are met for filtering.</p></blockquote><h2 id="don-t-specify-columns" tabindex="-1"><a class="header-anchor" href="#don-t-specify-columns" aria-hidden="true">#</a> Don&#39;t specify columns</h2><blockquote><p>By default, it is effective for all columns in the result set. That is the specified column set includes all columns in the result set.</p></blockquote><ol><li>In the following query, if any column of one row in the result set is null, the row will be filtered out. That is the result set obtained does not contain any null values.</li></ol><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">01</span>:<span class="token number">00</span> WITHOUT <span class="token boolean">NULL</span> <span class="token keyword">ANY</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>In the following query, if all columns of one row in the result set are null, the row will be filtered out.</li></ol><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">where</span> <span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span>ms<span class="token punctuation">)</span> WITHOUT <span class="token boolean">NULL</span> <span class="token keyword">ALL</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="specify-columns" tabindex="-1"><a class="header-anchor" href="#specify-columns" aria-hidden="true">#</a> Specify columns</h2><blockquote><p>take effect only for the specified column set</p></blockquote><p>Use the <code>WITHOUT NULL</code> clause to filter the null value of the specified column in the result set. The following are some examples and descriptions:</p><blockquote><p>Note that if the specified column does not exist in the current metadata, it will be filtered directly, which is consistent with the output result of the current query.<br> If the specified column exists but does not match the column name output from the result set, an error will be reported: <code>The without null columns don&#39;t match the columns queried.If has alias, please use the alias.</code></p></blockquote><p>For examples:</p><ol><li>In <code>without null</code> specified column set, <code>root.test.sg1.s1</code> column exists in the current metadata,<code>root.test.sg1.usag</code> column does not exist in the current metadata. The function of the <code>without null</code> clause in the following query is equivalent to without null all(s1).</li></ol><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>sg1 without <span class="token boolean">null</span> <span class="token keyword">all</span> <span class="token punctuation">(</span>s1<span class="token punctuation">,</span> usag<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>In <code>without null</code> specified column set, <code>root.test.sg1.s2</code> column exists in the current metadata, but doesn&#39;t exist in the result set of the query. So it will report an error: <code>The without null columns don&#39;t match the columns queried.If has alias, please use the alias.</code></li></ol><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1 <span class="token operator">+</span> s2<span class="token punctuation">,</span> s1 <span class="token operator">-</span> s2<span class="token punctuation">,</span> s1 <span class="token operator">*</span> s2<span class="token punctuation">,</span> s1 <span class="token operator">/</span> s2<span class="token punctuation">,</span> s1 <span class="token operator">%</span> s2 <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>sg1 without <span class="token boolean">null</span> <span class="token keyword">all</span> <span class="token punctuation">(</span>s1<span class="token operator">+</span>s2<span class="token punctuation">,</span> s2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="raw-data-query" tabindex="-1"><a class="header-anchor" href="#raw-data-query" aria-hidden="true">#</a> Raw data query</h3><ol><li>If the column <code>root.ln.sg1.s1</code> of one row in the result set of the query is null, the row will be filtered out.</li></ol><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>sg1 WITHOUT <span class="token boolean">NULL</span> <span class="token keyword">ANY</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>If at least one column in <code>root.ln.sg1.s1</code> and <code>root.ln.sg1.s2</code> of one row is null in the result set of the query, the row will be filtered out.</li></ol><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>sg1 WITHOUT <span class="token boolean">NULL</span> <span class="token keyword">ANY</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>If both <code>root.ln.sg1.s1</code> and <code>root.ln.sg1.s2</code> columns of one row are null in the result set of the query, the row will be filtered out.</li></ol><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>sg1 WITHOUT <span class="token boolean">NULL</span> <span class="token keyword">ALL</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="with-expression-query" tabindex="-1"><a class="header-anchor" href="#with-expression-query" aria-hidden="true">#</a> With expression query</h3><p>specified columns can be expression</p><ol><li>If both <code>s2+s4</code> and <code>s2</code> columns of one row are null in the result set of the query, the row will be filtered out.</li></ol><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s2<span class="token punctuation">,</span> <span class="token operator">-</span> s2<span class="token punctuation">,</span> s4<span class="token punctuation">,</span> <span class="token operator">+</span> s4<span class="token punctuation">,</span> s2 <span class="token operator">+</span> s4<span class="token punctuation">,</span> s2 <span class="token operator">-</span> s4<span class="token punctuation">,</span> s2 <span class="token operator">*</span> s4<span class="token punctuation">,</span> s2 <span class="token operator">/</span> s4<span class="token punctuation">,</span> s2 <span class="token operator">%</span> s4 <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>sg1 without <span class="token boolean">null</span> <span class="token keyword">all</span> <span class="token punctuation">(</span>s2<span class="token operator">+</span>s4<span class="token punctuation">,</span> s2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>If at least one column in <code>s2+s4</code> and <code>s2</code> of one row is null in the result set of the query, the row will be filtered out.</li></ol><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s2<span class="token punctuation">,</span> <span class="token operator">-</span> s2<span class="token punctuation">,</span> s4<span class="token punctuation">,</span> <span class="token operator">+</span> s4<span class="token punctuation">,</span> s2 <span class="token operator">+</span> s4<span class="token punctuation">,</span> s2 <span class="token operator">-</span> s4<span class="token punctuation">,</span> s2 <span class="token operator">*</span> s4<span class="token punctuation">,</span> s2 <span class="token operator">/</span> s4<span class="token punctuation">,</span> s2 <span class="token operator">%</span> s4 <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>sg1 without <span class="token boolean">null</span> <span class="token keyword">any</span> <span class="token punctuation">(</span>s2<span class="token operator">+</span>s4<span class="token punctuation">,</span> s2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="with-alias-query" tabindex="-1"><a class="header-anchor" href="#with-alias-query" aria-hidden="true">#</a> With alias query</h3><p>specified columns can be alias</p><ol><li>If both <code>t2</code> and <code>t1</code> aliases of one row are null in the result set of the query, the row will be filtered out.</li></ol><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s2 <span class="token keyword">as</span> t1<span class="token punctuation">,</span> <span class="token operator">-</span> s2<span class="token punctuation">,</span> s4<span class="token punctuation">,</span> <span class="token operator">+</span> s4<span class="token punctuation">,</span> s2 <span class="token operator">+</span> s4 <span class="token keyword">as</span> t2<span class="token punctuation">,</span> s2 <span class="token operator">-</span> s4<span class="token punctuation">,</span> s2 <span class="token operator">*</span> s4<span class="token punctuation">,</span> s2 <span class="token operator">/</span> s4<span class="token punctuation">,</span> s2 <span class="token operator">%</span> s4 <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>sg1 without <span class="token boolean">null</span> <span class="token keyword">all</span> <span class="token punctuation">(</span>t2<span class="token punctuation">,</span> t1<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1<span class="token punctuation">,</span> sin<span class="token punctuation">(</span>s2<span class="token punctuation">)</span> <span class="token operator">+</span> cos<span class="token punctuation">(</span>s2<span class="token punctuation">)</span> <span class="token keyword">as</span> t1<span class="token punctuation">,</span> cos<span class="token punctuation">(</span>sin<span class="token punctuation">(</span>s2 <span class="token operator">+</span> s4<span class="token punctuation">)</span> <span class="token operator">+</span> s2<span class="token punctuation">)</span> <span class="token keyword">as</span> t2 <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>sg1 without <span class="token boolean">null</span> <span class="token keyword">all</span> <span class="token punctuation">(</span>t1<span class="token punctuation">,</span> t2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>When you specify aliases in the column set that queried, if you use the original name of the column with an alias in the column set specified without null, an error will be reported：<code>The without null columns don&#39;t match the columns queried.If has alias, please use the alias.</code> For example, <code>tan(s1)</code> and <code>t</code> columns are used at the same time in the following query.</li></ol><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1 <span class="token keyword">as</span> d<span class="token punctuation">,</span> sin<span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">,</span> cos<span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">,</span> tan<span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">as</span> t<span class="token punctuation">,</span> s2 <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>sg1 without <span class="token boolean">null</span> <span class="token keyword">all</span><span class="token punctuation">(</span>d<span class="token punctuation">,</span>  tan<span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">,</span> t<span class="token punctuation">)</span> <span class="token keyword">limit</span> <span class="token number">5</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="with-function-query" tabindex="-1"><a class="header-anchor" href="#with-function-query" aria-hidden="true">#</a> With function query</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1<span class="token punctuation">,</span> sin<span class="token punctuation">(</span>s2<span class="token punctuation">)</span> <span class="token operator">+</span> cos<span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">,</span> cos<span class="token punctuation">(</span>sin<span class="token punctuation">(</span>s2 <span class="token operator">+</span> s4<span class="token punctuation">)</span> <span class="token operator">+</span> s2<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>sg1 without <span class="token boolean">null</span> <span class="token keyword">all</span> <span class="token punctuation">(</span>sin<span class="token punctuation">(</span>s2<span class="token punctuation">)</span> <span class="token operator">+</span> cos<span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">,</span> cos<span class="token punctuation">(</span>sin<span class="token punctuation">(</span>s2 <span class="token operator">+</span> s4<span class="token punctuation">)</span> <span class="token operator">+</span> s2<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="align-by-device-query" tabindex="-1"><a class="header-anchor" href="#align-by-device-query" aria-hidden="true">#</a> Align by device query</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> last_value<span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>sg1 <span class="token keyword">group</span> <span class="token keyword">by</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span>ms<span class="token punctuation">)</span> without <span class="token boolean">null</span> <span class="token keyword">all</span><span class="token punctuation">(</span>last_value<span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">,</span> last_value<span class="token punctuation">(</span>s3<span class="token punctuation">)</span><span class="token punctuation">)</span> align <span class="token keyword">by</span> device
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Examples of results are as follows：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; select last_value(*) from root.sg1.* group by([1,10), 2ms) without null all(last_value(s2), last_value(s3)) align by device
+-----------------------------+-----------+--------------+--------------+--------------+
|                         Time|     Device|last_value(s1)|last_value(s2)|last_value(s3)|
+-----------------------------+-----------+--------------+--------------+--------------+
|1970-01-01T08:00:00.001+08:00|root.sg1.d1|           1.0|           2.0|          null|
|1970-01-01T08:00:00.003+08:00|root.sg1.d1|           3.0|           4.0|          null|
|1970-01-01T08:00:00.001+08:00|root.sg1.d2|           1.0|           1.0|           1.0|
+-----------------------------+-----------+--------------+--------------+--------------+
Total line number = 3
It costs 0.007s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The specified column name corresponds to the column name of the output result. At present, the <code>without null</code> clause doesn&#39;t support specifying a column of a device. If you do, an error will be reported: <code>The without null columns don&#39;t match the columns queried.If has alias, please use the alias.</code> For example, in the following query example, it is not supported to filter the row with column <code>last_value(root.sg1.d1.s3)</code> that is null.</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> last_value<span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>sg1 <span class="token keyword">group</span> <span class="token keyword">by</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span>ms<span class="token punctuation">)</span> without <span class="token boolean">null</span> <span class="token keyword">all</span><span class="token punctuation">(</span>last_value<span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>root.sg1.d1.s3<span class="token punctuation">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span> align <span class="token keyword">by</span> device
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="aggregation-query" tabindex="-1"><a class="header-anchor" href="#aggregation-query" aria-hidden="true">#</a> Aggregation query</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">avg</span><span class="token punctuation">(</span>s4<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">sum</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>sg1 <span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span>ms<span class="token punctuation">)</span> without <span class="token boolean">null</span> <span class="token keyword">all</span><span class="token punctuation">(</span><span class="token function">sum</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token function">avg</span><span class="token punctuation">(</span>s4<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">sum</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">count</span><span class="token punctuation">(</span>s3<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>sg1 <span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span>ms<span class="token punctuation">)</span> without <span class="token boolean">null</span> <span class="token keyword">all</span><span class="token punctuation">(</span><span class="token function">avg</span><span class="token punctuation">(</span>s4<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">sum</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="specify-full-path-columns" tabindex="-1"><a class="header-anchor" href="#specify-full-path-columns" aria-hidden="true">#</a> Specify full path columns</h3><p>Assuming that the output results of the following query are listed as <code>root.test.sg1.s2</code>, <code>root.test.sg1.s3</code>, <code>root.test.sg2.s2</code> and <code>root.test.sg2.s3</code>, you can specify the corresponding columns with full pathname for filtering, such as the following example:</p><ol><li>If both <code>root.test.sg1.s2</code> and <code>root.test.sg2.s3</code> columns of one row are null in the result set of the query, the row will be filtered out.</li></ol><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s2<span class="token punctuation">,</span> s3 <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> without <span class="token boolean">null</span> <span class="token keyword">all</span><span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>root.test.sg1.s2<span class="token punctuation">\`</span></span><span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">\`</span>root.test.sg2.s3<span class="token punctuation">\`</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>If <code>root.test.sg1.s2</code>, <code>root.test.sg1.s3</code> and <code>root.test.sg2.s3</code> columns of one row are null in the result set of the query, the row will be filtered out.</li></ol><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s2<span class="token punctuation">,</span> s3 <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> without <span class="token boolean">null</span> <span class="token keyword">all</span><span class="token punctuation">(</span><span class="token identifier"><span class="token punctuation">\`</span>root.test.sg1.s2<span class="token punctuation">\`</span></span><span class="token punctuation">,</span> s3<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="aligned-timeseries-query" tabindex="-1"><a class="header-anchor" href="#aligned-timeseries-query" aria-hidden="true">#</a> Aligned Timeseries Query</h3><ol><li>You can specify the <code>without null</code> column name as the aligned timeseries column name.</li></ol><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> ALIGNED TIMESERIES root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>sg3<span class="token punctuation">(</span>s5 INT32<span class="token punctuation">,</span> s6 <span class="token keyword">BOOLEAN</span><span class="token punctuation">,</span> s7 <span class="token keyword">DOUBLE</span><span class="token punctuation">,</span> s8 INT32<span class="token punctuation">)</span>
<span class="token keyword">select</span> sg1<span class="token punctuation">.</span>s1<span class="token punctuation">,</span> sg1<span class="token punctuation">.</span>s2<span class="token punctuation">,</span> sg2<span class="token punctuation">.</span>s3<span class="token punctuation">,</span> sg3<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test without <span class="token boolean">null</span> <span class="token keyword">all</span> <span class="token punctuation">(</span>sg3<span class="token punctuation">.</span>s5<span class="token punctuation">,</span> sg3<span class="token punctuation">.</span>s6<span class="token punctuation">,</span> sg2<span class="token punctuation">.</span>s3<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,58);function l(c,u){return n(),a("div",null,[e(`

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

`),p])}const r=s(o,[["render",l],["__file","Without-Null.html.vue"]]);export{r as default};
