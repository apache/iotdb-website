(window.webpackJsonp=window.webpackJsonp||[]).push([[1136],{1540:function(a,s,t){"use strict";t.r(s);var r=t(19),n=Object(r.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"grafana-连接器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grafana-连接器"}},[a._v("#")]),a._v(" Grafana 连接器")]),a._v(" "),s("p",[a._v("Grafana 是开源的指标量监测和可视化工具，可用于展示时序数据和应用程序运行分析。Grafana 支持 Graphite，InfluxDB 等国际主流时序数据库作为数据源。在 IoTDB 项目中，我们开发了 Grafana 展现 IoTDB 中时序数据的连接器 IoTDB-Grafana-Connector，为您提供使用 Grafana 展示 IoTDB 数据库中的时序数据的可视化方法。")]),a._v(" "),s("h3",{attrs:{id:"grafana-的安装与部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grafana-的安装与部署"}},[a._v("#")]),a._v(" Grafana 的安装与部署")]),a._v(" "),s("h4",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[a._v("#")]),a._v(" 安装")]),a._v(" "),s("ul",[s("li",[a._v("Grafana 组件下载地址：https://grafana.com/grafana/download")]),a._v(" "),s("li",[a._v("版本 >= 4.4.1")])]),a._v(" "),s("h4",{attrs:{id:"simple-json-datasource-数据源插件安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#simple-json-datasource-数据源插件安装"}},[a._v("#")]),a._v(" simple-json-datasource 数据源插件安装")]),a._v(" "),s("ul",[s("li",[a._v("插件名称: simple-json-datasource")]),a._v(" "),s("li",[a._v("下载地址: https://github.com/grafana/simple-json-datasource")])]),a._v(" "),s("h5",{attrs:{id:"windows系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows系统"}},[a._v("#")]),a._v(" windows系统")]),a._v(" "),s("p",[a._v("具体下载方法是：到Grafana的插件目录中："),s("code",[a._v("{Grafana文件目录}\\data\\plugins\\")]),a._v("（Windows系统，启动Grafana后会自动创建"),s("code",[a._v("data\\plugins")]),a._v("目录）或"),s("code",[a._v("/var/lib/grafana/plugins")]),a._v(" （Linux系统，plugins目录需要手动创建）或"),s("code",[a._v("/usr/local/var/lib/grafana/plugins")]),a._v("（MacOS系统，具体位置参看使用"),s("code",[a._v("brew install")]),a._v("安装Grafana后命令行给出的位置提示。")]),a._v(" "),s("p",[a._v("执行下面的命令：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Shell > git clone https://github.com/grafana/simple-json-datasource.git\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h5",{attrs:{id:"linux系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux系统"}},[a._v("#")]),a._v(" linux系统")]),a._v(" "),s("p",[a._v("建议使用grafana-cli安装该插件，具体安装命令如下")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("sudo grafana-cli plugins install grafana-simple-json-datasource\nsudo service grafana-server restart\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h5",{attrs:{id:"后续操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#后续操作"}},[a._v("#")]),a._v(" 后续操作")]),a._v(" "),s("p",[a._v("然后重启Grafana服务器，在浏览器中登录Grafana，在“Add data source”页面中“Type”选项出现“SimpleJson”即为安装成功。")]),a._v(" "),s("p",[a._v("如果出现如下报错")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Unsigned plugins were found during plugin initialization. Grafana Labs cannot guarantee the integrity of these plugins. We recommend only using signed plugins.\nThe following plugins are disabled and not shown in the list below:\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("请找到相关的grafana的配置文件（例如windows下的customer.ini，linux下rpm安装后为/etc/grafana/grafana.ini），并进行如下的配置")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('allow_loading_unsigned_plugins = "grafana-simple-json-datasource"\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h4",{attrs:{id:"启动-grafana"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动-grafana"}},[a._v("#")]),a._v(" 启动 Grafana")]),a._v(" "),s("p",[a._v("进入 Grafana 的安装目录，使用以下命令启动 Grafana：")]),a._v(" "),s("ul",[s("li",[a._v("Windows 系统：")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Shell > bin\\grafana-server.exe\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ul",[s("li",[a._v("Linux 系统：")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Shell > sudo service grafana-server start\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ul",[s("li",[a._v("MacOS 系统：")])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Shell > grafana-server --config=/usr/local/etc/grafana/grafana.ini --homepath /usr/local/share/grafana cfg:default.paths.logs=/usr/local/var/log/grafana cfg:default.paths.data=/usr/local/var/lib/grafana cfg:default.paths.plugins=/usr/local/var/lib/grafana/plugins\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("更多安装详情，请点 "),s("a",{attrs:{href:"https://grafana.com/docs/grafana/latest/installation/",target:"_blank",rel:"noopener noreferrer"}},[a._v("这里"),s("OutboundLink")],1)]),a._v(" "),s("h3",{attrs:{id:"iotdb-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#iotdb-安装"}},[a._v("#")]),a._v(" IoTDB 安装")]),a._v(" "),s("p",[a._v("参见 "),s("a",{attrs:{href:"https://github.com/apache/iotdb",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/apache/iotdb"),s("OutboundLink")],1)]),a._v(" "),s("h3",{attrs:{id:"grafana-iotdb-connector-连接器安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grafana-iotdb-connector-连接器安装"}},[a._v("#")]),a._v(" Grafana-IoTDB-Connector 连接器安装")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/apache/iotdb.git\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"启动-grafana-iotdb-connector"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动-grafana-iotdb-connector"}},[a._v("#")]),a._v(" 启动 Grafana-IoTDB-Connector")]),a._v(" "),s("ul",[s("li",[a._v("方案一（适合开发者）")])]),a._v(" "),s("p",[a._v("导入整个项目，maven 依赖安装完后，直接运行"),s("code",[a._v("iotdb/grafana-connector/rc/main/java/org/apache/iotdb/web/grafana")]),a._v("目录下"),s("code",[a._v("TsfileWebDemoApplication.java")]),a._v("，这个 grafana 连接器采用 springboot 开发")]),a._v(" "),s("ul",[s("li",[a._v("方案二（适合使用者）")])]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" iotdb\nmvn clean package "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pl")]),a._v(" grafana-connector "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-am")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-Dmaven.test.skip")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" grafana/target\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("java")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-jar")]),a._v(" iotdb-grafana-connector-"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("version"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(".war\n  "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("   ____          _            __ _ _\n /"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" / ___"),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\\n( ( )\\___ | '")]),a._v("_ "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'_| | '")]),a._v("_ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("/ _` "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("/  ___"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("||")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  '  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("____"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" .__"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("__, "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" / / / /\n "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("_"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("___/"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/_/_/_/\n :: Spring Boot ::        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("v1.5.4.RELEASE"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br")])]),s("p",[a._v("如果您需要配置属性，将"),s("code",[a._v("grafana/src/main/resources/application.properties")]),a._v("移动到 war 包同级目录下（"),s("code",[a._v("grafana/target")]),a._v("）")]),a._v(" "),s("h3",{attrs:{id:"使用-grafana"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-grafana"}},[a._v("#")]),a._v(" 使用 Grafana")]),a._v(" "),s("p",[a._v("Grafana 以网页的 dashboard 形式为您展示数据，在使用时请您打开浏览器，访问 http://<ip>:<port>")]),a._v(" "),s("p",[a._v("默认地址为 http://localhost:3000/")]),a._v(" "),s("p",[a._v("注：IP 为您的 Grafana 所在的服务器 IP，Port 为 Grafana 的运行端口（默认 3000）。默认登录的用户名和密码都是“admin”。")]),a._v(" "),s("h4",{attrs:{id:"添加-iotdb-数据源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加-iotdb-数据源"}},[a._v("#")]),a._v(" 添加 IoTDB 数据源")]),a._v(" "),s("p",[a._v("点击左上角的“Grafana”图标，选择"),s("code",[a._v("Data Source")]),a._v("选项，然后再点击"),s("code",[a._v("Add data source")]),a._v("。\n"),s("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51664777-2766ae00-1ff5-11e9-9d2f-7489f8ccbfc2.png"}})]),a._v(" "),s("p",[a._v("在编辑数据源的时候，"),s("code",[a._v("Type")]),a._v("一栏选择"),s("code",[a._v("Simplejson")]),a._v("，"),s("code",[a._v("URL")]),a._v("一栏填写 http://<ip>:<port>，IP 为您的 IoTDB-Grafana-Connector 连接器所在的服务器 IP，Port 为运行端口（默认 8888）。之后确保 IoTDB 已经启动，点击“Save & Test”，出现“Data Source is working”提示表示配置成功。\n"),s("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51664842-554bf280-1ff5-11e9-97d2-54eebe0b2ca1.png"}})]),a._v(" "),s("h4",{attrs:{id:"操作-grafana"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作-grafana"}},[a._v("#")]),a._v(" 操作 Grafana")]),a._v(" "),s("p",[a._v("进入 Grafana 可视化页面后，可以选择添加时间序列，如下图。您也可以按照 Grafana 官方文档进行相应的操作，详情可参看 Grafana 官方文档：http://docs.grafana.org/guides/getting_started/。")]),a._v(" "),s("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/13203019/51664878-6e54a380-1ff5-11e9-9718-4d0e24627fa8.png"}}),a._v(" "),s("h3",{attrs:{id:"配置-grafana"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-grafana"}},[a._v("#")]),a._v(" 配置 grafana")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('# IoTDB 的 IP 和端口\nspring.datasource.url=jdbc:iotdb://127.0.0.1:6667/\nspring.datasource.username=root\nspring.datasource.password=root\nspring.datasource.driver-class-name=org.apache.iotdb.jdbc.IoTDBDriver\nserver.port=8888\n# Use this value to set timestamp precision as "ms", "us" or "ns", which must to be same with the timestamp\n# precision of Apache IoTDB engine.\ntimestamp_precision=ms\n\n# 是否开启降采样\nisDownSampling=true\n# 默认采样 interval\ninterval=1m\n# 用于对连续数据 (int, long, float, double) 进行降采样的聚合函数\n# COUNT, FIRST_VALUE, LAST_VALUE, MAX_TIME, MAX_VALUE, AVG, MIN_TIME, MIN_VALUE, NOW, SUM\ncontinuous_data_function=AVG\n# 用于对离散数据 (boolean, string) 进行降采样的聚合函数\n# COUNT, FIRST_VALUE, LAST_VALUE, MAX_TIME, MIN_TIME, NOW\ndiscrete_data_function=LAST_VALUE\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br")])]),s("p",[a._v("其中 interval 具体配置信息如下")]),a._v(" "),s("p",[a._v("<1h: no sampling")]),a._v(" "),s("p",[a._v("1h~1d : intervals = 1m")]),a._v(" "),s("p",[a._v("1d~30d:intervals = 1h")]),a._v(" "),s("p",[a._v(">30d：intervals = 1d")]),a._v(" "),s("p",[a._v("配置完后，请重新运行 war 包")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("java -jar iotdb-grafana-connector-{version}.war\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);