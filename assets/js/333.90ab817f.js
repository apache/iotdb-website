(window.webpackJsonp=window.webpackJsonp||[]).push([[333],{736:function(a,e,t){"use strict";t.r(e);var s=t(19),r=Object(s.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"grafana-plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#grafana-plugin"}},[a._v("#")]),a._v(" Grafana-Plugin")]),a._v(" "),e("p",[a._v("Grafana is an open source volume metrics monitoring and visualization tool, which can be used to present time series data and analyze application runtime status.")]),a._v(" "),e("p",[a._v("We developed the Grafana-Plugin for IoTDB, using the IoTDB REST service to present time series data and providing many visualization methods for time series data.\nCompared with previous IoTDB-Grafana-Connector, current Grafana-Plugin performs more efficiently and supports more query types. So, "),e("strong",[a._v("we recommend using Grafana-Plugin instead of IoTDB-Grafana-Connector")]),a._v(".")]),a._v(" "),e("h3",{attrs:{id:"installation-and-deployment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation-and-deployment"}},[a._v("#")]),a._v(" Installation and deployment")]),a._v(" "),e("h4",{attrs:{id:"install-grafana"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-grafana"}},[a._v("#")]),a._v(" Install Grafana")]),a._v(" "),e("ul",[e("li",[a._v("Download url: https://grafana.com/grafana/download")]),a._v(" "),e("li",[a._v("Version >= 7.0.0")])]),a._v(" "),e("h4",{attrs:{id:"install-grafana-plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-grafana-plugin"}},[a._v("#")]),a._v(" Install Grafana-Plugin")]),a._v(" "),e("ul",[e("li",[a._v("Plugin name: grafana-plugin")]),a._v(" "),e("li",[a._v("Download url: https://github.com/apache/iotdb.git")])]),a._v(" "),e("p",[a._v("Execute the following command:")]),a._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" clone https://github.com/apache/iotdb.git\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h4",{attrs:{id:"compile-grafana-plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compile-grafana-plugin"}},[a._v("#")]),a._v(" Compile Grafana-Plugin")]),a._v(" "),e("h5",{attrs:{id:"compile-method-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compile-method-1"}},[a._v("#")]),a._v(" Compile Method 1")]),a._v(" "),e("p",[a._v("We need to compile the front-end project in the IoTDB "),e("code",[a._v("grafana-plugin")]),a._v(" directory and then generate the "),e("code",[a._v("dist")]),a._v(" directory. The specific execution process is as follows.")]),a._v(" "),e("ul",[e("li",[a._v("Option 1 (compile with maven): execute following command in the "),e("code",[a._v("grafana-plugin")]),a._v(" directory:")])]),a._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("mvn "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" package "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-P")]),a._v(" compile-grafana-plugin\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ul",[e("li",[a._v("Option 2 (compile with yarn): execute following command in the "),e("code",[a._v("grafana-plugin")]),a._v(" directory:")])]),a._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("yarn")]),a._v(" build\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[a._v("If compiling successful, you can see the "),e("code",[a._v("dist")]),a._v(" directory , which contains the compiled Grafana-Plugin:")]),a._v(" "),e("img",{staticStyle:{width:"100%","max-width":"333px","max-height":"545px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/grafana-plugin-build.png?raw=true"}}),a._v(" "),e("h5",{attrs:{id:"compile-method-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compile-method-2"}},[a._v("#")]),a._v(" Compile Method 2")]),a._v(" "),e("p",[a._v("We can also obtain the front-end project of "),e("code",[a._v("grafana-plugin")]),a._v(" and other IoTDB executable files by executing the "),e("strong",[a._v("package instruction")]),a._v(" of the IoTDB project.")]),a._v(" "),e("p",[a._v("Execute following command in the IoTDB root directory:")]),a._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v(" mvn clean package "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-pl")]),a._v(" distribution "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-am")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-DskipTests")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-P")]),a._v(" compile-grafana-plugin\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("If compiling successful, you can see that the "),e("code",[a._v("distribution/target")]),a._v(" directory contains the compiled Grafana-Plugin:")]),a._v(" "),e("img",{staticStyle:{width:"100%","max-width":"333px","max-height":"545px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/distribution.png?raw=true"}}),a._v(" "),e("h4",{attrs:{id:"install-grafana-plugin-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-grafana-plugin-2"}},[a._v("#")]),a._v(" Install Grafana-Plugin")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("Copy the front-end project target folder generated above to Grafana's plugin directory "),e("code",[a._v("${Grafana directory}\\data\\plugins\\")]),a._v(".If there is no such directory, you can manually create it or start grafana and it will be created automatically. Of course, you can also modify the location of plugins. For details, please refer to the following instructions for modifying the location of Grafana's plugin directory.")])]),a._v(" "),e("li",[e("p",[a._v("Modify Grafana configuration file: the file is in（"),e("code",[a._v("${Grafana directory}\\conf\\defaults.ini")]),a._v("）, and do the following modifications:")]),a._v(" "),e("div",{staticClass:"language-ini line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ini"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("allow_loading_unsigned_plugins")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("iotdb")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])])]),a._v(" "),e("li",[e("p",[a._v("Modify the location of Grafana's plugin directory: the file is in（"),e("code",[a._v("${Grafana directory}\\conf\\defaults.ini")]),a._v("）, and do the following modifications:")]),a._v(" "),e("div",{staticClass:"language-ini line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-ini"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("plugins")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("data/plugins")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])])]),a._v(" "),e("li",[e("p",[a._v("Start Grafana (restart if the Grafana service is already started)\nFor more details，please click "),e("a",{attrs:{href:"https://grafana.com/docs/grafana/latest/plugins/installation/",target:"_blank",rel:"noopener noreferrer"}},[a._v("here"),e("OutboundLink")],1)])])]),a._v(" "),e("h4",{attrs:{id:"start-grafana"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#start-grafana"}},[a._v("#")]),a._v(" Start Grafana")]),a._v(" "),e("p",[a._v("Start Grafana with the following command in the Grafana directory:")]),a._v(" "),e("ul",[e("li",[a._v("Windows:")])]),a._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("bin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("grafana-server.exe\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ul",[e("li",[a._v("Linux:")])]),a._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" grafana-server start\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("ul",[e("li",[a._v("MacOS:")])]),a._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("brew services start grafana\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("For more details，please click "),e("a",{attrs:{href:"https://grafana.com/docs/grafana/latest/installation/",target:"_blank",rel:"noopener noreferrer"}},[a._v("here"),e("OutboundLink")],1)]),a._v(" "),e("h4",{attrs:{id:"configure-iotdb-rest-service"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configure-iotdb-rest-service"}},[a._v("#")]),a._v(" Configure IoTDB REST Service")]),a._v(" "),e("ul",[e("li",[a._v("Modify "),e("code",[a._v("{iotdb directory}/conf/iotdb-rest.properties")]),a._v(" as following:")])]),a._v(" "),e("div",{staticClass:"language-properties line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-properties"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# Is the REST service enabled")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("enable_rest_service")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("true")]),a._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# the binding port of the REST service")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token key attr-name"}},[a._v("rest_service_port")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token value attr-value"}},[a._v("18080")]),a._v("\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("p",[a._v("Start IoTDB (restart if the IoTDB service is already started)")]),a._v(" "),e("h3",{attrs:{id:"how-to-use-grafana-plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-grafana-plugin"}},[a._v("#")]),a._v(" How to use Grafana-Plugin")]),a._v(" "),e("h4",{attrs:{id:"access-grafana-dashboard"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#access-grafana-dashboard"}},[a._v("#")]),a._v(" Access Grafana dashboard")]),a._v(" "),e("p",[a._v("Grafana displays data in a web page dashboard. Please open your browser and visit "),e("code",[a._v("http://<ip>:<port>")]),a._v(" when using it.")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("IP is the IP of the server where your Grafana is located, and Port is the running port of Grafana (default 3000).")])]),a._v(" "),e("li",[e("p",[a._v("The default login username and password are both "),e("code",[a._v("admin")]),a._v(".")])])]),a._v(" "),e("h4",{attrs:{id:"add-iotdb-as-data-source"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add-iotdb-as-data-source"}},[a._v("#")]),a._v(" Add IoTDB as Data Source")]),a._v(" "),e("p",[a._v("Click the "),e("code",[a._v("Settings")]),a._v(" icon on the left, select the "),e("code",[a._v("Data Source")]),a._v(" option, and then click "),e("code",[a._v("Add data source")]),a._v(".")]),a._v(" "),e("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/datasource_1.png?raw=true"}}),a._v(" "),e("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/datasource_2.png?raw=true"}}),a._v(" "),e("p",[a._v("Select the "),e("code",[a._v("Apache IoTDB")]),a._v(" data source.")]),a._v(" "),e("ul",[e("li",[a._v("Fill in "),e("code",[a._v("http://<ip>:<port>")]),a._v(" in the "),e("code",[a._v("URL")]),a._v(" field\n"),e("ul",[e("li",[a._v("ip is the host ip where your IoTDB server is located")]),a._v(" "),e("li",[a._v("port is the running port of the REST service (default 18080).")])])]),a._v(" "),e("li",[a._v("Enter the username and password of the IoTDB server")])]),a._v(" "),e("p",[a._v("Click "),e("code",[a._v("Save & Test")]),a._v(", and "),e("code",[a._v("Success")]),a._v(" will appear.")]),a._v(" "),e("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/datasource_3.png?raw=true"}}),a._v(" "),e("h4",{attrs:{id:"create-a-new-panel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-a-new-panel"}},[a._v("#")]),a._v(" Create a new Panel")]),a._v(" "),e("p",[a._v("Click the "),e("code",[a._v("Dashboards")]),a._v(" icon on the left, and select "),e("code",[a._v("Manage")]),a._v(" option.")]),a._v(" "),e("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/manage.png?raw=true"}}),a._v(" "),e("p",[a._v("Click the "),e("code",[a._v("New Dashboard")]),a._v(" icon on the top right, and select "),e("code",[a._v("Add an empty panel")]),a._v(" option.")]),a._v(" "),e("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/add%20empty%20panel.png?raw=true"}}),a._v(" "),e("p",[a._v("Enter content in the SELECT, FROM , WHERE and CONTROL input box, where the WHERE and CONTROL input boxes are optional.")]),a._v(" "),e("p",[a._v("If a query involves multiple expressions, we can click "),e("code",[a._v("+")]),a._v(" on the right side of the SELECT input box to add expressions in the SELECT clause, or click "),e("code",[a._v("+")]),a._v(" on the right side of the FROM input box to add a path prefix:")]),a._v(" "),e("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/grafana_input.png?raw=true"}}),a._v(" "),e("p",[a._v("SELECT input box: contents can be the time series suffix, function, udf, arithmetic expression, or nested expressions. You can also use the as clause to rename the result.")]),a._v(" "),e("p",[a._v("Here are some examples of valid SELECT content:")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("s1")])]),a._v(" "),e("li",[e("code",[a._v("top_k(s1, 'k'='1') as top")])]),a._v(" "),e("li",[e("code",[a._v("sin(s1) + cos(s1 + s2)")])]),a._v(" "),e("li",[e("code",[a._v('udf(s1) as "alias"')])])]),a._v(" "),e("p",[a._v("FROM input box: contents must be the prefix path of the time series, such as "),e("code",[a._v("root.sg.d")]),a._v(".")]),a._v(" "),e("p",[a._v("WHERE input box: contents should be the filter condition of the query, such as "),e("code",[a._v("time > 0")]),a._v(" or "),e("code",[a._v("s1 < 1024 and s2 > 1024")]),a._v(".")]),a._v(" "),e("p",[a._v("CONTROL input box: contents should be a special clause that controls the query type and output format.")]),a._v(" "),e("p",[a._v("Here are some examples of valid CONTROL content:")]),a._v(" "),e("ul",[e("li",[e("code",[a._v("group by ([2017-11-01T00:00:00, 2017-11-07T23:00:00), 1d)")])]),a._v(" "),e("li",[e("code",[a._v("group by ([2017-11-01 00:00:00, 2017-11-07 23:00:00), 3h, 1d)")])]),a._v(" "),e("li",[e("code",[a._v("GROUP BY([2017-11-07T23:50:00, 2017-11-07T23:59:00), 1m) FILL (PREVIOUSUNTILLAST)")])]),a._v(" "),e("li",[e("code",[a._v("GROUP BY([2017-11-07T23:50:00, 2017-11-07T23:59:00), 1m) FILL (PREVIOUS, 1m)")])]),a._v(" "),e("li",[e("code",[a._v("GROUP BY([2017-11-07T23:50:00, 2017-11-07T23:59:00), 1m) FILL (LINEAR, 5m, 5m)")])]),a._v(" "),e("li",[e("code",[a._v("group by ((2017-11-01T00:00:00, 2017-11-07T23:00:00], 1d), level=1")])]),a._v(" "),e("li",[e("code",[a._v("group by ([0, 20), 2ms, 3ms), level=1")])])]),a._v(" "),e("p",[a._v("Tip: Statements like "),e("code",[a._v("select * from root.xx.**")]),a._v(" are not recommended because those statements may cause OOM.")]),a._v(" "),e("h4",{attrs:{id:"support-for-variables-and-template-functions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#support-for-variables-and-template-functions"}},[a._v("#")]),a._v(" Support for variables and template functions")]),a._v(" "),e("p",[a._v("This plugin supports Grafana's variables and templates (https://grafana.com/docs/grafana/v7.0/variables/) feature.")]),a._v(" "),e("p",[a._v("After creating a new Panel, click the Settings button in the upper right corner:")]),a._v(" "),e("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/setconf.png?raw=true"}}),a._v(" "),e("p",[a._v("Select "),e("code",[a._v("Variables")]),a._v(", click "),e("code",[a._v("Add variable")]),a._v(":")]),a._v(" "),e("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/addvaribles.png?raw=true"}}),a._v(" "),e("p",[a._v("Enter "),e("code",[a._v("Name")]),a._v(", "),e("code",[a._v("Label")]),a._v(", and "),e("code",[a._v("Query")]),a._v(", and then click the "),e("code",[a._v("Update")]),a._v(" button:")]),a._v(" "),e("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/variblesinput.png?raw=true"}}),a._v(" "),e("p",[a._v("Apply Variables, enter the variable in the "),e("code",[a._v("grafana panel")]),a._v(" and click the "),e("code",[a._v("save")]),a._v(" button:")]),a._v(" "),e("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Ecosystem%20Integration/Grafana-plugin/applyvariables.png?raw=true"}}),a._v(" "),e("h3",{attrs:{id:"more-details-about-grafana"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#more-details-about-grafana"}},[a._v("#")]),a._v(" More Details about Grafana")]),a._v(" "),e("p",[a._v("For more details about Grafana operation, please refer to the official Grafana documentation: http://docs.grafana.org/guides/getting_started/.")])])}),[],!1,null,null,null);e.default=r.exports}}]);