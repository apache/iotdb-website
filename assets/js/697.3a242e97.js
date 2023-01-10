(window.webpackJsonp=window.webpackJsonp||[]).push([[697],{1101:function(s,n,a){"use strict";a.r(n);var e=a(19),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"节点管理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#节点管理"}},[s._v("#")]),s._v(" 节点管理")]),s._v(" "),n("h2",{attrs:{id:"查看子路径"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看子路径"}},[s._v("#")]),s._v(" 查看子路径")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("SHOW CHILD PATHS pathPattern\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("可以查看此路径模式所匹配的所有路径的下一层的所有路径和它对应的节点类型，即pathPattern.*所匹配的路径及其节点类型。")]),s._v(" "),n("p",[s._v("节点类型：ROOT -> SG INTERNAL -> DATABASE -> INTERNAL -> DEVICE -> TIMESERIES")]),s._v(" "),n("p",[s._v("示例：")]),s._v(" "),n("ul",[n("li",[s._v("查询 root.ln 的下一层：show child paths root.ln")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("+------------+----------+\n| child paths|node types|\n+------------+----------+\n|root.ln.wf01|  INTERNAL|\n|root.ln.wf02|  INTERNAL|\n+------------+----------+\nTotal line number = 2\nIt costs 0.002s\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("ul",[n("li",[s._v("查询形如 root.xx.xx.xx 的路径：show child paths root.*.*")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("+---------------+\n|    child paths|\n+---------------+\n|root.ln.wf01.s1|\n|root.ln.wf02.s2|\n+---------------+\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"查看子节点"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看子节点"}},[s._v("#")]),s._v(" 查看子节点")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("SHOW CHILD NODES pathPattern\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("可以查看此路径模式所匹配的节点的下一层的所有节点。")]),s._v(" "),n("p",[s._v("示例：")]),s._v(" "),n("ul",[n("li",[s._v("查询 root 的下一层：show child nodes root")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("+------------+\n| child nodes|\n+------------+\n|          ln|\n+------------+\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("ul",[n("li",[s._v("查询 root.ln 的下一层 ：show child nodes root.ln")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("+------------+\n| child nodes|\n+------------+\n|        wf01|\n|        wf02|\n+------------+\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"统计节点数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#统计节点数"}},[s._v("#")]),s._v(" 统计节点数")]),s._v(" "),n("p",[s._v("IoTDB 支持使用"),n("code",[s._v("COUNT NODES <PathPattern> LEVEL=<INTEGER>")]),s._v("来统计当前 Metadata\n树下满足某路径模式的路径中指定层级的节点个数。这条语句可以用来统计带有特定采样点的设备数。例如：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("IoTDB > COUNT NODES root.** LEVEL=2\nIoTDB > COUNT NODES root.ln.** LEVEL=2\nIoTDB > COUNT NODES root.ln.wf01.* LEVEL=3\nIoTDB > COUNT NODES root.**.temperature LEVEL=3\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("对于上面提到的例子和 Metadata Tree，你可以获得如下结果：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("+------------+\n|count(nodes)|\n+------------+\n|           4|\n+------------+\nTotal line number = 1\nIt costs 0.003s\n\n+------------+\n|count(nodes)|\n+------------+\n|           2|\n+------------+\nTotal line number = 1\nIt costs 0.002s\n\n+------------+\n|count(nodes)|\n+------------+\n|           1|\n+------------+\nTotal line number = 1\nIt costs 0.002s\n\n+------------+\n|count(nodes)|\n+------------+\n|           2|\n+------------+\nTotal line number = 1\nIt costs 0.002s\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br")])]),n("blockquote",[n("p",[s._v("注意：时间序列的路径只是过滤条件，与 level 的定义无关。")])]),s._v(" "),n("h2",{attrs:{id:"查看设备"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#查看设备"}},[s._v("#")]),s._v(" 查看设备")]),s._v(" "),n("ul",[n("li",[s._v("SHOW DEVICES pathPattern? (WITH DATABASE)? limitClause? #showDevices")])]),s._v(" "),n("p",[s._v("与 "),n("code",[s._v("Show Timeseries")]),s._v(" 相似，IoTDB 目前也支持两种方式查看设备。")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("SHOW DEVICES")]),s._v(" 语句显示当前所有的设备信息，等价于 "),n("code",[s._v("SHOW DEVICES root.**")]),s._v("。")]),s._v(" "),n("li",[n("code",[s._v("SHOW DEVICES <PathPattern>")]),s._v(" 语句规定了 "),n("code",[s._v("PathPattern")]),s._v("，返回给定的路径模式所匹配的设备信息。")])]),s._v(" "),n("p",[s._v("SQL 语句如下所示：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("IoTDB> show devices\nIoTDB> show devices root.ln.**\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("你可以获得如下数据：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("+-------------------+---------+\n|            devices|isAligned|\n+-------------------+---------+\n|  root.ln.wf01.wt01|    false|\n|  root.ln.wf02.wt02|    false|\n|root.sgcc.wf03.wt01|    false|\n|    root.turbine.d1|    false|\n+-------------------+---------+\nTotal line number = 4\nIt costs 0.002s\n\n+-----------------+---------+\n|          devices|isAligned|\n+-----------------+---------+\n|root.ln.wf01.wt01|    false|\n|root.ln.wf02.wt02|    false|\n+-----------------+---------+\nTotal line number = 2\nIt costs 0.001s\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("p",[s._v("其中，"),n("code",[s._v("isAligned")]),s._v("表示该设备下的时间序列是否对齐。")]),s._v(" "),n("p",[s._v("查看设备及其 database 信息，可以使用 "),n("code",[s._v("SHOW DEVICES WITH DATABASE")]),s._v(" 语句。")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("SHOW DEVICES WITH DATABASE")]),s._v(" 语句显示当前所有的设备信息和其所在的 database，等价于 "),n("code",[s._v("SHOW DEVICES root.**")]),s._v("。")]),s._v(" "),n("li",[n("code",[s._v("SHOW DEVICES <PathPattern> WITH DATABASE")]),s._v(" 语句规定了 "),n("code",[s._v("PathPattern")]),s._v("，返回给定的路径模式所匹配的设备信息和其所在的 database。")])]),s._v(" "),n("p",[s._v("SQL 语句如下所示：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("IoTDB> show devices with database\nIoTDB> show devices root.ln.** with database\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("你可以获得如下数据：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("+-------------------+-------------+---------+\n|            devices|     database|isAligned|\n+-------------------+-------------+---------+\n|  root.ln.wf01.wt01|      root.ln|    false|\n|  root.ln.wf02.wt02|      root.ln|    false|\n|root.sgcc.wf03.wt01|    root.sgcc|    false|\n|    root.turbine.d1| root.turbine|    false|\n+-------------------+-------------+---------+\nTotal line number = 4\nIt costs 0.003s\n\n+-----------------+-------------+---------+\n|          devices|     database|isAligned|\n+-----------------+-------------+---------+\n|root.ln.wf01.wt01|      root.ln|    false|\n|root.ln.wf02.wt02|      root.ln|    false|\n+-----------------+-------------+---------+\nTotal line number = 2\nIt costs 0.001s\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("h2",{attrs:{id:"统计设备数量"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#统计设备数量"}},[s._v("#")]),s._v(" 统计设备数量")]),s._v(" "),n("ul",[n("li",[s._v("COUNT DEVICES "),n("PathPattern")],1)]),s._v(" "),n("p",[s._v("上述语句用于统计设备的数量，同时允许指定"),n("code",[s._v("PathPattern")]),s._v(" 用于统计匹配该"),n("code",[s._v("PathPattern")]),s._v(" 的设备数量")]),s._v(" "),n("p",[s._v("SQL 语句如下所示：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("IoTDB> show devices\nIoTDB> count devices\nIoTDB> count devices root.ln.**\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("你可以获得如下数据：")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("+-------------------+---------+\n|            devices|isAligned|\n+-------------------+---------+\n|root.sgcc.wf03.wt03|    false|\n|    root.turbine.d1|    false|\n|  root.ln.wf02.wt02|    false|\n|  root.ln.wf01.wt01|    false|\n+-------------------+---------+\nTotal line number = 4\nIt costs 0.024s\n\n+--------------+\n|count(devices)|\n+--------------+\n|             4|\n+--------------+\nTotal line number = 1\nIt costs 0.004s\n\n+--------------+\n|count(devices)|\n+--------------+\n|             2|\n+--------------+\nTotal line number = 1\nIt costs 0.004s\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);