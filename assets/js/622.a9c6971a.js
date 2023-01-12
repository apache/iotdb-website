(window.webpackJsonp=window.webpackJsonp||[]).push([[622],{1027:function(s,t,a){"use strict";a.r(t);var e=a(19),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"literal-values"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#literal-values"}},[s._v("#")]),s._v(" Literal Values")]),s._v(" "),t("p",[s._v("This section describes how to write literal values in IoTDB. These include strings, numbers, timestamp values, boolean values, and NULL.")]),s._v(" "),t("h2",{attrs:{id:"string-literals"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#string-literals"}},[s._v("#")]),s._v(" String Literals")]),s._v(" "),t("p",[s._v("in IoTDB, "),t("strong",[s._v("A string is a sequence of bytes or characters, enclosed within either single quote ("),t("code",[s._v("'")]),s._v(") or double quote ("),t("code",[s._v('"')]),s._v(") characters.")]),s._v(" Examples：")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'a string'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"another string"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"usage-scenarios"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage-scenarios"}},[s._v("#")]),s._v(" Usage Scenarios")]),s._v(" "),t("p",[s._v("Usages of string literals:")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("Values of  "),t("code",[s._v("TEXT")]),s._v(" type data in "),t("code",[s._v("INSERT")]),s._v(" or "),t("code",[s._v("SELECT")]),s._v(" statements")]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# insert")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wf02"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wt02"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("timestamp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("hardware"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'v1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wf02"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wt02"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("timestamp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("hardware"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\\\'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------------------+--------------------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                         "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Time")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wf02"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wt02"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("hardware"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------------------+--------------------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1970")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T08:"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.001")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                        v1"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------------------+--------------------------+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1970")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T08:"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.002")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                        \\\\"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------------------+--------------------------+")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# select")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" code "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" code "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'string1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'string2'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("Used in"),t("code",[s._v("LOAD")]),s._v(" / "),t("code",[s._v("REMOVE")]),s._v(" / "),t("code",[s._v("SETTLE")]),s._v(" instructions to represent file path.")]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# load")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("LOAD")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'examplePath'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# remove")]),s._v("\nREMOVE "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'examplePath'")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# SETTLE")]),s._v("\nSETTLE "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'examplePath'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("Password fields in user management statements")]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# write_pwd is the password")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USER")]),s._v(" ln_write_user "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'write_pwd'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("Full Java class names in UDF and trigger management statements")]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Trigger example. Full java class names after 'AS' should be string literals.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TRIGGER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token identifier"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")]),s._v("alert-listener-sg1d1s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("`")])]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AFTER")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s1\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.apache.iotdb.db.engine.trigger.example.AlertListener'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'lo'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'0'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" \n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'hi'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'100.0'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# UDF example. Full java class names after 'AS' should be string literals.")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FUNCTION")]),s._v(" example "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'org.apache.iotdb.udf.UDTFExample'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])])]),s._v(" "),t("li",[t("p",[t("code",[s._v("AS")]),s._v(" function provided by IoTDB can assign an alias to time series selected in query. Alias can be constant(including string) or identifier.")]),s._v(" "),t("div",{staticClass:"language-SQL line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" s1 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'temperature'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" s2 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'speed'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wf01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wt01"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Header of dataset")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------------------+-----------|-----+")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                         "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Time")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("temperature"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("speed"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-----------------------------+-----------|-----+")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("The key/value of an attribute can be String Literal and identifier, more details can be found at "),t("strong",[s._v("key-value pair")]),s._v(" part.")])])]),s._v(" "),t("h3",{attrs:{id:"how-to-use-quotation-marks-in-string-literals"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-quotation-marks-in-string-literals"}},[s._v("#")]),s._v(" How to use quotation marks in String Literals")]),s._v(" "),t("p",[s._v("There are several ways to include quote characters within a string:")]),s._v(" "),t("ul",[t("li",[t("code",[s._v("'")]),s._v(" inside a string quoted with "),t("code",[s._v('"')]),s._v(" needs no special treatment and need not be doubled or escaped. In the same way, "),t("code",[s._v('"')]),s._v(" inside a string quoted with "),t("code",[s._v("'")]),s._v(" needs no special treatment.")]),s._v(" "),t("li",[s._v("A "),t("code",[s._v("'")]),s._v(" inside a string quoted with "),t("code",[s._v("'")]),s._v(" may be written as "),t("code",[s._v("''")]),s._v(".")]),s._v(" "),t("li",[s._v("A "),t("code",[s._v('"')]),s._v(" inside a string quoted with "),t("code",[s._v('"')]),s._v(" may be written as "),t("code",[s._v('""')]),s._v(".")])]),s._v(" "),t("p",[s._v("The following examples demonstrate how quoting and escaping work:")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'string'")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// string")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\"string\"'")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "string"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'""string""\'')]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// ""string""')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'string'")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 'string")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"string"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// string")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"'string'\"")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 'string'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"''string''\"")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ''string''")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"string"')]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('// "string')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h2",{attrs:{id:"numeric-literals"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#numeric-literals"}},[s._v("#")]),s._v(" Numeric Literals")]),s._v(" "),t("p",[s._v("Number literals include integer (exact-value) literals and floating-point (approximate-value) literals.")]),s._v(" "),t("p",[s._v("Integers are represented as a sequence of digits. Numbers may be preceded by "),t("code",[s._v("-")]),s._v(" or "),t("code",[s._v("+")]),s._v(" to indicate a negative or positive value, respectively. Examples: "),t("code",[s._v("1")]),s._v(", "),t("code",[s._v("-1")]),s._v(".")]),s._v(" "),t("p",[s._v("Numbers with fractional part or represented in scientific notation with a mantissa and exponent are approximate-value numbers. Examples: "),t("code",[s._v(".1")]),s._v(", "),t("code",[s._v("3.14")]),s._v(", "),t("code",[s._v("-2.23")]),s._v(", "),t("code",[s._v("+1.70")]),s._v(", "),t("code",[s._v("1.2E3")]),s._v(", "),t("code",[s._v("1.2E-3")]),s._v(", "),t("code",[s._v("-1.2E3")]),s._v(", "),t("code",[s._v("-1.2E-3")]),s._v(".")]),s._v(" "),t("p",[s._v("The "),t("code",[s._v("INT32")]),s._v(" and "),t("code",[s._v("INT64")]),s._v(" data types are integer types and calculations are exact.")]),s._v(" "),t("p",[s._v("The "),t("code",[s._v("FLOAT")]),s._v(" and "),t("code",[s._v("DOUBLE")]),s._v(" data types are floating-point types and calculations are approximate.")]),s._v(" "),t("p",[s._v("An integer may be used in floating-point context; it is interpreted as the equivalent floating-point number.")]),s._v(" "),t("h2",{attrs:{id:"timestamp-literals"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#timestamp-literals"}},[s._v("#")]),s._v(" Timestamp Literals")]),s._v(" "),t("p",[s._v("The timestamp is the time point at which data is produced. It includes absolute timestamps and relative timestamps in IoTDB. For information about timestamp support in IoTDB, see "),t("RouterLink",{attrs:{to:"/UserGuide/V1.0.x/Data-Concept/Data-Type.html"}},[s._v("Data Type Doc")]),s._v(".")],1),s._v(" "),t("p",[s._v("Specially, "),t("code",[s._v("NOW()")]),s._v(" represents a constant timestamp that indicates the system time at which the statement began to execute.")]),s._v(" "),t("h2",{attrs:{id:"boolean-literals"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#boolean-literals"}},[s._v("#")]),s._v(" Boolean Literals")]),s._v(" "),t("p",[s._v("The constants "),t("code",[s._v("TRUE")]),s._v(" and "),t("code",[s._v("FALSE")]),s._v(" evaluate to 1 and 0, respectively. The constant names can be written in any lettercase.")]),s._v(" "),t("h2",{attrs:{id:"null-values"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#null-values"}},[s._v("#")]),s._v(" NULL Values")]),s._v(" "),t("p",[s._v("The "),t("code",[s._v("NULL")]),s._v(" value means “no data.” "),t("code",[s._v("NULL")]),s._v(" can be written in any lettercase.")])])}),[],!1,null,null,null);t.default=n.exports}}]);