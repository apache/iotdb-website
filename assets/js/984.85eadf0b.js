(window.webpackJsonp=window.webpackJsonp||[]).push([[984],{1388:function(a,s,t){"use strict";t.r(s);var e=t(19),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"下载与安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载与安装"}},[a._v("#")]),a._v(" 下载与安装")]),a._v(" "),s("p",[a._v("IoTDB 为您提供了两种安装方式，您可以参考下面的建议，任选其中一种：")]),a._v(" "),s("p",[a._v("第一种，从官网下载安装包。这是我们推荐使用的安装方式，通过该方式，您将得到一个可以立即使用的、打包好的二进制可执行文件。")]),a._v(" "),s("p",[a._v("第二种，使用源码编译。若您需要自行修改代码，可以使用该安装方式。")]),a._v(" "),s("h3",{attrs:{id:"安装环境要求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装环境要求"}},[a._v("#")]),a._v(" 安装环境要求")]),a._v(" "),s("p",[a._v("安装前请保证您的电脑上配有 JDK>=1.8 的运行环境，并配置好 JAVA_HOME 环境变量。")]),a._v(" "),s("p",[a._v("如果您需要从源码进行编译，还需要安装：")]),a._v(" "),s("ol",[s("li",[a._v("Maven >= 3.6 的运行环境，具体安装方法可以参考以下链接："),s("a",{attrs:{href:"https://maven.apache.org/install.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://maven.apache.org/install.html"),s("OutboundLink")],1),a._v("。")])]),a._v(" "),s("blockquote",[s("p",[a._v("注： 也可以选择不安装，使用我们提供的'mvnw.sh' 或 'mvnw.cmd' 工具。使用时请用'mvnw.sh' 或 'mvnw.cmd'命令代替下文的'mvn'命令。")])]),a._v(" "),s("h3",{attrs:{id:"从官网下载二进制可执行文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从官网下载二进制可执行文件"}},[a._v("#")]),a._v(" 从官网下载二进制可执行文件")]),a._v(" "),s("p",[a._v("您可以从 "),s("a",{attrs:{href:"http://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://iotdb.apache.org/Download/"),s("OutboundLink")],1),a._v(" 上下载已经编译好的可执行程序 iotdb-xxx.zip，该压缩包包含了 IoTDB 系统运行所需的所有必要组件。")]),a._v(" "),s("p",[a._v("下载后，您可使用以下操作对 IoTDB 的压缩包进行解压：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("Shell > uzip iotdb-<version>.zip\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"使用源码编译"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用源码编译"}},[a._v("#")]),a._v(" 使用源码编译")]),a._v(" "),s("p",[a._v("您可以获取已发布的源码 "),s("a",{attrs:{href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://iotdb.apache.org/Download/"),s("OutboundLink")],1),a._v(" ，或者从 "),s("a",{attrs:{href:"https://github.com/apache/iotdb/tree/master",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/apache/iotdb/tree/master"),s("OutboundLink")],1),a._v(" git 仓库获取")]),a._v(" "),s("p",[a._v("源码克隆后，进入到源码文件夹目录下。如果您想编译已经发布过的版本，可以先用"),s("code",[a._v("git checkout -b my_{project.version} v{project.version}")]),a._v("命令新建并切换分支。比如您要编译0.12.4这个版本，您可以用如下命令去切换分支：")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" checkout "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-b")]),a._v(" my_0.12.4 v0.12.4\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("切换分支之后就可以使用以下命令进行编译：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("> mvn clean package -pl server -am -Dmaven.test.skip=true\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v('编译后，IoTDB 服务器会在 "server/target/iotdb-server-{project.version}" 文件夹下，包含以下内容：')]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("+- sbin/       <-- script files\n|\n+- conf/      <-- configuration files\n|\n+- lib/       <-- project dependencies\n|\n+- tools/      <-- system tools\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("p",[a._v("如果您想要编译项目中的某个模块，您可以在源码文件夹中使用"),s("code",[a._v("mvn clean package -pl {module.name} -am -DskipTests")]),a._v("命令进行编译。如果您需要的是带依赖的 jar 包，您可以在编译命令后面加上"),s("code",[a._v("-P get-jar-with-dependencies")]),a._v("参数。比如您想编译带依赖的 jdbc jar 包，您就可以使用以下命令进行编译：")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" mvn clean package "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pl")]),a._v(" jdbc "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-am")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-DskipTests")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-P")]),a._v(" get-jar-with-dependencies\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("编译完成后就可以在"),s("code",[a._v("{module.name}/target")]),a._v("目录中找到需要的包了。")]),a._v(" "),s("h3",{attrs:{id:"通过-docker-安装-dockerfile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通过-docker-安装-dockerfile"}},[a._v("#")]),a._v(" 通过 Docker 安装 (Dockerfile)")]),a._v(" "),s("p",[a._v("Apache IoTDB 的 Docker 镜像已经上传至 "),s("a",{attrs:{href:"https://hub.docker.com/r/apache/iotdb",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://hub.docker.com/r/apache/iotdb"),s("OutboundLink")],1),a._v("，")]),a._v(" "),s("ol",[s("li",[s("p",[s("strong",[a._v("获取 IoTDB docker 镜像")])]),a._v(" "),s("ul",[s("li",[s("p",[s("strong",[a._v("推荐")]),a._v("：执行 "),s("code",[a._v("docker pull apache/iotdb:latest")]),a._v(" 即可获取最新的 docker 镜像。")])]),a._v(" "),s("li",[s("p",[a._v("用户也可以根据代码提供的 Dockerfile 文件来自己生成镜像。Dockerfile 存放在的 docker 工程下的 src/main/Dockerfile 中。")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("方法 1："),s("code",[a._v("$ docker build -t iotdb:base git://github.com/apache/iotdb#master:docker")])])]),a._v(" "),s("li",[s("p",[a._v("方法 2：")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/apache/iotdb\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" iotdb\n$ mvn package "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-DskipTests")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" build "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" iotdb:base "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])])])])])]),a._v(" "),s("p",[a._v("当 docker image 在本地构建完成的时候 （示例中的 tag 为 iotdb:base)，已经距完成只有一步之遥了！")])]),a._v(" "),s("li",[s("p",[s("strong",[a._v("创建数据文件和日志的 docker 挂载目录 (docker volume):")])])])]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("$ docker volume create mydata\n$ docker volume create mylogs\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("ol",{attrs:{start:"3"}},[s("li",[s("strong",[a._v("运行 docker 容器：")])])]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6667")]),a._v(":6667 "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" mydata:/iotdb/data "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" mylogs:/iotdb/logs "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" iotdb:base /iotdb/bin/start-server.sh\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("您可以使用"),s("code",[a._v("docker ps")]),a._v("来检查是否运行成功，当成功时控制台会输出下面的日志：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                               NAMES\n2a68b6944cb5        iotdb:base          "/iotdb/bin/start-se…"   4 minutes ago       Up 5 minutes        0.0.0.0:6667->6667/tcp              laughing_meitner\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("您可以使用下面的命令来获取 container 的 ID:")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" container "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("假设这个 ID 为 <C_ID>.")]),a._v(" "),s("p",[a._v("然后使用下面的命令获取这个 ID 对应的 IP 地址，假设获取的 IP 为 <C_IP>:")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" inspect "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--format")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'{{.NetworkSettings.IPAddress}}'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("C_ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("现在 IoTDB 服务器已经启动成功了。")]),a._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[a._v("如果您想尝试使用 iotdb-cli 命令行，您可以使用如下命令：")])]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("C_ID"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" /bin/bash\n$ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("now you have enter the container"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(": /iotdb/sbin/start-cli.sh "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" localhost "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6667")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" root\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("还可以使用本地的 iotdb-cli，执行如下命令：")]),a._v(" "),s("div",{staticClass:"language-shell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ /%IOTDB_HOME%/sbin/start-cli.sh "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" localhost "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6667")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" root "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" root\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("ol",{attrs:{start:"5"}},[s("li",[a._v("如果您想写一些代码来插入或者查询数据，您可以在 pom.xml 文件中加入下面的依赖：")])]),a._v(" "),s("div",{staticClass:"language-xml line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[a._v("        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("org.apache.iotdb"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("groupId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("iotdb-jdbc"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("artifactId")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("0.13.0-SNAPSHOT"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("version")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("dependency")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[a._v("这里是一些使用 IoTDB-JDBC 连接 IoTDB 的示例：https://github.com/apache/iotdb/tree/master/example/jdbc/src/main/java/org/apache/iotdb")])])}),[],!1,null,null,null);s.default=r.exports}}]);