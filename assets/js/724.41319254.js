(window.webpackJsonp=window.webpackJsonp||[]).push([[724],{1127:function(s,n,t){"use strict";t.r(n);var a=t(19),e=Object(a.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"区间查询函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#区间查询函数"}},[s._v("#")]),s._v(" 区间查询函数")]),s._v(" "),n("h2",{attrs:{id:"连续满足区间函数"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#连续满足区间函数"}},[s._v("#")]),s._v(" 连续满足区间函数")]),s._v(" "),n("p",[s._v("连续满足条件区间函数用来查询所有满足指定条件的连续区间。")]),s._v(" "),n("p",[s._v("按返回值可分为两类：")]),s._v(" "),n("ol",[n("li",[s._v("返回满足条件连续区间的起始时间戳和时间跨度(时间跨度为0表示此处只有起始时间这一个数据点满足条件)")]),s._v(" "),n("li",[s._v("返回满足条件连续区间的起始时间戳和后面连续满足条件的点的个数（个数为1表示此处只有起始时间这一个数据点满足条件）")])]),s._v(" "),n("table",[n("thead",[n("tr",[n("th",[s._v("函数名")]),s._v(" "),n("th",[s._v("输入序列类型")]),s._v(" "),n("th",[s._v("属性参数")]),s._v(" "),n("th",[s._v("输出序列类型")]),s._v(" "),n("th",[s._v("功能描述")])])]),s._v(" "),n("tbody",[n("tr",[n("td",[s._v("ZERO_DURATION")]),s._v(" "),n("td",[s._v("INT32/ INT64/ FLOAT/ DOUBLE/ BOOLEAN")]),s._v(" "),n("td",[n("code",[s._v("min")]),s._v(":可选，默认值0"),n("br"),n("code",[s._v("max")]),s._v(":可选，默认值"),n("code",[s._v("Long.MAX_VALUE")])]),s._v(" "),n("td",[s._v("Long")]),s._v(" "),n("td",[s._v("返回时间序列连续为0(false)的开始时间与持续时间，持续时间t(单位ms)满足"),n("code",[s._v("t >= min && t <= max")])])]),s._v(" "),n("tr",[n("td",[s._v("NON_ZERO_DURATION")]),s._v(" "),n("td",[s._v("INT32/ INT64/ FLOAT/ DOUBLE/ BOOLEAN")]),s._v(" "),n("td",[n("code",[s._v("min")]),s._v(":可选，默认值0"),n("br"),n("code",[s._v("max")]),s._v(":可选，默认值"),n("code",[s._v("Long.MAX_VALUE")])]),s._v(" "),n("td",[s._v("Long")]),s._v(" "),n("td",[s._v("返回时间序列连续不为0(false)的开始时间与持续时间，持续时间t(单位ms)满足"),n("code",[s._v("t >= min && t <= max")])])]),s._v(" "),n("tr",[n("td",[s._v("ZERO_COUNT")]),s._v(" "),n("td",[s._v("INT32/ INT64/ FLOAT/ DOUBLE/ BOOLEAN")]),s._v(" "),n("td",[n("code",[s._v("min")]),s._v(":可选，默认值1"),n("br"),n("code",[s._v("max")]),s._v(":可选，默认值"),n("code",[s._v("Long.MAX_VALUE")])]),s._v(" "),n("td",[s._v("Long")]),s._v(" "),n("td",[s._v("返回时间序列连续为0(false)的开始时间与其后数据点的个数，数据点个数n满足"),n("code",[s._v("n >= min && n <= max")])])]),s._v(" "),n("tr",[n("td",[s._v("NON_ZERO_COUNT")]),s._v(" "),n("td",[s._v("INT32/ INT64/ FLOAT/ DOUBLE/ BOOLEAN")]),s._v(" "),n("td",[n("code",[s._v("min")]),s._v(":可选，默认值1"),n("br"),n("code",[s._v("max")]),s._v(":可选，默认值"),n("code",[s._v("Long.MAX_VALUE")])]),s._v(" "),n("td",[s._v("Long")]),s._v(" "),n("td",[s._v("返回时间序列连续不为0(false)的开始时间与其后数据点的个数，数据点个数n满足"),n("code",[s._v("n >= min && n <= max")])])])])]),s._v(" "),n("p",[s._v("测试数据:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("IoTDB> select s1,s2,s3,s4,s5 from root.sg.d2;\n+-----------------------------+-------------+-------------+-------------+-------------+-------------+\n|                         Time|root.sg.d2.s1|root.sg.d2.s2|root.sg.d2.s3|root.sg.d2.s4|root.sg.d2.s5|\n+-----------------------------+-------------+-------------+-------------+-------------+-------------+\n|1970-01-01T08:00:00.000+08:00|            0|            0|          0.0|          0.0|        false|\n|1970-01-01T08:00:00.001+08:00|            1|            1|          1.0|          1.0|         true|\n|1970-01-01T08:00:00.002+08:00|            1|            1|          1.0|          1.0|         true|\n|1970-01-01T08:00:00.003+08:00|            0|            0|          0.0|          0.0|        false|\n|1970-01-01T08:00:00.004+08:00|            1|            1|          1.0|          1.0|         true|\n|1970-01-01T08:00:00.005+08:00|            0|            0|          0.0|          0.0|        false|\n|1970-01-01T08:00:00.006+08:00|            0|            0|          0.0|          0.0|        false|\n|1970-01-01T08:00:00.007+08:00|            1|            1|          1.0|          1.0|         true|\n+-----------------------------+-------------+-------------+-------------+-------------+-------------+\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br")])]),n("p",[s._v("sql:")]),s._v(" "),n("div",{staticClass:"language-sql line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sql"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" s1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" zero_count"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" non_zero_count"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" zero_duration"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" non_zero_duration"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s4"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br")])]),n("p",[s._v("结果:")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("+-----------------------------+-------------+-------------------------+-----------------------------+----------------------------+--------------------------------+\n|                         Time|root.sg.d2.s1|zero_count(root.sg.d2.s1)|non_zero_count(root.sg.d2.s2)|zero_duration(root.sg.d2.s3)|non_zero_duration(root.sg.d2.s4)|\n+-----------------------------+-------------+-------------------------+-----------------------------+----------------------------+--------------------------------+\n|1970-01-01T08:00:00.000+08:00|            0|                        1|                         null|                           0|                            null|\n|1970-01-01T08:00:00.001+08:00|            1|                     null|                            2|                        null|                               1|\n|1970-01-01T08:00:00.002+08:00|            1|                     null|                         null|                        null|                            null|\n|1970-01-01T08:00:00.003+08:00|            0|                        1|                         null|                           0|                            null|\n|1970-01-01T08:00:00.004+08:00|            1|                     null|                            1|                        null|                               0|\n|1970-01-01T08:00:00.005+08:00|            0|                        2|                         null|                           1|                            null|\n|1970-01-01T08:00:00.006+08:00|            0|                     null|                         null|                        null|                            null|\n|1970-01-01T08:00:00.007+08:00|            1|                     null|                            1|                        null|                               0|\n+-----------------------------+-------------+-------------------------+-----------------------------+----------------------------+--------------------------------+\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);