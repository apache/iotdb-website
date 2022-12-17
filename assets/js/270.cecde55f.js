(window.webpackJsonp=window.webpackJsonp||[]).push([[270],{673:function(e,s,t){"use strict";t.r(s);var n=t(19),a=Object(n.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"sdt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sdt"}},[e._v("#")]),e._v(" SDT")]),e._v(" "),s("p",[e._v("The Swinging Door Trending (SDT) algorithm is a lossy compression algorithm.\nSDT has low computational complexity and uses a linear trend to represent a quantity of data.")]),e._v(" "),s("p",[e._v("In IoTDB SDT compresses and discards data when flushing into the disk.")]),e._v(" "),s("p",[e._v("IoTDB allows you to specify the properties of SDT when creating a time series, and supports three properties:")]),e._v(" "),s("ul",[s("li",[e._v("CompDev (Compression Deviation)")])]),e._v(" "),s("p",[e._v("CompDev is the most important parameter in SDT that represents the maximum difference between the\ncurrent sample and the current linear trend. CompDev needs to be greater than 0 to perform compression.")]),e._v(" "),s("ul",[s("li",[e._v("CompMinTime (Compression Minimum Time Interval)")])]),e._v(" "),s("p",[e._v("CompMinTime is a parameter measures the time distance between two stored data points, which is used for noisy reduction.\nIf the time interval between the current point and the last stored point is less than or equal to its value,\ncurrent point will NOT be stored regardless of compression deviation.\nThe default value is 0 with time unit ms.")]),e._v(" "),s("ul",[s("li",[e._v("CompMaxTime (Compression Maximum Time Interval)")])]),e._v(" "),s("p",[e._v("CompMaxTime is a parameter measure the time distance between two stored data points.\nIf the time interval between the current point and the last stored point is greater than or equal to its value,\ncurrent point will be stored regardless of compression deviation.\nThe default value is 9,223,372,036,854,775,807 with time unit ms.")]),e._v(" "),s("p",[e._v("The specified syntax for SDT is detailed in "),s("RouterLink",{attrs:{to:"/UserGuide/V0.12.x/Appendix/SQL-Reference.html"}},[e._v("Create Timeseries Statement")]),e._v(".")],1),e._v(" "),s("p",[e._v("Supported datatypes:")]),e._v(" "),s("ul",[s("li",[e._v("INT32 (Integer)")]),e._v(" "),s("li",[e._v("INT64 (Long Integer)")]),e._v(" "),s("li",[e._v("FLOAT (Single Precision Floating Point)")]),e._v(" "),s("li",[e._v("DOUBLE (Double Precision Floating Point)")])]),e._v(" "),s("p",[e._v("The following is an example of using SDT compression.")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB> CREATE TIMESERIES root.sg1.d0.s0 WITH DATATYPE=INT32,ENCODING=PLAIN,LOSS=SDT,COMPDEV=2\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Prior to flushing and SDT compression, the results are shown below:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB> SELECT s0 FROM root.sg1.d0\n+-----------------------------+--------------+\n|                         Time|root.sg1.d0.s0|\n+-----------------------------+--------------+\n|2017-11-01T00:06:00.001+08:00|             1|\n|2017-11-01T00:06:00.002+08:00|             1|\n|2017-11-01T00:06:00.003+08:00|             1|\n|2017-11-01T00:06:00.004+08:00|             1|\n|2017-11-01T00:06:00.005+08:00|             1|\n|2017-11-01T00:06:00.006+08:00|             1|\n|2017-11-01T00:06:00.007+08:00|             1|\n|2017-11-01T00:06:00.015+08:00|            10|\n|2017-11-01T00:06:00.016+08:00|            20|\n|2017-11-01T00:06:00.017+08:00|             1|\n|2017-11-01T00:06:00.018+08:00|            30|\n+-----------------------------+--------------+\nTotal line number = 11\nIt costs 0.008s\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br")])]),s("p",[e._v("After flushing and SDT compression, the results are shown below:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB> FLUSH\nIoTDB> SELECT s0 FROM root.sg1.d0\n+-----------------------------+--------------+\n|                         Time|root.sg1.d0.s0|\n+-----------------------------+--------------+\n|2017-11-01T00:06:00.001+08:00|             1|\n|2017-11-01T00:06:00.007+08:00|             1|\n|2017-11-01T00:06:00.015+08:00|            10|\n|2017-11-01T00:06:00.016+08:00|            20|\n|2017-11-01T00:06:00.017+08:00|             1|\n+-----------------------------+--------------+\nTotal line number = 5\nIt costs 0.044s\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br")])]),s("p",[e._v("SDT takes effect when flushing to the disk. The SDT algorithm always stores the first point and does not store the last point.")]),e._v(" "),s("p",[e._v("The data in [2017-11-01T00:06:00.001, 2017-11-01T00:06:00.007] is within the compression deviation thus discarded.\nThe data point at time 2017-11-01T00:06:00.007 is stored because the next data point at time 2017-11-01T00:06:00.015\nexceeds compression deviation. When a data point exceeds the compression deviation, SDT stores the last read\npoint and updates the upper and lower boundaries. The last point at time 2017-11-01T00:06:00.018 is not stored.")])])}),[],!1,null,null,null);s.default=a.exports}}]);