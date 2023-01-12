(window.webpackJsonp=window.webpackJsonp||[]).push([[990],{1392:function(s,a,t){"use strict";t.r(a);var r=t(19),e=Object(r.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"数据归档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据归档"}},[s._v("#")]),s._v(" 数据归档")]),s._v(" "),a("p",[s._v("数据归档功能提供 5 个 Cli 命令：包括查看、提交、取消、暂停和继续归档任务。\n用户可以创建归档任务，这些归档任务由用户指定的的启动时间，并归档过期数据到用户指定的目录。")]),s._v(" "),a("h2",{attrs:{id:"sql-语句"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-语句"}},[s._v("#")]),s._v(" SQL 语句")]),s._v(" "),a("h3",{attrs:{id:"查看数据归档任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看数据归档任务"}},[s._v("#")]),s._v(" 查看数据归档任务")]),s._v(" "),a("p",[s._v("显示数据归档任务。")]),s._v(" "),a("h4",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" ARCHIVING\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v(" ARCHIVING\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" ARCHIVING "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("storage_group"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v(" ARCHIVING "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("storage_group"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("<storage_group>")]),s._v(" 返回指定存储组上的任务参数以及状态。")]),s._v(" "),a("li",[a("code",[s._v("all")]),s._v(" 默认只返回处于 READY、RUNNING、PAUSED 状态的任务，可以通过添加 all 参数查看其他状态的任务")])]),s._v(" "),a("h4",{attrs:{id:"结果示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结果示例"}},[s._v("#")]),s._v(" 结果示例")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-------+---------------------------+-------------+------+---------------------------+---------------+----------------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("task id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                submit "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("storage "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("start")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("expire "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("target directory"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-------+---------------------------+-------------+------+---------------------------+---------------+----------------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("T00:"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("      root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" READY"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2023")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("T00:"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("360000")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("tmp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-------+---------------------------+-------------+------+---------------------------+---------------+----------------+")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"提交数据归档任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提交数据归档任务"}},[s._v("#")]),s._v(" 提交数据归档任务")]),s._v(" "),a("p",[s._v("用户提交数据归档任务。")]),s._v(" "),a("h4",{attrs:{id:"语法-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法-2"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" ARCHIVING "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("storage_group"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("start_time"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ttl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("target_dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" ARCHIVING "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" storage_group"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("storage_group"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" start_time"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("start_time"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ttl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ttl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" target_dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("target_dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("<storage_group>")]),s._v(" 指定的归档的存储组。")]),s._v(" "),a("li",[a("code",[s._v("<start_time>")]),s._v(" 归档任务开始执行的时间。")]),s._v(" "),a("li",[a("code",[s._v("<ttl>")]),s._v(" 数据过期时长，当数据的时间辍 "),a("code",[s._v("timestamp < now - ttl")]),s._v(" 则为过期数据，单位为毫秒。")]),s._v(" "),a("li",[a("code",[s._v("<target_dir>")]),s._v(" 数据文件被归档存储的目标路径，使用字符串指定路径。")])]),s._v(" "),a("h4",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" ARCHIVING "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" storage_group"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln start_time"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2023")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v(" ttl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("360000")]),s._v(" target_dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/tmp"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" ARCHIVING "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2023")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("360000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/tmp"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"提示"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提示"}},[s._v("#")]),s._v(" 提示")]),s._v(" "),a("ul",[a("li",[s._v("指令中的 "),a("code",[s._v("A=")]),s._v(" （比如 "),a("code",[s._v("storage_group=")]),s._v("）可以省略，省略后顺序必须和上述一致。")]),s._v(" "),a("li",[s._v("开始时间使用 ISO 8601 格式，因此可以省略时/分/秒等信息，省略后默认设成 0。")]),s._v(" "),a("li",[s._v("可以提交全部存储组的归档任务，使用类似 "),a("code",[s._v("root.ln.**")]),s._v("。")])]),s._v(" "),a("h3",{attrs:{id:"取消数据归档任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#取消数据归档任务"}},[s._v("#")]),s._v(" 取消数据归档任务")]),s._v(" "),a("p",[s._v("停止并取消数据归档任务。（注意：已经被归档的数据不会被放回数据库中）")]),s._v(" "),a("h4",{attrs:{id:"语法-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法-3"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("CANCEL ARCHIVING "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("task_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nCANCEL ARCHIVING "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("storage_group"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("<task_id>")]),s._v(" 归档任务的索引号。")]),s._v(" "),a("li",[a("code",[s._v("<storage_group>")]),s._v(" 取消归档任务的存储组，如果存在多个则取启动时间最早的任务。")])]),s._v(" "),a("h4",{attrs:{id:"示例-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-2"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("CANCEL ARCHIVING "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nCANCEL ARCHIVING "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"暂停数据归档任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#暂停数据归档任务"}},[s._v("#")]),s._v(" 暂停数据归档任务")]),s._v(" "),a("p",[s._v("将正在运行的数据归档任务挂起。")]),s._v(" "),a("h4",{attrs:{id:"语法-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法-4"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("PAUSE ARCHIVING "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("task_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nPAUSE ARCHIVING "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("storage_group"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("<task_id>")]),s._v(" 归档任务的索引号。")]),s._v(" "),a("li",[a("code",[s._v("<storage_group>")]),s._v(" 暂停归档任务的存储组，如果存在多个则取启动时间最早的任务。")])]),s._v(" "),a("h4",{attrs:{id:"示例-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-3"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("PAUSE ARCHIVING "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nPAUSE ARCHIVING "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"继续数据归档任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#继续数据归档任务"}},[s._v("#")]),s._v(" 继续数据归档任务")]),s._v(" "),a("p",[s._v("让挂起的数据归档任务重新执行。")]),s._v(" "),a("h4",{attrs:{id:"语法-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法-5"}},[s._v("#")]),s._v(" 语法")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("RESUME ARCHIVING "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("task_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nRESUME ARCHIVING "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("storage_group"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("<task_id>")]),s._v(" 归档任务的索引号。")]),s._v(" "),a("li",[a("code",[s._v("<storage_group>")]),s._v(" 继续归档任务的存储组，如果存在多个则取启动时间最早的任务。")])]),s._v(" "),a("h4",{attrs:{id:"示例-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例-4"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("RESUME ARCHIVING "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nRESUME ARCHIVING "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"系统参数配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统参数配置"}},[s._v("#")]),s._v(" 系统参数配置")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[s._v("参数名")]),s._v(" "),a("th",[s._v("描述")]),s._v(" "),a("th",[s._v("数据类型")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[s._v("archiving_thread_num")])]),s._v(" "),a("td",[s._v("数据归档任务使用的线程数")]),s._v(" "),a("td",[s._v("int")]),s._v(" "),a("td",[s._v("2")])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);