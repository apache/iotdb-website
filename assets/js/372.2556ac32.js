(window.webpackJsonp=window.webpackJsonp||[]).push([[372],{775:function(e,t,s){"use strict";s.r(t);var a=s(19),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"last-query"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#last-query"}},[e._v("#")]),e._v(" Last Query")]),e._v(" "),t("p",[e._v("The last query is a special query provided in the time series database Apache IoTDB. The last query returns the data point with the largest timestamp in the time series, that is, the latest state of a sequence. Users can specify the last query through "),t("code",[e._v("select last")]),e._v(". It is especially important in IoT data analysis scenarios as the latest point data characterizes the current state. In order to provide a millisecond-level return speed, Apache IoTDB optimizes the cache for the last query to meet users' performance requirements for real-time monitoring of devices.")]),e._v(" "),t("p",[e._v("The last query is to return the most recent data point of the given timeseries in a three column format.")]),e._v(" "),t("p",[e._v("The SQL statement is defined as:")]),e._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("last")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("Path"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("COMMA "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("Path"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v(" PrefixPath "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("COMMA "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v(" PrefixPath "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("WhereClause"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("which means: Query and return the last data points of timeseries prefixPath.path.")]),e._v(" "),t("p",[e._v("Only time filter with '>' or '>=' is supported in <WhereClause>. Any other filters given in the <WhereClause> will give an exception.")]),e._v(" "),t("p",[e._v("The result will be returned in a four column table format.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("| Time | timeseries | value | dataType |\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("strong",[e._v("Note:")]),e._v(" The "),t("code",[e._v("value")]),e._v(" colum will always return the value as "),t("code",[e._v("string")]),e._v(" and thus also has "),t("code",[e._v("TSDataType.TEXT")]),e._v(". Therefore the colum "),t("code",[e._v("dataType")]),e._v(" is returned also which contains the "),t("em",[e._v("real")]),e._v(" type how the value should be interpreted.")]),e._v(" "),t("p",[t("strong",[e._v("Example 1:")]),e._v(" get the last point of root.ln.wf01.wt01.status:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB> select last status from root.ln.wf01.wt01\n+-----------------------------+------------------------+-----+--------+\n|                         Time|              timeseries|value|dataType|\n+-----------------------------+------------------------+-----+--------+\n|2017-11-07T23:59:00.000+08:00|root.ln.wf01.wt01.status|false| BOOLEAN|\n+-----------------------------+------------------------+-----+--------+\nTotal line number = 1\nIt costs 0.000s\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br")])]),t("p",[t("strong",[e._v("Example 2:")]),e._v(" get the last status and temperature points of root.ln.wf01.wt01, whose timestamp larger or equal to 2017-11-07T23:50:00。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB> select last status, temperature from root.ln.wf01.wt01 where time >= 2017-11-07T23:50:00\n+-----------------------------+-----------------------------+---------+--------+\n|                         Time|                   timeseries|    value|dataType|\n+-----------------------------+-----------------------------+---------+--------+\n|2017-11-07T23:59:00.000+08:00|     root.ln.wf01.wt01.status|    false| BOOLEAN|\n|2017-11-07T23:59:00.000+08:00|root.ln.wf01.wt01.temperature|21.067368|  DOUBLE|\n+-----------------------------+-----------------------------+---------+--------+\nTotal line number = 2\nIt costs 0.002s\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);