(window.webpackJsonp=window.webpackJsonp||[]).push([[944],{1346:function(s,t,a){"use strict";a.r(t);var e=a(19),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"mlog-加载工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mlog-加载工具"}},[s._v("#")]),s._v(" Mlog 加载工具")]),s._v(" "),t("h3",{attrs:{id:"工具介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工具介绍"}},[s._v("#")]),s._v(" 工具介绍")]),s._v(" "),t("p",[s._v("MLogLoad 工具用于将 "),t("code",[s._v("mlog.bin")]),s._v(" 中的元数据和 "),t("code",[s._v("tlog.txt")]),s._v("   中的标签和属性加载到正在运行的 IoTDB 中。\n与正在运行的 IoTDB 中的元数据存在冲突的待加载数据将会被跳过。")]),s._v(" "),t("h3",{attrs:{id:"使用方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[s._v("#")]),s._v(" 使用方法")]),s._v(" "),t("p",[s._v("Linux/MacOS")]),s._v(" "),t("blockquote",[t("p",[s._v("./mLogLoad.sh -mlog /yourpath/mlog.bin -tlog /yourpath/tlog.txt -h 127.0.0.1 -p 6667 -u root -pw root")])]),s._v(" "),t("p",[s._v("Windows")]),s._v(" "),t("blockquote",[t("p",[s._v("./mLogLoad.bat -mlog /yourpath/mlog.bin -tlog /yourpath/tlog.txt -h 127.0.0.1 -p 6667 -u root -pw root")])]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("usage: MLogLoad -mlog <mlog file> [-tlog <tlog file>] [-h <receiver host>]\n       [-p <receiver port>] [-u <user>] [-pw <password>] [-help]\n -mlog <mlog file>    Need to specify a binary mlog.bin file to parse\n                      (required)\n -tlog <tlog file>    Could specify a binary tlog.txt file to parse. Tags\n                      and attributes will be ignored if not specified\n                      (optional)\n -h <receiver host>   Could specify a specify the receiver host, default\n                      is 127.0.0.1 (optional)\n -p <receiver port>   Could specify a specify the receiver port, default\n                      is 6667 (optional)\n -u <user>            Could specify the user name, default is root\n                      (optional)\n -pw <password>       Could specify the password, default is root\n                      (optional)\n -help,--help         Display help information\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("p",[s._v("注意：当 tlog 未指定时，Mlog 加载工具会跳过标签点管理相关的元数据操作。")]),s._v(" "),t("h3",{attrs:{id:"使用示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[s._v("#")]),s._v(" 使用示例")]),s._v(" "),t("p",[s._v("假定服务器 192.168.0.101:6667 上运行一个 IoTDB 实例，想从将本地的元数据文件 "),t("code",[s._v("/yourpath/mlog.bin")]),s._v(" 加载进此IoTDB实例。")]),s._v(" "),t("p",[s._v("进入到 mLogLoad.sh 所在文件夹中，执行如下语句：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('./mLogLoad.sh -f "/yourpath/mlog.bin" -h 192.168.0.101 -p 6667 -u root -pw root\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("等待脚本执行完成之后，可以检查 IoTDB 实例中元数据已经被正确加载。")]),s._v(" "),t("h3",{attrs:{id:"常见问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[s._v("#")]),s._v(" 常见问题")]),s._v(" "),t("ul",[t("li",[s._v("找不到或无法加载主类 MLogLoader\n"),t("ul",[t("li",[s._v("可能是由于未设置环境变量 $IOTDB_HOME，请设置环境变量之后重试")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);