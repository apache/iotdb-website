import{_ as e,o as t,c as d,a as o,f as a}from"./app-d4806199.js";const n={},s=a(`<h1 id="nifi-iotdb-bundle" tabindex="-1"><a class="header-anchor" href="#nifi-iotdb-bundle" aria-hidden="true">#</a> nifi-iotdb-bundle</h1><h3 id="apache-nifi简介" tabindex="-1"><a class="header-anchor" href="#apache-nifi简介" aria-hidden="true">#</a> Apache NiFi简介</h3><p>Apache NiFi 是一个易用的、功能强大的、可靠的数据处理和分发系统。</p><p>Apache NiFi 支持强大的、可伸缩的数据路由、转换和系统中介逻辑的有向图。</p><p>Apache NiFi 包含以下功能：</p><ul><li>基于浏览器的用户接口： <ul><li>设计、控制、反馈和监控的无缝体验</li></ul></li><li>数据起源跟踪 <ul><li>从头到尾完整的信息族谱</li></ul></li><li>丰富的配置 <ul><li>丢失容忍和保证交付</li><li>低延迟和高吞吐</li><li>动态优先级策略</li><li>运行时可以修改流配置</li><li>反向压力控制</li></ul></li><li>扩展设计 <ul><li>用于定制 processors 和 services 的组件体系结构</li><li>快速开发和迭代测试</li></ul></li><li>安全会话 <ul><li>带有可配置认证策略的 HTTPS 协议</li><li>多租户授权和策略管理</li><li>包括TLS和SSH的加密通信的标准协议</li></ul></li></ul><h3 id="putiotdbrecord" tabindex="-1"><a class="header-anchor" href="#putiotdbrecord" aria-hidden="true">#</a> PutIoTDBRecord</h3><p>这是一个用于数据写入的处理器。它使用配置的 Record Reader 将传入 FlowFile 的内容读取为单独的记录，并使用本机接口将它们写入 Apache IoTDB。</p><h4 id="putiotdbrecord的配置项" tabindex="-1"><a class="header-anchor" href="#putiotdbrecord的配置项" aria-hidden="true">#</a> PutIoTDBRecord的配置项</h4><table><thead><tr><th>配置项</th><th>描述</th><th>默认值</th><th>是否必填</th></tr></thead><tbody><tr><td>Host</td><td>IoTDB 的主机名</td><td>null</td><td>true</td></tr><tr><td>Port</td><td>IoTDB 的端口</td><td>6667</td><td>true</td></tr><tr><td>Username</td><td>IoTDB 的用户名</td><td>null</td><td>true</td></tr><tr><td>Password</td><td>IoTDB 的密码</td><td>null</td><td>true</td></tr><tr><td>Prefix</td><td>将被写入IoTDB的数据的tsName前缀 以root. 开头 <br> 可以使用Nifi expression language做动态替换.</td><td>null</td><td>true</td></tr><tr><td>Time</td><td>时间字段名</td><td>null</td><td>true</td></tr><tr><td>Record Reader</td><td>指定一个 Record Reader controller service 来解析数据，并且推断数据格式。</td><td>null</td><td>true</td></tr><tr><td>Schema</td><td>IoTDB 需要的 schema 不能很好的被 NiFi 支持，因此你可以在这里自定义 schema。<br>除此之外，你可以通过这个方式设置编码和压缩类型。如果你没有设置这个配置，就会使用 Record Reader 推断的 schema。<br>这个配置可以通过 Attributes 的表达式来更新。</td><td>null</td><td>false</td></tr><tr><td>Aligned</td><td>是否使用 aligned 接口？<br>这个配置可以通过 Attributes 的表达式来更新。</td><td>false</td><td>false</td></tr><tr><td>MaxRowNumber</td><td>指定 tablet 的最大行数。<br>这个配置可以通过 Attributes 的表达式来更新。</td><td>1024</td><td>false</td></tr></tbody></table><h4 id="flowfile-的推断数据类型" tabindex="-1"><a class="header-anchor" href="#flowfile-的推断数据类型" aria-hidden="true">#</a> Flowfile 的推断数据类型</h4><p>如果要使用推断类型，需要注意以下几点：</p><ol><li>输入的 flowfile 需要能被 <code>Record Reader</code> 读取。</li><li>flowfile的 schema 中必须包含以时间字段名属性命名的字段</li><li><code>Time</code>的数据类型只能是 <code>STRING</code> 或者 <code>LONG </code>。</li><li>除<code>Time</code> 以外的列必须以 <code>root.</code> 开头。</li><li>支持的数据类型有： <code>INT</code>，<code>LONG</code>， <code>FLOAT</code>， <code>DOUBLE</code>， <code>BOOLEAN</code>， <code>TEXT</code>。</li></ol><h4 id="通过配置项自定义-schema" tabindex="-1"><a class="header-anchor" href="#通过配置项自定义-schema" aria-hidden="true">#</a> 通过配置项自定义 schema</h4><p>如上所述，通过配置项来自定义 schema 比起推断的 schema来说，是一种更加灵活和强大的方式。</p><p><code>Schema</code> 配置项的解构如下:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
   <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
      <span class="token property">&quot;tsName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;s1&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;dataType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;INT32&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;encoding&quot;</span><span class="token operator">:</span> <span class="token string">&quot;RLE&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;compressionType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;GZIP&quot;</span>
   <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;tsName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;s2&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;dataType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;INT64&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;encoding&quot;</span><span class="token operator">:</span> <span class="token string">&quot;RLE&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;compressionType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;GZIP&quot;</span>
   <span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong></p><ol><li>flowfile 的第一列数据必须为 <code>Time</code>。剩下的必须与 <code>fields</code> 配置中保持一样的顺序。</li><li>定义 shema 的 JSON 中必须包含 <code>timeType</code> and <code>fields</code> 这两项。</li><li><code>timeType</code> 只支持 <code>LONG</code> 和 <code>STRING</code> 这两个选项。</li><li><code>tsName</code> 和 <code>dataType</code> 这两项必须被设置。</li><li>当数据插入IoTDB时，Prefix属性会被添加到 tsName以作为插入的字段名。</li><li>支持的 <code>dataTypes</code> 有：<code>INT32</code>， <code>INT64</code>， <code>FLOAT</code>， <code>DOUBLE</code>， <code>BOOLEAN</code>， <code>TEXT</code>。</li><li>支持的 <code>encoding</code> 有： <code>PLAIN</code>， <code>DICTIONARY</code>， <code>RLE</code>， <code>DIFF</code>， <code>TS_2DIFF</code>， <code>BITMAP</code>， <code>GORILLA_V1</code>， <code>REGULAR</code>， <code>GORILLA</code>，<code>ZIGZAG</code>，<code>CHIMP</code>， <code>SPRINTZ</code>， <code>RLBE</code>。</li><li>支持的 <code>compressionType</code> 有： <code>UNCOMPRESSED</code>， <code>SNAPPY</code>， <code>GZIP</code>， <code>LZO</code>， <code>SDT</code>， <code>PAA</code>， <code>PLA</code>， <code>LZ4</code>， <code>ZSTD</code>， <code>LZMA2</code>。</li></ol><h3 id="relationships" tabindex="-1"><a class="header-anchor" href="#relationships" aria-hidden="true">#</a> Relationships</h3><table><thead><tr><th>relationship</th><th>描述</th></tr></thead><tbody><tr><td>success</td><td>数据能被正确的写入。</td></tr><tr><td>failure</td><td>schema 或者数据有异常。</td></tr></tbody></table><h3 id="queryiotdbrecord" tabindex="-1"><a class="header-anchor" href="#queryiotdbrecord" aria-hidden="true">#</a> QueryIoTDBRecord</h3><p>这是一个用于数据读取的处理器。它通过读取 FlowFile 的内容中的SQL 查询来对IoTDB的原生接口进行访问，并将查询结果用Record Writer写入 flowfile。</p><h4 id="queryiotdbrecord的配置项" tabindex="-1"><a class="header-anchor" href="#queryiotdbrecord的配置项" aria-hidden="true">#</a> QueryIoTDBRecord的配置项</h4><table><thead><tr><th>配置项</th><th>描述</th><th>默认值</th><th>是否必填</th></tr></thead><tbody><tr><td>Host</td><td>IoTDB 的主机名</td><td>null</td><td>true</td></tr><tr><td>Port</td><td>IoTDB 的端口</td><td>6667</td><td>true</td></tr><tr><td>Username</td><td>IoTDB 的用户名</td><td>null</td><td>true</td></tr><tr><td>Password</td><td>IoTDB 的密码</td><td>null</td><td>true</td></tr><tr><td>Record Writer</td><td>指定一个 Record Writer controller service 来写入数据。</td><td>null</td><td>true</td></tr><tr><td>iotdb-query</td><td>需要执行的IoTDB query <br>。 Note: 如果有连入侧的连接那么查询会从FlowFile的内容中提取，否则使用当前配置的属性</td><td>null</td><td>false</td></tr><tr><td>iotdb-query-chunk-size</td><td>返回的结果可以进行分块，数据流中会返回一批按设置大小切分的数据，而不是一个单一的响应. 分块查询可以返回无限量的行。 注意: 数据分块只有在设置不为0时启用</td><td>0</td><td>false</td></tr></tbody></table><h3 id="relationships-1" tabindex="-1"><a class="header-anchor" href="#relationships-1" aria-hidden="true">#</a> Relationships</h3><table><thead><tr><th>relationship</th><th>描述</th></tr></thead><tbody><tr><td>success</td><td>数据能被正确的写入。</td></tr><tr><td>failure</td><td>schema 或者数据有异常。</td></tr></tbody></table>`,27);function i(r,c){return t(),d("div",null,[o(`

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

`),s])}const p=e(n,[["render",i],["__file","NiFi-IoTDB.html.vue"]]);export{p as default};
