(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{701:function(e,t,s){"use strict";s.r(t);var o=s(71),i=Object(o.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"compression"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compression"}},[e._v("#")]),e._v(" Compression")]),e._v(" "),s("p",[e._v("When the time series is written and encoded as binary data according to the specified type, IoTDB compresses the data using compression technology to further improve space storage efficiency. Although both encoding and compression are designed to improve storage efficiency, encoding techniques are usually only available for specific data types (e.g., second-order differential encoding is only suitable for INT32 or INT64 data type, and storing floating-point numbers requires multiplying them by 10m to convert to integers), after which the data is converted to a binary stream. The compression method (SNAPPY) compresses the binary stream, so the use of the compression method is no longer limited by the data type.")]),e._v(" "),s("p",[e._v("IoTDB allows you to specify the compression method of the column when creating a time series, and now supports two compression methods:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("UNCOMPRESSED")])]),e._v(" "),s("li",[s("p",[e._v("SNAPPY")])])]),e._v(" "),s("p",[e._v("The specified syntax for compression is detailed in "),s("RouterLink",{attrs:{to:"/UserGuide/Master/Master/Master/Master/Operation Manual/SQL Reference.html"}},[e._v("Create Timeseries Statement")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=i.exports}}]);