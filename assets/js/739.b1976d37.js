(window.webpackJsonp=window.webpackJsonp||[]).push([[739],{1143:function(s,a,t){"use strict";t.r(a);var n=t(19),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"下载与安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载与安装"}},[s._v("#")]),s._v(" 下载与安装")]),s._v(" "),a("p",[s._v("IoTDB 为您提供了两种安装方式，您可以参考下面的建议，任选其中一种：")]),s._v(" "),a("p",[s._v("第一种，从官网下载安装包。这是我们推荐使用的安装方式，通过该方式，您将得到一个可以立即使用的、打包好的二进制可执行文件。")]),s._v(" "),a("p",[s._v("第二种，使用源码编译。若您需要自行修改代码，可以使用该安装方式。")]),s._v(" "),a("h3",{attrs:{id:"安装环境要求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装环境要求"}},[s._v("#")]),s._v(" 安装环境要求")]),s._v(" "),a("p",[s._v("安装前请保证您的电脑上配有 JDK>=1.8 的运行环境，并配置好 JAVA_HOME 环境变量。")]),s._v(" "),a("p",[s._v("如果您需要从源码进行编译，还需要安装：")]),s._v(" "),a("ol",[a("li",[s._v("Maven >= 3.6 的运行环境，具体安装方法可以参考以下链接："),a("a",{attrs:{href:"https://maven.apache.org/install.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://maven.apache.org/install.html"),a("OutboundLink")],1),s._v("。")])]),s._v(" "),a("blockquote",[a("p",[s._v("注： 也可以选择不安装，使用我们提供的'mvnw' 或 'mvnw.cmd' 工具。使用时请用'mvnw' 或 'mvnw.cmd'命令代替下文的'mvn'命令。")])]),s._v(" "),a("h3",{attrs:{id:"从官网下载二进制可执行文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从官网下载二进制可执行文件"}},[s._v("#")]),s._v(" 从官网下载二进制可执行文件")]),s._v(" "),a("p",[s._v("您可以从 "),a("a",{attrs:{href:"http://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://iotdb.apache.org/Download/"),a("OutboundLink")],1),s._v(" 上下载已经编译好的可执行程序 iotdb-xxx.zip，该压缩包包含了 IoTDB 系统运行所需的所有必要组件。")]),s._v(" "),a("p",[s._v("下载后，您可使用以下操作对 IoTDB 的压缩包进行解压：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("Shell > unzip iotdb-<version>.zip\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"使用源码编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用源码编译"}},[s._v("#")]),s._v(" 使用源码编译")]),s._v(" "),a("p",[s._v("您可以获取已发布的源码 "),a("a",{attrs:{href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://iotdb.apache.org/Download/"),a("OutboundLink")],1),s._v(" ，或者从 "),a("a",{attrs:{href:"https://github.com/apache/iotdb/tree/master",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/apache/iotdb/tree/master"),a("OutboundLink")],1),s._v(" git 仓库获取")]),s._v(" "),a("p",[s._v("源码克隆后，进入到源码文件夹目录下。如果您想编译已经发布过的版本，可以先用"),a("code",[s._v("git checkout -b my_{project.version} v{project.version}")]),s._v("命令新建并切换分支。比如您要编译0.12.4这个版本，您可以用如下命令去切换分支：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" my_0.12.4 v0.12.4\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("切换分支之后就可以使用以下命令进行编译：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("> mvn clean package -pl server -am -Dmaven.test.skip=true\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v('编译后，IoTDB 服务器会在 "server/target/iotdb-server-{project.version}" 文件夹下，包含以下内容：')]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("+- sbin/       <-- script files\n|\n+- conf/      <-- configuration files\n|\n+- lib/       <-- project dependencies\n|\n+- tools/      <-- system tools\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("如果您想要编译项目中的某个模块，您可以在源码文件夹中使用"),a("code",[s._v("mvn clean package -pl {module.name} -am -DskipTests")]),s._v("命令进行编译。如果您需要的是带依赖的 jar 包，您可以在编译命令后面加上"),a("code",[s._v("-P get-jar-with-dependencies")]),s._v("参数。比如您想编译带依赖的 jdbc jar 包，您就可以使用以下命令进行编译：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" mvn clean package "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-pl")]),s._v(" jdbc "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-am")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-DskipTests")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-P")]),s._v(" get-jar-with-dependencies\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("编译完成后就可以在"),a("code",[s._v("{module.name}/target")]),s._v("目录中找到需要的包了。")]),s._v(" "),a("h3",{attrs:{id:"通过-docker-安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过-docker-安装"}},[s._v("#")]),s._v(" 通过 Docker 安装")]),s._v(" "),a("p",[s._v("Apache IoTDB 的 Docker 镜像已经上传至 "),a("a",{attrs:{href:"https://hub.docker.com/r/apache/iotdb",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://hub.docker.com/r/apache/iotdb"),a("OutboundLink")],1),s._v("。\nApache IoTDB 的配置项以环境变量形式添加到容器内。")]),s._v(" "),a("h4",{attrs:{id:"简单尝试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单尝试"}},[s._v("#")]),s._v(" 简单尝试")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 获取镜像")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull apache/iotdb:1.0.0-standalone\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建 docker bridge 网络")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" network create "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--driver")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("bridge "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--subnet")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.18")]),s._v(".0.0/16 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--gateway")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.18")]),s._v(".0.1 iotdb\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建 docker 容器")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注意：必须固定IP部署。IP改变会导致 confignode 启动失败。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" iotdb-service "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--hostname")]),s._v(" iotdb-service "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--network")]),s._v(" iotdb "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--ip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("172.18")]),s._v(".0.6 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6667")]),s._v(":6667 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("cn_internal_address")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("iotdb-service "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("cn_target_config_node_list")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("iotdb-service:22277 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dn_rpc_address")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("iotdb-service "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dn_internal_address")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("iotdb-service "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n              "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dn_target_config_node_list")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("iotdb-service:22277 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n              apache/iotdb:1.0.0-standalone              \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 尝试使用命令行执行SQL")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ti")]),s._v(" iotdb-service /iotdb/sbin/start-cli.sh "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h")]),s._v(" iotdb-service\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br")])]),a("p",[s._v("外部连接：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# <主机IP/hostname> 是物理机的真实IP或域名。如果在同一台物理机，可以是127.0.0.1。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$IOTDB_HOME")]),s._v("/sbin/start-cli.sh "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("主机IP/hostname"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6667")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker-compose-1c1d.yml")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("iotdb-service")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" apache/iotdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("1.0.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("standalone\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("hostname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" iotdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("service\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" iotdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("service\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"6667:6667"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" cn_internal_address=iotdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("service\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" cn_target_config_node_list=iotdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22277")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" dn_rpc_address=iotdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("service\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" dn_internal_address=iotdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("service\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" dn_target_config_node_list=iotdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22277")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/iotdb/data\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./logs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/iotdb/logs\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("iotdb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ipv4_address")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 172.18.0.6\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networks")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("iotdb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("external")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("h4",{attrs:{id:"集群部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#集群部署"}},[s._v("#")]),s._v(" 集群部署")]),s._v(" "),a("p",[s._v("目前只支持 host 网络和 overlay 网络，不支持 bridge 网络。overlay 网络参照"),a("a",{attrs:{href:"https://github.com/apache/iotdb/tree/master/docker/src/main/DockerCompose/docker-compose-cluster-1c2d.yml",target:"_blank",rel:"noopener noreferrer"}},[s._v("1C2D"),a("OutboundLink")],1),s._v("的写法，host 网络如下。")]),s._v(" "),a("p",[s._v("假如有三台物理机，它们的hostname分别是iotdb-1、iotdb-2、iotdb-3。依次启动。\n以 iotdb-2 节点的docker-compose文件为例：")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("iotdb-confignode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" apache/iotdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("1.0.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("confignode\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" iotdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("confignode\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"22277:22277"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"22278:22278"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" cn_internal_address=iotdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" cn_target_config_node_list=iotdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22277")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" schema_replication_factor=3\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" schema_region_consensus_protocol_class=org.apache.iotdb.consensus.ratis.RatisConsensus\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" config_node_consensus_protocol_class=org.apache.iotdb.consensus.ratis.RatisConsensus\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" data_replication_factor=3\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" data_region_consensus_protocol_class=org.apache.iotdb.consensus.iot.IoTConsensus\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" /etc/hosts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/etc/hosts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("ro\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./data/confignode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/iotdb/data\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./logs/confignode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/iotdb/logs\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("network_mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"host"')]),s._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("iotdb-datanode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" apache/iotdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("1.0.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("datanode\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("container_name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" iotdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("datanode\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"6667:6667"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8777:8777"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"9003:9003"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"50010:50010"')]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"40010:40010"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" dn_rpc_address=iotdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" dn_internal_address=iotdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" dn_target_config_node_list=iotdb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22277")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" data_replication_factor=3\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" data_region_consensus_protocol_class=org.apache.iotdb.consensus.iot.IoTConsensus\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" schema_replication_factor=3\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" schema_region_consensus_protocol_class=org.apache.iotdb.consensus.ratis.RatisConsensus\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" config_node_consensus_protocol_class=org.apache.iotdb.consensus.ratis.RatisConsensus\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" /etc/hosts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/etc/hosts"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("ro\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./data/datanode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/iotdb/data/\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./logs/datanode"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/iotdb/logs/\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("network_mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"host"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br")])]),a("p",[s._v("注意：")]),s._v(" "),a("ol",[a("li",[a("code",[s._v("dn_target_config_node_list")]),s._v("所有节点配置一样，需要配置第一个启动的节点，这里为"),a("code",[s._v("iotdb-1")]),s._v("。")]),s._v(" "),a("li",[s._v("上面docker-compose文件中，"),a("code",[s._v("iotdb-2")]),s._v("需要替换为每个节点的 hostname、域名或者IP地址。")]),s._v(" "),a("li",[s._v("需要映射"),a("code",[s._v("/etc/hosts")]),s._v("，文件内配置了 iotdb-1、iotdb-2、iotdb-3 与IP的映射。或者可以在 docker-compose 文件中增加 "),a("code",[s._v("extra_hosts")]),s._v(" 配置。")]),s._v(" "),a("li",[s._v("首次启动时，必须首先启动 "),a("code",[s._v("iotdb-1")]),s._v("。")]),s._v(" "),a("li",[s._v("如果部署失败要重新部署集群，必须将所有节点上的IoTDB服务停止并删除，然后清除"),a("code",[s._v("data")]),s._v("和"),a("code",[s._v("logs")]),s._v("文件夹后，再启动。")])])])}),[],!1,null,null,null);a.default=e.exports}}]);