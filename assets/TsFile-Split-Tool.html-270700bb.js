import{_ as e,o as i,c as t,a as s,f as o}from"./app-e19a8f96.js";const n={},l=o(`<h1 id="tsfile-split-tool" tabindex="-1"><a class="header-anchor" href="#tsfile-split-tool" aria-hidden="true">#</a> TsFile Split Tool</h1><p>TsFile split tool is used to split a TsFile into multiple TsFiles. The location is tools/tsfile/split-tsfile-tool</p><p>How to use:</p><p>For Windows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.\\split-tsfile-tool.bat &lt;path of your TsFile&gt; (-level &lt;inner space compaction num in new file name, default is 10&gt;) (-size &lt;size of new files in byte, default is 1048576000&gt;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>For Linux or MacOs:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./split-tsfile-tool.sh &lt;path of your TsFile&gt; (-level &lt;inner space compaction num in new file name, default is 10&gt;) (-size &lt;size of new files in byte, default is 1048576000&gt;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>For example, if the new files size is 100MB, and the compaction num is 6, the command is <code>./split-tsfile-tool.sh test.tsfile -level 6 -size 1048576000</code> (Linux or MacOs)</p></blockquote><p>Here are some more tips:</p><ol><li>TsFile split tool is for one closed TsFile, need to ensure this TsFile is closed. If the TsFile is in IoTDB, a <code>.resource</code> file represent it is closed.</li><li>When doing split, make sure the TsFile is not in a running IoTDB.</li><li>Currently, we do not resolve the corresponding mods file, if you wish to put the new files into the IoTDB data dir and be loaded by restarting, you need to copy the related mods file(if exist) and rename them, make sure each new file has one mods.</li><li>This tools do not support aligned timeseries currently.</li></ol>`,10);function a(r,d){return i(),t("div",null,[s(`

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

`),l])}const p=e(n,[["render",a],["__file","TsFile-Split-Tool.html.vue"]]);export{p as default};
