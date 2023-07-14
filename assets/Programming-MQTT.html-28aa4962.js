import{_ as t,r as e,o,c as p,a as c,d as n,e as s,b as i,f as l}from"./app-6f9cebab.js";const u={},r=n("h2",{id:"mqtt-protocol",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#mqtt-protocol","aria-hidden":"true"},"#"),s(" MQTT Protocol")],-1),d={href:"http://mqtt.org/",target:"_blank",rel:"noopener noreferrer"},k=n("br",null,null,-1),m=n("br",null,null,-1),v=l(`<p>IoTDB supports the MQTT v3.1(an OASIS Standard) protocol.<br> IoTDB server includes a built-in MQTT service that allows remote devices send messages into IoTDB server directly.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/78357432-0c71cf80-75e4-11ea-98aa-c43a54d469ce.png"><h3 id="built-in-mqtt-service" tabindex="-1"><a class="header-anchor" href="#built-in-mqtt-service" aria-hidden="true">#</a> Built-in MQTT Service</h3><p>The Built-in MQTT Service provide the ability of direct connection to IoTDB through MQTT. It listen the publish messages from MQTT clients<br> and then write the data into storage immediately.<br> The MQTT topic corresponds to IoTDB timeseries.<br> The messages payload can be format to events by <code>PayloadFormatter</code> which loaded by java SPI, and the default implementation is <code>JSONPayloadFormatter</code>.<br> The default <code>json</code> formatter support two json format and its json array. The following is an MQTT message payload example:</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code> <span class="token punctuation">{</span>
      <span class="token property">&quot;device&quot;</span><span class="token operator">:</span><span class="token string">&quot;root.sg.d1&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;timestamp&quot;</span><span class="token operator">:</span><span class="token number">1586076045524</span><span class="token punctuation">,</span>
      <span class="token property">&quot;measurements&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;s1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;s2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;values&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">0.530635</span><span class="token punctuation">,</span><span class="token number">0.530635</span><span class="token punctuation">]</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>or</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code> <span class="token punctuation">{</span>
      <span class="token property">&quot;device&quot;</span><span class="token operator">:</span><span class="token string">&quot;root.sg.d1&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;timestamps&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token number">1586076045524</span><span class="token punctuation">,</span><span class="token number">1586076065526</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;measurements&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;s1&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;s2&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;values&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">0.530635</span><span class="token punctuation">,</span><span class="token number">0.530635</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">0.530655</span><span class="token punctuation">,</span><span class="token number">0.530695</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
 <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>or json array of the above two.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/github/78357469-1bf11880-75e4-11ea-978f-a53996667a0d.png"><h3 id="mqtt-configurations" tabindex="-1"><a class="header-anchor" href="#mqtt-configurations" aria-hidden="true">#</a> MQTT Configurations</h3><p>The IoTDB MQTT service load configurations from <code>\${IOTDB_HOME}/\${IOTDB_CONF}/iotdb-datanode.properties</code> by default.</p><p>Configurations are as follows:</p><table><thead><tr><th>NAME</th><th style="text-align:center;">DESCRIPTION</th><th style="text-align:center;">DEFAULT</th></tr></thead><tbody><tr><td>enable_mqtt_service</td><td style="text-align:center;">whether to enable the mqtt service</td><td style="text-align:center;">false</td></tr><tr><td>mqtt_host</td><td style="text-align:center;">the mqtt service binding host</td><td style="text-align:center;">127.0.0.1</td></tr><tr><td>mqtt_port</td><td style="text-align:center;">the mqtt service binding port</td><td style="text-align:center;">1883</td></tr><tr><td>mqtt_handler_pool_size</td><td style="text-align:center;">the handler pool size for handing the mqtt messages</td><td style="text-align:center;">1</td></tr><tr><td>mqtt_payload_formatter</td><td style="text-align:center;">the mqtt message payload formatter</td><td style="text-align:center;">json</td></tr><tr><td>mqtt_max_message_size</td><td style="text-align:center;">the max mqtt message size in byte</td><td style="text-align:center;">1048576</td></tr></tbody></table><h3 id="coding-examples" tabindex="-1"><a class="header-anchor" href="#coding-examples" aria-hidden="true">#</a> Coding Examples</h3><p>The following is an example which a mqtt client send messages to IoTDB server.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">MQTT</span> mqtt <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MQTT</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mqtt<span class="token punctuation">.</span><span class="token function">setHost</span><span class="token punctuation">(</span><span class="token string">&quot;127.0.0.1&quot;</span><span class="token punctuation">,</span> <span class="token number">1883</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mqtt<span class="token punctuation">.</span><span class="token function">setUserName</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
mqtt<span class="token punctuation">.</span><span class="token function">setPassword</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">BlockingConnection</span> connection <span class="token operator">=</span> mqtt<span class="token punctuation">.</span><span class="token function">blockingConnection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
connection<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">Random</span> random <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">String</span> payload <span class="token operator">=</span> <span class="token class-name">String</span><span class="token punctuation">.</span><span class="token function">format</span><span class="token punctuation">(</span><span class="token string">&quot;{\\n&quot;</span> <span class="token operator">+</span>
            <span class="token string">&quot;\\&quot;device\\&quot;:\\&quot;root.sg.d1\\&quot;,\\n&quot;</span> <span class="token operator">+</span>
            <span class="token string">&quot;\\&quot;timestamp\\&quot;:%d,\\n&quot;</span> <span class="token operator">+</span>
            <span class="token string">&quot;\\&quot;measurements\\&quot;:[\\&quot;s1\\&quot;],\\n&quot;</span> <span class="token operator">+</span>
            <span class="token string">&quot;\\&quot;values\\&quot;:[%f]\\n&quot;</span> <span class="token operator">+</span>
            <span class="token string">&quot;}&quot;</span><span class="token punctuation">,</span> <span class="token class-name">System</span><span class="token punctuation">.</span><span class="token function">currentTimeMillis</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> random<span class="token punctuation">.</span><span class="token function">nextDouble</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    connection<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">&quot;root.sg.d1.s1&quot;</span><span class="token punctuation">,</span> payload<span class="token punctuation">.</span><span class="token function">getBytes</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">QoS</span><span class="token punctuation">.</span><span class="token constant">AT_LEAST_ONCE</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

connection<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="customize-your-mqtt-message-format" tabindex="-1"><a class="header-anchor" href="#customize-your-mqtt-message-format" aria-hidden="true">#</a> Customize your MQTT Message Format</h3><p>If you do not like the above Json format, you can customize your MQTT Message format by just writing several lines<br> of codes. An example can be found in <code>example/mqtt-customize</code> project.</p><p>Steps:</p><ul><li>Create a java project, and add dependency:</li></ul><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code>        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.iotdb<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>iotdb-server<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${project.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Define your implementation which implements <code>org.apache.iotdb.db.protocol.mqtt.PayloadFormatter</code><br> e.g.,</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>iotdb<span class="token punctuation">.</span>mqtt<span class="token punctuation">.</span>server</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>buffer<span class="token punctuation">.</span></span><span class="token class-name">ByteBuf</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>iotdb<span class="token punctuation">.</span>db<span class="token punctuation">.</span>protocol<span class="token punctuation">.</span>mqtt<span class="token punctuation">.</span></span><span class="token class-name">Message</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>iotdb<span class="token punctuation">.</span>db<span class="token punctuation">.</span>protocol<span class="token punctuation">.</span>mqtt<span class="token punctuation">.</span></span><span class="token class-name">PayloadFormatter</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>nio<span class="token punctuation">.</span>charset<span class="token punctuation">.</span></span><span class="token class-name">StandardCharsets</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Arrays</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CustomizedJsonPayloadFormatter</span> <span class="token keyword">implements</span> <span class="token class-name">PayloadFormatter</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Message</span><span class="token punctuation">&gt;</span></span> <span class="token function">format</span><span class="token punctuation">(</span><span class="token class-name">ByteBuf</span> payload<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// Suppose the payload is a json format</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>payload <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">String</span> json <span class="token operator">=</span> payload<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token class-name">StandardCharsets</span><span class="token punctuation">.</span><span class="token constant">UTF_8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// parse data from the json and generate Messages and put them into List&lt;Meesage&gt; ret</span>
        <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Message</span><span class="token punctuation">&gt;</span></span> ret <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// this is just an example, so we just generate some Messages directly</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">long</span> ts <span class="token operator">=</span> i<span class="token punctuation">;</span>
            <span class="token class-name">Message</span> message <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Message</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            message<span class="token punctuation">.</span><span class="token function">setDevice</span><span class="token punctuation">(</span><span class="token string">&quot;d&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            message<span class="token punctuation">.</span><span class="token function">setTimestamp</span><span class="token punctuation">(</span>ts<span class="token punctuation">)</span><span class="token punctuation">;</span>
            message<span class="token punctuation">.</span><span class="token function">setMeasurements</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;s1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;s2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            message<span class="token punctuation">.</span><span class="token function">setValues</span><span class="token punctuation">(</span><span class="token class-name">Arrays</span><span class="token punctuation">.</span><span class="token function">asList</span><span class="token punctuation">(</span><span class="token string">&quot;4.0&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">,</span> <span class="token string">&quot;5.0&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            ret<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> ret<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// set the value of mqtt_payload_formatter in iotdb-datanode.properties as the following string:</span>
        <span class="token keyword">return</span> <span class="token string">&quot;CustomizedJson&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>modify the file in <code>src/main/resources/META-INF/services/org.apache.iotdb.db.protocol.mqtt.PayloadFormatter</code>:<br> clean the file and put your implementation class name into the file.<br> In this example, the content is: <code>org.apache.iotdb.mqtt.server.CustomizedJsonPayloadFormatter</code></li><li>compile your implementation as a jar file: <code>mvn package -DskipTests</code></li></ul><p>Then, in your server:</p><ul><li>Create \${IOTDB_HOME}/ext/mqtt/ folder, and put the jar into this folder.</li><li>Update configuration to enable MQTT service. (<code>enable_mqtt_service=true</code> in <code>conf/iotdb-datanode.properties</code>)</li><li>Set the value of <code>mqtt_payload_formatter</code> in <code>conf/iotdb-datanode.properties</code> as the value of getName() in your implementation<br> , in this example, the value is <code>CustomizedJson</code></li><li>Launch the IoTDB server.</li><li>Now IoTDB will use your implementation to parse the MQTT message.</li></ul><p>More: the message format can be anything you want. For example, if it is a binary format,<br> just use <code>payload.forEachByte()</code> or <code>payload.array</code> to get bytes content.</p>`,27);function g(b,h){const a=e("ExternalLinkIcon");return o(),p("div",null,[c(`

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

`),r,n("p",null,[n("a",d,[s("MQTT"),i(a)]),s(' is a machine-to-machine (M2M)/"Internet of Things" connectivity protocol.'),k,s(" It was designed as an extremely lightweight publish/subscribe messaging transport."),m,s(" It is useful for connections with remote locations where a small code footprint is required and/or network bandwidth is at a premium.")]),v])}const f=t(u,[["render",g],["__file","Programming-MQTT.html.vue"]]);export{f as default};
