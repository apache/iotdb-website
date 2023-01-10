(window.webpackJsonp=window.webpackJsonp||[]).push([[366],{771:function(s,a,t){"use strict";t.r(a);var e=t(19),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"data-archiving"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-archiving"}},[s._v("#")]),s._v(" Data Archiving")]),s._v(" "),a("p",[s._v("The data archiving tools consist of 5 Cli commands: "),a("code",[s._v("set")]),s._v(", "),a("code",[s._v("cancel")]),s._v(", "),a("code",[s._v("pause")]),s._v(", "),a("code",[s._v("continue")]),s._v(", and "),a("code",[s._v("show")]),s._v(". Users may use\narchiving tools to create archiving tasks, these archiving tasks start at the user specified date, and archives expired\ndata (timestamp before expire time) into a target directory specified by user, the user can then perform other\noperations such as "),a("code",[s._v("pause")]),s._v(" on the tasks.")]),s._v(" "),a("h2",{attrs:{id:"sql-statements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-statements"}},[s._v("#")]),s._v(" SQL statements")]),s._v(" "),a("h3",{attrs:{id:"show-archiving-tasks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#show-archiving-tasks"}},[s._v("#")]),s._v(" Show Archiving Tasks")]),s._v(" "),a("p",[s._v("Show the data archiving tasks.")]),s._v(" "),a("h4",{attrs:{id:"syntax"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" ARCHIVING\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v(" ARCHIVING\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" ARCHIVING "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("storage_group"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SHOW")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALL")]),s._v(" ARCHIVING "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("storage_group"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("<storage_group>")]),s._v(" specifies the storage group to show archiving task on.")]),s._v(" "),a("li",[a("code",[s._v("all")]),s._v(" By default, only tasks in the READY, RUNNING, and PAUSED states are returned. You can view tasks in other states by adding the all parameter.")])]),s._v(" "),a("h4",{attrs:{id:"example-result"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-result"}},[s._v("#")]),s._v(" Example Result")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-------+---------------------------+-------------+------+---------------------------+---------------+----------------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("task id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                submit "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("storage "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("group")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("status")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("                 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("start")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("expire "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("ms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("target directory"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-------+---------------------------+-------------+------+---------------------------+---------------+----------------+")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("      "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("T00:"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("      root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" READY"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2023")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("T00:"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00.000")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("08")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("360000")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("            "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("tmp"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-------+---------------------------+-------------+------+---------------------------+---------------+----------------+")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"set-data-archiving-task"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-data-archiving-task"}},[s._v("#")]),s._v(" Set Data Archiving Task")]),s._v(" "),a("p",[s._v("User submit data archiving task.")]),s._v(" "),a("h4",{attrs:{id:"syntax-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax-2"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" ARCHIVING "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("storage_group"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("start_time"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ttl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("target_dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" ARCHIVING "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" storage_group"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("storage_group"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" start_time"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("start_time"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ttl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("ttl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" target_dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("target_dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("<storage_group>")]),s._v(" specifies the storage group to show archiving task on.")]),s._v(" "),a("li",[a("code",[s._v("<start_time>")]),s._v(" specifies the date to start the archiving task.")]),s._v(" "),a("li",[a("code",[s._v("<ttl>")]),s._v(" specifies the expire time for task, data with "),a("code",[s._v("timestamp < now - ttl")]),s._v(" are archived, units in milliseconds.")]),s._v(" "),a("li",[a("code",[s._v("<target_dir>")]),s._v(" specifies the target directory to move the archived data, uses string for the path.")])]),s._v(" "),a("h4",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[s._v("#")]),s._v(" Example")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" ARCHIVING "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" storage_group"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln start_time"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2023")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v(" ttl"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("360000")]),s._v(" target_dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/tmp"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" ARCHIVING "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TO")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2023")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("360000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/tmp"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"tips"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tips"}},[s._v("#")]),s._v(" Tips")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("A=")]),s._v(" (such as "),a("code",[s._v("storage_group=")]),s._v(") in the Cli commands can be omitted, the order after omission must be the same as the\nabove.")]),s._v(" "),a("li",[s._v("The start time is in ISO 8601 format, so information such as hour/minute/second can be omitted, and it is set to 0 by\ndefault after being omitted.")]),s._v(" "),a("li",[a("code",[s._v("SET")]),s._v(" command is able to submit migration tasks for all storage groups by parameters like "),a("code",[s._v("root.ln.**")]),s._v(".")])]),s._v(" "),a("h3",{attrs:{id:"cancel-archiving-task"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cancel-archiving-task"}},[s._v("#")]),s._v(" Cancel Archiving Task")]),s._v(" "),a("p",[s._v("Stop and delete the data archiving task. (Note: data that has been archived will not be put back into the database)")]),s._v(" "),a("h4",{attrs:{id:"syntax-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax-3"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("CANCEL ARCHIVING "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("task_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nCANCEL ARCHIVING "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("storage_group"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("<task_id>")]),s._v(" specifies the id of archiving task to cancel.")]),s._v(" "),a("li",[a("code",[s._v("<storage_group>")]),s._v(" specifies the storage group to cancel archiving task, if many exist cancel the one with the lowest\nstart time.")])]),s._v(" "),a("h4",{attrs:{id:"example-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-2"}},[s._v("#")]),s._v(" Example")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("CANCEL ARCHIVING "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nCANCEL ARCHIVING "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"pause-archiving-task"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pause-archiving-task"}},[s._v("#")]),s._v(" Pause Archiving Task")]),s._v(" "),a("p",[s._v("Suspend the data migration task.")]),s._v(" "),a("h4",{attrs:{id:"syntax-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax-4"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("PAUSE ARCHIVING "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("task_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nPAUSE ARCHIVING "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("storage_group"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("<task_id>")]),s._v(" specifies the id of archiving task to pause.")]),s._v(" "),a("li",[a("code",[s._v("<storage_group>")]),s._v(" specifies the storage group to pause archiving task, if many exist cancel the one with the lowest\nstart time.")])]),s._v(" "),a("h4",{attrs:{id:"example-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-3"}},[s._v("#")]),s._v(" Example")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("PAUSE ARCHIVING "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nPAUSE ARCHIVING "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"resume-archiving-task"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resume-archiving-task"}},[s._v("#")]),s._v(" Resume Archiving Task")]),s._v(" "),a("p",[s._v("Resume suspended data archiving tasks.")]),s._v(" "),a("h4",{attrs:{id:"syntax-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax-5"}},[s._v("#")]),s._v(" Syntax")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("RESUME ARCHIVING "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("task_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nRESUME ARCHIVING "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("storage_group"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[a("code",[s._v("<task_id>")]),s._v(" specifies the id of archiving task to resume.")]),s._v(" "),a("li",[a("code",[s._v("<storage_group>")]),s._v(" specifies the storage group to resume archiving task, if many exist cancel the one with the lowest\nstart time.")])]),s._v(" "),a("h4",{attrs:{id:"example-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-4"}},[s._v("#")]),s._v(" Example")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[s._v("RESUME ARCHIVING "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\nRESUME ARCHIVING "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ON")]),s._v(" root"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"system-parameter-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system-parameter-configuration"}},[s._v("#")]),s._v(" System Parameter Configuration")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[s._v("Name")]),s._v(" "),a("th",[s._v("Description")]),s._v(" "),a("th",[s._v("Data Type")]),s._v(" "),a("th",[s._v("Default Value")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[a("code",[s._v("archiving_thread_num")])]),s._v(" "),a("td",[s._v("The number of threads in the thread pool that executes archiving tasks.")]),s._v(" "),a("td",[s._v("int")]),s._v(" "),a("td",[s._v("2")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);