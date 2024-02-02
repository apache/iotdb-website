import{_ as r,r as s,o as i,c,a as o,d as a,e as t,b as n,w as d,f as l}from"./app-a-RiV1so.js";const y={},g=l('<h1 id="data-type" tabindex="-1"><a class="header-anchor" href="#data-type" aria-hidden="true">#</a> Data Type</h1><h2 id="basic-data-type" tabindex="-1"><a class="header-anchor" href="#basic-data-type" aria-hidden="true">#</a> Basic Data Type</h2><p>IoTDB supports the following data types:</p><ul><li>BOOLEAN (Boolean)</li><li>INT32 (Integer)</li><li>INT64 (Long Integer)</li><li>FLOAT (Single Precision Floating Point)</li><li>DOUBLE (Double Precision Floating Point)</li><li>TEXT (String)</li></ul><h3 id="float-precision" tabindex="-1"><a class="header-anchor" href="#float-precision" aria-hidden="true">#</a> Float Precision</h3>',5),x=a("strong",null,"FLOAT",-1),h=a("strong",null,"DOUBLE",-1),m=a("code",null,"iotdb-common.properties",-1),p=l(`<div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> TIMESERIES root<span class="token punctuation">.</span>vehicle<span class="token punctuation">.</span>d0<span class="token punctuation">.</span>s0 <span class="token keyword">WITH</span> DATATYPE<span class="token operator">=</span><span class="token keyword">FLOAT</span><span class="token punctuation">,</span> ENCODING<span class="token operator">=</span>RLE<span class="token punctuation">,</span> <span class="token string">&#39;MAX_POINT_NUMBER&#39;</span><span class="token operator">=</span><span class="token string">&#39;2&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>For Float data value, The data range is (-Integer.MAX_VALUE, Integer.MAX_VALUE), rather than Float.MAX_VALUE, and the max_point_number is 19, caused by the limition of function Math.round(float) in Java.</li><li>For Double data value, The data range is (-Long.MAX_VALUE, Long.MAX_VALUE), rather than Double.MAX_VALUE, and the max_point_number is 19, caused by the limition of function Math.round(double) in Java (Long.MAX_VALUE=9.22E18).</li></ul><h3 id="data-type-compatibility" tabindex="-1"><a class="header-anchor" href="#data-type-compatibility" aria-hidden="true">#</a> Data Type Compatibility</h3><p>When the written data type is inconsistent with the data type of time-series,</p><ul><li>If the data type of time-series is not compatible with the written data type, the system will give an error message.</li><li>If the data type of time-series is compatible with the written data type, the system will automatically convert the data type.</li></ul><p>The compatibility of each data type is shown in the following table:</p><table><thead><tr><th>Series Data Type</th><th>Supported Written Data Types</th></tr></thead><tbody><tr><td>BOOLEAN</td><td>BOOLEAN</td></tr><tr><td>INT32</td><td>INT32</td></tr><tr><td>INT64</td><td>INT32 INT64</td></tr><tr><td>FLOAT</td><td>INT32 FLOAT</td></tr><tr><td>DOUBLE</td><td>INT32 INT64 FLOAT DOUBLE</td></tr><tr><td>TEXT</td><td>TEXT</td></tr></tbody></table><h2 id="timestamp" tabindex="-1"><a class="header-anchor" href="#timestamp" aria-hidden="true">#</a> Timestamp</h2><p>The timestamp is the time point at which data is produced. It includes absolute timestamps and relative timestamps</p><h3 id="absolute-timestamp" tabindex="-1"><a class="header-anchor" href="#absolute-timestamp" aria-hidden="true">#</a> Absolute timestamp</h3><p>Absolute timestamps in IoTDB are divided into two types: LONG and DATETIME (including DATETIME-INPUT and DATETIME-DISPLAY). When a user inputs a timestamp, he can use a LONG type timestamp or a DATETIME-INPUT type timestamp, and the supported formats of the DATETIME-INPUT type timestamp are shown in the table below:</p><div style="text-align:center;"><p><strong>Supported formats of DATETIME-INPUT type timestamp</strong></p><table><thead><tr><th style="text-align:center;">Format</th></tr></thead><tbody><tr><td style="text-align:center;">yyyy-MM-dd HH:mm:ss</td></tr><tr><td style="text-align:center;">yyyy/MM/dd HH:mm:ss</td></tr><tr><td style="text-align:center;">yyyy.MM.dd HH:mm:ss</td></tr><tr><td style="text-align:center;">yyyy-MM-dd HH:mm:ssZZ</td></tr><tr><td style="text-align:center;">yyyy/MM/dd HH:mm:ssZZ</td></tr><tr><td style="text-align:center;">yyyy.MM.dd HH:mm:ssZZ</td></tr><tr><td style="text-align:center;">yyyy/MM/dd HH:mm:ss.SSS</td></tr><tr><td style="text-align:center;">yyyy-MM-dd HH:mm:ss.SSS</td></tr><tr><td style="text-align:center;">yyyy.MM.dd HH:mm:ss.SSS</td></tr><tr><td style="text-align:center;">yyyy-MM-dd HH:mm:ss.SSSZZ</td></tr><tr><td style="text-align:center;">yyyy/MM/dd HH:mm:ss.SSSZZ</td></tr><tr><td style="text-align:center;">yyyy.MM.dd HH:mm:ss.SSSZZ</td></tr><tr><td style="text-align:center;">ISO8601 standard time format</td></tr></tbody></table></div><p>IoTDB can support LONG types and DATETIME-DISPLAY types when displaying timestamps. The DATETIME-DISPLAY type can support user-defined time formats. The syntax of the custom time format is shown in the table below:</p><div style="text-align:center;"><p><strong>The syntax of the custom time format</strong></p><table><thead><tr><th style="text-align:center;">Symbol</th><th style="text-align:center;">Meaning</th><th style="text-align:center;">Presentation</th><th style="text-align:center;">Examples</th></tr></thead><tbody><tr><td style="text-align:center;">G</td><td style="text-align:center;">era</td><td style="text-align:center;">era</td><td style="text-align:center;">era</td></tr><tr><td style="text-align:center;">C</td><td style="text-align:center;">century of era (&gt;=0)</td><td style="text-align:center;">number</td><td style="text-align:center;">20</td></tr><tr><td style="text-align:center;">Y</td><td style="text-align:center;">year of era (&gt;=0)</td><td style="text-align:center;">year</td><td style="text-align:center;">1996</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">x</td><td style="text-align:center;">weekyear</td><td style="text-align:center;">year</td><td style="text-align:center;">1996</td></tr><tr><td style="text-align:center;">w</td><td style="text-align:center;">week of weekyear</td><td style="text-align:center;">number</td><td style="text-align:center;">27</td></tr><tr><td style="text-align:center;">e</td><td style="text-align:center;">day of week</td><td style="text-align:center;">number</td><td style="text-align:center;">2</td></tr><tr><td style="text-align:center;">E</td><td style="text-align:center;">day of week</td><td style="text-align:center;">text</td><td style="text-align:center;">Tuesday; Tue</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">y</td><td style="text-align:center;">year</td><td style="text-align:center;">year</td><td style="text-align:center;">1996</td></tr><tr><td style="text-align:center;">D</td><td style="text-align:center;">day of year</td><td style="text-align:center;">number</td><td style="text-align:center;">189</td></tr><tr><td style="text-align:center;">M</td><td style="text-align:center;">month of year</td><td style="text-align:center;">month</td><td style="text-align:center;">July; Jul; 07</td></tr><tr><td style="text-align:center;">d</td><td style="text-align:center;">day of month</td><td style="text-align:center;">number</td><td style="text-align:center;">10</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">a</td><td style="text-align:center;">halfday of day</td><td style="text-align:center;">text</td><td style="text-align:center;">PM</td></tr><tr><td style="text-align:center;">K</td><td style="text-align:center;">hour of halfday (0~11)</td><td style="text-align:center;">number</td><td style="text-align:center;">0</td></tr><tr><td style="text-align:center;">h</td><td style="text-align:center;">clockhour of halfday (1~12)</td><td style="text-align:center;">number</td><td style="text-align:center;">12</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">H</td><td style="text-align:center;">hour of day (0~23)</td><td style="text-align:center;">number</td><td style="text-align:center;">0</td></tr><tr><td style="text-align:center;">k</td><td style="text-align:center;">clockhour of day (1~24)</td><td style="text-align:center;">number</td><td style="text-align:center;">24</td></tr><tr><td style="text-align:center;">m</td><td style="text-align:center;">minute of hour</td><td style="text-align:center;">number</td><td style="text-align:center;">30</td></tr><tr><td style="text-align:center;">s</td><td style="text-align:center;">second of minute</td><td style="text-align:center;">number</td><td style="text-align:center;">55</td></tr><tr><td style="text-align:center;">S</td><td style="text-align:center;">fraction of second</td><td style="text-align:center;">millis</td><td style="text-align:center;">978</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">z</td><td style="text-align:center;">time zone</td><td style="text-align:center;">text</td><td style="text-align:center;">Pacific Standard Time; PST</td></tr><tr><td style="text-align:center;">Z</td><td style="text-align:center;">time zone offset/id</td><td style="text-align:center;">zone</td><td style="text-align:center;">-0800; -08:00; America/Los_Angeles</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">&#39;</td><td style="text-align:center;">escape for text</td><td style="text-align:center;">delimiter</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">&#39;&#39;</td><td style="text-align:center;">single quote</td><td style="text-align:center;">literal</td><td style="text-align:center;">&#39;</td></tr></tbody></table></div><h3 id="relative-timestamp" tabindex="-1"><a class="header-anchor" href="#relative-timestamp" aria-hidden="true">#</a> Relative timestamp</h3><p>Relative time refers to the time relative to the server time <code>now()</code> and <code>DATETIME</code> time.</p><p>Syntax:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> Duration = (Digit+ (&#39;Y&#39;|&#39;MO&#39;|&#39;W&#39;|&#39;D&#39;|&#39;H&#39;|&#39;M&#39;|&#39;S&#39;|&#39;MS&#39;|&#39;US&#39;|&#39;NS&#39;))+
 RelativeTime = (now() | DATETIME) ((+|-) Duration)+
       
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),u=l(`<div style="text-align:center;"><p><strong>The syntax of the duration unit</strong></p><table><thead><tr><th style="text-align:center;">Symbol</th><th style="text-align:center;">Meaning</th><th style="text-align:center;">Presentation</th><th style="text-align:center;">Examples</th></tr></thead><tbody><tr><td style="text-align:center;">y</td><td style="text-align:center;">year</td><td style="text-align:center;">1y=365 days</td><td style="text-align:center;">1y</td></tr><tr><td style="text-align:center;">mo</td><td style="text-align:center;">month</td><td style="text-align:center;">1mo=30 days</td><td style="text-align:center;">1mo</td></tr><tr><td style="text-align:center;">w</td><td style="text-align:center;">week</td><td style="text-align:center;">1w=7 days</td><td style="text-align:center;">1w</td></tr><tr><td style="text-align:center;">d</td><td style="text-align:center;">day</td><td style="text-align:center;">1d=1 day</td><td style="text-align:center;">1d</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">h</td><td style="text-align:center;">hour</td><td style="text-align:center;">1h=3600 seconds</td><td style="text-align:center;">1h</td></tr><tr><td style="text-align:center;">m</td><td style="text-align:center;">minute</td><td style="text-align:center;">1m=60 seconds</td><td style="text-align:center;">1m</td></tr><tr><td style="text-align:center;">s</td><td style="text-align:center;">second</td><td style="text-align:center;">1s=1 second</td><td style="text-align:center;">1s</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">ms</td><td style="text-align:center;">millisecond</td><td style="text-align:center;">1ms=1000_000 nanoseconds</td><td style="text-align:center;">1ms</td></tr><tr><td style="text-align:center;">us</td><td style="text-align:center;">microsecond</td><td style="text-align:center;">1us=1000 nanoseconds</td><td style="text-align:center;">1us</td></tr><tr><td style="text-align:center;">ns</td><td style="text-align:center;">nanosecond</td><td style="text-align:center;">1ns=1 nanosecond</td><td style="text-align:center;">1ns</td></tr></tbody></table></div><p>eg：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>now() - 1d2h //1 day and 2 hours earlier than the current server time
now() - 1w //1 week earlier than the current server time
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Note：There must be spaces on the left and right of &#39;+&#39; and &#39;-&#39;.</p></blockquote>`,4);function f(b,T){const e=s("RouterLink");return i(),c("div",null,[o(`

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

`),g,a("p",null,[t("The time series of "),x,t(" and "),h,t(" type can specify (MAX_POINT_NUMBER, see "),n(e,{to:"/UserGuide/Master/Reference/SQL-Reference.html"},{default:d(()=>[t("this page")]),_:1}),t(" for more information on how to specify), which is the number of digits after the decimal point of the floating point number, if the encoding method is "),n(e,{to:"/UserGuide/Master/Basic-Concept/Encoding-and-Compression.html"},{default:d(()=>[t("RLE")]),_:1}),t(" or "),n(e,{to:"/UserGuide/Master/Basic-Concept/Encoding-and-Compression.html"},{default:d(()=>[t("TS_2DIFF")]),_:1}),t(". If MAX_POINT_NUMBER is not specified, the system will use "),n(e,{to:"/UserGuide/Master/Reference/DataNode-Config-Manual.html"},{default:d(()=>[t("float_precision")]),_:1}),t(" in the configuration file "),m,t(".")]),p,t(),u])}const E=r(y,[["render",f],["__file","Data-Type.html.vue"]]);export{E as default};
