import{_ as e,o as a,c as n,a as s,f as i}from"./app-a-RiV1so.js";const t={},r=i(`<h1 id="overlap-validation-and-repair-工具" tabindex="-1"><a class="header-anchor" href="#overlap-validation-and-repair-工具" aria-hidden="true">#</a> Overlap validation and repair 工具</h1><p>Overlap Validation And Repair 工具用于验证顺序空间内 tsfile 的 resource 文件的重叠情况并进行修复。</p><p>验证功能可以在任意场景下运行，在找出所有存在重叠的文件后，需要输入 &#39;y&#39; 以确认是否进行修复。</p><p><strong>修复功能必须在相关的 DataNode 停止之后执行，且对应的数据目录中不存在未完成的合并任务。</strong><br> 为了确保没有尚未完成的合并任务，你可以修改配置文件中开启合并相关的配置项为 false，然后重启 DataNode 并等待合并恢复任务的完成，停止 DataNode，再运行这个工具。</p><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#MacOs or Linux</span>
./check-overlap-sequence-files-and-repair.sh <span class="token punctuation">[</span>sequence_data_dir1<span class="token punctuation">]</span> <span class="token punctuation">[</span>sequence_data_dir2<span class="token punctuation">]</span><span class="token punctuation">..</span>.
<span class="token comment"># Windows</span>
.<span class="token punctuation">\\</span>check-overlap-sequence-files-and-repair.bat <span class="token punctuation">[</span>sequence_data_dir1<span class="token punctuation">]</span> <span class="token punctuation">[</span>sequence_data_dir2<span class="token punctuation">]</span><span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./check-overlap-sequence-files-and-repair.sh  /data1/sequence/ /data2/sequence
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这个示例指定了配置的两个数据目录进行扫描: /data1/sequence/, /data2/sequence。</p>`,9);function o(c,d){return a(),n("div",null,[s(`

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

`),r])}const p=e(t,[["render",o],["__file","Overlap-Validation-And-Repair-Tool.html.vue"]]);export{p as default};
