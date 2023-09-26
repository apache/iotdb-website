import{_ as d,r as a,o as n,c as s,a as l,d as e,e as t,b as i,f as o}from"./app-342a215c.js";const c={},h=o('<h2 id="cluster-setup" tabindex="-1"><a class="header-anchor" href="#cluster-setup" aria-hidden="true">#</a> Cluster setup</h2><p>You can follow this document to start an IoTDB cluster.</p><h2 id="prerequisite" tabindex="-1"><a class="header-anchor" href="#prerequisite" aria-hidden="true">#</a> Prerequisite</h2><p>To use IoTDB, you need to have:</p><ol><li><p>Java &gt;= 1.8 (Please make sure the environment path has been set)</p></li><li><p>Set the max open files num as 65535 to avoid &quot;too many open files&quot; problem.</p></li></ol><h2 id="installation" tabindex="-1"><a class="header-anchor" href="#installation" aria-hidden="true">#</a> Installation</h2><p>IoTDB provides you three installation methods, you can refer to the following suggestions, choose one of them:</p>',7),u=e("li",null,"Installation from source code. If you need to modify the code yourself, you can use this method.",-1),p=e("li",null,"Installation from binary files. Download the binary files from the official website.",-1),f={href:"https://github.com/apache/iotdb/blob/master/docker/src/main",target:"_blank",rel:"noopener noreferrer"},m=o(`<h3 id="build-from-source" tabindex="-1"><a class="header-anchor" href="#build-from-source" aria-hidden="true">#</a> Build from source</h3><p>You can download the source code from:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git clone https://github.com/apache/iotdb.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The default dev branch is the master branch, If you want to use a released version, for example:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout rel/0.12
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Under the root path of iotdb:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; mvn clean package -pl cluster -am -DskipTests
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then the cluster binary version can be found at <strong>cluster/target/{iotdb-project.version}</strong></p><h3 id="download" tabindex="-1"><a class="header-anchor" href="#download" aria-hidden="true">#</a> Download</h3>`,9),b={href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"},g=o('<h2 id="directory" tabindex="-1"><a class="header-anchor" href="#directory" aria-hidden="true">#</a> Directory</h2><p>After installation, the following directories will be generated by default under the root directory of the iotdb cluster:</p><table><thead><tr><th>Directory</th><th><strong>Description</strong></th></tr></thead><tbody><tr><td>conf</td><td>Configuration file directory</td></tr><tr><td>data</td><td>Default data file directory, which can be modified in the configuration file</td></tr><tr><td>ext</td><td>Default udf directory, which can be modified in the configuration file</td></tr><tr><td>lib</td><td>Library directory</td></tr><tr><td>logs</td><td>Execution log directory</td></tr><tr><td>sbin</td><td>Script directory</td></tr><tr><td>tools</td><td>System tool directory</td></tr></tbody></table><h2 id="configurations" tabindex="-1"><a class="header-anchor" href="#configurations" aria-hidden="true">#</a> Configurations</h2><p>Before starting to use IoTDB, you need to config the configuration files first. For your convenience, we have already set the default config in the files.</p><p>In total, we provide users four kinds of configurations module:</p><ul><li>environment configuration file (<code>iotdb-env.bat</code>, <code>iotdb-env.sh</code>). The default configuration file for the environment configuration item. Users can configure the relevant system configuration items of JAVA-JVM in the file.</li><li>system configuration file (<code>iotdb-engine.properties</code>). The default configuration file for the IoTDB engine layer configuration item. Users can configure the IoTDB engine related parameters in the file, such as the precision of timestamp(<code>timestamp_precision</code>), etc. What&#39;s more, Users can configure settings of TsFile (the data files), such as the data size written to the disk per time(<code>group_size_in_byte</code>).</li><li>log configuration file (<code>logback.xml</code>). The default log configuration file, such as the log levels.</li><li><code>iotdb-cluster.properties</code>. Some configurations required by IoTDB cluster. Such as replication number(<code>default_replica_num</code>), etc.</li></ul>',7),_=e("code",null,"iotdb-engine.properties",-1),y=e("code",null,"iotdb-env.sh",-1),v=e("code",null,"iotdb-env.bat",-1),w={href:"https://github.com/apache/iotdb/blob/master/docs/UserGuide/Appendix/Config-Manual.md",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"iotdb-cluster.properties",-1),D={href:"https://github.com/apache/iotdb/blob/master/cluster/src/assembly/resources/conf/iotdb-cluster.properties",target:"_blank",rel:"noopener noreferrer"},T=o(`<p>Configuration files are located at <strong>{cluster_root_dir}/conf</strong></p><p><strong>You are necessary to modify the following configuration items of each node to start your IoTDB cluster</strong>：</p><ul><li><p>iotdb-engine.properties:</p><ul><li>rpc_address</li></ul><ul><li><p>rpc_port</p></li><li><p>base_dir</p></li><li><p>data_dirs</p></li><li><p>wal_dir</p></li></ul></li><li><p>iotdb-cluster.properties</p><ul><li><p>internal_ip</p></li><li><p>internal_meta_port</p></li><li><p>internal_data_port</p></li><li><p>cluster_info_public_port</p></li><li><p>seed_nodes</p></li><li><p>default_replica_num</p></li></ul></li></ul><h3 id="overwrite-the-configurations-of-stand-alone-node" tabindex="-1"><a class="header-anchor" href="#overwrite-the-configurations-of-stand-alone-node" aria-hidden="true">#</a> OverWrite the configurations of Stand-alone node</h3><p>Some configurations in the iotdb-engines.properties will be ignored</p><ul><li><p><code>enable_auto_create_schema</code> is always considered as <code>false</code>. Use <code>enable_auto_create_schema</code> in iotdb-cluster.properties to enable it, instead.</p></li><li><p><code>is_sync_enable</code> is always considered as <code>false</code>.</p></li></ul><h2 id="start-service" tabindex="-1"><a class="header-anchor" href="#start-service" aria-hidden="true">#</a> Start Service</h2><h3 id="start-cluster" tabindex="-1"><a class="header-anchor" href="#start-cluster" aria-hidden="true">#</a> Start Cluster</h3><p>You can deploy a distributed cluster on multiple nodes or on a single machine, the main difference being that the latter needs to handle conflicts between ports and file directories. For detail descriptions, please refer to <a href="#Configurations">Configurations</a>.</p><p>To start the service of one of the nodes, you need to execute the following commands:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Unix/OS X
&gt; nohup sbin/start-node.sh [printgc] [&lt;conf_path&gt;] &gt;/dev/null 2&gt;&amp;1 &amp;

# Windows
&gt; sbin\\start-node.bat [printgc] [&lt;conf_path&gt;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>printgc</code> means whether enable the gc and print gc logs when start the node,<br><code>&lt;conf_path&gt;</code> use the configuration file in the <code>conf_path</code> folder to override the default configuration file.</p><p><strong>If you start all the seed nodes, and all the seed nodes can contact each other without ip/port and file directory conflicts, the cluster has successfully started.</strong></p><h3 id="cluster-scalability" tabindex="-1"><a class="header-anchor" href="#cluster-scalability" aria-hidden="true">#</a> Cluster scalability</h3><p>In the process of cluster running, users can add new nodes to the cluster or delete existing nodes. At present, it only supports node by node cluster scalability, and multi node cluster scalability can be transformed into a series of single node cluster scalability operations. The cluster will hanlde new cluster extension operations only after the last cluster scalability operation is completed.</p><p><strong>Start the following script on the new node to join the cluster to add a new node:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Unix/OS X
&gt; nohup sbin/add-node.sh [printgc] [&lt;conf_path&gt;] &gt;/dev/null 2&gt;&amp;1 &amp;
;
# Windows
&gt; sbin\\add-node.bat [printgc] [&lt;conf_path&gt;] 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>printgc</code> means whether enable the gc and print gc logs when start the node,<br><code>&lt;conf_path&gt;</code> use the configuration file in the <code>conf_path</code> folder to override the default configuration file. GC log is off by default. For performance tuning, you may want to collect the GC info. GC log is stored at <code>IOTDB_HOME/logs/gc.log</code>.</p><p><strong>Start the following script on any node in the cluster to delete a node:</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Unix/OS X
&gt; sbin/remove-node.sh &lt;internal_ip&gt; &lt;internal_meta_port&gt;

# Windows
&gt; sbin\\remove-node.bat &lt;internal_ip&gt; &lt;internal_meta_port&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>internal_ip</code> means the IP address of the node to be deleted <code>internal_meta_port</code> means the meta port of the node to be deleted</p><h3 id="use-cli" tabindex="-1"><a class="header-anchor" href="#use-cli" aria-hidden="true">#</a> Use Cli</h3>`,22),I={href:"https://github.com/apache/iotdb/blob/master/docs/UserGuide/QuickStart/QuickStart.md",target:"_blank",rel:"noopener noreferrer"},N=o(`<h3 id="stop-cluster" tabindex="-1"><a class="header-anchor" href="#stop-cluster" aria-hidden="true">#</a> <strong>Stop Cluster</strong></h3><p>To stop the services of all the nodes on a single machine, you need to execute the following commands:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Unix/OS X
&gt; sbin/stop-node.sh

# Windows
&gt; sbin\\stop-node.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="appendix" tabindex="-1"><a class="header-anchor" href="#appendix" aria-hidden="true">#</a> Appendix</h2><h3 id="cluster-configuration" tabindex="-1"><a class="header-anchor" href="#cluster-configuration" aria-hidden="true">#</a> Cluster Configuration</h3><ul><li>internal_ip</li></ul><table><thead><tr><th>Name</th><th>internal_ip</th></tr></thead><tbody><tr><td>Description</td><td>IP address of internal communication between nodes in IOTDB cluster, such as heartbeat, snapshot, raft log, etc. <strong><code>internal_ip</code> is a private ip.</strong></td></tr><tr><td>Type</td><td>String</td></tr><tr><td>Default</td><td>127.0.0.1</td></tr><tr><td>Effective</td><td>After restart system, shall NOT change after cluster is up</td></tr></tbody></table><ul><li>internal_meta_port</li></ul><table><thead><tr><th>Name</th><th>internal_meta_port</th></tr></thead><tbody><tr><td>Description</td><td>IoTDB meta service port, for meta group&#39;s communication, which involves all nodes and manages the cluster configuration and storage groups. <strong>IoTDB will automatically create a heartbeat port for each meta service. The default meta service heartbeat port is <code>internal_meta_port+1</code>, please confirm that these two ports are not reserved by the system and are not occupied</strong></td></tr><tr><td>Type</td><td>Int32</td></tr><tr><td>Default</td><td>9003</td></tr><tr><td>Effective</td><td>After restart system, shall NOT change after cluster is up</td></tr></tbody></table><ul><li>internal_data_port</li></ul><table><thead><tr><th>Name</th><th>internal_data_port</th></tr></thead><tbody><tr><td>Description</td><td>IoTDB data service port, for data groups&#39; communication, each consists of one node and its replicas, managing timeseries schemas and data. <strong>IoTDB will automatically create a heartbeat port for each data service. The default data service heartbeat port is <code>internal_data_port+1</code>. Please confirm that these two ports are not reserved by the system and are not occupied</strong></td></tr><tr><td>Type</td><td>Int32</td></tr><tr><td>Default</td><td>40010</td></tr><tr><td>Effective</td><td>After restart system, shall NOT change after cluster is up</td></tr></tbody></table><ul><li>cluster_info_public_port</li></ul><table><thead><tr><th>Name</th><th>cluster_info_public_port</th></tr></thead><tbody><tr><td>Description</td><td>The port of RPC service that getting the cluster info (e.g., data partition)</td></tr><tr><td>Type</td><td>Int32</td></tr><tr><td>Default</td><td>6567</td></tr><tr><td>Effective</td><td>After restart system</td></tr></tbody></table><ul><li>open_server_rpc_port</li></ul><table><thead><tr><th>Name</th><th>open_server_rpc_port</th></tr></thead><tbody><tr><td>Description</td><td>whether open port for server module (for debug purpose), if true, the single&#39;s server rpc_port will be changed to <code>rpc_port (in iotdb-engines.properties) + 1</code></td></tr><tr><td>Type</td><td>Boolean</td></tr><tr><td>Default</td><td>False</td></tr><tr><td>Effective</td><td>After restart system</td></tr></tbody></table><ul><li>seed_nodes</li></ul><table><thead><tr><th>Name</th><th>seed_nodes</th></tr></thead><tbody><tr><td>Description</td><td>The address(internal ip) of the nodes in the cluster, <code>{IP/DOMAIN}:internal_meta_port</code> format, separated by commas; for the pseudo-distributed mode, you can fill in <code>localhost</code>, or <code>127.0.0.1</code> or mixed, but the real ip address cannot appear; for the distributed mode, real ip or hostname is supported, but <code>localhost</code> or <code>127.0.0.1</code> cannot appear. When used by <code>start-node.sh(.bat)</code>, this configuration means the nodes that will form the initial cluster, so every node that use <code>start-node.sh(.bat)</code> should have the same <code>seed\\_nodes</code>, or the building of the initial cluster will fail. WARNING: if the initial cluster is built, this should not be changed before the environment is cleaned. When used by <code>add-node.sh(.bat)</code>, this means the nodes to which that the application of joining the cluster will be sent, as all nodes can respond to a request, this configuration can be any nodes that already in the cluster, unnecessary to be the nodes that were used to build the initial cluster by <code>start-node.sh(.bat)</code>. Several nodes will be picked randomly to send the request, the number of nodes picked depends on the number of retries.</td></tr><tr><td>Type</td><td>String</td></tr><tr><td>Default</td><td>127.0.0.1:9003,127.0.0.1:9005,127.0.0.1:9007</td></tr><tr><td>Effective</td><td>After restart system</td></tr></tbody></table><ul><li>rpc_thrift_compression_enable</li></ul><table><thead><tr><th>Name</th><th>rpc_thrift_compression_enable</th></tr></thead><tbody><tr><td>Description</td><td>Whether to enable thrift compression, <strong>Note that this parameter should be consistent with each node and with the client, and also consistent with the <code>rpc_thrift_compression_enable</code> parameter in <code>iotdb-engine.properties</code></strong></td></tr><tr><td>Type</td><td>Boolean</td></tr><tr><td>Default</td><td>false</td></tr><tr><td>Effective</td><td>After restart system, must be changed with all other nodes</td></tr></tbody></table><ul><li>default_replica_num</li></ul><table><thead><tr><th>Name</th><th>default_replica_num</th></tr></thead><tbody><tr><td>Description</td><td>Number of cluster replicas of timeseries schema and data. Storage group info is always fully replicated in all nodes.</td></tr><tr><td>Type</td><td>Int32</td></tr><tr><td>Default</td><td>3</td></tr><tr><td>Effective</td><td>After restart system, shall NOT change after cluster is up</td></tr></tbody></table><ul><li>multi_raft_factor</li></ul><table><thead><tr><th>Name</th><th>multi_raft_factor</th></tr></thead><tbody><tr><td>Description</td><td>Number of raft group instances started by each data group. By default, each data group starts one raft group</td></tr><tr><td>Type</td><td>Int32</td></tr><tr><td>Default</td><td>1</td></tr><tr><td>Effective</td><td>After restart system, shall NOT change after cluster is up</td></tr></tbody></table><ul><li>cluster_name</li></ul><table><thead><tr><th>Name</th><th>cluster_name</th></tr></thead><tbody><tr><td>Description</td><td>Cluster name is used to identify different clusters, <strong><code>cluster_name</code> of all nodes in a cluster must be the same</strong></td></tr><tr><td>Type</td><td>String</td></tr><tr><td>Default</td><td>default</td></tr><tr><td>Effective</td><td>After restart system</td></tr></tbody></table><ul><li>connection_timeout_ms</li></ul><table><thead><tr><th>Name</th><th>connection_timeout_ms</th></tr></thead><tbody><tr><td>Description</td><td>Thrift socket and connection timeout between raft nodes, in milliseconds. <strong>Note that the timeout of the connection used for sending heartbeats and requesting votes will be adjust to min(heartbeat_interval_ms, connection_timeout_ms).</strong></td></tr><tr><td>Type</td><td>Int32</td></tr><tr><td>Default</td><td>20000</td></tr><tr><td>Effective</td><td>After restart system</td></tr></tbody></table><ul><li>heartbeat_interval_ms</li></ul><table><thead><tr><th>Name</th><th>heartbeat_interval_ms</th></tr></thead><tbody><tr><td>Description</td><td>The time period between heartbeat broadcasts in leader, in milliseconds</td></tr><tr><td>Type</td><td>Int64</td></tr><tr><td>Default</td><td>1000</td></tr><tr><td>Effective</td><td>After restart system</td></tr></tbody></table><ul><li>election_timeout_ms</li></ul><table><thead><tr><th>Name</th><th>election_timeout_ms</th></tr></thead><tbody><tr><td>Description</td><td>The election timeout in follower, or the time waiting for request votes in elector, in milliseconds</td></tr><tr><td>Type</td><td>Int64</td></tr><tr><td>Default</td><td>20000</td></tr><tr><td>Effective</td><td>After restart system</td></tr></tbody></table><ul><li>read_operation_timeout_ms</li></ul><table><thead><tr><th>Name</th><th>read_operation_timeout_ms</th></tr></thead><tbody><tr><td>Description</td><td>Read operation timeout time period, for internal communication only, not for the entire operation, in milliseconds</td></tr><tr><td>Type</td><td>Int32</td></tr><tr><td>Default</td><td>30000</td></tr><tr><td>Effective</td><td>After restart system</td></tr></tbody></table><ul><li>write_operation_timeout_ms</li></ul><table><thead><tr><th>Name</th><th>write_operation_timeout_ms</th></tr></thead><tbody><tr><td>Description</td><td>The write operation timeout period, for internal communication only, not for the entire operation, in milliseconds</td></tr><tr><td>Type</td><td>Int32</td></tr><tr><td>Default</td><td>30000</td></tr><tr><td>Effective</td><td>After restart system</td></tr></tbody></table><ul><li>min_num_of_logs_in_mem</li></ul><table><thead><tr><th>Name</th><th>min_num_of_logs_in_mem</th></tr></thead><tbody><tr><td>Description</td><td>The minimum number of committed logs in memory, after each log deletion, at most such number of logs will remain in memory. Increasing the number will reduce the chance to use snapshot in catch-ups, but will also increase the memory footprint</td></tr><tr><td>Type</td><td>Int32</td></tr><tr><td>Default</td><td>100</td></tr><tr><td>Effective</td><td>After restart system</td></tr></tbody></table><ul><li>max_num_of_logs_in_mem</li></ul><table><thead><tr><th>Name</th><th>max_num_of_logs_in_mem</th></tr></thead><tbody><tr><td>Description</td><td>Maximum number of committed logs in memory, when reached, a log deletion will be triggered. Increasing the number will reduce the chance to use snapshot in catch-ups, but will also increase memory footprint</td></tr><tr><td>Type</td><td>Int32</td></tr><tr><td>Default</td><td>1000</td></tr><tr><td>Effective</td><td>After restart system</td></tr></tbody></table><ul><li>log_deletion_check_interval_second</li></ul><table><thead><tr><th>Name</th><th>log_deletion_check_interval_second</th></tr></thead><tbody><tr><td>Description</td><td>The interval for checking and deleting the committed log task, which removes oldest in-memory committed logs when their size exceeds <code>min_num_of_logs_in_mem</code> , in seconds</td></tr><tr><td>Type</td><td>Int32</td></tr><tr><td>Default</td><td>60</td></tr><tr><td>Effective</td><td>After restart system</td></tr></tbody></table><ul><li>enable_auto_create_schema</li></ul><table><thead><tr><th>Name</th><th>enable_auto_create_schema</th></tr></thead><tbody><tr><td>Description</td><td>Whether creating schema automatically is enabled, this will replace the one in <code>iotdb-engine.properties</code></td></tr><tr><td>Type</td><td>BOOLEAN</td></tr><tr><td>Default</td><td>true</td></tr><tr><td>Effective</td><td>After restart system</td></tr></tbody></table><ul><li>consistency_level</li></ul><table><thead><tr><th>Name</th><th>consistency_level</th></tr></thead><tbody><tr><td>Description</td><td>Consistency level, now three consistency levels are supported: strong, mid, and weak. Strong consistency means the server will first try to synchronize with the leader to get the newest data, if failed(timeout), directly report an error to the user; While mid consistency means the server will first try to synchronize with the leader, but if failed(timeout), it will give up and just use current data it has cached before; Weak consistency does not synchronize with the leader and simply use the local data</td></tr><tr><td>Type</td><td>strong, mid, weak</td></tr><tr><td>Default</td><td>mid</td></tr><tr><td>Effective</td><td>After restart system</td></tr></tbody></table><ul><li>is_enable_raft_log_persistence</li></ul><table><thead><tr><th>Name</th><th>is_enable_raft_log_persistence</th></tr></thead><tbody><tr><td>Description</td><td>Whether to enable raft log persistence</td></tr><tr><td>Type</td><td>BOOLEAN</td></tr><tr><td>Default</td><td>true</td></tr><tr><td>Effective</td><td>After restart system</td></tr></tbody></table>`,47);function S(A,k){const r=a("ExternalLinkIcon");return n(),s("div",null,[l(`

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

`),h,e("ul",null,[u,p,e("li",null,[t("Using Docker：The path to the dockerfile is "),e("a",f,[t("github"),i(r)])])]),m,e("p",null,[t("You can download the binary file from: "),e("a",b,[t("Download Page"),i(r)])]),g,e("p",null,[t("For detailed description of the two configuration files "),_,t(", "),y,t("/"),v,t(", please refer to "),e("a",w,[t("Configuration Manual"),i(r)]),t(". The configuration items of IoTDB cluster are in the "),x,t(" file, you can also review the comments in the "),e("a",D,[t("configuration file"),i(r)]),t(" directly or you can refer to [Cluster Configuration](#Cluster Configuration).")]),T,e("p",null,[t("please refer to "),e("a",I,[t("QuickStart"),i(r)]),t(". You can establish a connection with any node in the cluster according to the rpc_address and rpc_port.")]),N])}const C=d(c,[["render",S],["__file","Cluster-Setup.html.vue"]]);export{C as default};
