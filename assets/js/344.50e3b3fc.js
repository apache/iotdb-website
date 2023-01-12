(window.webpackJsonp=window.webpackJsonp||[]).push([[344],{747:function(e,t,a){"use strict";a.r(t);var o=a(19),s=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"schema-template"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#schema-template"}},[e._v("#")]),e._v(" Schema Template")]),e._v(" "),t("h2",{attrs:{id:"problem-scenario"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#problem-scenario"}},[e._v("#")]),e._v(" Problem scenario")]),e._v(" "),t("p",[e._v("When faced with a large number of entities of the same type and the measurements of these entities are the same, registering time series for each measurent will result in the following problems. On the one hand, the metadata of time series will occupy a lot of memory resources; on the other hand, the maintenance of a large number of time series will be very complex.")]),e._v(" "),t("p",[e._v("In order to enable different entities of the same type to share metadata, reduce the memory usage of metadata, and simplify the management of numerous entities and measurements, IoTDB introduces the schema template function.")]),e._v(" "),t("p",[e._v("The following picture illustrates the data model of petrol vehicle scenario. The velocity, fuel amount, acceleration, and angular velocity of each petrol vehicle spread over cities will be collected. Obviously, the measurements of single petrol vehicle are the same as those of another.")]),e._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Data%20Concept/Measurement%20Template/example_without_template.png?raw=true",alt:"example without template"}}),e._v(" "),t("h2",{attrs:{id:"concepts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#concepts"}},[e._v("#")]),e._v(" Concepts")]),e._v(" "),t("p",[e._v("Supported from v0.13")]),e._v(" "),t("p",[e._v("In the actual scenario, many entities collect the same measurements, that is, they have the same measurements name and type. A schema template can be declared to define the collectable measurements set. Schema template is hung on any node of the tree data pattern, which means that all entities under the node have the same measurements set.")]),e._v(" "),t("p",[e._v("Currently you can only set one schema template on a specific path. If there's one schema template on one node, it will be forbidden to set any schema template on the ancestors or descendants of this node. An entity will use it's own schema template or ancestor's schema template.")]),e._v(" "),t("p",[e._v("When one node is using the template had been set on to it or its ancestor, it is compulsory to deactivate template on this node before to unset or drop it. Deactivate the template on one node will delete data of the timeseries which is presented by the combination of path of the node and measurements inside the template.")]),e._v(" "),t("p",[t("strong",[e._v("Please notice that, we strongly recommend not setting templates on the nodes above the storage group to accommodate future updates and collaboration between modules.")])]),e._v(" "),t("p",[e._v("In the following chapters of data definition language, data operation language and Java Native Interface, various operations related to schema template will be introduced one by one.")]),e._v(" "),t("p",[e._v("After applying schema template, the following picture illustrates the new data model of petrol vehicle scenario. All petrol vehicles share the schemas defined in template. There are no redundancy storage of measurement schemas.")]),e._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Data%20Concept/Measurement%20Template/example_with_template.png?raw=true",alt:"example with template"}}),e._v(" "),t("h3",{attrs:{id:"lifetime-of-schema-template"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#lifetime-of-schema-template"}},[e._v("#")]),e._v(" Lifetime of Schema Template")]),e._v(" "),t("p",[e._v("The term about lifetime of schema template may help you utilize it in a better way.   Within this section, there are 6 key words specifying certain phase of schema template, namely CREATE, SET, ACTIVATE, DEACTIVATE, UNSET, and DROP.   The figure below shows the process and related SQL examples for all these phases.   When a user issues a statement mentioned above, there will be a check accordingly.   The statement will be executed successfully if the check passed, refused otherwise.")]),e._v(" "),t("ol",[t("li",[e._v("To CREATE a template, ensure that the template has a distinct name from all existed ones;")]),e._v(" "),t("li",[e._v("To SET a template on one node, ensure that all ancestors and descendants of the node has not been set any template yet;")]),e._v(" "),t("li",[e._v("To ACTIVATE a template on one node, ensure that the node or one of its ancestor had been set the template and no measurement child of the node entitled identical name as those inside the template;")]),e._v(" "),t("li",[e._v("To DEACTIVATE a template from one node, ensure that the node had been ACTIVATED before and note that timeseries instantiated from the template as well as its data points will be removed;")]),e._v(" "),t("li",[e._v("To UNSET a template on one node, ensure that the node had been SET the template previously and none of its descendants are being ACTIVATED of the template;")]),e._v(" "),t("li",[e._v("To DROP a template, ensure that the template is not SET to any nodes on the MTree now.")])]),e._v(" "),t("p",[e._v("It should be complemented that the distinction between SET and ACTIVATE is meant to serve an ubiquitous scenario where massive nodes with a common ancestor may need to apply the template. Under this circumstance, it is more feasible to SET the template on the common ancestor rather than all those descendant.    For those who needs to apply the template, ACTIVATE is a more appropriate arrangement.")]),e._v(" "),t("img",{staticStyle:{width:"100%","max-width":"800px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://github.com/apache/iotdb-bin-resources/blob/main/docs/UserGuide/Data%20Concept/Measurement%20Template/example_template_lifetime.png?raw=true",alt:"example with template"}}),e._v(" "),t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("p",[e._v("Java Native API, C++ Native API, and IoTDB-SQL have supported Schema Template usage.")])])}),[],!1,null,null,null);t.default=s.exports}}]);