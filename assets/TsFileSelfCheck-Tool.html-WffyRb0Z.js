import{_ as e,o as a,c as n,a as s,f as i}from"./app-yEzVYvK-.js";const t={},o=i(`<h1 id="tsfile-自检工具" tabindex="-1"><a class="header-anchor" href="#tsfile-自检工具" aria-hidden="true">#</a> TsFile 自检工具</h1><p>IoTDB Server 提供了 TsFile 自检工具，目前该工具可以检查 TsFile 文件中的基本格式、TimeseriesMetadata 的正确性以及 TsFile 中各部分存储的 Statistics 的正确性和一致性。</p><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>第一步：创建一个 TsFileSelfCheckTool 类的对象。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">TsFileSelfCheckTool</span> tool <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TsFileSelfCheckTool</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第二步：调用自检工具的 check 方法。第一个参数 path 是要检测的 TsFile 的路径。第二个参数是是否只检测 TsFile 开头和结尾的 Magic String 和 Version Number。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>tool<span class="token punctuation">.</span><span class="token function">check</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>check 方法的返回值有四种。</li><li>返回值为 0 表示 TsFile 自检无错。</li><li>返回值为 -1 表示 TsFile 存在 Statistics 不一致问题。具体会有两种异常，一种是 TimeSeriesMetadata 的 Statistics 与其后面的 ChunkMetadata 的聚合统计的 Statistics 不一致。另一种是 ChunkMetadata 的 Statistics 与其索引的 Chunk 中的 Page 聚合统计的 Statistics 不一致。</li><li>返回值为 -2 表示 TsFile 版本不兼容。</li><li>返回值为 -3 表示给定路径不存在 TsFile 文件。</li></ul>`,8);function l(c,r){return a(),n("div",null,[s(`

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

`),o])}const d=e(t,[["render",l],["__file","TsFileSelfCheck-Tool.html.vue"]]);export{d as default};
