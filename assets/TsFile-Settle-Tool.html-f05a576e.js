import{_ as e,E as a,F as s,af as n,aT as t}from"./framework-6055ecdb.js";const i={},o=t(`<h2 id="tsfile-settle-tool" tabindex="-1"><a class="header-anchor" href="#tsfile-settle-tool" aria-hidden="true">#</a> TsFile Settle tool</h2><p>The TsFile Settle tool is used to rewrite one or more TsFiles that have modified record files, and submit the TsFile compaction task by sending an RPC to the DataNode to rewrite the TsFile.</p><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage：</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#MacOs or Linux</span>
./settle-tsfile.sh <span class="token parameter variable">-h</span> <span class="token punctuation">[</span>host<span class="token punctuation">]</span> <span class="token parameter variable">-p</span> <span class="token punctuation">[</span>port<span class="token punctuation">]</span> <span class="token parameter variable">-f</span> <span class="token punctuation">[</span>filePaths<span class="token punctuation">]</span>
<span class="token comment"># Windows</span>
.<span class="token punctuation">\\</span>settle-tsfile.bat <span class="token parameter variable">-h</span> <span class="token punctuation">[</span>host<span class="token punctuation">]</span> <span class="token parameter variable">-p</span> <span class="token punctuation">[</span>port<span class="token punctuation">]</span> <span class="token parameter variable">-f</span> <span class="token punctuation">[</span>filePaths<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The host and port parameters are the host and port of the DataNodeInternalRPCService. If not specified, the default values are 127.0.0.1 and 10730 respectively. The filePaths parameter specifies the absolute paths of all TsFiles to be submitted as a compaction task on this DataNode, separated by spaces. Pass in at least one path.</p><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example：</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./settle-tsfile.sh <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-p</span> <span class="token number">10730</span> <span class="token parameter variable">-f</span> /data/sequence/root.sg/0/0/1672133354759-2-0-0.tsfile /data/sequence/root.sg/0/0/1672306417865-3-0-0.tsfile /data/sequence/root.sg/0/0/1672306417865-3-0-0.tsfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="requirement" tabindex="-1"><a class="header-anchor" href="#requirement" aria-hidden="true">#</a> Requirement：</h3><ul><li>Specify at least one TsFile</li><li>All specified TsFiles are in the same space and are continuous, and cross-space compaction is not supported</li><li>The specified file path is the absolute path of the TsFile of the node where the specified DataNode is located</li><li>The specified DataNode is configured to allow the space where the input TsFile is located to perform the compaction</li><li>At least one of the specified TsFiles has a corresponding .mods file</li></ul>`,9);function l(r,p){return a(),s("div",null,[n(`

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

`),o])}const d=e(i,[["render",l],["__file","TsFile-Settle-Tool.html.vue"]]);export{d as default};