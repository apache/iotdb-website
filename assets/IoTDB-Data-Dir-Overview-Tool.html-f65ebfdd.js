import{_ as a,o as s,c as n,a as e,f as o}from"./app-e22bde73.js";const t={},p=o('<h1 id="iotdb-data-directory-overview-tool" tabindex="-1"><a class="header-anchor" href="#iotdb-data-directory-overview-tool" aria-hidden="true">#</a> IoTDB Data Directory Overview Tool</h1><p>IoTDB data directory overview tool is used to print an overview of the IoTDB data directory structure. The location is tools/tsfile/print-iotdb-data-dir.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><ul><li>For Windows:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>.<span class="token punctuation">\\</span>print-iotdb-data-dir.bat <span class="token operator">&lt;</span>IoTDB data folder path, separated by commas <span class="token keyword">if</span> there are multiple folders<span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>storage path of the output overview file<span class="token operator">&gt;</span><span class="token punctuation">)</span> \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>For Linux or MacOs:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./print-iotdb-data-dir.sh <span class="token operator">&lt;</span>IoTDB data folder path, separated by commas <span class="token keyword">if</span> there are multiple folders<span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token operator">&lt;</span>storage path of the output overview file<span class="token operator">&gt;</span><span class="token punctuation">)</span> \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Note: if the storage path of the output overview file is not set, the default relative path &quot;IoTDB_data_dir_overview.txt&quot; will be used.</p><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2><p>Use Windows in this example:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>.<span class="token punctuation">\\</span>print-iotdb-data-dir.bat D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>master<span class="token punctuation">\\</span>iotdb<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>datanode<span class="token punctuation">\\</span>data\n```````````````````````<span class="token variable"><span class="token variable">`</span>\nStarting Printing the IoTDB Data Directory Overview\n<span class="token variable">`</span></span>```````````````````````\noutput save path:IoTDB_data_dir_overview.txt\ndata <span class="token function">dir</span> num:1\n<span class="token number">143</span>  <span class="token punctuation">[</span>main<span class="token punctuation">]</span> WARN  o.a.i.t.c.conf.TSFileDescriptor - not found iotdb-common.properties, use the default configs.\n<span class="token operator">|</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>\n<span class="token operator">|</span>D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>master<span class="token punctuation">\\</span>iotdb<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>datanode<span class="token punctuation">\\</span>data\n<span class="token operator">|</span>--sequence\n<span class="token operator">|</span>  <span class="token operator">|</span>--root.redirect0\n<span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--1\n<span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--0\n<span class="token operator">|</span>  <span class="token operator">|</span>--root.redirect1\n<span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--2\n<span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--0\n<span class="token operator">|</span>  <span class="token operator">|</span>--root.redirect2\n<span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--3\n<span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--0\n<span class="token operator">|</span>  <span class="token operator">|</span>--root.redirect3\n<span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--4\n<span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--0\n<span class="token operator">|</span>  <span class="token operator">|</span>--root.redirect4\n<span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--5\n<span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--0\n<span class="token operator">|</span>  <span class="token operator">|</span>--root.redirect5\n<span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--6\n<span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--0\n<span class="token operator">|</span>  <span class="token operator">|</span>--root.sg1\n<span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--0\n<span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--0\n<span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>  <span class="token operator">|</span>--2760\n<span class="token operator">|</span>--unsequence\n<span class="token operator">|</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',11);function r(l,i){return s(),n("div",null,[e(`

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

`),p])}const d=a(t,[["render",r],["__file","IoTDB-Data-Dir-Overview-Tool.html.vue"]]);export{d as default};
