import{_ as n,o as s,c as a,a as t,f as e}from"./app-5-wLpwIM.js";const o={},i=e(`<h1 id="iotdb-collector-user-s-manual" tabindex="-1"><a class="header-anchor" href="#iotdb-collector-user-s-manual" aria-hidden="true">#</a> IoTDB-Collector User&#39;s Manual</h1><h2 id="dependencies" tabindex="-1"><a class="header-anchor" href="#dependencies" aria-hidden="true">#</a> Dependencies</h2><ul><li>JDK &gt;= 11</li></ul><h2 id="deployments" tabindex="-1"><a class="header-anchor" href="#deployments" aria-hidden="true">#</a> Deployments</h2><ol><li>Download the IoTDB-Collector zip package and extract the zip package to get the IoTDB-Collector folder.</li><li>Modify the IoTDB configuration information in the db.properties file in the IoTDB-Collector/conf folder.</li></ol><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">dbIp</span> <span class="token punctuation">=</span> <span class="token value attr-value">127.0.0.1</span>
<span class="token key attr-name">dbPort</span> <span class="token punctuation">=</span> <span class="token value attr-value">6667</span>
<span class="token key attr-name">dbUser</span> <span class="token punctuation">=</span> <span class="token value attr-value">root</span>
<span class="token key attr-name">dbPasswd</span> <span class="token punctuation">=</span> <span class="token value attr-value">root</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>In the IoTDB-Collector folder use . /bin/start.sh to start IoTDB-Collector.</li></ol><h2 id="usage-example" tabindex="-1"><a class="header-anchor" href="#usage-example" aria-hidden="true">#</a> Usage Example</h2><h3 id="connect-to-opc-ua-services-and-collect-data" tabindex="-1"><a class="header-anchor" href="#connect-to-opc-ua-services-and-collect-data" aria-hidden="true">#</a> Connect to OPC UA services and collect data</h3><ol><li>Modify the opcua-points.json file under IoTDB-Collector/conf/opcua to configure the addresses of the points to be collected</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;opcua&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;point_refs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;DEC21TT104_PV&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span><span class="token string">&quot;ns=1;s=t|TT21104/PV.PV_Out#Value&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;data_type&quot;</span><span class="token operator">:</span><span class="token string">&quot;float&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;DEC21TT104_PV_UN&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span><span class="token string">&quot;ns=1;s=t|TT21104/PV.PV_Unit&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;data_type&quot;</span><span class="token operator">:</span><span class="token string">&quot;int&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;DEC21HV415_Mon&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;address&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ns=1;s=t|HV21415/V.Monitor&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;data_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;boolean&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Modify the opcua-tasks.json file under IoTDB-Collector/conf/opcua to configure the name and collection frequency of the IoTDB inbound database corresponding to the point location.</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span><span class="token string">&quot;opcua&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;tasks&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;group_id&quot;</span><span class="token operator">:</span><span class="token string">&quot;opcua1&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;interval_us&quot;</span><span class="token operator">:</span><span class="token number">1000000</span><span class="token punctuation">,</span>
      <span class="token property">&quot;points&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name_ref&quot;</span><span class="token operator">:</span><span class="token string">&quot;DEC21TT104_PV&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;db_name&quot;</span><span class="token operator">:</span><span class="token string">&quot;DEC21TT104_PV&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;db_data_type&quot;</span><span class="token operator">:</span><span class="token string">&quot;FLOAT&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name_ref&quot;</span><span class="token operator">:</span><span class="token string">&quot;DEC21TT104_PV_UN&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;db_name&quot;</span><span class="token operator">:</span><span class="token string">&quot;DEC21TT104_PV_UN&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;db_data_type&quot;</span><span class="token operator">:</span><span class="token string">&quot;INT32&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;name_ref&quot;</span><span class="token operator">:</span><span class="token string">&quot;DEC21HV415_Mon&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;db_name&quot;</span><span class="token operator">:</span><span class="token string">&quot;DEC21HV415_Mon&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;db_data_type&quot;</span><span class="token operator">:</span><span class="token string">&quot;BOOLEAN&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>Call the interface to start the acquisition program ( endpointUrl Configure the OPC UA connection address )</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl --request PUT &#39;http://127.0.0.1:8081/start/opcua&#39; \\
--header &#39;Authorization: Basic dG9tOjMyMTEz&#39; \\
--header &#39;Content-Type: application/json&#39; \\
--data &#39;{
	&quot;deviceId&quot;: &quot;opcua&quot;,
	&quot;deviceOwner&quot;: &quot;opcua&quot;,
	&quot;protocolName&quot;: &quot;opcua&quot;,
	&quot;deviceProperties&quot;: {
		&quot;endpointUrl&quot;: &quot;opc.tcp://192.168.0.1:4862&quot;,
		&quot;authWay&quot;: &quot;0&quot;,
		&quot;username&quot;: &quot;&quot;,
		&quot;password&quot;: &quot;&quot;
	}
}&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>To see if IoTDB has data written to it</li></ol><img style="width:100%;max-width:500px;max-height:400px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/Ecosystem-Integration/IoTDB-Collector/opcua_last_value.jpg"><ol start="5"><li>Stop OPC UA data collection</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl --request DELETE &#39;http://127.0.0.1:8081/stop/opcua&#39; \\
--header &#39;Authorization: Basic dG9tOjMyMTEz&#39; \\
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function p(l,c){return s(),a("div",null,[t(`

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

`),i])}const u=n(o,[["render",p],["__file","IoTDB-Collector.html.vue"]]);export{u as default};
