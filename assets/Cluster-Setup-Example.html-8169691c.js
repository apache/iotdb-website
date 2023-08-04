import{_ as a,r as s,o as d,c as r,a as o,d as e,e as i,b as l,f as n}from"./app-e22bde73.js";const c={},u=n(`<h2 id="prerequisite" tabindex="-1"><a class="header-anchor" href="#prerequisite" aria-hidden="true">#</a> Prerequisite</h2><p>Note: Please install MinGW or WSL or git bash if you are using Windows.</p><h2 id="example-of-distributed-configurations-for-1-node-and-1-replica" tabindex="-1"><a class="header-anchor" href="#example-of-distributed-configurations-for-1-node-and-1-replica" aria-hidden="true">#</a> Example of distributed configurations for 1 node and 1 replica</h2><h3 id="compile-from-source-code" tabindex="-1"><a class="header-anchor" href="#compile-from-source-code" aria-hidden="true">#</a> Compile from source code:</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mvn clean package -DskipTests
chmod -R 777 ./cluster/target/
nohup ./cluster/target/iotdb-cluster-0.13.0-SNAPSHOT/sbin/start-node.sh &gt;/dev/null 2&gt;&amp;1 &amp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="use-the-official-website-release-version" tabindex="-1"><a class="header-anchor" href="#use-the-official-website-release-version" aria-hidden="true">#</a> Use the official website release version:</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -O https://downloads.apache.org/iotdb/0.12.1/apache-iotdb-0.12.1-cluster-bin.zip
unzip apache-iotdb-0.12.1-cluster-bin.zip
cd apache-iotdb-0.12.1-cluster-bin
sed -i -e &#39;s/^seed_nodes=127.0.0.1:9003,127.0.0.1:9005,127.0.0.1:9007$/seed_nodes=127.0.0.1:9003/g&#39; conf/iotdb-cluster.properties
sed -i -e &#39;s/^default_replica_num=3$/default_replica_num=1/g&#39; conf/iotdb-cluster.properties
nohup ./sbin/start-node.sh &gt;/dev/null 2&gt;&amp;1 &amp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="example-of-distributed-configurations-for-3-nodes-and-1-replica-on-a-single-machine" tabindex="-1"><a class="header-anchor" href="#example-of-distributed-configurations-for-3-nodes-and-1-replica-on-a-single-machine" aria-hidden="true">#</a> Example of distributed configurations for 3 nodes and 1 replica on a single machine</h2><h3 id="configurations" tabindex="-1"><a class="header-anchor" href="#configurations" aria-hidden="true">#</a> Configurations</h3><p>You can start multiple instances on a single machine by modifying the configurations yourself to handling port and file directory conflicts.</p><p><strong>Node1</strong>:<strong>(default)</strong></p><p><em><strong>iotdb-cluster.properties</strong></em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>seed_nodes = 127.0.0.1:9003,127.0.0.1:9005,127.0.0.1:9007
default_replica_num = 1
internal_meta_port = 9003
internal_data_port = 40010
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>iotdb-engine.properties</strong></em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rpc_port=6667
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Node2</strong>:</p><p><em><strong>iotdb-cluster.properties</strong></em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>seed_nodes = 127.0.0.1:9003,127.0.0.1:9005,127.0.0.1:9007
default_replica_num = 1
internal_meta_port = 9005
internal_data_port = 40012
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>iotdb-engine.properties</strong></em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rpc_port=6669
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>Node3</strong>:</p><p><em><strong>iotdb-cluster.properties</strong></em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>seed_nodes = 127.0.0.1:9003,127.0.0.1:9005,127.0.0.1:9007
default_replica_num = 1
internal_meta_port = 9007
internal_data_port = 40014
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>iotdb-engine.properties</strong></em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rpc_port=6671
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="compile-from-source-code-1" tabindex="-1"><a class="header-anchor" href="#compile-from-source-code-1" aria-hidden="true">#</a> Compile from source code:</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mvn clean package -DskipTests
chmod -R 777 ./cluster/target/
nohup ./cluster/target/iotdb-cluster-0.13.0-SNAPSHOT/sbin/start-node.sh ./cluster/target/test-classes/node1conf/ &gt;/dev/null 2&gt;&amp;1 &amp;
nohup ./cluster/target/iotdb-cluster-0.13.0-SNAPSHOT/sbin/start-node.sh ./cluster/target/test-classes/node2conf/ &gt;/dev/null 2&gt;&amp;1 &amp;
nohup ./cluster/target/iotdb-cluster-0.13.0-SNAPSHOT/sbin/start-node.sh ./cluster/target/test-classes/node3conf/ &gt;/dev/null 2&gt;&amp;1 &amp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="use-the-official-website-release-version-1" tabindex="-1"><a class="header-anchor" href="#use-the-official-website-release-version-1" aria-hidden="true">#</a> Use the official website release version:</h3><p>Download the release version:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -O https://downloads.apache.org/iotdb/0.12.1/apache-iotdb-0.12.1-cluster-bin.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Unzip the package:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>unzip apache-iotdb-0.12.1-cluster-bin.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Enter IoTDB cluster root directory:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd apache-iotdb-0.12.1-cluster-bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Set default_replica_num = 1:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sed -i -e &#39;s/^default_replica_num=3$/default_replica_num=1/g&#39; conf/iotdb-cluster.properties
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Create conf_dir for node2 and node3:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cp -r conf node2_conf
cp -r conf node3_conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Handle port and file directory conflicts:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sed -i -e &#39;s/^internal_meta_port=9003$/internal_meta_port=9005/g&#39; -e &#39;s/^internal_data_port=40010$/internal_data_port=40012/g&#39; node2_conf/iotdb-cluster.properties
sed -i -e &#39;s/^internal_meta_port=9003$/internal_meta_port=9007/g&#39; -e &#39;s/^internal_data_port=40010$/internal_data_port=40014/g&#39; node3_conf/iotdb-cluster.properties
sed -i -e &#39;s/^rpc_port=6667$/rpc_port=6669/g&#39; -e node2_conf/iotdb-engine.properties
sed -i -e &#39;s/^rpc_port=6667$/rpc_port=6671/g&#39; -e node3_conf/iotdb-engine.properties
sed -i -e &#39;s/^# data_dirs=data\\/data$/data_dirs=node2\\/data/g&#39; -e &#39;s/^# wal_dir=data\\/wal$/wal_dir=node2\\/wal/g&#39; -e &#39;s/^# tracing_dir=data\\/tracing$/tracing_dir=node2\\/tracing/g&#39; -e &#39;s/^# system_dir=data\\/system$/system_dir=node2\\/system/g&#39; -e &#39;s/^# udf_root_dir=ext\\/udf$/udf_root_dir=node2\\/ext\\/udf/g&#39; -e &#39;s/^# index_root_dir=data\\/index$/index_root_dir=node2\\/index/g&#39; node2_conf/iotdb-engine.properties
sed -i -e &#39;s/^# data_dirs=data\\/data$/data_dirs=node3\\/data/g&#39; -e &#39;s/^# wal_dir=data\\/wal$/wal_dir=node3\\/wal/g&#39; -e &#39;s/^# tracing_dir=data\\/tracing$/tracing_dir=node3\\/tracing/g&#39; -e &#39;s/^# system_dir=data\\/system$/system_dir=node3\\/system/g&#39; -e &#39;s/^# udf_root_dir=ext\\/udf$/udf_root_dir=node3\\/ext\\/udf/g&#39; -e &#39;s/^# index_root_dir=data\\/index$/index_root_dir=node3\\/index/g&#39; node3_conf/iotdb-engine.properties
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>You can modify the configuration items by yourself instead of using &quot;sed&quot; command</strong></p><p>Start the three nodes with their configurations:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nohup ./sbin/start-node.sh &gt;/dev/null 2&gt;&amp;1 &amp;
nohup ./sbin/start-node.sh ./node2_conf/ &gt;/dev/null 2&gt;&amp;1 &amp;
nohup ./sbin/start-node.sh ./node3_conf/ &gt;/dev/null 2&gt;&amp;1 &amp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="example-of-distributed-configurations-for-3-nodes-and-3-replicas" tabindex="-1"><a class="header-anchor" href="#example-of-distributed-configurations-for-3-nodes-and-3-replicas" aria-hidden="true">#</a> Example of distributed configurations for 3 nodes and 3 replicas</h2><p>Suppose we need to deploy the distributed IoTDB on three physical nodes, A, B, and C, whose public network IP is <em>A_public_IP</em>, <em>B_public_IP</em>, and <em>C_public_IP</em>, and private network IP is <em>A_private_IP</em>, <em>B_private_IP</em>, and <em>C_private_IP</em>.</p><p>Note: If there is no public network IP or private network IP, both can be <strong>set to the same</strong>, just need to ensure that the client can access the server. The private ip corresponds to configuration item<code>internal_ ip</code>in iotdb-cluster.properties, and the public ip corresponds to configuration item<code> rpc_ address</code> in iotdb-engine.properties.</p><h3 id="configurations-1" tabindex="-1"><a class="header-anchor" href="#configurations-1" aria-hidden="true">#</a> Configurations</h3><p><strong>NodeA</strong>:</p><p><em><strong>iotdb-cluster.properties</strong></em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>seed_nodes = A_private_Ip:9003,B_private_Ip:9003,C_private_Ip:9003
default_replica_num = 3
internal_meta_port = 9003
internal_data_port = 40010
internal_ip = A_private_Ip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>iotdb-engine.properties</strong></em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rpc_port = 6667
rpc_address = A_public_ip 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>NodeB</strong>:</p><p><em><strong>iotdb-cluster.properties</strong></em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>seed_nodes = A_private_Ip:9003,B_private_Ip:9003,C_private_Ip:9003
default_replica_num = 3
internal_meta_port = 9003
internal_data_port = 40010
internal_ip = B_private_Ip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>iotdb-engine.properties</strong></em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rpc_port = 6667
rpc_address = B_public_ip 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>NodeC</strong>:</p><p><em><strong>iotdb-cluster.properties</strong></em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>seed_nodes = A_private_Ip:9003,B_private_Ip:9003,C_private_Ip:9003
default_replica_num = 3
internal_meta_port = 9003
internal_data_port = 40010
internal_ip = C_private_Ip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>iotdb-engine.properties</strong></em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rpc_port = 6667
rpc_address = C_public_ip 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="start-iotdb-cluster" tabindex="-1"><a class="header-anchor" href="#start-iotdb-cluster" aria-hidden="true">#</a> Start IoTDB cluster</h3><p>The operation steps are as follows:</p>`,64),p={href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"},m=e("li",null,[e("p",null,"Make sure ports 6567, 6667, 9003, 9004, 40010, 40011 and 31999 are open on all three nodes.")],-1),v=e("li",null,[e("p",null,"Send the package to all servers.")],-1),g=e("li",null,[e("p",null,"Modify the configuration items.")],-1),b=e("li",null,[e("p",null,"Run sh sbin/start-node.sh on each of the three nodes (or run in the background).")],-1),h=n(`<h3 id="compile-from-source-code-2" tabindex="-1"><a class="header-anchor" href="#compile-from-source-code-2" aria-hidden="true">#</a> Compile from source code:</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mvn clean package -DskipTests
chmod -R 777 ./cluster/target/
cd cluster/target/iotdb-cluster-0.13.0-SNAPSHOT/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="use-the-official-website-release-version-2" tabindex="-1"><a class="header-anchor" href="#use-the-official-website-release-version-2" aria-hidden="true">#</a> Use the official website release version:</h3><p>Download the release version:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -O https://downloads.apache.org/iotdb/0.12.4/apache-iotdb-0.12.4-cluster-bin.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Unzip the package:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>unzip apache-iotdb-0.12.4-cluster-bin.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Enter IoTDB cluster root directory:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd apache-iotdb-0.12.4-cluster-bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Set default_replica_num = 3: default value of this configuration item is 3</p><p>Set internal_ip = private ip of node (e.g. 192.168.1.1)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sed -i -e &#39;s/^internal_ip=127.0.0.1$/internal_ip=192.168.1.1/g&#39; conf/iotdb-cluster.properties
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Set seed_node = A_private_Ip:9003,B_private_Ip:9003,C_private_Ip:9003 (e.g. private ip of all three nodes are 192.168.1.1,192.168.1.2,192.168.1.3)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sed -i -e &#39;s/^seed_nodes=127.0.0.1:9003,127.0.0.1:9005,127.0.0.1:9007$/seed_nodes=192.168.1.1:9003,192.168.1.2:9003,192.168.1.3:9003/g&#39; conf/iotdb-cluster.properties
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Set rpc_address = public ip of node (e.g. 192.168.1.1)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sed -i -e &#39;s/^rpc_address=127.0.0.1$/rpc_address=192.168.1.1/g&#39; conf/iotdb-engine.properties
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>You can modify the configuration items by yourself instead of using &quot;sed&quot; command</strong></p><p>Start the three nodes with their configurations:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nohup ./sbin/start-node.sh &gt;/dev/null 2&gt;&amp;1 &amp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,19);function _(f,x){const t=s("ExternalLinkIcon");return d(),r("div",null,[o(`

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

`),u,e("ul",null,[e("li",null,[e("p",null,[i("Use 'mvn clean package -pl cluster -am -DskipTests' to compile the distributed module or directly go into the "),e("a",p,[i("website"),l(t)]),i(" to download the latest version.")])]),m,v,g,b]),h])}const I=a(c,[["render",_],["__file","Cluster-Setup-Example.html.vue"]]);export{I as default};
