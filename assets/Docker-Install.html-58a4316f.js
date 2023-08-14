import{_ as o,r as i,o as p,c,a as l,d as s,e as n,b as e,f as t}from"./app-4b6ede22.js";const r={},d=s("h1",{id:"installation-by-docker",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#installation-by-docker","aria-hidden":"true"},"#"),n(" Installation by Docker")],-1),u={href:"https://hub.docker.com/r/apache/iotdb",target:"_blank",rel:"noopener noreferrer"},k=s("br",null,null,-1),v=t(`<h2 id="have-a-try" tabindex="-1"><a class="header-anchor" href="#have-a-try" aria-hidden="true">#</a> Have a try</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># get IoTDB official image</span>
<span class="token function">docker</span> pull apache/iotdb:1.1.0-standalone
<span class="token comment"># create docker bridge network</span>
<span class="token function">docker</span> network create <span class="token parameter variable">--driver</span><span class="token operator">=</span>bridge <span class="token parameter variable">--subnet</span><span class="token operator">=</span><span class="token number">172.18</span>.0.0/16 <span class="token parameter variable">--gateway</span><span class="token operator">=</span><span class="token number">172.18</span>.0.1 iotdb
<span class="token comment"># create docker container</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> iotdb-service <span class="token punctuation">\\</span>
              <span class="token parameter variable">--hostname</span> iotdb-service <span class="token punctuation">\\</span>
              <span class="token parameter variable">--network</span> iotdb <span class="token punctuation">\\</span>
              <span class="token parameter variable">--ip</span> <span class="token number">172.18</span>.0.6 <span class="token punctuation">\\</span>
              <span class="token parameter variable">-p</span> <span class="token number">6667</span>:6667 <span class="token punctuation">\\</span>
              <span class="token parameter variable">-e</span> <span class="token assign-left variable">cn_internal_address</span><span class="token operator">=</span>iotdb-service <span class="token punctuation">\\</span>
              <span class="token parameter variable">-e</span> <span class="token assign-left variable">cn_target_config_node_list</span><span class="token operator">=</span>iotdb-service:10710 <span class="token punctuation">\\</span>
              <span class="token parameter variable">-e</span> <span class="token assign-left variable">cn_internal_port</span><span class="token operator">=</span><span class="token number">10710</span> <span class="token punctuation">\\</span>
              <span class="token parameter variable">-e</span> <span class="token assign-left variable">cn_consensus_port</span><span class="token operator">=</span><span class="token number">10720</span> <span class="token punctuation">\\</span>
              <span class="token parameter variable">-e</span> <span class="token assign-left variable">dn_rpc_address</span><span class="token operator">=</span>iotdb-service <span class="token punctuation">\\</span>
              <span class="token parameter variable">-e</span> <span class="token assign-left variable">dn_internal_address</span><span class="token operator">=</span>iotdb-service <span class="token punctuation">\\</span>
              <span class="token parameter variable">-e</span> <span class="token assign-left variable">dn_target_config_node_list</span><span class="token operator">=</span>iotdb-service:10710 <span class="token punctuation">\\</span>
              <span class="token parameter variable">-e</span> <span class="token assign-left variable">dn_mpp_data_exchange_port</span><span class="token operator">=</span><span class="token number">10740</span> <span class="token punctuation">\\</span>
              <span class="token parameter variable">-e</span> <span class="token assign-left variable">dn_schema_region_consensus_port</span><span class="token operator">=</span><span class="token number">10750</span> <span class="token punctuation">\\</span>
              <span class="token parameter variable">-e</span> <span class="token assign-left variable">dn_data_region_consensus_port</span><span class="token operator">=</span><span class="token number">10760</span> <span class="token punctuation">\\</span>
              <span class="token parameter variable">-e</span> <span class="token assign-left variable">dn_rpc_port</span><span class="token operator">=</span><span class="token number">6667</span> <span class="token punctuation">\\</span>
              apache/iotdb:1.1.0-standalone              
<span class="token comment"># execute SQL</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-ti</span> iotdb-service /iotdb/sbin/start-cli.sh <span class="token parameter variable">-h</span> iotdb-service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>External access：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># &lt;IP Address/hostname&gt; is the real IP or domain address rather than the one in docker network, could be 127.0.0.1 within the computer.</span>
<span class="token variable">$IOTDB_HOME</span>/sbin/start-cli.sh <span class="token parameter variable">-h</span> <span class="token operator">&lt;</span>IP Address/hostname<span class="token operator">&gt;</span> <span class="token parameter variable">-p</span> <span class="token number">6667</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice：The confignode service would fail when restarting this container if the IP Adress of the container has been changed.</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># docker-compose-standalone.yml</span>
<span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">iotdb-service</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> apache/iotdb<span class="token punctuation">:</span>1.1.0<span class="token punctuation">-</span>standalone
    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> iotdb<span class="token punctuation">-</span>service
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> iotdb<span class="token punctuation">-</span>service
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> <span class="token string">&quot;6667:6667&quot;</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> cn_internal_address=iotdb<span class="token punctuation">-</span>service
      <span class="token punctuation">-</span> cn_internal_port=10710
      <span class="token punctuation">-</span> cn_consensus_port=10720
      <span class="token punctuation">-</span> cn_target_config_node_list=iotdb<span class="token punctuation">-</span>service<span class="token punctuation">:</span><span class="token number">10710</span>
      <span class="token punctuation">-</span> dn_rpc_address=iotdb<span class="token punctuation">-</span>service
      <span class="token punctuation">-</span> dn_internal_address=iotdb<span class="token punctuation">-</span>service
      <span class="token punctuation">-</span> dn_rpc_port=6667
      <span class="token punctuation">-</span> dn_mpp_data_exchange_port=10740
      <span class="token punctuation">-</span> dn_schema_region_consensus_port=10750
      <span class="token punctuation">-</span> dn_data_region_consensus_port=10760
      <span class="token punctuation">-</span> dn_target_config_node_list=iotdb<span class="token punctuation">-</span>service<span class="token punctuation">:</span><span class="token number">10710</span>
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
        <span class="token punctuation">-</span> ./data<span class="token punctuation">:</span>/iotdb/data
        <span class="token punctuation">-</span> ./logs<span class="token punctuation">:</span>/iotdb/logs
    <span class="token key atrule">networks</span><span class="token punctuation">:</span>
      <span class="token key atrule">iotdb</span><span class="token punctuation">:</span>
        <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 172.18.0.6

<span class="token key atrule">networks</span><span class="token punctuation">:</span>
  <span class="token key atrule">iotdb</span><span class="token punctuation">:</span>
    <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="deploy-cluster" tabindex="-1"><a class="header-anchor" href="#deploy-cluster" aria-hidden="true">#</a> deploy cluster</h2>`,7),b=s("br",null,null,-1),m={href:"https://github.com/apache/iotdb/tree/master/docker/src/main/DockerCompose/docker-compose-cluster-1c2d.yml",target:"_blank",rel:"noopener noreferrer"},_=t(`<p>Suppose that there are three computers of iotdb-1, iotdb-2 and iotdb-3. We called them nodes.<br> Here is the docker-compose file of iotdb-2, as the sample:</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">iotdb-confignode</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> apache/iotdb<span class="token punctuation">:</span>1.1.0<span class="token punctuation">-</span>confignode
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> iotdb<span class="token punctuation">-</span>confignode
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> cn_internal_address=iotdb<span class="token punctuation">-</span><span class="token number">2</span>
      <span class="token punctuation">-</span> cn_target_config_node_list=iotdb<span class="token punctuation">-</span>1<span class="token punctuation">:</span><span class="token number">10710</span>
      <span class="token punctuation">-</span> cn_internal_port=10710
      <span class="token punctuation">-</span> cn_consensus_port=10720
      <span class="token punctuation">-</span> schema_replication_factor=3
      <span class="token punctuation">-</span> schema_region_consensus_protocol_class=org.apache.iotdb.consensus.ratis.RatisConsensus
      <span class="token punctuation">-</span> config_node_consensus_protocol_class=org.apache.iotdb.consensus.ratis.RatisConsensus
      <span class="token punctuation">-</span> data_replication_factor=3
      <span class="token punctuation">-</span> data_region_consensus_protocol_class=org.apache.iotdb.consensus.iot.IoTConsensus
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /etc/hosts<span class="token punctuation">:</span>/etc/hosts<span class="token punctuation">:</span>ro
      <span class="token punctuation">-</span> ./data/confignode<span class="token punctuation">:</span>/iotdb/data
      <span class="token punctuation">-</span> ./logs/confignode<span class="token punctuation">:</span>/iotdb/logs
    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> <span class="token string">&quot;host&quot;</span>

  <span class="token key atrule">iotdb-datanode</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> apache/iotdb<span class="token punctuation">:</span>1.1.0<span class="token punctuation">-</span>datanode
    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> iotdb<span class="token punctuation">-</span>datanode
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> dn_rpc_address=iotdb<span class="token punctuation">-</span><span class="token number">2</span>
      <span class="token punctuation">-</span> dn_internal_address=iotdb<span class="token punctuation">-</span><span class="token number">2</span>
      <span class="token punctuation">-</span> dn_target_config_node_list=iotdb<span class="token punctuation">-</span>1<span class="token punctuation">:</span><span class="token number">10710</span>
      <span class="token punctuation">-</span> data_replication_factor=3
      <span class="token punctuation">-</span> dn_rpc_port=6667
      <span class="token punctuation">-</span> dn_mpp_data_exchange_port=10740
      <span class="token punctuation">-</span> dn_schema_region_consensus_port=10750
      <span class="token punctuation">-</span> dn_data_region_consensus_port=10760
      <span class="token punctuation">-</span> data_region_consensus_protocol_class=org.apache.iotdb.consensus.iot.IoTConsensus
       <span class="token punctuation">-</span> schema_replication_factor=3
      <span class="token punctuation">-</span> schema_region_consensus_protocol_class=org.apache.iotdb.consensus.ratis.RatisConsensus
      <span class="token punctuation">-</span> config_node_consensus_protocol_class=org.apache.iotdb.consensus.ratis.RatisConsensus
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> /etc/hosts<span class="token punctuation">:</span>/etc/hosts<span class="token punctuation">:</span>ro
      <span class="token punctuation">-</span> ./data/datanode<span class="token punctuation">:</span>/iotdb/data/
      <span class="token punctuation">-</span> ./logs/datanode<span class="token punctuation">:</span>/iotdb/logs/
    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> <span class="token string">&quot;host&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice：</p><ol><li>The <code>dn_target_config_node_list</code> of three nodes must the same and it is the first starting node of <code>iotdb-1</code> with the cn_internal_port of 10710。</li><li>In this docker-compose file，<code>iotdb-2</code> should be replace with the real IP or hostname of each node to generate docker compose files in the other nodes.</li><li>The services would talk with each other, so they need map the /etc/hosts file or add the <code>extra_hosts</code> to the docker compose file.</li><li>We must start the IoTDB services of <code>iotdb-1</code> first at the first time of starting.</li><li>Stop and remove all the IoTDB services and clean up the <code>data</code> and <code>logs</code> directories of the 3 nodes，then start the cluster again.</li></ol>`,4);function h(g,f){const a=i("ExternalLinkIcon");return p(),c("div",null,[l(`

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

`),d,s("p",null,[n("Apache IoTDB' Docker image is released on "),s("a",u,[n("https://hub.docker.com/r/apache/iotdb"),e(a)]),k,n(" Add environments of docker to update the configurations of Apache IoTDB.")]),v,s("p",null,[n("Until now, we support host and overlay networks but haven't supported bridge networks on multiple computers."),b,n(" Overlay networks see "),s("a",m,[n("1C2D"),e(a)]),n(" and here are the configurations and operation steps to start an IoTDB cluster with docker using host networks。")]),_])}const w=o(r,[["render",h],["__file","Docker-Install.html.vue"]]);export{w as default};
