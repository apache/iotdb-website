import{_ as i,r,o,c as s,a as l,d as e,e as t,b as n,f as a}from"./app-d263b843.js";const c={},h=a('<h2 id="_1-目标" tabindex="-1"><a class="header-anchor" href="#_1-目标" aria-hidden="true">#</a> 1. 目标</h2><p>本文档为 IoTDB 集群版（1.0.0）的安装及启动教程。</p><h2 id="_2-前置检查" tabindex="-1"><a class="header-anchor" href="#_2-前置检查" aria-hidden="true">#</a> 2. 前置检查</h2><ol><li>JDK&gt;=1.8 的运行环境，并配置好 JAVA_HOME 环境变量。</li><li>设置最大文件打开数为 65535。</li><li>关闭交换内存。</li><li>首次启动ConfigNode节点时，确保已清空ConfigNode节点的data/confignode目录；首次启动DataNode节点时，确保已清空DataNode节点的data/datanode目录。</li><li>如果整个集群处在可信环境下，可以关闭机器上的防火墙选项。</li><li>在集群默认配置中，ConfigNode 会占用端口 10710 和 10720，DataNode 会占用端口 6667、10730、10740、10750 和 10760，<br> 请确保这些端口未被占用，或者手动修改配置文件中的端口配置。</li></ol><h2 id="_3-安装包获取" tabindex="-1"><a class="header-anchor" href="#_3-安装包获取" aria-hidden="true">#</a> 3. 安装包获取</h2><p>你可以选择下载二进制文件（见 3.1）或从源代码编译（见 3.2）。</p><h3 id="_3-1-下载二进制文件" tabindex="-1"><a class="header-anchor" href="#_3-1-下载二进制文件" aria-hidden="true">#</a> 3.1 下载二进制文件</h3>',7),g={href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"},u=e("li",null,"下载 IoTDB 1.0.0 版本的二进制文件。",-1),_=e("li",null,"解压得到 apache-iotdb-1.0.0-all-bin 目录。",-1),b=a(`<h3 id="_3-2-使用源码编译" tabindex="-1"><a class="header-anchor" href="#_3-2-使用源码编译" aria-hidden="true">#</a> 3.2 使用源码编译</h3><h4 id="_3-2-1-下载源码" tabindex="-1"><a class="header-anchor" href="#_3-2-1-下载源码" aria-hidden="true">#</a> 3.2.1 下载源码</h4><p><strong>Git</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git clone https://github.com/apache/iotdb.git
git checkout v1.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>官网下载</strong></p>`,5),p={href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"},v=e("li",null,"下载 IoTDB 1.0.0 版本的源码。",-1),f=e("li",null,"解压得到 apache-iotdb-1.0.0 目录。",-1),m=a(`<h4 id="_3-2-2-编译源码" tabindex="-1"><a class="header-anchor" href="#_3-2-2-编译源码" aria-hidden="true">#</a> 3.2.2 编译源码</h4><p>在 IoTDB 源码根目录下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>mvn clean package -pl distribution -am -DskipTests
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>编译成功后，可在目录<br><strong>distribution/target/apache-iotdb-1.0.0-SNAPSHOT-all-bin/apache-iotdb-1.0.0-SNAPSHOT-all-bin</strong><br> 找到集群版本的二进制文件。</p><h2 id="_4-安装包说明" tabindex="-1"><a class="header-anchor" href="#_4-安装包说明" aria-hidden="true">#</a> 4. 安装包说明</h2><p>打开 apache-iotdb-1.0.0-SNAPSHOT-all-bin，可见以下目录：</p><table><thead><tr><th><strong>目录</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>conf</td><td>配置文件目录，包含 ConfigNode、DataNode、JMX 和 logback 等配置文件</td></tr><tr><td>data</td><td>数据文件目录，包含 ConfigNode 和 DataNode 的数据文件</td></tr><tr><td>lib</td><td>库文件目录</td></tr><tr><td>licenses</td><td>证书文件目录</td></tr><tr><td>logs</td><td>日志文件目录，包含 ConfigNode 和 DataNode 的日志文件</td></tr><tr><td>sbin</td><td>脚本目录，包含 ConfigNode 和 DataNode 的启停移除脚本，以及 Cli 的启动脚本等</td></tr><tr><td>tools</td><td>系统工具目录</td></tr></tbody></table><h2 id="_5-集群安装配置" tabindex="-1"><a class="header-anchor" href="#_5-集群安装配置" aria-hidden="true">#</a> 5. 集群安装配置</h2><h3 id="_5-1-集群安装" tabindex="-1"><a class="header-anchor" href="#_5-1-集群安装" aria-hidden="true">#</a> 5.1 集群安装</h3><p><code>apache-iotdb-1.0.0-SNAPSHOT-all-bin</code> 包含 ConfigNode 和 DataNode，<br> 请将安装包部署于你目标集群的所有机器上，推荐将安装包部署于所有服务器的相同目录下。</p>`,10),N=e("br",null,null,-1),C={href:"https://iotdb.apache.org/zh/UserGuide/Master/QuickStart/ClusterQuickStart.html",target:"_blank",rel:"noopener noreferrer"},x=a('<h3 id="_5-2-集群配置" tabindex="-1"><a class="header-anchor" href="#_5-2-集群配置" aria-hidden="true">#</a> 5.2 集群配置</h3><p>接下来需要修改每个服务器上的配置文件，登录服务器，<br> 并将工作路径切换至 <code>apache-iotdb-1.0.0-SNAPSHOT-all-bin</code>，<br> 配置文件在 <code>./conf</code> 目录内。</p><p>对于所有部署 ConfigNode 的服务器，需要修改通用配置（见 5.2.1）和 ConfigNode 配置（见 5.2.2）。</p><p>对于所有部署 DataNode 的服务器，需要修改通用配置（见 5.2.1）和 DataNode 配置（见 5.2.3）。</p><h4 id="_5-2-1-通用配置" tabindex="-1"><a class="header-anchor" href="#_5-2-1-通用配置" aria-hidden="true">#</a> 5.2.1 通用配置</h4>',5),D=e("br",null,null,-1),S={href:"https://iotdb.apache.org/zh/UserGuide/Master/Cluster/Deployment-Recommendation.html",target:"_blank",rel:"noopener noreferrer"},I=e("br",null,null,-1),y=a('<table><thead><tr><th><strong>配置项</strong></th><th><strong>说明</strong></th><th><strong>默认</strong></th></tr></thead><tbody><tr><td>cluster_name</td><td>节点希望加入的集群的名称</td><td>defaultCluster</td></tr><tr><td>config_node_consensus_protocol_class</td><td>ConfigNode 使用的共识协议</td><td>org.apache.iotdb.consensus.ratis.RatisConsensus</td></tr><tr><td>schema_replication_factor</td><td>元数据副本数，DataNode 数量不应少于此数目</td><td>1</td></tr><tr><td>schema_region_consensus_protocol_class</td><td>元数据副本组的共识协议</td><td>org.apache.iotdb.consensus.ratis.RatisConsensus</td></tr><tr><td>data_replication_factor</td><td>数据副本数，DataNode 数量不应少于此数目</td><td>1</td></tr><tr><td>data_region_consensus_protocol_class</td><td>数据副本组的共识协议。注：RatisConsensus 目前不支持多数据目录</td><td>org.apache.iotdb.consensus.iot.IoTConsensus</td></tr></tbody></table><p><strong>注意：上述配置项在集群启动后即不可更改，且务必保证所有节点的通用配置完全一致，否则节点无法启动。</strong></p><h4 id="_5-2-2-confignode-配置" tabindex="-1"><a class="header-anchor" href="#_5-2-2-confignode-配置" aria-hidden="true">#</a> 5.2.2 ConfigNode 配置</h4><p>打开 ConfigNode 配置文件 ./conf/iotdb-confignode.properties，根据服务器/虚拟机的 IP 地址和可用端口，设置以下参数：</p><table><thead><tr><th><strong>配置项</strong></th><th><strong>说明</strong></th><th><strong>默认</strong></th><th><strong>用法</strong></th></tr></thead><tbody><tr><td>cn_internal_address</td><td>ConfigNode 在集群内部通讯使用的地址</td><td>127.0.0.1</td><td>设置为服务器的 IPV4 地址或域名</td></tr><tr><td>cn_internal_port</td><td>ConfigNode 在集群内部通讯使用的端口</td><td>10710</td><td>设置为任意未占用端口</td></tr><tr><td>cn_consensus_port</td><td>ConfigNode 副本组共识协议通信使用的端口</td><td>10720</td><td>设置为任意未占用端口</td></tr><tr><td>cn_target_config_node_list</td><td>节点注册加入集群时连接的 ConfigNode 的地址。注：只能配置一个</td><td>127.0.0.1:10710</td><td>对于 Seed-ConfigNode，设置为自己的 cn_internal_address:cn_internal_port；对于其它 ConfigNode，设置为另一个正在运行的 ConfigNode 的 cn_internal_address:cn_internal_port</td></tr></tbody></table><p><strong>注意：上述配置项在节点启动后即不可更改，且务必保证所有端口均未被占用，否则节点无法启动。</strong></p><h4 id="_5-2-3-datanode-配置" tabindex="-1"><a class="header-anchor" href="#_5-2-3-datanode-配置" aria-hidden="true">#</a> 5.2.3 DataNode 配置</h4><p>打开 DataNode 配置文件 ./conf/iotdb-datanode.properties，根据服务器/虚拟机的 IP 地址和可用端口，设置以下参数：</p><table><thead><tr><th><strong>配置项</strong></th><th><strong>说明</strong></th><th><strong>默认</strong></th><th><strong>用法</strong></th></tr></thead><tbody><tr><td>dn_rpc_address</td><td>客户端 RPC 服务的地址</td><td>127.0.0.1</td><td>设置为服务器的 IPV4 地址或域名</td></tr><tr><td>dn_rpc_port</td><td>客户端 RPC 服务的端口</td><td>6667</td><td>设置为任意未占用端口</td></tr><tr><td>dn_internal_address</td><td>DataNode 在集群内部接收控制流使用的地址</td><td>127.0.0.1</td><td>设置为服务器的 IPV4 地址或域名</td></tr><tr><td>dn_internal_port</td><td>DataNode 在集群内部接收控制流使用的端口</td><td>10730</td><td>设置为任意未占用端口</td></tr><tr><td>dn_mpp_data_exchange_port</td><td>DataNode 在集群内部接收数据流使用的端口</td><td>10740</td><td>设置为任意未占用端口</td></tr><tr><td>dn_data_region_consensus_port</td><td>DataNode 的数据副本间共识协议通信的端口</td><td>10750</td><td>设置为任意未占用端口</td></tr><tr><td>dn_schema_region_consensus_port</td><td>DataNode 的元数据副本间共识协议通信的端口</td><td>10760</td><td>设置为任意未占用端口</td></tr><tr><td>dn_target_config_node_list</td><td>集群中正在运行的 ConfigNode 地址</td><td>127.0.0.1:10710</td><td>设置为任意正在运行的 ConfigNode 的 cn_internal_address:cn_internal_port，可设置多个，用逗号（&quot;,&quot;）隔开</td></tr></tbody></table><p><strong>注意：上述配置项在节点启动后即不可更改，且务必保证所有端口均未被占用，否则节点无法启动。</strong></p><h2 id="_6-集群操作" tabindex="-1"><a class="header-anchor" href="#_6-集群操作" aria-hidden="true">#</a> 6. 集群操作</h2><h3 id="_6-1-启动集群" tabindex="-1"><a class="header-anchor" href="#_6-1-启动集群" aria-hidden="true">#</a> 6.1 启动集群</h3><p>本小节描述如何启动包括若干 ConfigNode 和 DataNode 的集群。<br> 集群可以提供服务的标准是至少启动一个 ConfigNode 且启动 不小于（数据/元数据）副本个数 的 DataNode。</p><p>总体启动流程分为三步：</p><ol><li>启动种子 ConfigNode</li><li>增加 ConfigNode（可选）</li><li>增加 DataNode</li></ol><h4 id="_6-1-1-启动-seed-confignode" tabindex="-1"><a class="header-anchor" href="#_6-1-1-启动-seed-confignode" aria-hidden="true">#</a> 6.1.1 启动 Seed-ConfigNode</h4><p><strong>集群第一个启动的节点必须是 ConfigNode，第一个启动的 ConfigNode 必须遵循本小节教程。</strong></p><p>第一个启动的 ConfigNode 是 Seed-ConfigNode，标志着新集群的创建。<br> 在启动 Seed-ConfigNode 前，请打开通用配置文件 ./conf/iotdb-common.properties，并检查如下参数：</p><table><thead><tr><th><strong>配置项</strong></th><th><strong>检查</strong></th></tr></thead><tbody><tr><td>cluster_name</td><td>已设置为期望的集群名称</td></tr><tr><td>config_node_consensus_protocol_class</td><td>已设置为期望的共识协议</td></tr><tr><td>schema_replication_factor</td><td>已设置为期望的元数据副本数</td></tr><tr><td>schema_region_consensus_protocol_class</td><td>已设置为期望的共识协议</td></tr><tr><td>data_replication_factor</td><td>已设置为期望的数据副本数</td></tr><tr><td>data_region_consensus_protocol_class</td><td>已设置为期望的共识协议</td></tr></tbody></table>',19),P=e("strong",null,"注意：",-1),w={href:"https://iotdb.apache.org/zh/UserGuide/Master/Cluster/Deployment-Recommendation.html",target:"_blank",rel:"noopener noreferrer"},k=a(`<p>接着请打开它的配置文件 ./conf/iotdb-confignode.properties，并检查如下参数：</p><table><thead><tr><th><strong>配置项</strong></th><th><strong>检查</strong></th></tr></thead><tbody><tr><td>cn_internal_address</td><td>已设置为服务器的 IPV4 地址或域名</td></tr><tr><td>cn_internal_port</td><td>该端口未被占用</td></tr><tr><td>cn_consensus_port</td><td>该端口未被占用</td></tr><tr><td>cn_target_config_node_list</td><td>已设置为自己的内部通讯地址，即 cn_internal_address:cn_internal_port</td></tr></tbody></table><p>检查完毕后，即可在服务器上运行启动脚本：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Linux 前台启动
bash ./sbin/start-confignode.sh

# Linux 后台启动
nohup bash ./sbin/start-confignode.sh &gt;/dev/null 2&gt;&amp;1 &amp;

# Windows
.\\sbin\\start-confignode.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),R=e("br",null,null,-1),T={href:"https://iotdb.apache.org/zh/UserGuide/Master/Reference/ConfigNode-Config-Manual.html",target:"_blank",rel:"noopener noreferrer"},L=a(`<h4 id="_6-1-2-增加更多-confignode-可选" tabindex="-1"><a class="header-anchor" href="#_6-1-2-增加更多-confignode-可选" aria-hidden="true">#</a> 6.1.2 增加更多 ConfigNode（可选）</h4><p><strong>只要不是第一个启动的 ConfigNode 就必须遵循本小节教程。</strong></p><p>可向集群添加更多 ConfigNode，以保证 ConfigNode 的高可用。常用的配置为额外增加两个 ConfigNode，使集群共有三个 ConfigNode。</p><p>新增的 ConfigNode 需要保证 ./conf/iotdb-common.properites 中的所有配置参数与 Seed-ConfigNode 完全一致，否则可能启动失败或产生运行时错误。<br> 因此，请着重检查通用配置文件中的以下参数：</p><table><thead><tr><th><strong>配置项</strong></th><th><strong>检查</strong></th></tr></thead><tbody><tr><td>cluster_name</td><td>与 Seed-ConfigNode 保持一致</td></tr><tr><td>config_node_consensus_protocol_class</td><td>与 Seed-ConfigNode 保持一致</td></tr><tr><td>schema_replication_factor</td><td>与 Seed-ConfigNode 保持一致</td></tr><tr><td>schema_region_consensus_protocol_class</td><td>与 Seed-ConfigNode 保持一致</td></tr><tr><td>data_replication_factor</td><td>与 Seed-ConfigNode 保持一致</td></tr><tr><td>data_region_consensus_protocol_class</td><td>与 Seed-ConfigNode 保持一致</td></tr></tbody></table><p>接着请打开它的配置文件 ./conf/iotdb-confignode.properties，并检查以下参数：</p><table><thead><tr><th><strong>配置项</strong></th><th><strong>检查</strong></th></tr></thead><tbody><tr><td>cn_internal_address</td><td>已设置为服务器的 IPV4 地址或域名</td></tr><tr><td>cn_internal_port</td><td>该端口未被占用</td></tr><tr><td>cn_consensus_port</td><td>该端口未被占用</td></tr><tr><td>cn_target_config_node_list</td><td>已设置为另一个正在运行的 ConfigNode 的内部通讯地址，推荐使用 Seed-ConfigNode 的内部通讯地址</td></tr></tbody></table><p>检查完毕后，即可在服务器上运行启动脚本：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Linux 前台启动
bash ./sbin/start-confignode.sh

# Linux 后台启动
nohup bash ./sbin/start-confignode.sh &gt;/dev/null 2&gt;&amp;1 &amp;

# Windows
.\\sbin\\start-confignode.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),A=e("br",null,null,-1),M={href:"https://iotdb.apache.org/zh/UserGuide/Master/Reference/ConfigNode-Config-Manual.html",target:"_blank",rel:"noopener noreferrer"},V=a(`<h4 id="_6-1-3-增加-datanode" tabindex="-1"><a class="header-anchor" href="#_6-1-3-增加-datanode" aria-hidden="true">#</a> 6.1.3 增加 DataNode</h4><p><strong>确保集群已有正在运行的 ConfigNode 后，才能开始增加 DataNode。</strong></p><p>可以向集群中添加任意个 DataNode。<br> 在添加新的 DataNode 前，请先打开通用配置文件 ./conf/iotdb-common.properties 并检查以下参数：</p><table><thead><tr><th><strong>配置项</strong></th><th><strong>检查</strong></th></tr></thead><tbody><tr><td>cluster_name</td><td>与 Seed-ConfigNode 保持一致</td></tr></tbody></table><p>接着打开它的配置文件 ./conf/iotdb-datanode.properties 并检查以下参数：</p><table><thead><tr><th><strong>配置项</strong></th><th><strong>检查</strong></th></tr></thead><tbody><tr><td>dn_rpc_address</td><td>已设置为服务器的 IPV4 地址或域名</td></tr><tr><td>dn_rpc_port</td><td>该端口未被占用</td></tr><tr><td>dn_internal_address</td><td>已设置为服务器的 IPV4 地址或域名</td></tr><tr><td>dn_internal_port</td><td>该端口未被占用</td></tr><tr><td>dn_mpp_data_exchange_port</td><td>该端口未被占用</td></tr><tr><td>dn_data_region_consensus_port</td><td>该端口未被占用</td></tr><tr><td>dn_schema_region_consensus_port</td><td>该端口未被占用</td></tr><tr><td>dn_target_config_node_list</td><td>已设置为正在运行的 ConfigNode 的内部通讯地址，推荐使用 Seed-ConfigNode 的内部通讯地址</td></tr></tbody></table><p>检查完毕后，即可在服务器上运行启动脚本：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Linux 前台启动
bash ./sbin/start-datanode.sh

# Linux 后台启动
nohup bash ./sbin/start-datanode.sh &gt;/dev/null 2&gt;&amp;1 &amp;

# Windows
.\\sbin\\start-datanode.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),B=e("br",null,null,-1),O={href:"https://iotdb.apache.org/zh/UserGuide/Master/Reference/DataNode-Config-Manual.html",target:"_blank",rel:"noopener noreferrer"},U=a(`<p><strong>注意：当且仅当集群拥有不少于副本个数（max{schema_replication_factor, data_replication_factor}）的 DataNode 后，集群才可以提供服务</strong></p><h3 id="_6-2-启动-cli" tabindex="-1"><a class="header-anchor" href="#_6-2-启动-cli" aria-hidden="true">#</a> 6.2 启动 Cli</h3><p>若搭建的集群仅用于本地调试，可直接执行 ./sbin 目录下的 Cli 启动脚本：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Linux
./sbin/start-cli.sh

# Windows
.\\sbin\\start-cli.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),W=e("br",null,null,-1),G={href:"https://iotdb.apache.org/zh/UserGuide/Master/QuickStart/Command-Line-Interface.html",target:"_blank",rel:"noopener noreferrer"},z=a(`<h3 id="_6-3-验证集群" tabindex="-1"><a class="header-anchor" href="#_6-3-验证集群" aria-hidden="true">#</a> 6.3 验证集群</h3><p>以在6台服务器上启动的3C3D（3个ConfigNode 和 3个DataNode）集群为例，<br> 这里假设3个ConfigNode的IP地址依次为192.168.1.10、192.168.1.11、192.168.1.12，且3个ConfigNode启动时均使用了默认的端口10710与10720；<br> 3个DataNode的IP地址依次为192.168.1.20、192.168.1.21、192.168.1.22，且3个DataNode启动时均使用了默认的端口6667、10730、10740、10750与10760。</p><p>当按照6.1步骤成功启动集群后，在 Cli 执行 <code>show cluster details</code>，看到的结果应当如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show cluster details
+------+----------+-------+---------------+------------+-------------------+------------+-------+-------+-------------------+-----------------+
|NodeID|  NodeType| Status|InternalAddress|InternalPort|ConfigConsensusPort|  RpcAddress|RpcPort|MppPort|SchemaConsensusPort|DataConsensusPort|
+------+----------+-------+---------------+------------+-------------------+------------+-------+-------+-------------------+-----------------+
|     0|ConfigNode|Running|   192.168.1.10|       10710|              10720|            |       |       |                   |                 |
|     2|ConfigNode|Running|   192.168.1.11|       10710|              10720|            |       |       |                   |                 |
|     3|ConfigNode|Running|   192.168.1.12|       10710|              10720|            |       |       |                   |                 |
|     1|  DataNode|Running|   192.168.1.20|       10730|                   |192.168.1.20|   6667|  10740|              10750|            10760|
|     4|  DataNode|Running|   192.168.1.21|       10730|                   |192.168.1.21|   6667|  10740|              10750|            10760|
|     5|  DataNode|Running|   192.168.1.22|       10730|                   |192.168.1.22|   6667|  10740|              10750|            10760|
+------+----------+-------+---------------+------------+-------------------+------------+-------+-------+-------------------+-----------------+
Total line number = 6
It costs 0.012s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>若所有节点的状态均为 <strong>Running</strong>，则说明集群部署成功；<br> 否则，请阅读启动失败节点的运行日志，并检查对应的配置参数。</p><h3 id="_6-4-停止-iotdb-进程" tabindex="-1"><a class="header-anchor" href="#_6-4-停止-iotdb-进程" aria-hidden="true">#</a> 6.4 停止 IoTDB 进程</h3><p>本小节描述如何手动关闭 IoTDB 的 ConfigNode 或 DataNode 进程。</p><h4 id="_6-4-1-使用脚本停止-confignode" tabindex="-1"><a class="header-anchor" href="#_6-4-1-使用脚本停止-confignode" aria-hidden="true">#</a> 6.4.1 使用脚本停止 ConfigNode</h4><p>执行停止 ConfigNode 脚本：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Linux
./sbin/stop-confignode.sh

# Windows
.\\sbin\\stop-confignode.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-4-2-使用脚本停止-datanode" tabindex="-1"><a class="header-anchor" href="#_6-4-2-使用脚本停止-datanode" aria-hidden="true">#</a> 6.4.2 使用脚本停止 DataNode</h4><p>执行停止 DataNode 脚本：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Linux
./sbin/stop-datanode.sh

# Windows
.\\sbin\\stop-datanode.bat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-4-3-停止节点进程" tabindex="-1"><a class="header-anchor" href="#_6-4-3-停止节点进程" aria-hidden="true">#</a> 6.4.3 停止节点进程</h4><p>首先获取节点的进程号：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>jps

# 或

ps aux | grep iotdb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结束进程：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kill -9 &lt;pid&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>注意：有些端口的信息需要 root 权限才能获取，在此情况下请使用 sudo</strong></p><h3 id="_6-5-集群缩容" tabindex="-1"><a class="header-anchor" href="#_6-5-集群缩容" aria-hidden="true">#</a> 6.5 集群缩容</h3><p>本小节描述如何将 ConfigNode 或 DataNode 移出集群。</p><h4 id="_6-5-1-移除-confignode" tabindex="-1"><a class="header-anchor" href="#_6-5-1-移除-confignode" aria-hidden="true">#</a> 6.5.1 移除 ConfigNode</h4><p>在移除 ConfigNode 前，请确保移除后集群至少还有一个活跃的 ConfigNode。<br> 在活跃的 ConfigNode 上执行 remove-confignode 脚本：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Linux
## 根据 confignode_id 移除节点
./sbin/remove-confignode.sh &lt;confignode_id&gt;

## 根据 ConfigNode 内部通讯地址和端口移除节点
./sbin/remove-confignode.sh &lt;cn_internal_address&gt;:&lt;cn_internal_port&gt;


# Windows
## 根据 confignode_id 移除节点
.\\sbin\\remove-confignode.bat &lt;confignode_id&gt;

## 根据 ConfigNode 内部通讯地址和端口移除节点
.\\sbin\\remove-confignode.bat &lt;cn_internal_address&gt;:&lt;cn_internal_port&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_6-5-2-移除-datanode" tabindex="-1"><a class="header-anchor" href="#_6-5-2-移除-datanode" aria-hidden="true">#</a> 6.5.2 移除 DataNode</h4><p>在移除 DataNode 前，请确保移除后集群至少还有不少于（数据/元数据）副本个数的 DataNode。<br> 在活跃的 DataNode 上执行 remove-datanode 脚本：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># Linux
## 根据 datanode_id 移除节点
./sbin/remove-datanode.sh &lt;datanode_id&gt;

## 根据 DataNode RPC 服务地址和端口移除节点
./sbin/remove-datanode.sh &lt;dn_rpc_address&gt;:&lt;dn_rpc_port&gt;


# Windows
## 根据 datanode_id 移除节点
.\\sbin\\remove-datanode.bat &lt;datanode_id&gt;

## 根据 DataNode RPC 服务地址和端口移除节点
.\\sbin\\remove-datanode.bat &lt;dn_rpc_address&gt;:&lt;dn_rpc_port&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-常见问题" tabindex="-1"><a class="header-anchor" href="#_7-常见问题" aria-hidden="true">#</a> 7. 常见问题</h2>`,28),E={href:"https://iotdb.apache.org/zh/UserGuide/Master/FAQ/FAQ-for-cluster-setup.html",target:"_blank",rel:"noopener noreferrer"};function F(H,Q){const d=r("ExternalLinkIcon");return o(),s("div",null,[l(`

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

`),h,e("ol",null,[e("li",null,[t("打开官网"),e("a",g,[t("Download Page"),n(d)]),t("。")]),u,_]),b,e("ol",null,[e("li",null,[t("打开官网"),e("a",p,[t("Download Page"),n(d)]),t("。")]),v,f]),m,e("p",null,[t("如果你希望先在一台服务器上尝试部署 IoTDB 集群，请参考"),N,e("a",C,[t("Cluster Quick Start"),n(d)]),t("。")]),x,e("p",null,[t("打开通用配置文件 ./conf/iotdb-common.properties，"),D,t(" 可根据 "),e("a",S,[t("部署推荐"),n(d)]),I,t(" 设置以下参数：")]),y,e("p",null,[P,t(" 请根据"),e("a",w,[t("部署推荐"),n(d)]),t("配置合适的通用参数，这些参数在首次配置后即不可修改。")]),k,e("p",null,[t("ConfigNode 的其它配置参数可参考"),R,e("a",T,[t("ConfigNode 配置参数"),n(d)]),t("。")]),L,e("p",null,[t("ConfigNode 的其它配置参数可参考"),A,e("a",M,[t("ConfigNode配置参数"),n(d)]),t("。")]),V,e("p",null,[t("DataNode 的其它配置参数可参考"),B,e("a",O,[t("DataNode配置参数"),n(d)]),t("。")]),U,e("p",null,[t("若希望通过 Cli 连接生产环境的集群，"),W,t(" 请阅读 "),e("a",G,[t("Cli 使用手册"),n(d)]),t("。")]),z,e("p",null,[t("请参考 "),e("a",E,[t("分布式部署FAQ"),n(d)])])])}const J=i(c,[["render",F],["__file","Cluster-Setup.html.vue"]]);export{J as default};
