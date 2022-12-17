(window.webpackJsonp=window.webpackJsonp||[]).push([[1133],{1536:function(s,t,a){"use strict";a.r(t);var e=a(19),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"运维命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运维命令"}},[s._v("#")]),s._v(" 运维命令")]),s._v(" "),t("h2",{attrs:{id:"flush"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flush"}},[s._v("#")]),s._v(" FLUSH")]),s._v(" "),t("p",[s._v("将指定 database 的内存缓存区 Memory Table 的数据持久化到磁盘上，并将数据文件封口。在集群模式下，我们提供了持久化本节点的指定 database 的缓存、持久化整个集群指定 database 的缓存命令。")]),s._v(" "),t("p",[s._v("注意：此命令客户端不需要手动调用，IoTDB 有 wal 保证数据安全，IoTDB 会选择合适的时机进行 flush。\n如果频繁调用 flush 会导致数据文件很小，降低查询性能。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("IoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" FLUSH \nIoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" FLUSH "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOCAL")]),s._v("\nIoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" FLUSH "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" CLUSTER\nIoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" FLUSH root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln\nIoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" FLUSH root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg2 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOCAL")]),s._v("\nIoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" FLUSH root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg2 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" CLUSTER\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"clear-cache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clear-cache"}},[s._v("#")]),s._v(" CLEAR CACHE")]),s._v(" "),t("p",[s._v("手动清除chunk, chunk metadata和timeseries metadata的缓存，在内存资源紧张时，可以通过此命令，释放查询时缓存所占的内存空间。在集群模式下，我们提供了清空本节点缓存、清空整个集群缓存命令。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("IoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" CLEAR CACHE\nIoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" CLEAR CACHE "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOCAL")]),s._v("\nIoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" CLEAR CACHE "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" CLUSTER\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"set-system-to-readonly-running"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-system-to-readonly-running"}},[s._v("#")]),s._v(" SET SYSTEM TO READONLY / RUNNING")]),s._v(" "),t("p",[s._v("手动设置系统为正常运行、只读状态。在集群模式下，我们提供了设置本节点状态、设置整个集群状态的命令，默认对整个集群生效。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("IoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" SYSTEM "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" RUNNING\nIoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" SYSTEM "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" READONLY "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOCAL")]),s._v("\nIoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" SYSTEM "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" READONLY "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" CLUSTER\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"终止查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#终止查询"}},[s._v("#")]),s._v(" 终止查询")]),s._v(" "),t("p",[s._v("IoTDB 支持设置 Session 连接超时和查询超时时间，并支持手动终止正在执行的查询。")]),s._v(" "),t("h3",{attrs:{id:"session-超时"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#session-超时"}},[s._v("#")]),s._v(" Session 超时")]),s._v(" "),t("p",[s._v("Session 超时控制何时关闭空闲 Session。空闲 Session 指在一段时间内没有发起任何操作的 Session。")]),s._v(" "),t("p",[s._v("Session 超时默认未开启。可以在配置文件中通过 "),t("code",[s._v("dn_session_timeout_threshold")]),s._v(" 参数进行配置。")]),s._v(" "),t("h3",{attrs:{id:"查询超时"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询超时"}},[s._v("#")]),s._v(" 查询超时")]),s._v(" "),t("p",[s._v("对于执行时间过长的查询，IoTDB 将强行中断该查询，并抛出超时异常，如下所示：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("IoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nMsg: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("701")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Current")]),s._v(" query "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("is")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("out")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" please "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("check")]),s._v(" your statement "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("or")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("modify")]),s._v(" timeout parameter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("系统默认的超时时间为 60000 ms，可以在配置文件中通过 "),t("code",[s._v("query_timeout_threshold")]),s._v(" 参数进行自定义配置。")]),s._v(" "),t("p",[s._v("如果您使用 JDBC 或 Session，还支持对单个查询设置超时时间（单位为 ms）：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IoTDBStatement")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" statement"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("executeQuery")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" sql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" timeoutInMS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nsession"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("executeQueryStatement")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" sql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" timeout"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("blockquote",[t("p",[s._v("如果不配置超时时间参数或将超时时间设置为负数，将使用服务器端默认的超时时间。\n如果超时时间设置为0，则会禁用超时功能。")])]),s._v(" "),t("h3",{attrs:{id:"查询终止"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询终止"}},[s._v("#")]),s._v(" 查询终止")]),s._v(" "),t("p",[s._v("除了被动地等待查询超时外，IoTDB 还支持主动地终止查询，命令为：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KILL")]),s._v(" QUERY "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("queryId"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("通过指定 "),t("code",[s._v("queryId")]),s._v(" 可以中止指定的查询，而如果不指定 "),t("code",[s._v("queryId")]),s._v("，将中止所有正在执行的查询。")]),s._v(" "),t("p",[s._v("为了获取正在执行的查询 id，用户可以使用 "),t("code",[s._v("show query processlist")]),s._v(" 命令，该命令将显示所有正在执行的查询列表，结果形式如下：")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("Time")]),s._v(" "),t("th",[s._v("queryId")]),s._v(" "),t("th",[s._v("statement")])])]),s._v(" "),t("tbody",[t("tr",[t("td"),s._v(" "),t("td"),s._v(" "),t("td")])])]),s._v(" "),t("p",[s._v("其中 statement 最大显示长度为 64 字符。对于超过 64 字符的查询语句，将截取部分进行显示。")])])}),[],!1,null,null,null);t.default=r.exports}}]);