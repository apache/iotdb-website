import{_ as e,o as t,c as n,a as i,f as a}from"./app-8e235320.js";const r={},o=a(`<h2 id="数据存活时间-ttl" tabindex="-1"><a class="header-anchor" href="#数据存活时间-ttl" aria-hidden="true">#</a> 数据存活时间（TTL）</h2><p>IoTDB 支持对存储组级别设置数据存活时间（TTL），这使得 IoTDB 可以定期、自动地删除一定时间之前的数据。合理使用 TTL<br> 可以帮助您控制 IoTDB 占用的总磁盘空间以避免出现磁盘写满等异常。并且，随着文件数量的增多，查询性能往往随之下降，<br> 内存占用也会有所提高。及时地删除一些较老的文件有助于使查询性能维持在一个较高的水平和减少内存资源的占用。</p><h3 id="设置-ttl" tabindex="-1"><a class="header-anchor" href="#设置-ttl" aria-hidden="true">#</a> 设置 TTL</h3><p>设置 TTL 的 SQL 语句如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; set ttl to root.ln 3600000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个例子表示在<code>root.ln</code>存储组中，只有最近一个小时的数据将会保存，旧数据会被移除或不可见。</p><h3 id="取消-ttl" tabindex="-1"><a class="header-anchor" href="#取消-ttl" aria-hidden="true">#</a> 取消 TTL</h3><p>取消 TTL 的 SQL 语句如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; unset ttl to root.ln
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>取消设置 TTL 后，存储组<code>root.ln</code>中所有的数据都会被保存。</p><h3 id="显示-ttl" tabindex="-1"><a class="header-anchor" href="#显示-ttl" aria-hidden="true">#</a> 显示 TTL</h3><p>显示 TTL 的 SQL 语句如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; SHOW ALL TTL
IoTDB&gt; SHOW TTL ON StorageGroupNames
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>SHOW ALL TTL 这个例子会给出所有存储组的 TTL。<br> SHOW TTL ON root.group1,root.group2,root.group3 这个例子会显示指定的三个存储组的 TTL。<br> 注意：没有设置 TTL 的存储组的 TTL 将显示为 null。</p>`,14);function s(d,l){return t(),n("div",null,[i(`

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

`),o])}const h=e(r,[["render",s],["__file","TTL.html.vue"]]);export{h as default};
