import{_ as e,o as n,c as i,a as s,f as d}from"./app-6e7c3980.js";const a={},l=d(`<h1 id="集群运维命令" tabindex="-1"><a class="header-anchor" href="#集群运维命令" aria-hidden="true">#</a> 集群运维命令</h1><h2 id="展示集群配置" tabindex="-1"><a class="header-anchor" href="#展示集群配置" aria-hidden="true">#</a> 展示集群配置</h2><p>当前 IoTDB 支持使用如下 SQL 展示集群的关键参数：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW VARIABLES
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>示例：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show variables
+----------------------------------+-----------------------------------------------------------------+
|                          Variable|                                                            Value|
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
|            DataRegionPerProcessor|                                                              1.0|
|           LeastDataRegionGroupNum|                                                                5|
|                     SeriesSlotNum|                                                            10000|
|           SeriesSlotExecutorClass|org.apache.iotdb.commons.partition.executor.hash.BKDRHashExecutor|
|         DiskSpaceWarningThreshold|                                                             0.05|
+----------------------------------+-----------------------------------------------------------------+
Total line number = 15
It costs 0.225s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：</strong> 必须保证该 SQL 展示的所有配置参数在同一集群各个节点完全一致</p><h2 id="展示-confignode-信息" tabindex="-1"><a class="header-anchor" href="#展示-confignode-信息" aria-hidden="true">#</a> 展示 ConfigNode 信息</h2><p>当前 IoTDB 支持使用如下 SQL 展示 ConfigNode 的信息：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW CONFIGNODES
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="confignode-状态定义" tabindex="-1"><a class="header-anchor" href="#confignode-状态定义" aria-hidden="true">#</a> ConfigNode 状态定义</h3><p>对 ConfigNode 各状态定义如下：</p><ul><li><strong>Running</strong>: ConfigNode 正常运行</li><li><strong>Unknown</strong>: ConfigNode 未正常上报心跳</li></ul><h2 id="展示-datanode-信息" tabindex="-1"><a class="header-anchor" href="#展示-datanode-信息" aria-hidden="true">#</a> 展示 DataNode 信息</h2><p>当前 IoTDB 支持使用如下 SQL 展示 DataNode 的信息：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW DATANODES
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="datanode-状态定义" tabindex="-1"><a class="header-anchor" href="#datanode-状态定义" aria-hidden="true">#</a> DataNode 状态定义</h3><p>DataNode 的状态机如下图所示：<br><img style="width:100%;max-width:500px;max-height:500px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Cluster/DataNode-StateMachine-ZH.jpg?raw=true"></p><p>对 DataNode 各状态定义如下：</p><ul><li><strong>Running</strong>: DataNode 正常运行，可读可写</li><li><strong>Unknown</strong>: DataNode 未正常上报心跳，ConfigNode 认为该 DataNode 不可读写</li><li><strong>Removing</strong>: DataNode 正在移出集群，不可读写</li><li><strong>ReadOnly</strong>: DataNode 磁盘剩余空间低于 disk_warning_threshold（默认 5%），DataNode 可读但不能写入，不能同步数据</li></ul><h2 id="展示全部节点信息" tabindex="-1"><a class="header-anchor" href="#展示全部节点信息" aria-hidden="true">#</a> 展示全部节点信息</h2><p>当前 IoTDB 支持使用如下 SQL 展示全部节点的信息：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW CLUSTER
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="展示-region-信息" tabindex="-1"><a class="header-anchor" href="#展示-region-信息" aria-hidden="true">#</a> 展示 Region 信息</h2><p>集群中以 SchemaRegion/DataRegion 作为元数据/数据的复制和管理单元，Region 的状态和分布对于系统运维和测试有很大帮助，如以下场景：</p><ul><li>查看集群中各个 Region 被分配到了哪些 DataNode，是否均衡</li><li>查看集群中各个 Region 被分配了哪些分区，是否均衡</li><li>查看集群中各个 RegionGroup 的 leader 被分配到了哪些 DataNode，是否均衡</li></ul><p>当前 IoTDB 支持使用如下 SQL 展示 Region 信息：</p><ul><li><code>SHOW REGIONS</code>: 展示所有 Region 分布</li><li><code>SHOW SCHEMA REGIONS</code>: 展示所有 SchemaRegion 分布</li><li><code>SHOW DATA REGIONS</code>: 展示所有 DataRegion 分布</li><li><code>SHOW (DATA|SCHEMA)? REGIONS OF DATABASE &lt;sg1,sg2,...&gt;</code>: 展示指定数据库 &lt;sg1,sg2,...&gt; 对应的 Region 分布</li></ul><p>展示所有 Region 的分布：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show regions
+--------+------------+-------+--------+-----------+---------+----------+----------+-------+--------+
|RegionId|        Type| Status|Database|SeriesSlots|TimeSlots|DataNodeId|RpcAddress|RpcPort|    Role|
+--------+------------+-------+--------+-----------+---------+----------+----------+-------+--------+
|       0|  DataRegion|Running|root.sg1|          1|        1|         1| 127.0.0.1|   6667|Follower|
|       0|  DataRegion|Running|root.sg1|          1|        1|         2| 127.0.0.1|   6668|  Leader|
|       0|  DataRegion|Running|root.sg1|          1|        1|         3| 127.0.0.1|   6669|Follower|
|       1|SchemaRegion|Running|root.sg1|          1|        0|         1| 127.0.0.1|   6667|Follower|
|       1|SchemaRegion|Running|root.sg1|          1|        0|         2| 127.0.0.1|   6668|Follower|
|       1|SchemaRegion|Running|root.sg1|          1|        0|         3| 127.0.0.1|   6669|  Leader|
|       2|  DataRegion|Running|root.sg2|          1|        1|         1| 127.0.0.1|   6667|  Leader|
|       2|  DataRegion|Running|root.sg2|          1|        1|         2| 127.0.0.1|   6668|Follower|
|       2|  DataRegion|Running|root.sg2|          1|        1|         3| 127.0.0.1|   6669|Follower|
|       3|SchemaRegion|Running|root.sg2|          1|        0|         1| 127.0.0.1|   6667|Follower|
|       3|SchemaRegion|Running|root.sg2|          1|        0|         2| 127.0.0.1|   6668|  Leader|
|       3|SchemaRegion|Running|root.sg2|          1|        0|         3| 127.0.0.1|   6669|Follower|
+--------+------------+-------+--------+-----------+---------+----------+----------+-------+--------+
Total line number = 12
It costs 0.165s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>展示 SchemaRegion 或 DataRegion 的分布：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show data regions
+--------+------------+-------+--------+-----------+---------+----------+----------+-------+--------+
|RegionId|        Type| Status|Database|SeriesSlots|TimeSlots|DataNodeId|RpcAddress|RpcPort|    Role|
+--------+------------+-------+--------+-----------+---------+----------+----------+-------+--------+
|       0|  DataRegion|Running|root.sg1|          1|        1|         1| 127.0.0.1|   6667|Follower|
|       0|  DataRegion|Running|root.sg1|          1|        1|         2| 127.0.0.1|   6668|  Leader|
|       0|  DataRegion|Running|root.sg1|          1|        1|         3| 127.0.0.1|   6669|Follower|
|       2|  DataRegion|Running|root.sg2|          1|        1|         1| 127.0.0.1|   6667|  Leader|
|       2|  DataRegion|Running|root.sg2|          1|        1|         2| 127.0.0.1|   6668|Follower|
|       2|  DataRegion|Running|root.sg2|          1|        1|         3| 127.0.0.1|   6669|Follower|
+--------+------------+-------+--------+-----------+---------+----------+----------+-------+--------+
Total line number = 6
It costs 0.011s

IoTDB&gt; show schema regions
+--------+------------+-------+--------+-----------+---------+----------+----------+-------+--------+
|RegionId|        Type| Status|Database|SeriesSlots|TimeSlots|DataNodeId|RpcAddress|RpcPort|    Role|
+--------+------------+-------+--------+-----------+---------+----------+----------+-------+--------+
|       1|SchemaRegion|Running|root.sg1|          1|        0|         1| 127.0.0.1|   6667|Follower|
|       1|SchemaRegion|Running|root.sg1|          1|        0|         2| 127.0.0.1|   6668|Follower|
|       1|SchemaRegion|Running|root.sg1|          1|        0|         3| 127.0.0.1|   6669|  Leader|
|       3|SchemaRegion|Running|root.sg2|          1|        0|         1| 127.0.0.1|   6667|Follower|
|       3|SchemaRegion|Running|root.sg2|          1|        0|         2| 127.0.0.1|   6668|  Leader|
|       3|SchemaRegion|Running|root.sg2|          1|        0|         3| 127.0.0.1|   6669|Follower|
+--------+------------+-------+--------+-----------+---------+----------+----------+-------+--------+
Total line number = 6
It costs 0.012s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>展示指定数据库 &lt;sg1,sg2,...&gt; 对应的 Region 分布：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show regions of database root.sg1
+--------+------------+-------+--------+-----------+---------+----------+----------+-------+--------+
|RegionId|        Type| Status|Database|SeriesSlots|TimeSlots|DataNodeId|RpcAddress|RpcPort|    Role|
+--------+------------+-------+-- -----+-----------+---------+----------+----------+-------+--------+
|       0|  DataRegion|Running|root.sg1|          1|        1|         1| 127.0.0.1|   6667|Follower|
|       0|  DataRegion|Running|root.sg1|          1|        1|         2| 127.0.0.1|   6668|  Leader|
|       0|  DataRegion|Running|root.sg1|          1|        1|         3| 127.0.0.1|   6669|Follower|
|       1|SchemaRegion|Running|root.sg1|          1|        0|         1| 127.0.0.1|   6667|Follower|
|       1|SchemaRegion|Running|root.sg1|          1|        0|         2| 127.0.0.1|   6668|Follower|
|       1|SchemaRegion|Running|root.sg1|          1|        0|         3| 127.0.0.1|   6669|  Leader|
+--------+------------+-------+--------+-----------+---------+----------+----------+-------+--------+
Total line number = 6
It costs 0.007s

IoTDB&gt; show regions of database root.sg1, root.sg2
+--------+------------+-------+--------+-----------+---------+----------+----------+-------+--------+
|RegionId|        Type| Status|Database|SeriesSlots|TimeSlots|DataNodeId|RpcAddress|RpcPort|    Role|
+--------+------------+-------+--------+-----------+---------+----------+----------+-------+--------+
|       0|  DataRegion|Running|root.sg1|          1|        1|         1| 127.0.0.1|   6667|Follower|
|       0|  DataRegion|Running|root.sg1|          1|        1|         2| 127.0.0.1|   6668|  Leader|
|       0|  DataRegion|Running|root.sg1|          1|        1|         3| 127.0.0.1|   6669|Follower|
|       1|SchemaRegion|Running|root.sg1|          1|        0|         1| 127.0.0.1|   6667|Follower|
|       1|SchemaRegion|Running|root.sg1|          1|        0|         2| 127.0.0.1|   6668|Follower|
|       1|SchemaRegion|Running|root.sg1|          1|        0|         3| 127.0.0.1|   6669|  Leader|
|       2|  DataRegion|Running|root.sg2|          1|        1|         1| 127.0.0.1|   6667|  Leader|
|       2|  DataRegion|Running|root.sg2|          1|        1|         2| 127.0.0.1|   6668|Follower|
|       2|  DataRegion|Running|root.sg2|          1|        1|         3| 127.0.0.1|   6669|Follower|
|       3|SchemaRegion|Running|root.sg2|          1|        0|         1| 127.0.0.1|   6667|Follower|
|       3|SchemaRegion|Running|root.sg2|          1|        0|         2| 127.0.0.1|   6668|  Leader|
|       3|SchemaRegion|Running|root.sg2|          1|        0|         3| 127.0.0.1|   6669|Follower|
+--------+------------+-------+--------+-----------+---------+----------+----------+-------+--------+
Total line number = 12
It costs 0.009s

IoTDB&gt; show data regions of database root.sg1, root.sg2
+--------+----------+-------+--------+-----------+---------+----------+----------+-------+--------+
|RegionId|      Type| Status|Database|SeriesSlots|TimeSlots|DataNodeId|RpcAddress|RpcPort|    Role|
+--------+----------+-------+--------+-----------+---------+----------+----------+-------+--------+
|       0|DataRegion|Running|root.sg1|          1|        1|         1| 127.0.0.1|   6667|Follower|
|       0|DataRegion|Running|root.sg1|          1|        1|         2| 127.0.0.1|   6668|  Leader|
|       0|DataRegion|Running|root.sg1|          1|        1|         3| 127.0.0.1|   6669|Follower|
|       2|DataRegion|Running|root.sg2|          1|        1|         1| 127.0.0.1|   6667|  Leader|
|       2|DataRegion|Running|root.sg2|          1|        1|         2| 127.0.0.1|   6668|Follower|
|       2|DataRegion|Running|root.sg2|          1|        1|         3| 127.0.0.1|   6669|Follower|
+--------+----------+-------+--------+-----------+---------+----------+----------+-------+--------+
Total line number = 6
It costs 0.007s

IoTDB&gt; show schema regions of database root.sg1, root.sg2
+--------+------------+-------+--------+-----------+---------+----------+----------+-------+--------+
|RegionId|        Type| Status|Database|SeriesSlots|TimeSlots|DataNodeId|RpcAddress|RpcPort|    Role|
+--------+------------+-------+--------+-----------+---------+----------+----------+-------+--------+
|       1|SchemaRegion|Running|root.sg1|          1|        0|         1| 127.0.0.1|   6667|Follower|
|       1|SchemaRegion|Running|root.sg1|          1|        0|         2| 127.0.0.1|   6668|Follower|
|       1|SchemaRegion|Running|root.sg1|          1|        0|         3| 127.0.0.1|   6669|  Leader|
|       3|SchemaRegion|Running|root.sg2|          1|        0|         1| 127.0.0.1|   6667|Follower|
|       3|SchemaRegion|Running|root.sg2|          1|        0|         2| 127.0.0.1|   6668|  Leader|
|       3|SchemaRegion|Running|root.sg2|          1|        0|         3| 127.0.0.1|   6669|Follower|
+--------+------------+-------+--------+-----------+---------+----------+----------+-------+--------+
Total line number = 6
It costs 0.009s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="region-状态定义" tabindex="-1"><a class="header-anchor" href="#region-状态定义" aria-hidden="true">#</a> Region 状态定义</h3><p>Region 继承所在 DataNode 的状态，对 Region 各状态定义如下：</p><ul><li><strong>Running</strong>: Region 所在 DataNode 正常运行，Region 可读可写</li><li><strong>Unknown</strong>: Region 所在 DataNode 未正常上报心跳，ConfigNode 认为该 Region 不可读写</li><li><strong>Removing</strong>: Region 所在 DataNode 正在被移出集群，Region 不可读写</li><li><strong>ReadOnly</strong>: Region 所在 DataNode 的磁盘剩余空间低于 disk_warning_threshold（默认 5%），Region 可读，但不能写入，不能同步数据</li></ul><h2 id="展示集群槽信息" tabindex="-1"><a class="header-anchor" href="#展示集群槽信息" aria-hidden="true">#</a> 展示集群槽信息</h2><p>集群使用分区来管理元数据和数据，分区定义如下：</p><ul><li><strong>元数据分区</strong>：序列槽</li><li><strong>数据分区</strong>：&lt;序列槽，时间分区槽&gt;</li></ul><p>可以使用以下 SQL 来查询分区对应信息：</p><h3 id="展示数据分区所在的-dataregion" tabindex="-1"><a class="header-anchor" href="#展示数据分区所在的-dataregion" aria-hidden="true">#</a> 展示数据分区所在的 DataRegion</h3><p>展示一个数据分区（或一个序列槽下的所有数据分区）所在的 DataRegion:</p><ul><li><code>SHOW DATA REGIONID OF root.sg WHERE SERIESSLOTID=s0 (AND TIMESLOTID=t0)</code></li></ul><p>示例:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show data regionid of root.sg where seriesslotid=5286 and timeslotid=0
+--------+
|RegionId|
+--------+
|       1|
+--------+
Total line number = 1
It costs 0.006s

IoTDB&gt; show data regionid of root.sg where seriesslotid=5286
+--------+
|RegionId|
+--------+
|       1|
|       2|
+--------+
Total line number = 2
It costs 0.006s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="展示元数据分区所在的-schemaregion" tabindex="-1"><a class="header-anchor" href="#展示元数据分区所在的-schemaregion" aria-hidden="true">#</a> 展示元数据分区所在的 SchemaRegion</h3><p>展示一个元数据分区所在的 SchemaRegion：</p><ul><li><code>SHOW SCHEMA REGIONID OF root.sg WHERE SERIESSLOTID=s0</code></li></ul><p>示例:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show schema regionid of root.sg where seriesslotid=5286
+--------+
|RegionId|
+--------+
|       0|
+--------+
Total line number = 1
It costs 0.007s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="展示序列槽下的时间槽" tabindex="-1"><a class="header-anchor" href="#展示序列槽下的时间槽" aria-hidden="true">#</a> 展示序列槽下的时间槽</h3><p>展示一个序列槽下的所有时间槽：</p><ul><li><code>SHOW TIMESLOTID OF root.sg WHERE SERIESLOTID=s0 (AND STARTTIME=t1) (AND ENDTIME=t2)</code></li></ul><p>示例:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show timeslotid of root.sg where seriesslotid=5286
+----------+
|TimeSlotId|
+----------+
|         0|
|      1000|
+----------+
Total line number = 1
It costs 0.007s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="展示数据库的序列槽" tabindex="-1"><a class="header-anchor" href="#展示数据库的序列槽" aria-hidden="true">#</a> 展示数据库的序列槽</h3><p>展示一个数据库内，数据，元数据或是所有的序列槽：</p><ul><li><code>SHOW (DATA|SCHEMA)? SERIESSLOTID OF root.sg</code></li></ul><p>示例:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show data seriesslotid of root.sg
+------------+
|SeriesSlotId|
+------------+
|        5286|
+------------+
Total line number = 1
It costs 0.007s

IoTDB&gt; show schema seriesslotid of root.sg
+------------+
|SeriesSlotId|
+------------+
|        5286|
+------------+
Total line number = 1
It costs 0.006s

IoTDB&gt; show seriesslotid of root.sg
+------------+
|SeriesSlotId|
+------------+
|        5286|
+------------+
Total line number = 1
It costs 0.006s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,73);function o(r,t){return n(),i("div",null,[s(`

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

`),l])}const c=e(a,[["render",o],["__file","Cluster-Maintenance.html.vue"]]);export{c as default};
