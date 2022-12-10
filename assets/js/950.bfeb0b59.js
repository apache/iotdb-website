(window.webpackJsonp=window.webpackJsonp||[]).push([[950],{1351:function(e,s,t){"use strict";t.r(s);var l=t(19),i=Object(l.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"tsfile-拆分工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tsfile-拆分工具"}},[e._v("#")]),e._v(" TsFile 拆分工具")]),e._v(" "),s("p",[e._v("0.12 版本的 IoTDB 会产生很大的文件，在运维过程中分析起来比较困难。因此，从 0.12.5 版本和 0.13 版本起，提供TsFile 分离工具，该工具可以将大的 TsFile 文件根据配置项拆分为数个小文件。该启动脚本会在编译 server 之后生成至 "),s("code",[e._v("server\\target\\iotdb-server-{version}\\tools\\tsfileToolSet")]),e._v(" 目录中。")]),e._v(" "),s("p",[e._v("使用方式：")]),e._v(" "),s("p",[e._v("Windows:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(".\\split-tsfile-tool.bat <TsFile 文件路径> (-level <所拆分文件的层级>) (-size <所拆分文件的大小>)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Linux or MacOs:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("./split-tsfile-tool.sh <TsFile 文件路径> (-level <所拆分文件的层级>) (-size <所拆分文件的大小>)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("blockquote",[s("p",[e._v("注意：如果不传入"),s("code",[e._v("-level")]),e._v("，所拆分文件的层级为 10；如果不传入"),s("code",[e._v("-size")]),e._v("，所拆分文件的大小约为 1GB；"),s("code",[e._v("-size")]),e._v(" 后参数单位为 byte。\n例如，需要指定拆分为 100MB 的文件，且文件层级数为6，则命令为 "),s("code",[e._v("./split-tsfile-tool.sh test.tsfile -level 6 -size 1048576000")]),e._v(" (Linux or MacOs)")])]),e._v(" "),s("p",[e._v("拆分中可以调节的配置项如下：")]),e._v(" "),s("ol",[s("li",[e._v("拆分所生成的文件大小通过命令传入参数确定的，默认为 1GB。这个配置项同样也是 0.13 版本中合并所能生成文件的目标大小。在 0.13 版本中，文件是否可以合并是通过文件大小确定的，可以通过此配置项控制重启后不继续合并。")]),e._v(" "),s("li",[e._v("文件所在层级是通过命令传入参数确定的，默认为 10。在 0.12 版本中，文件是否可以合并是通过文件所在层级确定的，可以通过此配置项控制重启后不继续合并。")]),e._v(" "),s("li",[e._v("文件中 chunk 点数可以通过 "),s("code",[e._v("chunk_point_num_lower_bound_in_compaction")]),e._v(" 进行配置，默认为 100。这个配置项同样也是 0.13 版本中合并所能生成文件的 chunk 中点数。")])]),e._v(" "),s("p",[e._v("使用拆分工具需要注意如下事项：")]),e._v(" "),s("ol",[s("li",[e._v("拆分工具为离线运维工具，使用前需关闭 IoTDB，确保所拆分的文件已经完全落盘（即有"),s("code",[e._v("tsFile.resource")]),e._v("文件）。拆分后需移除原文件后重启。")]),e._v(" "),s("li",[e._v("拆分工具目前尚不支持拆分带有删除区间的 TsFile（即有"),s("code",[e._v(".mods")]),e._v("文件）和写有对齐时间序列的 TsFile。")])])])}),[],!1,null,null,null);s.default=i.exports}}]);