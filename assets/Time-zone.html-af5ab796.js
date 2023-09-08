import{_ as n,o as e,c as s,a,f as i}from"./app-0939551d.js";const t={},o=i(`<h2 id="时区" tabindex="-1"><a class="header-anchor" href="#时区" aria-hidden="true">#</a> 时区</h2><p>客户端连接 IoTDB 服务器时，可以指定该连接所要使用的时区。如果未指定，则<strong>默认以客户端所在的时区作为连接的时区。</strong></p><p>在 JDBC 和 Session 原生接口连接中均可以设置时区，使用方法如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token constant">JDBC</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token class-name">IoTDBConnection</span><span class="token punctuation">)</span> connection<span class="token punctuation">.</span><span class="token function">setTimeZone</span><span class="token punctuation">(</span><span class="token string">&quot;+08:00&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Session</span><span class="token operator">:</span> session<span class="token punctuation">.</span><span class="token function">setTimeZone</span><span class="token punctuation">(</span><span class="token string">&quot;+08:00&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 CLI 命令行工具中，通过命令手动设置时区的方式为：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SET</span> time_zone<span class="token operator">=</span><span class="token operator">+</span><span class="token number">08</span>:<span class="token number">00</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看当前连接使用的时区的方法如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token constant">JDBC</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token class-name">IoTDBConnection</span><span class="token punctuation">)</span> connection<span class="token punctuation">.</span><span class="token function">getTimeZone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Session</span><span class="token operator">:</span> session<span class="token punctuation">.</span><span class="token function">getTimeZone</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CLI 中的方法为：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> time_zone
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="时区使用场景" tabindex="-1"><a class="header-anchor" href="#时区使用场景" aria-hidden="true">#</a> 时区使用场景</h3><p>IoTDB 服务器只针对时间戳进行存储和处理，时区只用来与客户端进行交互，具体场景如下：</p><ol><li><p>将客户端传来的日期格式的字符串转化为相应的时间戳。</p><p>例如，执行写入 <code>insert into root.sg.d1(timestamp, s1) values(2021-07-01T08:00:00.000, 3.14)</code></p><p>则 <code>2021-07-01T08:00:00.000</code>将会根据客户端所在的时区转换为相应的时间戳，如果在东八区，则会转化为<code>1625097600000</code> ，等价于 0 时区 <code>2021-07-01T00:00:00.000</code> 的时间戳值。</p><blockquote><p>Note：同一时刻，不同时区的日期不同，但时间戳相同。</p></blockquote></li><li><p>将服务器返回给客户端结果中包含的时间戳转化为日期格式的字符串。</p><p>以上述情况为例，执行查询 <code>select * from root.sg.d1</code>，则服务器会返回 (1625097600000, 3.14) 的时间戳值对，如果使用 CLI 命令行客户端，则 <code>1625097600000</code> 又会被根据时区转化为日期格式的字符串，如下图所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-------------+
|                         Time|root.sg.d1.s1|
+-----------------------------+-------------+
|2021-07-01T08:00:00.000+08:00|         3.14|
+-----------------------------+-------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而如果在 0 时区的客户端执行查询，则显示结果将是：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-------------+
|                         Time|root.sg.d1.s1|
+-----------------------------+-------------+
|2021-07-01T00:00:00.000+00:00|         3.14|
+-----------------------------+-------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，此时返回的时间戳是相同的，只是不同时区的日期不同。</p></li></ol>`,13);function c(p,l){return e(),s("div",null,[a(`

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

`),o])}const r=n(t,[["render",c],["__file","Time-zone.html.vue"]]);export{r as default};
