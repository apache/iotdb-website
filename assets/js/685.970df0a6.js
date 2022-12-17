(window.webpackJsonp=window.webpackJsonp||[]).push([[685],{1089:function(s,t,a){"use strict";a.r(t);var n=a(19),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"tsfile概览工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tsfile概览工具"}},[s._v("#")]),s._v(" TsFile概览工具")]),s._v(" "),t("p",[s._v("TsFile概览工具用于以概要模式打印出一个TsFile的内容，工具位置为 tools/tsfile/print-tsfile。")]),s._v(" "),t("h2",{attrs:{id:"用法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#用法"}},[s._v("#")]),s._v(" 用法")]),s._v(" "),t("ul",[t("li",[s._v("Windows:")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("print-tsfile-sketch.bat "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("TsFile文件路径"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("输出结果的存储路径"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("Linux or MacOs:")])]),s._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("./print-tsfile-sketch.sh "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("TsFile文件路径"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("输出结果的存储路径"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v('注意：如果没有设置输出结果的存储路径, 将使用相对路径"TsFile_sketch_view.txt"作为默认值。')]),s._v(" "),t("h2",{attrs:{id:"示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),t("p",[s._v("以Windows系统为例：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("print-tsfile.bat D:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("github"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1669359533965")]),s._v("-1-0-0.tsfile D:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("github"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("sketch.txt\n```````````````````````"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("\nStarting Printing the TsFile Sketch\n"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("```````````````````````\nTsFile path:D:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("github"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1669359533965")]),s._v("-1-0-0.tsfile\nSketch save path:D:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("github"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("sketch.txt\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("148")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" WARN  o.a.i.t.c.conf.TSFileDescriptor - not found iotdb-common.properties, use the default configs.\n-------------------------------- TsFile Sketch --------------------------------\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" path: D:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("github"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1669359533965")]),s._v("-1-0-0.tsfile\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" length: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2974")]),s._v("\n\n            POSITION"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   CONTENT\n            --------    -------\n                   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("magic head"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" TsFile\n                   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("version number"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Chunk Group"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" of root.sg1.d1, num of Chunks:3\n                   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Chunk Group Header"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("marker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("deviceID"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" root.sg1.d1\n                  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Chunk"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" of root.sg1.d1.s1, startTime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1669359533948")]),s._v(" endTime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1669359534047")]),s._v(" count: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("minValue:-9032452783138882770,maxValue:9117677033041335123,firstValue:7068645577795875906,lastValue:-5833792328174747265,sumValue:5.795959009889246E19"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("chunk header"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("marker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("measurementID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("s1, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dataSize")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("864")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dataType")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("INT64, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("compressionType")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("SNAPPY, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("encodingType")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("RLE\n                    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("page"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  UncompressedSize:862, CompressedSize:860\n                 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("893")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Chunk"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" of root.sg1.d1.s2, startTime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1669359533948")]),s._v(" endTime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1669359534047")]),s._v(" count: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("minValue:-8806861312244965718,maxValue:9192550740609853234,firstValue:1150295375739457693,lastValue:-2839553973758938646,sumValue:8.2822564314572677E18"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("chunk header"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("marker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("measurementID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("s2, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dataSize")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("864")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dataType")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("INT64, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("compressionType")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("SNAPPY, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("encodingType")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("RLE\n                    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("page"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  UncompressedSize:862, CompressedSize:860\n                "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1766")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Chunk"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" of root.sg1.d1.s3, startTime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1669359533948")]),s._v(" endTime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1669359534047")]),s._v(" count: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("minValue:-9076669333460323191,maxValue:9175278522960949594,firstValue:2537897870994797700,lastValue:7194625271253769397,sumValue:-2.126008424849926E19"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("chunk header"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("marker")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("measurementID")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("s3, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dataSize")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("864")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dataType")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("INT64, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("compressionType")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("SNAPPY, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("encodingType")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("RLE\n                    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("page"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  UncompressedSize:862, CompressedSize:860\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Chunk Group"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" of root.sg1.d1 ends\n                "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2656")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("marker"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2657")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("TimeseriesIndex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" of root.sg1.d1.s1, tsDataType:INT64, startTime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1669359533948")]),s._v(" endTime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1669359534047")]),s._v(" count: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("minValue:-9032452783138882770,maxValue:9117677033041335123,firstValue:7068645577795875906,lastValue:-5833792328174747265,sumValue:5.795959009889246E19"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ChunkIndex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("offset")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2728")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("TimeseriesIndex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" of root.sg1.d1.s2, tsDataType:INT64, startTime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1669359533948")]),s._v(" endTime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1669359534047")]),s._v(" count: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("minValue:-8806861312244965718,maxValue:9192550740609853234,firstValue:1150295375739457693,lastValue:-2839553973758938646,sumValue:8.2822564314572677E18"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ChunkIndex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("offset")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("893")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2799")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("TimeseriesIndex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" of root.sg1.d1.s3, tsDataType:INT64, startTime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1669359533948")]),s._v(" endTime: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1669359534047")]),s._v(" count: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("minValue:-9076669333460323191,maxValue:9175278522960949594,firstValue:2537897870994797700,lastValue:7194625271253769397,sumValue:-2.126008424849926E19"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("ChunkIndex"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("offset")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1766")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2870")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("IndexOfTimerseriesIndex Node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("LEAF_MEASUREMENT\n                    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("s1, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("265")]),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("7")]),s._v(">")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("endOffset, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("287")]),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("TsFileMetadata"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" begins\n                "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2891")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("IndexOfTimerseriesIndex Node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("LEAF_DEVICE\n                    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("root.sg1.d1, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("287")]),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("0")]),s._v(">")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("           "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("endOffset, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("289")]),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("meta offset"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2656")]),s._v("\n                    "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("bloom filter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" bit vector byte array "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("length")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("filterSize")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("256")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("hashFunctionSize")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("TsFileMetadata"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" ends\n                "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2964")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("TsFileMetadataSize"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("73")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2968")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("magic tail"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" TsFile\n                "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2974")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   END of TsFile\n---------------------------- IndexOfTimerseriesIndex Tree -----------------------------\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("MetadataIndex:LEAF_DEVICE"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        └──────"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root.sg1.d1,2870"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n                        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("MetadataIndex:LEAF_MEASUREMENT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n                        └──────"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("s1,2657"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n---------------------------------- TsFile Sketch End ----------------------------------\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br")])]),t("p",[s._v("解释：")]),s._v(" "),t("ul",[t("li",[s._v('以"|"为分隔，左边是在TsFile文件中的实际位置，右边是梗概内容。')]),s._v(" "),t("li",[s._v('"|||||||||||||||||||||"是为增强可读性而添加的导引信息，不是TsFile中实际存储的数据。')]),s._v(" "),t("li",[s._v('最后打印的"IndexOfTimerseriesIndex Tree"是对TsFile文件末尾的元数据索引树的重新整理打印，便于直观理解，不是TsFile中存储的实际数据。')])])])}),[],!1,null,null,null);t.default=e.exports}}]);