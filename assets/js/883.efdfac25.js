(window.webpackJsonp=window.webpackJsonp||[]).push([[883],{1287:function(t,a,s){"use strict";s.r(a);var e=s(19),o=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"系统架构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统架构"}},[t._v("#")]),t._v(" 系统架构")]),t._v(" "),a("p",[t._v("IoTDB套件由若干个组件构成，共同形成“数据收集-数据写入-数据存储-数据查询-数据可视化-数据分析”等一系列功能。")]),t._v(" "),a("p",[t._v("如下图展示了使用IoTDB套件全部组件后形成的整体应用架构。下文称所有组件形成IoTDB套件，而IoTDB特指其中的时间序列数据库组件。")]),t._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/25913899/67943956-39c1e800-fc16-11e9-8da2-a662f8246816.png"}}),t._v(" "),a("p",[t._v("在上图中，用户可以通过JDBC将来自设备上传感器采集的时序数据、服务器负载和CPU内存等系统状态数据、消息队列中的时序数据、应用程序的时序数据或者其他数据库中的时序数据导入到本地或者远程的IoTDB中。用户还可以将上述数据直接写成本地（或位于HDFS上）的TsFile文件。")]),t._v(" "),a("p",[t._v("可以将TsFile文件写入到HDFS上，进而实现在Hadoop或Spark的数据处理平台上的诸如异常检测、机器学习等数据处理任务。")]),t._v(" "),a("p",[t._v("对于写入到HDFS或者本地的TsFile文件，可以利用TsFile-Hadoop或TsFile-Spark连接器允许Hadoop或Spark进行数据处理。")]),t._v(" "),a("p",[t._v("对于分析的结果，可以写回成TsFile文件。")]),t._v(" "),a("p",[t._v("IoTDB和TsFile还提供了相应的客户端工具，满足用户查看和写入数据的SQL形式、脚本形式和图形化形式等多种需求。")])])}),[],!1,null,null,null);a.default=o.exports}}]);