(window.webpackJsonp=window.webpackJsonp||[]).push([[820],{1223:function(t,e,r){"use strict";r.r(e);var s=r(19),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"数据类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),e("p",[t._v("IoTDB支持:")]),t._v(" "),e("ul",[e("li",[t._v("BOOLEAN（布尔值）")]),t._v(" "),e("li",[t._v("INT32（整型）")]),t._v(" "),e("li",[t._v("INT64（长整型）")]),t._v(" "),e("li",[t._v("FLOAT（单精度浮点数）")]),t._v(" "),e("li",[t._v("DOUBLE（双精度浮点数）")]),t._v(" "),e("li",[t._v("TEXT（字符串）")])]),t._v(" "),e("p",[t._v("一共六种数据类型。")]),t._v(" "),e("p",[t._v("其中"),e("strong",[t._v("FLOAT")]),t._v("与"),e("strong",[t._v("DOUBLE")]),t._v("类型的序列，如果编码方式采用"),e("RouterLink",{attrs:{to:"/zh/UserGuide/V0.11.x/Concept/Encoding.html"}},[t._v("RLE")]),t._v("或"),e("RouterLink",{attrs:{to:"/zh/UserGuide/V0.11.x/Concept/Encoding.html"}},[t._v("TS_2DIFF")]),t._v("可以指定MAX_POINT_NUMBER，该项为浮点数的小数点后位数，具体指定方式请参见本文"),e("RouterLink",{attrs:{to:"/zh/UserGuide/V0.11.x/Operation Manual/SQL Reference.html"}},[t._v("第5.4节")]),t._v("，若不指定则系统会根据配置文件"),e("code",[t._v("iotdb-engine.properties")]),t._v("文件中的"),e("RouterLink",{attrs:{to:"/zh/UserGuide/V0.11.x/Server/Config Manual.html"}},[t._v("float_precision项")]),t._v("配置。")],1),t._v(" "),e("p",[t._v("当系统中用户输入的数据类型与该时间序列的数据类型不对应时，系统会提醒类型错误，如下所示，二阶差分编码不支持布尔类型：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("IoTDB> create timeseries root.ln.wf02.wt02.status WITH DATATYPE=BOOLEAN, ENCODING=TS_2DIFF\nerror: encoding TS_2DIFF does not support BOOLEAN\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);