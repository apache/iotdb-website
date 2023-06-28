import{_ as a,C as l,O as r,P as s,ah as d,Q as t,U as e,ai as n,aW as i}from"./framework-47c785f1.js";const c={},h=t("h2",{id:"mlogload-tool",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#mlogload-tool","aria-hidden":"true"},"#"),e(" MLogLoad Tool")],-1),u=t("h3",{id:"introduction",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#introduction","aria-hidden":"true"},"#"),e(" Introduction")],-1),p=t("p",null,[e("The MLogLoad tool is used to load the metadata from "),t("code",null,"mlog.bin"),e(" and tags and attributes from "),t("code",null,"tlog.txt"),e(" into the running IoTDB. Metadata operation in "),t("code",null,"mlog.bin"),e(" will be replayed. Metedata to be loaded that conflicts with metadata in the running IoTDB will be skipped.")],-1),g=t("code",null,"mlog.bin",-1),m=t("code",null,"tlog.txt",-1),b={href:"https://iotdb.apache.org/UserGuide/V0.13.x/Maintenance-Tools/Export-Schema-Tool.html",target:"_blank",rel:"noopener noreferrer"},f=i(`<h3 id="how-to-use" tabindex="-1"><a class="header-anchor" href="#how-to-use" aria-hidden="true">#</a> How to Use</h3><p>Linux/MacOS</p><blockquote><p>./mLogLoad.sh -mlog /yourpath/mlog.bin -tlog /yourpath/tlog.txt -h 127.0.0.1 -p 6667 -u root -pw root</p></blockquote><p>Windows</p><blockquote><p>./mLogLoad.bat -mlog /yourpath/mlog.bin -tlog /yourpath/tlog.txt -h 127.0.0.1 -p 6667 -u root -pw root</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>usage: MLogLoad -mlog &lt;mlog file&gt; [-tlog &lt;tlog file&gt;] [-h &lt;receiver host&gt;]
       [-p &lt;receiver port&gt;] [-u &lt;user&gt;] [-pw &lt;password&gt;] [-help]
 -mlog &lt;mlog file&gt;    Need to specify a binary mlog.bin file to parse
                      (required)
 -tlog &lt;tlog file&gt;    Could specify a binary tlog.txt file to parse. Tags
                      and attributes will be ignored if not specified
                      (optional)
 -h &lt;receiver host&gt;   Could specify a specify the receiver host, default
                      is 127.0.0.1 (optional)
 -p &lt;receiver port&gt;   Could specify a specify the receiver port, default
                      is 6667 (optional)
 -u &lt;user&gt;            Could specify the user name, default is root
                      (optional)
 -pw &lt;password&gt;       Could specify the password, default is root
                      (optional)
 -help,--help         Display help information
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note: If tlog is not specified, the MLogLoad tool will ignore tags and attributes management.</p><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><p>The purpose is to load the local metadata file <code>/yourpath/mlog.bin</code> into IoTDB instance running on server 192.168.0.101:6667.</p>`,9),v={href:"http://mLogLoad.sh",target:"_blank",rel:"noopener noreferrer"},x=i(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./mLogLoad.sh -mlog &quot;/yourpath/mlog.bin&quot; -h 192.168.0.101 -p 6667 -u root -pw root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After waiting for the script execution to complete, you can check that the metadata in the IoTDB instance has been loaded correctly.</p><h3 id="q-a" tabindex="-1"><a class="header-anchor" href="#q-a" aria-hidden="true">#</a> Q&amp;A</h3><ul><li>Cannot find or load the main class MLoadLoader <ul><li>It may be because the environment variable $IOTDB_HOME is not set, please set the environment variable and try again</li></ul></li></ul>`,4);function L(_,y){const o=l("ExternalLinkIcon");return r(),s("div",null,[d(`

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

`),h,u,p,t("p",null,[e("If there is already metadata in the running IoTDB, to avoid replaying the delete operation to affect the existing metadata, it needs to be loaded using "),g,e(" and "),m,e(" obtained from the "),t("a",b,[e("export metadata operation"),n(o)]),e(".")]),f,t("p",null,[e("Enter to the directory where "),t("a",v,[e("mLogLoad.sh"),n(o)]),e(" is located and execute the following statement:")]),x])}const I=a(c,[["render",L],["__file","MLogLoad-Tool.html.vue"]]);export{I as default};