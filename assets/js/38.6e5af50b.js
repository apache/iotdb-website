(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{444:function(t,e,a){"use strict";a.r(e);var i=a(19),o=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"basic-concepts-of-iotdb-cluster"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#basic-concepts-of-iotdb-cluster"}},[t._v("#")]),t._v(" Basic Concepts of IoTDB Cluster")]),t._v(" "),e("p",[t._v("Apache IoTDB Cluster contains two types of nodes: ConfigNode and DataNode, each is a process that could be deployed independently.")]),t._v(" "),e("p",[t._v("An illustration of the cluster architecture：")]),t._v(" "),e("img",{staticStyle:{width:"100%","max-width":"500px","max-height":"400px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Cluster/Architecture.png?raw=true"}}),t._v(" "),e("p",[t._v("ConfigNode is the control node of the cluster, which manages the cluster's node status, partition information, etc. All ConfigNodes in the cluster form a highly available group, which is fully replicated.")]),t._v(" "),e("p",[t._v("Notice：The replication factor of ConfigNode is all ConfigNodes that has joined the Cluster. Over half of the ConfigNodes is Running could the cluster work.")]),t._v(" "),e("p",[t._v("DataNode stores the data and schema of the cluster, which manages multiple data regions and schema regions. Data is a time-value pair, and schema is the path and data type of each time series.")]),t._v(" "),e("p",[t._v("Client could only connect to the DataNode for operation.")]),t._v(" "),e("h3",{attrs:{id:"concepts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#concepts"}},[t._v("#")]),t._v(" Concepts")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Concept")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("ConfigNode")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("node role")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Configuration node, which manages cluster node information and partition information, monitors cluster status and controls load balancing")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("DataNode")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("node role")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Data node, which manages data and meta data")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Database")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("meta data")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Database, data are isolated physically from different databases")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("DeviceId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("device id")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The full path from root to the penultimate level in the metadata tree represents a device id")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("SeriesSlot")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("schema partition")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Each database contains many SeriesSlots, the partition key being DeviceId")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("SchemaRegion")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("schema region")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("A collection of multiple SeriesSlots")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("SchemaRegionGroup")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("logical concept")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The number of SchemaRegions contained in group is the number of schema replicas, it manages the same schema data, and back up each other")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("SeriesTimeSlot")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data partition")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The data of a time interval of SeriesSlot, a SeriesSlot contains multiple SeriesTimeSlots, the partition key being timestamp")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("DataRegion")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data region")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("A collection of multiple SeriesTimeSlots")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("DataRegionGroup")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("logical concept")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The number of DataRegions contained in group is the number of data replicas, it manages the same data, and back up each other")])])])]),t._v(" "),e("h2",{attrs:{id:"characteristics-of-cluster"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#characteristics-of-cluster"}},[t._v("#")]),t._v(" Characteristics of Cluster")]),t._v(" "),e("ul",[e("li",[t._v("Native Cluster Architecture\n"),e("ul",[e("li",[t._v("All modules are designed for cluster.")]),t._v(" "),e("li",[t._v("Standalone is a special form of Cluster.")])])]),t._v(" "),e("li",[t._v("High Scalability\n"),e("ul",[e("li",[t._v("Support adding nodes in a few seconds without data migration.")])])]),t._v(" "),e("li",[t._v("Massive Parallel Processing Architecture\n"),e("ul",[e("li",[t._v("Adopt the MPP architecture and volcano module for data processing, which have high extensibility.")])])]),t._v(" "),e("li",[t._v("Configurable Consensus Protocol\n"),e("ul",[e("li",[t._v("We could adopt different consensus protocol for data replicas and schema replicas.")])])]),t._v(" "),e("li",[t._v("Extensible Partition Strategy\n"),e("ul",[e("li",[t._v("The cluster adopts the lookup table for data and schema partitions, which is flexible to extend.")])])]),t._v(" "),e("li",[t._v("Built-in Metric Framework\n"),e("ul",[e("li",[t._v("Monitor the status of each node in cluster.")])])])]),t._v(" "),e("h2",{attrs:{id:"partitioning-strategy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#partitioning-strategy"}},[t._v("#")]),t._v(" Partitioning Strategy")]),t._v(" "),e("p",[t._v("The partitioning strategy partitions data and schema into different Regions, and allocates Regions to different DataNodes.")]),t._v(" "),e("p",[t._v("It is recommended to set 1 database, and the cluster will dynamically allocate resources according to the number of nodes and cores.")]),t._v(" "),e("p",[t._v("The database contains multiple SchemaRegions and DataRegions, which are managed by DataNodes.")]),t._v(" "),e("ul",[e("li",[t._v("Schema partition strategy\n"),e("ul",[e("li",[t._v("For a time series schema, the ConfigNode maps the device ID (full path from root to the penultimate tier node) into a SeriesSlot and allocate this SeriesSlot to a SchemaRegionGroup.")])])]),t._v(" "),e("li",[t._v("Data partition strategy\n"),e("ul",[e("li",[t._v("For a time series data point, the ConfigNode will map to a SeriesSlot according to the DeviceId, and then map it to a SeriesTimeSlot according to the timestamp, and allocate this SeriesTimeSlot to a DataRegionGroup.")])])])]),t._v(" "),e("p",[t._v("IoTDB uses a slot-based partitioning strategy, so the size of the partition information is controllable and does not grow infinitely with the number of time series or devices.")]),t._v(" "),e("p",[t._v("Regions will be allocated to different DataNodes to avoid single point of failure, and the load balance of different DataNodes will be ensured when Regions are allocated.")]),t._v(" "),e("h2",{attrs:{id:"replication-strategy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#replication-strategy"}},[t._v("#")]),t._v(" Replication Strategy")]),t._v(" "),e("p",[t._v("The replication strategy replicates data in multiple replicas, which are copies of each other. Multiple copies can provide high-availability services together and tolerate the failure of some copies.")]),t._v(" "),e("p",[t._v("A region is the basic unit of replication. Multiple replicas of a region construct a high-availability RegionGroup.")]),t._v(" "),e("ul",[e("li",[t._v("Replication and consensus\n"),e("ul",[e("li",[t._v("ConfigNode Group: Consisting of all ConfigNodes.")]),t._v(" "),e("li",[t._v("SchemaRegionGroup: The cluster has multiple SchemaRegionGroups, and each SchemaRegionGroup has multiple SchemaRegions with the same id.")]),t._v(" "),e("li",[t._v("DataRegionGroup: The cluster has multiple DataRegionGroups, and each DataRegionGroup has multiple DataRegions with the same id.")])])])]),t._v(" "),e("p",[t._v("An illustration of the partition allocation in cluster:")]),t._v(" "),e("img",{staticStyle:{width:"100%","max-width":"500px","max-height":"500px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Cluster/Data-Partition.png?raw=true"}}),t._v(" "),e("p",[t._v("The figure contains 1 SchemaRegionGroup, and the schema_replication_factor is 3, so the 3 white SchemaRegion-0s form a replication group.")]),t._v(" "),e("p",[t._v("The figure contains 3 DataRegionGroups, and the data_replication_factor is 3, so there are 9 DataRegions in total.")]),t._v(" "),e("h2",{attrs:{id:"consensus-protocol-consistency-protocol"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#consensus-protocol-consistency-protocol"}},[t._v("#")]),t._v(" Consensus Protocol (Consistency Protocol)")]),t._v(" "),e("p",[t._v("Among multiple Regions of each RegionGroup, consistency is guaranteed through a consensus protocol, which routes read and write requests to multiple replicas.")]),t._v(" "),e("ul",[e("li",[t._v("Current supported consensus protocol\n"),e("ul",[e("li",[t._v("SimpleConsensus：Provide strong consistency, could only be used when replica is 1, which is the empty implementation of the consensus protocol.")]),t._v(" "),e("li",[t._v("IoTConsensus：Provide eventual consistency, could be used in any number of replicas, 2 replicas could avoid single point failure, only for DataRegion, writings can be applied on each replica and replicated asynchronously to other replicas.")]),t._v(" "),e("li",[t._v("RatisConsensus：Provide Strong consistency, using raft consensus protocol, Could be used in any number of replicas, and could be used for any region groups.\nCurrently, DataRegion uses RatisConsensus does not support multiple data directories. This feature is planned to be supported in future releases.")])])])])])}),[],!1,null,null,null);e.default=o.exports}}]);