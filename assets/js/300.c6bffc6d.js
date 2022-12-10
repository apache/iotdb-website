(window.webpackJsonp=window.webpackJsonp||[]).push([[300],{702:function(e,t,i){"use strict";i.r(t);var s=i(19),o=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"tsfile-split-tool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tsfile-split-tool"}},[e._v("#")]),e._v(" TsFile Split Tool")]),e._v(" "),t("p",[e._v("IoTDB version 0.12 could produce large files, which leads to difficulties in maintenance. Therefore, since version 0.12.5 and 0.13, TsFile split tool is provided. The split tool can split the large TsFile into several small TsFile according to the configuration.")]),e._v(" "),t("p",[e._v("After building the server, the startup script of this tool will appear under the "),t("code",[e._v("server\\target\\iotdb-server-{version}\\tools\\tsfileToolSet")]),e._v(" directory.")]),e._v(" "),t("p",[e._v("Command:")]),e._v(" "),t("p",[e._v("For Windows:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v(".\\split-tsfile-tool.bat <path of your TsFile> (-level <LEVEL of the target files>) (-size <SIZE of the target files>)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("For Linux or MacOs:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("./split-tsfile-tool.sh <path of your TsFile> (-level <LEVEL of the target files>) (-size <SIZE of the target files>)\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("blockquote",[t("p",[e._v("Note that if "),t("code",[e._v("-level")]),e._v(" is not set, the default level of target files is 10; if "),t("code",[e._v("-size")]),e._v(" is not set, the default size of target files is about 1GB. The unit of "),t("code",[e._v("-size")]),e._v(" is byte.\nFor example, if the target files size is 100MB, and the level is 6, the command would be "),t("code",[e._v("./split-tsfile-tool.sh test.tsfile -level 6 -size 1048576000")]),e._v(" (Linux or MacOs)")])]),e._v(" "),t("p",[e._v("Here are some configurations:")]),e._v(" "),t("ol",[t("li",[e._v("The size of target files could be configured by the input param, which is 1GB by default. This configuration is also the target file size in compaction in 0.13. File size could determine whether the compaction is proceeded in 0.13, so this configuration could make sure there is no compaction after restarting.")]),e._v(" "),t("li",[e._v("The level of target files is determined by the input param, which is 10 by default. File level could determine whether the compaction is proceeded in 0.12, so this configuration could make sure there is no compaction after restarting.")])]),e._v(" "),t("p",[e._v("Here are some more tips:")]),e._v(" "),t("ol",[t("li",[e._v("TsFile split tool is offline maintenance tool. Before splitting a file, you should make sure the file to be split is closed (aka with "),t("code",[e._v("tsFile.resource")]),e._v(") and IoTDB is shut down. After splitting, restart IoTDB.")]),e._v(" "),t("li",[e._v("TsFile split tool doesn't support splitting TsFile with deletion interval (aka with "),t("code",[e._v(".mods")]),e._v(" file) and with aligned timeseries.")])])])}),[],!1,null,null,null);t.default=o.exports}}]);