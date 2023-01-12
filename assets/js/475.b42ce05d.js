(window.webpackJsonp=window.webpackJsonp||[]).push([[475],{877:function(t,a,s){"use strict";s.r(a);var r=s(19),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"spark-iotdb-connecter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spark-iotdb-connecter"}},[t._v("#")]),t._v(" Spark IoTDB Connecter")]),t._v(" "),a("h2",{attrs:{id:"version"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[t._v("#")]),t._v(" version")]),t._v(" "),a("p",[t._v("The versions required for Spark and Java are as follow:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Spark Version")]),t._v(" "),a("th",[t._v("Scala Version")]),t._v(" "),a("th",[t._v("Java Version")]),t._v(" "),a("th",[t._v("TsFile")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("2.4.3")])]),t._v(" "),a("td",[a("code",[t._v("2.11")])]),t._v(" "),a("td",[a("code",[t._v("1.8")])]),t._v(" "),a("td",[a("code",[t._v("0.9.3")])])])])]),t._v(" "),a("h2",{attrs:{id:"install"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" install")]),t._v(" "),a("p",[t._v("mvn clean scala:compile compile install")]),t._v(" "),a("h1",{attrs:{id:"_1-maven-dependency"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-maven-dependency"}},[t._v("#")]),t._v(" 1. maven dependency")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    <dependency>\n      <groupId>org.apache.iotdb</groupId>\n      <artifactId>spark-iotdb-connector</artifactId>\n      <version>0.9.3</version>\n    </dependency>\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("h1",{attrs:{id:"_2-spark-shell-user-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-spark-shell-user-guide"}},[t._v("#")]),t._v(" 2. spark-shell user guide")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('spark-shell --jars spark-iotdb-connector-0.9.3.jar,iotdb-jdbc-0.9.3-jar-with-dependencies.jar\n\nimport org.apache.iotdb.spark.db._\n\nval df = spark.read.format("org.apache.iotdb.spark.db").option("url","jdbc:iotdb://127.0.0.1:6667/").option("sql","select * from root").load\n\ndf.printSchema()\n\ndf.show()\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br")])]),a("h3",{attrs:{id:"if-you-want-to-partition-your-rdd-you-can-do-as-following"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#if-you-want-to-partition-your-rdd-you-can-do-as-following"}},[t._v("#")]),t._v(" if you want to partition your rdd, you can do as following")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('spark-shell --jars spark-iotdb-connector-0.9.3.jar,iotdb-jdbc-0.9.3-jar-with-dependencies.jar\n\nimport org.apache.iotdb.spark.db._\n\nval df = spark.read.format("org.apache.iotdb.spark.db").option("url","jdbc:iotdb://127.0.0.1:6667/").option("sql","select * from root").\n                        option("lowerBound", [lower bound of time that you want query(include)]).option("upperBound", [upper bound of time that you want query(include)]).\n                        option("numPartition", [the partition number you want]).load\n\ndf.printSchema()\n\ndf.show()\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("h1",{attrs:{id:"_3-schema-inference"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-schema-inference"}},[t._v("#")]),t._v(" 3. Schema Inference")]),t._v(" "),a("p",[t._v("Take the following TsFile structure as an example: There are three Measurements in the TsFile schema: status, temperature, and hardware. The basic information of these three measurements is as follows:")]),t._v(" "),a("center",[a("table",{staticStyle:{"text-align":"center"}},[a("tr",[a("th",{attrs:{colspan:"2"}},[t._v("Name")]),a("th",{attrs:{colspan:"2"}},[t._v("Type")]),a("th",{attrs:{colspan:"2"}},[t._v("Encode")])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"2"}},[t._v("status")]),a("td",{attrs:{colspan:"2"}},[t._v("Boolean")]),a("td",{attrs:{colspan:"2"}},[t._v("PLAIN")])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"2"}},[t._v("temperature")]),a("td",{attrs:{colspan:"2"}},[t._v("Float")]),a("td",{attrs:{colspan:"2"}},[t._v("RLE")])]),t._v(" "),a("tr",[a("td",{attrs:{colspan:"2"}},[t._v("hardware")]),a("td",{attrs:{colspan:"2"}},[t._v("Text")]),a("td",{attrs:{colspan:"2"}},[t._v("PLAIN")])])])]),t._v(" "),a("p",[t._v("The existing data in the TsFile is as follows:")]),t._v(" "),a("center",[a("table",{staticStyle:{"text-align":"center"}},[a("tr",[a("th",{attrs:{colspan:"4"}},[t._v("device:root.ln.wf01.wt01")]),a("th",{attrs:{colspan:"4"}},[t._v("device:root.ln.wf02.wt02")])]),t._v(" "),a("tr",[a("th",{attrs:{colspan:"2"}},[t._v("status")]),a("th",{attrs:{colspan:"2"}},[t._v("temperature")]),a("th",{attrs:{colspan:"2"}},[t._v("hardware")]),a("th",{attrs:{colspan:"2"}},[t._v("status")])]),t._v(" "),a("tr",[a("th",[t._v("time")]),a("th",[t._v("value")]),a("th",[t._v("time")]),a("th",[t._v("value")]),a("th",[t._v("time")]),a("th",[t._v("value")]),a("th",[t._v("time")]),a("th",[t._v("value")])]),t._v(" "),a("tr",[a("td",[t._v("1")]),a("td",[t._v("True")]),a("td",[t._v("1")]),a("td",[t._v("2.2")]),a("td",[t._v("2")]),a("td",[t._v('"aaa"')]),a("td",[t._v("1")]),a("td",[t._v("True")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),a("td",[t._v("True")]),a("td",[t._v("2")]),a("td",[t._v("2.2")]),a("td",[t._v("4")]),a("td",[t._v('"bbb"')]),a("td",[t._v("2")]),a("td",[t._v("False")])]),t._v(" "),a("tr",[a("td",[t._v("5")]),a("td",[t._v(" False ")]),a("td",[t._v("3")]),a("td",[t._v("2.1")]),a("td",[t._v("6")]),a("td",[t._v('"ccc"')]),a("td",[t._v("4")]),a("td",[t._v("True")])])])]),t._v("\nThe wide(default) table form is as follows:\n"),a("table",[a("thead",[a("tr",[a("th",[t._v("time")]),t._v(" "),a("th",[t._v("root.ln.wf02.wt02.temperature")]),t._v(" "),a("th",[t._v("root.ln.wf02.wt02.status")]),t._v(" "),a("th",[t._v("root.ln.wf02.wt02.hardware")]),t._v(" "),a("th",[t._v("root.ln.wf01.wt01.temperature")]),t._v(" "),a("th",[t._v("root.ln.wf01.wt01.status")]),t._v(" "),a("th",[t._v("root.ln.wf01.wt01.hardware")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("2.2")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("null")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("aaa")]),t._v(" "),a("td",[t._v("2.2")]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("null")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("2.1")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("null")])]),t._v(" "),a("tr",[a("td",[t._v("4")]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("bbb")]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("null")])]),t._v(" "),a("tr",[a("td",[t._v("5")]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("null")])]),t._v(" "),a("tr",[a("td",[t._v("6")]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("ccc")]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("null")])])])]),t._v(" "),a("p",[t._v("You can also use narrow table form which as follows: (You can see part 4 about how to use narrow form)")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("time")]),t._v(" "),a("th",[t._v("device_name")]),t._v(" "),a("th",[t._v("status")]),t._v(" "),a("th",[t._v("hardware")]),t._v(" "),a("th",[t._v("temperature")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("root.ln.wf02.wt01")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("2.2")])]),t._v(" "),a("tr",[a("td",[t._v("1")]),t._v(" "),a("td",[t._v("root.ln.wf02.wt02")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("null")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("root.ln.wf02.wt01")]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("2.2")])]),t._v(" "),a("tr",[a("td",[t._v("2")]),t._v(" "),a("td",[t._v("root.ln.wf02.wt02")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("aaa")]),t._v(" "),a("td",[t._v("null")])]),t._v(" "),a("tr",[a("td",[t._v("3")]),t._v(" "),a("td",[t._v("root.ln.wf02.wt01")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("2.1")])]),t._v(" "),a("tr",[a("td",[t._v("4")]),t._v(" "),a("td",[t._v("root.ln.wf02.wt02")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("bbb")]),t._v(" "),a("td",[t._v("null")])]),t._v(" "),a("tr",[a("td",[t._v("5")]),t._v(" "),a("td",[t._v("root.ln.wf02.wt01")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("null")])]),t._v(" "),a("tr",[a("td",[t._v("6")]),t._v(" "),a("td",[t._v("root.ln.wf02.wt02")]),t._v(" "),a("td",[t._v("null")]),t._v(" "),a("td",[t._v("ccc")]),t._v(" "),a("td",[t._v("null")])])])]),t._v(" "),a("h1",{attrs:{id:"_4-transform-between-wide-and-narrow-table"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-transform-between-wide-and-narrow-table"}},[t._v("#")]),t._v(" 4. Transform between wide and narrow table")]),t._v(" "),a("h2",{attrs:{id:"from-wide-to-narrow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from-wide-to-narrow"}},[t._v("#")]),t._v(" from wide to narrow")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('import org.apache.iotdb.spark.db._\n\nval wide_df = spark.read.format("org.apache.iotdb.spark.db").option("url", "jdbc:iotdb://127.0.0.1:6667/").option("sql", "select * from root where time < 1100 and time > 1000").load\nval narrow_df = Transformer.toNarrowForm(spark, wide_df)\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("h2",{attrs:{id:"from-narrow-to-wide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#from-narrow-to-wide"}},[t._v("#")]),t._v(" from narrow to wide")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import org.apache.iotdb.spark.db._\n\nval wide_df = Transformer.toWideForm(spark, narrow_df)\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h1",{attrs:{id:"_5-java-user-guide"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-java-user-guide"}},[t._v("#")]),t._v(" 5. Java user guide")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('import org.apache.spark.sql.Dataset;\nimport org.apache.spark.sql.Row;\nimport org.apache.spark.sql.SparkSession;\nimport org.apache.iotdb.spark.db.*\n\npublic class Example {\n\n  public static void main(String[] args) {\n    SparkSession spark = SparkSession\n        .builder()\n        .appName("Build a DataFrame from Scratch")\n        .master("local[*]")\n        .getOrCreate();\n\n    Dataset<Row> df = spark.read().format("org.apache.iotdb.spark.db")\n        .option("url","jdbc:iotdb://127.0.0.1:6667/")\n        .option("sql","select * from root").load();\n\n    df.printSchema();\n\n    df.show();\n    \n    Dataset<Row> narrowTable = Transformer.toNarrowForm(spark, df)\n    narrowTable.show()\n  }\n}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br"),a("span",{staticClass:"line-number"},[t._v("15")]),a("br"),a("span",{staticClass:"line-number"},[t._v("16")]),a("br"),a("span",{staticClass:"line-number"},[t._v("17")]),a("br"),a("span",{staticClass:"line-number"},[t._v("18")]),a("br"),a("span",{staticClass:"line-number"},[t._v("19")]),a("br"),a("span",{staticClass:"line-number"},[t._v("20")]),a("br"),a("span",{staticClass:"line-number"},[t._v("21")]),a("br"),a("span",{staticClass:"line-number"},[t._v("22")]),a("br"),a("span",{staticClass:"line-number"},[t._v("23")]),a("br"),a("span",{staticClass:"line-number"},[t._v("24")]),a("br"),a("span",{staticClass:"line-number"},[t._v("25")]),a("br"),a("span",{staticClass:"line-number"},[t._v("26")]),a("br")])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);