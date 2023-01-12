(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{565:function(e,t,r){"use strict";r.r(t);var i=r(19),s=Object(i.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"notes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#notes"}},[e._v("#")]),e._v(" Notes")]),e._v(" "),t("ul",[t("li",[e._v("The trigger takes effect from the time of registration, and does not process the existing historical data. **That is, only insertion requests that occur after the trigger is successfully registered will be listened to by the trigger. **")]),e._v(" "),t("li",[e._v("The fire process of trigger is synchronous currently, so you need to ensure the efficiency of the trigger, otherwise the writing performance may be greatly affected. "),t("strong",[e._v("You need to guarantee concurrency safety of triggers yourself")]),e._v(".")]),e._v(" "),t("li",[e._v("Please do no register too many triggers in the cluster. Because the trigger information is fully stored in the ConfigNode, and there is a copy of the information in all DataNodes")]),e._v(" "),t("li",[t("strong",[e._v("It is recommended to stop writing when registering triggers")]),e._v(". Registering a trigger is not an atomic operation. When registering a trigger, there will be an intermediate state in which some nodes in the cluster have registered the trigger, and some nodes have not yet registered successfully. To avoid write requests on some nodes being listened to by triggers and not being listened to on some nodes, we recommend not to perform writes when registering triggers.")]),e._v(" "),t("li",[e._v("When the node holding the stateful trigger instance goes down, we will try to restore the corresponding instance on another node. During the recovery process, we will call the restore interface of the trigger class once.")]),e._v(" "),t("li",[e._v("The trigger JAR package has a size limit, which must be less than min("),t("code",[e._v("config_node_ratis_log_appender_buffer_size_max")]),e._v(", 2G), where "),t("code",[e._v("config_node_ratis_log_appender_buffer_size_max")]),e._v(" is a configuration item. For the specific meaning, please refer to the IOTDB configuration item description.")]),e._v(" "),t("li",[t("strong",[e._v("It is better not to have classes with the same full class name but different function implementations in different JAR packages.")]),e._v(" For example, trigger1 and trigger2 correspond to resources trigger1.jar and trigger2.jar respectively. If two JAR packages contain a "),t("code",[e._v("org.apache.iotdb.trigger.example.AlertListener")]),e._v(" class, when "),t("code",[e._v("CREATE TRIGGER")]),e._v(" uses this class, the system will randomly load the class in one of the JAR packages, which will eventually leads the inconsistent behavior of trigger and other issues.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);