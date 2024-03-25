import{_ as n,o as e,c as s,a as i,f as a}from"./app-dXzqLio8.js";const l={},d=a(`<h1 id="异常检测" tabindex="-1"><a class="header-anchor" href="#异常检测" aria-hidden="true">#</a> 异常检测</h1><h2 id="iqr" tabindex="-1"><a class="header-anchor" href="#iqr" aria-hidden="true">#</a> IQR</h2><h3 id="函数简介" tabindex="-1"><a class="header-anchor" href="#函数简介" aria-hidden="true">#</a> 函数简介</h3><p>本函数用于检验超出上下四分位数1.5倍IQR的数据分布异常。</p><p><strong>函数名：</strong> IQR</p><p><strong>输入序列：</strong> 仅支持单个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE。</p><p><strong>参数：</strong></p><ul><li><code>method</code>：若设置为 &quot;batch&quot;，则将数据全部读入后检测；若设置为 &quot;stream&quot;，则需用户提供上下四分位数进行流式检测。默认为 &quot;batch&quot;。</li><li><code>q1</code>：使用流式计算时的下四分位数。</li><li><code>q3</code>：使用流式计算时的上四分位数。</li></ul><p><strong>输出序列</strong>：输出单个序列，类型为 DOUBLE。</p><p><strong>说明</strong>：$IQR=Q_3-Q_1$</p><h3 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h3><h4 id="全数据计算" tabindex="-1"><a class="header-anchor" href="#全数据计算" aria-hidden="true">#</a> 全数据计算</h4><p>输入序列：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="outlier" tabindex="-1"><a class="header-anchor" href="#outlier" aria-hidden="true">#</a> Outlier</h2><h3 id="函数简介-6" tabindex="-1"><a class="header-anchor" href="#函数简介-6" aria-hidden="true">#</a> 函数简介</h3><p>本函数用于检测基于距离的异常点。在当前窗口中，如果一个点距离阈值范围内的邻居数量（包括它自己）少于密度阈值，则该点是异常点。</p><p><strong>函数名：</strong> OUTLIER</p><p><strong>输入序列：</strong> 仅支持单个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE。</p><p><strong>参数：</strong></p><ul><li><code>r</code>：基于距离异常检测中的距离阈值。</li><li><code>k</code>：基于距离异常检测中的密度阈值。</li><li><code>w</code>：用于指定滑动窗口的大小。</li><li><code>s</code>：用于指定滑动窗口的步长。</li></ul><p><strong>输出序列</strong>：输出单个序列，类型与输入序列相同。</p><h3 id="使用示例-6" tabindex="-1"><a class="header-anchor" href="#使用示例-6" aria-hidden="true">#</a> 使用示例</h3><h4 id="指定查询参数" tabindex="-1"><a class="header-anchor" href="#指定查询参数" aria-hidden="true">#</a> 指定查询参数</h4><p>输入序列：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+------------+
|                         Time|root.test.s1|
+-----------------------------+------------+
|2020-01-04T23:59:55.000+08:00|        56.0|
|2020-01-04T23:59:56.000+08:00|        55.1|
|2020-01-04T23:59:57.000+08:00|        54.2|
|2020-01-04T23:59:58.000+08:00|        56.3|
|2020-01-04T23:59:59.000+08:00|        59.0|
|2020-01-05T00:00:00.000+08:00|        60.0|
|2020-01-05T00:00:01.000+08:00|        60.5|
|2020-01-05T00:00:02.000+08:00|        64.5|
|2020-01-05T00:00:03.000+08:00|        69.0|
|2020-01-05T00:00:04.000+08:00|        64.2|
|2020-01-05T00:00:05.000+08:00|        62.3|
|2020-01-05T00:00:06.000+08:00|        58.0|
|2020-01-05T00:00:07.000+08:00|        58.9|
|2020-01-05T00:00:08.000+08:00|        52.0|
|2020-01-05T00:00:09.000+08:00|        62.3|
|2020-01-05T00:00:10.000+08:00|        61.0|
|2020-01-05T00:00:11.000+08:00|        64.2|
|2020-01-05T00:00:12.000+08:00|        61.8|
|2020-01-05T00:00:13.000+08:00|        64.0|
|2020-01-05T00:00:14.000+08:00|        63.0|
+-----------------------------+------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的 SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> outlier<span class="token punctuation">(</span>s1<span class="token punctuation">,</span><span class="token string">&quot;r&quot;</span><span class="token operator">=</span><span class="token string">&quot;5.0&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;k&quot;</span><span class="token operator">=</span><span class="token string">&quot;4&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;w&quot;</span><span class="token operator">=</span><span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;s&quot;</span><span class="token operator">=</span><span class="token string">&quot;5&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+--------------------------------------------------------+
|                         Time|outlier(root.test.s1,&quot;r&quot;=&quot;5.0&quot;,&quot;k&quot;=&quot;4&quot;,&quot;w&quot;=&quot;10&quot;,&quot;s&quot;=&quot;5&quot;)|
+-----------------------------+--------------------------------------------------------+
|2020-01-05T00:00:03.000+08:00|                                                    69.0|
+-----------------------------+--------------------------------------------------------+
|2020-01-05T00:00:08.000+08:00|                                                    52.0|
+-----------------------------+--------------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mastertrain" tabindex="-1"><a class="header-anchor" href="#mastertrain" aria-hidden="true">#</a> MasterTrain</h2><h3 id="函数简介-7" tabindex="-1"><a class="header-anchor" href="#函数简介-7" aria-hidden="true">#</a> 函数简介</h3><p>本函数基于主数据训练VAR预测模型。将根据提供的主数据判断时间序列中的数据点是否为错误值，并由连续p+1个非错误值作为训练样本训练VAR模型，输出训练后的模型参数。</p><p><strong>函数名：</strong> MasterTrain</p><p><strong>输入序列：</strong> 支持多个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE。</p><p><strong>参数：</strong></p><ul><li><code>p</code>:模型阶数。</li><li><code>eta</code>:错误值判定阈值，在缺省情况下，算法根据3-sigma原则自动估计该参数。</li></ul><p><strong>输出序列：</strong> 输出单个序列，类型为DOUBLE。</p><p><strong>安装方式：</strong></p><ul><li>从IoTDB代码仓库下载<code>research/master-detector</code>分支代码到本地</li><li>在根目录运行 <code>mvn clean package -am -Dmaven.test.skip=true</code> 编译项目</li><li>将 <code>./distribution/target/apache-iotdb-1.2.0-SNAPSHOT-library-udf-bin/apache-iotdb-1.2.0-SNAPSHOT-library-udf-bin/ext/udf/library-udf.jar</code>复制到IoTDB服务器的<code>./ext/udf/</code> 路径下。</li><li>启动 IoTDB服务器，在客户端中执行 <code>create function MasterTrain as org.apache.iotdb.library.anomaly.UDTFMasterTrain&#39;</code>。</li></ul><h3 id="使用示例-7" tabindex="-1"><a class="header-anchor" href="#使用示例-7" aria-hidden="true">#</a> 使用示例</h3><p>输入序列：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+------------+------------+--------------+--------------+
|                         Time|root.test.lo|root.test.la|root.test.m_la|root.test.m_lo|
+-----------------------------+------------+------------+--------------+--------------+
|1970-01-01T08:00:00.001+08:00| 39.99982556|  116.327274|   116.3271939|   39.99984748|
|1970-01-01T08:00:00.002+08:00| 39.99983865|  116.327305|   116.3272269|   39.99984748|
|1970-01-01T08:00:00.003+08:00| 40.00019038| 116.3273291|   116.3272634|   39.99984769|
|1970-01-01T08:00:00.004+08:00| 39.99982556|  116.327342|   116.3273015|    39.9998483|
|1970-01-01T08:00:00.005+08:00| 39.99982991| 116.3273744|    116.327339|   39.99984892|
|1970-01-01T08:00:00.006+08:00| 39.99982716| 116.3274117|   116.3273759|   39.99984892|
|1970-01-01T08:00:00.007+08:00|  39.9998259| 116.3274396|   116.3274163|   39.99984953|
|1970-01-01T08:00:00.008+08:00| 39.99982597| 116.3274668|   116.3274525|   39.99985014|
|1970-01-01T08:00:00.009+08:00| 39.99982226| 116.3275026|   116.3274915|   39.99985076|
|1970-01-01T08:00:00.010+08:00| 39.99980988| 116.3274967|   116.3275235|   39.99985137|
|1970-01-01T08:00:00.011+08:00| 39.99984873| 116.3274929|   116.3275611|   39.99985199|
|1970-01-01T08:00:00.012+08:00| 39.99981589| 116.3274745|   116.3275974|    39.9998526|
|1970-01-01T08:00:00.013+08:00|  39.9998259| 116.3275095|   116.3276338|   39.99985384|
|1970-01-01T08:00:00.014+08:00| 39.99984873| 116.3274787|   116.3276695|   39.99985446|
|1970-01-01T08:00:00.015+08:00|  39.9998343| 116.3274693|   116.3277045|   39.99985569|
|1970-01-01T08:00:00.016+08:00| 39.99983316| 116.3274941|   116.3277389|   39.99985631|
|1970-01-01T08:00:00.017+08:00| 39.99983311| 116.3275401|   116.3277747|   39.99985693|
|1970-01-01T08:00:00.018+08:00| 39.99984113| 116.3275713|   116.3278041|   39.99985756|
|1970-01-01T08:00:00.019+08:00| 39.99983602| 116.3276003|   116.3278379|   39.99985818|
|1970-01-01T08:00:00.020+08:00|  39.9998355| 116.3276308|   116.3278723|    39.9998588|
|1970-01-01T08:00:00.021+08:00| 40.00012176| 116.3276107|   116.3279026|   39.99985942|
|1970-01-01T08:00:00.022+08:00|  39.9998404| 116.3276684|          null|          null|
|1970-01-01T08:00:00.023+08:00| 39.99983942| 116.3277016|          null|          null|
|1970-01-01T08:00:00.024+08:00| 39.99984113| 116.3277284|          null|          null|
|1970-01-01T08:00:00.025+08:00| 39.99984283| 116.3277562|          null|          null|
+-----------------------------+------------+------------+--------------+--------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的 SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> MasterTrain<span class="token punctuation">(</span>lo<span class="token punctuation">,</span>la<span class="token punctuation">,</span>m_lo<span class="token punctuation">,</span>m_la<span class="token punctuation">,</span><span class="token string">&#39;p&#39;</span><span class="token operator">=</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;eta&#39;</span><span class="token operator">=</span><span class="token string">&#39;1.0&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------------------------------------------------------------------------------------+
|                         Time|MasterTrain(root.test.lo, root.test.la, root.test.m_lo, root.test.m_la, &quot;p&quot;=&quot;3&quot;, &quot;eta&quot;=&quot;1.0&quot;)|
+-----------------------------+---------------------------------------------------------------------------------------------+
|1970-01-01T08:00:00.001+08:00|                                                                          0.13656607660463288|
|1970-01-01T08:00:00.002+08:00|                                                                           0.8291884323013894|
|1970-01-01T08:00:00.003+08:00|                                                                          0.05012816073171693|
|1970-01-01T08:00:00.004+08:00|                                                                          -0.5495287787485761|
|1970-01-01T08:00:00.005+08:00|                                                                          0.03740486307345578|
|1970-01-01T08:00:00.006+08:00|                                                                           1.0500132150475212|
|1970-01-01T08:00:00.007+08:00|                                                                          0.04583944643116993|
|1970-01-01T08:00:00.008+08:00|                                                                         -0.07863708480736269|
+-----------------------------+---------------------------------------------------------------------------------------------+

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="masterdetect" tabindex="-1"><a class="header-anchor" href="#masterdetect" aria-hidden="true">#</a> MasterDetect</h2><h3 id="函数简介-8" tabindex="-1"><a class="header-anchor" href="#函数简介-8" aria-hidden="true">#</a> 函数简介</h3><p>本函数基于主数据检测并修复时间序列中的错误值。将根据提供的主数据判断时间序列中的数据点是否为错误值，并由MasterTrain训练的模型进行时间序列预测，错误值将由预测值及主数据共同修复。</p><p><strong>函数名：</strong> MasterDetect</p><p><strong>输入序列：</strong> 支持多个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE。</p><p><strong>参数：</strong></p><ul><li><code>p</code>:模型阶数。</li><li><code>k</code>：主数据中的近邻数量，正整数， 在缺省情况下，算法根据主数据中的k个近邻的元组距离自动估计该参数。</li><li><code>eta</code>:错误值判定阈值，在缺省情况下，算法根据3-sigma原则自动估计该参数。</li><li><code>beta</code>:异常值判定阈值，在缺省情况下，算法根据3-sigma原则自动估计该参数。</li><li><code>output_type</code>:输出结果类型，可选&#39;repair&#39;或&#39;anomaly&#39;，即输出修复结果或异常检测结果，在缺省情况下默认为&#39;repair&#39;。</li><li><code>output_column</code>：输出列的序号，默认为1，即输出第一列的修复结果。</li></ul><p><strong>安装方式：</strong></p><ul><li>从IoTDB代码仓库下载<code>research/master-detector</code>分支代码到本地</li><li>在根目录运行 <code>mvn clean package -am -Dmaven.test.skip=true</code> 编译项目</li><li>将 <code>./distribution/target/apache-iotdb-1.2.0-SNAPSHOT-library-udf-bin/apache-iotdb-1.2.0-SNAPSHOT-library-udf-bin/ext/udf/library-udf.jar</code>复制到IoTDB服务器的<code>./ext/udf/</code> 路径下。</li><li>启动 IoTDB服务器，在客户端中执行 <code>create function MasterDetect as &#39;org.apache.iotdb.library.anomaly.UDTFMasterDetect&#39;</code>。</li></ul><p><strong>输出序列：</strong> 输出单个序列，类型与输入数据中对应列的类型相同，序列为输入列修复后的结果。</p><h3 id="使用示例-8" tabindex="-1"><a class="header-anchor" href="#使用示例-8" aria-hidden="true">#</a> 使用示例</h3><p>输入序列：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+------------+------------+--------------+--------------+--------------------+
|                         Time|root.test.lo|root.test.la|root.test.m_la|root.test.m_lo|     root.test.model|
+-----------------------------+------------+------------+--------------+--------------+--------------------+
|1970-01-01T08:00:00.001+08:00| 39.99982556|  116.327274|   116.3271939|   39.99984748| 0.13656607660463288|
|1970-01-01T08:00:00.002+08:00| 39.99983865|  116.327305|   116.3272269|   39.99984748|  0.8291884323013894|
|1970-01-01T08:00:00.003+08:00| 40.00019038| 116.3273291|   116.3272634|   39.99984769| 0.05012816073171693|
|1970-01-01T08:00:00.004+08:00| 39.99982556|  116.327342|   116.3273015|    39.9998483| -0.5495287787485761|
|1970-01-01T08:00:00.005+08:00| 39.99982991| 116.3273744|    116.327339|   39.99984892| 0.03740486307345578|
|1970-01-01T08:00:00.006+08:00| 39.99982716| 116.3274117|   116.3273759|   39.99984892|  1.0500132150475212|
|1970-01-01T08:00:00.007+08:00|  39.9998259| 116.3274396|   116.3274163|   39.99984953| 0.04583944643116993|
|1970-01-01T08:00:00.008+08:00| 39.99982597| 116.3274668|   116.3274525|   39.99985014|-0.07863708480736269|
|1970-01-01T08:00:00.009+08:00| 39.99982226| 116.3275026|   116.3274915|   39.99985076|                null|
|1970-01-01T08:00:00.010+08:00| 39.99980988| 116.3274967|   116.3275235|   39.99985137|                null|
|1970-01-01T08:00:00.011+08:00| 39.99984873| 116.3274929|   116.3275611|   39.99985199|                null|
|1970-01-01T08:00:00.012+08:00| 39.99981589| 116.3274745|   116.3275974|    39.9998526|                null|
|1970-01-01T08:00:00.013+08:00|  39.9998259| 116.3275095|   116.3276338|   39.99985384|                null|
|1970-01-01T08:00:00.014+08:00| 39.99984873| 116.3274787|   116.3276695|   39.99985446|                null|
|1970-01-01T08:00:00.015+08:00|  39.9998343| 116.3274693|   116.3277045|   39.99985569|                null|
|1970-01-01T08:00:00.016+08:00| 39.99983316| 116.3274941|   116.3277389|   39.99985631|                null|
|1970-01-01T08:00:00.017+08:00| 39.99983311| 116.3275401|   116.3277747|   39.99985693|                null|
|1970-01-01T08:00:00.018+08:00| 39.99984113| 116.3275713|   116.3278041|   39.99985756|                null|
|1970-01-01T08:00:00.019+08:00| 39.99983602| 116.3276003|   116.3278379|   39.99985818|                null|
|1970-01-01T08:00:00.020+08:00|  39.9998355| 116.3276308|   116.3278723|    39.9998588|                null|
|1970-01-01T08:00:00.021+08:00| 40.00012176| 116.3276107|   116.3279026|   39.99985942|                null|
|1970-01-01T08:00:00.022+08:00|  39.9998404| 116.3276684|          null|          null|                null|
|1970-01-01T08:00:00.023+08:00| 39.99983942| 116.3277016|          null|          null|                null|
|1970-01-01T08:00:00.024+08:00| 39.99984113| 116.3277284|          null|          null|                null|
|1970-01-01T08:00:00.025+08:00| 39.99984283| 116.3277562|          null|          null|                null|
+-----------------------------+------------+------------+--------------+--------------+--------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修复" tabindex="-1"><a class="header-anchor" href="#修复" aria-hidden="true">#</a> 修复</h4><p>用于查询的 SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> MasterDetect<span class="token punctuation">(</span>lo<span class="token punctuation">,</span>la<span class="token punctuation">,</span>m_lo<span class="token punctuation">,</span>m_la<span class="token punctuation">,</span>model<span class="token punctuation">,</span><span class="token string">&#39;output_type&#39;</span><span class="token operator">=</span><span class="token string">&#39;repair&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;p&#39;</span><span class="token operator">=</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;k&#39;</span><span class="token operator">=</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;eta&#39;</span><span class="token operator">=</span><span class="token string">&#39;1.0&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+--------------------------------------------------------------------------------------+
|                         Time|MasterDetect(lo,la,m_lo,m_la,model,&#39;output_type&#39;=&#39;repair&#39;,&#39;p&#39;=&#39;3&#39;,&#39;k&#39;=&#39;3&#39;,&#39;eta&#39;=&#39;1.0&#39;)|
+-----------------------------+--------------------------------------------------------------------------------------+
|1970-01-01T08:00:00.001+08:00|                                                                            116.327274|
|1970-01-01T08:00:00.002+08:00|                                                                            116.327305|
|1970-01-01T08:00:00.003+08:00|                                                                           116.3273291|
|1970-01-01T08:00:00.004+08:00|                                                                            116.327342|
|1970-01-01T08:00:00.005+08:00|                                                                           116.3273744|
|1970-01-01T08:00:00.006+08:00|                                                                           116.3274117|
|1970-01-01T08:00:00.007+08:00|                                                                           116.3274396|
|1970-01-01T08:00:00.008+08:00|                                                                           116.3274668|
|1970-01-01T08:00:00.009+08:00|                                                                           116.3275026|
|1970-01-01T08:00:00.010+08:00|                                                                           116.3274967|
|1970-01-01T08:00:00.011+08:00|                                                                           116.3274929|
|1970-01-01T08:00:00.012+08:00|                                                                           116.3274745|
|1970-01-01T08:00:00.013+08:00|                                                                           116.3275095|
|1970-01-01T08:00:00.014+08:00|                                                                           116.3274787|
|1970-01-01T08:00:00.015+08:00|                                                                           116.3274693|
|1970-01-01T08:00:00.016+08:00|                                                                           116.3274941|
|1970-01-01T08:00:00.017+08:00|                                                                           116.3275401|
|1970-01-01T08:00:00.018+08:00|                                                                           116.3275713|
|1970-01-01T08:00:00.019+08:00|                                                                           116.3276003|
|1970-01-01T08:00:00.020+08:00|                                                                           116.3276308|
|1970-01-01T08:00:00.021+08:00|                                                                           116.3276338|
|1970-01-01T08:00:00.022+08:00|                                                                           116.3276684|
|1970-01-01T08:00:00.023+08:00|                                                                           116.3277016|
|1970-01-01T08:00:00.024+08:00|                                                                           116.3277284|
|1970-01-01T08:00:00.025+08:00|                                                                           116.3277562|
+-----------------------------+--------------------------------------------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="异常检测-1" tabindex="-1"><a class="header-anchor" href="#异常检测-1" aria-hidden="true">#</a> 异常检测</h4><p>用于查询的 SQL 语句：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> MasterDetect<span class="token punctuation">(</span>lo<span class="token punctuation">,</span>la<span class="token punctuation">,</span>m_lo<span class="token punctuation">,</span>m_la<span class="token punctuation">,</span>model<span class="token punctuation">,</span><span class="token string">&#39;output_type&#39;</span><span class="token operator">=</span><span class="token string">&#39;anomaly&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;p&#39;</span><span class="token operator">=</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;k&#39;</span><span class="token operator">=</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;eta&#39;</span><span class="token operator">=</span><span class="token string">&#39;1.0&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------------------------------------------------------------------------------+
|                         Time|MasterDetect(lo,la,m_lo,m_la,model,&#39;output_type&#39;=&#39;anomaly&#39;,&#39;p&#39;=&#39;3&#39;,&#39;k&#39;=&#39;3&#39;,&#39;eta&#39;=&#39;1.0&#39;)|
+-----------------------------+---------------------------------------------------------------------------------------+
|1970-01-01T08:00:00.001+08:00|                                                                                  false|
|1970-01-01T08:00:00.002+08:00|                                                                                  false|
|1970-01-01T08:00:00.003+08:00|                                                                                  false|
|1970-01-01T08:00:00.004+08:00|                                                                                  false|
|1970-01-01T08:00:00.005+08:00|                                                                                   true|
|1970-01-01T08:00:00.006+08:00|                                                                                  false|
|1970-01-01T08:00:00.007+08:00|                                                                                  false|
|1970-01-01T08:00:00.008+08:00|                                                                                  false|
|1970-01-01T08:00:00.009+08:00|                                                                                  false|
|1970-01-01T08:00:00.010+08:00|                                                                                  false|
|1970-01-01T08:00:00.011+08:00|                                                                                  false|
|1970-01-01T08:00:00.012+08:00|                                                                                  false|
|1970-01-01T08:00:00.013+08:00|                                                                                  false|
|1970-01-01T08:00:00.014+08:00|                                                                                   true|
|1970-01-01T08:00:00.015+08:00|                                                                                  false|
|1970-01-01T08:00:00.016+08:00|                                                                                  false|
|1970-01-01T08:00:00.017+08:00|                                                                                  false|
|1970-01-01T08:00:00.018+08:00|                                                                                  false|
|1970-01-01T08:00:00.019+08:00|                                                                                  false|
|1970-01-01T08:00:00.020+08:00|                                                                                  false|
|1970-01-01T08:00:00.021+08:00|                                                                                  false|
|1970-01-01T08:00:00.022+08:00|                                                                                  false|
|1970-01-01T08:00:00.023+08:00|                                                                                  false|
|1970-01-01T08:00:00.024+08:00|                                                                                  false|
|1970-01-01T08:00:00.025+08:00|                                                                                  false|
+-----------------------------+---------------------------------------------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,163);function r(t,c){return e(),s("div",null,[i(`

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

`),d])}const v=n(l,[["render",r],["__file","Anomaly-Detection.html.vue"]]);export{v as default};
