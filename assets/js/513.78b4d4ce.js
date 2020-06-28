(window.webpackJsonp=window.webpackJsonp||[]).push([[513],{1072:function(t,e,s){"use strict";s.r(e);var l=s(69),a=Object(l.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"命令行接口-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令行接口-cli"}},[t._v("#")]),t._v(" 命令行接口 (CLI)")]),t._v(" "),s("h2",{attrs:{id:"概览"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#概览"}},[t._v("#")]),t._v(" 概览")]),t._v(" "),s("ul",[s("li",[t._v("Cli / Shell工具\n"),s("ul",[s("li",[t._v("Cli / Shell安装")]),t._v(" "),s("li",[t._v("Cli / Shell运行方式")]),t._v(" "),s("li",[t._v("Cli / Shell运行参数")]),t._v(" "),s("li",[t._v("Cli / Shell的-e参数")])])])]),t._v(" "),s("p",[t._v("IOTDB为用户提供Client/Shell工具用于启动客户端和服务端程序。下面介绍每个Client/Shell工具的运行方式和相关参数。")]),t._v(" "),s("blockquote",[s("p",[t._v("$IOTDB_HOME表示IoTDB的安装目录所在路径。")])]),t._v(" "),s("h2",{attrs:{id:"cli-shell安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cli-shell安装"}},[t._v("#")]),t._v(" Cli / Shell安装")]),t._v(" "),s("p",[t._v("在incubator-iotdb的根目录下执行")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("> mvn clean package -pl client -am -DskipTests\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v('在生成完毕之后，IoTDB的cli工具位于文件夹"client/target/iotdb-client-{project.version}"中。')]),t._v(" "),s("h2",{attrs:{id:"cli-shell运行方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cli-shell运行方式"}},[t._v("#")]),t._v(" Cli  / Shell运行方式")]),t._v(" "),s("p",[t._v("安装后的IoTDB中有一个默认用户："),s("code",[t._v("root")]),t._v("，默认密码为"),s("code",[t._v("root")]),t._v("。用户可以使用该用户尝试运行IoTDB客户端以测试服务器是否正常启动。客户端启动脚本为$IOTDB_HOME/bin文件夹下的"),s("code",[t._v("start-client")]),t._v("脚本。启动脚本时需要指定运行IP和PORT。以下为服务器在本机启动，且用户未更改运行端口号的示例，默认端口为6667。若用户尝试连接远程服务器或更改了服务器运行的端口号，请在-h和-p项处使用服务器的IP和PORT。"),s("br"),t._v('\n用户也可以在启动脚本的最前方设置自己的环境变量，如JAVA_HOME等 (对于linux用户，脚本路径为："/sbin/start-client.sh"； 对于windows用户，脚本路径为："/sbin/start-client.bat")')]),t._v(" "),s("p",[t._v("Linux系统与MacOS系统启动命令如下：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  Shell > ./sbin/start-client.sh -h 127.0.0.1 -p 6667 -u root -pw root\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Windows系统启动命令如下：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  Shell > \\sbin\\start-client.bat -h 127.0.0.1 -p 6667 -u root -pw root\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("回车后即可成功启动客户端。启动后出现如图提示即为启动成功。")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" _____       _________  ______   ______\n|_   _|     |  _   _  ||_   _ `.|_   _ \\\n  | |   .--.|_/ | | \\_|  | | `. \\ | |_) |\n  | | / .'`\\ \\  | |      | |  | | |  __'.\n _| |_| \\__. | _| |_    _| |_.' /_| |__) |\n|_____|'.__.' |_____|  |______.'|_______/  version <version>\n\n\nIoTDB> login successfully\nIoTDB>\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[t._v("输入"),s("code",[t._v("quit")]),t._v("或"),s("code",[t._v("exit")]),t._v("可退出Client结束本次会话，Client输出"),s("code",[t._v("quit normally")]),t._v("表示退出成功。")]),t._v(" "),s("h2",{attrs:{id:"cli-shell运行参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cli-shell运行参数"}},[t._v("#")]),t._v(" Cli / Shell运行参数")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("参数名")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("参数类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("是否为必需参数")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("例子")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("-disableIS08601")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("没有参数")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("如果设置了这个参数，IoTDB将以数字的形式打印时间戳(timestamp)。")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-disableIS08601")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("-h <"),s("code",[t._v("host")]),t._v(">")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string类型，不需要引号")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB客户端连接IoTDB服务器的IP地址。")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-h 10.129.187.21")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("-help")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("没有参数")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("打印IoTDB的帮助信息")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-help")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("-p <"),s("code",[t._v("port")]),t._v(">")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("int类型")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB连接服务器的端口号，IoTDB默认运行在6667端口。")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-p 6667")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("-pw <"),s("code",[t._v("password")]),t._v(">")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string类型，不需要引号")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB连接服务器所使用的密码。如果没有输入密码IoTDB会在Cli端提示输入密码。")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-pw root")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("-u <"),s("code",[t._v("username")]),t._v(">")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string类型，不需要引号")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB连接服务器锁使用的用户名。")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-u root")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("-maxPRC <"),s("code",[t._v("maxPrintRowCount")]),t._v(">")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("int类型")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("设置IoTDB返回客户端命令行中所显示的最大行数。")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-maxPRC 10")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("-e <"),s("code",[t._v("execute")]),t._v(">")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string类型")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("在不进入客户端输入模式的情况下，批量操作IoTDB")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v('-e "show storage group"')])])])]),t._v(" "),s("p",[t._v("下面展示一条客户端命令，功能是连接IP为10.129.187.21的主机，端口为6667 ，用户名为root，密码为root，以数字的形式打印时间戳，IoTDB命令行显示的最大行数为10。")]),t._v(" "),s("p",[t._v("Linux系统与MacOS系统启动命令如下：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  Shell >./sbin/start-client.sh -h 10.129.187.21 -p 6667 -u root -pw root -disableIS08601 -maxPRC 10\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("Windows系统启动命令如下：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  Shell > \\sbin\\start-client.bat -h 10.129.187.21 -p 6667 -u root -pw root -disableIS08601 -maxPRC 10\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"cli-shell的-e参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cli-shell的-e参数"}},[t._v("#")]),t._v(" Cli / Shell的-e参数")]),t._v(" "),s("p",[t._v("当您想要通过脚本的方式通过Cli / Shell对IoTDB进行批量操作时，可以使用-e参数。通过使用该参数，您可以在不进入客户端输入模式的情况下操作IoTDB。")]),t._v(" "),s("p",[t._v("为了避免SQL语句和其他参数混淆，现在只支持-e参数作为最后的参数使用。")]),t._v(" "),s("p",[t._v("针对Client/Shell工具的-e参数用法如下：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  Shell > ./sbin/start-client.sh -h {host} -p {port} -u {user} -pw {password} -e {sql for iotdb}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("为了更好的解释-e参数的使用，可以参考下面的例子。")]),t._v(" "),s("p",[t._v("假设用户希望对一个新启动的IoTDB进行如下操作：")]),t._v(" "),s("p",[t._v("1.创建名为root.demo的存储组")]),t._v(" "),s("p",[t._v("2.创建名为root.demo.s1的时间序列")]),t._v(" "),s("p",[t._v("3.向创建的时间序列中插入三个数据点")]),t._v(" "),s("p",[t._v("4.查询验证数据是否插入成功")]),t._v(" "),s("p",[t._v("那么通过使用Client/Shell工具的-e参数，可以采用如下的脚本：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('# !/bin/bash\n\nhost=127.0.0.1\nport=6667\nuser=root\npass=root\n\n./sbin/start-client.sh -h ${host} -p ${port} -u ${user} -pw ${pass} -e "set storage group to root.demo"\n./sbin/start-client.sh -h ${host} -p ${port} -u ${user} -pw ${pass} -e "create timeseries root.demo.s1 WITH DATATYPE=INT32, ENCODING=RLE"\n./sbin/start-client.sh -h ${host} -p ${port} -u ${user} -pw ${pass} -e "insert into root.demo(timestamp,s1) values(1,10)"\n./sbin/start-client.sh -h ${host} -p ${port} -u ${user} -pw ${pass} -e "insert into root.demo(timestamp,s1) values(2,11)"\n./sbin/start-client.sh -h ${host} -p ${port} -u ${user} -pw ${pass} -e "insert into root.demo(timestamp,s1) values(3,12)"\n./sbin/start-client.sh -h ${host} -p ${port} -u ${user} -pw ${pass} -e "select s1 from root.demo"\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("p",[t._v("打印出来的结果显示在下图，通过这种方式进行的操作与客户端的输入模式以及通过JDBC进行操作结果是一致的。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://issues.apache.org/jira/secure/attachment/12976042/12976042_image-2019-07-27-15-47-12-045.png",alt:"img"}})]),t._v(" "),s("p",[t._v("需要特别注意的是，在脚本中使用-e参数时要对特殊字符进行转义。")])])}),[],!1,null,null,null);e.default=a.exports}}]);