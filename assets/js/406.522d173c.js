(window.webpackJsonp=window.webpackJsonp||[]).push([[406],{808:function(e,a,t){"use strict";t.r(a);var s=t(19),n=Object(s.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"way-to-get-iotdb-binary-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#way-to-get-iotdb-binary-files"}},[e._v("#")]),e._v(" Way to get IoTDB binary files")]),e._v(" "),a("p",[e._v("IoTDB provides you three installation methods, you can refer to the following suggestions, choose one of them:")]),e._v(" "),a("ul",[a("li",[e._v("Installation from source code. If you need to modify the code yourself, you can use this method.")]),e._v(" "),a("li",[e._v("Installation from binary files. Download the binary files from the official website. This is the recommended method, in which you will get a binary released package which is out-of-the-box.")]),e._v(" "),a("li",[e._v("Using Docker：The path to the dockerfile is https://github.com/apache/iotdb/blob/master/docker/Dockerfile")])]),e._v(" "),a("h3",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("p",[e._v("To use IoTDB, you need to have:")]),e._v(" "),a("ol",[a("li",[e._v("Java >= 1.8 (Please make sure the environment path has been set)")]),e._v(" "),a("li",[e._v("Maven >= 3.6 (Optional)")]),e._v(" "),a("li",[e._v('Set the max open files num as 65535 to avoid "too many open files" problem.')])]),e._v(" "),a("blockquote",[a("p",[e._v("Note: If you don't have maven installed, you should replace 'mvn' in the following commands with 'mvnw.sh' or 'mvnw.cmd'.")]),e._v(" "),a("h3",{attrs:{id:"installation-from-binary-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-from-binary-files"}},[e._v("#")]),e._v(" Installation from  binary files")])]),e._v(" "),a("p",[e._v("You can download the binary file from:\n"),a("a",{attrs:{href:"https://iotdb.apache.org/Download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Download page"),a("OutboundLink")],1)]),e._v(" "),a("h3",{attrs:{id:"installation-from-source-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-from-source-code"}},[e._v("#")]),e._v(" Installation from source code")]),e._v(" "),a("p",[e._v("You can get the released source code from https://iotdb.apache.org/Download/, or from the git repository https://github.com/apache/iotdb/tree/master\nYou can download the source code from:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git clone https://github.com/apache/iotdb.git\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("After that, go to the root path of IoTDB. If you want to build the version that we have released, you need to create and check out a new branch by command "),a("code",[e._v("git checkout -b my_{project.version} v{project.version}")]),e._v(". E.g., you want to build the version "),a("code",[e._v("0.12.4")]),e._v(", you can execute this command to make it:")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-b")]),e._v(" my_0.12.4 v0.12.4\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Then you can execute this command to build the version that you want:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> mvn clean package -DskipTests\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Then the binary version (including both server and client) can be found at "),a("strong",[e._v("distribution/target/apache-iotdb-{project.version}-bin.zip")])]),e._v(" "),a("blockquote",[a("p",[e._v('NOTE: Directories "thrift/target/generated-sources/thrift" and "antlr/target/generated-sources/antlr4" need to be added to sources roots to avoid compilation errors in IDE.')])]),e._v(" "),a("p",[e._v("If you would like to build the IoTDB server, you can run the following command under the root path of iotdb:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("> mvn clean package -pl server -am -DskipTests\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v('After build, the IoTDB server will be at the folder "server/target/iotdb-server-{project.version}".')]),e._v(" "),a("p",[e._v("If you would like to build a module, you can execute command "),a("code",[e._v("mvn clean package -pl {module.name} -am -DskipTests")]),e._v(" under the root path of IoTDB.\nIf you need the jar with dependencies, you can add parameter "),a("code",[e._v("-P get-jar-with-dependencies")]),e._v(" after the command. E.g., If you need the jar of jdbc with dependencies, you can execute this command:")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" mvn clean package "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-pl")]),e._v(" jdbc "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-am")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-DskipTests")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-P")]),e._v(" get-jar-with-dependencies\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Then you can find it under the path "),a("code",[e._v("{module.name}/target")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"installation-by-docker-dockerfile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-by-docker-dockerfile"}},[e._v("#")]),e._v(" Installation by Docker (Dockerfile)")]),e._v(" "),a("p",[e._v("Apache IoTDB' Docker image is released on "),a("a",{attrs:{href:"https://hub.docker.com/r/apache/iotdb",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://hub.docker.com/r/apache/iotdb"),a("OutboundLink")],1),e._v(",")]),e._v(" "),a("ol",[a("li",[a("strong",[e._v("Get IoTDB docker image")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Recommended:")]),e._v(" Using "),a("code",[e._v("docker pull apache/iotdb:latest")]),e._v(" can get the latest docker image.")]),e._v(" "),a("li",[e._v("Users can also build a docker image themselves. Now a Dockerfile has been written at docker/src/main/Dockerfile.\n"),a("ul",[a("li",[e._v("Way 1: "),a("code",[e._v("$ docker build -t iotdb:base git://github.com/apache/iotdb#master:docker")])]),e._v(" "),a("li",[e._v("Way 2:")])]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v(" $ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/apache/iotdb\n $ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" iotdb\n $ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v("\n $ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" build "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-t")]),e._v(" iotdb:base "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])])])])])]),e._v(" "),a("p",[e._v("Once the docker image has been built locally (the tag is iotdb:base in this example), you are almost done!")]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("strong",[e._v("Create docker volume for data files and logs:")])])]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" volume create mydata\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" volume create mylogs\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[a("strong",[e._v("Run a docker container:")])])]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-p")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6667")]),e._v(":6667 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-v")]),e._v(" mydata:/iotdb/data "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-v")]),e._v(" mylogs:/iotdb/logs "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-d")]),e._v(" iotdb:base /iotdb/bin/start-server.sh\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("If success, you can run "),a("code",[e._v("docker ps")]),e._v(", and get something like the following:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                               NAMES\n2a68b6944cb5        iotdb:base          "/iotdb/bin/start-se…"   4 minutes ago       Up 5 minutes        0.0.0.0:6667->6667/tcp              laughing_meitner\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("You can use the above command to get the container ID:")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" container "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("ls")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("suppose the ID is <C_ID>.")]),e._v(" "),a("p",[e._v("And get the docker IP by the following, suppose the IP is <C_IP>.:")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" inspect "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--format")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'{{.NetworkSettings.IPAddress}}'")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("C_ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Now IoTDB server has started succesfully.")]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[e._v("If you just want to have a try by using iotdb-cli, you can:")])]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("exec")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-it")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("C_ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" /bin/bash\n$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("now you have enter the container"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(": /iotdb/sbin/start-cli.sh "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-h")]),e._v(" localhost "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-p")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6667")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-u")]),e._v(" root "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-pw")]),e._v(" root\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("p",[e._v("Or,  if you have a iotdb-cli locally, execute the following command:")]),e._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("$ /%IOTDB_HOME%/sbin/start-cli.sh "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-h")]),e._v(" localhost "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-p")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("6667")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-u")]),e._v(" root "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-pw")]),e._v(" root\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[e._v("If you want to write codes to insert data and query data, please add the following dependence:")])]),e._v(" "),a("div",{staticClass:"language-xml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[e._v("        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("org.apache.iotdb"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("iotdb-jdbc"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("0.13.0-SNAPSHOT"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("Some examples about how to use IoTDB with IoTDB-JDBC can be found at: https://github.com/apache/iotdb/tree/master/example/jdbc/src/main/java/org/apache/iotdb")])])}),[],!1,null,null,null);a.default=n.exports}}]);