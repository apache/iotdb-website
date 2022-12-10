(window.webpackJsonp=window.webpackJsonp||[]).push([[676],{1078:function(e,s,t){"use strict";t.r(s);var a=t(19),r=Object(a.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"加载-tsfile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加载-tsfile"}},[e._v("#")]),e._v(" 加载 TsFile")]),e._v(" "),s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[e._v("#")]),e._v(" 介绍")]),e._v(" "),s("p",[e._v("加载外部 tsfile 文件工具允许用户向正在运行中的 Apache IoTDB 中加载 tsfile 文件。或者您也可以使用脚本的方式将tsfile加载进IoTDB。")]),e._v(" "),s("h2",{attrs:{id:"使用sql加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用sql加载"}},[e._v("#")]),e._v(" 使用SQL加载")]),e._v(" "),s("p",[e._v("用户通过 Cli 工具或 JDBC 向 Apache IoTDB 系统发送指定命令实现文件加载的功能。")]),e._v(" "),s("h3",{attrs:{id:"加载-tsfile-文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#加载-tsfile-文件"}},[e._v("#")]),e._v(" 加载 tsfile 文件")]),e._v(" "),s("p",[e._v("加载 tsfile 文件的指令为："),s("code",[e._v("load '<path/dir>' [sglevel=int][verify=true/false][onSuccess=delete/none]")])]),e._v(" "),s("p",[e._v("该指令有两种用法：")]),e._v(" "),s("ol",[s("li",[e._v("通过指定文件路径(绝对路径)加载单 tsfile 文件。")])]),e._v(" "),s("p",[e._v("第一个参数表示待加载的 tsfile 文件的路径。load 命令有三个可选项，分别是 sglevel，值域为整数，verify，值域为 true/false，onSuccess，值域为delete/none。不同选项之间用空格隔开，选项之间无顺序要求。")]),e._v(" "),s("p",[e._v("SGLEVEL 选项，当 tsfile 对应的 database 不存在时，用户可以通过 sglevel 参数的值来制定 database 的级别，默认为"),s("code",[e._v("iotdb-datanode.properties")]),e._v("中设置的级别。例如当设置 level 参数为1时表明此 tsfile 中所有时间序列中层级为1的前缀路径是 database，即若存在设备 root.sg.d1.s1，此时 root.sg 被指定为 database。")]),e._v(" "),s("p",[e._v("VERIFY 选项表示是否对载入的 tsfile 中的所有时间序列进行元数据检查，默认为 true。开启时，若载入的 tsfile 中的时间序列在当前 iotdb 中也存在，则会比较该时间序列的所有 Measurement 的数据类型是否一致，如果出现不一致将会导致载入失败，关闭该选项会跳过检查，载入更快。")]),e._v(" "),s("p",[e._v("ONSUCCESS选项表示对于成功载入的tsfile的处置方式，默认为delete，即tsfile成功加载后将被删除，如果是none表明tsfile成功加载之后依然被保留在源文件夹。")]),e._v(" "),s("p",[e._v("若待加载的 tsfile 文件对应的"),s("code",[e._v(".resource")]),e._v("文件存在，会被一并加载至 Apache IoTDB 数据文件的目录和引擎中，否则将通过 tsfile 文件重新生成对应的"),s("code",[e._v(".resource")]),e._v("文件，即加载的 tsfile 文件所对应的"),s("code",[e._v(".resource")]),e._v("文件不是必要的。")]),e._v(" "),s("p",[e._v("示例：")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("load '/Users/Desktop/data/1575028885956-101-0.tsfile'")])]),e._v(" "),s("li",[s("code",[e._v("load '/Users/Desktop/data/1575028885956-101-0.tsfile' verify=true")])]),e._v(" "),s("li",[s("code",[e._v("load '/Users/Desktop/data/1575028885956-101-0.tsfile' verify=false")])]),e._v(" "),s("li",[s("code",[e._v("load '/Users/Desktop/data/1575028885956-101-0.tsfile' sglevel=1")])]),e._v(" "),s("li",[s("code",[e._v("load '/Users/Desktop/data/1575028885956-101-0.tsfile' onSuccess=delete")])]),e._v(" "),s("li",[s("code",[e._v("load '/Users/Desktop/data/1575028885956-101-0.tsfile' verify=true sglevel=1")])]),e._v(" "),s("li",[s("code",[e._v("load '/Users/Desktop/data/1575028885956-101-0.tsfile' verify=false sglevel=1")])]),e._v(" "),s("li",[s("code",[e._v("load '/Users/Desktop/data/1575028885956-101-0.tsfile' verify=true onSuccess=none")])]),e._v(" "),s("li",[s("code",[e._v("load '/Users/Desktop/data/1575028885956-101-0.tsfile' verify=false sglevel=1 onSuccess=delete")])])]),e._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[e._v("通过指定文件夹路径(绝对路径)批量加载文件。")])]),e._v(" "),s("p",[e._v("第一个参数表示待加载的 tsfile 文件夹的路径。选项意义与加载单个 tsfile 文件相同。")]),e._v(" "),s("p",[e._v("示例：")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("load '/Users/Desktop/data'")])]),e._v(" "),s("li",[s("code",[e._v("load '/Users/Desktop/data' verify=false")])]),e._v(" "),s("li",[s("code",[e._v("load '/Users/Desktop/data' verify=true")])]),e._v(" "),s("li",[s("code",[e._v("load '/Users/Desktop/data' verify=true sglevel=1")])]),e._v(" "),s("li",[s("code",[e._v("load '/Users/Desktop/data' verify=false sglevel=1 onSuccess=delete")])])]),e._v(" "),s("p",[s("strong",[e._v("注意")]),e._v("，如果"),s("code",[e._v("$IOTDB_HOME$/conf/iotdb-datanode.properties")]),e._v("中"),s("code",[e._v("enable_auto_create_schema=true")]),e._v("时会在加载tsfile的时候自动创建tsfile中的元数据，否则不会自动创建。")]),e._v(" "),s("h2",{attrs:{id:"使用脚本加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用脚本加载"}},[e._v("#")]),e._v(" 使用脚本加载")]),e._v(" "),s("p",[e._v("若您在Windows环境中，请运行"),s("code",[e._v("$IOTDB_HOME/tools/load-tsfile.bat")]),e._v("，若为Linux或Unix，请运行"),s("code",[e._v("load-tsfile.sh")])]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("./load-tsfile.bat "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-f")]),e._v(" filePath "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("-h host"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("-p port"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("-u username"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("-pw password"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("--sgLevel int"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("--verify true/false"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("--onSuccess none/delete"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-f")]),e._v(" \t\t\t待加载的文件或文件夹路径，必要字段\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-h")]),e._v(" \t\t\tIoTDB的Host地址，可选，默认127.0.0.1\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-p")]),e._v(" \t\t\tIoTDB的端口，可选，默认6667\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-u")]),e._v(" \t\t\tIoTDb登录用户名，可选，默认root\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-pw")]),e._v(" \t\tIoTDB登录密码，可选，默认root\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--sgLevel")]),e._v(" \t加载TsFile自动创建Database的路径层级，可选，默认值为iotdb-common.properties指定值\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--verify")]),e._v(" \t是否对加载TsFile进行元数据校验，可选，默认为True\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--onSuccess")]),e._v(" 对成功加载的TsFile的处理方法，可选，默认为delete，成功加载之后删除源TsFile，设为none时会\t\t\t\t保留源TsFile\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("h3",{attrs:{id:"使用范例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用范例"}},[e._v("#")]),e._v(" 使用范例")]),e._v(" "),s("p",[e._v("假定服务器192.168.0.101:6667上运行一个IoTDB实例，想从将本地保存的TsFile备份文件夹D:\\IoTDB\\data中的所有的TsFile文件都加载进此IoTDB实例。")]),e._v(" "),s("p",[e._v("首先移动至"),s("code",[e._v("$IOTDB_HOME/tools/")]),e._v("，打开命令行，然后执行")]),e._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("./load-tsfile.bat "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-f")]),e._v(" D:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("IoTDB"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("data "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-h")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("192.168")]),e._v(".0.101 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-p")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("6667")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-u")]),e._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-pw")]),e._v(" root\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("等待脚本执行完成之后，可以检查IoTDB实例中数据已经被正确加载")]),e._v(" "),s("h3",{attrs:{id:"常见问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[e._v("#")]),e._v(" 常见问题")]),e._v(" "),s("ul",[s("li",[e._v("找不到或无法加载主类\n"),s("ul",[s("li",[e._v("可能是由于未设置环境变量$IOTDB_HOME，请设置环境变量之后重试")])])]),e._v(" "),s("li",[e._v("提示-f option must be set!\n"),s("ul",[s("li",[e._v("输入命令缺少待-f字段（加载文件或文件夹路径），请添加之后重新执行")])])]),e._v(" "),s("li",[e._v("执行到中途崩溃了想重新加载怎么办\n"),s("ul",[s("li",[e._v("重新执行刚才的命令，重新加载数据不会影响加载之后的正确性")])])])])])}),[],!1,null,null,null);s.default=r.exports}}]);