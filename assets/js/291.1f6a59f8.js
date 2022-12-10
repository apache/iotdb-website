(window.webpackJsonp=window.webpackJsonp||[]).push([[291],{692:function(a,e,t){"use strict";t.r(e);var s=t(19),r=Object(s.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"way-to-get-iotdb-binary-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#way-to-get-iotdb-binary-files"}},[a._v("#")]),a._v(" Way to get IoTDB binary files")]),a._v(" "),e("p",[a._v("IoTDB provides you three installation methods, you can refer to the following suggestions, choose one of them:")]),a._v(" "),e("ul",[e("li",[a._v("Installation from source code. If you need to modify the code yourself, you can use this method.")]),a._v(" "),e("li",[a._v("Installation from binary files. Download the binary files from the official website. This is the recommended method, in which you will get a binary released package which is out-of-the-box.")]),a._v(" "),e("li",[a._v("Using Docker：The path to the dockerfile is https://github.com/apache/iotdb/blob/master/docker/Dockerfile")])]),a._v(" "),e("h3",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[a._v("#")]),a._v(" Prerequisites")]),a._v(" "),e("p",[a._v("To use IoTDB, you need to have:")]),a._v(" "),e("ol",[e("li",[a._v("Java >= 1.8 (Please make sure the environment path has been set)")]),a._v(" "),e("li",[a._v("Maven >= 3.6 (Optional)")]),a._v(" "),e("li",[a._v('Set the max open files num as 65535 to avoid "too many open files" problem.')])]),a._v(" "),e("blockquote",[e("p",[a._v("Note: If you don't have maven installed, you should replace 'mvn' in the following commands with 'mvnw.sh' or 'mvnw.cmd'.")]),a._v(" "),e("h3",{attrs:{id:"installation-from-binary-files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation-from-binary-files"}},[a._v("#")]),a._v(" Installation from  binary files")])]),a._v(" "),e("p",[a._v("You can download the binary file from:\n"),e("a",{attrs:{href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Download page"),e("OutboundLink")],1)]),a._v(" "),e("h3",{attrs:{id:"installation-from-source-code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation-from-source-code"}},[a._v("#")]),a._v(" Installation from source code")]),a._v(" "),e("p",[a._v("You can get the released source code from https://iotdb.apache.org/Download/, or from the git repository https://github.com/apache/iotdb/tree/master\nYou can download the source code from:")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("git clone https://github.com/apache/iotdb.git\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("Under the root path of iotdb:")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("> mvn clean package -DskipTests\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("Then the binary version (including both server and client) can be found at "),e("strong",[a._v("distribution/target/apache-iotdb-{project.version}-bin.zip")])]),a._v(" "),e("blockquote",[e("p",[a._v('NOTE: Directories "thrift/target/generated-sources/thrift" and "antlr/target/generated-sources/antlr4" need to be added to sources roots to avoid compilation errors in IDE.')])]),a._v(" "),e("p",[a._v("If you would like to build the IoTDB server, you can run the following command under the root path of iotdb:")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("> mvn clean package -pl server -am -DskipTests\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v('After build, the IoTDB server will be at the folder "server/target/iotdb-server-{project.version}".')]),a._v(" "),e("h3",{attrs:{id:"installation-by-docker-dockerfile"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation-by-docker-dockerfile"}},[a._v("#")]),a._v(" Installation by Docker (Dockerfile)")]),a._v(" "),e("p",[a._v("Apache IoTDB' Docker image is released on "),e("a",{attrs:{href:"https://hub.docker.com/r/apache/iotdb",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://hub.docker.com/r/apache/iotdb"),e("OutboundLink")],1),a._v(",\nUsing "),e("code",[a._v("docker pull apache/iotdb:latest")]),a._v(" can get the latest docker image.")]),a._v(" "),e("p",[a._v("Users can also build a docker image themselves.")]),a._v(" "),e("p",[a._v("Now a Dockerfile has been written at docker/src/main/Dockerfile.")]),a._v(" "),e("ol",[e("li",[a._v("You can build a docker image by:")])]),a._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" build "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" iotdb:base git://github.com/apache/iotdb"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#master:docker")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("Or:")]),a._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/apache/iotdb\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" iotdb\n$ "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v("\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" build "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" iotdb:base "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("p",[a._v("Once the docker image has been built locally (the tag is iotdb:base in this example), you are almost done!")]),a._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[a._v("create docker volume for data files and logs:")])]),a._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" volume create mydata\n$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" volume create mylogs\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("ol",{attrs:{start:"3"}},[e("li",[a._v("run a docker container:")])]),a._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("6667")]),a._v(":6667 "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" mydata:/iotdb/data "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" mylogs:/iotdb/logs "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" iotdb:base /iotdb/bin/start-server.sh\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("If success, you can run "),e("code",[a._v("docker ps")]),a._v(", and get something like the following:")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                               NAMES\n2a68b6944cb5        iotdb:base          "/iotdb/bin/start-se…"   4 minutes ago       Up 5 minutes        0.0.0.0:6667->6667/tcp              laughing_meitner\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[a._v("You can use the above command to get the container ID:")]),a._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" container "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("suppose the ID is <C_ID>.")]),a._v(" "),e("p",[a._v("And get the docker IP by:")]),a._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" inspect "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--format")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'{{.NetworkSettings.IPAddress}}'")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("C_ID"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("suppose the IP is <C_IP>.")]),a._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[a._v("If you just want to have a try by using iotdb-cli, you can:")])]),a._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exec")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" /bin/bash  "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("C_ID"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n$ "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("now you have enter the container"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(": /cli/sbin/start-cli.sh "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" localhost "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("6667")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" root "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" root\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[a._v("Or,  run a new docker container as the client:")]),a._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-it")]),a._v(" iotdb:base /cli/sbin/start-cli.sh "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("C_IP"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("6667")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" root "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" root\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("Or,  if you have a iotdb-cli locally (e.g., you have compiled the source code by "),e("code",[a._v("mvn package")]),a._v("), and suppose your work_dir is cli/bin, then you can just run:")]),a._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("$ start-cli.sh "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" localhost "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("6667")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" root "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pw")]),a._v(" root\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ol",{attrs:{start:"5"}},[e("li",[a._v("If you want to write codes to insert data and query data, please add the following dependence:")])]),a._v(" "),e("div",{staticClass:"language-xml line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-xml"}},[e("code",[a._v("        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("dependency")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("org.apache.iotdb"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("groupId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("iotdb-jdbc"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("artifactId")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n            "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("0.10.0"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("version")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n        "),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("dependency")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("p",[a._v("Some examples about how to use IoTDB with IoTDB-JDBC can be found at: https://github.com/apache/iotdb/tree/master/example/jdbc/src/main/java/org/apache/iotdb")]),a._v(" "),e("ol",{attrs:{start:"6"}},[e("li",[a._v("Now enjoy it!")])])])}),[],!1,null,null,null);e.default=r.exports}}]);