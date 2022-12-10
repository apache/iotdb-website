(window.webpackJsonp=window.webpackJsonp||[]).push([[551],{953:function(t,n,s){"use strict";s.r(n);var a=s(19),e=Object(a.a)({},(function(){var t=this,n=t._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"continuous-interval-functions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#continuous-interval-functions"}},[t._v("#")]),t._v(" Continuous Interval Functions")]),t._v(" "),n("p",[t._v("The continuous interval functions are used to query all continuous intervals that meet specified conditions.\nThey can be divided into two categories according to return value:")]),t._v(" "),n("ol",[n("li",[t._v("Returns the start timestamp and time span of the continuous interval that meets the conditions (a time span of 0 means that only the start time point meets the conditions)")]),t._v(" "),n("li",[t._v("Returns the start timestamp of the continuous interval that meets the condition and the number of points in the interval (a number of 1 means that only the start time point meets the conditions)")])]),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("Function Name")]),t._v(" "),n("th",[t._v("Input TSDatatype")]),t._v(" "),n("th",[t._v("Parameters")]),t._v(" "),n("th",[t._v("Output TSDatatype")]),t._v(" "),n("th",[t._v("Function Description")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("ZERO_DURATION")]),t._v(" "),n("td",[t._v("INT32/ INT64/ FLOAT/ DOUBLE/ BOOLEAN")]),t._v(" "),n("td",[n("code",[t._v("min")]),t._v(":Optional with default value "),n("code",[t._v("0L")]),n("br"),n("code",[t._v("max")]),t._v(":Optional with default value "),n("code",[t._v("Long.MAX_VALUE")])]),t._v(" "),n("td",[t._v("Long")]),t._v(" "),n("td",[t._v("Return intervals' start times and duration times in which the value is always 0(false), and the duration time "),n("code",[t._v("t")]),t._v(" satisfy "),n("code",[t._v("t >= min && t <= max")]),t._v(". The unit of "),n("code",[t._v("t")]),t._v(" is ms")])]),t._v(" "),n("tr",[n("td",[t._v("NON_ZERO_DURATION")]),t._v(" "),n("td",[t._v("INT32/ INT64/ FLOAT/ DOUBLE/ BOOLEAN")]),t._v(" "),n("td",[n("code",[t._v("min")]),t._v(":Optional with default value "),n("code",[t._v("0L")]),n("br"),n("code",[t._v("max")]),t._v(":Optional with default value "),n("code",[t._v("Long.MAX_VALUE")])]),t._v(" "),n("td",[t._v("Long")]),t._v(" "),n("td",[t._v("Return intervals' start times and duration times in which the value is always not 0, and the duration time "),n("code",[t._v("t")]),t._v(" satisfy "),n("code",[t._v("t >= min && t <= max")]),t._v(". The unit of "),n("code",[t._v("t")]),t._v(" is ms")])]),t._v(" "),n("tr",[n("td",[t._v("ZERO_COUNT")]),t._v(" "),n("td",[t._v("INT32/ INT64/ FLOAT/ DOUBLE/ BOOLEAN")]),t._v(" "),n("td",[n("code",[t._v("min")]),t._v(":Optional with default value "),n("code",[t._v("1L")]),n("br"),n("code",[t._v("max")]),t._v(":Optional with default value "),n("code",[t._v("Long.MAX_VALUE")])]),t._v(" "),n("td",[t._v("Long")]),t._v(" "),n("td",[t._v("Return intervals' start times and the number of data points in the interval in which the value is always 0(false). Data points number "),n("code",[t._v("n")]),t._v(" satisfy "),n("code",[t._v("n >= min && n <= max")])])]),t._v(" "),n("tr",[n("td",[t._v("NON_ZERO_COUNT")]),t._v(" "),n("td",[t._v("INT32/ INT64/ FLOAT/ DOUBLE/ BOOLEAN")]),t._v(" "),n("td",[n("code",[t._v("min")]),t._v(":Optional with default value "),n("code",[t._v("1L")]),n("br"),n("code",[t._v("max")]),t._v(":Optional with default value "),n("code",[t._v("Long.MAX_VALUE")])]),t._v(" "),n("td",[t._v("Long")]),t._v(" "),n("td",[t._v("Return intervals' start times and the number of data points in the interval in which the value is always not 0(false). Data points number "),n("code",[t._v("n")]),t._v(" satisfy "),n("code",[t._v("n >= min && n <= max")])])])])]),t._v(" "),n("h5",{attrs:{id:"demonstrate"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#demonstrate"}},[t._v("#")]),t._v(" Demonstrate")]),t._v(" "),n("p",[t._v("Example data:")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("IoTDB> select s1,s2,s3,s4,s5 from root.sg.d2;\n+-----------------------------+-------------+-------------+-------------+-------------+-------------+\n|                         Time|root.sg.d2.s1|root.sg.d2.s2|root.sg.d2.s3|root.sg.d2.s4|root.sg.d2.s5|\n+-----------------------------+-------------+-------------+-------------+-------------+-------------+\n|1970-01-01T08:00:00.000+08:00|            0|            0|          0.0|          0.0|        false|\n|1970-01-01T08:00:00.001+08:00|            1|            1|          1.0|          1.0|         true|\n|1970-01-01T08:00:00.002+08:00|            1|            1|          1.0|          1.0|         true|\n|1970-01-01T08:00:00.003+08:00|            0|            0|          0.0|          0.0|        false|\n|1970-01-01T08:00:00.004+08:00|            1|            1|          1.0|          1.0|         true|\n|1970-01-01T08:00:00.005+08:00|            0|            0|          0.0|          0.0|        false|\n|1970-01-01T08:00:00.006+08:00|            0|            0|          0.0|          0.0|        false|\n|1970-01-01T08:00:00.007+08:00|            1|            1|          1.0|          1.0|         true|\n+-----------------------------+-------------+-------------+-------------+-------------+-------------+\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br")])]),n("p",[t._v("Sql:")]),t._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" s1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" zero_count"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" non_zero_count"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" zero_duration"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" non_zero_duration"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s4"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[t._v("Result:")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("+-----------------------------+-------------+-------------------------+-----------------------------+----------------------------+--------------------------------+\n|                         Time|root.sg.d2.s1|zero_count(root.sg.d2.s1)|non_zero_count(root.sg.d2.s2)|zero_duration(root.sg.d2.s3)|non_zero_duration(root.sg.d2.s4)|\n+-----------------------------+-------------+-------------------------+-----------------------------+----------------------------+--------------------------------+\n|1970-01-01T08:00:00.000+08:00|            0|                        1|                         null|                           0|                            null|\n|1970-01-01T08:00:00.001+08:00|            1|                     null|                            2|                        null|                               1|\n|1970-01-01T08:00:00.002+08:00|            1|                     null|                         null|                        null|                            null|\n|1970-01-01T08:00:00.003+08:00|            0|                        1|                         null|                           0|                            null|\n|1970-01-01T08:00:00.004+08:00|            1|                     null|                            1|                        null|                               0|\n|1970-01-01T08:00:00.005+08:00|            0|                        2|                         null|                           1|                            null|\n|1970-01-01T08:00:00.006+08:00|            0|                     null|                         null|                        null|                            null|\n|1970-01-01T08:00:00.007+08:00|            1|                     null|                            1|                        null|                               0|\n+-----------------------------+-------------+-------------------------+-----------------------------+----------------------------+--------------------------------+\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);