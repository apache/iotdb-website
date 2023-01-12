(window.webpackJsonp=window.webpackJsonp||[]).push([[1171],{1574:function(s,a,n){"use strict";n.r(a);var t=n(19),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"数据库管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库管理"}},[s._v("#")]),s._v(" 数据库管理")]),s._v(" "),a("p",[s._v("数据库（Database）可以被视为关系数据库中的Database。")]),s._v(" "),a("h2",{attrs:{id:"创建数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建数据库"}},[s._v("#")]),s._v(" 创建数据库")]),s._v(" "),a("p",[s._v("我们可以根据存储模型建立相应的数据库。如下所示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB > CREATE DATABASE root.ln\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("需要注意的是，database 的父子节点都不能再设置 database。例如在已经有"),a("code",[s._v("root.ln")]),s._v("和"),a("code",[s._v("root.sgcc")]),s._v("这两个 database 的情况下，创建"),a("code",[s._v("root.ln.wf01")]),s._v(" database 是不可行的。系统将给出相应的错误提示，如下所示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> CREATE DATABASE root.ln.wf01\nMsg: 300: root.ln has already been created as database.\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("Database 节点名只支持中英文字符、数字、下划线的组合，如果想设置为纯数字或者包含其他字符，需要用反引号(``)把 database 名称引起来。")]),s._v(" "),a("p",[s._v("还需注意，如果在 Windows 系统上部署，database 名是大小写不敏感的。例如同时创建"),a("code",[s._v("root.ln")]),s._v(" 和 "),a("code",[s._v("root.LN")]),s._v(" 是不被允许的。")]),s._v(" "),a("h2",{attrs:{id:"查看数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看数据库"}},[s._v("#")]),s._v(" 查看数据库")]),s._v(" "),a("p",[s._v("在 database 创建后，我们可以使用 "),a("RouterLink",{attrs:{to:"/zh/UserGuide/V1.0.x/Reference/SQL-Reference.html"}},[s._v("SHOW DATABASES")]),s._v(" 语句和 "),a("RouterLink",{attrs:{to:"/zh/UserGuide/V1.0.x/Reference/SQL-Reference.html"}},[s._v("SHOW DATABASES <PathPattern>")]),s._v(" 来查看 database，SQL 语句如下所示：")],1),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> show databases\nIoTDB> show databases root.*\nIoTDB> show databases root.**\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("执行结果为：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-------------+----+-------------------------+-----------------------+-----------------------+\n|     database| ttl|schema_replication_factor|data_replication_factor|time_partition_interval|\n+-------------+----+-------------------------+-----------------------+-----------------------+\n|    root.sgcc|null|                        2|                      2|                 604800|\n|      root.ln|null|                        2|                      2|                 604800|\n+-------------+----+-------------------------+-----------------------+-----------------------+\nTotal line number = 2\nIt costs 0.060s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"删除数据库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除数据库"}},[s._v("#")]),s._v(" 删除数据库")]),s._v(" "),a("p",[s._v("用户可以使用"),a("code",[s._v("DELETE DATABASE <PathPattern>")]),s._v("语句删除该路径模式匹配的所有的数据库。在删除的过程中，需要注意的是数据库的数据也会被删除。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB > DELETE DATABASE root.ln\nIoTDB > DELETE DATABASE root.sgcc\n// 删除所有数据，时间序列以及数据库\nIoTDB > DELETE DATABASE root.**\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"统计数据库数量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#统计数据库数量"}},[s._v("#")]),s._v(" 统计数据库数量")]),s._v(" "),a("p",[s._v("用户可以使用"),a("code",[s._v("COUNT DATABASES <PathPattern>")]),s._v("语句统计数据库的数量，允许指定"),a("code",[s._v("PathPattern")]),s._v(" 用来统计匹配该"),a("code",[s._v("PathPattern")]),s._v(" 的数据库的数量")]),s._v(" "),a("p",[s._v("SQL 语句如下所示：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> show databases\nIoTDB> count databases\nIoTDB> count databases root.*\nIoTDB> count databases root.sgcc.*\nIoTDB> count databases root.sgcc\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("执行结果为：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-------------+\n|     database|\n+-------------+\n|    root.sgcc|\n| root.turbine|\n|      root.ln|\n+-------------+\nTotal line number = 3\nIt costs 0.003s\n\n+-------------+\n|     Database|\n+-------------+\n|            3|\n+-------------+\nTotal line number = 1\nIt costs 0.003s\n\n+-------------+\n|     Database|\n+-------------+\n|            3|\n+-------------+\nTotal line number = 1\nIt costs 0.002s\n\n+-------------+\n|     Database|\n+-------------+\n|            0|\n+-------------+\nTotal line number = 1\nIt costs 0.002s\n\n+-------------+\n|     database|\n+-------------+\n|            1|\n+-------------+\nTotal line number = 1\nIt costs 0.002s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);