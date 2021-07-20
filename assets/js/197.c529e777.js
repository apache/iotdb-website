(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{764:function(s,t,a){"use strict";a.r(t);var e=a(70),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"csv-tool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csv-tool"}},[s._v("#")]),s._v(" CSV Tool")]),s._v(" "),a("p",[s._v("The CSV tool can help you import data in CSV format to IoTDB or export data from IoTDB to a CSV file.")]),s._v(" "),a("h2",{attrs:{id:"usage-of-import-csv-sh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-of-import-csv-sh"}},[s._v("#")]),s._v(" Usage of import-csv.sh")]),s._v(" "),a("h3",{attrs:{id:"create-metadata-optional"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-metadata-optional"}},[s._v("#")]),s._v(" Create metadata (optional)")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" STORAGE "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" STORAGE "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" STORAGE "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" TIMESERIES root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" DATATYPE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("INT32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("ENCODING"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("RLE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" TIMESERIES root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s2 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" DATATYPE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TEXT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("ENCODING"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("PLAIN"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" TIMESERIES root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" DATATYPE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("INT32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("ENCODING"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("RLE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" TIMESERIES root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s3 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" DATATYPE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("INT32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("ENCODING"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("RLE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v(" TIMESERIES root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s1 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WITH")]),s._v(" DATATYPE"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("INT32"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("ENCODING"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("RLE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[s._v("IoTDB has the ability of type inference, so it is not necessary to create metadata before data import. However, we still recommend creating metadata before importing data using the CSV import tool, as this can avoid unnecessary type conversion errors.")]),s._v(" "),a("h3",{attrs:{id:"sample-csv-file-to-be-imported"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sample-csv-file-to-be-imported"}},[s._v("#")]),s._v(" Sample CSV file to be imported")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("p"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("s1\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("hello"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("400")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("world"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("600")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("700")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("800")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("900")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello, \\"world\\""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1200")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Unix/OS X")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" tools/import-csv.sh -h "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ip"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -p "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -u "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("username"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -pw "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("password"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -f "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("xxx.csv"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Windows")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" tools"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("import-csv.bat -h "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ip"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -p "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -u "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("username"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -pw "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("password"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -f "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("xxx.csv"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" Example")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Unix/OS X")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" tools/import-csv.sh -h "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6667")]),s._v(" -u root -pw root -f example-filename.csv\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Windows")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" tools"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("import-csv.bat -h "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6667")]),s._v(" -u root -pw root -f example-filename.csv\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"note"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#note"}},[s._v("#")]),s._v(" Note")]),s._v(" "),a("p",[s._v("Note that the following special characters in fields need to be checked before importing:")]),s._v(" "),a("ol",[a("li",[a("code",[s._v(",")]),s._v(" : fields containing "),a("code",[s._v(",")]),s._v(" should be quoted by a pair of "),a("code",[s._v('"')]),s._v(" or a pair of "),a("code",[s._v("'")]),s._v(".")]),s._v(" "),a("li",[a("code",[s._v('"')]),s._v(" : "),a("code",[s._v('"')]),s._v(" in fields should be replaced by "),a("code",[s._v('\\"')]),s._v(" or fields should be enclosed by "),a("code",[s._v("'")]),s._v(".")]),s._v(" "),a("li",[a("code",[s._v("'")]),s._v(" : "),a("code",[s._v("'")]),s._v(" in fields should be replaced by "),a("code",[s._v("\\'")]),s._v(" or fields should be enclosed by "),a("code",[s._v('"')]),s._v(".")]),s._v(" "),a("li",[s._v("you can input time format like "),a("code",[s._v("yyyy-MM-dd'T'HH:mm:ss")]),s._v(", "),a("code",[s._v("yyy-MM-dd HH:mm:ss")]),s._v(", or "),a("code",[s._v("yyyy-MM-dd'T'HH:mm:ss.SSSZ")]),s._v(".")])]),s._v(" "),a("h2",{attrs:{id:"usage-of-export-csv-sh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-of-export-csv-sh"}},[s._v("#")]),s._v(" Usage of export-csv.sh")]),s._v(" "),a("h3",{attrs:{id:"syntax-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax-2"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Unix/OS X")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" tools/export-csv.sh -h "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ip"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -p "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -u "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("username"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -pw "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("password"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -td "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("directory"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-tf "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("time-format"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -s "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("sqlfile"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Windows")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" tools"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("export-csv.bat -h "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ip"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -p "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("port"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -u "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("username"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -pw "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("password"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -td "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("directory"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("-tf "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("time-format"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" -s "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("sqlfile"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("After running the export script, you need to enter some queries or specify some SQL files. If there are multiple SQLs in one SQL file, the SQLs should be separated by line breaks.")]),s._v(" "),a("h3",{attrs:{id:"sample-sql-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sample-sql-file"}},[s._v("#")]),s._v(" Sample SQL file")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("fit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"example-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[s._v("#")]),s._v(" Example")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Unix/OS X")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" tools/export-csv.sh -h "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6667")]),s._v(" -u root -pw root -td ./\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Or")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" tools/export-csv.sh -h "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6667")]),s._v(" -u root -pw root -td ./ -tf yyyy-MM-dd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" HH:mm:ss\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Or")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" tools/export-csv.sh -h "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6667")]),s._v(" -u root -pw root -td ./ -s sql.txt\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Or")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" tools/export-csv.sh -h "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6667")]),s._v(" -u root -pw root -td ./ -tf yyyy-MM-dd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" HH:mm:ss -s sql.txt\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Windows")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" tools/export-csv.bat -h "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6667")]),s._v(" -u root -pw root -td ./\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Or")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" tools/export-csv.bat -h "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6667")]),s._v(" -u root -pw root -td ./ -tf yyyy-MM-dd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" HH:mm:ss\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Or")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" tools/export-csv.bat -h "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6667")]),s._v(" -u root -pw root -td ./ -s sql.txt\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Or")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" tools/export-csv.bat -h "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6667")]),s._v(" -u root -pw root -td ./ -tf yyyy-MM-dd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v(" HH:mm:ss -s sql.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h3",{attrs:{id:"note-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#note-2"}},[s._v("#")]),s._v(" Note")]),s._v(" "),a("p",[s._v("Note that if fields exported by the export tool have the following special characters:")]),s._v(" "),a("ol",[a("li",[a("code",[s._v(",")]),s._v(": the field will be enclosed by "),a("code",[s._v('"')]),s._v(".")]),s._v(" "),a("li",[a("code",[s._v('"')]),s._v(": the field will be enclosed by "),a("code",[s._v('"')]),s._v(" and the original characters "),a("code",[s._v('"')]),s._v(" in the field will be replaced by "),a("code",[s._v('\\"')]),s._v(".")])])])}),[],!1,null,null,null);t.default=r.exports}}]);