import{_ as t,o as e,c as n,a as i,f as d}from"./app-77dc4b6e.js";const a={},o=d(`<h2 id="字符集" tabindex="-1"><a class="header-anchor" href="#字符集" aria-hidden="true">#</a> 字符集</h2><p>IoTDB 包含多种字符集支持，默认使用 UTF-8 编码，并可以通过配置参数进行切换。</p><p>字符集相关的配置参数位于位于 <code>sbin</code> 目录下。</p><ul><li><code>start-confignode.sh</code>：confignode 的配置文件，可以配置 ConfigNode 的字符集编码方式。</li><li><code>start-datanode.sh</code>：datanode 的配置文件，可以配置 DataNode 的字符集编码方式。</li></ul><h3 id="配置项" tabindex="-1"><a class="header-anchor" href="#配置项" aria-hidden="true">#</a> 配置项</h3><ul><li>-Dsun.jnu.encoding</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">-Dsun.jnu.encoding</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">IoTDB 所在操作系统编码方式</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">UTF-8</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><ul><li>-Dfile.encoding</li></ul><table><thead><tr><th style="text-align:center;">名字</th><th style="text-align:left;">-Dfile.encoding</th></tr></thead><tbody><tr><td style="text-align:center;">描述</td><td style="text-align:left;">IoTDB 启动时的文件编码方式</td></tr><tr><td style="text-align:center;">类型</td><td style="text-align:left;">String</td></tr><tr><td style="text-align:center;">默认值</td><td style="text-align:left;">UTF-8</td></tr><tr><td style="text-align:center;">改后生效方式</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table><h3 id="配置项修改方式" tabindex="-1"><a class="header-anchor" href="#配置项修改方式" aria-hidden="true">#</a> 配置项修改方式</h3><p>在 <code>start-confignode.sh</code> 和 <code>start-datanode.sh</code> 文件中，修改 <code>iotdb_parms</code> 中的上述两个配置项</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  iotdb_parms=&quot;-Dlogback.configurationFile=\${IOTDB_LOG_CONFIG}&quot;
	iotdb_parms=&quot;$iotdb_parms -DIOTDB_HOME=\${IOTDB_HOME}&quot;
	iotdb_parms=&quot;$iotdb_parms -DIOTDB_DATA_HOME=\${IOTDB_DATA_HOME}&quot;
	iotdb_parms=&quot;$iotdb_parms -DTSFILE_HOME=\${IOTDB_HOME}&quot;
	iotdb_parms=&quot;$iotdb_parms -DIOTDB_CONF=\${IOTDB_CONF}&quot;
	iotdb_parms=&quot;$iotdb_parms -DTSFILE_CONF=\${IOTDB_CONF}&quot;
	iotdb_parms=&quot;$iotdb_parms -Dname=iotdb\\.IoTDB&quot;
	iotdb_parms=&quot;$iotdb_parms -DIOTDB_LOG_DIR=\${IOTDB_LOG_DIR}&quot;
	iotdb_parms=&quot;$iotdb_parms -Dsun.jnu.encoding=UTF-8&quot;
	iotdb_parms=&quot;$iotdb_parms -Dfile.encoding=UTF-8&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function r(s,l){return e(),n("div",null,[i(`

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

`),o])}const u=t(a,[["render",r],["__file","Charset.html.vue"]]);export{u as default};
