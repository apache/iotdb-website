(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{629:function(e,s,t){"use strict";t.r(s);var a=t(19),n=Object(a.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"quick-start"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[e._v("#")]),e._v(" Quick Start")]),e._v(" "),s("h2",{attrs:{id:"outline"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#outline"}},[e._v("#")]),e._v(" Outline")]),e._v(" "),s("ul",[s("li",[e._v("Quick Start")]),e._v(" "),s("li",[e._v("Prerequisites")]),e._v(" "),s("li",[e._v("Installation\n"),s("ul",[s("li",[e._v("Build from source\n"),s("ul",[s("li",[e._v("Configurations")])])])])]),e._v(" "),s("li",[e._v("Start\n"),s("ul",[s("li",[e._v("Start IoTDB")]),e._v(" "),s("li",[e._v("Use IoTDB\n"),s("ul",[s("li",[e._v("Use Cli")]),e._v(" "),s("li",[e._v("Basic commands for IoTDB")])])]),e._v(" "),s("li",[e._v("Stop IoTDB")])])]),e._v(" "),s("li",[e._v("Only build server")]),e._v(" "),s("li",[e._v("Only build cli")])]),e._v(" "),s("p",[e._v("This short guide will walk you through the basic process of using IoTDB. For a more-complete guide, please visit our website's "),s("RouterLink",{attrs:{to:"/UserGuide/V0.11.x/Overview/What is IoTDB.html"}},[e._v("User Guide")]),e._v(".")],1),e._v(" "),s("h2",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),s("p",[e._v("To use IoTDB, you need to have:")]),e._v(" "),s("ol",[s("li",[e._v("Java >= 1.8 (Please make sure the environment path has been set)")]),e._v(" "),s("li",[e._v('Set the max open files num as 65535 to avoid "too many open files" problem.')])]),e._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),s("p",[e._v("IoTDB provides you three installation methods, you can refer to the following suggestions, choose one of them:")]),e._v(" "),s("ul",[s("li",[e._v("Installation from source code. If you need to modify the code yourself, you can use this method.")]),e._v(" "),s("li",[e._v("Installation from binary files. Download the binary files from the official website. This is the recommended method, in which you will get a binary released package which is out-of-the-box.(Coming Soon...)")]),e._v(" "),s("li",[e._v("Using Docker：The path to the dockerfile is https://github.com/apache/iotdb/blob/master/docker/src/main")])]),e._v(" "),s("p",[e._v("Here in the Quick Start, we give a brief introduction to install IoTDB. For further information, please refer to Chapter 3 of the User Guide.")]),e._v(" "),s("h2",{attrs:{id:"download"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#download"}},[e._v("#")]),e._v(" Download")]),e._v(" "),s("p",[e._v("You can download the binary file from:\n"),s("RouterLink",{attrs:{to:"/Download/"}},[e._v("Here")])],1),e._v(" "),s("h2",{attrs:{id:"configurations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configurations"}},[e._v("#")]),e._v(" Configurations")]),e._v(" "),s("p",[e._v('configuration files are under "conf" folder')]),e._v(" "),s("ul",[s("li",[e._v("environment config module ("),s("code",[e._v("iotdb-env.bat")]),e._v(", "),s("code",[e._v("iotdb-env.sh")]),e._v("),")]),e._v(" "),s("li",[e._v("system config module ("),s("code",[e._v("iotdb-engine.properties")]),e._v(")")]),e._v(" "),s("li",[e._v("log config module ("),s("code",[e._v("logback.xml")]),e._v(").")])]),e._v(" "),s("p",[e._v("For more, see "),s("RouterLink",{attrs:{to:"/UserGuide/V0.11.x/Server/Download.html"}},[e._v("Chapter3: Server")]),e._v(" in detail.")],1),e._v(" "),s("h2",{attrs:{id:"start"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start"}},[e._v("#")]),e._v(" Start")]),e._v(" "),s("p",[e._v("You can go through the following step to test the installation, if there is no error after execution, the installation is completed.")]),e._v(" "),s("h3",{attrs:{id:"start-iotdb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#start-iotdb"}},[e._v("#")]),e._v(" Start IoTDB")]),e._v(" "),s("p",[e._v("Users can start IoTDB by the start-server script under the sbin folder.")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# Unix/OS X\n> nohup sbin/start-server.sh >/dev/null 2>&1 &\nor\n> nohup sbin/start-server.sh -c <conf_path> -rpc_port <rpc_port> >/dev/null 2>&1 &\n\n# Windows\n> sbin\\start-server.bat -c <conf_path> -rpc_port <rpc_port>\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("ul",[s("li",[e._v('"-c" and "-rpc_port" are optional.')]),e._v(" "),s("li",[e._v('option "-c" specifies the system configuration file directory.')]),e._v(" "),s("li",[e._v('option "-rpc_port" specifies the rpc port.')]),e._v(" "),s("li",[e._v("if both option specified, the "),s("em",[e._v("rpc_port")]),e._v(" will overrides the rpc_port in "),s("em",[e._v("conf_path")]),e._v(".")])]),e._v(" "),s("p",[e._v("if you want to use JMX to connect IOTDB, you may need to add")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("-Dcom.sun.management.jmxremote.rmi.port=PORT -Djava.rmi.server.hostname=IP \n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("to $IOTDB_JMX_OPTS in iotdb-env.sh. or iotdb-env.bat")]),e._v(" "),s("h3",{attrs:{id:"use-iotdb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-iotdb"}},[e._v("#")]),e._v(" Use IoTDB")]),e._v(" "),s("h4",{attrs:{id:"use-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#use-cli"}},[e._v("#")]),e._v(" Use Cli")]),e._v(" "),s("p",[e._v("IoTDB offers different ways to interact with server, here we introduce basic steps of using Cli tool to insert and query data.")]),e._v(" "),s("p",[e._v("After installing IoTDB, there is a default user 'root', its default password is also 'root'. Users can use this\ndefault user to login Cli to use IoTDB. The startup script of Cli is the start-cli script in the folder sbin. When executing the script, user should assign\nIP, PORT, USER_NAME and PASSWORD. The default parameters are \"-h 127.0.0.1 -p 6667 -u root -pw -root\".")]),e._v(" "),s("p",[e._v("Here is the command for starting the Cli:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# Unix/OS X\n> sbin/start-cli.sh -h 127.0.0.1 -p 6667 -u root -pw root\n\n# Windows\n> sbin\\start-cli.bat -h 127.0.0.1 -p 6667 -u root -pw root\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("The command line client is interactive so if everything is ready you should see the welcome logo and statements:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v(" _____       _________  ______   ______\n|_   _|     |  _   _  ||_   _ `.|_   _ \\\n  | |   .--.|_/ | | \\_|  | | `. \\ | |_) |\n  | | / .'`\\ \\  | |      | |  | | |  __'.\n _| |_| \\__. | _| |_    _| |_.' /_| |__) |\n|_____|'.__.' |_____|  |______.'|_______/  version x.x.x\n\n\nIoTDB> login successfully\nIoTDB>\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br")])]),s("h4",{attrs:{id:"basic-commands-for-iotdb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#basic-commands-for-iotdb"}},[e._v("#")]),e._v(" Basic commands for IoTDB")]),e._v(" "),s("p",[e._v("Now, let us introduce the way of creating timeseries, inserting data and querying data.")]),e._v(" "),s("p",[e._v("The data in IoTDB is organized as timeseries, in each timeseries there are some data-time pairs, and every timeseries is owned by a storage group. Before defining a timeseries, we should define a storage group using SET STORAGE GROUP, and here is an example:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB> SET STORAGE GROUP TO root.ln\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("We can also use SHOW STORAGE GROUP to check created storage group:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB> SHOW STORAGE GROUP\n+-----------------------------------+\n|                      Storage Group|\n+-----------------------------------+\n|                            root.ln|\n+-----------------------------------+\nstorage group number = 1\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("p",[e._v("After the storage group is set, we can use CREATE TIMESERIES to create new timeseries. When we create a timeseries, we should define its data type and the encoding scheme. We create two timeseries as follow:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB> CREATE TIMESERIES root.ln.wf01.wt01.status WITH DATATYPE=BOOLEAN, ENCODING=PLAIN\nIoTDB> CREATE TIMESERIES root.ln.wf01.wt01.temperature WITH DATATYPE=FLOAT, ENCODING=RLE\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v('To query the specific timeseries, use SHOW TIMESERIES <Path>. <Path> represents the path of the timeseries. Its default value is null, which means querying all the timeseries in the system(the same as using "SHOW TIMESERIES root"). Here are the examples:')]),e._v(" "),s("ol",[s("li",[e._v("Query all timeseries in the system:")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB> SHOW TIMESERIES\n+-------------------------------+---------------+--------+--------+\n|                     Timeseries|  Storage Group|DataType|Encoding|\n+-------------------------------+---------------+--------+--------+\n|       root.ln.wf01.wt01.status|        root.ln| BOOLEAN|   PLAIN|\n|  root.ln.wf01.wt01.temperature|        root.ln|   FLOAT|     RLE|\n+-------------------------------+---------------+--------+--------+\nTotal timeseries number = 2\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])]),s("ol",{attrs:{start:"2"}},[s("li",[e._v("Query a specific timeseries(root.ln.wf01.wt01.status):")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB> SHOW TIMESERIES root.ln.wf01.wt01.status\n+------------------------------+--------------+--------+--------+\n|                    Timeseries| Storage Group|DataType|Encoding|\n+------------------------------+--------------+--------+--------+\n|      root.ln.wf01.wt01.status|       root.ln| BOOLEAN|   PLAIN|\n+------------------------------+--------------+--------+--------+\nTotal timeseries number = 1\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("p",[e._v("Insert timeseries data is the basic operation of IoTDB, you can use ‘INSERT’ command to finish this. Before insert you should assign the timestamp and the suffix path name:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB> INSERT INTO root.ln.wf01.wt01(timestamp,status) values(100,true);\nIoTDB> INSERT INTO root.ln.wf01.wt01(timestamp,status,temperature) values(200,false,20.71)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("The data we’ve just inserted displays like this:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB> SELECT status FROM root.ln.wf01.wt01\n+-----------------------+------------------------+\n|                   Time|root.ln.wf01.wt01.status|\n+-----------------------+------------------------+\n|1970-01-01T08:00:00.100|                    true|\n|1970-01-01T08:00:00.200|                   false|\n+-----------------------+------------------------+\nTotal line number = 2\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])]),s("p",[e._v("We can also query several timeseries data at once like this:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB> SELECT * FROM root.ln.wf01.wt01\n+-----------------------+--------------------------+-----------------------------+\n|                   Time|  root.ln.wf01.wt01.status|root.ln.wf01.wt01.temperature|\n+-----------------------+--------------------------+-----------------------------+\n|1970-01-01T08:00:00.100|                      true|                         null|\n|1970-01-01T08:00:00.200|                     false|                        20.71|\n+-----------------------+--------------------------+-----------------------------+\nTotal line number = 2\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br")])]),s("p",[e._v("The commands to exit the Cli are:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB> quit\nor\nIoTDB> exit\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("For more on what commands are supported by IoTDB SQL, see "),s("RouterLink",{attrs:{to:"/UserGuide/V0.11.x/Operation Manual/SQL Reference.html"}},[e._v("SQL Reference")]),e._v(".")],1),e._v(" "),s("h3",{attrs:{id:"stop-iotdb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#stop-iotdb"}},[e._v("#")]),e._v(" Stop IoTDB")]),e._v(" "),s("p",[e._v("The server can be stopped with ctrl-C or the following script:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("# Unix/OS X\n> sbin/stop-server.sh\n\n# Windows\n> sbin\\stop-server.bat\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("h2",{attrs:{id:"only-build-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#only-build-cli"}},[e._v("#")]),e._v(" Only build cli")]),e._v(" "),s("p",[e._v("Under the root path of iotdb:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("> mvn clean package -pl cli -am -DskipTests\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v('After build, the IoTDB cli will be in the folder "cli/target/iotdb-cli-{project.version}".')])])}),[],!1,null,null,null);s.default=n.exports}}]);