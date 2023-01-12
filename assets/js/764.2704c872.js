(window.webpackJsonp=window.webpackJsonp||[]).push([[764],{1167:function(s,t,a){"use strict";a.r(t);var n=a(19),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"写入数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#写入数据"}},[s._v("#")]),s._v(" 写入数据")]),s._v(" "),t("p",[s._v("IoTDB 为用户提供多种插入实时数据的方式，例如在 "),t("RouterLink",{attrs:{to:"/zh/UserGuide/Master/QuickStart/Command-Line-Interface.html"}},[s._v("Cli/Shell 工具")]),s._v(" 中直接输入插入数据的 INSERT 语句，或使用 Java API（标准 "),t("RouterLink",{attrs:{to:"/zh/UserGuide/Master/API/Programming-JDBC.html"}},[s._v("Java JDBC")]),s._v(" 接口）单条或批量执行插入数据的 INSERT 语句。")],1),s._v(" "),t("p",[s._v("本节主要为您介绍实时数据接入的 INSERT 语句在场景中的实际使用示例，有关 INSERT SQL 语句的详细语法请参见本文 "),t("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Reference/SQL-Reference.html"}},[s._v("INSERT 语句")]),s._v(" 节。")],1),s._v(" "),t("p",[s._v("注：写入重复时间戳的数据则原时间戳数据被覆盖，可视为更新数据。")]),s._v(" "),t("h2",{attrs:{id:"使用-insert-语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用-insert-语句"}},[s._v("#")]),s._v(" 使用 INSERT 语句")]),s._v(" "),t("p",[s._v("使用 INSERT 语句可以向指定的已经创建的一条或多条时间序列中插入数据。对于每一条数据，均由一个时间戳类型的时间戳和一个数值或布尔值、字符串类型的传感器采集值组成。")]),s._v(" "),t("p",[s._v("在本节的场景实例下，以其中的两个时间序列"),t("code",[s._v("root.ln.wf02.wt02.status")]),s._v("和"),t("code",[s._v("root.ln.wf02.wt02.hardware")]),s._v("为例 ，它们的数据类型分别为 BOOLEAN 和 TEXT。")]),s._v(" "),t("p",[s._v("单列数据插入示例代码如下：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("IoTDB "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wf02"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wt02"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("timestamp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nIoTDB "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wf02"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wt02"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("timestamp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("hardware"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'v1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("以上示例代码将长整型的 timestamp 以及值为 true 的数据插入到时间序列"),t("code",[s._v("root.ln.wf02.wt02.status")]),s._v("中和将长整型的 timestamp 以及值为”v1”的数据插入到时间序列"),t("code",[s._v("root.ln.wf02.wt02.hardware")]),s._v("中。执行成功后会返回执行时间，代表数据插入已完成。")]),s._v(" "),t("blockquote",[t("p",[s._v("注意：在 IoTDB 中，TEXT 类型的数据单双引号都可以来表示，上面的插入语句是用的是双引号表示 TEXT 类型数据，下面的示例将使用单引号表示 TEXT 类型数据。")])]),s._v(" "),t("p",[s._v("INSERT 语句还可以支持在同一个时间点下多列数据的插入，同时向 2 时间点插入上述两个时间序列的值，多列数据插入示例代码如下：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("IoTDB "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wf02"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wt02"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("timestamp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" hardware"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'v2'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("此外，INSERT 语句支持一次性插入多行数据，同时向 2 个不同时间点插入上述时间序列的值，示例代码如下：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("IoTDB "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wf02"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wt02"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("timestamp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" hardware"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'v3'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'v4'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("插入数据后我们可以使用 SELECT 语句简单查询已插入的数据。")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("IoTDB "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wf02"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wt02 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("结果如图所示。由查询结果可以看出，单列、多列数据的插入操作正确执行。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-----------------------------+--------------------------+------------------------+\n|                         Time|root.ln.wf02.wt02.hardware|root.ln.wf02.wt02.status|\n+-----------------------------+--------------------------+------------------------+\n|1970-01-01T08:00:00.001+08:00|                        v1|                    true|\n|1970-01-01T08:00:00.002+08:00|                        v2|                   false|\n|1970-01-01T08:00:00.003+08:00|                        v3|                   false|\n|1970-01-01T08:00:00.004+08:00|                        v4|                    true|\n+-----------------------------+--------------------------+------------------------+\nTotal line number = 4\nIt costs 0.004s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("此外，我们可以省略 timestamp 列，此时系统将使用当前的系统时间作为该数据点的时间戳，示例代码如下：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("IoTDB "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wf02"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("wt02"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" hardware"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'v2'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("strong",[s._v("注意：")]),s._v(" 当一次插入多行数据时必须指定时间戳。")]),s._v(" "),t("h2",{attrs:{id:"向对齐时间序列插入数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#向对齐时间序列插入数据"}},[s._v("#")]),s._v(" 向对齐时间序列插入数据")]),s._v(" "),t("p",[s._v("向对齐时间序列插入数据只需在SQL中增加"),t("code",[s._v("ALIGNED")]),s._v("关键词，其他类似。")]),s._v(" "),t("p",[s._v("示例代码如下：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("IoTDB "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("create")]),s._v(" aligned timeseries root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("s1 INT32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" s2 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DOUBLE")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nIoTDB "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" s2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" aligned "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nIoTDB "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("insert")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("into")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" s1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" s2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" aligned "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("values")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nIoTDB "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sg1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("d1\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("结果如图所示。由查询结果可以看出，数据的插入操作正确执行。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-----------------------------+--------------+--------------+\n|                         Time|root.sg1.d1.s1|root.sg1.d1.s2|\n+-----------------------------+--------------+--------------+\n|1970-01-01T08:00:00.001+08:00|             1|           1.0|\n|1970-01-01T08:00:00.002+08:00|             2|           2.0|\n|1970-01-01T08:00:00.003+08:00|             3|           3.0|\n+-----------------------------+--------------+--------------+\nTotal line number = 3\nIt costs 0.004s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);