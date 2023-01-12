(window.webpackJsonp=window.webpackJsonp||[]).push([[1004],{1408:function(s,a,t){"use strict";t.r(a);var e=t(19),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"字符串处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串处理"}},[s._v("#")]),s._v(" 字符串处理")]),s._v(" "),a("h3",{attrs:{id:"regexmatch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#regexmatch"}},[s._v("#")]),s._v(" RegexMatch")]),s._v(" "),a("h4",{attrs:{id:"函数简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数简介"}},[s._v("#")]),s._v(" 函数简介")]),s._v(" "),a("p",[s._v("本函数用于正则表达式匹配文本中的具体内容并返回。")]),s._v(" "),a("p",[a("strong",[s._v("函数名：")]),s._v(" REGEXMATCH")]),s._v(" "),a("p",[a("strong",[s._v("输入序列：")]),s._v(" 仅支持单个输入序列，类型为 TEXT。")]),s._v(" "),a("p",[a("strong",[s._v("参数：")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("regex")]),s._v(": 匹配的正则表达式，支持所有 Java 正则表达式语法，比如"),a("code",[s._v("\\d+\\.\\d+\\.\\d+\\.\\d+")]),s._v("将会匹配任意 IPv4 地址.")]),s._v(" "),a("li",[a("code",[s._v("group")]),s._v(": 输出的匹配组序号，根据 java.util.regex 规定，第 0 组为整个正则表达式，此后的组按照左括号出现的顺序依次编号。\n如"),a("code",[s._v("A(B(CD))")]),s._v("中共有三个组，第 0 组"),a("code",[s._v("A(B(CD))")]),s._v("，第 1 组"),a("code",[s._v("B(CD)")]),s._v("和第 2 组"),a("code",[s._v("CD")]),s._v("。")])]),s._v(" "),a("p",[a("strong",[s._v("输出序列：")]),s._v(" 输出单个序列，类型为 TEXT。")]),s._v(" "),a("p",[a("strong",[s._v("提示：")]),s._v(" 空值或无法匹配给定的正则表达式的数据点没有输出结果。")]),s._v(" "),a("h4",{attrs:{id:"使用示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[s._v("#")]),s._v(" 使用示例")]),s._v(" "),a("p",[s._v("输入序列：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-----------------------------+-------------------------------+\n|                         Time|                root.test.d1.s1|\n+-----------------------------+-------------------------------+\n|2021-01-01T00:00:01.000+08:00|        [192.168.0.1] [SUCCESS]|\n|2021-01-01T00:00:02.000+08:00|       [192.168.0.24] [SUCCESS]|\n|2021-01-01T00:00:03.000+08:00|           [192.168.0.2] [FAIL]|\n|2021-01-01T00:00:04.000+08:00|        [192.168.0.5] [SUCCESS]|\n|2021-01-01T00:00:05.000+08:00|      [192.168.0.124] [SUCCESS]|\n+-----------------------------+-------------------------------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("用于查询的 SQL 语句：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" regexmatch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"regex"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\\d+\\.\\d+\\.\\d+\\.\\d+"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"group"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("输出序列：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('+-----------------------------+----------------------------------------------------------------------+\n|                         Time|regexmatch(root.test.d1.s1, "regex"="\\d+\\.\\d+\\.\\d+\\.\\d+", "group"="0")|\n+-----------------------------+----------------------------------------------------------------------+\n|2021-01-01T00:00:01.000+08:00|                                                           192.168.0.1|\n|2021-01-01T00:00:02.000+08:00|                                                          192.168.0.24|\n|2021-01-01T00:00:03.000+08:00|                                                           192.168.0.2|\n|2021-01-01T00:00:04.000+08:00|                                                           192.168.0.5|\n|2021-01-01T00:00:05.000+08:00|                                                         192.168.0.124|\n+-----------------------------+----------------------------------------------------------------------+\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"regexreplace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#regexreplace"}},[s._v("#")]),s._v(" RegexReplace")]),s._v(" "),a("h4",{attrs:{id:"函数简介-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数简介-2"}},[s._v("#")]),s._v(" 函数简介")]),s._v(" "),a("p",[s._v("本函数用于将文本中符合正则表达式的匹配结果替换为指定的字符串。")]),s._v(" "),a("p",[a("strong",[s._v("函数名：")]),s._v(" REGEXREPLACE")]),s._v(" "),a("p",[a("strong",[s._v("输入序列：")]),s._v(" 仅支持单个输入序列，类型为 TEXT。")]),s._v(" "),a("p",[a("strong",[s._v("参数：")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("regex")]),s._v(": 需要替换的正则表达式，支持所有 Java 正则表达式语法。")]),s._v(" "),a("li",[a("code",[s._v("replace")]),s._v(": 替换后的字符串，支持 Java 正则表达式中的后向引用，\n形如'$1'指代了正则表达式"),a("code",[s._v("regex")]),s._v("中的第一个分组，并会在替换时自动填充匹配到的子串。")]),s._v(" "),a("li",[a("code",[s._v("limit")]),s._v(": 替换次数，大于等于 -1 的整数，默认为 -1 表示所有匹配的子串都会被替换。")]),s._v(" "),a("li",[a("code",[s._v("offset")]),s._v(": 需要跳过的匹配次数，即前"),a("code",[s._v("offset")]),s._v("次匹配到的字符子串并不会被替换，默认为 0。")]),s._v(" "),a("li",[a("code",[s._v("reverse")]),s._v(": 是否需要反向计数，默认为 false 即按照从左向右的次序。")])]),s._v(" "),a("p",[a("strong",[s._v("输出序列：")]),s._v(" 输出单个序列，类型为 TEXT。")]),s._v(" "),a("h4",{attrs:{id:"使用示例-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例-2"}},[s._v("#")]),s._v(" 使用示例")]),s._v(" "),a("p",[s._v("输入序列：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-----------------------------+-------------------------------+\n|                         Time|                root.test.d1.s1|\n+-----------------------------+-------------------------------+\n|2021-01-01T00:00:01.000+08:00|        [192.168.0.1] [SUCCESS]|\n|2021-01-01T00:00:02.000+08:00|       [192.168.0.24] [SUCCESS]|\n|2021-01-01T00:00:03.000+08:00|           [192.168.0.2] [FAIL]|\n|2021-01-01T00:00:04.000+08:00|        [192.168.0.5] [SUCCESS]|\n|2021-01-01T00:00:05.000+08:00|      [192.168.0.124] [SUCCESS]|\n+-----------------------------+-------------------------------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("用于查询的 SQL 语句：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" regexreplace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"regex"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192\\.168\\.0\\.(\\d+)"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"replace"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cluster-$1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"limit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("输出序列：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('+-----------------------------+-----------------------------------------------------------+\n|                         Time|regexreplace(root.test.d1.s1, "regex"="192\\.168\\.0\\.(\\d+)",|\n|                             |                       "replace"="cluster-$1", "limit"="1")|\n+-----------------------------+-----------------------------------------------------------+\n|2021-01-01T00:00:01.000+08:00|                                      [cluster-1] [SUCCESS]|\n|2021-01-01T00:00:02.000+08:00|                                     [cluster-24] [SUCCESS]|\n|2021-01-01T00:00:03.000+08:00|                                         [cluster-2] [FAIL]|\n|2021-01-01T00:00:04.000+08:00|                                      [cluster-5] [SUCCESS]|\n|2021-01-01T00:00:05.000+08:00|                                    [cluster-124] [SUCCESS]|\n+-----------------------------+-----------------------------------------------------------+\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h3",{attrs:{id:"regexsplit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#regexsplit"}},[s._v("#")]),s._v(" RegexSplit")]),s._v(" "),a("h4",{attrs:{id:"函数简介-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数简介-3"}},[s._v("#")]),s._v(" 函数简介")]),s._v(" "),a("p",[s._v("本函数用于使用给定的正则表达式切分文本，并返回指定的项。")]),s._v(" "),a("p",[a("strong",[s._v("函数名：")]),s._v(" REGEXSPLIT")]),s._v(" "),a("p",[a("strong",[s._v("输入序列：")]),s._v(" 仅支持单个输入序列，类型为 TEXT。")]),s._v(" "),a("p",[a("strong",[s._v("参数：")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("regex")]),s._v(": 用于分割文本的正则表达式，支持所有 Java 正则表达式语法，比如"),a("code",[s._v("['\"]")]),s._v("将会匹配任意的英文引号"),a("code",[s._v("'")]),s._v("和"),a("code",[s._v('"')]),s._v("。")]),s._v(" "),a("li",[a("code",[s._v("index")]),s._v(": 输出结果在切分后数组中的序号，需要是大于等于 -1 的整数，默认值为 -1 表示返回切分后数组的长度，其它非负整数即表示返回数组中对应位置的切分结果（数组的秩从 0 开始计数）。")])]),s._v(" "),a("p",[a("strong",[s._v("输出序列：")]),s._v(" 输出单个序列，在"),a("code",[s._v("index")]),s._v("为 -1 时输出数据类型为 INT32，否则为 TEXT。")]),s._v(" "),a("p",[a("strong",[s._v("提示：")]),s._v(" 如果"),a("code",[s._v("index")]),s._v("超出了切分后结果数组的秩范围，例如使用"),a("code",[s._v(",")]),s._v("切分"),a("code",[s._v("0,1,2")]),s._v("时输入"),a("code",[s._v("index")]),s._v("为 3，则该数据点没有输出结果。")]),s._v(" "),a("h4",{attrs:{id:"使用示例-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例-3"}},[s._v("#")]),s._v(" 使用示例")]),s._v(" "),a("p",[s._v("输入序列：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-----------------------------+---------------+\n|                         Time|root.test.d1.s1|\n+-----------------------------+---------------+\n|2021-01-01T00:00:01.000+08:00|      A,B,A+,B-|\n|2021-01-01T00:00:02.000+08:00|      A,A+,A,B+|\n|2021-01-01T00:00:03.000+08:00|         B+,B,B|\n|2021-01-01T00:00:04.000+08:00|      A+,A,A+,A|\n|2021-01-01T00:00:05.000+08:00|       A,B-,B,B|\n+-----------------------------+---------------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("用于查询的 SQL 语句：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" regexsplit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"regex"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('","')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("输出序列：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('+-----------------------------+------------------------------------------------------+\n|                         Time|regexsplit(root.test.d1.s1, "regex"=",", "index"="-1")|\n+-----------------------------+------------------------------------------------------+\n|2021-01-01T00:00:01.000+08:00|                                                     4|\n|2021-01-01T00:00:02.000+08:00|                                                     4|\n|2021-01-01T00:00:03.000+08:00|                                                     3|\n|2021-01-01T00:00:04.000+08:00|                                                     4|\n|2021-01-01T00:00:05.000+08:00|                                                     4|\n+-----------------------------+------------------------------------------------------+\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("另一个查询的 SQL 语句：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" regexsplit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"regex"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('","')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"index"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("输出序列：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('+-----------------------------+-----------------------------------------------------+\n|                         Time|regexsplit(root.test.d1.s1, "regex"=",", "index"="3")|\n+-----------------------------+-----------------------------------------------------+\n|2021-01-01T00:00:01.000+08:00|                                                   B-|\n|2021-01-01T00:00:02.000+08:00|                                                   B+|\n|2021-01-01T00:00:04.000+08:00|                                                    A|\n|2021-01-01T00:00:05.000+08:00|                                                    B|\n+-----------------------------+-----------------------------------------------------+\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"strreplace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#strreplace"}},[s._v("#")]),s._v(" StrReplace")]),s._v(" "),a("h4",{attrs:{id:"函数简介-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数简介-4"}},[s._v("#")]),s._v(" 函数简介")]),s._v(" "),a("p",[s._v("本函数用于将文本中的子串替换为指定的字符串。")]),s._v(" "),a("p",[a("strong",[s._v("函数名：")]),s._v(" STRREPLACE")]),s._v(" "),a("p",[a("strong",[s._v("输入序列：")]),s._v(" 仅支持单个输入序列，类型为 TEXT。")]),s._v(" "),a("p",[a("strong",[s._v("参数：")])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("target")]),s._v(": 需要替换的字符子串")]),s._v(" "),a("li",[a("code",[s._v("replace")]),s._v(": 替换后的字符串。")]),s._v(" "),a("li",[a("code",[s._v("limit")]),s._v(": 替换次数，大于等于 -1 的整数，默认为 -1 表示所有匹配的子串都会被替换。")]),s._v(" "),a("li",[a("code",[s._v("offset")]),s._v(": 需要跳过的匹配次数，即前"),a("code",[s._v("offset")]),s._v("次匹配到的字符子串并不会被替换，默认为 0。")]),s._v(" "),a("li",[a("code",[s._v("reverse")]),s._v(": 是否需要反向计数，默认为 false 即按照从左向右的次序。")])]),s._v(" "),a("p",[a("strong",[s._v("输出序列：")]),s._v(" 输出单个序列，类型为 TEXT。")]),s._v(" "),a("h4",{attrs:{id:"使用示例-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用示例-4"}},[s._v("#")]),s._v(" 使用示例")]),s._v(" "),a("p",[s._v("输入序列：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-----------------------------+---------------+\n|                         Time|root.test.d1.s1|\n+-----------------------------+---------------+\n|2021-01-01T00:00:01.000+08:00|      A,B,A+,B-|\n|2021-01-01T00:00:02.000+08:00|      A,A+,A,B+|\n|2021-01-01T00:00:03.000+08:00|         B+,B,B|\n|2021-01-01T00:00:04.000+08:00|      A+,A,A+,A|\n|2021-01-01T00:00:05.000+08:00|       A,B-,B,B|\n+-----------------------------+---------------+\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("用于查询的 SQL 语句：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" strreplace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"target"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('","')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"replace"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"limit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("输出序列：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('+-----------------------------+-----------------------------------------+\n|                         Time|strreplace(root.test.d1.s1, "target"=",",|\n|                             |              "replace"="/", "limit"="2")|\n+-----------------------------+-----------------------------------------+\n|2021-01-01T00:00:01.000+08:00|                                A/B/A+,B-|\n|2021-01-01T00:00:02.000+08:00|                                A/A+/A,B+|\n|2021-01-01T00:00:03.000+08:00|                                   B+/B/B|\n|2021-01-01T00:00:04.000+08:00|                                A+/A/A+,A|\n|2021-01-01T00:00:05.000+08:00|                                 A/B-/B,B|\n+-----------------------------+-----------------------------------------+\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("另一个用于查询的 SQL 语句：")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" strreplace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"target"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('","')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"replace"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"limit"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"offset"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"reverse"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"true"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("输出序列：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('+-----------------------------+-----------------------------------------------------+\n|                         Time|strreplace(root.test.d1.s1, "target"=",", "replace"= | \n|                             |    "|", "limit"="1", "offset"="1", "reverse"="true")|\n+-----------------------------+-----------------------------------------------------+\n|2021-01-01T00:00:01.000+08:00|                                            A,B/A+,B-|\n|2021-01-01T00:00:02.000+08:00|                                            A,A+/A,B+|\n|2021-01-01T00:00:03.000+08:00|                                               B+/B,B|\n|2021-01-01T00:00:04.000+08:00|                                            A+,A/A+,A|\n|2021-01-01T00:00:05.000+08:00|                                             A,B-/B,B|\n+-----------------------------+-----------------------------------------------------+\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);