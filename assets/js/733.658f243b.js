(window.webpackJsonp=window.webpackJsonp||[]).push([[733],{1306:function(s,t,e){"use strict";e.r(t);var n=e(71),a=Object(n.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"quick-start"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[s._v("#")]),s._v(" Quick Start")]),s._v(" "),e("h2",{attrs:{id:"outline"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#outline"}},[s._v("#")]),s._v(" Outline")]),s._v(" "),e("ul",[e("li",[s._v("Quick Start")]),s._v(" "),e("li",[s._v("Prerequisites\n"),e("ul",[e("li",[s._v("Installation\n"),e("ul",[e("li",[s._v("Installation from source code")])])]),s._v(" "),e("li",[s._v("Configure")]),s._v(" "),e("li",[s._v("Start\n"),e("ul",[e("li",[s._v("Start Server")]),s._v(" "),e("li",[s._v("Start Client")]),s._v(" "),e("li",[s._v("Have a try")]),s._v(" "),e("li",[s._v("Stop Server")])])])])])]),s._v(" "),e("p",[s._v("This short guide will walk you through the basic process of using IoTDB. For a more-complete guide, please visit our website’s documents.")]),s._v(" "),e("h2",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[s._v("#")]),s._v(" Prerequisites")]),s._v(" "),e("p",[s._v("To use IoTDB, you need to have:")]),s._v(" "),e("ol",[e("li",[s._v("Java >= 1.8 (Please make sure the environment path has been set)")]),s._v(" "),e("li",[s._v("Maven >= 3.0 (If you want to compile and install IoTDB from source code)")])]),s._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[s._v("#")]),s._v(" Installation")]),s._v(" "),e("p",[s._v("IoTDB provides you two installation methods, you can refer to the following suggestions, choose one of them:")]),s._v(" "),e("ul",[e("li",[s._v("Installation from source code. If you need to modify the code yourself, you can use this method.")]),s._v(" "),e("li",[s._v("Installation from binary files. Download the binary files from the official website. This is the recommended method, in which you will get a binary released package which is out-of-the-box.(Comming Soon...)")])]),s._v(" "),e("p",[s._v("Here in the Quick Start, we give a brief introduction of using source code to install IoTDB. For further information, please refer to Chapter 4 of the User Guide.")]),s._v(" "),e("h3",{attrs:{id:"installation-from-source-code"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation-from-source-code"}},[s._v("#")]),s._v(" Installation from source code")]),s._v(" "),e("p",[s._v("You can get the released source code from https://iotdb.apache.org/Download/, or from the git repository https://github.com/apache/incubator-iotdb/tree/master")]),s._v(" "),e("p",[s._v("Now suppose your directory is like this:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("> pwd\n/workspace/incubator-iotdb\n\n> ls -l\nincubator-iotdb/     <-- root path\n|\n+- server/\n|\n+- jdbc/\n|\n+- client/\n|\n...\n|\n+- pom.xml\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br")])]),e("p",[s._v("Let "),e("code",[s._v("$IOTDB_HOME = /workspace/incubator-iotdb/server/target/iotdb-server-{project.version}")])]),s._v(" "),e("p",[s._v("Let "),e("code",[s._v("$IOTDB_CLI_HOME = /workspace/incubator-iotdb/client/target/iotdb-client-{project.version}")])]),s._v(" "),e("p",[s._v("Note:")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("if "),e("code",[s._v("IOTDB_HOME")]),s._v(" is not explicitly assigned,\nthen by default "),e("code",[s._v("IOTDB_HOME")]),s._v(" is the direct parent directory of "),e("code",[s._v("sbin/start-server.sh")]),s._v(" on Unix/OS X\n(or that of "),e("code",[s._v("sbin\\start-server.bat")]),s._v(" on Windows).")])]),s._v(" "),e("li",[e("p",[s._v("if "),e("code",[s._v("IOTDB_CLI_HOME")]),s._v(" is not explicitly assigned,\nthen by default "),e("code",[s._v("IOTDB_CLI_HOME")]),s._v(" is the direct parent directory of "),e("code",[s._v("sbin/start-client.sh")]),s._v(" on\nUnix/OS X (or that of "),e("code",[s._v("sbin\\start-client.bat")]),s._v(" on Windows).")])])]),s._v(" "),e("p",[s._v("If you are not the first time that building IoTDB, remember deleting the following files:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("> rm -rf $IOTDB_HOME/data/\n> rm -rf $IOTDB_HOME/lib/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("Then under the root path of incubator-iotdb, you can build IoTDB using Maven:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("> pwd\n/workspace/incubator-iotdb\n\n# Unix/OS X\n> mvn clean package -pl server -am -Dmaven.test.skip=true\n\n# Windows\n> mvn clean package -pl server -am '-Dmaven.test.skip=true'\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("p",[s._v("Note: If you are a Windows user, you should use quoting "),e("code",[s._v("'-Dmaven.test.skip=true'")]),s._v(" in the following commands.")]),s._v(" "),e("p",[s._v("If successful, you will see the the following text in the terminal:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("[INFO] ------------------------------------------------------------------------\n[INFO] Reactor Summary:\n[INFO]\n[INFO] Apache IoTDB (incubating) Project Parent POM ....... SUCCESS [  6.405 s]\n[INFO] TsFile ............................................. SUCCESS [ 10.435 s]\n[INFO] Service-rpc ........................................ SUCCESS [  4.170 s]\n[INFO] IoTDB Jdbc ......................................... SUCCESS [  3.252 s]\n[INFO] IoTDB Server ....................................... SUCCESS [  8.072 s]\n[INFO] ------------------------------------------------------------------------\n[INFO] BUILD SUCCESS\n[INFO] ------------------------------------------------------------------------\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[s._v("Otherwise, you may need to check the error statements and fix the problems.")]),s._v(" "),e("p",[s._v("After building, the IoTDB project will be at the subfolder named iotdb. The folder will include the following contents:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("$IOTDB_HOME/\n|\n+- sbin/       <-- script files\n|\n+- conf/      <-- configuration files\n|\n+- lib/       <-- project dependencies\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h2",{attrs:{id:"configure"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configure"}},[s._v("#")]),s._v(" Configure")]),s._v(" "),e("p",[s._v("Before starting to use IoTDB, you need to config the configuration files first. For your convenience, we have already set the default config in the files.")]),s._v(" "),e("p",[s._v("In total, we provide users three kinds of configurations module:")]),s._v(" "),e("ul",[e("li",[s._v("environment config module ("),e("code",[s._v("iotdb-env.sh")]),s._v("(Linux or OSX), "),e("code",[s._v("iotdb-env.bat")]),s._v("(Windows))")]),s._v(" "),e("li",[s._v("system config module ("),e("code",[s._v("tsfile-format.properties")]),s._v(", "),e("code",[s._v("iotdb-engine.properties")]),s._v(")")]),s._v(" "),e("li",[s._v("log config module ("),e("code",[s._v("logback.xml")]),s._v(")")])]),s._v(" "),e("p",[s._v("The configuration files of the three configuration items are located in the IoTDB installation directory: "),e("code",[s._v("$IOTDB_HOME/conf")]),s._v(" folder. For more, you are advised to check Chapter 4 of the User Guide to give you the details.")]),s._v(" "),e("h2",{attrs:{id:"start"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start"}},[s._v("#")]),s._v(" Start")]),s._v(" "),e("h3",{attrs:{id:"start-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-server"}},[s._v("#")]),s._v(" Start Server")]),s._v(" "),e("p",[s._v("After that we start the server. Running the startup script:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# Unix/OS X\n> $IOTDB_HOME/sbin/start-server.sh\n\n# Windows\n> $IOTDB_HOME\\sbin\\start-server.bat\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h3",{attrs:{id:"start-client"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-client"}},[s._v("#")]),s._v(" Start Client")]),s._v(" "),e("p",[s._v("Now let's trying to read and write some data from IoTDB using our Client. To start the client, you need to explicit the server's IP and PORT as well as the USER_NAME and PASSWORD.")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# You can first build cli project\n> pwd\n/workspace/incubator-iotdb\n\n> mvn clean package -pl client -am -Dmaven.test.skip=true\n\n# Unix/OS X\n> $IOTDB_CLI_HOME/sbin/start-client.sh -h <IP> -p <PORT> -u <USER_NAME>\n\n# Windows\n> $IOTDB_CLI_HOME\\sbin\\start-client.bat -h <IP> -p <PORT> -u <USER_NAME>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("blockquote",[e("p",[s._v("NOTE: In the system, we set a default user in IoTDB named 'root'. The default password for 'root' is 'root'. You can use this default user if you are making the first try or you didn't create users by yourself.")])]),s._v(" "),e("p",[s._v("The command line client is interactive so if everything is ready you should see the welcome logo and statements:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v(" _____       _________  ______   ______\n|_   _|     |  _   _  ||_   _ `.|_   _ \\\n  | |   .--.|_/ | | \\_|  | | `. \\ | |_) |\n  | | / .'`\\ \\  | |      | |  | | |  __'.\n _| |_| \\__. | _| |_    _| |_.' /_| |__) |\n|_____|'.__.' |_____|  |______.'|_______/  version x.x.x\n\n\nIoTDB> login successfully\nIoTDB>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("h3",{attrs:{id:"have-a-try"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#have-a-try"}},[s._v("#")]),s._v(" Have a try")]),s._v(" "),e("p",[s._v("Now, you can use IoTDB SQL to operate IoTDB, and when you’ve had enough fun, you can input 'quit' or 'exit' command to leave the client.")]),s._v(" "),e("p",[s._v("But lets try something slightly more interesting:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("IoTDB> SET STORAGE GROUP TO root.ln\nexecute successfully.\nIoTDB> CREATE TIMESERIES root.ln.wf01.wt01.status WITH DATATYPE=BOOLEAN, ENCODING=PLAIN\nexecute successfully.\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("Till now, we have already create a table called root.vehicle and add a column called d0.s0 in the table. Let's take a look at what we have done by 'SHOW TIMESERIES' command.")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('IoTDB> SHOW TIMESERIES\n===  Timeseries Tree  ===\n\n{\n\t"root":{\n\t\t"ln":{\n\t\t\t"wf01":{\n\t\t\t\t"wt01":{\n\t\t\t\t\t"status":{\n\t\t\t\t\t\t"args":"{}",\n\t\t\t\t\t\t"StorageGroup":"root.ln",\n\t\t\t\t\t\t"DataType":"BOOLEAN",\n\t\t\t\t\t\t"Compressor":"UNCOMPRESSED",\n\t\t\t\t\t\t"Encoding":"PLAIN"\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br")])]),e("p",[s._v("For a further try, create a timeseries again and use SHOW TIMESERIES to check result.")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('IoTDB> CREATE TIMESERIES root.ln.wf01.wt01.temperature WITH DATATYPE=FLOAT, ENCODING=RLE\nIoTDB> SHOW TIMESERIES\n===  Timeseries Tree  ===\n\n{\n\t"root":{\n\t\t"ln":{\n\t\t\t"wf01":{\n\t\t\t\t"wt01":{\n\t\t\t\t\t"temperature":{\n\t\t\t\t\t\t"args":"{}",\n\t\t\t\t\t\t"StorageGroup":"root.ln",\n\t\t\t\t\t\t"DataType":"FLOAT",\n\t\t\t\t\t\t"Compressor":"UNCOMPRESSED",\n\t\t\t\t\t\t"Encoding":"RLE"\n\t\t\t\t\t},\n\t\t\t\t\t"status":{\n\t\t\t\t\t\t"args":"{}",\n\t\t\t\t\t\t"StorageGroup":"root.ln",\n\t\t\t\t\t\t"DataType":"BOOLEAN",\n\t\t\t\t\t\t"Compressor":"UNCOMPRESSED",\n\t\t\t\t\t\t"Encoding":"PLAIN"\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br")])]),e("p",[s._v("Now, for your conveniect, SHOW TIMESERIES clause also supports extention syntax, the pattern is (for further details, check Chapter 5 of the User Guide):")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("SHOW TIMESERIES <PATH>\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("Here is the example:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("IoTDB> SHOW TIMESERIES root.ln.wf01.wt01\n+------------------------------+--------------+--------+--------+\n|                    Timeseries| Storage Group|DataType|Encoding|\n+------------------------------+--------------+--------+--------+\n|      root.ln.wf01.wt01.status|       root.ln| BOOLEAN|   PLAIN|\n| root.ln.wf01.wt01.temperature|       root.ln|   FLOAT|     RLE|\n+------------------------------+--------------+--------+--------+\nTotal timeseries number = 2\nExecute successfully.\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("We can also use SHOW STORAGE GROUP to check created storage group:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("IoTDB> show storage group\n+-----------------------------------+\n|                      Storage Group|\n+-----------------------------------+\n|                            root.ln|\n+-----------------------------------+\nTotal storage group number = 1\nExecute successfully.\nIt costs 0.006s\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("Insert timeseries data is the basic operation of IoTDB, you can use 'INSERT' command to finish this:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("IoTDB> INSERT INTO root.ln.wf01.wt01(timestamp,status) values(100,true);\nexecute successfully.\nIoTDB> INSERT INTO root.ln.wf01.wt01(timestamp,status,temperature) values(200,false,20.71)\nexecute successfully.\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("The data we've just inserted displays like this:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("IoTDB> SELECT status FROM root.ln.wf01.wt01\n+-----------------------+------------------------+\n|                   Time|root.ln.wf01.wt01.status|\n+-----------------------+------------------------+\n|1970-01-01T08:00:00.100|                    true|\n|1970-01-01T08:00:00.200|                   false|\n+-----------------------+------------------------+\nrecord number = 1\nexecute successfully.\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("We can also query several timeseries data at once like this:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("IoTDB> SELECT * FROM root.ln.wf01.wt01\n+-----------------------+--------------------------+-----------------------------+\n|                   Time|  root.ln.wf01.wt01.status|root.ln.wf01.wt01.temperature|\n+-----------------------+--------------------------+-----------------------------+\n|1970-01-01T08:00:00.100|                      true|                         null|\n|1970-01-01T08:00:00.200|                     false|                        20.71|\n+-----------------------+--------------------------+-----------------------------+\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("If your session looks similar to what’s above, congrats, your IoTDB is operational!")]),s._v(" "),e("p",[s._v("For more on what commands are supported by IoTDB SQL, see Chapter 5 of the User Guide. It will give you help.")]),s._v(" "),e("h3",{attrs:{id:"stop-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#stop-server"}},[s._v("#")]),s._v(" Stop Server")]),s._v(" "),e("p",[s._v("The server can be stopped with ctrl-C or the following script:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("# Unix/ OS X\n> $IOTDB_HOME/bin/stop-server.sh\n\n# Windows\n> $IOTDB_HOME\\bin\\stop-server.bat\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])])])}),[],!1,null,null,null);t.default=a.exports}}]);