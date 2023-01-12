(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{555:function(e,t,r){"use strict";r.r(t);var a=r(19),i=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"instructions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#instructions"}},[e._v("#")]),e._v(" Instructions")]),e._v(" "),t("p",[e._v("The trigger provides a mechanism for listening to changes in time series data. With user-defined logic, tasks such as alerting and data forwarding can be conducted.")]),e._v(" "),t("p",[e._v("The trigger is implemented based on the reflection mechanism. Users can monitor data changes by implementing the Java interfaces. IoTDB allows users to dynamically register and drop triggers without restarting the server.")]),e._v(" "),t("p",[e._v("The document will help you learn to define and manage triggers.")]),e._v(" "),t("h2",{attrs:{id:"pattern-for-listening"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pattern-for-listening"}},[e._v("#")]),e._v(" Pattern for listening")]),e._v(" "),t("p",[e._v("A single trigger can be used to listen for data changes in a time series that match a specific pattern. For example, a trigger can listen for the data changes of time series "),t("code",[e._v("root.sg.a")]),e._v(", or time series that match the pattern "),t("code",[e._v("root.sg.*")]),e._v(". When you register a trigger, you can specify the path pattern that the trigger listens on through an SQL statement.")]),e._v(" "),t("h2",{attrs:{id:"trigger-type"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#trigger-type"}},[e._v("#")]),e._v(" Trigger Type")]),e._v(" "),t("p",[e._v("There are currently two types of triggers, and you can specify the type through an SQL statement when registering a trigger:")]),e._v(" "),t("ul",[t("li",[e._v("Stateful triggers: The execution logic of this type of trigger may depend on data from multiple insertion statement . The framework will aggregate the data written by different nodes into the same trigger instance for calculation to retain context information. This type of trigger is usually used for sampling or statistical data aggregation for a period of time. information. Only one node in the cluster holds an instance of a stateful trigger.")]),e._v(" "),t("li",[e._v("Stateless triggers: The execution logic of the trigger is only related to the current input data. The framework does not need to aggregate the data of different nodes into the same trigger instance. This type of trigger is usually used for calculation of single row data and abnormal detection. Each node in the cluster holds an instance of a stateless trigger.")])]),e._v(" "),t("h2",{attrs:{id:"trigger-event"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#trigger-event"}},[e._v("#")]),e._v(" Trigger Event")]),e._v(" "),t("p",[e._v("There are currently two trigger events for the trigger, and other trigger events will be expanded in the future. When you register a trigger, you can specify the trigger event through an SQL statement:")]),e._v(" "),t("ul",[t("li",[e._v("BEFORE INSERT: Fires before the data is persisted. "),t("strong",[e._v("Please note that currently the trigger does not support data cleaning and will not change the data to be persisted itself.")])]),e._v(" "),t("li",[e._v("AFTER INSERT: Fires after the data is persisted.")])])])}),[],!1,null,null,null);t.default=i.exports}}]);