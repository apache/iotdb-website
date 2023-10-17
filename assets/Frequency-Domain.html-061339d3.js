import{_ as a,o as i,c as l,a as t,f as e,d as s,e as n}from"./app-ab4a67c1.js";const r={},d=e(`<h1 id="frequency-domain-analysis" tabindex="-1"><a class="header-anchor" href="#frequency-domain-analysis" aria-hidden="true">#</a> Frequency Domain Analysis</h1><h2 id="conv" tabindex="-1"><a class="header-anchor" href="#conv" aria-hidden="true">#</a> Conv</h2><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><p>This function is used to calculate the convolution, i.e. polynomial multiplication.</p><p><strong>Name:</strong> CONV</p><p><strong>Input:</strong> Only support two input series. The types are both INT32 / INT64 / FLOAT / DOUBLE.</p><p><strong>Output:</strong> Output a single series. The type is DOUBLE. It is the result of convolution whose timestamps starting from 0 only indicate the order.</p><p><strong>Note:</strong> <code>NaN</code> in the input series will be ignored.</p><h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h3><p>Input series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------+---------------+
|                         Time|root.test.d2.s1|root.test.d2.s2|
+-----------------------------+---------------+---------------+
|1970-01-01T08:00:00.000+08:00|            1.0|            7.0|
|1970-01-01T08:00:00.001+08:00|            0.0|            2.0|
|1970-01-01T08:00:00.002+08:00|            1.0|           null|
+-----------------------------+---------------+---------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> conv<span class="token punctuation">(</span>s1<span class="token punctuation">,</span>s2<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+--------------------------------------+
|                         Time|conv(root.test.d2.s1, root.test.d2.s2)|
+-----------------------------+--------------------------------------+
|1970-01-01T08:00:00.000+08:00|                                   7.0|
|1970-01-01T08:00:00.001+08:00|                                   2.0|
|1970-01-01T08:00:00.002+08:00|                                   7.0|
|1970-01-01T08:00:00.003+08:00|                                   2.0|
+-----------------------------+--------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="deconv" tabindex="-1"><a class="header-anchor" href="#deconv" aria-hidden="true">#</a> Deconv</h2><h3 id="usage-1" tabindex="-1"><a class="header-anchor" href="#usage-1" aria-hidden="true">#</a> Usage</h3><p>This function is used to calculate the deconvolution, i.e. polynomial division.</p><p><strong>Name:</strong> DECONV</p><p><strong>Input:</strong> Only support two input series. The types are both INT32 / INT64 / FLOAT / DOUBLE.</p><p><strong>Parameters:</strong></p><ul><li><code>result</code>: The result of deconvolution, which is &#39;quotient&#39; or &#39;remainder&#39;. By default, the quotient will be output.</li></ul><p><strong>Output:</strong> Output a single series. The type is DOUBLE. It is the result of deconvolving the second series from the first series (dividing the first series by the second series) whose timestamps starting from 0 only indicate the order.</p><p><strong>Note:</strong> <code>NaN</code> in the input series will be ignored.</p><h3 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1" aria-hidden="true">#</a> Examples</h3><h4 id="calculate-the-quotient" tabindex="-1"><a class="header-anchor" href="#calculate-the-quotient" aria-hidden="true">#</a> Calculate the quotient</h4><p>When <code>result</code> is &#39;quotient&#39; or the default, this function calculates the quotient of the deconvolution.</p><p>Input series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------+---------------+
|                         Time|root.test.d2.s3|root.test.d2.s2|
+-----------------------------+---------------+---------------+
|1970-01-01T08:00:00.000+08:00|            8.0|            7.0|
|1970-01-01T08:00:00.001+08:00|            2.0|            2.0|
|1970-01-01T08:00:00.002+08:00|            7.0|           null|
|1970-01-01T08:00:00.003+08:00|            2.0|           null|
+-----------------------------+---------------+---------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> deconv<span class="token punctuation">(</span>s3<span class="token punctuation">,</span>s2<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+----------------------------------------+
|                         Time|deconv(root.test.d2.s3, root.test.d2.s2)|
+-----------------------------+----------------------------------------+
|1970-01-01T08:00:00.000+08:00|                                     1.0|
|1970-01-01T08:00:00.001+08:00|                                     0.0|
|1970-01-01T08:00:00.002+08:00|                                     1.0|
+-----------------------------+----------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="calculate-the-remainder" tabindex="-1"><a class="header-anchor" href="#calculate-the-remainder" aria-hidden="true">#</a> Calculate the remainder</h4><p>When <code>result</code> is &#39;remainder&#39;, this function calculates the remainder of the deconvolution.</p><p>Input series is the same as above, the SQL for query is shown below:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> deconv<span class="token punctuation">(</span>s3<span class="token punctuation">,</span>s2<span class="token punctuation">,</span><span class="token string">&#39;result&#39;</span><span class="token operator">=</span><span class="token string">&#39;remainder&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+--------------------------------------------------------------+
|                         Time|deconv(root.test.d2.s3, root.test.d2.s2, &quot;result&quot;=&quot;remainder&quot;)|
+-----------------------------+--------------------------------------------------------------+
|1970-01-01T08:00:00.000+08:00|                                                           1.0|
|1970-01-01T08:00:00.001+08:00|                                                           0.0|
|1970-01-01T08:00:00.002+08:00|                                                           0.0|
|1970-01-01T08:00:00.003+08:00|                                                           0.0|
+-----------------------------+--------------------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dwt" tabindex="-1"><a class="header-anchor" href="#dwt" aria-hidden="true">#</a> DWT</h2><h3 id="usage-2" tabindex="-1"><a class="header-anchor" href="#usage-2" aria-hidden="true">#</a> Usage</h3><p>This function is used to calculate 1d discrete wavelet transform of a numerical series.</p><p><strong>Name:</strong> DWT</p><p><strong>Input:</strong> Only support a single input series. The type is INT32 / INT64 / FLOAT / DOUBLE.</p><p><strong>Parameters:</strong></p>`,45),o=s("ul",null,[s("li",null,[s("code",null,"method"),n(": The type of wavelet. May select 'Haar', 'DB4', 'DB6', 'DB8', where DB means Daubechies. User may offer coefficients of wavelet transform and ignore this parameter. Case ignored.")]),s("li",null,[s("code",null,"coef"),n(": Coefficients of wavelet transform. When providing this parameter, use comma ',' to split them, and leave no spaces or other punctuations.")]),s("li",null,[s("code",null,"layer"),n(": Times to transform. The number of output vectors equals "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"l"),s("mi",null,"a"),s("mi",null,"y"),s("mi",null,"e"),s("mi",null,"r"),s("mo",null,"+"),s("mn",null,"1")]),s("annotation",{encoding:"application/x-tex"},"layer+1")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.01968em"}},"l"),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.02778em"}},"yer"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"1")])])]),n(". Default is 1.")])],-1),c=e(`<p><strong>Output:</strong> Output a single series. The type is DOUBLE. The length is the same as the input.</p><p><strong>Note:</strong> The length of input series must be an integer number power of 2.</p><h3 id="examples-2" tabindex="-1"><a class="header-anchor" href="#examples-2" aria-hidden="true">#</a> Examples</h3><h4 id="haar-wavelet-transform" tabindex="-1"><a class="header-anchor" href="#haar-wavelet-transform" aria-hidden="true">#</a> Haar wavelet transform</h4><p>Input series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------+
|                         Time|root.test.d1.s1|
+-----------------------------+---------------+
|1970-01-01T08:00:00.000+08:00|            0.0|
|1970-01-01T08:00:00.100+08:00|            0.2|
|1970-01-01T08:00:00.200+08:00|            1.5|
|1970-01-01T08:00:00.300+08:00|            1.2|
|1970-01-01T08:00:00.400+08:00|            0.6|
|1970-01-01T08:00:00.500+08:00|            1.7|
|1970-01-01T08:00:00.600+08:00|            0.8|
|1970-01-01T08:00:00.700+08:00|            2.0|
|1970-01-01T08:00:00.800+08:00|            2.5|
|1970-01-01T08:00:00.900+08:00|            2.1|
|1970-01-01T08:00:01.000+08:00|            0.0|
|1970-01-01T08:00:01.100+08:00|            2.0|
|1970-01-01T08:00:01.200+08:00|            1.8|
|1970-01-01T08:00:01.300+08:00|            1.2|
|1970-01-01T08:00:01.400+08:00|            1.0|
|1970-01-01T08:00:01.500+08:00|            1.6|
+-----------------------------+---------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> dwt<span class="token punctuation">(</span>s1<span class="token punctuation">,</span><span class="token string">&quot;method&quot;</span><span class="token operator">=</span><span class="token string">&quot;haar&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-------------------------------------+
|                         Time|dwt(root.test.d1.s1, &quot;method&quot;=&quot;haar&quot;)|
+-----------------------------+-------------------------------------+
|1970-01-01T08:00:00.000+08:00|                  0.14142135834465192|
|1970-01-01T08:00:00.100+08:00|                    1.909188342921157|
|1970-01-01T08:00:00.200+08:00|                   1.6263456473052773|
|1970-01-01T08:00:00.300+08:00|                   1.9798989957517026|
|1970-01-01T08:00:00.400+08:00|                    3.252691126023161|
|1970-01-01T08:00:00.500+08:00|                    1.414213562373095|
|1970-01-01T08:00:00.600+08:00|                   2.1213203435596424|
|1970-01-01T08:00:00.700+08:00|                   1.8384776479437628|
|1970-01-01T08:00:00.800+08:00|                 -0.14142135834465192|
|1970-01-01T08:00:00.900+08:00|                  0.21213200063848547|
|1970-01-01T08:00:01.000+08:00|                  -0.7778174761639416|
|1970-01-01T08:00:01.100+08:00|                  -0.8485281289944873|
|1970-01-01T08:00:01.200+08:00|                   0.2828427799095765|
|1970-01-01T08:00:01.300+08:00|                   -1.414213562373095|
|1970-01-01T08:00:01.400+08:00|                  0.42426400127697095|
|1970-01-01T08:00:01.500+08:00|                 -0.42426408557066786|
+-----------------------------+-------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fft" tabindex="-1"><a class="header-anchor" href="#fft" aria-hidden="true">#</a> FFT</h2><h3 id="usage-3" tabindex="-1"><a class="header-anchor" href="#usage-3" aria-hidden="true">#</a> Usage</h3><p>This function is used to calculate the fast Fourier transform (FFT) of a numerical series.</p><p><strong>Name:</strong> FFT</p><p><strong>Input:</strong> Only support a single input series. The type is INT32 / INT64 / FLOAT / DOUBLE.</p><p><strong>Parameters:</strong></p><ul><li><code>method</code>: The type of FFT, which is &#39;uniform&#39; (by default) or &#39;nonuniform&#39;. If the value is &#39;uniform&#39;, the timestamps will be ignored and all data points will be regarded as equidistant. Thus, the equidistant fast Fourier transform algorithm will be applied. If the value is &#39;nonuniform&#39; (TODO), the non-equidistant fast Fourier transform algorithm will be applied based on timestamps.</li><li><code>result</code>: The result of FFT, which is &#39;real&#39;, &#39;imag&#39;, &#39;abs&#39; or &#39;angle&#39;, corresponding to the real part, imaginary part, magnitude and phase angle. By default, the magnitude will be output.</li><li><code>compress</code>: The parameter of compression, which is within (0,1]. It is the reserved energy ratio of lossy compression. By default, there is no compression.</li></ul><p><strong>Output:</strong> Output a single series. The type is DOUBLE. The length is the same as the input. The timestamps starting from 0 only indicate the order.</p><p><strong>Note:</strong> <code>NaN</code> in the input series will be ignored.</p><h3 id="examples-3" tabindex="-1"><a class="header-anchor" href="#examples-3" aria-hidden="true">#</a> Examples</h3><h4 id="uniform-fft" tabindex="-1"><a class="header-anchor" href="#uniform-fft" aria-hidden="true">#</a> Uniform FFT</h4><p>With the default <code>type</code>, uniform FFT is applied.</p><p>Input series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------+
|                         Time|root.test.d1.s1|
+-----------------------------+---------------+
|1970-01-01T08:00:00.000+08:00|       2.902113|
|1970-01-01T08:00:01.000+08:00|      1.1755705|
|1970-01-01T08:00:02.000+08:00|     -2.1755705|
|1970-01-01T08:00:03.000+08:00|     -1.9021131|
|1970-01-01T08:00:04.000+08:00|            1.0|
|1970-01-01T08:00:05.000+08:00|      1.9021131|
|1970-01-01T08:00:06.000+08:00|      0.1755705|
|1970-01-01T08:00:07.000+08:00|     -1.1755705|
|1970-01-01T08:00:08.000+08:00|      -0.902113|
|1970-01-01T08:00:09.000+08:00|            0.0|
|1970-01-01T08:00:10.000+08:00|       0.902113|
|1970-01-01T08:00:11.000+08:00|      1.1755705|
|1970-01-01T08:00:12.000+08:00|     -0.1755705|
|1970-01-01T08:00:13.000+08:00|     -1.9021131|
|1970-01-01T08:00:14.000+08:00|           -1.0|
|1970-01-01T08:00:15.000+08:00|      1.9021131|
|1970-01-01T08:00:16.000+08:00|      2.1755705|
|1970-01-01T08:00:17.000+08:00|     -1.1755705|
|1970-01-01T08:00:18.000+08:00|      -2.902113|
|1970-01-01T08:00:19.000+08:00|            0.0|
+-----------------------------+---------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> fft<span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+----------------------+
|                         Time|  fft(root.test.d1.s1)|
+-----------------------------+----------------------+
|1970-01-01T08:00:00.000+08:00|                   0.0|
|1970-01-01T08:00:00.001+08:00| 1.2727111142703152E-8|
|1970-01-01T08:00:00.002+08:00|  2.385520799101839E-7|
|1970-01-01T08:00:00.003+08:00|  8.723291723972645E-8|
|1970-01-01T08:00:00.004+08:00|    19.999999960195904|
|1970-01-01T08:00:00.005+08:00|     9.999999850988388|
|1970-01-01T08:00:00.006+08:00| 3.2260694930700566E-7|
|1970-01-01T08:00:00.007+08:00|  8.723291605373329E-8|
|1970-01-01T08:00:00.008+08:00|  1.108657103979944E-7|
|1970-01-01T08:00:00.009+08:00| 1.2727110997246171E-8|
|1970-01-01T08:00:00.010+08:00|1.9852334701272664E-23|
|1970-01-01T08:00:00.011+08:00| 1.2727111194499847E-8|
|1970-01-01T08:00:00.012+08:00|  1.108657103979944E-7|
|1970-01-01T08:00:00.013+08:00|  8.723291785769131E-8|
|1970-01-01T08:00:00.014+08:00|  3.226069493070057E-7|
|1970-01-01T08:00:00.015+08:00|     9.999999850988388|
|1970-01-01T08:00:00.016+08:00|    19.999999960195904|
|1970-01-01T08:00:00.017+08:00|  8.723291747109068E-8|
|1970-01-01T08:00:00.018+08:00| 2.3855207991018386E-7|
|1970-01-01T08:00:00.019+08:00| 1.2727112069910878E-8|
+-----------------------------+----------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28),m=s("p",null,[n("Note: The input is "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"y"),s("mo",null,"="),s("mi",null,"s"),s("mi",null,"i"),s("mi",null,"n"),s("mo",{stretchy:"false"},"("),s("mn",null,"2"),s("mi",null,"π"),s("mi",null,"t"),s("mi",{mathvariant:"normal"},"/"),s("mn",null,"4"),s("mo",{stretchy:"false"},")"),s("mo",null,"+"),s("mn",null,"2"),s("mi",null,"s"),s("mi",null,"i"),s("mi",null,"n"),s("mo",{stretchy:"false"},"("),s("mn",null,"2"),s("mi",null,"π"),s("mi",null,"t"),s("mi",{mathvariant:"normal"},"/"),s("mn",null,"5"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"y=sin(2\\pi t/4)+2sin(2\\pi t/5)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mord mathnormal"},"in"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"2"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"π"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord"},"/4"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"2"),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mord mathnormal"},"in"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"2"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"π"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord"},"/5"),s("span",{class:"mclose"},")")])])]),n(" with a length of 20. Thus, there are peaks in "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"k"),s("mo",null,"="),s("mn",null,"4")]),s("annotation",{encoding:"application/x-tex"},"k=4")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"4")])])]),n(" and "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"k"),s("mo",null,"="),s("mn",null,"5")]),s("annotation",{encoding:"application/x-tex"},"k=5")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6444em"}}),s("span",{class:"mord"},"5")])])]),n(" of the output.")],-1),u=e(`<h4 id="uniform-fft-with-compression" tabindex="-1"><a class="header-anchor" href="#uniform-fft-with-compression" aria-hidden="true">#</a> Uniform FFT with Compression</h4><p>Input series is the same as above, the SQL for query is shown below:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> fft<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token string">&#39;result&#39;</span><span class="token operator">=</span><span class="token string">&#39;real&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;compress&#39;</span><span class="token operator">=</span><span class="token string">&#39;0.99&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> fft<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token string">&#39;result&#39;</span><span class="token operator">=</span><span class="token string">&#39;imag&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;compress&#39;</span><span class="token operator">=</span><span class="token string">&#39;0.99&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+----------------------+----------------------+
|                         Time|  fft(root.test.d1.s1,|  fft(root.test.d1.s1,|
|                             |      &quot;result&quot;=&quot;real&quot;,|      &quot;result&quot;=&quot;imag&quot;,|
|                             |    &quot;compress&quot;=&quot;0.99&quot;)|    &quot;compress&quot;=&quot;0.99&quot;)|
+-----------------------------+----------------------+----------------------+
|1970-01-01T08:00:00.000+08:00|                   0.0|                   0.0|
|1970-01-01T08:00:00.001+08:00| -3.932894010461041E-9| 1.2104201863039066E-8|
|1970-01-01T08:00:00.002+08:00|-1.4021739447490164E-7| 1.9299268669082926E-7|
|1970-01-01T08:00:00.003+08:00| -7.057291240286645E-8|  5.127422242345858E-8|
|1970-01-01T08:00:00.004+08:00|    19.021130288047125|    -6.180339875198807|
|1970-01-01T08:00:00.005+08:00|     9.999999850988388| 3.501852745067114E-16|
|1970-01-01T08:00:00.019+08:00| -3.932894898639461E-9|-1.2104202549376264E-8|
+-----------------------------+----------------------+----------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note: Based on the conjugation of the Fourier transform result, only the first half of the compression result is reserved.<br> According to the given parameter, data points are reserved from low frequency to high frequency until the reserved energy ratio exceeds it.<br> The last data point is reserved to indicate the length of the series.</p><h2 id="highpass" tabindex="-1"><a class="header-anchor" href="#highpass" aria-hidden="true">#</a> HighPass</h2><h3 id="usage-4" tabindex="-1"><a class="header-anchor" href="#usage-4" aria-hidden="true">#</a> Usage</h3><p>This function performs low-pass filtering on the input series and extracts components above the cutoff frequency.<br> The timestamps of input will be ignored and all data points will be regarded as equidistant.</p><p><strong>Name:</strong> HIGHPASS</p><p><strong>Input:</strong> Only support a single input series. The type is INT32 / INT64 / FLOAT / DOUBLE.</p><p><strong>Parameters:</strong></p><ul><li><code>wpass</code>: The normalized cutoff frequency which values (0,1). This parameter cannot be lacked.</li></ul><p><strong>Output:</strong> Output a single series. The type is DOUBLE. It is the input after filtering. The length and timestamps of output are the same as the input.</p><p><strong>Note:</strong> <code>NaN</code> in the input series will be ignored.</p><h3 id="examples-4" tabindex="-1"><a class="header-anchor" href="#examples-4" aria-hidden="true">#</a> Examples</h3><p>Input series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------+
|                         Time|root.test.d1.s1|
+-----------------------------+---------------+
|1970-01-01T08:00:00.000+08:00|       2.902113|
|1970-01-01T08:00:01.000+08:00|      1.1755705|
|1970-01-01T08:00:02.000+08:00|     -2.1755705|
|1970-01-01T08:00:03.000+08:00|     -1.9021131|
|1970-01-01T08:00:04.000+08:00|            1.0|
|1970-01-01T08:00:05.000+08:00|      1.9021131|
|1970-01-01T08:00:06.000+08:00|      0.1755705|
|1970-01-01T08:00:07.000+08:00|     -1.1755705|
|1970-01-01T08:00:08.000+08:00|      -0.902113|
|1970-01-01T08:00:09.000+08:00|            0.0|
|1970-01-01T08:00:10.000+08:00|       0.902113|
|1970-01-01T08:00:11.000+08:00|      1.1755705|
|1970-01-01T08:00:12.000+08:00|     -0.1755705|
|1970-01-01T08:00:13.000+08:00|     -1.9021131|
|1970-01-01T08:00:14.000+08:00|           -1.0|
|1970-01-01T08:00:15.000+08:00|      1.9021131|
|1970-01-01T08:00:16.000+08:00|      2.1755705|
|1970-01-01T08:00:17.000+08:00|     -1.1755705|
|1970-01-01T08:00:18.000+08:00|      -2.902113|
|1970-01-01T08:00:19.000+08:00|            0.0|
+-----------------------------+---------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> highpass<span class="token punctuation">(</span>s1<span class="token punctuation">,</span><span class="token string">&#39;wpass&#39;</span><span class="token operator">=</span><span class="token string">&#39;0.45&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-----------------------------------------+
|                         Time|highpass(root.test.d1.s1, &quot;wpass&quot;=&quot;0.45&quot;)|
+-----------------------------+-----------------------------------------+
|1970-01-01T08:00:00.000+08:00|                       0.9999999534830373|
|1970-01-01T08:00:01.000+08:00|                    1.7462829277628608E-8|
|1970-01-01T08:00:02.000+08:00|                      -0.9999999593178128|
|1970-01-01T08:00:03.000+08:00|                   -4.1115269056426626E-8|
|1970-01-01T08:00:04.000+08:00|                       0.9999999925494194|
|1970-01-01T08:00:05.000+08:00|                     3.328126513330016E-8|
|1970-01-01T08:00:06.000+08:00|                      -1.0000000183304454|
|1970-01-01T08:00:07.000+08:00|                    6.260191433311374E-10|
|1970-01-01T08:00:08.000+08:00|                       1.0000000018134796|
|1970-01-01T08:00:09.000+08:00|                   -3.097210911744423E-17|
|1970-01-01T08:00:10.000+08:00|                      -1.0000000018134794|
|1970-01-01T08:00:11.000+08:00|                   -6.260191627862097E-10|
|1970-01-01T08:00:12.000+08:00|                       1.0000000183304454|
|1970-01-01T08:00:13.000+08:00|                    -3.328126501424346E-8|
|1970-01-01T08:00:14.000+08:00|                      -0.9999999925494196|
|1970-01-01T08:00:15.000+08:00|                     4.111526915498874E-8|
|1970-01-01T08:00:16.000+08:00|                       0.9999999593178128|
|1970-01-01T08:00:17.000+08:00|                   -1.7462829341296528E-8|
|1970-01-01T08:00:18.000+08:00|                      -0.9999999534830369|
|1970-01-01T08:00:19.000+08:00|                   -1.035237222742873E-16|
+-----------------------------+-----------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22),p=s("p",null,[n("Note: The input is "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"y"),s("mo",null,"="),s("mi",null,"s"),s("mi",null,"i"),s("mi",null,"n"),s("mo",{stretchy:"false"},"("),s("mn",null,"2"),s("mi",null,"π"),s("mi",null,"t"),s("mi",{mathvariant:"normal"},"/"),s("mn",null,"4"),s("mo",{stretchy:"false"},")"),s("mo",null,"+"),s("mn",null,"2"),s("mi",null,"s"),s("mi",null,"i"),s("mi",null,"n"),s("mo",{stretchy:"false"},"("),s("mn",null,"2"),s("mi",null,"π"),s("mi",null,"t"),s("mi",{mathvariant:"normal"},"/"),s("mn",null,"5"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"y=sin(2\\pi t/4)+2sin(2\\pi t/5)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mord mathnormal"},"in"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"2"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"π"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord"},"/4"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"2"),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mord mathnormal"},"in"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"2"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"π"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord"},"/5"),s("span",{class:"mclose"},")")])])]),n(" with a length of 20. Thus, the output is "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"y"),s("mo",null,"="),s("mi",null,"s"),s("mi",null,"i"),s("mi",null,"n"),s("mo",{stretchy:"false"},"("),s("mn",null,"2"),s("mi",null,"π"),s("mi",null,"t"),s("mi",{mathvariant:"normal"},"/"),s("mn",null,"4"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"y=sin(2\\pi t/4)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mord mathnormal"},"in"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"2"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"π"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord"},"/4"),s("span",{class:"mclose"},")")])])]),n(" after high-pass filtering.")],-1),v=e(`<h2 id="ifft" tabindex="-1"><a class="header-anchor" href="#ifft" aria-hidden="true">#</a> IFFT</h2><h3 id="usage-5" tabindex="-1"><a class="header-anchor" href="#usage-5" aria-hidden="true">#</a> Usage</h3><p>This function treats the two input series as the real and imaginary part of a complex series, performs an inverse fast Fourier transform (IFFT), and outputs the real part of the result.<br> For the input format, please refer to the output format of <code>FFT</code> function.<br> Moreover, the compressed output of <code>FFT</code> function is also supported.</p><p><strong>Name:</strong> IFFT</p><p><strong>Input:</strong> Only support two input series. The types are both INT32 / INT64 / FLOAT / DOUBLE.</p><p><strong>Parameters:</strong></p><ul><li><code>start</code>: The start time of the output series with the format &#39;yyyy-MM-dd HH:mm:ss&#39;. By default, it is &#39;1970-01-01 08:00:00&#39;.</li><li><code>interval</code>: The interval of the output series, which is a positive number with an unit. The unit is &#39;ms&#39; for millisecond, &#39;s&#39; for second, &#39;m&#39; for minute, &#39;h&#39; for hour and &#39;d&#39; for day. By default, it is 1s.</li></ul><p><strong>Output:</strong> Output a single series. The type is DOUBLE. It is strictly equispaced. The values are the results of IFFT.</p><p><strong>Note:</strong> If a row contains null points or <code>NaN</code>, it will be ignored.</p><h3 id="examples-5" tabindex="-1"><a class="header-anchor" href="#examples-5" aria-hidden="true">#</a> Examples</h3><p>Input series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+----------------------+----------------------+
|                         Time|       root.test.d1.re|       root.test.d1.im|
+-----------------------------+----------------------+----------------------+
|1970-01-01T08:00:00.000+08:00|                   0.0|                   0.0|
|1970-01-01T08:00:00.001+08:00| -3.932894010461041E-9| 1.2104201863039066E-8|
|1970-01-01T08:00:00.002+08:00|-1.4021739447490164E-7| 1.9299268669082926E-7|
|1970-01-01T08:00:00.003+08:00| -7.057291240286645E-8|  5.127422242345858E-8|
|1970-01-01T08:00:00.004+08:00|    19.021130288047125|    -6.180339875198807|
|1970-01-01T08:00:00.005+08:00|     9.999999850988388| 3.501852745067114E-16|
|1970-01-01T08:00:00.019+08:00| -3.932894898639461E-9|-1.2104202549376264E-8|
+-----------------------------+----------------------+----------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> ifft<span class="token punctuation">(</span>re<span class="token punctuation">,</span> im<span class="token punctuation">,</span> <span class="token string">&#39;interval&#39;</span><span class="token operator">=</span><span class="token string">&#39;1m&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;start&#39;</span><span class="token operator">=</span><span class="token string">&#39;2021-01-01 00:00:00&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-------------------------------------------------------+
|                         Time|ifft(root.test.d1.re, root.test.d1.im, &quot;interval&quot;=&quot;1m&quot;,|
|                             |                         &quot;start&quot;=&quot;2021-01-01 00:00:00&quot;)|
+-----------------------------+-------------------------------------------------------+
|2021-01-01T00:00:00.000+08:00|                                      2.902112992431231|
|2021-01-01T00:01:00.000+08:00|                                     1.1755704705132448|
|2021-01-01T00:02:00.000+08:00|                                     -2.175570513757101|
|2021-01-01T00:03:00.000+08:00|                                    -1.9021130389094498|
|2021-01-01T00:04:00.000+08:00|                                     0.9999999925494194|
|2021-01-01T00:05:00.000+08:00|                                      1.902113046743454|
|2021-01-01T00:06:00.000+08:00|                                    0.17557053610884188|
|2021-01-01T00:07:00.000+08:00|                                    -1.1755704886020932|
|2021-01-01T00:08:00.000+08:00|                                    -0.9021130371347148|
|2021-01-01T00:09:00.000+08:00|                                  3.552713678800501E-16|
|2021-01-01T00:10:00.000+08:00|                                     0.9021130371347154|
|2021-01-01T00:11:00.000+08:00|                                     1.1755704886020932|
|2021-01-01T00:12:00.000+08:00|                                   -0.17557053610884144|
|2021-01-01T00:13:00.000+08:00|                                     -1.902113046743454|
|2021-01-01T00:14:00.000+08:00|                                    -0.9999999925494196|
|2021-01-01T00:15:00.000+08:00|                                     1.9021130389094498|
|2021-01-01T00:16:00.000+08:00|                                     2.1755705137571004|
|2021-01-01T00:17:00.000+08:00|                                    -1.1755704705132448|
|2021-01-01T00:18:00.000+08:00|                                     -2.902112992431231|
|2021-01-01T00:19:00.000+08:00|                                 -3.552713678800501E-16|
+-----------------------------+-------------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="lowpass" tabindex="-1"><a class="header-anchor" href="#lowpass" aria-hidden="true">#</a> LowPass</h2><h3 id="usage-6" tabindex="-1"><a class="header-anchor" href="#usage-6" aria-hidden="true">#</a> Usage</h3><p>This function performs low-pass filtering on the input series and extracts components below the cutoff frequency.<br> The timestamps of input will be ignored and all data points will be regarded as equidistant.</p><p><strong>Name:</strong> LOWPASS</p><p><strong>Input:</strong> Only support a single input series. The type is INT32 / INT64 / FLOAT / DOUBLE.</p><p><strong>Parameters:</strong></p><ul><li><code>wpass</code>: The normalized cutoff frequency which values (0,1). This parameter cannot be lacked.</li></ul><p><strong>Output:</strong> Output a single series. The type is DOUBLE. It is the input after filtering. The length and timestamps of output are the same as the input.</p><p><strong>Note:</strong> <code>NaN</code> in the input series will be ignored.</p><h3 id="examples-6" tabindex="-1"><a class="header-anchor" href="#examples-6" aria-hidden="true">#</a> Examples</h3><p>Input series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------+
|                         Time|root.test.d1.s1|
+-----------------------------+---------------+
|1970-01-01T08:00:00.000+08:00|       2.902113|
|1970-01-01T08:00:01.000+08:00|      1.1755705|
|1970-01-01T08:00:02.000+08:00|     -2.1755705|
|1970-01-01T08:00:03.000+08:00|     -1.9021131|
|1970-01-01T08:00:04.000+08:00|            1.0|
|1970-01-01T08:00:05.000+08:00|      1.9021131|
|1970-01-01T08:00:06.000+08:00|      0.1755705|
|1970-01-01T08:00:07.000+08:00|     -1.1755705|
|1970-01-01T08:00:08.000+08:00|      -0.902113|
|1970-01-01T08:00:09.000+08:00|            0.0|
|1970-01-01T08:00:10.000+08:00|       0.902113|
|1970-01-01T08:00:11.000+08:00|      1.1755705|
|1970-01-01T08:00:12.000+08:00|     -0.1755705|
|1970-01-01T08:00:13.000+08:00|     -1.9021131|
|1970-01-01T08:00:14.000+08:00|           -1.0|
|1970-01-01T08:00:15.000+08:00|      1.9021131|
|1970-01-01T08:00:16.000+08:00|      2.1755705|
|1970-01-01T08:00:17.000+08:00|     -1.1755705|
|1970-01-01T08:00:18.000+08:00|      -2.902113|
|1970-01-01T08:00:19.000+08:00|            0.0|
+-----------------------------+---------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> lowpass<span class="token punctuation">(</span>s1<span class="token punctuation">,</span><span class="token string">&#39;wpass&#39;</span><span class="token operator">=</span><span class="token string">&#39;0.45&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+----------------------------------------+
|                         Time|lowpass(root.test.d1.s1, &quot;wpass&quot;=&quot;0.45&quot;)|
+-----------------------------+----------------------------------------+
|1970-01-01T08:00:00.000+08:00|                      1.9021130073323922|
|1970-01-01T08:00:01.000+08:00|                      1.1755704705132448|
|1970-01-01T08:00:02.000+08:00|                     -1.1755705286582614|
|1970-01-01T08:00:03.000+08:00|                     -1.9021130389094498|
|1970-01-01T08:00:04.000+08:00|                    7.450580419288145E-9|
|1970-01-01T08:00:05.000+08:00|                       1.902113046743454|
|1970-01-01T08:00:06.000+08:00|                      1.1755705212076808|
|1970-01-01T08:00:07.000+08:00|                     -1.1755704886020932|
|1970-01-01T08:00:08.000+08:00|                     -1.9021130222335536|
|1970-01-01T08:00:09.000+08:00|                   3.552713678800501E-16|
|1970-01-01T08:00:10.000+08:00|                      1.9021130222335536|
|1970-01-01T08:00:11.000+08:00|                      1.1755704886020932|
|1970-01-01T08:00:12.000+08:00|                     -1.1755705212076801|
|1970-01-01T08:00:13.000+08:00|                      -1.902113046743454|
|1970-01-01T08:00:14.000+08:00|                    -7.45058112983088E-9|
|1970-01-01T08:00:15.000+08:00|                      1.9021130389094498|
|1970-01-01T08:00:16.000+08:00|                      1.1755705286582616|
|1970-01-01T08:00:17.000+08:00|                     -1.1755704705132448|
|1970-01-01T08:00:18.000+08:00|                     -1.9021130073323924|
|1970-01-01T08:00:19.000+08:00|                  -2.664535259100376E-16|
+-----------------------------+----------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32),h=s("p",null,[n("Note: The input is "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"y"),s("mo",null,"="),s("mi",null,"s"),s("mi",null,"i"),s("mi",null,"n"),s("mo",{stretchy:"false"},"("),s("mn",null,"2"),s("mi",null,"π"),s("mi",null,"t"),s("mi",{mathvariant:"normal"},"/"),s("mn",null,"4"),s("mo",{stretchy:"false"},")"),s("mo",null,"+"),s("mn",null,"2"),s("mi",null,"s"),s("mi",null,"i"),s("mi",null,"n"),s("mo",{stretchy:"false"},"("),s("mn",null,"2"),s("mi",null,"π"),s("mi",null,"t"),s("mi",{mathvariant:"normal"},"/"),s("mn",null,"5"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"y=sin(2\\pi t/4)+2sin(2\\pi t/5)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mord mathnormal"},"in"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"2"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"π"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord"},"/4"),s("span",{class:"mclose"},")"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"2"),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mord mathnormal"},"in"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"2"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"π"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord"},"/5"),s("span",{class:"mclose"},")")])])]),n(" with a length of 20. Thus, the output is "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"y"),s("mo",null,"="),s("mn",null,"2"),s("mi",null,"s"),s("mi",null,"i"),s("mi",null,"n"),s("mo",{stretchy:"false"},"("),s("mn",null,"2"),s("mi",null,"π"),s("mi",null,"t"),s("mi",{mathvariant:"normal"},"/"),s("mn",null,"5"),s("mo",{stretchy:"false"},")")]),s("annotation",{encoding:"application/x-tex"},"y=2sin(2\\pi t/5)")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.625em","vertical-align":"-0.1944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"y"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"1em","vertical-align":"-0.25em"}}),s("span",{class:"mord"},"2"),s("span",{class:"mord mathnormal"},"s"),s("span",{class:"mord mathnormal"},"in"),s("span",{class:"mopen"},"("),s("span",{class:"mord"},"2"),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03588em"}},"π"),s("span",{class:"mord mathnormal"},"t"),s("span",{class:"mord"},"/5"),s("span",{class:"mclose"},")")])])]),n(" after low-pass filtering.")],-1);function b(g,T){return i(),l("div",null,[t(`

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

`),d,o,c,m,u,p,v,h])}const y=a(r,[["render",b],["__file","Frequency-Domain.html.vue"]]);export{y as default};
