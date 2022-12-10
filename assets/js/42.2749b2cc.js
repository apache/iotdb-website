(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{447:function(e,t,s){"use strict";s.r(t);var o=s(19),i=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"compression"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compression"}},[e._v("#")]),e._v(" Compression")]),e._v(" "),t("p",[e._v("When the time series is written and encoded as binary data according to the specified type, IoTDB compresses the data using compression technology to further improve space storage efficiency. Although both encoding and compression are designed to improve storage efficiency, encoding techniques are usually available only for specific data types (e.g., second-order differential encoding is only suitable for INT32 or INT64 data type, and storing floating-point numbers requires multiplying them by 10m to convert to integers), after which the data is converted to a binary stream. The compression method (SNAPPY) compresses the binary stream, so the use of the compression method is no longer limited by the data type.")]),e._v(" "),t("h2",{attrs:{id:"basic-compression-methods"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#basic-compression-methods"}},[e._v("#")]),e._v(" Basic Compression Methods")]),e._v(" "),t("p",[e._v("IoTDB allows you to specify the compression method of the column when creating a time series, and supports the following compression methods:")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("UNCOMPRESSED")])]),e._v(" "),t("li",[t("p",[e._v("SNAPPY")])]),e._v(" "),t("li",[t("p",[e._v("LZ4")])]),e._v(" "),t("li",[t("p",[e._v("GZIP")])])]),e._v(" "),t("p",[e._v("The specified syntax for compression is detailed in "),t("RouterLink",{attrs:{to:"/UserGuide/Master/Reference/SQL-Reference.html"}},[e._v("Create Timeseries Statement")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"compression-ratio-statistics"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compression-ratio-statistics"}},[e._v("#")]),e._v(" Compression Ratio Statistics")]),e._v(" "),t("p",[e._v("Compression ratio statistics file: data/system/compression_ratio/Ratio-{ratio_sum}-{memtable_flush_time}")]),e._v(" "),t("ul",[t("li",[e._v("ratio_sum: sum of memtable compression ratios")]),e._v(" "),t("li",[e._v("memtable_flush_time: memtable flush times")])]),e._v(" "),t("p",[e._v("The average compression ratio can be calculated by "),t("code",[e._v("ratio_sum / memtable_flush_time")])])])}),[],!1,null,null,null);t.default=i.exports}}]);