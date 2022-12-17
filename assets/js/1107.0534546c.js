(window.webpackJsonp=window.webpackJsonp||[]).push([[1107],{1510:function(e,t,a){"use strict";a.r(t);var r=a(19),s=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"dbeaver-iotdb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dbeaver-iotdb"}},[e._v("#")]),e._v(" DBeaver-IoTDB")]),e._v(" "),t("p",[e._v("DBeaver 是一个 SQL 客户端和数据库管理工具。DBeaver 可以使用 IoTDB 的 JDBC 驱动与 IoTDB 进行交互。")]),e._v(" "),t("h3",{attrs:{id:"dbeaver-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dbeaver-安装"}},[e._v("#")]),e._v(" DBeaver 安装")]),e._v(" "),t("ul",[t("li",[e._v("DBeaver 下载地址：https://dbeaver.io/download/")])]),e._v(" "),t("h3",{attrs:{id:"iotdb-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#iotdb-安装"}},[e._v("#")]),e._v(" IoTDB 安装")]),e._v(" "),t("ul",[t("li",[e._v("下载 IoTDB 二进制版本\n"),t("ul",[t("li",[e._v("IoTDB 下载地址：https://iotdb.apache.org/Download/")]),e._v(" "),t("li",[e._v("版本 >= 0.13.0")])])]),e._v(" "),t("li",[e._v("或者从源代码中编译\n"),t("ul",[t("li",[e._v("参考 https://github.com/apache/iotdb")])])])]),e._v(" "),t("h3",{attrs:{id:"连接-iotdb-与-dbeaver"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#连接-iotdb-与-dbeaver"}},[e._v("#")]),e._v(" 连接 IoTDB 与 DBeaver")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("启动 IoTDB 服务")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("./sbin/start-server.sh\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("启动 DBeaver")])]),e._v(" "),t("li",[t("p",[e._v("打开 Driver Manager")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/DBeaver/Screen%20Shot%202021-05-17%20at%2010.56.22%20AM.png?raw=true",alt:""}})])]),e._v(" "),t("li",[t("p",[e._v("为 IoTDB 新建一个驱动类型")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/DBeaver/Screen%20Shot%202021-05-17%20at%2010.56.51%20AM.png?raw=true",alt:""}})])]),e._v(" "),t("li",[t("p",[e._v("下载"),t("a",{attrs:{href:"https://iotdb.apache.org/zh/Download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("源代码"),t("OutboundLink")],1),e._v("，解压并运行下面的命令编译 jdbc 驱动")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("mvn clean package "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-pl")]),e._v(" jdbc "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-am")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-DskipTests")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-P")]),e._v(" get-jar-with-dependencies\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])])]),e._v(" "),t("li",[t("p",[e._v("在"),t("code",[e._v("jdbc/target/")]),e._v("下找到并添加名为"),t("code",[e._v("apache-iotdb-jdbc-{version}-jar-with-dependencies.jar")]),e._v("的库，点击 "),t("code",[e._v("Find Class")]),e._v("。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/DBeaver/Screen%20Shot%202022-04-26%20at%205.57.32%20PM.png?raw=true",alt:""}})])]),e._v(" "),t("li",[t("p",[e._v("编辑驱动设置")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/DBeaver/Screen%20Shot%202021-05-17%20at%2011.03.03%20AM.png?raw=true",alt:""}})])]),e._v(" "),t("li",[t("p",[e._v("新建 DataBase Connection， 选择 iotdb")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/DBeaver/Screen%20Shot%202021-05-17%20at%2011.05.44%20AM.png?raw=true",alt:""}})])]),e._v(" "),t("li",[t("p",[e._v("编辑 JDBC 连接设置")])])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("JDBC URL: jdbc:iotdb://127.0.0.1:6667/\nUsername: root\nPassword: root\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/DBeaver/Screen%20Shot%202021-05-17%20at%2011.07.09%20AM.png?raw=true",alt:""}})]),e._v(" "),t("ol",{attrs:{start:"11"}},[t("li",[e._v("测试连接")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/DBeaver/Screen%20Shot%202021-05-17%20at%2011.07.31%20AM.png?raw=true",alt:""}})]),e._v(" "),t("ol",{attrs:{start:"12"}},[t("li",[e._v("可以开始通过 DBeaver 使用 IoTDB")])]),e._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/DBeaver/Screen%20Shot%202021-05-17%20at%2011.08.33%20AM.png?raw=true",alt:""}})])])}),[],!1,null,null,null);t.default=s.exports}}]);