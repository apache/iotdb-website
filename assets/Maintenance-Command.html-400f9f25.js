import{_ as e,E as a,F as s,af as n,aT as t}from"./framework-6055ecdb.js";const o={},i=t(`<h1 id="运维工具" tabindex="-1"><a class="header-anchor" href="#运维工具" aria-hidden="true">#</a> 运维工具</h1><h2 id="运维命令" tabindex="-1"><a class="header-anchor" href="#运维命令" aria-hidden="true">#</a> 运维命令</h2><h3 id="flush" tabindex="-1"><a class="header-anchor" href="#flush" aria-hidden="true">#</a> FLUSH</h3><p>将指定存储组的内存缓存区 Memory Table 的数据持久化到磁盘上，并将数据文件封口。</p><p>注意：此命令客户端不需要手动调用，IoTDB 有 wal 保证数据安全，IoTDB 会选择合适的时机进行 flush。 如果频繁调用 flush 会导致数据文件很小，降低查询性能。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>IoTDB<span class="token operator">&gt;</span> FLUSH 
IoTDB<span class="token operator">&gt;</span> FLUSH root<span class="token punctuation">.</span>ln
IoTDB<span class="token operator">&gt;</span> FLUSH root<span class="token punctuation">.</span>sg1<span class="token punctuation">,</span>root<span class="token punctuation">.</span>sg2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="merge" tabindex="-1"><a class="header-anchor" href="#merge" aria-hidden="true">#</a> MERGE</h3><p>触发层级合并和乱序合并。当前 IoTDB 支持使用如下两种 SQL 手动触发数据文件的合并：</p><ul><li><code>MERGE</code> 先触发层级合并，等层级合并执行完后，再触发乱序合并。在乱序合并中，仅重写重复的 Chunk，整理速度快，但是最终磁盘会存在多余数据。</li><li><code>FULL MERGE</code> 先触发层级合并，等层级合并执行完后，再触发乱序合并。在乱序合并中，将需要合并的顺序和乱序文件的所有数据都重新写一份，整理速度慢，最终磁盘将不存在无用的数据。</li></ul><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>IoTDB<span class="token operator">&gt;</span> <span class="token keyword">MERGE</span>
IoTDB<span class="token operator">&gt;</span> <span class="token keyword">FULL</span> <span class="token keyword">MERGE</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="clear-cache" tabindex="-1"><a class="header-anchor" href="#clear-cache" aria-hidden="true">#</a> CLEAR CACHE</h3><p>手动清除chunk, chunk metadata和timeseries metadata的缓存，在内存资源紧张时，可以通过此命令，释放查询时缓存所占的内存空间。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>IoTDB<span class="token operator">&gt;</span> CLEAR CACHE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="set-ststem-to-readonly-writable" tabindex="-1"><a class="header-anchor" href="#set-ststem-to-readonly-writable" aria-hidden="true">#</a> SET STSTEM TO READONLY / WRITABLE</h3><p>手动设置系统为只读或者可写入模式。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>IoTDB<span class="token operator">&gt;</span> <span class="token keyword">SET</span> SYSTEM <span class="token keyword">TO</span> READONLY
IoTDB<span class="token operator">&gt;</span> <span class="token keyword">SET</span> SYSTEM <span class="token keyword">TO</span> WRITABLE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="schema-snapshot" tabindex="-1"><a class="header-anchor" href="#schema-snapshot" aria-hidden="true">#</a> SCHEMA SNAPSHOT</h3><p>为了加快 IoTDB 重启速度，用户可以手动触发创建 schema 的快照，从而避免服务器从 mlog 文件中恢复。此功能不支持使用模板、标签或对齐序列的场景。</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>IoTDB<span class="token operator">&gt;</span> <span class="token keyword">CREATE</span> <span class="token keyword">SNAPSHOT</span> <span class="token keyword">FOR</span> <span class="token keyword">SCHEMA</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="超时" tabindex="-1"><a class="header-anchor" href="#超时" aria-hidden="true">#</a> 超时</h3><p>IoTDB 支持 Session 超时和查询超时。</p><h4 id="session-超时" tabindex="-1"><a class="header-anchor" href="#session-超时" aria-hidden="true">#</a> Session 超时</h4><p>Session 超时控制何时关闭空闲 Session。空闲 Session 指在一段时间内没有发起任何操作的 Session。</p><p>Session 超时默认未开启。可以在配置文件中通过 <code>session_timeout_threshold</code> 参数进行配置。</p><h4 id="查询超时" tabindex="-1"><a class="header-anchor" href="#查询超时" aria-hidden="true">#</a> 查询超时</h4><p>对于执行时间过长的查询，IoTDB 将强行中断该查询，并抛出超时异常，如下所示：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code>IoTDB<span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">;</span>
Msg: <span class="token number">701</span> <span class="token keyword">Current</span> query <span class="token operator">is</span> <span class="token keyword">time</span> <span class="token keyword">out</span><span class="token punctuation">,</span> please <span class="token keyword">check</span> your statement <span class="token operator">or</span> <span class="token keyword">modify</span> timeout parameter<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>系统默认的超时时间为 60000 ms，可以在配置文件中通过 <code>query_timeout_threshold</code> 参数进行自定义配置。</p><p>如果您使用 JDBC 或 Session，还支持对单个查询设置超时时间（单位为 ms）：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">IoTDBStatement</span><span class="token punctuation">)</span> statement<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">executeQuery</span><span class="token punctuation">(</span><span class="token class-name">String</span> sql<span class="token punctuation">,</span> <span class="token keyword">long</span> timeoutInMS<span class="token punctuation">)</span>
session<span class="token punctuation">.</span><span class="token function">executeQueryStatement</span><span class="token punctuation">(</span><span class="token class-name">String</span> sql<span class="token punctuation">,</span> <span class="token keyword">long</span> timeout<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>如果不配置超时时间参数或将超时时间设置为负数，将使用服务器端默认的超时时间。 如果超时时间设置为0，则会禁用超时功能。</p></blockquote><h4 id="查询中止" tabindex="-1"><a class="header-anchor" href="#查询中止" aria-hidden="true">#</a> 查询中止</h4><p>除了被动地等待查询超时外，IoTDB 还支持主动地中止查询，命令为：</p><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">KILL</span> QUERY <span class="token operator">&lt;</span>queryId<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过指定 <code>queryId</code> 可以中止指定的查询，而如果不指定 <code>queryId</code>，将中止所有正在执行的查询。</p><p>为了获取正在执行的查询 id，用户可以使用 <code>show query processlist</code> 命令，该命令将显示所有正在执行的查询列表，结果形式如下：</p><table><thead><tr><th>Time</th><th>queryId</th><th>statement</th></tr></thead><tbody><tr><td></td><td></td><td></td></tr></tbody></table><p>其中 statement 最大显示长度为 64 字符。对于超过 64 字符的查询语句，将截取部分进行显示。</p>`,38);function r(d,l){return a(),s("div",null,[n(`

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

`),i])}const p=e(o,[["render",r],["__file","Maintenance-Command.html.vue"]]);export{p as default};