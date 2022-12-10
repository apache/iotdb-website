(window.webpackJsonp=window.webpackJsonp||[]).push([[349],{751:function(e,t,s){"use strict";s.r(t);var a=s(19),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"maintenance-command"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#maintenance-command"}},[e._v("#")]),e._v(" Maintenance Command")]),e._v(" "),t("h2",{attrs:{id:"flush"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#flush"}},[e._v("#")]),e._v(" FLUSH")]),e._v(" "),t("p",[e._v("Persist all the data points in the memory table of the storage group to the disk, and seal the data file.")]),e._v(" "),t("p",[e._v("Note: This command does not need to be invoked manually by the client. IoTDB has WAL to ensure data security\nand IoTDB will flush when appropriate.\nFrequently call flush can result in small data files that degrade query performance.")]),e._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[e._v("IoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" FLUSH \nIoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" FLUSH root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("ln\nIoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" FLUSH root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("sg1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("sg2\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("h2",{attrs:{id:"merge"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#merge"}},[e._v("#")]),e._v(" MERGE")]),e._v(" "),t("p",[e._v("Execute Level Compaction and unsequence Compaction task. Currently IoTDB supports the following two types of SQL to manually trigger the compaction process of data files:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("MERGE")]),e._v(" Execute the level compaction first and then execute the unsequence compaction. In unsequence compaction process, this command is executed very fast by rewriting the overlapped Chunks only, while there is some redundant data on the disk eventually.")]),e._v(" "),t("li",[t("code",[e._v("FULL MERGE")]),e._v(" Execute the level compaction first and then execute the unsequence compaction. In unsequence compaction process, this command is executed slow due to it takes more time to rewrite all data in overlapped files. However, there won't be any redundant data on the disk eventually.")])]),e._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[e._v("IoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("MERGE")]),e._v("\nIoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FULL")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("MERGE")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("h2",{attrs:{id:"clear-cache"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clear-cache"}},[e._v("#")]),e._v(" CLEAR CACHE")]),e._v(" "),t("p",[e._v("Clear the cache of chunk, chunk metadata and timeseries metadata to release the memory footprint.")]),e._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[e._v("IoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" CLEAR CACHE\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"set-ststem-to-readonly-writable"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-ststem-to-readonly-writable"}},[e._v("#")]),e._v(" SET STSTEM TO READONLY / WRITABLE")]),e._v(" "),t("p",[e._v("Manually set IoTDB system to read-only or writable mode.")]),e._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[e._v("IoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SET")]),e._v(" SYSTEM "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("TO")]),e._v(" READONLY\nIoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SET")]),e._v(" SYSTEM "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("TO")]),e._v(" WRITABLE\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("h2",{attrs:{id:"schema-snapshot"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#schema-snapshot"}},[e._v("#")]),e._v(" SCHEMA SNAPSHOT")]),e._v(" "),t("p",[e._v("To speed up restarting of IoTDB, users can create snapshot of schema and avoid recovering schema from mlog file. This feature doesn't support scenarios involving Schema Template, Tag/Attribute, or Aligned Timeseries.")]),e._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[e._v("IoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("CREATE")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SNAPSHOT")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("FOR")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("SCHEMA")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"timeout"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#timeout"}},[e._v("#")]),e._v(" Timeout")]),e._v(" "),t("p",[e._v("IoTDB supports session and query level timeout.")]),e._v(" "),t("h3",{attrs:{id:"session-timeout"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#session-timeout"}},[e._v("#")]),e._v(" Session timeout")]),e._v(" "),t("p",[e._v("Session timeout controls when idle sessions are closed. An idle session is one that had not initiated any query or non-query operations for a period of time.")]),e._v(" "),t("p",[e._v("Session timeout is disabled by default and can be set using the "),t("code",[e._v("session_timeout_threshold")]),e._v(" parameter in IoTDB configuration file.")]),e._v(" "),t("h3",{attrs:{id:"query-timeout"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query-timeout"}},[e._v("#")]),e._v(" Query timeout")]),e._v(" "),t("p",[e._v("For queries that take too long to execute, IoTDB will forcibly interrupt the query and throw a timeout exception, as shown in the figure:")]),e._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[e._v("IoTDB"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("select")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("*")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("from")]),e._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nMsg: "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("701")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("Current")]),e._v(" query "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("is")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("time")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("out")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" please "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("check")]),e._v(" your statement "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("or")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("modify")]),e._v(" timeout parameter"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("p",[e._v("The default timeout of a query is 60000 ms，which can be customized in the configuration file through the "),t("code",[e._v("query_timeout_threshold")]),e._v(" parameter.")]),e._v(" "),t("p",[e._v("If you use JDBC or Session, we also support setting a timeout for a single query（Unit: ms）：")]),e._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("IoTDBStatement")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" statement"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("executeQuery")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),e._v(" sql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("long")]),e._v(" timeoutInMS"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\nsession"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("executeQueryStatement")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("String")]),e._v(" sql"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("long")]),e._v(" timeout"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br")])]),t("blockquote",[t("p",[e._v("If the timeout parameter is not configured or with a negative number, the default timeout time will be used.\nIf value 0 is used, timeout function will be disabled.")])]),e._v(" "),t("h3",{attrs:{id:"query-abort"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#query-abort"}},[e._v("#")]),e._v(" Query abort")]),e._v(" "),t("p",[e._v("In addition to waiting for the query to time out passively, IoTDB also supports stopping the query actively:")]),e._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("KILL")]),e._v(" QUERY "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("queryId"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("You can abort the specified query by specifying "),t("code",[e._v("queryId")]),e._v(". If "),t("code",[e._v("queryId")]),e._v(" is not specified, all executing queries will be killed.")]),e._v(" "),t("p",[e._v("To get the executing "),t("code",[e._v("queryId")]),e._v("，you can use the "),t("code",[e._v("show query processlist")]),e._v(" command，which will show the list of all executing queries，with the following result set：")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Time")]),e._v(" "),t("th",[e._v("queryId")]),e._v(" "),t("th",[e._v("statement")])])]),e._v(" "),t("tbody",[t("tr",[t("td"),e._v(" "),t("td"),e._v(" "),t("td")])])]),e._v(" "),t("p",[e._v("The maximum display length of statement is 64 characters. For statements with more than 64 characters, the intercepted part will be displayed.")])])}),[],!1,null,null,null);t.default=r.exports}}]);