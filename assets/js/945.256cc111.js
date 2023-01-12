(window.webpackJsonp=window.webpackJsonp||[]).push([[945],{1349:function(t,e,a){"use strict";a.r(e);var n=a(19),i=Object(n.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"数据类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[t._v("#")]),t._v(" 数据类型")]),t._v(" "),e("h3",{attrs:{id:"基本数据类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本数据类型"}},[t._v("#")]),t._v(" 基本数据类型")]),t._v(" "),e("p",[t._v("IoTDB 支持：")]),t._v(" "),e("ul",[e("li",[t._v("BOOLEAN（布尔值）")]),t._v(" "),e("li",[t._v("INT32（整型）")]),t._v(" "),e("li",[t._v("INT64（长整型）")]),t._v(" "),e("li",[t._v("FLOAT（单精度浮点数）")]),t._v(" "),e("li",[t._v("DOUBLE（双精度浮点数）")]),t._v(" "),e("li",[t._v("TEXT（字符串）")])]),t._v(" "),e("p",[t._v("一共六种数据类型。")]),t._v(" "),e("p",[t._v("其中 "),e("strong",[t._v("FLOAT")]),t._v(" 与 "),e("strong",[t._v("DOUBLE")]),t._v(" 类型的序列，如果编码方式采用 "),e("RouterLink",{attrs:{to:"/zh/UserGuide/V0.13.x/Data-Concept/Encoding.html"}},[t._v("RLE")]),t._v(" 或 "),e("RouterLink",{attrs:{to:"/zh/UserGuide/V0.13.x/Data-Concept/Encoding.html"}},[t._v("TS_2DIFF")]),t._v(" 可以指定 MAX_POINT_NUMBER，该项为浮点数的小数点后位数，若不指定则系统会根据配置文件"),e("code",[t._v("iotdb-engine.properties")]),t._v("文件中的 "),e("RouterLink",{attrs:{to:"/zh/UserGuide/V0.13.x/Reference/Config-Manual.html"}},[t._v("float_precision 项")]),t._v(" 配置。")],1),t._v(" "),e("p",[t._v("当系统中用户输入的数据类型与该时间序列的数据类型不对应时，系统会提醒类型错误，如下所示，二阶差分编码不支持布尔类型：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("IoTDB> create timeseries root.ln.wf02.wt02.status WITH DATATYPE=BOOLEAN, ENCODING=TS_2DIFF\nerror: encoding TS_2DIFF does not support BOOLEAN\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("h3",{attrs:{id:"时间戳类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#时间戳类型"}},[t._v("#")]),t._v(" 时间戳类型")]),t._v(" "),e("p",[t._v("时间戳是一个数据到来的时间点，其中包括绝对时间戳和相对时间戳。")]),t._v(" "),e("h4",{attrs:{id:"绝对时间戳"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#绝对时间戳"}},[t._v("#")]),t._v(" 绝对时间戳")]),t._v(" "),e("p",[t._v("IOTDB 中绝对时间戳分为二种，一种为 LONG 类型，一种为 DATETIME 类型（包含 DATETIME-INPUT, DATETIME-DISPLAY 两个小类）。")]),t._v(" "),e("p",[t._v("在用户在输入时间戳时，可以使用 LONG 类型的时间戳或 DATETIME-INPUT 类型的时间戳，其中 DATETIME-INPUT 类型的时间戳支持格式如表所示：")]),t._v(" "),e("div",{staticStyle:{"text-align":"center"}},[e("p",[e("strong",[t._v("DATETIME-INPUT 类型支持格式")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("format")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy-MM-dd HH:mm:ss")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy/MM/dd HH:mm:ss")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy.MM.dd HH:mm:ss")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy-MM-dd HH:mm:ssZZ")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy/MM/dd HH:mm:ssZZ")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy.MM.dd HH:mm:ssZZ")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy/MM/dd HH:mm:ss.SSS")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy-MM-dd HH:mm:ss.SSS")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy.MM.dd HH:mm:ss.SSS")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy-MM-dd HH:mm:ss.SSSZZ")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy/MM/dd HH:mm:ss.SSSZZ")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("yyyy.MM.dd HH:mm:ss.SSSZZ")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("ISO8601 standard time format")])])])])]),t._v(" "),e("p",[t._v("IoTDB 在显示时间戳时可以支持 LONG 类型以及 DATETIME-DISPLAY 类型，其中 DATETIME-DISPLAY 类型可以支持用户自定义时间格式。自定义时间格式的语法如表所示：")]),t._v(" "),e("div",{staticStyle:{"text-align":"center"}},[e("p",[e("strong",[t._v("DATETIME-DISPLAY 自定义时间格式的语法")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Symbol")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Meaning")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Presentation")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Examples")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("G")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("era")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("era")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("era")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("C")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("century of era (>=0)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("20")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Y")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("year of era (>=0)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("year")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1996")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("x")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("weekyear")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("year")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1996")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("w")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("week of weekyear")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("27")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("e")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("day of week")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("2")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("E")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("day of week")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("text")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Tuesday; Tue")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("y")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("year")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("year")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1996")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("D")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("day of year")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("189")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("M")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("month of year")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("month")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("July; Jul; 07")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("d")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("day of month")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("10")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("a")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("halfday of day")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("text")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("PM")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("K")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("hour of halfday (0~11)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("0")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("h")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("clockhour of halfday (1~12)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("12")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("H")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("hour of day (0~23)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("0")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("k")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("clockhour of day (1~24)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("24")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("m")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("minute of hour")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("30")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("s")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("second of minute")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("number")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("55")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("S")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("fraction of second")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("millis")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("978")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("z")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("time zone")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("text")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("Pacific Standard Time; PST")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Z")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("time zone offset/id")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("zone")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("-0800; -08:00; America/Los_Angeles")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("'")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("escape for text")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("delimiter")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("''")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("single quote")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("literal")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("'")])])])])]),t._v(" "),e("h4",{attrs:{id:"相对时间戳"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相对时间戳"}},[t._v("#")]),t._v(" 相对时间戳")]),t._v(" "),e("p",[t._v("相对时间是指与服务器时间"),e("code",[t._v("now()")]),t._v("和"),e("code",[t._v("DATETIME")]),t._v("类型时间相差一定时间间隔的时间。\n形式化定义为：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Duration = (Digit+ ('Y'|'MO'|'W'|'D'|'H'|'M'|'S'|'MS'|'US'|'NS'))+\nRelativeTime = (now() | DATETIME) ((+|-) Duration)+\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),t._v(" "),e("div",{staticStyle:{"text-align":"center"}},[e("p",[e("strong",[t._v("The syntax of the duration unit")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Symbol")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Meaning")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Presentation")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("Examples")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("y")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("year")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1y=365 days")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1y")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("mo")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("month")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1mo=30 days")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1mo")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("w")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("week")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1w=7 days")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1w")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("d")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("day")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1d=1 day")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1d")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("h")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("hour")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1h=3600 seconds")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1h")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("m")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("minute")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1m=60 seconds")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1m")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("s")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("second")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1s=1 second")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1s")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}}),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("ms")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("millisecond")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1ms=1000_000 nanoseconds")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1ms")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("us")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("microsecond")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1us=1000 nanoseconds")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1us")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("ns")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("nanosecond")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1ns=1 nanosecond")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("1ns")])])])])]),t._v(" "),e("p",[t._v("例子：")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("now() - 1d2h //比服务器时间早 1 天 2 小时的时间\nnow() - 1w //比服务器时间早 1 周的时间\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br")])]),e("blockquote",[e("p",[t._v("注意：'+'和'-'的左右两边必须有空格")])])])}),[],!1,null,null,null);e.default=i.exports}}]);