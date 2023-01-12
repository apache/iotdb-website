(window.webpackJsonp=window.webpackJsonp||[]).push([[568],{971:function(s,n,e){"use strict";e.r(n);var a=e(19),t=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"node-management"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#node-management"}},[s._v("#")]),s._v(" Node Management")]),s._v(" "),n("h2",{attrs:{id:"show-child-paths"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#show-child-paths"}},[s._v("#")]),s._v(" Show Child Paths")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("SHOW CHILD PATHS pathPattern\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("Return all child paths and their node types of all the paths matching pathPattern.")]),s._v(" "),n("p",[s._v("node types: ROOT -> DB INTERNAL -> DATABASE -> INTERNAL -> DEVICE -> TIMESERIES")]),s._v(" "),n("p",[s._v("Example：")]),s._v(" "),n("ul",[n("li",[s._v("return the child paths of root.ln：show child paths root.ln")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("+------------+----------+\n| child paths|node types|\n+------------+----------+\n|root.ln.wf01|  INTERNAL|\n|root.ln.wf02|  INTERNAL|\n+------------+----------+\nTotal line number = 2\nIt costs 0.002s\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br")])]),n("blockquote",[n("p",[s._v("get all paths in form of root.xx.xx.xx：show child paths root.xx.xx")])]),s._v(" "),n("h2",{attrs:{id:"show-child-nodes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#show-child-nodes"}},[s._v("#")]),s._v(" Show Child Nodes")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("SHOW CHILD NODES pathPattern\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("Return all child nodes of the pathPattern.")]),s._v(" "),n("p",[s._v("Example：")]),s._v(" "),n("ul",[n("li",[s._v("return the child nodes of root：show child nodes root")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("+------------+\n| child nodes|\n+------------+\n|          ln|\n+------------+\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br")])]),n("ul",[n("li",[s._v("return the child nodes of root.ln：show child nodes root.ln")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("+------------+\n| child nodes|\n+------------+\n|        wf01|\n|        wf02|\n+------------+\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br")])]),n("h2",{attrs:{id:"count-nodes"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#count-nodes"}},[s._v("#")]),s._v(" Count Nodes")]),s._v(" "),n("p",[s._v("IoTDB is able to use "),n("code",[s._v("COUNT NODES <PathPattern> LEVEL=<INTEGER>")]),s._v(" to count the number of nodes at\nthe given level in current Metadata Tree considering a given pattern. IoTDB will find paths that\nmatch the pattern and counts distinct nodes at the specified level among the matched paths.\nThis could be used to query the number of devices with specified measurements. The usage are as\nfollows:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("IoTDB > COUNT NODES root.** LEVEL=2\nIoTDB > COUNT NODES root.ln.** LEVEL=2\nIoTDB > COUNT NODES root.ln.wf01.** LEVEL=3\nIoTDB > COUNT NODES root.**.temperature LEVEL=3\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[s._v("As for the above mentioned example and Metadata tree, you can get following results:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("+------------+\n|count(nodes)|\n+------------+\n|           4|\n+------------+\nTotal line number = 1\nIt costs 0.003s\n\n+------------+\n|count(nodes)|\n+------------+\n|           2|\n+------------+\nTotal line number = 1\nIt costs 0.002s\n\n+------------+\n|count(nodes)|\n+------------+\n|           1|\n+------------+\nTotal line number = 1\nIt costs 0.002s\n\n+------------+\n|count(nodes)|\n+------------+\n|           2|\n+------------+\nTotal line number = 1\nIt costs 0.002s\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br")])]),n("blockquote",[n("p",[s._v("Note: The path of timeseries is just a filter condition, which has no relationship with the definition of level.")])]),s._v(" "),n("h2",{attrs:{id:"show-devices"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#show-devices"}},[s._v("#")]),s._v(" Show Devices")]),s._v(" "),n("ul",[n("li",[s._v("SHOW DEVICES pathPattern? (WITH DATABASE)? limitClause? #showDevices")])]),s._v(" "),n("p",[s._v("Similar to "),n("code",[s._v("Show Timeseries")]),s._v(", IoTDB also supports two ways of viewing devices:")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("SHOW DEVICES")]),s._v(" statement presents all devices' information, which is equal to "),n("code",[s._v("SHOW DEVICES root.**")]),s._v(".")]),s._v(" "),n("li",[n("code",[s._v("SHOW DEVICES <PathPattern>")]),s._v(" statement specifies the "),n("code",[s._v("PathPattern")]),s._v(" and returns the devices information matching the pathPattern and under the given level.")])]),s._v(" "),n("p",[s._v("SQL statement is as follows:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("IoTDB> show devices\nIoTDB> show devices root.ln.**\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("You can get results below:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("+-------------------+---------+\n|            devices|isAligned|\n+-------------------+---------+\n|  root.ln.wf01.wt01|    false|\n|  root.ln.wf02.wt02|    false|\n|root.sgcc.wf03.wt01|    false|\n|    root.turbine.d1|    false|\n+-------------------+---------+\nTotal line number = 4\nIt costs 0.002s\n\n+-----------------+---------+\n|          devices|isAligned|\n+-----------------+---------+\n|root.ln.wf01.wt01|    false|\n|root.ln.wf02.wt02|    false|\n+-----------------+---------+\nTotal line number = 2\nIt costs 0.001s\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("p",[n("code",[s._v("isAligned")]),s._v(" indicates whether the timeseries under the device are aligned.")]),s._v(" "),n("p",[s._v("To view devices' information with database, we can use "),n("code",[s._v("SHOW DEVICES WITH DATABASE")]),s._v(" statement.")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("SHOW DEVICES WITH DATABASE")]),s._v(" statement presents all devices' information with their database.")]),s._v(" "),n("li",[n("code",[s._v("SHOW DEVICES <PathPattern> WITH DATABASE")]),s._v(" statement specifies the "),n("code",[s._v("PathPattern")]),s._v(" and returns the\ndevices' information under the given level with their database information.")])]),s._v(" "),n("p",[s._v("SQL statement is as follows:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("IoTDB> show devices with database\nIoTDB> show devices root.ln.** with database\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("You can get results below:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("+-------------------+-------------+---------+\n|            devices|     database|isAligned|\n+-------------------+-------------+---------+\n|  root.ln.wf01.wt01|      root.ln|    false|\n|  root.ln.wf02.wt02|      root.ln|    false|\n|root.sgcc.wf03.wt01|    root.sgcc|    false|\n|    root.turbine.d1| root.turbine|    false|\n+-------------------+-------------+---------+\nTotal line number = 4\nIt costs 0.003s\n\n+-----------------+-------------+---------+\n|          devices|     database|isAligned|\n+-----------------+-------------+---------+\n|root.ln.wf01.wt01|      root.ln|    false|\n|root.ln.wf02.wt02|      root.ln|    false|\n+-----------------+-------------+---------+\nTotal line number = 2\nIt costs 0.001s\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br")])]),n("h2",{attrs:{id:"count-devices"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#count-devices"}},[s._v("#")]),s._v(" Count Devices")]),s._v(" "),n("ul",[n("li",[s._v("COUNT DEVICES "),n("PathPattern")],1)]),s._v(" "),n("p",[s._v("The above statement is used to count the number of devices. At the same time, it is allowed to specify "),n("code",[s._v("PathPattern")]),s._v(" to count the number of devices matching the "),n("code",[s._v("PathPattern")]),s._v(".")]),s._v(" "),n("p",[s._v("SQL statement is as follows:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("IoTDB> show devices\nIoTDB> count devices\nIoTDB> count devices root.ln.**\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br")])]),n("p",[s._v("You can get results below:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("+-------------------+---------+\n|            devices|isAligned|\n+-------------------+---------+\n|root.sgcc.wf03.wt03|    false|\n|    root.turbine.d1|    false|\n|  root.ln.wf02.wt02|    false|\n|  root.ln.wf01.wt01|    false|\n+-------------------+---------+\nTotal line number = 4\nIt costs 0.024s\n\n+--------------+\n|count(devices)|\n+--------------+\n|             4|\n+--------------+\nTotal line number = 1\nIt costs 0.004s\n\n+--------------+\n|count(devices)|\n+--------------+\n|             2|\n+--------------+\nTotal line number = 1\nIt costs 0.004s\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);