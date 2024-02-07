import{_ as e,o as n,c as o,a as t,f as i}from"./app-32WlL3ZZ.js";const r={},s=i('<h1 id="环境要求" tabindex="-1"><a class="header-anchor" href="#环境要求" aria-hidden="true">#</a> 环境要求</h1><p>要使用IoTDB，你需要具备以下条件：</p><ul><li>Java &gt;= 1.8</li></ul><blockquote><p>1.8, 11到17都是经过验证的。请确保环境路径已被相应设置。</p></blockquote><ul><li>Maven &gt;= 3.6</li></ul><blockquote><p>如果你想从源代码编译和安装IoTDB）。</p></blockquote><ul><li>设置最大打开文件数为65535，以避免出现 &quot;太多的打开文件 &quot;的错误。</li><li>(可选)将somaxconn设置为65535，以避免系统在高负载时出现 &quot;连接重置 &quot;错误。</li></ul><blockquote><p><strong># Linux</strong> <br><code>sudo sysctl -w net.core.somaxconn=65535</code> <br><strong># FreeBSD 或 Darwin</strong> <br><code>sudo sysctl -w kern.ipc.somaxconn=65535</code></p></blockquote>',8);function a(c,l){return n(),o("div",null,[t(`

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

`),s])}const d=e(r,[["render",a],["__file","Deployment-Preparation.html.vue"]]);export{d as default};
