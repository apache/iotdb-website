(window.webpackJsonp=window.webpackJsonp||[]).push([[613],{1015:function(t,e,a){"use strict";a.r(e);var i=a(19),l=Object(i.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"datanode-configuration-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#datanode-configuration-parameters"}},[t._v("#")]),t._v(" DataNode Configuration Parameters")]),t._v(" "),e("p",[t._v("We use the same configuration files for IoTDB DataNode and Standalone version, all under the "),e("code",[t._v("conf")]),t._v(".")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("datanode-env.sh/bat")]),t._v("：Environment configurations, in which we could set the memory allocation of DataNode and Standalone.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("iotdb-datanode.properties")]),t._v("：IoTDB DataNode system configurations.")])])]),t._v(" "),e("h2",{attrs:{id:"hot-modification-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hot-modification-configuration"}},[t._v("#")]),t._v(" Hot Modification Configuration")]),t._v(" "),e("p",[t._v("For the convenience of users, IoTDB provides users with hot modification function, that is, modifying some configuration parameters in "),e("code",[t._v("iotdb-datanode.properties")]),t._v(" and "),e("code",[t._v("iotdb-common.properties")]),t._v(" during the system operation and applying them to the system immediately.\nIn the parameters described below, these parameters whose way of "),e("code",[t._v("Effective")]),t._v(" is "),e("code",[t._v("hot-load")]),t._v(" support hot modification.")]),t._v(" "),e("p",[t._v("Trigger way: The client sends the command(sql) "),e("code",[t._v("load configuration")]),t._v(" to the IoTDB server.")]),t._v(" "),e("h2",{attrs:{id:"environment-configuration-file-datanode-env-sh-bat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#environment-configuration-file-datanode-env-sh-bat"}},[t._v("#")]),t._v(" Environment Configuration File（datanode-env.sh/bat）")]),t._v(" "),e("p",[t._v("The environment configuration file is mainly used to configure the Java environment related parameters when DataNode is running, such as JVM related configuration. This part of the configuration is passed to the JVM when the DataNode starts.")]),t._v(" "),e("p",[t._v("The details of each parameter are as follows:")]),t._v(" "),e("ul",[e("li",[t._v("MAX_HEAP_SIZE")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("MAX_HEAP_SIZE")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The maximum heap memory size that IoTDB can use")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("On Linux or MacOS, the default is one quarter of the memory. On Windows, the default value for 32-bit systems is 512M, and the default for 64-bit systems is 2G.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("ul",[e("li",[t._v("HEAP_NEWSIZE")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("HEAP_NEWSIZE")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The minimum heap memory size that IoTDB will use when startup")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("On Linux or MacOS, the default is min{cores * 100M, one quarter of MAX_HEAP_SIZE}. On Windows, the default value for 32-bit systems is 512M, and the default for 64-bit systems is 2G.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("ul",[e("li",[t._v("MAX_DIRECT_MEMORY_SIZE")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("MAX_DIRECT_MEMORY_SIZE")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The max direct memory that IoTDB could use")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Equal to the MAX_HEAP_SIZE")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("ul",[e("li",[t._v("JMX_LOCAL")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("JMX_LOCAL")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JMX monitoring mode, configured as yes to allow only local monitoring, no to allow remote monitoring")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v('Enum String: "true", "false"')])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("true")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("ul",[e("li",[t._v("JMX_PORT")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("JMX_PORT")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JMX listening port. Please confirm that the port is not a system reserved port and is not occupied")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Short Int: [0,65535]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("31999")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("ul",[e("li",[t._v("JMX_IP")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("JMX_IP")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("JMX listening address. Only take effect if JMX_LOCAL=false. 0.0.0.0 is never allowed")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("127.0.0.1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("h2",{attrs:{id:"jmx-authorization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jmx-authorization"}},[t._v("#")]),t._v(" JMX Authorization")]),t._v(" "),e("p",[t._v("We "),e("strong",[t._v("STRONGLY RECOMMENDED")]),t._v(" you CHANGE the PASSWORD for the JMX remote connection.")]),t._v(" "),e("p",[t._v("The user and passwords are in ${IOTDB_CONF}/conf/jmx.password.")]),t._v(" "),e("p",[t._v("The permission definitions are in ${IOTDB_CONF}/conf/jmx.access.")]),t._v(" "),e("h2",{attrs:{id:"datanode-standalone-configuration-file-iotdb-datanode-properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#datanode-standalone-configuration-file-iotdb-datanode-properties"}},[t._v("#")]),t._v(" DataNode/Standalone Configuration File (iotdb-datanode.properties)")]),t._v(" "),e("h3",{attrs:{id:"data-node-rpc-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-node-rpc-configuration"}},[t._v("#")]),t._v(" Data Node RPC Configuration")]),t._v(" "),e("ul",[e("li",[t._v("dn_rpc_address")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_rpc_address")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The client rpc service listens on the address.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("127.0.0.1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_rpc_port")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_rpc_port")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The client rpc service listens on the port.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Short Int : [0,65535]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("6667")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_internal_address")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_internal_address")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("DataNode internal service host/IP")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("127.0.0.1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_internal_port")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_internal_port")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("DataNode internal service port")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("int")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10730")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_mpp_data_exchange_port")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("mpp_data_exchange_port")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("MPP data exchange port")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("int")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10740")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_schema_region_consensus_port")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_schema_region_consensus_port")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("DataNode Schema replica communication port for consensus")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("int")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10750")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_data_region_consensus_port")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_data_region_consensus_port")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("DataNode Data replica communication port for consensus")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("int")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10760")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_join_cluster_retry_interval_ms")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_join_cluster_retry_interval_ms")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The time of data node waiting for the next retry to join into the cluster")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("long")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("5000")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("h3",{attrs:{id:"target-config-nodes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#target-config-nodes"}},[t._v("#")]),t._v(" Target Config Nodes")]),t._v(" "),e("ul",[e("li",[t._v("dn_target_config_node_list")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_target_config_node_list")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("ConfigNode Address for DataNode to join cluster")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("127.0.0.1:10710")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("h3",{attrs:{id:"connection-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#connection-configuration"}},[t._v("#")]),t._v(" Connection Configuration")]),t._v(" "),e("ul",[e("li",[t._v("dn_rpc_thrift_compression_enable")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_rpc_thrift_compression_enable")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Whether enable thrift's compression (using GZIP).")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_rpc_advanced_compression_enable")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_rpc_advanced_compression_enable")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Whether enable thrift's advanced compression.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_rpc_selector_thread_count")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_rpc_selector_thread_count")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The number of rpc selector thread.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("int")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_rpc_min_concurrent_client_num")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_rpc_min_concurrent_client_num")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Minimum concurrent rpc connections")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Short Int : [0,65535]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_rpc_max_concurrent_client_num")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_rpc_max_concurrent_client_num")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Max concurrent rpc connections")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Short Int : [0,65535]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("65535")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_thrift_max_frame_size")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_thrift_max_frame_size")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Max size of bytes of each thrift RPC request/response")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Long")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Unit")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Byte")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("536870912")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_thrift_init_buffer_size")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_thrift_init_buffer_size")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Initial size of bytes of buffer that thrift used")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("long")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1024")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_core_client_count_for_each_node_in_client_manager")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_core_client_count_for_each_node_in_client_manager")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Number of core clients routed to each node in a ClientManager")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("int")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("200")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_max_client_count_for_each_node_in_client_manager")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_max_client_count_for_each_node_in_client_manager")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Number of max clients routed to each node in a ClientManager")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("int")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("300")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("h3",{attrs:{id:"dictionary-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dictionary-configuration"}},[t._v("#")]),t._v(" Dictionary Configuration")]),t._v(" "),e("ul",[e("li",[t._v("dn_system_dir")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_system_dir")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The directories of system files. It is recommended to use an absolute path.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data/datanode/system (Windows: data\\datanode\\system)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_data_dirs")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_data_dirs")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The directories of data files. Multiple directories are separated by comma. The starting directory of the relative path is related to the operating system. It is recommended to use an absolute path. If the path does not exist, the system will automatically create it.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String[]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data/datanode/data (Windows: data\\datanode\\data)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("hot-load")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_multi_dir_strategy")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_multi_dir_strategy")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB's strategy for selecting directories for TsFile in tsfile_dir. You can use a simple class name or a full name of the class. The system provides the following three strategies: "),e("br"),t._v("1. SequenceStrategy: IoTDB selects the directory from tsfile_dir in order, traverses all the directories in tsfile_dir in turn, and keeps counting;"),e("br"),t._v("2. MaxDiskUsableSpaceFirstStrategy: IoTDB first selects the directory with the largest free disk space in tsfile_dir;"),e("br"),t._v("3. MinFolderOccupiedSpaceFirstStrategy: IoTDB prefers the directory with the least space used in tsfile_dir;"),e("br"),t._v("4. UserDfineStrategyPackage (user-defined policy)"),e("br"),t._v("You can complete a user-defined policy in the following ways:"),e("br"),t._v("1. Inherit the cn.edu.tsinghua.iotdb.conf.directories.strategy.DirectoryStrategy class and implement its own Strategy method;"),e("br"),t._v("2. Fill in the configuration class with the full class name of the implemented class (package name plus class name, UserDfineStrategyPackage);"),e("br"),t._v("3. Add the jar file to the project.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("MaxDiskUsableSpaceFirstStrategy")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("hot-load")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_consensus_dir")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_consensus_dir")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The directories of consensus files. It is recommended to use an absolute path.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data/datanode/consensus")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_wal_dir")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_wal_dir")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Write Ahead Log storage path. It is recommended to use an absolute path.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data/datanode/wal")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_tracing_dir")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_tracing_dir")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The tracing root directory path. It is recommended to use an absolute path.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("datanode/tracing")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("ul",[e("li",[t._v("dn_sync_dir")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("dn_sync_dir")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The directories of sync files. It is recommended to use an absolute path.")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data/datanode/sync")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("After restarting system")])])])]),t._v(" "),e("h3",{attrs:{id:"metric-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#metric-configuration"}},[t._v("#")]),t._v(" Metric Configuration")]),t._v(" "),e("h2",{attrs:{id:"enable-gc-log"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#enable-gc-log"}},[t._v("#")]),t._v(" Enable GC log")]),t._v(" "),e("p",[t._v("GC log is off by default.\nFor performance tuning, you may want to collect the GC info.")]),t._v(" "),e("p",[t._v('To enable GC log, just add a parameter "printgc" when you start the DataNode.')]),t._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("nohup")]),t._v(" sbin/start-datanode.sh printgc "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("/dev/null "),e("span",{pre:!0,attrs:{class:"token operator"}},[e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("2")]),t._v(">")]),e("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("&1")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("Or")]),t._v(" "),e("div",{staticClass:"language-cmd line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("sbin\\start-datanode.bat printgc\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("GC log is stored at "),e("code",[t._v("IOTDB_HOME/logs/gc.log")]),t._v(".\nThere will be at most 10 gc.log.* files and each one can reach to 10MB.")])])}),[],!1,null,null,null);e.default=l.exports}}]);