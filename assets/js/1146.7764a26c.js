(window.webpackJsonp=window.webpackJsonp||[]).push([[1146],{1549:function(s,a,t){"use strict";t.r(a);var e=t(19),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"元数据模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#元数据模板"}},[s._v("#")]),s._v(" 元数据模板")]),s._v(" "),a("p",[s._v("IoTDB 支持元数据模板功能，实现同类型不同实体的物理量元数据共享，减少元数据内存占用，同时简化同类型实体的管理。")]),s._v(" "),a("p",[s._v("注：以下语句中的 "),a("code",[s._v("schema")]),s._v(" 关键字可以省略。")]),s._v(" "),a("h2",{attrs:{id:"创建元数据模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建元数据模板"}},[s._v("#")]),s._v(" 创建元数据模板")]),s._v(" "),a("p",[s._v("创建元数据模板的 SQL 语法如下：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SCHEMA")]),s._v(" TEMPLATE "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("templateName"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ALIGNED? "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'('")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("measurementId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("attributeClauses"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("','")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("measurementId"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("attributeClauses"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("')'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("示例1：")]),s._v(" 创建包含两个非对齐序列的元数据模板")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("IoTDB"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" create schema template t1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("temperature FLOAT "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("encoding")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("RLE, status BOOLEAN "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("encoding")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PLAIN "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("compression")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("SNAPPY"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("示例2：")]),s._v(" 创建包含一组对齐序列的元数据模板")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("IoTDB"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" create schema template t2 aligned "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("lat FLOAT "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("encoding")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Gorilla, lon FLOAT "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("encoding")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Gorilla"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("其中，物理量 "),a("code",[s._v("lat")]),s._v(" 和 "),a("code",[s._v("lon")]),s._v(" 是对齐的。")]),s._v(" "),a("h2",{attrs:{id:"挂载元数据模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#挂载元数据模板"}},[s._v("#")]),s._v(" 挂载元数据模板")]),s._v(" "),a("p",[s._v("元数据模板在创建后，需执行挂载操作，方可用于相应路径下的序列创建与数据写入。")]),s._v(" "),a("p",[a("strong",[s._v("挂载模板前，需确保存相关储组已经创建。")])]),s._v(" "),a("p",[a("strong",[s._v("推荐将模板挂载在 database 节点上，不建议将模板挂载到 database 上层的节点上。")])]),s._v(" "),a("p",[s._v("挂载元数据模板的 SQL 语句如下所示：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("IoTDB"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" schema template t1 to root.sg1.d1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"激活元数据模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#激活元数据模板"}},[s._v("#")]),s._v(" 激活元数据模板")]),s._v(" "),a("p",[s._v("挂载好元数据模板后，且系统开启自动注册序列功能的情况下，即可直接进行数据的写入。例如 database 为 root.sg1，模板 t1 被挂载到了节点 root.sg1.d1，那么可直接向时间序列（如 root.sg1.d1.temperature 和 root.sg1.d1.status）写入时间序列数据，该时间序列已可被当作正常创建的序列使用。")]),s._v(" "),a("p",[a("strong",[s._v("注意")]),s._v("：在插入数据之前或系统未开启自动注册序列功能，模板定义的时间序列不会被创建。可以使用如下SQL语句在插入数据前创建时间序列即激活模板：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("IoTDB"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" create timeseries of schema template on root.sg1.d1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("示例：")]),s._v(" 执行以下语句")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("IoTDB"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" schema template t1 to root.sg1.d1\nIoTDB"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" schema template t2 to root.sg1.d2\nIoTDB"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" create timeseries of schema template on root.sg1.d1\nIoTDB"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" create timeseries of schema template on root.sg1.d2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("查看此时的时间序列：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" timeseries root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("+-----------------------+-----+-------------+--------+--------+-----------+----+----------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("             timeseries"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     database"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("dataType"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("compression"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("tags"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("attributes"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------------------+-----+-------------+--------+--------+-----------+----+----------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("root.sg1.d1.temperature"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" null"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     root.sg1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   FLOAT"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     RLE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     SNAPPY"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("null"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("      null"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     root.sg1.d1.status"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" null"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     root.sg1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" BOOLEAN"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   PLAIN"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     SNAPPY"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("null"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("      null"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("        root.sg1.d2.lon"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" null"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     root.sg1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   FLOAT"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" GORILLA"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     SNAPPY"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("null"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("      null"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("        root.sg1.d2.lat"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" null"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     root.sg1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   FLOAT"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" GORILLA"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     SNAPPY"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("null"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("      null"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------------------+-----+-------------+--------+--------+-----------+----+----------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("查看此时的设备：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" devices root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("+---------------+---------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("        devices"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("isAligned"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+---------------+---------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    root.sg1.d1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    root.sg1.d2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+---------------+---------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"查看元数据模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看元数据模板"}},[s._v("#")]),s._v(" 查看元数据模板")]),s._v(" "),a("ul",[a("li",[s._v("查看所有元数据模板")])]),s._v(" "),a("p",[s._v("SQL 语句如下所示：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("IoTDB"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show schema templates\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("执行结果如下：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("+-------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("template name"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("           t2"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("           t1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-------------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ul",[a("li",[s._v("查看某个元数据模板下的物理量")])]),s._v(" "),a("p",[s._v("SQL 语句如下所示：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("IoTDB"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show nodes "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" schema template t1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("执行结果如下：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("+-----------+--------+--------+-----------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("child nodes"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("dataType"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("encoding"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("compression"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------+--------+--------+-----------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("temperature"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   FLOAT"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     RLE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     SNAPPY"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     status"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" BOOLEAN"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   PLAIN"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     SNAPPY"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------+--------+--------+-----------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("ul",[a("li",[s._v("查看挂载了某个元数据模板的路径")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("IoTDB"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show paths "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" schema template t1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("执行结果如下：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("+-----------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("child paths"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("root.sg1.d1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[s._v("查看使用了某个元数据模板的路径（即模板在该路径上已激活，序列已创建）")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("IoTDB"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show paths using schema template t1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("执行结果如下：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("+-----------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("child paths"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("root.sg1.d1"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"解除元数据模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解除元数据模板"}},[s._v("#")]),s._v(" 解除元数据模板")]),s._v(" "),a("p",[s._v("若需删除模板表示的某一组时间序列，可采用解除模板操作，SQL语句如下所示：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("IoTDB"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" delete timeseries of schema template t1 from root.sg1.d1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("或")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("IoTDB"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" deactivate schema template t1 from root.sg1.d1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("解除操作支持批量处理，SQL语句如下所示：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("IoTDB"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" delete timeseries of schema template t1 from root.sg1.*, root.sg2.*\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("或")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("IoTDB"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" deactivate schema template t1 from root.sg1.*, root.sg2.*\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("若解除命令不指定模板名称，则会将给定路径涉及的所有模板使用情况均解除。")]),s._v(" "),a("h2",{attrs:{id:"卸载元数据模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卸载元数据模板"}},[s._v("#")]),s._v(" 卸载元数据模板")]),s._v(" "),a("p",[s._v("卸载元数据模板的 SQL 语句如下所示：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("IoTDB"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("unset")]),s._v(" schema template t1 from root.sg1.d1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("注意")]),s._v("：不支持卸载仍处于激活状态的模板，需保证执行卸载操作前解除对该模板的所有使用，即删除所有该模板表示的序列。")]),s._v(" "),a("h2",{attrs:{id:"删除元数据模板"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#删除元数据模板"}},[s._v("#")]),s._v(" 删除元数据模板")]),s._v(" "),a("p",[s._v("删除元数据模板的 SQL 语句如下所示：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("IoTDB"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" drop schema template t1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("strong",[s._v("注意")]),s._v("：不支持删除已经挂载的模板，需在删除操作前保证该模板卸载成功。")])])}),[],!1,null,null,null);a.default=r.exports}}]);