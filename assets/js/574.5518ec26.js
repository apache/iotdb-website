(window.webpackJsonp=window.webpackJsonp||[]).push([[574],{977:function(t,s,e){"use strict";e.r(s);var n=e(19),a=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"constant-timeseries-generating-functions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#constant-timeseries-generating-functions"}},[t._v("#")]),t._v(" Constant Timeseries Generating Functions")]),t._v(" "),s("p",[t._v("The constant timeseries generating function is used to generate a timeseries in which the values of all data points are the same.")]),t._v(" "),s("p",[t._v("The constant timeseries generating function accepts one or more timeseries inputs, and the timestamp set of the output data points is the union of the timestamp sets of the input timeseries.")]),t._v(" "),s("p",[t._v("Currently, IoTDB supports the following constant timeseries generating functions:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Function Name")]),t._v(" "),s("th",[t._v("Required Attributes")]),t._v(" "),s("th",[t._v("Output Series Data Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("CONST")]),t._v(" "),s("td",[s("code",[t._v("value")]),t._v(": the value of the output data point "),s("br"),s("code",[t._v("type")]),t._v(": the type of the output data point, it can only be INT32 / INT64 / FLOAT / DOUBLE / BOOLEAN / TEXT")]),t._v(" "),s("td",[t._v("Determined by the required attribute  "),s("code",[t._v("type")])]),t._v(" "),s("td",[t._v("Output the user-specified constant timeseries according to the  attributes "),s("code",[t._v("value")]),t._v(" and "),s("code",[t._v("type")]),t._v(".")])]),t._v(" "),s("tr",[s("td",[t._v("PI")]),t._v(" "),s("td",[t._v("None")]),t._v(" "),s("td",[t._v("DOUBLE")]),t._v(" "),s("td",[t._v("Data point value: a "),s("code",[t._v("double")]),t._v(" value of  "),s("code",[t._v("π")]),t._v(", the ratio of the circumference of a circle to its diameter, which is equals to "),s("code",[t._v("Math.PI")]),t._v(" in the "),s("em",[t._v("Java Standard Library")]),t._v(".")])]),t._v(" "),s("tr",[s("td",[t._v("E")]),t._v(" "),s("td",[t._v("None")]),t._v(" "),s("td",[t._v("DOUBLE")]),t._v(" "),s("td",[t._v("Data point value: a "),s("code",[t._v("double")]),t._v(" value of  "),s("code",[t._v("e")]),t._v(", the base of the natural logarithms, which is equals to "),s("code",[t._v("Math.E")]),t._v(" in the "),s("em",[t._v("Java Standard Library")]),t._v(".")])])])]),t._v(" "),s("p",[t._v("Example:")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" s1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" const"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'value'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1024'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'type'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'INT64'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pi"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sg1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Result:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("select s1, s2, const(s1, 'value'='1024', 'type'='INT64'), pi(s2), e(s1, s2) from root.sg1.d1; \n+-----------------------------+--------------+--------------+-----------------------------------------------------+------------------+---------------------------------+\n|                         Time|root.sg1.d1.s1|root.sg1.d1.s2|const(root.sg1.d1.s1, \"value\"=\"1024\", \"type\"=\"INT64\")|pi(root.sg1.d1.s2)|e(root.sg1.d1.s1, root.sg1.d1.s2)|\n+-----------------------------+--------------+--------------+-----------------------------------------------------+------------------+---------------------------------+\n|1970-01-01T08:00:00.000+08:00|           0.0|           0.0|                                                 1024| 3.141592653589793|                2.718281828459045|\n|1970-01-01T08:00:00.001+08:00|           1.0|          null|                                                 1024|              null|                2.718281828459045|\n|1970-01-01T08:00:00.002+08:00|           2.0|          null|                                                 1024|              null|                2.718281828459045|\n|1970-01-01T08:00:00.003+08:00|          null|           3.0|                                                 null| 3.141592653589793|                2.718281828459045|\n|1970-01-01T08:00:00.004+08:00|          null|           4.0|                                                 null| 3.141592653589793|                2.718281828459045|\n+-----------------------------+--------------+--------------+-----------------------------------------------------+------------------+---------------------------------+\nTotal line number = 5\nIt costs 0.005s\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br")])])])}),[],!1,null,null,null);s.default=a.exports}}]);