import{_ as n,r,o as s,c as l,a as d,d as e,e as a,b as i,f as o}from"./app-EnSYQARc.js";const c={},h=o('<h1 id="monitoring-board-install-and-deploy" tabindex="-1"><a class="header-anchor" href="#monitoring-board-install-and-deploy" aria-hidden="true">#</a> Monitoring Board Install and Deploy</h1><p>From the Apache IoTDB 1.0 version, we introduced the system monitoring module, you can complete the Apache IoTDB important operational indicators for monitoring, this article describes how to open the system monitoring module in the Apache IoTDB distribution, and the use of Prometheus + Grafana way to complete the visualisation of the system monitoring indicators.</p><h2 id="pre-preparation" tabindex="-1"><a class="header-anchor" href="#pre-preparation" aria-hidden="true">#</a> pre-preparation</h2><h3 id="software-requirement" tabindex="-1"><a class="header-anchor" href="#software-requirement" aria-hidden="true">#</a> software requirement</h3>',4),g={href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://prometheus.io/download/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://grafana.com/grafana/download",target:"_blank",rel:"noopener noreferrer"},f=e("li",null,"IoTDB-Grafana installer: Grafana Dashboards is an TimechoDB(Enterprise Edition based on IoTDB) tool, and you may contact your sales for the relevant installer.",-1),p=o(`<h3 id="cluster-requirement" tabindex="-1"><a class="header-anchor" href="#cluster-requirement" aria-hidden="true">#</a> cluster requirement</h3><p>Make sure that the IoTDB cluster is started before doing the following.</p><h3 id="clarification" tabindex="-1"><a class="header-anchor" href="#clarification" aria-hidden="true">#</a> clarification</h3><p>This doc will build the monitoring dashboard on one machine (1 ConfigNode and 1 DataNode) environment, other cluster configurations are similar, users can adjust the configuration according to their own cluster situation (the number of ConfigNode and DataNode). The basic configuration information of the cluster built in this paper is shown in the table below.</p><table><thead><tr><th>NODETYPE</th><th>NODEIP</th><th>Monitor Pusher</th><th>Monitor Level</th><th>Monitor Port</th></tr></thead><tbody><tr><td>ConfigNode</td><td>127.0.0.1</td><td>PROMETHEUS</td><td>IMPORTANT</td><td>9091</td></tr><tr><td>DataNode</td><td>127.0.0.1</td><td>PROMETHEUS</td><td>IMPORTANT</td><td>9093</td></tr></tbody></table><h2 id="configure-prometheus-capture-monitoring-metrics" tabindex="-1"><a class="header-anchor" href="#configure-prometheus-capture-monitoring-metrics" aria-hidden="true">#</a> configure Prometheus capture monitoring metrics</h2><ol><li>Download the installation package. Download the Prometheus binary package locally, unzip it and go to the corresponding folder:</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>tar xvfz prometheus-*.tar.gz
cd prometheus-*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Modify the configuration. Modify the Prometheus configuration file prometheus.yml as follows:<br> a. Added confignode task to collect monitoring data from ConfigNode<br> b. Add datanode task to collect monitoring data from DataNode</li></ol><div class="language-YAML line-numbers-mode" data-ext="YAML"><pre class="language-YAML"><code>global:
  scrape_interval: 15s

scrape_configs:
  - job_name: &quot;prometheus&quot;
    static_configs:
    - targets: [&quot;localhost:9090&quot;]
  - job_name: &quot;confignode&quot;
    static_configs:
    - targets: [&quot;localhost:9091&quot;]
    honor_labels: true
  - job_name: &quot;datanode&quot;
    static_configs:
    - targets: [&quot;localhost:9093&quot;]
    honor_labels: true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>Start Promethues. the default expiration time for Prometheus monitoring data is 15d. in production environments, it is recommended to adjust the expiration time to 180d or more in order to track historical monitoring data for a longer period of time, as shown in the following startup command:</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>./prometheus --config.file=prometheus.yml --storage.tsdb.retention.time=180d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,12),b={start:"4"},v={href:"http://localhost:9090",target:"_blank",rel:"noopener noreferrer"},w=o(`<p><img src="https://alioss.timecho.com/docs/img/1a.PNG" alt="" loading="lazy"><br><img src="https://alioss.timecho.com/docs/img/2a.PNG" alt="" loading="lazy"></p><h2 id="using-grafana-to-view-monitoring-data" tabindex="-1"><a class="header-anchor" href="#using-grafana-to-view-monitoring-data" aria-hidden="true">#</a> Using Grafana to View Monitoring Data</h2><h3 id="step1-grafana-installation-configuration-and-startup" tabindex="-1"><a class="header-anchor" href="#step1-grafana-installation-configuration-and-startup" aria-hidden="true">#</a> Step1：Grafana Installation, Configuration and Startup</h3><ol><li>Download the binary package of Grafana locally, unzip it and go to the corresponding folder:</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>tar -zxvf grafana-*.tar.gz
cd grafana-*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>Start Grafana and enter:</li></ol><div class="language-Shell line-numbers-mode" data-ext="Shell"><pre class="language-Shell"><code>./bin/grafana-server web 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7),y={start:"3"},_={href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer"},D=e("li",null,"First we configure the Data Source in Configuration to be Prometheus.",-1),S=o('<figure><img src="https://alioss.timecho.com/docs/img/3a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>When configuring the Data Source, pay attention to the URL where Prometheus is located, and click Save &amp; Test after configuration, the Data source is working prompt appears, then the configuration is successful.</li></ol><figure><img src="https://alioss.timecho.com/docs/img/4a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="step2-use-the-official-grafana-dashboard-provided-by-iotdb" tabindex="-1"><a class="header-anchor" href="#step2-use-the-official-grafana-dashboard-provided-by-iotdb" aria-hidden="true">#</a> Step2：Use the official Grafana dashboard provided by IoTDB</h3><ol><li>Enter Grafana，click Browse of Dashboards</li></ol><figure><img src="https://alioss.timecho.com/docs/img/5a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>Click the Import button on the right</li></ol><figure><img src="https://alioss.timecho.com/docs/img/6a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>Select a way to import Dashboard<br> a. Upload the Json file of the downloaded Dashboard locally<br> b. Enter the URL or ID of the Dashboard obtained from the Grafana website<br> c. Paste the contents of the Dashboard&#39;s Json file</li></ol><figure><img src="https://alioss.timecho.com/docs/img/7a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="4"><li>Select Prometheus in the Dashboard as the Data Source you just configured and click Import</li></ol><figure><img src="https://alioss.timecho.com/docs/img/8a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="5"><li>Then enter Dashboard，select job to be ConfigNode，then following monitoring dashboard will be seen:</li></ol><figure><img src="https://alioss.timecho.com/docs/img/9a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="6"><li>Similarly, we can import the Apache DataNode Dashboard, select job as DataNode,then following monitoring dashboard will be seen:</li></ol><figure><img src="https://alioss.timecho.com/docs/img/10a.pngA" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="step3-creating-a-new-dashboard-for-data-visualisation" tabindex="-1"><a class="header-anchor" href="#step3-creating-a-new-dashboard-for-data-visualisation" aria-hidden="true">#</a> Step3：Creating a new Dashboard for data visualisation</h3><ol><li>First create the Dashboard, then create the Panel.</li></ol><figure><img src="https://alioss.timecho.com/docs/img/11a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="2"><li>After that, you can visualize the monitoring-related data in the panel according to your needs (all relevant monitoring metrics can be filtered by selecting confignode/datanode in the job first).</li></ol><figure><img src="https://alioss.timecho.com/docs/img/12a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="3"><li>Once the visualisation of the monitoring metrics selected for attention is complete, we get a panel like this:</li></ol><figure><img src="https://alioss.timecho.com/docs/img/13a.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',23);function x(I,N){const t=r("ExternalLinkIcon");return s(),l("div",null,[d(`

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

`),h,e("ol",null,[e("li",null,[a("Apache IoTDB: version 1.0 and above, download from the official website: "),e("a",g,[a("https://iotdb.apache.org/Download/"),i(t)])]),e("li",null,[a("Prometheus: version 2.30.3 and above, download from the official website: "),e("a",u,[a("https://prometheus.io/download/"),i(t)])]),e("li",null,[a("Grafana: version 8.4.2 and above, download from the official website: "),e("a",m,[a("https://grafana.com/grafana/download"),i(t)])]),f]),p,e("ol",b,[e("li",null,[a("Confirm the startup is successful. Enter "),e("a",v,[a("http://localhost:9090"),i(t)]),a(" in the browser to enter Prometheus, click to enter the Target interface under Status (Figure 1 below), when you see State are Up, it means the configuration is successful and connected (Figure 2 below), click the link on the left side to jump to the webpage monitoring.")])]),w,e("ol",y,[e("li",null,[a("Enter "),e("a",_,[a("http://localhost:3000"),i(t)]),a(" in your browser to access Grafana, the default initial username and password are both admin.")]),D]),S])}const k=n(c,[["render",x],["__file","Monitoring-Board-Install-and-Deploy.html.vue"]]);export{k as default};
