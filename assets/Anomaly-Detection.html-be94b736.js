import{_ as e,o as i,c as a,a as l,f as s,d as n,e as d}from"./app-1758c693.js";const r={},t=s('<h1 id="异常检测" tabindex="-1"><a class="header-anchor" href="#异常检测" aria-hidden="true">#</a> 异常检测</h1><h2 id="iqr" tabindex="-1"><a class="header-anchor" href="#iqr" aria-hidden="true">#</a> IQR</h2><h3 id="函数简介" tabindex="-1"><a class="header-anchor" href="#函数简介" aria-hidden="true">#</a> 函数简介</h3><p>本函数用于检验超出上下四分位数1.5倍IQR的数据分布异常。</p><p><strong>函数名：</strong> IQR</p><p><strong>输入序列：</strong> 仅支持单个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE。</p><p><strong>参数：</strong></p><ul><li><code>method</code>：若设置为 &quot;batch&quot;，则将数据全部读入后检测；若设置为 &quot;stream&quot;，则需用户提供上下四分位数进行流式检测。默认为 &quot;batch&quot;。</li><li><code>q1</code>：使用流式计算时的下四分位数。</li><li><code>q3</code>：使用流式计算时的上四分位数。</li></ul><p><strong>输出序列</strong>：输出单个序列，类型为 DOUBLE。</p>',9),c=n("p",null,[n("strong",null,"说明"),d("："),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("mi",null,"I"),n("mi",null,"Q"),n("mi",null,"R"),n("mo",null,"="),n("msub",null,[n("mi",null,"Q"),n("mn",null,"3")]),n("mo",null,"−"),n("msub",null,[n("mi",null,"Q"),n("mn",null,"1")])]),n("annotation",{encoding:"application/x-tex"},"IQR=Q_3-Q_1")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8778em","vertical-align":"-0.1944em"}}),n("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"I"),n("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"QR"),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),n("span",{class:"mrel"},"="),n("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8778em","vertical-align":"-0.1944em"}}),n("span",{class:"mord"},[n("span",{class:"mord mathnormal"},"Q"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t vlist-t2"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.3011em"}},[n("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},"3")])])]),n("span",{class:"vlist-s"},"​")]),n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.15em"}},[n("span")])])])])]),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),n("span",{class:"mbin"},"−"),n("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8778em","vertical-align":"-0.1944em"}}),n("span",{class:"mord"},[n("span",{class:"mord mathnormal"},"Q"),n("span",{class:"msupsub"},[n("span",{class:"vlist-t vlist-t2"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.3011em"}},[n("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mtight"},"1")])])]),n("span",{class:"vlist-s"},"​")]),n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.15em"}},[n("span")])])])])])])])])],-1),v=s(`<h3 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h3><h4 id="全数据计算" tabindex="-1"><a class="header-anchor" href="#全数据计算" aria-hidden="true">#</a> 全数据计算</h4><p>输入序列：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+------------+
|                         Time|root.test.s1|
+-----------------------------+------------+
|1970-01-01T08:00:00.100+08:00|         0.0|
|1970-01-01T08:00:00.200+08:00|         0.0|
|1970-01-01T08:00:00.300+08:00|         1.0|
|1970-01-01T08:00:00.400+08:00|        -1.0|
|1970-01-01T08:00:00.500+08:00|         0.0|
|1970-01-01T08:00:00.600+08:00|         0.0|
|1970-01-01T08:00:00.700+08:00|        -2.0|
|1970-01-01T08:00:00.800+08:00|         2.0|
|1970-01-01T08:00:00.900+08:00|         0.0|
|1970-01-01T08:00:01.000+08:00|         0.0|
|1970-01-01T08:00:01.100+08:00|         1.0|
|1970-01-01T08:00:01.200+08:00|        -1.0|
|1970-01-01T08:00:01.300+08:00|        -1.0|
|1970-01-01T08:00:01.400+08:00|         1.0|
|1970-01-01T08:00:01.500+08:00|         0.0|
|1970-01-01T08:00:01.600+08:00|         0.0|
|1970-01-01T08:00:01.700+08:00|        10.0|
|1970-01-01T08:00:01.800+08:00|         2.0|
|1970-01-01T08:00:01.900+08:00|        -2.0|
|1970-01-01T08:00:02.000+08:00|         0.0|
+-----------------------------+------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的 SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> iqr<span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-----------------+
|                         Time|iqr(root.test.s1)|
+-----------------------------+-----------------+
|1970-01-01T08:00:01.700+08:00|             10.0|
+-----------------------------+-----------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ksigma" tabindex="-1"><a class="header-anchor" href="#ksigma" aria-hidden="true">#</a> KSigma</h2><h3 id="函数简介-1" tabindex="-1"><a class="header-anchor" href="#函数简介-1" aria-hidden="true">#</a> 函数简介</h3><p>本函数利用动态 K-Sigma 算法进行异常检测。在一个窗口内，与平均值的差距超过k倍标准差的数据将被视作异常并输出。</p><p><strong>函数名：</strong> KSIGMA</p><p><strong>输入序列：</strong> 仅支持单个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE</p><p><strong>参数：</strong></p><ul><li><code>k</code>：在动态 K-Sigma 算法中，分布异常的标准差倍数阈值，默认值为 3。</li><li><code>window</code>：动态 K-Sigma 算法的滑动窗口大小，默认值为 10000。</li></ul><p><strong>输出序列：</strong> 输出单个序列，类型与输入序列相同。</p><p><strong>提示：</strong> k 应大于 0，否则将不做输出。</p><h3 id="使用示例-1" tabindex="-1"><a class="header-anchor" href="#使用示例-1" aria-hidden="true">#</a> 使用示例</h3><h4 id="指定k" tabindex="-1"><a class="header-anchor" href="#指定k" aria-hidden="true">#</a> 指定k</h4><p>输入序列：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------+
|                         Time|root.test.d1.s1|
+-----------------------------+---------------+
|2020-01-01T00:00:02.000+08:00|            0.0|
|2020-01-01T00:00:03.000+08:00|           50.0|
|2020-01-01T00:00:04.000+08:00|          100.0|
|2020-01-01T00:00:06.000+08:00|          150.0|
|2020-01-01T00:00:08.000+08:00|          200.0|
|2020-01-01T00:00:10.000+08:00|          200.0|
|2020-01-01T00:00:14.000+08:00|          200.0|
|2020-01-01T00:00:15.000+08:00|          200.0|
|2020-01-01T00:00:16.000+08:00|          200.0|
|2020-01-01T00:00:18.000+08:00|          200.0|
|2020-01-01T00:00:20.000+08:00|          150.0|
|2020-01-01T00:00:22.000+08:00|          100.0|
|2020-01-01T00:00:26.000+08:00|           50.0|
|2020-01-01T00:00:28.000+08:00|            0.0|
|2020-01-01T00:00:30.000+08:00|            NaN|
+-----------------------------+---------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的 SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> ksigma<span class="token punctuation">(</span>s1<span class="token punctuation">,</span><span class="token string">&quot;k&quot;</span><span class="token operator">=</span><span class="token string">&quot;1.0&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2020</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span> <span class="token number">00</span>:<span class="token number">00</span>:<span class="token number">30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------------------------+
|Time                         |ksigma(root.test.d1.s1,&quot;k&quot;=&quot;3.0&quot;)|
+-----------------------------+---------------------------------+
|2020-01-01T00:00:02.000+08:00|                              0.0|
|2020-01-01T00:00:03.000+08:00|                             50.0|
|2020-01-01T00:00:26.000+08:00|                             50.0|
|2020-01-01T00:00:28.000+08:00|                              0.0|
+-----------------------------+---------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lof" tabindex="-1"><a class="header-anchor" href="#lof" aria-hidden="true">#</a> LOF</h2><h3 id="函数简介-2" tabindex="-1"><a class="header-anchor" href="#函数简介-2" aria-hidden="true">#</a> 函数简介</h3><p>本函数使用局部离群点检测方法用于查找序列的密度异常。将根据提供的第k距离数及局部离群点因子(lof)阈值，判断输入数据是否为离群点，即异常，并输出各点的 LOF 值。</p><p><strong>函数名：</strong> LOF</p><p><strong>输入序列：</strong> 多个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE</p><p><strong>参数：</strong></p><ul><li><code>method</code>:使用的检测方法。默认为 default，以高维数据计算。设置为 series，将一维时间序列转换为高维数据计算。</li><li><code>k</code>:使用第k距离计算局部离群点因子.默认为 3。</li><li><code>window</code>:每次读取数据的窗口长度。默认为 10000.</li><li><code>windowsize</code>:使用series方法时，转化高维数据的维数，即单个窗口的大小。默认为 5。</li></ul><p><strong>输出序列：</strong> 输出单时间序列，类型为DOUBLE。</p><p><strong>提示：</strong> 不完整的数据行会被忽略，不参与计算，也不标记为离群点。</p><h3 id="使用示例-2" tabindex="-1"><a class="header-anchor" href="#使用示例-2" aria-hidden="true">#</a> 使用示例</h3><h4 id="默认参数" tabindex="-1"><a class="header-anchor" href="#默认参数" aria-hidden="true">#</a> 默认参数</h4><p>输入序列：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------+---------------+
|                         Time|root.test.d1.s1|root.test.d1.s2|
+-----------------------------+---------------+---------------+
|1970-01-01T08:00:00.100+08:00|            0.0|            0.0|
|1970-01-01T08:00:00.200+08:00|            0.0|            1.0|
|1970-01-01T08:00:00.300+08:00|            1.0|            1.0|
|1970-01-01T08:00:00.400+08:00|            1.0|            0.0|
|1970-01-01T08:00:00.500+08:00|            0.0|           -1.0|
|1970-01-01T08:00:00.600+08:00|           -1.0|           -1.0|
|1970-01-01T08:00:00.700+08:00|           -1.0|            0.0|
|1970-01-01T08:00:00.800+08:00|            2.0|            2.0|
|1970-01-01T08:00:00.900+08:00|            0.0|           null|
+-----------------------------+---------------+---------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的 SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> lof<span class="token punctuation">(</span>s1<span class="token punctuation">,</span>s2<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span><span class="token operator">&lt;</span><span class="token number">1000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-------------------------------------+
|                         Time|lof(root.test.d1.s1, root.test.d1.s2)|
+-----------------------------+-------------------------------------+
|1970-01-01T08:00:00.100+08:00|                   3.8274824267668244|
|1970-01-01T08:00:00.200+08:00|                   3.0117631741126156|
|1970-01-01T08:00:00.300+08:00|                    2.838155437762879|
|1970-01-01T08:00:00.400+08:00|                   3.0117631741126156|
|1970-01-01T08:00:00.500+08:00|                     2.73518261244453|
|1970-01-01T08:00:00.600+08:00|                    2.371440975708148|
|1970-01-01T08:00:00.700+08:00|                     2.73518261244453|
|1970-01-01T08:00:00.800+08:00|                   1.7561416374270742|
+-----------------------------+-------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="诊断一维时间序列" tabindex="-1"><a class="header-anchor" href="#诊断一维时间序列" aria-hidden="true">#</a> 诊断一维时间序列</h4><p>输入序列：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------+
|                         Time|root.test.d1.s1|
+-----------------------------+---------------+
|1970-01-01T08:00:00.100+08:00|            1.0|
|1970-01-01T08:00:00.200+08:00|            2.0|
|1970-01-01T08:00:00.300+08:00|            3.0|
|1970-01-01T08:00:00.400+08:00|            4.0|
|1970-01-01T08:00:00.500+08:00|            5.0|
|1970-01-01T08:00:00.600+08:00|            6.0|
|1970-01-01T08:00:00.700+08:00|            7.0|
|1970-01-01T08:00:00.800+08:00|            8.0|
|1970-01-01T08:00:00.900+08:00|            9.0|
|1970-01-01T08:00:01.000+08:00|           10.0|
|1970-01-01T08:00:01.100+08:00|           11.0|
|1970-01-01T08:00:01.200+08:00|           12.0|
|1970-01-01T08:00:01.300+08:00|           13.0|
|1970-01-01T08:00:01.400+08:00|           14.0|
|1970-01-01T08:00:01.500+08:00|           15.0|
|1970-01-01T08:00:01.600+08:00|           16.0|
|1970-01-01T08:00:01.700+08:00|           17.0|
|1970-01-01T08:00:01.800+08:00|           18.0|
|1970-01-01T08:00:01.900+08:00|           19.0|
|1970-01-01T08:00:02.000+08:00|           20.0|
+-----------------------------+---------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的 SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> lof<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token string">&quot;method&quot;</span><span class="token operator">=</span><span class="token string">&quot;series&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span><span class="token operator">&lt;</span><span class="token number">1000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+--------------------+
|                         Time|lof(root.test.d1.s1)|
+-----------------------------+--------------------+
|1970-01-01T08:00:00.100+08:00|    3.77777777777778|
|1970-01-01T08:00:00.200+08:00|    4.32727272727273|
|1970-01-01T08:00:00.300+08:00|    4.85714285714286|
|1970-01-01T08:00:00.400+08:00|    5.40909090909091|
|1970-01-01T08:00:00.500+08:00|    5.94999999999999|
|1970-01-01T08:00:00.600+08:00|    6.43243243243243|
|1970-01-01T08:00:00.700+08:00|    6.79999999999999|
|1970-01-01T08:00:00.800+08:00|                 7.0|
|1970-01-01T08:00:00.900+08:00|                 7.0|
|1970-01-01T08:00:01.000+08:00|    6.79999999999999|
|1970-01-01T08:00:01.100+08:00|    6.43243243243243|
|1970-01-01T08:00:01.200+08:00|    5.94999999999999|
|1970-01-01T08:00:01.300+08:00|    5.40909090909091|
|1970-01-01T08:00:01.400+08:00|    4.85714285714286|
|1970-01-01T08:00:01.500+08:00|    4.32727272727273|
|1970-01-01T08:00:01.600+08:00|    3.77777777777778|
+-----------------------------+--------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="missdetect" tabindex="-1"><a class="header-anchor" href="#missdetect" aria-hidden="true">#</a> MissDetect</h2><h3 id="函数简介-3" tabindex="-1"><a class="header-anchor" href="#函数简介-3" aria-hidden="true">#</a> 函数简介</h3><p>本函数用于检测数据中的缺失异常。在一些数据中，缺失数据会被线性插值填补，在数据中出现完美的线性片段，且这些片段往往长度较大。本函数通过在数据中发现这些完美线性片段来检测缺失异常。</p><p><strong>函数名：</strong> MISSDETECT</p><p><strong>输入序列：</strong> 仅支持单个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE。</p><p><strong>参数：</strong></p><ul><li><code>minlen</code>：被标记为异常的完美线性片段的最小长度，是一个大于等于 10 的整数，默认值为 10。</li></ul><p><strong>输出序列：</strong> 输出单个序列，类型为 BOOLEAN，即该数据点是否为缺失异常。</p><p><strong>提示：</strong> 数据中的<code>NaN</code>将会被忽略。</p><h3 id="使用示例-3" tabindex="-1"><a class="header-anchor" href="#使用示例-3" aria-hidden="true">#</a> 使用示例</h3><p>输入序列：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------+
|                         Time|root.test.d2.s2|
+-----------------------------+---------------+
|2021-07-01T12:00:00.000+08:00|            0.0|
|2021-07-01T12:00:01.000+08:00|            1.0|
|2021-07-01T12:00:02.000+08:00|            0.0|
|2021-07-01T12:00:03.000+08:00|            1.0|
|2021-07-01T12:00:04.000+08:00|            0.0|
|2021-07-01T12:00:05.000+08:00|            0.0|
|2021-07-01T12:00:06.000+08:00|            0.0|
|2021-07-01T12:00:07.000+08:00|            0.0|
|2021-07-01T12:00:08.000+08:00|            0.0|
|2021-07-01T12:00:09.000+08:00|            0.0|
|2021-07-01T12:00:10.000+08:00|            0.0|
|2021-07-01T12:00:11.000+08:00|            0.0|
|2021-07-01T12:00:12.000+08:00|            0.0|
|2021-07-01T12:00:13.000+08:00|            0.0|
|2021-07-01T12:00:14.000+08:00|            0.0|
|2021-07-01T12:00:15.000+08:00|            0.0|
|2021-07-01T12:00:16.000+08:00|            1.0|
|2021-07-01T12:00:17.000+08:00|            0.0|
|2021-07-01T12:00:18.000+08:00|            1.0|
|2021-07-01T12:00:19.000+08:00|            0.0|
|2021-07-01T12:00:20.000+08:00|            1.0|
+-----------------------------+---------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的SQL语句：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> missdetect<span class="token punctuation">(</span>s2<span class="token punctuation">,</span><span class="token string">&#39;minlen&#39;</span><span class="token operator">=</span><span class="token string">&#39;10&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+------------------------------------------+
|                         Time|missdetect(root.test.d2.s2, &quot;minlen&quot;=&quot;10&quot;)|
+-----------------------------+------------------------------------------+
|2021-07-01T12:00:00.000+08:00|                                     false|
|2021-07-01T12:00:01.000+08:00|                                     false|
|2021-07-01T12:00:02.000+08:00|                                     false|
|2021-07-01T12:00:03.000+08:00|                                     false|
|2021-07-01T12:00:04.000+08:00|                                      true|
|2021-07-01T12:00:05.000+08:00|                                      true|
|2021-07-01T12:00:06.000+08:00|                                      true|
|2021-07-01T12:00:07.000+08:00|                                      true|
|2021-07-01T12:00:08.000+08:00|                                      true|
|2021-07-01T12:00:09.000+08:00|                                      true|
|2021-07-01T12:00:10.000+08:00|                                      true|
|2021-07-01T12:00:11.000+08:00|                                      true|
|2021-07-01T12:00:12.000+08:00|                                      true|
|2021-07-01T12:00:13.000+08:00|                                      true|
|2021-07-01T12:00:14.000+08:00|                                      true|
|2021-07-01T12:00:15.000+08:00|                                      true|
|2021-07-01T12:00:16.000+08:00|                                     false|
|2021-07-01T12:00:17.000+08:00|                                     false|
|2021-07-01T12:00:18.000+08:00|                                     false|
|2021-07-01T12:00:19.000+08:00|                                     false|
|2021-07-01T12:00:20.000+08:00|                                     false|
+-----------------------------+------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="range" tabindex="-1"><a class="header-anchor" href="#range" aria-hidden="true">#</a> Range</h2><h3 id="函数简介-4" tabindex="-1"><a class="header-anchor" href="#函数简介-4" aria-hidden="true">#</a> 函数简介</h3><p>本函数用于查找时间序列的范围异常。将根据提供的上界与下界，判断输入数据是否越界，即异常，并输出所有异常点为新的时间序列。</p><p><strong>函数名：</strong> RANGE</p><p><strong>输入序列：</strong> 仅支持单个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE</p><p><strong>参数：</strong></p><ul><li><code>lower_bound</code>:范围异常检测的下界。</li><li><code>upper_bound</code>:范围异常检测的上界。</li></ul><p><strong>输出序列：</strong> 输出单个序列，类型与输入序列相同。</p><p><strong>提示：</strong> 应满足<code>upper_bound</code>大于<code>lower_bound</code>，否则将不做输出。</p><h3 id="使用示例-4" tabindex="-1"><a class="header-anchor" href="#使用示例-4" aria-hidden="true">#</a> 使用示例</h3><h4 id="指定上界与下界" tabindex="-1"><a class="header-anchor" href="#指定上界与下界" aria-hidden="true">#</a> 指定上界与下界</h4><p>输入序列：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------+
|                         Time|root.test.d1.s1|
+-----------------------------+---------------+
|2020-01-01T00:00:02.000+08:00|          100.0|
|2020-01-01T00:00:03.000+08:00|          101.0|
|2020-01-01T00:00:04.000+08:00|          102.0|
|2020-01-01T00:00:06.000+08:00|          104.0|
|2020-01-01T00:00:08.000+08:00|          126.0|
|2020-01-01T00:00:10.000+08:00|          108.0|
|2020-01-01T00:00:14.000+08:00|          112.0|
|2020-01-01T00:00:15.000+08:00|          113.0|
|2020-01-01T00:00:16.000+08:00|          114.0|
|2020-01-01T00:00:18.000+08:00|          116.0|
|2020-01-01T00:00:20.000+08:00|          118.0|
|2020-01-01T00:00:22.000+08:00|          120.0|
|2020-01-01T00:00:26.000+08:00|          124.0|
|2020-01-01T00:00:28.000+08:00|          126.0|
|2020-01-01T00:00:30.000+08:00|            NaN|
+-----------------------------+---------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的 SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> range<span class="token punctuation">(</span>s1<span class="token punctuation">,</span><span class="token string">&quot;lower_bound&quot;</span><span class="token operator">=</span><span class="token string">&quot;101.0&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;upper_bound&quot;</span><span class="token operator">=</span><span class="token string">&quot;125.0&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2020</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span> <span class="token number">00</span>:<span class="token number">00</span>:<span class="token number">30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+------------------------------------------------------------------+
|Time                         |range(root.test.d1.s1,&quot;lower_bound&quot;=&quot;101.0&quot;,&quot;upper_bound&quot;=&quot;125.0&quot;)|
+-----------------------------+------------------------------------------------------------------+
|2020-01-01T00:00:02.000+08:00|                                                             100.0|
|2020-01-01T00:00:28.000+08:00|                                                             126.0|
+-----------------------------+------------------------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="twosidedfilter" tabindex="-1"><a class="header-anchor" href="#twosidedfilter" aria-hidden="true">#</a> TwoSidedFilter</h2><h3 id="函数简介-5" tabindex="-1"><a class="header-anchor" href="#函数简介-5" aria-hidden="true">#</a> 函数简介</h3><p>本函数基于双边窗口检测法对输入序列中的异常点进行过滤。</p><p><strong>函数名：</strong> TWOSIDEDFILTER</p><p><strong>输出序列：</strong> 仅支持单个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE</p><p><strong>输出序列：</strong> 输出单个序列，类型与输入相同，是输入序列去除异常点后的结果。</p><p><strong>参数：</strong></p><ul><li><code>len</code>：双边窗口检测法中的窗口大小，取值范围为正整数，默认值为 5.如当<code>len</code>=3 时，算法向前、向后各取长度为3的窗口，在窗口中计算异常度。</li><li><code>threshold</code>：异常度的阈值，取值范围为(0,1)，默认值为 0.3。阈值越高，函数对于异常度的判定标准越严格。</li></ul><h3 id="使用示例-5" tabindex="-1"><a class="header-anchor" href="#使用示例-5" aria-hidden="true">#</a> 使用示例</h3><p>输入序列：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+------------+
|                         Time|root.test.s0|
+-----------------------------+------------+
|1970-01-01T08:00:00.000+08:00|      2002.0|
|1970-01-01T08:00:01.000+08:00|      1946.0|
|1970-01-01T08:00:02.000+08:00|      1958.0|
|1970-01-01T08:00:03.000+08:00|      2012.0|
|1970-01-01T08:00:04.000+08:00|      2051.0|
|1970-01-01T08:00:05.000+08:00|      1898.0|
|1970-01-01T08:00:06.000+08:00|      2014.0|
|1970-01-01T08:00:07.000+08:00|      2052.0|
|1970-01-01T08:00:08.000+08:00|      1935.0|
|1970-01-01T08:00:09.000+08:00|      1901.0|
|1970-01-01T08:00:10.000+08:00|      1972.0|
|1970-01-01T08:00:11.000+08:00|      1969.0|
|1970-01-01T08:00:12.000+08:00|      1984.0|
|1970-01-01T08:00:13.000+08:00|      2018.0|
|1970-01-01T08:00:37.000+08:00|      1484.0|
|1970-01-01T08:00:38.000+08:00|      1055.0|
|1970-01-01T08:00:39.000+08:00|      1050.0|
|1970-01-01T08:01:05.000+08:00|      1023.0|
|1970-01-01T08:01:06.000+08:00|      1056.0|
|1970-01-01T08:01:07.000+08:00|       978.0|
|1970-01-01T08:01:08.000+08:00|      1050.0|
|1970-01-01T08:01:09.000+08:00|      1123.0|
|1970-01-01T08:01:10.000+08:00|      1150.0|
|1970-01-01T08:01:11.000+08:00|      1034.0|
|1970-01-01T08:01:12.000+08:00|       950.0|
|1970-01-01T08:01:13.000+08:00|      1059.0|
+-----------------------------+------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的 SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> TwoSidedFilter<span class="token punctuation">(</span>s0<span class="token punctuation">,</span> <span class="token string">&#39;len&#39;</span><span class="token operator">=</span><span class="token string">&#39;5&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;threshold&#39;</span><span class="token operator">=</span><span class="token string">&#39;0.3&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+------------+
|                         Time|root.test.s0|
+-----------------------------+------------+
|1970-01-01T08:00:00.000+08:00|      2002.0|
|1970-01-01T08:00:01.000+08:00|      1946.0|
|1970-01-01T08:00:02.000+08:00|      1958.0|
|1970-01-01T08:00:03.000+08:00|      2012.0|
|1970-01-01T08:00:04.000+08:00|      2051.0|
|1970-01-01T08:00:05.000+08:00|      1898.0|
|1970-01-01T08:00:06.000+08:00|      2014.0|
|1970-01-01T08:00:07.000+08:00|      2052.0|
|1970-01-01T08:00:08.000+08:00|      1935.0|
|1970-01-01T08:00:09.000+08:00|      1901.0|
|1970-01-01T08:00:10.000+08:00|      1972.0|
|1970-01-01T08:00:11.000+08:00|      1969.0|
|1970-01-01T08:00:12.000+08:00|      1984.0|
|1970-01-01T08:00:13.000+08:00|      2018.0|
|1970-01-01T08:01:05.000+08:00|      1023.0|
|1970-01-01T08:01:06.000+08:00|      1056.0|
|1970-01-01T08:01:07.000+08:00|       978.0|
|1970-01-01T08:01:08.000+08:00|      1050.0|
|1970-01-01T08:01:09.000+08:00|      1123.0|
|1970-01-01T08:01:10.000+08:00|      1150.0|
|1970-01-01T08:01:11.000+08:00|      1034.0|
|1970-01-01T08:01:12.000+08:00|       950.0|
|1970-01-01T08:01:13.000+08:00|      1059.0|
+-----------------------------+------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,97);function u(o,p){return i(),a("div",null,[l(`

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

`),t,c,v])}const b=e(r,[["render",u],["__file","Anomaly-Detection.html.vue"]]);export{b as default};
