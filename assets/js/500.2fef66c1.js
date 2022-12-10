(window.webpackJsonp=window.webpackJsonp||[]).push([[500],{901:function(t,e,i){"use strict";i.r(e);var a=i(19),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"time-partition"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#time-partition"}},[t._v("#")]),t._v(" Time partition")]),t._v(" "),e("h2",{attrs:{id:"features"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[t._v("#")]),t._v(" Features")]),t._v(" "),e("p",[t._v("Time partition divides data according to time, and a time partition is used to save all data within a certain time range. The time partition number is represented by a natural number. Number 0 means January 1, 1970, it will increase by one every partition_interval milliseconds. Time partition number's calculation formula is timestamp / partition_interval. The main configuration items are as follows:")]),t._v(" "),e("ul",[e("li",[t._v("time_partition_interval")])]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("Name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("time_partition_interval")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Description")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Time range for dividing database, time series data will be divided into groups by this time range")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Int64")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("604800000")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("Effective")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Only allowed to be modified in first start up")])])])]),t._v(" "),e("h2",{attrs:{id:"configuration-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration-example"}},[t._v("#")]),t._v(" Configuration example")]),t._v(" "),e("p",[t._v("Enable time partition and set partition_interval to 86400000 (one day), then the data distribution is shown as the following figure:")]),t._v(" "),e("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Data%20Concept/Time-Partition/time_partition_example.png?raw=true",alt:"time partition example"}}),t._v(" "),e("ul",[e("li",[e("p",[t._v("Insert one datapoint with timestamp 0, calculate 0/86400000 = 0, then this datapoint will be stored in TsFile under folder 0")])]),t._v(" "),e("li",[e("p",[t._v("Insert one datapoint with timestamp 1609459200010, calculate 1609459200010/86400000 = 18628, then this datapoint will be stored in TsFile under folder 18628")])])]),t._v(" "),e("h2",{attrs:{id:"suggestions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#suggestions"}},[t._v("#")]),t._v(" Suggestions")]),t._v(" "),e("p",[t._v("When enabling time partition, it is better to enable timed flush memtable, configuration params are detailed in "),e("RouterLink",{attrs:{to:"/UserGuide/V1.0.x/Reference/DataNode-Config-Manual.html"}},[t._v("Config manual for timed flush")]),t._v(".")],1),t._v(" "),e("ul",[e("li",[e("p",[t._v("enable_timed_flush_unseq_memtable: Whether to enable timed flush unsequence memtable, enabled by default.")])]),t._v(" "),e("li",[e("p",[t._v("enable_timed_flush_seq_memtable: Whether to enable timed flush sequence memtable, disabled by default. It should be enabled when time partition is enabled, so inactive time partition's memtable can be flushed regularly.")])])])])}),[],!1,null,null,null);e.default=n.exports}}]);