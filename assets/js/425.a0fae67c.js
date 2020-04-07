(window.webpackJsonp=window.webpackJsonp||[]).push([[425],{746:function(t,a,s){"use strict";s.r(a);var e=s(1),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("本节将介绍IoTDB的数据存储方式，便于您对IoTDB的数据管理有一个直观的了解。")]),t._v(" "),s("p",[t._v("IoTDB需要存储的数据分为三类，分别为数据文件、系统文件以及写前日志文件。")]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("数据文件存储了用户写入IoTDB系统的所有数据。包含TsFile文件和其他文件，可通过"),s("router-link",{attrs:{to:"./../3-Server/4-Config Manual.html"}},[t._v("data_dirs配置项")]),t._v("进行配置。")],1),t._v(" "),s("p",[t._v("为了更好的支持用户对于磁盘空间扩展等存储需求，IoTDB为TsFile的存储配置增加了多文件目录的存储方式，用户可自主配置多个存储路径作为数据的持久化位置（详情见"),s("router-link",{attrs:{to:"./../3-Server/4-Config Manual.html"}},[t._v("data_dirs配置项")]),t._v("），并可以指定或自定义目录选择策略（详情见"),s("router-link",{attrs:{to:"./../3-Server/4-Config Manual.html"}},[t._v("mult_dir_strategy配置项")]),t._v("）。")],1),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("系统Schema文件，存储了数据文件的元数据信息。可通过base_dir配置项进行配置（详情见"),s("router-link",{attrs:{to:"./../3-Server/4-Config Manual.html"}},[t._v("base_dir配置项")]),t._v("）。")],1),t._v(" "),t._m(3),t._v(" "),s("p",[t._v("写前日志文件存储了系统的写前日志。可通过"),s("code",[t._v("wal_dir")]),t._v("配置项进行配置（详情见"),s("router-link",{attrs:{to:"./../3-Server/4-Config Manual.html"}},[t._v("wal_dir配置项")]),t._v("）。")],1),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("接下来我们将举一个数据目录配置的例子，来具体说明如何配置数据的存储目录。")]),t._v(" "),s("p",[t._v("IoTDB涉及到的所有数据目录路径有：data_dirs, mult_dir_strategy, base_dir和wal_dir，它们分别涉及的是IoTDB的数据文件、系统文件以及写前日志文件。您可以选择输入路径自行配置，也可以不进行任何操作使用系统默认的配置项。")]),t._v(" "),s("p",[t._v("以下我们给出一个用户对五个目录都进行自行配置的例子。")]),t._v(" "),t._m(5),s("p",[t._v("按照上述配置，系统会：")]),t._v(" "),t._m(6)])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件"}},[this._v("#")]),this._v(" 文件")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"数据文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据文件"}},[this._v("#")]),this._v(" 数据文件")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"系统文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统文件"}},[this._v("#")]),this._v(" 系统文件")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"写前日志文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写前日志文件"}},[this._v("#")]),this._v(" 写前日志文件")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"数据存储目录设置举例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据存储目录设置举例"}},[this._v("#")]),this._v(" 数据存储目录设置举例")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[this._v("base_dir = $IOTDB_HOME/data\ndata_dirs = /data1/data, /data2/data, /data3/data \nmulti_dir_strategy=MaxDiskUsableSpaceFirstStrategy\nwal_dir= $IOTDB_HOME/data/wal\n")])]),this._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[this._v("1")]),a("br"),a("span",{staticClass:"line-number"},[this._v("2")]),a("br"),a("span",{staticClass:"line-number"},[this._v("3")]),a("br"),a("span",{staticClass:"line-number"},[this._v("4")]),a("br")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[this._v("将TsFile存储在路径/data1/data、路径/data2/data和路径data3/data3中。且对这三个路径的选择策略是："),a("code",[this._v("优先选择磁盘剩余空间最大的目录")]),this._v("，即在每次数据持久化到磁盘时系统会自动选择磁盘剩余空间最大的一个目录将数据进行写入")]),this._v(" "),a("li",[this._v("将系统文件存储在$IOTDB_HOME/data")]),this._v(" "),a("li",[this._v("将写前日志文件存储在$IOTDB_HOME/data/wal")])])}],!1,null,null,null);a.default=r.exports}}]);