(window.webpackJsonp=window.webpackJsonp||[]).push([[317],{719:function(t,e,r){"use strict";r.r(e);var a=r(19),o=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"cluster-setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cluster-setup"}},[t._v("#")]),t._v(" Cluster setup")]),t._v(" "),e("p",[t._v("You can follow this document to start an IoTDB cluster.")]),t._v(" "),e("h2",{attrs:{id:"prerequisite"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisite"}},[t._v("#")]),t._v(" Prerequisite")]),t._v(" "),e("p",[t._v("To use IoTDB, you need to have:")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("Java >= 1.8 (Please make sure the environment path has been set)")])]),t._v(" "),e("li",[e("p",[t._v('Set the max open files num as 65535 to avoid "too many open files" problem.')])])]),t._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("p",[t._v("IoTDB provides you three installation methods, you can refer to the following suggestions, choose one of them:")]),t._v(" "),e("ul",[e("li",[t._v("Installation from source code. If you need to modify the code yourself, you can use this method.")]),t._v(" "),e("li",[t._v("Installation from binary files. Download the binary files from the  official website.")]),t._v(" "),e("li",[t._v("Using Docker：The path to the dockerfile is https://github.com/apache/iotdb/blob/master/docker/src/main")])]),t._v(" "),e("h3",{attrs:{id:"build-from-source"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#build-from-source"}},[t._v("#")]),t._v(" Build from source")]),t._v(" "),e("p",[t._v("You can download the source code from:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git clone https://github.com/apache/iotdb.git\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("The default dev branch is the master branch, If you want to use a released version, for example:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("git checkout rel/0.12\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("Under the root path of iotdb:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("> mvn clean package -pl cluster -am -DskipTests\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("Then the cluster binary version can be found at "),e("strong",[t._v("cluster/target/{iotdb-project.version}")])]),t._v(" "),e("h3",{attrs:{id:"download"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#download"}},[t._v("#")]),t._v(" Download")]),t._v(" "),e("p",[t._v("You can download the binary file from: "),e("a",{attrs:{href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Download Page"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"directory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#directory"}},[t._v("#")]),t._v(" Directory")]),t._v(" "),e("p",[t._v("After installation, the following directories will be generated by default under the root directory of the iotdb cluster:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Directory")]),t._v(" "),e("th",[e("strong",[t._v("Description")])])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("conf")]),t._v(" "),e("td",[t._v("Configuration file directory")])]),t._v(" "),e("tr",[e("td",[t._v("data")]),t._v(" "),e("td",[t._v("Default data file directory, which can be modified in the configuration file")])]),t._v(" "),e("tr",[e("td",[t._v("ext")]),t._v(" "),e("td",[t._v("Default udf directory, which can be modified in the configuration file")])]),t._v(" "),e("tr",[e("td",[t._v("lib")]),t._v(" "),e("td",[t._v("Library directory")])]),t._v(" "),e("tr",[e("td",[t._v("logs")]),t._v(" "),e("td",[t._v("Execution log directory")])]),t._v(" "),e("tr",[e("td",[t._v("sbin")]),t._v(" "),e("td",[t._v("Script directory")])]),t._v(" "),e("tr",[e("td",[t._v("tools")]),t._v(" "),e("td",[t._v("System tool directory")])])])]),t._v(" "),e("h2",{attrs:{id:"configurations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configurations"}},[t._v("#")]),t._v(" Configurations")]),t._v(" "),e("p",[t._v("Before starting to use IoTDB, you need to config the configuration files first. For your convenience, we have already set the default config in the files.")]),t._v(" "),e("p",[t._v("In total, we provide users four kinds of configurations module:")]),t._v(" "),e("ul",[e("li",[t._v("environment configuration file ("),e("code",[t._v("iotdb-env.bat")]),t._v(", "),e("code",[t._v("iotdb-env.sh")]),t._v("). The default configuration file for the environment configuration item. Users can configure the relevant system configuration items of JAVA-JVM in the file.")]),t._v(" "),e("li",[t._v("system configuration file ("),e("code",[t._v("iotdb-engine.properties")]),t._v("). The default configuration file for the IoTDB engine layer configuration item. Users can configure the IoTDB engine related parameters in the file, such as the precision of timestamp("),e("code",[t._v("timestamp_precision")]),t._v("), etc. What's more, Users can configure settings of TsFile (the data files), such as the data size written to the disk per time("),e("code",[t._v("group_size_in_byte")]),t._v(").")]),t._v(" "),e("li",[t._v("log configuration file ("),e("code",[t._v("logback.xml")]),t._v("). The default log configuration file, such as the log levels.")]),t._v(" "),e("li",[e("code",[t._v("iotdb-cluster.properties")]),t._v(". Some configurations required by IoTDB cluster. Such as replication number("),e("code",[t._v("default_replica_num")]),t._v("), etc.")])]),t._v(" "),e("p",[t._v("For detailed description of the two configuration files "),e("code",[t._v("iotdb-engine.properties")]),t._v(", "),e("code",[t._v("iotdb-env.sh")]),t._v("/"),e("code",[t._v("iotdb-env.bat")]),t._v(", please refer to "),e("a",{attrs:{href:"https://github.com/apache/iotdb/blob/master/docs/UserGuide/Appendix/Config-Manual.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Configuration Manual"),e("OutboundLink")],1),t._v(". The configuration items of IoTDB cluster are in the "),e("code",[t._v("iotdb-cluster.properties")]),t._v(" file, you can also review the comments in the "),e("a",{attrs:{href:"https://github.com/apache/iotdb/blob/master/cluster/src/assembly/resources/conf/iotdb-cluster.properties",target:"_blank",rel:"noopener noreferrer"}},[t._v("configuration file"),e("OutboundLink")],1),t._v(" directly or you can refer to [Cluster Configuration](#Cluster Configuration).")]),t._v(" "),e("p",[t._v("Configuration files are located at "),e("strong",[t._v("{cluster_root_dir}/conf")])]),t._v(" "),e("p",[e("strong",[t._v("You are necessary to modify the following configuration items of each node to start your IoTDB cluster")]),t._v("：")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("iotdb-engine.properties:")]),t._v(" "),e("ul",[e("li",[t._v("rpc_address")])]),t._v(" "),e("ul",[e("li",[e("p",[t._v("rpc_port")])]),t._v(" "),e("li",[e("p",[t._v("base_dir")])]),t._v(" "),e("li",[e("p",[t._v("data_dirs")])]),t._v(" "),e("li",[e("p",[t._v("wal_dir")])])])]),t._v(" "),e("li",[e("p",[t._v("iotdb-cluster.properties")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("internal_ip")])]),t._v(" "),e("li",[e("p",[t._v("internal_meta_port")])]),t._v(" "),e("li",[e("p",[t._v("internal_data_port")])]),t._v(" "),e("li",[e("p",[t._v("cluster_info_public_port")])]),t._v(" "),e("li",[e("p",[t._v("seed_nodes")])]),t._v(" "),e("li",[e("p",[t._v("default_replica_num")])])])])]),t._v(" "),e("h3",{attrs:{id:"overwrite-the-configurations-of-stand-alone-node"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overwrite-the-configurations-of-stand-alone-node"}},[t._v("#")]),t._v(" OverWrite the configurations of Stand-alone node")]),t._v(" "),e("p",[t._v("Some configurations in the iotdb-engines.properties will be ignored")]),t._v(" "),e("ul",[e("li",[e("p",[e("code",[t._v("enable_auto_create_schema")]),t._v(" is always considered as "),e("code",[t._v("false")]),t._v(". Use "),e("code",[t._v("enable_auto_create_schema")]),t._v(" in iotdb-cluster.properties to enable it, instead.")])]),t._v(" "),e("li",[e("p",[e("code",[t._v("is_sync_enable")]),t._v(" is always considered as "),e("code",[t._v("false")]),t._v(".")])])]),t._v(" "),e("h2",{attrs:{id:"start-service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-service"}},[t._v("#")]),t._v(" Start Service")]),t._v(" "),e("h3",{attrs:{id:"start-cluster"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-cluster"}},[t._v("#")]),t._v(" Start Cluster")]),t._v(" "),e("p",[t._v("You can deploy a distributed cluster on multiple nodes or on a single machine, the main difference being that the latter needs to handle  conflicts between ports and file directories. For detail descriptions, please refer to "),e("a",{attrs:{href:"#Configurations"}},[t._v("Configurations")]),t._v(".")]),t._v(" "),e("p",[t._v("To start the service of one of the nodes, you need to execute the following commands:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# Unix/OS X\n> nohup sbin/start-node.sh [printgc] [<conf_path>] >/dev/null 2>&1 &\n\n# Windows\n> sbin\\start-node.bat [printgc] [<conf_path>]\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[e("code",[t._v("printgc")]),t._v(" means whether enable the gc and print gc logs when start the node,\n"),e("code",[t._v("<conf_path>")]),t._v(" use the configuration file in the "),e("code",[t._v("conf_path")]),t._v(" folder to override the default configuration file.")]),t._v(" "),e("p",[e("strong",[t._v("If you start all the seed nodes, and all the seed nodes can contact each other without ip/port and file directory conflicts, the cluster has successfully started.")])]),t._v(" "),e("h3",{attrs:{id:"cluster-scalability"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cluster-scalability"}},[t._v("#")]),t._v(" Cluster scalability")]),t._v(" "),e("p",[t._v("In the process of cluster running, users can add new nodes to the cluster or delete existing nodes. At present, it only supports node by node cluster scalability, and multi node cluster scalability can be transformed into a series of single node cluster scalability operations. The cluster will hanlde new cluster extension operations only after the last cluster scalability operation is completed.")]),t._v(" "),e("p",[e("strong",[t._v("Start the following script on the new node to join the cluster to add a new node:")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# Unix/OS X\n> nohup sbin/add-node.sh [printgc] [<conf_path>] >/dev/null 2>&1 &\n;\n# Windows\n> sbin\\add-node.bat [printgc] [<conf_path>] \n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[e("code",[t._v("printgc")]),t._v(" means whether enable the gc and print gc logs when start the node,\n"),e("code",[t._v("<conf_path>")]),t._v(" use the configuration file in the "),e("code",[t._v("conf_path")]),t._v(" folder to override the default configuration file. GC log is off by default.  For performance tuning, you may want to collect the GC info. GC log is stored at "),e("code",[t._v("IOTDB_HOME/logs/gc.log")]),t._v(".")]),t._v(" "),e("p",[e("strong",[t._v("Start the following script on any node in the cluster to delete a node:")])]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# Unix/OS X\n> sbin/remove-node.sh <internal_ip> <internal_meta_port>\n\n# Windows\n> sbin\\remove-node.bat <internal_ip> <internal_meta_port>\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[e("code",[t._v("internal_ip")]),t._v(" means the IP address of the node to be deleted "),e("code",[t._v("internal_meta_port")]),t._v(" means the meta port of the node to be deleted")]),t._v(" "),e("h3",{attrs:{id:"use-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#use-cli"}},[t._v("#")]),t._v(" Use Cli")]),t._v(" "),e("p",[t._v("please refer to "),e("a",{attrs:{href:"https://github.com/apache/iotdb/blob/master/docs/UserGuide/QuickStart/QuickStart.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("QuickStart"),e("OutboundLink")],1),t._v(". You can establish a connection with any node in the cluster according to the rpc_address and rpc_port.")]),t._v(" "),e("h3",{attrs:{id:"stop-cluster"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stop-cluster"}},[t._v("#")]),t._v(" "),e("strong",[t._v("Stop Cluster")])]),t._v(" "),e("p",[t._v("To stop the services of all the nodes on a single machine, you need to execute the following commands:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("# Unix/OS X\n> sbin/stop-node.sh\n\n# Windows\n> sbin\\stop-node.bat\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("h2",{attrs:{id:"appendix"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#appendix"}},[t._v("#")]),t._v(" Appendix")]),t._v(" "),e("h3",{attrs:{id:"cluster-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cluster-configuration"}},[t._v("#")]),t._v(" Cluster Configuration")]),t._v(" "),e("ul",[e("li",[t._v("internal_ip")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("internal_ip")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Description")]),t._v(" "),e("td",[t._v("IP address of internal communication between nodes in IOTDB cluster, such as heartbeat, snapshot, raft log, etc. "),e("strong",[e("code",[t._v("internal_ip")]),t._v(" is a private ip.")])])]),t._v(" "),e("tr",[e("td",[t._v("Type")]),t._v(" "),e("td",[t._v("String")])]),t._v(" "),e("tr",[e("td",[t._v("Default")]),t._v(" "),e("td",[t._v("127.0.0.1")])]),t._v(" "),e("tr",[e("td",[t._v("Effective")]),t._v(" "),e("td",[t._v("After restart system, shall NOT change after cluster is up")])])])]),t._v(" "),e("ul",[e("li",[t._v("internal_meta_port")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("internal_meta_port")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Description")]),t._v(" "),e("td",[t._v("IoTDB meta service port, for meta group's  communication, which involves all nodes and manages the cluster  configuration and storage groups. "),e("strong",[t._v("IoTDB will automatically create a heartbeat port for each meta service. The default meta service heartbeat port is "),e("code",[t._v("internal_meta_port+1")]),t._v(", please confirm that these two ports are not reserved by the system and are not occupied")])])]),t._v(" "),e("tr",[e("td",[t._v("Type")]),t._v(" "),e("td",[t._v("Int32")])]),t._v(" "),e("tr",[e("td",[t._v("Default")]),t._v(" "),e("td",[t._v("9003")])]),t._v(" "),e("tr",[e("td",[t._v("Effective")]),t._v(" "),e("td",[t._v("After restart system, shall NOT change after cluster is up")])])])]),t._v(" "),e("ul",[e("li",[t._v("internal_data_port")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("internal_data_port")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Description")]),t._v(" "),e("td",[t._v("IoTDB data service port, for data groups'  communication, each consists of one node and its replicas, managing  timeseries schemas and data. "),e("strong",[t._v("IoTDB will automatically create a heartbeat port for each data service. The default data service heartbeat port is "),e("code",[t._v("internal_data_port+1")]),t._v(". Please confirm that these two ports are not reserved by the system and are not occupied")])])]),t._v(" "),e("tr",[e("td",[t._v("Type")]),t._v(" "),e("td",[t._v("Int32")])]),t._v(" "),e("tr",[e("td",[t._v("Default")]),t._v(" "),e("td",[t._v("40010")])]),t._v(" "),e("tr",[e("td",[t._v("Effective")]),t._v(" "),e("td",[t._v("After restart system, shall NOT change after cluster is up")])])])]),t._v(" "),e("ul",[e("li",[t._v("cluster_info_public_port")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("cluster_info_public_port")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Description")]),t._v(" "),e("td",[t._v("The port of RPC service that getting the cluster info (e.g., data partition)")])]),t._v(" "),e("tr",[e("td",[t._v("Type")]),t._v(" "),e("td",[t._v("Int32")])]),t._v(" "),e("tr",[e("td",[t._v("Default")]),t._v(" "),e("td",[t._v("6567")])]),t._v(" "),e("tr",[e("td",[t._v("Effective")]),t._v(" "),e("td",[t._v("After restart system")])])])]),t._v(" "),e("ul",[e("li",[t._v("open_server_rpc_port")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("open_server_rpc_port")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Description")]),t._v(" "),e("td",[t._v("whether open port for server module (for debug purpose), if true, the single's server rpc_port will be changed to "),e("code",[t._v("rpc_port (in iotdb-engines.properties) + 1")])])]),t._v(" "),e("tr",[e("td",[t._v("Type")]),t._v(" "),e("td",[t._v("Boolean")])]),t._v(" "),e("tr",[e("td",[t._v("Default")]),t._v(" "),e("td",[t._v("False")])]),t._v(" "),e("tr",[e("td",[t._v("Effective")]),t._v(" "),e("td",[t._v("After restart system")])])])]),t._v(" "),e("ul",[e("li",[t._v("seed_nodes")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("seed_nodes")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Description")]),t._v(" "),e("td",[t._v("The address(internal ip) of the nodes in the cluster, "),e("code",[t._v("{IP/DOMAIN}:internal_meta_port")]),t._v(" format, separated by commas; for the pseudo-distributed mode, you can fill in "),e("code",[t._v("localhost")]),t._v(", or "),e("code",[t._v("127.0.0.1")]),t._v(" or mixed, but the real ip address cannot appear; for the distributed mode, real ip or hostname is supported, but "),e("code",[t._v("localhost")]),t._v(" or "),e("code",[t._v("127.0.0.1")]),t._v(" cannot appear. When used by "),e("code",[t._v("start-node.sh(.bat)")]),t._v(", this configuration means the nodes that will form the initial cluster, so every node that use "),e("code",[t._v("start-node.sh(.bat)")]),t._v(" should have the same "),e("code",[t._v("seed\\_nodes")]),t._v(", or the building of the initial cluster will fail. WARNING: if the  initial cluster is built, this should not be changed before the  environment is cleaned. When used by "),e("code",[t._v("add-node.sh(.bat)")]),t._v(",  this means the nodes to which that the application of joining the  cluster will be sent, as all nodes can respond to a request, this  configuration can be any nodes that already in the cluster, unnecessary  to be the nodes that were used to build the initial cluster by "),e("code",[t._v("start-node.sh(.bat)")]),t._v(". Several nodes will be picked randomly to send the request, the number of nodes picked depends on the number of retries.")])]),t._v(" "),e("tr",[e("td",[t._v("Type")]),t._v(" "),e("td",[t._v("String")])]),t._v(" "),e("tr",[e("td",[t._v("Default")]),t._v(" "),e("td",[t._v("127.0.0.1:9003,127.0.0.1:9005,127.0.0.1:9007")])]),t._v(" "),e("tr",[e("td",[t._v("Effective")]),t._v(" "),e("td",[t._v("After restart system")])])])]),t._v(" "),e("ul",[e("li",[t._v("rpc_thrift_compression_enable")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("rpc_thrift_compression_enable")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Description")]),t._v(" "),e("td",[t._v("Whether to enable thrift compression, "),e("strong",[t._v("Note that this parameter should be consistent with each node and with the client, and also consistent with the "),e("code",[t._v("rpc_thrift_compression_enable")]),t._v(" parameter in "),e("code",[t._v("iotdb-engine.properties")])])])]),t._v(" "),e("tr",[e("td",[t._v("Type")]),t._v(" "),e("td",[t._v("Boolean")])]),t._v(" "),e("tr",[e("td",[t._v("Default")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("Effective")]),t._v(" "),e("td",[t._v("After restart system, must be changed with all other nodes")])])])]),t._v(" "),e("ul",[e("li",[t._v("default_replica_num")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("default_replica_num")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Description")]),t._v(" "),e("td",[t._v("Number of cluster replicas of timeseries schema and data. Storage group info is always fully replicated in all nodes.")])]),t._v(" "),e("tr",[e("td",[t._v("Type")]),t._v(" "),e("td",[t._v("Int32")])]),t._v(" "),e("tr",[e("td",[t._v("Default")]),t._v(" "),e("td",[t._v("3")])]),t._v(" "),e("tr",[e("td",[t._v("Effective")]),t._v(" "),e("td",[t._v("After restart system, shall NOT change after cluster is up")])])])]),t._v(" "),e("ul",[e("li",[t._v("multi_raft_factor")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("multi_raft_factor")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Description")]),t._v(" "),e("td",[t._v("Number of raft group instances started by each data group. By default, each data group starts one raft group")])]),t._v(" "),e("tr",[e("td",[t._v("Type")]),t._v(" "),e("td",[t._v("Int32")])]),t._v(" "),e("tr",[e("td",[t._v("Default")]),t._v(" "),e("td",[t._v("1")])]),t._v(" "),e("tr",[e("td",[t._v("Effective")]),t._v(" "),e("td",[t._v("After restart system, shall NOT change after cluster is up")])])])]),t._v(" "),e("ul",[e("li",[t._v("cluster_name")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("cluster_name")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Description")]),t._v(" "),e("td",[t._v("Cluster name is used to identify different clusters, "),e("strong",[e("code",[t._v("cluster_name")]),t._v(" of all nodes in a cluster must be the same")])])]),t._v(" "),e("tr",[e("td",[t._v("Type")]),t._v(" "),e("td",[t._v("String")])]),t._v(" "),e("tr",[e("td",[t._v("Default")]),t._v(" "),e("td",[t._v("default")])]),t._v(" "),e("tr",[e("td",[t._v("Effective")]),t._v(" "),e("td",[t._v("After restart system")])])])]),t._v(" "),e("ul",[e("li",[t._v("connection_timeout_ms")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("connection_timeout_ms")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Description")]),t._v(" "),e("td",[t._v("Thrift socket and connection timeout between raft nodes, in milliseconds. "),e("strong",[t._v("Note that the timeout of the connection used for sending heartbeats and requesting votes will be adjust to min(heartbeat_interval_ms, connection_timeout_ms).")])])]),t._v(" "),e("tr",[e("td",[t._v("Type")]),t._v(" "),e("td",[t._v("Int32")])]),t._v(" "),e("tr",[e("td",[t._v("Default")]),t._v(" "),e("td",[t._v("20000")])]),t._v(" "),e("tr",[e("td",[t._v("Effective")]),t._v(" "),e("td",[t._v("After restart system")])])])]),t._v(" "),e("ul",[e("li",[t._v("heartbeat_interval_ms")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("heartbeat_interval_ms")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Description")]),t._v(" "),e("td",[t._v("The time period between heartbeat broadcasts in leader, in milliseconds")])]),t._v(" "),e("tr",[e("td",[t._v("Type")]),t._v(" "),e("td",[t._v("Int64")])]),t._v(" "),e("tr",[e("td",[t._v("Default")]),t._v(" "),e("td",[t._v("1000")])]),t._v(" "),e("tr",[e("td",[t._v("Effective")]),t._v(" "),e("td",[t._v("After restart system")])])])]),t._v(" "),e("ul",[e("li",[t._v("election_timeout_ms")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("election_timeout_ms")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Description")]),t._v(" "),e("td",[t._v("The election timeout in follower, or the time waiting for request votes in elector, in milliseconds")])]),t._v(" "),e("tr",[e("td",[t._v("Type")]),t._v(" "),e("td",[t._v("Int64")])]),t._v(" "),e("tr",[e("td",[t._v("Default")]),t._v(" "),e("td",[t._v("20000")])]),t._v(" "),e("tr",[e("td",[t._v("Effective")]),t._v(" "),e("td",[t._v("After restart system")])])])]),t._v(" "),e("ul",[e("li",[t._v("read_operation_timeout_ms")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("read_operation_timeout_ms")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Description")]),t._v(" "),e("td",[t._v("Read operation timeout time period, for internal communication only, not for the entire operation, in milliseconds")])]),t._v(" "),e("tr",[e("td",[t._v("Type")]),t._v(" "),e("td",[t._v("Int32")])]),t._v(" "),e("tr",[e("td",[t._v("Default")]),t._v(" "),e("td",[t._v("30000")])]),t._v(" "),e("tr",[e("td",[t._v("Effective")]),t._v(" "),e("td",[t._v("After restart system")])])])]),t._v(" "),e("ul",[e("li",[t._v("write_operation_timeout_ms")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("write_operation_timeout_ms")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Description")]),t._v(" "),e("td",[t._v("The write operation timeout period, for internal communication only, not for the entire operation, in milliseconds")])]),t._v(" "),e("tr",[e("td",[t._v("Type")]),t._v(" "),e("td",[t._v("Int32")])]),t._v(" "),e("tr",[e("td",[t._v("Default")]),t._v(" "),e("td",[t._v("30000")])]),t._v(" "),e("tr",[e("td",[t._v("Effective")]),t._v(" "),e("td",[t._v("After restart system")])])])]),t._v(" "),e("ul",[e("li",[t._v("min_num_of_logs_in_mem")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("min_num_of_logs_in_mem")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Description")]),t._v(" "),e("td",[t._v("The minimum number of committed logs in memory, after  each log deletion, at most such number of logs will remain in memory.  Increasing the number will reduce the chance to use snapshot in  catch-ups, but will also increase the memory footprint")])]),t._v(" "),e("tr",[e("td",[t._v("Type")]),t._v(" "),e("td",[t._v("Int32")])]),t._v(" "),e("tr",[e("td",[t._v("Default")]),t._v(" "),e("td",[t._v("100")])]),t._v(" "),e("tr",[e("td",[t._v("Effective")]),t._v(" "),e("td",[t._v("After restart system")])])])]),t._v(" "),e("ul",[e("li",[t._v("max_num_of_logs_in_mem")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("max_num_of_logs_in_mem")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Description")]),t._v(" "),e("td",[t._v("Maximum number of committed logs in memory, when  reached, a log deletion will be triggered. Increasing the number will  reduce the chance to use snapshot in catch-ups, but will also increase  memory footprint")])]),t._v(" "),e("tr",[e("td",[t._v("Type")]),t._v(" "),e("td",[t._v("Int32")])]),t._v(" "),e("tr",[e("td",[t._v("Default")]),t._v(" "),e("td",[t._v("1000")])]),t._v(" "),e("tr",[e("td",[t._v("Effective")]),t._v(" "),e("td",[t._v("After restart system")])])])]),t._v(" "),e("ul",[e("li",[t._v("log_deletion_check_interval_second")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("log_deletion_check_interval_second")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Description")]),t._v(" "),e("td",[t._v("The interval for checking and deleting the committed  log task, which removes oldest in-memory committed logs when their size  exceeds "),e("code",[t._v("min_num_of_logs_in_mem")]),t._v(" , in seconds")])]),t._v(" "),e("tr",[e("td",[t._v("Type")]),t._v(" "),e("td",[t._v("Int32")])]),t._v(" "),e("tr",[e("td",[t._v("Default")]),t._v(" "),e("td",[t._v("60")])]),t._v(" "),e("tr",[e("td",[t._v("Effective")]),t._v(" "),e("td",[t._v("After restart system")])])])]),t._v(" "),e("ul",[e("li",[t._v("enable_auto_create_schema")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("enable_auto_create_schema")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Description")]),t._v(" "),e("td",[t._v("Whether creating schema automatically is enabled, this will replace the one in "),e("code",[t._v("iotdb-engine.properties")])])]),t._v(" "),e("tr",[e("td",[t._v("Type")]),t._v(" "),e("td",[t._v("BOOLEAN")])]),t._v(" "),e("tr",[e("td",[t._v("Default")]),t._v(" "),e("td",[t._v("true")])]),t._v(" "),e("tr",[e("td",[t._v("Effective")]),t._v(" "),e("td",[t._v("After restart system")])])])]),t._v(" "),e("ul",[e("li",[t._v("consistency_level")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("consistency_level")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Description")]),t._v(" "),e("td",[t._v("Consistency level, now three consistency levels are  supported: strong, mid, and weak. Strong consistency means the server  will first try to synchronize with the leader to get the newest data, if failed(timeout), directly report an error to the user; While mid  consistency means the server will first try to synchronize with the  leader, but if failed(timeout), it will give up and just use current  data it has cached before; Weak consistency does not synchronize with  the leader and simply use the local data")])]),t._v(" "),e("tr",[e("td",[t._v("Type")]),t._v(" "),e("td",[t._v("strong, mid, weak")])]),t._v(" "),e("tr",[e("td",[t._v("Default")]),t._v(" "),e("td",[t._v("mid")])]),t._v(" "),e("tr",[e("td",[t._v("Effective")]),t._v(" "),e("td",[t._v("After restart system")])])])]),t._v(" "),e("ul",[e("li",[t._v("is_enable_raft_log_persistence")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("is_enable_raft_log_persistence")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Description")]),t._v(" "),e("td",[t._v("Whether to enable raft log persistence")])]),t._v(" "),e("tr",[e("td",[t._v("Type")]),t._v(" "),e("td",[t._v("BOOLEAN")])]),t._v(" "),e("tr",[e("td",[t._v("Default")]),t._v(" "),e("td",[t._v("true")])]),t._v(" "),e("tr",[e("td",[t._v("Effective")]),t._v(" "),e("td",[t._v("After restart system")])])])])])}),[],!1,null,null,null);e.default=o.exports}}]);