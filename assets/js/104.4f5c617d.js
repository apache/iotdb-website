(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{729:function(e,t,a){"use strict";a.r(t);var s=a(83),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"schema-template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#schema-template"}},[e._v("#")]),e._v(" Schema Template")]),e._v(" "),a("p",[e._v("IoTDB supports the schema template function, enabling different entities of the same type to share metadata, reduce the memory usage of metadata, and simplify the management of numerous entities and measurements.")]),e._v(" "),a("h3",{attrs:{id:"create-schema-template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-schema-template"}},[e._v("#")]),e._v(" Create Schema Template")]),e._v(" "),a("p",[e._v("The SQL Statement for creating schema template is as follow:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("IoTDB> create schema template temp1(GPS(lat FLOAT encoding=Gorilla, lon FLOAT encoding=Gorilla compression=SNAPPY), status BOOLEAN encoding=PLAIN compression=SNAPPY)\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("The"),a("code",[e._v("lat")]),e._v(" and "),a("code",[e._v("lon")]),e._v(" measurements under the "),a("code",[e._v("GPS")]),e._v(" device are aligned.")]),e._v(" "),a("h3",{attrs:{id:"set-schema-template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-schema-template"}},[e._v("#")]),e._v(" Set Schema Template")]),e._v(" "),a("p",[e._v("The SQL Statement for setting schema template is as follow:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("IoTDB> set schema template temp1 to root.ln.wf01\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("After setting the schema template, you can insert data into the timeseries. For example, suppose there's a storage group root.ln and temp1 has been set to root.ln.wf01, then timeseries like root.ln.wf01.GPS.lat and root.ln.wf01.status are available and data points can be inserted.")]),e._v(" "),a("p",[a("strong",[e._v("Attention")]),e._v(": Before inserting data, timeseries defined by the schema template will not be created. You can use the following SQL statement to create the timeseries before inserting data:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("IoTDB> create timeseries of schema template on root.ln.wf01\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h3",{attrs:{id:"uset-schema-template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#uset-schema-template"}},[e._v("#")]),e._v(" Uset Schema Template")]),e._v(" "),a("p",[e._v("The SQL Statement for unsetting schema template is as follow:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("IoTDB> unset schema template temp1 from root.beijing\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[a("strong",[e._v("Attention")]),e._v(": Unsetting the template from entities, which have already inserted records using the template, is not supported.")])])}),[],!1,null,null,null);t.default=n.exports}}]);