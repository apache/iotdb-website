(window.webpackJsonp=window.webpackJsonp||[]).push([[955],{1356:function(s,t,a){"use strict";a.r(t);var e=a(19),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"元数据操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#元数据操作"}},[s._v("#")]),s._v(" 元数据操作")]),s._v(" "),t("h2",{attrs:{id:"存储组管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#存储组管理"}},[s._v("#")]),s._v(" 存储组管理")]),s._v(" "),t("h3",{attrs:{id:"创建存储组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建存储组"}},[s._v("#")]),s._v(" 创建存储组")]),s._v(" "),t("p",[s._v("我们可以根据存储模型建立相应的存储组。创建存储组支持两种 SQL 语句，如下所示：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB > set storage group to root.ln\nIoTDB > create storage group root.sgcc\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("根据以上两条 SQL 语句，我们可以创建出两个存储组。")]),s._v(" "),t("p",[s._v("需要注意的是，存储组的父子节点都不能再设置存储组。例如在已经有"),t("code",[s._v("root.ln")]),s._v("和"),t("code",[s._v("root.sgcc")]),s._v("这两个存储组的情况下，创建"),t("code",[s._v("root.ln.wf01")]),s._v("存储组是不可行的。系统将给出相应的错误提示，如下所示：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> set storage group to root.ln.wf01\nMsg: 300: root.ln has already been set to storage group.\nIoTDB> create storage group root.ln.wf01\nMsg: 300: root.ln has already been set to storage group.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("存储组节点名只支持中英文字符、数字、下划线和中划线的组合。")]),s._v(" "),t("p",[s._v("还需注意，如果在 Windows 系统上部署，存储组名是大小写不敏感的。例如同时创建"),t("code",[s._v("root.ln")]),s._v(" 和 "),t("code",[s._v("root.LN")]),s._v(" 是不被允许的。")]),s._v(" "),t("h3",{attrs:{id:"查看存储组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看存储组"}},[s._v("#")]),s._v(" 查看存储组")]),s._v(" "),t("p",[s._v("在存储组创建后，我们可以使用 "),t("RouterLink",{attrs:{to:"/zh/UserGuide/V0.13.x/Reference/SQL-Reference.html"}},[s._v("SHOW STORAGE GROUP")]),s._v(" 语句和 "),t("RouterLink",{attrs:{to:"/zh/UserGuide/V0.13.x/Reference/SQL-Reference.html"}},[s._v("SHOW STORAGE GROUP <PathPattern>")]),s._v(" 来查看存储组，SQL 语句如下所示：")],1),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> show storage group\nIoTDB> show storage group root.*\nIoTDB> show storage group root.**\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("执行结果为：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-------------+\n|storage group|\n+-------------+\n|    root.sgcc|\n|      root.ln|\n+-------------+\nTotal line number = 2\nIt costs 0.060s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"删除存储组"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除存储组"}},[s._v("#")]),s._v(" 删除存储组")]),s._v(" "),t("p",[s._v("用户可以使用"),t("code",[s._v("DELETE STORAGE GROUP <PathPattern>")]),s._v("语句删除该路径模式匹配的所有的存储组。在删除的过程中，需要注意的是存储组的数据也会被删除。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB > DELETE STORAGE GROUP root.ln\nIoTDB > DELETE STORAGE GROUP root.sgcc\n// 删除所有数据，时间序列以及存储组\nIoTDB > DELETE STORAGE GROUP root.**\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);