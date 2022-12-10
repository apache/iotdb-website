(window.webpackJsonp=window.webpackJsonp||[]).push([[422],{824:function(e,s,n){"use strict";n.r(s);var t=n(19),a=Object(t.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"deployment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[e._v("#")]),e._v(" Deployment")]),e._v(" "),s("p",[e._v("IoTDB provides you two installation methods, you can refer to the following suggestions, choose one of them:")]),e._v(" "),s("ul",[s("li",[e._v("Installation from binary files. Download the binary files from the official website. This is the recommended method, in which you will get a binary released package which is out-of-the-box.")]),e._v(" "),s("li",[e._v("Installation from source code. If you need to modify the code yourself, you can use this method.")])]),e._v(" "),s("h2",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),s("p",[e._v("To install and use IoTDB, you need to have:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Java >= 1.8 (1.8, 11, and 13 are verified. Please make sure the environment path has been set.)")]),e._v(" "),s("ul",[s("li",[e._v("To use IoTDB, JRE should be installed. To compile IoTDB, JDK should be installed.")])])]),e._v(" "),s("li",[s("p",[e._v("Maven >= 3.1 (If you want to compile and install IoTDB from source code)")]),e._v(" "),s("ul",[s("li",[e._v("While Maven is not mandatory to be installed standalone, you can use the provided Maven wrapper, "),s("code",[e._v("./mvnw.sh")]),e._v(" on Linux/OS X or "),s("code",[e._v(".\\mvnw.cmd")]),e._v(" on Windows, to facilitate development.")])])]),e._v(" "),s("li",[s("p",[e._v('Set the max open files num as 65535 to avoid "too many open files" problem.')])])]),e._v(" "),s("h2",{attrs:{id:"installation-from-binary-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation-from-binary-files"}},[e._v("#")]),e._v(" Installation from  binary files")]),e._v(" "),s("p",[e._v("IoTDB provides you binary files which contains all the necessary components for the IoTDB system to run. You can get them on our website "),s("a",{attrs:{href:"http://tsfile.org/download",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://tsfile.org/download"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("NOTE:\niotdb-<version>.tar.gz # For Linux or MacOS\niotdb-<version>.zip # For Windows\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("After downloading, you can extract the IoTDB tarball using the following operations:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("Shell > uzip iotdb-<version>.zip # For Windows\nShell > tar -zxf iotdb-<version>.tar.gz # For Linux or MacOS\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("The IoTDB project will be at the subfolder named iotdb. The folder will include the following contents:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("iotdb/     <-- root path\n|\n+- sbin/       <-- script files\n|\n+- conf/      <-- configuration files\n|\n+- lib/       <-- project dependencies\n|\n+- LICENSE    <-- LICENSE\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br")])]),s("h2",{attrs:{id:"installation-from-source-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation-from-source-code"}},[e._v("#")]),e._v(" Installation from source code")]),e._v(" "),s("p",[e._v("You can get the released source code from https://iotdb.apache.org/#/Download, or from the git repository https://github.com/apache/incubator-iotdb/tree/master")]),e._v(" "),s("p",[e._v("Now suppose your directory is like this:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("> pwd\n/workspace/incubator-iotdb\n\n> ls -l\nincubator-iotdb/     <-- root path\n|\n+- server/\n|\n+- jdbc/\n|\n+- client/\n|\n...\n|\n+- pom.xml\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br")])]),s("p",[e._v("Let "),s("code",[e._v("$IOTDB_HOME = /workspace/incubator-iotdb/server/target/iotdb-server-{project.version}")])]),e._v(" "),s("p",[e._v("Let "),s("code",[e._v("$IOTDB_CLI_HOME = /workspace/incubator-iotdb/client/target/iotdb-client-{project.version}")])]),e._v(" "),s("p",[e._v("Note:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("if "),s("code",[e._v("IOTDB_HOME")]),e._v(" is not explicitly assigned,\nthen by default "),s("code",[e._v("IOTDB_HOME")]),e._v(" is the direct parent directory of "),s("code",[e._v("sbin/start-server.sh")]),e._v(" on Unix/OS X\n(or that of "),s("code",[e._v("sbin\\start-server.bat")]),e._v(" on Windows).")])]),e._v(" "),s("li",[s("p",[e._v("if "),s("code",[e._v("IOTDB_CLI_HOME")]),e._v(" is not explicitly assigned,\nthen by default "),s("code",[e._v("IOTDB_CLI_HOME")]),e._v(" is the direct parent directory of "),s("code",[e._v("sbin/start-client.sh")]),e._v(" on\nUnix/OS X (or that of "),s("code",[e._v("sbin\\start-client.bat")]),e._v(" on Windows).")])])]),e._v(" "),s("p",[e._v("If you are not the first time that building IoTDB, remember deleting the following files:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("> rm -rf $IOTDB_HOME/data/\n> rm -rf $IOTDB_HOME/lib/\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("Then under the root path of incubator-iotdb, you can build IoTDB using Maven:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("> pwd\n/workspace/incubator-iotdb\n\n> mvn clean package -pl server -am -Dmaven.test.skip=true\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("If successful, you will see the the following text in the terminal:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("[INFO] ------------------------------------------------------------------------\n[INFO] Reactor Summary:\n[INFO]\n[INFO] Apache IoTDB (incubating) Project Parent POM ....... SUCCESS [  6.405 s]\n[INFO] TsFile ............................................. SUCCESS [ 10.435 s]\n[INFO] Service-rpc ........................................ SUCCESS [  4.170 s]\n[INFO] IoTDB Jdbc ......................................... SUCCESS [  3.252 s]\n[INFO] IoTDB Server ....................................... SUCCESS [  8.072 s]\n[INFO] ------------------------------------------------------------------------\n[INFO] BUILD SUCCESS\n[INFO] ------------------------------------------------------------------------\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br")])]),s("p",[e._v("Otherwise, you may need to check the error statements and fix the problems.")]),e._v(" "),s("p",[e._v("After building, the IoTDB project will be at the subfolder named iotdb. The folder will include the following contents:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$IOTDB_HOME/\n|\n+- sbin/       <-- script files\n|\n+- conf/      <-- configuration files\n|\n+- lib/       <-- project dependencies\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("h2",{attrs:{id:"installation-by-docker-dockerfile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation-by-docker-dockerfile"}},[e._v("#")]),e._v(" Installation by Docker (Dockerfile)")]),e._v(" "),s("p",[e._v("You can build and run a IoTDB docker image by following the guide of "),s("RouterLink",{attrs:{to:"/#/Documents/0.8.2/chap4/sec7"}},[e._v("Deployment by Docker")])],1)])}),[],!1,null,null,null);s.default=a.exports}}]);