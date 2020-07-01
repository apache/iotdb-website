(window.webpackJsonp=window.webpackJsonp||[]).push([[350],{908:function(e,t,a){"use strict";a.r(t);var s=a(69),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"data-management"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-management"}},[e._v("#")]),e._v(" Data Management")]),e._v(" "),a("p",[e._v("In IoTDB, there are many kinds of data needed to be storage. In this section, we will introduce IoTDB's data storage strategy in order to give you an intuitive understanding of IoTDB's data management.")]),e._v(" "),a("p",[e._v("The data that IoTDB stores is divided into three categories, namely data files, system files, and pre-write log files.")]),e._v(" "),a("h2",{attrs:{id:"data-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-files"}},[e._v("#")]),e._v(" Data Files")]),e._v(" "),a("p",[e._v("Data files store all the data that the user wrote to IoTDB, which contains TsFile and other files. TsFile storage directory can be configured with the "),a("code",[e._v("tsfile_dir")]),e._v(" configuration item (see "),a("RouterLink",{attrs:{to:"/UserGuide/Master/Master/V0.8.x/4-Deployment and Management/2-Configuration.html"}},[e._v("file layer")]),e._v(" for details). Other files can be configured through "),a("RouterLink",{attrs:{to:"/UserGuide/Master/Master/V0.8.x/4-Deployment and Management/2-Configuration.html"}},[e._v("data_dir")]),e._v(" configuration item (see "),a("RouterLink",{attrs:{to:"/UserGuide/Master/Master/V0.8.x/4-Deployment and Management/2-Configuration.html"}},[e._v("Engine Layer")]),e._v(" for details).")],1),e._v(" "),a("p",[e._v("In order to better support users' storage requirements such as disk space expansion, IoTDB supports multiple file directorys storage methods for TsFile storage configuration. Users can set multiple storage paths as data storage locations( see "),a("RouterLink",{attrs:{to:"/UserGuide/Master/Master/V0.8.x/4-Deployment and Management/2-Configuration.html"}},[e._v("tsfile_dir")]),e._v(" configuration item), and you can specify or customize the directory selection policy (see "),a("RouterLink",{attrs:{to:"/UserGuide/Master/Master/V0.8.x/4-Deployment and Management/2-Configuration.html"}},[e._v("mult_dir_strategy")]),e._v(" configuration item for details).")],1),e._v(" "),a("h2",{attrs:{id:"system-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#system-files"}},[e._v("#")]),e._v(" System Files")]),e._v(" "),a("p",[e._v("System files include restore files and schema files, which store metadata information of data in IoTDB. It can be configured through the "),a("code",[e._v("sys_dir")]),e._v(" configuration item (see "),a("RouterLink",{attrs:{to:"/UserGuide/Master/Master/V0.8.x/4-Deployment and Management/2-Configuration.html"}},[e._v("System Layer")]),e._v(" for details).")],1),e._v(" "),a("h2",{attrs:{id:"pre-write-log-files"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pre-write-log-files"}},[e._v("#")]),e._v(" Pre-write Log Files")]),e._v(" "),a("p",[e._v("Pre-write log files store WAL files. It can be configured through the "),a("code",[e._v("wal_dir")]),e._v(" configuration item (see "),a("RouterLink",{attrs:{to:"/UserGuide/Master/Master/V0.8.x/4-Deployment and Management/2-Configuration.html"}},[e._v("System Layer")]),e._v(" for details).")],1),e._v(" "),a("h2",{attrs:{id:"example-of-setting-data-storage-directory"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-of-setting-data-storage-directory"}},[e._v("#")]),e._v(" Example of Setting Data storage Directory")]),e._v(" "),a("p",[e._v("For a clearer understanding of configuring the data storage directory, we will give an excample in this section.")]),e._v(" "),a("p",[e._v("All data directory paths involved in storage directory setting are: data_dir, tsfile_dir, mult_dir_strategy, sys_dir, and wal_dir, which refer to data files, stroage strategy, system files, and pre-write log files. You can choose to configure the items you'd like to change, otherwise, you can use the system default configuration item without any operation.")]),e._v(" "),a("p",[e._v("Here we give an example of a user who configures all five configurations mentioned above. The configuration items are as follow:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("data_dir = D:\\\\iotdb\\\\data\\\\data  \ntsfile_dir = E:\\\\iotdb\\\\data\\\\data1, data\\\\data2, F:\\\\data3 \nmult_dir_strategy = MaxDiskUsableSpaceFirstStrategy\nsys_dir = data\\\\system\nwal_dir = data\n\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("After setting the configuration, the system will:")]),e._v(" "),a("ul",[a("li",[e._v("Save all data files except TsFile in D:\\iotdb\\data\\data")]),e._v(" "),a("li",[e._v("Save TsFile in E:\\iotdb\\data\\data1, $IOTDB_HOME\\data\\data2 and F:\\data3. And the choosing strategy is "),a("code",[e._v("MaxDiskUsableSpaceFirstStrategy")]),e._v(", that is every time data writes to the disk, the system will automatically select a directory with the largest remaining disk space to write data.")]),e._v(" "),a("li",[e._v("Save system data in $IOTDB_HOME\\data\\system")]),e._v(" "),a("li",[e._v("Save WAL data in $IOTDB_HOME\\data")])]),e._v(" "),a("blockquote",[a("p",[e._v("Note:")]),e._v(" "),a("p",[e._v("If you change directory names in tsfile_dir, the newer name and the older name should be one-to-one correspondence. Also, the files in the older directory needs to be moved to the newer directory.")]),e._v(" "),a("p",[e._v("If you add some directorys in tsfile_dir, IoTDB will add the path automatically. Nothing needs to do by your own.")])]),e._v(" "),a("p",[e._v("For example, modify the tsfile_dir to:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("tsfile_dir = D:\\\\data4, E:\\\\data5, F:\\\\data6\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("You need to move files in E:\\iotdb\\data\\data1 to D:\\data4, move files in %IOTDB_HOME%\\data\\data2 to E:\\data5, move files in F:\\data3 to F:\\data6. In this way, the system will operation normally.")])])}),[],!1,null,null,null);t.default=i.exports}}]);