import{_ as e,o as a,c as n,a as s,f as i}from"./app-c49da242.js";const t={},o=i(`<h1 id="overlap-validation-and-repair-tool" tabindex="-1"><a class="header-anchor" href="#overlap-validation-and-repair-tool" aria-hidden="true">#</a> Overlap validation and repair tool</h1><p>The Overlap Validation And Repair tool is used to validate the resource files in sequence space, and repair overlaps.</p><p>The validation function can be run in any scenario. Confirmation is required after overlapping files are found. Typing &#39;y&#39; will perform the repair.</p><p><strong>The repair function must be run when corresponding DataNode is stopped and there are no unfinished compaction task in all data dirs.</strong><br> To make sure there are no unfinished compaction tasks, you can modify the config files to set enable compaction items to false, and restart DataNode waiting compaction recover task to finish.<br> Then stop the DataNode and run this tool.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#MacOs or Linux</span>
./check-overlap-sequence-files-and-repair.sh <span class="token punctuation">[</span>sequence_data_dir1<span class="token punctuation">]</span> <span class="token punctuation">[</span>sequence_data_dir2<span class="token punctuation">]</span><span class="token punctuation">..</span>.
<span class="token comment"># Windows</span>
.<span class="token punctuation">\\</span>check-overlap-sequence-files-and-repair.bat <span class="token punctuation">[</span>sequence_data_dir1<span class="token punctuation">]</span> <span class="token punctuation">[</span>sequence_data_dir2<span class="token punctuation">]</span><span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./check-overlap-sequence-files-and-repair.sh  /data1/sequence/ /data2/sequence
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This example validate two data dirs: /data1/sequence/, /data2/sequence.</p>`,9);function r(c,d){return a(),n("div",null,[s(`

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

`),o])}const p=e(t,[["render",r],["__file","Overlap-Validation-And-Repair-Tool.html.vue"]]);export{p as default};
