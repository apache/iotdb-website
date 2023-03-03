import{_ as e,E as s,F as n,af as a,aT as t}from"./framework-6055ecdb.js";const i={},r=t(`<h1 id="string-processing" tabindex="-1"><a class="header-anchor" href="#string-processing" aria-hidden="true">#</a> String Processing</h1><h2 id="regexmatch" tabindex="-1"><a class="header-anchor" href="#regexmatch" aria-hidden="true">#</a> RegexMatch</h2><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><p>The function is used to fetch matched contents from text with given regular expression.</p><p><strong>Name:</strong> REGEXMATCH</p><p><strong>Input Series:</strong> Only support a single input series. The data type is TEXT.</p><p><strong>Parameter:</strong></p><ul><li><code>regex</code>: The regular expression to match in the text. All grammars supported by Java are acceptable, for example, <code>\\d+\\.\\d+\\.\\d+\\.\\d+</code> is expected to match any IPv4 addresses.</li><li><code>group</code>: The wanted group index in the matched result. Reference to java.util.regex, group 0 is the whole pattern and the next ones are numbered with the appearance order of left parentheses. For example, the groups in <code>A(B(CD))</code> are: 0-<code>A(B(CD))</code>, 1-<code>B(CD)</code>, 2-<code>CD</code>.</li></ul><p><strong>Output Series:</strong> Output a single series. The type is TEXT.</p><p><strong>Note:</strong> Those points with null values or not matched with the given pattern will not return any results.</p><h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples" aria-hidden="true">#</a> Examples</h3><p>Input series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-------------------------------+
|                         Time|                root.test.d1.s1|
+-----------------------------+-------------------------------+
|2021-01-01T00:00:01.000+08:00|        [192.168.0.1] [SUCCESS]|
|2021-01-01T00:00:02.000+08:00|       [192.168.0.24] [SUCCESS]|
|2021-01-01T00:00:03.000+08:00|           [192.168.0.2] [FAIL]|
|2021-01-01T00:00:04.000+08:00|        [192.168.0.5] [SUCCESS]|
|2021-01-01T00:00:05.000+08:00|      [192.168.0.124] [SUCCESS]|
+-----------------------------+-------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> regexmatch<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token string">&quot;regex&quot;</span><span class="token operator">=</span><span class="token string">&quot;\\d+\\.\\d+\\.\\d+\\.\\d+&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;group&quot;</span><span class="token operator">=</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+----------------------------------------------------------------------+
|                         Time|regexmatch(root.test.d1.s1, &quot;regex&quot;=&quot;\\d+\\.\\d+\\.\\d+\\.\\d+&quot;, &quot;group&quot;=&quot;0&quot;)|
+-----------------------------+----------------------------------------------------------------------+
|2021-01-01T00:00:01.000+08:00|                                                           192.168.0.1|
|2021-01-01T00:00:02.000+08:00|                                                          192.168.0.24|
|2021-01-01T00:00:03.000+08:00|                                                           192.168.0.2|
|2021-01-01T00:00:04.000+08:00|                                                           192.168.0.5|
|2021-01-01T00:00:05.000+08:00|                                                         192.168.0.124|
+-----------------------------+----------------------------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="regexreplace" tabindex="-1"><a class="header-anchor" href="#regexreplace" aria-hidden="true">#</a> RegexReplace</h2><h3 id="usage-1" tabindex="-1"><a class="header-anchor" href="#usage-1" aria-hidden="true">#</a> Usage</h3><p>The function is used to replace the specific regular expression matches with given string.</p><p><strong>Name:</strong> REGEXREPLACE</p><p><strong>Input Series:</strong> Only support a single input series. The data type is TEXT.</p><p><strong>Parameter:</strong></p><ul><li><code>regex</code>: The target regular expression to be replaced. All grammars supported by Java are acceptable.</li><li><code>replace</code>: The string to be put on and back reference notes in Java is also supported, for example, &#39;$1&#39; refers to group 1 in the <code>regex</code> which will be filled with corresponding matched results.</li><li><code>limit</code>: The number of matches to be replaced which should be an integer no less than -1, default to -1 which means all matches will be replaced.</li><li><code>offset</code>: The number of matches to be skipped, which means the first <code>offset</code> matches will not be replaced, default to 0.</li><li><code>reverse</code>: Whether to count all the matches reversely, default to &#39;false&#39;.</li></ul><p><strong>Output Series:</strong> Output a single series. The type is TEXT.</p><h3 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1" aria-hidden="true">#</a> Examples</h3><p>Input series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-------------------------------+
|                         Time|                root.test.d1.s1|
+-----------------------------+-------------------------------+
|2021-01-01T00:00:01.000+08:00|        [192.168.0.1] [SUCCESS]|
|2021-01-01T00:00:02.000+08:00|       [192.168.0.24] [SUCCESS]|
|2021-01-01T00:00:03.000+08:00|           [192.168.0.2] [FAIL]|
|2021-01-01T00:00:04.000+08:00|        [192.168.0.5] [SUCCESS]|
|2021-01-01T00:00:05.000+08:00|      [192.168.0.124] [SUCCESS]|
+-----------------------------+-------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> regexreplace<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token string">&quot;regex&quot;</span><span class="token operator">=</span><span class="token string">&quot;192\\.168\\.0\\.(\\d+)&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;replace&quot;</span><span class="token operator">=</span><span class="token string">&quot;cluster-$1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;limit&quot;</span><span class="token operator">=</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-----------------------------------------------------------+
|                         Time|regexreplace(root.test.d1.s1, &quot;regex&quot;=&quot;192\\.168\\.0\\.(\\d+)&quot;,|
|                             |                       &quot;replace&quot;=&quot;cluster-$1&quot;, &quot;limit&quot;=&quot;1&quot;)|
+-----------------------------+-----------------------------------------------------------+
|2021-01-01T00:00:01.000+08:00|                                      [cluster-1] [SUCCESS]|
|2021-01-01T00:00:02.000+08:00|                                     [cluster-24] [SUCCESS]|
|2021-01-01T00:00:03.000+08:00|                                         [cluster-2] [FAIL]|
|2021-01-01T00:00:04.000+08:00|                                      [cluster-5] [SUCCESS]|
|2021-01-01T00:00:05.000+08:00|                                    [cluster-124] [SUCCESS]|
+-----------------------------+-----------------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="regexsplit" tabindex="-1"><a class="header-anchor" href="#regexsplit" aria-hidden="true">#</a> RegexSplit</h2><h3 id="usage-2" tabindex="-1"><a class="header-anchor" href="#usage-2" aria-hidden="true">#</a> Usage</h3><p>The function is used to split text with given regular expression and return specific element.</p><p><strong>Name:</strong> REGEXSPLIT</p><p><strong>Input Series:</strong> Only support a single input series. The data type is TEXT.</p><p><strong>Parameter:</strong></p><ul><li><code>regex</code>: The regular expression used to split the text. All grammars supported by Java are acceptable, for example, <code>[&#39;&quot;]</code> is expected to match <code>&#39;</code> and <code>&quot;</code>.</li><li><code>index</code>: The wanted index of elements in the split result. It should be an integer no less than -1, default to -1 which means the length of the result array is returned and any non-negative integer is used to fetch the text of the specific index starting from 0.</li></ul><p><strong>Output Series:</strong> Output a single series. The type is INT32 when <code>index</code> is -1 and TEXT when it&#39;s an valid index.</p><p><strong>Note:</strong> When <code>index</code> is out of the range of the result array, for example <code>0,1,2</code> split with <code>,</code> and <code>index</code> is set to 3, no result are returned for that record.</p><h3 id="examples-2" tabindex="-1"><a class="header-anchor" href="#examples-2" aria-hidden="true">#</a> Examples</h3><p>Input series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------+
|                         Time|root.test.d1.s1|
+-----------------------------+---------------+
|2021-01-01T00:00:01.000+08:00|      A,B,A+,B-|
|2021-01-01T00:00:02.000+08:00|      A,A+,A,B+|
|2021-01-01T00:00:03.000+08:00|         B+,B,B|
|2021-01-01T00:00:04.000+08:00|      A+,A,A+,A|
|2021-01-01T00:00:05.000+08:00|       A,B-,B,B|
+-----------------------------+---------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> regexsplit<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token string">&quot;regex&quot;</span><span class="token operator">=</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;index&quot;</span><span class="token operator">=</span><span class="token string">&quot;-1&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+------------------------------------------------------+
|                         Time|regexsplit(root.test.d1.s1, &quot;regex&quot;=&quot;,&quot;, &quot;index&quot;=&quot;-1&quot;)|
+-----------------------------+------------------------------------------------------+
|2021-01-01T00:00:01.000+08:00|                                                     4|
|2021-01-01T00:00:02.000+08:00|                                                     4|
|2021-01-01T00:00:03.000+08:00|                                                     3|
|2021-01-01T00:00:04.000+08:00|                                                     4|
|2021-01-01T00:00:05.000+08:00|                                                     4|
+-----------------------------+------------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Another SQL for query:</p><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> regexsplit<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token string">&quot;regex&quot;</span><span class="token operator">=</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;index&quot;</span><span class="token operator">=</span><span class="token string">&quot;3&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-----------------------------------------------------+
|                         Time|regexsplit(root.test.d1.s1, &quot;regex&quot;=&quot;,&quot;, &quot;index&quot;=&quot;3&quot;)|
+-----------------------------+-----------------------------------------------------+
|2021-01-01T00:00:01.000+08:00|                                                   B-|
|2021-01-01T00:00:02.000+08:00|                                                   B+|
|2021-01-01T00:00:04.000+08:00|                                                    A|
|2021-01-01T00:00:05.000+08:00|                                                    B|
+-----------------------------+-----------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="strreplace" tabindex="-1"><a class="header-anchor" href="#strreplace" aria-hidden="true">#</a> StrReplace</h2><h3 id="usage-3" tabindex="-1"><a class="header-anchor" href="#usage-3" aria-hidden="true">#</a> Usage</h3><p>The function is used to replace the specific substring with given string.</p><p><strong>Name:</strong> STRREPLACE</p><p><strong>Input Series:</strong> Only support a single input series. The data type is TEXT.</p><p><strong>Parameter:</strong></p><ul><li><code>target</code>: The target substring to be replaced.</li><li><code>replace</code>: The string to be put on.</li><li><code>limit</code>: The number of matches to be replaced which should be an integer no less than -1, default to -1 which means all matches will be replaced.</li><li><code>offset</code>: The number of matches to be skipped, which means the first <code>offset</code> matches will not be replaced, default to 0.</li><li><code>reverse</code>: Whether to count all the matches reversely, default to &#39;false&#39;.</li></ul><p><strong>Output Series:</strong> Output a single series. The type is TEXT.</p><h3 id="examples-3" tabindex="-1"><a class="header-anchor" href="#examples-3" aria-hidden="true">#</a> Examples</h3><p>Input series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+---------------+
|                         Time|root.test.d1.s1|
+-----------------------------+---------------+
|2021-01-01T00:00:01.000+08:00|      A,B,A+,B-|
|2021-01-01T00:00:02.000+08:00|      A,A+,A,B+|
|2021-01-01T00:00:03.000+08:00|         B+,B,B|
|2021-01-01T00:00:04.000+08:00|      A+,A,A+,A|
|2021-01-01T00:00:05.000+08:00|       A,B-,B,B|
+-----------------------------+---------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> strreplace<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token string">&quot;target&quot;</span><span class="token operator">=</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;replace&quot;</span><span class="token operator">=</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;limit&quot;</span><span class="token operator">=</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-----------------------------------------+
|                         Time|strreplace(root.test.d1.s1, &quot;target&quot;=&quot;,&quot;,|
|                             |              &quot;replace&quot;=&quot;/&quot;, &quot;limit&quot;=&quot;2&quot;)|
+-----------------------------+-----------------------------------------+
|2021-01-01T00:00:01.000+08:00|                                A/B/A+,B-|
|2021-01-01T00:00:02.000+08:00|                                A/A+/A,B+|
|2021-01-01T00:00:03.000+08:00|                                   B+/B/B|
|2021-01-01T00:00:04.000+08:00|                                A+/A/A+,A|
|2021-01-01T00:00:05.000+08:00|                                 A/B-/B,B|
+-----------------------------+-----------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Another SQL for query:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> strreplace<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token string">&quot;target&quot;</span><span class="token operator">=</span><span class="token string">&quot;,&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;replace&quot;</span><span class="token operator">=</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;limit&quot;</span><span class="token operator">=</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;offset&quot;</span><span class="token operator">=</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;reverse&quot;</span><span class="token operator">=</span><span class="token string">&quot;true&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-----------------------------------------------------+
|                         Time|strreplace(root.test.d1.s1, &quot;target&quot;=&quot;,&quot;, &quot;replace&quot;= | 
|                             |    &quot;|&quot;, &quot;limit&quot;=&quot;1&quot;, &quot;offset&quot;=&quot;1&quot;, &quot;reverse&quot;=&quot;true&quot;)|
+-----------------------------+-----------------------------------------------------+
|2021-01-01T00:00:01.000+08:00|                                            A,B/A+,B-|
|2021-01-01T00:00:02.000+08:00|                                            A,A+/A,B+|
|2021-01-01T00:00:03.000+08:00|                                               B+/B,B|
|2021-01-01T00:00:04.000+08:00|                                            A+,A/A+,A|
|2021-01-01T00:00:05.000+08:00|                                             A,B-/B,B|
+-----------------------------+-----------------------------------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,72);function o(l,d){return s(),n("div",null,[a(`

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

`),r])}const c=e(i,[["render",o],["__file","String-Processing.html.vue"]]);export{c as default};