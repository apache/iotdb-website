(window.webpackJsonp=window.webpackJsonp||[]).push([[768],{1329:function(a,t,r){"use strict";r.r(t);var e=r(69),s=Object(e.a)({},(function(){var a=this,t=a.$createElement,r=a._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#文件"}},[a._v("#")]),a._v(" 文件")]),a._v(" "),r("p",[a._v("本节将介绍IoTDB的数据存储方式，便于您对IoTDB的数据管理有一个直观的了解。")]),a._v(" "),r("p",[a._v("IoTDB需要存储的数据分为三类，分别为数据文件、系统文件以及写前日志文件。")]),a._v(" "),r("h2",{attrs:{id:"数据文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据文件"}},[a._v("#")]),a._v(" 数据文件")]),a._v(" "),r("p",[a._v("数据文件存储了用户写入IoTDB系统的所有数据。包含TsFile文件和其他文件，可通过"),r("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Master/Master/Master/Server/Config Manual.html"}},[a._v("data_dirs配置项")]),a._v("进行配置。")],1),a._v(" "),r("p",[a._v("为了更好的支持用户对于磁盘空间扩展等存储需求，IoTDB为TsFile的存储配置增加了多文件目录的存储方式，用户可自主配置多个存储路径作为数据的持久化位置（详情见"),r("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Master/Master/Master/Server/Config Manual.html"}},[a._v("data_dirs配置项")]),a._v("），并可以指定或自定义目录选择策略（详情见"),r("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Master/Master/Master/Server/Config Manual.html"}},[a._v("mult_dir_strategy配置项")]),a._v("）。")],1),a._v(" "),r("h2",{attrs:{id:"系统文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#系统文件"}},[a._v("#")]),a._v(" 系统文件")]),a._v(" "),r("p",[a._v("系统Schema文件，存储了数据文件的元数据信息。可通过base_dir配置项进行配置（详情见"),r("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Master/Master/Master/Server/Config Manual.html"}},[a._v("base_dir配置项")]),a._v("）。")],1),a._v(" "),r("h2",{attrs:{id:"写前日志文件"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#写前日志文件"}},[a._v("#")]),a._v(" 写前日志文件")]),a._v(" "),r("p",[a._v("写前日志文件存储了系统的写前日志。可通过"),r("code",[a._v("wal_dir")]),a._v("配置项进行配置（详情见"),r("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Master/Master/Master/Server/Config Manual.html"}},[a._v("wal_dir配置项")]),a._v("）。")],1),a._v(" "),r("h2",{attrs:{id:"数据存储目录设置举例"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#数据存储目录设置举例"}},[a._v("#")]),a._v(" 数据存储目录设置举例")]),a._v(" "),r("p",[a._v("接下来我们将举一个数据目录配置的例子，来具体说明如何配置数据的存储目录。")]),a._v(" "),r("p",[a._v("IoTDB涉及到的所有数据目录路径有：data_dirs, mult_dir_strategy, base_dir和wal_dir，它们分别涉及的是IoTDB的数据文件、系统文件以及写前日志文件。您可以选择输入路径自行配置，也可以不进行任何操作使用系统默认的配置项。")]),a._v(" "),r("p",[a._v("以下我们给出一个用户对五个目录都进行自行配置的例子。")]),a._v(" "),r("div",{staticClass:"language- line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("base_dir = $IOTDB_HOME/data\ndata_dirs = /data1/data, /data2/data, /data3/data \nmulti_dir_strategy=MaxDiskUsableSpaceFirstStrategy\nwal_dir= $IOTDB_HOME/data/wal\n")])]),a._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[a._v("1")]),r("br"),r("span",{staticClass:"line-number"},[a._v("2")]),r("br"),r("span",{staticClass:"line-number"},[a._v("3")]),r("br"),r("span",{staticClass:"line-number"},[a._v("4")]),r("br")])]),r("p",[a._v("按照上述配置，系统会：")]),a._v(" "),r("ul",[r("li",[a._v("将TsFile存储在路径/data1/data、路径/data2/data和路径data3/data3中。且对这三个路径的选择策略是："),r("code",[a._v("优先选择磁盘剩余空间最大的目录")]),a._v("，即在每次数据持久化到磁盘时系统会自动选择磁盘剩余空间最大的一个目录将数据进行写入")]),a._v(" "),r("li",[a._v("将系统文件存储在$IOTDB_HOME/data")]),a._v(" "),r("li",[a._v("将写前日志文件存储在$IOTDB_HOME/data/wal")])])])}),[],!1,null,null,null);t.default=s.exports}}]);