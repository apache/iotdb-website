(window.webpackJsonp=window.webpackJsonp||[]).push([[734],{1139:function(_,v,t){"use strict";t.r(v);var a=t(19),e=Object(a.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"运算符和函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#运算符和函数"}},[_._v("#")]),_._v(" 运算符和函数")]),_._v(" "),v("p",[_._v("本章介绍 IoTDB 支持的运算符和函数。IoTDB 提供了丰富的内置运算符和函数来满足您的计算需求，同时支持通过"),v("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Operators-Functions/User-Defined-Function.html"}},[_._v("用户自定义函数")]),_._v("能力进行扩展。")],1),_._v(" "),v("p",[_._v("可以使用 "),v("code",[_._v("SHOW FUNCTIONS")]),_._v(" 显示所有可用函数的列表，包括内置函数和自定义函数。")]),_._v(" "),v("p",[_._v("关于运算符和函数在 SQL 中的行为，可以查看文档 "),v("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Query-Data/Select-Expression.html"}},[_._v("选择表达式")]),_._v("。")],1),_._v(" "),v("h2",{attrs:{id:"运算符列表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#运算符列表"}},[_._v("#")]),_._v(" 运算符列表")]),_._v(" "),v("h3",{attrs:{id:"算数运算符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#算数运算符"}},[_._v("#")]),_._v(" 算数运算符")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("运算符")]),_._v(" "),v("th",[_._v("含义")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[v("code",[_._v("+")])]),_._v(" "),v("td",[_._v("取正（单目）")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("-")])]),_._v(" "),v("td",[_._v("取负（单目）")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("*")])]),_._v(" "),v("td",[_._v("乘")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("/")])]),_._v(" "),v("td",[_._v("除")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("%")])]),_._v(" "),v("td",[_._v("取余")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("+")])]),_._v(" "),v("td",[_._v("加")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("-")])]),_._v(" "),v("td",[_._v("减")])])])]),_._v(" "),v("p",[_._v("详细说明及示例见文档 "),v("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Operators-Functions/Mathematical.html"}},[_._v("算数运算符和函数")]),_._v("。")],1),_._v(" "),v("h3",{attrs:{id:"比较运算符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#比较运算符"}},[_._v("#")]),_._v(" 比较运算符")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("运算符")]),_._v(" "),v("th",[_._v("含义")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[v("code",[_._v(">")])]),_._v(" "),v("td",[_._v("大于")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v(">=")])]),_._v(" "),v("td",[_._v("大于等于")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("<")])]),_._v(" "),v("td",[_._v("小于")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("<=")])]),_._v(" "),v("td",[_._v("小于等于")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("==")])]),_._v(" "),v("td",[_._v("等于")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("!=")]),_._v(" / "),v("code",[_._v("<>")])]),_._v(" "),v("td",[_._v("不等于")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("BETWEEN ... AND ...")])]),_._v(" "),v("td",[_._v("在指定范围内")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("NOT BETWEEN ... AND ...")])]),_._v(" "),v("td",[_._v("不在指定范围内")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("LIKE")])]),_._v(" "),v("td",[_._v("匹配简单模式")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("NOT LIKE")])]),_._v(" "),v("td",[_._v("无法匹配简单模式")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("REGEXP")])]),_._v(" "),v("td",[_._v("匹配正则表达式")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("NOT REGEXP")])]),_._v(" "),v("td",[_._v("无法匹配正则表达式")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("IS NULL")])]),_._v(" "),v("td",[_._v("是空值")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("IS NOT NULL")])]),_._v(" "),v("td",[_._v("不是空值")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("IN")]),_._v(" / "),v("code",[_._v("CONTAINS")])]),_._v(" "),v("td",[_._v("是指定列表中的值")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("NOT IN")]),_._v(" / "),v("code",[_._v("NOT CONTAINS")])]),_._v(" "),v("td",[_._v("不是指定列表中的值")])])])]),_._v(" "),v("p",[_._v("详细说明及示例见文档 "),v("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Operators-Functions/Comparison.html"}},[_._v("比较运算符和函数")]),_._v("。")],1),_._v(" "),v("h3",{attrs:{id:"逻辑运算符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#逻辑运算符"}},[_._v("#")]),_._v(" 逻辑运算符")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("运算符")]),_._v(" "),v("th",[_._v("含义")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[v("code",[_._v("NOT")]),_._v(" / "),v("code",[_._v("!")])]),_._v(" "),v("td",[_._v("取非（单目）")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("AND")]),_._v(" / "),v("code",[_._v("&")]),_._v(" / "),v("code",[_._v("&&")])]),_._v(" "),v("td",[_._v("逻辑与")])]),_._v(" "),v("tr",[v("td",[v("code",[_._v("OR")]),_._v("/ | / ||")]),_._v(" "),v("td",[_._v("逻辑或")])])])]),_._v(" "),v("p",[_._v("详细说明及示例见文档 "),v("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Operators-Functions/Logical.html"}},[_._v("逻辑运算符")]),_._v("。")],1),_._v(" "),v("h3",{attrs:{id:"运算符优先级"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#运算符优先级"}},[_._v("#")]),_._v(" 运算符优先级")]),_._v(" "),v("p",[_._v("运算符的优先级从高到低如下所示排列，同一行的运算符具有相同的优先级。")]),_._v(" "),v("div",{staticClass:"language-sql line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-sql"}},[v("code",[v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("!")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("-")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),_._v("单目"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("+")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v("(")]),_._v("单目"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(")")]),_._v("\n"),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("*")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("/")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("DIV")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("%")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" MOD\n"),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("-")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("+")]),_._v("\n"),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("=")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("<=>")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v(">=")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v(">")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("<=")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("<")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("<>")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("!=")]),_._v("\n"),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("LIKE")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("REGEXP")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("NOT")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("LIKE")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("NOT")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("REGEXP")]),_._v("\n"),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("BETWEEN")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("AND")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("NOT")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("BETWEEN")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("AND")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(".")]),_._v("\n"),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("IS")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token boolean"}},[_._v("NULL")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("IS")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("NOT")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token boolean"}},[_._v("NULL")]),_._v("\n"),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("IN")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("CONTAINS")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("NOT")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("IN")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("NOT")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[_._v("CONTAINS")]),_._v("\n"),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("AND")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("&")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("&&")]),_._v("\n"),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("OR")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("|")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[_._v(",")]),_._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[_._v("||")]),_._v("\n")])]),_._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[_._v("1")]),v("br"),v("span",{staticClass:"line-number"},[_._v("2")]),v("br"),v("span",{staticClass:"line-number"},[_._v("3")]),v("br"),v("span",{staticClass:"line-number"},[_._v("4")]),v("br"),v("span",{staticClass:"line-number"},[_._v("5")]),v("br"),v("span",{staticClass:"line-number"},[_._v("6")]),v("br"),v("span",{staticClass:"line-number"},[_._v("7")]),v("br"),v("span",{staticClass:"line-number"},[_._v("8")]),v("br"),v("span",{staticClass:"line-number"},[_._v("9")]),v("br"),v("span",{staticClass:"line-number"},[_._v("10")]),v("br")])]),v("h2",{attrs:{id:"内置函数列表"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内置函数列表"}},[_._v("#")]),_._v(" 内置函数列表")]),_._v(" "),v("h3",{attrs:{id:"聚合函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#聚合函数"}},[_._v("#")]),_._v(" 聚合函数")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("函数名")]),_._v(" "),v("th",[_._v("功能描述")]),_._v(" "),v("th",[_._v("允许的输入类型")]),_._v(" "),v("th",[_._v("输出类型")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("SUM")]),_._v(" "),v("td",[_._v("求和。")]),_._v(" "),v("td",[_._v("INT32 INT64 FLOAT DOUBLE")]),_._v(" "),v("td",[_._v("DOUBLE")])]),_._v(" "),v("tr",[v("td",[_._v("COUNT")]),_._v(" "),v("td",[_._v("计算数据点数。")]),_._v(" "),v("td",[_._v("所有类型")]),_._v(" "),v("td",[_._v("INT")])]),_._v(" "),v("tr",[v("td",[_._v("AVG")]),_._v(" "),v("td",[_._v("求平均值。")]),_._v(" "),v("td",[_._v("INT32 INT64 FLOAT DOUBLE")]),_._v(" "),v("td",[_._v("DOUBLE")])]),_._v(" "),v("tr",[v("td",[_._v("EXTREME")]),_._v(" "),v("td",[_._v("求具有最大绝对值的值。如果正值和负值的最大绝对值相等，则返回正值。")]),_._v(" "),v("td",[_._v("INT32 INT64 FLOAT DOUBLE")]),_._v(" "),v("td",[_._v("与输入类型一致")])]),_._v(" "),v("tr",[v("td",[_._v("MAX_VALUE")]),_._v(" "),v("td",[_._v("求最大值。")]),_._v(" "),v("td",[_._v("INT32 INT64 FLOAT DOUBLE")]),_._v(" "),v("td",[_._v("与输入类型一致")])]),_._v(" "),v("tr",[v("td",[_._v("MIN_VALUE")]),_._v(" "),v("td",[_._v("求最小值。")]),_._v(" "),v("td",[_._v("INT32 INT64 FLOAT DOUBLE")]),_._v(" "),v("td",[_._v("与输入类型一致")])]),_._v(" "),v("tr",[v("td",[_._v("FIRST_VALUE")]),_._v(" "),v("td",[_._v("求时间戳最小的值。")]),_._v(" "),v("td",[_._v("所有类型")]),_._v(" "),v("td",[_._v("与输入类型一致")])]),_._v(" "),v("tr",[v("td",[_._v("LAST_VALUE")]),_._v(" "),v("td",[_._v("求时间戳最大的值。")]),_._v(" "),v("td",[_._v("所有类型")]),_._v(" "),v("td",[_._v("与输入类型一致")])]),_._v(" "),v("tr",[v("td",[_._v("MAX_TIME")]),_._v(" "),v("td",[_._v("求最大时间戳。")]),_._v(" "),v("td",[_._v("所有类型")]),_._v(" "),v("td",[_._v("Timestamp")])]),_._v(" "),v("tr",[v("td",[_._v("MIN_TIME")]),_._v(" "),v("td",[_._v("求最小时间戳。")]),_._v(" "),v("td",[_._v("所有类型")]),_._v(" "),v("td",[_._v("Timestamp")])])])]),_._v(" "),v("p",[_._v("详细说明及示例见文档 "),v("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Operators-Functions/Aggregation.html"}},[_._v("聚合函数")]),_._v("。")],1),_._v(" "),v("h3",{attrs:{id:"数学函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数学函数"}},[_._v("#")]),_._v(" 数学函数")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("函数名")]),_._v(" "),v("th",[_._v("输入序列类型")]),_._v(" "),v("th",[_._v("输出序列类型")]),_._v(" "),v("th",[_._v("Java 标准库中的对应实现")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("SIN")]),_._v(" "),v("td",[_._v("INT32 / INT64 / FLOAT / DOUBLE")]),_._v(" "),v("td",[_._v("DOUBLE")]),_._v(" "),v("td",[_._v("Math#sin(double)")])]),_._v(" "),v("tr",[v("td",[_._v("COS")]),_._v(" "),v("td",[_._v("INT32 / INT64 / FLOAT / DOUBLE")]),_._v(" "),v("td",[_._v("DOUBLE")]),_._v(" "),v("td",[_._v("Math#cos(double)")])]),_._v(" "),v("tr",[v("td",[_._v("TAN")]),_._v(" "),v("td",[_._v("INT32 / INT64 / FLOAT / DOUBLE")]),_._v(" "),v("td",[_._v("DOUBLE")]),_._v(" "),v("td",[_._v("Math#tan(double)")])]),_._v(" "),v("tr",[v("td",[_._v("ASIN")]),_._v(" "),v("td",[_._v("INT32 / INT64 / FLOAT / DOUBLE")]),_._v(" "),v("td",[_._v("DOUBLE")]),_._v(" "),v("td",[_._v("Math#asin(double)")])]),_._v(" "),v("tr",[v("td",[_._v("ACOS")]),_._v(" "),v("td",[_._v("INT32 / INT64 / FLOAT / DOUBLE")]),_._v(" "),v("td",[_._v("DOUBLE")]),_._v(" "),v("td",[_._v("Math#acos(double)")])]),_._v(" "),v("tr",[v("td",[_._v("ATAN")]),_._v(" "),v("td",[_._v("INT32 / INT64 / FLOAT / DOUBLE")]),_._v(" "),v("td",[_._v("DOUBLE")]),_._v(" "),v("td",[_._v("Math#atan(double)")])]),_._v(" "),v("tr",[v("td",[_._v("SINH")]),_._v(" "),v("td",[_._v("INT32 / INT64 / FLOAT / DOUBLE")]),_._v(" "),v("td",[_._v("DOUBLE")]),_._v(" "),v("td",[_._v("Math#sinh(double)")])]),_._v(" "),v("tr",[v("td",[_._v("COSH")]),_._v(" "),v("td",[_._v("INT32 / INT64 / FLOAT / DOUBLE")]),_._v(" "),v("td",[_._v("DOUBLE")]),_._v(" "),v("td",[_._v("Math#cosh(double)")])]),_._v(" "),v("tr",[v("td",[_._v("TANH")]),_._v(" "),v("td",[_._v("INT32 / INT64 / FLOAT / DOUBLE")]),_._v(" "),v("td",[_._v("DOUBLE")]),_._v(" "),v("td",[_._v("Math#tanh(double)")])]),_._v(" "),v("tr",[v("td",[_._v("DEGREES")]),_._v(" "),v("td",[_._v("INT32 / INT64 / FLOAT / DOUBLE")]),_._v(" "),v("td",[_._v("DOUBLE")]),_._v(" "),v("td",[_._v("Math#toDegrees(double)")])]),_._v(" "),v("tr",[v("td",[_._v("RADIANS")]),_._v(" "),v("td",[_._v("INT32 / INT64 / FLOAT / DOUBLE")]),_._v(" "),v("td",[_._v("DOUBLE")]),_._v(" "),v("td",[_._v("Math#toRadians(double)")])]),_._v(" "),v("tr",[v("td",[_._v("ABS")]),_._v(" "),v("td",[_._v("INT32 / INT64 / FLOAT / DOUBLE")]),_._v(" "),v("td",[_._v("与输入序列的实际类型一致")]),_._v(" "),v("td",[_._v("Math#abs(int) / Math#abs(long) /Math#abs(float) /Math#abs(double)")])]),_._v(" "),v("tr",[v("td",[_._v("SIGN")]),_._v(" "),v("td",[_._v("INT32 / INT64 / FLOAT / DOUBLE")]),_._v(" "),v("td",[_._v("DOUBLE")]),_._v(" "),v("td",[_._v("Math#signum(double)")])]),_._v(" "),v("tr",[v("td",[_._v("CEIL")]),_._v(" "),v("td",[_._v("INT32 / INT64 / FLOAT / DOUBLE")]),_._v(" "),v("td",[_._v("DOUBLE")]),_._v(" "),v("td",[_._v("Math#ceil(double)")])]),_._v(" "),v("tr",[v("td",[_._v("FLOOR")]),_._v(" "),v("td",[_._v("INT32 / INT64 / FLOAT / DOUBLE")]),_._v(" "),v("td",[_._v("DOUBLE")]),_._v(" "),v("td",[_._v("Math#floor(double)")])]),_._v(" "),v("tr",[v("td",[_._v("ROUND")]),_._v(" "),v("td",[_._v("INT32 / INT64 / FLOAT / DOUBLE")]),_._v(" "),v("td",[_._v("DOUBLE")]),_._v(" "),v("td",[_._v("Math#rint(double)")])]),_._v(" "),v("tr",[v("td",[_._v("EXP")]),_._v(" "),v("td",[_._v("INT32 / INT64 / FLOAT / DOUBLE")]),_._v(" "),v("td",[_._v("DOUBLE")]),_._v(" "),v("td",[_._v("Math#exp(double)")])]),_._v(" "),v("tr",[v("td",[_._v("LN")]),_._v(" "),v("td",[_._v("INT32 / INT64 / FLOAT / DOUBLE")]),_._v(" "),v("td",[_._v("DOUBLE")]),_._v(" "),v("td",[_._v("Math#log(double)")])]),_._v(" "),v("tr",[v("td",[_._v("LOG10")]),_._v(" "),v("td",[_._v("INT32 / INT64 / FLOAT / DOUBLE")]),_._v(" "),v("td",[_._v("DOUBLE")]),_._v(" "),v("td",[_._v("Math#log10(double)")])]),_._v(" "),v("tr",[v("td",[_._v("SQRT")]),_._v(" "),v("td",[_._v("INT32 / INT64 / FLOAT / DOUBLE")]),_._v(" "),v("td",[_._v("DOUBLE")]),_._v(" "),v("td",[_._v("Math#sqrt(double)")])])])]),_._v(" "),v("p",[_._v("详细说明及示例见文档 "),v("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Operators-Functions/Mathematical.html"}},[_._v("算数运算符和函数")]),_._v("。")],1),_._v(" "),v("h3",{attrs:{id:"比较函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#比较函数"}},[_._v("#")]),_._v(" 比较函数")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("函数名")]),_._v(" "),v("th",[_._v("可接收的输入序列类型")]),_._v(" "),v("th",[_._v("必要的属性参数")]),_._v(" "),v("th",[_._v("输出序列类型")]),_._v(" "),v("th",[_._v("功能类型")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("ON_OFF")]),_._v(" "),v("td",[_._v("INT32 / INT64 / FLOAT / DOUBLE")]),_._v(" "),v("td",[v("code",[_._v("threshold")]),_._v(":DOUBLE")]),_._v(" "),v("td",[_._v("BOOLEAN")]),_._v(" "),v("td",[_._v("返回"),v("code",[_._v("ts_value >= threshold")]),_._v("的bool值")])]),_._v(" "),v("tr",[v("td",[_._v("IN_RANGE")]),_._v(" "),v("td",[_._v("INT32 / INT64 / FLOAT / DOUBLE")]),_._v(" "),v("td",[v("code",[_._v("lower")]),_._v(":DOUBLE"),v("br"),v("code",[_._v("upper")]),_._v(":DOUBLE")]),_._v(" "),v("td",[_._v("BOOLEAN")]),_._v(" "),v("td",[_._v("返回"),v("code",[_._v("ts_value >= lower && ts_value <= upper")]),_._v("的bool值")])])])]),_._v(" "),v("p",[_._v("详细说明及示例见文档 "),v("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Operators-Functions/Comparison.html"}},[_._v("比较运算符和函数")]),_._v("。")],1),_._v(" "),v("h3",{attrs:{id:"字符串处理函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#字符串处理函数"}},[_._v("#")]),_._v(" 字符串处理函数")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("函数名")]),_._v(" "),v("th",[_._v("输入序列类型")]),_._v(" "),v("th",[_._v("必要的属性参数")]),_._v(" "),v("th",[_._v("输出序列类型")]),_._v(" "),v("th",[_._v("功能描述")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("STRING_CONTAINS")]),_._v(" "),v("td",[_._v("TEXT")]),_._v(" "),v("td",[v("code",[_._v("s")]),_._v(": 待搜寻的字符串")]),_._v(" "),v("td",[_._v("BOOLEAN")]),_._v(" "),v("td",[_._v("判断字符串中是否存在"),v("code",[_._v("s")])])]),_._v(" "),v("tr",[v("td",[_._v("STRING_MATCHES")]),_._v(" "),v("td",[_._v("TEXT")]),_._v(" "),v("td",[v("code",[_._v("regex")]),_._v(": Java 标准库风格的正则表达式")]),_._v(" "),v("td",[_._v("BOOLEAN")]),_._v(" "),v("td",[_._v("判断字符串是否能够被正则表达式"),v("code",[_._v("regex")]),_._v("匹配")])]),_._v(" "),v("tr",[v("td",[_._v("LENGTH")]),_._v(" "),v("td",[_._v("TEXT")]),_._v(" "),v("td",[_._v("无")]),_._v(" "),v("td",[_._v("INT32")]),_._v(" "),v("td",[_._v("返回字符串的长度")])]),_._v(" "),v("tr",[v("td",[_._v("LOCATE")]),_._v(" "),v("td",[_._v("TEXT")]),_._v(" "),v("td",[v("code",[_._v("target")]),_._v(": 需要被定位的子串 "),v("br"),_._v(" "),v("code",[_._v("reverse")]),_._v(": 指定是否需要倒序定位，默认值为"),v("code",[_._v("false")]),_._v(", 即从左至右定位")]),_._v(" "),v("td",[_._v("INT32")]),_._v(" "),v("td",[_._v("获取"),v("code",[_._v("target")]),_._v("子串第一次出现在输入序列的位置，如果输入序列中不包含"),v("code",[_._v("target")]),_._v("则返回 -1")])]),_._v(" "),v("tr",[v("td",[_._v("STARTSWITH")]),_._v(" "),v("td",[_._v("TEXT")]),_._v(" "),v("td",[v("code",[_._v("target")]),_._v(": 需要匹配的前缀")]),_._v(" "),v("td",[_._v("BOOLEAN")]),_._v(" "),v("td",[_._v("判断字符串是否有指定前缀")])]),_._v(" "),v("tr",[v("td",[_._v("ENDSWITH")]),_._v(" "),v("td",[_._v("TEXT")]),_._v(" "),v("td",[v("code",[_._v("target")]),_._v(": 需要匹配的后缀")]),_._v(" "),v("td",[_._v("BOOLEAN")]),_._v(" "),v("td",[_._v("判断字符串是否有指定后缀")])]),_._v(" "),v("tr",[v("td",[_._v("CONCAT")]),_._v(" "),v("td",[_._v("TEXT")]),_._v(" "),v("td",[v("code",[_._v("targets")]),_._v(": 一系列 K-V, key需要以"),v("code",[_._v("target")]),_._v("为前缀且不重复, value是待拼接的字符串。"),v("br"),v("code",[_._v("series_behind")]),_._v(": 指定拼接时时间序列是否在后面，默认为"),v("code",[_._v("false")]),_._v("。")]),_._v(" "),v("td",[_._v("TEXT")]),_._v(" "),v("td",[_._v("拼接字符串和"),v("code",[_._v("target")]),_._v("字串")])]),_._v(" "),v("tr",[v("td",[_._v("SUBSTR")]),_._v(" "),v("td",[_._v("TEXT")]),_._v(" "),v("td",[v("code",[_._v("start")]),_._v(": 指定子串开始下标 "),v("br"),v("code",[_._v("end")]),_._v(": 指定子串结束下标")]),_._v(" "),v("td",[_._v("TEXT")]),_._v(" "),v("td",[_._v("获取下标从"),v("code",[_._v("start")]),_._v("到"),v("code",[_._v("end - 1")]),_._v("的子串")])]),_._v(" "),v("tr",[v("td",[_._v("UPPER")]),_._v(" "),v("td",[_._v("TEXT")]),_._v(" "),v("td",[_._v("无")]),_._v(" "),v("td",[_._v("TEXT")]),_._v(" "),v("td",[_._v("将字符串转化为大写")])]),_._v(" "),v("tr",[v("td",[_._v("LOWER")]),_._v(" "),v("td",[_._v("TEXT")]),_._v(" "),v("td",[_._v("无")]),_._v(" "),v("td",[_._v("TEXT")]),_._v(" "),v("td",[_._v("将字符串转化为小写")])]),_._v(" "),v("tr",[v("td",[_._v("TRIM")]),_._v(" "),v("td",[_._v("TEXT")]),_._v(" "),v("td",[_._v("无")]),_._v(" "),v("td",[_._v("TEXT")]),_._v(" "),v("td",[_._v("移除字符串前后的空格")])]),_._v(" "),v("tr",[v("td",[_._v("STRCMP")]),_._v(" "),v("td",[_._v("TEXT")]),_._v(" "),v("td",[_._v("无")]),_._v(" "),v("td",[_._v("TEXT")]),_._v(" "),v("td",[_._v("用于比较两个输入序列，如果值相同返回 "),v("code",[_._v("0")]),_._v(" , 序列1的值小于序列2的值返回一个"),v("code",[_._v("负数")]),_._v("，序列1的值大于序列2的值返回一个"),v("code",[_._v("正数")])])]),_._v(" "),v("tr",[v("td",[_._v("STRREPLACE")]),_._v(" "),v("td",[_._v("TEXT")]),_._v(" "),v("td",[v("code",[_._v("target")]),_._v(": 需要替换的字符子串 "),v("br"),_._v(" "),v("code",[_._v("replace")]),_._v(": 替换后的字符串 "),v("br"),_._v(" "),v("code",[_._v("limit")]),_._v(": 替换次数，大于等于 -1 的整数，默认为 -1 表示所有匹配的子串都会被替换 "),v("br"),v("code",[_._v("offset")]),_._v(": 需要跳过的匹配次数，即前"),v("code",[_._v("offset")]),_._v("次匹配到的字符子串并不会被替换，默认为 0 "),v("br"),v("code",[_._v("reverse")]),_._v(": 是否需要反向计数，默认为 false 即按照从左向右的次序")]),_._v(" "),v("td",[_._v("TEXT")]),_._v(" "),v("td",[_._v("将字符串中的子串替换为指定的字符串")])]),_._v(" "),v("tr",[v("td",[_._v("REGEXMATCH")]),_._v(" "),v("td",[_._v("TEXT")]),_._v(" "),v("td",[v("code",[_._v("regex")]),_._v(": Java 标准库风格的正则表达式 "),v("br"),_._v(" "),v("code",[_._v("group")]),_._v(": 输出的匹配组序号，根据 java.util.regex 规定，第 0 组为整个正则表达式，此后的组按照左括号出现的顺序依次编号")]),_._v(" "),v("td",[_._v("TEXT")]),_._v(" "),v("td",[_._v("用于正则表达式匹配文本中的具体内容并返回")])]),_._v(" "),v("tr",[v("td",[_._v("REGEXREPLACE")]),_._v(" "),v("td",[_._v("TEXT")]),_._v(" "),v("td",[v("code",[_._v("regex")]),_._v(": Java 标准库风格的正则表达式 "),v("br"),_._v(" "),v("code",[_._v("replace")]),_._v(": 替换后的字符串，支持 Java 正则表达式中的后向引用 "),v("br"),_._v(" "),v("code",[_._v("limit")]),_._v(": 替换次数，大于等于 -1 的整数，默认为 -1 表示所有匹配的子串都会被替换 "),v("br"),_._v(" "),v("code",[_._v("offset")]),_._v(": 需要跳过的匹配次数，即前"),v("code",[_._v("offset")]),_._v("次匹配到的字符子串并不会被替换，默认为 0 "),v("br"),_._v(" "),v("code",[_._v("reverse")]),_._v(": 是否需要反向计数，默认为 false 即按照从左向右的次序")]),_._v(" "),v("td",[_._v("TEXT")]),_._v(" "),v("td",[_._v("用于将文本中符合正则表达式的匹配结果替换为指定的字符串")])]),_._v(" "),v("tr",[v("td",[_._v("REGEXSPLIT")]),_._v(" "),v("td",[_._v("TEXT")]),_._v(" "),v("td",[v("code",[_._v("regex")]),_._v(": Java 标准库风格的正则表达式 "),v("br"),_._v(" "),v("code",[_._v("index")]),_._v(": 输出结果在切分后数组中的序号")]),_._v(" "),v("td",[_._v("TEXT")]),_._v(" "),v("td",[_._v("用于使用给定的正则表达式切分文本，并返回指定的项")])])])]),_._v(" "),v("p",[_._v("详细说明及示例见文档 "),v("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Operators-Functions/String.html"}},[_._v("字符串处理函数")]),_._v("。")],1),_._v(" "),v("h3",{attrs:{id:"数据类型转换函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据类型转换函数"}},[_._v("#")]),_._v(" 数据类型转换函数")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("函数名")]),_._v(" "),v("th",[_._v("必要的属性参数")]),_._v(" "),v("th",[_._v("输出序列类型")]),_._v(" "),v("th",[_._v("功能类型")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("CAST")]),_._v(" "),v("td",[v("code",[_._v("type")]),_._v(":输出的数据点的类型，只能是 INT32 / INT64 / FLOAT / DOUBLE / BOOLEAN / TEXT")]),_._v(" "),v("td",[_._v("由输入属性参数"),v("code",[_._v("type")]),_._v("决定")]),_._v(" "),v("td",[_._v("将数据转换为"),v("code",[_._v("type")]),_._v("参数指定的类型。")])])])]),_._v(" "),v("p",[_._v("详细说明及示例见文档 "),v("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Operators-Functions/Conversion.html"}},[_._v("数据类型转换")]),_._v("。")],1),_._v(" "),v("h3",{attrs:{id:"常序列生成函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#常序列生成函数"}},[_._v("#")]),_._v(" 常序列生成函数")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("函数名")]),_._v(" "),v("th",[_._v("必要的属性参数")]),_._v(" "),v("th",[_._v("输出序列类型")]),_._v(" "),v("th",[_._v("功能描述")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("CONST")]),_._v(" "),v("td",[v("code",[_._v("value")]),_._v(": 输出的数据点的值 "),v("br"),v("code",[_._v("type")]),_._v(": 输出的数据点的类型，只能是 INT32 / INT64 / FLOAT / DOUBLE / BOOLEAN / TEXT")]),_._v(" "),v("td",[_._v("由输入属性参数 "),v("code",[_._v("type")]),_._v(" 决定")]),_._v(" "),v("td",[_._v("根据输入属性 "),v("code",[_._v("value")]),_._v(" 和 "),v("code",[_._v("type")]),_._v(" 输出用户指定的常序列。")])]),_._v(" "),v("tr",[v("td",[_._v("PI")]),_._v(" "),v("td",[_._v("无")]),_._v(" "),v("td",[_._v("DOUBLE")]),_._v(" "),v("td",[_._v("常序列的值："),v("code",[_._v("π")]),_._v(" 的 "),v("code",[_._v("double")]),_._v(" 值，圆的周长与其直径的比值，即圆周率，等于 "),v("em",[_._v("Java标准库")]),_._v(" 中的"),v("code",[_._v("Math.PI")]),_._v("。")])]),_._v(" "),v("tr",[v("td",[_._v("E")]),_._v(" "),v("td",[_._v("无")]),_._v(" "),v("td",[_._v("DOUBLE")]),_._v(" "),v("td",[_._v("常序列的值："),v("code",[_._v("e")]),_._v(" 的 "),v("code",[_._v("double")]),_._v(" 值，自然对数的底，它等于 "),v("em",[_._v("Java 标准库")]),_._v("  中的 "),v("code",[_._v("Math.E")]),_._v("。")])])])]),_._v(" "),v("p",[_._v("详细说明及示例见文档 "),v("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Operators-Functions/Constant.html"}},[_._v("常序列生成函数")]),_._v("。")],1),_._v(" "),v("h3",{attrs:{id:"选择函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#选择函数"}},[_._v("#")]),_._v(" 选择函数")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("函数名")]),_._v(" "),v("th",[_._v("输入序列类型")]),_._v(" "),v("th",[_._v("必要的属性参数")]),_._v(" "),v("th",[_._v("输出序列类型")]),_._v(" "),v("th",[_._v("功能描述")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("TOP_K")]),_._v(" "),v("td",[_._v("INT32 / INT64 / FLOAT / DOUBLE / TEXT")]),_._v(" "),v("td",[v("code",[_._v("k")]),_._v(": 最多选择的数据点数，必须大于 0 小于等于 1000")]),_._v(" "),v("td",[_._v("与输入序列的实际类型一致")]),_._v(" "),v("td",[_._v("返回某时间序列中值最大的"),v("code",[_._v("k")]),_._v("个数据点。若多于"),v("code",[_._v("k")]),_._v("个数据点的值并列最大，则返回时间戳最小的数据点。")])]),_._v(" "),v("tr",[v("td",[_._v("BOTTOM_K")]),_._v(" "),v("td",[_._v("INT32 / INT64 / FLOAT / DOUBLE / TEXT")]),_._v(" "),v("td",[v("code",[_._v("k")]),_._v(": 最多选择的数据点数，必须大于 0 小于等于 1000")]),_._v(" "),v("td",[_._v("与输入序列的实际类型一致")]),_._v(" "),v("td",[_._v("返回某时间序列中值最小的"),v("code",[_._v("k")]),_._v("个数据点。若多于"),v("code",[_._v("k")]),_._v("个数据点的值并列最小，则返回时间戳最小的数据点。")])])])]),_._v(" "),v("p",[_._v("详细说明及示例见文档 "),v("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Operators-Functions/Selection.html"}},[_._v("选择函数")]),_._v("。")],1),_._v(" "),v("h3",{attrs:{id:"区间查询函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#区间查询函数"}},[_._v("#")]),_._v(" 区间查询函数")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("函数名")]),_._v(" "),v("th",[_._v("输入序列类型")]),_._v(" "),v("th",[_._v("属性参数")]),_._v(" "),v("th",[_._v("输出序列类型")]),_._v(" "),v("th",[_._v("功能描述")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("ZERO_DURATION")]),_._v(" "),v("td",[_._v("INT32/ INT64/ FLOAT/ DOUBLE/ BOOLEAN")]),_._v(" "),v("td",[v("code",[_._v("min")]),_._v(":可选，默认值0"),v("br"),v("code",[_._v("max")]),_._v(":可选，默认值"),v("code",[_._v("Long.MAX_VALUE")])]),_._v(" "),v("td",[_._v("Long")]),_._v(" "),v("td",[_._v("返回时间序列连续为0(false)的开始时间与持续时间，持续时间t(单位ms)满足"),v("code",[_._v("t >= min && t <= max")])])]),_._v(" "),v("tr",[v("td",[_._v("NON_ZERO_DURATION")]),_._v(" "),v("td",[_._v("INT32/ INT64/ FLOAT/ DOUBLE/ BOOLEAN")]),_._v(" "),v("td",[v("code",[_._v("min")]),_._v(":可选，默认值0"),v("br"),v("code",[_._v("max")]),_._v(":可选，默认值"),v("code",[_._v("Long.MAX_VALUE")])]),_._v(" "),v("td",[_._v("Long")]),_._v(" "),v("td",[_._v("返回时间序列连续不为0(false)的开始时间与持续时间，持续时间t(单位ms)满足"),v("code",[_._v("t >= min && t <= max")])])]),_._v(" "),v("tr",[v("td",[_._v("ZERO_COUNT")]),_._v(" "),v("td",[_._v("INT32/ INT64/ FLOAT/ DOUBLE/ BOOLEAN")]),_._v(" "),v("td",[v("code",[_._v("min")]),_._v(":可选，默认值1"),v("br"),v("code",[_._v("max")]),_._v(":可选，默认值"),v("code",[_._v("Long.MAX_VALUE")])]),_._v(" "),v("td",[_._v("Long")]),_._v(" "),v("td",[_._v("返回时间序列连续为0(false)的开始时间与其后数据点的个数，数据点个数n满足"),v("code",[_._v("n >= min && n <= max")])])]),_._v(" "),v("tr",[v("td",[_._v("NON_ZERO_COUNT")]),_._v(" "),v("td",[_._v("INT32/ INT64/ FLOAT/ DOUBLE/ BOOLEAN")]),_._v(" "),v("td",[v("code",[_._v("min")]),_._v(":可选，默认值1"),v("br"),v("code",[_._v("max")]),_._v(":可选，默认值"),v("code",[_._v("Long.MAX_VALUE")])]),_._v(" "),v("td",[_._v("Long")]),_._v(" "),v("td",[_._v("返回时间序列连续不为0(false)的开始时间与其后数据点的个数，数据点个数n满足"),v("code",[_._v("n >= min && n <= max")])])])])]),_._v(" "),v("p",[_._v("详细说明及示例见文档 "),v("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Operators-Functions/Continuous-Interval.html"}},[_._v("区间查询函数")]),_._v("。")],1),_._v(" "),v("h3",{attrs:{id:"趋势计算函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#趋势计算函数"}},[_._v("#")]),_._v(" 趋势计算函数")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("函数名")]),_._v(" "),v("th",[_._v("输入序列类型")]),_._v(" "),v("th",[_._v("输出序列类型")]),_._v(" "),v("th",[_._v("功能描述")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("TIME_DIFFERENCE")]),_._v(" "),v("td",[_._v("INT32 / INT64 / FLOAT / DOUBLE / BOOLEAN / TEXT")]),_._v(" "),v("td",[_._v("INT64")]),_._v(" "),v("td",[_._v("统计序列中某数据点的时间戳与前一数据点时间戳的差。范围内第一个数据点没有对应的结果输出。")])]),_._v(" "),v("tr",[v("td",[_._v("DIFFERENCE")]),_._v(" "),v("td",[_._v("INT32 / INT64 / FLOAT / DOUBLE")]),_._v(" "),v("td",[_._v("与输入序列的实际类型一致")]),_._v(" "),v("td",[_._v("统计序列中某数据点的值与前一数据点的值的差。范围内第一个数据点没有对应的结果输出。")])]),_._v(" "),v("tr",[v("td",[_._v("NON_NEGATIVE_DIFFERENCE")]),_._v(" "),v("td",[_._v("INT32 / INT64 / FLOAT / DOUBLE")]),_._v(" "),v("td",[_._v("与输入序列的实际类型一致")]),_._v(" "),v("td",[_._v("统计序列中某数据点的值与前一数据点的值的差的绝对值。范围内第一个数据点没有对应的结果输出。")])]),_._v(" "),v("tr",[v("td",[_._v("DERIVATIVE")]),_._v(" "),v("td",[_._v("INT32 / INT64 / FLOAT / DOUBLE")]),_._v(" "),v("td",[_._v("DOUBLE")]),_._v(" "),v("td",[_._v("统计序列中某数据点相对于前一数据点的变化率，数量上等同于 DIFFERENCE /  TIME_DIFFERENCE。范围内第一个数据点没有对应的结果输出。")])]),_._v(" "),v("tr",[v("td",[_._v("NON_NEGATIVE_DERIVATIVE")]),_._v(" "),v("td",[_._v("INT32 / INT64 / FLOAT / DOUBLE")]),_._v(" "),v("td",[_._v("DOUBLE")]),_._v(" "),v("td",[_._v("统计序列中某数据点相对于前一数据点的变化率的绝对值，数量上等同于 NON_NEGATIVE_DIFFERENCE /  TIME_DIFFERENCE。范围内第一个数据点没有对应的结果输出。")])])])]),_._v(" "),v("p",[_._v("详细说明及示例见文档 "),v("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Operators-Functions/Variation-Trend.html"}},[_._v("趋势计算函数")]),_._v("。")],1),_._v(" "),v("h3",{attrs:{id:"采样函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#采样函数"}},[_._v("#")]),_._v(" 采样函数")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("函数名")]),_._v(" "),v("th",[_._v("可接收的输入序列类型")]),_._v(" "),v("th",[_._v("必要的属性参数")]),_._v(" "),v("th",[_._v("输出序列类型")]),_._v(" "),v("th",[_._v("功能类型")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("EQUAL_SIZE_BUCKET_RANDOM_SAMPLE")]),_._v(" "),v("td",[_._v("INT32 / INT64 / FLOAT / DOUBLE")]),_._v(" "),v("td",[_._v("降采样比例 "),v("code",[_._v("proportion")]),_._v("，取值范围为"),v("code",[_._v("(0, 1]")]),_._v("，默认为"),v("code",[_._v("0.1")])]),_._v(" "),v("td",[_._v("INT32 / INT64 / FLOAT / DOUBLE")]),_._v(" "),v("td",[_._v("返回符合采样比例的等分桶随机采样")])]),_._v(" "),v("tr",[v("td",[_._v("EQUAL_SIZE_BUCKET_AGG_SAMPLE")]),_._v(" "),v("td",[_._v("INT32 / INT64 / FLOAT / DOUBLE")]),_._v(" "),v("td",[v("code",[_._v("proportion")]),_._v("取值范围为"),v("code",[_._v("(0, 1]")]),_._v("，默认为"),v("code",[_._v("0.1")]),v("br"),v("code",[_._v("type")]),_._v(":取值类型有"),v("code",[_._v("avg")]),_._v(", "),v("code",[_._v("max")]),_._v(", "),v("code",[_._v("min")]),_._v(", "),v("code",[_._v("sum")]),_._v(", "),v("code",[_._v("extreme")]),_._v(", "),v("code",[_._v("variance")]),_._v(", 默认为"),v("code",[_._v("avg")])]),_._v(" "),v("td",[_._v("INT32 / INT64 / FLOAT / DOUBLE")]),_._v(" "),v("td",[_._v("返回符合采样比例的等分桶聚合采样")])]),_._v(" "),v("tr",[v("td",[_._v("EQUAL_SIZE_BUCKET_M4_SAMPLE")]),_._v(" "),v("td",[_._v("INT32 / INT64 / FLOAT / DOUBLE")]),_._v(" "),v("td",[v("code",[_._v("proportion")]),_._v("取值范围为"),v("code",[_._v("(0, 1]")]),_._v("，默认为"),v("code",[_._v("0.1")])]),_._v(" "),v("td",[_._v("INT32 / INT64 / FLOAT / DOUBLE")]),_._v(" "),v("td",[_._v("返回符合采样比例的等分桶M4采样")])]),_._v(" "),v("tr",[v("td",[_._v("EQUAL_SIZE_BUCKET_OUTLIER_SAMPLE")]),_._v(" "),v("td",[_._v("INT32 / INT64 / FLOAT / DOUBLE")]),_._v(" "),v("td",[v("code",[_._v("proportion")]),_._v("取值范围为"),v("code",[_._v("(0, 1]")]),_._v("，默认为"),v("code",[_._v("0.1")]),v("br"),v("code",[_._v("type")]),_._v("取值为"),v("code",[_._v("avg")]),_._v("或"),v("code",[_._v("stendis")]),_._v("或"),v("code",[_._v("cos")]),_._v("或"),v("code",[_._v("prenextdis")]),_._v("，默认为"),v("code",[_._v("avg")]),v("br"),v("code",[_._v("number")]),_._v("取值应大于0，默认"),v("code",[_._v("3")])]),_._v(" "),v("td",[_._v("INT32 / INT64 / FLOAT / DOUBLE")]),_._v(" "),v("td",[_._v("返回符合采样比例和桶内采样个数的等分桶离群值采样")])]),_._v(" "),v("tr",[v("td",[_._v("M4")]),_._v(" "),v("td",[_._v("INT32 / INT64 / FLOAT / DOUBLE")]),_._v(" "),v("td",[_._v("包含固定点数的窗口和滑动时间窗口使用不同的属性参数。包含固定点数的窗口使用属性"),v("code",[_._v("windowSize")]),_._v("和"),v("code",[_._v("slidingStep")]),_._v("。滑动时间窗口使用属性"),v("code",[_._v("timeInterval")]),_._v("、"),v("code",[_._v("slidingStep")]),_._v("、"),v("code",[_._v("displayWindowBegin")]),_._v("和"),v("code",[_._v("displayWindowEnd")]),_._v("。更多细节见下文。")]),_._v(" "),v("td",[_._v("INT32 / INT64 / FLOAT / DOUBLE")]),_._v(" "),v("td",[_._v("返回每个窗口内的第一个点（"),v("code",[_._v("first")]),_._v("）、最后一个点（"),v("code",[_._v("last")]),_._v("）、最小值点（"),v("code",[_._v("bottom")]),_._v("）、最大值点（"),v("code",[_._v("top")]),_._v("）。在一个窗口内的聚合点输出之前，M4会将它们按照时间戳递增排序并且去重。")])])])]),_._v(" "),v("h2",{attrs:{id:"数据质量函数库"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据质量函数库"}},[_._v("#")]),_._v(" 数据质量函数库")]),_._v(" "),v("p",[_._v("对基于时序数据的应用而言，数据质量至关重要。基于用户自定义函数能力，IoTDB 提供了一系列关于数据质量的函数，包括数据画像、数据质量评估与修复等，能够满足工业领域对数据质量的需求。")]),_._v(" "),v("p",[v("strong",[_._v("该函数库中的函数不是内置函数，使用前要先加载到系统中。")]),_._v(" 操作流程如下：")]),_._v(" "),v("ol",[v("li",[_._v("下载包含全部依赖的 jar 包和注册脚本 "),v("a",{attrs:{href:"https://archive.apache.org/dist/iotdb/0.14.0-preview3/apache-iotdb-0.14.0-preview3-library-udf-bin.zip",target:"_blank",rel:"noopener noreferrer"}},[_._v("【点击下载】"),v("OutboundLink")],1),_._v(" ；")]),_._v(" "),v("li",[_._v("将 jar 包复制到 IoTDB 程序目录的 "),v("code",[_._v("ext\\udf")]),_._v(" 目录下 (若您使用的是集群，请将jar包复制到所有DataNode的该目录下)；")]),_._v(" "),v("li",[_._v("启动 IoTDB；")]),_._v(" "),v("li",[_._v("将注册脚本复制到 IoTDB 的程序目录下（与"),v("code",[_._v("sbin")]),_._v("目录同级的根目录下），修改脚本中的参数（如果需要）并运行注册脚本以注册 UDF。")])])])}),[],!1,null,null,null);v.default=e.exports}}]);