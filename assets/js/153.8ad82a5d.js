(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{555:function(t,e,s){"use strict";s.r(e);var a=s(19),r=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"triggers-management"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#triggers-management"}},[t._v("#")]),t._v(" Triggers Management")]),t._v(" "),e("p",[t._v("You can create and drop a trigger through an SQL statement, and you can also query all registered triggers through an SQL statement.")]),t._v(" "),e("p",[e("strong",[t._v("We recommend that you stop insertion while creating triggers.")])]),t._v(" "),e("h2",{attrs:{id:"create-trigger"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-trigger"}},[t._v("#")]),t._v(" Create Trigger")]),t._v(" "),e("p",[t._v("Triggers can be registered on arbitrary path patterns. The time series registered with the trigger will be listened to by the trigger. When there is data change on the series, the corresponding fire method in the trigger will be called.")]),t._v(" "),e("p",[t._v("Registering a trigger can be done as follows:")]),t._v(" "),e("ol",[e("li",[t._v("Implement a Trigger class as described in the How to implement a Trigger chapter, assuming the class's full class name is "),e("code",[t._v("org.apache.iotdb.trigger.ClusterAlertingExample")])]),t._v(" "),e("li",[t._v("Package the project into a JAR package.")]),t._v(" "),e("li",[t._v("Register the trigger with an SQL statement. During the creation process, the "),e("code",[t._v("validate")]),t._v(" and "),e("code",[t._v("onCreate")]),t._v(" interfaces of the trigger will only be called once. For details, please refer to the chapter of How to implement a Trigger.")])]),t._v(" "),e("p",[t._v("The complete SQL syntax is as follows:")]),t._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create Trigger")]),t._v("\ncreateTrigger\n    : "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" triggerType "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TRIGGER")]),t._v(" triggerName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("identifier triggerEventClause "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" pathPattern "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" className"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("STRING_LITERAL uriClause? triggerAttributeClause?\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ntriggerType\n    : STATELESS "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" STATEFUL\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ntriggerEventClause\n    : "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BEFORE "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AFTER")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        \nuriClause\n    : "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USING")]),t._v(" URI uri\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nuri\n    : STRING_LITERAL\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \ntriggerAttributeClause\n    : "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" LR_BRACKET triggerAttribute "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("COMMA triggerAttribute"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" RR_BRACKET\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ntriggerAttribute\n    : "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("attributeKey operator_eq "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("value")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("attributeValue\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br"),e("span",{staticClass:"line-number"},[t._v("13")]),e("br"),e("span",{staticClass:"line-number"},[t._v("14")]),e("br"),e("span",{staticClass:"line-number"},[t._v("15")]),e("br"),e("span",{staticClass:"line-number"},[t._v("16")]),e("br"),e("span",{staticClass:"line-number"},[t._v("17")]),e("br"),e("span",{staticClass:"line-number"},[t._v("18")]),e("br"),e("span",{staticClass:"line-number"},[t._v("19")]),e("br"),e("span",{staticClass:"line-number"},[t._v("20")]),e("br"),e("span",{staticClass:"line-number"},[t._v("21")]),e("br"),e("span",{staticClass:"line-number"},[t._v("22")]),e("br"),e("span",{staticClass:"line-number"},[t._v("23")]),e("br"),e("span",{staticClass:"line-number"},[t._v("24")]),e("br"),e("span",{staticClass:"line-number"},[t._v("25")]),e("br"),e("span",{staticClass:"line-number"},[t._v("26")]),e("br"),e("span",{staticClass:"line-number"},[t._v("27")]),e("br"),e("span",{staticClass:"line-number"},[t._v("28")]),e("br")])]),e("p",[t._v("Below is the explanation for the SQL syntax:")]),t._v(" "),e("ul",[e("li",[t._v("triggerName: The trigger ID, which is globally unique and used to distinguish different triggers, is case-sensitive.")]),t._v(" "),e("li",[t._v("triggerType: Trigger types are divided into two categories, STATELESS and STATEFUL.")]),t._v(" "),e("li",[t._v("triggerEventClause: when the trigger fires, BEFORE INSERT and AFTER INSERT are supported now.")]),t._v(" "),e("li",[t._v("pathPattern：The path pattern the trigger listens on, can contain wildcards * and **.")]),t._v(" "),e("li",[t._v("className：The class name of the Trigger class.")]),t._v(" "),e("li",[t._v("jarLocation: Optional. When this option is not specified, by default, we consider that the DBA has placed the JAR package required to create the trigger in the trigger_root_dir directory (configuration item, default is IOTDB_HOME/ext/trigger) of each DataNode node. When this option is specified, we will download and distribute the file resource corresponding to the URI to the trigger_root_dir/install directory of each DataNode.")]),t._v(" "),e("li",[t._v("triggerAttributeClause: It is used to specify the parameters that need to be set when the trigger instance is created. This part is optional in the SQL syntax.")])]),t._v(" "),e("p",[t._v("Here is an example SQL statement to help you understand:")]),t._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v(" STATELESS "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TRIGGER")]),t._v(" triggerTest\nBEFORE "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sg"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'org.apache.iotdb.trigger.ClusterAlertingExample'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("USING")]),t._v(" URI "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/jar/ClusterAlertingExample.jar'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WITH")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"trigger"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"limit"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"100"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br")])]),e("p",[t._v("The above SQL statement creates a trigger named triggerTest:")]),t._v(" "),e("ul",[e("li",[t._v("The trigger is stateless.")]),t._v(" "),e("li",[t._v("Fires before insertion.")]),t._v(" "),e("li",[t._v("Listens on path pattern root.sg.**")]),t._v(" "),e("li",[t._v("The implemented trigger class is named "),e("code",[t._v("org.apache.iotdb.trigger.ClusterAlertingExample")])]),t._v(" "),e("li",[t._v("The JAR package URI is http://jar/ClusterAlertingExample.jar")]),t._v(" "),e("li",[t._v("When creating the trigger instance, two parameters, name and limit, are passed in.")])]),t._v(" "),e("h2",{attrs:{id:"drop-trigger"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#drop-trigger"}},[t._v("#")]),t._v(" Drop Trigger")]),t._v(" "),e("p",[t._v("The trigger can be dropped by specifying the trigger ID. During the process of dropping the trigger, the "),e("code",[t._v("onDrop")]),t._v(" interface of the trigger will be called only once.")]),t._v(" "),e("p",[t._v("The SQL syntax is:")]),t._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Drop Trigger")]),t._v("\ndropTrigger\n  : "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DROP")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TRIGGER")]),t._v(" triggerName"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("identifier\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("p",[t._v("Here is an example statement:")]),t._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DROP")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TRIGGER")]),t._v(" triggerTest1\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("The above statement will drop the trigger with ID triggerTest1.")]),t._v(" "),e("h2",{attrs:{id:"show-trigger"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#show-trigger"}},[t._v("#")]),t._v(" Show Trigger")]),t._v(" "),e("p",[t._v("You can query information about triggers that exist in the cluster through an SQL statement.")]),t._v(" "),e("p",[t._v("The SQL syntax is as follows:")]),t._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SHOW")]),t._v(" TRIGGERS\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("The result set format of this statement is as follows:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("TriggerName")]),t._v(" "),e("th",[t._v("Event")]),t._v(" "),e("th",[t._v("Type")]),t._v(" "),e("th",[t._v("State")]),t._v(" "),e("th",[t._v("PathPattern")]),t._v(" "),e("th",[t._v("ClassName")]),t._v(" "),e("th",[t._v("NodeId")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("triggerTest1")]),t._v(" "),e("td",[t._v("BEFORE_INSERT / AFTER_INSERT")]),t._v(" "),e("td",[t._v("STATELESS / STATEFUL")]),t._v(" "),e("td",[t._v("INACTIVE / ACTIVE / DROPPING / TRANSFFERING")]),t._v(" "),e("td",[t._v("root.**")]),t._v(" "),e("td",[t._v("org.apache.iotdb.trigger.TriggerExample")]),t._v(" "),e("td",[t._v("ALL(STATELESS) / DATA_NODE_ID(STATEFUL)")])])])]),t._v(" "),e("h2",{attrs:{id:"trigger-state"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#trigger-state"}},[t._v("#")]),t._v(" Trigger State")]),t._v(" "),e("p",[t._v("During the process of creating and dropping triggers in the cluster, we maintain the states of the triggers. The following is a description of these states:")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("State")]),t._v(" "),e("th",[t._v("Description")]),t._v(" "),e("th",[t._v("Is it recommended to insert data?")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("INACTIVE")]),t._v(" "),e("td",[t._v("The intermediate state of executing "),e("code",[t._v("CREATE TRIGGER")]),t._v(", the cluster has just recorded the trigger information on the ConfigNode, and the trigger has not been activated on any DataNode.")]),t._v(" "),e("td",[t._v("NO")])]),t._v(" "),e("tr",[e("td",[t._v("ACTIVE")]),t._v(" "),e("td",[t._v("Status after successful execution of "),e("code",[t._v("CREATE TRIGGE")]),t._v(", the trigger is available on all DataNodes in the cluster.")]),t._v(" "),e("td",[t._v("YES")])]),t._v(" "),e("tr",[e("td",[t._v("DROPPING")]),t._v(" "),e("td",[t._v("Intermediate state of executing "),e("code",[t._v("DROP TRIGGER")]),t._v(", the cluster is in the process of dropping the trigger.")]),t._v(" "),e("td",[t._v("NO")])]),t._v(" "),e("tr",[e("td",[t._v("TRANSFERRING")]),t._v(" "),e("td",[t._v("The cluster is migrating the location of this trigger instance.")]),t._v(" "),e("td",[t._v("NO")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);