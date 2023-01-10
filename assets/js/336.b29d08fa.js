(window.webpackJsonp=window.webpackJsonp||[]).push([[336],{741:function(t,e,s){"use strict";s.r(e);var a=s(19),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"nifi-iotdb-bundle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nifi-iotdb-bundle"}},[t._v("#")]),t._v(" nifi-iotdb-bundle")]),t._v(" "),e("h2",{attrs:{id:"apache-nifi-introduction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apache-nifi-introduction"}},[t._v("#")]),t._v(" Apache NiFi Introduction")]),t._v(" "),e("p",[t._v("Apache NiFi is an easy to use, powerful, and reliable system to process and distribute data.")]),t._v(" "),e("p",[t._v("Apache NiFi supports powerful and scalable directed graphs of data routing, transformation, and system mediation logic.")]),t._v(" "),e("p",[t._v("Apache NiFi includes the following capabilities:")]),t._v(" "),e("ul",[e("li",[t._v("Browser-based user interface\n"),e("ul",[e("li",[t._v("Seamless experience for design, control, feedback, and monitoring")])])]),t._v(" "),e("li",[t._v("Data provenance tracking\n"),e("ul",[e("li",[t._v("Complete lineage of information from beginning to end")])])]),t._v(" "),e("li",[t._v("Extensive configuration\n"),e("ul",[e("li",[t._v("Loss-tolerant and guaranteed delivery")]),t._v(" "),e("li",[t._v("Low latency and high throughput")]),t._v(" "),e("li",[t._v("Dynamic prioritization")]),t._v(" "),e("li",[t._v("Runtime modification of flow configuration")]),t._v(" "),e("li",[t._v("Back pressure control")])])]),t._v(" "),e("li",[t._v("Extensible design\n"),e("ul",[e("li",[t._v("Component architecture for custom Processors and Services")]),t._v(" "),e("li",[t._v("Rapid development and iterative testing")])])]),t._v(" "),e("li",[t._v("Secure communication\n"),e("ul",[e("li",[t._v("HTTPS with configurable authentication strategies")]),t._v(" "),e("li",[t._v("Multi-tenant authorization and policy management")]),t._v(" "),e("li",[t._v("Standard protocols for encrypted communication including TLS and SSH")])])])]),t._v(" "),e("h2",{attrs:{id:"putiotdb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#putiotdb"}},[t._v("#")]),t._v(" PutIoTDB")]),t._v(" "),e("p",[t._v("This is a processor that reads the content of the incoming FlowFile as individual records using the configured 'Record Reader' and writes them to Apache IoTDB using native interface.")]),t._v(" "),e("h3",{attrs:{id:"properties-of-putiotdb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#properties-of-putiotdb"}},[t._v("#")]),t._v(" Properties of PutIoTDB")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("property")]),t._v(" "),e("th",[t._v("description")]),t._v(" "),e("th",[t._v("default value")]),t._v(" "),e("th",[t._v("necessary")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("Host")]),t._v(" "),e("td",[t._v("The host of IoTDB.")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("true")])]),t._v(" "),e("tr",[e("td",[t._v("Port")]),t._v(" "),e("td",[t._v("The port of IoTDB.")]),t._v(" "),e("td",[t._v("6667")]),t._v(" "),e("td",[t._v("true")])]),t._v(" "),e("tr",[e("td",[t._v("Username")]),t._v(" "),e("td",[t._v("Username to access the IoTDB.")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("true")])]),t._v(" "),e("tr",[e("td",[t._v("Password")]),t._v(" "),e("td",[t._v("Password to access the IoTDB.")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("true")])]),t._v(" "),e("tr",[e("td",[t._v("Record Reader")]),t._v(" "),e("td",[t._v("Specifies the type of Record Reader controller service to use "),e("br"),t._v("for parsing the incoming data and determining the schema.")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("true")])]),t._v(" "),e("tr",[e("td",[t._v("Schema")]),t._v(" "),e("td",[t._v("The schema that IoTDB needs doesn't support good by NiFi."),e("br"),t._v("Therefore, you can define the schema here. "),e("br"),t._v("Besides, you can set encoding type and compression type by this method."),e("br"),t._v("If you don't set this property, the inferred schema will be used."),e("br"),t._v(" It can be updated by expression language.")]),t._v(" "),e("td",[t._v("null")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("Aligned")]),t._v(" "),e("td",[t._v("Whether using aligned interface?  It can be updated by expression language.")]),t._v(" "),e("td",[t._v("false")]),t._v(" "),e("td",[t._v("false")])]),t._v(" "),e("tr",[e("td",[t._v("MaxRowNumber")]),t._v(" "),e("td",[t._v("Specifies the max row number of each tablet.  It can be updated by expression language.")]),t._v(" "),e("td",[t._v("1024")]),t._v(" "),e("td",[t._v("false")])])])]),t._v(" "),e("h3",{attrs:{id:"inferred-schema-of-flowfile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inferred-schema-of-flowfile"}},[t._v("#")]),t._v(" Inferred Schema of Flowfile")]),t._v(" "),e("p",[t._v("There are a couple of rules about flowfile:")]),t._v(" "),e("ol",[e("li",[t._v("The flowfile can be read by "),e("code",[t._v("Record Reader")]),t._v(".")]),t._v(" "),e("li",[t._v("The schema of flowfile must contains a field "),e("code",[t._v("Time")]),t._v(", and it must be the first.")]),t._v(" "),e("li",[t._v("The data type of time must be "),e("code",[t._v("STRING")]),t._v(" or "),e("code",[t._v("LONG")]),t._v(".")]),t._v(" "),e("li",[t._v("Fields excepted time must start with "),e("code",[t._v("root.")]),t._v(".")]),t._v(" "),e("li",[t._v("The supported data types are "),e("code",[t._v("INT")]),t._v(", "),e("code",[t._v("LONG")]),t._v(", "),e("code",[t._v("FLOAT")]),t._v(", "),e("code",[t._v("DOUBLE")]),t._v(", "),e("code",[t._v("BOOLEAN")]),t._v(", "),e("code",[t._v("TEXT")]),t._v(".")])]),t._v(" "),e("h3",{attrs:{id:"convert-schema-by-property"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#convert-schema-by-property"}},[t._v("#")]),t._v(" Convert Schema by property")]),t._v(" "),e("p",[t._v("As mentioned above, converting schema by property which is more flexible and stronger than inferred schema.")]),t._v(" "),e("p",[t._v("The structure of property "),e("code",[t._v("Schema")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timeType"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"LONG"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fields"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tsName"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root.sg.d1.s1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dataType"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"INT32"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"encoding"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RLE"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compressionType"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GZIP"')]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"tsName"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root.sg.d1.s2"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"dataType"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"INT64"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"encoding"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"RLE"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"compressionType"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"GZIP"')]),t._v("\n\t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br")])]),e("p",[e("strong",[t._v("Note")])]),t._v(" "),e("ol",[e("li",[t._v("The first column must be "),e("code",[t._v("Time")]),t._v(". The rest must be arranged in the same order as in "),e("code",[t._v("field")]),t._v(" of JSON.")]),t._v(" "),e("li",[t._v("The JSON of schema must contain "),e("code",[t._v("timeType")]),t._v(" and "),e("code",[t._v("fields")]),t._v(".")]),t._v(" "),e("li",[t._v("There are only two options "),e("code",[t._v("LONG")]),t._v(" and "),e("code",[t._v("STRING")]),t._v(" for "),e("code",[t._v("timeType")]),t._v(".")]),t._v(" "),e("li",[t._v("The columns "),e("code",[t._v("tsName")]),t._v(" and "),e("code",[t._v("dataType")]),t._v(" must be set.")]),t._v(" "),e("li",[t._v("The tsName must start with "),e("code",[t._v("root.")]),t._v(".")]),t._v(" "),e("li",[t._v("The supported "),e("code",[t._v("dataTypes")]),t._v(" are "),e("code",[t._v("INT32")]),t._v(", "),e("code",[t._v("INT64")]),t._v(", "),e("code",[t._v("FLOAT")]),t._v(", "),e("code",[t._v("DOUBLE")]),t._v(", "),e("code",[t._v("BOOLEAN")]),t._v(", "),e("code",[t._v("TEXT")]),t._v(".")]),t._v(" "),e("li",[t._v("The supported "),e("code",[t._v("encoding")]),t._v(" are "),e("code",[t._v("PLAIN")]),t._v(", "),e("code",[t._v("DICTIONARY")]),t._v(", "),e("code",[t._v("RLE")]),t._v(", "),e("code",[t._v("DIFF")]),t._v(", "),e("code",[t._v("TS_2DIFF")]),t._v(", "),e("code",[t._v("BITMAP")]),t._v(", "),e("code",[t._v("GORILLA_V1")]),t._v(", "),e("code",[t._v("REGULAR")]),t._v(", "),e("code",[t._v("GORILLA")]),t._v(".")]),t._v(" "),e("li",[t._v("The supported "),e("code",[t._v("compressionType")]),t._v(" are "),e("code",[t._v("UNCOMPRESSED")]),t._v(", "),e("code",[t._v("SNAPPY")]),t._v(", "),e("code",[t._v("GZIP")]),t._v(", "),e("code",[t._v("LZO")]),t._v(", "),e("code",[t._v("SDT")]),t._v(", "),e("code",[t._v("PAA")]),t._v(", "),e("code",[t._v("PLA")]),t._v(", "),e("code",[t._v("LZ4")]),t._v(".")])]),t._v(" "),e("h2",{attrs:{id:"relationships"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#relationships"}},[t._v("#")]),t._v(" Relationships")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("relationship")]),t._v(" "),e("th",[t._v("description")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("success")]),t._v(" "),e("td",[t._v("Data can be written correctly or flow file is empty.")])]),t._v(" "),e("tr",[e("td",[t._v("failure")]),t._v(" "),e("td",[t._v("The shema or flow file is abnormal.")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);