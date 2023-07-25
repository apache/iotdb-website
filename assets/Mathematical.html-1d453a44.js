import{_ as s,o as n,c as a,a as t,f as e}from"./app-d4806199.js";const o={},p=e(`<h2 id="算数运算符和函数" tabindex="-1"><a class="header-anchor" href="#算数运算符和函数" aria-hidden="true">#</a> 算数运算符和函数</h2><h3 id="算数运算符" tabindex="-1"><a class="header-anchor" href="#算数运算符" aria-hidden="true">#</a> 算数运算符</h3><h4 id="一元算数运算符" tabindex="-1"><a class="header-anchor" href="#一元算数运算符" aria-hidden="true">#</a> 一元算数运算符</h4><p>支持的运算符：<code>+</code>, <code>-</code></p><p>输入数据类型要求：<code>INT32</code>, <code>INT64</code>, <code>FLOAT</code>, <code>DOUBLE</code></p><p>输出数据类型：与输入数据类型一致</p><h4 id="二元算数运算符" tabindex="-1"><a class="header-anchor" href="#二元算数运算符" aria-hidden="true">#</a> 二元算数运算符</h4><p>支持的运算符：<code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code></p><p>输入数据类型要求：<code>INT32</code>, <code>INT64</code>, <code>FLOAT</code>和<code>DOUBLE</code></p><p>输出数据类型：<code>DOUBLE</code></p><p>注意：当某个时间戳下左操作数和右操作数都不为空（<code>null</code>）时，二元运算操作才会有输出结果</p><h4 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h4><p>例如：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1<span class="token punctuation">,</span> <span class="token operator">-</span> s1<span class="token punctuation">,</span> s2<span class="token punctuation">,</span> <span class="token operator">+</span> s2<span class="token punctuation">,</span> s1 <span class="token operator">+</span> s2<span class="token punctuation">,</span> s1 <span class="token operator">-</span> s2<span class="token punctuation">,</span> s1 <span class="token operator">*</span> s2<span class="token punctuation">,</span> s1 <span class="token operator">/</span> s2<span class="token punctuation">,</span> s1 <span class="token operator">%</span> s2 <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-------------+--------------+-------------+-------------+-----------------------------+-----------------------------+-----------------------------+-----------------------------+-----------------------------+
|                         Time|root.sg.d1.s1|-root.sg.d1.s1|root.sg.d1.s2|root.sg.d1.s2|root.sg.d1.s1 + root.sg.d1.s2|root.sg.d1.s1 - root.sg.d1.s2|root.sg.d1.s1 * root.sg.d1.s2|root.sg.d1.s1 / root.sg.d1.s2|root.sg.d1.s1 % root.sg.d1.s2|
+-----------------------------+-------------+--------------+-------------+-------------+-----------------------------+-----------------------------+-----------------------------+-----------------------------+-----------------------------+
|1970-01-01T08:00:00.001+08:00|          1.0|          -1.0|          1.0|          1.0|                          2.0|                          0.0|                          1.0|                          1.0|                          0.0|
|1970-01-01T08:00:00.002+08:00|          2.0|          -2.0|          2.0|          2.0|                          4.0|                          0.0|                          4.0|                          1.0|                          0.0|
|1970-01-01T08:00:00.003+08:00|          3.0|          -3.0|          3.0|          3.0|                          6.0|                          0.0|                          9.0|                          1.0|                          0.0|
|1970-01-01T08:00:00.004+08:00|          4.0|          -4.0|          4.0|          4.0|                          8.0|                          0.0|                         16.0|                          1.0|                          0.0|
|1970-01-01T08:00:00.005+08:00|          5.0|          -5.0|          5.0|          5.0|                         10.0|                          0.0|                         25.0|                          1.0|                          0.0|
+-----------------------------+-------------+--------------+-------------+-------------+-----------------------------+-----------------------------+-----------------------------+-----------------------------+-----------------------------+
Total line number = 5
It costs 0.014s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数学函数" tabindex="-1"><a class="header-anchor" href="#数学函数" aria-hidden="true">#</a> 数学函数</h3><p>目前 IoTDB 支持下列数学函数，这些数学函数的行为与这些函数在 Java Math 标准库中对应实现的行为一致。</p><table><thead><tr><th>函数名</th><th>输入序列类型</th><th>输出序列类型</th><th>必要属性参数</th><th>Java 标准库中的对应实现</th></tr></thead><tbody><tr><td>SIN</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td></td><td>Math#sin(double)</td></tr><tr><td>COS</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td></td><td>Math#cos(double)</td></tr><tr><td>TAN</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td></td><td>Math#tan(double)</td></tr><tr><td>ASIN</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td></td><td>Math#asin(double)</td></tr><tr><td>ACOS</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td></td><td>Math#acos(double)</td></tr><tr><td>ATAN</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td></td><td>Math#atan(double)</td></tr><tr><td>SINH</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td></td><td>Math#sinh(double)</td></tr><tr><td>COSH</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td></td><td>Math#cosh(double)</td></tr><tr><td>TANH</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td></td><td>Math#tanh(double)</td></tr><tr><td>DEGREES</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td></td><td>Math#toDegrees(double)</td></tr><tr><td>RADIANS</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td></td><td>Math#toRadians(double)</td></tr><tr><td>ABS</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>与输入序列的实际类型一致</td><td></td><td>Math#abs(int) / Math#abs(long) /Math#abs(float) /Math#abs(double)</td></tr><tr><td>SIGN</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td></td><td>Math#signum(double)</td></tr><tr><td>CEIL</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td></td><td>Math#ceil(double)</td></tr><tr><td>FLOOR</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td></td><td>Math#floor(double)</td></tr><tr><td>ROUND</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td><code>places</code>:四舍五入有效位数，正数为小数点后面的有效位数，负数为整数位的有效位数</td><td>Math#rint(Math#pow(10,places))/Math#pow(10,places)</td></tr><tr><td>EXP</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td></td><td>Math#exp(double)</td></tr><tr><td>LN</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td></td><td>Math#log(double)</td></tr><tr><td>LOG10</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td></td><td>Math#log10(double)</td></tr><tr><td>SQRT</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td></td><td>Math#sqrt(double)</td></tr></tbody></table><p>例如：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s1<span class="token punctuation">,</span> sin<span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">,</span> cos<span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">,</span> tan<span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">limit</span> <span class="token number">5</span> <span class="token keyword">offset</span> <span class="token number">1000</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-------------------+-------------------+--------------------+-------------------+
|                         Time|     root.sg1.d1.s1|sin(root.sg1.d1.s1)| cos(root.sg1.d1.s1)|tan(root.sg1.d1.s1)|
+-----------------------------+-------------------+-------------------+--------------------+-------------------+
|2020-12-10T17:11:49.037+08:00|7360723084922759782| 0.8133527237573284|  0.5817708713544664| 1.3980636773094157|
|2020-12-10T17:11:49.038+08:00|4377791063319964531|-0.8938962705202537|  0.4482738644511651| -1.994085181866842|
|2020-12-10T17:11:49.039+08:00|7972485567734642915| 0.9627757585308978|-0.27030138509681073|-3.5618602479083545|
|2020-12-10T17:11:49.040+08:00|2508858212791964081|-0.6073417341629443| -0.7944406950452296| 0.7644897069734913|
|2020-12-10T17:11:49.041+08:00|2817297431185141819|-0.8419358900502509| -0.5395775727782725| 1.5603611649667768|
+-----------------------------+-------------------+-------------------+--------------------+-------------------+
Total line number = 5
It costs 0.008s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="round" tabindex="-1"><a class="header-anchor" href="#round" aria-hidden="true">#</a> ROUND</h4><p>例如：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> s4<span class="token punctuation">,</span><span class="token function">round</span><span class="token punctuation">(</span>s4<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">round</span><span class="token punctuation">(</span>s4<span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token function">round</span><span class="token punctuation">(</span>s4<span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">+</span><span class="token comment">-----------------------------+-------------+--------------------+----------------------+-----------------------+</span>
<span class="token operator">|</span>                         <span class="token keyword">Time</span><span class="token operator">|</span>root<span class="token punctuation">.</span>db<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>s4<span class="token operator">|</span><span class="token function">ROUND</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>db<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>s4<span class="token punctuation">)</span><span class="token operator">|</span><span class="token function">ROUND</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>db<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>s4<span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token operator">|</span><span class="token function">ROUND</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>db<span class="token punctuation">.</span>d1<span class="token punctuation">.</span>s4<span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------------------------+-------------+--------------------+----------------------+-----------------------+</span>
<span class="token operator">|</span><span class="token number">1970</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span>T08:<span class="token number">00</span>:<span class="token number">00.001</span><span class="token operator">+</span><span class="token number">08</span>:<span class="token number">00</span><span class="token operator">|</span>    <span class="token number">101.14345</span><span class="token operator">|</span>               <span class="token number">101.0</span><span class="token operator">|</span>                <span class="token number">101.14</span><span class="token operator">|</span>                  <span class="token number">100.0</span><span class="token operator">|</span>
<span class="token operator">|</span><span class="token number">1970</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span>T08:<span class="token number">00</span>:<span class="token number">00.002</span><span class="token operator">+</span><span class="token number">08</span>:<span class="token number">00</span><span class="token operator">|</span>    <span class="token number">20.144346</span><span class="token operator">|</span>                <span class="token number">20.0</span><span class="token operator">|</span>                 <span class="token number">20.14</span><span class="token operator">|</span>                   <span class="token number">20.0</span><span class="token operator">|</span>
<span class="token operator">|</span><span class="token number">1970</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span>T08:<span class="token number">00</span>:<span class="token number">00.003</span><span class="token operator">+</span><span class="token number">08</span>:<span class="token number">00</span><span class="token operator">|</span>    <span class="token number">20.614372</span><span class="token operator">|</span>                <span class="token number">21.0</span><span class="token operator">|</span>                 <span class="token number">20.61</span><span class="token operator">|</span>                   <span class="token number">20.0</span><span class="token operator">|</span>
<span class="token operator">|</span><span class="token number">1970</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span>T08:<span class="token number">00</span>:<span class="token number">00.005</span><span class="token operator">+</span><span class="token number">08</span>:<span class="token number">00</span><span class="token operator">|</span>    <span class="token number">20.814346</span><span class="token operator">|</span>                <span class="token number">21.0</span><span class="token operator">|</span>                 <span class="token number">20.81</span><span class="token operator">|</span>                   <span class="token number">20.0</span><span class="token operator">|</span>
<span class="token operator">|</span><span class="token number">1970</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span>T08:<span class="token number">00</span>:<span class="token number">00.006</span><span class="token operator">+</span><span class="token number">08</span>:<span class="token number">00</span><span class="token operator">|</span>     <span class="token number">60.71443</span><span class="token operator">|</span>                <span class="token number">61.0</span><span class="token operator">|</span>                 <span class="token number">60.71</span><span class="token operator">|</span>                   <span class="token number">60.0</span><span class="token operator">|</span>
<span class="token operator">|</span><span class="token number">2023</span><span class="token operator">-</span><span class="token number">03</span><span class="token operator">-</span><span class="token number">13</span>T16:<span class="token number">16</span>:<span class="token number">19.764</span><span class="token operator">+</span><span class="token number">08</span>:<span class="token number">00</span><span class="token operator">|</span>    <span class="token number">10.143425</span><span class="token operator">|</span>                <span class="token number">10.0</span><span class="token operator">|</span>                 <span class="token number">10.14</span><span class="token operator">|</span>                   <span class="token number">10.0</span><span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------------------------+-------------+--------------------+----------------------+-----------------------+</span>
Total line number <span class="token operator">=</span> <span class="token number">6</span>
It costs <span class="token number">0.059</span>s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27);function d(r,c){return n(),a("div",null,[t(`

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

`),p])}const i=s(o,[["render",d],["__file","Mathematical.html.vue"]]);export{i as default};
