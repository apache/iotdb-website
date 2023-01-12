(window.webpackJsonp=window.webpackJsonp||[]).push([[1117],{1520:function(t,e,a){"use strict";a.r(e);var i=a(19),l=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"集群基本概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集群基本概念"}},[t._v("#")]),t._v(" 集群基本概念")]),t._v(" "),e("p",[t._v("Apache IoTDB 集群版包含两种角色的节点，ConfigNode 和 DataNode，分别为不同的进程，可独立部署。")]),t._v(" "),e("p",[t._v("集群架构示例如下图：")]),t._v(" "),e("img",{staticStyle:{width:"100%","max-width":"500px","max-height":"400px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Cluster/Architecture.png?raw=true"}}),t._v(" "),e("p",[t._v("ConfigNode 是集群的控制节点，管理集群的节点状态、分区信息等，集群所有 ConfigNode 组成一个高可用组，数据全量备份。")]),t._v(" "),e("p",[t._v("注意：ConfigNode 的副本数是集群当前加入的 ConfigNode 个数，一半以上的 ConfigNode 存活集群才能提供服务。")]),t._v(" "),e("p",[t._v("DataNode 是集群的数据节点，管理多个数据分片、元数据分片，数据即时间序列中的时间戳和值，元数据为时间序列的路径信息、数据类型等。")]),t._v(" "),e("p",[t._v("Client 只能通过 DataNode 进行数据读写。")]),t._v(" "),e("h3",{attrs:{id:"名词解释"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#名词解释"}},[t._v("#")]),t._v(" 名词解释")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("名词")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("解释")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("ConfigNode")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("节点角色")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("配置节点，管理集群节点信息、分区信息，监控集群状态、控制负载均衡")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("DataNode")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("节点角色")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("数据节点，管理数据、元数据")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("Database")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("元数据")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("数据库，不同数据库的数据物理隔离")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("DeviceId")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("设备名")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("元数据树中从 root 到倒数第二级的全路径表示一个设备名")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("SeriesSlot")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("元数据分区")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("每个 Database 包含多个元数据分区，根据设备名进行分区")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("SchemaRegion")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("一组元数据分区")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("多个 SeriesSlot 的集合")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("SchemaRegionGroup")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("逻辑概念")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("包含元数据副本数个 SchemaRegion，管理相同的元数据，互为备份")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("SeriesTimeSlot")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("数据分区")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("一个元数据分区的一段时间的数据对应一个数据分区，每个元数据分区对应多个数据分区，根据时间范围进行分区")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("DataRegion")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("一组数据分区")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("多个 SeriesTimeSlot 的集合")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("DataRegionGroup")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("逻辑概念")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("包含数据副本数个 DataRegion，管理相同的数据，互为备份")])])])]),t._v(" "),e("h2",{attrs:{id:"集群特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#集群特点"}},[t._v("#")]),t._v(" 集群特点")]),t._v(" "),e("ul",[e("li",[t._v("原生分布式\n"),e("ul",[e("li",[t._v("IoTDB 各模块原生支持分布式。")]),t._v(" "),e("li",[t._v("Standalone 是分布式的一种特殊的部署形态。")])])]),t._v(" "),e("li",[t._v("扩展性\n"),e("ul",[e("li",[t._v("支持秒级增加节点，无需进行数据迁移。")])])]),t._v(" "),e("li",[t._v("大规模并行处理架构 MPP\n"),e("ul",[e("li",[t._v("采用大规模并行处理架构及火山模型进行数据处理，具有高扩展性。")])])]),t._v(" "),e("li",[t._v("可根据不同场景需求选择不同的共识协议\n"),e("ul",[e("li",[t._v("数据副本组和元数据副本组，可以采用不同的共识协议。")])])]),t._v(" "),e("li",[t._v("可扩展分区策略\n"),e("ul",[e("li",[t._v("集群采用分区表管理数据和元数据分区，自定义灵活的分配策略。")])])]),t._v(" "),e("li",[t._v("内置监控框架\n"),e("ul",[e("li",[t._v("内置集群监控，可以监控集群节点。")])])])]),t._v(" "),e("h2",{attrs:{id:"分区策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分区策略"}},[t._v("#")]),t._v(" 分区策略")]),t._v(" "),e("p",[t._v("分区策略将数据和元数据划分到不同的 RegionGroup 中，并把 RegionGroup 的 Region 分配到不同的 DataNode。")]),t._v(" "),e("p",[t._v("推荐设置 1 个 database，集群会根据节点数和核数动态分配资源。")]),t._v(" "),e("p",[t._v("Database 包含多个 SchemaRegion 和 DataRegion，由 DataNode 管理。")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("元数据分区策略")]),t._v(" "),e("ul",[e("li",[t._v("对于一条未使用模板的时间序列的元数据，ConfigNode 会根据设备 ID （从 root 到倒数第二层节点的全路径）映射到一个序列分区，并将此序列分区分配到一组 SchemaRegion 中。")])])]),t._v(" "),e("li",[e("p",[t._v("数据分区策略")]),t._v(" "),e("ul",[e("li",[t._v("对于一个时间序列数据点，ConfigNode 会根据设备 ID 映射到一个序列分区（纵向分区），再根据时间戳映射到一个序列时间分区（横向分区），并将此序列时间分区分配到一组 DataRegion 中。")])])])]),t._v(" "),e("p",[t._v("IoTDB 使用了基于槽的分区策略，因此分区信息的大小是可控的，不会随时间序列或设备数无限增长。")]),t._v(" "),e("p",[t._v("Region 会分配到不同的 DataNode 上，分配 Region 时会保证不同 DataNode 的负载均衡。")]),t._v(" "),e("h2",{attrs:{id:"复制策略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#复制策略"}},[t._v("#")]),t._v(" 复制策略")]),t._v(" "),e("p",[t._v("复制策略将数据复制多份，互为副本，多个副本可以一起提供高可用服务，容忍部分副本失效的情况。")]),t._v(" "),e("p",[t._v("Region 是数据复制的基本单位，一个 Region 的多个副本构成了一个高可用复制组，数据互为备份。")]),t._v(" "),e("ul",[e("li",[t._v("集群内的副本组\n"),e("ul",[e("li",[t._v("ConfigNodeGroup：由所有 ConfigNode 组成。")]),t._v(" "),e("li",[t._v("SchemaRegionGroup：集群有多个元数据组，每个 SchemaRegionGroup 内有多个 ID 相同的 SchemaRegion。")]),t._v(" "),e("li",[t._v("DataRegionGroup：集群有多个数据组，每个 DataRegionGroup 内有多个 ID 相同的 DataRegion。")])])])]),t._v(" "),e("p",[t._v("完整的集群分区复制的示意图如下：")]),t._v(" "),e("img",{staticStyle:{width:"100%","max-width":"500px","max-height":"500px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Cluster/Data-Partition.png?raw=true"}}),t._v(" "),e("p",[t._v("图中包含 1 个 SchemaRegionGroup，元数据采用 3 副本，因此 3 个白色的 SchemaRegion-0 组成了一个副本组。")]),t._v(" "),e("p",[t._v("图中包含 3 个 DataRegionGroup，数据采用 3 副本，因此一共有 9 个 DataRegion。")]),t._v(" "),e("h2",{attrs:{id:"共识协议-一致性协议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#共识协议-一致性协议"}},[t._v("#")]),t._v(" 共识协议（一致性协议）")]),t._v(" "),e("p",[t._v("每个副本组的多个副本之间，都通过一个具体的共识协议保证数据一致性，共识协议会将读写请求应用到多个副本上。")]),t._v(" "),e("ul",[e("li",[t._v("现有的共识协议\n"),e("ul",[e("li",[t._v("SimpleConsensus：提供强一致性，仅单副本时可用，一致性协议的极简实现，效率最高。")]),t._v(" "),e("li",[t._v("IoTConsensus：提供最终一致性，任意副本数可用，2 副本时可容忍 1 节点失效，当前仅可用于 DataRegion 的副本上，写入可以在任一副本进行，并异步复制到其他副本。")]),t._v(" "),e("li",[t._v("RatisConsensus：提供强一致性，Raft 协议的一种实现，任意副本数可用，当前可用于任意副本组上。目前DataRegion使用RatisConsensus时暂不支持多数据目录，预计会在后续版本中支持这一功能。")])])])])])}),[],!1,null,null,null);e.default=l.exports}}]);