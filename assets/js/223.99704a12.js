(window.webpackJsonp=window.webpackJsonp||[]).push([[223],{625:function(e,s,a){"use strict";a.r(s);var t=a(19),n=Object(t.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"frequently-asked-questions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#frequently-asked-questions"}},[e._v("#")]),e._v(" Frequently Asked Questions")]),e._v(" "),s("h2",{attrs:{id:"outline"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#outline"}},[e._v("#")]),e._v(" Outline")]),e._v(" "),s("ul",[s("li",[e._v("Frequently Asked Questions\n"),s("ul",[s("li",[e._v("How can I identify my version of IoTDB?")]),e._v(" "),s("li",[e._v("Where can I find IoTDB logs?")]),e._v(" "),s("li",[e._v("Where can I find IoTDB data files?")]),e._v(" "),s("li",[e._v("How do I know how many time series are stored in IoTDB?")]),e._v(" "),s("li",[e._v("Can I use Hadoop and Spark to read TsFile in IoTDB?")]),e._v(" "),s("li",[e._v("How does IoTDB handle duplicate points?")]),e._v(" "),s("li",[e._v("How can I tell what type of the specific timeseries?")]),e._v(" "),s("li",[e._v("How can I change IoTDB's Cli time display format?")])])])]),e._v(" "),s("h2",{attrs:{id:"how-can-i-identify-my-version-of-iotdb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-identify-my-version-of-iotdb"}},[e._v("#")]),e._v(" How can I identify my version of IoTDB?")]),e._v(" "),s("p",[e._v("There are several ways to identify the version of IoTDB that you are using:")]),e._v(" "),s("ul",[s("li",[e._v("Launch IoTDB's Command Line Interface:")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("> ./start-cli.sh -p 6667 -pw root -u root -h localhost\n _____       _________  ______   ______    \n|_   _|     |  _   _  ||_   _ `.|_   _ \\   \n  | |   .--.|_/ | | \\_|  | | `. \\ | |_) |  \n  | | / .'`\\ \\  | |      | |  | | |  __'.  \n _| |_| \\__. | _| |_    _| |_.' /_| |__) | \n|_____|'.__.' |_____|  |______.'|_______/  version x.x.x\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("ul",[s("li",[e._v("Check pom.xml file:")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("<version>x.x.x</version>\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ul",[s("li",[e._v("Use JDBC API:")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("String iotdbVersion = tsfileDatabaseMetadata.getDatabaseProductVersion();\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ul",[s("li",[e._v("Use Command Line Interface:")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB> show version\nshow version\n+---------------+\n|version        |\n+---------------+\n|x.x.x          |\n+---------------+\nTotal line number = 1\nIt costs 0.241s\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("h2",{attrs:{id:"where-can-i-find-iotdb-logs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#where-can-i-find-iotdb-logs"}},[e._v("#")]),e._v(" Where can I find IoTDB logs?")]),e._v(" "),s("p",[e._v("Suppose your root directory is:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ pwd\n/workspace/iotdb\n\n$ ls -l\nserver/\ncli/\npom.xml\nReadme.md\n...\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("p",[e._v("Let "),s("code",[e._v("$IOTDB_HOME = /workspace/iotdb/server/target/iotdb-server-{project.version}")])]),e._v(" "),s("p",[e._v("Let "),s("code",[e._v("$IOTDB_CLI_HOME = /workspace/iotdb/cli/target/iotdb-cli-{project.version}")])]),e._v(" "),s("p",[e._v("By default settings, the logs are stored under "),s("code",[e._v("IOTDB_HOME/logs")]),e._v(". You can change log level and storage path by configuring "),s("code",[e._v("logback.xml")]),e._v(" under "),s("code",[e._v("IOTDB_HOME/conf")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"where-can-i-find-iotdb-data-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#where-can-i-find-iotdb-data-files"}},[e._v("#")]),e._v(" Where can I find IoTDB data files?")]),e._v(" "),s("p",[e._v("By default settings, the data files (including tsfile, metadata, and WAL files) are stored under "),s("code",[e._v("IOTDB_HOME/data")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"how-do-i-know-how-many-time-series-are-stored-in-iotdb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-know-how-many-time-series-are-stored-in-iotdb"}},[e._v("#")]),e._v(" How do I know how many time series are stored in IoTDB?")]),e._v(" "),s("p",[e._v("Use IoTDB's Command Line Interface:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB> show timeseries root\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("In the result, there is a statement shows "),s("code",[e._v("Total timeseries number")]),e._v(", this number is the timeseries number in IoTDB.")]),e._v(" "),s("p",[e._v("In the current version, IoTDB supports querying the number of time series. Use IoTDB's Command Line Interface:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB> count timeseries root\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("If you are using Linux, you can use the following shell command:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('> grep "0,root" $IOTDB_HOME/data/system/schema/mlog.txt |  wc -l\n>   6\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("h2",{attrs:{id:"can-i-use-hadoop-and-spark-to-read-tsfile-in-iotdb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#can-i-use-hadoop-and-spark-to-read-tsfile-in-iotdb"}},[e._v("#")]),e._v(" Can I use Hadoop and Spark to read TsFile in IoTDB?")]),e._v(" "),s("p",[e._v("Yes. IoTDB has intense integration with Open Source Ecosystem. IoTDB supports "),s("a",{attrs:{href:"https://github.com/apache/iotdb/tree/master/hadoop",target:"_blank",rel:"noopener noreferrer"}},[e._v("Hadoop"),s("OutboundLink")],1),e._v(", "),s("a",{attrs:{href:"https://github.com/apache/iotdb/tree/master/spark",target:"_blank",rel:"noopener noreferrer"}},[e._v("Spark"),s("OutboundLink")],1),e._v(" and "),s("a",{attrs:{href:"https://github.com/apache/iotdb/tree/master/grafana",target:"_blank",rel:"noopener noreferrer"}},[e._v("Grafana"),s("OutboundLink")],1),e._v(" visualization tool.")]),e._v(" "),s("h2",{attrs:{id:"how-does-iotdb-handle-duplicate-points"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-does-iotdb-handle-duplicate-points"}},[e._v("#")]),e._v(" How does IoTDB handle duplicate points?")]),e._v(" "),s("p",[e._v("A data point is uniquely identified by a full time series path (e.g. "),s("code",[e._v("root.vehicle.d0.s0")]),e._v(") and timestamp. If you submit a new point with the same path and timestamp as an existing point, IoTDB updates the value of this point instead of inserting a new point.")]),e._v(" "),s("h2",{attrs:{id:"how-can-i-tell-what-type-of-the-specific-timeseries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-tell-what-type-of-the-specific-timeseries"}},[e._v("#")]),e._v(" How can I tell what type of the specific timeseries?")]),e._v(" "),s("p",[e._v("Use "),s("code",[e._v("SHOW TIMESERIES <timeseries path>")]),e._v(" SQL in IoTDB's Command Line Interface:")]),e._v(" "),s("p",[e._v("For example, if you want to know the type of all timeseries, the <timeseries path> should be "),s("code",[e._v("root")]),e._v(". The statement will be:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB> show timeseries root\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("If you want to query specific sensor, you can replace the <timeseries path> with the sensor name. For example:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB> show timeseries root.fit.d1.s1\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("Otherwise, you can also use wildcard in timeseries path:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB> show timeseries root.fit.d1.*\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("h2",{attrs:{id:"how-can-i-change-iotdb-s-cli-time-display-format"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#how-can-i-change-iotdb-s-cli-time-display-format"}},[e._v("#")]),e._v(" How can I change IoTDB's Cli time display format?")]),e._v(" "),s("p",[e._v("The default IoTDB's Cli time display format is readable (e.g. "),s("code",[e._v("1970-01-01T08:00:00.001")]),e._v("), if you want to display time in timestamp type or other readable format, add parameter "),s("code",[e._v("-disableISO8601")]),e._v(" in start command:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("> $IOTDB_CLI_HOME/sbin/start-cli.sh -h 127.0.0.1 -p 6667 -u root -pw root -disableISO8601\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);