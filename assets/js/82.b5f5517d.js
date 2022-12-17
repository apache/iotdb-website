(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{486:function(a,e,t){"use strict";t.r(e);var s=t(19),r=Object(s.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"tsfile-tool"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tsfile-tool"}},[a._v("#")]),a._v(" TsFile Tool")]),a._v(" "),e("p",[a._v("TsFile can help you export the result set in the format of TsFile file to the specified path by executing the sql, command line sql, and sql file.")]),a._v(" "),e("h2",{attrs:{id:"usage-of-export-tsfile-sh"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#usage-of-export-tsfile-sh"}},[a._v("#")]),a._v(" Usage of export-tsfile.sh")]),a._v(" "),e("h3",{attrs:{id:"syntax"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[a._v("#")]),a._v(" Syntax")]),a._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Unix/OS X")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tools/export-tsfile.sh  "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ip"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("port"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("username"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("password"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-td")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("directory"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-f "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("export filename"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-q")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("query command"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("sql file"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Windows")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tools"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("export-tsfile.bat "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ip"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("port"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("username"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("password"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-td")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("directory"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-f "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("export filename"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-q")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("query command"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("sql file"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("ul",[e("li",[e("code",[a._v("-h <host>")]),a._v(":\n"),e("ul",[e("li",[a._v("The host address of the IoTDB service.")])])]),a._v(" "),e("li",[e("code",[a._v("-p <port>")]),a._v(":\n"),e("ul",[e("li",[a._v("The port number of the IoTDB service.")])])]),a._v(" "),e("li",[e("code",[a._v("-u <username>")]),a._v(":\n"),e("ul",[e("li",[a._v("The username of the IoTDB service.")])])]),a._v(" "),e("li",[e("code",[a._v("-pw <password>")]),a._v(":\n"),e("ul",[e("li",[a._v("Password for IoTDB service.")])])]),a._v(" "),e("li",[e("code",[a._v("-td <directory>")]),a._v(":\n"),e("ul",[e("li",[a._v("Specify the output path for the exported TsFile file.")])])]),a._v(" "),e("li",[e("code",[a._v("-f <tsfile name>")]),a._v(":\n"),e("ul",[e("li",[a._v("For the file name of the exported TsFile file, just write the file name, and cannot include the file path and suffix. If the sql file or console input contains multiple sqls, multiple files will be generated in the order of sql.")]),a._v(" "),e("li",[a._v('Example: There are three SQLs in the file or command line, and -f param is "dump", then three TsFile files: dump0.tsfile、dump1.tsfile、dump2.tsfile will be generated in the target path.')])])]),a._v(" "),e("li",[e("code",[a._v("-q <query command>")]),a._v(":\n"),e("ul",[e("li",[a._v("Directly specify the query statement you want to execute in the command.")]),a._v(" "),e("li",[a._v("Example: "),e("code",[a._v("select * from root.** limit 100")])])])]),a._v(" "),e("li",[e("code",[a._v("-s <sql file>")]),a._v(":\n"),e("ul",[e("li",[a._v("Specify a SQL file that contains one or more SQL statements. If an SQL file contains multiple SQL statements, the SQL statements should be separated by newlines. Each SQL statement corresponds to an output TsFile file.")])])])]),a._v(" "),e("p",[a._v("In addition, if you do not use the "),e("code",[a._v("-s")]),a._v(" and "),e("code",[a._v("-q")]),a._v(" parameters, after the export script is started, you need to enter the query statement as prompted by the program, and different query results will be saved to different TsFile files.")]),a._v(" "),e("h3",{attrs:{id:"example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" example")]),a._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Unix/OS X")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tools/export-tsfile.sh "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("6667")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" root "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" root "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-td")]),a._v(" ./\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# or")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tools/export-tsfile.sh "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("6667")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" root "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" root "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-td")]),a._v(" ./ "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-q")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"select * from root.**"')]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Or")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tools/export-tsfile.sh "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("6667")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" root "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" root "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-td")]),a._v(" ./ "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" ./sql.txt\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Or")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tools/export-tsfile.sh "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("6667")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" root "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" root "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-td")]),a._v(" ./ "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" ./sql.txt "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" myTsFile\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Windows")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tools/export-tsfile.bat "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("6667")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" root "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" root "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-td")]),a._v(" ./\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Or")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tools/export-tsfile.bat "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("6667")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" root "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" root "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-td")]),a._v(" ./ "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-q")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('"select * from root.**"')]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Or")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tools/export-tsfile.bat "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("6667")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" root "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" root "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-td")]),a._v(" ./ "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" ./sql.txt\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Or")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tools/export-tsfile.bat "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("6667")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" root "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" root "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-td")]),a._v(" ./ "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" ./sql.txt "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" myTsFile\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br"),e("span",{staticClass:"line-number"},[a._v("10")]),e("br"),e("span",{staticClass:"line-number"},[a._v("11")]),e("br"),e("span",{staticClass:"line-number"},[a._v("12")]),e("br"),e("span",{staticClass:"line-number"},[a._v("13")]),e("br"),e("span",{staticClass:"line-number"},[a._v("14")]),e("br"),e("span",{staticClass:"line-number"},[a._v("15")]),e("br"),e("span",{staticClass:"line-number"},[a._v("16")]),e("br"),e("span",{staticClass:"line-number"},[a._v("17")]),e("br")])]),e("h3",{attrs:{id:"example-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[a._v("#")]),a._v(" example")]),a._v(" "),e("ul",[e("li",[a._v("It is recommended not to execute the write data command at the same time when loading data, which may lead to insufficient memory in the JVM.")])])])}),[],!1,null,null,null);e.default=r.exports}}]);