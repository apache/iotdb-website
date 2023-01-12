(window.webpackJsonp=window.webpackJsonp||[]).push([[724],{1128:function(s,t,a){"use strict";a.r(t);var e=a(19),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"结果集补空值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结果集补空值"}},[s._v("#")]),s._v(" 结果集补空值")]),s._v(" "),t("h2",{attrs:{id:"功能介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#功能介绍"}},[s._v("#")]),s._v(" 功能介绍")]),s._v(" "),t("p",[s._v("当执行一些数据查询时，结果集的某行某列可能没有数据，则此位置结果为空，但这种空值不利于进行数据可视化展示和分析，需要对空值进行填充。")]),s._v(" "),t("p",[s._v("在 IoTDB 中，用户可以使用 "),t("code",[s._v("FILL")]),s._v(" 子句指定数据缺失情况下的填充模式，允许用户按照特定的方法对任何查询的结果集填充空值，如取前一个不为空的值、线性插值等。")]),s._v(" "),t("h2",{attrs:{id:"语法定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#语法定义"}},[s._v("#")]),s._v(" 语法定义")]),s._v(" "),t("p",[t("strong",[t("code",[s._v("FILL")]),s._v(" 子句的语法定义如下：")])]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("FILL "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'('")]),s._v(" PREVIOUS "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" LINEAR "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" constant "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("')'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("注意：")])]),s._v(" "),t("ul",[t("li",[s._v("在 "),t("code",[s._v("Fill")]),s._v(" 语句中只能指定一种填充方法，该方法作用于结果集的全部列。")]),s._v(" "),t("li",[s._v("空值填充不兼容 0.13 版本及以前的语法（即不支持 "),t("code",[s._v("FILL((<data_type>[<fill_method>(, <before_range>, <after_range>)?])+)")]),s._v("）")])]),s._v(" "),t("h2",{attrs:{id:"填充方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#填充方式"}},[s._v("#")]),s._v(" 填充方式")]),s._v(" "),t("p",[t("strong",[s._v("IoTDB 目前支持以下三种空值填充方式：")])]),s._v(" "),t("ul",[t("li",[t("code",[s._v("PREVIOUS")]),s._v(" 填充：使用该列前一个非空值进行填充。")]),s._v(" "),t("li",[t("code",[s._v("LINEAR")]),s._v(" 填充：使用该列前一个非空值和下一个非空值的线性插值进行填充。")]),s._v(" "),t("li",[s._v("常量填充：使用指定常量填充。")])]),s._v(" "),t("p",[t("strong",[s._v("各数据类型支持的填充方法如下表所示：")])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[s._v("数据类型")]),s._v(" "),t("th",{staticStyle:{"text-align":"left"}},[s._v("支持的填充方法")])])]),s._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("BOOLEAN")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[t("code",[s._v("PREVIOUS")]),s._v("、常量")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("INT32")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[t("code",[s._v("PREVIOUS")]),s._v("、"),t("code",[s._v("LINEAR")]),s._v("、常量")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("INT64")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[t("code",[s._v("PREVIOUS")]),s._v("、"),t("code",[s._v("LINEAR")]),s._v("、常量")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("FLOAT")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[t("code",[s._v("PREVIOUS")]),s._v("、"),t("code",[s._v("LINEAR")]),s._v("、常量")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("DOUBLE")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[t("code",[s._v("PREVIOUS")]),s._v("、"),t("code",[s._v("LINEAR")]),s._v("、常量")])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[s._v("TEXT")]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[t("code",[s._v("PREVIOUS")]),s._v("、常量")])])])]),s._v(" "),t("p",[t("strong",[s._v("注意：")]),s._v(" 对于数据类型不支持指定填充方法的列，既不会填充它，也不会报错，只是让那一列保持原样。")]),s._v(" "),t("p",[t("strong",[s._v("下面通过举例进一步说明。")])]),s._v(" "),t("p",[s._v("如果我们不使用任何填充方式：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" temperature"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sgcc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wf03"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wt01 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T16:"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("37")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T16:"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("查询结果如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-----------------------------+-------------------------------+--------------------------+\n|                         Time|root.sgcc.wf03.wt01.temperature|root.sgcc.wf03.wt01.status|\n+-----------------------------+-------------------------------+--------------------------+\n|2017-11-01T16:37:00.000+08:00|                          21.93|                      true|\n+-----------------------------+-------------------------------+--------------------------+\n|2017-11-01T16:38:00.000+08:00|                           null|                     false|\n+-----------------------------+-------------------------------+--------------------------+\n|2017-11-01T16:39:00.000+08:00|                          22.23|                      null|\n+-----------------------------+-------------------------------+--------------------------+\n|2017-11-01T16:40:00.000+08:00|                          23.43|                      null|\n+-----------------------------+-------------------------------+--------------------------+\nTotal line number = 4\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h3",{attrs:{id:"previous-填充"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#previous-填充"}},[s._v("#")]),s._v(" "),t("code",[s._v("PREVIOUS")]),s._v(" 填充")]),s._v(" "),t("p",[t("strong",[s._v("对于查询结果集中的空值，使用该列前一个非空值进行填充。")])]),s._v(" "),t("p",[t("strong",[s._v("注意：")]),s._v(" 如果结果集的某一列第一个值就为空，则不会填充该值，直到遇到该列第一个非空值为止。")]),s._v(" "),t("p",[s._v("例如，使用 "),t("code",[s._v("PREVIOUS")]),s._v(" 填充，SQL 语句如下：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" temperature"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sgcc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wf03"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wt01 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T16:"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("37")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T16:"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),s._v(" fill"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("previous"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("PREVIOUS")]),s._v(" 填充后的结果如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-----------------------------+-------------------------------+--------------------------+\n|                         Time|root.sgcc.wf03.wt01.temperature|root.sgcc.wf03.wt01.status|\n+-----------------------------+-------------------------------+--------------------------+\n|2017-11-01T16:37:00.000+08:00|                          21.93|                      true|\n+-----------------------------+-------------------------------+--------------------------+\n|2017-11-01T16:38:00.000+08:00|                          21.93|                     false|\n+-----------------------------+-------------------------------+--------------------------+\n|2017-11-01T16:39:00.000+08:00|                          22.23|                     false|\n+-----------------------------+-------------------------------+--------------------------+\n|2017-11-01T16:40:00.000+08:00|                          23.43|                     false|\n+-----------------------------+-------------------------------+--------------------------+\nTotal line number = 4\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h3",{attrs:{id:"linear-填充"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linear-填充"}},[s._v("#")]),s._v(" "),t("code",[s._v("LINEAR")]),s._v(" 填充")]),s._v(" "),t("p",[t("strong",[s._v("对于查询结果集中的空值，使用该列前一个非空值和下一个非空值的线性插值进行填充。")])]),s._v(" "),t("p",[t("strong",[s._v("注意：")])]),s._v(" "),t("ul",[t("li",[s._v("如果某个值之前的所有值都为空，或者某个值之后的所有值都为空，则不会填充该值。")]),s._v(" "),t("li",[s._v("如果某列的数据类型为boolean/text，我们既不会填充它，也不会报错，只是让那一列保持原样。")])]),s._v(" "),t("p",[s._v("例如，使用 "),t("code",[s._v("LINEAR")]),s._v(" 填充，SQL 语句如下：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" temperature"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sgcc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wf03"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wt01 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T16:"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("37")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T16:"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),s._v(" fill"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("linear"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("LINEAR")]),s._v(" 填充后的结果如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-----------------------------+-------------------------------+--------------------------+\n|                         Time|root.sgcc.wf03.wt01.temperature|root.sgcc.wf03.wt01.status|\n+-----------------------------+-------------------------------+--------------------------+\n|2017-11-01T16:37:00.000+08:00|                          21.93|                      true|\n+-----------------------------+-------------------------------+--------------------------+\n|2017-11-01T16:38:00.000+08:00|                          22.08|                     false|\n+-----------------------------+-------------------------------+--------------------------+\n|2017-11-01T16:39:00.000+08:00|                          22.23|                      null|\n+-----------------------------+-------------------------------+--------------------------+\n|2017-11-01T16:40:00.000+08:00|                          23.43|                      null|\n+-----------------------------+-------------------------------+--------------------------+\nTotal line number = 4\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("h3",{attrs:{id:"常量填充"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常量填充"}},[s._v("#")]),s._v(" 常量填充")]),s._v(" "),t("p",[t("strong",[s._v("对于查询结果集中的空值，使用指定常量填充。")])]),s._v(" "),t("p",[t("strong",[s._v("注意：")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("如果某列数据类型与常量类型不兼容，既不填充该列，也不报错，将该列保持原样。对于常量兼容的数据类型，如下表所示：")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",{staticStyle:{"text-align":"left"}},[s._v("常量类型")]),s._v(" "),t("th",{staticStyle:{"text-align":"left"}},[s._v("能够填充的序列数据类型")])])]),s._v(" "),t("tbody",[t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("code",[s._v("BOOLEAN")])]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[t("code",[s._v("BOOLEAN")]),s._v(" "),t("code",[s._v("TEXT")])])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("code",[s._v("INT64")])]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[t("code",[s._v("INT32")]),s._v(" "),t("code",[s._v("INT64")]),s._v(" "),t("code",[s._v("FLOAT")]),s._v(" "),t("code",[s._v("DOUBLE")]),s._v(" "),t("code",[s._v("TEXT")])])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("code",[s._v("DOUBLE")])]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[t("code",[s._v("FLOAT")]),s._v(" "),t("code",[s._v("DOUBLE")]),s._v(" "),t("code",[s._v("TEXT")])])]),s._v(" "),t("tr",[t("td",{staticStyle:{"text-align":"left"}},[t("code",[s._v("TEXT")])]),s._v(" "),t("td",{staticStyle:{"text-align":"left"}},[t("code",[s._v("TEXT")])])])])])]),s._v(" "),t("li",[t("p",[s._v("当常量值大于 "),t("code",[s._v("INT32")]),s._v(" 所能表示的最大值时，对于 "),t("code",[s._v("INT32")]),s._v(" 类型的列，既不填充该列，也不报错，将该列保持原样。")])])]),s._v(" "),t("p",[s._v("例如，使用 "),t("code",[s._v("FLOAT")]),s._v(" 类型的常量填充，SQL 语句如下：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" temperature"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sgcc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wf03"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wt01 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T16:"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("37")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T16:"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),s._v(" fill"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("FLOAT")]),s._v(" 类型的常量填充后的结果如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-----------------------------+-------------------------------+--------------------------+\n|                         Time|root.sgcc.wf03.wt01.temperature|root.sgcc.wf03.wt01.status|\n+-----------------------------+-------------------------------+--------------------------+\n|2017-11-01T16:37:00.000+08:00|                          21.93|                      true|\n+-----------------------------+-------------------------------+--------------------------+\n|2017-11-01T16:38:00.000+08:00|                            2.0|                     false|\n+-----------------------------+-------------------------------+--------------------------+\n|2017-11-01T16:39:00.000+08:00|                          22.23|                      null|\n+-----------------------------+-------------------------------+--------------------------+\n|2017-11-01T16:40:00.000+08:00|                          23.43|                      null|\n+-----------------------------+-------------------------------+--------------------------+\nTotal line number = 4\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])]),t("p",[s._v("再比如，使用 "),t("code",[s._v("BOOLEAN")]),s._v(" 类型的常量填充，SQL 语句如下：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" temperature"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sgcc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wf03"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wt01 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T16:"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("37")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T16:"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),s._v(" fill"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("code",[s._v("BOOLEAN")]),s._v(" 类型的常量填充后的结果如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-----------------------------+-------------------------------+--------------------------+\n|                         Time|root.sgcc.wf03.wt01.temperature|root.sgcc.wf03.wt01.status|\n+-----------------------------+-------------------------------+--------------------------+\n|2017-11-01T16:37:00.000+08:00|                          21.93|                      true|\n+-----------------------------+-------------------------------+--------------------------+\n|2017-11-01T16:38:00.000+08:00|                           null|                     false|\n+-----------------------------+-------------------------------+--------------------------+\n|2017-11-01T16:39:00.000+08:00|                          22.23|                      true|\n+-----------------------------+-------------------------------+--------------------------+\n|2017-11-01T16:40:00.000+08:00|                          23.43|                      true|\n+-----------------------------+-------------------------------+--------------------------+\nTotal line number = 4\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);