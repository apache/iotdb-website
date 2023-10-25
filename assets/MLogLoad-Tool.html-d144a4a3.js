import{_ as i,r as l,o as r,c as d,a as s,d as t,e,b as a,f as o}from"./app-9073a2e6.js";const c={},h=o('<h2 id="mlogload-tool" tabindex="-1"><a class="header-anchor" href="#mlogload-tool" aria-hidden="true">#</a> MLogLoad Tool</h2><h3 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h3><p>The MLogLoad tool is used to load the metadata from <code>mlog.bin</code> and tags and attributes from <code>tlog.txt</code> into the running IoTDB.<br> Metadata operation in <code>mlog.bin</code> will be replayed.<br> Metedata to be loaded that conflicts with metadata in the running IoTDB will be skipped.</p>',3),u=t("code",null,"mlog.bin",-1),p=t("code",null,"tlog.txt",-1),g={href:"https://iotdb.apache.org/UserGuide/V0.13.x/Maintenance-Tools/Export-Schema-Tool.html",target:"_blank",rel:"noopener noreferrer"},m=o(`<h3 id="how-to-use" tabindex="-1"><a class="header-anchor" href="#how-to-use" aria-hidden="true">#</a> How to Use</h3><p>Linux/MacOS</p><blockquote><p>./mLogLoad.sh -mlog /yourpath/mlog.bin -tlog /yourpath/tlog.txt -h 127.0.0.1 -p 6667 -u root -pw root</p></blockquote><p>Windows</p><blockquote><p>./mLogLoad.bat -mlog /yourpath/mlog.bin -tlog /yourpath/tlog.txt -h 127.0.0.1 -p 6667 -u root -pw root</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>usage: MLogLoad -mlog &lt;mlog file&gt; [-tlog &lt;tlog file&gt;] [-h &lt;receiver host&gt;]
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Note: If tlog is not specified, the MLogLoad tool will ignore tags and attributes management.</p><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><p>The purpose is to load the local metadata file <code>/yourpath/mlog.bin</code> into IoTDB instance running on server 192.168.0.101:6667.</p>`,9),b={href:"http://mLogLoad.sh",target:"_blank",rel:"noopener noreferrer"},f=o(`<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>./mLogLoad.sh -mlog &quot;/yourpath/mlog.bin&quot; -h 192.168.0.101 -p 6667 -u root -pw root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>After waiting for the script execution to complete, you can check that the metadata in the IoTDB instance has been loaded correctly.</p><h3 id="q-a" tabindex="-1"><a class="header-anchor" href="#q-a" aria-hidden="true">#</a> Q&amp;A</h3><ul><li>Cannot find or load the main class MLoadLoader <ul><li>It may be because the environment variable $IOTDB_HOME is not set, please set the environment variable and try again</li></ul></li></ul>`,4);function v(x,L){const n=l("ExternalLinkIcon");return r(),d("div",null,[s(`

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

`),h,t("p",null,[e("If there is already metadata in the running IoTDB, to avoid replaying the delete operation to affect the existing metadata, it needs to be loaded using "),u,e(" and "),p,e(" obtained from the "),t("a",g,[e("export metadata operation"),a(n)]),e(".")]),m,t("p",null,[e("Enter to the directory where "),t("a",b,[e("mLogLoad.sh"),a(n)]),e(" is located and execute the following statement:")]),f])}const w=i(c,[["render",v],["__file","MLogLoad-Tool.html.vue"]]);export{w as default};
