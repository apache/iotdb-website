import{_ as e,o as i,c as t,a as s,f as l}from"./app-d415a090.js";const n={},o=l(`<h1 id="tsfile-拆分工具" tabindex="-1"><a class="header-anchor" href="#tsfile-拆分工具" aria-hidden="true">#</a> TsFile 拆分工具</h1><p>TsFile 拆分工具用来将一个 TsFile 拆分为多个 TsFile，工具位置为 tools/tsfile/split-tsfile-tool</p><p>使用方式：</p><p>Windows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.\\split-tsfile-tool.bat &lt;TsFile 文件路径&gt; (-level &lt;新生成文件名的空间内合并次数，默认为10&gt;) (-size &lt;新生成文件的大小（字节），默认为 1048576000&gt;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Linux or MacOs:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./split-tsfile-tool.sh &lt;TsFile 文件路径&gt; (-level &lt;新生成文件名的空间内合并次数，默认为10&gt;) (-size &lt;新生成文件的大小（字节），默认为 1048576000&gt;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>例如，需要指定生成 100MB 的文件，且空间内合并次数为 6，则命令为 <code>./split-tsfile-tool.sh test.tsfile -level 6 -size 1048576000</code> (Linux or MacOs)</p></blockquote><p>使用拆分工具需要注意如下事项：</p><ol><li>拆分工具针对单个已经封口的 TsFile 进行操作，需要确保此 TsFile 已经封口，如 TsFile 在 IoTDB 内，则需要有对应的 <code>.resource</code> 文件。</li><li>拆分过程需确保文件已经从 IoTDB 中卸载。</li><li>目前未处理 TsFile 对应的 mods 文件，如果希望拆分后继续放入 IoTDB 目录中通过重启加载，需要手动将 mods 文件拷贝多份，并修改命名，为每个新生成的文件配备一个 mods 文件。</li><li>拆分工具目前尚不支持保存对齐时间序列的 TsFile。</li></ol>`,10);function a(r,c){return i(),t("div",null,[s(`

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

`),o])}const p=e(n,[["render",a],["__file","TsFile-Split-Tool.html.vue"]]);export{p as default};
