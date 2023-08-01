import{_ as i,r as s,o as r,c as a,a as l,d as e,e as t,b as o,f as n}from"./app-1ba67e78.js";const c={},u=n(`<h1 id="快速上手" tabindex="-1"><a class="header-anchor" href="#快速上手" aria-hidden="true">#</a> 快速上手</h1><p>以本地环境为例，演示 IoTDB 集群的启动、扩容与缩容。</p><p><strong>注意：本文档为使用本地不同端口，进行伪分布式环境部署的教程，仅用于练习。在真实环境部署时，一般不需要修改节点端口，仅需配置节点 IPV4 地址或域名即可。</strong></p><h2 id="_1-准备启动环境" tabindex="-1"><a class="header-anchor" href="#_1-准备启动环境" aria-hidden="true">#</a> 1. 准备启动环境</h2><p>解压 apache-iotdb-1.0.0-all-bin.zip 至 cluster0 目录。</p><h2 id="_2-启动最小集群" tabindex="-1"><a class="header-anchor" href="#_2-启动最小集群" aria-hidden="true">#</a> 2. 启动最小集群</h2><p>在 Linux 环境中，部署 1 个 ConfigNode 和 1 个 DataNode（1C1D）集群版，默认 1 副本：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./cluster0/sbin/start-confignode.sh
./cluster0/sbin/start-datanode.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-验证最小集群" tabindex="-1"><a class="header-anchor" href="#_3-验证最小集群" aria-hidden="true">#</a> 3. 验证最小集群</h2><ul><li>最小集群启动成功，启动 Cli 进行验证：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./cluster0/sbin/start-cli.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,11),h={href:"https://iotdb.apache.org/zh/UserGuide/Master/Maintenance-Tools/Maintenance-Command.html#%E6%9F%A5%E7%9C%8B%E5%85%A8%E9%83%A8%E8%8A%82%E7%82%B9%E4%BF%A1%E6%81%AF",target:"_blank",rel:"noopener noreferrer"},v=e("br",null,null,-1),b=n(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show cluster details
+------+----------+-------+---------------+------------+-------------------+----------+-------+--------+-------------------+-----------------+
|NodeID|  NodeType| Status|InternalAddress|InternalPort|ConfigConsensusPort|RpcAddress|RpcPort|MppPort |SchemaConsensusPort|DataConsensusPort|
+------+----------+-------+---------------+------------+-------------------+----------+-------+--------+-------------------+-----------------+
|     0|ConfigNode|Running|      127.0.0.1|       10710|              10720|          |       |        |                   |                 |
|     1|  DataNode|Running|      127.0.0.1|       10730|                   | 127.0.0.1|   6667|   10740|              10750|            10760|
+------+----------+-------+---------------+------------+-------------------+----------+-------+--------+-------------------+-----------------+
Total line number = 2
It costs 0.242s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-准备扩容环境" tabindex="-1"><a class="header-anchor" href="#_4-准备扩容环境" aria-hidden="true">#</a> 4. 准备扩容环境</h2><p>解压 apache-iotdb-1.0.0-all-bin.zip 至 cluster1 目录和 cluster2 目录</p><h2 id="_5-修改节点配置文件" tabindex="-1"><a class="header-anchor" href="#_5-修改节点配置文件" aria-hidden="true">#</a> 5. 修改节点配置文件</h2><p>对于 cluster1 目录：</p><ul><li>修改 ConfigNode 配置：</li></ul><table><thead><tr><th><strong>配置项</strong></th><th><strong>值</strong></th></tr></thead><tbody><tr><td>cn_internal_address</td><td>127.0.0.1</td></tr><tr><td>cn_internal_port</td><td>10711</td></tr><tr><td>cn_consensus_port</td><td>10721</td></tr><tr><td>cn_target_config_node_list</td><td>127.0.0.1:10710</td></tr></tbody></table><ul><li>修改 DataNode 配置：</li></ul><table><thead><tr><th><strong>配置项</strong></th><th><strong>值</strong></th></tr></thead><tbody><tr><td>dn_rpc_address</td><td>127.0.0.1</td></tr><tr><td>dn_rpc_port</td><td>6668</td></tr><tr><td>dn_internal_address</td><td>127.0.0.1</td></tr><tr><td>dn_internal_port</td><td>10731</td></tr><tr><td>dn_mpp_data_exchange_port</td><td>10741</td></tr><tr><td>dn_schema_region_consensus_port</td><td>10751</td></tr><tr><td>dn_data_region_consensus_port</td><td>10761</td></tr><tr><td>dn_target_config_node_list</td><td>127.0.0.1:10710</td></tr></tbody></table><p>对于 cluster2 目录：</p><ul><li>修改 ConfigNode 配置：</li></ul><table><thead><tr><th><strong>配置项</strong></th><th><strong>值</strong></th></tr></thead><tbody><tr><td>cn_internal_address</td><td>127.0.0.1</td></tr><tr><td>cn_internal_port</td><td>10712</td></tr><tr><td>cn_consensus_port</td><td>10722</td></tr><tr><td>cn_target_config_node_list</td><td>127.0.0.1:10710</td></tr></tbody></table><ul><li>修改 DataNode 配置：</li></ul><table><thead><tr><th><strong>配置项</strong></th><th><strong>值</strong></th></tr></thead><tbody><tr><td>dn_rpc_address</td><td>127.0.0.1</td></tr><tr><td>dn_rpc_port</td><td>6669</td></tr><tr><td>dn_internal_address</td><td>127.0.0.1</td></tr><tr><td>dn_internal_port</td><td>10732</td></tr><tr><td>dn_mpp_data_exchange_port</td><td>10742</td></tr><tr><td>dn_schema_region_consensus_port</td><td>10752</td></tr><tr><td>dn_data_region_consensus_port</td><td>10762</td></tr><tr><td>dn_target_config_node_list</td><td>127.0.0.1:10710</td></tr></tbody></table><h2 id="_6-集群扩容" tabindex="-1"><a class="header-anchor" href="#_6-集群扩容" aria-hidden="true">#</a> 6. 集群扩容</h2><p>将集群扩容至 3 个 ConfigNode 和 3 个 DataNode（3C3D）集群版，<br> 指令执行顺序为先启动 ConfigNode，再启动 DataNode：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./cluster1/sbin/start-confignode.sh
./cluster2/sbin/start-confignode.sh
./cluster1/sbin/start-datanode.sh
./cluster2/sbin/start-datanode.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-验证扩容结果" tabindex="-1"><a class="header-anchor" href="#_7-验证扩容结果" aria-hidden="true">#</a> 7. 验证扩容结果</h2><p>在 Cli 执行 <code>show cluster details</code>，结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show cluster details
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-集群缩容" tabindex="-1"><a class="header-anchor" href="#_8-集群缩容" aria-hidden="true">#</a> 8. 集群缩容</h2><ul><li>缩容一个 ConfigNode：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 使用 ip:port 移除
./cluster0/sbin/remove-confignode.sh 127.0.0.1:10711

# 使用节点编号移除
./cluster0/sbin/remove-confignode.sh 2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>缩容一个 DataNode：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 使用 ip:port 移除
./cluster0/sbin/remove-datanode.sh 127.0.0.1:6668

# 使用节点编号移除
./cluster0/sbin/remove-confignode.sh 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-验证缩容结果" tabindex="-1"><a class="header-anchor" href="#_9-验证缩容结果" aria-hidden="true">#</a> 9. 验证缩容结果</h2><p>在 Cli 执行 <code>show cluster details</code>，结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show cluster details
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28);function g(m,_){const d=s("ExternalLinkIcon");return r(),a("div",null,[l(`

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

`),u,e("ul",null,[e("li",null,[t("在 Cli 执行 "),e("a",h,[t("show cluster details"),o(d)]),v,t(" 指令，结果如下所示：")])]),b])}const f=i(c,[["render",g],["__file","ClusterQuickStart.html.vue"]]);export{f as default};
