(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{515:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"selector-functions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#selector-functions"}},[t._v("#")]),t._v(" Selector Functions")]),t._v(" "),s("p",[t._v("Currently, IoTDB supports the following selector functions:")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("Function Name")]),t._v(" "),s("th",[t._v("Allowed Input Series Data Types")]),t._v(" "),s("th",[t._v("Required Attributes")]),t._v(" "),s("th",[t._v("Output Series Data Type")]),t._v(" "),s("th",[t._v("Description")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("TOP_K")]),t._v(" "),s("td",[t._v("INT32 / INT64 / FLOAT / DOUBLE / TEXT")]),t._v(" "),s("td",[s("code",[t._v("k")]),t._v(": the maximum number of selected data points, must be greater than 0 and less than or equal to 1000")]),t._v(" "),s("td",[t._v("Same type as the input series")]),t._v(" "),s("td",[t._v("Returns "),s("code",[t._v("k")]),t._v(" data points with the largest values in a time series.")])]),t._v(" "),s("tr",[s("td",[t._v("BOTTOM_K")]),t._v(" "),s("td",[t._v("INT32 / INT64 / FLOAT / DOUBLE / TEXT")]),t._v(" "),s("td",[s("code",[t._v("k")]),t._v(": the maximum number of selected data points, must be greater than 0 and less than or equal to 1000")]),t._v(" "),s("td",[t._v("Same type as the input series")]),t._v(" "),s("td",[t._v("Returns "),s("code",[t._v("k")]),t._v(" data points with the smallest values in a time series.")])])])]),t._v(" "),s("p",[t._v("Example：")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" s1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" top_k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'k'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" bottom_k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'k'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sg1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d2 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("time")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2020")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("T20:"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("36")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15.530")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("08")]),t._v(":"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("00")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Result：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('+-----------------------------+--------------------+------------------------------+---------------------------------+\n|                         Time|      root.sg1.d2.s1|top_k(root.sg1.d2.s1, "k"="2")|bottom_k(root.sg1.d2.s1, "k"="2")|\n+-----------------------------+--------------------+------------------------------+---------------------------------+\n|2020-12-10T20:36:15.531+08:00| 1531604122307244742|           1531604122307244742|                             null|\n|2020-12-10T20:36:15.532+08:00|-7426070874923281101|                          null|                             null|\n|2020-12-10T20:36:15.533+08:00|-7162825364312197604|          -7162825364312197604|                             null|\n|2020-12-10T20:36:15.534+08:00|-8581625725655917595|                          null|             -8581625725655917595|\n|2020-12-10T20:36:15.535+08:00|-7667364751255535391|                          null|             -7667364751255535391|\n+-----------------------------+--------------------+------------------------------+---------------------------------+\nTotal line number = 5\nIt costs 0.006s\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);