(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{618:function(e,t,r){"use strict";r.r(t);var a=r(71),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"file-merge-mechanism"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#file-merge-mechanism"}},[e._v("#")]),e._v(" File merge mechanism")]),e._v(" "),r("h2",{attrs:{id:"design-principle"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#design-principle"}},[e._v("#")]),e._v(" Design principle")]),e._v(" "),r("p",[e._v("The written files are both out of order and in order, and there are both small files and large files, and there are different optimal merge algorithms in different systems. Therefore, MergeManager provides multiple merge policy interfaces and provides flexible new policy interfaces.  Entry method")]),e._v(" "),r("h2",{attrs:{id:"calling-procedure"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#calling-procedure"}},[e._v("#")]),e._v(" Calling procedure")]),e._v(" "),r("ul",[r("li",[e._v('Each merge will be called when the user client calls the "merge" command or according to the mergeIntervalSec in the configuration')]),e._v(" "),r("li",[e._v("The merge is divided into three processes, including selecting a file (selector), performing a merge, and recovering after the merge process is interrupted (recover)\n"),r("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/24886743/75313978-6c64b000-5899-11ea-8565-40b012f9c8a2.png"}})])]),e._v(" "),r("h2",{attrs:{id:"merged-example"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#merged-example"}},[e._v("#")]),e._v(" Merged example")]),e._v(" "),r("p",[e._v("Under the squeeze merge strategy, when a series of seq and unseq files are merged and the time and memory limits are not exceeded, all files will be merged into one named {timestamp}-{version}-{merge times + 1  } .tsfile.merge.squeeze\n​"),r("br"),e._v("\nWhen the time or memory limit is exceeded, the file selection process will be interrupted, and the currently selected seq and unseq files will be merged as above to form a file")]),e._v(" "),r("p",[e._v("The time limit is that the time spent in the process of selecting files cannot exceed a given value, not an estimate of the time taken by the merge process, the purpose is to prevent the selection of files from taking too much time when there are too many files")]),e._v(" "),r("p",[e._v("Memory limit refers to the estimation of the maximum memory consumed by the selected files when merging, and making the estimated value not exceed a given value, so that the process of merging generates a memory overflow.")]),e._v(" "),r("p",[e._v("There are two options when recovering, one is to continue the previous progress, and the other is to give up the previous progress")]),e._v(" "),r("h2",{attrs:{id:"related-code"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#related-code"}},[e._v("#")]),e._v(" Related code")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("org.apache.iotdb.db.engine.merge.BaseFileSelector")]),e._v(" "),r("p",[e._v("The base class for the file selection process, which specifies the basic framework for selecting files and methods for calculating file memory consumption in different situations. All custom file selection strategies need to inherit this class")])]),e._v(" "),r("li",[r("p",[e._v("org.apache.iotdb.db.engine.merge.IRecoverMergeTask")]),e._v(" "),r("p",[e._v("The interface class of the recover process, which specifies the recoverMerge interface. All custom merge recovery strategies must inherit this class.")])])]),e._v(" "),r("p",[e._v("In addition, each custom MergeTask needs to inherit the Callable <void> interface to ensure that it can be called back")]),e._v(" "),r("ul",[r("li",[r("p",[e._v("org.apache.iotdb.db.engine.merge.manage.MergeContext")]),e._v(" "),r("p",[e._v("Common context classes in the Merge process")])]),e._v(" "),r("li",[r("p",[e._v("org.apache.iotdb.db.engine.merge.manage.MergeManager")]),e._v(" "),r("p",[e._v("The thread pool class in the Merge process, which manages the operation of multiple merge tasks")])]),e._v(" "),r("li",[r("p",[e._v("org.apache.iotdb.db.engine.merge.manage.MergeResource")]),e._v(" "),r("p",[e._v("Resource class in the Merge process, responsible for managing files, readers, writers, measurement Schemas, modifications, and other resources during the merge process")])])]),e._v(" "),r("h2",{attrs:{id:"inplace-strategy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#inplace-strategy"}},[e._v("#")]),e._v(" inplace strategy")]),e._v(" "),r("h3",{attrs:{id:"selector"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#selector"}},[e._v("#")]),e._v(" selector")]),e._v(" "),r("p",[e._v("Under limited memory and time, first select the unseq file in turn, and each time directly select the seq file that overlaps with the unseq file according to the time range")]),e._v(" "),r("h3",{attrs:{id:"merge"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#merge"}},[e._v("#")]),e._v(" merge")]),e._v(" "),r("p",[e._v("First select all series that need to be merged according to storageGroupName, then create a chunkMetaHeap for each seq file selected in the selector, and merge them into multiple sub-threads according to the mergeChunkSubThreadNum in the configuration.")]),e._v(" "),r("h2",{attrs:{id:"squeeze-strategy"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#squeeze-strategy"}},[e._v("#")]),e._v(" squeeze strategy")]),e._v(" "),r("h3",{attrs:{id:"selector-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#selector-2"}},[e._v("#")]),e._v(" selector")]),e._v(" "),r("p",[e._v("Under the limited memory and time, first select the unseq file in turn, each time select the seq file that overlaps with the time range of the unseq file, and then retry each seq file in order.  Take more seq files under circumstances")]),e._v(" "),r("h3",{attrs:{id:"merge-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#merge-2"}},[e._v("#")]),e._v(" merge")]),e._v(" "),r("p",[e._v("Basically similar to the inplace strategy, first select all series that need to be merged according to storageGroupName, then create a chunkMetaHeap for each seq file selected in the selector, and merge into multiple child threads according to the mergeChunkSubThreadNum in the configuration to merge")]),e._v(" "),r("h2",{attrs:{id:"recovery-after-merge-interruption"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#recovery-after-merge-interruption"}},[e._v("#")]),e._v(" Recovery after merge interruption")]),e._v(" "),r("p",[e._v("The merge may be forcibly interrupted when the system shuts down or fails suddenly. At this time, the system records the interrupted merge and scans the merge.log file when the next StorageGroupProcessor is created, and re-merges according to the configuration.  There are the following states, among which the recovery process is to give up the merge strategy first")]),e._v(" "),r("h3",{attrs:{id:"none"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#none"}},[e._v("#")]),e._v(" NONE")]),e._v(" "),r("p",[e._v("Basically did nothing, delete the corresponding merge log directly during recovery, and wait for the next manual or automatic merge")]),e._v(" "),r("h3",{attrs:{id:"merge-start"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#merge-start"}},[e._v("#")]),e._v(" MERGE_START")]),e._v(" "),r("p",[e._v("Files to be merged and timeseries have been selected\nDelete the corresponding merge file during recovery, empty the selected file, and clear all other merge related public resources")]),e._v(" "),r("h3",{attrs:{id:"all-ts-merged"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#all-ts-merged"}},[e._v("#")]),e._v(" ALL_TS_MERGED")]),e._v(" "),r("p",[e._v("All timeseries have been merged\nPerform cleanUp directly on recovery and execute the callback operation completed by merge")]),e._v(" "),r("h3",{attrs:{id:"merge-end"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#merge-end"}},[e._v("#")]),e._v(" MERGE_END")]),e._v(" "),r("p",[e._v("All the files on the surface have been merged, this time the merge has been completed\nThis state does not appear in the merge log in principle")])])}),[],!1,null,null,null);t.default=s.exports}}]);