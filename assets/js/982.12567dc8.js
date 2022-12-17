(window.webpackJsonp=window.webpackJsonp||[]).push([[982],{1386:function(s,a,t){"use strict";t.r(a);var e=t(19),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"快速上手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[s._v("#")]),s._v(" 快速上手")]),s._v(" "),a("h2",{attrs:{id:"快速上手-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速上手-2"}},[s._v("#")]),s._v(" 快速上手")]),s._v(" "),a("p",[s._v("本文将介绍关于 IoTDB 使用的基本流程，如果需要更多信息，请浏览我们官网的 "),a("RouterLink",{attrs:{to:"/zh/UserGuide/V0.13.x/IoTDB-Introduction/What-is-IoTDB.html"}},[s._v("指引")]),s._v(".")],1),s._v(" "),a("h3",{attrs:{id:"安装环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装环境"}},[s._v("#")]),s._v(" 安装环境")]),s._v(" "),a("p",[s._v("安装前需要保证设备上配有 JDK>=1.8 的运行环境，并配置好 JAVA_HOME 环境变量。")]),s._v(" "),a("p",[s._v("设置最大文件打开数为 65535。")]),s._v(" "),a("h3",{attrs:{id:"安装步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装步骤"}},[s._v("#")]),s._v(" 安装步骤")]),s._v(" "),a("p",[s._v("IoTDB 支持多种安装途径。用户可以使用三种方式对 IoTDB 进行安装——下载二进制可运行程序、使用源码、使用 docker 镜像。")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("使用源码：您可以从代码仓库下载源码并编译，具体编译方法见下方。")])]),s._v(" "),a("li",[a("p",[s._v("二进制可运行程序：请从 "),a("a",{attrs:{href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"}},[s._v("下载"),a("OutboundLink")],1),s._v(" 页面下载最新的安装包，解压后即完成安装。")])]),s._v(" "),a("li",[a("p",[s._v("使用 Docker 镜像：dockerfile 文件位于 https://github.com/apache/iotdb/blob/master/docker/src/main")])])]),s._v(" "),a("h3",{attrs:{id:"软件目录结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#软件目录结构"}},[s._v("#")]),s._v(" 软件目录结构")]),s._v(" "),a("ul",[a("li",[s._v("sbin 启动和停止脚本目录")]),s._v(" "),a("li",[s._v("conf 配置文件目录")]),s._v(" "),a("li",[s._v("tools 系统工具目录")]),s._v(" "),a("li",[s._v("lib 依赖包目录")])]),s._v(" "),a("h3",{attrs:{id:"iotdb-试用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iotdb-试用"}},[s._v("#")]),s._v(" IoTDB 试用")]),s._v(" "),a("p",[s._v("用户可以根据以下操作对 IoTDB 进行简单的试用，若以下操作均无误，则说明 IoTDB 安装成功。")]),s._v(" "),a("h4",{attrs:{id:"启动-iotdb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动-iotdb"}},[s._v("#")]),s._v(" 启动 IoTDB")]),s._v(" "),a("p",[s._v("用户可以使用 sbin 文件夹下的 start-server 脚本启动 IoTDB。")]),s._v(" "),a("p",[s._v("Linux 系统与 MacOS 系统启动命令如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("> nohup sbin/start-server.sh -f >/dev/null 2>&1 &\nor\n> nohup sbin/start-server.sh -b\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("可选参数:")]),s._v(" "),a("ul",[a("li",[s._v("默认不含任何参数时, iotdb 将在后台启动，并且不在控制台打印日志")]),s._v(" "),a("li",[s._v('"-v": 查看iotdb版本')]),s._v(" "),a("li",[s._v('"-f": 在控制台前台启动iotdb (v0.14前是默认设置)')]),s._v(" "),a("li",[s._v('"-b": 在后台启动iotdb，控制台不打印日志')]),s._v(" "),a("li",[s._v('"-p <pidfile>": 将pid保存到指定的文件中')]),s._v(" "),a("li",[s._v('"-h": 查看帮助')]),s._v(" "),a("li",[s._v('"printgc"(必须是最后一个参数): 打印GC日志 (从v0.14起，该参数将被-g取代)')]),s._v(" "),a("li",[s._v('"-g": 打印GC日志')]),s._v(" "),a("li",[s._v('"-c <config folder>": 设置IOTDB_CONF变量的值，从而修改配置文件所在文件夹')]),s._v(" "),a("li",[s._v('"-D <a=b>": 设置Java的系统环境变量或其他参数')]),s._v(" "),a("li",[s._v('"-H <filePath> 当OOM异常时存储堆快照到<filePath> (仅 Linux/Mac生效, 且要求iotdb内存小于16GB)"')]),s._v(" "),a("li",[s._v('"-E <\\filePath> save error file of JVM to <filePath> (仅 Linux/Mac生效)"')]),s._v(" "),a("li",[s._v('"-X <command> 等价于JVM中 -XX:<command>"')]),s._v(" "),a("li")]),s._v(" "),a("p",[s._v("Windows 系统启动命令如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("> sbin\\start-server.bat \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("Windows 系统支持 -c, -v, -f, -b 四个参数。")]),s._v(" "),a("h4",{attrs:{id:"使用-cli-工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-cli-工具"}},[s._v("#")]),s._v(" 使用 Cli 工具")]),s._v(" "),a("p",[s._v("IoTDB 为用户提供多种与服务器交互的方式，在此我们介绍使用 Cli 工具进行写入、查询数据的基本步骤。")]),s._v(" "),a("p",[s._v('初始安装后的 IoTDB 中有一个默认用户：root，默认密码为 root。用户可以使用该用户运行 Cli 工具操作 IoTDB。Cli 工具启动脚本为 sbin 文件夹下的 start-cli 脚本。启动脚本时需要指定运行 ip、port、username 和 password。若脚本未给定对应参数，则默认参数为"-h 127.0.0.1 -p 6667 -u root -pw -root"')]),s._v(" "),a("p",[s._v("以下启动语句为服务器在本机运行，且用户未更改运行端口号的示例。")]),s._v(" "),a("p",[s._v("Linux 系统与 MacOS 系统启动命令如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("> sbin/start-cli.sh -h 127.0.0.1 -p 6667 -u root -pw root\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("Windows 系统启动命令如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("> sbin\\start-cli.bat -h 127.0.0.1 -p 6667 -u root -pw root\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("启动后出现如图提示即为启动成功。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(" _____       _________  ______   ______\n|_   _|     |  _   _  ||_   _ `.|_   _ \\\n  | |   .--.|_/ | | \\_|  | | `. \\ | |_) |\n  | | / .'`\\ \\  | |      | |  | | |  __'.\n _| |_| \\__. | _| |_    _| |_.' /_| |__) |\n|_____|'.__.' |_____|  |______.'|_______/  version x.x.x\n\nIoTDB> login successfully\nIoTDB>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h4",{attrs:{id:"iotdb-的基本操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iotdb-的基本操作"}},[s._v("#")]),s._v(" IoTDB 的基本操作")]),s._v(" "),a("p",[s._v("在这里，我们首先介绍一下使用 Cli 工具创建时间序列、插入数据并查看数据的方法。")]),s._v(" "),a("p",[s._v("数据在 IoTDB 中的组织形式是以时间序列为单位，每一个时间序列中有若干个数据-时间点对，每一个时间序列属于一个存储组。在定义时间序列之前，要首先使用 SET STORAGE GROUP 语句定义存储组。SQL 语句如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> SET STORAGE GROUP TO root.ln\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("我们可以使用 SHOW STORAGE GROUP 语句来查看系统当前所有的存储组，SQL 语句如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> SHOW STORAGE GROUP\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("执行结果为：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-------------+\n|storage group|\n+-------------+\n|      root.ln|\n+-------------+\nTotal line number = 1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("存储组设定后，使用 CREATE TIMESERIES 语句可以创建新的时间序列，创建时间序列时需要定义数据的类型和编码方式。此处我们创建两个时间序列，SQL 语句如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> CREATE TIMESERIES root.ln.wf01.wt01.status WITH DATATYPE=BOOLEAN, ENCODING=PLAIN\nIoTDB> CREATE TIMESERIES root.ln.wf01.wt01.temperature WITH DATATYPE=FLOAT, ENCODING=RLE\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("为了查看指定的时间序列，我们可以使用 SHOW TIMESERIES <Path>语句，其中、<Path>表示时间序列对应的路径，默认值为空，表示查看系统中所有的时间序列。下面是两个例子：")]),s._v(" "),a("p",[s._v("使用 SHOW TIMESERIES 语句查看系统中存在的所有时间序列，SQL 语句如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> SHOW TIMESERIES\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("执行结果为：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-----------------------------+-----+-------------+--------+--------+-----------+----+----------+\n|                   timeseries|alias|storage group|dataType|encoding|compression|tags|attributes|\n+-----------------------------+-----+-------------+--------+--------+-----------+----+----------+\n|root.ln.wf01.wt01.temperature| null|      root.ln|   FLOAT|     RLE|     SNAPPY|null|      null|\n|     root.ln.wf01.wt01.status| null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|null|      null|\n+-----------------------------+-----+-------------+--------+--------+-----------+----+----------+\nTotal line number = 2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("查看具体的时间序列 root.ln.wf01.wt01.status 的 SQL 语句如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> SHOW TIMESERIES root.ln.wf01.wt01.status\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("执行结果为：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+------------------------+-----+-------------+--------+--------+-----------+----+----------+\n|              timeseries|alias|storage group|dataType|encoding|compression|tags|attributes|\n+------------------------+-----+-------------+--------+--------+-----------+----+----------+\n|root.ln.wf01.wt01.status| null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|null|      null|\n+------------------------+-----+-------------+--------+--------+-----------+----+----------+\nTotal line number = 1\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("接下来，我们使用 INSERT 语句向 root.ln.wf01.wt01.status 时间序列中插入数据，在插入数据时需要首先指定时间戳和路径后缀名称：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> INSERT INTO root.ln.wf01.wt01(timestamp,status) values(100,true);\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("我们也可以向多个时间序列中同时插入数据，这些时间序列同属于一个时间戳：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> INSERT INTO root.ln.wf01.wt01(timestamp,status,temperature) values(200,false,20.71)\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("最后，我们查询之前插入的数据。使用 SELECT 语句我们可以查询指定的时间序列的数据结果，SQL 语句如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> SELECT status FROM root.ln.wf01.wt01\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("查询结果如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-----------------------+------------------------+\n|                   Time|root.ln.wf01.wt01.status|\n+-----------------------+------------------------+\n|1970-01-01T08:00:00.100|                    true|\n|1970-01-01T08:00:00.200|                   false|\n+-----------------------+------------------------+\nTotal line number = 2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("我们也可以查询多个时间序列的数据结果，SQL 语句如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> SELECT * FROM root.ln.wf01.wt01\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("查询结果如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+-----------------------+--------------------------+-----------------------------+\n|                   Time|  root.ln.wf01.wt01.status|root.ln.wf01.wt01.temperature|\n+-----------------------+--------------------------+-----------------------------+\n|1970-01-01T08:00:00.100|                      true|                         null|\n|1970-01-01T08:00:00.200|                     false|                        20.71|\n+-----------------------+--------------------------+-----------------------------+\nTotal line number = 2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("输入 quit 或 exit 可退出 Cli 结束本次会话。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> quit\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("或")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("IoTDB> exit\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("想要浏览更多 IoTDB 数据库支持的命令，请浏览 "),a("RouterLink",{attrs:{to:"/zh/UserGuide/V0.13.x/Reference/SQL-Reference.html"}},[s._v("SQL Reference")]),s._v(".")],1),s._v(" "),a("h4",{attrs:{id:"停止-iotdb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#停止-iotdb"}},[s._v("#")]),s._v(" 停止 IoTDB")]),s._v(" "),a("p",[s._v("用户可以使用$IOTDB_HOME/sbin 文件夹下的 stop-server 脚本停止 IoTDB。")]),s._v(" "),a("p",[s._v("Linux 系统与 MacOS 系统停止命令如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("> $sbin/stop-server.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("Windows 系统停止命令如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("> $sbin\\stop-server.bat\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"iotdb-的权限管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#iotdb-的权限管理"}},[s._v("#")]),s._v(" IoTDB 的权限管理")]),s._v(" "),a("p",[s._v("初始安装后的 IoTDB 中有一个默认用户：root，默认密码为 root。该用户为管理员用户，固定拥有所有权限，无法被赋予、撤销权限，也无法被删除。")]),s._v(" "),a("p",[s._v("您可以通过以下命令修改其密码：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ALTER USER <username> SET PASSWORD <password>;\nExample: IoTDB > ALTER USER root SET PASSWORD 'newpwd';\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("权限管理的具体内容可以参考："),a("a",{attrs:{href:"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Administration-Management/Administration.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("权限管理"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"基础配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础配置"}},[s._v("#")]),s._v(" 基础配置")]),s._v(" "),a("p",[s._v('配置文件在"conf"文件夹下，包括：')]),s._v(" "),a("ul",[a("li",[s._v("环境配置模块 ("),a("code",[s._v("iotdb-env.bat")]),s._v(", "),a("code",[s._v("iotdb-env.sh")]),s._v("),")]),s._v(" "),a("li",[s._v("系统配置模块 ("),a("code",[s._v("iotdb-engine.properties")]),s._v(")")]),s._v(" "),a("li",[s._v("日志配置模块 ("),a("code",[s._v("logback.xml")]),s._v(").")])])])}),[],!1,null,null,null);a.default=n.exports}}]);