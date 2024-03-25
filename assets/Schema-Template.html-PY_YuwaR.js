import{_ as e,o as t,c as a,a as n,f as o}from"./app-dXzqLio8.js";const i={},s=o('<h1 id="schema-template" tabindex="-1"><a class="header-anchor" href="#schema-template" aria-hidden="true">#</a> Schema Template</h1><h2 id="problem-scenario" tabindex="-1"><a class="header-anchor" href="#problem-scenario" aria-hidden="true">#</a> Problem scenario</h2><p>When faced with a large number of entities of the same type and the measurements of these entities are the same, registering time series for each measurent will result in the following problems. On the one hand, the metadata of time series will occupy a lot of memory resources; on the other hand, the maintenance of a large number of time series will be very complex.</p><p>In order to enable different entities of the same type to share metadata, reduce the memory usage of metadata, and simplify the management of numerous entities and measurements, IoTDB introduces the schema template function.</p><p>The following picture illustrates the data model of petrol vehicle scenario. The velocity, fuel amount, acceleration, and angular velocity of each petrol vehicle spread over cities will be collected. Obviously, the measurements of single petrol vehicle are the same as those of another.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Data-Concept/Measurement-Template/example_without_template.png?raw=true" alt="example without template"><h2 id="concept" tabindex="-1"><a class="header-anchor" href="#concept" aria-hidden="true">#</a> Concept</h2><p>Supported from v0.13</p><p>In the actual scenario, many entities collect the same measurements, that is, they have the same measurements name and type. A schema template can be declared to define the collectable measurements set. Schema template is hung on any node of the tree data pattern, which means that all entities under the node have the same measurements set.</p><p>Currently you can only set one schema template on a specific path. If there&#39;s one schema template on one node, it will be forbidden to set any schema template on the ancestors or descendants of this node. An entity will use it&#39;s own schema template or ancestor&#39;s schema template.</p><p><strong>Please notice that, we strongly recommend not setting templates on the nodes above the database to accommodate future updates and collaboration between modules.</strong></p><p>In the following chapters of data definition language, data operation language and Java Native Interface, various operations related to schema template will be introduced one by one.</p><p>After applying schema template, the following picture illustrates the new data model of petrol vehicle scenario. All petrol vehicles share the schemas defined in template. There are no redundancy storage of measurement schemas.</p><img style="width:100%;max-width:800px;max-height:600px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Data-Concept/Measurement-Template/example_with_template.png?raw=true" alt="example with template"><h3 id="lifetime-of-schema-template" tabindex="-1"><a class="header-anchor" href="#lifetime-of-schema-template" aria-hidden="true">#</a> Lifetime of Schema Template</h3><p>The term about lifetime of schema template may help you utilize it in a better way. Within this section, there are 6 key words specifying certain phase of schema template, namely CREATE, SET, ACTIVATE, DEACTIVATE, UNSET, and DROP. The figure below shows the process and related SQL examples for all these phases. When a user issues a statement mentioned above, there will be a check accordingly. The statement will be executed successfully if the check passed, refused otherwise.</p><ol><li>To CREATE a template, ensure that the template has a distinct name from all existed ones;</li><li>To SET a template on one node, ensure that all ancestors and descendants of the node has not been set any template yet;</li><li>To ACTIVATE a template on one node, ensure that the node or one of its ancestor had been set the template and no measurement child of the node entitled identical name as those inside the template;</li><li>To DEACTIVATE a template from one node, ensure that the node had been ACTIVATED before and note that timeseries instantiated from the template as well as its data points will be removed;</li><li>To UNSET a template on one node, ensure that the node had been SET the template previously and none of its descendants are being ACTIVATED of the template;</li><li>To DROP a template, ensure that the template is not SET to any nodes on the MTree now.</li></ol><p>It should be complemented that the distinction between SET and ACTIVATE is meant to serve an ubiquitous scenario where massive nodes with a common ancestor may need to apply the template. Under this circumstance, it is more feasible to SET the template on the common ancestor rather than all those descendant. For those who needs to apply the template, ACTIVATE is a more appropriate arrangement.</p><img style="width:100%;max-width:800px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Data-Concept/Measurement-Template/example_template_lifetime.png?raw=true" alt="example with template"><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><p>Java Native API, C++ Native API, and IoTDB-SQL have supported Schema Template usage.</p>',21);function r(l,h){return t(),a("div",null,[n(`

    Licensed to the Apache Software Foundation (ASF) under one
    or more contributor license agreements.  See the NOTICE file
    distributed with this work for additional information
    regarding copyright ownership.  The ASF licenses this file
    to you under the Apache License, Version 2.0 (the
    "License"); you may not use this file except in compliance
    with the License.  You may obtain a copy of the License at
    
        http://www.apache.org/licenses/LICENSE-2.0
    
    Unless required by applicable law or agreed to in writing,
    software distributed under the License is distributed on an
    "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, either express or implied.  See the License for the
    specific language governing permissions and limitations
    under the License.

`),s])}const c=e(i,[["render",r],["__file","Schema-Template.html.vue"]]);export{c as default};
