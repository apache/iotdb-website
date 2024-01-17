import{_ as e,o as n,c as i,a as s,f as a}from"./app-1OOS2xKC.js";const d={},l=a(`<h1 id="cluster-information-query-command" tabindex="-1"><a class="header-anchor" href="#cluster-information-query-command" aria-hidden="true">#</a> Cluster Information Query Command</h1><h2 id="show-variables" tabindex="-1"><a class="header-anchor" href="#show-variables" aria-hidden="true">#</a> Show Variables</h2><p>Currently, IoTDB supports showing key parameters of the cluster:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW VARIABLES
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Eg:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show variables
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Notice:</strong> Ensure that all key parameters displayed in this SQL are consist on each node in the same cluster</p><h2 id="show-confignode-information" tabindex="-1"><a class="header-anchor" href="#show-confignode-information" aria-hidden="true">#</a> Show ConfigNode information</h2><p>Currently, IoTDB supports showing ConfigNode information by the following SQL:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW CONFIGNODES
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Eg:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show confignodes
+------+-------+---------------+------------+--------+
|NodeID| Status|InternalAddress|InternalPort|    Role|
+------+-------+---------------+------------+--------+
|     0|Running|      127.0.0.1|       10710|  Leader|
|     1|Running|      127.0.0.1|       10711|Follower|
|     2|Running|      127.0.0.1|       10712|Follower|
+------+-------+---------------+------------+--------+
Total line number = 3
It costs 0.030s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="confignode-status-definition" tabindex="-1"><a class="header-anchor" href="#confignode-status-definition" aria-hidden="true">#</a> ConfigNode status definition</h3><p>The ConfigNode statuses are defined as follows:</p><ul><li><strong>Running</strong>: The ConfigNode is running properly.</li><li><strong>Unknown</strong>: The ConfigNode doesn&#39;t report heartbeat properly.</li></ul><h2 id="show-datanode-information" tabindex="-1"><a class="header-anchor" href="#show-datanode-information" aria-hidden="true">#</a> Show DataNode information</h2><p>Currently, IoTDB supports showing DataNode information by the following SQL:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW DATANODES
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Eg:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; create timeseries root.sg.d1.s1 with datatype=BOOLEAN,encoding=PLAIN
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="datanode-status-definition" tabindex="-1"><a class="header-anchor" href="#datanode-status-definition" aria-hidden="true">#</a> DataNode status definition</h3><p>The state machine of DataNode is shown in the figure below:<br><img style="width:100%;max-width:500px;max-height:500px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Cluster/DataNode-StateMachine-EN.jpg?raw=true"></p><p>The DataNode statuses are defined as follows:</p><ul><li><strong>Running</strong>: The DataNode is running properly and is readable and writable.</li><li><strong>Unknown</strong>: The DataNode doesn&#39;t report heartbeat properly, the ConfigNode considers the DataNode as unreadable and un-writable.</li><li><strong>Removing</strong>: The DataNode is being removed from the cluster and is unreadable and un-writable.</li><li><strong>ReadOnly</strong>: The remaining disk space of DataNode is lower than disk_warning_threshold(default is 5%), the DataNode is readable but un-writable and cannot synchronize data.</li></ul><h2 id="show-all-node-information" tabindex="-1"><a class="header-anchor" href="#show-all-node-information" aria-hidden="true">#</a> Show all Node information</h2><p>Currently, IoTDB supports show the information of all Nodes by the following SQL:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW CLUSTER
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Eg:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show cluster
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After a node is stopped, its status will change, as shown below:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show cluster
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Show the details of all nodes:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW CLUSTER DETAILS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Eg:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show cluster details
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="show-region-information" tabindex="-1"><a class="header-anchor" href="#show-region-information" aria-hidden="true">#</a> Show Region information</h2><p>The cluster uses a SchemaRegion/DataRegion as a unit for schema/data replication and data management.<br> The Region status and distribution is helpful for system operation and maintenance testing, as shown in the following scenarios:</p><ul><li>Check which DataNodes are allocated to each Region in the cluster and whether they are balanced.</li><li>Check the partitions allocated to each Region in the cluster and whether they are balanced.</li><li>Check which DataNodes are allocated by the leaders of each RegionGroup in the cluster and whether they are balanced.</li></ul><p>Currently, IoTDB supports show Region information by the following SQL:</p><ul><li><code>SHOW REGIONS</code>: Show distribution of all Regions.</li><li><code>SHOW SCHEMA REGIONS</code>: Show distribution of all SchemaRegions.</li><li><code>SHOW DATA REGIONS</code>: Show distribution of all DataRegions.</li><li><code>SHOW (DATA|SCHEMA)? REGIONS OF DATABASE &lt;sg1,sg2,...&gt;</code>: Show Region distribution of specified StorageGroups.</li></ul><p>Show distribution of all Regions:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show regions
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Show the distribution of SchemaRegions or DataRegions:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show data regions
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Show Region distribution of specified StorageGroups:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show regions of database root.sg1
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="region-status-definition" tabindex="-1"><a class="header-anchor" href="#region-status-definition" aria-hidden="true">#</a> Region status definition</h3><p>Region inherits the status of the DataNode where the Region resides. And Region states are defined as follows:</p><ul><li><strong>Running</strong>: The DataNode where the Region resides is running properly, the Region is readable and writable.</li><li><strong>Unknown</strong>: The DataNode where the Region resides doesn&#39;t report heartbeat properly, the ConfigNode considers the Region is unreadable and un-writable.</li><li><strong>Removing</strong>: The DataNode where the Region resides is being removed from the cluster, the Region is unreadable and un-writable.</li><li><strong>ReadOnly</strong>: The available disk space of the DataNode where the Region resides is lower than the disk_warning_threshold(5% by default). The Region is readable but un-writable and cannot synchronize data.</li></ul><h2 id="show-cluster-slots-information" tabindex="-1"><a class="header-anchor" href="#show-cluster-slots-information" aria-hidden="true">#</a> Show cluster slots information</h2><p>The cluster uses partitions for schema and data arrangement, the partition is defined as follows:</p><ul><li><code>SchemaPartition</code>: series slot</li><li><code>DataPartition</code>: &lt;series slot, time slot&gt;</li></ul><p>The cluster slots information can be shown by the following SQLs:</p><h3 id="show-the-dataregion-where-a-datapartition-resides" tabindex="-1"><a class="header-anchor" href="#show-the-dataregion-where-a-datapartition-resides" aria-hidden="true">#</a> Show the DataRegion where a DataPartition resides</h3><p>Show the DataRegion where a DataPartition(or all DataPartitions under a same series slot) resides:</p><ul><li><code>SHOW DATA REGIONID OF root.sg WHERE SERIESSLOTID=s0 (AND TIMESLOTID=t0)</code></li></ul><p>Eg:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show data regionid of root.sg where seriesslotid=5286 and timeslotid=0
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="show-the-schemaregion-where-a-schemapartition-resides" tabindex="-1"><a class="header-anchor" href="#show-the-schemaregion-where-a-schemapartition-resides" aria-hidden="true">#</a> Show the SchemaRegion where a SchemaPartition resides</h3><p>Show the SchemaRegion where a SchemaPartition resides:</p><ul><li><code>SHOW SCHEMA REGIONID OF root.sg WHERE SERIESSLOTID=s0</code></li></ul><p>Eg:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show schema regionid of root.sg where seriesslotid=5286
+--------+
|RegionId|
+--------+
|       0|
+--------+
Total line number = 1
It costs 0.007s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="show-time-slots-of-a-series-slot" tabindex="-1"><a class="header-anchor" href="#show-time-slots-of-a-series-slot" aria-hidden="true">#</a> Show time slots of a series slot</h3><p>Show the time slots under a particular series slot.</p><ul><li><code>SHOW TIMESLOTID OF root.sg WHERE SERIESLOTID=s0 (AND STARTTIME=t1) (AND ENDTIME=t2)</code></li></ul><p>Eg:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show timeslotid of root.sg where seriesslotid=5286
+----------+
|TimeSlotId|
+----------+
|         0|
|      1000|
+----------+
Total line number = 1
It costs 0.007s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="show-database-s-series-slots" tabindex="-1"><a class="header-anchor" href="#show-database-s-series-slots" aria-hidden="true">#</a> Show Database&#39;s series slots</h3><p>Show the data/schema/all series slots related to a database:</p><ul><li><code>SHOW (DATA|SCHEMA)? SERIESSLOTID OF root.sg</code></li></ul><p>Eg:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show data seriesslotid of root.sg
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

`),l])}const c=e(d,[["render",o],["__file","Cluster-Maintenance.html.vue"]]);export{c as default};
