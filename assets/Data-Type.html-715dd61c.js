import{_ as a,r as s,o as i,c,a as y,d as e,e as t,b as l,w as r,f as n}from"./app-065a82e3.js";const o={},g=n('<h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h2><h3 id="基本数据类型" tabindex="-1"><a class="header-anchor" href="#基本数据类型" aria-hidden="true">#</a> 基本数据类型</h3><p>IoTDB 支持以下六种数据类型：</p><ul><li>BOOLEAN（布尔值）</li><li>INT32（整型）</li><li>INT64（长整型）</li><li>FLOAT（单精度浮点数）</li><li>DOUBLE（双精度浮点数）</li><li>TEXT（字符串）</li></ul><h4 id="浮点数精度配置" tabindex="-1"><a class="header-anchor" href="#浮点数精度配置" aria-hidden="true">#</a> 浮点数精度配置</h4>',5),x=e("strong",null,"FLOAT",-1),h=e("strong",null,"DOUBLE",-1),u=e("code",null,"MAX_POINT_NUMBER",-1),m=n(`<p>例如，</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> TIMESERIES root<span class="token punctuation">.</span>vehicle<span class="token punctuation">.</span>d0<span class="token punctuation">.</span>s0 <span class="token keyword">WITH</span> DATATYPE<span class="token operator">=</span><span class="token keyword">FLOAT</span><span class="token punctuation">,</span> ENCODING<span class="token operator">=</span>RLE<span class="token punctuation">,</span> <span class="token string">&#39;MAX_POINT_NUMBER&#39;</span><span class="token operator">=</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2),p=e("code",null,"iotdb-common.properties",-1),T=n(`<h4 id="数据类型兼容性" tabindex="-1"><a class="header-anchor" href="#数据类型兼容性" aria-hidden="true">#</a> 数据类型兼容性</h4><p>当写入数据的类型与序列注册的数据类型不一致时，</p><ul><li>如果序列数据类型不兼容写入数据类型，系统会给出错误提示。</li><li>如果序列数据类型兼容写入数据类型，系统会进行数据类型的自动转换，将写入的数据类型更正为注册序列的类型。</li></ul><p>各数据类型的兼容情况如下表所示：</p><table><thead><tr><th>序列数据类型</th><th>支持的写入数据类型</th></tr></thead><tbody><tr><td>BOOLEAN</td><td>BOOLEAN</td></tr><tr><td>INT32</td><td>INT32</td></tr><tr><td>INT64</td><td>INT32 INT64</td></tr><tr><td>FLOAT</td><td>INT32 FLOAT</td></tr><tr><td>DOUBLE</td><td>INT32 INT64 FLOAT DOUBLE</td></tr><tr><td>TEXT</td><td>TEXT</td></tr></tbody></table><h3 id="时间戳类型" tabindex="-1"><a class="header-anchor" href="#时间戳类型" aria-hidden="true">#</a> 时间戳类型</h3><p>时间戳是一个数据到来的时间点，其中包括绝对时间戳和相对时间戳。</p><h4 id="绝对时间戳" tabindex="-1"><a class="header-anchor" href="#绝对时间戳" aria-hidden="true">#</a> 绝对时间戳</h4><p>IOTDB 中绝对时间戳分为二种，一种为 LONG 类型，一种为 DATETIME 类型（包含 DATETIME-INPUT, DATETIME-DISPLAY 两个小类）。</p><p>在用户在输入时间戳时，可以使用 LONG 类型的时间戳或 DATETIME-INPUT 类型的时间戳，其中 DATETIME-INPUT 类型的时间戳支持格式如表所示：</p><div style="text-align:center;"><p><strong>DATETIME-INPUT 类型支持格式</strong></p><table><thead><tr><th style="text-align:left;">format</th></tr></thead><tbody><tr><td style="text-align:left;">yyyy-MM-dd HH:mm:ss</td></tr><tr><td style="text-align:left;">yyyy/MM/dd HH:mm:ss</td></tr><tr><td style="text-align:left;">yyyy.MM.dd HH:mm:ss</td></tr><tr><td style="text-align:left;">yyyy-MM-dd HH:mm:ssZZ</td></tr><tr><td style="text-align:left;">yyyy/MM/dd HH:mm:ssZZ</td></tr><tr><td style="text-align:left;">yyyy.MM.dd HH:mm:ssZZ</td></tr><tr><td style="text-align:left;">yyyy/MM/dd HH:mm:ss.SSS</td></tr><tr><td style="text-align:left;">yyyy-MM-dd HH:mm:ss.SSS</td></tr><tr><td style="text-align:left;">yyyy.MM.dd HH:mm:ss.SSS</td></tr><tr><td style="text-align:left;">yyyy-MM-dd HH:mm:ss.SSSZZ</td></tr><tr><td style="text-align:left;">yyyy/MM/dd HH:mm:ss.SSSZZ</td></tr><tr><td style="text-align:left;">yyyy.MM.dd HH:mm:ss.SSSZZ</td></tr><tr><td style="text-align:left;">ISO8601 standard time format</td></tr></tbody></table></div><p>IoTDB 在显示时间戳时可以支持 LONG 类型以及 DATETIME-DISPLAY 类型，其中 DATETIME-DISPLAY 类型可以支持用户自定义时间格式。自定义时间格式的语法如表所示：</p><div style="text-align:center;"><p><strong>DATETIME-DISPLAY 自定义时间格式的语法</strong></p><table><thead><tr><th style="text-align:center;">Symbol</th><th style="text-align:center;">Meaning</th><th style="text-align:center;">Presentation</th><th style="text-align:center;">Examples</th></tr></thead><tbody><tr><td style="text-align:center;">G</td><td style="text-align:center;">era</td><td style="text-align:center;">era</td><td style="text-align:center;">era</td></tr><tr><td style="text-align:center;">C</td><td style="text-align:center;">century of era (&gt;=0)</td><td style="text-align:center;">number</td><td style="text-align:center;">20</td></tr><tr><td style="text-align:center;">Y</td><td style="text-align:center;">year of era (&gt;=0)</td><td style="text-align:center;">year</td><td style="text-align:center;">1996</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">x</td><td style="text-align:center;">weekyear</td><td style="text-align:center;">year</td><td style="text-align:center;">1996</td></tr><tr><td style="text-align:center;">w</td><td style="text-align:center;">week of weekyear</td><td style="text-align:center;">number</td><td style="text-align:center;">27</td></tr><tr><td style="text-align:center;">e</td><td style="text-align:center;">day of week</td><td style="text-align:center;">number</td><td style="text-align:center;">2</td></tr><tr><td style="text-align:center;">E</td><td style="text-align:center;">day of week</td><td style="text-align:center;">text</td><td style="text-align:center;">Tuesday; Tue</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">y</td><td style="text-align:center;">year</td><td style="text-align:center;">year</td><td style="text-align:center;">1996</td></tr><tr><td style="text-align:center;">D</td><td style="text-align:center;">day of year</td><td style="text-align:center;">number</td><td style="text-align:center;">189</td></tr><tr><td style="text-align:center;">M</td><td style="text-align:center;">month of year</td><td style="text-align:center;">month</td><td style="text-align:center;">July; Jul; 07</td></tr><tr><td style="text-align:center;">d</td><td style="text-align:center;">day of month</td><td style="text-align:center;">number</td><td style="text-align:center;">10</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">a</td><td style="text-align:center;">halfday of day</td><td style="text-align:center;">text</td><td style="text-align:center;">PM</td></tr><tr><td style="text-align:center;">K</td><td style="text-align:center;">hour of halfday (0~11)</td><td style="text-align:center;">number</td><td style="text-align:center;">0</td></tr><tr><td style="text-align:center;">h</td><td style="text-align:center;">clockhour of halfday (1~12)</td><td style="text-align:center;">number</td><td style="text-align:center;">12</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">H</td><td style="text-align:center;">hour of day (0~23)</td><td style="text-align:center;">number</td><td style="text-align:center;">0</td></tr><tr><td style="text-align:center;">k</td><td style="text-align:center;">clockhour of day (1~24)</td><td style="text-align:center;">number</td><td style="text-align:center;">24</td></tr><tr><td style="text-align:center;">m</td><td style="text-align:center;">minute of hour</td><td style="text-align:center;">number</td><td style="text-align:center;">30</td></tr><tr><td style="text-align:center;">s</td><td style="text-align:center;">second of minute</td><td style="text-align:center;">number</td><td style="text-align:center;">55</td></tr><tr><td style="text-align:center;">S</td><td style="text-align:center;">fraction of second</td><td style="text-align:center;">millis</td><td style="text-align:center;">978</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">z</td><td style="text-align:center;">time zone</td><td style="text-align:center;">text</td><td style="text-align:center;">Pacific Standard Time; PST</td></tr><tr><td style="text-align:center;">Z</td><td style="text-align:center;">time zone offset/id</td><td style="text-align:center;">zone</td><td style="text-align:center;">-0800; -08:00; America/Los_Angeles</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">&#39;</td><td style="text-align:center;">escape for text</td><td style="text-align:center;">delimiter</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">&#39;&#39;</td><td style="text-align:center;">single quote</td><td style="text-align:center;">literal</td><td style="text-align:center;">&#39;</td></tr></tbody></table></div><h4 id="相对时间戳" tabindex="-1"><a class="header-anchor" href="#相对时间戳" aria-hidden="true">#</a> 相对时间戳</h4><p>相对时间是指与服务器时间<code>now()</code>和<code>DATETIME</code>类型时间相差一定时间间隔的时间。<br> 形式化定义为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Duration = (Digit+ (&#39;Y&#39;|&#39;MO&#39;|&#39;W&#39;|&#39;D&#39;|&#39;H&#39;|&#39;M&#39;|&#39;S&#39;|&#39;MS&#39;|&#39;US&#39;|&#39;NS&#39;))+
RelativeTime = (now() | DATETIME) ((+|-) Duration)+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,16),f=n(`<div style="text-align:center;"><p><strong>The syntax of the duration unit</strong></p><table><thead><tr><th style="text-align:center;">Symbol</th><th style="text-align:center;">Meaning</th><th style="text-align:center;">Presentation</th><th style="text-align:center;">Examples</th></tr></thead><tbody><tr><td style="text-align:center;">y</td><td style="text-align:center;">year</td><td style="text-align:center;">1y=365 days</td><td style="text-align:center;">1y</td></tr><tr><td style="text-align:center;">mo</td><td style="text-align:center;">month</td><td style="text-align:center;">1mo=30 days</td><td style="text-align:center;">1mo</td></tr><tr><td style="text-align:center;">w</td><td style="text-align:center;">week</td><td style="text-align:center;">1w=7 days</td><td style="text-align:center;">1w</td></tr><tr><td style="text-align:center;">d</td><td style="text-align:center;">day</td><td style="text-align:center;">1d=1 day</td><td style="text-align:center;">1d</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">h</td><td style="text-align:center;">hour</td><td style="text-align:center;">1h=3600 seconds</td><td style="text-align:center;">1h</td></tr><tr><td style="text-align:center;">m</td><td style="text-align:center;">minute</td><td style="text-align:center;">1m=60 seconds</td><td style="text-align:center;">1m</td></tr><tr><td style="text-align:center;">s</td><td style="text-align:center;">second</td><td style="text-align:center;">1s=1 second</td><td style="text-align:center;">1s</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">ms</td><td style="text-align:center;">millisecond</td><td style="text-align:center;">1ms=1000_000 nanoseconds</td><td style="text-align:center;">1ms</td></tr><tr><td style="text-align:center;">us</td><td style="text-align:center;">microsecond</td><td style="text-align:center;">1us=1000 nanoseconds</td><td style="text-align:center;">1us</td></tr><tr><td style="text-align:center;">ns</td><td style="text-align:center;">nanosecond</td><td style="text-align:center;">1ns=1 nanosecond</td><td style="text-align:center;">1ns</td></tr></tbody></table></div><p>例子：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>now() - 1d2h //比服务器时间早 1 天 2 小时的时间
now() - 1w //比服务器时间早 1 周的时间
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：&#39;+&#39;和&#39;-&#39;的左右两边必须有空格</p></blockquote>`,4);function b(E,I){const d=s("RouterLink");return i(),c("div",null,[y(`

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

`),g,e("p",null,[t("对于 "),x,t(" 与 "),h,t(" 类型的序列，如果编码方式采用 "),l(d,{to:"/zh/UserGuide/V1.1.x/Data-Concept/Encoding.html"},{default:r(()=>[t("RLE")]),_:1}),t(" 或 "),l(d,{to:"/zh/UserGuide/V1.1.x/Data-Concept/Encoding.html"},{default:r(()=>[t("TS_2DIFF")]),_:1}),t(" ，可以在创建序列时通过 "),u,t(" 属性指定浮点数的小数点后位数。")]),m,e("p",null,[t("若不指定，系统会按照配置文件 "),p,t(" 中的 "),l(d,{to:"/zh/UserGuide/V1.1.x/Reference/Common-Config-Manual.html"},{default:r(()=>[t("float_precision")]),_:1}),t(" 项配置（默认为 2 位）。")]),T,t(),f])}const S=a(o,[["render",b],["__file","Data-Type.html.vue"]]);export{S as default};
