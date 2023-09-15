import{_ as e,o as d,c as i,a as n,f as t}from"./app-4c0da614.js";const l={},r=t(`<h2 id="水印工具" tabindex="-1"><a class="header-anchor" href="#水印工具" aria-hidden="true">#</a> 水印工具</h2><p>这个工具提供了 1）IoTDB 查询结果水印嵌入功能，2）可疑数据的水印检测功能。</p><h3 id="水印嵌入" tabindex="-1"><a class="header-anchor" href="#水印嵌入" aria-hidden="true">#</a> 水印嵌入</h3><h4 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h4><p>IoTDB 默认关闭水印嵌入功能。为了使用这个功能，第一步要做的事情是修改配置文件<code>iotdb-engine.properties</code>中的以下各项：</p><table><thead><tr><th>名称</th><th>示例</th><th>解释</th></tr></thead><tbody><tr><td>watermark_module_opened</td><td>false</td><td><code>true</code>打开水印嵌入功能；<code>false</code>关闭</td></tr><tr><td>watermark_secret_key</td><td>IoTDB*2019@Beijing</td><td>自定义密钥</td></tr><tr><td>watermark_bit_string</td><td>100101110100</td><td>要被嵌入的 0-1 比特串</td></tr><tr><td>watermark_method</td><td>GroupBasedLSBMethod(embed_row_cycle=2,embed_lsb_num=5)</td><td>指定水印算法及其参数</td></tr></tbody></table><p>注意：</p><ul><li><code>watermark_module_opened</code>: 如果您想使用水印嵌入功能，请将其设置成<code>true</code>。</li><li><code>watermark_secret_key</code>: 不能使用字符 &#39;&amp;&#39;。密钥长度没有限制，一般来说密钥越长，攻击难度就越高。</li><li><code>watermark_bit_string</code>: 比特串长度没有限制（除了不能为空字符串），但是当长度过短时，水印检测可能达不到要求的显著性水平。</li><li><code>watermark_method</code>: 现在仅支持一种算法 GroupBasedLSBMethod，因此您实际上可以修改的只有这个算法的两个参数<code>embed_row_cycle</code>和<code>embed_lsb_num</code>的值： <ul><li>均是正整数</li><li><code>embed_row_cycle</code>控制了被嵌入水印的行占总行数的比例。<code>embed_row_cycle</code>越小，被嵌入水印的行的比例就越大。当<code>embed_row_cycle</code>等于 1 的时候，所有的行都将嵌入水印。</li><li>GroupBasedLSBMethod 使用 LSB 嵌入。<code>embed_lsb_num</code>控制了允许嵌入水印的最低有效位的数量。<code>embed_lsb_num</code>越大，数值的可变化范围就越大。</li></ul></li><li><code>watermark_secret_key</code>, <code>watermark_bit_string</code>和<code>watermark_method</code>都不应该被攻击者获得。您需要自己负责配置文件<code>iotdb-engine.properties</code>的安全管理。</li></ul><h4 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h4><ul><li>第一步：创建一个新用户 Alice，授予读权限，然后查询</li></ul><p>一个新创建的用户默认不使用水印。因此查询结果就是数据库中的原始数据。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.\\start-cli.bat -u root -pw root
create user Alice &#39;1234&#39;
grant user Alice privileges READ_TIMESERIES on root.vehicle
exit

.\\start-cli.bat -u Alice -pw 1234
select * from root
+-----------------------------------+------------------+
|                               Time|root.vehicle.d0.s0|
+-----------------------------------+------------------+
|      1970-01-01T08:00:00.001+08:00|              21.5|
|      1970-01-01T08:00:00.002+08:00|              22.5|
|      1970-01-01T08:00:00.003+08:00|              23.5|
|      1970-01-01T08:00:00.004+08:00|              24.5|
|      1970-01-01T08:00:00.005+08:00|              25.5|
|      1970-01-01T08:00:00.006+08:00|              26.5|
|      1970-01-01T08:00:00.007+08:00|              27.5|
|      1970-01-01T08:00:00.008+08:00|              28.5|
|      1970-01-01T08:00:00.009+08:00|              29.5|
|      1970-01-01T08:00:00.010+08:00|              30.5|
|      1970-01-01T08:00:00.011+08:00|              31.5|
|      1970-01-01T08:00:00.012+08:00|              32.5|
|      1970-01-01T08:00:00.013+08:00|              33.5|
|      1970-01-01T08:00:00.014+08:00|              34.5|
|      1970-01-01T08:00:00.015+08:00|              35.5|
|      1970-01-01T08:00:00.016+08:00|              36.5|
|      1970-01-01T08:00:00.017+08:00|              37.5|
|      1970-01-01T08:00:00.018+08:00|              38.5|
|      1970-01-01T08:00:00.019+08:00|              39.5|
|      1970-01-01T08:00:00.020+08:00|              40.5|
|      1970-01-01T08:00:00.021+08:00|              41.5|
|      1970-01-01T08:00:00.022+08:00|              42.5|
|      1970-01-01T08:00:00.023+08:00|              43.5|
|      1970-01-01T08:00:00.024+08:00|              44.5|
|      1970-01-01T08:00:00.025+08:00|              45.5|
|      1970-01-01T08:00:00.026+08:00|              46.5|
|      1970-01-01T08:00:00.027+08:00|              47.5|
|      1970-01-01T08:00:00.028+08:00|              48.5|
|      1970-01-01T08:00:00.029+08:00|              49.5|
|      1970-01-01T08:00:00.030+08:00|              50.5|
|      1970-01-01T08:00:00.031+08:00|              51.5|
|      1970-01-01T08:00:00.032+08:00|              52.5|
|      1970-01-01T08:00:00.033+08:00|              53.5|
+-----------------------------------+------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>第二步：给 Alice 施加水印嵌入</li></ul><p>sql 用法：<code>grant watermark_embedding to Alice</code></p><p>您可以使用<code>grant watermark_embedding to user1,user2,...</code>来同时给多个用户施加水印嵌入。</p><p>只有 root 用户有权限运行该指令。在 root 给 Alice 施加水印嵌入之后，Alice 的所有查询结果都将被嵌入水印。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.\\start-cli.bat -u root -pw root
grant watermark_embedding to Alice
exit

.\\start-cli.bat -u Alice -pw 1234
select * from root

+-----------------------------------+------------------+
|                               Time|root.vehicle.d0.s0|
+-----------------------------------+------------------+
|      1970-01-01T08:00:00.001+08:00|              21.5|
|      1970-01-01T08:00:00.002+08:00|              22.5|
|      1970-01-01T08:00:00.003+08:00|         23.500008|
|      1970-01-01T08:00:00.004+08:00|         24.500015|
|      1970-01-01T08:00:00.005+08:00|              25.5|
|      1970-01-01T08:00:00.006+08:00|         26.500015|
|      1970-01-01T08:00:00.007+08:00|              27.5|
|      1970-01-01T08:00:00.008+08:00|         28.500004|
|      1970-01-01T08:00:00.009+08:00|              29.5|
|      1970-01-01T08:00:00.010+08:00|              30.5|
|      1970-01-01T08:00:00.011+08:00|              31.5|
|      1970-01-01T08:00:00.012+08:00|              32.5|
|      1970-01-01T08:00:00.013+08:00|              33.5|
|      1970-01-01T08:00:00.014+08:00|              34.5|
|      1970-01-01T08:00:00.015+08:00|         35.500004|
|      1970-01-01T08:00:00.016+08:00|              36.5|
|      1970-01-01T08:00:00.017+08:00|              37.5|
|      1970-01-01T08:00:00.018+08:00|              38.5|
|      1970-01-01T08:00:00.019+08:00|              39.5|
|      1970-01-01T08:00:00.020+08:00|              40.5|
|      1970-01-01T08:00:00.021+08:00|              41.5|
|      1970-01-01T08:00:00.022+08:00|         42.500015|
|      1970-01-01T08:00:00.023+08:00|              43.5|
|      1970-01-01T08:00:00.024+08:00|         44.500008|
|      1970-01-01T08:00:00.025+08:00|          45.50003|
|      1970-01-01T08:00:00.026+08:00|         46.500008|
|      1970-01-01T08:00:00.027+08:00|         47.500008|
|      1970-01-01T08:00:00.028+08:00|              48.5|
|      1970-01-01T08:00:00.029+08:00|              49.5|
|      1970-01-01T08:00:00.030+08:00|              50.5|
|      1970-01-01T08:00:00.031+08:00|         51.500008|
|      1970-01-01T08:00:00.032+08:00|              52.5|
|      1970-01-01T08:00:00.033+08:00|              53.5|
+-----------------------------------+------------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>第三步：撤销 Alice 的水印嵌入</li></ul><p>sql 用法：<code>revoke watermark_embedding from Alice</code></p><p>您可以使用<code>revoke watermark_embedding from user1,user2,...</code>来同时撤销多个用户的水印嵌入。</p><p>只有 root 用户有权限运行该指令。在 root 撤销 Alice 的水印嵌入之后，Alice 的所有查询结果就又是数据库中的原始数据了。</p><h3 id="水印检测" tabindex="-1"><a class="header-anchor" href="#水印检测" aria-hidden="true">#</a> 水印检测</h3><p><code>detect-watermark.sh</code> 和 <code>detect-watermark.bat</code> 是给不同平台提供的功能相同的工具脚本。</p><p>用法： ./detect-watermark.sh [filePath] [secretKey] [watermarkBitString] [embed_row_cycle] [embed_lsb_num] [alpha] [columnIndex] [dataType: int/float/double]</p><p>示例： ./detect-watermark.sh /home/data/dump1.csv IoTDB*2019@Beijing 100101110100 2 5 0.05 1 float</p><table><thead><tr><th>Args</th><th>示例</th><th>解释</th></tr></thead><tbody><tr><td>filePath</td><td>/home/data/dump1.csv</td><td>可疑数据的文件路径</td></tr><tr><td>secretKey</td><td>IoTDB*2019@Beijing</td><td>参见水印嵌入小节</td></tr><tr><td>watermarkBitString</td><td>100101110100</td><td>参见水印嵌入小节</td></tr><tr><td>embed_row_cycle</td><td>2</td><td>参见水印嵌入小节</td></tr><tr><td>embed_lsb_num</td><td>5</td><td>参见水印嵌入小节</td></tr><tr><td>alpha</td><td>0.05</td><td>显著性水平</td></tr><tr><td>columnIndex</td><td>1</td><td>指定可疑数据的某一列进行检测</td></tr><tr><td>dataType</td><td>float</td><td>指定检测列的数据类型；int/float/double 任选其一</td></tr></tbody></table><p>注意：</p><ul><li><code>filePath</code>: 您可以使用 export-csv 工具来生成这样的数据文件。第一行是表头， 第一列是时间列。文件中的数据示例如下：</li></ul><table><thead><tr><th>Time</th><th>root.vehicle.d0.s1</th><th>root.vehicle.d0.s1</th></tr></thead><tbody><tr><td>1970-01-01T08:00:00.001+08:00</td><td>100</td><td>null</td></tr><tr><td>...</td><td>...</td><td>...</td></tr></tbody></table><ul><li><p><code>watermark_secret_key</code>, <code>watermark_bit_string</code>, <code>embed_row_cycle</code>和<code>embed_lsb_num</code>应该和水印嵌入过程使用的值保持一致。</p></li><li><p><code>alpha</code>: 取值范围 [0,1]。水印检测基于显著性检验，<code>alpha</code>越小，没有嵌入水印的数据被检测成嵌入水印的可能性越低，从而检测出嵌入水印的结果的可信度越高。</p></li><li><p><code>columnIndex</code>: 正整数</p></li></ul>`,30);function s(a,c){return d(),i("div",null,[n(`
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

`),r])}const v=e(l,[["render",s],["__file","Watermark-Tool.html.vue"]]);export{v as default};
