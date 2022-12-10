(window.webpackJsonp=window.webpackJsonp||[]).push([[816],{1218:function(e,s,t){"use strict";t.r(s);var a=t(19),n=Object(a.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"tsfile的hive连接器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tsfile的hive连接器"}},[e._v("#")]),e._v(" TsFile的Hive连接器")]),e._v(" "),s("h2",{attrs:{id:"概要"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概要"}},[e._v("#")]),e._v(" 概要")]),e._v(" "),s("ul",[s("li",[e._v("TsFile的Hive连接器使用手册\n"),s("ul",[s("li",[e._v("什么是TsFile的Hive连接器")]),e._v(" "),s("li",[e._v("系统环境要求")]),e._v(" "),s("li",[e._v("数据类型对应关系")]),e._v(" "),s("li",[e._v("为Hive添加依赖jar包")]),e._v(" "),s("li",[e._v("创建Tsfile-backed的Hive表")]),e._v(" "),s("li",[e._v("从Tsfile-backed的Hive表中查询\n"),s("ul",[s("li",[e._v("选择查询语句示例")]),e._v(" "),s("li",[e._v("聚合查询语句示例")])])]),e._v(" "),s("li",[e._v("后续工作")])])])]),e._v(" "),s("h2",{attrs:{id:"什么是tsfile的hive连接器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是tsfile的hive连接器"}},[e._v("#")]),e._v(" 什么是TsFile的Hive连接器")]),e._v(" "),s("p",[e._v("TsFile的Hive连接器实现了对Hive读取外部Tsfile类型的文件格式的支持，\n使用户能够通过Hive操作Tsfile。")]),e._v(" "),s("p",[e._v("有了这个连接器，用户可以")]),e._v(" "),s("ul",[s("li",[e._v("将单个Tsfile文件加载进Hive，不论文件是存储在本地文件系统或者是HDFS中")]),e._v(" "),s("li",[e._v("将某个特定目录下的所有文件加载进Hive，不论文件是存储在本地文件系统或者是HDFS中")]),e._v(" "),s("li",[e._v("使用HQL查询tsfile")]),e._v(" "),s("li",[e._v("到现在为止, 写操作在hive-connector中还没有被支持. 所以, HQL中的insert操作是不被允许的")])]),e._v(" "),s("h2",{attrs:{id:"系统环境要求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#系统环境要求"}},[e._v("#")]),e._v(" 系统环境要求")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Hadoop Version")]),e._v(" "),s("th",[e._v("Hive Version")]),e._v(" "),s("th",[e._v("Java Version")]),e._v(" "),s("th",[e._v("TsFile")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[s("code",[e._v("2.7.3")]),e._v(" or "),s("code",[e._v("3.2.1")])]),e._v(" "),s("td",[s("code",[e._v("2.3.6")]),e._v(" or "),s("code",[e._v("3.1.2")])]),e._v(" "),s("td",[s("code",[e._v("1.8")])]),e._v(" "),s("td",[s("code",[e._v("0.11.1")])])])])]),e._v(" "),s("blockquote",[s("p",[e._v("注意：关于如何下载和使用Tsfile, 请参考以下链接: "),s("a",{attrs:{href:"https://github.com/apache/iotdb/tree/master/tsfile",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/apache/iotdb/tree/master/tsfile"),s("OutboundLink")],1),e._v("。")])]),e._v(" "),s("h2",{attrs:{id:"数据类型对应关系"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据类型对应关系"}},[e._v("#")]),e._v(" 数据类型对应关系")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("TsFile 数据类型")]),e._v(" "),s("th",[e._v("Hive 数据类型")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("BOOLEAN")]),e._v(" "),s("td",[e._v("Boolean")])]),e._v(" "),s("tr",[s("td",[e._v("INT32")]),e._v(" "),s("td",[e._v("INT")])]),e._v(" "),s("tr",[s("td",[e._v("INT64")]),e._v(" "),s("td",[e._v("BIGINT")])]),e._v(" "),s("tr",[s("td",[e._v("FLOAT")]),e._v(" "),s("td",[e._v("Float")])]),e._v(" "),s("tr",[s("td",[e._v("DOUBLE")]),e._v(" "),s("td",[e._v("Double")])]),e._v(" "),s("tr",[s("td",[e._v("TEXT")]),e._v(" "),s("td",[e._v("STRING")])])])]),e._v(" "),s("h2",{attrs:{id:"为hive添加依赖jar包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为hive添加依赖jar包"}},[e._v("#")]),e._v(" 为Hive添加依赖jar包")]),e._v(" "),s("p",[e._v("为了在Hive中使用Tsfile的hive连接器，我们需要把hive连接器的jar导入进hive。")]),e._v(" "),s("p",[e._v("从 "),s("a",{attrs:{href:"https://github.com/apache/iotdb",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/apache/iotdb"),s("OutboundLink")],1),e._v("下载完iotdb后, 你可以使用 "),s("code",[e._v("mvn clean package -pl hive-connector -am -Dmaven.test.skip=true")]),e._v("命令得到一个 "),s("code",[e._v("hive-connector-X.X.X-SNAPSHOT-jar-with-dependencies.jar")]),e._v("。")]),e._v(" "),s("p",[e._v("然后在hive的命令行中，使用"),s("code",[e._v("add jar XXX")]),e._v("命令添加依赖。例如:")]),e._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[e._v("hive"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" jar /Users/hive/iotdb/hive-connector/target/hive-connector-0.11.1-SNAPSHOT-jar-with-dependencies.jar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\nAdded "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("/Users/hive/iotdb/hive-connector/target/hive-connector-0.11.1-SNAPSHOT-jar-with-dependencies.jar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" to class path\nAdded resources: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("/Users/hive/iotdb/hive-connector/target/hive-connector-0.11.1-SNAPSHOT-jar-with-dependencies.jar"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("h2",{attrs:{id:"创建tsfile-backed的hive表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建tsfile-backed的hive表"}},[e._v("#")]),e._v(" 创建Tsfile-backed的Hive表")]),e._v(" "),s("p",[e._v("为了创建一个Tsfile-backed的表，需要将"),s("code",[e._v("serde")]),e._v("指定为"),s("code",[e._v("org.apache.iotdb.hive.TsFileSerDe")]),e._v("，\n将"),s("code",[e._v("inputformat")]),e._v("指定为"),s("code",[e._v("org.apache.iotdb.hive.TSFHiveInputFormat")]),e._v("，\n将"),s("code",[e._v("outputformat")]),e._v("指定为"),s("code",[e._v("org.apache.iotdb.hive.TSFHiveOutputFormat")]),e._v("。")]),e._v(" "),s("p",[e._v("同时要提供一个只包含两个字段的Schema，这两个字段分别是"),s("code",[e._v("time_stamp")]),e._v("和"),s("code",[e._v("sensor_id")]),e._v("。\n"),s("code",[e._v("time_stamp")]),e._v("代表的是时间序列的时间值，"),s("code",[e._v("sensor_id")]),e._v("是你想要从tsfile文件中提取出来分析的传感器名称，比如说"),s("code",[e._v("sensor_1")]),e._v("。\n表的名字可以是hive所支持的任何表名。")]),e._v(" "),s("p",[e._v("需要提供一个路径供hive-connector从其中拉取最新的数据。")]),e._v(" "),s("p",[e._v("这个路径必须是一个指定的文件夹，这个文件夹可以在你的本地文件系统上，也可以在HDFS上，如果你启动了Hadoop的话。\n如果是本地文件系统，要以这样的形式"),s("code",[e._v("file:///data/data/sequence/root.baic2.WWS.leftfrontdoor/")])]),e._v(" "),s("p",[e._v("最后需要在"),s("code",[e._v("TBLPROPERTIES")]),e._v("里指明"),s("code",[e._v("device_id")])]),e._v(" "),s("p",[e._v("例如：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("CREATE EXTERNAL TABLE IF NOT EXISTS only_sensor_1(\n  time_stamp TIMESTAMP,\n  sensor_1 BIGINT)\nROW FORMAT SERDE 'org.apache.iotdb.hive.TsFileSerDe'\nSTORED AS\n  INPUTFORMAT 'org.apache.iotdb.hive.TSFHiveInputFormat'\n  OUTPUTFORMAT 'org.apache.iotdb.hive.TSFHiveOutputFormat'\nLOCATION '/data/data/sequence/root.baic2.WWS.leftfrontdoor/'\nTBLPROPERTIES ('device_id'='root.baic2.WWS.leftfrontdoor.plc1');\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("p",[e._v("在这个例子里，我们从"),s("code",[e._v("/data/data/sequence/root.baic2.WWS.leftfrontdoor/")]),e._v("中拉取"),s("code",[e._v("root.baic2.WWS.leftfrontdoor.plc1.sensor_1")]),e._v("的数据。\n这个表可能产生如下描述：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("hive> describe only_sensor_1;\nOK\ntime_stamp          \ttimestamp              \tfrom deserializer\nsensor_1            \tbigint              \tfrom deserializer\nTime taken: 0.053 seconds, Fetched: 2 row(s)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("到目前为止, Tsfile-backed的表已经可以像hive中其他表一样被操作了。")]),e._v(" "),s("h2",{attrs:{id:"从tsfile-backed的hive表中查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从tsfile-backed的hive表中查询"}},[e._v("#")]),e._v(" 从Tsfile-backed的Hive表中查询")]),e._v(" "),s("p",[e._v("在做任何查询之前，我们需要通过如下命令，在hive中设置"),s("code",[e._v("hive.input.format")]),e._v("：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("hive> set hive.input.format=org.apache.hadoop.hive.ql.io.HiveInputFormat;\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("现在，我们已经在hive中有了一个名为"),s("code",[e._v("only_sensor_1")]),e._v("的外部表。\n我们可以使用HQL做任何查询来分析其中的数据。")]),e._v(" "),s("p",[e._v("例如:")]),e._v(" "),s("h3",{attrs:{id:"选择查询语句示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选择查询语句示例"}},[e._v("#")]),e._v(" 选择查询语句示例")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("hive> select * from only_sensor_1 limit 10;\nOK\n1\t1000000\n2\t1000001\n3\t1000002\n4\t1000003\n5\t1000004\n6\t1000005\n7\t1000006\n8\t1000007\n9\t1000008\n10\t1000009\nTime taken: 1.464 seconds, Fetched: 10 row(s)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br")])]),s("h3",{attrs:{id:"聚合查询语句示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#聚合查询语句示例"}},[e._v("#")]),e._v(" 聚合查询语句示例")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("hive> select count(*) from only_sensor_1;\nWARNING: Hive-on-MR is deprecated in Hive 2 and may not be available in the future versions. Consider using a different execution engine (i.e. spark, tez) or using Hive 1.X releases.\nQuery ID = jackietien_20191016202416_d1e3e233-d367-4453-b39a-2aac9327a3b6\nTotal jobs = 1\nLaunching Job 1 out of 1\nNumber of reduce tasks determined at compile time: 1\nIn order to change the average load for a reducer (in bytes):\n  set hive.exec.reducers.bytes.per.reducer=<number>\nIn order to limit the maximum number of reducers:\n  set hive.exec.reducers.max=<number>\nIn order to set a constant number of reducers:\n  set mapreduce.job.reduces=<number>\nJob running in-process (local Hadoop)\n2019-10-16 20:24:18,305 Stage-1 map = 0%,  reduce = 0%\n2019-10-16 20:24:27,443 Stage-1 map = 100%,  reduce = 100%\nEnded Job = job_local867757288_0002\nMapReduce Jobs Launched:\nStage-Stage-1:  HDFS Read: 0 HDFS Write: 0 SUCCESS\nTotal MapReduce CPU Time Spent: 0 msec\nOK\n1000000\nTime taken: 11.334 seconds, Fetched: 1 row(s)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br")])]),s("h2",{attrs:{id:"后续工作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后续工作"}},[e._v("#")]),e._v(" 后续工作")]),e._v(" "),s("p",[e._v("我们现在仅支持查询操作，写操作的支持还在开发中...")])])}),[],!1,null,null,null);s.default=n.exports}}]);