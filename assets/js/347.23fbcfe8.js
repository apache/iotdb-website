(window.webpackJsonp=window.webpackJsonp||[]).push([[347],{749:function(e,t,o){"use strict";o.r(t);var r=o(19),s=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"background"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[e._v("#")]),e._v(" Background")]),e._v(" "),t("p",[e._v('The storage group is specified by the user display.\nUse the statement "SET STORAGE GROUP TO" to specify the storage group.\nEach storage group has a corresponding StorageGroupProcessor.')]),e._v(" "),t("p",[e._v("To ensure eventually consistency, a insert lock (exclusive lock) is used to synchronize each insert request in each storage group.\nSo the server side parallelism of data ingestion is equal to the number of storage group.")]),e._v(" "),t("h1",{attrs:{id:"problem"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#problem"}},[e._v("#")]),e._v(" Problem")]),e._v(" "),t("p",[e._v("From background, we can infer that the parallelism of data ingestion of IoTDB is max(num of client, server side parallelism), which equals to max(num of client, num of storage group)")]),e._v(" "),t("p",[e._v("The concept of storage group usually is related to real world entity such as factory, location, country and so on.\nThe number of storage groups may be small which makes the parallelism of data ingestion of IoTDB insufficient. We can't jump out of this dilemma even we start hundreds of client for ingestion.")]),e._v(" "),t("h1",{attrs:{id:"solution"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#solution"}},[e._v("#")]),e._v(" Solution")]),e._v(" "),t("p",[e._v("Our idea is to group devices into buckets and change the granularity of synchronization from storage group level to device buckets level.")]),e._v(" "),t("p",[e._v('In detail, we use hash to group different devices into buckets called virtual storage group.\nFor example, one device called "root.sg.d"(assume it\'s storage group is "root.sg") is belonged to virtual storage group "root.sg.[hash("root.sg.d") mod num_of_virtual_storage_group]"')]),e._v(" "),t("h1",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("p",[e._v("To use virtual storage group, you can set this config below:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("virtual_storage_group_num\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Recommended value is [virtual storage group number] = [CPU core number] / [user-defined storage group number]")]),e._v(" "),t("p",[e._v("For more information, you can refer to "),t("RouterLink",{attrs:{to:"/UserGuide/V0.13.x/Reference/Config-Manual.html"}},[e._v("this page")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=s.exports}}]);