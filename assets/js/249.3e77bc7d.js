(window.webpackJsonp=window.webpackJsonp||[]).push([[249],{1125:function(e,t,s){"use strict";s.r(t);var a=s(83),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h2",{attrs:{id:"maintenance-command"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#maintenance-command"}},[e._v("#")]),e._v(" Maintenance Command")]),e._v(" "),s("h3",{attrs:{id:"flush"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flush"}},[e._v("#")]),e._v(" FLUSH")]),e._v(" "),s("p",[e._v("Persist all the data points in the memory table of the storage group to the disk, and seal the data file.")]),e._v(" "),s("p",[e._v("Note: This command does not need to be invoked manually by the client. IoTDB has WAL to ensure data security\nand IoTDB will flush when appropriate.\nFrequently call flush can result in small data files that degrade query performance.")]),e._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[e._v("IoTDB"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" FLUSH \nIoTDB"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" FLUSH root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("ln\nIoTDB"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" FLUSH root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("sg1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("sg2\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("h3",{attrs:{id:"merge"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#merge"}},[e._v("#")]),e._v(" MERGE")]),e._v(" "),s("p",[e._v("Merge sequence and unsequence data. Currently IoTDB supports the following two types of SQL to manually trigger the merge process of data files:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("MERGE")]),e._v(" Only rewrite overlapped Chunks, the merge speed is quick, while there will be redundant data on the disk eventually.")]),e._v(" "),s("li",[s("code",[e._v("FULL MERGE")]),e._v(" Rewrite all data in overlapped files, the merge speed is slow, but there will be no redundant data on the disk eventually.")])]),e._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[e._v("IoTDB"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("MERGE")]),e._v("\nIoTDB"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FULL")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("MERGE")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h3",{attrs:{id:"clear-cache"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#clear-cache"}},[e._v("#")]),e._v(" CLEAR CACHE")]),e._v(" "),s("p",[e._v("Clear the cache of chunk, chunk metadata and timeseries metadata to release the memory footprint.")]),e._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[e._v("IoTDB"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" CLEAR CACHE\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h3",{attrs:{id:"set-ststem-to-readonly-writable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#set-ststem-to-readonly-writable"}},[e._v("#")]),e._v(" SET STSTEM TO READONLY / WRITABLE")]),e._v(" "),s("p",[e._v("Manually set IoTDB system to read-only or writable mode.")]),e._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[e._v("IoTDB"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SET")]),e._v(" SYSTEM "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("TO")]),e._v(" READONLY\nIoTDB"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SET")]),e._v(" SYSTEM "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("TO")]),e._v(" WRITABLE\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h3",{attrs:{id:"schema-snapshot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#schema-snapshot"}},[e._v("#")]),e._v(" SCHEMA SNAPSHOT")]),e._v(" "),s("p",[e._v("To speed up restarting of IoTDB, users can create snapshot of schema and avoid recovering schema from mlog file.")]),e._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[e._v("IoTDB"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CREATE")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SNAPSHOT")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FOR")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SCHEMA")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h3",{attrs:{id:"kill-query"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#kill-query"}},[e._v("#")]),e._v(" Kill Query")]),e._v(" "),s("p",[e._v("When using IoTDB, you may encounter the following situations: you have entered a query statement, but can not get the result for a long time, as this query contains too much data or some other reasons, and have to wait until the query ends.\nSince version 0.12, IoTDB has provided two solutions for queries with long execution time: query timeout and query abort.")]),e._v(" "),s("h4",{attrs:{id:"query-timeout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-timeout"}},[e._v("#")]),e._v(" Query timeout")]),e._v(" "),s("p",[e._v("For queries that take too long to execute, IoTDB will forcibly interrupt the query and throw a timeout exception, as shown in the figure:")]),e._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[e._v("IoTDB"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nMsg: "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("701")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Current")]),e._v(" query "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("is")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("time")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("out")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" please "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("check")]),e._v(" your statement "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("or")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("modify")]),e._v(" timeout parameter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("The default timeout of the system is 60000 ms，which can be customized in the configuration file through the "),s("code",[e._v("query_timeout_threshold")]),e._v(" parameter.")]),e._v(" "),s("p",[e._v("If you use JDBC or Session, we also support setting a timeout for a single query（Unit: ms）：")]),e._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("IoTDBStatement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" statement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("executeQuery")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),e._v(" sql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("long")]),e._v(" timeoutInMS"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\nsession"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("executeQueryStatement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),e._v(" sql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("long")]),e._v(" timeout"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("If the timeout parameter is not configured or with value 0, the default timeout time will be used.")]),e._v(" "),s("h4",{attrs:{id:"query-abort"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#query-abort"}},[e._v("#")]),e._v(" Query abort")]),e._v(" "),s("p",[e._v("In addition to waiting for the query to time out passively, IoTDB also supports stopping the query actively:")]),e._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("KILL")]),e._v(" QUERY "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("queryId"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("You can abort the specified query by specifying "),s("code",[e._v("queryId")]),e._v(". If "),s("code",[e._v("queryId")]),e._v(" is not specified, all executing queries will be killed.")]),e._v(" "),s("p",[e._v("To get the executing "),s("code",[e._v("queryId")]),e._v("，you can use the "),s("code",[e._v("show query processlist")]),e._v(" command，which will show the list of all executing queries，with the following result set：")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Time")]),e._v(" "),s("th",[e._v("queryId")]),e._v(" "),s("th",[e._v("statement")])])]),e._v(" "),s("tbody",[s("tr",[s("td"),e._v(" "),s("td"),e._v(" "),s("td")])])]),e._v(" "),s("p",[e._v("The maximum display length of statement is 64 characters. For statements with more than 64 characters, the intercepted part will be displayed.")])])}),[],!1,null,null,null);t.default=r.exports}}]);