(window.webpackJsonp=window.webpackJsonp||[]).push([[360],{763:function(e,t,s){"use strict";s.r(t);var a=s(19),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"storage-group-management"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#storage-group-management"}},[e._v("#")]),e._v(" Storage Group Management")]),e._v(" "),t("h2",{attrs:{id:"create-storage-group"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-storage-group"}},[e._v("#")]),e._v(" Create Storage Group")]),e._v(" "),t("p",[e._v("According to the storage model we can set up the corresponding storage group. Two SQL statements are supported for creating storage groups, as follows:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB > set storage group to root.ln\nIoTDB > create storage group root.sgcc\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("We can thus create two storage groups using the above two SQL statements.")]),e._v(" "),t("p",[e._v("It is worth noting that when the path itself or the parent/child layer of the path is already set as a storage group, the path is then not allowed to be set as a storage group. For example, it is not feasible to set "),t("code",[e._v("root.ln.wf01")]),e._v(" as a storage group when two storage groups "),t("code",[e._v("root.ln")]),e._v(" and "),t("code",[e._v("root.sgcc")]),e._v(" exist. The system gives the corresponding error prompt as shown below:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB> set storage group to root.ln.wf01\nMsg: 300: root.ln has already been set to storage group.\nIoTDB> create storage group root.ln.wf01\nMsg: 300: root.ln has already been set to storage group.\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("The LayerName of storage group can only be characters, numbers, underscores and hyphens.")]),e._v(" "),t("p",[e._v("Besides, if deploy on Windows system, the LayerName is case-insensitive, which means it's not allowed to set storage groups "),t("code",[e._v("root.ln")]),e._v(" and "),t("code",[e._v("root.LN")]),e._v(" at the same time.")]),e._v(" "),t("h2",{attrs:{id:"show-storage-group"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#show-storage-group"}},[e._v("#")]),e._v(" Show Storage Group")]),e._v(" "),t("p",[e._v("After creating the storage group, we can use the "),t("RouterLink",{attrs:{to:"/UserGuide/V0.13.x/Reference/SQL-Reference.html"}},[e._v("SHOW STORAGE GROUP")]),e._v(" statement and "),t("RouterLink",{attrs:{to:"/UserGuide/V0.13.x/Reference/SQL-Reference.html"}},[e._v("SHOW STORAGE GROUP <PathPattern>")]),e._v(" to view the storage groups. The SQL statements are as follows:")],1),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB> show storage group\nIoTDB> show storage group root.**\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("The result is as follows:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("+-------------+\n|storage group|\n+-------------+\n|    root.sgcc|\n|      root.ln|\n+-------------+\nTotal line number = 2\nIt costs 0.060s\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br")])]),t("h2",{attrs:{id:"delete-storage-group"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#delete-storage-group"}},[e._v("#")]),e._v(" Delete Storage Group")]),e._v(" "),t("p",[e._v("User can use the "),t("code",[e._v("DELETE STORAGE GROUP <PathPattern>")]),e._v(" statement to delete all storage groups matching the pathPattern. Please note the data in the storage group will also be deleted.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("IoTDB > DELETE STORAGE GROUP root.ln\nIoTDB > DELETE STORAGE GROUP root.sgcc\n// delete all data, all timeseries and all storage groups\nIoTDB > DELETE STORAGE GROUP root.**\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);