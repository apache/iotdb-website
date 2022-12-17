(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{596:function(e,t,o){"use strict";o.r(t);var a=o(19),r=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"download"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#download"}},[e._v("#")]),e._v(" Download")]),e._v(" "),t("p",[e._v("IoTDB provides you three installation methods, you can refer to the following suggestions, choose one of them:")]),e._v(" "),t("ul",[t("li",[e._v("Installation from source code. If you need to modify the code yourself, you can use this method.")]),e._v(" "),t("li",[e._v("Installation from binary files. Download the binary files from the official website. This is the recommended method, in which you will get a binary released package which is out-of-the-box.(Comming Soon...)")]),e._v(" "),t("li",[e._v("Using Docker：The path to the dockerfile is https://github.com/apache/incubator-iotdb/blob/master/docker/Dockerfile")])]),e._v(" "),t("h2",{attrs:{id:"prerequisites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),t("p",[e._v("To use IoTDB, you need to have:")]),e._v(" "),t("ol",[t("li",[e._v("Java >= 1.8 (Please make sure the environment path has been set)")]),e._v(" "),t("li",[e._v("Maven >= 3.1 (Optional)")]),e._v(" "),t("li",[e._v('Set the max open files num as 65535 to avoid "too many open files" problem.')])]),e._v(" "),t("blockquote",[t("p",[e._v("Note: If you don't have maven installed, you should replace 'mvn' in the following commands with 'mvnw.sh' or 'mvnw.cmd'.")]),e._v(" "),t("h3",{attrs:{id:"installation-from-binary-files"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation-from-binary-files"}},[e._v("#")]),e._v(" Installation from  binary files")])]),e._v(" "),t("p",[e._v("You can download the binary file from:\n"),t("RouterLink",{attrs:{to:"/Download/"}},[e._v("Here")])],1),e._v(" "),t("h2",{attrs:{id:"installation-from-source-code"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation-from-source-code"}},[e._v("#")]),e._v(" Installation from source code")]),e._v(" "),t("p",[e._v("You can get the released source code from https://iotdb.apache.org/Download/, or from the git repository https://github.com/apache/incubator-iotdb/tree/master\nYou can download the source code from:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("git clone https://github.com/apache/incubator-iotdb.git\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Under the root path of incubator-iotdb:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> mvn clean package -DskipTests\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("Then the binary version (including both server and client) can be found at "),t("strong",[e._v("distribution/target/apache-iotdb-{project.version}-incubating-bin.zip")])]),e._v(" "),t("blockquote",[t("p",[e._v('NOTE: Directories "service-rpc/target/generated-sources/thrift" and "server/target/generated-sources/antlr4" need to be added to sources roots to avoid compilation errors in IDE.')])]),e._v(" "),t("p",[e._v("If you would like to build the IoTDB server, you can run the following command under the root path of incubator-iotdb:")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("> mvn clean package -pl server -am -DskipTests\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v('After build, the IoTDB server will be at the folder "server/target/iotdb-server-{project.version}".')]),e._v(" "),t("h2",{attrs:{id:"installation-by-docker-dockerfile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation-by-docker-dockerfile"}},[e._v("#")]),e._v(" Installation by Docker (Dockerfile)")]),e._v(" "),t("p",[e._v("You can build and run a IoTDB docker image by following the guide of "),t("RouterLink",{attrs:{to:"/UserGuide/V0.10.x/Server/Docker Image.html"}},[e._v("Deployment by Docker")])],1)])}),[],!1,null,null,null);t.default=r.exports}}]);