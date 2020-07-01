(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{738:function(e,t,a){"use strict";a.r(t);var s=a(69),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"logvisualizer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logvisualizer"}},[e._v("#")]),e._v(" LogVisualizer")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#LogVisualizer"}},[e._v("LogVisualizer")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#introduction"}},[e._v("Introduction")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#preparation"}},[e._v("Preparation")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Usage(GUI)"}},[e._v("Usage(GUI)")]),e._v(" "),a("ul",[a("li",[e._v("[Run the gui](#Run the gui)")]),e._v(" "),a("li",[e._v("[Choose a log file](#Choose the log file(s))")]),e._v(" "),a("li",[e._v("[Choose a parser property file](#Choose a parser property file)")]),e._v(" "),a("li",[e._v("[Load logs](#Load logs)")]),e._v(" "),a("li",[e._v("[Create new plans](#Create new plans)")]),e._v(" "),a("li",[e._v("[Edit plans](#Edit plans)")]),e._v(" "),a("li",[e._v("[Delete plans](#Delete plans)")]),e._v(" "),a("li",[e._v("[Execute plans](#Execute plans)")])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Usage(CommandLine)"}},[e._v("Usage(CommandLine)")])])]),e._v(" "),a("h1",{attrs:{id:"introduction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[e._v("#")]),e._v(" Introduction")]),e._v(" "),a("p",[e._v("IoTDB generates a variety of logs during runtime like other software systems. The debug and trace\nlogs can help the developers keep trace of the status of IoTDB and dig out potential or unclear bugs\nThe info logs may tell how healthy the system is and point out directions for database parameter\noptimization. The warn and error logs indicate the system is in a dangerous status or\nsomething unexpected happened (very likely a bug or an attack) and helps the database\nadministrator save the system before it crashes or find the reasons why it has crashed.")]),e._v(" "),a("p",[e._v("With the logs being so valuable a source of monitoring system status, mining the logs for their\npotential precious information has become quite a hot issue both in academy and industry.\nTraditional ways often require much human-resource to discover the value behind the logs by\nreading and analyzing the logs carefully. Usually, the logs of different sources (like Java\nclasses) are mixed together in several files and only the most experienced debugging experts know\nfrom the beginning what logs exactly they long for, many less experienced programmers would spend\ntime reading unrelated logs and filtering them out. Nevertheless, logs are mostly composed with\nstrings containing numbers which describe the system status and they are much less straight-forward for\nhumans to understand and compare than plots and statistics.")]),e._v(" "),a("p",[e._v("To reduce the difficulty of understanding what has happened behind these logs and better comparing\nthem, we present a simple tool LogVisualizer to retrieve interesting (specified by the user)\nvariables in the log files, generate timeseries based on these observations and draw plots to show\nthem in a more human-friendly way. LogVisualizer also collects the statistics of the logs to\npresent an overall view of what was going on.")]),e._v(" "),a("h1",{attrs:{id:"preparation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#preparation"}},[e._v("#")]),e._v(" Preparation")]),e._v(" "),a("p",[e._v("Before using LogVisualizer, you should have it built. Since LogVisualizer is integrated in the\nserver module as a tool, you can build the server together with LogVisualizer using:")]),e._v(" "),a("blockquote",[a("p",[e._v("mvn clean package -pl server -DskipTests")])]),e._v(" "),a("p",[e._v("Then you fan find the scripts to start LogVisualizer in:\n"),a("code",[e._v("server/target/iotdb-server-{project-version}/tools/logVisualize")])]),e._v(" "),a("p",[e._v("To have access to the advanced usages of this tool, you must have some basic knowledge about regular\nexpressions, especially Java style ones. Knowing about regular expressions enables to create your own\nvisualization plans or modify the existing ones. However, if you are totally new to regular expressions,\nyou can still use the preset plans which are only applicable to IoTDB.")]),e._v(" "),a("h1",{attrs:{id:"usage-gui"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-gui"}},[e._v("#")]),e._v(" Usage(GUI)")]),e._v(" "),a("h2",{attrs:{id:"run-the-gui"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-the-gui"}},[e._v("#")]),e._v(" Run the gui")]),e._v(" "),a("p",[e._v("You can run LogVisualizer using "),a("code",[e._v("log-visualizer-gui.sh")]),e._v(" (or "),a("code",[e._v("log-visualizer-gui.bat")]),e._v(" in windows).\nThis will bring you a gui like:")]),e._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/jt2594838/PicHub/blob/master/log-visualizer/main_panel.png?raw=true"}}),e._v(" "),a("h2",{attrs:{id:"choose-the-log-file-s"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#choose-the-log-file-s"}},[e._v("#")]),e._v(" Choose the log file(s)")]),e._v(" "),a("p",[e._v("First, you should choose a file containing the logs (or a directory containing such files) to be\nvisualized. Notice that we currently only support single-line logs and logs with multiple lines\nwill be ignored.")]),e._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/jt2594838/PicHub/blob/master/log-visualizer/select_log_file.png?raw=true"}}),e._v(" "),a("h2",{attrs:{id:"choose-a-parser-property-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#choose-a-parser-property-file"}},[e._v("#")]),e._v(" Choose a parser property file")]),e._v(" "),a("p",[e._v("Second, you should also choose a file describing how to parse the log file. For log files\nproduced by IoTDB, we provide an example in\n"),a("code",[e._v("server/src/assembly/resources/tools/logVisualize/default.log.pattern")]),e._v(". If your logs have\nsimilar structure as the IoTDB ones, you may just use it, otherwise, you should read that file\ncarefully and modify it for your logs.")]),e._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/jt2594838/PicHub/blob/master/log-visualizer/select_log_parser_property.png?raw=true"}}),e._v(" "),a("h2",{attrs:{id:"load-logs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load-logs"}},[e._v("#")]),e._v(" Load logs")]),e._v(" "),a("p",[e._v("Then, click the "),a("code",[e._v("Load logs")]),e._v(" button to let the LogVisualizer to prepare to read the logs. If the\npreparation is successful, the label above will show "),a("code",[e._v("Logs are successfully loaded")]),e._v(", otherwise, a\ndialog will show you what has gone wrong and you should fix it accordingly.")]),e._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/jt2594838/PicHub/blob/master/log-visualizer/load_logs.png?raw=true"}}),e._v(" "),a("h2",{attrs:{id:"load-plans"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#load-plans"}},[e._v("#")]),e._v(" Load plans")]),e._v(" "),a("p",[e._v("Next, you can load existing visualization plans or create new ones. For loading existing plans,\njust click the button "),a("code",[e._v("Load plans")]),e._v(" and choose the log files or directories that contain log\nfiles. Notice that if choose a directory, then the directory must only contain visualization plans.")]),e._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/jt2594838/PicHub/blob/master/log-visualizer/load_plan.png?raw=true"}}),e._v(" "),a("h2",{attrs:{id:"create-new-plans"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-new-plans"}},[e._v("#")]),e._v(" Create new plans")]),e._v(" "),a("p",[e._v("Now, we will present an example of how to create a new plan. First, click the "),a("code",[e._v("Create plan")]),e._v("\nbutton and choose a place to save the new plan, then the plan will show up in the list in the\nleft. The name of the file will be used as the plan's name and it must be different from\nany existing plans.")]),e._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/jt2594838/PicHub/blob/master/log-visualizer/create_plan.png?raw=true"}}),e._v(" "),a("h2",{attrs:{id:"edit-plans"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#edit-plans"}},[e._v("#")]),e._v(" Edit plans")]),e._v(" "),a("p",[e._v("After creating the new plan, you can edit it in the right panel. We provide an example in\n"),a("code",[e._v("server/src/assembly/resources/tools/logVisualize/plans/flushTimeConsumption.plan.example")]),e._v(",\nwe strongly recommend you read it carefully to know how to fill the fields. You can also edit plans\nyou have loaded here. Do not forget to click the "),a("code",[e._v("Save plan")]),e._v(" button if you want to save what you\nhave modified. If you want to create a plan that shows the time consumptions of jobs grouped by\ntheir type, you may set the fields like the following one.")]),e._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/jt2594838/PicHub/blob/master/log-visualizer/edit_plan.png?raw=true"}}),e._v(" "),a("h2",{attrs:{id:"delete-plans"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete-plans"}},[e._v("#")]),e._v(" Delete plans")]),e._v(" "),a("p",[e._v("If you don't need a plan anymore, you can select it and click "),a("code",[e._v("Delete plan")]),e._v(" button. This will\nremove the plan from the disk.")]),e._v(" "),a("h2",{attrs:{id:"execute-plans"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#execute-plans"}},[e._v("#")]),e._v(" Execute plans")]),e._v(" "),a("p",[e._v("Finally, you can execute a plan by selecting it and click "),a("code",[e._v("Execute plan")]),e._v(". Please make sure you\nhave loaded the logs. Afterwards, two tabs will be added into the main panel. The first contains\ntimeseries charts each corresponding to log groups and plotting the measurements specified by the\nplan. The second one presents the statistics of each measurement of each log group. Once you have\ndone browsing, you can click the button on the up-right to close the tab.")]),e._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/jt2594838/PicHub/blob/master/log-visualizer/execute_plan.png?raw=true"}}),e._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/jt2594838/PicHub/blob/master/log-visualizer/plot.png?raw=true"}}),e._v(" "),a("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/jt2594838/PicHub/blob/master/log-visualizer/statistics.png?raw=true"}}),e._v(" "),a("h1",{attrs:{id:"usage-commandline"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#usage-commandline"}},[e._v("#")]),e._v(" Usage(CommandLine)")]),e._v(" "),a("p",[e._v("We also provide a command line tool of LogVisualizer, which is "),a("code",[e._v("log-visualizer-cmd.sh")]),e._v("\n(or "),a("code",[e._v("log-visualizer-cmd.bat")]),e._v("). This tool takes exactly 4 parameters, which are: "),a("code",[e._v("the path of the log file")]),e._v(" "),a("code",[e._v("the path of the parser property file")]),e._v(" "),a("code",[e._v("the path of the visualization plan(s)")]),e._v(" "),a("code",[e._v("the output directory")]),e._v(".\nRunning this tool will load the given logs, run all the plans and save the result of each plan into\na sub-directory of the output path.\nE.g.:")]),e._v(" "),a("blockquote",[a("p",[e._v("./log-visualizer-cmd.sh all.log default.log.pattern planB.plan results")])])])}),[],!1,null,null,null);t.default=o.exports}}]);