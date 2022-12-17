(window.webpackJsonp=window.webpackJsonp||[]).push([[1075],{1479:function(t,e,a){"use strict";a.r(e);var s=a(19),n=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"层次结构"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#层次结构"}},[t._v("#")]),t._v(" 层次结构")]),t._v(" "),e("h2",{attrs:{id:"_1-tsfile设计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-tsfile设计"}},[t._v("#")]),t._v(" 1. TsFile设计")]),t._v(" "),e("p",[t._v("这是对TsFile设计细节的介绍。")]),t._v(" "),e("h3",{attrs:{id:"_1-1-可变存储"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-可变存储"}},[t._v("#")]),t._v(" 1.1 可变存储")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("大端")]),t._v("\n​\n"),e("ul",[e("li",[t._v("例如, "),e("code",[t._v("int")]),t._v(" "),e("code",[t._v("0x8")]),t._v("将被存储为"),e("code",[t._v("00 00 00 08")]),t._v("，而不是"),e("code",[t._v("08 00 00 00")]),t._v("。")])])]),t._v(" "),e("li",[e("strong",[t._v("可变长度的字符串")]),t._v(" "),e("ul",[e("li",[t._v("格式为"),e("code",[t._v("int size")]),t._v("加"),e("code",[t._v("Sring literal")]),t._v("。 大小可以为零。")]),t._v(" "),e("li",[t._v("大小等于此字符串将占用的字节数，并且可能不等于该字符串的长度。")]),t._v(" "),e("li",[t._v("例如，“ sensor_1”将被存储为"),e("code",[t._v("00 00 00 08")]),t._v("加上“ sensor_1”的编码（ASCII）。")]),t._v(" "),e("li",[t._v("请注意，对于“魔术字符串”（文件签名）“ TsFilev0.8.0”，大小（12）和编码（ASCII）是固定的，因此无需在该字符串文字前放置大小。")])])]),t._v(" "),e("li",[e("strong",[t._v("数据类型硬编码")]),t._v(" "),e("ul",[e("li",[t._v("0: BOOLEAN")]),t._v(" "),e("li",[t._v("1: INT32 ("),e("code",[t._v("int")]),t._v(")")]),t._v(" "),e("li",[t._v("2: INT64 ("),e("code",[t._v("long")]),t._v(")")]),t._v(" "),e("li",[t._v("3: FLOAT")]),t._v(" "),e("li",[t._v("4: DOUBLE")]),t._v(" "),e("li",[t._v("5: TEXT ("),e("code",[t._v("String")]),t._v(")")])])]),t._v(" "),e("li",[e("strong",[t._v("编码类型硬编码")]),t._v(" "),e("ul",[e("li",[t._v("0: PLAIN")]),t._v(" "),e("li",[t._v("1: PLAIN_DICTIONARY")]),t._v(" "),e("li",[t._v("2: RLE")]),t._v(" "),e("li",[t._v("3: DIFF")]),t._v(" "),e("li",[t._v("4: TS_2DIFF")]),t._v(" "),e("li",[t._v("5: BITMAP")]),t._v(" "),e("li",[t._v("6: GORILLA")]),t._v(" "),e("li",[t._v("7: REGULAR")])])]),t._v(" "),e("li",[e("strong",[t._v("压缩类型硬编码")]),t._v(" "),e("ul",[e("li",[t._v("0: UNCOMPRESSED")]),t._v(" "),e("li",[t._v("1: SNAPPY")]),t._v(" "),e("li",[t._v("2: GZIP")]),t._v(" "),e("li",[t._v("3: LZO")]),t._v(" "),e("li",[t._v("4: SDT")]),t._v(" "),e("li",[t._v("5: PAA")]),t._v(" "),e("li",[t._v("6: PLA")])])]),t._v(" "),e("li",[e("strong",[t._v("TsDigest统计类型硬编码")]),t._v(" "),e("ul",[e("li",[t._v("0: min_value")]),t._v(" "),e("li",[t._v("1: max_value")]),t._v(" "),e("li",[t._v("2: first_value")]),t._v(" "),e("li",[t._v("3: last_value")]),t._v(" "),e("li",[t._v("4: sum_value")])])])]),t._v(" "),e("h3",{attrs:{id:"_1-2-tsfile概述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-tsfile概述"}},[t._v("#")]),t._v(" 1.2 TsFile概述")]),t._v(" "),e("p",[t._v("这是有关TsFile结构的图。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://user-images.githubusercontent.com/40447846/61616997-6fad1300-ac9c-11e9-9c17-46785ebfbc88.png",alt:"TsFile Breakdown"}})]),t._v(" "),e("h4",{attrs:{id:"_1-2-1-魔术字符串和版本号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-魔术字符串和版本号"}},[t._v("#")]),t._v(" 1.2.1 魔术字符串和版本号")]),t._v(" "),e("p",[t._v("TsFile以6字节的魔术字符串（"),e("code",[t._v("TsFile")]),t._v("）和6字节的版本号（"),e("code",[t._v("000001")]),t._v("）开头。")]),t._v(" "),e("h4",{attrs:{id:"_1-2-2-数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-数据"}},[t._v("#")]),t._v(" 1.2.2 数据")]),t._v(" "),e("p",[t._v("TsFile文件的内容可以分为两部分：数据和元数据。 数据和元数据之间有一个字节"),e("code",[t._v("0x02")]),t._v("作为标记。")]),t._v(" "),e("p",[t._v("数据部分是一个"),e("code",[t._v("ChunkGroup")]),t._v("数组，每个ChunkGroup代表一个* device *。")]),t._v(" "),e("h5",{attrs:{id:"块组"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#块组"}},[t._v("#")]),t._v(" 块组")]),t._v(" "),e("p",[e("code",[t._v("ChunkGroup")]),t._v("具有一个"),e("code",[t._v("Chunk")]),t._v("数组，一个后续字节"),e("code",[t._v("0x00")]),t._v("作为标记以及一个"),e("code",[t._v("ChunkFooter")]),t._v("。")]),t._v(" "),e("h5",{attrs:{id:"块"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#块"}},[t._v("#")]),t._v(" 块")]),t._v(" "),e("p",[e("code",[t._v("块")]),t._v("代表"),e("em",[t._v("传感器")]),t._v("。 在"),e("code",[t._v("ChunkHeader")]),t._v("和"),e("code",[t._v("Page")]),t._v("数组之后，有一个字节"),e("code",[t._v("0x01")]),t._v("作为标记。")]),t._v(" "),e("h5",{attrs:{id:"块头"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#块头"}},[t._v("#")]),t._v(" 块头")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Member Description")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Member Type")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("该传感器的名称（measurementID）")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("这个块的大小")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("该卡盘的数据类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("short")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("页数")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("压缩类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("short")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("编码方式")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("short")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("最大墓碑时间")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("long")])])])]),t._v(" "),e("h5",{attrs:{id:"页"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#页"}},[t._v("#")]),t._v(" 页")]),t._v(" "),e("p",[t._v("页面代表块中的一些数据。 它包含一个PageHeader和实际数据（编码的时间值对）。")]),t._v(" "),e("p",[t._v("PageHeader结构")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Member Description")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Member Type")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("压缩前的数据大小")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("压缩后的数据大小（如果使用SNAPPY）")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("值数")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("最大时间戳")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("long")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("最小时间戳")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("long")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("页面最大值")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Type of the page")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("页面最小值")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Type of the page")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("页面的第一个值")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Type of the page")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("页面总和")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("double")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("页面的最后一个值")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Type of the page")])])])]),t._v(" "),e("h5",{attrs:{id:"chunkgroupfooter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chunkgroupfooter"}},[t._v("#")]),t._v(" ChunkGroupFooter")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Member Description")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Member Type")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("设备id")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("ChunkGroup的数据大小")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("long")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("块数")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")])])])]),t._v(" "),e("h4",{attrs:{id:"_1-2-3-元数据"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-元数据"}},[t._v("#")]),t._v(" 1.2.3  元数据")]),t._v(" "),e("h5",{attrs:{id:"_1-2-3-1-tsdevicemetadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-1-tsdevicemetadata"}},[t._v("#")]),t._v(" 1.2.3.1 TsDeviceMetaData")]),t._v(" "),e("p",[t._v("元数据的第一部分是"),e("code",[t._v("TsDeviceMetaData")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Member Description")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Member Type")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("开始时间")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("long")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("时间结束")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("long")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("组块数")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("ChunkGroup元数据列表")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("list")])])])]),t._v(" "),e("h6",{attrs:{id:"chunkgroupmetadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chunkgroupmetadata"}},[t._v("#")]),t._v(" ChunkGroupMetaData")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Member Description")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Member Type")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("设备编号")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("ChunkGroup的起始偏移量")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("long")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("块组的结束偏移")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("long")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("版")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("long")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("ChunkMetaData的数量")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("ChunkMetaData列表")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("list")])])])]),t._v(" "),e("h6",{attrs:{id:"chunkmetadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#chunkmetadata"}},[t._v("#")]),t._v(" ChunkMetaData")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Member Description")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Member Type")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("MeasurementId")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("ChunkHeader的起始偏移量")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("long")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("数据点数")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("long")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("开始时间")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("long")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("时间结束")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("long")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("数据类型")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("short")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("该块的统计信息")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("TsDigest")])])])]),t._v(" "),e("h6",{attrs:{id:"tsdigest"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tsdigest"}},[t._v("#")]),t._v(" TsDigest")]),t._v(" "),e("p",[t._v("现在有五个统计信息： "),e("code",[t._v("min_value, max_value, first_value, last_value, sum_value")]),t._v(".")]),t._v(" "),e("p",[t._v("在v0.8.x中，统计信息的存储格式为"),e("code",[t._v("名称/值")]),t._v("对。 也就是说，"),e("code",[t._v("Map <String，ByteBuffer>statistics")]),t._v("。 名称是一个字符串（记住长度在文字之前）。 但是对于该值，还有一个整数byteLength用作后续值的自我描述长度，因为该值可能是各种类型。 例如，如果"),e("code",[t._v("min_value")]),t._v("是整数0，则它将作为[9“ min_value” 4 0]存储在TsFile中。")]),t._v(" "),e("p",[t._v("下图显示了"),e("code",[t._v("TsDigest.deserializeFrom（buffer）")]),t._v("的示例。 在v0.8.0中，我们将获得")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('Map<String, ByteBuffer> statistics = {\n    "min_value" -> ByteBuffer of int value 0, \n    "last" -> ByteBuffer of int value 19,\n    "sum" -> ByteBuffer of double value 1093347116,\n    "first" -> ByteBuffer of int value 0,\n    "max_value" -> ByteBuffer of int value 99\n}\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/33376433/63765352-664a4280-c8fb-11e9-869e-859edf6d00bb.png"}}),t._v(" "),e("p",[t._v("在v0.9.x中，为了节省空间和时间，将存储格式更改为数组。 即，ByteBuffer []统计信息。 遵循"),e("code",[t._v("StatisticType")]),t._v("中定义的顺序，数组的每个位置与特定类型的统计信息都有固定的关联：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("enum StatisticType {\n    min_value, max_value, first_value, last_value, sum_value\n}\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[t._v("因此，在上面的示例中，我们将获得")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('ByteBuffer[] statistics = [\n    ByteBuffer of int value 0, // associated with "min_value"\n    ByteBuffer of int value 99, // associated with "max_value"\n    ByteBuffer of int value 0, // associated with "first_value"\n    ByteBuffer of int value 19, // associated with "last_value"\n    ByteBuffer of double value 1093347116 // associated with "sum_value"\n]\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("p",[t._v("作为v0.9.x中的另一个示例，当从缓冲区[3，0,4,0，1,4,99，3,4,19]反序列化TsDigest时，我们得到")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('ByteBuffer[] statistics = [\n    ByteBuffer of int value 0, // associated with "min_value"\n    ByteBuffer of int value 99, // associated with "max_value"\n    null, // associated with "first_value"\n    ByteBuffer of int value 19, // associated with "last_value"\n    null // associated with "sum_value"\n]\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("h5",{attrs:{id:"_1-2-3-2-tsfilemetadata"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-2-tsfilemetadata"}},[t._v("#")]),t._v(" 1.2.3.2 TsFileMetaData")]),t._v(" "),e("p",[t._v("在"),e("code",[t._v("TsDeviceMetadatas")]),t._v("之后是"),e("code",[t._v("TsFileMetaData")]),t._v("。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Member Description")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Member Type")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Number of devices")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Pairs of device name and deviceMetadataIndex")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("String, TsDeviceMetadataIndex pair")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Number of measurements")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Pairs of measurement name and schema")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("String, MeasurementSchema pair")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Author byte")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("byte")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Author(if author byte is 0x01)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("totalChunkNum")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("invalidChunkNum")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Bloom filter size")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Bloom filter bit vector")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("byte[Bloom filter size]")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Bloom filter capacity")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Bloom filter hash functions size")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")])])])]),t._v(" "),e("h6",{attrs:{id:"tsdevicemetadataindex"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tsdevicemetadataindex"}},[t._v("#")]),t._v(" TsDeviceMetadataIndex")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Member Description")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Member Type")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("DeviceId")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Start offset of TsDeviceMetaData")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("long")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("length")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Start time")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("long")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("End time")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("long")])])])]),t._v(" "),e("h6",{attrs:{id:"measurementschema"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#measurementschema"}},[t._v("#")]),t._v(" MeasurementSchema")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Member Description")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Member Type")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("MeasurementId")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("String")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Data type")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("short")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Encoding")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("short")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Compressor")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("short")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Size of props")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("int")])])])]),t._v(" "),e("p",[t._v("如果道具的大小大于0，则存在一个<String，String>对数组，作为此度量的属性。\n​    例如“ max_point_number”“ 2”。")]),t._v(" "),e("h5",{attrs:{id:"_1-2-3-3-tsfilemetadatasize"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-3-tsfilemetadatasize"}},[t._v("#")]),t._v(" 1.2.3.3 TsFileMetadataSize")]),t._v(" "),e("p",[t._v("在"),e("code",[t._v("TsFileMetaData")]),t._v("之后，有一个整数，指示"),e("code",[t._v("TsFileMetaData")]),t._v("的大小。")]),t._v(" "),e("h4",{attrs:{id:"_1-2-4-魔术字符串"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-4-魔术字符串"}},[t._v("#")]),t._v(" 1.2.4 魔术字符串")]),t._v(" "),e("p",[t._v("Ts文件以6字节的魔术字符串结尾（至文件）。 恭喜你！ 您已经完成了发现TsFile的旅程。")]),t._v(" "),e("h3",{attrs:{id:"_1-3-tool-set"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-tool-set"}},[t._v("#")]),t._v(" 1.3 Tool Set")]),t._v(" "),e("h4",{attrs:{id:"_1-3-1-tsfileresource打印工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-tsfileresource打印工具"}},[t._v("#")]),t._v(" 1.3.1 TsFileResource打印工具")]),t._v(" "),e("p",[t._v("构建服务器后，此工具的启动脚本将出现在"),e("code",[t._v("server \\ target \\ iotdb-server-0.9.3 \\ tools")]),t._v("目录下。")]),t._v(" "),e("p",[t._v("命令:")]),t._v(" "),e("p",[t._v("对于Windows：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(".\\print-tsfile-sketch.bat <path of your TsFileResource Directory>\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("对于Linux或Mac OS：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("./print-tsfile-sketch.sh <path of your TsFileResource Directory>\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("Windows上的示例：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("D:\\incubator-iotdb\\server\\target\\iotdb-server-0.9.3\\tools>.\\print-tsfile-resource-files.bat D:\\data\\data\\sequence\\root.vehicle\n​````````````````````````\nStarting Printing the TsFileResources\n​````````````````````````\n12:31:59.861 [main] WARN org.apache.iotdb.db.conf.IoTDBDescriptor - Cannot find IOTDB_HOME or IOTDB_CONF environment variable when loading config file iotdb-engine.properties, use default configuration\nanalyzing D:\\data\\data\\sequence\\root.vehicle\\1572496142067-101-0.tsfile ...\ndevice root.vehicle.d0, start time 3000 (1970-01-01T08:00:03+08:00[GMT+08:00]), end time 100999 (1970-01-01T08:01:40.999+08:00[GMT+08:00])\nanalyzing the resource file finished.\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br")])]),e("h4",{attrs:{id:"_1-3-2-tsfile素描工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-tsfile素描工具"}},[t._v("#")]),t._v(" 1.3.2 TsFile素描工具")]),t._v(" "),e("p",[t._v("构建服务器后，此工具的启动脚本将出现在"),e("code",[t._v("server \\ target \\ iotdb-server-0.9.3 \\ tools")]),t._v("目录下。")]),t._v(" "),e("p",[t._v("命令：")]),t._v(" "),e("p",[t._v("对于Windows：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(".\\print-tsfile-sketch.bat <path of your TsFile> (<path of the file for saving the output result>) \n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ul",[e("li",[t._v("请注意，如果未设置 "),e("code",[t._v("<path of the file for saving the output result>")]),t._v('，则将使用默认路径"TsFile_sketch_view.txt"。')])]),t._v(" "),e("p",[t._v("对于Linux或Mac OS：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("./print-tsfile-sketch.sh <path of your TsFile> (<path of the file for saving the output result>) \n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("ul",[e("li",[t._v("请注意，如果未设置 "),e("code",[t._v("<path of the file for saving the output result>")]),t._v(' , 则将使用默认路径"TsFile_sketch_view.txt"。')])]),t._v(" "),e("p",[t._v("Windows上的示例：")]),t._v(" "),e("div",{staticClass:"language-$xslt line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("D:\\incubator-iotdb\\server\\target\\iotdb-server-0.9.3\\tools>.\\print-tsfile-sketch.bat D:\\data\\data\\sequence\\root.vehicle\\1572496142067-101-0.tsfile\n​````````````````````````\nStarting Printing the TsFile Sketch\n​````````````````````````\nTsFile path:D:\\data\\data\\sequence\\root.vehicle\\1572496142067-101-0.tsfile\nSketch save path:TsFile_sketch_view.txt\n-------------------------------- TsFile Sketch --------------------------------\nfile path: D:\\data\\data\\sequence\\root.vehicle\\1572496142067-101-0.tsfile\nfile length: 187382\n\n            POSITION|   CONTENT\n            --------    -------\n                   0|   [magic head] TsFile\n                   6|   [version number] 000001\n|||||||||||||||||||||   [Chunk Group] of root.vehicle.d0 begins at pos 12, ends at pos 186469, version:102, num of Chunks:6\n                  12|   [Chunk] of s3, numOfPoints:10600, time range:[3000,13599], tsDataType:TEXT,\n                        TsDigest:[min_value:A,max_value:E,first_value:A,last_value:E,sum_value:0.0]\n                    |           [marker] 1\n                    |           [ChunkHeader]\n                    |           11 pages\n               55718|   [Chunk] of s4, numOfPoints:10600, time range:[3000,13599], tsDataType:BOOLEAN,\n                        TsDigest:[min_value:false,max_value:true,first_value:true,last_value:false,sum_value:0.0]\n                    |           [marker] 1\n                    |           [ChunkHeader]\n                    |           11 pages\n               68848|   [Chunk] of s5, numOfPoints:10600, time range:[3000,13599], tsDataType:DOUBLE,\n                        TsDigest:[min_value:3000.0,max_value:13599.0,first_value:3000.0,last_value:13599.0,sum_value:8.79747E7]\n                    |           [marker] 1\n                    |           [ChunkHeader]\n                    |           11 pages\n               98474|   [Chunk] of s0, numOfPoints:21900, time range:[3000,100999], tsDataType:INT32,\n                        TsDigest:[min_value:0,max_value:99,first_value:0,last_value:19,sum_value:889750.0]\n                    |           [marker] 1\n                    |           [ChunkHeader]\n                    |           22 pages\n              123369|   [Chunk] of s1, numOfPoints:21900, time range:[3000,100999], tsDataType:INT64,\n                        TsDigest:[min_value:0,max_value:39,first_value:8,last_value:19,sum_value:300386.0]\n                    |           [marker] 1\n                    |           [ChunkHeader]\n                    |           22 pages\n              144741|   [Chunk] of s2, numOfPoints:21900, time range:[3000,100999], tsDataType:FLOAT,\n                        TsDigest:[min_value:0.0,max_value:122.0,first_value:8.0,last_value:52.0,sum_value:778581.0]\n                    |           [marker] 1\n                    |           [ChunkHeader]\n                    |           22 pages\n              186437|   [Chunk Group Footer]\n                    |           [marker] 0\n                    |           [deviceID] root.vehicle.d0\n                    |           [dataSize] 186425\n                    |           [num of chunks] 6\n|||||||||||||||||||||   [Chunk Group] of root.vehicle.d0 ends\n              186469|   [marker] 2\n              186470|   [TsDeviceMetadata] of root.vehicle.d0, startTime:3000, endTime:100999\n                    |           [startTime] 3000tfi\n                    |           [endTime] 100999\n                    |           [num of ChunkGroupMetaData] 1\n                    |           1 ChunkGroupMetaData\n              187133|   [TsFileMetaData]\n                    |           [num of devices] 1\n                    |           1 key&TsDeviceMetadataIndex\n                    |           [num of measurements] 6\n                    |           6 key&measurementSchema\n                    |           [createBy isNotNull] false\n                    |           [totalChunkNum] 6\n                    |           [invalidChunkNum] 0\n                    |           [bloom filter bit vector byte array length] 31\n                    |           [bloom filter bit vector byte array]\n                    |           [bloom filter number of bits] 256\n                    |           [bloom filter number of hash functions] 5\n              187372|   [TsFileMetaDataSize] 239\n              187376|   [magic tail] TsFile\n              187382|   END of TsFile\n\n---------------------------------- TsFile Sketch End ----------------------------------\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br"),e("span",{staticClass:"line-number"},[t._v("26")]),e("br"),e("span",{staticClass:"line-number"},[t._v("27")]),e("br"),e("span",{staticClass:"line-number"},[t._v("28")]),e("br"),e("span",{staticClass:"line-number"},[t._v("29")]),e("br"),e("span",{staticClass:"line-number"},[t._v("30")]),e("br"),e("span",{staticClass:"line-number"},[t._v("31")]),e("br"),e("span",{staticClass:"line-number"},[t._v("32")]),e("br"),e("span",{staticClass:"line-number"},[t._v("33")]),e("br"),e("span",{staticClass:"line-number"},[t._v("34")]),e("br"),e("span",{staticClass:"line-number"},[t._v("35")]),e("br"),e("span",{staticClass:"line-number"},[t._v("36")]),e("br"),e("span",{staticClass:"line-number"},[t._v("37")]),e("br"),e("span",{staticClass:"line-number"},[t._v("38")]),e("br"),e("span",{staticClass:"line-number"},[t._v("39")]),e("br"),e("span",{staticClass:"line-number"},[t._v("40")]),e("br"),e("span",{staticClass:"line-number"},[t._v("41")]),e("br"),e("span",{staticClass:"line-number"},[t._v("42")]),e("br"),e("span",{staticClass:"line-number"},[t._v("43")]),e("br"),e("span",{staticClass:"line-number"},[t._v("44")]),e("br"),e("span",{staticClass:"line-number"},[t._v("45")]),e("br"),e("span",{staticClass:"line-number"},[t._v("46")]),e("br"),e("span",{staticClass:"line-number"},[t._v("47")]),e("br"),e("span",{staticClass:"line-number"},[t._v("48")]),e("br"),e("span",{staticClass:"line-number"},[t._v("49")]),e("br"),e("span",{staticClass:"line-number"},[t._v("50")]),e("br"),e("span",{staticClass:"line-number"},[t._v("51")]),e("br"),e("span",{staticClass:"line-number"},[t._v("52")]),e("br"),e("span",{staticClass:"line-number"},[t._v("53")]),e("br"),e("span",{staticClass:"line-number"},[t._v("54")]),e("br"),e("span",{staticClass:"line-number"},[t._v("55")]),e("br"),e("span",{staticClass:"line-number"},[t._v("56")]),e("br"),e("span",{staticClass:"line-number"},[t._v("57")]),e("br"),e("span",{staticClass:"line-number"},[t._v("58")]),e("br"),e("span",{staticClass:"line-number"},[t._v("59")]),e("br"),e("span",{staticClass:"line-number"},[t._v("60")]),e("br"),e("span",{staticClass:"line-number"},[t._v("61")]),e("br"),e("span",{staticClass:"line-number"},[t._v("62")]),e("br"),e("span",{staticClass:"line-number"},[t._v("63")]),e("br"),e("span",{staticClass:"line-number"},[t._v("64")]),e("br"),e("span",{staticClass:"line-number"},[t._v("65")]),e("br"),e("span",{staticClass:"line-number"},[t._v("66")]),e("br"),e("span",{staticClass:"line-number"},[t._v("67")]),e("br"),e("span",{staticClass:"line-number"},[t._v("68")]),e("br"),e("span",{staticClass:"line-number"},[t._v("69")]),e("br"),e("span",{staticClass:"line-number"},[t._v("70")]),e("br"),e("span",{staticClass:"line-number"},[t._v("71")]),e("br"),e("span",{staticClass:"line-number"},[t._v("72")]),e("br"),e("span",{staticClass:"line-number"},[t._v("73")]),e("br"),e("span",{staticClass:"line-number"},[t._v("74")]),e("br")])]),e("h4",{attrs:{id:"_1-3-3-tsfilesequenceread"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-3-tsfilesequenceread"}},[t._v("#")]),t._v(" 1.3.3 TsFileSequenceRead")]),t._v(" "),e("p",[t._v("您也可以使用"),e("code",[t._v("example / tsfile / org / apache / iotdb / tsfile / TsFileSequenceRead")]),t._v("顺序打印TsFile的内容。")]),t._v(" "),e("h3",{attrs:{id:"_1-4-tsfile可视化示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-tsfile可视化示例"}},[t._v("#")]),t._v(" 1.4 TsFile可视化示例")]),t._v(" "),e("h4",{attrs:{id:"v0-8-x"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v0-8-x"}},[t._v("#")]),t._v(" v0.8.x")]),t._v(" "),e("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/33376433/65209576-2bd36000-dacb-11e9-9e43-49e0dd01274e.png"}}),t._v(" "),e("h4",{attrs:{id:"v0-9-x"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#v0-9-x"}},[t._v("#")]),t._v(" v0.9.x")]),t._v(" "),e("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/33376433/68128717-35b60300-ff53-11e9-919e-48d80536df88.png"}})])}),[],!1,null,null,null);e.default=n.exports}}]);