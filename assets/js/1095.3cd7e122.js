(window.webpackJsonp=window.webpackJsonp||[]).push([[1095],{1498:function(t,e,_){"use strict";_.r(e);var a=_(19),s=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"压缩方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#压缩方式"}},[t._v("#")]),t._v(" 压缩方式")]),t._v(" "),e("p",[t._v("当时间序列写入并按照指定的类型编码为二进制数据后，IoTDB 会使用压缩技术对该数据进行压缩，进一步提升空间存储效率。虽然编码和压缩都旨在提升存储效率，但编码技术通常只适合特定的数据类型（如二阶差分编码只适合与 INT32 或者 INT64 编码，存储浮点数需要先将他们乘以 10m 以转换为整数），然后将它们转换为二进制流。压缩方式（SNAPPY）针对二进制流进行压缩，因此压缩方式的使用不再受数据类型的限制。")]),t._v(" "),e("h2",{attrs:{id:"基本压缩方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本压缩方式"}},[t._v("#")]),t._v(" 基本压缩方式")]),t._v(" "),e("p",[t._v("IoTDB 允许在创建一个时间序列的时候指定该列的压缩方式。现阶段 IoTDB 支持以下几种压缩方式：")]),t._v(" "),e("ul",[e("li",[t._v("UNCOMPRESSED（不压缩）")]),t._v(" "),e("li",[t._v("SNAPPY 压缩")]),t._v(" "),e("li",[t._v("LZ4 压缩")]),t._v(" "),e("li",[t._v("GZIP 压缩")])]),t._v(" "),e("p",[t._v("压缩方式的指定语法详见本文 "),e("RouterLink",{attrs:{to:"/zh/UserGuide/V1.0.x/Reference/SQL-Reference.html"}},[t._v("SQL 参考文档")]),t._v("。")],1),t._v(" "),e("h2",{attrs:{id:"压缩比统计信息"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#压缩比统计信息"}},[t._v("#")]),t._v(" 压缩比统计信息")]),t._v(" "),e("p",[t._v("压缩比统计信息文件：data/system/compression_ratio/Ratio-{ratio_sum}-{memtable_flush_time}")]),t._v(" "),e("ul",[e("li",[t._v("ratio_sum: memtable压缩比的总和")]),t._v(" "),e("li",[t._v("memtable_flush_time: memtable刷盘的总次数")])]),t._v(" "),e("p",[t._v("通过 "),e("code",[t._v("ratio_sum / memtable_flush_time")]),t._v(" 可以计算出平均压缩比")])])}),[],!1,null,null,null);e.default=s.exports}}]);