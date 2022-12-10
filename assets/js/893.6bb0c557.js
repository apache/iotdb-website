(window.webpackJsonp=window.webpackJsonp||[]).push([[893],{1295:function(a,s,t){"use strict";t.r(s);var e=t(19),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"工具介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#工具介绍"}},[a._v("#")]),a._v(" 工具介绍")]),a._v(" "),s("p",[a._v("IoTDB集群版为您提供了NodeTool Shell工具用于监控指定集群的工作状态，您可以通过运行多种指令获取集群各项状态。")]),a._v(" "),s("p",[a._v("下面具体介绍每个指令的使用方式及示例，其中$IOTDB_CLUSTER_HOME表示IoTDB分布式的安装目录所在路径。")]),a._v(" "),s("h1",{attrs:{id:"前提条件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[a._v("#")]),a._v(" 前提条件")]),a._v(" "),s("p",[a._v("使用NodeTool需要开启JMX服务，具体请参考"),s("RouterLink",{attrs:{to:"/zh/UserGuide/V0.12.x/System-Tools/JMX-Tool.html"}},[a._v("JMX Tool")]),a._v("。")],1),a._v(" "),s("h1",{attrs:{id:"使用说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用说明"}},[a._v("#")]),a._v(" 使用说明")]),a._v(" "),s("h2",{attrs:{id:"运行方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行方式"}},[a._v("#")]),a._v(" 运行方式")]),a._v(" "),s("p",[a._v("NodeTool Shell工具启动脚本位于$IOTDB_CLUSTER_HOME/sbin文件夹下，启动时可以指定集群运行的IP和PORT。\n其中IP为您期望连接的节点的IP，PORT为IoTDB集群启动时指定的JMX服务端口号，分别默认为"),s("code",[a._v("127.0.0.1")]),a._v("和"),s("code",[a._v("31999")]),a._v("。")]),a._v(" "),s("p",[a._v("如果您需要监控远程集群或修改了JMX服务端口号，请通过启动参数"),s("code",[a._v("-h")]),a._v("和"),s("code",[a._v("-p")]),a._v("项来使用实际的IP和PORT。")]),a._v(" "),s("p",[a._v("对于开启了JMX鉴权服务的，启动时候需要指定JMX服务的用户名和密码，默认分别为"),s("code",[a._v("iotdb")]),a._v("和"),s("code",[a._v("passw!d")]),a._v("，请通过启动参数"),s("code",[a._v("-u")]),a._v(" 和"),s("code",[a._v("-pw")]),a._v("\n项来指定JMX服务的用户名和密码。")]),a._v(" "),s("h2",{attrs:{id:"指令说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#指令说明"}},[a._v("#")]),a._v(" 指令说明")]),a._v(" "),s("p",[a._v("在分布式系统中，一个节点由节点IP，元数据端口，数据端口和服务端口来标识，即Node<IP:METAPORT:DATAPORT:CLUSTERPORT>。")]),a._v(" "),s("h3",{attrs:{id:"展示节点环"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#展示节点环"}},[a._v("#")]),a._v(" 展示节点环")]),a._v(" "),s("p",[a._v("IoTDB集群版采用一致性哈希的方式实现数据分布，用户可以通过打印哈希环信息了解每个节点在环中的位置。")]),a._v(" "),s("p",[a._v("1.输入")]),a._v(" "),s("blockquote",[s("p",[a._v("打印哈希环的指令为ring")])]),a._v(" "),s("p",[a._v("2.输出")]),a._v(" "),s("blockquote",[s("p",[a._v("输出为多行字符串，每行字符串为一个键值对，其中键表示节点标识，值表示节点(IP:METAPORT:DATAPORT:CLUSTERPORT)，格式为<key -> value>。")])]),a._v(" "),s("p",[a._v("3.示例")]),a._v(" "),s("blockquote",[s("p",[a._v("假设当前集群运行在127.0.0.1:9003:40010:6667, 127.0.0.1:9005:40012:6668 和 127.0.0.1:9007:40014:6669 三个节点上。\n不同系统的输入指令示例如下：")])]),a._v(" "),s("p",[a._v("Linux系统与MacOS系统：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Shell > ./sbin/nodetool.sh -h 127.0.0.1 -p 31999 ring\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("Windows系统：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Shell > .\\sbin\\nodetool.bat -h 127.0.0.1 -p 31999 ring\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("回车后即可执行指令。示例指令的输出如下：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Node Identifier                                 Node \n330411070           ->          127.0.0.1:9003:40010:6667 \n330454032           ->          127.0.0.1:9005:40012:6668\n330496472           ->          127.0.0.1:9007:40014:6669\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("上述输出表示当前集群共有3个节点，按照节点标识从小到大输出结果。")]),a._v(" "),s("h3",{attrs:{id:"查询数据分区和元数据分区"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询数据分区和元数据分区"}},[a._v("#")]),a._v(" 查询数据分区和元数据分区")]),a._v(" "),s("p",[a._v("IoTDB集群版的时间序列元数据按照存储组分给多个数据组，其中存储组和数据组为多对一的关系，\n即同一个存储组的时间序列元数据只存在于同一个数据组，一个数据组可能包含多个存储组的时间序列元数据；")]),a._v(" "),s("p",[a._v("数据按照存储组和其时间戳分给不同数据组，时间分区粒度默认为一天。")]),a._v(" "),s("p",[a._v("数据组由多个节点组成，节点数量为副本数，保证数据高可用，其中某一个节点担任Leader的角色。")]),a._v(" "),s("p",[a._v("通过该指令，用户可以获知某个路径下的元数据或数据具体存储在哪些节点下。")]),a._v(" "),s("p",[a._v("1.输入")]),a._v(" "),s("blockquote",[s("p",[a._v("查询数据分区信息的指令为partition，参数具体说明如下：")])]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("参数名")]),a._v(" "),s("th",[a._v("参数说明")]),a._v(" "),s("th",[a._v("示例")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("-m")]),a._v(" "),s("td",[a._v("--metadata\t查询元数据分区，默认为查询数据分区")]),a._v(" "),s("td",[a._v("-m")])]),a._v(" "),s("tr",[s("td",[a._v("-path")]),a._v(" "),s("td",[a._v("--path \t必要参数，需要查询的路径，若该路径无对应的存储组，则查询失败")]),a._v(" "),s("td",[a._v("-path root.guangzhou.d1")])]),a._v(" "),s("tr",[s("td",[a._v("-st")]),a._v(" "),s("td",[a._v("--StartTime\t查询数据分区时使用，起始时间，默认为系统当前时间")]),a._v(" "),s("td",[a._v("-st 1576724778159")])]),a._v(" "),s("tr",[s("td",[a._v("-et")]),a._v(" "),s("td",[a._v("--EndTime\t查询数据分区时使用，终止时间，默认为系统当前时间。若终止时间小于起始时间，则终止时间默认为起始时间")]),a._v(" "),s("td",[a._v("-et 1576724778159")])])])]),a._v(" "),s("p",[a._v("2.输出")]),a._v(" "),s("blockquote",[s("p",[a._v("输出为多行字符串，每行字符串为一个键值对，其中键表示分区，值表示数据组，格式为<key -> value>。")])]),a._v(" "),s("p",[a._v("3.示例")]),a._v(" "),s("blockquote",[s("p",[a._v("假设当前集群运行在127.0.0.1:9003:40010:6667, 127.0.0.1:9005:40012:6668 和 127.0.0.1:9007:40014:6669 三个节点上。\n副本数为2，共有3个存储组：{root.beijing、root.shanghai、root.guangzhou}。")])]),a._v(" "),s("ul",[s("li",[a._v("查询数据的分区(默认时间范围, 时间按天分区)")])]),a._v(" "),s("p",[a._v("不同系统的输入指令示例如下：")]),a._v(" "),s("p",[a._v("Linux系统与MacOS系统：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Shell > ./sbin/nodetool.sh -h 127.0.0.1 -p 31999 partition -path root.guangzhou.d1\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("Windows系统：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Shell > .\\sbin\\nodetool.bat -h 127.0.0.1 -p 31999 partition -path root.guangzhou.d1\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("回车后即可执行指令。示例指令的输出如下：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("DATA<root.guangzhou.d1, 1576723735188, 1576723735188>\t->\t[127.0.0.1:9003:40010:6667, 127.0.0.1:9005:40012:6668]\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ul",[s("li",[a._v("查询数据的分区(指定时间范围, 时间按天分区)")])]),a._v(" "),s("p",[a._v("不同系统的输入指令示例如下：")]),a._v(" "),s("p",[a._v("Linux系统与MacOS系统：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Shell > ./sbin/nodetool.sh -h 127.0.0.1 -p 31999 partition -path root.guangzhou.d1 -st 1576624778159 -et 1576724778159\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("Windows系统：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Shell > .\\sbin\\nodetool.bat -h 127.0.0.1 -p 31999 partition -path root.guangzhou.d1 -st 1576624778159 -et 1576724778159\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("回车后即可执行指令。示例指令的输出如下：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("DATA<root.guangzhou.d1, 1576627200000, 1576713599999>\t->\t[127.0.0.1:9007:40014:6669, 127.0.0.1:9003:40010:6667] \nDATA<root.guangzhou.d1, 1576713600000, 1576724778159>\t->\t[127.0.0.1:9003:40010:6668, 127.0.0.1:9005:40012:6668] \nDATA<root.guangzhou.d1, 1576624778159, 1576627199999>\t->\t[127.0.0.1:9005:40012:6667, 127.0.0.1:9007:40014:6669]\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("ul",[s("li",[a._v("查询元数据分区")])]),a._v(" "),s("p",[a._v("不同系统的输入指令示例如下：")]),a._v(" "),s("p",[a._v("Linux系统与MacOS系统：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Shell > ./sbin/nodetool.sh -h 127.0.0.1 -p 31999 partition -path root.guangzhou.d1 -m\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("Windows系统：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Shell > .\\sbin\\nodetool.bat -h 127.0.0.1 -p 31999 partition -path root.guangzhou.d1 -m\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("回车后即可执行指令。示例指令的输出如下：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("DATA<root.guangzhou.d1, 1576723735188, 1576723735188>\t->\t[127.0.0.1:9003:40010:6667, 127.0.0.1:9005:40012:6668]\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("上述输出表示root.t1.d1所属的数据分区包含2个节点，其中127.0.0.1:9003:40010:6667为header节点。")]),a._v(" "),s("h3",{attrs:{id:"查询节点管理的槽数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询节点管理的槽数"}},[a._v("#")]),a._v(" 查询节点管理的槽数")]),a._v(" "),s("p",[a._v("IoTDB集群版将哈希环划分为固定数量(默认10000)个槽，并由集群管理组（元数据组）的leader将槽划分各个数据组。通过该指令，用户可以获知数据组管理的槽数。")]),a._v(" "),s("ol",[s("li",[a._v("输入")])]),a._v(" "),s("blockquote",[s("p",[a._v("查询节点对应数据分区信息的指令为host，参数具体说明如下：")])]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[a._v("参数名")]),a._v(" "),s("th",[a._v("参数说明")]),a._v(" "),s("th",[a._v("示例")])])]),a._v(" "),s("tbody",[s("tr",[s("td",[a._v("-a --all")]),a._v(" "),s("td",[a._v("查询所有数据组管理的槽数，默认为查询的节点所在的数据组")]),a._v(" "),s("td",[a._v("-a")])])])]),a._v(" "),s("p",[a._v("2.输出")]),a._v(" "),s("blockquote",[s("p",[a._v("输出为多行字符串，其中每行字符串为一个键值对，其中键表示数据组，值表示管理的槽数，格式为<key -> value>。")])]),a._v(" "),s("p",[a._v("3.示例")]),a._v(" "),s("blockquote",[s("p",[a._v("假设当前集群运行在127.0.0.1:9003:40010:6667, 127.0.0.1:9005:40012:6668和127.0.0.1:9007:40014:6669三个节点上, 副本数为2。")])]),a._v(" "),s("ul",[s("li",[a._v("默认节点所在分区")])]),a._v(" "),s("p",[a._v("不同系统的输入指令示例如下：")]),a._v(" "),s("p",[a._v("Linux系统与MacOS系统：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Shell > ./sbin/nodetool.sh -h 127.0.0.1 -p 31999 host\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("Windows系统：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Shell > .\\sbin\\nodetool.bat -h 127.0.0.1 -p 31999 host\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("回车后即可执行指令。示例指令的输出如下：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Raft group                                                 Slot Number\n(127.0.0.1:9003:40010:6667, 127.0.0.1:9005:40012:6668)      ->                3333\n(127.0.0.1:9007:40014:6669, 127.0.0.1:9003:40010:6667)      ->                3334\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("ul",[s("li",[a._v("所有分区")])]),a._v(" "),s("p",[a._v("不同系统的输入指令示例如下：")]),a._v(" "),s("p",[a._v("Linux系统与MacOS系统：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Shell > ./sbin/nodetool.sh -h 127.0.0.1 -p 31999 host -a\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("Windows系统：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Shell > .\\sbin\\nodetool.bat -h 127.0.0.1 -p 31999 host -a\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("回车后即可执行指令。示例指令的输出如下：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Raft group                                                 Slot Number\n(127.0.0.1:9003:40010:6667, 127.0.0.1:9005:40012:6668)      ->                3333\n(127.0.0.1:9005:40012:6668, 127.0.0.1:9007:40014:6669)      ->                3333\n(127.0.0.1:9007:40014:6669, 127.0.0.1:9003:40010:6667)      ->                3334 \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h3",{attrs:{id:"查询节点状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询节点状态"}},[a._v("#")]),a._v(" 查询节点状态")]),a._v(" "),s("p",[a._v("IoTDB集群版包含多个节点，对于任意节点都存在因为网络、硬件等问题导致无法正常提供服务的可能。")]),a._v(" "),s("p",[a._v("通过该指令，用户即可获知集群中所有节点当前的状态。")]),a._v(" "),s("p",[a._v("1.输入")]),a._v(" "),s("blockquote",[s("p",[a._v("查询节点状态的指令为status，无其他参数。")])]),a._v(" "),s("p",[a._v("2.输出")]),a._v(" "),s("blockquote",[s("p",[a._v("输出为多行字符串，其中每行字符串为一个键值对，其中键表示节点(IP:METAPORT:DATAPORT)，\n值表示该节点的状态，“on”为正常，“off”为不正常，格式为<key -> value>。")])]),a._v(" "),s("p",[a._v("3.示例")]),a._v(" "),s("blockquote",[s("p",[a._v("假设当前集群运行在127.0.0.1:9003:40010:6667, 127.0.0.1:9005:40012:6668和127.0.0.1:9007:40014:6669三个节点上, 副本数为2。")])]),a._v(" "),s("p",[a._v("不同系统的输入指令示例如下：")]),a._v(" "),s("p",[a._v("Linux系统与MacOS系统：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Shell > ./sbin/nodetool.sh -h 127.0.0.1 -p 31999 status\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("Windows系统：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Shell > .\\sbin\\nodetool.bat -h 127.0.0.1 -p 31999 status\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("回车后即可执行指令。示例指令的输出如下：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Node                                Status \n127.0.0.1:9003:40010:6667          ->        on \n127.0.0.1:9005:40012:6668          ->        off \n127.0.0.1:9007:40014:6669          ->        on\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("上述输出表示127.0.0.1:9003:40010:6667节点和127.0.0.1:9007:40014:6669节点状态正常，127.0.0.1:9005:40012:6668节点无法提供服务。")])])}),[],!1,null,null,null);s.default=n.exports}}]);