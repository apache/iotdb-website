(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{496:function(t,e,v){"use strict";v.r(e);var a=v(19),i=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_0-10-x-0-11-x-version-2-0-12-x-0-13-x-version-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0-10-x-0-11-x-version-2-0-12-x-0-13-x-version-3"}},[t._v("#")]),t._v(" 0.10.x/0.11.x (version-2) -> 0.12.x/0.13.x (version-3)")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("PR#")]),t._v(" "),e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Author")]),t._v(" "),e("th",[t._v("Changes")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("2263")]),t._v(" "),e("td",[t._v("Move memtable plan index from ChunkGroupFooter to a separate marker")]),t._v(" "),e("td",[t._v("jt2594838")]),t._v(" "),e("td",[t._v("Add min/max plan index after MetaMarker.OPERATION_INDEX_RANGE when a memtable is flush")])]),t._v(" "),e("tr",[e("td",[t._v("2184")]),t._v(" "),e("td",[t._v("[IOTDB-1081] New TsFile Format")]),t._v(" "),e("td",[t._v("JackieTien97")]),t._v(" "),e("td",[t._v("Please see "),e("a",{attrs:{href:"https://cwiki.apache.org/confluence/display/IOTDB/New+TsFile+Format",target:"_blank",rel:"noopener noreferrer"}},[t._v("details"),e("OutboundLink")],1)])]),t._v(" "),e("tr",[e("td",[t._v("2445")]),t._v(" "),e("td",[t._v("Remove versionInfo in Tsfile and get rid of versions in memtable")]),t._v(" "),e("td",[t._v("wshao08")]),t._v(" "),e("td",[t._v("Delete version info in TsFile")])])])]),t._v(" "),e("h1",{attrs:{id:"_0-9-x-version-1-0-10-x-version-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0-9-x-version-1-0-10-x-version-2"}},[t._v("#")]),t._v(" 0.9.x (version-1) -> 0.10.x (version-2)")]),t._v(" "),e("p",[t._v("Last Updated on 2019-11-28 by Jialin Qiao.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("PR#")]),t._v(" "),e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Author")]),t._v(" "),e("th",[t._v("Changes")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("553")]),t._v(" "),e("td",[t._v("[IOTDB-279] Merge TsDigest into Statistics")]),t._v(" "),e("td",[t._v("jack870131")]),t._v(" "),e("td",[t._v("Merge the function of TsDigest into Statistics class, which TsDisgest is the ByteBuffer format of Statistics")])]),t._v(" "),e("tr",[e("td",[t._v("587")]),t._v(" "),e("td",[t._v("[IOTDB-325] Refactor Statistics")]),t._v(" "),e("td",[t._v("qiaojialin")]),t._v(" "),e("td",[t._v("Move start time, end time, count in PageHeader and ChunkMetadata into Statistics; Remove maxTombstoneTime in ChunkHeader")])]),t._v(" "),e("tr",[e("td",[t._v("855")]),t._v(" "),e("td",[t._v("[IOTDB-587] New TsFile version 2")]),t._v(" "),e("td",[t._v("HTHou")]),t._v(" "),e("td",[t._v("Remove ChunkGroupMetadata, store ChunkMetadata list by series, Add TimeseriesMetadata for each series")])]),t._v(" "),e("tr",[e("td",[t._v("1024")]),t._v(" "),e("td",[t._v("[IOTDB-585] Fix recover version bug")]),t._v(" "),e("td",[t._v("qiaojialin")]),t._v(" "),e("td",[t._v("Add MetaMarker.VERSION and version behind each flushing memtable (flushAllChunkGroups)")])]),t._v(" "),e("tr",[e("td",[t._v("1047")]),t._v(" "),e("td",[t._v("[IOTDB-593] Add metaOffset in TsFileMetadata")]),t._v(" "),e("td",[t._v("qiaojialin")]),t._v(" "),e("td",[t._v("Add metaOffset in TsFileMetadata")])]),t._v(" "),e("tr",[e("td",[t._v("1100")]),t._v(" "),e("td",[t._v("[IOTDB-605] Add more levels of index in TsFileMetadata")]),t._v(" "),e("td",[t._v("sunzesong")]),t._v(" "),e("td",[t._v("Update the structure of deviceMetadata to a tree-level indexed TsFileMetadata")])])])]),t._v(" "),e("h1",{attrs:{id:"_0-8-0-0-9-x-version-1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_0-8-0-0-9-x-version-1"}},[t._v("#")]),t._v(" 0.8.0 -> 0.9.x (version-1)")]),t._v(" "),e("p",[t._v("Last Updated on 2019-10-27 by Lei Rui.")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",[t._v("PR#")]),t._v(" "),e("th",[t._v("Name")]),t._v(" "),e("th",[t._v("Author")]),t._v(" "),e("th",[t._v("Changes")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[t._v("258")]),t._v(" "),e("td",[t._v("[IOTDB-143]Development of merge")]),t._v(" "),e("td",[t._v("jt2594838")]),t._v(" "),e("td",[t._v("Add totalChunkNum and invalidChunkNum to TsFileMetaData.")])]),t._v(" "),e("tr",[e("td",[t._v("409")]),t._v(" "),e("td",[t._v("[IOTDB-165][TsFile] Delete a current version and add a number version and an exception.")]),t._v(" "),e("td",[t._v("Genius_pig")]),t._v(" "),e("td",[t._v("(1) Delete a current version in TsFileMetaData; "),e("br"),t._v('(2) Change the TsFile magic number from 12 bytes to: 6 bytes magic string ("TsFile") + 6 bytes version number ({"000001", "000002", ""000003"}) ("v0.8.0" is the first version (we treat it as "000000"));'),e("br"),t._v('(3) The tail of a TsFile only has "TsFile" magic string, without the version number.')])]),t._v(" "),e("tr",[e("td",[t._v("466")]),t._v(" "),e("td",[t._v("[IOTDB-208] Bloom filter")]),t._v(" "),e("td",[t._v("SilverNarcissus")]),t._v(" "),e("td",[t._v("Add four fields for the bloom filter to TsFileMetaData: 1) bit vector byte array length, 2) bit vector byte array, 3) the number of bits, 4) the number of hash functions.")])])])])])}),[],!1,null,null,null);e.default=i.exports}}]);