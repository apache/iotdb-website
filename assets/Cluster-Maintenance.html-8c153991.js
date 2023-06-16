import{_ as s,C as d,O as l,P as a,ah as o,Q as t,U as e,ai as r,ae as v,aW as n}from"./framework-374e0e89.js";const u={},c=n(`<h2 id="集群运维命令" tabindex="-1"><a class="header-anchor" href="#集群运维命令" aria-hidden="true">#</a> 集群运维命令</h2><h3 id="展示集群配置" tabindex="-1"><a class="header-anchor" href="#展示集群配置" aria-hidden="true">#</a> 展示集群配置</h3><p>当前 IoTDB 支持使用如下 SQL 展示集群的关键参数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW VARIABLES
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show variables
+----------------------------------+-----------------------------------------------------------------+
|                         Variables|                                                            Value|
+----------------------------------+-----------------------------------------------------------------+
|                       ClusterName|                                                   defaultCluster|
|             DataReplicationFactor|                                                                1|
|           SchemaReplicationFactor|                                                                1|
|  DataRegionConsensusProtocolClass|                      org.apache.iotdb.consensus.iot.IoTConsensus|
|SchemaRegionConsensusProtocolClass|                  org.apache.iotdb.consensus.ratis.RatisConsensus|
|  ConfigNodeConsensusProtocolClass|                  org.apache.iotdb.consensus.ratis.RatisConsensus|
|             TimePartitionInterval|                                                        604800000|
|                    DefaultTTL(ms)|                                              9223372036854775807|
|              ReadConsistencyLevel|                                                           strong|
|           SchemaRegionPerDataNode|                                                              1.0|
|             DataRegionPerDataNode|                                                              5.0|
|           LeastDataRegionGroupNum|                                                                5|
|                     SeriesSlotNum|                                                            10000|
|           SeriesSlotExecutorClass|org.apache.iotdb.commons.partition.executor.hash.BKDRHashExecutor|
|         DiskSpaceWarningThreshold|                                                             0.05|
+----------------------------------+-----------------------------------------------------------------+
Total line number = 15
It costs 0.225s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：</strong> 必须保证该 SQL 展示的所有配置参数在同一集群各个节点完全一致</p><h3 id="展示-confignode-信息" tabindex="-1"><a class="header-anchor" href="#展示-confignode-信息" aria-hidden="true">#</a> 展示 ConfigNode 信息</h3><p>当前 IoTDB 支持使用如下 SQL 展示 ConfigNode 的信息：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW CONFIGNODES
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show confignodes
+------+-------+---------------+------------+--------+
|NodeID| Status|InternalAddress|InternalPort|    Role|
+------+-------+---------------+------------+--------+
|     0|Running|      127.0.0.1|       10710|  Leader|
|     1|Running|      127.0.0.1|       10711|Follower|
|     2|Running|      127.0.0.1|       10712|Follower|
+------+-------+---------------+------------+--------+
Total line number = 3
It costs 0.030s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="confignode-状态定义" tabindex="-1"><a class="header-anchor" href="#confignode-状态定义" aria-hidden="true">#</a> ConfigNode 状态定义</h4><p>对 ConfigNode 各状态定义如下：</p><ul><li><strong>Running</strong>: ConfigNode 正常运行</li><li><strong>Unknown</strong>: ConfigNode 未正常上报心跳 <ul><li>无法接收其它 ConfigNode 同步来的数据</li><li>不会被选为集群的 ConfigNode-leader</li></ul></li></ul><h3 id="展示-datanode-信息" tabindex="-1"><a class="header-anchor" href="#展示-datanode-信息" aria-hidden="true">#</a> 展示 DataNode 信息</h3><p>当前 IoTDB 支持使用如下 SQL 展示 DataNode 的信息：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW DATANODES
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; create timeseries root.sg.d1.s1 with datatype=BOOLEAN,encoding=PLAIN
Msg: The statement is executed successfully.
IoTDB&gt; create timeseries root.sg.d2.s1 with datatype=BOOLEAN,encoding=PLAIN
Msg: The statement is executed successfully.
IoTDB&gt; create timeseries root.ln.d1.s1 with datatype=BOOLEAN,encoding=PLAIN
Msg: The statement is executed successfully.
IoTDB&gt; show datanodes
+------+-------+----------+-------+-------------+---------------+
|NodeID| Status|RpcAddress|RpcPort|DataRegionNum|SchemaRegionNum|
+------+-------+----------+-------+-------------+---------------+
|     1|Running| 127.0.0.1|   6667|            0|              1|
|     2|Running| 127.0.0.1|   6668|            0|              1|
+------+-------+----------+-------+-------------+---------------+

Total line number = 2
It costs 0.007s

IoTDB&gt; insert into root.ln.d1(timestamp,s1) values(1,true)
Msg: The statement is executed successfully.
IoTDB&gt; show datanodes
+------+-------+----------+-------+-------------+---------------+
|NodeID| Status|RpcAddress|RpcPort|DataRegionNum|SchemaRegionNum|
+------+-------+----------+-------+-------------+---------------+
|     1|Running| 127.0.0.1|   6667|            1|              1|
|     2|Running| 127.0.0.1|   6668|            0|              1|
+------+-------+----------+-------+-------------+---------------+
Total line number = 2
It costs 0.006s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="datanode-状态定义" tabindex="-1"><a class="header-anchor" href="#datanode-状态定义" aria-hidden="true">#</a> DataNode 状态定义</h4><p>DataNode 的状态机如下图所示： <img style="width:100%;max-width:500px;max-height:500px;margin-left:auto;margin-right:auto;display:block;" src="https://gitbox.apache.org/repos/asf?p=iotdb-bin-resources.git;a=blob_plain;f=docs/UserGuide/Cluster/DataNode-StateMachine-ZH.jpg"></p><p>对 DataNode 各状态定义如下：</p><ul><li><strong>Running</strong>: DataNode 正常运行，可读可写</li><li><strong>Unknown</strong>: DataNode 未正常上报心跳，ConfigNode 认为该 DataNode 不可读写 <ul><li>少数 Unknown DataNode 不影响集群读写</li></ul></li><li><strong>Removing</strong>: DataNode 正在移出集群，不可读写 <ul><li>少数 Removing DataNode 不影响集群读写</li></ul></li><li><strong>ReadOnly</strong>: DataNode 磁盘剩余空间低于 disk_warning_threshold（默认 5%），DataNode 可读但不能写入，不能同步数据 <ul><li>少数 ReadOnly DataNode 不影响集群读写</li><li>ReadOnly DataNode 可以查询元数据和数据</li><li>ReadOnly DataNode 可以删除元数据和数据</li><li>ReadOnly DataNode 可以创建元数据，不能写入数据</li><li>所有 DataNode 处于 ReadOnly 状态时，集群不能写入数据，仍可以创建 Database 和元数据</li></ul></li></ul><p><strong>对于一个 DataNode</strong>，不同状态元数据查询、创建、删除的影响如下表所示：</p><table><thead><tr><th>DataNode 状态</th><th>可读</th><th>可创建</th><th>可删除</th></tr></thead><tbody><tr><td>Running</td><td>是</td><td>是</td><td>是</td></tr><tr><td>Unknown</td><td>否</td><td>否</td><td>否</td></tr><tr><td>Removing</td><td>否</td><td>否</td><td>否</td></tr><tr><td>ReadOnly</td><td>是</td><td>是</td><td>是</td></tr></tbody></table><p><strong>对于一个 DataNode</strong>，不同状态数据查询、写入、删除的影响如下表所示：</p><table><thead><tr><th>DataNode 状态</th><th>可读</th><th>可写</th><th>可删除</th></tr></thead><tbody><tr><td>Running</td><td>是</td><td>是</td><td>是</td></tr><tr><td>Unknown</td><td>否</td><td>否</td><td>否</td></tr><tr><td>Removing</td><td>否</td><td>否</td><td>否</td></tr><tr><td>ReadOnly</td><td>是</td><td>否</td><td>是</td></tr></tbody></table><h3 id="展示全部节点信息" tabindex="-1"><a class="header-anchor" href="#展示全部节点信息" aria-hidden="true">#</a> 展示全部节点信息</h3><p>当前 IoTDB 支持使用如下 SQL 展示全部节点的信息：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW CLUSTER
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show cluster
+------+----------+-------+---------------+------------+
|NodeID|  NodeType| Status|InternalAddress|InternalPort|
+------+----------+-------+---------------+------------+
|     0|ConfigNode|Running|      127.0.0.1|       10710|
|     1|ConfigNode|Running|      127.0.0.1|       10711|
|     2|ConfigNode|Running|      127.0.0.1|       10712|
|     3|  DataNode|Running|      127.0.0.1|       10730|
|     4|  DataNode|Running|      127.0.0.1|       10731|
|     5|  DataNode|Running|      127.0.0.1|       10732|
+------+----------+-------+---------------+------------+
Total line number = 6
It costs 0.011s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在节点被关停后，它的状态也会改变，如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show cluster
+------+----------+-------+---------------+------------+
|NodeID|  NodeType| Status|InternalAddress|InternalPort|
+------+----------+-------+---------------+------------+
|     0|ConfigNode|Running|      127.0.0.1|       10710|
|     1|ConfigNode|Unknown|      127.0.0.1|       10711|
|     2|ConfigNode|Running|      127.0.0.1|       10712|
|     3|  DataNode|Running|      127.0.0.1|       10730|
|     4|  DataNode|Running|      127.0.0.1|       10731|
|     5|  DataNode|Running|      127.0.0.1|       10732|
+------+----------+-------+---------------+------------+
Total line number = 6
It costs 0.012s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>展示全部节点的详细配置信息：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW CLUSTER DETAILS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show cluster details
+------+----------+-------+---------------+------------+-------------------+----------+-------+-------+-------------------+-----------------+
|NodeID|  NodeType| Status|InternalAddress|InternalPort|ConfigConsensusPort|RpcAddress|RpcPort|MppPort|SchemaConsensusPort|DataConsensusPort|
+------+----------+-------+---------------+------------+-------------------+----------+-------+-------+-------------------+-----------------+
|     0|ConfigNode|Running|      127.0.0.1|       10710|              10720|          |       |       |                   |                 |
|     1|ConfigNode|Running|      127.0.0.1|       10711|              10721|          |       |       |                   |                 |
|     2|ConfigNode|Running|      127.0.0.1|       10712|              10722|          |       |       |                   |                 |
|     3|  DataNode|Running|      127.0.0.1|       10730|                   | 127.0.0.1|   6667|  10740|              10750|            10760|
|     4|  DataNode|Running|      127.0.0.1|       10731|                   | 127.0.0.1|   6668|  10741|              10751|            10761|
|     5|  DataNode|Running|      127.0.0.1|       10732|                   | 127.0.0.1|   6669|  10742|              10752|            10762|
+------+----------+-------+---------------+------------+-------------------+----------+-------+-------+-------------------+-----------------+
Total line number = 6
It costs 0.340s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="展示-region-信息" tabindex="-1"><a class="header-anchor" href="#展示-region-信息" aria-hidden="true">#</a> 展示 Region 信息</h3><p>集群中以 SchemaRegion/DataRegion 作为元数据/数据的复制和管理单元，Region 的状态和分布对于系统运维和测试有很大帮助，如以下场景：</p><ul><li>查看集群中各个 Region 被分配到了哪些 DataNode，是否均衡</li><li>查看集群中各个 Region 被分配了哪些分区，是否均衡</li><li>查看集群中各个 RegionGroup 的 leader 被分配到了哪些 DataNode，是否均衡</li></ul><p>当前 IoTDB 支持使用如下 SQL 展示 Region 信息：</p><ul><li><code>SHOW REGIONS</code>: 展示所有 Region 分布</li><li><code>SHOW SCHEMA REGIONS</code>: 展示所有 SchemaRegion 分布</li><li><code>SHOW DATA REGIONS</code>: 展示所有 DataRegion 分布</li><li><code>SHOW (DATA|SCHEMA)? REGIONS OF DATABASE &lt;sg1,sg2,...&gt;</code>: 展示指定数据库 &lt;sg1,sg2,...&gt; 对应的 Region 分布</li><li><code>SHOW (DATA|SCHEMA)? REGIONS ON NODEID &lt;id1,id2,...&gt;</code>: 展示指定节点 &lt;id1,id2,...&gt; 对应的 Region 分布</li><li><code>SHOW (DATA|SCHEMA)? REGIONS (OF DATABASE &lt;sg1,sg2,...&gt;)? (ON NODEID &lt;id1,id2,...&gt;)?</code>: 展示指定数据库 &lt;sg1,sg2,...&gt; 在指定节点 &lt;id1,id2,...&gt; 对应的 Region 分布</li></ul><p>展示所有 Region 的分布：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show regions
+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+
|RegionId|        Type| Status|Database|SeriesSlotNum|TimeSlotNum|DataNodeId|RpcAddress|RpcPort|    Role|             CreateTime|
+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+
|       0|  DataRegion|Running|root.sg1|            1|          1|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:18.520|
|       0|  DataRegion|Running|root.sg1|            1|          1|         2| 127.0.0.1|   6668|  Leader|2023-03-07T17:32:18.749|
|       0|  DataRegion|Running|root.sg1|            1|          1|         3| 127.0.0.1|   6669|Follower|2023-03-07T17:32:19.013|
|       1|SchemaRegion|Running|root.sg1|            1|          0|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:18.111|
|       1|SchemaRegion|Running|root.sg1|            1|          0|         2| 127.0.0.1|   6668|Follower|2023-03-07T17:32:18.245|
|       1|SchemaRegion|Running|root.sg1|            1|          0|         3| 127.0.0.1|   6669|  Leader|2023-03-07T17:32:18.398|
|       2|  DataRegion|Running|root.sg2|            1|          1|         1| 127.0.0.1|   6667|  Leader|2023-03-07T17:32:19.834|
|       2|  DataRegion|Running|root.sg2|            1|          1|         2| 127.0.0.1|   6668|Follower|2023-03-07T17:32:20.011|
|       2|  DataRegion|Running|root.sg2|            1|          1|         3| 127.0.0.1|   6669|Follower|2023-03-07T17:32:20.395|
|       3|SchemaRegion|Running|root.sg2|            1|          0|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:19.232|
|       3|SchemaRegion|Running|root.sg2|            1|          0|         2| 127.0.0.1|   6668|  Leader|2023-03-07T17:32:19.450|
|       3|SchemaRegion|Running|root.sg2|            1|          0|         3| 127.0.0.1|   6669|Follower|2023-03-07T17:32:19.637|
+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+
Total line number = 12
It costs 0.165s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，SeriesSlotNum 指的是 region 内 seriesSlot 的个数。同样地，TimeSlotNum 也指 region 内 timeSlot 的个数。</p><p>展示 SchemaRegion 或 DataRegion 的分布：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show data regions
+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+
|RegionId|        Type| Status|Database|SeriesSlotNum|TimeSlotNum|DataNodeId|RpcAddress|RpcPort|    Role|             CreateTime|
+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+
|       0|  DataRegion|Running|root.sg1|            1|          1|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:18.520|
|       0|  DataRegion|Running|root.sg1|            1|          1|         2| 127.0.0.1|   6668|  Leader|2023-03-07T17:32:18.749|
|       0|  DataRegion|Running|root.sg1|            1|          1|         3| 127.0.0.1|   6669|Follower|2023-03-07T17:32:19.013|
|       2|  DataRegion|Running|root.sg2|            1|          1|         1| 127.0.0.1|   6667|  Leader|2023-03-07T17:32:19.834|
|       2|  DataRegion|Running|root.sg2|            1|          1|         2| 127.0.0.1|   6668|Follower|2023-03-07T17:32:20.011|
|       2|  DataRegion|Running|root.sg2|            1|          1|         3| 127.0.0.1|   6669|Follower|2023-03-07T17:32:20.395|
+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+
Total line number = 6
It costs 0.011s

IoTDB&gt; show schema regions
+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+
|RegionId|        Type| Status|Database|SeriesSlotNum|TimeSlotNum|DataNodeId|RpcAddress|RpcPort|    Role|             CreateTime|
+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+
|       1|SchemaRegion|Running|root.sg1|            1|          0|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:18.111|
|       1|SchemaRegion|Running|root.sg1|            1|          0|         2| 127.0.0.1|   6668|Follower|2023-03-07T17:32:18.245|
|       1|SchemaRegion|Running|root.sg1|            1|          0|         3| 127.0.0.1|   6669|  Leader|2023-03-07T17:32:18.398|
|       3|SchemaRegion|Running|root.sg2|            1|          0|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:19.232|
|       3|SchemaRegion|Running|root.sg2|            1|          0|         2| 127.0.0.1|   6668|  Leader|2023-03-07T17:32:19.450|
|       3|SchemaRegion|Running|root.sg2|            1|          0|         3| 127.0.0.1|   6669|Follower|2023-03-07T17:32:19.637|
+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+
Total line number = 6
It costs 0.012s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>展示指定数据库 &lt;sg1,sg2,...&gt; 对应的 Region 分布：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show regions of database root.sg1
+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+
|RegionId|        Type| Status|Database|SeriesSlotNum|TimeSlotNum|DataNodeId|RpcAddress|RpcPort|    Role|             CreateTime|
+--------+------------+-------+-- -----+-------------+-----------+----------+----------+-------+--------+-----------------------+
|       0|  DataRegion|Running|root.sg1|            1|          1|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:18.520|
|       0|  DataRegion|Running|root.sg1|            1|          1|         2| 127.0.0.1|   6668|  Leader|2023-03-07T17:32:18.749|
|       0|  DataRegion|Running|root.sg1|            1|          1|         3| 127.0.0.1|   6669|Follower|2023-03-07T17:32:19.013|
|       1|SchemaRegion|Running|root.sg1|            1|          0|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:18.111|
|       1|SchemaRegion|Running|root.sg1|            1|          0|         2| 127.0.0.1|   6668|Follower|2023-03-07T17:32:18.245|
|       1|SchemaRegion|Running|root.sg1|            1|          0|         3| 127.0.0.1|   6669|  Leader|2023-03-07T17:32:18.398|
+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+
Total line number = 6
It costs 0.007s

IoTDB&gt; show regions of database root.sg1, root.sg2
+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+
|RegionId|        Type| Status|Database|SeriesSlotNum|TimeSlotNum|DataNodeId|RpcAddress|RpcPort|    Role|             CreateTime|
+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+
|       0|  DataRegion|Running|root.sg1|            1|          1|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:18.520|
|       0|  DataRegion|Running|root.sg1|            1|          1|         2| 127.0.0.1|   6668|  Leader|2023-03-07T17:32:18.749|
|       0|  DataRegion|Running|root.sg1|            1|          1|         3| 127.0.0.1|   6669|Follower|2023-03-07T17:32:19.013|
|       1|SchemaRegion|Running|root.sg1|            1|          0|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:18.111|
|       1|SchemaRegion|Running|root.sg1|            1|          0|         2| 127.0.0.1|   6668|Follower|2023-03-07T17:32:18.245|
|       1|SchemaRegion|Running|root.sg1|            1|          0|         3| 127.0.0.1|   6669|  Leader|2023-03-07T17:32:18.398|
|       2|  DataRegion|Running|root.sg2|            1|          1|         1| 127.0.0.1|   6667|  Leader|2023-03-07T17:32:19.834|
|       2|  DataRegion|Running|root.sg2|            1|          1|         2| 127.0.0.1|   6668|Follower|2023-03-07T17:32:20.011|
|       2|  DataRegion|Running|root.sg2|            1|          1|         3| 127.0.0.1|   6669|Follower|2023-03-07T17:32:20.395|
|       3|SchemaRegion|Running|root.sg2|            1|          0|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:19.232|
|       3|SchemaRegion|Running|root.sg2|            1|          0|         2| 127.0.0.1|   6668|  Leader|2023-03-07T17:32:19.450|
|       3|SchemaRegion|Running|root.sg2|            1|          0|         3| 127.0.0.1|   6669|Follower|2023-03-07T17:32:19.637|
+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+
Total line number = 12
It costs 0.009s

IoTDB&gt; show data regions of database root.sg1, root.sg2
+--------+----------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+
|RegionId|      Type| Status|Database|SeriesSlotNum|TimeSlotNum|DataNodeId|RpcAddress|RpcPort|    Role|             CreateTime|
+--------+----------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+
|       0|DataRegion|Running|root.sg1|            1|          1|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:18.520|
|       0|DataRegion|Running|root.sg1|            1|          1|         2| 127.0.0.1|   6668|  Leader|2023-03-07T17:32:18.749|
|       0|DataRegion|Running|root.sg1|            1|          1|         3| 127.0.0.1|   6669|Follower|2023-03-07T17:32:19.013|
|       2|DataRegion|Running|root.sg2|            1|          1|         1| 127.0.0.1|   6667|  Leader|2023-03-07T17:32:19.834|
|       2|DataRegion|Running|root.sg2|            1|          1|         2| 127.0.0.1|   6668|Follower|2023-03-07T17:32:20.011|
|       2|DataRegion|Running|root.sg2|            1|          1|         3| 127.0.0.1|   6669|Follower|2023-03-07T17:32:20.395|
+--------+----------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+
Total line number = 6
It costs 0.007s

IoTDB&gt; show schema regions of database root.sg1, root.sg2
+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+
|RegionId|        Type| Status|Database|SeriesSlotNum|TimeSlotNum|DataNodeId|RpcAddress|RpcPort|    Role|             CreateTime|
+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+
|       1|SchemaRegion|Running|root.sg1|            1|          0|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:18.111|
|       1|SchemaRegion|Running|root.sg1|            1|          0|         2| 127.0.0.1|   6668|Follower|2023-03-07T17:32:18.245|
|       1|SchemaRegion|Running|root.sg1|            1|          0|         3| 127.0.0.1|   6669|  Leader|2023-03-07T17:32:18.398|
|       3|SchemaRegion|Running|root.sg2|            1|          0|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:19.232|
|       3|SchemaRegion|Running|root.sg2|            1|          0|         2| 127.0.0.1|   6668|  Leader|2023-03-07T17:32:19.450|
|       3|SchemaRegion|Running|root.sg2|            1|          0|         3| 127.0.0.1|   6669|Follower|2023-03-07T17:32:19.637|
+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+
Total line number = 6
It costs 0.009s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>展示指定节点 &lt;id1,id2,...&gt; 对应的 Region 分布：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show regions on nodeid 1
+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+
|RegionId|        Type| Status|Database|SeriesSlotNum|TimeSlotNum|DataNodeId|RpcAddress|RpcPort|    Role|             CreateTime|
+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+
|       0|  DataRegion|Running|root.sg1|            1|          1|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:18.520|
|       1|SchemaRegion|Running|root.sg1|            1|          0|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:18.111|
|       2|  DataRegion|Running|root.sg2|            1|          1|         1| 127.0.0.1|   6667|  Leader|2023-03-07T17:32:19.834|
|       3|SchemaRegion|Running|root.sg2|            1|          0|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:19.232|
+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+
Total line number = 4
It costs 0.165s

IoTDB&gt; show regions on nodeid 1, 2
+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+
|RegionId|        Type| Status|Database|SeriesSlotNum|TimeSlotNum|DataNodeId|RpcAddress|RpcPort|    Role|             CreateTime|
+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+
|       0|  DataRegion|Running|root.sg1|            1|          1|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:18.520|
|       0|  DataRegion|Running|root.sg1|            1|          1|         2| 127.0.0.1|   6668|  Leader|2023-03-07T17:32:18.749|
|       1|SchemaRegion|Running|root.sg1|            1|          0|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:18.111|
|       1|SchemaRegion|Running|root.sg1|            1|          0|         2| 127.0.0.1|   6668|Follower|2023-03-07T17:32:18.245|
|       2|  DataRegion|Running|root.sg2|            1|          1|         1| 127.0.0.1|   6667|  Leader|2023-03-07T17:32:19.834|
|       2|  DataRegion|Running|root.sg2|            1|          1|         2| 127.0.0.1|   6668|Follower|2023-03-07T17:32:19.011|
|       3|SchemaRegion|Running|root.sg2|            1|          0|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:19.232|
|       3|SchemaRegion|Running|root.sg2|            1|          0|         2| 127.0.0.1|   6668|  Leader|2023-03-07T17:32:19.450|
+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+
Total line number = 8
It costs 0.165s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>展示指定数据库 &lt;sg1,sg2,...&gt; 在指定节点 &lt;id1,id2,...&gt; 对应的 Region 分布：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show regions of database root.sg1 on nodeid 1
+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+
|RegionId|        Type| Status|Database|SeriesSlotNum|TimeSlotNum|DataNodeId|RpcAddress|RpcPort|    Role|             CreateTime|
+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+
|       0|  DataRegion|Running|root.sg1|            1|          1|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:18.520|
|       1|SchemaRegion|Running|root.sg1|            1|          0|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:18.111|
+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+
Total line number = 2
It costs 0.165s

IoTDB&gt; show data regions of database root.sg1, root.sg2 on nodeid 1, 2 
+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+
|RegionId|        Type| Status|Database|SeriesSlotNum|TimeSlotNum|DataNodeId|RpcAddress|RpcPort|    Role|             CreateTime|
+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+
|       0|  DataRegion|Running|root.sg1|            1|          1|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:18.520|
|       0|  DataRegion|Running|root.sg1|            1|          1|         2| 127.0.0.1|   6668|  Leader|2023-03-07T17:32:18.749|
|       2|  DataRegion|Running|root.sg2|            1|          1|         1| 127.0.0.1|   6667|  Leader|2023-03-07T17:32:19.834|
|       2|  DataRegion|Running|root.sg2|            1|          1|         2| 127.0.0.1|   6668|Follower|2023-03-07T17:32:19.011|
+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+
Total line number = 4
It costs 0.165s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="region-状态定义" tabindex="-1"><a class="header-anchor" href="#region-状态定义" aria-hidden="true">#</a> Region 状态定义</h4><p>Region 继承所在 DataNode 的状态，对 Region 各状态定义如下：</p><ul><li><strong>Running</strong>: Region 所在 DataNode 正常运行，Region 可读可写</li><li><strong>Unknown</strong>: Region 所在 DataNode 未正常上报心跳，ConfigNode 认为该 Region 不可读写</li><li><strong>Removing</strong>: Region 所在 DataNode 正在被移出集群，Region 不可读写</li><li><strong>ReadOnly</strong>: Region 所在 DataNode 的磁盘剩余空间低于 disk_warning_threshold（默认 5%），Region 可读，但不能写入，不能同步数据</li></ul><p><strong>单个 Region 的状态切换不会影响所属 RegionGroup 的运行</strong>， 在设置多副本集群时（即元数据副本数和数据副本数大于 1）， 同 RegionGroup 其它 Running 状态的 Region 能保证该 RegionGroup 的高可用性。</p><p><strong>对于一个 RegionGroup：</strong></p><ul><li>当且仅当严格多于一半的 Region 处于 Running 状态时， 该 RegionGroup 可进行数据的查询、写入和删除操作</li><li>如果处于 Running 状态的 Region 少于一半，该 RegionGroup 不可进行数据的数据的查询、写入和删除操作</li></ul><h3 id="展示集群槽信息" tabindex="-1"><a class="header-anchor" href="#展示集群槽信息" aria-hidden="true">#</a> 展示集群槽信息</h3><p>集群使用分区来管理元数据和数据，分区定义如下：</p><ul><li><strong>元数据分区</strong>：SeriesSlot</li><li><strong>数据分区</strong>：&lt;SeriesSlot，SeriesTimeSlot&gt;</li></ul>`,64),g=n(`<p>可以使用以下 SQL 来查询分区对应信息：</p><h4 id="展示数据分区所在的-dataregion" tabindex="-1"><a class="header-anchor" href="#展示数据分区所在的-dataregion" aria-hidden="true">#</a> 展示数据分区所在的 DataRegion</h4><p>展示某数据库或某设备的数据分区所在的 DataRegion:</p><ul><li><code>- SHOW DATA REGIONID WHERE (DATABASE=root.xxx |DEVICE=root.xxx.xxx) (AND TIME=xxxxx)?</code></li></ul><p>有如下几点说明：</p><ol><li><p>DEVICE 为设备名对应唯一的 SeriesSlot，TIME 为时间戳或者通用时间对应唯一的 SeriesTimeSlot。</p></li><li><p>DATABASE 和 DEVICE 必须以 root 开头，如果是不存在的路径时返回空，不报错，下同。</p></li><li><p>DATABASE 和 DEVICE 目前不支持通配符匹配或者批量查询，如果包含 * 或 ** 的通配符或者输入多个 DATABASE 和 DEVICE 则会报错，下同。</p></li><li><p>TIME 支持时间戳和通用日期。对于时间戳，必须得大于等于0，对于通用日期，需要不早于1970-01-01 00:00:00</p></li></ol><p>示例:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show data regionid where device=root.sg.m1.d1
+--------+
|RegionId|
+--------+
|       1|
|       2|
+--------+
Total line number = 2
It costs 0.006s

IoTDB&gt; show data regionid where device=root.sg.m1.d1 and time=604800000
+--------+
|RegionId|
+--------+
|       1|
+--------+
Total line number = 1
It costs 0.006s

IoTDB&gt; show data regionid where device=root.sg.m1.d1 and time=1970-01-08T00:00:00.000
+--------+
|RegionId|
+--------+
|       1|
+--------+
Total line number = 1
It costs 0.006s

IoTDB&gt; show data regionid where database=root.sg
+--------+
|RegionId|
+--------+
|       1|
|       2|
+--------+
Total line number = 2
It costs 0.006s

IoTDB&gt; show data regionid where database=root.sg and time=604800000
+--------+
|RegionId|
+--------+
|       1|
+--------+
Total line number = 1
It costs 0.006s

IoTDB&gt; show data regionid where database=root.sg and time=1970-01-08T00:00:00.000
+--------+
|RegionId|
+--------+
|       1|
+--------+
Total line number = 1
It costs 0.006s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="展示元数据分区所在的-schemaregion" tabindex="-1"><a class="header-anchor" href="#展示元数据分区所在的-schemaregion" aria-hidden="true">#</a> 展示元数据分区所在的 SchemaRegion</h4><p>展示某数据库或某设备的元数据分区所在的 SchemaRegion：</p><ul><li><code>SHOW SCHEMA REGIONID WHERE (DATABASE=root.xxx | DEVICE=root.xxx.xxx)</code></li></ul><p>示例:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show schema regionid where device=root.sg.m1.d2
+--------+
|RegionId|
+--------+
|       0|
+--------+
Total line number = 1
It costs 0.007s

IoTDB&gt; show schema regionid where database=root.sg
+--------+
|RegionId|
+--------+
|       0|
+--------+
Total line number = 1
It costs 0.007s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="展示数据库的序列槽" tabindex="-1"><a class="header-anchor" href="#展示数据库的序列槽" aria-hidden="true">#</a> 展示数据库的序列槽</h4><p>展示某数据库内数据或元数据的序列槽（SeriesSlot）：</p><ul><li><code>SHOW (DATA|SCHEMA) SERIESSLOTID WHERE DATABASE=root.xxx</code></li></ul><p>示例:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show data seriesslotid where database = root.sg
+------------+
|SeriesSlotId|
+------------+
|        5286|
+------------+
Total line number = 1
It costs 0.007s

IoTDB&gt; show schema seriesslotid where  database = root.sg
+------------+
|SeriesSlotId|
+------------+
|        5286|
+------------+
Total line number = 1
It costs 0.006s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="展示过滤条件下的时间分区" tabindex="-1"><a class="header-anchor" href="#展示过滤条件下的时间分区" aria-hidden="true">#</a> 展示过滤条件下的时间分区</h4><p>展示某设备或某数据库或某dataRegion的时间分区（TimePartition）：</p><ul><li><code>SHOW TIMEPARTITION WHERE (DEVICE=root.a.b |REGIONID = r0 | DATABASE=root.xxx) (AND STARTTIME=t1)?(AND ENDTIME=t2)?</code></li></ul><p>有如下几点说明：</p><ol><li><p>TimePartition 是 SeriesTimeSlotId 的简称。</p></li><li><p>REGIONID 如果为 schemaRegion 的 Id 返回空，不报错。</p></li><li><p>REGIONID 不支持批量查询，如果输入多个 REGIONID 则会报错，下同。</p></li><li><p>STARTTIME 和 ENDTIME 支持时间戳和通用日期。对于时间戳，必须得大于等于0，对于通用日期，需要不早于1970-01-01 00:00:00。</p></li><li><p>返回结果中的 StartTime 为 TimePartition 对应时间区间的起始时间。</p></li></ol><p>示例:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show timePartition where device=root.sg.m1.d1
+-------------------------------------+
|TimePartition|              StartTime|
+-------------------------------------+
|            0|1970-01-01T00:00:00.000|
+-------------------------------------+
Total line number = 1
It costs 0.007s

IoTDB&gt; show timePartition where regionId = 1
+-------------------------------------+
|TimePartition|              StartTime|
+-------------------------------------+
|            0|1970-01-01T00:00:00.000|
+-------------------------------------+
Total line number = 1
It costs 0.007s

IoTDB&gt; show timePartition where database = root.sg 
+-------------------------------------+
|TimePartition|              StartTime|
+-------------------------------------+
|            0|1970-01-01T00:00:00.000|
+-------------------------------------+
|            1|1970-01-08T00:00:00.000|
+-------------------------------------+
Total line number = 2
It costs 0.007s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="统计过滤条件下的时间分区个数" tabindex="-1"><a class="header-anchor" href="#统计过滤条件下的时间分区个数" aria-hidden="true">#</a> 统计过滤条件下的时间分区个数</h4><p>统计某设备或某数据库或某dataRegion的时间分区（TimePartition）：</p><ul><li><code>COUNT TIMEPARTITION WHERE (DEVICE=root.a.b |REGIONID = r0 | DATABASE=root.xxx) (AND STARTTIME=t1)?(AND ENDTIME=t2)?</code></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; count timePartition where device=root.sg.m1.d1
+--------------------+
|count(timePartition)|
+--------------------+
|                   1|
+--------------------+
Total line number = 1
It costs 0.007s

IoTDB&gt; count timePartition where regionId = 1
+--------------------+
|count(timePartition)|
+--------------------+
|                   1|
+--------------------+
Total line number = 1
It costs 0.007s

IoTDB&gt; count timePartition where database = root.sg 
+--------------------+
|count(timePartition)|
+--------------------+
|                   2|
+--------------------+
Total line number = 1
It costs 0.007s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="迁移-region" tabindex="-1"><a class="header-anchor" href="#迁移-region" aria-hidden="true">#</a> 迁移 Region</h3><p>以下 SQL 语句可以被用于手动迁移一个 region， 可用于负载均衡或其他目的。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>MIGRATE REGION &lt;Region-id&gt; FROM &lt;original-DataNodeId&gt; TO &lt;dest-DataNodeId&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>示例:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; SHOW REGIONS
+--------+------------+-------+-------------+------------+----------+----------+----------+-------+--------+
|RegionId|        Type| Status|     Database|SeriesSlotId|TimeSlotId|DataNodeId|RpcAddress|RpcPort|    Role|
+--------+------------+-------+-------------+------------+----------+----------+----------+-------+--------+
|       0|SchemaRegion|Running|root.test.g_0|         500|         0|         3| 127.0.0.1|   6670|  Leader|
|       0|SchemaRegion|Running|root.test.g_0|         500|         0|         4| 127.0.0.1|   6681|Follower|
|       0|SchemaRegion|Running|root.test.g_0|         500|         0|         5| 127.0.0.1|   6668|Follower|
|       1|  DataRegion|Running|root.test.g_0|         183|       200|         1| 127.0.0.1|   6667|Follower|
|       1|  DataRegion|Running|root.test.g_0|         183|       200|         3| 127.0.0.1|   6670|Follower|
|       1|  DataRegion|Running|root.test.g_0|         183|       200|         7| 127.0.0.1|   6669|  Leader|
|       2|  DataRegion|Running|root.test.g_0|         181|       200|         3| 127.0.0.1|   6670|  Leader|
|       2|  DataRegion|Running|root.test.g_0|         181|       200|         4| 127.0.0.1|   6681|Follower|
|       2|  DataRegion|Running|root.test.g_0|         181|       200|         5| 127.0.0.1|   6668|Follower|
|       3|  DataRegion|Running|root.test.g_0|         180|       200|         1| 127.0.0.1|   6667|Follower|
|       3|  DataRegion|Running|root.test.g_0|         180|       200|         5| 127.0.0.1|   6668|  Leader|
|       3|  DataRegion|Running|root.test.g_0|         180|       200|         7| 127.0.0.1|   6669|Follower|
|       4|  DataRegion|Running|root.test.g_0|         179|       200|         3| 127.0.0.1|   6670|Follower|
|       4|  DataRegion|Running|root.test.g_0|         179|       200|         4| 127.0.0.1|   6681|  Leader|
|       4|  DataRegion|Running|root.test.g_0|         179|       200|         7| 127.0.0.1|   6669|Follower|
|       5|  DataRegion|Running|root.test.g_0|         179|       200|         1| 127.0.0.1|   6667|  Leader|
|       5|  DataRegion|Running|root.test.g_0|         179|       200|         4| 127.0.0.1|   6681|Follower|
|       5|  DataRegion|Running|root.test.g_0|         179|       200|         5| 127.0.0.1|   6668|Follower|
+--------+------------+-------+-------------+------------+----------+----------+----------+-------+--------+
Total line number = 18
It costs 0.161s

IoTDB&gt; MIGRATE REGION 1 FROM 3 TO 4
Msg: The statement is executed successfully.

IoTDB&gt; SHOW REGIONS
+--------+------------+-------+-------------+------------+----------+----------+----------+-------+--------+
|RegionId|        Type| Status|     Database|SeriesSlotId|TimeSlotId|DataNodeId|RpcAddress|RpcPort|    Role|
+--------+------------+-------+-------------+------------+----------+----------+----------+-------+--------+
|       0|SchemaRegion|Running|root.test.g_0|         500|         0|         3| 127.0.0.1|   6670|  Leader|
|       0|SchemaRegion|Running|root.test.g_0|         500|         0|         4| 127.0.0.1|   6681|Follower|
|       0|SchemaRegion|Running|root.test.g_0|         500|         0|         5| 127.0.0.1|   6668|Follower|
|       1|  DataRegion|Running|root.test.g_0|         183|       200|         1| 127.0.0.1|   6667|Follower|
|       1|  DataRegion|Running|root.test.g_0|         183|       200|         4| 127.0.0.1|   6681|Follower|
|       1|  DataRegion|Running|root.test.g_0|         183|       200|         7| 127.0.0.1|   6669|  Leader|
|       2|  DataRegion|Running|root.test.g_0|         181|       200|         3| 127.0.0.1|   6670|  Leader|
|       2|  DataRegion|Running|root.test.g_0|         181|       200|         4| 127.0.0.1|   6681|Follower|
|       2|  DataRegion|Running|root.test.g_0|         181|       200|         5| 127.0.0.1|   6668|Follower|
|       3|  DataRegion|Running|root.test.g_0|         180|       200|         1| 127.0.0.1|   6667|Follower|
|       3|  DataRegion|Running|root.test.g_0|         180|       200|         5| 127.0.0.1|   6668|  Leader|
|       3|  DataRegion|Running|root.test.g_0|         180|       200|         7| 127.0.0.1|   6669|Follower|
|       4|  DataRegion|Running|root.test.g_0|         179|       200|         3| 127.0.0.1|   6670|Follower|
|       4|  DataRegion|Running|root.test.g_0|         179|       200|         4| 127.0.0.1|   6681|  Leader|
|       4|  DataRegion|Running|root.test.g_0|         179|       200|         7| 127.0.0.1|   6669|Follower|
|       5|  DataRegion|Running|root.test.g_0|         179|       200|         1| 127.0.0.1|   6667|  Leader|
|       5|  DataRegion|Running|root.test.g_0|         179|       200|         4| 127.0.0.1|   6681|Follower|
|       5|  DataRegion|Running|root.test.g_0|         179|       200|         5| 127.0.0.1|   6668|Follower|
+--------+------------+-------+-------------+------------+----------+----------+----------+-------+--------+
Total line number = 18
It costs 0.165s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34);function m(b,R){const i=d("RouterLink");return l(),a("div",null,[o(`

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

`),c,t("p",null,[e("在文档"),r(i,{to:"/zh/UserGuide/Master/Cluster/Cluster-Concept.html"},{default:v(()=>[e("Cluster-Concept")]),_:1}),e("中可以查看详细信息。")]),g])}const T=s(u,[["render",m],["__file","Cluster-Maintenance.html.vue"]]);export{T as default};