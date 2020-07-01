(window.webpackJsonp=window.webpackJsonp||[]).push([[634],{1194:function(t,e,s){"use strict";s.r(e);var a=s(69),n=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"command-line-interface-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command-line-interface-cli"}},[t._v("#")]),t._v(" Command Line Interface(CLI)")]),t._v(" "),s("p",[t._v("IoTDB provides Cli/shell tools for users to interact with IoTDB server in command lines. This document will show how Cli/shell tool works and what does it parameters mean.")]),t._v(" "),s("blockquote",[s("p",[t._v("Note: In this document, $IOTDB_HOME represents the path of the IoTDB installation directory.")])]),t._v(" "),s("h2",{attrs:{id:"build-client-from-source-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#build-client-from-source-code"}},[t._v("#")]),t._v(" Build client from source code")]),t._v(" "),s("p",[t._v("Under the root path of incubator-iotdb:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("> mvn clean package -pl client -am -DskipTests\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v('After build, the IoTDB client will be at the folder "client/target/iotdb-client-{project.version}".')]),t._v(" "),s("h2",{attrs:{id:"running-cli-shell"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#running-cli-shell"}},[t._v("#")]),t._v(" Running Cli/Shell")]),t._v(" "),s("p",[t._v("After installation, there is a default user in IoTDB: "),s("code",[t._v("root")]),t._v(", and the\ndefault password is "),s("code",[t._v("root")]),t._v(". Users can use this username to try IoTDB Cli/Shell tool. The client startup script is the "),s("code",[t._v("start-client")]),t._v(" file under the $IOTDB_HOME/bin folder. When starting the script, you need to specify the IP and PORT. (Make sure the IoTDB server is running properly when you use Cli/Shell tool to connect it.)")]),t._v(" "),s("p",[t._v("Here is an example where the server is started locally and the user has not changed the running port. The default port is\n6667 "),s("br"),t._v("\nIf you need to connect to the remote server or changes\nthe port number of the server running, set the specific IP and PORT at -h and -p."),s("br"),t._v('\nYou also can set your own environment variable at the front of the start script ("/sbin/start-client.sh" for linux and "/sbin/start-client.bat" for windows)')]),t._v(" "),s("p",[t._v("The Linux and MacOS system startup commands are as follows:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  Shell > ./sbin/start-client.sh -h 127.0.0.1 -p 6667 -u root -pw root\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("The Windows system startup commands are as follows:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  Shell > \\sbin\\start-client.bat -h 127.0.0.1 -p 6667 -u root -pw root\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("After using these commands, the client can be started successfully. The successful status will be as follows:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v(" _____       _________  ______   ______\n|_   _|     |  _   _  ||_   _ `.|_   _ \\\n  | |   .--.|_/ | | \\_|  | | `. \\ | |_) |\n  | | / .'`\\ \\  | |      | |  | | |  __'.\n _| |_| \\__. | _| |_    _| |_.' /_| |__) |\n|_____|'.__.' |_____|  |______.'|_______/  version <version>\n\n\nIoTDB> login successfully\nIoTDB>\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[t._v("Enter "),s("code",[t._v("quit")]),t._v(" or "),s("code",[t._v("exit")]),t._v(" can exit Client. The client will shows "),s("code",[t._v("quit normally")])]),t._v(" "),s("h2",{attrs:{id:"cli-shell-parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cli-shell-parameters"}},[t._v("#")]),t._v(" Cli/Shell Parameters")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter name")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter type")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Required")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Description")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("Example")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("-disableIS08601")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("No parameters")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("No")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("If this parameter is set, IoTDB will print the timestamp in digital form")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-disableIS08601")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("-h <"),s("code",[t._v("host")]),t._v(">")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string, no quotation marks")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Yes")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("The IP address of the IoTDB server")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-h 10.129.187.21")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("-help")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("No parameters")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("No")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Print help information for IoTDB")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-help")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("-p <"),s("code",[t._v("port")]),t._v(">")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("int")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Yes")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("The port number of the IoTDB server. IoTDB runs on port 6667 by default")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-p 6667")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("-pw <"),s("code",[t._v("password")]),t._v(">")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string, no quotation marks")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("No")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("The password used for IoTDB to connect to the server. If no password is entered, IoTDB will ask for password in Cli command")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-pw root")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("-u <"),s("code",[t._v("username")]),t._v(">")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string, no quotation marks")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Yes")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("User name used for IoTDB to connect the server")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-u root")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("-maxPRC <"),s("code",[t._v("maxPrintRowCount")]),t._v(">")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("int")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("No")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Set the maximum number of rows that IoTDB returns")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("-maxPRC 10")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("-e <"),s("code",[t._v("execute")]),t._v(">")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("No")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("manipulate IoTDB in batches without entering client input mode")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v('-e "show storage group"')])])])]),t._v(" "),s("p",[t._v('Following is a client command which connects the host with IP\n10.129.187.21, port 6667, username "root", password "root", and prints the timestamp in digital form. The maximum number of lines displayed on the IoTDB command line is 10.')]),t._v(" "),s("p",[t._v("The Linux and MacOS system startup commands are as follows:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  Shell > ./sbin/start-client.sh -h 10.129.187.21 -p 6667 -u root -pw root -disableIS08601 -maxPRC 10\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("The Windows system startup commands are as follows:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  Shell > \\sbin\\start-client.bat -h 10.129.187.21 -p 6667 -u root -pw root -disableIS08601 -maxPRC 10\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"cli-shell-tool-with-e-parameter"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cli-shell-tool-with-e-parameter"}},[t._v("#")]),t._v(" Cli/shell tool with -e parameter")]),t._v(" "),s("p",[t._v("-e parameter is designed for the Cli/shell tool in the situation where you would like to manipulate IoTDB in batches through scripts. By using the -e parameter, you can operate IoTDB without entering the client's input mode.")]),t._v(" "),s("p",[t._v("In order to avoid confusion between statements and other parameters, the current situation only supports the -e parameter as the last parameter.")]),t._v(" "),s("p",[t._v("The usage of -e parameter for Cli/shell is as follows:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("  Shell > ./sbin/start-client.sh -h {host} -p {port} -u {user} -pw {password} -e {sql for iotdb}\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("In order to better explain the use of -e parameter, take following as an example.")]),t._v(" "),s("p",[t._v("Suppose you want to create a storage group root.demo to a newly launched IoTDB, create a timeseries root.demo.s1 and insert three data points into it. With -e parameter, you could write a shell like this:")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('# !/bin/bash\n\nhost=127.0.0.1\nport=6667\nuser=root\npass=root\n\n./sbin/start-client.sh -h ${host} -p ${port} -u ${user} -pw ${pass} -e "set storage group to root.demo"\n./sbin/start-client.sh -h ${host} -p ${port} -u ${user} -pw ${pass} -e "create timeseries root.demo.s1 WITH DATATYPE=INT32, ENCODING=RLE"\n./sbin/start-client.sh -h ${host} -p ${port} -u ${user} -pw ${pass} -e "insert into root.demo(timestamp,s1) values(1,10)"\n./sbin/start-client.sh -h ${host} -p ${port} -u ${user} -pw ${pass} -e "insert into root.demo(timestamp,s1) values(2,11)"\n./sbin/start-client.sh -h ${host} -p ${port} -u ${user} -pw ${pass} -e "insert into root.demo(timestamp,s1) values(3,12)"\n./sbin/start-client.sh -h ${host} -p ${port} -u ${user} -pw ${pass} -e "select s1 from root.demo"\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])]),s("p",[t._v("The print results are shown in the figure, which are consistent with the client and jdbc operations.")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://issues.apache.org/jira/secure/attachment/12976042/12976042_image-2019-07-27-15-47-12-045.png",alt:"img"}})]),t._v(" "),s("p",[t._v("It should be noted that the use of the -e parameter in shell scripts requires attention to the escaping of special characters.")])])}),[],!1,null,null,null);e.default=n.exports}}]);