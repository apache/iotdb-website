import{_ as s,r as a,o as d,c as t,a as l,d as o,e,b as r,w as u,f as n}from"./app-342a215c.js";const c={},v=n(`<h1 id="cluster-information-query-command" tabindex="-1"><a class="header-anchor" href="#cluster-information-query-command" aria-hidden="true">#</a> Cluster Information Query Command</h1><h2 id="show-variables" tabindex="-1"><a class="header-anchor" href="#show-variables" aria-hidden="true">#</a> Show Variables</h2><p>Currently, IoTDB supports showing key parameters of the cluster:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW VARIABLES
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Eg:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show variables
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="confignode-status-definition" tabindex="-1"><a class="header-anchor" href="#confignode-status-definition" aria-hidden="true">#</a> ConfigNode status definition</h3><p>The ConfigNode statuses are defined as follows:</p><ul><li><strong>Running</strong>: The ConfigNode is running properly.</li><li><strong>Unknown</strong>: The ConfigNode doesn&#39;t report heartbeat properly. <ul><li>Can&#39;t receive data synchronized from other ConfigNodes</li><li>Won&#39;t be selected as the cluster ConfigNode-leader</li></ul></li></ul><h2 id="show-datanode-information" tabindex="-1"><a class="header-anchor" href="#show-datanode-information" aria-hidden="true">#</a> Show DataNode information</h2><p>Currently, IoTDB supports showing DataNode information by the following SQL:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW DATANODES
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="datanode-status-definition" tabindex="-1"><a class="header-anchor" href="#datanode-status-definition" aria-hidden="true">#</a> DataNode status definition</h3><p>The state machine of DataNode is shown in the figure below:<br><img style="width:100%;max-width:500px;max-height:500px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Cluster/DataNode-StateMachine-EN.jpg?raw=true"></p><p>The DataNode statuses are defined as follows:</p><ul><li><strong>Running</strong>: The DataNode is running properly and is readable and writable.</li><li><strong>Unknown</strong>: The DataNode doesn&#39;t report heartbeat properly, the ConfigNode considers the DataNode as unreadable and un-writable. <ul><li>The cluster is still readable and writable if some DataNodes are Unknown</li></ul></li><li><strong>Removing</strong>: The DataNode is being removed from the cluster and is unreadable and un-writable. <ul><li>The cluster is still readable and writable if some DataNodes are Removing</li></ul></li><li><strong>ReadOnly</strong>: The remaining disk space of DataNode is lower than disk_warning_threshold(default is 5%), the DataNode is readable but un-writable and cannot synchronize data. <ul><li>The cluster is still readable and writable if some DataNodes are ReadOnly</li><li>The schema and data in a ReadOnly DataNode is readable</li><li>The schema and data in a ReadOnly DataNode is deletable</li><li>A ReadOnly DataNode is creatable for schema, but un-writable for data</li><li>Data cannot be written to the cluster when all DataNodes are ReadOnly, but new Databases and schema is still creatable</li></ul></li></ul><p><strong>For a DataNode</strong>, the following table describes the impact of schema read, write, and deletion in different status:</p><table><thead><tr><th>DataNode status</th><th>readable</th><th>creatable</th><th>deletable</th></tr></thead><tbody><tr><td>Running</td><td>yes</td><td>yes</td><td>yes</td></tr><tr><td>Unknown</td><td>no</td><td>no</td><td>no</td></tr><tr><td>Removing</td><td>no</td><td>no</td><td>no</td></tr><tr><td>ReadOnly</td><td>yes</td><td>yes</td><td>yes</td></tr></tbody></table><p><strong>For a DataNode</strong>, the following table describes the impact of data read, write, and deletion in different status:</p><table><thead><tr><th>DataNode status</th><th>readable</th><th>writable</th><th>deletable</th></tr></thead><tbody><tr><td>Running</td><td>yes</td><td>yes</td><td>yes</td></tr><tr><td>Unknown</td><td>no</td><td>no</td><td>no</td></tr><tr><td>Removing</td><td>no</td><td>no</td><td>no</td></tr><tr><td>ReadOnly</td><td>yes</td><td>no</td><td>yes</td></tr></tbody></table><h2 id="show-all-node-information" tabindex="-1"><a class="header-anchor" href="#show-all-node-information" aria-hidden="true">#</a> Show all Node information</h2><p>Currently, IoTDB supports show the information of all Nodes by the following SQL:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SHOW CLUSTER
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="show-region-information" tabindex="-1"><a class="header-anchor" href="#show-region-information" aria-hidden="true">#</a> Show Region information</h2><p>The cluster uses a SchemaRegion/DataRegion as a unit for schema/data replication and data management.<br> The Region status and distribution is helpful for system operation and maintenance testing, as shown in the following scenarios:</p><ul><li>Check which DataNodes are allocated to each Region in the cluster and whether they are balanced.</li><li>Check the partitions allocated to each Region in the cluster and whether they are balanced.</li><li>Check which DataNodes are allocated by the leaders of each RegionGroup in the cluster and whether they are balanced.</li></ul><p>Currently, IoTDB supports show Region information by the following SQL:</p><ul><li><code>SHOW REGIONS</code>: Show distribution of all Regions.</li><li><code>SHOW SCHEMA REGIONS</code>: Show distribution of all SchemaRegions.</li><li><code>SHOW DATA REGIONS</code>: Show distribution of all DataRegions.</li><li><code>SHOW (DATA|SCHEMA)? REGIONS OF DATABASE &lt;sg1,sg2,...&gt;</code>: Show Region distribution of specified StorageGroups.</li><li><code>SHOW (DATA|SCHEMA)? REGIONS ON NODEID &lt;id1,id2,...&gt;</code>: Show Region distribution on specified Nodes.</li><li><code>SHOW (DATA|SCHEMA)? REGIONS (OF DATABASE &lt;sg1,sg2,...&gt;)? (ON NODEID &lt;id1,id2,...&gt;)?</code>: Show Region distribution of specified StorageGroups on specified Nodes.</li></ul><p>Show distribution of all Regions:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show regions
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The SeriesSlotNum refers to the number of the seriesSlots in the region. In the same light, the TimeSlotNum means the number of the timeSlots in the region.</p><p>Show the distribution of SchemaRegions or DataRegions:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show data regions
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Show Region distribution of specified DataBases:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show regions of database root.sg1
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Show Region distribution on specified Nodes:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show regions on nodeid 1
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Show Region distribution of specified StorageGroups on specified Nodes：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show regions of database root.sg1 on nodeid 1
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="region-status-definition" tabindex="-1"><a class="header-anchor" href="#region-status-definition" aria-hidden="true">#</a> Region status definition</h3><p>Region inherits the status of the DataNode where the Region resides. And Region states are defined as follows:</p><ul><li><strong>Running</strong>: The DataNode where the Region resides is running properly, the Region is readable and writable.</li><li><strong>Unknown</strong>: The DataNode where the Region resides doesn&#39;t report heartbeat properly, the ConfigNode considers the Region is unreadable and un-writable.</li><li><strong>Removing</strong>: The DataNode where the Region resides is being removed from the cluster, the Region is unreadable and un-writable.</li><li><strong>ReadOnly</strong>: The available disk space of the DataNode where the Region resides is lower than the disk_warning_threshold(5% by default). The Region is readable but un-writable and cannot synchronize data.</li></ul><p><strong>The status switchover of a Region doesn&#39;t affect the belonged RegionGroup</strong>,<br> when setting up a multi-replica cluster(i.e. the number of schema replica and data replica is greater than 1),<br> other Running Regions of the same RegionGroup ensure the high availability of RegionGroup.</p><p><strong>For a RegionGroup:</strong></p><ul><li>It&#39;s readable, writable and deletable if and only if more than half of its Regions are Running</li><li>It&#39;s unreadable, un-writable and un-deletable when the number of its Running Regions is less than half</li></ul><h2 id="show-cluster-slots-information" tabindex="-1"><a class="header-anchor" href="#show-cluster-slots-information" aria-hidden="true">#</a> Show cluster slots information</h2><p>The cluster uses partitions for schema and data arrangement, the partition defined as follows:</p><ul><li><code>SchemaPartition</code>: SeriesSlot</li><li><code>DataPartition</code>: &lt;SeriesSlot, SeriesTimeSlot&gt;</li></ul>`,64),g=n(`<p>The cluster slots information can be shown by the following SQLs:</p><h3 id="show-the-dataregion-where-a-datapartition-resides-in" tabindex="-1"><a class="header-anchor" href="#show-the-dataregion-where-a-datapartition-resides-in" aria-hidden="true">#</a> Show the DataRegion where a DataPartition resides in</h3><p>Show the DataRegion where a DataPartition(or all DataPartitions under a same series slot) resides in:</p><ul><li><code>SHOW DATA REGIONID OF root.sg WHERE SERIESSLOTID=s0 (AND TIMESLOTID=t0)</code></li></ul><p>Specifications:</p><ol><li><p>The s0, t0 must be numbers.</p></li><li><p>The &quot;TimeSlotId&quot; is short for &quot;SeriesTimeSlotId&quot;.</p></li><li><p>The &quot;SERIESSLOTID=s0&quot; can be substituted by &quot;DEVICEID=xxx.xx.xx&quot;. Using this, the sql will calculate the seriesSlot corresponding to that deviceId.</p></li><li><p>The &quot;TIMESLOTID=t0&quot; can be replaced by &quot;TIMESTAMP=t1&quot;. In this case, the sql will calculate the timeSlot the timestamp belongs to, which starts before the timeStamp and (implicitly) ends after it.</p></li></ol><p>Eg:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show data regionid of root.sg where seriesslotid=5286 and timeslotid=0
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="show-the-schemaregion-where-a-schemapartition-resides-in" tabindex="-1"><a class="header-anchor" href="#show-the-schemaregion-where-a-schemapartition-resides-in" aria-hidden="true">#</a> Show the SchemaRegion where a SchemaPartition resides in</h3><p>Show the SchemaRegion where a SchemaPartition resides in:</p><ul><li><code>SHOW SCHEMA REGIONID OF root.sg WHERE SERIESSLOTID=s0</code></li></ul><p>As is illustrated above, the SeriesSlotID and TimeSlotID are both replaceable.</p><p>Eg:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show schema regionid of root.sg where seriesslotid=5286
+--------+
|RegionId|
+--------+
|       0|
+--------+
Total line number = 1
It costs 0.007s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="show-the-time-slots-of-a-series-slot" tabindex="-1"><a class="header-anchor" href="#show-the-time-slots-of-a-series-slot" aria-hidden="true">#</a> Show the time slots of a series slot</h3><p>Show the time slots under a particular series slot.</p><ul><li><code>SHOW TIMESLOTID OF root.sg WHERE SERIESLOTID=s0 (AND STARTTIME=t1) (AND ENDTIME=t2)</code></li></ul><p>Eg:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; show timeslotid of root.sg where seriesslotid=5286
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="migrate-region" tabindex="-1"><a class="header-anchor" href="#migrate-region" aria-hidden="true">#</a> Migrate Region</h2><p>The following sql can be applied to manually migrate a region, for load balancing or other purposes.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>MIGRATE REGION &lt;Region-id&gt; FROM &lt;original-DataNodeId&gt; TO &lt;dest-DataNodeId&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Eg:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>IoTDB&gt; SHOW REGIONS
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29);function m(b,h){const i=a("RouterLink");return d(),t("div",null,[l(`

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

`),v,o("p",null,[e("More details can be found in the "),r(i,{to:"/UserGuide/V1.1.x/Cluster/Cluster-Concept.html"},{default:u(()=>[e("Cluster-Concept")]),_:1}),e(" document.")]),g])}const p=s(c,[["render",m],["__file","Cluster-Maintenance.html.vue"]]);export{p as default};
