import{_ as e,o as t,c as r,a as i,f as n}from"./app-875b9975.js";const a={},s=n('<h1 id="instructions" tabindex="-1"><a class="header-anchor" href="#instructions" aria-hidden="true">#</a> Instructions</h1><p>The trigger provides a mechanism for listening to changes in time series data. With user-defined logic, tasks such as alerting and data forwarding can be conducted.</p><p>The trigger is implemented based on the reflection mechanism. Users can monitor data changes by implementing the Java interfaces. IoTDB allows users to dynamically register and drop triggers without restarting the server.</p><p>The document will help you learn to define and manage triggers.</p><h2 id="pattern-for-listening" tabindex="-1"><a class="header-anchor" href="#pattern-for-listening" aria-hidden="true">#</a> Pattern for listening</h2><p>A single trigger can be used to listen for data changes in a time series that match a specific pattern. For example, a trigger can listen for the data changes of time series <code>root.sg.a</code>, or time series that match the pattern <code>root.sg.*</code>. When you register a trigger, you can specify the path pattern that the trigger listens on through an SQL statement.</p><h2 id="trigger-type" tabindex="-1"><a class="header-anchor" href="#trigger-type" aria-hidden="true">#</a> Trigger Type</h2><p>There are currently two types of triggers, and you can specify the type through an SQL statement when registering a trigger:</p><ul><li>Stateful triggers: The execution logic of this type of trigger may depend on data from multiple insertion statement . The framework will aggregate the data written by different nodes into the same trigger instance for calculation to retain context information. This type of trigger is usually used for sampling or statistical data aggregation for a period of time. information. Only one node in the cluster holds an instance of a stateful trigger.</li><li>Stateless triggers: The execution logic of the trigger is only related to the current input data. The framework does not need to aggregate the data of different nodes into the same trigger instance. This type of trigger is usually used for calculation of single row data and abnormal detection. Each node in the cluster holds an instance of a stateless trigger.</li></ul><h2 id="trigger-event" tabindex="-1"><a class="header-anchor" href="#trigger-event" aria-hidden="true">#</a> Trigger Event</h2><p>There are currently two trigger events for the trigger, and other trigger events will be expanded in the future. When you register a trigger, you can specify the trigger event through an SQL statement:</p><ul><li>BEFORE INSERT: Fires before the data is persisted. <strong>Please note that currently the trigger does not support data cleaning and will not change the data to be persisted itself.</strong></li><li>AFTER INSERT: Fires after the data is persisted.</li></ul>',12);function o(g,h){return t(),r("div",null,[i(`

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

`),s])}const d=e(a,[["render",o],["__file","Instructions.html.vue"]]);export{d as default};
