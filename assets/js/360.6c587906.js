(window.webpackJsonp=window.webpackJsonp||[]).push([[360],{762:function(s,e,a){"use strict";a.r(e);var t=a(19),r=Object(t.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"schema-template"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#schema-template"}},[s._v("#")]),s._v(" Schema Template")]),s._v(" "),e("p",[s._v("IoTDB supports the schema template function, enabling different entities of the same type to share metadata, reduce the memory usage of metadata, and simplify the management of numerous entities and measurements.")]),s._v(" "),e("p",[s._v("Note: The "),e("code",[s._v("schema")]),s._v(" keyword in the following statements can be omitted.")]),s._v(" "),e("h2",{attrs:{id:"create-schema-template"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-schema-template"}},[s._v("#")]),s._v(" Create Schema Template")]),s._v(" "),e("p",[s._v("The SQL syntax for creating a metadata template is as follows:")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SCHEMA")]),s._v("? TEMPLATE "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("templateName"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ALIGNED? "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'('")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("measurementId"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("attributeClauses"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("','")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("measurementId"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("attributeClauses"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("')'")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("Example 1:")]),s._v(" Create a template containing two non-aligned timeseires")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("IoTDB"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" create schema template t1 "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("temperature FLOAT "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("encoding")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("RLE, status BOOLEAN "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("encoding")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PLAIN "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("compression")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("SNAPPY"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("Example 2:")]),s._v(" Create a template containing a group of aligned timeseires")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("IoTDB"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" create schema template t2 aligned "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("lat FLOAT "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("encoding")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Gorilla, lon FLOAT "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("encoding")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Gorilla"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("The"),e("code",[s._v("lat")]),s._v(" and "),e("code",[s._v("lon")]),s._v(" measurements are aligned.")]),s._v(" "),e("h2",{attrs:{id:"set-schema-template"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#set-schema-template"}},[s._v("#")]),s._v(" Set Schema Template")]),s._v(" "),e("p",[s._v("The SQL Statement for setting schema template is as follow:")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("IoTDB"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" schema template t1 to root.sg1.d1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("After setting the schema template, you can insert data into the timeseries. For example, suppose there's a storage group root.sg1 and t1 has been set to root.sg1.d1, then timeseries like root.sg1.d1.temperature and root.sg1.d1.status are available and data points can be inserted.")]),s._v(" "),e("p",[e("strong",[s._v("Please notice that, we strongly recommend NOT setting templates on the nodes above the storage group to accommodate future updates and collaboration between modules.")])]),s._v(" "),e("p",[e("strong",[s._v("Attention")]),s._v(": Before inserting data, timeseries defined by the schema template will not be created. You can use the following SQL statement to create the timeseries before inserting data:")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("IoTDB"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" create timeseries of schema template on root.sg1.d1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("Example:")]),s._v(" Execute the following statement")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" schema template t1 to root.sg1.d1\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" schema template t2 to root.sg1.d2\ncreate timeseries of schema template on root.sg1.d1\ncreate timeseries of schema template on root.sg1.d2\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("Show the time series:")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" timeseries root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("+-----------------------+-----+-------------+--------+--------+-----------+----+----------+\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("             timeseries"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("storage group"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("dataType"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("encoding"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("compression"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("tags"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("attributes"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------------------+-----+-------------+--------+--------+-----------+----+----------+\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("root.sg1.d1.temperature"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" null"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     root.sg1"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   FLOAT"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     RLE"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     SNAPPY"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("null"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("      null"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     root.sg1.d1.status"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" null"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     root.sg1"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" BOOLEAN"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   PLAIN"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     SNAPPY"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("null"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("      null"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("        root.sg1.d2.lon"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" null"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     root.sg1"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   FLOAT"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" GORILLA"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     SNAPPY"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("null"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("      null"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("        root.sg1.d2.lat"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" null"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     root.sg1"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   FLOAT"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" GORILLA"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     SNAPPY"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("null"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("      null"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------------------+-----+-------------+--------+--------+-----------+----+----------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("Show the devices:")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" devices root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("+---------------+---------+\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("        devices"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("isAligned"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+---------------+---------+\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    root.sg1.d1"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("    root.sg1.d2"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     "),e("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+---------------+---------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h2",{attrs:{id:"show-schema-template"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#show-schema-template"}},[s._v("#")]),s._v(" Show Schema Template")]),s._v(" "),e("ul",[e("li",[s._v("Show all schema templates")])]),s._v(" "),e("p",[s._v("The SQL statement looks like this:")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("IoTDB"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show schema templates\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("The execution result is as follows:")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("+-------------+\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("template name"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-------------+\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("           t2"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("           t1"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("ul",[e("li",[s._v("Show nodes under in schema template")])]),s._v(" "),e("p",[s._v("The SQL statement looks like this:")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("IoTDB"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show nodes "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" schema template t1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("The execution result is as follows:")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("+-----------+--------+--------+-----------+\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("child nodes"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("dataType"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("encoding"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("compression"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------+--------+--------+-----------+\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("temperature"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   FLOAT"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     RLE"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     SNAPPY"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     status"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" BOOLEAN"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("   PLAIN"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("     SNAPPY"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------+--------+--------+-----------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("ul",[e("li",[s._v("Show the path prefix where a schema template is set")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("IoTDB"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show paths "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("set")]),s._v(" schema template t1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("The execution result is as follows:")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("+-----------+\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("child paths"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------+\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("root.sg1.d1"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("ul",[e("li",[s._v("Show the path prefix where a schema template is used (i.e. the time series has been created)")])]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("IoTDB"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" show paths using schema template t1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("The execution result is as follows:")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("+-----------+\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("child paths"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------+\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("root.sg1.d1"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n+-----------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"deactivate-schematemplate"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#deactivate-schematemplate"}},[s._v("#")]),s._v(" Deactivate SchemaTemplate")]),s._v(" "),e("p",[s._v("If any data points had been inserted into the timeseries concatenated by the path of the node and measurements inside activated template, or "),e("code",[s._v("create timeseries of schema template")]),s._v(" had been issued, you should deactivate template on nodes before unset tempalte upon them.")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("IoTDB"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" deactivate schema template t1 from root.sg1.d1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("This statement will detele corresponding data points as well.")]),s._v(" "),e("h2",{attrs:{id:"unset-schema-template"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#unset-schema-template"}},[s._v("#")]),s._v(" Unset Schema Template")]),s._v(" "),e("p",[s._v("The SQL Statement for unsetting schema template is as follow:")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("IoTDB"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("unset")]),s._v(" schema template t1 from root.sg1.d1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"drop-schema-template"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#drop-schema-template"}},[s._v("#")]),s._v(" Drop Schema Template")]),s._v(" "),e("p",[s._v("The SQL Statement for dropping schema template is as follow:")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("IoTDB"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" drop schema template t1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("strong",[s._v("Attention")]),s._v(": Dropping an already set template is not supported.")])])}),[],!1,null,null,null);e.default=r.exports}}]);