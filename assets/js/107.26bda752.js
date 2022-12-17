(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{509:function(t,a,s){"use strict";s.r(a);var e=s(19),r=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"logical-operators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logical-operators"}},[t._v("#")]),t._v(" Logical Operators")]),t._v(" "),a("h2",{attrs:{id:"unary-logical-operators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unary-logical-operators"}},[t._v("#")]),t._v(" Unary Logical Operators")]),t._v(" "),a("p",[t._v("Supported operator "),a("code",[t._v("!")])]),t._v(" "),a("p",[t._v("Supported input data types: "),a("code",[t._v("BOOLEAN")])]),t._v(" "),a("p",[t._v("Output data type: "),a("code",[t._v("BOOLEAN")])]),t._v(" "),a("p",[t._v("Hint: the priority of "),a("code",[t._v("!")]),t._v(" is the same as "),a("code",[t._v("-")]),t._v(". Remember to use brackets to modify priority.")]),t._v(" "),a("h2",{attrs:{id:"binary-logical-operators"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#binary-logical-operators"}},[t._v("#")]),t._v(" Binary Logical Operators")]),t._v(" "),a("p",[t._v("Supported operators AND:"),a("code",[t._v("and")]),t._v(","),a("code",[t._v("&")]),t._v(", "),a("code",[t._v("&&")]),t._v("; OR:"),a("code",[t._v("or")]),t._v(","),a("code",[t._v("|")]),t._v(","),a("code",[t._v("||")])]),t._v(" "),a("p",[t._v("Supported input data types: "),a("code",[t._v("BOOLEAN")])]),t._v(" "),a("p",[t._v("Output data type: "),a("code",[t._v("BOOLEAN")])]),t._v(" "),a("p",[t._v("Note: Only when the left operand and the right operand under a certain timestamp are both "),a("code",[t._v("BOOLEAN")]),t._v(" type, the binary logic operation will have an output value.")]),t._v(" "),a("p",[a("strong",[t._v("Example:")])]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<=")]),t._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("运行结果")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("IoTDB> select a, b, a > 10, a <= b, !(a <= b), a > 10 && a > b from root.test;\n+-----------------------------+-----------+-----------+----------------+--------------------------+---------------------------+------------------------------------------------+\n|                         Time|root.test.a|root.test.b|root.test.a > 10|root.test.a <= root.test.b|!root.test.a <= root.test.b|(root.test.a > 10) & (root.test.a > root.test.b)|\n+-----------------------------+-----------+-----------+----------------+--------------------------+---------------------------+------------------------------------------------+\n|1970-01-01T08:00:00.001+08:00|         23|       10.0|            true|                     false|                       true|                                            true|\n|1970-01-01T08:00:00.002+08:00|         33|       21.0|            true|                     false|                       true|                                            true|\n|1970-01-01T08:00:00.004+08:00|         13|       15.0|            true|                      true|                      false|                                           false|\n|1970-01-01T08:00:00.005+08:00|         26|        0.0|            true|                     false|                       true|                                            true|\n|1970-01-01T08:00:00.008+08:00|          1|       22.0|           false|                      true|                      false|                                           false|\n|1970-01-01T08:00:00.010+08:00|         23|       12.0|            true|                     false|                       true|                                            true|\n+-----------------------------+-----------+-----------+----------------+--------------------------+---------------------------+------------------------------------------------+\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);