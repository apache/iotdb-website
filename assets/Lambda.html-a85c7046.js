import{_ as a,r as t,o as i,c as o,a as r,d as n,e as s,b as l,f as p}from"./app-2dc5011a.js";const c={},d=n("h1",{id:"lambda-expression",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#lambda-expression","aria-hidden":"true"},"#"),s(" Lambda Expression")],-1),u=n("h2",{id:"jexl-function",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#jexl-function","aria-hidden":"true"},"#"),s(" JEXL Function")],-1),m={href:"https://commons.apache.org/proper/commons-jexl/apidocs/org/apache/commons/jexl3/package-summary.html#customization",target:"_blank",rel:"noopener noreferrer"},v=p(`<table><thead><tr><th>Function Name</th><th>Allowed Input Series Data Types</th><th>Required Attributes</th><th>Output Series Data Type</th><th>Series Data Type Description</th></tr></thead><tbody><tr><td>JEXL</td><td>INT32 / INT64 / FLOAT / DOUBLE / TEXT / BOOLEAN</td><td><code>expr</code> is a lambda expression that supports standard one or multi arguments in the form <code>x -&gt; {...}</code> or <code>(x, y, z) -&gt; {...}</code>, e.g. <code> x -&gt; {x * 2}</code>, <code>(x, y, z) -&gt; {x + y * z}</code></td><td>INT32 / INT64 / FLOAT / DOUBLE / TEXT / BOOLEAN</td><td>Returns the input time series transformed by a lambda expression</td></tr></tbody></table><h4 id="demonstrate" tabindex="-1"><a class="header-anchor" href="#demonstrate" aria-hidden="true">#</a> Demonstrate</h4><p>Example data: <code>root.ln.wf01.wt01.temperature</code>, <code>root.ln.wf01.wt01.st</code>, <code>root.ln.wf01.wt01.str</code> a total of <code>11</code> data.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; select * from root.ln.wf01.wt01;
+-----------------------------+---------------------+--------------------+-----------------------------+
|                         Time|root.ln.wf01.wt01.str|root.ln.wf01.wt01.st|root.ln.wf01.wt01.temperature|
+-----------------------------+---------------------+--------------------+-----------------------------+
|1970-01-01T08:00:00.000+08:00|                  str|                10.0|                          0.0|
|1970-01-01T08:00:00.001+08:00|                  str|                20.0|                          1.0|
|1970-01-01T08:00:00.002+08:00|                  str|                30.0|                          2.0|
|1970-01-01T08:00:00.003+08:00|                  str|                40.0|                          3.0|
|1970-01-01T08:00:00.004+08:00|                  str|                50.0|                          4.0|
|1970-01-01T08:00:00.005+08:00|                  str|                60.0|                          5.0|
|1970-01-01T08:00:00.006+08:00|                  str|                70.0|                          6.0|
|1970-01-01T08:00:00.007+08:00|                  str|                80.0|                          7.0|
|1970-01-01T08:00:00.008+08:00|                  str|                90.0|                          8.0|
|1970-01-01T08:00:00.009+08:00|                  str|               100.0|                          9.0|
|1970-01-01T08:00:00.010+08:00|                  str|               110.0|                         10.0|
+-----------------------------+---------------------+--------------------+-----------------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Sql:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> jexl<span class="token punctuation">(</span>temperature<span class="token punctuation">,</span> <span class="token string">&#39;expr&#39;</span><span class="token operator">=</span><span class="token string">&#39;x -&gt; {x + x}&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> jexl1<span class="token punctuation">,</span> jexl<span class="token punctuation">(</span>temperature<span class="token punctuation">,</span> <span class="token string">&#39;expr&#39;</span><span class="token operator">=</span><span class="token string">&#39;x -&gt; {x * 3}&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> jexl2<span class="token punctuation">,</span> jexl<span class="token punctuation">(</span>temperature<span class="token punctuation">,</span> <span class="token string">&#39;expr&#39;</span><span class="token operator">=</span><span class="token string">&#39;x -&gt; {x * x}&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> jexl3<span class="token punctuation">,</span> jexl<span class="token punctuation">(</span>temperature<span class="token punctuation">,</span> <span class="token string">&#39;expr&#39;</span><span class="token operator">=</span><span class="token string">&#39;x -&gt; {multiply(x, 100)}&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> jexl4<span class="token punctuation">,</span> jexl<span class="token punctuation">(</span>temperature<span class="token punctuation">,</span> st<span class="token punctuation">,</span> <span class="token string">&#39;expr&#39;</span><span class="token operator">=</span><span class="token string">&#39;(x, y) -&gt; {x + y}&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> jexl5<span class="token punctuation">,</span> jexl<span class="token punctuation">(</span>temperature<span class="token punctuation">,</span> st<span class="token punctuation">,</span> str<span class="token punctuation">,</span> <span class="token string">&#39;expr&#39;</span><span class="token operator">=</span><span class="token string">&#39;(x, y, z) -&gt; {x + y + z}&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> jexl6 <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01<span class="token punctuation">;</span><span class="token identifier"><span class="token punctuation">\`</span><span class="token punctuation">\`</span></span><span class="token punctuation">\`</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Result:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-----+-----+-----+------+-----+--------+
|                         Time|jexl1|jexl2|jexl3| jexl4|jexl5|   jexl6|
+-----------------------------+-----+-----+-----+------+-----+--------+
|1970-01-01T08:00:00.000+08:00|  0.0|  0.0|  0.0|   0.0| 10.0| 10.0str|
|1970-01-01T08:00:00.001+08:00|  2.0|  3.0|  1.0| 100.0| 21.0| 21.0str|
|1970-01-01T08:00:00.002+08:00|  4.0|  6.0|  4.0| 200.0| 32.0| 32.0str|
|1970-01-01T08:00:00.003+08:00|  6.0|  9.0|  9.0| 300.0| 43.0| 43.0str|
|1970-01-01T08:00:00.004+08:00|  8.0| 12.0| 16.0| 400.0| 54.0| 54.0str|
|1970-01-01T08:00:00.005+08:00| 10.0| 15.0| 25.0| 500.0| 65.0| 65.0str|
|1970-01-01T08:00:00.006+08:00| 12.0| 18.0| 36.0| 600.0| 76.0| 76.0str|
|1970-01-01T08:00:00.007+08:00| 14.0| 21.0| 49.0| 700.0| 87.0| 87.0str|
|1970-01-01T08:00:00.008+08:00| 16.0| 24.0| 64.0| 800.0| 98.0| 98.0str|
|1970-01-01T08:00:00.009+08:00| 18.0| 27.0| 81.0| 900.0|109.0|109.0str|
|1970-01-01T08:00:00.010+08:00| 20.0| 30.0|100.0|1000.0|120.0|120.0str|
+-----------------------------+-----+-----+-----+------+-----+--------+
Total line number = 11
It costs 0.118s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function x(k,h){const e=t("ExternalLinkIcon");return i(),o("div",null,[r(`

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

`),d,u,n("p",null,[s("Java Expression Language (JEXL) is an expression language engine. We use JEXL to extend UDFs, which are implemented on the command line with simple lambda expressions. See the link for "),n("a",m,[s("operators supported in jexl lambda expressions"),l(e)]),s(".")]),v])}const g=a(c,[["render",x],["__file","Lambda.html.vue"]]);export{g as default};
