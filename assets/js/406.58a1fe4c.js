(window.webpackJsonp=window.webpackJsonp||[]).push([[406],{809:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"insert"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#insert"}},[t._v("#")]),t._v(" INSERT")]),t._v(" "),s("p",[t._v("IoTDB provides users with a variety of ways to insert real-time data, such as directly inputting "),s("RouterLink",{attrs:{to:"/UserGuide/V0.13.x/Reference/SQL-Reference.html"}},[t._v("INSERT SQL statement")]),t._v(" in "),s("RouterLink",{attrs:{to:"/UserGuide/V0.13.x/QuickStart/Command-Line-Interface.html"}},[t._v("Client/Shell tools")]),t._v(", or using "),s("RouterLink",{attrs:{to:"/UserGuide/V0.13.x/API/Programming-JDBC.html"}},[t._v("Java JDBC")]),t._v(" to perform single or batch execution of "),s("RouterLink",{attrs:{to:"/UserGuide/V0.13.x/Reference/SQL-Reference.html"}},[t._v("INSERT SQL statement")]),t._v(".")],1),t._v(" "),s("p",[t._v("This section mainly introduces the use of "),s("RouterLink",{attrs:{to:"/UserGuide/V0.13.x/Reference/SQL-Reference.html"}},[t._v("INSERT SQL statement")]),t._v(" for real-time data import in the scenario.")],1),t._v(" "),s("h2",{attrs:{id:"use-of-insert-statements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-of-insert-statements"}},[t._v("#")]),t._v(" Use of INSERT Statements")]),t._v(" "),s("p",[t._v("The "),s("RouterLink",{attrs:{to:"/UserGuide/V0.13.x/Reference/SQL-Reference.html"}},[t._v("INSERT SQL statement")]),t._v(" statement is used to insert data into one or more specified timeseries created. For each point of data inserted, it consists of a "),s("RouterLink",{attrs:{to:"/UserGuide/V0.13.x/Data-Concept/Data-Model-and-Terminology.html"}},[t._v("timestamp")]),t._v(" and a sensor acquisition value (see "),s("RouterLink",{attrs:{to:"/UserGuide/V0.13.x/Data-Concept/Data-Type.html"}},[t._v("Data Type")]),t._v(").")],1),t._v(" "),s("p",[t._v("In the scenario of this section, take two timeseries "),s("code",[t._v("root.ln.wf02.wt02.status")]),t._v(" and "),s("code",[t._v("root.ln.wf02.wt02.hardware")]),t._v(" as an example, and their data types are BOOLEAN and TEXT, respectively.")]),t._v(" "),s("p",[t._v("The sample code for single column data insertion is as follows:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("IoTDB > insert into root.ln.wf02.wt02(timestamp,status) values(1,true)\nIoTDB > insert into root.ln.wf02.wt02(timestamp,hardware) values(1, 'v1')\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v('The above example code inserts the long integer timestamp and the value "true" into the timeseries '),s("code",[t._v("root.ln.wf02.wt02.status")]),t._v(' and inserts the long integer timestamp and the value "v1" into the timeseries '),s("code",[t._v("root.ln.wf02.wt02.hardware")]),t._v(". When the execution is successful, cost time is shown to indicate that the data insertion has been completed.")]),t._v(" "),s("blockquote",[s("p",[t._v("Note: In IoTDB, TEXT type data can be represented by single and double quotation marks. The insertion statement above uses double quotation marks for TEXT type data. The following example will use single quotation marks for TEXT type data.")])]),t._v(" "),s("p",[t._v("The INSERT statement can also support the insertion of multi-column data at the same time point.  The sample code of  inserting the values of the two timeseries at the same time point '2' is as follows:")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("IoTDB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ln"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wf02"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wt02"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("timestamp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hardware"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'v2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("In addition, The INSERT statement support insert multi-rows at once. The sample code of inserting two rows as follows:")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("IoTDB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ln"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wf02"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wt02"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("timestamp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hardware"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'v3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'v4'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("After inserting the data, we can simply query the inserted data using the SELECT statement:")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("IoTDB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ln"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wf02"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wt02 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("time")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("The result is shown below. The query result shows that the insertion statements of single column and multi column data are performed correctly.")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("+-----------------------------+--------------------------+------------------------+\n|                         Time|root.ln.wf02.wt02.hardware|root.ln.wf02.wt02.status|\n+-----------------------------+--------------------------+------------------------+\n|1970-01-01T08:00:00.001+08:00|                        v1|                    true|\n|1970-01-01T08:00:00.002+08:00|                        v2|                   false|\n|1970-01-01T08:00:00.003+08:00|                        v3|                   false|\n|1970-01-01T08:00:00.004+08:00|                        v4|                    true|\n+-----------------------------+--------------------------+------------------------+\nTotal line number = 4\nIt costs 0.004s\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[t._v("In addition, we can omit the timestamp column, and the system will use the current system timestamp as the timestamp of the data point. The sample code is as follows:")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("IoTDB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ln"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wf02"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wt02"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("status")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" hardware"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'v2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[s("strong",[t._v("Note:")]),t._v(" Timestamps must be specified when inserting multiple rows of data in a SQL.")]),t._v(" "),s("h2",{attrs:{id:"insert-data-into-aligned-timeseries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#insert-data-into-aligned-timeseries"}},[t._v("#")]),t._v(" Insert Data Into Aligned Timeseries")]),t._v(" "),s("p",[t._v("To insert data into a group of aligned time series, we only need to add the "),s("code",[t._v("ALIGNED")]),t._v(" keyword in SQL, and others are similar.")]),t._v(" "),s("p",[t._v("The sample code is as follows:")]),t._v(" "),s("div",{staticClass:"language-sql line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[t._v("IoTDB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" aligned timeseries root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sg1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s1 INT32"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s2 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DOUBLE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nIoTDB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sg1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("time")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" aligned "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nIoTDB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sg1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("time")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" s2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" aligned "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nIoTDB "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sg1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("d1\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("The result is shown below. The query result shows that the insertion statements are performed correctly.")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("+-----------------------------+--------------+--------------+\n|                         Time|root.sg1.d2.s1|root.sg1.d2.s2|\n+-----------------------------+--------------+--------------+\n|1970-01-01T08:00:00.001+08:00|             1|           1.0|\n|1970-01-01T08:00:00.002+08:00|             2|           2.0|\n|1970-01-01T08:00:00.003+08:00|             3|           3.0|\n+-----------------------------+--------------+--------------+\nTotal line number = 3\nIt costs 0.004s\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);