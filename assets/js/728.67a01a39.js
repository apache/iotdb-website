(window.webpackJsonp=window.webpackJsonp||[]).push([[728],{1132:function(s,t,a){"use strict";a.r(t);var e=a(19),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"结果集排序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结果集排序"}},[s._v("#")]),s._v(" 结果集排序")]),s._v(" "),t("h2",{attrs:{id:"时间对齐模式下的排序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#时间对齐模式下的排序"}},[s._v("#")]),s._v(" 时间对齐模式下的排序")]),s._v(" "),t("p",[s._v("IoTDB的查询结果集默认按照时间对齐，可以使用"),t("code",[s._v("ORDER BY TIME")]),s._v("的子句指定时间戳的排列顺序。示例代码如下：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T00:"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("desc")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("执行结果：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-----------------------------+--------------------------+------------------------+-----------------------------+------------------------+\n|                         Time|root.ln.wf02.wt02.hardware|root.ln.wf02.wt02.status|root.ln.wf01.wt01.temperature|root.ln.wf01.wt01.status|\n+-----------------------------+--------------------------+------------------------+-----------------------------+------------------------+\n|2017-11-01T00:01:00.000+08:00|                        v2|                    true|                        24.36|                    true|\n|2017-11-01T00:00:00.000+08:00|                        v2|                    true|                        25.96|                    true|\n|1970-01-01T08:00:00.002+08:00|                        v2|                   false|                         null|                    null|\n|1970-01-01T08:00:00.001+08:00|                        v1|                    true|                         null|                    null|\n+-----------------------------+--------------------------+------------------------+-----------------------------+------------------------+\nTotal line number = 4\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("h2",{attrs:{id:"设备对齐模式下的排序"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设备对齐模式下的排序"}},[s._v("#")]),s._v(" 设备对齐模式下的排序")]),s._v(" "),t("p",[s._v("当使用"),t("code",[s._v("ALIGN BY DEVICE")]),s._v("查询对齐模式下的结果集时，可以使用"),t("code",[s._v("ORDER BY")]),s._v("子句对返回的结果集顺序进行规定。")]),s._v(" "),t("p",[s._v("在设备对齐模式下支持4种排序模式的子句,其中包括两种排序键，"),t("code",[s._v("DEVICE")]),s._v("和"),t("code",[s._v("TIME")]),s._v("，靠前的排序键为主排序键，每种排序键都支持"),t("code",[s._v("ASC")]),s._v("和"),t("code",[s._v("DESC")]),s._v("两种排列顺序。")]),s._v(" "),t("ol",[t("li",[t("p",[t("code",[s._v("ORDER BY DEVICE")]),s._v(": 按照设备名的字典序进行排序，排序方式为字典序排序，在这种情况下，相同名的设备会以组的形式进行展示。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("ORDER BY TIME")]),s._v(": 按照时间戳进行排序，此时不同的设备对应的数据点会按照时间戳的优先级被打乱排序。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("ORDER BY DEVICE,TIME")]),s._v(": 按照设备名的字典序进行排序，设备名相同的数据点会通过时间戳进行排序。")])]),s._v(" "),t("li",[t("p",[t("code",[s._v("ORDER BY TIME,DEVICE")]),s._v(": 按照时间戳进行排序，时间戳相同的数据点会通过设备名的字典序进行排序。")])])]),s._v(" "),t("blockquote",[t("p",[s._v("为了保证结果的可观性，当不使用"),t("code",[s._v("ORDER BY")]),s._v("子句，仅使用"),t("code",[s._v("ALIGN BY DEVICE")]),s._v("时，会为设备视图提供默认的排序方式。其中默认的排序视图为"),t("code",[s._v("ORDER BY DEVCE,TIME")]),s._v("，默认的排序顺序为"),t("code",[s._v("ASC")]),s._v("，\n即结果集默认先按照设备名升序排列，在相同设备名内再按照时间戳升序排序。")])]),s._v(" "),t("p",[s._v("当主排序键为"),t("code",[s._v("DEVICE")]),s._v("时，结果集的格式与默认情况类似：先按照设备名对结果进行排列，在相同的设备名下内按照时间戳进行排序。示例代码如下：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T00:"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" device "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("desc")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("asc")]),s._v(" align "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" device"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("执行结果：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-----------------------------+-----------------+--------+------+-----------+\n|                         Time|           Device|hardware|status|temperature|\n+-----------------------------+-----------------+--------+------+-----------+\n|1970-01-01T08:00:00.001+08:00|root.ln.wf02.wt02|      v1|  true|       null|\n|1970-01-01T08:00:00.002+08:00|root.ln.wf02.wt02|      v2| false|       null|\n|2017-11-01T00:00:00.000+08:00|root.ln.wf02.wt02|      v2|  true|       null|\n|2017-11-01T00:01:00.000+08:00|root.ln.wf02.wt02|      v2|  true|       null|\n|2017-11-01T00:00:00.000+08:00|root.ln.wf01.wt01|    null|  true|      25.96|\n|2017-11-01T00:01:00.000+08:00|root.ln.wf01.wt01|    null|  true|      24.36|\n+-----------------------------+-----------------+--------+------+-----------+\nTotal line number = 6\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("主排序键为"),t("code",[s._v("Time")]),s._v("时，结果集会先按照时间戳进行排序，在时间戳相等时按照设备名排序。\n示例代码如下：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T00:"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("asc")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("device "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("desc")]),s._v(" align "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" device"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("执行结果：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-----------------------------+-----------------+--------+------+-----------+\n|                         Time|           Device|hardware|status|temperature|\n+-----------------------------+-----------------+--------+------+-----------+\n|1970-01-01T08:00:00.001+08:00|root.ln.wf02.wt02|      v1|  true|       null|\n|1970-01-01T08:00:00.002+08:00|root.ln.wf02.wt02|      v2| false|       null|\n|2017-11-01T00:00:00.000+08:00|root.ln.wf02.wt02|      v2|  true|       null|\n|2017-11-01T00:00:00.000+08:00|root.ln.wf01.wt01|    null|  true|      25.96|\n|2017-11-01T00:01:00.000+08:00|root.ln.wf02.wt02|      v2|  true|       null|\n|2017-11-01T00:01:00.000+08:00|root.ln.wf01.wt01|    null|  true|      24.36|\n+-----------------------------+-----------------+--------+------+-----------+\nTotal line number = 6\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("当没有显式指定时，主排序键默认为"),t("code",[s._v("Device")]),s._v("，排序顺序默认为"),t("code",[s._v("ASC")]),s._v("，示例代码如下：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T00:"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" align "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" device"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("结果如图所示，可以看出，"),t("code",[s._v("ORDER BY DEVICE ASC,TIME ASC")]),s._v("就是默认情况下的排序方式，由于"),t("code",[s._v("ASC")]),s._v("是默认排序顺序，此处可以省略。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-----------------------------+-----------------+--------+------+-----------+\n|                         Time|           Device|hardware|status|temperature|\n+-----------------------------+-----------------+--------+------+-----------+\n|2017-11-01T00:00:00.000+08:00|root.ln.wf01.wt01|    null|  true|      25.96|\n|2017-11-01T00:01:00.000+08:00|root.ln.wf01.wt01|    null|  true|      24.36|\n|1970-01-01T08:00:00.001+08:00|root.ln.wf02.wt02|      v1|  true|       null|\n|1970-01-01T08:00:00.002+08:00|root.ln.wf02.wt02|      v2| false|       null|\n|2017-11-01T00:00:00.000+08:00|root.ln.wf02.wt02|      v2|  true|       null|\n|2017-11-01T00:01:00.000+08:00|root.ln.wf02.wt02|      v2|  true|       null|\n+-----------------------------+-----------------+--------+------+-----------+\nTotal line number = 6\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[s._v("同样，可以在聚合查询中使用"),t("code",[s._v("ALIGN BY DEVICE")]),s._v("和"),t("code",[s._v("ORDER BY")]),s._v("子句，对聚合后的结果进行排序，示例代码如下所示：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T00:"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T00:"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("03")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),s._v(":"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("m"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" device "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("asc")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("asc")]),s._v(" align "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" device\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("执行结果：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("+-----------------------------+-----------------+---------------+-------------+------------------+\n|                         Time|           Device|count(hardware)|count(status)|count(temperature)|\n+-----------------------------+-----------------+---------------+-------------+------------------+\n|2017-11-01T00:01:00.000+08:00|root.ln.wf01.wt01|           null|            1|                 1|\n|2017-11-01T00:02:00.000+08:00|root.ln.wf01.wt01|           null|            0|                 0|\n|2017-11-01T00:03:00.000+08:00|root.ln.wf01.wt01|           null|            0|                 0|\n|2017-11-01T00:01:00.000+08:00|root.ln.wf02.wt02|              1|            1|              null|\n|2017-11-01T00:02:00.000+08:00|root.ln.wf02.wt02|              0|            0|              null|\n|2017-11-01T00:03:00.000+08:00|root.ln.wf02.wt02|              0|            0|              null|\n+-----------------------------+-----------------+---------------+-------------+------------------+\nTotal line number = 6\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);