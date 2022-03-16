(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{658:function(e,t,s){"use strict";s.r(t);var a=s(82),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"flush-memtable"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flush-memtable"}},[e._v("#")]),e._v(" Flush Memtable")]),e._v(" "),s("h2",{attrs:{id:"design-ideas"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#design-ideas"}},[e._v("#")]),e._v(" Design ideas")]),e._v(" "),s("p",[e._v("After the memory buffer memtable reaches a certain threshold, it will be handed over to the FlushManager for asynchronous persistence without blocking normal writes. The persistence process is pipelined.")]),e._v(" "),s("h2",{attrs:{id:"related-code"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#related-code"}},[e._v("#")]),e._v(" Related code")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("org.apache.iotdb.db.engine.flush.FlushManager")]),e._v(" "),s("p",[e._v("Memtable's Flush task manager.")])]),e._v(" "),s("li",[s("p",[e._v("org.apache.iotdb.db.engine.flush.MemtableFlushTask")]),e._v(" "),s("p",[e._v("flush a Memtable。")])])]),e._v(" "),s("h2",{attrs:{id:"flushmanager-persistence-manager"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#flushmanager-persistence-manager"}},[e._v("#")]),e._v(" FlushManager: Persistence manager")]),e._v(" "),s("p",[e._v("FlushManager can accept memtable persistent tasks. There are two submitters. The first is TsFileProcessor and the second is the persistent child thread FlushThread.")]),e._v(" "),s("p",[e._v("Each TsFileProcessor will only have one flush task executed at a time. A TsFileProcessor may correspond to multiple memtables that need to be persisted.")]),e._v(" "),s("h2",{attrs:{id:"memtableflushtask-persistent-task"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#memtableflushtask-persistent-task"}},[e._v("#")]),e._v(" MemTableFlushTask: Persistent task")]),e._v(" "),s("img",{staticStyle:{width:"100%","max-width":"800px","max-height":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/73625254-03fe2680-467f-11ea-8197-115f3a749cbd.png"}}),e._v(" "),s("p",[e._v("Background: Each memtable can contain multiple devices, and each device can contain multiple measurements.")]),e._v(" "),s("h3",{attrs:{id:"three-threads"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#three-threads"}},[e._v("#")]),e._v(" Three threads")]),e._v(" "),s("p",[e._v("A memtable's persistence process has three threads, and the main thread's work does not end until all tasks are completed.")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("MemTableFlushTask  Thread")]),e._v(" "),s("p",[e._v("The sorting thread (the main thread), responsible for sorting the chunks corresponding to each measurement and submit tasks to the encoding task.")])]),e._v(" "),s("li",[s("p",[e._v("encodingTask Thread")]),e._v(" "),s("p",[e._v("The encoding thread is responsible for encoding each Chunk and encoding it into a byte array.")])]),e._v(" "),s("li",[s("p",[e._v("ioTask Thread")]),e._v(" "),s("p",[e._v("The IO thread is responsible for persisting the encoded Chunk to the TsFile on the disk.")])])]),e._v(" "),s("h3",{attrs:{id:"two-task-queues"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#two-task-queues"}},[e._v("#")]),e._v(" Two task queues")]),e._v(" "),s("p",[e._v("Three threads interact through two task queues")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("encodingTaskQueue: Sorting thread-> encoding thread, including three tasks")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("StartFlushGroupIOTask：Began to persist a device (ChunkGroup), encoding does not process this command, and sends it directly to the IO thread.")])]),e._v(" "),s("li",[s("p",[e._v("Pair<TVList, MeasurementSchema>：Encoding a Chunk")])]),e._v(" "),s("li",[s("p",[e._v("EndChunkGroupIoTask：End the persistence of a device (ChunkGroup). The encoding thread does not process this command and  send directly to the IO thread.")])])])]),e._v(" "),s("li",[s("p",[e._v("ioTaskQueue: Encoding thread-> IO thread, including three tasks")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("StartFlushGroupIOTask：Starting to persist a device (ChunkGroup).")])]),e._v(" "),s("li",[s("p",[e._v("IChunkWriter：Persisting a Chunk to Disk")])]),e._v(" "),s("li",[s("p",[e._v("EndChunkGroupIoTask：Ends the persistence of a device (ChunkGroup).")])])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);