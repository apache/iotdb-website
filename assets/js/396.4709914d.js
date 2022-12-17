(window.webpackJsonp=window.webpackJsonp||[]).push([[396],{799:function(s,e,a){"use strict";a.r(e);var t=a(19),n=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"data-repairing"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#data-repairing"}},[s._v("#")]),s._v(" Data Repairing")]),s._v(" "),e("h2",{attrs:{id:"timestamprepair"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#timestamprepair"}},[s._v("#")]),s._v(" TimestampRepair")]),s._v(" "),e("p",[s._v("This function is used for timestamp repair.\nAccording to the given standard time interval,\nthe method of minimizing the repair cost is adopted.\nBy fine-tuning the timestamps,\nthe original data with unstable timestamp interval is repaired to strictly equispaced data.\nIf no standard time interval is given,\nthis function will use the "),e("strong",[s._v("median")]),s._v(", "),e("strong",[s._v("mode")]),s._v(" or "),e("strong",[s._v("cluster")]),s._v(" of the time interval to estimate the standard time interval.")]),s._v(" "),e("p",[e("strong",[s._v("Name:")]),s._v(" TIMESTAMPREPAIR")]),s._v(" "),e("p",[e("strong",[s._v("Input Series:")]),s._v(" Only support a single input series. The data type is INT32 / INT64 / FLOAT / DOUBLE.")]),s._v(" "),e("p",[e("strong",[s._v("Parameters:")])]),s._v(" "),e("ul",[e("li",[e("code",[s._v("interval")]),s._v(": The standard time interval whose unit is millisecond. It is a positive integer. By default, it will be estimated according to the given method.")]),s._v(" "),e("li",[e("code",[s._v("method")]),s._v(": The method to estimate the standard time interval, which is 'median', 'mode' or 'cluster'. This parameter is only valid when "),e("code",[s._v("interval")]),s._v(" is not given. By default, median will be used.")])]),s._v(" "),e("p",[e("strong",[s._v("Output Series:")]),s._v(" Output a single series. The type is the same as the input. This series is the input after repairing.")]),s._v(" "),e("h3",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),e("h4",{attrs:{id:"manually-specify-the-standard-time-interval"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#manually-specify-the-standard-time-interval"}},[s._v("#")]),s._v(" Manually Specify the Standard Time Interval")]),s._v(" "),e("p",[s._v("When "),e("code",[s._v("interval")]),s._v(" is given, this function repairs according to the given standard time interval.")]),s._v(" "),e("p",[s._v("Input series:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+-----------------------------+---------------+\n|                         Time|root.test.d2.s1|\n+-----------------------------+---------------+\n|2021-07-01T12:00:00.000+08:00|            1.0|\n|2021-07-01T12:00:10.000+08:00|            2.0|\n|2021-07-01T12:00:19.000+08:00|            3.0|\n|2021-07-01T12:00:30.000+08:00|            4.0|\n|2021-07-01T12:00:40.000+08:00|            5.0|\n|2021-07-01T12:00:50.000+08:00|            6.0|\n|2021-07-01T12:01:01.000+08:00|            7.0|\n|2021-07-01T12:01:11.000+08:00|            8.0|\n|2021-07-01T12:01:21.000+08:00|            9.0|\n|2021-07-01T12:01:31.000+08:00|           10.0|\n+-----------------------------+---------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("p",[s._v("SQL for query:")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" timestamprepair"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'interval'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'10000'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("Output series:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('+-----------------------------+----------------------------------------------------+\n|                         Time|timestamprepair(root.test.d2.s1, "interval"="10000")|\n+-----------------------------+----------------------------------------------------+\n|2021-07-01T12:00:00.000+08:00|                                                 1.0|\n|2021-07-01T12:00:10.000+08:00|                                                 2.0|\n|2021-07-01T12:00:20.000+08:00|                                                 3.0|\n|2021-07-01T12:00:30.000+08:00|                                                 4.0|\n|2021-07-01T12:00:40.000+08:00|                                                 5.0|\n|2021-07-01T12:00:50.000+08:00|                                                 6.0|\n|2021-07-01T12:01:00.000+08:00|                                                 7.0|\n|2021-07-01T12:01:10.000+08:00|                                                 8.0|\n|2021-07-01T12:01:20.000+08:00|                                                 9.0|\n|2021-07-01T12:01:30.000+08:00|                                                10.0|\n+-----------------------------+----------------------------------------------------+\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("h4",{attrs:{id:"automatically-estimate-the-standard-time-interval"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#automatically-estimate-the-standard-time-interval"}},[s._v("#")]),s._v(" Automatically Estimate the Standard Time Interval")]),s._v(" "),e("p",[s._v("When "),e("code",[s._v("interval")]),s._v(" is default, this function estimates the standard time interval.")]),s._v(" "),e("p",[s._v("Input series is the same as above, the SQL for query is shown below:")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" timestamprepair"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("Output series:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+-----------------------------+--------------------------------+\n|                         Time|timestamprepair(root.test.d2.s1)|\n+-----------------------------+--------------------------------+\n|2021-07-01T12:00:00.000+08:00|                             1.0|\n|2021-07-01T12:00:10.000+08:00|                             2.0|\n|2021-07-01T12:00:20.000+08:00|                             3.0|\n|2021-07-01T12:00:30.000+08:00|                             4.0|\n|2021-07-01T12:00:40.000+08:00|                             5.0|\n|2021-07-01T12:00:50.000+08:00|                             6.0|\n|2021-07-01T12:01:00.000+08:00|                             7.0|\n|2021-07-01T12:01:10.000+08:00|                             8.0|\n|2021-07-01T12:01:20.000+08:00|                             9.0|\n|2021-07-01T12:01:30.000+08:00|                            10.0|\n+-----------------------------+--------------------------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("h2",{attrs:{id:"valuefill"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#valuefill"}},[s._v("#")]),s._v(" ValueFill")]),s._v(" "),e("h3",{attrs:{id:"usage"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[s._v("#")]),s._v(" Usage")]),s._v(" "),e("p",[s._v("This function is used to impute time series. Several methods are supported.")]),s._v(" "),e("p",[e("strong",[s._v("Name")]),s._v(": ValueFill\n"),e("strong",[s._v("Input Series:")]),s._v(" Only support a single input series. The type is INT32 / INT64 / FLOAT / DOUBLE.")]),s._v(" "),e("p",[e("strong",[s._v("Parameters:")])]),s._v(" "),e("ul",[e("li",[e("code",[s._v("method")]),s._v(': {"mean", "previous", "linear", "likelihood", "AR", "MA", "SCREEN"}, default "linear".\nMethod to use for imputation in series. "mean": use global mean value to fill holes; "previous": propagate last valid observation forward to next valid. "linear": simplest interpolation method; "likelihood":Maximum likelihood estimation based on the normal distribution of speed; "AR": auto regression; "MA": moving average; "SCREEN": speed constraint.')])]),s._v(" "),e("p",[e("strong",[s._v("Output Series:")]),s._v(" Output a single series. The type is the same as the input. This series is the input after repairing.")]),s._v(" "),e("p",[e("strong",[s._v("Note:")]),s._v(" AR method use AR(1) model. Input value should be auto-correlated, or the function would output a single point (0, 0.0).")]),s._v(" "),e("h3",{attrs:{id:"examples-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-2"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),e("h4",{attrs:{id:"fill-with-linear"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#fill-with-linear"}},[s._v("#")]),s._v(" Fill with linear")]),s._v(" "),e("p",[s._v("When "),e("code",[s._v("method")]),s._v(' is "linear" or the default, Screen method is used to impute.')]),s._v(" "),e("p",[s._v("Input series:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+-----------------------------+---------------+\n|                         Time|root.test.d2.s1|\n+-----------------------------+---------------+\n|2020-01-01T00:00:02.000+08:00|            NaN|\n|2020-01-01T00:00:03.000+08:00|          101.0|\n|2020-01-01T00:00:04.000+08:00|          102.0|\n|2020-01-01T00:00:06.000+08:00|          104.0|\n|2020-01-01T00:00:08.000+08:00|          126.0|\n|2020-01-01T00:00:10.000+08:00|          108.0|\n|2020-01-01T00:00:14.000+08:00|            NaN|\n|2020-01-01T00:00:15.000+08:00|          113.0|\n|2020-01-01T00:00:16.000+08:00|          114.0|\n|2020-01-01T00:00:18.000+08:00|          116.0|\n|2020-01-01T00:00:20.000+08:00|            NaN|\n|2020-01-01T00:00:22.000+08:00|            NaN|\n|2020-01-01T00:00:26.000+08:00|          124.0|\n|2020-01-01T00:00:28.000+08:00|          126.0|\n|2020-01-01T00:00:30.000+08:00|          128.0|\n+-----------------------------+---------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])]),e("p",[s._v("SQL for query:")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" valuefill"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("Output series:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+-----------------------------+-----------------------+\n|                         Time|valuefill(root.test.d2)|\n+-----------------------------+-----------------------+\n|2020-01-01T00:00:02.000+08:00|                    NaN|\n|2020-01-01T00:00:03.000+08:00|                  101.0|\n|2020-01-01T00:00:04.000+08:00|                  102.0|\n|2020-01-01T00:00:06.000+08:00|                  104.0|\n|2020-01-01T00:00:08.000+08:00|                  126.0|\n|2020-01-01T00:00:10.000+08:00|                  108.0|\n|2020-01-01T00:00:14.000+08:00|                  108.0|\n|2020-01-01T00:00:15.000+08:00|                  113.0|\n|2020-01-01T00:00:16.000+08:00|                  114.0|\n|2020-01-01T00:00:18.000+08:00|                  116.0|\n|2020-01-01T00:00:20.000+08:00|                  118.7|\n|2020-01-01T00:00:22.000+08:00|                  121.3|\n|2020-01-01T00:00:26.000+08:00|                  124.0|\n|2020-01-01T00:00:28.000+08:00|                  126.0|\n|2020-01-01T00:00:30.000+08:00|                  128.0|\n+-----------------------------+-----------------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])]),e("h4",{attrs:{id:"previous-fill"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#previous-fill"}},[s._v("#")]),s._v(" Previous Fill")]),s._v(" "),e("p",[s._v("When "),e("code",[s._v("method")]),s._v(' is "previous", previous method is used.')]),s._v(" "),e("p",[s._v("Input series is the same as above, the SQL for query is shown below:")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" valuefill"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"method"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"previous"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("Output series:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('+-----------------------------+-------------------------------------------+\n|                         Time|valuefill(root.test.d2,"method"="previous")|\n+-----------------------------+-------------------------------------------+\n|2020-01-01T00:00:02.000+08:00|                                        NaN|\n|2020-01-01T00:00:03.000+08:00|                                      101.0|\n|2020-01-01T00:00:04.000+08:00|                                      102.0|\n|2020-01-01T00:00:06.000+08:00|                                      104.0|\n|2020-01-01T00:00:08.000+08:00|                                      126.0|\n|2020-01-01T00:00:10.000+08:00|                                      108.0|\n|2020-01-01T00:00:14.000+08:00|                                      110.5|\n|2020-01-01T00:00:15.000+08:00|                                      113.0|\n|2020-01-01T00:00:16.000+08:00|                                      114.0|\n|2020-01-01T00:00:18.000+08:00|                                      116.0|\n|2020-01-01T00:00:20.000+08:00|                                      116.0|\n|2020-01-01T00:00:22.000+08:00|                                      116.0|\n|2020-01-01T00:00:26.000+08:00|                                      124.0|\n|2020-01-01T00:00:28.000+08:00|                                      126.0|\n|2020-01-01T00:00:30.000+08:00|                                      128.0|\n+-----------------------------+-------------------------------------------+\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])]),e("h2",{attrs:{id:"valuerepair"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#valuerepair"}},[s._v("#")]),s._v(" ValueRepair")]),s._v(" "),e("h3",{attrs:{id:"usage-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage-2"}},[s._v("#")]),s._v(" Usage")]),s._v(" "),e("p",[s._v("This function is used to repair the value of the time series.\nCurrently, two methods are supported:\n"),e("strong",[s._v("Screen")]),s._v(" is a method based on speed threshold, which makes all speeds meet the threshold requirements under the premise of minimum changes;\n"),e("strong",[s._v("LsGreedy")]),s._v(" is a method based on speed change likelihood, which models speed changes as Gaussian distribution, and uses a greedy algorithm to maximize the likelihood.")]),s._v(" "),e("p",[e("strong",[s._v("Name:")]),s._v(" VALUEREPAIR")]),s._v(" "),e("p",[e("strong",[s._v("Input Series:")]),s._v(" Only support a single input series. The type is INT32 / INT64 / FLOAT / DOUBLE.")]),s._v(" "),e("p",[e("strong",[s._v("Parameters:")])]),s._v(" "),e("ul",[e("li",[e("code",[s._v("method")]),s._v(": The method used to repair, which is 'Screen' or 'LsGreedy'. By default, Screen is used.")]),s._v(" "),e("li",[e("code",[s._v("minSpeed")]),s._v(": This parameter is only valid with Screen. It is the speed threshold. Speeds below it will be regarded as outliers. By default, it is the median minus 3 times of median absolute deviation.")]),s._v(" "),e("li",[e("code",[s._v("maxSpeed")]),s._v(": This parameter is only valid with Screen. It is the speed threshold. Speeds above it will be regarded as outliers. By default, it is the median plus 3 times of median absolute deviation.")]),s._v(" "),e("li",[e("code",[s._v("center")]),s._v(": This parameter is only valid with LsGreedy. It is the center of the Gaussian distribution of speed changes. By default, it is 0.")]),s._v(" "),e("li",[e("code",[s._v("sigma")]),s._v(": This parameter is only valid with LsGreedy. It is the standard deviation of the Gaussian distribution of speed changes. By default, it is the median absolute deviation.")])]),s._v(" "),e("p",[e("strong",[s._v("Output Series:")]),s._v(" Output a single series. The type is the same as the input. This series is the input after repairing.")]),s._v(" "),e("p",[e("strong",[s._v("Note:")]),s._v(" "),e("code",[s._v("NaN")]),s._v(" will be filled with linear interpolation before repairing.")]),s._v(" "),e("h3",{attrs:{id:"examples-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-3"}},[s._v("#")]),s._v(" Examples")]),s._v(" "),e("h4",{attrs:{id:"repair-with-screen"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#repair-with-screen"}},[s._v("#")]),s._v(" Repair with Screen")]),s._v(" "),e("p",[s._v("When "),e("code",[s._v("method")]),s._v(" is 'Screen' or the default, Screen method is used.")]),s._v(" "),e("p",[s._v("Input series:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+-----------------------------+---------------+\n|                         Time|root.test.d2.s1|\n+-----------------------------+---------------+\n|2020-01-01T00:00:02.000+08:00|          100.0|\n|2020-01-01T00:00:03.000+08:00|          101.0|\n|2020-01-01T00:00:04.000+08:00|          102.0|\n|2020-01-01T00:00:06.000+08:00|          104.0|\n|2020-01-01T00:00:08.000+08:00|          126.0|\n|2020-01-01T00:00:10.000+08:00|          108.0|\n|2020-01-01T00:00:14.000+08:00|          112.0|\n|2020-01-01T00:00:15.000+08:00|          113.0|\n|2020-01-01T00:00:16.000+08:00|          114.0|\n|2020-01-01T00:00:18.000+08:00|          116.0|\n|2020-01-01T00:00:20.000+08:00|          118.0|\n|2020-01-01T00:00:22.000+08:00|          100.0|\n|2020-01-01T00:00:26.000+08:00|          124.0|\n|2020-01-01T00:00:28.000+08:00|          126.0|\n|2020-01-01T00:00:30.000+08:00|            NaN|\n+-----------------------------+---------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])]),e("p",[s._v("SQL for query:")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" valuerepair"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("Output series:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+-----------------------------+----------------------------+\n|                         Time|valuerepair(root.test.d2.s1)|\n+-----------------------------+----------------------------+\n|2020-01-01T00:00:02.000+08:00|                       100.0|\n|2020-01-01T00:00:03.000+08:00|                       101.0|\n|2020-01-01T00:00:04.000+08:00|                       102.0|\n|2020-01-01T00:00:06.000+08:00|                       104.0|\n|2020-01-01T00:00:08.000+08:00|                       106.0|\n|2020-01-01T00:00:10.000+08:00|                       108.0|\n|2020-01-01T00:00:14.000+08:00|                       112.0|\n|2020-01-01T00:00:15.000+08:00|                       113.0|\n|2020-01-01T00:00:16.000+08:00|                       114.0|\n|2020-01-01T00:00:18.000+08:00|                       116.0|\n|2020-01-01T00:00:20.000+08:00|                       118.0|\n|2020-01-01T00:00:22.000+08:00|                       120.0|\n|2020-01-01T00:00:26.000+08:00|                       124.0|\n|2020-01-01T00:00:28.000+08:00|                       126.0|\n|2020-01-01T00:00:30.000+08:00|                       128.0|\n+-----------------------------+----------------------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])]),e("h4",{attrs:{id:"repair-with-lsgreedy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#repair-with-lsgreedy"}},[s._v("#")]),s._v(" Repair with LsGreedy")]),s._v(" "),e("p",[s._v("When "),e("code",[s._v("method")]),s._v(" is 'LsGreedy', LsGreedy method is used.")]),s._v(" "),e("p",[s._v("Input series is the same as above, the SQL for query is shown below:")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" valuerepair"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'method'")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'LsGreedy'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("Output series:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('+-----------------------------+-------------------------------------------------+\n|                         Time|valuerepair(root.test.d2.s1, "method"="LsGreedy")|\n+-----------------------------+-------------------------------------------------+\n|2020-01-01T00:00:02.000+08:00|                                            100.0|\n|2020-01-01T00:00:03.000+08:00|                                            101.0|\n|2020-01-01T00:00:04.000+08:00|                                            102.0|\n|2020-01-01T00:00:06.000+08:00|                                            104.0|\n|2020-01-01T00:00:08.000+08:00|                                            106.0|\n|2020-01-01T00:00:10.000+08:00|                                            108.0|\n|2020-01-01T00:00:14.000+08:00|                                            112.0|\n|2020-01-01T00:00:15.000+08:00|                                            113.0|\n|2020-01-01T00:00:16.000+08:00|                                            114.0|\n|2020-01-01T00:00:18.000+08:00|                                            116.0|\n|2020-01-01T00:00:20.000+08:00|                                            118.0|\n|2020-01-01T00:00:22.000+08:00|                                            120.0|\n|2020-01-01T00:00:26.000+08:00|                                            124.0|\n|2020-01-01T00:00:28.000+08:00|                                            126.0|\n|2020-01-01T00:00:30.000+08:00|                                            128.0|\n+-----------------------------+-------------------------------------------------+\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);