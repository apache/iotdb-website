import{_ as o,r,o as s,c as l,a as t,d as a,e,b as d,f as n}from"./app-dXzqLio8.js";const c={},h=n(`<h1 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h1><h2 id="一般问题" tabindex="-1"><a class="header-anchor" href="#一般问题" aria-hidden="true">#</a> 一般问题</h2><h3 id="_1-如何查询我的iotdb版本" tabindex="-1"><a class="header-anchor" href="#_1-如何查询我的iotdb版本" aria-hidden="true">#</a> 1. 如何查询我的IoTDB版本？</h3><p>有几种方法可以识别您使用的 IoTDB 版本：</p><ul><li>启动 IoTDB 的命令行界面：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; ./start-cli.sh -p 6667 -pw root -u root -h localhost
 _____       _________  ______   ______    
|_   _|     |  _   _  ||_   _ \`.|_   _ \\   
  | |   .--.|_/ | | \\_|  | | \`. \\ | |_) |  
  | | / .&#39;\`\\ \\  | |      | |  | | |  __&#39;.  
 _| |_| \\__. | _| |_    _| |_.&#39; /_| |__) | 
|_____|&#39;.__.&#39; |_____|  |______.&#39;|_______/  version x.x.x
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>检查 pom.xml 文件：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;version&gt;x.x.x&lt;/version&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>使用 JDBC API:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>String iotdbVersion = tsfileDatabaseMetadata.getDatabaseProductVersion();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>使用命令行接口：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show version
show version
+---------------+
|version        |
+---------------+
|x.x.x          |
+---------------+
Total line number = 1
It costs 0.241s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-在哪里可以找到iotdb的日志" tabindex="-1"><a class="header-anchor" href="#_2-在哪里可以找到iotdb的日志" aria-hidden="true">#</a> 2. 在哪里可以找到IoTDB的日志？</h3><p>假设您的根目录是：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">pwd</span>
/workspace/iotdb

$ <span class="token function">ls</span> <span class="token parameter variable">-l</span>
server/
cli/
pom.xml
Readme.md
<span class="token punctuation">..</span>.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>假如 <code>$IOTDB_HOME = /workspace/iotdb/server/target/iotdb-server-{project.version}</code></p><p>假如 <code>$IOTDB_CLI_HOME = /workspace/iotdb/cli/target/iotdb-cli-{project.version}</code></p><p>在默认的设置里，logs 文件夹会被存储在<code>IOTDB_HOME/logs</code>。您可以在<code>IOTDB_HOME/conf</code>目录下的<code>logback.xml</code>文件中修改日志的级别和日志的存储路径。</p><h3 id="_3-在哪里可以找到iotdb的数据文件" tabindex="-1"><a class="header-anchor" href="#_3-在哪里可以找到iotdb的数据文件" aria-hidden="true">#</a> 3. 在哪里可以找到IoTDB的数据文件？</h3><p>在默认的设置里，数据文件（包含 TsFile，metadata，WAL）被存储在<code>IOTDB_HOME/data/datanode</code>文件夹。</p><h3 id="_4-如何知道iotdb中存储了多少时间序列" tabindex="-1"><a class="header-anchor" href="#_4-如何知道iotdb中存储了多少时间序列" aria-hidden="true">#</a> 4. 如何知道IoTDB中存储了多少时间序列？</h3><p>使用 IoTDB 的命令行接口：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show timeseries root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在返回的结果里，会展示<code>Total timeseries number</code>，这个数据就是 IoTDB 中 timeseries 的数量。</p><p>在当前版本中，IoTDB 支持直接使用命令行接口查询时间序列的数量：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; count timeseries root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果您使用的是 Linux 操作系统，您可以使用以下的 Shell 命令：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; grep &quot;0,root&quot; $IOTDB_HOME/data/system/schema/mlog.txt |  wc -l
&gt;   6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-可以使用hadoop和spark读取iotdb中的tsfile吗" tabindex="-1"><a class="header-anchor" href="#_5-可以使用hadoop和spark读取iotdb中的tsfile吗" aria-hidden="true">#</a> 5. 可以使用Hadoop和Spark读取IoTDB中的TsFile吗？</h3>`,29),u={href:"https://github.com/apache/iotdb/tree/master/hadoop",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/apache/iotdb/tree/master/spark-tsfile",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/apache/iotdb/tree/master/grafana",target:"_blank",rel:"noopener noreferrer"},p=n(`<h3 id="_6-iotdb如何处理重复的数据点" tabindex="-1"><a class="header-anchor" href="#_6-iotdb如何处理重复的数据点" aria-hidden="true">#</a> 6. IoTDB如何处理重复的数据点？</h3><p>一个数据点是由一个完整的时间序列路径（例如：<code>root.vehicle.d0.s0</code>) 和时间戳唯一标识的。如果您使用与现有点相同的路径和时间戳提交一个新点，那么 IoTDB 将更新这个点的值，而不是插入一个新点。</p><h3 id="_7-我如何知道具体的timeseries的类型" tabindex="-1"><a class="header-anchor" href="#_7-我如何知道具体的timeseries的类型" aria-hidden="true">#</a> 7. 我如何知道具体的timeseries的类型？</h3><p>在 IoTDB 的命令行接口中使用 SQL <code>SHOW TIMESERIES &lt;timeseries path&gt;</code>:</p><p>例如：如果您想知道所有 timeseries 的类型 &lt;timeseries path&gt; 应该为 <code>root</code>。上面的 SQL 应该修改为：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show timeseries root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果您想查询一个指定的时间序列，您可以修改 &lt;timeseries path&gt; 为时间序列的完整路径。比如：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show timeseries root.fit.d1.s1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>您还可以在 timeseries 路径中使用通配符：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show timeseries root.fit.d1.*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_8-如何更改iotdb的客户端时间显示格式" tabindex="-1"><a class="header-anchor" href="#_8-如何更改iotdb的客户端时间显示格式" aria-hidden="true">#</a> 8. 如何更改IoTDB的客户端时间显示格式？</h3><p>IoTDB 客户端默认显示的时间是人类可读的（比如：<code>1970-01-01T08:00:00.001</code>)，如果您想显示是时间戳或者其他可读格式，请在启动命令上添加参数<code>-disableISO8601</code>:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; $IOTDB_CLI_HOME/sbin/start-cli.sh -h 127.0.0.1 -p 6667 -u root -pw root -disableISO8601
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_9-怎么处理来自org-apache-ratis-grpc-server-grpclogappender的indexoutofboundsexception" tabindex="-1"><a class="header-anchor" href="#_9-怎么处理来自org-apache-ratis-grpc-server-grpclogappender的indexoutofboundsexception" aria-hidden="true">#</a> 9. 怎么处理来自<code>org.apache.ratis.grpc.server.GrpcLogAppender</code>的<code>IndexOutOfBoundsException</code>？</h3><p>这是我们的依赖Ratis 2.4.1的一个内部错误日志，不会对数据写入和读取造成任何影响。<br> 已经报告给Ratis社区，并会在未来的版本中修复。</p><h3 id="_10-预估内存不足报错如何处理" tabindex="-1"><a class="header-anchor" href="#_10-预估内存不足报错如何处理" aria-hidden="true">#</a> 10. 预估内存不足报错如何处理？</h3><p>报错信息：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>301: There is not enough memory to execute current fragment instance, current remaining free memory is 86762854, estimated memory usage for current fragment instance is 270139392
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>报错分析：<br> datanode_memory_proportion参数控制分给查询的内存，chunk_timeseriesmeta_free_memory_proportion参数控制查询执行可用的内存。<br> 默认情况下分给查询的内存为堆内存*30%，查询执行可用的内存为查询内存的20%。<br> 报错显示当前剩余查询执行可用内存为86762854B=82.74MB，该查询预估使用执行内存270139392B=257.6MB。</p><p>一些可能的改进项：</p><ul><li>在不改变默认参数的前提下，调大IoTDB的堆内存大于 4.2G（4.2G * 1024MB=4300MB），4300M*30%*20%=258M&gt;257.6M，可以满足要求。</li><li>更改 datanode_memory_proportion 等参数，使查询执行可用内存&gt;257.6MB。</li><li>减少导出的时间序列数量。</li><li>给查询语句添加 slimit 限制，也是减少查询时间序列的一种方案。</li><li>添加 align by device，会按照device顺序进行输出，内存占用会降低至单device级别。</li></ul><h2 id="分布式部署-faq" tabindex="-1"><a class="header-anchor" href="#分布式部署-faq" aria-hidden="true">#</a> 分布式部署 FAQ</h2><h3 id="集群启停" tabindex="-1"><a class="header-anchor" href="#集群启停" aria-hidden="true">#</a> 集群启停</h3><h4 id="_1-confignode初次启动失败-如何排查原因" tabindex="-1"><a class="header-anchor" href="#_1-confignode初次启动失败-如何排查原因" aria-hidden="true">#</a> 1. ConfigNode初次启动失败，如何排查原因？</h4><ul><li>ConfigNode初次启动时确保已清空data/confignode目录</li><li>确保该ConfigNode使用到的&lt;IP+端口&gt;没有被占用，没有与已启动的ConfigNode使用到的&lt;IP+端口&gt;冲突</li><li>确保该ConfigNode的cn_target_confignode_list（指向存活的ConfigNode；如果该ConfigNode是启动的第一个ConfigNode，该值指向自身）配置正确</li><li>确保该ConfigNode的配置项（共识协议、副本数等）等与cn_target_confignode_list对应的ConfigNode集群一致</li></ul><h4 id="_2-confignode初次启动成功-show-cluster的结果里为何没有该节点" tabindex="-1"><a class="header-anchor" href="#_2-confignode初次启动成功-show-cluster的结果里为何没有该节点" aria-hidden="true">#</a> 2. ConfigNode初次启动成功，show cluster的结果里为何没有该节点？</h4><ul><li>检查cn_target_confignode_list是否正确指向了正确的地址； 如果cn_target_confignode_list指向了自身，则会启动一个新的ConfigNode集群</li></ul><h4 id="_3-datanode初次启动失败-如何排查原因" tabindex="-1"><a class="header-anchor" href="#_3-datanode初次启动失败-如何排查原因" aria-hidden="true">#</a> 3. DataNode初次启动失败，如何排查原因？</h4><ul><li>DataNode初次启动时确保已清空data/datanode目录。 如果启动结果为“Reject DataNode restart.”则表示启动时可能没有清空data/datanode目录</li><li>确保该DataNode使用到的&lt;IP+端口&gt;没有被占用，没有与已启动的DataNode使用到的&lt;IP+端口&gt;冲突</li><li>确保该DataNode的dn_target_confignode_list指向存活的ConfigNode</li></ul><h4 id="_4-移除datanode执行失败-如何排查" tabindex="-1"><a class="header-anchor" href="#_4-移除datanode执行失败-如何排查" aria-hidden="true">#</a> 4. 移除DataNode执行失败，如何排查？</h4>`,30),m=a("li",null,"检查remove-datanode脚本的参数是否正确，是否传入了正确的ip:port或正确的dataNodeId",-1),v=a("li",null,"只有集群可用节点数量 > max(元数据副本数量, 数据副本数量)时，移除操作才允许被执行",-1),b=a("li",null,"执行移除DataNode的过程会将该DataNode上的数据迁移到其他存活的DataNode，数据迁移以Region为粒度，如果某个Region迁移失败，则被移除的DataNode会一直处于Removing状态",-1),f={href:"http://xn--IoTDBremove-datanode-f055at3i1sdn52bz2aw07gus4dzw4i.sh",target:"_blank",rel:"noopener noreferrer"},x=n('<h4 id="_5-挂掉的datanode是否支持移除" tabindex="-1"><a class="header-anchor" href="#_5-挂掉的datanode是否支持移除" aria-hidden="true">#</a> 5. 挂掉的DataNode是否支持移除？</h4><ul><li>当前集群副本数量大于1时可以移除。 如果集群副本数量等于1，则不支持移除。 在下个版本会推出强制移除的命令</li></ul><h4 id="_6-从0-13升级到1-0需要注意什么" tabindex="-1"><a class="header-anchor" href="#_6-从0-13升级到1-0需要注意什么" aria-hidden="true">#</a> 6. 从0.13升级到1.0需要注意什么？</h4><ul><li>0.13版本与1.0版本的文件目录结构是不同的，不能将0.13的data目录直接拷贝到1.0集群使用。如果需要将0.13的数据导入至1.0，可以使用LOAD功能</li><li>0.13版本的默认RPC地址是0.0.0.0，1.0版本的默认RPC地址是127.0.0.1</li></ul><h3 id="集群重启" tabindex="-1"><a class="header-anchor" href="#集群重启" aria-hidden="true">#</a> 集群重启</h3><h4 id="_1-如何重启集群中的某个confignode" tabindex="-1"><a class="header-anchor" href="#_1-如何重启集群中的某个confignode" aria-hidden="true">#</a> 1. 如何重启集群中的某个ConfigNode？</h4><ul><li>第一步：通过stop-confignode.sh或kill进程方式关闭ConfigNode进程</li><li>第二步：通过执行start-confignode.sh启动ConfigNode进程实现重启</li><li>下个版本IoTDB会提供一键重启的操作</li></ul><h4 id="_2-如何重启集群中的某个datanode" tabindex="-1"><a class="header-anchor" href="#_2-如何重启集群中的某个datanode" aria-hidden="true">#</a> 2. 如何重启集群中的某个DataNode？</h4><ul><li>第一步：通过stop-datanode.sh或kill进程方式关闭DataNode进程</li><li>第二步：通过执行start-datanode.sh启动DataNode进程实现重启</li><li>下个版本IoTDB会提供一键重启的操作</li></ul><h4 id="_3-将某个confignode移除后-remove-confignode-能否再利用该confignode的data目录重启" tabindex="-1"><a class="header-anchor" href="#_3-将某个confignode移除后-remove-confignode-能否再利用该confignode的data目录重启" aria-hidden="true">#</a> 3. 将某个ConfigNode移除后（remove-confignode），能否再利用该ConfigNode的data目录重启？</h4><ul><li>不能。会报错：Reject ConfigNode restart. Because there are no corresponding ConfigNode(whose nodeId=xx) in the cluster.</li></ul><h4 id="_4-将某个datanode移除后-remove-datanode-能否再利用该datanode的data目录重启" tabindex="-1"><a class="header-anchor" href="#_4-将某个datanode移除后-remove-datanode-能否再利用该datanode的data目录重启" aria-hidden="true">#</a> 4. 将某个DataNode移除后（remove-datanode），能否再利用该DataNode的data目录重启？</h4><ul><li>不能正常重启，启动结果为“Reject DataNode restart. Because there are no corresponding DataNode(whose nodeId=xx) in the cluster. Possible solutions are as follows:...”</li></ul>',13),D={id:"_5-用户看到某个confignode-datanode变成了unknown状态-在没有kill对应进程的情况下-直接删除掉confignode-datanode对应的data目录-然后执行start-confignode-sh-start-datanode-sh-这种情况下能成功吗",tabindex:"-1"},N=a("a",{class:"header-anchor",href:"#_5-用户看到某个confignode-datanode变成了unknown状态-在没有kill对应进程的情况下-直接删除掉confignode-datanode对应的data目录-然后执行start-confignode-sh-start-datanode-sh-这种情况下能成功吗","aria-hidden":"true"},"#",-1),I={href:"http://xn--start-confignode-p301a820q612chrvf.sh/start-datanode.sh%EF%BC%8C%E8%BF%99%E7%A7%8D%E6%83%85%E5%86%B5%E4%B8%8B%E8%83%BD%E6%88%90%E5%8A%9F%E5%90%97",target:"_blank",rel:"noopener noreferrer"},B=n('<ul><li>无法启动成功，会报错端口已被占用</li></ul><h3 id="集群运维" tabindex="-1"><a class="header-anchor" href="#集群运维" aria-hidden="true">#</a> 集群运维</h3><h4 id="_1-show-cluster执行失败-显示-please-check-server-status-如何排查" tabindex="-1"><a class="header-anchor" href="#_1-show-cluster执行失败-显示-please-check-server-status-如何排查" aria-hidden="true">#</a> 1. Show cluster执行失败，显示“please check server status”，如何排查?</h4><ul><li>确保ConfigNode集群一半以上的节点处于存活状态</li><li>确保客户端连接的DataNode处于存活状态</li></ul><h4 id="_2-某一datanode节点的磁盘文件损坏-如何修复这个节点" tabindex="-1"><a class="header-anchor" href="#_2-某一datanode节点的磁盘文件损坏-如何修复这个节点" aria-hidden="true">#</a> 2. 某一DataNode节点的磁盘文件损坏，如何修复这个节点?</h4><ul><li>当前只能通过remove-datanode的方式进行实现。remove-datanode执行的过程中会将该DataNode上的数据迁移至其他存活的DataNode节点（前提是集群设置的副本数大于1）</li><li>下个版本IoTDB会提供一键修复节点的功能</li></ul><h4 id="_3-如何降低confignode、datanode使用的内存" tabindex="-1"><a class="header-anchor" href="#_3-如何降低confignode、datanode使用的内存" aria-hidden="true">#</a> 3. 如何降低ConfigNode、DataNode使用的内存？</h4><ul><li>在conf/confignode-env.sh、conf/datanode-env.sh文件可通过调整ON_HEAP_MEMORY、OFF_HEAP_MEMORY等选项可以调整ConfigNode、DataNode使用的最大堆内、堆外内存</li></ul>',8);function T(w,k){const i=r("ExternalLinkIcon");return s(),l("div",null,[t(`

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

`),t(" TOC "),h,a("p",null,[e("是的。IoTDB 与开源生态紧密结合。IoTDB 支持 "),a("a",u,[e("Hadoop"),d(i)]),e(", "),a("a",_,[e("Spark"),d(i)]),e(" 和 "),a("a",g,[e("Grafana"),d(i)]),e(" 可视化工具。")]),p,a("ul",null,[m,v,b,a("li",null,[e("补充：处于Removing状态的节点，其节点上的Region也是Removing或Unknown状态，即不可用状态。 该Remvoing状态的节点也不会接受客户端的请求。如果要使Removing状态的节点变为可用，用户可以使用set system status to running 命令将该节点设置为Running状态；如果要使迁移失败的Region处于可用状态，可以使用migrate region from datanodeId1 to datanodeId2 命令将该不可用的Region迁移到其他存活的节点。"),a("a",f,[e("另外IoTDB后续也会提供remove-datanode.sh"),d(i)]),e(" -f命令，来强制移除节点（迁移失败的Region会直接丢弃）")])]),x,a("h4",D,[N,e(" 5. 用户看到某个ConfigNode/DataNode变成了Unknown状态，在没有kill对应进程的情况下，直接删除掉ConfigNode/DataNode对应的data目录，"),a("a",I,[e("然后执行start-confignode.sh/start-datanode.sh，这种情况下能成功吗"),d(i)]),e("?")]),B])}const E=o(c,[["render",T],["__file","Frequently-asked-questions.html.vue"]]);export{E as default};
