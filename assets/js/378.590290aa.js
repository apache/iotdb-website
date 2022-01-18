(window.webpackJsonp=window.webpackJsonp||[]).push([[378],{1005:function(t,a,r){"use strict";r.r(a);var e=r(83),i=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"执行计划生成器-planner"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#执行计划生成器-planner"}},[t._v("#")]),t._v(" 执行计划生成器 Planner")]),t._v(" "),r("ul",[r("li",[t._v("org.apache.iotdb.db.qp.Planner")])]),t._v(" "),r("p",[t._v("将 SQL 解析出的语法树转化成逻辑计划，逻辑优化，物理计划。")]),t._v(" "),r("h2",{attrs:{id:"sql-解析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#sql-解析"}},[t._v("#")]),t._v(" SQL 解析")]),t._v(" "),r("p",[t._v("SQL 解析采用 Antlr4")]),t._v(" "),r("ul",[r("li",[t._v("antlr/src/main/antlr4/org/apache/iotdb/db/qp/strategy/SqlBase.g4")])]),t._v(" "),r("p",[r("code",[t._v("mvn clean compile -pl antlr")]),t._v(" 之后生成代码位置：antlr/target/generated-sources/antlr4")]),t._v(" "),r("h2",{attrs:{id:"逻辑计划生成器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#逻辑计划生成器"}},[t._v("#")]),t._v(" 逻辑计划生成器")]),t._v(" "),r("ul",[r("li",[t._v("org.apache.iotdb.db.qp.strategy.LogicalGenerator")])]),t._v(" "),r("h2",{attrs:{id:"逻辑计划优化器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#逻辑计划优化器"}},[t._v("#")]),t._v(" 逻辑计划优化器")]),t._v(" "),r("p",[t._v("目前有三种逻辑计划优化器")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("org.apache.iotdb.db.qp.strategy.optimizer.ConcatPathOptimizer")]),t._v(" "),r("p",[t._v("路径优化器，将 SQL 中的查询路径进行拼接，与 MManager 进行交互去掉通配符，进行路径检查。")])]),t._v(" "),r("li",[r("p",[t._v("org.apache.iotdb.db.qp.strategy.optimizer.RemoveNotOptimizer")]),t._v(" "),r("p",[t._v("谓词去非优化器，将谓词逻辑中的非操作符去掉。")])]),t._v(" "),r("li",[r("p",[t._v("org.apache.iotdb.db.qp.strategy.optimizer.DnfFilterOptimizer")]),t._v(" "),r("p",[t._v("将谓词转化为析取范式。")])]),t._v(" "),r("li",[r("p",[t._v("org.apache.iotdb.db.qp.strategy.optimizer.MergeSingleFilterOptimizer")]),t._v(" "),r("p",[t._v("将相同路径的谓词逻辑合并。")])])]),t._v(" "),r("h2",{attrs:{id:"物理计划生成器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#物理计划生成器"}},[t._v("#")]),t._v(" 物理计划生成器")]),t._v(" "),r("ul",[r("li",[t._v("org.apache.iotdb.db.qp.strategy.PhysicalGenerator")])])])}),[],!1,null,null,null);a.default=i.exports}}]);