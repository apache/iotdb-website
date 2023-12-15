import{_ as e,o as i,c as t,a as o,f as n}from"./app-M0jdIOYn.js";const s={},l=n(`<h2 id="tsfile-拆分工具" tabindex="-1"><a class="header-anchor" href="#tsfile-拆分工具" aria-hidden="true">#</a> TsFile 拆分工具</h2><p>0.12 版本的 IoTDB 会产生很大的文件，在运维过程中分析起来比较困难。因此，从 0.12.5 版本和 0.13 版本起，提供TsFile 分离工具，该工具可以将大的 TsFile 文件根据配置项拆分为数个小文件。该启动脚本会在编译 server 之后生成至 <code>server\\target\\iotdb-server-{version}\\tools\\tsfileToolSet</code> 目录中。</p><p>使用方式：</p><p>Windows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.\\split-tsfile-tool.bat &lt;TsFile 文件路径&gt; (-level &lt;所拆分文件的层级&gt;) (-size &lt;所拆分文件的大小&gt;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Linux or MacOs:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./split-tsfile-tool.sh &lt;TsFile 文件路径&gt; (-level &lt;所拆分文件的层级&gt;) (-size &lt;所拆分文件的大小&gt;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>注意：如果不传入<code>-level</code>，所拆分文件的层级为 10；如果不传入<code>-size</code>，所拆分文件的大小约为 1GB；<code>-size</code> 后参数单位为 byte。<br> 例如，需要指定拆分为 100MB 的文件，且文件层级数为6，则命令为 <code>./split-tsfile-tool.sh test.tsfile -level 6 -size 1048576000</code> (Linux or MacOs)</p></blockquote><p>拆分中可以调节的配置项如下：</p><ol><li>拆分所生成的文件大小通过命令传入参数确定的，默认为 1GB。这个配置项同样也是 0.13 版本中合并所能生成文件的目标大小。在 0.13 版本中，文件是否可以合并是通过文件大小确定的，可以通过此配置项控制重启后不继续合并。</li><li>文件所在层级是通过命令传入参数确定的，默认为 10。在 0.12 版本中，文件是否可以合并是通过文件所在层级确定的，可以通过此配置项控制重启后不继续合并。</li><li>文件中 chunk 点数可以通过 <code>chunk_point_num_lower_bound_in_compaction</code> 进行配置，默认为 100。这个配置项同样也是 0.13 版本中合并所能生成文件的 chunk 中点数。</li></ol><p>使用拆分工具需要注意如下事项：</p><ol><li>拆分工具为离线运维工具，使用前需关闭 IoTDB，确保所拆分的文件已经完全落盘（即有<code>tsFile.resource</code>文件）。拆分后需移除原文件后重启。</li><li>拆分工具目前尚不支持拆分带有删除区间的 TsFile（即有<code>.mods</code>文件）和写有对齐时间序列的 TsFile。</li></ol>`,12);function c(r,a){return i(),t("div",null,[o(`

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

`),l])}const p=e(s,[["render",c],["__file","TsFile-Split-Tool.html.vue"]]);export{p as default};
