import{_ as e,o as n,c as t,a as o,f as i}from"./app-u0F7ej3R.js";const r={},a=i('<h1 id="environmental-requirement" tabindex="-1"><a class="header-anchor" href="#environmental-requirement" aria-hidden="true">#</a> Environmental Requirement</h1><p>To use IoTDB, you need to have:</p><ul><li>Java &gt;= 1.8 (1.8, 11 to 17 have been verified. Please make sure the environment path has been set.)</li><li>Maven &gt;= 3.6 (if you want to install IoTDB by compiling the source code)</li><li>Set the max open files num as 65535 to avoid &quot;too many open files&quot; problem.</li><li>(Optional) Set the somaxconn as 65535 to avoid &quot;connection reset&quot; error when the system is under high load.</li></ul><blockquote><p><strong># Linux</strong> <br><code>sudo sysctl -w net.core.somaxconn=65535</code> <br><strong># FreeBSD 或 Darwin</strong> <br><code>sudo sysctl -w kern.ipc.somaxconn=65535</code></p></blockquote>',4);function s(c,l){return n(),t("div",null,[o(`

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

`),a])}const d=e(r,[["render",s],["__file","Environmental-Requirement.html.vue"]]);export{d as default};
