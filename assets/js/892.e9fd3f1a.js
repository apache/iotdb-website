(window.webpackJsonp=window.webpackJsonp||[]).push([[892],{1294:function(t,e,_){"use strict";_.r(e);var v=_(19),a=Object(v.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"编码方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编码方式"}},[t._v("#")]),t._v(" 编码方式")]),t._v(" "),e("p",[t._v("为了提高数据的存储效率，需要在数据写入的过程中对数据进行编码，从而减少磁盘空间的使用量。在写数据以及读数据的过程中都能够减少I/O操作的数据量从而提高性能。IoTDB支持多种针对不同类型的数据的编码方法：")]),t._v(" "),e("ul",[e("li",[t._v("PLAIN编码（PLAIN）")])]),t._v(" "),e("p",[t._v("PLAIN编码，默认的编码方式，即不编码，支持多种数据类型，压缩和解压缩的时间效率较高，但空间存储效率较低。")]),t._v(" "),e("ul",[e("li",[t._v("二阶差分编码（TS_2DIFF）")])]),t._v(" "),e("p",[t._v("二阶差分编码，比较适合编码单调递增或者递减的序列数据，不适合编码波动较大的数据。")]),t._v(" "),e("ul",[e("li",[t._v("游程编码（RLE）")])]),t._v(" "),e("p",[t._v("游程编码，比较适合存储某些整数值连续出现的序列，不适合编码大部分情况下前后值不一样的序列数据。")]),t._v(" "),e("p",[t._v("游程编码也可用于对浮点数进行编码，但在创建时间序列的时候需指定保留小数位数（MAX_POINT_NUMBER，具体指定方式参见本文"),e("RouterLink",{attrs:{to:"/zh/UserGuide/V0.12.x/Operation Manual/SQL Reference.html"}},[t._v("SQL 参考文档")]),t._v("）。比较适合存储某些浮点数值连续出现的序列数据，不适合存储对小数点后精度要求较高以及前后波动较大的序列数据。")],1),t._v(" "),e("blockquote",[e("p",[t._v("游程编码（RLE）和二阶差分编码（TS_2DIFF）对 float 和 double 的编码是有精度限制的，默认保留2位小数。推荐使用 GORILLA。")])]),t._v(" "),e("ul",[e("li",[t._v("GORILLA编码（GORILLA）")])]),t._v(" "),e("p",[t._v("GORILLA编码是一种无损编码，它比较适合编码前后值比较接近的数值序列，不适合编码前后波动较大的数据。")]),t._v(" "),e("p",[t._v("当前系统中存在两个版本的GORILLA编码实现，推荐使用"),e("code",[t._v("GORILLA")]),t._v("，不推荐使用"),e("code",[t._v("GORILLA_V1")]),t._v("（已过时）。")]),t._v(" "),e("p",[t._v("使用限制：使用Gorilla编码INT32数据时，需要保证序列中不存在值为"),e("code",[t._v("Integer.MIN_VALUE")]),t._v("的数据点；使用Gorilla编码INT64数据时，需要保证序列中不存在值为"),e("code",[t._v("Long.MIN_VALUE")]),t._v("的数据点。")]),t._v(" "),e("h3",{attrs:{id:"数据类型与编码的对应关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据类型与编码的对应关系"}},[t._v("#")]),t._v(" 数据类型与编码的对应关系")]),t._v(" "),e("p",[t._v("前文介绍的四种编码适用于不同的数据类型，若对应关系错误，则无法正确创建时间序列。数据类型与支持其编码的编码方式对应关系总结如表格2-3。")]),t._v(" "),e("div",{staticStyle:{"text-align":"center"}},[t._v(" **表格2-3 数据类型与支持其编码的对应关系**\n"),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("数据类型")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("支持的编码")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("BOOLEAN")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("PLAIN, RLE")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("INT32")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("PLAIN, RLE, TS_2DIFF, GORILLA")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("INT64")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("PLAIN, RLE, TS_2DIFF, GORILLA")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("FLOAT")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("PLAIN, RLE, TS_2DIFF, GORILLA")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("DOUBLE")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("PLAIN, RLE, TS_2DIFF, GORILLA")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("TEXT")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("PLAIN")])])])])])])}),[],!1,null,null,null);e.default=a.exports}}]);