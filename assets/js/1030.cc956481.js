(window.webpackJsonp=window.webpackJsonp||[]).push([[1030],{1433:function(t,a,e){"use strict";e.r(a);var s=e(19),i=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"性能监控"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能监控"}},[t._v("#")]),t._v(" 性能监控")]),t._v(" "),a("h2",{attrs:{id:"引言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#引言"}},[t._v("#")]),t._v(" 引言")]),t._v(" "),a("p",[t._v("性能监控模块用来监控IOTDB每一个操作的耗时，以便用户更好的了解数据库的整体性能。此模块会统计每一种操作的平均耗时，以及耗时在一定时间区间内（1ms，4ms，16ms，64ms，256ms，1024ms，以上）的操作的比例。输出文件在log_measure.log中。输出样例如下：")]),t._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/60937461-14296f80-a303-11e9-9602-a7bed624bfb3.png"}}),t._v(" "),a("h2",{attrs:{id:"配置参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置参数"}},[t._v("#")]),t._v(" 配置参数")]),t._v(" "),a("p",[t._v("配置文件位置：conf/iotdb-engine.properties")]),t._v(" "),a("center",[t._v("**表 -配置参数以及描述项**")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("描述")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("enable_performance_stat")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是否开启性能监控模块")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("performance_stat_display_interval")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("60000")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("打印统计结果的时间延迟，以毫秒为单位")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("performance_stat_memory_in_kb")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("20")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("性能监控模块使用的内存阈值，单位为KB")])])])]),t._v(" "),a("h2",{attrs:{id:"利用jmx-mbean动态调节参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利用jmx-mbean动态调节参数"}},[t._v("#")]),t._v(" 利用JMX MBean动态调节参数")]),t._v(" "),a("p",[t._v("通过端口31999连接jconsole，并在上方菜单项中选择‘MBean’. 展开侧边框并选择 'org.apache.iotdb.db.cost.statistic'. 将会得到如下图所示结果：")]),t._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/60937484-30c5a780-a303-11e9-8e92-04c413df2088.png"}}),t._v(" "),a("p",[a("strong",[t._v("属性")])]),t._v(" "),a("ol",[a("li",[t._v("EnableStat：是否开启性能监控模块，如果被设置为true，则性能监控模块会记录每个操作的耗时并打印结果。这个参数不能直接通过jconsole直接更改，但可通过下方的函数来进行动态设置。")]),t._v(" "),a("li",[t._v("DisplayIntervalInMs：相邻两次打印结果的时间间隔。这个参数可以直接设置，但它要等性能监控模块重启才会生效。重启性能监控模块可以通过先调用 stopStatistic()然后调用startContinuousStatistics()或者直接调用 startOneTimeStatistics()实现。")]),t._v(" "),a("li",[t._v("OperationSwitch：这个属性用来展示针对每一种操作是否开启了监控统计，map的键为操作的名字，值为是否针对这种操作开启性能监控。这个参数不能直接通过jconsole直接更改，但可通过下方的 'changeOperationSwitch()'函数来进行动态设置。")])]),t._v(" "),a("p",[a("strong",[t._v("操作")])]),t._v(" "),a("ol",[a("li",[t._v("startContinuousStatistics：开启性能监控并以‘DisplayIntervalInMs’的时间间隔打印统计结果。")]),t._v(" "),a("li",[t._v("startOneTimeStatistics：开启性能监控并以‘DisplayIntervalInMs’的时间延迟打印一次统计结果。")]),t._v(" "),a("li",[t._v("stopStatistic：关闭性能监控。")]),t._v(" "),a("li",[t._v("clearStatisticalState(): 清除以统计的结果，从新开始统计。")]),t._v(" "),a("li",[t._v("changeOperationSwitch(String operationName, Boolean operationState):设置是否针对每一种不同的操作开启监控。参数‘operationName是操作的名称，在OperationSwitch属性中展示了所有操作的名称。参数 ‘operationState’是操作的状态，打开或者关闭。如果状态设置成功则此函数会返回true，否则返回false。")])]),t._v(" "),a("h2",{attrs:{id:"自定义操作类型监控其他区域"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义操作类型监控其他区域"}},[t._v("#")]),t._v(" 自定义操作类型监控其他区域")]),t._v(" "),a("p",[a("strong",[t._v("增加操作项")])]),t._v(" "),a("p",[t._v("在org.apache.iotdb.db.cost.statistic.Operation类中增加一个枚举项来表示新增的操作.")]),t._v(" "),a("p",[a("strong",[t._v("在监控区域增加监控代码")])]),t._v(" "),a("p",[t._v("在监控开始区域增加计时代码:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("long t0 = System. currentTimeMillis();\n")])])]),a("p",[t._v("在监控结束区域增加记录代码:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("Measurement.INSTANCE.addOperationLatency(Operation, t0);\n")])])])],1)}),[],!1,null,null,null);a.default=i.exports}}]);