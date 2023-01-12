(window.webpackJsonp=window.webpackJsonp||[]).push([[318],{721:function(e,s,a){"use strict";a.r(s);var t=a(19),n=Object(t.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"prerequisite"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisite"}},[e._v("#")]),e._v(" Prerequisite")]),e._v(" "),s("p",[e._v("Note: Please install MinGW or WSL or git bash if you are using Windows.")]),e._v(" "),s("h2",{attrs:{id:"example-of-distributed-configurations-for-1-node-and-1-replica"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-of-distributed-configurations-for-1-node-and-1-replica"}},[e._v("#")]),e._v(" Example of distributed configurations for 1 node and 1 replica")]),e._v(" "),s("h3",{attrs:{id:"compile-from-source-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compile-from-source-code"}},[e._v("#")]),e._v(" Compile from source code:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("mvn clean package -DskipTests\nchmod -R 777 ./cluster/target/\nnohup ./cluster/target/iotdb-cluster-0.13.0-SNAPSHOT/sbin/start-node.sh >/dev/null 2>&1 &\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h3",{attrs:{id:"use-the-official-website-release-version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-the-official-website-release-version"}},[e._v("#")]),e._v(" Use the official website release version:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("curl -O https://downloads.apache.org/iotdb/0.12.1/apache-iotdb-0.12.1-cluster-bin.zip\nunzip apache-iotdb-0.12.1-cluster-bin.zip\ncd apache-iotdb-0.12.1-cluster-bin\nsed -i -e 's/^seed_nodes=127.0.0.1:9003,127.0.0.1:9005,127.0.0.1:9007$/seed_nodes=127.0.0.1:9003/g' conf/iotdb-cluster.properties\nsed -i -e 's/^default_replica_num=3$/default_replica_num=1/g' conf/iotdb-cluster.properties\nnohup ./sbin/start-node.sh >/dev/null 2>&1 &\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("h2",{attrs:{id:"example-of-distributed-configurations-for-3-nodes-and-1-replica-on-a-single-machine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-of-distributed-configurations-for-3-nodes-and-1-replica-on-a-single-machine"}},[e._v("#")]),e._v(" Example of distributed configurations for 3 nodes and 1 replica on a single machine")]),e._v(" "),s("h3",{attrs:{id:"configurations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configurations"}},[e._v("#")]),e._v(" Configurations")]),e._v(" "),s("p",[e._v("You can start multiple instances on a single machine by modifying the configurations yourself to handling port and file directory conflicts.")]),e._v(" "),s("p",[s("strong",[e._v("Node1")]),e._v(":"),s("strong",[e._v("(default)")])]),e._v(" "),s("p",[s("em",[s("strong",[e._v("iotdb-cluster.properties")])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("seed_nodes = 127.0.0.1:9003,127.0.0.1:9005,127.0.0.1:9007\ndefault_replica_num = 1\ninternal_meta_port = 9003\ninternal_data_port = 40010\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[s("em",[s("strong",[e._v("iotdb-engine.properties")])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("rpc_port=6667\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[s("strong",[e._v("Node2")]),e._v(":")]),e._v(" "),s("p",[s("em",[s("strong",[e._v("iotdb-cluster.properties")])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("seed_nodes = 127.0.0.1:9003,127.0.0.1:9005,127.0.0.1:9007\ndefault_replica_num = 1\ninternal_meta_port = 9005\ninternal_data_port = 40012\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[s("em",[s("strong",[e._v("iotdb-engine.properties")])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("rpc_port=6669\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[s("strong",[e._v("Node3")]),e._v(":")]),e._v(" "),s("p",[s("em",[s("strong",[e._v("iotdb-cluster.properties")])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("seed_nodes = 127.0.0.1:9003,127.0.0.1:9005,127.0.0.1:9007\ndefault_replica_num = 1\ninternal_meta_port = 9007\ninternal_data_port = 40014\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[s("em",[s("strong",[e._v("iotdb-engine.properties")])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("rpc_port=6671\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h3",{attrs:{id:"compile-from-source-code-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compile-from-source-code-2"}},[e._v("#")]),e._v(" Compile from source code:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("mvn clean package -DskipTests\nchmod -R 777 ./cluster/target/\nnohup ./cluster/target/iotdb-cluster-0.13.0-SNAPSHOT/sbin/start-node.sh ./cluster/target/test-classes/node1conf/ >/dev/null 2>&1 &\nnohup ./cluster/target/iotdb-cluster-0.13.0-SNAPSHOT/sbin/start-node.sh ./cluster/target/test-classes/node2conf/ >/dev/null 2>&1 &\nnohup ./cluster/target/iotdb-cluster-0.13.0-SNAPSHOT/sbin/start-node.sh ./cluster/target/test-classes/node3conf/ >/dev/null 2>&1 &\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("h3",{attrs:{id:"use-the-official-website-release-version-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-the-official-website-release-version-2"}},[e._v("#")]),e._v(" Use the official website release version:")]),e._v(" "),s("p",[e._v("Download the release version:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("curl -O https://downloads.apache.org/iotdb/0.12.1/apache-iotdb-0.12.1-cluster-bin.zip\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Unzip the package:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("unzip apache-iotdb-0.12.1-cluster-bin.zip\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Enter IoTDB cluster root directory:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("cd apache-iotdb-0.12.1-cluster-bin\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Set default_replica_num = 1:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sed -i -e 's/^default_replica_num=3$/default_replica_num=1/g' conf/iotdb-cluster.properties\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Create conf_dir for node2 and node3:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("cp -r conf node2_conf\ncp -r conf node3_conf\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("Handle port and file directory conflicts:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sed -i -e 's/^internal_meta_port=9003$/internal_meta_port=9005/g' -e 's/^internal_data_port=40010$/internal_data_port=40012/g' node2_conf/iotdb-cluster.properties\nsed -i -e 's/^internal_meta_port=9003$/internal_meta_port=9007/g' -e 's/^internal_data_port=40010$/internal_data_port=40014/g' node3_conf/iotdb-cluster.properties\nsed -i -e 's/^rpc_port=6667$/rpc_port=6669/g' -e node2_conf/iotdb-engine.properties\nsed -i -e 's/^rpc_port=6667$/rpc_port=6671/g' -e node3_conf/iotdb-engine.properties\nsed -i -e 's/^# data_dirs=data\\/data$/data_dirs=node2\\/data/g' -e 's/^# wal_dir=data\\/wal$/wal_dir=node2\\/wal/g' -e 's/^# tracing_dir=data\\/tracing$/tracing_dir=node2\\/tracing/g' -e 's/^# system_dir=data\\/system$/system_dir=node2\\/system/g' -e 's/^# udf_root_dir=ext\\/udf$/udf_root_dir=node2\\/ext\\/udf/g' -e 's/^# index_root_dir=data\\/index$/index_root_dir=node2\\/index/g' node2_conf/iotdb-engine.properties\nsed -i -e 's/^# data_dirs=data\\/data$/data_dirs=node3\\/data/g' -e 's/^# wal_dir=data\\/wal$/wal_dir=node3\\/wal/g' -e 's/^# tracing_dir=data\\/tracing$/tracing_dir=node3\\/tracing/g' -e 's/^# system_dir=data\\/system$/system_dir=node3\\/system/g' -e 's/^# udf_root_dir=ext\\/udf$/udf_root_dir=node3\\/ext\\/udf/g' -e 's/^# index_root_dir=data\\/index$/index_root_dir=node3\\/index/g' node3_conf/iotdb-engine.properties\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("p",[s("strong",[e._v('You can modify the configuration items by yourself instead of using "sed" command')])]),e._v(" "),s("p",[e._v("Start the three nodes with their configurations:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("nohup ./sbin/start-node.sh >/dev/null 2>&1 &\nnohup ./sbin/start-node.sh ./node2_conf/ >/dev/null 2>&1 &\nnohup ./sbin/start-node.sh ./node3_conf/ >/dev/null 2>&1 &\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h2",{attrs:{id:"example-of-distributed-configurations-for-3-nodes-and-3-replicas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-of-distributed-configurations-for-3-nodes-and-3-replicas"}},[e._v("#")]),e._v(" Example of distributed configurations for 3 nodes and 3 replicas")]),e._v(" "),s("p",[e._v("Suppose we need to deploy the distributed IoTDB on three physical nodes, A, B, and C, whose public network IP is "),s("em",[e._v("A_public_IP")]),e._v(", "),s("em",[e._v("B_public_IP")]),e._v(", and "),s("em",[e._v("C_public_IP")]),e._v(", and private network IP is "),s("em",[e._v("A_private_IP")]),e._v(", "),s("em",[e._v("B_private_IP")]),e._v(", and "),s("em",[e._v("C_private_IP")]),e._v(".")]),e._v(" "),s("p",[e._v("Note: If there is no public network IP or private network IP, both can be "),s("strong",[e._v("set to the same")]),e._v(", just need to ensure that the client can access the server. The private ip corresponds to configuration item"),s("code",[e._v("internal_ ip")]),e._v("in iotdb-cluster.properties, and the public ip corresponds to configuration item"),s("code",[e._v("rpc_ address")]),e._v(" in iotdb-engine.properties.")]),e._v(" "),s("h3",{attrs:{id:"configurations-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configurations-2"}},[e._v("#")]),e._v(" Configurations")]),e._v(" "),s("p",[s("strong",[e._v("NodeA")]),e._v(":")]),e._v(" "),s("p",[s("em",[s("strong",[e._v("iotdb-cluster.properties")])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("seed_nodes = A_private_Ip:9003,B_private_Ip:9003,C_private_Ip:9003\ndefault_replica_num = 3\ninternal_meta_port = 9003\ninternal_data_port = 40010\ninternal_ip = A_private_Ip\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[s("em",[s("strong",[e._v("iotdb-engine.properties")])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("rpc_port = 6667\nrpc_address = A_public_ip \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[s("strong",[e._v("NodeB")]),e._v(":")]),e._v(" "),s("p",[s("em",[s("strong",[e._v("iotdb-cluster.properties")])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("seed_nodes = A_private_Ip:9003,B_private_Ip:9003,C_private_Ip:9003\ndefault_replica_num = 3\ninternal_meta_port = 9003\ninternal_data_port = 40010\ninternal_ip = B_private_Ip\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[s("em",[s("strong",[e._v("iotdb-engine.properties")])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("rpc_port = 6667\nrpc_address = B_public_ip \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[s("strong",[e._v("NodeC")]),e._v(":")]),e._v(" "),s("p",[s("em",[s("strong",[e._v("iotdb-cluster.properties")])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("seed_nodes = A_private_Ip:9003,B_private_Ip:9003,C_private_Ip:9003\ndefault_replica_num = 3\ninternal_meta_port = 9003\ninternal_data_port = 40010\ninternal_ip = C_private_Ip\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[s("em",[s("strong",[e._v("iotdb-engine.properties")])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("rpc_port = 6667\nrpc_address = C_public_ip \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h3",{attrs:{id:"start-iotdb-cluster"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-iotdb-cluster"}},[e._v("#")]),e._v(" Start IoTDB cluster")]),e._v(" "),s("p",[e._v("The operation steps are as follows:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Use 'mvn clean package -pl cluster -am -DskipTests' to compile the distributed module or directly go into the "),s("a",{attrs:{href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("website"),s("OutboundLink")],1),e._v(" to download the latest version.")])]),e._v(" "),s("li",[s("p",[e._v("Make sure ports 6567, 6667, 9003, 9004, 40010, 40011 and 31999 are open on all three nodes.")])]),e._v(" "),s("li",[s("p",[e._v("Send the package to all servers.")])]),e._v(" "),s("li",[s("p",[e._v("Modify the configuration items.")])]),e._v(" "),s("li",[s("p",[e._v("Run sh sbin/start-node.sh on each of the three nodes (or run in the background).")])])]),e._v(" "),s("h3",{attrs:{id:"compile-from-source-code-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compile-from-source-code-3"}},[e._v("#")]),e._v(" Compile from source code:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("mvn clean package -DskipTests\nchmod -R 777 ./cluster/target/\ncd cluster/target/iotdb-cluster-0.13.0-SNAPSHOT/\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h3",{attrs:{id:"use-the-official-website-release-version-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-the-official-website-release-version-3"}},[e._v("#")]),e._v(" Use the official website release version:")]),e._v(" "),s("p",[e._v("Download the release version:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("curl -O https://downloads.apache.org/iotdb/0.12.4/apache-iotdb-0.12.4-cluster-bin.zip\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Unzip the package:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("unzip apache-iotdb-0.12.4-cluster-bin.zip\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Enter IoTDB cluster root directory:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("cd apache-iotdb-0.12.4-cluster-bin\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Set default_replica_num = 3: default value of this configuration item is 3")]),e._v(" "),s("p",[e._v("Set internal_ip = private ip of node (e.g. 192.168.1.1)")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sed -i -e 's/^internal_ip=127.0.0.1$/internal_ip=192.168.1.1/g' conf/iotdb-cluster.properties\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Set seed_node = A_private_Ip:9003,B_private_Ip:9003,C_private_Ip:9003 (e.g. private ip of all three nodes are 192.168.1.1,192.168.1.2,192.168.1.3)")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sed -i -e 's/^seed_nodes=127.0.0.1:9003,127.0.0.1:9005,127.0.0.1:9007$/seed_nodes=192.168.1.1:9003,192.168.1.2:9003,192.168.1.3:9003/g' conf/iotdb-cluster.properties\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Set rpc_address = public ip of node (e.g. 192.168.1.1)")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("sed -i -e 's/^rpc_address=127.0.0.1$/rpc_address=192.168.1.1/g' conf/iotdb-engine.properties\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[s("strong",[e._v('You can modify the configuration items by yourself instead of using "sed" command')])]),e._v(" "),s("p",[e._v("Start the three nodes with their configurations:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("nohup ./sbin/start-node.sh >/dev/null 2>&1 &\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);