(window.webpackJsonp=window.webpackJsonp||[]).push([[1154],{1556:function(s,a,n){"use strict";n.r(a);var t=n(19),e=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"数据匹配"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据匹配"}},[s._v("#")]),s._v(" 数据匹配")]),s._v(" "),a("h2",{attrs:{id:"cov"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cov"}},[s._v("#")]),s._v(" Cov")]),s._v(" "),a("h3",{attrs:{id:"函数简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数简介"}},[s._v("#")]),s._v(" 函数简介")]),s._v(" "),a("p",[s._v("本函数用于计算两列数值型数据的总体协方差。")]),s._v(" "),a("p",[a("strong",[s._v("函数名：")]),s._v(" COV")]),s._v(" "),a("p",[a("strong",[s._v("输入序列：")]),s._v(" 仅支持两个输入序列，类型均为 INT32 / INT64 / FLOAT / DOUBLE。")]),s._v(" "),a("p",[a("strong",[s._v("输出序列：")]),s._v(" 输出单个序列，类型为 DOUBLE。序列仅包含一个时间戳为 0、值为总体协方差的数据点。")]),s._v(" "),a("p",[a("strong",[s._v("提示：")])]),s._v(" "),a("ul",[a("li",[s._v("如果某行数据中包含空值、缺失值或"),a("code",[s._v("NaN")]),s._v("，该行数据将会被忽略；")]),s._v(" "),a("li",[s._v("如果数据中所有的行都被忽略，函数将会输出"),a("code",[s._v("NaN")]),s._v("。")])]),s._v(" "),a("h3",{attrs:{id:"使用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[s._v("#")]),s._v(" 使用示例")]),s._v(" "),a("p",[s._v("输入序列：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-----------------------------+---------------+---------------+\n|                         Time|root.test.d2.s1|root.test.d2.s2|\n+-----------------------------+---------------+---------------+\n|2020-01-01T00:00:02.000+08:00|          100.0|          101.0|\n|2020-01-01T00:00:03.000+08:00|          101.0|           null|\n|2020-01-01T00:00:04.000+08:00|          102.0|          101.0|\n|2020-01-01T00:00:06.000+08:00|          104.0|          102.0|\n|2020-01-01T00:00:08.000+08:00|          126.0|          102.0|\n|2020-01-01T00:00:10.000+08:00|          108.0|          103.0|\n|2020-01-01T00:00:12.000+08:00|           null|          103.0|\n|2020-01-01T00:00:14.000+08:00|          112.0|          104.0|\n|2020-01-01T00:00:15.000+08:00|          113.0|           null|\n|2020-01-01T00:00:16.000+08:00|          114.0|          104.0|\n|2020-01-01T00:00:18.000+08:00|          116.0|          105.0|\n|2020-01-01T00:00:20.000+08:00|          118.0|          105.0|\n|2020-01-01T00:00:22.000+08:00|          100.0|          106.0|\n|2020-01-01T00:00:26.000+08:00|          124.0|          108.0|\n|2020-01-01T00:00:28.000+08:00|          126.0|          108.0|\n|2020-01-01T00:00:30.000+08:00|            NaN|          108.0|\n+-----------------------------+---------------+---------------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("用于查询的 SQL 语句：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" cov"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("s2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("输出序列：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-----------------------------+-------------------------------------+\n|                         Time|cov(root.test.d2.s1, root.test.d2.s2)|\n+-----------------------------+-------------------------------------+\n|1970-01-01T08:00:00.000+08:00|                   12.291666666666666|\n+-----------------------------+-------------------------------------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"dtw"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dtw"}},[s._v("#")]),s._v(" Dtw")]),s._v(" "),a("h3",{attrs:{id:"函数简介-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数简介-2"}},[s._v("#")]),s._v(" 函数简介")]),s._v(" "),a("p",[s._v("本函数用于计算两列数值型数据的 DTW 距离。")]),s._v(" "),a("p",[a("strong",[s._v("函数名：")]),s._v(" DTW")]),s._v(" "),a("p",[a("strong",[s._v("输入序列：")]),s._v(" 仅支持两个输入序列，类型均为 INT32 / INT64 / FLOAT / DOUBLE。")]),s._v(" "),a("p",[a("strong",[s._v("输出序列：")]),s._v(" 输出单个序列，类型为 DOUBLE。序列仅包含一个时间戳为 0、值为两个时间序列的 DTW 距离值。")]),s._v(" "),a("p",[a("strong",[s._v("提示：")])]),s._v(" "),a("ul",[a("li",[s._v("如果某行数据中包含空值、缺失值或"),a("code",[s._v("NaN")]),s._v("，该行数据将会被忽略；")]),s._v(" "),a("li",[s._v("如果数据中所有的行都被忽略，函数将会输出 0。")])]),s._v(" "),a("h3",{attrs:{id:"使用示例-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例-2"}},[s._v("#")]),s._v(" 使用示例")]),s._v(" "),a("p",[s._v("输入序列：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-----------------------------+---------------+---------------+\n|                         Time|root.test.d2.s1|root.test.d2.s2|\n+-----------------------------+---------------+---------------+\n|1970-01-01T08:00:00.001+08:00|            1.0|            2.0|\n|1970-01-01T08:00:00.002+08:00|            1.0|            2.0|\n|1970-01-01T08:00:00.003+08:00|            1.0|            2.0|\n|1970-01-01T08:00:00.004+08:00|            1.0|            2.0|\n|1970-01-01T08:00:00.005+08:00|            1.0|            2.0|\n|1970-01-01T08:00:00.006+08:00|            1.0|            2.0|\n|1970-01-01T08:00:00.007+08:00|            1.0|            2.0|\n|1970-01-01T08:00:00.008+08:00|            1.0|            2.0|\n|1970-01-01T08:00:00.009+08:00|            1.0|            2.0|\n|1970-01-01T08:00:00.010+08:00|            1.0|            2.0|\n|1970-01-01T08:00:00.011+08:00|            1.0|            2.0|\n|1970-01-01T08:00:00.012+08:00|            1.0|            2.0|\n|1970-01-01T08:00:00.013+08:00|            1.0|            2.0|\n|1970-01-01T08:00:00.014+08:00|            1.0|            2.0|\n|1970-01-01T08:00:00.015+08:00|            1.0|            2.0|\n|1970-01-01T08:00:00.016+08:00|            1.0|            2.0|\n|1970-01-01T08:00:00.017+08:00|            1.0|            2.0|\n|1970-01-01T08:00:00.018+08:00|            1.0|            2.0|\n|1970-01-01T08:00:00.019+08:00|            1.0|            2.0|\n|1970-01-01T08:00:00.020+08:00|            1.0|            2.0|\n+-----------------------------+---------------+---------------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("p",[s._v("用于查询的 SQL 语句：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" dtw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("s2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("输出序列：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-----------------------------+-------------------------------------+\n|                         Time|dtw(root.test.d2.s1, root.test.d2.s2)|\n+-----------------------------+-------------------------------------+\n|1970-01-01T08:00:00.000+08:00|                                 20.0|\n+-----------------------------+-------------------------------------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"pearson"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pearson"}},[s._v("#")]),s._v(" Pearson")]),s._v(" "),a("h3",{attrs:{id:"函数简介-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数简介-3"}},[s._v("#")]),s._v(" 函数简介")]),s._v(" "),a("p",[s._v("本函数用于计算两列数值型数据的皮尔森相关系数。")]),s._v(" "),a("p",[a("strong",[s._v("函数名：")]),s._v(" PEARSON")]),s._v(" "),a("p",[a("strong",[s._v("输入序列：")]),s._v(" 仅支持两个输入序列，类型均为 INT32 / INT64 / FLOAT / DOUBLE。")]),s._v(" "),a("p",[a("strong",[s._v("输出序列：")]),s._v(" 输出单个序列，类型为 DOUBLE。序列仅包含一个时间戳为 0、值为皮尔森相关系数的数据点。")]),s._v(" "),a("p",[a("strong",[s._v("提示：")])]),s._v(" "),a("ul",[a("li",[s._v("如果某行数据中包含空值、缺失值或"),a("code",[s._v("NaN")]),s._v("，该行数据将会被忽略；")]),s._v(" "),a("li",[s._v("如果数据中所有的行都被忽略，函数将会输出"),a("code",[s._v("NaN")]),s._v("。")])]),s._v(" "),a("h3",{attrs:{id:"使用示例-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例-3"}},[s._v("#")]),s._v(" 使用示例")]),s._v(" "),a("p",[s._v("输入序列：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-----------------------------+---------------+---------------+\n|                         Time|root.test.d2.s1|root.test.d2.s2|\n+-----------------------------+---------------+---------------+\n|2020-01-01T00:00:02.000+08:00|          100.0|          101.0|\n|2020-01-01T00:00:03.000+08:00|          101.0|           null|\n|2020-01-01T00:00:04.000+08:00|          102.0|          101.0|\n|2020-01-01T00:00:06.000+08:00|          104.0|          102.0|\n|2020-01-01T00:00:08.000+08:00|          126.0|          102.0|\n|2020-01-01T00:00:10.000+08:00|          108.0|          103.0|\n|2020-01-01T00:00:12.000+08:00|           null|          103.0|\n|2020-01-01T00:00:14.000+08:00|          112.0|          104.0|\n|2020-01-01T00:00:15.000+08:00|          113.0|           null|\n|2020-01-01T00:00:16.000+08:00|          114.0|          104.0|\n|2020-01-01T00:00:18.000+08:00|          116.0|          105.0|\n|2020-01-01T00:00:20.000+08:00|          118.0|          105.0|\n|2020-01-01T00:00:22.000+08:00|          100.0|          106.0|\n|2020-01-01T00:00:26.000+08:00|          124.0|          108.0|\n|2020-01-01T00:00:28.000+08:00|          126.0|          108.0|\n|2020-01-01T00:00:30.000+08:00|            NaN|          108.0|\n+-----------------------------+---------------+---------------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("p",[s._v("用于查询的 SQL 语句：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" pearson"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("s2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("输出序列：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-----------------------------+-----------------------------------------+\n|                         Time|pearson(root.test.d2.s1, root.test.d2.s2)|\n+-----------------------------+-----------------------------------------+\n|1970-01-01T08:00:00.000+08:00|                       0.5630881927754872|\n+-----------------------------+-----------------------------------------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"ptnsym"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ptnsym"}},[s._v("#")]),s._v(" PtnSym")]),s._v(" "),a("h3",{attrs:{id:"函数简介-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数简介-4"}},[s._v("#")]),s._v(" 函数简介")]),s._v(" "),a("p",[s._v("本函数用于寻找序列中所有对称度小于阈值的对称子序列。对称度通过 DTW 计算，值越小代表序列对称性越高。")]),s._v(" "),a("p",[a("strong",[s._v("函数名：")]),s._v(" PTNSYM")]),s._v(" "),a("p",[a("strong",[s._v("输入序列：")]),s._v(" 仅支持一个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE。")]),s._v(" "),a("p",[a("strong",[s._v("参数：")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("window")]),s._v("：对称子序列的长度，是一个正整数，默认值为 10。")]),s._v(" "),a("li",[a("code",[s._v("threshold")]),s._v("：对称度阈值，是一个非负数，只有对称度小于等于该值的对称子序列才会被输出。在缺省情况下，所有的子序列都会被输出。")])]),s._v(" "),a("p",[a("strong",[s._v("输出序列：")]),s._v(" 输出单个序列，类型为 DOUBLE。序列中的每一个数据点对应于一个对称子序列，时间戳为子序列的起始时刻，值为对称度。")]),s._v(" "),a("h3",{attrs:{id:"使用示例-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例-4"}},[s._v("#")]),s._v(" 使用示例")]),s._v(" "),a("p",[s._v("输入序列：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-----------------------------+---------------+\n|                         Time|root.test.d1.s4|\n+-----------------------------+---------------+\n|2021-01-01T12:00:00.000+08:00|            1.0|\n|2021-01-01T12:00:01.000+08:00|            2.0|\n|2021-01-01T12:00:02.000+08:00|            3.0|\n|2021-01-01T12:00:03.000+08:00|            2.0|\n|2021-01-01T12:00:04.000+08:00|            1.0|\n|2021-01-01T12:00:05.000+08:00|            1.0|\n|2021-01-01T12:00:06.000+08:00|            1.0|\n|2021-01-01T12:00:07.000+08:00|            1.0|\n|2021-01-01T12:00:08.000+08:00|            2.0|\n|2021-01-01T12:00:09.000+08:00|            3.0|\n|2021-01-01T12:00:10.000+08:00|            2.0|\n|2021-01-01T12:00:11.000+08:00|            1.0|\n+-----------------------------+---------------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])]),a("p",[s._v("用于查询的 SQL 语句：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" ptnsym"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'window'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'5'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'threshold'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("输出序列：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('+-----------------------------+------------------------------------------------------+\n|                         Time|ptnsym(root.test.d1.s4, "window"="5", "threshold"="0")|\n+-----------------------------+------------------------------------------------------+\n|2021-01-01T12:00:00.000+08:00|                                                   0.0|\n|2021-01-01T12:00:07.000+08:00|                                                   0.0|\n+-----------------------------+------------------------------------------------------+\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"xcorr"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xcorr"}},[s._v("#")]),s._v(" XCorr")]),s._v(" "),a("h3",{attrs:{id:"函数简介-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数简介-5"}},[s._v("#")]),s._v(" 函数简介")]),s._v(" "),a("p",[s._v("本函数用于计算两条时间序列的互相关函数值，\n对离散序列而言，互相关函数可以表示为\n$$CR(n) = \\frac{1}{N} \\sum_{m=1}^N S_1[m]S_2[m+n]$$\n常用于表征两条序列在不同对齐条件下的相似度。")]),s._v(" "),a("p",[a("strong",[s._v("函数名：")]),s._v(" XCORR")]),s._v(" "),a("p",[a("strong",[s._v("输入序列：")]),s._v(" 仅支持两个输入序列，类型均为 INT32 / INT64 / FLOAT / DOUBLE。")]),s._v(" "),a("p",[a("strong",[s._v("输出序列：")]),s._v(" 输出单个序列，类型为 DOUBLE。序列中共包含$2N-1$个数据点，\n其中正中心的值为两条序列按照预先对齐的结果计算的互相关系数（即等于以上公式的$CR(0)$），\n前半部分的值表示将后一条输入序列向前平移时计算的互相关系数，\n直至两条序列没有重合的数据点（不包含完全分离时的结果$CR(-N)=0.0$），\n后半部分类似。\n用公式可表示为（所有序列的索引从1开始计数）：\n$$OS[i] = CR(-N+i) = \\frac{1}{N} \\sum_{m=1}^{i} S_1[m]S_2[N-i+m],\\ if\\ i <= N$$\n$$OS[i] = CR(i-N) = \\frac{1}{N} \\sum_{m=1}^{2N-i} S_1[i-N+m]S_2[m],\\ if\\ i > N$$")]),s._v(" "),a("p",[a("strong",[s._v("提示：")])]),s._v(" "),a("ul",[a("li",[s._v("两条序列中的"),a("code",[s._v("null")]),s._v(" 和"),a("code",[s._v("NaN")]),s._v(" 值会被忽略，在计算中表现为 0。")])]),s._v(" "),a("h3",{attrs:{id:"使用示例-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例-5"}},[s._v("#")]),s._v(" 使用示例")]),s._v(" "),a("p",[s._v("输入序列：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-----------------------------+---------------+---------------+\n|                         Time|root.test.d1.s1|root.test.d1.s2|\n+-----------------------------+---------------+---------------+\n|2020-01-01T00:00:01.000+08:00|           null|              6|\n|2020-01-01T00:00:02.000+08:00|              2|              7|\n|2020-01-01T00:00:03.000+08:00|              3|            NaN|\n|2020-01-01T00:00:04.000+08:00|              4|              9|\n|2020-01-01T00:00:05.000+08:00|              5|             10|\n+-----------------------------+---------------+---------------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("用于查询的 SQL 语句：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" xcorr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" s2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("05")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("输出序列：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-----------------------------+---------------------------------------+\n|                         Time|xcorr(root.test.d1.s1, root.test.d1.s2)|\n+-----------------------------+---------------------------------------+\n|1970-01-01T08:00:00.001+08:00|                                    0.0|\n|1970-01-01T08:00:00.002+08:00|                                    4.0|\n|1970-01-01T08:00:00.003+08:00|                                    9.6|\n|1970-01-01T08:00:00.004+08:00|                                   13.4|\n|1970-01-01T08:00:00.005+08:00|                                   20.0|\n|1970-01-01T08:00:00.006+08:00|                                   15.6|\n|1970-01-01T08:00:00.007+08:00|                                    9.2|\n|1970-01-01T08:00:00.008+08:00|                                   11.8|\n|1970-01-01T08:00:00.009+08:00|                                    6.0|\n+-----------------------------+---------------------------------------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);