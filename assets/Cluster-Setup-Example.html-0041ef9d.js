import{_ as d,r as t,o as s,c as r,a as l,d as e,e as n,b as o,f as i}from"./app-2b491e7b.js";const c={},p=i(`<h2 id="集群搭建示例" tabindex="-1"><a class="header-anchor" href="#集群搭建示例" aria-hidden="true">#</a> 集群搭建示例</h2><h3 id="前提条件" tabindex="-1"><a class="header-anchor" href="#前提条件" aria-hidden="true">#</a> 前提条件</h3><p>如果您在使用 Windows 系统，请安装 MinGW，WSL 或者 git bash。</p><h3 id="_1-节点-1-副本分布式搭建示例" tabindex="-1"><a class="header-anchor" href="#_1-节点-1-副本分布式搭建示例" aria-hidden="true">#</a> 1 节点 1 副本分布式搭建示例</h3><h4 id="源码编译" tabindex="-1"><a class="header-anchor" href="#源码编译" aria-hidden="true">#</a> 源码编译：</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mvn clean package -DskipTests
chmod -R 777 ./cluster/target/
nohup ./cluster/target/iotdb-cluster-0.13.0-SNAPSHOT/sbin/start-node.sh &gt;/dev/null 2&gt;&amp;1 &amp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用官网发布版本" tabindex="-1"><a class="header-anchor" href="#使用官网发布版本" aria-hidden="true">#</a> 使用官网发布版本：</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -O https://downloads.apache.org/iotdb/0.12.1/apache-iotdb-0.12.1-cluster-bin.zip
unzip apache-iotdb-0.12.1-cluster-bin.zip
cd apache-iotdb-0.12.1-cluster-bin
sed -i -e &#39;s/^seed_nodes=127.0.0.1:9003,127.0.0.1:9005,127.0.0.1:9007$/seed_nodes=127.0.0.1:9003/g&#39; conf/iotdb-cluster.properties
sed -i -e &#39;s/^default_replica_num=3$/default_replica_num=1/g&#39; conf/iotdb-cluster.properties
nohup ./sbin/start-node.sh &gt;/dev/null 2&gt;&amp;1 &amp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="单机部署-3-节点-1-副本示例" tabindex="-1"><a class="header-anchor" href="#单机部署-3-节点-1-副本示例" aria-hidden="true">#</a> 单机部署 3 节点 1 副本示例</h3><h4 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h4><p>通过自己修改配置来处理端口和文件目录冲突，可以在一台机器上启动多个实例。</p><p><strong>节点1</strong>:<strong>(默认)</strong></p><p><em><strong>iotdb-cluster.properties</strong></em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>seed_nodes = 127.0.0.1:9003,127.0.0.1:9005,127.0.0.1:9007
default_replica_num = 1
internal_meta_port = 9003
internal_data_port = 40010
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>iotdb-engine.properties</strong></em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rpc_port=6667
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>节点2</strong>:</p><p><em><strong>iotdb-cluster.properties</strong></em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>seed_nodes = 127.0.0.1:9003,127.0.0.1:9005,127.0.0.1:9007
default_replica_num = 1
internal_meta_port = 9005
internal_data_port = 40012
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>iotdb-engine.properties</strong></em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rpc_port=6669
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>节点3</strong>:</p><p><em><strong>iotdb-cluster.properties</strong></em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>seed_nodes = 127.0.0.1:9003,127.0.0.1:9005,127.0.0.1:9007
default_replica_num = 1
internal_meta_port = 9007
internal_data_port = 40014
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>iotdb-engine.properties</strong></em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rpc_port=6671
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="源码编译-1" tabindex="-1"><a class="header-anchor" href="#源码编译-1" aria-hidden="true">#</a> 源码编译：</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mvn clean package -DskipTests
chmod -R 777 ./cluster/target/
nohup ./cluster/target/iotdb-cluster-0.13.0-SNAPSHOT/sbin/start-node.sh ./cluster/target/test-classes/node1conf/ &gt;/dev/null 2&gt;&amp;1 &amp;
nohup ./cluster/target/iotdb-cluster-0.13.0-SNAPSHOT/sbin/start-node.sh ./cluster/target/test-classes/node2conf/ &gt;/dev/null 2&gt;&amp;1 &amp;
nohup ./cluster/target/iotdb-cluster-0.13.0-SNAPSHOT/sbin/start-node.sh ./cluster/target/test-classes/node3conf/ &gt;/dev/null 2&gt;&amp;1 &amp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用官网发布版本-1" tabindex="-1"><a class="header-anchor" href="#使用官网发布版本-1" aria-hidden="true">#</a> 使用官网发布版本:</h4><p>下载发布版本:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -O https://downloads.apache.org/iotdb/0.12.1/apache-iotdb-0.12.1-cluster-bin.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解压压缩包:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>unzip apache-iotdb-0.12.1-cluster-bin.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>进入IoTDB集群根目录:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd apache-iotdb-0.12.1-cluster-bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置 default_replica_num = 1:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sed -i -e &#39;s/^default_replica_num=3$/default_replica_num=1/g&#39; conf/iotdb-cluster.properties
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>为节点2，节点3创建conf_dir:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cp -r conf node2_confcp -r conf node3_conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解决端口和文件目录冲突:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sed -i -e &#39;s/^internal_meta_port=9003$/internal_meta_port=9005/g&#39; -e &#39;s/^internal_data_port=40010$/internal_data_port=40012/g&#39; node2_conf/iotdb-cluster.properties
sed -i -e &#39;s/^internal_meta_port=9003$/internal_meta_port=9007/g&#39; -e &#39;s/^internal_data_port=40010$/internal_data_port=40014/g&#39; node3_conf/iotdb-cluster.properties
sed -i -e &#39;s/^rpc_port=6667$/rpc_port=6669/g&#39; -e node2_conf/iotdb-engine.properties
sed -i -e &#39;s/^rpc_port=6667$/rpc_port=6671/g&#39; -e node3_conf/iotdb-engine.properties
sed -i -e &#39;s/^# data_dirs=data\\/data$/data_dirs=node2\\/data/g&#39; -e &#39;s/^# wal_dir=data\\/wal$/wal_dir=node2\\/wal/g&#39; -e &#39;s/^# tracing_dir=data\\/tracing$/tracing_dir=node2\\/tracing/g&#39; -e &#39;s/^# system_dir=data\\/system$/system_dir=node2\\/system/g&#39; -e &#39;s/^# udf_root_dir=ext\\/udf$/udf_root_dir=node2\\/ext\\/udf/g&#39; -e &#39;s/^# index_root_dir=data\\/index$/index_root_dir=node2\\/index/g&#39; node2_conf/iotdb-engine.properties
sed -i -e &#39;s/^# data_dirs=data\\/data$/data_dirs=node3\\/data/g&#39; -e &#39;s/^# wal_dir=data\\/wal$/wal_dir=node3\\/wal/g&#39; -e &#39;s/^# tracing_dir=data\\/tracing$/tracing_dir=node3\\/tracing/g&#39; -e &#39;s/^# system_dir=data\\/system$/system_dir=node3\\/system/g&#39; -e &#39;s/^# udf_root_dir=ext\\/udf$/udf_root_dir=node3\\/ext\\/udf/g&#39; -e &#39;s/^# index_root_dir=data\\/index$/index_root_dir=node3\\/index/g&#39; node3_conf/iotdb-engine.properties
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>你可以自己修改配置项而不使用“sed”命令</strong></p><p>根据配置文件路径启动三个节点:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nohup ./sbin/start-node.sh &gt;/dev/null 2&gt;&amp;1 &amp;nohup ./sbin/start-node.sh ./node2_conf/ &gt;/dev/null 2&gt;&amp;1 &amp;nohup ./sbin/start-node.sh ./node3_conf/ &gt;/dev/null 2&gt;&amp;1 &amp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_3-节点-3-副本分布式搭建示例" tabindex="-1"><a class="header-anchor" href="#_3-节点-3-副本分布式搭建示例" aria-hidden="true">#</a> 3 节点 3 副本分布式搭建示例</h3><p>假设我们需要在三个物理节点上部署分布式 IoTDB，这三个节点分别为 A, B 和 C，其公网 ip 分别为 A_public_IP*, <em>B_public_IP</em>, and <em>C_public_IP</em>，私网 ip 分别为 <em>A_private_IP</em>, <em>B_private_IP</em>, and <em>C_private_IP</em>.</p><p>注：如果没有公网 ip 或者私网 ip 则两者<strong>设置成一致</strong>即可，只需要保证客户端能够访问到服务端即可。 私网ip对应iotdb-cluster.properties中的<code>internal_ip</code>配置项，公网ip对应iotdb-engine.properties中的<code>rpc_address</code>配置项。</p><h4 id="配置-1" tabindex="-1"><a class="header-anchor" href="#配置-1" aria-hidden="true">#</a> 配置</h4><p><strong>节点A</strong>:</p><p><em><strong>iotdb-cluster.properties</strong></em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>seed_nodes = A_private_Ip:9003,B_private_Ip:9003,C_private_Ip:9003
default_replica_num = 3
internal_meta_port = 9003
internal_data_port = 40010
internal_ip = A_private_Ip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>iotdb-engine.properties</strong></em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rpc_port = 6667
rpc_address = A_public_ip 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>节点B</strong>:</p><p><em><strong>iotdb-cluster.properties</strong></em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>seed_nodes = A_private_Ip:9003,B_private_Ip:9003,C_private_Ip:9003
default_replica_num = 3
internal_meta_port = 9003
internal_data_port = 40010
internal_ip = B_private_Ip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>iotdb-engine.properties</strong></em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rpc_port = 6667
rpc_address = B_public_ip 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>节点C</strong>:</p><p><em><strong>iotdb-cluster.properties</strong></em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>seed_nodes = A_private_Ip:9003,B_private_Ip:9003,C_private_Ip:9003
default_replica_num = 3
internal_meta_port = 9003
internal_data_port = 40010
internal_ip = C_private_Ip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>iotdb-engine.properties</strong></em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>rpc_port = 6667
rpc_address = C_public_ip 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="启动iotdb集群" tabindex="-1"><a class="header-anchor" href="#启动iotdb集群" aria-hidden="true">#</a> 启动IoTDB集群</h4><p>以下为操作步骤：</p>`,65),u=e("code",null,"mvn clean package -pl cluster -am -DskipTests",-1),v={href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"},m=e("li",null,[e("p",null,"保证三个节点的 6567, 6667, 9003, 9004, 40010, 40011 和 31999 端口是开放的。")],-1),g=e("li",null,[e("p",null,"将包上传到所有的服务器上。")],-1),b=e("li",null,[e("p",null,"修改配置项。")],-1),_=e("li",null,[e("p",null,"在 3 个节点上分别运行 sh sbin/start-node.sh 即可（后台运行也可）。")],-1),h=i(`<h4 id="源码编译-2" tabindex="-1"><a class="header-anchor" href="#源码编译-2" aria-hidden="true">#</a> 源码编译：</h4><p><strong>在三个节点上分别执行操作</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mvn clean package -DskipTests
chmod -R 777 ./cluster/target/
cd cluster/target/iotdb-cluster-0.13.0-SNAPSHOT/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="使用官网发布版本-2" tabindex="-1"><a class="header-anchor" href="#使用官网发布版本-2" aria-hidden="true">#</a> 使用官网发布版本:</h4><p><strong>在三个节点上分别执行操作</strong></p><p>下载发布版本:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>curl -O https://downloads.apache.org/iotdb/0.12.4/apache-iotdb-0.12.4-cluster-bin.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>解压压缩包:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>unzip apache-iotdb-0.12.4-cluster-bin.zip
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>进入IoTDB集群根目录:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cd apache-iotdb-0.12.4-cluster-bin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置 default_replica_num = 3: 配置文件中默认为3，无需修改</p><p>设置 internal_ip = 节点的私有ip (以192.168.1.1为例)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sed -i -e &#39;s/^internal_ip=127.0.0.1$/internal_ip=192.168.1.1/g&#39; conf/iotdb-cluster.properties
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置 seed_node = A_private_Ip:9003,B_private_Ip:9003,C_private_Ip:9003 (三个节点ip分别为192.168.1.1,192.168.1.2,192.168.1.3为例)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sed -i -e &#39;s/^seed_nodes=127.0.0.1:9003,127.0.0.1:9005,127.0.0.1:9007$/seed_nodes=192.168.1.1:9003,192.168.1.2:9003,192.168.1.3:9003/g&#39; conf/iotdb-cluster.properties
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>设置 rpc_address = 节点的公有ip (以192.168.1.1为例)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>sed -i -e &#39;s/^rpc_address=127.0.0.1$/rpc_address=192.168.1.1/g&#39; conf/iotdb-engine.properties
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>你可以自己修改配置项而不使用“sed”命令</strong></p><p>根据配置文件路径启动三个节点:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nohup ./sbin/start-node.sh &gt;/dev/null 2&gt;&amp;1 &amp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,21);function x(f,I){const a=t("ExternalLinkIcon");return s(),r("div",null,[l(`

\`\`\`
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
\`\`\`

`),p,e("ul",null,[e("li",null,[e("p",null,[n("使用 "),u,n(" 编译分布式模块或直接到 "),e("a",v,[n("官网"),o(a)]),n(" 下载最新版本。")])]),m,g,b,_]),h])}const w=d(c,[["render",x],["__file","Cluster-Setup-Example.html.vue"]]);export{w as default};
