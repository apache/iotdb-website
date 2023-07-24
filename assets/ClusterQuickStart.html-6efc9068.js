import{_ as d,r,o as s,c as a,a as o,d as e,e as n,b as l,f as t}from"./app-c075fd0e.js";const c={},u=t(`<h2 id="quick-start" tabindex="-1"><a class="header-anchor" href="#quick-start" aria-hidden="true">#</a> Quick Start</h2><p>This article uses a local environment as an example to<br> illustrate how to start, expand, and shrink an IoTDB Cluster.</p><p><strong>Notice: This document is a tutorial for deploying in a pseudo-cluster environment using different local ports, and is for exercise only. In real deployment scenarios, you only need to configure the IPV4 address or domain name of the server, and do not need to change the Node ports.</strong></p><h3 id="_1-prepare-the-start-environment" tabindex="-1"><a class="header-anchor" href="#_1-prepare-the-start-environment" aria-hidden="true">#</a> 1. Prepare the Start Environment</h3><p>Unzip the apache-iotdb-1.0.0-all-bin.zip file to cluster0 folder.</p><h3 id="_2-start-a-minimum-cluster" tabindex="-1"><a class="header-anchor" href="#_2-start-a-minimum-cluster" aria-hidden="true">#</a> 2. Start a Minimum Cluster</h3><p>Start the Cluster version with one ConfigNode and one DataNode(1C1D), and<br> the default number of replicas is one.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./cluster0/sbin/start-confignode.sh
./cluster0/sbin/start-datanode.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-verify-the-minimum-cluster" tabindex="-1"><a class="header-anchor" href="#_3-verify-the-minimum-cluster" aria-hidden="true">#</a> 3. Verify the Minimum Cluster</h3><ul><li>If everything goes well, the minimum cluster will start successfully. Then, we can start the Cli for verification.</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./cluster0/sbin/start-cli.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11),h={href:"https://iotdb.apache.org/UserGuide/Master/Maintenance-Tools/Maintenance-Command.html#show-all-node-information",target:"_blank",rel:"noopener noreferrer"},v=e("br",null,null,-1),m=t(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show cluster details
+------+----------+-------+---------------+------------+-------------------+----------+-------+--------+-------------------+-----------------+
|NodeID|  NodeType| Status|InternalAddress|InternalPort|ConfigConsensusPort|RpcAddress|RpcPort|MppPort |SchemaConsensusPort|DataConsensusPort|
+------+----------+-------+---------------+------------+-------------------+----------+-------+--------+-------------------+-----------------+
|     0|ConfigNode|Running|      127.0.0.1|       10710|              10720|          |       |        |                   |                 |
|     1|  DataNode|Running|      127.0.0.1|       10730|                   | 127.0.0.1|   6667|   10740|              10750|            10760|
+------+----------+-------+---------------+------------+-------------------+----------+-------+--------+-------------------+-----------------+
Total line number = 2
It costs 0.242s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-prepare-the-expanding-environment" tabindex="-1"><a class="header-anchor" href="#_4-prepare-the-expanding-environment" aria-hidden="true">#</a> 4. Prepare the Expanding Environment</h3><p>Unzip the apache-iotdb-1.0.0-all-bin.zip file to cluster1 and cluster2 folder.</p><h3 id="_5-modify-the-node-configuration-file" tabindex="-1"><a class="header-anchor" href="#_5-modify-the-node-configuration-file" aria-hidden="true">#</a> 5. Modify the Node Configuration file</h3><p>For folder cluster1:</p><ul><li>Modify ConfigNode configurations:</li></ul><table><thead><tr><th><strong>configuration item</strong></th><th><strong>value</strong></th></tr></thead><tbody><tr><td>cn_internal_address</td><td>127.0.0.1</td></tr><tr><td>cn_internal_port</td><td>10711</td></tr><tr><td>cn_consensus_port</td><td>10721</td></tr><tr><td>cn_target_config_node_list</td><td>127.0.0.1:10710</td></tr></tbody></table><ul><li>Modify DataNode configurations:</li></ul><table><thead><tr><th><strong>configuration item</strong></th><th><strong>value</strong></th></tr></thead><tbody><tr><td>dn_rpc_address</td><td>127.0.0.1</td></tr><tr><td>dn_rpc_port</td><td>6668</td></tr><tr><td>dn_internal_address</td><td>127.0.0.1</td></tr><tr><td>dn_internal_port</td><td>10731</td></tr><tr><td>dn_mpp_data_exchange_port</td><td>10741</td></tr><tr><td>dn_schema_region_consensus_port</td><td>10751</td></tr><tr><td>dn_data_region_consensus_port</td><td>10761</td></tr><tr><td>dn_target_config_node_list</td><td>127.0.0.1:10710</td></tr></tbody></table><p>For folder cluster2:</p><ul><li>Modify ConfigNode configurations:</li></ul><table><thead><tr><th><strong>configuration item</strong></th><th><strong>value</strong></th></tr></thead><tbody><tr><td>cn_internal_address</td><td>127.0.0.1</td></tr><tr><td>cn_internal_port</td><td>10712</td></tr><tr><td>cn_consensus_port</td><td>10722</td></tr><tr><td>cn_target_config_node_list</td><td>127.0.0.1:10710</td></tr></tbody></table><ul><li>Modify DataNode configurations:</li></ul><table><thead><tr><th><strong>configuration item</strong></th><th><strong>value</strong></th></tr></thead><tbody><tr><td>dn_rpc_address</td><td>127.0.0.1</td></tr><tr><td>dn_rpc_port</td><td>6669</td></tr><tr><td>dn_internal_address</td><td>127.0.0.1</td></tr><tr><td>dn_internal_port</td><td>10732</td></tr><tr><td>dn_mpp_data_exchange_port</td><td>10742</td></tr><tr><td>dn_schema_region_consensus_port</td><td>10752</td></tr><tr><td>dn_data_region_consensus_port</td><td>10762</td></tr><tr><td>dn_target_config_node_list</td><td>127.0.0.1:10710</td></tr></tbody></table><h3 id="_6-expanding-the-cluster" tabindex="-1"><a class="header-anchor" href="#_6-expanding-the-cluster" aria-hidden="true">#</a> 6. Expanding the Cluster</h3><p>Expanding the Cluster to three ConfigNode and three DataNode(3C3D).<br> The following commands can be executed in arbitrary order.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./cluster1/sbin/start-confignode.sh
./cluster1/sbin/start-datanode.sh
./cluster2/sbin/start-confignode.sh
./cluster2/sbin/start-datanode.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-verify-cluster-expansion" tabindex="-1"><a class="header-anchor" href="#_7-verify-cluster-expansion" aria-hidden="true">#</a> 7. Verify Cluster expansion</h3><p>Execute the <code>show cluster details</code> command, then the result is shown below:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show cluster details
+------+----------+-------+---------------+------------+-------------------+----------+-------+-------+-------------------+-----------------+
|NodeID|  NodeType| Status|InternalAddress|InternalPort|ConfigConsensusPort|RpcAddress|RpcPort|MppPort|SchemaConsensusPort|DataConsensusPort|
+------+----------+-------+---------------+------------+-------------------+----------+-------+-------+-------------------+-----------------+
|     0|ConfigNode|Running|      127.0.0.1|       10710|              10720|          |       |       |                   |                 |
|     2|ConfigNode|Running|      127.0.0.1|       10711|              10721|          |       |       |                   |                 |
|     3|ConfigNode|Running|      127.0.0.1|       10712|              10722|          |       |       |                   |                 |
|     1|  DataNode|Running|      127.0.0.1|       10730|                   | 127.0.0.1|   6667|  10740|              10750|            10760|
|     4|  DataNode|Running|      127.0.0.1|       10731|                   | 127.0.0.1|   6668|  10741|              10751|            10761|
|     5|  DataNode|Running|      127.0.0.1|       10732|                   | 127.0.0.1|   6669|  10742|              10752|            10762|
+------+----------+-------+---------------+------------+-------------------+----------+-------+-------+-------------------+-----------------+
Total line number = 6
It costs 0.012s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_8-shrinking-the-cluster" tabindex="-1"><a class="header-anchor" href="#_8-shrinking-the-cluster" aria-hidden="true">#</a> 8. Shrinking the Cluster</h3><ul><li>Remove a ConfigNode:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Removing by ip:port
./cluster0/sbin/remove-confignode.sh 127.0.0.1:10711

# Removing by Node index
./cluster0/sbin/remove-confignode.sh 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Remove a DataNode:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Removing by ip:port
./cluster0/sbin/remove-datanode.sh 127.0.0.1:6668

# Removing by Node index
./cluster0/sbin/remove-confignode.sh 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_9-verify-cluster-shrinkage" tabindex="-1"><a class="header-anchor" href="#_9-verify-cluster-shrinkage" aria-hidden="true">#</a> 9. Verify Cluster shrinkage</h3><p>Execute the <code>show cluster details</code> command, then the result is shown below:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show cluster details
+------+----------+-------+---------------+------------+-------------------+----------+-------+-------+-------------------+-----------------+
|NodeID|  NodeType| Status|InternalAddress|InternalPort|ConfigConsensusPort|RpcAddress|RpcPort|MppPort|SchemaConsensusPort|DataConsensusPort|
+------+----------+-------+---------------+------------+-------------------+----------+-------+-------+-------------------+-----------------+
|     0|ConfigNode|Running|      127.0.0.1|       10710|              10720|          |       |       |                   |                 |
|     3|ConfigNode|Running|      127.0.0.1|       10712|              10722|          |       |       |                   |                 |
|     1|  DataNode|Running|      127.0.0.1|       10730|                   | 127.0.0.1|   6667|  10740|              10750|            10760|
|     5|  DataNode|Running|      127.0.0.1|       10732|                   | 127.0.0.1|   6669|  10742|              10752|            10762|
+------+----------+-------+---------------+------------+-------------------+----------+-------+-------+-------------------+-----------------+
Total line number = 4
It costs 0.005s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28);function g(p,b){const i=r("ExternalLinkIcon");return s(),a("div",null,[o(`

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

`),u,e("ul",null,[e("li",null,[n("Execute the "),e("a",h,[n("show cluster details"),l(i)]),v,n(" command on the Cli. The result is shown below:")])]),m])}const f=d(c,[["render",g],["__file","ClusterQuickStart.html.vue"]]);export{f as default};
