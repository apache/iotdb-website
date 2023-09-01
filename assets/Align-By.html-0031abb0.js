import{_ as a,r as s,o as t,c as i,a as r,d as o,e,b as d,w as l,f as c}from"./app-ac157f10.js";const p={},u=c(`<h1 id="query-alignment-mode" tabindex="-1"><a class="header-anchor" href="#query-alignment-mode" aria-hidden="true">#</a> Query Alignment Mode</h1><p>In addition, IoTDB supports another result set format: <code>ALIGN BY DEVICE</code>.</p><h2 id="align-by-device" tabindex="-1"><a class="header-anchor" href="#align-by-device" aria-hidden="true">#</a> align by device</h2><p>The <code>ALIGN BY DEVICE</code> indicates that the deviceId is considered as a column. Therefore, there are totally limited columns in the dataset.</p><blockquote><p>NOTE：</p><p>1.You can see the result of &#39;align by device&#39; as one relational table, <code>Time + Device</code> is the primary key of this Table.</p><p>2.The result is order by <code>Device</code> firstly, and then by <code>Time</code> order.</p></blockquote><p>The SQL statement is:</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">01</span>:<span class="token number">00</span> align <span class="token keyword">by</span> device<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The result shows below:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-----------------------------+-----------------+-----------+------+--------+
|                         Time|           Device|temperature|status|hardware|
+-----------------------------+-----------------+-----------+------+--------+
|2017-11-01T00:00:00.000+08:00|root.ln.wf01.wt01|      25.96|  true|    null|
|2017-11-01T00:01:00.000+08:00|root.ln.wf01.wt01|      24.36|  true|    null|
|1970-01-01T08:00:00.001+08:00|root.ln.wf02.wt02|       null|  true|      v1|
|1970-01-01T08:00:00.002+08:00|root.ln.wf02.wt02|       null| false|      v2|
|2017-11-01T00:00:00.000+08:00|root.ln.wf02.wt02|       null|  true|      v2|
|2017-11-01T00:01:00.000+08:00|root.ln.wf02.wt02|       null|  true|      v2|
+-----------------------------+-----------------+-----------+------+--------+
Total line number = 6
It costs 0.012s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ordering-in-align-by-device" tabindex="-1"><a class="header-anchor" href="#ordering-in-align-by-device" aria-hidden="true">#</a> Ordering in ALIGN BY DEVICE</h2><p>ALIGN BY DEVICE mode arranges according to the device first, and sort each device in ascending order according to the timestamp. The ordering and priority can be adjusted through <code>ORDER BY</code> clause.</p>`,11);function h(m,v){const n=s("RouterLink");return t(),i("div",null,[r(`

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

`),u,o("p",null,[e("For details and examples, see the document "),d(n,{to:"/UserGuide/V1.2.x/stage/Query-Data/Order-By.html"},{default:l(()=>[e("Order By")]),_:1}),e(".")])])}const g=a(p,[["render",h],["__file","Align-By.html.vue"]]);export{g as default};
