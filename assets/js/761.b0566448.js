(window.webpackJsonp=window.webpackJsonp||[]).push([[761],{1163:function(t,e,_){"use strict";_.r(e);var l=_(19),a=Object(l.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"confignode-配置参数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#confignode-配置参数"}},[t._v("#")]),t._v(" ConfigNode 配置参数")]),t._v(" "),e("p",[t._v("IoTDB ConfigNode 配置文件均位于 IoTDB 安装目录："),e("code",[t._v("conf")]),t._v("文件夹下。")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("confignode-env.sh/bat")]),t._v("：环境配置项的配置文件，可以配置 ConfigNode 的内存大小。")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("iotdb-confignode.properties")]),t._v("：IoTDB ConfigNode 的配置文件。")])])]),t._v(" "),e("h2",{attrs:{id:"环境配置项-confignode-env-sh-bat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境配置项-confignode-env-sh-bat"}},[t._v("#")]),t._v(" 环境配置项（confignode-env.sh/bat）")]),t._v(" "),e("p",[t._v("环境配置项主要用于对 ConfigNode 运行的 Java 环境相关参数进行配置，如 JVM 相关配置。ConfigNode 启动时，此部分配置会被传给 JVM，详细配置项说明如下：")]),t._v(" "),e("ul",[e("li",[t._v("MAX_HEAP_SIZE")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("MAX_HEAP_SIZE")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB 能使用的最大堆内存大小")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("取决于操作系统和机器配置。在 Linux 或 MacOS 系统下默认为机器内存的四分之一。在 Windows 系统下，32 位系统的默认值是 512M，64 位系统默认值是 2G。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("HEAP_NEWSIZE")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("HEAP_NEWSIZE")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB 启动时分配的最小堆内存大小")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("取决于操作系统和机器配置。在 Linux 或 MacOS 系统下默认值为机器 CPU 核数乘以 100M 的值与 MAX_HEAP_SIZE 四分之一这二者的最小值。在 Windows 系统下，32 位系统的默认值是 512M，64 位系统默认值是 2G。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("MAX_DIRECT_MEMORY_SIZE")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("MAX_DIRECT_MEMORY_SIZE")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB 能使用的最大堆外内存大小")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("默认与最大堆内存相等")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("h2",{attrs:{id:"系统配置项-iotdb-confignode-properties"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#系统配置项-iotdb-confignode-properties"}},[t._v("#")]),t._v(" 系统配置项（iotdb-confignode.properties）")]),t._v(" "),e("p",[t._v("IoTDB 集群的全局配置通过 ConfigNode 配置。")]),t._v(" "),e("h3",{attrs:{id:"config-node-rpc-配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#config-node-rpc-配置"}},[t._v("#")]),t._v(" Config Node RPC 配置")]),t._v(" "),e("ul",[e("li",[t._v("cn_internal_address")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("cn_internal_address")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("ConfigNode 集群内部地址")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("127.0.0.1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("cn_internal_port")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("cn_internal_port")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("ConfigNode 集群服务监听端口")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Short Int : [0,65535]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10710")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("h3",{attrs:{id:"共识协议"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#共识协议"}},[t._v("#")]),t._v(" 共识协议")]),t._v(" "),e("ul",[e("li",[t._v("cn_consensus_port")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("cn_consensus_port")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("ConfigNode 的共识协议通信端口")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Short Int : [0,65535]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("10720")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("h3",{attrs:{id:"目标-config-node-配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#目标-config-node-配置"}},[t._v("#")]),t._v(" 目标 Config Node 配置")]),t._v(" "),e("ul",[e("li",[t._v("cn_target_config_node_list")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("cn_target_config_node_list")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("目标 ConfigNode 地址，ConfigNode 通过此地址加入集群")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("127.0.0.1:10710")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("h3",{attrs:{id:"数据目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据目录"}},[t._v("#")]),t._v(" 数据目录")]),t._v(" "),e("ul",[e("li",[t._v("cn_system_dir")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("cn_system_dir")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("ConfigNode 系统数据存储路径")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data/confignode/system（Windows：data\\configndoe\\system）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("cn_consensus_dir")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("cn_consensus_dir")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("ConfigNode 共识协议数据存储路径")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("data/confignode/consensus（Windows：data\\configndoe\\consensus）")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("h3",{attrs:{id:"thrift-rpc-配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#thrift-rpc-配置"}},[t._v("#")]),t._v(" Thrift RPC 配置")]),t._v(" "),e("ul",[e("li",[t._v("cn_rpc_thrift_compression_enable")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("cn_rpc_thrift_compression_enable")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否启用 thrift 的压缩机制。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("cn_rpc_advanced_compression_enable")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("cn_rpc_advanced_compression_enable")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("是否启用 thrift 的自定制压缩机制。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("false")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("cn_rpc_max_concurrent_client_num")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("cn_rpc_max_concurrent_client_num")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("最大连接数。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Short Int : [0,65535]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("65535")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("cn_thrift_max_frame_size")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("cn_thrift_max_frame_size")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("RPC 请求/响应的最大字节数")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("long")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("536870912 （默认值512MB，应大于等于 512 * 1024 * 1024)")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("cn_thrift_init_buffer_size")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("cn_thrift_init_buffer_size")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("字节数")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Long")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1024")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("cn_connection_timeout_ms")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("cn_connection_timeout_ms")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("节点连接超时时间")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("int")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("20000")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("cn_selector_thread_nums_of_client_manager")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("cn_selector_thread_nums_of_client_manager")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("客户端异步线程管理的选择器线程数量")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("int")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("1")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("cn_core_client_count_for_each_node_in_client_manager")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("cn_core_client_count_for_each_node_in_client_manager")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("单 ClientManager 中路由到每个节点的核心 Client 个数")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("int")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("200")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("ul",[e("li",[t._v("cn_max_client_count_for_each_node_in_client_manager")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("名字")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("cn_max_client_count_for_each_node_in_client_manager")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("描述")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("单 ClientManager 中路由到每个节点的最大 Client 个数")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("int")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("默认值")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("300")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("改后生效方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("重启服务生效")])])])]),t._v(" "),e("h3",{attrs:{id:"metric-监控配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#metric-监控配置"}},[t._v("#")]),t._v(" Metric 监控配置")])])}),[],!1,null,null,null);e.default=a.exports}}]);