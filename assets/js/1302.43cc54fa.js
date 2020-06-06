(window.webpackJsonp=window.webpackJsonp||[]).push([[1302],{1870:function(e,a,t){"use strict";t.r(a);var s=t(71),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[e._v("#")]),e._v(" 下载")]),e._v(" "),t("p",[e._v("IoTDB为您提供了两种安装方式，您可以参考下面的建议，任选其中一种：")]),e._v(" "),t("p",[e._v("第一种，从官网下载安装包。这是我们推荐使用的安装方式，通过该方式，您将得到一个可以立即使用的、打包好的二进制可执行文件。")]),e._v(" "),t("p",[e._v("第二种，使用源码编译。若您需要自行修改代码，可以使用该安装方式。")]),e._v(" "),t("h2",{attrs:{id:"安装环境要求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装环境要求"}},[e._v("#")]),e._v(" 安装环境要求")]),e._v(" "),t("p",[e._v("安装前请保证您的电脑上配有JDK>=1.8的运行环境，并配置好JAVA_HOME环境变量。")]),e._v(" "),t("p",[e._v("如果您需要从源码进行编译，还需要安装：")]),e._v(" "),t("ol",[t("li",[e._v("Maven>=3.1的运行环境，具体安装方法可以参考以下链接："),t("a",{attrs:{href:"https://maven.apache.org/install.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://maven.apache.org/install.html"),t("OutboundLink")],1),e._v("。")])]),e._v(" "),t("blockquote",[t("p",[e._v("注： 也可以选择不安装，使用我们提供的'mvnw.sh' 或 'mvnw.cmd' 工具。使用时请用'mvnw.sh' 或 'mvnw.cmd'命令代替下文的'mvn'命令。")])]),e._v(" "),t("h2",{attrs:{id:"从官网下载二进制可执行文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#从官网下载二进制可执行文件"}},[e._v("#")]),e._v(" 从官网下载二进制可执行文件")]),e._v(" "),t("p",[e._v("您可以从"),t("a",{attrs:{href:"http://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://iotdb.apache.org/Download/"),t("OutboundLink")],1),e._v("上下载已经编译好的可执行程序iotdb-xxx.tar.gz或者iotdb-xxx.zip，该压缩包包含了IoTDB系统运行所需的所有必要组件。")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("NOTE:\niotdb-<version>.tar.gz # For Linux or MacOS\niotdb-<version>.zip # For Windows\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("下载后，您可使用以下操作对IoTDB的压缩包进行解压:")]),e._v(" "),t("p",[e._v("如果您使用的操作系统是Windows，则使用解压缩工具解压或使用如下解压命令：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Shell > uzip iotdb-<version>.zip\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("如果您使用的操作系统是Linux或MacOS，则使用如下解压命令：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Shell > tar -zxf iotdb-<version>.tar.gz # For Linux or MacOS\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("h2",{attrs:{id:"使用源码编译"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用源码编译"}},[e._v("#")]),e._v(" 使用源码编译")]),e._v(" "),t("p",[e._v("您可以获取已发布的源码https://iotdb.apache.org/Download/，或者从git仓库获取https://github.com/apache/incubator-iotdb/tree/master")]),e._v(" "),t("p",[e._v("源码克隆后，进入到源码文件夹目录下，使用以下命令进行编译：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> mvn clean package -pl server -am -Dmaven.test.skip=true\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v('编译后，IoTDB 服务器会在 "server/target/iotdb-server-{project.version}" 文件夹下，包含以下内容：')]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("+- sbin/       <-- script files\n|\n+- conf/      <-- configuration files\n|\n+- lib/       <-- project dependencies\n|\n+- tools/      <-- system tools\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("h2",{attrs:{id:"通过docker安装-dockerfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过docker安装-dockerfile"}},[e._v("#")]),e._v(" 通过Docker安装 (Dockerfile)")]),e._v(" "),t("p",[e._v("你可以通过"),t("RouterLink",{attrs:{to:"/zh/UserGuide/Master/Master/Master/Master/Server/Docker Image.html"}},[e._v("这份指南")]),e._v("编译并运行一个IoTDB docker image。")],1)])}),[],!1,null,null,null);a.default=r.exports}}]);