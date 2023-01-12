(window.webpackJsonp=window.webpackJsonp||[]).push([[941],{1344:function(e,s,a){"use strict";a.r(s);var t=a(19),n=Object(t.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"集群搭建示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#集群搭建示例"}},[e._v("#")]),e._v(" 集群搭建示例")]),e._v(" "),s("h3",{attrs:{id:"前提条件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[e._v("#")]),e._v(" 前提条件")]),e._v(" "),s("p",[e._v("如果您在使用 Windows 系统，请安装 MinGW，WSL 或者 git bash。")]),e._v(" "),s("h3",{attrs:{id:"_1-节点-1-副本分布式搭建示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-节点-1-副本分布式搭建示例"}},[e._v("#")]),e._v(" 1 节点 1 副本分布式搭建示例")]),e._v(" "),s("h4",{attrs:{id:"源码编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#源码编译"}},[e._v("#")]),e._v(" 源码编译：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("mvn clean package -DskipTests\nchmod -R 777 ./cluster/target/\nnohup ./cluster/target/iotdb-cluster-0.13.0-SNAPSHOT/sbin/start-node.sh >/dev/null 2>&1 &\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h4",{attrs:{id:"使用官网发布版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用官网发布版本"}},[e._v("#")]),e._v(" 使用官网发布版本：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("curl -O https://downloads.apache.org/iotdb/0.12.1/apache-iotdb-0.12.1-cluster-bin.zip\nunzip apache-iotdb-0.12.1-cluster-bin.zip\ncd apache-iotdb-0.12.1-cluster-bin\nsed -i -e 's/^seed_nodes=127.0.0.1:9003,127.0.0.1:9005,127.0.0.1:9007$/seed_nodes=127.0.0.1:9003/g' conf/iotdb-cluster.properties\nsed -i -e 's/^default_replica_num=3$/default_replica_num=1/g' conf/iotdb-cluster.properties\nnohup ./sbin/start-node.sh >/dev/null 2>&1 &\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("h3",{attrs:{id:"单机部署-3-节点-1-副本示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单机部署-3-节点-1-副本示例"}},[e._v("#")]),e._v(" 单机部署 3 节点 1 副本示例")]),e._v(" "),s("h4",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[e._v("#")]),e._v(" 配置")]),e._v(" "),s("p",[e._v("通过自己修改配置来处理端口和文件目录冲突，可以在一台机器上启动多个实例。")]),e._v(" "),s("p",[s("strong",[e._v("节点1")]),e._v(":"),s("strong",[e._v("(默认)")])]),e._v(" "),s("p",[s("em",[s("strong",[e._v("iotdb-cluster.properties")])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("seed_nodes = 127.0.0.1:9003,127.0.0.1:9005,127.0.0.1:9007\ndefault_replica_num = 1\ninternal_meta_port = 9003\ninternal_data_port = 40010\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[s("em",[s("strong",[e._v("iotdb-engine.properties")])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("rpc_port=6667\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[s("strong",[e._v("节点2")]),e._v(":")]),e._v(" "),s("p",[s("em",[s("strong",[e._v("iotdb-cluster.properties")])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("seed_nodes = 127.0.0.1:9003,127.0.0.1:9005,127.0.0.1:9007\ndefault_replica_num = 1\ninternal_meta_port = 9005\ninternal_data_port = 40012\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[s("em",[s("strong",[e._v("iotdb-engine.properties")])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("rpc_port=6669\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[s("strong",[e._v("节点3")]),e._v(":")]),e._v(" "),s("p",[s("em",[s("strong",[e._v("iotdb-cluster.properties")])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("seed_nodes = 127.0.0.1:9003,127.0.0.1:9005,127.0.0.1:9007\ndefault_replica_num = 1\ninternal_meta_port = 9007\ninternal_data_port = 40014\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[s("em",[s("strong",[e._v("iotdb-engine.properties")])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("rpc_port=6671\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h4",{attrs:{id:"源码编译-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#源码编译-2"}},[e._v("#")]),e._v(" 源码编译：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("mvn clean package -DskipTests\nchmod -R 777 ./cluster/target/\nnohup ./cluster/target/iotdb-cluster-0.13.0-SNAPSHOT/sbin/start-node.sh ./cluster/target/test-classes/node1conf/ >/dev/null 2>&1 &\nnohup ./cluster/target/iotdb-cluster-0.13.0-SNAPSHOT/sbin/start-node.sh ./cluster/target/test-classes/node2conf/ >/dev/null 2>&1 &\nnohup ./cluster/target/iotdb-cluster-0.13.0-SNAPSHOT/sbin/start-node.sh ./cluster/target/test-classes/node3conf/ >/dev/null 2>&1 &\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("h4",{attrs:{id:"使用官网发布版本-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用官网发布版本-2"}},[e._v("#")]),e._v(" 使用官网发布版本:")]),e._v(" "),s("p",[e._v("下载发布版本:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("curl -O https://downloads.apache.org/iotdb/0.12.1/apache-iotdb-0.12.1-cluster-bin.zip\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("解压压缩包:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("unzip apache-iotdb-0.12.1-cluster-bin.zip\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("进入IoTDB集群根目录:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("cd apache-iotdb-0.12.1-cluster-bin\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("设置 default_replica_num = 1:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sed -i -e 's/^default_replica_num=3$/default_replica_num=1/g' conf/iotdb-cluster.properties\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("为节点2，节点3创建conf_dir:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("cp -r conf node2_confcp -r conf node3_conf\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("解决端口和文件目录冲突:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sed -i -e 's/^internal_meta_port=9003$/internal_meta_port=9005/g' -e 's/^internal_data_port=40010$/internal_data_port=40012/g' node2_conf/iotdb-cluster.properties\nsed -i -e 's/^internal_meta_port=9003$/internal_meta_port=9007/g' -e 's/^internal_data_port=40010$/internal_data_port=40014/g' node3_conf/iotdb-cluster.properties\nsed -i -e 's/^rpc_port=6667$/rpc_port=6669/g' -e node2_conf/iotdb-engine.properties\nsed -i -e 's/^rpc_port=6667$/rpc_port=6671/g' -e node3_conf/iotdb-engine.properties\nsed -i -e 's/^# data_dirs=data\\/data$/data_dirs=node2\\/data/g' -e 's/^# wal_dir=data\\/wal$/wal_dir=node2\\/wal/g' -e 's/^# tracing_dir=data\\/tracing$/tracing_dir=node2\\/tracing/g' -e 's/^# system_dir=data\\/system$/system_dir=node2\\/system/g' -e 's/^# udf_root_dir=ext\\/udf$/udf_root_dir=node2\\/ext\\/udf/g' -e 's/^# index_root_dir=data\\/index$/index_root_dir=node2\\/index/g' node2_conf/iotdb-engine.properties\nsed -i -e 's/^# data_dirs=data\\/data$/data_dirs=node3\\/data/g' -e 's/^# wal_dir=data\\/wal$/wal_dir=node3\\/wal/g' -e 's/^# tracing_dir=data\\/tracing$/tracing_dir=node3\\/tracing/g' -e 's/^# system_dir=data\\/system$/system_dir=node3\\/system/g' -e 's/^# udf_root_dir=ext\\/udf$/udf_root_dir=node3\\/ext\\/udf/g' -e 's/^# index_root_dir=data\\/index$/index_root_dir=node3\\/index/g' node3_conf/iotdb-engine.properties\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("p",[s("strong",[e._v("你可以自己修改配置项而不使用“sed”命令")])]),e._v(" "),s("p",[e._v("根据配置文件路径启动三个节点:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("nohup ./sbin/start-node.sh >/dev/null 2>&1 &nohup ./sbin/start-node.sh ./node2_conf/ >/dev/null 2>&1 &nohup ./sbin/start-node.sh ./node3_conf/ >/dev/null 2>&1 &\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h3",{attrs:{id:"_3-节点-3-副本分布式搭建示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-节点-3-副本分布式搭建示例"}},[e._v("#")]),e._v(" 3 节点 3 副本分布式搭建示例")]),e._v(" "),s("p",[e._v("假设我们需要在三个物理节点上部署分布式 IoTDB，这三个节点分别为 A, B 和 C，其公网 ip 分别为 A_public_IP*, "),s("em",[e._v("B_public_IP")]),e._v(", and "),s("em",[e._v("C_public_IP")]),e._v("，私网 ip 分别为 "),s("em",[e._v("A_private_IP")]),e._v(", "),s("em",[e._v("B_private_IP")]),e._v(", and "),s("em",[e._v("C_private_IP")]),e._v(".")]),e._v(" "),s("p",[e._v("注：如果没有公网 ip 或者私网 ip 则两者"),s("strong",[e._v("设置成一致")]),e._v("即可，只需要保证客户端能够访问到服务端即可。 私网ip对应iotdb-cluster.properties中的"),s("code",[e._v("internal_ip")]),e._v("配置项，公网ip对应iotdb-engine.properties中的"),s("code",[e._v("rpc_address")]),e._v("配置项。")]),e._v(" "),s("h4",{attrs:{id:"配置-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-2"}},[e._v("#")]),e._v(" 配置")]),e._v(" "),s("p",[s("strong",[e._v("节点A")]),e._v(":")]),e._v(" "),s("p",[s("em",[s("strong",[e._v("iotdb-cluster.properties")])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("seed_nodes = A_private_Ip:9003,B_private_Ip:9003,C_private_Ip:9003\ndefault_replica_num = 3\ninternal_meta_port = 9003\ninternal_data_port = 40010\ninternal_ip = A_private_Ip\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[s("em",[s("strong",[e._v("iotdb-engine.properties")])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("rpc_port = 6667\nrpc_address = A_public_ip \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[s("strong",[e._v("节点B")]),e._v(":")]),e._v(" "),s("p",[s("em",[s("strong",[e._v("iotdb-cluster.properties")])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("seed_nodes = A_private_Ip:9003,B_private_Ip:9003,C_private_Ip:9003\ndefault_replica_num = 3\ninternal_meta_port = 9003\ninternal_data_port = 40010\ninternal_ip = B_private_Ip\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[s("em",[s("strong",[e._v("iotdb-engine.properties")])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("rpc_port = 6667\nrpc_address = B_public_ip \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[s("strong",[e._v("节点C")]),e._v(":")]),e._v(" "),s("p",[s("em",[s("strong",[e._v("iotdb-cluster.properties")])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("seed_nodes = A_private_Ip:9003,B_private_Ip:9003,C_private_Ip:9003\ndefault_replica_num = 3\ninternal_meta_port = 9003\ninternal_data_port = 40010\ninternal_ip = C_private_Ip\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[s("em",[s("strong",[e._v("iotdb-engine.properties")])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("rpc_port = 6667\nrpc_address = C_public_ip \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h4",{attrs:{id:"启动iotdb集群"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动iotdb集群"}},[e._v("#")]),e._v(" 启动IoTDB集群")]),e._v(" "),s("p",[e._v("以下为操作步骤：")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("使用 "),s("code",[e._v("mvn clean package -pl cluster -am -DskipTests")]),e._v(" 编译分布式模块或直接到 "),s("a",{attrs:{href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("官网"),s("OutboundLink")],1),e._v(" 下载最新版本。")])]),e._v(" "),s("li",[s("p",[e._v("保证三个节点的 6567, 6667, 9003, 9004, 40010, 40011 和 31999 端口是开放的。")])]),e._v(" "),s("li",[s("p",[e._v("将包上传到所有的服务器上。")])]),e._v(" "),s("li",[s("p",[e._v("修改配置项。")])]),e._v(" "),s("li",[s("p",[e._v("在 3 个节点上分别运行 sh sbin/start-node.sh 即可（后台运行也可）。")])])]),e._v(" "),s("h4",{attrs:{id:"源码编译-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#源码编译-3"}},[e._v("#")]),e._v(" 源码编译：")]),e._v(" "),s("p",[s("strong",[e._v("在三个节点上分别执行操作")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("mvn clean package -DskipTests\nchmod -R 777 ./cluster/target/\ncd cluster/target/iotdb-cluster-0.13.0-SNAPSHOT/\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h4",{attrs:{id:"使用官网发布版本-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用官网发布版本-3"}},[e._v("#")]),e._v(" 使用官网发布版本:")]),e._v(" "),s("p",[s("strong",[e._v("在三个节点上分别执行操作")])]),e._v(" "),s("p",[e._v("下载发布版本:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("curl -O https://downloads.apache.org/iotdb/0.12.4/apache-iotdb-0.12.4-cluster-bin.zip\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("解压压缩包:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("unzip apache-iotdb-0.12.4-cluster-bin.zip\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("进入IoTDB集群根目录:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("cd apache-iotdb-0.12.4-cluster-bin\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("设置 default_replica_num = 3: 配置文件中默认为3，无需修改")]),e._v(" "),s("p",[e._v("设置 internal_ip = 节点的私有ip (以192.168.1.1为例)")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sed -i -e 's/^internal_ip=127.0.0.1$/internal_ip=192.168.1.1/g' conf/iotdb-cluster.properties\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("设置 seed_node = A_private_Ip:9003,B_private_Ip:9003,C_private_Ip:9003 (三个节点ip分别为192.168.1.1,192.168.1.2,192.168.1.3为例)")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sed -i -e 's/^seed_nodes=127.0.0.1:9003,127.0.0.1:9005,127.0.0.1:9007$/seed_nodes=192.168.1.1:9003,192.168.1.2:9003,192.168.1.3:9003/g' conf/iotdb-cluster.properties\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("设置 rpc_address = 节点的公有ip (以192.168.1.1为例)")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sed -i -e 's/^rpc_address=127.0.0.1$/rpc_address=192.168.1.1/g' conf/iotdb-engine.properties\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[s("strong",[e._v("你可以自己修改配置项而不使用“sed”命令")])]),e._v(" "),s("p",[e._v("根据配置文件路径启动三个节点:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("nohup ./sbin/start-node.sh >/dev/null 2>&1 &\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);