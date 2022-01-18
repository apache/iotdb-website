(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{721:function(t,e,a){"use strict";a.r(e);var i=a(83),s=Object(i.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"monitor-and-log-tools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#monitor-and-log-tools"}},[t._v("#")]),t._v(" Monitor and Log Tools")]),t._v(" "),a("h3",{attrs:{id:"system-monitor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system-monitor"}},[t._v("#")]),t._v(" System Monitor")]),t._v(" "),a("p",[t._v("Currently, IoTDB provides users Java's JConsole tool to monitor system status or use IoTDB's open API to check data status.")]),t._v(" "),a("h4",{attrs:{id:"system-status-monitoring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system-status-monitoring"}},[t._v("#")]),t._v(" System Status Monitoring")]),t._v(" "),a("p",[t._v("After starting JConsole tool and connecting to IoTDB server, a basic look at IoTDB system status(CPU Occupation, in-memory information, etc.) is provided. See "),a("a",{attrs:{href:"https://docs.oracle.com/javase/7/docs/technotes/guides/management/jconsole.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("official documentation"),a("OutboundLink")],1),t._v(" for more information.")]),t._v(" "),a("h4",{attrs:{id:"jmx-mbean-monitoring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jmx-mbean-monitoring"}},[t._v("#")]),t._v(" JMX MBean Monitoring")]),t._v(" "),a("p",[t._v("By using JConsole tool and connecting with JMX you are provided with some system statistics and parameters.")]),t._v(" "),a("p",[t._v("This section describes how to use the JConsole "),a("code",[t._v("Mbean")]),t._v('tab of jconsole to monitor some system configurations of IoTDB, the statistics of writing, and so on. After connecting to JMX, you can find the "MBean" of "org.apache.iotdb.service", as shown in the figure below.')]),t._v(" "),a("p",[a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/112428223-ce7e3600-8d75-11eb-8e50-04f04571925b.png"}}),t._v(" "),a("br")]),t._v(" "),a("p",[t._v("There are several attributes under monitor, including data file directory, the statistics of writing and the values of some system parameters. It can also display a line chart of the property by double clicking the value corresponding to the property. For a detailed description of monitor attributes, see the following sections.")]),t._v(" "),a("p",[a("strong",[t._v("MBean Monitor Attributes List")])]),t._v(" "),a("ul",[a("li",[t._v("SystemDirectory")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("SystemDirectory")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The absolute directory of data system file.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")])])])]),t._v(" "),a("ul",[a("li",[t._v("DataSizeInByte")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("DataSizeInByte")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The total size of data file.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Unit")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Byte")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Long")])])])]),t._v(" "),a("ul",[a("li",[t._v("EnableStatMonitor")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("EnableStatMonitor")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("If the monitor module is open")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")])])])]),t._v(" "),a("h3",{attrs:{id:"data-monitoring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-monitoring"}},[t._v("#")]),t._v(" Data Monitoring")]),t._v(" "),a("p",[t._v("This module is for providing some statistics info about the writing operations:")]),t._v(" "),a("ul",[a("li",[t._v("the data size (in bytes) in IoTDB, the number of data points in IoTDB;")]),t._v(" "),a("li",[t._v("how many operations are successful or failed executed.")])]),t._v(" "),a("h4",{attrs:{id:"enable-disable-the-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-disable-the-module"}},[t._v("#")]),t._v(" Enable/disable the module")]),t._v(" "),a("p",[t._v("Users can choose to enable or disable the feature of data statistics monitoring (set the "),a("code",[t._v("enable_stat_monitor")]),t._v(" item in the configuration file).")]),t._v(" "),a("h4",{attrs:{id:"statistics-data-storing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#statistics-data-storing"}},[t._v("#")]),t._v(" Statistics Data Storing")]),t._v(" "),a("p",[t._v("By default, the statistics data is only saved in memory and can be accessed using Jconsole.")]),t._v(" "),a("p",[t._v("The data can also be written as some time series on disk. To enable it, set "),a("code",[t._v("enable_monitor_series_write=true")]),t._v(" in the configuration file. If so, using "),a("code",[t._v("select")]),t._v(" statement in IoTDB-cli can query these time series.")]),t._v(" "),a("blockquote",[a("p",[t._v("Note:\nif "),a("code",[t._v("enable_monitor_series_write=true")]),t._v(", when IoTDB is restarted, the previous statistics data will be recovered into memory.\nif "),a("code",[t._v("enable_monitor_series_write=false")]),t._v(", IoTDB will forget all statistics data after the instance is restarted.")])]),t._v(" "),a("h4",{attrs:{id:"writing-data-monitor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#writing-data-monitor"}},[t._v("#")]),t._v(" Writing Data Monitor")]),t._v(" "),a("p",[t._v("At present, the monitor system can be divided into two modules: global writing statistics and storage group writing statistics. The global statistics records the number of total points and requests, and the storage group statistics counts the write data of each storage group.")]),t._v(" "),a("p",[t._v("The system sets the collection granularity of the monitoring module to "),a("strong",[t._v("update the statistical information once one data file is flushed into the disk")]),t._v(", so the data accuracy may be different from the actual situation. To obtain accurate information, "),a("strong",[t._v("Please call the "),a("code",[t._v("flush")]),t._v(" method before querying")]),t._v(".")]),t._v(" "),a("p",[t._v("Here are the writing data statistics (the range supported is shown in brackets):")]),t._v(" "),a("ul",[a("li",[t._v("TOTAL_POINTS (GLOBAL)")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("TOTAL_POINTS")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Calculate the total number of global writing points.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Timeseries Name")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v('root.stats."global".TOTAL_POINTS'),a("br"),t._v('root.stats."{storageGroupName}".TOTAL_POINTS'),a("br"),t._v("where storageGroupName equals to "),a("code",[t._v("the-actual-sg-name.replace('.', '#')")]),a("br"),t._v("For example, the total write points of the storage group "),a("code",[t._v("root.sg")]),t._v(' is recorded in root.stats."root#sg".TOTAL_POINTS')])])])]),t._v(" "),a("ul",[a("li",[t._v("TOTAL_REQ_SUCCESS (GLOBAL)")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("TOTAL_REQ_SUCCESS")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Calculate the number of global successful requests.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Timeseries Name")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v('root.stats."global".TOTAL_REQ_SUCCESS')])])])]),t._v(" "),a("ul",[a("li",[t._v("TOTAL_REQ_FAIL (GLOBAL)")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("TOTAL_REQ_FAIL")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Calculate the number of global failed requests.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("Timeseries Name")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v('root.stats."global".TOTAL_REQ_FAIL')])])])]),t._v(" "),a("p",[t._v("The above attributes also support visualization in JConsole. For the statistical information of each storage group, in order to avoid the display confusion caused by too many storage groups, the user can input the storage group name in the operation method under monitor MBean to query the corresponding statistical information.")]),t._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/34242296/92922942-34a20c00-f469-11ea-8dc2-8229d454583c.png"}}),t._v(" "),a("h4",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example")]),t._v(" "),a("p",[t._v("Here we give some examples of using writing data statistics.")]),t._v(" "),a("p",[t._v("To know the total number of global writing points, use "),a("code",[t._v("select")]),t._v(" clause to query it's value. The query statement is:")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" TOTAL_POINTS "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stats"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"global"')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("To know the total number of global writing points of root.ln (storage group), the query statement is:")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" TOTAL_POINTS "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stats"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"root.ln"')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("To know the latest statistics of the current system, you can use the latest data query. Here is the query statement:")]),t._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("flush\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("last")]),t._v(" TOTAL_POINTS "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stats"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"global"')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"performance-monitor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#performance-monitor"}},[t._v("#")]),t._v(" Performance Monitor")]),t._v(" "),a("h4",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[t._v("#")]),t._v(" Introduction")]),t._v(" "),a("p",[t._v("To grasp the performance of iotdb, this module is added to count the time-consumption of each operation. This module can compute the statistics of the avg time-consuming of each operation and the proportion of each operation whose time consumption falls into a time range. The output is in log_measure.log file. An output example is below.")]),t._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/60937461-14296f80-a303-11e9-9602-a7bed624bfb3.png"}}),t._v(" "),a("h4",{attrs:{id:"configuration-parameter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-parameter"}},[t._v("#")]),t._v(" Configuration parameter")]),t._v(" "),a("p",[t._v("location：conf/iotdb-engine.properties")]),t._v(" "),a("center",[a("p",[a("strong",[t._v("Table -parameter and description")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Default Value")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("enable_performance_stat")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Is stat performance of sub-module enable.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("performance_stat_display_interval")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("60000")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The interval of display statistic result in ms.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("performance_stat_memory_in_kb")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("20")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("The memory used for performance_stat in kb.")])])])])]),t._v(" "),a("h4",{attrs:{id:"jmx-mbean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jmx-mbean"}},[t._v("#")]),t._v(" JMX MBean")]),t._v(" "),a("p",[t._v("Connect to jconsole with port 31999，and choose "),a("code",[t._v("MBean")]),t._v("in menu bar. Expand the sidebar and choose "),a("code",[t._v("org.apache.iotdb.db.cost.statistic")]),t._v(". You can Find：")]),t._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/112426751-721a1700-8d73-11eb-871c-db2e9c13cf99.png"}}),t._v(" "),a("p",[a("strong",[t._v("Attribute")])]),t._v(" "),a("ol",[a("li",[a("p",[t._v("EnableStat：Whether the statistics are enabled or not, if it is true, the module records the time-consuming of each operation and prints the results; It is non-editable but can be changed by the function below.")])]),t._v(" "),a("li",[a("p",[t._v("DisplayIntervalInMs：The interval between print results. The changes will not take effect instantly. To make the changes effective, you should call startContinuousStatistics() or startOneTimeStatistics().")])]),t._v(" "),a("li",[a("p",[t._v("OperationSwitch：It's a map to indicate whether the statistics of one kind of operation should be computed, the key is operation name and the value is true means the statistics of the operation are enabled, otherwise disabled. This parameter cannot be changed directly, it's changed by operation 'changeOperationSwitch()'.")])])]),t._v(" "),a("p",[a("strong",[t._v("Operation")])]),t._v(" "),a("ol",[a("li",[t._v("startContinuousStatistics： Start the statistics and output at interval of ‘DisplayIntervalInMs’.")]),t._v(" "),a("li",[t._v("startOneTimeStatistics：Start the statistics and output in delay of ‘DisplayIntervalInMs’.")]),t._v(" "),a("li",[t._v("stopStatistic：Stop the statistics.")]),t._v(" "),a("li",[t._v("clearStatisticalState(): clear current stat result, reset statistical result.")]),t._v(" "),a("li",[t._v("changeOperationSwitch(String operationName, Boolean operationState):set whether to monitor a kind of operation. The param 'operationName' is the name of operation, defined in attribute operationSwitch. The param operationState is whether to enable the statistics or not. If the state is switched successfully, the function will return true, else return false.")])]),t._v(" "),a("h3",{attrs:{id:"adding-custom-monitoring-items-for-contributors-of-iotdb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#adding-custom-monitoring-items-for-contributors-of-iotdb"}},[t._v("#")]),t._v(" Adding Custom Monitoring Items for contributors of IOTDB")]),t._v(" "),a("p",[a("strong",[t._v("Add Operation")])]),t._v(" "),a("p",[t._v("Add an enumeration in org.apache.iotdb.db.cost.statistic.Operation.")]),t._v(" "),a("p",[a("strong",[t._v("Add Timing Code in Monitoring Area")])]),t._v(" "),a("p",[t._v("Add timing code in the monitoring start area:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("long t0 = System. currentTimeMillis();\n")])])]),a("p",[t._v("Add timing code in the monitoring stop area:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("Measurement.INSTANCE.addOperationLatency(Operation, t0);\n")])])]),a("h3",{attrs:{id:"cache-hit-ratio-statistics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cache-hit-ratio-statistics"}},[t._v("#")]),t._v(" Cache Hit Ratio Statistics")]),t._v(" "),a("h4",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("p",[t._v("To improve query performance, IOTDB caches ChunkMetaData and TsFileMetaData. Users can view the cache hit ratio through debug level log and MXBean, and adjust the memory occupied by the cache according to the cache hit ratio and system memory. The method of using MXBean to view cache hit ratio is as follows:")]),t._v(" "),a("ol",[a("li",[t._v("Connect to jconsole with port 31999 and select 'MBean' in the menu item above.")]),t._v(" "),a("li",[t._v("Expand the sidebar and select 'org.apache.iotdb.db.service'. You will get the results shown in the following figure:")])]),t._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/112426760-73e3da80-8d73-11eb-9a8f-9232d1f2033b.png"}}),t._v(" "),a("h2",{attrs:{id:"system-log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system-log"}},[t._v("#")]),t._v(" System log")]),t._v(" "),a("p",[t._v("IoTDB allows users to configure IoTDB system logs (such as log output level) by modifying the log configuration file. The default location of the system log configuration file is in $IOTDB_HOME/conf folder.")]),t._v(" "),a("p",[t._v("The default log configuration file is named logback.xml. The user can modify the configuration of the system running log by adding or changing the xml tree node parameters. It should be noted that the configuration of the system log using the log configuration file does not take effect immediately after the modification, instead, it will take effect after restarting the system. The usage of logback.xml is just as usual.")]),t._v(" "),a("p",[t._v("At the same time, in order to facilitate the debugging of the system by the developers and DBAs, we provide several JMX interfaces to dynamically modify the log configuration, and configure the Log module of the system in real time without restarting the system.")]),t._v(" "),a("h3",{attrs:{id:"dynamic-system-log-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-system-log-configuration"}},[t._v("#")]),t._v(" Dynamic System Log Configuration")]),t._v(" "),a("h4",{attrs:{id:"connect-jmx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#connect-jmx"}},[t._v("#")]),t._v(" Connect JMX")]),t._v(" "),a("p",[t._v("Here we use JConsole to connect with JMX.")]),t._v(" "),a("p",[t._v("Start the JConsole, establish a new JMX connection with the IoTDB Server (you can select the local process or input the IP and PORT for remote connection, the default operation port of the IoTDB JMX service is 31999). Fig 4.1 shows the connection GUI of JConsole.")]),t._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577195-f94d7500-1ef3-11e9-999a-b4f67055d80e.png"}}),t._v(" "),a("p",[t._v("After connected, click "),a("code",[t._v("MBean")]),t._v(" and find "),a("code",[t._v("ch.qos.logback.classic.default.ch.qos.logback.classic.jmx.JMXConfigurator")]),t._v("(As shown in fig 4.2).\n"),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577204-fe122900-1ef3-11e9-9e89-2eb1d46e24b8.png"}})]),t._v(" "),a("p",[t._v("In the JMXConfigurator Window, there are 6 operations provided, as shown in fig 4.3. You can use these interfaces to perform operation.")]),t._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51577216-09fdeb00-1ef4-11e9-9005-542ad7d9e9e0.png"}}),t._v(" "),a("h4",{attrs:{id:"interface-instruction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interface-instruction"}},[t._v("#")]),t._v(" Interface Instruction")]),t._v(" "),a("ul",[a("li",[t._v("reloadDefaultConfiguration")])]),t._v(" "),a("p",[t._v("This method is to reload the default logback configuration file. The user can modify the default configuration file first, and then call this method to reload the modified configuration file into the system to take effect.")]),t._v(" "),a("ul",[a("li",[t._v("reloadByFileName")])]),t._v(" "),a("p",[t._v("This method loads a logback configuration file with the specified path and name, and then makes it take effect. This method accepts a parameter of type String named p1, which is the path to the configuration file that needs to be specified for loading.")]),t._v(" "),a("ul",[a("li",[t._v("getLoggerEffectiveLevel")])]),t._v(" "),a("p",[t._v("This method is to obtain the current log level of the specified Logger. This method accepts a String type parameter named p1, which is the name of the specified Logger. This method returns the log level currently in effect for the specified Logger.")]),t._v(" "),a("ul",[a("li",[t._v("getLoggerLevel")])]),t._v(" "),a("p",[t._v("This method is to obtain the log level of the specified Logger. This method accepts a String type parameter named p1, which is the name of the specified Logger. This method returns the log level of the specified Logger.\nIt should be noted that the difference between this method and the "),a("code",[t._v("getLoggerEffectiveLevel")]),t._v(" method is that the method returns the log level that the specified Logger is set in the configuration file. If the user does not set the log level for the Logger, then return empty. According to Logger's log-level inheritance mechanism, a Logger's level is not explicitly set, it will inherit the log level settings from its nearest ancestor. At this point, calling the "),a("code",[t._v("getLoggerEffectiveLevel")]),t._v(" method will return the log level in which the Logger is in effect; calling "),a("code",[t._v("getLoggerLevel")]),t._v(" will return null.")])],1)}),[],!1,null,null,null);e.default=s.exports}}]);