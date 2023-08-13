import{_ as n,o as s,c as a,a as t,f as e}from"./app-6410b1bc.js";const o={},p=e(`<h1 id="iotdb-collector-用户手册" tabindex="-1"><a class="header-anchor" href="#iotdb-collector-用户手册" aria-hidden="true">#</a> IoTDB-Collector 用户手册</h1><h2 id="依赖" tabindex="-1"><a class="header-anchor" href="#依赖" aria-hidden="true">#</a> 依赖</h2><ul><li>JDK &gt;= 11</li></ul><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署" aria-hidden="true">#</a> 部署</h2><ol><li>下载 IoTDB-Collector 的 zip 包,并解压 zip 包得到 IoTDB-Collector 文件夹</li><li>修改 IoTDB-Collector/conf 文件夹下的 db.properties 文件中的 IoTDB 的配置信息</li></ol><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token key attr-name">dbIp</span> <span class="token punctuation">=</span> <span class="token value attr-value">127.0.0.1</span>
<span class="token key attr-name">dbPort</span> <span class="token punctuation">=</span> <span class="token value attr-value">6667</span>
<span class="token key attr-name">dbUser</span> <span class="token punctuation">=</span> <span class="token value attr-value">root</span>
<span class="token key attr-name">dbPasswd</span> <span class="token punctuation">=</span> <span class="token value attr-value">root</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>在 IoTDB-Collector 文件夹下使用 ./bin/start.sh 即可启动 IoTDB-Collector</li></ol><h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例" aria-hidden="true">#</a> 使用示例</h2><h3 id="连接-opc-ua-服务并采集数据" tabindex="-1"><a class="header-anchor" href="#连接-opc-ua-服务并采集数据" aria-hidden="true">#</a> 连接 OPC UA 服务并采集数据</h3><ol><li>修改 IoTDB-Collector/conf/opcua 下的 opcua-points.json 文件，配置要采集的点位地址</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>修改 IoTDB-Collector/conf/opcua 下的 opcua-tasks.json 文件，配置点位对应IoTDB入库的名称及采集频率</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>调用接口，启动采集程序( endpointUrl 配置 OPC UA 连接地址)</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl --request PUT &#39;http://127.0.0.1:8081/start/opcua&#39; \\
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4.查看 IoTDB 是否有数据写入</p><img style="width:100%;max-width:500px;max-height:400px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/Ecosystem-Integration/IoTDB-Collector/opcua_last_value.jpg"><ol start="5"><li>停止 OPC UA 数据采集</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl --request DELETE &#39;http://127.0.0.1:8081/stop/opcua&#39; \\
--header &#39;Authorization: Basic dG9tOjMyMTEz&#39; \\
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,19);function i(l,u){return s(),a("div",null,[t(`

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

`),p])}const r=n(o,[["render",i],["__file","IoTDB-Collector.html.vue"]]);export{r as default};
