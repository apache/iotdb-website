(window.webpackJsonp=window.webpackJsonp||[]).push([[861],{1265:function(t,s,e){"use strict";e.r(s);var a=e(19),_=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"端云协同"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#端云协同"}},[t._v("#")]),t._v(" 端云协同")]),t._v(" "),s("h2",{attrs:{id:"tsfile-同步工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tsfile-同步工具"}},[t._v("#")]),t._v(" TsFile 同步工具")]),t._v(" "),s("h3",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),s("p",[t._v("同步工具是定期将本地磁盘中新增的已持久化的tsfile文件上传至云端并加载到IoTDB的套件工具。")]),t._v(" "),s("p",[t._v("在同步工具的发送端，同步模块是一个独立的进程，独立于本地的IoTDB。通过独立的脚本进行启动和关闭(详见章节"),s("code",[t._v("使用方式")]),t._v(")，同步的频率周期可由用户设置。")]),t._v(" "),s("p",[t._v("在同步工具的接收端，同步模块内嵌于IoTDB的引擎，和IoTDB处于同一个进程中。同步模块监听一个独立的端口，该端口可由用户设置(详见章节"),s("code",[t._v("配置参数")]),t._v(")。用户使用前，需要在同步接收端设置同步白名单，以网段形式表示，接收端的同步模块只接受位于白名单网段中的发送端同步的数据。")]),t._v(" "),s("p",[t._v("同步工具具有多对一的发送-接受模式，即一个同步接收端可以同时接受多个同步发送端传输的数据，一个同步发送端只能向一个同步接收端发送数据。")]),t._v(" "),s("blockquote",[s("p",[t._v("注意：在使用同步工具前，同步工具的接收端和发送端需要单独配置。")])]),t._v(" "),s("h3",{attrs:{id:"应用场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[t._v("#")]),t._v(" 应用场景")]),t._v(" "),s("p",[t._v("以一个工厂应用为例，通常有多个分厂和多个总厂，每个分厂中使用一个IoTDB实例收集数据，然后将数据定时汇总到总厂中进行备份或者分析等，一个总厂可以接收来自多个分厂的数据，在这种场景下每个IoTDB实例所管理的设备各不相同。")]),t._v(" "),s("p",[t._v("在sync模块中，每个分厂是发送端，总厂是接收端，发送端定时将数据同步给接收端，在上述应用场景下一个设备的数据只能由一个发送端来收集，因此多个发送端同步的数据之间必须是没有设备重叠的，否则不符合sync功能的应用场景。")]),t._v(" "),s("p",[t._v("当出现异常场景时，即两个或两个以上的发送端向同一个接收端同步相同设备(其存储组设为root.sg)的数据时，后被接收端收到的含有该设备数据的发送端的root.sg数据将会被拒绝接收。示例：发送端1向接收端同步存储组root.sg1和root.sg2, 发送端2向接收端同步存储组root.sg2和root.sg3,\n均包括时间序列root.sg2.d0.s0, 若接收端先接收到发送端1的root.sg2.d0.s0的数据，那么接收端将拒绝发送端2的root.sg2同步的数据。")]),t._v(" "),s("h3",{attrs:{id:"注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),s("p",[t._v("sync功能开启之后，发送端的 alter timeseries add tag 语句将不会被同步到接收端")]),t._v(" "),s("h3",{attrs:{id:"配置参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置参数"}},[t._v("#")]),t._v(" 配置参数")]),t._v(" "),s("h4",{attrs:{id:"同步工具接收端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同步工具接收端"}},[t._v("#")]),t._v(" 同步工具接收端")]),t._v(" "),s("p",[t._v("同步工具接收端的参数配置位于IoTDB的配置文件iotdb-engine.properties中，其安装目录为$IOTDB_HOME/conf/iotdb-engine.properties。在该配置文件中，有四个参数和同步接收端有关，配置说明如下:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("is_sync_enable")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("描述")]),t._v(" "),s("td",[t._v("同步功能开关，配置为true表示接收端允许接收同步的数据并加载，设置为false的时候表示接收端不允许接收同步的数据")])]),t._v(" "),s("tr",[s("td",[t._v("类型")]),t._v(" "),s("td",[t._v("Boolean")])]),t._v(" "),s("tr",[s("td",[t._v("默认值")]),t._v(" "),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("改后生效方式")]),t._v(" "),s("td",[t._v("重启服务生效")])])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("ip_white_list")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("描述")]),t._v(" "),s("td",[t._v("设置同步功能发送端IP地址的白名单，以网段的形式表示，多个网段之间用逗号分隔。发送端向接收端同步数据时，只有当该发送端IP地址处于该白名单设置的网段范围内，接收端才允许同步操作。如果白名单为空，则接收端不允许任何发送端同步数据。默认接收端接受全部IP的同步请求。")])]),t._v(" "),s("tr",[s("td",[t._v("类型")]),t._v(" "),s("td",[t._v("String")])]),t._v(" "),s("tr",[s("td",[t._v("默认值")]),t._v(" "),s("td",[t._v("0.0.0.0/0")])]),t._v(" "),s("tr",[s("td",[t._v("改后生效方式")]),t._v(" "),s("td",[t._v("重启服务生效")])])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("sync_server_port")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("描述")]),t._v(" "),s("td",[t._v("同步接收端服务器监听接口，请确认该端口不是系统保留端口并且未被占用。参数is_sync_enable设置为true时有效，参数is_sync_enable设置为false时无效")])]),t._v(" "),s("tr",[s("td",[t._v("类型")]),t._v(" "),s("td",[t._v("Short Int : [0,65535]")])]),t._v(" "),s("tr",[s("td",[t._v("默认值")]),t._v(" "),s("td",[t._v("5555")])]),t._v(" "),s("tr",[s("td",[t._v("改后生效方式")]),t._v(" "),s("td",[t._v("重启服务生效")])])])]),t._v(" "),s("h4",{attrs:{id:"同步工具发送端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#同步工具发送端"}},[t._v("#")]),t._v(" 同步工具发送端")]),t._v(" "),s("p",[t._v("同步功能发送端的参数配置在一个单独的配置文件中，其安装目录为"),s("code",[t._v("$IOTDB_HOME/conf/iotdb-sync-client.properties")]),t._v("。在该配置文件中，有五个参数和同步发送端有关，配置说明如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("server_ip")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("描述")]),t._v(" "),s("td",[t._v("同步接收端的IP地址")])]),t._v(" "),s("tr",[s("td",[t._v("类型")]),t._v(" "),s("td",[t._v("String")])]),t._v(" "),s("tr",[s("td",[t._v("默认值")]),t._v(" "),s("td",[t._v("127.0.0.1")])]),t._v(" "),s("tr",[s("td",[t._v("改后生效方式")]),t._v(" "),s("td",[t._v("重启同步功能发送端生效")])])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("server_port")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("描述")]),t._v(" "),s("td",[t._v("同步接收端服务器监听端口，需要保证该端口和同步接收端配置的监听端口一致")])]),t._v(" "),s("tr",[s("td",[t._v("类型")]),t._v(" "),s("td",[t._v("Short Int : [0,65535]")])]),t._v(" "),s("tr",[s("td",[t._v("默认值")]),t._v(" "),s("td",[t._v("5555")])]),t._v(" "),s("tr",[s("td",[t._v("改后生效方式")]),t._v(" "),s("td",[t._v("重启同步功能发送端生效")])])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("sync_period_in_second")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("描述")]),t._v(" "),s("td",[t._v("同步周期，两次同步任务开始时间的间隔，单位为秒(s)")])]),t._v(" "),s("tr",[s("td",[t._v("类型")]),t._v(" "),s("td",[t._v("Int : [0,2147483647]")])]),t._v(" "),s("tr",[s("td",[t._v("默认值")]),t._v(" "),s("td",[t._v("600")])]),t._v(" "),s("tr",[s("td",[t._v("改后生效方式")]),t._v(" "),s("td",[t._v("重启同步功能发送端生效")])])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("sync_storage_groups")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("描述")]),t._v(" "),s("td",[t._v("进行同步的存储组列表，存储组间用逗号分隔；若列表设置为空表示同步所有存储组，默认为空")])]),t._v(" "),s("tr",[s("td",[t._v("类型")]),t._v(" "),s("td",[t._v("String")])]),t._v(" "),s("tr",[s("td",[t._v("示例")]),t._v(" "),s("td",[t._v("root.sg1, root.sg2")])]),t._v(" "),s("tr",[s("td",[t._v("改后生效方式")]),t._v(" "),s("td",[t._v("重启同步功能发送端生效")])])])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("max_number_of_sync_file_retry")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("描述")]),t._v(" "),s("td",[t._v("发送端同步文件到接收端失败时的最大重试次数")])]),t._v(" "),s("tr",[s("td",[t._v("类型")]),t._v(" "),s("td",[t._v("Int : [0,2147483647]")])]),t._v(" "),s("tr",[s("td",[t._v("示例")]),t._v(" "),s("td",[t._v("5")])]),t._v(" "),s("tr",[s("td",[t._v("改后生效方式")]),t._v(" "),s("td",[t._v("重启同步功能发送端生效")])])])]),t._v(" "),s("h3",{attrs:{id:"使用方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用方式"}},[t._v("#")]),t._v(" 使用方式")]),t._v(" "),s("h4",{attrs:{id:"启动同步功能接收端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动同步功能接收端"}},[t._v("#")]),t._v(" 启动同步功能接收端")]),t._v(" "),s("ol",[s("li",[t._v("配置接收端的参数，例如：")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\t####################\n\t### Sync Server Configuration\n\t####################\n\n\t# Whether to open the sync_server_port for receiving data from sync client, the default is closed\n\tis_sync_enable=false\n\n\t# Sync server port to listen\n\tsync_server_port=5555\n\n\t# White IP list of Sync client.\n\t# Please use the form of network segment to present the range of IP, for example: 192.168.0.0/16\n\t# If there are more than one IP segment, please separate them by commas\n\t# The default is to allow all IP to sync\n\tip_white_list=0.0.0.0/0\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("启动IoTDB引擎，同步功能接收端会同时启动，启动时LOG日志会出现"),s("code",[t._v("IoTDB: start SYNC ServerService successfully")]),t._v("字样，表示同步接收端启动成功.")])]),t._v(" "),s("h4",{attrs:{id:"关闭同步功能接收端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关闭同步功能接收端"}},[t._v("#")]),t._v(" 关闭同步功能接收端")]),t._v(" "),s("p",[t._v("关闭IoTDB，同步功能接收端会同时关闭。")]),t._v(" "),s("h4",{attrs:{id:"启动同步功能发送端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动同步功能发送端"}},[t._v("#")]),t._v(" 启动同步功能发送端")]),t._v(" "),s("ol",[s("li",[t._v("配置发送端的参数")])]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("\t# Sync receiver server address\n\tserver_ip=127.0.0.1\n\n\t# Sync receiver server port\n\tserver_port=5555\n\n\t# The period time of sync process, the time unit is second.\n\tsync_period_in_second=600\n\n\t# This parameter represents storage groups that participate in the synchronization task, which distinguishes each storage group by comma.\n\t# If the list is empty, it means that all storage groups participate in synchronization.\n\t# By default, it is empty list.\n\t# sync_storage_groups = root.sg1, root.sg2\n\n\t# The maximum number of retry when syncing a file to receiver fails.\n\tmax_number_of_sync_file_retry=5\n\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("启动同步功能发送端")])]),t._v(" "),s("p",[t._v("用户可以使用"),s("code",[t._v("$IOTDB_HOME/tools")]),t._v("文件夹下的脚本启动同步功能的发送端\nLinux系统与MacOS系统启动命令如下：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  Shell >$IOTDB_HOME/tools/start-sync-client.sh\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Windows系统启动命令如下：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  Shell >$IOTDB_HOME\\tools\\start-sync-client.bat\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h4",{attrs:{id:"关闭同步功能发送端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关闭同步功能发送端"}},[t._v("#")]),t._v(" 关闭同步功能发送端")]),t._v(" "),s("p",[t._v("用户可以使用"),s("code",[t._v("$IOTDB_HOME/tools")]),t._v("文件夹下的脚本关闭同步功能的发送端。\nLinux系统与MacOS系统停止命令如下：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  Shell >$IOTDB_HOME/tools/stop-sync-client.sh\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Windows系统停止命令如下：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  Shell >$IOTDB_HOME\\tools\\stop-sync-client.bat\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])])])}),[],!1,null,null,null);s.default=_.exports}}]);