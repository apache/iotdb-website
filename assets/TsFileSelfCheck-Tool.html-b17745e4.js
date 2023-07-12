import{_ as e,o as t,c as s,a,f as n}from"./app-07895744.js";const i={},o=n(`<h1 id="tsfileselfcheck-tool" tabindex="-1"><a class="header-anchor" href="#tsfileselfcheck-tool" aria-hidden="true">#</a> TsFileSelfCheck Tool</h1><p>IoTDB Server provides the TsFile self check tool. At present, the tool can check the basic format of the TsFile file, the correctness of TimeseriesMetadata, and the correctness and consistency of the Statistics stored in each part of the TsFile.</p><h2 id="use" tabindex="-1"><a class="header-anchor" href="#use" aria-hidden="true">#</a> Use</h2><p>Step 1：Create an object instance of TsFileSelfCheckTool class.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">TsFileSelfCheckTool</span> tool <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TsFileSelfCheckTool</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Step 2：Call the check method of the self check tool. The first parameter path is the path of the TsFile to be checked. The second parameter is whether to check only the Magic String and Version Number at the beginning and end of TsFile.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>tool<span class="token punctuation">.</span><span class="token function">check</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>There are four return values of the check method.</li><li>The return value is 0, which means that the TsFile self check is error-free.</li><li>The return value is -1, which means that TsFile has inconsistencies in Statistics. There will be two specific exceptions, one is that the Statistics of TimeSeriesMetadata is inconsistent with the Statistics of the aggregated statistics of ChunkMetadata. The other is that the Statistics of ChunkMetadata is inconsistent with the Statistics of Page aggregation statistics in the Chunk indexed by it.</li><li>The return value is -2, which means that the TsFile version is not compatible.</li><li>The return value is -3, which means that the TsFile file does not exist in the given path.</li></ul>`,8);function c(l,h){return t(),s("div",null,[a(`

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

`),o])}const d=e(i,[["render",c],["__file","TsFileSelfCheck-Tool.html.vue"]]);export{d as default};
