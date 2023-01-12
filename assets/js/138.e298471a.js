(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{540:function(s,a,e){"use strict";e.r(a);var t=e(19),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"query-filter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-filter"}},[s._v("#")]),s._v(" Query Filter")]),s._v(" "),a("p",[s._v("In IoTDB query statements, two filter conditions, "),a("strong",[s._v("time filter")]),s._v(" and "),a("strong",[s._v("value filter")]),s._v(", are supported.")]),s._v(" "),a("p",[s._v("The supported operators are as follows:")]),s._v(" "),a("ul",[a("li",[s._v("Comparison operators: greater than ("),a("code",[s._v(">")]),s._v("), greater than or equal ( "),a("code",[s._v(">=")]),s._v("), equal ( "),a("code",[s._v("=")]),s._v(" or "),a("code",[s._v("==")]),s._v("), not equal ( "),a("code",[s._v("!=")]),s._v(" or "),a("code",[s._v("<>")]),s._v("), less than or equal ( "),a("code",[s._v("<=")]),s._v("), less than ( "),a("code",[s._v("<")]),s._v(").")]),s._v(" "),a("li",[s._v("Logical operators: and ( "),a("code",[s._v("AND")]),s._v(" or "),a("code",[s._v("&")]),s._v(" or "),a("code",[s._v("&&")]),s._v("), or ( "),a("code",[s._v("OR")]),s._v(" or "),a("code",[s._v("|")]),s._v(" or "),a("code",[s._v("||")]),s._v("), not ( "),a("code",[s._v("NOT")]),s._v(" or "),a("code",[s._v("!")]),s._v(").")]),s._v(" "),a("li",[s._v("Range contains operator: contains ( "),a("code",[s._v("IN")]),s._v(" ).")]),s._v(" "),a("li",[s._v("String matches operator: "),a("code",[s._v("LIKE")]),s._v(", "),a("code",[s._v("REGEXP")]),s._v(".")])]),s._v(" "),a("h2",{attrs:{id:"time-filter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#time-filter"}},[s._v("#")]),s._v(" Time Filter")]),s._v(" "),a("p",[s._v("Use time filters to filter data for a specific time range. For supported formats of timestamps, please refer to "),a("RouterLink",{attrs:{to:"/UserGuide/Master/Data-Concept/Data-Type.html"}},[s._v("Timestamp")]),s._v(" .")],1),s._v(" "),a("p",[s._v("An example is as follows:")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("Select data with timestamp greater than 2022-01-01T00:05:00.000:")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" s1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T00:"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("05")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("Select data with timestamp equal to 2022-01-01T00:05:00.000:")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" s1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T00:"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("05")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("Select the data in the time interval [2017-11-01T00:05:00.000, 2017-11-01T00:12:00.000):")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" s1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T00:"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("05")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T00:"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("p",[s._v("Note: In the above example, "),a("code",[s._v("time")]),s._v(" can also be written as "),a("code",[s._v("timestamp")]),s._v(".")]),s._v(" "),a("h2",{attrs:{id:"value-filter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#value-filter"}},[s._v("#")]),s._v(" Value Filter")]),s._v(" "),a("p",[s._v("Use value filters to filter data whose data values meet certain criteria. "),a("strong",[s._v("Allow")]),s._v(" to use a time series not selected in the select clause as a value filter.")]),s._v(" "),a("p",[s._v("An example is as follows:")]),s._v(" "),a("ol",[a("li",[a("p",[s._v("Select data with a value greater than 36.5:")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" temperature "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" temperature "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("36.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("Select data with value equal to true:")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("Select data for the interval [36.5,40] or not:")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" temperature "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" temperature "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("between")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("36.5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" temperature "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" temperature "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("between")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("36.5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("40")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("Select data with values within a specific range:")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" code "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" code "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'200'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'300'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'400'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'500'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("Select data with values outside a certain range:")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" code "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" code "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'200'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'300'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'400'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'500'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("Select data with values is null:")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" code "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" temperature "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("is")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("Select data with values is not null:")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" code "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" temperature "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("is")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])]),s._v(" "),a("h2",{attrs:{id:"fuzzy-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fuzzy-query"}},[s._v("#")]),s._v(" Fuzzy Query")]),s._v(" "),a("p",[s._v("Fuzzy query is divided into Like statement and Regexp statement, both of which can support fuzzy matching of TEXT type data.")]),s._v(" "),a("p",[s._v("Like statement:")]),s._v(" "),a("h3",{attrs:{id:"fuzzy-matching-using-like"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fuzzy-matching-using-like"}},[s._v("#")]),s._v(" Fuzzy matching using "),a("code",[s._v("Like")])]),s._v(" "),a("p",[s._v("In the value filter condition, for TEXT type data, use "),a("code",[s._v("Like")]),s._v(" and "),a("code",[s._v("Regexp")]),s._v(" operators to perform fuzzy matching on data.")]),s._v(" "),a("p",[a("strong",[s._v("Matching rules:")])]),s._v(" "),a("ul",[a("li",[s._v("The percentage ("),a("code",[s._v("%")]),s._v(") wildcard matches any string of zero or more characters.")]),s._v(" "),a("li",[s._v("The underscore ("),a("code",[s._v("_")]),s._v(") wildcard matches any single character.")])]),s._v(" "),a("p",[a("strong",[s._v("Example 1:")]),s._v(" Query data containing "),a("code",[s._v("'cc'")]),s._v(" in "),a("code",[s._v("value")]),s._v(" under "),a("code",[s._v("root.sg.d1")]),s._v(".")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> select * from root.sg.d1 where value like '%cc%'\n+-----------------------------+----------------+\n|                         Time|root.sg.d1.value|\n+-----------------------------+----------------+\n|2017-11-01T00:00:00.000+08:00|        aabbccdd| \n|2017-11-01T00:00:01.000+08:00|              cc|\n+-----------------------------+----------------+\nTotal line number = 2\nIt costs 0.002s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("strong",[s._v("Example 2:")]),s._v(" Query data that consists of 3 characters and the second character is "),a("code",[s._v("'b'")]),s._v(" in "),a("code",[s._v("value")]),s._v(" under "),a("code",[s._v("root.sg.d1")]),s._v(".")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> select * from root.sg.device where value like '_b_'\n+-----------------------------+----------------+\n|                         Time|root.sg.d1.value|\n+-----------------------------+----------------+\n|2017-11-01T00:00:02.000+08:00|             abc| \n+-----------------------------+----------------+\nTotal line number = 1\nIt costs 0.002s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"fuzzy-matching-using-regexp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fuzzy-matching-using-regexp"}},[s._v("#")]),s._v(" Fuzzy matching using "),a("code",[s._v("Regexp")])]),s._v(" "),a("p",[s._v("The filter conditions that need to be passed in are regular expressions in the Java standard library style.")]),s._v(" "),a("p",[a("strong",[s._v("Examples of common regular matching:")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("All characters with a length of 3-20: ^.{3,20}$\nUppercase english characters: ^[A-Z]+$\nNumbers and English characters: ^[A-Za-z0-9]+$\nBeginning with a: ^a.*\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("strong",[s._v("Example 1:")]),s._v(" Query a string composed of 26 English characters for the value under root.sg.d1")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> select * from root.sg.d1 where value regexp '^[A-Za-z]+$'\n+-----------------------------+----------------+\n|                         Time|root.sg.d1.value|\n+-----------------------------+----------------+\n|2017-11-01T00:00:00.000+08:00|        aabbccdd| \n|2017-11-01T00:00:01.000+08:00|              cc|\n+-----------------------------+----------------+\nTotal line number = 2\nIt costs 0.002s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[a("strong",[s._v("Example 2:")]),s._v(" Query root.sg.d1 where the value value is a string composed of 26 lowercase English characters and the time is greater than 100")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> select * from root.sg.d1 where value regexp '^[a-z]+$' and time > 100\n+-----------------------------+----------------+\n|                         Time|root.sg.d1.value|\n+-----------------------------+----------------+\n|2017-11-01T00:00:00.000+08:00|        aabbccdd| \n|2017-11-01T00:00:01.000+08:00|              cc|\n+-----------------------------+----------------+\nTotal line number = 2\nIt costs 0.002s\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);