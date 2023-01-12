(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{443:function(t,e,a){"use strict";a.r(e);var i=a(19),s=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"iotdb-deployment-recommendation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#iotdb-deployment-recommendation"}},[t._v("#")]),t._v(" IoTDB Deployment Recommendation")]),t._v(" "),e("h2",{attrs:{id:"backgrounds"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#backgrounds"}},[t._v("#")]),t._v(" Backgrounds")]),t._v(" "),e("p",[t._v("System Abilities")]),t._v(" "),e("ul",[e("li",[t._v("Performance: writing and reading performance, compression ratio")]),t._v(" "),e("li",[t._v("Extensibility: system has the ability to manage data with multiple nodes, and is essentially that data can be managed by partitions")]),t._v(" "),e("li",[t._v("High availability(HA): system has the ability to tolerate the nodes disconnected, and is essentially that the data has replicas")]),t._v(" "),e("li",[t._v("Consistency：when data is with multiple copies, whether the replicas are consistent, and is essentially that the system treats the whole database as a single node")])]),t._v(" "),e("p",[t._v("Abbreviations")]),t._v(" "),e("ul",[e("li",[t._v("C: ConfigNode")]),t._v(" "),e("li",[t._v("D: DataNode")]),t._v(" "),e("li",[t._v("nCmD：cluster with n ConfigNodes and m DataNodes")])]),t._v(" "),e("h2",{attrs:{id:"deployment-mode"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deployment-mode"}},[t._v("#")]),t._v(" Deployment mode")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("mode")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Performance")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Extensibility")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("HA")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Consistency")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Lightweight standalone mode")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Extremely High")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("None")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("None")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("High")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Scalable standalone mode (default)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("High")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("High")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Medium")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("High")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("High performance cluster mode")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("High")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("High")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("High")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Medium")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Strong consistency cluster mode")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Medium")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("High")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("High")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("High")])])])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Config")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Lightweight standalone mode")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Scalable single node mode")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("High performance mode")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("strong consistency cluster mode")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("ConfigNode number")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("≥1 (odd number)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("≥1 (odd number)")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("≥1 (odd number)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("DataNode number")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("≥1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("≥3")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("≥3")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("schema_replication_factor")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("3")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("data_replication_factor")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("2")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("3")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("config_node_consensus_protocol_class")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Simple")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Ratis")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Ratis")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Ratis")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("schema_region_consensus_protocol_class")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Simple")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Ratis")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Ratis")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Ratis")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("data_region_consensus_protocol_class")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Simple")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("IoT")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("IoT")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Ratis")])])])]),t._v(" "),e("h2",{attrs:{id:"deployment-recommendation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deployment-recommendation"}},[t._v("#")]),t._v(" Deployment Recommendation")]),t._v(" "),e("h3",{attrs:{id:"upgrade-from-v0-13-to-v1-0"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-from-v0-13-to-v1-0"}},[t._v("#")]),t._v(" Upgrade from v0.13 to v1.0")]),t._v(" "),e("p",[t._v("Scenario:\nAlready has some data under v0.13, hope to upgrade to v1.0.")]),t._v(" "),e("p",[t._v("Options:")]),t._v(" "),e("ol",[e("li",[t._v("Upgrade to 1C1D standalone mode, allocate 2GB memory to ConfigNode, allocate same memory size with v0.13 to DataNode.")]),t._v(" "),e("li",[t._v("Upgrade to 3C3D cluster mode, allocate 2GB memory to ConfigNode, allocate same memory size with v0.13 to DataNode.")])]),t._v(" "),e("p",[t._v("Configuration modification:")]),t._v(" "),e("ul",[e("li",[t._v("Do not point v1.0 data directory to v0.13 data directory")]),t._v(" "),e("li",[t._v("region_group_extension_strategy=COSTOM")]),t._v(" "),e("li",[t._v("data_region_group_per_database\n"),e("ul",[e("li",[t._v("for 3C3D cluster mode: Cluster CPU total core num / data_replication_factor")]),t._v(" "),e("li",[t._v("for 1C1D standalone mode: use virtual_storage_group_num in v0.13")])])])]),t._v(" "),e("p",[t._v("Data migration:\nAfter modifying the configuration, use load-tsfile tool to load the TsFiles of v0.13 to v1.0.")]),t._v(" "),e("h3",{attrs:{id:"use-v1-0-directly"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#use-v1-0-directly"}},[t._v("#")]),t._v(" Use v1.0 directly")]),t._v(" "),e("p",[e("strong",[t._v("Recommend to use 1 Database only")])]),t._v(" "),e("h4",{attrs:{id:"memory-estimation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#memory-estimation"}},[t._v("#")]),t._v(" Memory estimation")]),t._v(" "),e("h5",{attrs:{id:"use-active-series-number-to-estimate-memory-size"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#use-active-series-number-to-estimate-memory-size"}},[t._v("#")]),t._v(" Use active series number to estimate memory size")]),t._v(" "),e("p",[t._v("Cluster DataNode total heap size(GB) = active series number / 100000 * data_replication_factor")]),t._v(" "),e("p",[t._v("Heap size of each DataNode (GB) = Cluster DataNode total heap size / DataNode number")]),t._v(" "),e("blockquote",[e("p",[t._v("Example: use 3C3D to manage 1 million timeseries, use 3 data replicas")]),t._v(" "),e("ul",[e("li",[t._v("Cluster DataNode total heap size: 1,000,000 / 100,000 * 3 = 30G")]),t._v(" "),e("li",[t._v("每Heap size of each DataNode: 30 / 3 = 10G")])])]),t._v(" "),e("h5",{attrs:{id:"use-total-series-number-to-estimate-memory-size"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#use-total-series-number-to-estimate-memory-size"}},[t._v("#")]),t._v(" Use total series number to estimate memory size")]),t._v(" "),e("p",[t._v("Cluster DataNode total heap size（B） = 20 * (180 + 2 * average character num of the series full path) * total series number * schema_replication_factor")]),t._v(" "),e("p",[t._v("Heap size of each DataNode = Cluster DataNode total heap size / DataNode number")]),t._v(" "),e("blockquote",[e("p",[t._v("Example: use 3C3D to manage 1 million timeseries, use 3 schema replicas, series name such as root.sg_1.d_10.s_100(20 chars)")]),t._v(" "),e("ul",[e("li",[t._v("Cluster DataNode total heap size: 20 * (180 + 2 * 20) * 1,000,000 * 3 = 13.2 GB")]),t._v(" "),e("li",[t._v("Heap size of each DataNode: 13.2 GB / 3 = 4.4 GB")])])]),t._v(" "),e("h4",{attrs:{id:"disk-estimation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#disk-estimation"}},[t._v("#")]),t._v(" Disk estimation")]),t._v(" "),e("p",[t._v("IoTDB storage size = data storage size + schema storage size + temp storage size")]),t._v(" "),e("h5",{attrs:{id:"data-storage-size"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-storage-size"}},[t._v("#")]),t._v(" Data storage size")]),t._v(" "),e("p",[t._v("Series number * Sampling frequency * Data point size * Storage duration * data_replication_factor /  10 (compression ratio)")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Data Type \\ Data point size")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Timestamp (Byte)")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Value (Byte)")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Total (Byte)")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Boolean")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("8")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("9")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("INT32 / FLOAT")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("8")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("4")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("12")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("INT64）/ DOUBLE")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("8")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("8")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("16")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("TEXT")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("8")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Assuming a")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("8+a")])])])]),t._v(" "),e("blockquote",[e("p",[t._v("Example: 1000 devices, 100 sensors for one device, 100,000 series total, INT32 data type, 1Hz sampling frequency, 1 year storage duration, 3 replicas, compression ratio is 10\nData storage size = 1000 * 100 * 12 * 86400 * 365 * 3 / 10 = 11T")])]),t._v(" "),e("h5",{attrs:{id:"schema-storage-size"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#schema-storage-size"}},[t._v("#")]),t._v(" Schema storage size")]),t._v(" "),e("p",[t._v("One series uses the path character byte size + 20 bytes.\nIf the series has tag, add the tag character byte size.")]),t._v(" "),e("h5",{attrs:{id:"temp-storage-size"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#temp-storage-size"}},[t._v("#")]),t._v(" Temp storage size")]),t._v(" "),e("p",[t._v("Temp storage size = WAL storage size  + Consensus storage size + Compaction temp storage size")]),t._v(" "),e("ol",[e("li",[t._v("WAL")])]),t._v(" "),e("p",[t._v("max wal storage size = memtable memory size ÷ wal_min_effective_info_ratio")]),t._v(" "),e("ul",[e("li",[t._v("memtable memory size is decided by storage_query_schema_consensus_free_memory_proportion, storage_engine_memory_proportion and write_memory_proportion")]),t._v(" "),e("li",[t._v("wal_min_effective_info_ratio is decided by wal_min_effective_info_ratio configuration")])]),t._v(" "),e("blockquote",[e("p",[t._v("Example: allocate 16G memory for DataNode, config is as below:\nstorage_query_schema_consensus_free_memory_proportion=3:3:1:1:2\nstorage_engine_memory_proportion=8:2\nwrite_memory_proportion=19:1\nwal_min_effective_info_ratio=0.1\nmax wal storage size = 16 * (3 / 10) * (8 / 10) * (19 / 20)  ÷ 0.1 = 36.48G")])]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[t._v("Consensus")])]),t._v(" "),e("p",[t._v("Ratis consensus")]),t._v(" "),e("p",[t._v("When using ratis consensus protocol, we need extra storage for Raft Log, which will be deleted after the state machine takes snapshot.\nWe can adjust "),e("code",[t._v("trigger_snapshot_threshold")]),t._v(" to control the maximum Raft Log disk usage.")]),t._v(" "),e("p",[t._v("Raft Log disk size in each Region = average * trigger_snapshot_threshold")]),t._v(" "),e("p",[t._v("The total Raft Log storage space is proportional to the data replica number")]),t._v(" "),e("blockquote",[e("p",[t._v("Example: DataRegion, 20kB data for one request, data_region_trigger_snapshot_threshold = 400,000, then max Raft Log disk size = 20K * 400,000 = 8G.\nRaft Log increases from 0 to 8GB, and then turns to 0 after snapshot. Average size will be 4GB.\nWhen replica number is 3, max Raft log size will be 3 * 8G = 24G.")])]),t._v(" "),e("p",[t._v("What's more, we can configure data_region_ratis_log_max_size to limit max log size of a single DataRegion.\nBy default, data_region_ratis_log_max_size=20G, which guarantees that Raft Log size would not exceed 20G.")]),t._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[t._v("Compaction")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("Inner space compaction\nDisk space for temporary files = Total Disk space of origin files")]),t._v(" "),e("blockquote",[e("p",[t._v("Example: 10 origin files, 100MB for each file\nDisk space for temporary files = 10 * 100 = 1000M")])])]),t._v(" "),e("li",[e("p",[t._v("Outer space compaction\nThe overlap of out-of-order data = overlapped data amount  / total out-of-order data amount")]),t._v(" "),e("p",[t._v("Disk space for temporary file = Total ordered Disk space of origin files + Total out-of-order disk space of origin files *（1 - overlap）")]),t._v(" "),e("blockquote",[e("p",[t._v("Example: 10 ordered files, 10 out-of-order files, 100M for each ordered file, 50M for each out-of-order file, half of data is overlapped with sequence file\nThe overlap of out-of-order data = 25M/50M * 100% = 50%\nDisk space for temporary files = 10 * 100 + 10 * 50 * 50% = 1250M")])])])])])}),[],!1,null,null,null);e.default=s.exports}}]);