(window.webpackJsonp=window.webpackJsonp||[]).push([[414],{817:function(s,e,t){"use strict";t.r(e);var a=t(19),n=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"data-matching"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-matching"}},[s._v("#")]),s._v(" Data Matching")]),s._v(" "),e("h2",{attrs:{id:"cov"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cov"}},[s._v("#")]),s._v(" Cov")]),s._v(" "),e("h3",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[s._v("#")]),s._v(" Usage")]),s._v(" "),e("p",[s._v("This function is used to calculate the population covariance.")]),s._v(" "),e("p",[e("strong",[s._v("Name:")]),s._v(" COV")]),s._v(" "),e("p",[e("strong",[s._v("Input Series:")]),s._v(" Only support two input series. The types are both INT32 / INT64 / FLOAT / DOUBLE.")]),s._v(" "),e("p",[e("strong",[s._v("Output Series:")]),s._v(" Output a single series. The type is DOUBLE. There is only one data point in the series, whose timestamp is 0 and value is the population covariance.")]),s._v(" "),e("p",[e("strong",[s._v("Note:")])]),s._v(" "),e("ul",[e("li",[s._v("If a row contains missing points, null points or "),e("code",[s._v("NaN")]),s._v(", it will be ignored;")]),s._v(" "),e("li",[s._v("If all rows are ignored, "),e("code",[s._v("NaN")]),s._v(" will be output.")])]),s._v(" "),e("h3",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),e("p",[s._v("Input series:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+-----------------------------+---------------+---------------+\n|                         Time|root.test.d2.s1|root.test.d2.s2|\n+-----------------------------+---------------+---------------+\n|2020-01-01T00:00:02.000+08:00|          100.0|          101.0|\n|2020-01-01T00:00:03.000+08:00|          101.0|           null|\n|2020-01-01T00:00:04.000+08:00|          102.0|          101.0|\n|2020-01-01T00:00:06.000+08:00|          104.0|          102.0|\n|2020-01-01T00:00:08.000+08:00|          126.0|          102.0|\n|2020-01-01T00:00:10.000+08:00|          108.0|          103.0|\n|2020-01-01T00:00:12.000+08:00|           null|          103.0|\n|2020-01-01T00:00:14.000+08:00|          112.0|          104.0|\n|2020-01-01T00:00:15.000+08:00|          113.0|           null|\n|2020-01-01T00:00:16.000+08:00|          114.0|          104.0|\n|2020-01-01T00:00:18.000+08:00|          116.0|          105.0|\n|2020-01-01T00:00:20.000+08:00|          118.0|          105.0|\n|2020-01-01T00:00:22.000+08:00|          100.0|          106.0|\n|2020-01-01T00:00:26.000+08:00|          124.0|          108.0|\n|2020-01-01T00:00:28.000+08:00|          126.0|          108.0|\n|2020-01-01T00:00:30.000+08:00|            NaN|          108.0|\n+-----------------------------+---------------+---------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br")])]),e("p",[s._v("SQL for query:")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" cov"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("s2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("Output series:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+-----------------------------+-------------------------------------+\n|                         Time|cov(root.test.d2.s1, root.test.d2.s2)|\n+-----------------------------+-------------------------------------+\n|1970-01-01T08:00:00.000+08:00|                   12.291666666666666|\n+-----------------------------+-------------------------------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"dtw"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dtw"}},[s._v("#")]),s._v(" DTW")]),s._v(" "),e("h3",{attrs:{id:"usage-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage-2"}},[s._v("#")]),s._v(" Usage")]),s._v(" "),e("p",[s._v("This function is used to calculate the DTW distance between two input series.")]),s._v(" "),e("p",[e("strong",[s._v("Name:")]),s._v(" DTW")]),s._v(" "),e("p",[e("strong",[s._v("Input Series:")]),s._v(" Only support two input series. The types are both INT32 / INT64 / FLOAT / DOUBLE.")]),s._v(" "),e("p",[e("strong",[s._v("Output Series:")]),s._v(" Output a single series. The type is DOUBLE. There is only one data point in the series, whose timestamp is 0 and value is the DTW distance.")]),s._v(" "),e("p",[e("strong",[s._v("Note:")])]),s._v(" "),e("ul",[e("li",[s._v("If a row contains missing points, null points or "),e("code",[s._v("NaN")]),s._v(", it will be ignored;")]),s._v(" "),e("li",[s._v("If all rows are ignored, "),e("code",[s._v("0")]),s._v(" will be output.")])]),s._v(" "),e("h3",{attrs:{id:"examples-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-2"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),e("p",[s._v("Input series:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+-----------------------------+---------------+---------------+\n|                         Time|root.test.d2.s1|root.test.d2.s2|\n+-----------------------------+---------------+---------------+\n|1970-01-01T08:00:00.001+08:00|            1.0|            2.0|\n|1970-01-01T08:00:00.002+08:00|            1.0|            2.0|\n|1970-01-01T08:00:00.003+08:00|            1.0|            2.0|\n|1970-01-01T08:00:00.004+08:00|            1.0|            2.0|\n|1970-01-01T08:00:00.005+08:00|            1.0|            2.0|\n|1970-01-01T08:00:00.006+08:00|            1.0|            2.0|\n|1970-01-01T08:00:00.007+08:00|            1.0|            2.0|\n|1970-01-01T08:00:00.008+08:00|            1.0|            2.0|\n|1970-01-01T08:00:00.009+08:00|            1.0|            2.0|\n|1970-01-01T08:00:00.010+08:00|            1.0|            2.0|\n|1970-01-01T08:00:00.011+08:00|            1.0|            2.0|\n|1970-01-01T08:00:00.012+08:00|            1.0|            2.0|\n|1970-01-01T08:00:00.013+08:00|            1.0|            2.0|\n|1970-01-01T08:00:00.014+08:00|            1.0|            2.0|\n|1970-01-01T08:00:00.015+08:00|            1.0|            2.0|\n|1970-01-01T08:00:00.016+08:00|            1.0|            2.0|\n|1970-01-01T08:00:00.017+08:00|            1.0|            2.0|\n|1970-01-01T08:00:00.018+08:00|            1.0|            2.0|\n|1970-01-01T08:00:00.019+08:00|            1.0|            2.0|\n|1970-01-01T08:00:00.020+08:00|            1.0|            2.0|\n+-----------------------------+---------------+---------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br")])]),e("p",[s._v("SQL for query:")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" dtw"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("s2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("Output series:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+-----------------------------+-------------------------------------+\n|                         Time|dtw(root.test.d2.s1, root.test.d2.s2)|\n+-----------------------------+-------------------------------------+\n|1970-01-01T08:00:00.000+08:00|                                 20.0|\n+-----------------------------+-------------------------------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"pearson"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pearson"}},[s._v("#")]),s._v(" Pearson")]),s._v(" "),e("h3",{attrs:{id:"usage-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage-3"}},[s._v("#")]),s._v(" Usage")]),s._v(" "),e("p",[s._v("This function is used to calculate the Pearson Correlation Coefficient.")]),s._v(" "),e("p",[e("strong",[s._v("Name:")]),s._v(" PEARSON")]),s._v(" "),e("p",[e("strong",[s._v("Input Series:")]),s._v(" Only support two input series. The types are both INT32 / INT64 / FLOAT / DOUBLE.")]),s._v(" "),e("p",[e("strong",[s._v("Output Series:")]),s._v(" Output a single series. The type is DOUBLE. There is only one data point in the series, whose timestamp is 0 and value is the Pearson Correlation Coefficient.")]),s._v(" "),e("p",[e("strong",[s._v("Note:")])]),s._v(" "),e("ul",[e("li",[s._v("If a row contains missing points, null points or "),e("code",[s._v("NaN")]),s._v(", it will be ignored;")]),s._v(" "),e("li",[s._v("If all rows are ignored, "),e("code",[s._v("NaN")]),s._v(" will be output.")])]),s._v(" "),e("h3",{attrs:{id:"examples-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-3"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),e("p",[s._v("Input series:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+-----------------------------+---------------+---------------+\n|                         Time|root.test.d2.s1|root.test.d2.s2|\n+-----------------------------+---------------+---------------+\n|2020-01-01T00:00:02.000+08:00|          100.0|          101.0|\n|2020-01-01T00:00:03.000+08:00|          101.0|           null|\n|2020-01-01T00:00:04.000+08:00|          102.0|          101.0|\n|2020-01-01T00:00:06.000+08:00|          104.0|          102.0|\n|2020-01-01T00:00:08.000+08:00|          126.0|          102.0|\n|2020-01-01T00:00:10.000+08:00|          108.0|          103.0|\n|2020-01-01T00:00:12.000+08:00|           null|          103.0|\n|2020-01-01T00:00:14.000+08:00|          112.0|          104.0|\n|2020-01-01T00:00:15.000+08:00|          113.0|           null|\n|2020-01-01T00:00:16.000+08:00|          114.0|          104.0|\n|2020-01-01T00:00:18.000+08:00|          116.0|          105.0|\n|2020-01-01T00:00:20.000+08:00|          118.0|          105.0|\n|2020-01-01T00:00:22.000+08:00|          100.0|          106.0|\n|2020-01-01T00:00:26.000+08:00|          124.0|          108.0|\n|2020-01-01T00:00:28.000+08:00|          126.0|          108.0|\n|2020-01-01T00:00:30.000+08:00|            NaN|          108.0|\n+-----------------------------+---------------+---------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br")])]),e("p",[s._v("SQL for query:")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" pearson"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("s2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("Output series:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+-----------------------------+-----------------------------------------+\n|                         Time|pearson(root.test.d2.s1, root.test.d2.s2)|\n+-----------------------------+-----------------------------------------+\n|1970-01-01T08:00:00.000+08:00|                       0.5630881927754872|\n+-----------------------------+-----------------------------------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"ptnsym"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ptnsym"}},[s._v("#")]),s._v(" PtnSym")]),s._v(" "),e("h3",{attrs:{id:"usage-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage-4"}},[s._v("#")]),s._v(" Usage")]),s._v(" "),e("p",[s._v("This function is used to find all symmetric subseries in the input whose degree of symmetry is less than the threshold.\nThe degree of symmetry is calculated by DTW.\nThe smaller the degree, the more symmetrical the series is.")]),s._v(" "),e("p",[e("strong",[s._v("Name:")]),s._v(" PATTERNSYMMETRIC")]),s._v(" "),e("p",[e("strong",[s._v("Input Series:")]),s._v(" Only support a single input series. The type is INT32 / INT64 / FLOAT / DOUBLE")]),s._v(" "),e("p",[e("strong",[s._v("Parameter:")])]),s._v(" "),e("ul",[e("li",[e("code",[s._v("window")]),s._v(": The length of the symmetric subseries. It's a positive integer and the default value is 10.")]),s._v(" "),e("li",[e("code",[s._v("threshold")]),s._v(": The threshold of the degree of symmetry. It's non-negative. Only the subseries whose degree of symmetry is below it will be output. By default, all subseries will be output.")])]),s._v(" "),e("p",[e("strong",[s._v("Output Series:")]),s._v(" Output a single series. The type is DOUBLE. Each data point in the output series corresponds to a symmetric subseries. The output timestamp is the starting timestamp of the subseries and the output value is the degree of symmetry.")]),s._v(" "),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" Example")]),s._v(" "),e("p",[s._v("Input series:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+-----------------------------+---------------+\n|                         Time|root.test.d1.s4|\n+-----------------------------+---------------+\n|2021-01-01T12:00:00.000+08:00|            1.0|\n|2021-01-01T12:00:01.000+08:00|            2.0|\n|2021-01-01T12:00:02.000+08:00|            3.0|\n|2021-01-01T12:00:03.000+08:00|            2.0|\n|2021-01-01T12:00:04.000+08:00|            1.0|\n|2021-01-01T12:00:05.000+08:00|            1.0|\n|2021-01-01T12:00:06.000+08:00|            1.0|\n|2021-01-01T12:00:07.000+08:00|            1.0|\n|2021-01-01T12:00:08.000+08:00|            2.0|\n|2021-01-01T12:00:09.000+08:00|            3.0|\n|2021-01-01T12:00:10.000+08:00|            2.0|\n|2021-01-01T12:00:11.000+08:00|            1.0|\n+-----------------------------+---------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br")])]),e("p",[s._v("SQL for query:")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" ptnsym"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s4"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'window'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'5'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'threshold'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("Output series:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('+-----------------------------+------------------------------------------------------+\n|                         Time|ptnsym(root.test.d1.s4, "window"="5", "threshold"="0")|\n+-----------------------------+------------------------------------------------------+\n|2021-01-01T12:00:00.000+08:00|                                                   0.0|\n|2021-01-01T12:00:07.000+08:00|                                                   0.0|\n+-----------------------------+------------------------------------------------------+\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h2",{attrs:{id:"xcorr"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#xcorr"}},[s._v("#")]),s._v(" XCorr")]),s._v(" "),e("h3",{attrs:{id:"usage-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage-5"}},[s._v("#")]),s._v(" Usage")]),s._v(" "),e("p",[s._v("This function is used to calculate the cross correlation function of given two time series.\nFor discrete time series, cross correlation is given by\n$$CR(n) = \\frac{1}{N} \\sum_{m=1}^N S_1[m]S_2[m+n]$$\nwhich represent the similarities between two series with different index shifts.")]),s._v(" "),e("p",[e("strong",[s._v("Name:")]),s._v(" XCORR")]),s._v(" "),e("p",[e("strong",[s._v("Input Series:")]),s._v(" Only support two input numeric series. The type is INT32 / INT64 / FLOAT / DOUBLE.")]),s._v(" "),e("p",[e("strong",[s._v("Output Series:")]),s._v(" Output a single series with DOUBLE as datatype.\nThere are $2N-1$ data points in the series, the center of which represents the cross correlation\ncalculated with pre-aligned series(that is $CR(0)$ in the formula above),\nand the previous(or post) values represent those with shifting the latter series forward(or backward otherwise)\nuntil the two series are no longer overlapped(not included).\nIn short, the values of output series are given by(index starts from 1)\n$$OS[i] = CR(-N+i) = \\frac{1}{N} \\sum_{m=1}^{i} S_1[m]S_2[N-i+m],\\ if\\ i <= N$$\n$$OS[i] = CR(i-N) = \\frac{1}{N} \\sum_{m=1}^{2N-i} S_1[i-N+m]S_2[m],\\ if\\ i > N$$")]),s._v(" "),e("p",[e("strong",[s._v("Note:")])]),s._v(" "),e("ul",[e("li",[e("code",[s._v("null")]),s._v(" and "),e("code",[s._v("NaN")]),s._v(" values in the input series will be ignored and treated as 0.")])]),s._v(" "),e("h3",{attrs:{id:"examples-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-4"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),e("p",[s._v("Input series:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+-----------------------------+---------------+---------------+\n|                         Time|root.test.d1.s1|root.test.d1.s2|\n+-----------------------------+---------------+---------------+\n|2020-01-01T00:00:01.000+08:00|           null|              6|\n|2020-01-01T00:00:02.000+08:00|              2|              7|\n|2020-01-01T00:00:03.000+08:00|              3|            NaN|\n|2020-01-01T00:00:04.000+08:00|              4|              9|\n|2020-01-01T00:00:05.000+08:00|              5|             10|\n+-----------------------------+---------------+---------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("SQL for query:")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" xcorr"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" s2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2020")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("05")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("Output series:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+-----------------------------+---------------------------------------+\n|                         Time|xcorr(root.test.d1.s1, root.test.d1.s2)|\n+-----------------------------+---------------------------------------+\n|1970-01-01T08:00:00.001+08:00|                                    0.0|\n|1970-01-01T08:00:00.002+08:00|                                    4.0|\n|1970-01-01T08:00:00.003+08:00|                                    9.6|\n|1970-01-01T08:00:00.004+08:00|                                   13.4|\n|1970-01-01T08:00:00.005+08:00|                                   20.0|\n|1970-01-01T08:00:00.006+08:00|                                   15.6|\n|1970-01-01T08:00:00.007+08:00|                                    9.2|\n|1970-01-01T08:00:00.008+08:00|                                   11.8|\n|1970-01-01T08:00:00.009+08:00|                                    6.0|\n+-----------------------------+---------------------------------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);