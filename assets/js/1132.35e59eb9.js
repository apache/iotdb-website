(window.webpackJsonp=window.webpackJsonp||[]).push([[1132],{1536:function(t,s,a){"use strict";a.r(s);var e=a(19),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"数据存活时间-ttl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据存活时间-ttl"}},[t._v("#")]),t._v(" 数据存活时间（TTL）")]),t._v(" "),s("p",[t._v("IoTDB 支持对 database 级别设置数据存活时间（TTL），这使得 IoTDB 可以定期、自动地删除一定时间之前的数据。合理使用 TTL\n可以帮助您控制 IoTDB 占用的总磁盘空间以避免出现磁盘写满等异常。并且，随着文件数量的增多，查询性能往往随之下降，\n内存占用也会有所提高。及时地删除一些较老的文件有助于使查询性能维持在一个较高的水平和减少内存资源的占用。")]),t._v(" "),s("p",[t._v("TTL的默认单位为毫秒，如果配置文件中的时间精度修改为其他单位，设置ttl时仍然使用毫秒单位。")]),t._v(" "),s("h2",{attrs:{id:"设置-ttl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置-ttl"}},[t._v("#")]),t._v(" 设置 TTL")]),t._v(" "),s("p",[t._v("设置 TTL 的 SQL 语句如下所示：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("IoTDB> set ttl to root.ln 3600000\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("这个例子表示在"),s("code",[t._v("root.ln")]),t._v("数据库中，只有3600000毫秒，即最近一个小时的数据将会保存，旧数据会被移除或不可见。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("IoTDB> set ttl to root.sgcc.** 3600000\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("支持给某一路径下的 database 设置TTL，这个例子表示"),s("code",[t._v("root.sgcc")]),t._v("路径下的所有 database 设置TTL。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("IoTDB> set ttl to root.** 3600000\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("表示给所有 database 设置TTL。")]),t._v(" "),s("h2",{attrs:{id:"取消-ttl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#取消-ttl"}},[t._v("#")]),t._v(" 取消 TTL")]),t._v(" "),s("p",[t._v("取消 TTL 的 SQL 语句如下所示：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("IoTDB> unset ttl to root.ln\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("取消设置 TTL 后， database "),s("code",[t._v("root.ln")]),t._v("中所有的数据都会被保存。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("IoTDB> unset ttl to root.sgcc.**\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("取消设置"),s("code",[t._v("root.sgcc")]),t._v("路径下的所有 database 的 TTL 。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("IoTDB> unset ttl to root.**\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("取消设置所有 database 的 TTL 。")]),t._v(" "),s("h2",{attrs:{id:"显示-ttl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#显示-ttl"}},[t._v("#")]),t._v(" 显示 TTL")]),t._v(" "),s("p",[t._v("显示 TTL 的 SQL 语句如下所示：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("IoTDB> SHOW ALL TTL\nIoTDB> SHOW TTL ON StorageGroupNames\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("SHOW ALL TTL 这个例子会给出所有 database 的 TTL。\nSHOW TTL ON root.ln,root.sgcc,root.DB 这个例子会显示指定的三个 database 的 TTL。\n注意：没有设置 TTL 的 database 的 TTL 将显示为 null。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("IoTDB> show all ttl\n+-------------+-------+\n|     database|ttl(ms)|\n+-------------+-------+\n|      root.ln|3600000|\n|    root.sgcc|   null|\n|      root.DB|3600000|\n+-------------+-------+\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);