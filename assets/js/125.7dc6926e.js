(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{567:function(t,s,e){"use strict";e.r(s);var a=e(19),n=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"fill-null-value"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fill-null-value"}},[t._v("#")]),t._v(" Fill Null Value")]),t._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),s("p",[t._v("When executing some queries, there may be no data for some columns in some rows, and data in these locations will be null, but this kind of null value is not conducive to data visualization and analysis, and the null value needs to be filled.")]),t._v(" "),s("p",[t._v("In IoTDB, users can use the FILL clause to specify the fill mode when data is missing. Fill null value allows the user to fill any query result with null values according to a specific method, such as taking the previous value that is not null, or linear interpolation. The query result after filling the null value can better reflect the data distribution, which is beneficial for users to perform data analysis.")]),t._v(" "),s("h2",{attrs:{id:"syntax-definition"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax-definition"}},[t._v("#")]),t._v(" Syntax Definition")]),t._v(" "),s("p",[s("strong",[t._v("The following is the syntax definition of the "),s("code",[t._v("FILL")]),t._v(" clause:")])]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("FILL "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'('")]),t._v(" PREVIOUS "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" LINEAR "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" constant "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("')'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("strong",[t._v("Note:")])]),t._v(" "),s("ul",[s("li",[t._v("We can specify only one fill method in the "),s("code",[t._v("FILL")]),t._v(" clause, and this method applies to all columns of the result set.")]),t._v(" "),s("li",[t._v("Null value fill is not compatible with version 0.13 and previous syntax ("),s("code",[t._v("FILL((<data_type>[<fill_method>(, <before_range>, <after_range>)?])+)")]),t._v(") is not supported anymore.")])]),t._v(" "),s("h2",{attrs:{id:"fill-methods"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fill-methods"}},[t._v("#")]),t._v(" Fill Methods")]),t._v(" "),s("p",[s("strong",[t._v("IoTDB supports the following three fill methods:")])]),t._v(" "),s("ul",[s("li",[s("code",[t._v("PREVIOUS")]),t._v(": Fill with the previous non-null value of the column.")]),t._v(" "),s("li",[s("code",[t._v("LINEAR")]),t._v(": Fill the column with a linear interpolation of the previous non-null value and the next non-null value of the column.")]),t._v(" "),s("li",[t._v("Constant: Fill with the specified constant.")])]),t._v(" "),s("p",[s("strong",[t._v("Following table lists the data types and supported fill methods.")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Data Type")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Supported Fill Methods")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("boolean")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("previous, value")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("int32")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("previous, linear, value")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("int64")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("previous, linear, value")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("float")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("previous, linear, value")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("double")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("previous, linear, value")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("text")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("previous, value")])])])]),t._v(" "),s("p",[s("strong",[t._v("Note:")]),t._v("  For columns whose data type does not support specifying the fill method, we neither fill it nor throw exception, just keep it as it is.")]),t._v(" "),s("p",[s("strong",[t._v("For examples:")])]),t._v(" "),s("p",[t._v("If we don't use any fill methods:")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" temperature"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sgcc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wf03"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wt01 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("time")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("01")]),t._v("T16:"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("37")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00.000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("time")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("01")]),t._v("T16:"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00.000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("the original result will be like:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("+-----------------------------+-------------------------------+--------------------------+\n|                         Time|root.sgcc.wf03.wt01.temperature|root.sgcc.wf03.wt01.status|\n+-----------------------------+-------------------------------+--------------------------+\n|2017-11-01T16:37:00.000+08:00|                          21.93|                      true|\n+-----------------------------+-------------------------------+--------------------------+\n|2017-11-01T16:38:00.000+08:00|                           null|                     false|\n+-----------------------------+-------------------------------+--------------------------+\n|2017-11-01T16:39:00.000+08:00|                          22.23|                      null|\n+-----------------------------+-------------------------------+--------------------------+\n|2017-11-01T16:40:00.000+08:00|                          23.43|                      null|\n+-----------------------------+-------------------------------+--------------------------+\nTotal line number = 4\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("h3",{attrs:{id:"previous-fill"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#previous-fill"}},[t._v("#")]),t._v(" "),s("code",[t._v("PREVIOUS")]),t._v(" Fill")]),t._v(" "),s("p",[s("strong",[t._v("For null values in the query result set, fill with the previous non-null value of the column.")])]),t._v(" "),s("p",[s("strong",[t._v("Note:")]),t._v(" If the first value of this column is null, we will keep first value as null and won't fill it until we meet first non-null value")]),t._v(" "),s("p",[t._v("For example, with "),s("code",[t._v("PREVIOUS")]),t._v(" fill, the SQL is as follows:")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" temperature"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sgcc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wf03"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wt01 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("time")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("01")]),t._v("T16:"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("37")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00.000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("time")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("01")]),t._v("T16:"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00.000")]),t._v(" fill"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("previous"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("result will be like:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("+-----------------------------+-------------------------------+--------------------------+\n|                         Time|root.sgcc.wf03.wt01.temperature|root.sgcc.wf03.wt01.status|\n+-----------------------------+-------------------------------+--------------------------+\n|2017-11-01T16:37:00.000+08:00|                          21.93|                      true|\n+-----------------------------+-------------------------------+--------------------------+\n|2017-11-01T16:38:00.000+08:00|                          21.93|                     false|\n+-----------------------------+-------------------------------+--------------------------+\n|2017-11-01T16:39:00.000+08:00|                          22.23|                     false|\n+-----------------------------+-------------------------------+--------------------------+\n|2017-11-01T16:40:00.000+08:00|                          23.43|                     false|\n+-----------------------------+-------------------------------+--------------------------+\nTotal line number = 4\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("h3",{attrs:{id:"linear-fill"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linear-fill"}},[t._v("#")]),t._v(" "),s("code",[t._v("LINEAR")]),t._v(" Fill")]),t._v(" "),s("p",[s("strong",[t._v("For null values in the query result set, fill the column with a linear interpolation of the previous non-null value and the next non-null value of the column.")])]),t._v(" "),s("p",[s("strong",[t._v("Note:")])]),t._v(" "),s("ul",[s("li",[t._v("If all the values before current value are null or all the values after current value are null, we will keep current value as null and won't fill it.")]),t._v(" "),s("li",[t._v("If the column's data type is boolean/text, we neither fill it nor throw exception, just keep it as it is.")])]),t._v(" "),s("p",[t._v("Here we give an example of filling null values using the linear method. The SQL statement is as follows:")]),t._v(" "),s("p",[t._v("For example, with "),s("code",[t._v("LINEAR")]),t._v(" fill, the SQL is as follows:")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" temperature"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sgcc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wf03"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wt01 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("time")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("01")]),t._v("T16:"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("37")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00.000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("time")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("01")]),t._v("T16:"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00.000")]),t._v(" fill"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("linear"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("result will be like:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("+-----------------------------+-------------------------------+--------------------------+\n|                         Time|root.sgcc.wf03.wt01.temperature|root.sgcc.wf03.wt01.status|\n+-----------------------------+-------------------------------+--------------------------+\n|2017-11-01T16:37:00.000+08:00|                          21.93|                      true|\n+-----------------------------+-------------------------------+--------------------------+\n|2017-11-01T16:38:00.000+08:00|                          22.08|                     false|\n+-----------------------------+-------------------------------+--------------------------+\n|2017-11-01T16:39:00.000+08:00|                          22.23|                      null|\n+-----------------------------+-------------------------------+--------------------------+\n|2017-11-01T16:40:00.000+08:00|                          23.43|                      null|\n+-----------------------------+-------------------------------+--------------------------+\nTotal line number = 4\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("h3",{attrs:{id:"constant-fill"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#constant-fill"}},[t._v("#")]),t._v(" Constant Fill")]),t._v(" "),s("p",[s("strong",[t._v("For null values in the query result set, fill with the specified constant.")])]),t._v(" "),s("p",[s("strong",[t._v("Note:")])]),t._v(" "),s("ul",[s("li",[s("p",[t._v("When using the ValueFill, IoTDB neither fill the query result if the data type is different from the input constant nor throw exception, just keep it as it is.")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Constant Value Data Type")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Support Data Type")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("BOOLEAN")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("BOOLEAN")]),t._v(" "),s("code",[t._v("TEXT")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("INT64")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("INT32")]),t._v(" "),s("code",[t._v("INT64")]),t._v(" "),s("code",[t._v("FLOAT")]),t._v(" "),s("code",[t._v("DOUBLE")]),t._v(" "),s("code",[t._v("TEXT")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("DOUBLE")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("FLOAT")]),t._v(" "),s("code",[t._v("DOUBLE")]),t._v(" "),s("code",[t._v("TEXT")])])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("TEXT")])]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[s("code",[t._v("TEXT")])])])])])]),t._v(" "),s("li",[s("p",[t._v("If constant value is larger than Integer.MAX_VALUE, IoTDB neither fill the query result if the data type is int32 nor throw exception, just keep it as it is.")])])]),t._v(" "),s("p",[t._v("For example, with "),s("code",[t._v("FLOAT")]),t._v(" constant fill, the SQL is as follows:")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" temperature"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sgcc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wf03"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wt01 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("time")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("01")]),t._v("T16:"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("37")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00.000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("time")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("01")]),t._v("T16:"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00.000")]),t._v(" fill"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("result will be like:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("+-----------------------------+-------------------------------+--------------------------+\n|                         Time|root.sgcc.wf03.wt01.temperature|root.sgcc.wf03.wt01.status|\n+-----------------------------+-------------------------------+--------------------------+\n|2017-11-01T16:37:00.000+08:00|                          21.93|                      true|\n+-----------------------------+-------------------------------+--------------------------+\n|2017-11-01T16:38:00.000+08:00|                            2.0|                     false|\n+-----------------------------+-------------------------------+--------------------------+\n|2017-11-01T16:39:00.000+08:00|                          22.23|                      null|\n+-----------------------------+-------------------------------+--------------------------+\n|2017-11-01T16:40:00.000+08:00|                          23.43|                      null|\n+-----------------------------+-------------------------------+--------------------------+\nTotal line number = 4\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])]),s("p",[t._v("For example, with "),s("code",[t._v("BOOLEAN")]),t._v(" constant fill, the SQL is as follows:")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" temperature"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sgcc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wf03"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wt01 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("time")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("01")]),t._v("T16:"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("37")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00.000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("time")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2017")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("01")]),t._v("T16:"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00.000")]),t._v(" fill"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("result will be like:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("+-----------------------------+-------------------------------+--------------------------+\n|                         Time|root.sgcc.wf03.wt01.temperature|root.sgcc.wf03.wt01.status|\n+-----------------------------+-------------------------------+--------------------------+\n|2017-11-01T16:37:00.000+08:00|                          21.93|                      true|\n+-----------------------------+-------------------------------+--------------------------+\n|2017-11-01T16:38:00.000+08:00|                           null|                     false|\n+-----------------------------+-------------------------------+--------------------------+\n|2017-11-01T16:39:00.000+08:00|                          22.23|                      true|\n+-----------------------------+-------------------------------+--------------------------+\n|2017-11-01T16:40:00.000+08:00|                          23.43|                      true|\n+-----------------------------+-------------------------------+--------------------------+\nTotal line number = 4\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);