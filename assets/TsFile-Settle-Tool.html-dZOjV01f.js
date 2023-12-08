import{_ as e,o as a,c as s,a as n,f as t}from"./app-n-N-QVvk.js";const i={},l=t(`<h1 id="tsfile-settle工具" tabindex="-1"><a class="header-anchor" href="#tsfile-settle工具" aria-hidden="true">#</a> TsFile Settle工具</h1><p>TsFile Settle工具用于将一个或多个存在修改记录文件的TsFile重写，通过向DataNode发送RPC的方式提交TsFile合并任务来重写TsFile。</p><h2 id="使用方式" tabindex="-1"><a class="header-anchor" href="#使用方式" aria-hidden="true">#</a> 使用方式</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#MacOs or Linux</span>
./settle-tsfile.sh <span class="token parameter variable">-h</span> <span class="token punctuation">[</span>host<span class="token punctuation">]</span> <span class="token parameter variable">-p</span> <span class="token punctuation">[</span>port<span class="token punctuation">]</span> <span class="token parameter variable">-f</span> <span class="token punctuation">[</span>filePaths<span class="token punctuation">]</span>
<span class="token comment"># Windows</span>
.<span class="token punctuation">\\</span>settle-tsfile.bat <span class="token parameter variable">-h</span> <span class="token punctuation">[</span>host<span class="token punctuation">]</span> <span class="token parameter variable">-p</span> <span class="token punctuation">[</span>port<span class="token punctuation">]</span> <span class="token parameter variable">-f</span> <span class="token punctuation">[</span>filePaths<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中host和port参数为DataNodeInternalRPCService的host和port，如果不指定默认值分别为127.0.0.1和10730, filePaths参数指定要作为一个compaction任务提交的所有TsFile在此DataNode上的绝对路径，以空格分隔，需要传入至少一个路径。</p><h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./settle-tsfile.sh <span class="token parameter variable">-h</span> <span class="token number">127.0</span>.0.1 <span class="token parameter variable">-p</span> <span class="token number">10730</span> <span class="token parameter variable">-f</span> /data/sequence/root.sg/0/0/1672133354759-2-0-0.tsfile /data/sequence/root.sg/0/0/1672306417865-3-0-0.tsfile /data/sequence/root.sg/0/0/1672306417865-3-0-0.tsfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="使用要求" tabindex="-1"><a class="header-anchor" href="#使用要求" aria-hidden="true">#</a> 使用要求</h2><ul><li>最少指定一个TsFile</li><li>所有指定的TsFile都在同一个空间内且连续，不支持跨空间合并</li><li>指定的文件路径为指定DataNode所在节点的该TsFile的绝对路径</li><li>指定的DataNode上配置了允许输入的TsFile所在的空间执行合并操作</li><li>指定的TsFile中至少有一个存在对应的.mods文件</li></ul>`,9);function o(r,c){return a(),s("div",null,[n(`

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

`),l])}const d=e(i,[["render",o],["__file","TsFile-Settle-Tool.html.vue"]]);export{d as default};
