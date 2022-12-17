(window.webpackJsonp=window.webpackJsonp||[]).push([[540],{944:function(e,t,s){"use strict";s.r(t);var a=s(19),n=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"tsfileselfcheck-tool"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tsfileselfcheck-tool"}},[e._v("#")]),e._v(" TsFileSelfCheck Tool")]),e._v(" "),t("p",[e._v("IoTDB Server provides the TsFile self check tool. At present, the tool can check the basic format of the TsFile file, the correctness of TimeseriesMetadata, and the correctness and consistency of the Statistics stored in each part of the TsFile.")]),e._v(" "),t("h2",{attrs:{id:"use"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#use"}},[e._v("#")]),e._v(" Use")]),e._v(" "),t("p",[e._v("Step 1：Create an object instance of TsFileSelfCheckTool class.")]),e._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("TsFileSelfCheckTool")]),e._v(" tool "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("TsFileSelfCheckTool")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Step 2：Call the check method of the self check tool. The first parameter path is the path of the TsFile to be checked. The second parameter is whether to check only the Magic String and Version Number at the beginning and end of TsFile.")]),e._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[e._v("tool"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("check")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("path"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("ul",[t("li",[e._v("There are four return values of the check method.")]),e._v(" "),t("li",[e._v("The return value is 0, which means that the TsFile self check is error-free.")]),e._v(" "),t("li",[e._v("The return value is -1, which means that TsFile has inconsistencies in Statistics. There will be two specific exceptions, one is that the Statistics of TimeSeriesMetadata is inconsistent with the Statistics of the aggregated statistics of ChunkMetadata. The other is that the Statistics of ChunkMetadata is inconsistent with the Statistics of Page aggregation statistics in the Chunk indexed by it.")]),e._v(" "),t("li",[e._v("The return value is -2, which means that the TsFile version is not compatible.")]),e._v(" "),t("li",[e._v("The return value is -3, which means that the TsFile file does not exist in the given path.")])])])}),[],!1,null,null,null);t.default=n.exports}}]);