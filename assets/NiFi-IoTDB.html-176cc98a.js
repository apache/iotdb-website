import{_ as e,o as t,c as o,a as n,f as a}from"./app-065a82e3.js";const s={},i=a(`<h1 id="nifi-iotdb-bundle" tabindex="-1"><a class="header-anchor" href="#nifi-iotdb-bundle" aria-hidden="true">#</a> nifi-iotdb-bundle</h1><h2 id="apache-nifi-introduction" tabindex="-1"><a class="header-anchor" href="#apache-nifi-introduction" aria-hidden="true">#</a> Apache NiFi Introduction</h2><p>Apache NiFi is an easy to use, powerful, and reliable system to process and distribute data.</p><p>Apache NiFi supports powerful and scalable directed graphs of data routing, transformation, and system mediation logic.</p><p>Apache NiFi includes the following capabilities:</p><ul><li>Browser-based user interface <ul><li>Seamless experience for design, control, feedback, and monitoring</li></ul></li><li>Data provenance tracking <ul><li>Complete lineage of information from beginning to end</li></ul></li><li>Extensive configuration <ul><li>Loss-tolerant and guaranteed delivery</li><li>Low latency and high throughput</li><li>Dynamic prioritization</li><li>Runtime modification of flow configuration</li><li>Back pressure control</li></ul></li><li>Extensible design <ul><li>Component architecture for custom Processors and Services</li><li>Rapid development and iterative testing</li></ul></li><li>Secure communication <ul><li>HTTPS with configurable authentication strategies</li><li>Multi-tenant authorization and policy management</li><li>Standard protocols for encrypted communication including TLS and SSH</li></ul></li></ul><h2 id="putiotdb" tabindex="-1"><a class="header-anchor" href="#putiotdb" aria-hidden="true">#</a> PutIoTDB</h2><p>This is a processor that reads the content of the incoming FlowFile as individual records using the configured &#39;Record Reader&#39; and writes them to Apache IoTDB using native interface.</p><h3 id="properties-of-putiotdb" tabindex="-1"><a class="header-anchor" href="#properties-of-putiotdb" aria-hidden="true">#</a> Properties of PutIoTDB</h3><table><thead><tr><th>property</th><th>description</th><th>default value</th><th>necessary</th></tr></thead><tbody><tr><td>Host</td><td>The host of IoTDB.</td><td>null</td><td>true</td></tr><tr><td>Port</td><td>The port of IoTDB.</td><td>6667</td><td>true</td></tr><tr><td>Username</td><td>Username to access the IoTDB.</td><td>null</td><td>true</td></tr><tr><td>Password</td><td>Password to access the IoTDB.</td><td>null</td><td>true</td></tr><tr><td>Record Reader</td><td>Specifies the type of Record Reader controller service to use <br>for parsing the incoming data and determining the schema.</td><td>null</td><td>true</td></tr><tr><td>Schema</td><td>The schema that IoTDB needs doesn&#39;t support good by NiFi.<br>Therefore, you can define the schema here. <br>Besides, you can set encoding type and compression type by this method.<br>If you don&#39;t set this property, the inferred schema will be used.<br> It can be updated by expression language.</td><td>null</td><td>false</td></tr><tr><td>Aligned</td><td>Whether using aligned interface? It can be updated by expression language.</td><td>false</td><td>false</td></tr><tr><td>MaxRowNumber</td><td>Specifies the max row number of each tablet. It can be updated by expression language.</td><td>1024</td><td>false</td></tr></tbody></table><h3 id="inferred-schema-of-flowfile" tabindex="-1"><a class="header-anchor" href="#inferred-schema-of-flowfile" aria-hidden="true">#</a> Inferred Schema of Flowfile</h3><p>There are a couple of rules about flowfile:</p><ol><li>The flowfile can be read by <code>Record Reader</code>.</li><li>The schema of flowfile must contains a field <code>Time</code>, and it must be the first.</li><li>The data type of time must be <code>STRING</code> or <code>LONG</code>.</li><li>Fields excepted time must start with <code>root.</code>.</li><li>The supported data types are <code>INT</code>, <code>LONG</code>, <code>FLOAT</code>, <code>DOUBLE</code>, <code>BOOLEAN</code>, <code>TEXT</code>.</li></ol><h3 id="convert-schema-by-property" tabindex="-1"><a class="header-anchor" href="#convert-schema-by-property" aria-hidden="true">#</a> Convert Schema by property</h3><p>As mentioned above, converting schema by property which is more flexible and stronger than inferred schema.</p><p>The structure of property <code>Schema</code>:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;timeType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;LONG&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>
		<span class="token property">&quot;tsName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;root.sg.d1.s1&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;dataType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;INT32&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;encoding&quot;</span><span class="token operator">:</span> <span class="token string">&quot;RLE&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;compressionType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;GZIP&quot;</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;tsName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;root.sg.d1.s2&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;dataType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;INT64&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;encoding&quot;</span><span class="token operator">:</span> <span class="token string">&quot;RLE&quot;</span><span class="token punctuation">,</span>
		<span class="token property">&quot;compressionType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;GZIP&quot;</span>
	<span class="token punctuation">}</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Note</strong></p><ol><li>The first column must be <code>Time</code>. The rest must be arranged in the same order as in <code>field</code> of JSON.</li><li>The JSON of schema must contain <code>timeType</code> and <code>fields</code>.</li><li>There are only two options <code>LONG</code> and <code>STRING</code> for <code>timeType</code>.</li><li>The columns <code>tsName</code> and <code>dataType</code> must be set.</li><li>The tsName must start with <code>root.</code>.</li><li>The supported <code>dataTypes</code> are <code>INT32</code>, <code>INT64</code>, <code>FLOAT</code>, <code>DOUBLE</code>, <code>BOOLEAN</code>, <code>TEXT</code>.</li><li>The supported <code>encoding</code> are <code>PLAIN</code>, <code>DICTIONARY</code>, <code>RLE</code>, <code>DIFF</code>, <code>TS_2DIFF</code>, <code>BITMAP</code>, <code>GORILLA_V1</code>, <code>REGULAR</code>, <code>GORILLA</code>.</li><li>The supported <code>compressionType</code> are <code>UNCOMPRESSED</code>, <code>SNAPPY</code>, <code>GZIP</code>, <code>LZO</code>, <code>SDT</code>, <code>PAA</code>, <code>PLA</code>, <code>LZ4</code>.</li></ol><h2 id="relationships" tabindex="-1"><a class="header-anchor" href="#relationships" aria-hidden="true">#</a> Relationships</h2><table><thead><tr><th>relationship</th><th>description</th></tr></thead><tbody><tr><td>success</td><td>Data can be written correctly or flow file is empty.</td></tr><tr><td>failure</td><td>The shema or flow file is abnormal.</td></tr></tbody></table>`,21);function d(r,c){return t(),o("div",null,[n(`

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

`),i])}const p=e(s,[["render",d],["__file","NiFi-IoTDB.html.vue"]]);export{p as default};
