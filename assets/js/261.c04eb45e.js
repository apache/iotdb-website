(window.webpackJsonp=window.webpackJsonp||[]).push([[261],{664:function(a,s,t){"use strict";t.r(s);var e=t(19),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"csv-tool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#csv-tool"}},[a._v("#")]),a._v(" CSV Tool")]),a._v(" "),s("p",[a._v("The CSV tool can help you import data in CSV format to IoTDB or export data from IoTDB to a CSV file.")]),a._v(" "),s("h2",{attrs:{id:"usage-of-import-csv-sh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage-of-import-csv-sh"}},[a._v("#")]),a._v(" Usage of import-csv.sh")]),a._v(" "),s("h3",{attrs:{id:"create-metadata-optional"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-metadata-optional"}},[a._v("#")]),a._v(" Create metadata (optional)")]),a._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SET")]),a._v(" STORAGE "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("GROUP")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TO")]),a._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("fit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("d1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SET")]),a._v(" STORAGE "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("GROUP")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TO")]),a._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("fit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("d2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("SET")]),a._v(" STORAGE "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("GROUP")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TO")]),a._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("fit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" TIMESERIES root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("fit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("d1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("s1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WITH")]),a._v(" DATATYPE"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("INT32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("ENCODING"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("RLE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" TIMESERIES root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("fit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("d1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("s2 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WITH")]),a._v(" DATATYPE"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("TEXT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("ENCODING"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("PLAIN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" TIMESERIES root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("fit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("d2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("s1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WITH")]),a._v(" DATATYPE"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("INT32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("ENCODING"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("RLE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" TIMESERIES root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("fit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("d2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("s3 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WITH")]),a._v(" DATATYPE"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("INT32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("ENCODING"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("RLE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("CREATE")]),a._v(" TIMESERIES root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("fit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("s1 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("WITH")]),a._v(" DATATYPE"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("INT32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("ENCODING"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("RLE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("p",[a._v("IoTDB has the ability of type inference, so it is not necessary to create metadata before data import. However, we still recommend creating metadata before importing data using the CSV import tool, as this can avoid unnecessary type conversion errors.")]),a._v(" "),s("h3",{attrs:{id:"sample-csv-file-to-be-imported"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sample-csv-file-to-be-imported"}},[a._v("#")]),a._v(" Sample CSV file to be imported")]),a._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("Time")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("fit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("d1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("s1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("fit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("d1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("s2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("fit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("d2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("s1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("fit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("d2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("s3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("fit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("s1\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("hello"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("300")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("400")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("500")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("world"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("600")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("700")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("800")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("900")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"hello, \\"world\\""')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1200")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h3",{attrs:{id:"syntax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[a._v("#")]),a._v(" Syntax")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Unix/OS X")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tools/import-csv.sh "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ip"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("username"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("password"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("xxx.csv"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Windows")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tools"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("import-csv.bat "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ip"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("username"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("password"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("xxx.csv"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("h3",{attrs:{id:"example"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[a._v("#")]),a._v(" Example")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Unix/OS X")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tools/import-csv.sh "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6667")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" example-filename.csv\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Windows")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tools"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("import-csv.bat "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6667")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v(" example-filename.csv\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("h3",{attrs:{id:"note"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#note"}},[a._v("#")]),a._v(" Note")]),a._v(" "),s("p",[a._v("Note that the following special characters in fields need to be checked before importing:")]),a._v(" "),s("ol",[s("li",[s("code",[a._v(",")]),a._v(" : fields containing "),s("code",[a._v(",")]),a._v(" should be quoted by a pair of "),s("code",[a._v('"')]),a._v(" or a pair of "),s("code",[a._v("'")]),a._v(".")]),a._v(" "),s("li",[s("code",[a._v('"')]),a._v(" : "),s("code",[a._v('"')]),a._v(" in fields should be replaced by "),s("code",[a._v('\\"')]),a._v(" or fields should be enclosed by "),s("code",[a._v("'")]),a._v(".")]),a._v(" "),s("li",[s("code",[a._v("'")]),a._v(" : "),s("code",[a._v("'")]),a._v(" in fields should be replaced by "),s("code",[a._v("\\'")]),a._v(" or fields should be enclosed by "),s("code",[a._v('"')]),a._v(".")]),a._v(" "),s("li",[a._v("you can input time format like "),s("code",[a._v("yyyy-MM-dd'T'HH:mm:ss")]),a._v(", "),s("code",[a._v("yyy-MM-dd HH:mm:ss")]),a._v(", or "),s("code",[a._v("yyyy-MM-dd'T'HH:mm:ss.SSSZ")]),a._v(".")])]),a._v(" "),s("h2",{attrs:{id:"usage-of-export-csv-sh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage-of-export-csv-sh"}},[a._v("#")]),a._v(" Usage of export-csv.sh")]),a._v(" "),s("h3",{attrs:{id:"syntax-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#syntax-2"}},[a._v("#")]),a._v(" Syntax")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Unix/OS X")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tools/export-csv.sh "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ip"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("username"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("password"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-td")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("directory"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-tf "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("time-format"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("sqlfile"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Windows")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tools"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("export-csv.bat "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ip"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("port"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("username"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("password"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-td")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("directory"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("-tf "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("time-format"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("sqlfile"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[a._v("After running the export script, you need to enter some queries or specify some SQL files. If there are multiple SQLs in one SQL file, the SQLs should be separated by line breaks.")]),a._v(" "),s("h3",{attrs:{id:"sample-sql-file"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sample-sql-file"}},[a._v("#")]),a._v(" Sample SQL file")]),a._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("fit"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("d1\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("from")]),a._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("sg1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("d1\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h3",{attrs:{id:"example-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[a._v("#")]),a._v(" Example")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Unix/OS X")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tools/export-csv.sh "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6667")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-td")]),a._v(" ./\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Or")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tools/export-csv.sh "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6667")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-td")]),a._v(" ./ "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-tf")]),a._v(" yyyy-MM-dd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" HH:mm:ss\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Or")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tools/export-csv.sh "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6667")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-td")]),a._v(" ./ "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" sql.txt\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Or")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tools/export-csv.sh "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6667")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-td")]),a._v(" ./ "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-tf")]),a._v(" yyyy-MM-dd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" HH:mm:ss "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" sql.txt\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Windows")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tools/export-csv.bat "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6667")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-td")]),a._v(" ./\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Or")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tools/export-csv.bat "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6667")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-td")]),a._v(" ./ "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-tf")]),a._v(" yyyy-MM-dd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" HH:mm:ss\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Or")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tools/export-csv.bat "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6667")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-td")]),a._v(" ./ "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" sql.txt\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Or")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" tools/export-csv.bat "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6667")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-td")]),a._v(" ./ "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-tf")]),a._v(" yyyy-MM-dd"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" HH:mm:ss "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" sql.txt\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br")])]),s("h3",{attrs:{id:"note-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#note-2"}},[a._v("#")]),a._v(" Note")]),a._v(" "),s("p",[a._v("Note that if fields exported by the export tool have the following special characters:")]),a._v(" "),s("ol",[s("li",[s("code",[a._v(",")]),a._v(": the field will be enclosed by "),s("code",[a._v('"')]),a._v(".")]),a._v(" "),s("li",[s("code",[a._v('"')]),a._v(": the field will be enclosed by "),s("code",[a._v('"')]),a._v(" and the original characters "),s("code",[a._v('"')]),a._v(" in the field will be replaced by "),s("code",[a._v('\\"')]),a._v(".")])])])}),[],!1,null,null,null);s.default=r.exports}}]);