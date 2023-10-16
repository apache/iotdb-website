import{_ as e,o as t,c as i,a as d,f as n}from"./app-2dc5011a.js";const a={},r=n(`<h1 id="watermark-tool" tabindex="-1"><a class="header-anchor" href="#watermark-tool" aria-hidden="true">#</a> Watermark Tool</h1><p>This tool has two functions: 1) watermark embedding of the IoTDB query result and 2) watermark detection of the suspected data.</p><h2 id="watermark-embedding" tabindex="-1"><a class="header-anchor" href="#watermark-embedding" aria-hidden="true">#</a> Watermark Embedding</h2><h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h3><p>Watermark is disabled by default in IoTDB. To enable watermark embedding, the first thing is to modify the following fields in the configuration file <code>iotdb-datanode.properties</code>:</p><table><thead><tr><th>Name</th><th>Example</th><th>Explanation</th></tr></thead><tbody><tr><td>watermark_module_opened</td><td>false</td><td><code>true</code> to enable watermark embedding of the IoTDB server; <code>false</code> to disable</td></tr><tr><td>watermark_secret_key</td><td>IoTDB*2019@Beijing</td><td>self-defined secret key</td></tr><tr><td>watermark_bit_string</td><td>100101110100</td><td>0-1 bit string to be embedded</td></tr><tr><td>watermark_method</td><td>GroupBasedLSBMethod(embed_row_cycle=2,embed_lsb_num=5)</td><td>specifies the watermark algorithm and its paramters</td></tr></tbody></table><p>Notes:</p><ul><li><code>watermark_module_opened</code>: Set it to be true if you want to enable watermark embedding</li><li><code>watermark_secret_key</code>: Character &#39;&amp;&#39; is not allowed. There is no constraint on the length of the secret key. Generally, the longer the key is, the higher the bar to intruders.</li><li><code>watermark_bit_string</code>: There is no constraint on the length of the bit string (except that it should not be empty). But note that it is difficult to reach the required significance level at the watermark detection phase if the bit string is way too short.</li><li><code>watermark_method</code>: Now only GroupBasedLSBMethod is supported, so actually you can only tune the two parameters of this method, which are <code>embed_row_cycle</code> and <code>embed_lsb_num</code>. <ul><li>Both of them should be positive integers.</li><li><code>embed_row_cycle</code> controls the ratio of rows watermarked. The smaller the <code>embed_row_cycle</code>, the larger the ratio of rows watermarked. When <code>embed_row_cycle</code> equals 1, every row is watermarked.</li><li>GroupBasedLSBMethod uses LSB embedding. <code>embed_lsb_num</code> controls the number of least significant bits available for watermark embedding. The biggger the <code>embed_lsb_num</code>, the larger the varying range of a data point.</li></ul></li><li><code>watermark_secret_key</code>, <code>watermark_bit_string</code> and <code>watermark_method</code> should be kept secret from possible attackers. That is, it is your responsiblity to take care of <code>iotdb-datanode.properties</code>.</li></ul><h3 id="usage-example" tabindex="-1"><a class="header-anchor" href="#usage-example" aria-hidden="true">#</a> Usage Example</h3><ul><li>step 1. Create a new user Alice, grant read privilege and query</li></ul><p>A newly created user doesn&#39;t use watermark by default. So the query result is the original data.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.\\start-cli.bat -u root -pw root
create user Alice 1234
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>step 2. grant watermark_embedding to Alice</li></ul><p>Usage: <code>grant watermark_embedding to Alice</code></p><p>Note that you can use <code>grant watermark_embedding to user1,user2,...</code> to grant watermark_embedding to multiple users.</p><p>Only root can run this command. After root grants watermark_embedding to Alice, all query results of Alice are watermarked.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.\\start-cli.bat -u root -pw root
grant watermark_embedding to Alice
exit

.\\start-cli.bat -u Alice -pw &#39;1234&#39;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>step 3. revoke watermark_embedding from Alice</li></ul><p>Usage: <code>revoke watermark_embedding from Alice</code></p><p>Note that you can use <code>revoke watermark_embedding from user1,user2,...</code> to revoke watermark_embedding from multiple users.</p><p>Only root can run this command. After root revokes watermark_embedding from Alice, all query results of Alice are original again.</p><h2 id="watermark-detection" tabindex="-1"><a class="header-anchor" href="#watermark-detection" aria-hidden="true">#</a> Watermark Detection</h2><p><code>detect-watermark.sh</code> and <code>detect-watermark.bat</code> are provided for different platforms.</p><p>Usage: ./detect-watermark.sh [filePath] [secretKey] [watermarkBitString] [embed_row_cycle] [embed_lsb_num] [alpha] [columnIndex] [dataType: int/float/double]</p><p>Example: ./detect-watermark.sh /home/data/dump1.csv IoTDB*2019@Beijing 100101110100 2 5 0.05 1 float</p><table><thead><tr><th>Args</th><th>Example</th><th>Explanation</th></tr></thead><tbody><tr><td>filePath</td><td>/home/data/dump1.csv</td><td>suspected data file path</td></tr><tr><td>secretKey</td><td>IoTDB*2019@Beijing</td><td>see watermark embedding section</td></tr><tr><td>watermarkBitString</td><td>100101110100</td><td>see watermark embedding section</td></tr><tr><td>embed_row_cycle</td><td>2</td><td>see watermark embedding section</td></tr><tr><td>embed_lsb_num</td><td>5</td><td>see watermark embedding section</td></tr><tr><td>alpha</td><td>0.05</td><td>significance level</td></tr><tr><td>columnIndex</td><td>1</td><td>specifies one column of the data to detect</td></tr><tr><td>dataType</td><td>float</td><td>specifies the data type of the detected column; int/float/double</td></tr></tbody></table><p>Notes:</p><ul><li><p><code>filePath</code>: You can use export-csv tool to generate such data file. The first row is header and the first column is time. Data in the file looks like this:</p><table><thead><tr><th>Time</th><th>root.vehicle.d0.s1</th><th>root.vehicle.d0.s1</th></tr></thead><tbody><tr><td>1970-01-01T08:00:00.001+08:00</td><td>100</td><td>null</td></tr><tr><td>...</td><td>...</td><td>...</td></tr></tbody></table></li><li><p><code>watermark_secret_key</code>, <code>watermark_bit_string</code>, <code>embed_row_cycle</code> and <code>embed_lsb_num</code> should be consistent with those used in the embedding phase.</p></li><li><p><code>alpha</code>: It should be in the range of [0,1]. The watermark detection is based on the significance test. The smaller the <code>alpha</code> is, the lower the probability that the data without the watermark is detected to be watermark embedded, and thus the higher the credibility of the result of detecting the existence of the watermark in data.</p></li><li><p><code>columnIndex</code>: It should be a positive integer.</p></li></ul>`,28);function s(l,o){return t(),i("div",null,[d(`
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
`),r])}const m=e(a,[["render",s],["__file","Watermark-Tool.html.vue"]]);export{m as default};
