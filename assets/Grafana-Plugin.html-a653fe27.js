import{_ as o,r as s,o as r,c as l,a as d,d as e,e as a,b as t,f as i}from"./app-d4806199.js";const c={},p=i('<h2 id="grafana-plugin" tabindex="-1"><a class="header-anchor" href="#grafana-plugin" aria-hidden="true">#</a> Grafana-Plugin</h2><p>Grafana is an open source volume metrics monitoring and visualization tool, which can be used to present time series data and analyze application runtime status.</p><p>We developed the Grafana-Plugin for IoTDB, using the IoTDB REST service to present time series data and providing many visualization methods for time series data.<br> Compared with previous IoTDB-Grafana-Connector, current Grafana-Plugin performs more efficiently and supports more query types. So, <strong>we recommend using Grafana-Plugin instead of IoTDB-Grafana-Connector</strong>.</p><h3 id="installation-and-deployment" tabindex="-1"><a class="header-anchor" href="#installation-and-deployment" aria-hidden="true">#</a> Installation and deployment</h3><h4 id="install-grafana" tabindex="-1"><a class="header-anchor" href="#install-grafana" aria-hidden="true">#</a> Install Grafana</h4>',5),h={href:"https://grafana.com/grafana/download",target:"_blank",rel:"noopener noreferrer"},u=e("li",null,"Version >= 7.0.0",-1),g=e("h4",{id:"install-grafana-plugin",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#install-grafana-plugin","aria-hidden":"true"},"#"),a(" Install Grafana-Plugin")],-1),m=e("li",null,"Plugin name: grafana-plugin",-1),f={href:"https://github.com/apache/iotdb.git",target:"_blank",rel:"noopener noreferrer"},b=i(`<p>Execute the following command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/apache/iotdb.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="compile-grafana-plugin" tabindex="-1"><a class="header-anchor" href="#compile-grafana-plugin" aria-hidden="true">#</a> Compile Grafana-Plugin</h4><h5 id="compile-method-1" tabindex="-1"><a class="header-anchor" href="#compile-method-1" aria-hidden="true">#</a> Compile Method 1</h5><p>We need to compile the front-end project in the IoTDB <code>grafana-plugin</code> directory and then generate the <code>dist</code> directory. The specific execution process is as follows.</p><ul><li>Option 1 (compile with maven): execute following command in the <code>grafana-plugin</code> directory:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mvn <span class="token function">install</span> package <span class="token parameter variable">-P</span> compile-grafana-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Option 2 (compile with yarn): execute following command in the <code>grafana-plugin</code> directory:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">install</span>
<span class="token function">yarn</span> build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>If compiling successful, you can see the <code>dist</code> directory , which contains the compiled Grafana-Plugin:</p><img style="width:100%;max-width:333px;max-height:545px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/grafana-plugin-build.png?raw=true"><h5 id="compile-method-2" tabindex="-1"><a class="header-anchor" href="#compile-method-2" aria-hidden="true">#</a> Compile Method 2</h5><p>We can also obtain the front-end project of <code>grafana-plugin</code> and other IoTDB executable files by executing the <strong>package instruction</strong> of the IoTDB project.</p><p>Execute following command in the IoTDB root directory:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> mvn clean package <span class="token parameter variable">-pl</span> distribution <span class="token parameter variable">-am</span> <span class="token parameter variable">-DskipTests</span> <span class="token parameter variable">-P</span> compile-grafana-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If compiling successful, you can see that the <code>distribution/target</code> directory contains the compiled Grafana-Plugin:</p><img style="width:100%;max-width:333px;max-height:545px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/distribution.png?raw=true"><h4 id="install-grafana-plugin-1" tabindex="-1"><a class="header-anchor" href="#install-grafana-plugin-1" aria-hidden="true">#</a> Install Grafana-Plugin</h4>`,18),v=i('<li><p>Copy the front-end project target folder generated above to Grafana&#39;s plugin directory <code>${Grafana directory}\\data\\plugins\\</code>.If there is no such directory, you can manually create it or start grafana and it will be created automatically. Of course, you can also modify the location of plugins. For details, please refer to the following instructions for modifying the location of Grafana&#39;s plugin directory.</p></li><li><p>Modify Grafana configuration file: the file is in（<code>${Grafana directory}\\conf\\defaults.ini</code>）, and do the following modifications:</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">allow_loading_unsigned_plugins</span> <span class="token punctuation">=</span> <span class="token value attr-value">iotdb</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Modify the location of Grafana&#39;s plugin directory: the file is in（<code>${Grafana directory}\\conf\\defaults.ini</code>）, and do the following modifications:</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">plugins</span> <span class="token punctuation">=</span> <span class="token value attr-value">data/plugins</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li>',3),x=e("br",null,null,-1),y={href:"https://grafana.com/docs/grafana/latest/plugins/installation/",target:"_blank",rel:"noopener noreferrer"},w=i(`<h4 id="start-grafana" tabindex="-1"><a class="header-anchor" href="#start-grafana" aria-hidden="true">#</a> Start Grafana</h4><p>Start Grafana with the following command in the Grafana directory:</p><ul><li>Windows:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bin<span class="token punctuation">\\</span>grafana-server.exe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Linux:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> grafana-server start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>MacOS:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew services start grafana
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8),k={href:"https://grafana.com/docs/grafana/latest/installation/",target:"_blank",rel:"noopener noreferrer"},_=i(`<h4 id="configure-iotdb-rest-service" tabindex="-1"><a class="header-anchor" href="#configure-iotdb-rest-service" aria-hidden="true">#</a> Configure IoTDB REST Service</h4><ul><li>Modify <code>{iotdb directory}/conf/iotdb-rest.properties</code> as following:</li></ul><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># Is the REST service enabled</span>
<span class="token key attr-name">enable_rest_service</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>

<span class="token comment"># the binding port of the REST service</span>
<span class="token key attr-name">rest_service_port</span><span class="token punctuation">=</span><span class="token value attr-value">18080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Start IoTDB (restart if the IoTDB service is already started)</p><h3 id="how-to-use-grafana-plugin" tabindex="-1"><a class="header-anchor" href="#how-to-use-grafana-plugin" aria-hidden="true">#</a> How to use Grafana-Plugin</h3><h4 id="access-grafana-dashboard" tabindex="-1"><a class="header-anchor" href="#access-grafana-dashboard" aria-hidden="true">#</a> Access Grafana dashboard</h4><p>Grafana displays data in a web page dashboard. Please open your browser and visit <code>http://&lt;ip&gt;:&lt;port&gt;</code> when using it.</p><ul><li><p>IP is the IP of the server where your Grafana is located, and Port is the running port of Grafana (default 3000).</p></li><li><p>The default login username and password are both <code>admin</code>.</p></li></ul><h4 id="add-iotdb-as-data-source" tabindex="-1"><a class="header-anchor" href="#add-iotdb-as-data-source" aria-hidden="true">#</a> Add IoTDB as Data Source</h4><p>Click the <code>Settings</code> icon on the left, select the <code>Data Source</code> option, and then click <code>Add data source</code>.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/datasource_1.png?raw=true"><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/datasource_2.png?raw=true"><p>Select the <code>Apache IoTDB</code> data source.</p><ul><li>Fill in <code>http://&lt;ip&gt;:&lt;port&gt;</code> in the <code>URL</code> field <ul><li>ip is the host ip where your IoTDB server is located</li><li>port is the running port of the REST service (default 18080).</li></ul></li><li>Enter the username and password of the IoTDB server</li></ul><p>Click <code>Save &amp; Test</code>, and <code>Success</code> will appear.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/datasource_3.png?raw=true"><h4 id="create-a-new-panel" tabindex="-1"><a class="header-anchor" href="#create-a-new-panel" aria-hidden="true">#</a> Create a new Panel</h4><p>Click the <code>Dashboards</code> icon on the left, and select <code>Manage</code> option.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/manage.png?raw=true"><p>Click the <code>New Dashboard</code> icon on the top right, and select <code>Add an empty panel</code> option.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/add-empty-panel.png?raw=true"><p>Enter content in the SELECT, FROM , WHERE and CONTROL input box, where the WHERE and CONTROL input boxes are optional.</p><p>If a query involves multiple expressions, we can click <code>+</code> on the right side of the SELECT input box to add expressions in the SELECT clause, or click <code>+</code> on the right side of the FROM input box to add a path prefix:</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/grafana_input.png?raw=true"><p>SELECT input box: contents can be the time series suffix, function, udf, arithmetic expression, or nested expressions. You can also use the as clause to rename the result.</p><p>Here are some examples of valid SELECT content:</p><ul><li><code>s1</code></li><li><code>top_k(s1, &#39;k&#39;=&#39;1&#39;) as top</code></li><li><code>sin(s1) + cos(s1 + s2)</code></li><li><code>udf(s1) as &quot;alias&quot;</code></li></ul><p>FROM input box: contents must be the prefix path of the time series, such as <code>root.sg.d</code>.</p><p>WHERE input box: contents should be the filter condition of the query, such as <code>time &gt; 0</code> or <code>s1 &lt; 1024 and s2 &gt; 1024</code>.</p><p>CONTROL input box: contents should be a special clause that controls the query type and output format.</p><p>Here are some examples of valid CONTROL content:</p><ul><li><code>group by ([2017-11-01T00:00:00, 2017-11-07T23:00:00), 1d)</code></li><li><code>group by ([2017-11-01 00:00:00, 2017-11-07 23:00:00), 3h, 1d)</code></li><li><code>GROUP BY([2017-11-07T23:50:00, 2017-11-07T23:59:00), 1m) FILL (PREVIOUSUNTILLAST)</code></li><li><code>GROUP BY([2017-11-07T23:50:00, 2017-11-07T23:59:00), 1m) FILL (PREVIOUS, 1m)</code></li><li><code>GROUP BY([2017-11-07T23:50:00, 2017-11-07T23:59:00), 1m) FILL (LINEAR, 5m, 5m)</code></li><li><code>group by ((2017-11-01T00:00:00, 2017-11-07T23:00:00], 1d), level=1</code></li><li><code>group by ([0, 20), 2ms, 3ms), level=1</code></li></ul><p>Tip: Statements like <code>select * from root.xx.**</code> are not recommended because those statements may cause OOM.</p><h4 id="support-for-variables-and-template-functions" tabindex="-1"><a class="header-anchor" href="#support-for-variables-and-template-functions" aria-hidden="true">#</a> Support for variables and template functions</h4>`,34),G={href:"https://grafana.com/docs/grafana/v7.0/variables/",target:"_blank",rel:"noopener noreferrer"},I=i('<p>After creating a new Panel, click the Settings button in the upper right corner:</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/setconf.png?raw=true"><p>Select <code>Variables</code>, click <code>Add variable</code>:</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/addvaribles.png?raw=true"><p>Enter <code>Name</code>, <code>Label</code>, and <code>Query</code>, and then click the <code>Update</code> button:</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/variblesinput.png?raw=true"><p>Apply Variables, enter the variable in the <code>grafana panel</code> and click the <code>save</code> button:</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/applyvariables.png?raw=true"><h3 id="more-details-about-grafana" tabindex="-1"><a class="header-anchor" href="#more-details-about-grafana" aria-hidden="true">#</a> More Details about Grafana</h3>',9),T={href:"http://docs.grafana.org/guides/getting_started/",target:"_blank",rel:"noopener noreferrer"};function E(S,L){const n=s("ExternalLinkIcon");return r(),l("div",null,[d(`

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

`),p,e("ul",null,[e("li",null,[a("Download url: "),e("a",h,[a("https://grafana.com/grafana/download"),t(n)])]),u]),g,e("ul",null,[m,e("li",null,[a("Download url: "),e("a",f,[a("https://github.com/apache/iotdb.git"),t(n)])])]),b,e("ul",null,[v,e("li",null,[e("p",null,[a("Start Grafana (restart if the Grafana service is already started)"),x,a(" For more details，please click "),e("a",y,[a("here"),t(n)])])])]),w,e("p",null,[a("For more details，please click "),e("a",k,[a("here"),t(n)])]),_,e("p",null,[a("This plugin supports Grafana's variables and templates ("),e("a",G,[a("https://grafana.com/docs/grafana/v7.0/variables/"),t(n)]),a(") feature.")]),I,e("p",null,[a("For more details about Grafana operation, please refer to the official Grafana documentation: "),e("a",T,[a("http://docs.grafana.org/guides/getting_started/"),t(n)]),a(".")])])}const C=o(c,[["render",E],["__file","Grafana-Plugin.html.vue"]]);export{C as default};
