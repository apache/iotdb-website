(window.webpackJsonp=window.webpackJsonp||[]).push([[606],{1221:function(s,a,t){"use strict";t.r(a);var e=t(82),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"运维命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运维命令"}},[s._v("#")]),s._v(" 运维命令")]),s._v(" "),t("h2",{attrs:{id:"flush"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flush"}},[s._v("#")]),s._v(" FLUSH")]),s._v(" "),t("p",[s._v("将指定存储组的内存缓存区 Memory Table 的数据持久化到磁盘上，并将数据文件封口。")]),s._v(" "),t("p",[s._v("注意：此命令客户端不需要手动调用，IoTDB 有 wal 保证数据安全，IoTDB 会选择合适的时机进行 flush。\n如果频繁调用 flush 会导致数据文件很小，降低查询性能。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("IoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" FLUSH \nIoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" FLUSH root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln\nIoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" FLUSH root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"merge"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#merge"}},[s._v("#")]),s._v(" MERGE")]),s._v(" "),t("p",[s._v("触发层级合并和乱序合并。当前 IoTDB 支持使用如下两种 SQL 手动触发数据文件的合并：")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("MERGE")]),s._v(" 先触发层级合并，等层级合并执行完后，再触发乱序合并。在乱序合并中，仅重写重复的 Chunk，整理速度快，但是最终磁盘会存在多余数据。")]),s._v(" "),t("li",[t("code",[s._v("FULL MERGE")]),s._v(" 先触发层级合并，等层级合并执行完后，再触发乱序合并。在乱序合并中，将需要合并的顺序和乱序文件的所有数据都重新写一份，整理速度慢，最终磁盘将不存在无用的数据。")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("IoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("MERGE")]),s._v("\nIoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FULL")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("MERGE")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"clear-cache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clear-cache"}},[s._v("#")]),s._v(" CLEAR CACHE")]),s._v(" "),t("p",[s._v("手动清除chunk, chunk metadata和timeseries metadata的缓存，在内存资源紧张时，可以通过此命令，释放查询时缓存所占的内存空间。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("IoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" CLEAR CACHE\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"set-ststem-to-readonly-writable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-ststem-to-readonly-writable"}},[s._v("#")]),s._v(" SET STSTEM TO READONLY / WRITABLE")]),s._v(" "),t("p",[s._v("手动设置系统为只读或者可写入模式。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("IoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" SYSTEM "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" READONLY\nIoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" SYSTEM "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" WRITABLE\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"schema-snapshot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#schema-snapshot"}},[s._v("#")]),s._v(" SCHEMA SNAPSHOT")]),s._v(" "),t("p",[s._v("为了加快 IoTDB 重启速度，用户可以手动触发创建 schema 的快照，从而避免服务器从 mlog 文件中恢复。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("IoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SNAPSHOT")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FOR")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SCHEMA")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"超时"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#超时"}},[s._v("#")]),s._v(" 超时")]),s._v(" "),t("p",[s._v("IoTDB 支持 Session 超时和查询超时。")]),s._v(" "),t("h3",{attrs:{id:"session-超时"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#session-超时"}},[s._v("#")]),s._v(" Session 超时")]),s._v(" "),t("p",[s._v("Session 超时控制何时关闭空闲 Session。空闲 Session 指在一段时间内没有发起任何操作的 Session。")]),s._v(" "),t("p",[s._v("Session 超时默认未开启。可以在配置文件中通过 "),t("code",[s._v("session_timeout_threshold")]),s._v(" 参数进行配置。")]),s._v(" "),t("h3",{attrs:{id:"查询超时"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询超时"}},[s._v("#")]),s._v(" 查询超时")]),s._v(" "),t("p",[s._v("对于执行时间过长的查询，IoTDB 将强行中断该查询，并抛出超时异常，如下所示：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("IoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nMsg: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("701")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Current")]),s._v(" query "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("is")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("out")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" please "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("check")]),s._v(" your statement "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("or")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("modify")]),s._v(" timeout parameter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("系统默认的超时时间为 60000 ms，可以在配置文件中通过 "),t("code",[s._v("query_timeout_threshold")]),s._v(" 参数进行自定义配置。")]),s._v(" "),t("p",[s._v("如果您使用 JDBC 或 Session，还支持对单个查询设置超时时间（单位为 ms）：")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("IoTDBStatement")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" statement"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("executeQuery")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" sql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" timeoutInMS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nsession"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("executeQueryStatement")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("String")]),s._v(" sql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("long")]),s._v(" timeout"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("blockquote",[t("p",[s._v("如果不配置超时时间参数或将超时时间设置为负数，将使用服务器端默认的超时时间。\n如果超时时间设置为0，则会禁用超时功能。")])]),s._v(" "),t("h3",{attrs:{id:"查询中止"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询中止"}},[s._v("#")]),s._v(" 查询中止")]),s._v(" "),t("p",[s._v("除了被动地等待查询超时外，IoTDB 还支持主动地中止查询，命令为：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("KILL")]),s._v(" QUERY "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("queryId"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("通过指定 "),t("code",[s._v("queryId")]),s._v(" 可以中止指定的查询，而如果不指定 "),t("code",[s._v("queryId")]),s._v("，将中止所有正在执行的查询。")]),s._v(" "),t("p",[s._v("为了获取正在执行的查询 id，用户可以使用 "),t("code",[s._v("show query processlist")]),s._v(" 命令，该命令将显示所有正在执行的查询列表，结果形式如下：")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("Time")]),s._v(" "),t("th",[s._v("queryId")]),s._v(" "),t("th",[s._v("statement")])])]),s._v(" "),t("tbody",[t("tr",[t("td"),s._v(" "),t("td"),s._v(" "),t("td")])])]),s._v(" "),t("p",[s._v("其中 statement 最大显示长度为 64 字符。对于超过 64 字符的查询语句，将截取部分进行显示。")])])}),[],!1,null,null,null);a.default=r.exports}}]);