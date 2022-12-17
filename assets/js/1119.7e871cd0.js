(window.webpackJsonp=window.webpackJsonp||[]).push([[1119],{1522:function(s,t,a){"use strict";a.r(t);var e=a(19),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"tsfile-同步"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tsfile-同步"}},[s._v("#")]),s._v(" TsFile 同步")]),s._v(" "),t("h2",{attrs:{id:"_1-介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-介绍"}},[s._v("#")]),s._v(" 1.介绍")]),s._v(" "),t("p",[s._v("同步工具是持续将边缘端（发送端） IoTDB 中的时间序列数据上传并加载至云端（接收端） IoTDB 的套件工具。")]),s._v(" "),t("p",[s._v("IoTDB 同步工具内嵌于 IoTDB 引擎，与下游接收端相连，下游支持 IoTDB（单机/集群）。")]),s._v(" "),t("p",[s._v("可以在发送端使用 SQL 命令来启动或者关闭一个同步任务，并且可以随时查看同步任务的状态。在接收端，您可以通过设置 IP 白名单来规定准入 IP 地址范围。")]),s._v(" "),t("h2",{attrs:{id:"_2-模型定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-模型定义"}},[s._v("#")]),s._v(" 2.模型定义")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/System%20Tools/Sync-Tool/pipe2.png?raw=true",alt:"pipe2.png"}})]),s._v(" "),t("p",[s._v('TsFile 同步工具实现了数据从 "流入-> IoTDB ->流出" 的闭环。假设目前有两台机器A和B都安装了IoTDB，希望将 A 上的数据不断同步至 B 中。为了更好地描述这个过程，我们引入以下概念。')]),s._v(" "),t("ul",[t("li",[s._v("Pipe\n"),t("ul",[t("li",[s._v("指一次同步任务，在上述案例中，我们可以看作在 A 和 B 之间有一根数据流管道连接了 A 和 B。")]),s._v(" "),t("li",[s._v("一个正常运行的 Pipe 有两种状态：RUNNING 表示正在向接收端同步数据，STOP 表示暂停向接收端同步数据。")])])]),s._v(" "),t("li",[s._v("PipeSink\n"),t("ul",[t("li",[s._v("指接收端，在上述案例中，PipeSink 即是 B 这台机器。PipeSink 的类型目前仅支持 IoTDB，即接收端为 B 上安装的 IoTDB 实例。")])])])]),s._v(" "),t("h2",{attrs:{id:"_3-注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-注意事项"}},[s._v("#")]),s._v(" 3.注意事项")]),s._v(" "),t("ul",[t("li",[s._v("同步工具的发送端目前仅支持 IoTDB 1.0 版本"),t("strong",[s._v("单数据副本配置")]),s._v("，接收端支持 IoTDB 1.0 版本任意配置。")]),s._v(" "),t("li",[s._v("当有一个或多个发送端指向一个接收端时，这些发送端和接收端各自的设备路径集合之间应当没有交集，否则可能产生不可预料错误\n"),t("ul",[t("li",[s._v("例如：当发送端A包括路径"),t("code",[s._v("root.sg.d.s")]),s._v("，发送端B也包括路径"),t("code",[s._v("root.sg.d.s")]),s._v("，当发送端A删除"),t("code",[s._v("root.sg")]),s._v(" database 时将也会在接收端删除所有B在接收端的"),t("code",[s._v("root.sg.d.s")]),s._v("中存放的数据。")])])]),s._v(" "),t("li",[s._v("两个“端”之间目前不支持相互同步。")]),s._v(" "),t("li",[s._v("同步工具仅同步数据写入，若接收端未创建 database，自动创建与发送端同级 database。当前版本删除操作不保证被同步，不支持 TTL 的设置、Trigger、CQ 等其他操作的同步。\n"),t("ul",[t("li",[s._v("若在发送端设置了 TTL，则启动 Pipe 时候 IoTDB 中所有未过期的数据以及未来所有的数据写入和删除都会被同步至接收端")])])]),s._v(" "),t("li",[s._v("对同步任务进行操作时，需保证 "),t("code",[s._v("SHOW DATANODES")]),s._v(" 中所有处于 Running 状态的 DataNode 节点均可连通，否则将执行失败。")])]),s._v(" "),t("h2",{attrs:{id:"_4-快速上手"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-快速上手"}},[s._v("#")]),s._v(" 4.快速上手")]),s._v(" "),t("p",[s._v("在发送端和接收端执行如下语句即可快速开始两个 IoTDB 之间的数据同步，完整的 SQL 语句和配置事项请查看"),t("code",[s._v("配置参数")]),s._v("和"),t("code",[s._v("SQL")]),s._v("两节，更多使用范例请参考"),t("code",[s._v("使用范例")]),s._v("节。")]),s._v(" "),t("ul",[t("li",[s._v("启动发送端 IoTDB 与接收端 IoTDB")]),s._v(" "),t("li",[s._v("创建接收端为 IoTDB 类型的 Pipe Sink")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> CREATE PIPESINK my_iotdb AS IoTDB (ip='接收端IP', port='接收端端口')\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("创建同步任务Pipe（请确保接收端 IoTDB 已经启动）")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> CREATE PIPE my_pipe TO my_iotdb\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("开始同步任务")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> START PIPE my_pipe\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("显示所有同步任务状态")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> SHOW PIPES\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("暂停任务")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> STOP PIPE my_pipe\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("继续被暂停的任务")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> START PIPE my_pipe\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("关闭任务（状态信息将被删除）")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> DROP PIPE my_pipe\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_5-配置参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-配置参数"}},[s._v("#")]),s._v(" 5.配置参数")]),s._v(" "),t("p",[s._v("所有参数修改均在"),t("code",[s._v("$IOTDB_HOME$/conf/iotdb-common.properties")]),s._v("中，所有修改完成之后执行"),t("code",[s._v("load configuration")]),s._v("之后即可立刻生效。")]),s._v(" "),t("h3",{attrs:{id:"_5-1发送端相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1发送端相关"}},[s._v("#")]),s._v(" 5.1发送端相关")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[t("strong",[s._v("参数名")])]),s._v(" "),t("th",[t("strong",[s._v("max_number_of_sync_file_retry")])])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("描述")]),s._v(" "),t("td",[s._v("发送端同步文件到接收端失败时的最大重试次数")])]),s._v(" "),t("tr",[t("td",[s._v("类型")]),s._v(" "),t("td",[s._v("Int : [0,2147483647]")])]),s._v(" "),t("tr",[t("td",[s._v("默认值")]),s._v(" "),t("td",[s._v("5")])])])]),s._v(" "),t("h3",{attrs:{id:"_5-2接收端相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-2接收端相关"}},[s._v("#")]),s._v(" 5.2接收端相关")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[t("strong",[s._v("参数名")])]),s._v(" "),t("th",[t("strong",[s._v("ip_white_list")])])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("描述")]),s._v(" "),t("td",[s._v("设置同步功能发送端 IP 地址的白名单，以网段的形式表示，多个网段之间用逗号分隔。发送端向接收端同步数据时，只有当该发送端 IP 地址处于该白名单设置的网段范围内，接收端才允许同步操作。如果白名单为空，则接收端不允许任何发送端同步数据。默认接收端拒绝除了本地以外的全部 IP 的同步请求。 对该参数进行配置时，需要保证发送端所有 DataNode 地址均被覆盖。")])]),s._v(" "),t("tr",[t("td",[s._v("类型")]),s._v(" "),t("td",[s._v("String")])]),s._v(" "),t("tr",[t("td",[s._v("默认值")]),s._v(" "),t("td",[s._v("127.0.0.1/32")])])])]),s._v(" "),t("h2",{attrs:{id:"_6-sql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-sql"}},[s._v("#")]),s._v(" 6.SQL")]),s._v(" "),t("h3",{attrs:{id:"show-pipesinktype"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-pipesinktype"}},[s._v("#")]),s._v(" SHOW PIPESINKTYPE")]),s._v(" "),t("ul",[t("li",[s._v("显示当前所能支持的 PipeSink 类型。")])]),s._v(" "),t("div",{staticClass:"language-Plain%20Text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> SHOW PIPESINKTYPE\nIoTDB>\n+-----+\n| type|\n+-----+\n|IoTDB|\n+-----+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"create-pipesink"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-pipesink"}},[s._v("#")]),s._v(" CREATE PIPESINK")]),s._v(" "),t("ul",[t("li",[s._v("创建接收端为 IoTDB 类型的 PipeSink，其中IP和port是可选参数。当接收端为集群时，填写任意一个 DataNode 的 "),t("code",[s._v("rpc_address")]),s._v(" 与 "),t("code",[s._v("rpc_port")]),s._v("。")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> CREATE PIPESINK <PipeSinkName> AS IoTDB [(ip='127.0.0.1',port=6667);]\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"drop-pipesink"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#drop-pipesink"}},[s._v("#")]),s._v(" DROP PIPESINK")]),s._v(" "),t("ul",[t("li",[s._v("删除 PipeSink。当 PipeSink 正在被同步任务使用时，无法删除 PipeSink。")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> DROP PIPESINK <PipeSinkName>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"show-pipesink"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-pipesink"}},[s._v("#")]),s._v(" SHOW PIPESINK")]),s._v(" "),t("ul",[t("li",[s._v("显示当前所有 PipeSink 定义，结果集有三列，分别表示 PipeSink 的名字，PipeSink 的类型，PipeSink 的属性。")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> SHOW PIPESINKS\nIoTDB> SHOW PIPESINK [PipeSinkName]\nIoTDB> \n+-----------+-----+------------------------+\n|       name| type|              attributes|\n+-----------+-----+------------------------+\n|my_pipesink|IoTDB|ip='127.0.0.1',port=6667|\n+-----------+-----+------------------------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"create-pipe"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-pipe"}},[s._v("#")]),s._v(" CREATE PIPE")]),s._v(" "),t("ul",[t("li",[s._v("创建同步任务\n"),t("ul",[t("li",[s._v("其中 select 语句目前仅支持"),t("code",[s._v("**")]),s._v("（即所有序列中的数据），from 语句目前仅支持"),t("code",[s._v("root")]),s._v("，where语句仅支持指定 time 的起始时间。起始时间的指定形式可以是 yyyy-mm-dd HH:MM:SS或时间戳。")])])])]),s._v(" "),t("div",{staticClass:"language-Plain%20Text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> CREATE PIPE my_pipe TO my_iotdb [FROM (select ** from root WHERE time>=yyyy-mm-dd HH:MM:SS)]\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"stop-pipe"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#stop-pipe"}},[s._v("#")]),s._v(" STOP PIPE")]),s._v(" "),t("ul",[t("li",[s._v("暂停任务")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> STOP PIPE <PipeName>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"start-pipe"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#start-pipe"}},[s._v("#")]),s._v(" START PIPE")]),s._v(" "),t("ul",[t("li",[s._v("开始任务")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> START PIPE <PipeName>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"drop-pipe"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#drop-pipe"}},[s._v("#")]),s._v(" DROP PIPE")]),s._v(" "),t("ul",[t("li",[s._v("关闭任务（状态信息可被删除）")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> DROP PIPE <PipeName>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"show-pipe"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-pipe"}},[s._v("#")]),s._v(" SHOW PIPE")]),s._v(" "),t("blockquote",[t("p",[s._v("该指令在发送端和接收端均可执行")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("显示所有同步任务状态")]),s._v(" "),t("ul",[t("li",[t("p",[t("code",[s._v("create time")]),s._v("：Pipe 的创建时间")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("name")]),s._v("：Pipe 的名字")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("role")]),s._v("：当前 IoTDB 在 Pipe 中的角色，可能有两种角色：")]),s._v(" "),t("ul",[t("li",[s._v("sender，当前 IoTDB 为同步发送端")]),s._v(" "),t("li",[s._v("receiver，当前 IoTDB 为同步接收端")])])]),s._v(" "),t("li",[t("p",[t("code",[s._v("remote")]),s._v("：Pipe的对端信息")]),s._v(" "),t("ul",[t("li",[s._v("当 role 为 sender 时，这一字段值为 PipeSink 名称")]),s._v(" "),t("li",[s._v("当 role 为 receiver 时，这一字段值为发送端 IP")])])]),s._v(" "),t("li",[t("p",[t("code",[s._v("status")]),s._v("：Pipe状态")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("attributes")]),s._v("：Pipe属性")]),s._v(" "),t("ul",[t("li",[s._v("当 role 为 sender 时，这一字段值为 Pipe 的同步起始时间和是否同步删除操作")]),s._v(" "),t("li",[s._v("当 role 为 receiver 时，这一字段值为当前 DataNode 上创建的同步连接对应的存储组名称")])])]),s._v(" "),t("li",[t("p",[t("code",[s._v("message")]),s._v("：Pipe运行信息，当 Pipe 正常运行时，这一字段通常为NORMAL，当出现异常时，可能出现两种状态：")]),s._v(" "),t("ul",[t("li",[s._v("WARN 状态，这表明发生了数据丢失或者其他错误，但是 Pipe 会保持运行")]),s._v(" "),t("li",[s._v("ERROR 状态，这表明出现了网络连接正常但数据无法传输的问题，例如发送端 IP 不在接收端白名单中，或是发送端与接收端版本不兼容")]),s._v(" "),t("li",[s._v("当出现 ERROR 状态时，建议 STOP PIPE 后查看 DataNode 日志，检查接收端配置或网络情况后重新 START PIPE")])])])])])]),s._v(" "),t("div",{staticClass:"language-Plain%20Text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> SHOW PIPES\nIoTDB>\n+-----------------------+--------+--------+-------------+---------+------------------------------------+-------+\n|            create time|   name |    role|       remote|   status|                          attributes|message|\n+-----------------------+--------+--------+-------------+---------+------------------------------------+-------+\n|2022-03-30T20:58:30.689|my_pipe1|  sender|  my_pipesink|     STOP|SyncDelOp=false,DataStartTimestamp=0| NORMAL|\n+-----------------------+--------+--------+-------------+---------+------------------------------------+-------+ \n|2022-03-31T12:55:28.129|my_pipe2|receiver|192.168.11.11|  RUNNING|             Database='root.vehicle'| NORMAL|\n+-----------------------+--------+--------+-------------+---------+------------------------------------+-------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("ul",[t("li",[s._v("显示指定同步任务状态，当未指定PipeName时，与"),t("code",[s._v("SHOW PIPES")]),s._v("等效")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> SHOW PIPE [PipeName]\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_7-使用示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-使用示例"}},[s._v("#")]),s._v(" 7.使用示例")]),s._v(" "),t("h3",{attrs:{id:"目标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目标"}},[s._v("#")]),s._v(" 目标")]),s._v(" "),t("ul",[t("li",[s._v("创建一个从边端 IoTDB 到 云端 IoTDB 的 同步工作")]),s._v(" "),t("li",[s._v("边端希望同步从2022年3月30日0时之后的数据")]),s._v(" "),t("li",[s._v("边端不希望同步所有的删除操作")]),s._v(" "),t("li",[s._v("云端 IoTDB 仅接受来自边端的 IoTDB 的数据")])]),s._v(" "),t("h3",{attrs:{id:"接收端操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#接收端操作"}},[s._v("#")]),s._v(" 接收端操作")]),s._v(" "),t("p",[t("code",[s._v("vi conf/iotdb-common.properties")]),s._v(" 配置云端参数，将白名单设置为仅接收来自 IP 为 192.168.0.1 的边端的数据")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("####################\n### PIPE Server Configuration\n####################\n# White IP list of Sync client.\n# Please use the form of network segment to present the range of IP, for example: 192.168.0.0/16\n# If there are more than one IP segment, please separate them by commas\n# The default is to allow all IP to sync\n# Datatype: String\nip_white_list=192.168.0.1/32\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h3",{attrs:{id:"发送端操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发送端操作"}},[s._v("#")]),s._v(" 发送端操作")]),s._v(" "),t("p",[s._v("创建云端 PipeSink，指定类型为 IoTDB，指定云端 IP 地址为 192.168.0.1，指定云端的 PipeServer 服务端口为6667")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> CREATE PIPESINK my_iotdb AS IoTDB (ip='192.168.0.1',port=6667)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("创建Pipe，指定连接到my_iotdb的PipeSink，在WHREE子句中输入开始时间点2022年3月30日0时。以下两条执行语句等价。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> CREATE PIPE p TO my_iotdb FROM (select ** from root where time>=2022-03-30 00:00:00)\nIoTDB> CREATE PIPE p TO my_iotdb FROM (select ** from root where time>= 1648569600000)\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("启动Pipe")]),s._v(" "),t("div",{staticClass:"language-Plain%20Text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> START PIPE p\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("显示同步任务状态")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> SHOW PIPE p\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"结果验证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结果验证"}},[s._v("#")]),s._v(" 结果验证")]),s._v(" "),t("p",[s._v("在发送端执行以下 SQL")]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vehicle"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" TIMESERIES root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vehicle"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s0 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" DATATYPE"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("INT32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ENCODING"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("RLE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" TIMESERIES root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vehicle"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" DATATYPE"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TEXT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ENCODING"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PLAIN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" TIMESERIES root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vehicle"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s2 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" DATATYPE"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FLOAT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ENCODING"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("RLE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" TIMESERIES root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vehicle"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s3 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" DATATYPE"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BOOLEAN")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" ENCODING"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PLAIN"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vehicle"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("timestamp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("s0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("now")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vehicle"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("timestamp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("s0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("now")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'12'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vehicle"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d0"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("timestamp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("now")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'14'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vehicle"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("timestamp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("s2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("now")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vehicle"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("timestamp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("s2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("s3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("now")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("18.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vehicle"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("timestamp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("s3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("now")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nflush"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("在发送端和接受端执行查询，可查询到相同的结果")]),s._v(" "),t("div",{staticClass:"language-Plain%20Text line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> select ** from root.vehicle\n+-----------------------------+------------------+------------------+------------------+------------------+\n|             Time|root.vehicle.d0.s0|root.vehicle.d0.s1|root.vehicle.d1.s3|root.vehicle.d1.s2|\n+-----------------------------+------------------+------------------+------------------+------------------+\n|2022-04-03T20:08:17.127+08:00|        10|       null|       null|       null|\n|2022-04-03T20:08:17.358+08:00|        12|        12|       null|       null|\n|2022-04-03T20:08:17.393+08:00|       null|        14|       null|       null|\n|2022-04-03T20:08:17.538+08:00|       null|       null|       null|       16.0|\n|2022-04-03T20:08:17.753+08:00|       null|       null|       true|       18.0|\n|2022-04-03T20:08:18.263+08:00|       null|       null|       false|       null|\n+-----------------------------+------------------+------------------+------------------+------------------+\nTotal line number = 6\nIt costs 0.134s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h2",{attrs:{id:"_8-常见问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-常见问题"}},[s._v("#")]),s._v(" 8.常见问题")]),s._v(" "),t("ul",[t("li",[s._v("执行 "),t("code",[s._v("CREATE PIPESINK demo as IoTDB")]),s._v(" 提示 "),t("code",[s._v("PIPESINK [demo] already exists in IoTDB.")]),s._v(" "),t("ul",[t("li",[s._v("原因：当前 PipeSink 已存在")]),s._v(" "),t("li",[s._v("解决方案：删除 PipeSink 后重新创建")])])]),s._v(" "),t("li",[s._v("执行 "),t("code",[s._v("DROP PIPESINK pipesinkName")]),s._v(" 提示 "),t("code",[s._v("Can not drop PIPESINK [demo], because PIPE [mypipe] is using it.")]),s._v(" "),t("ul",[t("li",[s._v("原因：不允许删除有正在运行的PIPE所使用的 PipeSink")]),s._v(" "),t("li",[s._v("解决方案：在发送端执行 "),t("code",[s._v("SHOW PIPE")]),s._v("，停止使用该 PipeSink 的 PIPE")])])]),s._v(" "),t("li",[s._v("执行 "),t("code",[s._v("CREATE PIPE p to demo")]),s._v(" 提示 "),t("code",[s._v("PIPE [p] is STOP, please retry after drop it.")]),s._v(" "),t("ul",[t("li",[s._v("原因：当前 Pipe 已存在")]),s._v(" "),t("li",[s._v("解决方案：删除 Pipe 后重新创建")])])]),s._v(" "),t("li",[s._v("执行 "),t("code",[s._v("CREATE PIPE p to demo")]),s._v("提示 "),t("code",[s._v("Fail to create PIPE [p] because Connection refused on DataNode: {id=2, internalEndPoint=TEndPoint(ip:127.0.0.1, port:9005)}.")]),s._v(" "),t("ul",[t("li",[s._v("原因：存在状态为 Running 的 DataNode 无法连通")]),s._v(" "),t("li",[s._v("解决方案：执行 "),t("code",[s._v("SHOW DATANODES")]),s._v(" 语句，检查无法连通的 DataNode 网络，或等待其状态变为 Unknown 后重新执行语句。")])])]),s._v(" "),t("li",[s._v("执行 "),t("code",[s._v("START PIPE p")]),s._v(" 提示 "),t("code",[s._v("Fail to start PIPE [p] because Connection refused on DataNode: {id=2, internalEndPoint=TEndPoint(ip:127.0.0.1, port:9005)}.")]),s._v(" "),t("ul",[t("li",[s._v("原因：存在状态为 Running 的 DataNode 无法连通")]),s._v(" "),t("li",[s._v("解决方案：执行 "),t("code",[s._v("SHOW DATANODES")]),s._v(" 语句，检查无法连通的 DataNode 网络，或等待其状态变为 Unknown 后重新执行语句。")])])]),s._v(" "),t("li",[s._v("执行 "),t("code",[s._v("STOP PIPE p")]),s._v(" 提示 "),t("code",[s._v("Fail to stop PIPE [p] because Connection refused on DataNode: {id=2, internalEndPoint=TEndPoint(ip:127.0.0.1, port:9005)}.")]),s._v(" "),t("ul",[t("li",[s._v("原因：存在状态为 Running 的 DataNode 无法连通")]),s._v(" "),t("li",[s._v("解决方案：执行 "),t("code",[s._v("SHOW DATANODES")]),s._v(" 语句，检查无法连通的 DataNode 网络，或等待其状态变为 Unknown 后重新执行语句。")])])]),s._v(" "),t("li",[s._v("执行 "),t("code",[s._v("DROP PIPE p")]),s._v(" 提示 "),t("code",[s._v("Fail to DROP_PIPE because Fail to drop PIPE [p] because Connection refused on DataNode: {id=2, internalEndPoint=TEndPoint(ip:127.0.0.1, port:9005)}. Please execute [DROP PIPE p] later to retry.")]),s._v(" "),t("ul",[t("li",[s._v("原因：存在状态为 Running 的 DataNode 无法连通，Pipe 已在部分节点上被删除，状态被置为 "),t("em",[t("strong",[s._v("DROP")])]),s._v("。")]),s._v(" "),t("li",[s._v("解决方案：执行 "),t("code",[s._v("SHOW DATANODES")]),s._v(" 语句，检查无法连通的 DataNode 网络，或等待其状态变为 Unknown 后重新执行语句。")])])]),s._v(" "),t("li",[s._v("运行时日志提示 "),t("code",[s._v("org.apache.iotdb.commons.exception.IoTDBException: root.** already been created as database")]),s._v(" "),t("ul",[t("li",[s._v("原因：同步工具试图在接收端自动创建发送端的Database，属于正常现象")]),s._v(" "),t("li",[s._v("解决方案：无需干预")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);