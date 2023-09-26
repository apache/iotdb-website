import{_ as i,r as a,o,c as r,a as d,d as t,e,b as s,f as l}from"./app-342a215c.js";const h={},u=t("h1",{id:"_0-10-x-0-11-x-version-2-0-12-x-0-13-x-version-3",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_0-10-x-0-11-x-version-2-0-12-x-0-13-x-version-3","aria-hidden":"true"},"#"),e(" 0.10.x/0.11.x (version-2) -> 0.12.x/0.13.x (version-3)")],-1),c=t("thead",null,[t("tr",null,[t("th",null,"PR#"),t("th",null,"Name"),t("th",null,"Author"),t("th",null,"Changes")])],-1),m=t("tr",null,[t("td",null,"2263"),t("td",null,"Move memtable plan index from ChunkGroupFooter to a separate marker"),t("td",null,"jt2594838"),t("td",null,"Add min/max plan index after MetaMarker.OPERATION_INDEX_RANGE when a memtable is flush")],-1),f=t("td",null,"2184",-1),b=t("td",null,"[IOTDB-1081] New TsFile Format",-1),v=t("td",null,"JackieTien97",-1),T={href:"https://cwiki.apache.org/confluence/display/IOTDB/New+TsFile+Format",target:"_blank",rel:"noopener noreferrer"},_=t("tr",null,[t("td",null,"2445"),t("td",null,"Remove versionInfo in Tsfile and get rid of versions in memtable"),t("td",null,"wshao08"),t("td",null,"Delete version info in TsFile")],-1),p=l('<h1 id="_0-9-x-version-1-0-10-x-version-2" tabindex="-1"><a class="header-anchor" href="#_0-9-x-version-1-0-10-x-version-2" aria-hidden="true">#</a> 0.9.x (version-1) -&gt; 0.10.x (version-2)</h1><p>Last Updated on 2019-11-28 by Jialin Qiao.</p><table><thead><tr><th>PR#</th><th>Name</th><th>Author</th><th>Changes</th></tr></thead><tbody><tr><td>553</td><td>[IOTDB-279] Merge TsDigest into Statistics</td><td>jack870131</td><td>Merge the function of TsDigest into Statistics class, which TsDisgest is the ByteBuffer format of Statistics</td></tr><tr><td>587</td><td>[IOTDB-325] Refactor Statistics</td><td>qiaojialin</td><td>Move start time, end time, count in PageHeader and ChunkMetadata into Statistics; Remove maxTombstoneTime in ChunkHeader</td></tr><tr><td>855</td><td>[IOTDB-587] New TsFile version 2</td><td>HTHou</td><td>Remove ChunkGroupMetadata, store ChunkMetadata list by series, Add TimeseriesMetadata for each series</td></tr><tr><td>1024</td><td>[IOTDB-585] Fix recover version bug</td><td>qiaojialin</td><td>Add MetaMarker.VERSION and version behind each flushing memtable (flushAllChunkGroups)</td></tr><tr><td>1047</td><td>[IOTDB-593] Add metaOffset in TsFileMetadata</td><td>qiaojialin</td><td>Add metaOffset in TsFileMetadata</td></tr><tr><td>1100</td><td>[IOTDB-605] Add more levels of index in TsFileMetadata</td><td>sunzesong</td><td>Update the structure of deviceMetadata to a tree-level indexed TsFileMetadata</td></tr></tbody></table><h1 id="_0-8-0-0-9-x-version-1" tabindex="-1"><a class="header-anchor" href="#_0-8-0-0-9-x-version-1" aria-hidden="true">#</a> 0.8.0 -&gt; 0.9.x (version-1)</h1><p>Last Updated on 2019-10-27 by Lei Rui.</p><table><thead><tr><th>PR#</th><th>Name</th><th>Author</th><th>Changes</th></tr></thead><tbody><tr><td>258</td><td>[IOTDB-143]Development of merge</td><td>jt2594838</td><td>Add totalChunkNum and invalidChunkNum to TsFileMetaData.</td></tr><tr><td>409</td><td>[IOTDB-165][TsFile] Delete a current version and add a number version and an exception.</td><td>Genius_pig</td><td>(1) Delete a current version in TsFileMetaData; <br>(2) Change the TsFile magic number from 12 bytes to: 6 bytes magic string (&quot;TsFile&quot;) + 6 bytes version number ({&quot;000001&quot;, &quot;000002&quot;, &quot;&quot;000003&quot;}) (&quot;v0.8.0&quot; is the first version (we treat it as &quot;000000&quot;));<br>(3) The tail of a TsFile only has &quot;TsFile&quot; magic string, without the version number.</td></tr><tr><td>466</td><td>[IOTDB-208] Bloom filter</td><td>SilverNarcissus</td><td>Add four fields for the bloom filter to TsFileMetaData: 1) bit vector byte array length, 2) bit vector byte array, 3) the number of bits, 4) the number of hash functions.</td></tr></tbody></table>',6);function x(g,I){const n=a("ExternalLinkIcon");return o(),r("div",null,[d(`

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

`),u,t("table",null,[c,t("tbody",null,[m,t("tr",null,[f,b,v,t("td",null,[e("Please see "),t("a",T,[e("details"),s(n)])])]),_])]),p])}const N=i(h,[["render",x],["__file","format-changelist.html.vue"]]);export{N as default};
