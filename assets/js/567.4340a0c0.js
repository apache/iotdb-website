(window.webpackJsonp=window.webpackJsonp||[]).push([[567],{1176:function(t,s,a){"use strict";a.r(s);var e=a(82),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sql-命令行终端-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-命令行终端-cli"}},[t._v("#")]),t._v(" SQL 命令行终端 (CLI)")]),t._v(" "),a("p",[t._v("IOTDB 为用户提供 cli/Shell 工具用于启动客户端和服务端程序。下面介绍每个 cli/Shell 工具的运行方式和相关参数。")]),t._v(" "),a("blockquote",[a("p",[t._v("$IOTDB_HOME 表示 IoTDB 的安装目录所在路径。")])]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("p",[t._v("在 iotdb 的根目录下执行")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" mvn clean package -pl cli -am -DskipTests\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v('在生成完毕之后，IoTDB 的 cli 工具位于文件夹"cli/target/iotdb-cli-{project.version}"中。')]),t._v(" "),a("h2",{attrs:{id:"运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[t._v("#")]),t._v(" 运行")]),t._v(" "),a("h3",{attrs:{id:"cli-运行方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cli-运行方式"}},[t._v("#")]),t._v(" Cli 运行方式")]),t._v(" "),a("p",[t._v("安装后的 IoTDB 中有一个默认用户："),a("code",[t._v("root")]),t._v("，默认密码为"),a("code",[t._v("root")]),t._v("。用户可以使用该用户尝试运行 IoTDB 客户端以测试服务器是否正常启动。客户端启动脚本为$IOTDB_HOME/sbin 文件夹下的"),a("code",[t._v("start-cli")]),t._v("脚本。启动脚本时需要指定运行 IP 和 RPC PORT。以下为服务器在本机启动，且用户未更改运行端口号的示例，默认端口为 6667。若用户尝试连接远程服务器或更改了服务器运行的端口号，请在-h 和-p 项处使用服务器的 IP 和 RPC PORT。"),a("br"),t._v('\n用户也可以在启动脚本的最前方设置自己的环境变量，如 JAVA_HOME 等 （对于 linux 用户，脚本路径为："/sbin/start-cli.sh"； 对于 windows 用户，脚本路径为："/sbin/start-cli.bat")')]),t._v(" "),a("p",[t._v("Linux 系统与 MacOS 系统启动命令如下：")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("Shell "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" sbin/start-cli.sh -h "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6667")]),t._v(" -u root -pw root\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Windows 系统启动命令如下：")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("Shell "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" sbin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("start-cli.bat -h "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6667")]),t._v(" -u root -pw root\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("回车后即可成功启动客户端。启动后出现如图提示即为启动成功。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" _____       _________  ______   ______\n|_   _|     |  _   _  ||_   _ `.|_   _ \\\n  | |   .--.|_/ | | \\_|  | | `. \\ | |_) |\n  | | / .'`\\ \\  | |      | |  | | |  __'.\n _| |_| \\__. | _| |_    _| |_.' /_| |__) |\n|_____|'.__.' |_____|  |______.'|_______/  version <version>\n\nIoTDB> login successfully\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br")])]),a("p",[t._v("输入"),a("code",[t._v("quit")]),t._v("或"),a("code",[t._v("exit")]),t._v("可退出 cli 结束本次会话，cli 输出"),a("code",[t._v("quit normally")]),t._v("表示退出成功。")]),t._v(" "),a("h3",{attrs:{id:"cli-运行参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cli-运行参数"}},[t._v("#")]),t._v(" Cli 运行参数")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("参数名")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("参数类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("是否为必需参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("例子")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-disableISO8601")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("没有参数")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("如果设置了这个参数，IoTDB 将以数字的形式打印时间戳 (timestamp)。")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-disableISO8601")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-h <"),a("code",[t._v("host")]),t._v(">")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string 类型，不需要引号")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB 客户端连接 IoTDB 服务器的 IP 地址。")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-h 10.129.187.21")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-help")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("没有参数")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("打印 IoTDB 的帮助信息")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-help")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-p <"),a("code",[t._v("rpcPort")]),t._v(">")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("int 类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB 连接服务器的端口号，IoTDB 默认运行在 6667 端口。")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-p 6667")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-pw <"),a("code",[t._v("password")]),t._v(">")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string 类型，不需要引号")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB 连接服务器所使用的密码。如果没有输入密码 IoTDB 会在 Cli 端提示输入密码。")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-pw root")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-u <"),a("code",[t._v("username")]),t._v(">")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string 类型，不需要引号")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("是")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("IoTDB 连接服务器锁使用的用户名。")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-u root")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-maxPRC <"),a("code",[t._v("maxPrintRowCount")]),t._v(">")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("int 类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("设置 IoTDB 返回客户端命令行中所显示的最大行数。")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-maxPRC 10")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-e <"),a("code",[t._v("execute")]),t._v(">")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("string 类型")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("在不进入客户端输入模式的情况下，批量操作 IoTDB")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v('-e "show storage group"')])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("-c")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("空")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("如果服务器设置了 "),a("code",[t._v("rpc_thrift_compression_enable=true")]),t._v(", 则 CLI 必须使用 "),a("code",[t._v("-c")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-c")])])])]),t._v(" "),a("p",[t._v("下面展示一条客户端命令，功能是连接 IP 为 10.129.187.21 的主机，端口为 6667 ，用户名为 root，密码为 root，以数字的形式打印时间戳，IoTDB 命令行显示的最大行数为 10。")]),t._v(" "),a("p",[t._v("Linux 系统与 MacOS 系统启动命令如下：")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("Shell "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" sbin/start-cli.sh -h "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.129")]),t._v(".187.21 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6667")]),t._v(" -u root -pw root -disableISO8601 -maxPRC "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Windows 系统启动命令如下：")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("Shell "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" sbin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("start-cli.bat -h "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.129")]),t._v(".187.21 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6667")]),t._v(" -u root -pw root -disableISO8601 -maxPRC "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"使用-openid-作为用户名认证登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-openid-作为用户名认证登录"}},[t._v("#")]),t._v(" 使用 OpenID 作为用户名认证登录")]),t._v(" "),a("p",[t._v("OpenID Connect (OIDC) 使用 keycloack 作为 OIDC 服务权限认证服务。")]),t._v(" "),a("h4",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("p",[t._v("配置位于 iotdb-engines.properties，设定 authorizer_provider_class 为 org.apache.iotdb.db.auth.authorizer.OpenIdAuthorizer 则开启了 openID 服务，默认情况下值为 org.apache.iotdb.db.auth.authorizer.LocalFileAuthorizer 表示没有开启 openID 服务。")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("authorizer_provider_class=org.apache.iotdb.db.auth.authorizer.OpenIdAuthorizer\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("如果开启了 openID 服务则 openID_url 为必填项，openID_url 值为 http://ip:port/auth/realms/{realmsName}")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("openID_url=http://127.0.0.1:8080/auth/realms/iotdb/\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("####keycloack 配置")]),t._v(" "),a("p",[t._v("1、下载 keycloack 程序，在 keycloack/bin 中启动 keycloack")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("Shell "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("cd bin\nShell "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("./standalone.sh\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("2、使用 https://ip:port/auth 登陆 keycloack, 首次登陆需要创建用户")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/CLI/Command-Line-Interface/login_keycloak.png?raw=true",alt:"avatar"}})]),t._v(" "),a("p",[t._v("3、点击 Administration Console 进入管理端")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/CLI/Command-Line-Interface/Administration%20Console.png?raw=true",alt:"avatar"}})]),t._v(" "),a("p",[t._v("4、在左侧的 Master 菜单点击 add Realm, 输入 Name 创建一个新的 Realm")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/CLI/Command-Line-Interface/add%20Realm_1.png?raw=true",alt:"avatar"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/CLI/Command-Line-Interface/add%20Realm_2.png?raw=true",alt:"avatar"}})]),t._v(" "),a("p",[t._v("5、点击左侧菜单 Clients，创建 client")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/CLI/Command-Line-Interface/client.png?raw=true",alt:"avatar"}})]),t._v(" "),a("p",[t._v("6、点击左侧菜单 User，创建 user")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/CLI/Command-Line-Interface/user.png?raw=true",alt:"avatar"}})]),t._v(" "),a("p",[t._v("7、点击新创建的用户 id，点击 Credentials 导航输入密码和关闭 Temporary 选项，至此 keyclork 配置完成")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/CLI/Command-Line-Interface/pwd.png?raw=true",alt:"avatar"}})]),t._v(" "),a("p",[t._v("以上步骤提供了一种 keycloak 登陆 iotdb 方式，更多方式请参考 keycloak 配置")]),t._v(" "),a("p",[t._v("若对应的 IoTDB 服务器开启了使用 OpenID Connect (OIDC) 作为权限认证服务，那么就不再需要使用用户名密码进行登录。\n替而代之的是使用 Token，以及空密码。\n此时，登录命令如下：")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("Shell "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" sbin/start-cli.sh -h "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10.129")]),t._v(".187.21 -p "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6667")]),t._v(" -u "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("my-access-token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" -pw "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("其中，需要将{my-access-token} （注意，包括{}）替换成你的 token。")]),t._v(" "),a("p",[t._v("如何获取 token 取决于你的 OIDC 设置。 最简单的一种情况是使用"),a("code",[t._v("password-grant")]),t._v("。例如，假设你在用 keycloack 作为你的 OIDC 服务，\n并且你在 keycloack 中有一个被定义成 publich 的"),a("code",[t._v("iotdb")]),t._v("客户的 realm，那么你可以使用如下"),a("code",[t._v("curl")]),t._v("命令获得 token。\n（注意例子中的{}和里面的内容需要替换成具体的服务器地址和 realm 名字）：")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X POST "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://{your-keycloack-server}/auth/realms/{your-realm}/protocol/openid-connect/token"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" -H "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type: application/x-www-form-urlencoded"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n -d "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"username={username}"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n -d "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"password={password}"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n -d "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'grant_type=password'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n -d "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"client_id=iotdb"')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("示例结果如下：")]),t._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"access_token"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJxMS1XbTBvelE1TzBtUUg4LVNKYXAyWmNONE1tdWNXd25RV0tZeFpKNG93In0.eyJleHAiOjE1OTAzOTgwNzEsImlhdCI6MTU5MDM5Nzc3MSwianRpIjoiNjA0ZmYxMDctN2NiNy00NTRmLWIwYmQtY2M2ZDQwMjFiNGU4IiwiaXNzIjoiaHR0cDovL2F1dGguZGVtby5wcmFnbWF0aWNpbmR1c3RyaWVzLmRlL2F1dGgvcmVhbG1zL0lvVERCIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImJhMzJlNDcxLWM3NzItNGIzMy04ZGE2LTZmZThhY2RhMDA3MyIsInR5cCI6IkJlYXJlciIsImF6cCI6ImlvdGRiIiwic2Vzc2lvbl9zdGF0ZSI6IjA2MGQyODYyLTE0ZWQtNDJmZS1iYWY3LThkMWY3ODQ2NTdmMSIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsibG9jYWxob3N0OjgwODAiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iLCJpb3RkYl9hZG1pbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ1c2VyIn0.nwbrJkWdCNjzFrTDwKNuV5h9dDMg5ytRKGOXmFIajpfsbOutJytjWTCB2WpA8E1YI3KM6gU6Jx7cd7u0oPo5syHhfCz119n_wBiDnyTZkFOAPsx0M2z20kvBLN9k36_VfuCMFUeddJjO31MeLTmxB0UKg2VkxdczmzMH3pnalhxqpnWWk3GnrRrhAf2sZog0foH4Ae3Ks0lYtYzaWK_Yo7E4Px42-gJpohy3JevOC44aJ4auzJR1RBj9LUbgcRinkBy0JLi6XXiYznSC2V485CSBHW3sseXn7pSXQADhnmGQrLfFGO5ZljmPO18eFJaimdjvgSChsrlSEmTDDsoo5Q"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"expires_in"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"refresh_expires_in"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1800")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"refresh_token"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJhMzZlMGU0NC02MWNmLTQ5NmMtOGRlZi03NTkwNjQ5MzQzMjEifQ.eyJleHAiOjE1OTAzOTk1NzEsImlhdCI6MTU5MDM5Nzc3MSwianRpIjoiNmMxNTBiY2EtYmE5NC00NTgxLWEwODEtYjI2YzhhMmI5YmZmIiwiaXNzIjoiaHR0cDovL2F1dGguZGVtby5wcmFnbWF0aWNpbmR1c3RyaWVzLmRlL2F1dGgvcmVhbG1zL0lvVERCIiwiYXVkIjoiaHR0cDovL2F1dGguZGVtby5wcmFnbWF0aWNpbmR1c3RyaWVzLmRlL2F1dGgvcmVhbG1zL0lvVERCIiwic3ViIjoiYmEzMmU0NzEtYzc3Mi00YjMzLThkYTYtNmZlOGFjZGEwMDczIiwidHlwIjoiUmVmcmVzaCIsImF6cCI6ImlvdGRiIiwic2Vzc2lvbl9zdGF0ZSI6IjA2MGQyODYyLTE0ZWQtNDJmZS1iYWY3LThkMWY3ODQ2NTdmMSIsInNjb3BlIjoiZW1haWwgcHJvZmlsZSJ9.ayNpXdNX28qahodX1zowrMGiUCw2AodlHBQFqr8Ui7c"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"token_type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bearer"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"not-before-policy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"session_state"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"060d2862-14ed-42fe-baf7-8d1f784657f1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scope"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email profile"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h3",{attrs:{id:"cli-的批量操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cli-的批量操作"}},[t._v("#")]),t._v(" Cli 的批量操作")]),t._v(" "),a("p",[t._v("当您想要通过脚本的方式通过 Cli / Shell 对 IoTDB 进行批量操作时，可以使用-e 参数。通过使用该参数，您可以在不进入客户端输入模式的情况下操作 IoTDB。")]),t._v(" "),a("p",[t._v("为了避免 SQL 语句和其他参数混淆，现在只支持-e 参数作为最后的参数使用。")]),t._v(" "),a("p",[t._v("针对 cli/Shell 工具的-e 参数用法如下：")]),t._v(" "),a("p",[t._v("Linux 系统与 MacOS 指令：")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("Shell "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" sbin/start-cli.sh -h "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" -p "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rpcPort"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" -u "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" -pw "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" -e "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("sql "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" iotdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Windows 系统指令")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("Shell "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" sbin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("start-cli.bat -h "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" -p "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("rpcPort"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" -u "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("user"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" -pw "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" -e "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("sql "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" iotdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("在 Windows 环境下，-e 参数的 SQL 语句需要使用"),a("code",[t._v("``")]),t._v("对于"),a("code",[t._v('" "')]),t._v("进行替换")]),t._v(" "),a("p",[t._v("为了更好的解释-e 参数的使用，可以参考下面在 Linux 上执行的例子。")]),t._v(" "),a("p",[t._v("假设用户希望对一个新启动的 IoTDB 进行如下操作：")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("创建名为 root.demo 的存储组")])]),t._v(" "),a("li",[a("p",[t._v("创建名为 root.demo.s1 的时间序列")])]),t._v(" "),a("li",[a("p",[t._v("向创建的时间序列中插入三个数据点")])]),t._v(" "),a("li",[a("p",[t._v("查询验证数据是否插入成功")])])]),t._v(" "),a("p",[t._v("那么通过使用 cli/Shell 工具的 -e 参数，可以采用如下的脚本：")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# !/bin/bash")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("host")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("rpcPort")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6667")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("user")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("root\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("pass")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("root\n\n./sbin/start-cli.sh -h "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${host}")]),t._v(" -p "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${rpcPort}")]),t._v(" -u "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${user}")]),t._v(" -pw "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${pass}")]),t._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"set storage group to root.demo"')]),t._v("\n./sbin/start-cli.sh -h "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${host}")]),t._v(" -p "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${rpcPort}")]),t._v(" -u "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${user}")]),t._v(" -pw "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${pass}")]),t._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"create timeseries root.demo.s1 WITH DATATYPE=INT32, ENCODING=RLE"')]),t._v("\n./sbin/start-cli.sh -h "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${host}")]),t._v(" -p "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${rpcPort}")]),t._v(" -u "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${user}")]),t._v(" -pw "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${pass}")]),t._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"insert into root.demo(timestamp,s1) values(1,10)"')]),t._v("\n./sbin/start-cli.sh -h "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${host}")]),t._v(" -p "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${rpcPort}")]),t._v(" -u "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${user}")]),t._v(" -pw "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${pass}")]),t._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"insert into root.demo(timestamp,s1) values(2,11)"')]),t._v("\n./sbin/start-cli.sh -h "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${host}")]),t._v(" -p "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${rpcPort}")]),t._v(" -u "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${user}")]),t._v(" -pw "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${pass}")]),t._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"insert into root.demo(timestamp,s1) values(3,12)"')]),t._v("\n./sbin/start-cli.sh -h "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${host}")]),t._v(" -p "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${rpcPort}")]),t._v(" -u "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${user}")]),t._v(" -pw "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${pass}")]),t._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"select s1 from root.demo"')]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br")])]),a("p",[t._v("打印出来的结果显示如下，通过这种方式进行的操作与客户端的输入模式以及通过 JDBC 进行操作结果是一致的。")]),t._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v(" Shell "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" ./shell.sh \n+-----------------------------+------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("                         Time"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("root.demo.s1"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n+-----------------------------+------------+\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1970")]),t._v("-01-01T08:00:00.001+08:00"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1970")]),t._v("-01-01T08:00:00.002+08:00"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1970")]),t._v("-01-01T08:00:00.003+08:00"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("          "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n+-----------------------------+------------+\nTotal line number "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\nIt costs "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(".267s\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[t._v("需要特别注意的是，在脚本中使用 -e 参数时要对特殊字符进行转义。")])])}),[],!1,null,null,null);s.default=n.exports}}]);