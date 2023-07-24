import{_ as s,o as i,c as a,a as l,f as n,d as e,e as t}from"./app-c075fd0e.js";const d={},r=n('<h1 id="anomaly-detection" tabindex="-1"><a class="header-anchor" href="#anomaly-detection" aria-hidden="true">#</a> Anomaly Detection</h1><h2 id="iqr" tabindex="-1"><a class="header-anchor" href="#iqr" aria-hidden="true">#</a> IQR</h2><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><p>This function is used to detect anomalies based on IQR. Points distributing beyond 1.5 times IQR are selected.</p><p><strong>Name:</strong> IQR</p><p><strong>Input Series:</strong> Only support a single input series. The type is INT32 / INT64 / FLOAT / DOUBLE.</p><ul><li><code>method</code>: When set to &quot;batch&quot;, anomaly test is conducted after importing all data points; when set to &quot;stream&quot;, it is required to provide upper and lower quantiles. The default method is &quot;batch&quot;.</li><li><code>q1</code>: The lower quantile when method is set to &quot;stream&quot;.</li><li><code>q3</code>: The upper quantile when method is set to &quot;stream&quot;.</li></ul><p><strong>Output Series:</strong> Output a single series. The type is DOUBLE.</p>',8),u=e("p",null,[e("strong",null,"Note:"),t(),e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[e("semantics",null,[e("mrow",null,[e("mi",null,"I"),e("mi",null,"Q"),e("mi",null,"R"),e("mo",null,"="),e("msub",null,[e("mi",null,"Q"),e("mn",null,"3")]),e("mo",null,"−"),e("msub",null,[e("mi",null,"Q"),e("mn",null,"1")])]),e("annotation",{encoding:"application/x-tex"},"IQR=Q_3-Q_1")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.8778em","vertical-align":"-0.1944em"}}),e("span",{class:"mord mathnormal",style:{"margin-right":"0.07847em"}},"I"),e("span",{class:"mord mathnormal",style:{"margin-right":"0.00773em"}},"QR"),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.8778em","vertical-align":"-0.1944em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"Q"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3011em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},"3")])])]),e("span",{class:"vlist-s"},"​")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])]),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"−"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.8778em","vertical-align":"-0.1944em"}}),e("span",{class:"mord"},[e("span",{class:"mord mathnormal"},"Q"),e("span",{class:"msupsub"},[e("span",{class:"vlist-t vlist-t2"},[e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.3011em"}},[e("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[e("span",{class:"pstrut",style:{height:"2.7em"}}),e("span",{class:"sizing reset-size6 size3 mtight"},[e("span",{class:"mord mtight"},"1")])])]),e("span",{class:"vlist-s"},"​")]),e("span",{class:"vlist-r"},[e("span",{class:"vlist",style:{height:"0.15em"}},[e("span")])])])])])])])])],-1),o=n(`<h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h3><h4 id="batch-computing" tabindex="-1"><a class="header-anchor" href="#batch-computing" aria-hidden="true">#</a> Batch computing</h4><p>Input series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> iqr<span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-----------------+
|                         Time|iqr(root.test.s1)|
+-----------------------------+-----------------+
|1970-01-01T08:00:01.700+08:00|             10.0|
+-----------------------------+-----------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ksigma" tabindex="-1"><a class="header-anchor" href="#ksigma" aria-hidden="true">#</a> KSigma</h2><h3 id="usage-1" tabindex="-1"><a class="header-anchor" href="#usage-1" aria-hidden="true">#</a> Usage</h3><p>This function is used to detect anomalies based on the Dynamic K-Sigma Algorithm.<br> Within a sliding window, the input value with a deviation of more than k times the standard deviation from the average will be output as anomaly.</p><p><strong>Name:</strong> KSIGMA</p><p><strong>Input Series:</strong> Only support a single input series. The type is INT32 / INT64 / FLOAT / DOUBLE.</p><ul><li><code>k</code>: How many times to multiply on standard deviation to define anomaly, the default value is 3.</li><li><code>window</code>: The window size of Dynamic K-Sigma Algorithm, the default value is 10000.</li></ul><p><strong>Output Series:</strong> Output a single series. The type is same as input series.</p><p><strong>Note:</strong> Only when is larger than 0, the anomaly detection will be performed. Otherwise, nothing will be output.</p><h3 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1" aria-hidden="true">#</a> Examples</h3><h4 id="assigning-k" tabindex="-1"><a class="header-anchor" href="#assigning-k" aria-hidden="true">#</a> Assigning k</h4><p>Input series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> ksigma<span class="token punctuation">(</span>s1<span class="token punctuation">,</span><span class="token string">&quot;k&quot;</span><span class="token operator">=</span><span class="token string">&quot;1.0&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2020</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span> <span class="token number">00</span>:<span class="token number">00</span>:<span class="token number">30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------------------------+
|Time                         |ksigma(root.test.d1.s1,&quot;k&quot;=&quot;3.0&quot;)|
+-----------------------------+---------------------------------+
|2020-01-01T00:00:02.000+08:00|                              0.0|
|2020-01-01T00:00:03.000+08:00|                             50.0|
|2020-01-01T00:00:26.000+08:00|                             50.0|
|2020-01-01T00:00:28.000+08:00|                              0.0|
+-----------------------------+---------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lof" tabindex="-1"><a class="header-anchor" href="#lof" aria-hidden="true">#</a> LOF</h2><h3 id="usage-2" tabindex="-1"><a class="header-anchor" href="#usage-2" aria-hidden="true">#</a> Usage</h3><p>This function is used to detect density anomaly of time series. According to k-th distance calculation parameter and local outlier factor (lof) threshold, the function judges if a set of input values is an density anomaly, and a bool mark of anomaly values will be output.</p><p><strong>Name:</strong> LOF</p><p><strong>Input Series:</strong> Multiple input series. The type is INT32 / INT64 / FLOAT / DOUBLE.</p><ul><li><code>method</code>:assign a detection method. The default value is &quot;default&quot;, when input data has multiple dimensions. The alternative is &quot;series&quot;, when a input series will be transformed to high dimension.</li><li><code>k</code>:use the k-th distance to calculate lof. Default value is 3.</li><li><code>window</code>: size of window to split origin data points. Default value is 10000.</li><li><code>windowsize</code>:dimension that will be transformed into when method is &quot;series&quot;. The default value is 5.</li></ul><p><strong>Output Series:</strong> Output a single series. The type is DOUBLE.</p><p><strong>Note:</strong> Incomplete rows will be ignored. They are neither calculated nor marked as anomaly.</p><h3 id="examples-2" tabindex="-1"><a class="header-anchor" href="#examples-2" aria-hidden="true">#</a> Examples</h3><h4 id="using-default-parameters" tabindex="-1"><a class="header-anchor" href="#using-default-parameters" aria-hidden="true">#</a> Using default parameters</h4><p>Input series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------+---------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> lof<span class="token punctuation">(</span>s1<span class="token punctuation">,</span>s2<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span><span class="token operator">&lt;</span><span class="token number">1000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-------------------------------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="diagnosing-1d-timeseries" tabindex="-1"><a class="header-anchor" href="#diagnosing-1d-timeseries" aria-hidden="true">#</a> Diagnosing 1d timeseries</h4><p>Input series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> lof<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token string">&quot;method&quot;</span><span class="token operator">=</span><span class="token string">&quot;series&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span><span class="token operator">&lt;</span><span class="token number">1000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+--------------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="missdetect" tabindex="-1"><a class="header-anchor" href="#missdetect" aria-hidden="true">#</a> MissDetect</h2><h3 id="usage-3" tabindex="-1"><a class="header-anchor" href="#usage-3" aria-hidden="true">#</a> Usage</h3><p>This function is used to detect missing anomalies.<br> In some datasets, missing values are filled by linear interpolation.<br> Thus, there are several long perfect linear segments.<br> By discovering these perfect linear segments,<br> missing anomalies are detected.</p><p><strong>Name:</strong> MISSDETECT</p><p><strong>Input Series:</strong> Only support a single input series. The data type is INT32 / INT64 / FLOAT / DOUBLE.</p><p><strong>Parameter:</strong></p><p><code>error</code>: The minimum length of the detected missing anomalies, which is an integer greater than or equal to 10. By default, it is 10.</p><p><strong>Output Series:</strong> Output a single series. The type is BOOLEAN. Each data point which is miss anomaly will be labeled as true.</p><h3 id="examples-3" tabindex="-1"><a class="header-anchor" href="#examples-3" aria-hidden="true">#</a> Examples</h3><p>Input series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> missdetect<span class="token punctuation">(</span>s2<span class="token punctuation">,</span><span class="token string">&#39;minlen&#39;</span><span class="token operator">=</span><span class="token string">&#39;10&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+------------------------------------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="range" tabindex="-1"><a class="header-anchor" href="#range" aria-hidden="true">#</a> Range</h2><h3 id="usage-4" tabindex="-1"><a class="header-anchor" href="#usage-4" aria-hidden="true">#</a> Usage</h3><p>This function is used to detect range anomaly of time series. According to upper bound and lower bound parameters, the function judges if a input value is beyond range, aka range anomaly, and a new time series of anomaly will be output.</p><p><strong>Name:</strong> RANGE</p><p><strong>Input Series:</strong> Only support a single input series. The type is INT32 / INT64 / FLOAT / DOUBLE.</p><ul><li><code>lower_bound</code>:lower bound of range anomaly detection.</li><li><code>upper_bound</code>:upper bound of range anomaly detection.</li></ul><p><strong>Output Series:</strong> Output a single series. The type is the same as the input.</p><p><strong>Note:</strong> Only when <code>upper_bound</code> is larger than <code>lower_bound</code>, the anomaly detection will be performed. Otherwise, nothing will be output.</p><h3 id="examples-4" tabindex="-1"><a class="header-anchor" href="#examples-4" aria-hidden="true">#</a> Examples</h3><h4 id="assigning-lower-and-upper-bound" tabindex="-1"><a class="header-anchor" href="#assigning-lower-and-upper-bound" aria-hidden="true">#</a> Assigning Lower and Upper Bound</h4><p>Input series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> range<span class="token punctuation">(</span>s1<span class="token punctuation">,</span><span class="token string">&quot;lower_bound&quot;</span><span class="token operator">=</span><span class="token string">&quot;101.0&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;upper_bound&quot;</span><span class="token operator">=</span><span class="token string">&quot;125.0&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2020</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span> <span class="token number">00</span>:<span class="token number">00</span>:<span class="token number">30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+------------------------------------------------------------------+
|Time                         |range(root.test.d1.s1,&quot;lower_bound&quot;=&quot;101.0&quot;,&quot;upper_bound&quot;=&quot;125.0&quot;)|
+-----------------------------+------------------------------------------------------------------+
|2020-01-01T00:00:02.000+08:00|                                                             100.0|
|2020-01-01T00:00:28.000+08:00|                                                             126.0|
+-----------------------------+------------------------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="twosidedfilter" tabindex="-1"><a class="header-anchor" href="#twosidedfilter" aria-hidden="true">#</a> TwoSidedFilter</h2><h3 id="usage-5" tabindex="-1"><a class="header-anchor" href="#usage-5" aria-hidden="true">#</a> Usage</h3><p>The function is used to filter anomalies of a numeric time series based on two-sided window detection.</p><p><strong>Name:</strong> TWOSIDEDFILTER</p><p><strong>Input Series:</strong> Only support a single input series. The data type is INT32 / INT64 / FLOAT / DOUBLE</p><p><strong>Output Series:</strong> Output a single series. The type is the same as the input. It is the input without anomalies.</p><p><strong>Parameter:</strong></p><ul><li><p><code>len</code>: The size of the window, which is a positive integer. By default, it&#39;s 5. When <code>len</code>=3, the algorithm detects forward window and backward window with length 3 and calculates the outlierness of the current point.</p></li><li><p><code>threshold</code>: The threshold of outlierness, which is a floating number in (0,1). By default, it&#39;s 0.3. The strict standard of detecting anomalies is in proportion to the threshold.</p></li></ul><h3 id="examples-5" tabindex="-1"><a class="header-anchor" href="#examples-5" aria-hidden="true">#</a> Examples</h3><p>Input series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> TwoSidedFilter<span class="token punctuation">(</span>s0<span class="token punctuation">,</span> <span class="token string">&#39;len&#39;</span><span class="token operator">=</span><span class="token string">&#39;5&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;threshold&#39;</span><span class="token operator">=</span><span class="token string">&#39;0.3&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="outlier" tabindex="-1"><a class="header-anchor" href="#outlier" aria-hidden="true">#</a> Outlier</h2><h3 id="usage-6" tabindex="-1"><a class="header-anchor" href="#usage-6" aria-hidden="true">#</a> Usage</h3><p>This function is used to detect distance-based outliers. For each point in the current window, if the number of its neighbors within the distance of neighbor distance threshold is less than the neighbor count threshold, the point in detected as an outlier.</p><p><strong>Name:</strong> OUTLIER</p><p><strong>Input Series：</strong> Only support a single input series. The type is INT32 / INT64 / FLOAT / DOUBLE.</p><ul><li><code>r</code>：the neighbor distance threshold.</li><li><code>k</code>：the neighbor count threshold.</li><li><code>w</code>：the window size.</li><li><code>s</code>：the slide size.</li></ul><p><strong>Output Series:</strong> Output a single series. The type is the same as the input.</p><h3 id="examples-6" tabindex="-1"><a class="header-anchor" href="#examples-6" aria-hidden="true">#</a> Examples</h3><h4 id="assigning-parameters-of-queries" tabindex="-1"><a class="header-anchor" href="#assigning-parameters-of-queries" aria-hidden="true">#</a> Assigning Parameters of Queries</h4><p>Input series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> outlier<span class="token punctuation">(</span>s1<span class="token punctuation">,</span><span class="token string">&quot;r&quot;</span><span class="token operator">=</span><span class="token string">&quot;5.0&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;k&quot;</span><span class="token operator">=</span><span class="token string">&quot;4&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;w&quot;</span><span class="token operator">=</span><span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;s&quot;</span><span class="token operator">=</span><span class="token string">&quot;5&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+--------------------------------------------------------+
|                         Time|outlier(root.test.s1,&quot;r&quot;=&quot;5.0&quot;,&quot;k&quot;=&quot;4&quot;,&quot;w&quot;=&quot;10&quot;,&quot;s&quot;=&quot;5&quot;)|
+-----------------------------+--------------------------------------------------------+
|2020-01-05T00:00:03.000+08:00|                                                    69.0|
+-----------------------------+--------------------------------------------------------+
|2020-01-05T00:00:08.000+08:00|                                                    52.0|
+-----------------------------+--------------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mastertrain" tabindex="-1"><a class="header-anchor" href="#mastertrain" aria-hidden="true">#</a> MasterTrain</h3><h4 id="usage-7" tabindex="-1"><a class="header-anchor" href="#usage-7" aria-hidden="true">#</a> Usage</h4><p>This function is used to train the VAR model based on master data. The model is trained on learning samples consisting of p+1 consecutive non-error points.</p><p><strong>Name:</strong> MasterTrain</p><p><strong>Input Series：</strong> Support multiple input series. The types are are in INT32 / INT64 / FLOAT / DOUBLE.</p><p><strong>Parameters:</strong></p><ul><li><code>p</code>: The order of the model.</li><li><code>eta</code>: The distance threshold. By default, it will be estimated based on the 3-sigma rule.</li></ul><p><strong>Output Series:</strong> Output a single series. The type is the same as the input.</p><p><strong>Installation</strong></p><ul><li>Install IoTDB from branch <code>research/master-detector</code>.</li><li>Run <code>mvn clean package -am -Dmaven.test.skip=true</code>.</li><li>Copy <code>./distribution/target/apache-iotdb-1.2.0-SNAPSHOT-library-udf-bin/apache-iotdb-1.2.0-SNAPSHOT-library-udf-bin/ext/udf/library-udf.jar</code> to <code>./ext/udf/</code>.</li><li>Start IoTDB server and run <code>create function MasterTrain as &#39;org.apache.iotdb.library.anomaly.UDTFMasterTrain&#39;</code> in client.</li></ul><h4 id="examples-7" tabindex="-1"><a class="header-anchor" href="#examples-7" aria-hidden="true">#</a> Examples</h4><p>Input series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+------------+------------+--------------+--------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> MasterTrain<span class="token punctuation">(</span>lo<span class="token punctuation">,</span>la<span class="token punctuation">,</span>m_lo<span class="token punctuation">,</span>m_la<span class="token punctuation">,</span><span class="token string">&#39;p&#39;</span><span class="token operator">=</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;eta&#39;</span><span class="token operator">=</span><span class="token string">&#39;1.0&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------------------------------------------------------------------------------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="masterdetect" tabindex="-1"><a class="header-anchor" href="#masterdetect" aria-hidden="true">#</a> MasterDetect</h3><h4 id="usage-8" tabindex="-1"><a class="header-anchor" href="#usage-8" aria-hidden="true">#</a> Usage</h4><p>This function is used to detect time series and repair errors based on master data. The VAR model is trained by MasterTrain.</p><p><strong>Name:</strong> MasterDetect</p><p><strong>Input Series：</strong> Support multiple input series. The types are are in INT32 / INT64 / FLOAT / DOUBLE.</p><p><strong>Parameters:</strong></p><ul><li><code>p</code>: The order of the model.</li><li><code>k</code>: The number of neighbors in master data. It is a positive integer. By default, it will be estimated according to the tuple distance of the k-th nearest neighbor in the master data.</li><li><code>eta</code>: The distance threshold. By default, it will be estimated based on the 3-sigma rule.</li><li><code>eta</code>: The detection threshold. By default, it will be estimated based on the 3-sigma rule.</li><li><code>output_type</code>: The type of output. &#39;repair&#39; for repairing and &#39;anomaly&#39; for anomaly detection.</li><li><code>output_column</code>: The repaired column to output, defaults to 1 which means output the repair result of the first column.</li></ul><p><strong>Output Series:</strong> Output a single series. The type is the same as the input.</p><p><strong>Installation</strong></p><ul><li>Install IoTDB from branch <code>research/master-detector</code>.</li><li>Run <code>mvn clean package -am -Dmaven.test.skip=true</code>.</li><li>Copy <code>./distribution/target/apache-iotdb-1.2.0-SNAPSHOT-library-udf-bin/apache-iotdb-1.2.0-SNAPSHOT-library-udf-bin/ext/udf/library-udf.jar</code> to <code>./ext/udf/</code>.</li><li>Start IoTDB server and run <code>create function MasterDetect as &#39;org.apache.iotdb.library.anomaly.UDTFMasterDetect&#39;</code> in client.</li></ul><h4 id="examples-8" tabindex="-1"><a class="header-anchor" href="#examples-8" aria-hidden="true">#</a> Examples</h4><p>Input series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+------------+------------+--------------+--------------+--------------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="repairing" tabindex="-1"><a class="header-anchor" href="#repairing" aria-hidden="true">#</a> Repairing</h5><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> MasterDetect<span class="token punctuation">(</span>lo<span class="token punctuation">,</span>la<span class="token punctuation">,</span>m_lo<span class="token punctuation">,</span>m_la<span class="token punctuation">,</span>model<span class="token punctuation">,</span><span class="token string">&#39;output_type&#39;</span><span class="token operator">=</span><span class="token string">&#39;repair&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;p&#39;</span><span class="token operator">=</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;k&#39;</span><span class="token operator">=</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;eta&#39;</span><span class="token operator">=</span><span class="token string">&#39;1.0&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+--------------------------------------------------------------------------------------+
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="anomaly-detection-1" tabindex="-1"><a class="header-anchor" href="#anomaly-detection-1" aria-hidden="true">#</a> Anomaly Detection</h5><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> MasterDetect<span class="token punctuation">(</span>lo<span class="token punctuation">,</span>la<span class="token punctuation">,</span>m_lo<span class="token punctuation">,</span>m_la<span class="token punctuation">,</span>model<span class="token punctuation">,</span><span class="token string">&#39;output_type&#39;</span><span class="token operator">=</span><span class="token string">&#39;anomaly&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;p&#39;</span><span class="token operator">=</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;k&#39;</span><span class="token operator">=</span><span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;eta&#39;</span><span class="token operator">=</span><span class="token string">&#39;1.0&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------------------------------------------------------------------------------+
|                         Time|MasterDetect(lo,la,m_lo,m_la,model,&#39;output_type&#39;=&#39;anomaly&#39;,&#39;p&#39;=&#39;3&#39;,&#39;k&#39;=&#39;3&#39;,&#39;eta&#39;=&#39;1.0&#39;)|
+-----------------------------+---------------------------------------------------------------------------------------+
|1970-01-01T08:00:00.001+08:00|                                                                                  false|
|1970-01-01T08:00:00.002+08:00|                                                                                  false|
|1970-01-01T08:00:00.003+08:00|                                                                                  false|
|1970-01-01T08:00:00.004+08:00|                                                                                  false|
|1970-01-01T08:00:00.005+08:00|                                                                                   true|
|1970-01-01T08:00:00.006+08:00|                                                                                   true|
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,148);function c(v,p){return i(),a("div",null,[l(`

​    Licensed to the Apache Software Foundation (ASF) under one
​    or more contributor license agreements.  See the NOTICE file
​    distributed with this work for additional information
​    regarding copyright ownership.  The ASF licenses this file
​    to you under the Apache License, Version 2.0 (the
​    "License"); you may not use this file except in compliance
​    with the License.  You may obtain a copy of the License at
​    
​        http://www.apache.org/licenses/LICENSE-2.0
​    
​    Unless required by applicable law or agreed to in writing,
​    software distributed under the License is distributed on an
​    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
​    KIND, either express or implied.  See the License for the
​    specific language governing permissions and limitations
​    under the License.

`),r,u,o])}const b=s(d,[["render",c],["__file","Anomaly-Detection.html.vue"]]);export{b as default};
