(window.webpackJsonp=window.webpackJsonp||[]).push([[701],{1105:function(s,t,a){"use strict";a.r(t);var n=a(19),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"数据类型转换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据类型转换"}},[s._v("#")]),s._v(" 数据类型转换")]),s._v(" "),t("h2",{attrs:{id:"cast"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cast"}},[s._v("#")]),s._v(" CAST")]),s._v(" "),t("h3",{attrs:{id:"函数简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#函数简介"}},[s._v("#")]),s._v(" 函数简介")]),s._v(" "),t("p",[s._v("当前IoTDB支持6种数据类型，其中包括INT32、INT64、FLOAT、DOUBLE、BOOLEAN以及TEXT。当我们对数据进行查询或者计算时可能需要进行数据类型的转换， 比如说将TEXT转换为INT32，或者提高数据精度，比如说将FLOAT转换为DOUBLE。所以，IoTDB支持使用cast函数对数据类型进行转换。")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("函数名")]),s._v(" "),t("th",[s._v("必要的属性参数")]),s._v(" "),t("th",[s._v("输出序列类型")]),s._v(" "),t("th",[s._v("功能类型")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("CAST")]),s._v(" "),t("td",[t("code",[s._v("type")]),s._v(":输出的数据点的类型，只能是 INT32 / INT64 / FLOAT / DOUBLE / BOOLEAN / TEXT")]),s._v(" "),t("td",[s._v("由输入属性参数"),t("code",[s._v("type")]),s._v("决定")]),s._v(" "),t("td",[s._v("将数据转换为"),t("code",[s._v("type")]),s._v("参数指定的类型。")])])])]),s._v(" "),t("h3",{attrs:{id:"类型转换说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类型转换说明"}},[s._v("#")]),s._v(" 类型转换说明")]),s._v(" "),t("p",[s._v('1.当INT32、INT64类型的值不为0时，FLOAT与DOUBLE类型的值不为0.0时，TEXT类型不为空字符串或者"false"时，转换为BOOLEAN类型时值为true，否则为false。')]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> show timeseries root.sg.d1.*;\n+-------------+-----+-------------+--------+--------+-----------+----+----------+\n|   timeseries|alias|     database|dataType|encoding|compression|tags|attributes|\n+-------------+-----+-------------+--------+--------+-----------+----+----------+\n|root.sg.d1.s3| null|      root.sg|   FLOAT|     RLE|     SNAPPY|null|      null|\n|root.sg.d1.s4| null|      root.sg|  DOUBLE|     RLE|     SNAPPY|null|      null|\n|root.sg.d1.s5| null|      root.sg|    TEXT|   PLAIN|     SNAPPY|null|      null|\n|root.sg.d1.s6| null|      root.sg| BOOLEAN|     RLE|     SNAPPY|null|      null|\n|root.sg.d1.s1| null|      root.sg|   INT32|     RLE|     SNAPPY|null|      null|\n|root.sg.d1.s2| null|      root.sg|   INT64|     RLE|     SNAPPY|null|      null|\n+-------------+-----+-------------+--------+--------+-----------+----+----------+\nTotal line number = 6\nIt costs 0.006s\nIoTDB> select * from root.sg.d1;\n+-----------------------------+-------------+-------------+-------------+-------------+-------------+-------------+\n|                         Time|root.sg.d1.s3|root.sg.d1.s4|root.sg.d1.s5|root.sg.d1.s6|root.sg.d1.s1|root.sg.d1.s2|\n+-----------------------------+-------------+-------------+-------------+-------------+-------------+-------------+\n|1970-01-01T08:00:00.001+08:00|          1.1|          1.1|         test|        false|            1|            1|\n|1970-01-01T08:00:00.002+08:00|         -2.2|         -2.2|        false|         true|           -2|           -2|\n|1970-01-01T08:00:00.003+08:00|          0.0|          0.0|         true|         true|            0|            0|\n+-----------------------------+-------------+-------------+-------------+-------------+-------------+-------------+\nTotal line number = 3\nIt costs 0.009s\nIoTDB> select cast(s1, 'type'='BOOLEAN'), cast(s2, 'type'='BOOLEAN'), cast(s3, 'type'='BOOLEAN'), cast(s4, 'type'='BOOLEAN'), cast(s5, 'type'='BOOLEAN') from root.sg.d1;\n+-----------------------------+-------------------------------------+-------------------------------------+-------------------------------------+-------------------------------------+-------------------------------------+\n|                         Time|cast(root.sg.d1.s1, \"type\"=\"BOOLEAN\")|cast(root.sg.d1.s2, \"type\"=\"BOOLEAN\")|cast(root.sg.d1.s3, \"type\"=\"BOOLEAN\")|cast(root.sg.d1.s4, \"type\"=\"BOOLEAN\")|cast(root.sg.d1.s5, \"type\"=\"BOOLEAN\")|\n+-----------------------------+-------------------------------------+-------------------------------------+-------------------------------------+-------------------------------------+-------------------------------------+\n|1970-01-01T08:00:00.001+08:00|                                 true|                                 true|                                 true|                                 true|                                 true|\n|1970-01-01T08:00:00.002+08:00|                                 true|                                 true|                                 true|                                 true|                                false|\n|1970-01-01T08:00:00.003+08:00|                                false|                                false|                                false|                                false|                                 true|\n+-----------------------------+-------------------------------------+-------------------------------------+-------------------------------------+-------------------------------------+-------------------------------------+\nTotal line number = 3\nIt costs 0.012s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br")])]),t("p",[s._v('2.当BOOLEAN类型的值为true时，转换为INT32与INT64类型的值为1，转换为FLOAT或者DOUBLE类型时值为1.0，转换为TEXT类型时值为"true"。当BOOLEAN类型的值为false时，转换为INT32与INT64类型的值为0，转换为FLOAT或者DOUBLE类型时值为0.0，转换为TEXT类型时值为"false"。')]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> select cast(s6, 'type'='INT32'), cast(s6, 'type'='INT64'), cast(s6, 'type'='FLOAT'), cast(s6, 'type'='DOUBLE'), cast(s6, 'type'='TEXT') from root.sg.d1;\n+-----------------------------+-----------------------------------+-----------------------------------+-----------------------------------+------------------------------------+----------------------------------+\n|                         Time|cast(root.sg.d1.s6, \"type\"=\"INT32\")|cast(root.sg.d1.s6, \"type\"=\"INT64\")|cast(root.sg.d1.s6, \"type\"=\"FLOAT\")|cast(root.sg.d1.s6, \"type\"=\"DOUBLE\")|cast(root.sg.d1.s6, \"type\"=\"TEXT\")|\n+-----------------------------+-----------------------------------+-----------------------------------+-----------------------------------+------------------------------------+----------------------------------+\n|1970-01-01T08:00:00.001+08:00|                                  0|                                  0|                                0.0|                                 0.0|                             false|\n|1970-01-01T08:00:00.002+08:00|                                  1|                                  1|                                1.0|                                 1.0|                              true|\n|1970-01-01T08:00:00.003+08:00|                                  1|                                  1|                                1.0|                                 1.0|                              true|\n+-----------------------------+-----------------------------------+-----------------------------------+-----------------------------------+------------------------------------+----------------------------------+\nTotal line number = 3\nIt costs 0.016s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("p",[s._v("3.当TEXT类型转换为INT32、INT64、FLOAT类型时，会先将TEXT类型的数据转换为DOUBLE类型，然后再转换为对应的类型，此时可能会存在损失精度的问题。如果无法转换的话则直接跳过。")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> select cast(s5, 'type'='INT32'), cast(s5, 'type'='INT64'), cast(s5, 'type'='FLOAT') from root.sg.d1;\n+----+-----------------------------------+-----------------------------------+-----------------------------------+\n|Time|cast(root.sg.d1.s5, \"type\"=\"INT32\")|cast(root.sg.d1.s5, \"type\"=\"INT64\")|cast(root.sg.d1.s5, \"type\"=\"FLOAT\")|\n+----+-----------------------------------+-----------------------------------+-----------------------------------+\n+----+-----------------------------------+-----------------------------------+-----------------------------------+\nEmpty set.\nIt costs 0.009s\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"使用示例"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[s._v("#")]),s._v(" 使用示例")]),s._v(" "),t("p",[s._v("测试数据：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("IoTDB> select text from root.test;\n+-----------------------------+--------------+\n|                         Time|root.test.text|\n+-----------------------------+--------------+\n|1970-01-01T08:00:00.001+08:00|           1.1|\n|1970-01-01T08:00:00.002+08:00|             1|\n|1970-01-01T08:00:00.003+08:00|   hello world|\n|1970-01-01T08:00:00.004+08:00|         false|\n+-----------------------------+--------------+\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br")])]),t("p",[s._v("SQL语句：")]),s._v(" "),t("div",{staticClass:"language-sql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" cast"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("text")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'type'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'BOOLEAN'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" cast"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("text")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'type'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'INT32'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" cast"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("text")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'type'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'INT64'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" cast"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("text")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'type'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'FLOAT'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" cast"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("text")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'type'")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'DOUBLE'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("test"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("结果：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('+-----------------------------+--------------------------------------+------------------------------------+------------------------------------+------------------------------------+-------------------------------------+\n|                         Time|cast(root.test.text, "type"="BOOLEAN")|cast(root.test.text, "type"="INT32")|cast(root.test.text, "type"="INT64")|cast(root.test.text, "type"="FLOAT")|cast(root.test.text, "type"="DOUBLE")|\n+-----------------------------+--------------------------------------+------------------------------------+------------------------------------+------------------------------------+-------------------------------------+\n|1970-01-01T08:00:00.001+08:00|                                  true|                                   1|                                   1|                                 1.1|                                  1.1|\n|1970-01-01T08:00:00.002+08:00|                                  true|                                   1|                                   1|                                 1.0|                                  1.0|\n|1970-01-01T08:00:00.003+08:00|                                  true|                                null|                                null|                                null|                                 null|\n|1970-01-01T08:00:00.004+08:00|                                 false|                                null|                                null|                                null|                                 null|\n+-----------------------------+--------------------------------------+------------------------------------+------------------------------------+------------------------------------+-------------------------------------+\nTotal line number = 4\nIt costs 0.078s\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);