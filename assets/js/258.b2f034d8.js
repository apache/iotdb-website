(window.webpackJsonp=window.webpackJsonp||[]).push([[258],{659:function(t,e,s){"use strict";s.r(e);var a=s(19),n=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"command-line-interface-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#command-line-interface-cli"}},[t._v("#")]),t._v(" Command Line Interface(CLI)")]),t._v(" "),e("p",[t._v("IoTDB provides Cli/shell tools for users to interact with IoTDB server in command lines. This document shows how Cli/shell tool works and the meaning of its parameters.")]),t._v(" "),e("blockquote",[e("p",[t._v("Note: In this document, $IOTDB_HOME represents the path of the IoTDB installation directory.")])]),t._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("p",[t._v("Under the root path of iotdb:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("> mvn clean package -pl cli -am -DskipTests\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v('After build, the IoTDB cli will be in the folder "cli/target/iotdb-cli-{project.version}".')]),t._v(" "),e("h2",{attrs:{id:"running"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#running"}},[t._v("#")]),t._v(" Running")]),t._v(" "),e("h3",{attrs:{id:"running-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#running-cli"}},[t._v("#")]),t._v(" Running Cli")]),t._v(" "),e("p",[t._v("After installation, there is a default user in IoTDB: "),e("code",[t._v("root")]),t._v(", and the\ndefault password is "),e("code",[t._v("root")]),t._v(". Users can use this username to try IoTDB Cli/Shell tool. The cli startup script is the "),e("code",[t._v("start-cli")]),t._v(" file under the $IOTDB_HOME/bin folder. When starting the script, you need to specify the IP and PORT. (Make sure the IoTDB server is running properly when you use Cli/Shell tool to connect it.)")]),t._v(" "),e("p",[t._v("Here is an example where the server is started locally and the user has not changed the running port. The default rpc port is\n6667 "),e("br"),t._v("\nIf you need to connect to the remote server or changes\nthe rpc port number of the server running, set the specific IP and RPC PORT at -h and -p."),e("br"),t._v('\nYou also can set your own environment variable at the front of the start script ("/sbin/start-cli.sh" for linux and "/sbin/start-cli.bat" for windows)')]),t._v(" "),e("p",[t._v("The Linux and MacOS system startup commands are as follows:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Shell > sbin/start-cli.sh -h 127.0.0.1 -p 6667 -u root -pw root\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("The Windows system startup commands are as follows:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Shell > sbin\\start-cli.bat -h 127.0.0.1 -p 6667 -u root -pw root\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("After using these commands, the cli can be started successfully. The successful status will be as follows:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" _____       _________  ______   ______\n|_   _|     |  _   _  ||_   _ `.|_   _ \\\n  | |   .--.|_/ | | \\_|  | | `. \\ | |_) |\n  | | / .'`\\ \\  | |      | |  | | |  __'.\n _| |_| \\__. | _| |_    _| |_.' /_| |__) |\n|_____|'.__.' |_____|  |______.'|_______/  version <version>\n\n\nIoTDB> login successfully\nIoTDB>\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br")])]),e("p",[t._v("Enter "),e("code",[t._v("quit")]),t._v(" or "),e("code",[t._v("exit")]),t._v(" can exit Cli. The cli will shows "),e("code",[t._v("quit normally")])]),t._v(" "),e("h3",{attrs:{id:"cli-parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cli-parameters"}},[t._v("#")]),t._v(" Cli Parameters")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter name")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Parameter type")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Required")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Description")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("Example")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("-disableISO8601")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("No parameters")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("No")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("If this parameter is set, IoTDB will print the timestamp in digital form")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-disableISO8601")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("-h <"),e("code",[t._v("host")]),t._v(">")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string, no quotation marks")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The IP address of the IoTDB server")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-h 10.129.187.21")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("-help")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("No parameters")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("No")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Print help information for IoTDB")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-help")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("-p <"),e("code",[t._v("rpcPort")]),t._v(">")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("int")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The rpc port number of the IoTDB server. IoTDB runs on rpc port 6667 by default")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-p 6667")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("-pw <"),e("code",[t._v("password")]),t._v(">")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string, no quotation marks")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("No")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("The password used for IoTDB to connect to the server. If no password is entered, IoTDB will ask for password in Cli command")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-pw root")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("-u <"),e("code",[t._v("username")]),t._v(">")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string, no quotation marks")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Yes")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("User name used for IoTDB to connect the server")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-u root")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("-maxPRC <"),e("code",[t._v("maxPrintRowCount")]),t._v(">")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("int")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("No")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("Set the maximum number of rows that IoTDB returns")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-maxPRC 10")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("-e <"),e("code",[t._v("execute")]),t._v(">")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("No")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("manipulate IoTDB in batches without entering cli input mode")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v('-e "show storage group"')])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("-c")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("empty")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("No")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("If the server enables "),e("code",[t._v("rpc_thrift_compression_enable=true")]),t._v(", then cli must use "),e("code",[t._v("-c")])]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("-c")])])])]),t._v(" "),e("p",[t._v('Following is a cli command which connects the host with IP\n10.129.187.21, rpc port 6667, username "root", password "root", and prints the timestamp in digital form. The maximum number of lines displayed on the IoTDB command line is 10.')]),t._v(" "),e("p",[t._v("The Linux and MacOS system startup commands are as follows:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Shell > sbin/start-cli.sh -h 10.129.187.21 -p 6667 -u root -pw root -disableISO8601 -maxPRC 10\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("The Windows system startup commands are as follows:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Shell > sbin\\start-cli.bat -h 10.129.187.21 -p 6667 -u root -pw root -disableISO8601 -maxPRC 10\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("h3",{attrs:{id:"note-on-using-the-cli-with-openid-connect-auth-enabled-on-server-side"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#note-on-using-the-cli-with-openid-connect-auth-enabled-on-server-side"}},[t._v("#")]),t._v(" Note on using the CLI with OpenID Connect Auth enabled on Server side")]),t._v(" "),e("p",[t._v("If OIDC is enabled on server side then no username / passwort is needed but a valid Access Token from the OIDC Provider.\nSo as username you use the token and the password has to be empty, e.g.")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('Shell > sbin/start-cli.sh -h 10.129.187.21 -p 6667 -u {my-access-token} -pw ""\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("How to get the token is dependent on your OpenID Connect setup and not covered here.\nIn the simplest case you can get this via the command line with the "),e("code",[t._v("passwort-grant")]),t._v(".\nFor example, if you use keycloack as OIDC and you have a realm with a client "),e("code",[t._v("iotdb")]),t._v(" defined as public you could use\nthe following "),e("code",[t._v("curl")]),t._v(" command to fetch a token (replace all "),e("code",[t._v("{}")]),t._v(" with appropriate values).")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('curl -X POST "https://{your-keycloack-server}/auth/realms/{your-realm}/protocol/openid-connect/token" \\                                                                                                                      \n -H "Content-Type: application/x-www-form-urlencoded" \\\n -d "username={username}" \\\n -d "password={password}" \\\n -d \'grant_type=password\' \\\n -d "client_id=iotdb"\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("p",[t._v("The response looks something like")]),t._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"access_token"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJxMS1XbTBvelE1TzBtUUg4LVNKYXAyWmNONE1tdWNXd25RV0tZeFpKNG93In0.eyJleHAiOjE1OTAzOTgwNzEsImlhdCI6MTU5MDM5Nzc3MSwianRpIjoiNjA0ZmYxMDctN2NiNy00NTRmLWIwYmQtY2M2ZDQwMjFiNGU4IiwiaXNzIjoiaHR0cDovL2F1dGguZGVtby5wcmFnbWF0aWNpbmR1c3RyaWVzLmRlL2F1dGgvcmVhbG1zL0lvVERCIiwiYXVkIjoiYWNjb3VudCIsInN1YiI6ImJhMzJlNDcxLWM3NzItNGIzMy04ZGE2LTZmZThhY2RhMDA3MyIsInR5cCI6IkJlYXJlciIsImF6cCI6ImlvdGRiIiwic2Vzc2lvbl9zdGF0ZSI6IjA2MGQyODYyLTE0ZWQtNDJmZS1iYWY3LThkMWY3ODQ2NTdmMSIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsibG9jYWxob3N0OjgwODAiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwidW1hX2F1dGhvcml6YXRpb24iLCJpb3RkYl9hZG1pbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoiZW1haWwgcHJvZmlsZSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwcmVmZXJyZWRfdXNlcm5hbWUiOiJ1c2VyIn0.nwbrJkWdCNjzFrTDwKNuV5h9dDMg5ytRKGOXmFIajpfsbOutJytjWTCB2WpA8E1YI3KM6gU6Jx7cd7u0oPo5syHhfCz119n_wBiDnyTZkFOAPsx0M2z20kvBLN9k36_VfuCMFUeddJjO31MeLTmxB0UKg2VkxdczmzMH3pnalhxqpnWWk3GnrRrhAf2sZog0foH4Ae3Ks0lYtYzaWK_Yo7E4Px42-gJpohy3JevOC44aJ4auzJR1RBj9LUbgcRinkBy0JLi6XXiYznSC2V485CSBHW3sseXn7pSXQADhnmGQrLfFGO5ZljmPO18eFJaimdjvgSChsrlSEmTDDsoo5Q"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"expires_in"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("300")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"refresh_expires_in"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1800")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"refresh_token"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"eyJhbGciOiJIUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJhMzZlMGU0NC02MWNmLTQ5NmMtOGRlZi03NTkwNjQ5MzQzMjEifQ.eyJleHAiOjE1OTAzOTk1NzEsImlhdCI6MTU5MDM5Nzc3MSwianRpIjoiNmMxNTBiY2EtYmE5NC00NTgxLWEwODEtYjI2YzhhMmI5YmZmIiwiaXNzIjoiaHR0cDovL2F1dGguZGVtby5wcmFnbWF0aWNpbmR1c3RyaWVzLmRlL2F1dGgvcmVhbG1zL0lvVERCIiwiYXVkIjoiaHR0cDovL2F1dGguZGVtby5wcmFnbWF0aWNpbmR1c3RyaWVzLmRlL2F1dGgvcmVhbG1zL0lvVERCIiwic3ViIjoiYmEzMmU0NzEtYzc3Mi00YjMzLThkYTYtNmZlOGFjZGEwMDczIiwidHlwIjoiUmVmcmVzaCIsImF6cCI6ImlvdGRiIiwic2Vzc2lvbl9zdGF0ZSI6IjA2MGQyODYyLTE0ZWQtNDJmZS1iYWY3LThkMWY3ODQ2NTdmMSIsInNjb3BlIjoiZW1haWwgcHJvZmlsZSJ9.ayNpXdNX28qahodX1zowrMGiUCw2AodlHBQFqr8Ui7c"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"token_type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bearer"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"not-before-policy"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"session_state"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"060d2862-14ed-42fe-baf7-8d1f784657f1"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scope"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"email profile"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("The interesting part here is the access token with the key "),e("code",[t._v("access_token")]),t._v(".\nThis has to be passed as username (with parameter "),e("code",[t._v("-u")]),t._v(") and empty password to the CLI.")]),t._v(" "),e("h3",{attrs:{id:"batch-operation-of-cli"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#batch-operation-of-cli"}},[t._v("#")]),t._v(" Batch Operation of Cli")]),t._v(" "),e("p",[t._v("-e parameter is designed for the Cli/shell tool in the situation where you would like to manipulate IoTDB in batches through scripts. By using the -e parameter, you can operate IoTDB without entering the cli's input mode.")]),t._v(" "),e("p",[t._v("In order to avoid confusion between statements and other parameters, the current situation only supports the -e parameter as the last parameter.")]),t._v(" "),e("p",[t._v("The usage of -e parameter for Cli/shell is as follows:")]),t._v(" "),e("p",[t._v("The Linux and MacOS system commands:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Shell > sbin/start-cli.sh -h {host} -p {rpcPort} -u {user} -pw {password} -e {sql for iotdb}\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("The Windows system commands:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Shell > sbin\\start-cli.bat -h {host} -p {rpcPort} -u {user} -pw {password} -e {sql for iotdb}\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("In the Windows environment, the SQL statement of the -e parameter needs to use "),e("code",[t._v("``")]),t._v(" to replace "),e("code",[t._v('" "')])]),t._v(" "),e("p",[t._v("In order to better explain the use of -e parameter, take following as an example(On linux system).")]),t._v(" "),e("p",[t._v("Suppose you want to create a storage group root.demo to a newly launched IoTDB, create a timeseries root.demo.s1 and insert three data points into it. With -e parameter, you could write a shell like this:")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('# !/bin/bash\n\nhost=127.0.0.1\nrpcPort=6667\nuser=root\npass=root\n\n./sbin/start-cli.sh -h ${host} -p ${rpcPort} -u ${user} -pw ${pass} -e "set storage group to root.demo"\n./sbin/start-cli.sh -h ${host} -p ${rpcPort} -u ${user} -pw ${pass} -e "create timeseries root.demo.s1 WITH DATATYPE=INT32, ENCODING=RLE"\n./sbin/start-cli.sh -h ${host} -p ${rpcPort} -u ${user} -pw ${pass} -e "insert into root.demo(timestamp,s1) values(1,10)"\n./sbin/start-cli.sh -h ${host} -p ${rpcPort} -u ${user} -pw ${pass} -e "insert into root.demo(timestamp,s1) values(2,11)"\n./sbin/start-cli.sh -h ${host} -p ${rpcPort} -u ${user} -pw ${pass} -e "insert into root.demo(timestamp,s1) values(3,12)"\n./sbin/start-cli.sh -h ${host} -p ${rpcPort} -u ${user} -pw ${pass} -e "select s1 from root.demo"\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br")])]),e("p",[t._v("The print results are shown in the figure, which are consistent with the cli and jdbc operations.")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v(" Shell > ./shell.sh \n+-----------------------------+------------+\n|                         Time|root.demo.s1|\n+-----------------------------+------------+\n|1970-01-01T08:00:00.001+08:00|          10|\n|1970-01-01T08:00:00.002+08:00|          11|\n|1970-01-01T08:00:00.003+08:00|          12|\n+-----------------------------+------------+\nTotal line number = 3\nIt costs 0.267s\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br")])]),e("p",[t._v("It should be noted that the use of the -e parameter in shell scripts requires attention to the escaping of special characters.")])])}),[],!1,null,null,null);e.default=n.exports}}]);