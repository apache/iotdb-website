import{_ as o,r as s,o as r,c as l,a as d,d as e,e as a,b as i,f as n}from"./app-e22bde73.js";const c={},h=n('<h1 id="grafana-plugin" tabindex="-1"><a class="header-anchor" href="#grafana-plugin" aria-hidden="true">#</a> Grafana-Plugin</h1><p>Grafana is an open source volume metrics monitoring and visualization tool, which can be used to present time series data and analyze application runtime status.</p><p>We developed the Grafana-Plugin for IoTDB, using the IoTDB REST service to present time series data and providing many visualization methods for time series data.<br> Compared with previous IoTDB-Grafana-Connector, current Grafana-Plugin performs more efficiently and supports more query types. So, <strong>we recommend using Grafana-Plugin instead of IoTDB-Grafana-Connector</strong>.</p><h2 id="installation-and-deployment" tabindex="-1"><a class="header-anchor" href="#installation-and-deployment" aria-hidden="true">#</a> Installation and deployment</h2><h3 id="install-grafana" tabindex="-1"><a class="header-anchor" href="#install-grafana" aria-hidden="true">#</a> Install Grafana</h3>',5),p={href:"https://grafana.com/grafana/download",target:"_blank",rel:"noopener noreferrer"},u=e("li",null,"Version >= 9.3.0",-1),g=e("h3",{id:"acquisition-method-of-grafana-plugin",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#acquisition-method-of-grafana-plugin","aria-hidden":"true"},"#"),a(" Acquisition method of grafana plugin")],-1),m=e("h4",{id:"method-1-grafana-plugin-binary-download",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#method-1-grafana-plugin-binary-download","aria-hidden":"true"},"#"),a(" Method 1: grafana plugin binary Download")],-1),f={href:"https://iotdb.apache.org/zh/Download/",target:"_blank",rel:"noopener noreferrer"},b=e("h4",{id:"method-2-separate-compilation-of-grafana-plugin",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#method-2-separate-compilation-of-grafana-plugin","aria-hidden":"true"},"#"),a(" Method 2: separate compilation of grafana plugin")],-1),x=e("p",null,[a("We need to compile the front-end project in the IoTDB "),e("code",null,"grafana-plugin"),a(" directory and then generate the "),e("code",null,"dist"),a(" directory. The specific execution process is as follows.")],-1),w=e("p",null,"Source download",-1),v=e("li",null,"Plugin name: grafana-plugin",-1),y={href:"https://github.com/apache/iotdb.git",target:"_blank",rel:"noopener noreferrer"},_=n(`<p>Execute the following command:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/apache/iotdb.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Option 1 (compile with maven): execute following command in the <code>grafana-plugin</code> directory:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>mvn <span class="token function">install</span> package <span class="token parameter variable">-P</span> compile-grafana-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Option 2 (compile with yarn): execute following command in the <code>grafana-plugin</code> directory:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">install</span>
<span class="token function">yarn</span> build
go get <span class="token parameter variable">-u</span> github.com/grafana/grafana-plugin-sdk-go
go mod tidy
mage <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When using the go get -u command, the following error may be reported. In this case, we need to execute <code>go env -w GOPROXY=https://goproxy.cn</code>, and then execute <code>go get -u github.com/grafana/grafana -plugin-sdk-go</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>go get: module github.com/grafana/grafana-plugin-sdk-go: Get &quot;https://proxy.golang.org/github.com/grafana/grafana-plugin-sdk-go/@v/list&quot;: dial tcp 142.251.42.241:443: i/o timeout
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If compiling successful, you can see the <code>dist</code> directory , which contains the compiled Grafana-Plugin:</p><img style="width:100%;max-width:333px;max-height:545px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/grafana-plugin-build.png?raw=true"><h4 id="method-3-the-distribution-package-of-iotdb-is-fully-compiled" tabindex="-1"><a class="header-anchor" href="#method-3-the-distribution-package-of-iotdb-is-fully-compiled" aria-hidden="true">#</a> Method 3: The distribution package of IoTDB is fully compiled</h4><p>We can also obtain the front-end project of <code>grafana-plugin</code> and other IoTDB executable files by executing the <strong>package instruction</strong> of the IoTDB project.</p><p>Execute following command in the IoTDB root directory:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> mvn clean package <span class="token parameter variable">-pl</span> distribution <span class="token parameter variable">-am</span> <span class="token parameter variable">-DskipTests</span> <span class="token parameter variable">-P</span> compile-grafana-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>If compiling successful, you can see that the <code>distribution/target</code> directory contains the compiled Grafana-Plugin:</p><img style="width:100%;max-width:333px;max-height:545px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/distribution.png?raw=true"><h3 id="install-grafana-plugin" tabindex="-1"><a class="header-anchor" href="#install-grafana-plugin" aria-hidden="true">#</a> Install Grafana-Plugin</h3><ul><li><p>Copy the front-end project target folder generated above to Grafana&#39;s plugin directory <code>\${Grafana directory}\\data\\plugins\\</code>。If there is no such directory, you can manually create it or start grafana and it will be created automatically. Of course, you can also modify the location of plugins. For details, please refer to the following instructions for modifying the location of Grafana&#39;s plugin directory.</p></li><li><p>Modify Grafana configuration file: the file is in（<code>\${Grafana directory}\\conf\\defaults.ini</code>）, and do the following modifications:</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">allow_loading_unsigned_plugins</span> <span class="token punctuation">=</span> <span class="token value attr-value">apache-iotdb-datasource</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Modify the location of Grafana&#39;s plugin directory: the file is in（<code>\${Grafana directory}\\conf\\defaults.ini</code>）, and do the following modifications:</p><div class="language-ini line-numbers-mode" data-ext="ini"><pre class="language-ini"><code><span class="token key attr-name">plugins</span> <span class="token punctuation">=</span> <span class="token value attr-value">data/plugins</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>Start Grafana (restart if the Grafana service is already started)</p></li></ul>`,18),k={href:"https://grafana.com/docs/grafana/latest/plugins/installation/",target:"_blank",rel:"noopener noreferrer"},G=n(`<h3 id="start-grafana" tabindex="-1"><a class="header-anchor" href="#start-grafana" aria-hidden="true">#</a> Start Grafana</h3><p>Start Grafana with the following command in the Grafana directory:</p><ul><li>Windows:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>bin<span class="token punctuation">\\</span>grafana-server.exe
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>Linux:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">service</span> grafana-server start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>MacOS:</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew services start grafana
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8),I={href:"https://grafana.com/docs/grafana/latest/installation/",target:"_blank",rel:"noopener noreferrer"},E=n(`<h3 id="configure-iotdb-rest-service" tabindex="-1"><a class="header-anchor" href="#configure-iotdb-rest-service" aria-hidden="true">#</a> Configure IoTDB REST Service</h3><ul><li>Modify <code>{iotdb directory}/conf/iotdb-common.properties</code> as following:</li></ul><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment"># Is the REST service enabled</span>
<span class="token key attr-name">enable_rest_service</span><span class="token punctuation">=</span><span class="token value attr-value">true</span>

<span class="token comment"># the binding port of the REST service</span>
<span class="token key attr-name">rest_service_port</span><span class="token punctuation">=</span><span class="token value attr-value">18080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Start IoTDB (restart if the IoTDB service is already started)</p><h2 id="how-to-use-grafana-plugin" tabindex="-1"><a class="header-anchor" href="#how-to-use-grafana-plugin" aria-hidden="true">#</a> How to use Grafana-Plugin</h2><h3 id="access-grafana-dashboard" tabindex="-1"><a class="header-anchor" href="#access-grafana-dashboard" aria-hidden="true">#</a> Access Grafana dashboard</h3><p>Grafana displays data in a web page dashboard. Please open your browser and visit <code>http://&lt;ip&gt;:&lt;port&gt;</code> when using it.</p><ul><li><p>IP is the IP of the server where your Grafana is located, and Port is the running port of Grafana (default 3000).</p></li><li><p>The default login username and password are both <code>admin</code>.</p></li></ul><h3 id="add-iotdb-as-data-source" tabindex="-1"><a class="header-anchor" href="#add-iotdb-as-data-source" aria-hidden="true">#</a> Add IoTDB as Data Source</h3><p>Click the <code>Settings</code> icon on the left, select the <code>Data Source</code> option, and then click <code>Add data source</code>.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/datasource_1.png?raw=true"><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/datasource_2.png?raw=true"><p>Select the <code>Apache IoTDB</code> data source.</p><ul><li>Fill in <code>http://&lt;ip&gt;:&lt;port&gt;</code> in the <code>URL</code> field <ul><li>ip is the host ip where your IoTDB server is located</li><li>port is the running port of the REST service (default 18080).</li></ul></li><li>Enter the username and password of the IoTDB server</li></ul><p>Click <code>Save &amp; Test</code>, and <code>Data source is working</code> will appear.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/grafana9_datasource.png?raw=true"><h3 id="create-a-new-panel" tabindex="-1"><a class="header-anchor" href="#create-a-new-panel" aria-hidden="true">#</a> Create a new Panel</h3><p>Click the <code>Dashboards</code> icon on the left, and select <code>Manage</code> option.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/manage.png?raw=true"><p>Click the <code>New Dashboard</code> icon on the top right, and select <code>Add an empty panel</code> option.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/add-empty-panel.png?raw=true"><p>Grafana plugin supports SQL: Full Customized mode and SQL: Drop-down List mode, and the default mode is SQL: Full Customized mode.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/grafana_input_style.png?raw=true"><h4 id="sql-full-customized-input-method" tabindex="-1"><a class="header-anchor" href="#sql-full-customized-input-method" aria-hidden="true">#</a> SQL: Full Customized input method</h4><p>Enter content in the SELECT, FROM , WHERE and CONTROL input box, where the WHERE and CONTROL input boxes are optional.</p><p>If a query involves multiple expressions, we can click <code>+</code> on the right side of the SELECT input box to add expressions in the SELECT clause, or click <code>+</code> on the right side of the FROM input box to add a path prefix:</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/grafana_input.png?raw=true"><p>SELECT input box: contents can be the time series suffix, function, udf, arithmetic expression, or nested expressions. You can also use the as clause to rename the result.</p><p>Here are some examples of valid SELECT content:</p><ul><li><code>s1</code></li><li><code>top_k(s1, &#39;k&#39;=&#39;1&#39;) as top</code></li><li><code>sin(s1) + cos(s1 + s2)</code></li><li><code>udf(s1) as &quot;alias&quot;</code></li></ul><p>FROM input box: contents must be the prefix path of the time series, such as <code>root.sg.d</code>.</p><p>WHERE input box: contents should be the filter condition of the query, such as <code>time &gt; 0</code> or <code>s1 &lt; 1024 and s2 &gt; 1024</code>.</p><p>CONTROL input box: contents should be a special clause that controls the query type and output format.<br> The GROUP BY input box supports the use of grafana&#39;s global variables to obtain the current time interval changes $__from (start time), $__to (end time)</p><p>Here are some examples of valid CONTROL content:</p><ul><li><code>GROUP BY ([$__from, $__to), 1d)</code></li><li><code>GROUP BY ([$__from, $__to),3h,1d)</code></li><li><code>GROUP BY ([2017-11-01T00:00:00, 2017-11-07T23:00:00), 1d)</code></li><li><code>GROUP BY ([2017-11-01 00:00:00, 2017-11-07 23:00:00), 3h, 1d)</code></li><li><code>GROUP BY ([$__from, $__to), 1m) FILL (PREVIOUSUNTILLAST)</code></li><li><code>GROUP BY ([2017-11-07T23:50:00, 2017-11-07T23:59:00), 1m) FILL (PREVIOUSUNTILLAST)</code></li><li><code>GROUP BY ([2017-11-07T23:50:00, 2017-11-07T23:59:00), 1m) FILL (PREVIOUS, 1m)</code></li><li><code>GROUP BY ([2017-11-07T23:50:00, 2017-11-07T23:59:00), 1m) FILL (LINEAR, 5m, 5m)</code></li><li><code>GROUP BY ((2017-11-01T00:00:00, 2017-11-07T23:00:00], 1d), LEVEL=1</code></li><li><code>GROUP BY ([0, 20), 2ms, 3ms), LEVEL=1</code></li></ul><p>Tip: Statements like <code>select * from root.xx.**</code> are not recommended because those statements may cause OOM.</p><h4 id="sql-drop-down-list" tabindex="-1"><a class="header-anchor" href="#sql-drop-down-list" aria-hidden="true">#</a> SQL: Drop-down List</h4><p>Select a time series in the TIME-SERIES selection box, select a function in the FUNCTION option, and enter the contents in the SAMPLING INTERVAL、SLIDING STEP、LEVEL、FILL input boxes, where TIME-SERIES is a required item and the rest are non required items.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/grafana_input2.png?raw=true"><h3 id="support-for-variables-and-template-functions" tabindex="-1"><a class="header-anchor" href="#support-for-variables-and-template-functions" aria-hidden="true">#</a> Support for variables and template functions</h3><p>Both SQL: Full Customized and SQL: Drop-down List input methods support the variable and template functions of grafana. In the following example, raw input method is used, and aggregation is similar.</p><p>After creating a new Panel, click the Settings button in the upper right corner:</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/setconf.png?raw=true"><p>Select <code>Variables</code>, click <code>Add variable</code>:</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/addvaribles.png?raw=true"><p>Example 1：Enter <code>Name</code>, <code>Label</code>, and <code>Query</code>, and then click the <code>Update</code> button:</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/variblesinput.png?raw=true"><p>Apply Variables, enter the variable in the <code>grafana panel</code> and click the <code>save</code> button:</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/applyvariables.png?raw=true"><p>Example 2: Nested use of variables:</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/variblesinput2.png?raw=true"><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/variblesinput2-1.png?raw=true"><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/variblesinput2-2.png?raw=true"><p>Example 3: using function variables</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/variablesinput3.png?raw=true"><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/Grafana-plugin/variablesinput3-1.png?raw=true">`,56),T=e("br",null,null,-1),S=e("br",null,null,-1),L={href:"https://grafana.com/docs/grafana/latest/variables/",target:"_blank",rel:"noopener noreferrer"},O=n('<p>In addition to the examples above, the following statements are supported:</p><ul><li><code>show databases</code></li><li><code>show timeseries</code></li><li><code>show child nodes</code></li><li><code>show all ttl</code></li><li><code>show latest timeseries</code></li><li><code>show devices</code></li><li><code>select xx from root.xxx limit xx 等sql 查询</code></li></ul><p>Tip: If the query field contains Boolean data, the result value will be converted to 1 by true and 0 by false.</p><h3 id="grafana-alert-function" tabindex="-1"><a class="header-anchor" href="#grafana-alert-function" aria-hidden="true">#</a> Grafana alert function</h3><p>This plugin supports Grafana alert function.</p><ol><li>In the Grafana panel, click the <code>alerting</code> button, as shown in the following figure:</li></ol><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/grafana9_alert1.png?raw=true"><ol start="2"><li>Click <code>Create alert rule from this panel</code>, as shown in the figure below:</li></ol><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/grafana9_alert2.png?raw=true"><ol start="3"><li>Set query and alarm conditions in step 1. Conditions represent query conditions, and multiple combined query conditions can be configured. As shown below:<br><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/grafana9_alert3.png?raw=true"></li></ol><p>The query condition in the figure: <code>min() OF A IS BELOW 0</code>, means that the condition will be triggered when the minimum value in the A tab is 0, click this function to change it to another function.</p><p>Tip: Queries used in alert rules cannot contain any template variables. Currently we only support AND and OR operators between conditions, which are executed serially.<br> For example, we have 3 conditions in the following order: Condition: B (Evaluates to: TRUE) OR Condition: C (Evaluates to: FALSE) and Condition: D (Evaluates to: TRUE) So the result will evaluate to ((True or False ) and right) = right.</p><ol start="4"><li>After selecting indicators and alarm rules, click the <code>Preview</code> button to preview the data as shown in the figure below:</li></ol><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/grafana9_alert4.png?raw=true"><ol start="5"><li>In step 2, specify the alert evaluation interval, and for <code>Evaluate every</code>, specify the evaluation frequency. Must be a multiple of 10 seconds. For example, 1m, 30s.<br> For <code>Evaluate for</code>, specify the duration before the alert fires. As shown below:</li></ol><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/grafana9_alert5.png?raw=true"><ol start="6"><li>In step 3, add the storage location, rule group, and other metadata associated with the rule. Where <code>Rule name</code> specifies the name of the rule. Rule names must be unique.</li></ol><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/grafana9_alert6.png?raw=true"><ol start="7"><li>In step 4, add a custom label. Add a custom label by selecting an existing key-value pair from the drop-down list, or add a new label by entering a new key or value. As shown below:</li></ol><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/grafana9_alert7.png?raw=true"><ol start="8"><li><p>Click <code>Save</code> to save the rule or click <code>Save and Exit</code> to save the rule and return to the alerts page.</p></li><li><p>Commonly used alarm states include <code>Normal</code>, <code>Pending</code>, <code>Firing</code> and other states, as shown in the figure below:</p></li></ol><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/grafana9_alert8.png?raw=true"><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/grafana9_alert9.png?raw=true">',23),R={start:"10"},C=e("code",null,"Contact points",-1),U={href:"https://grafana.com/docs/grafana/latest/alerting/manage-notifications/create-contact-point/",target:"_blank",rel:"noopener noreferrer"},D=e("h2",{id:"more-details-about-grafana",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#more-details-about-grafana","aria-hidden":"true"},"#"),a(" More Details about Grafana")],-1),P={href:"http://docs.grafana.org/guides/getting_started/",target:"_blank",rel:"noopener noreferrer"};function B(A,F){const t=s("ExternalLinkIcon");return r(),l("div",null,[d(`

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

`),h,e("ul",null,[e("li",null,[a("Download url: "),e("a",p,[a("https://grafana.com/grafana/download"),i(t)])]),u]),g,m,e("p",null,[a("Download url："),e("a",f,[a("https://iotdb.apache.org/zh/Download/"),i(t)])]),b,x,w,e("ul",null,[v,e("li",null,[a("Download url: "),e("a",y,[a("https://github.com/apache/iotdb.git"),i(t)])])]),_,e("p",null,[a("For more details，please click "),e("a",k,[a("here"),i(t)])]),G,e("p",null,[a("For more details，please click "),e("a",I,[a("here"),i(t)])]),E,e("p",null,[a("The Name in the above figure is the variable name and the variable name we will use in the panel in the future. Label is the display name of the variable. If it is empty, the variable of Name will be displayed. Otherwise, the name of the Label will be displayed."),T,a(" There are Query, Custom, Text box, Constant, DataSource, Interval, Ad hoc filters, etc. in the Type drop-down, all of which can be used in IoTDB's Grafana Plugin"),S,a(" For a more detailed introduction to usage, please check the official manual ("),e("a",L,[a("https://grafana.com/docs/grafana/latest/variables/"),i(t)]),a(")")]),O,e("ol",R,[e("li",null,[a("We can also configure "),C,a(" for alarms to receive alarm notifications. For more detailed operations, please refer to the official document ("),e("a",U,[a("https://grafana.com/docs/grafana/latest/alerting/manage-notifications/create-contact-point/"),i(t)]),a(").")])]),D,e("p",null,[a("For more details about Grafana operation, please refer to the official Grafana documentation: "),e("a",P,[a("http://docs.grafana.org/guides/getting_started/"),i(t)]),a(".")])])}const q=o(c,[["render",B],["__file","Grafana-Plugin.html.vue"]]);export{q as default};
