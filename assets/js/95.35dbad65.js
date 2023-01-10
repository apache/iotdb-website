(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{498:function(e,s,t){"use strict";t.r(s);var a=t(19),n=Object(a.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"timeseries-management"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#timeseries-management"}},[e._v("#")]),e._v(" Timeseries Management")]),e._v(" "),s("h2",{attrs:{id:"create-timeseries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-timeseries"}},[e._v("#")]),e._v(" Create Timeseries")]),e._v(" "),s("p",[e._v("According to the storage model selected before, we can create corresponding timeseries in the two databases respectively. The SQL statements for creating timeseries are as follows:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB > create timeseries root.ln.wf01.wt01.status with datatype=BOOLEAN,encoding=PLAIN\nIoTDB > create timeseries root.ln.wf01.wt01.temperature with datatype=FLOAT,encoding=RLE\nIoTDB > create timeseries root.ln.wf02.wt02.hardware with datatype=TEXT,encoding=PLAIN\nIoTDB > create timeseries root.ln.wf02.wt02.status with datatype=BOOLEAN,encoding=PLAIN\nIoTDB > create timeseries root.sgcc.wf03.wt01.status with datatype=BOOLEAN,encoding=PLAIN\nIoTDB > create timeseries root.sgcc.wf03.wt01.temperature with datatype=FLOAT,encoding=RLE\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("p",[e._v("From v0.13, you can use a simplified version of the SQL statements to create timeseries:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB > create timeseries root.ln.wf01.wt01.status BOOLEAN encoding=PLAIN\nIoTDB > create timeseries root.ln.wf01.wt01.temperature FLOAT encoding=RLE\nIoTDB > create timeseries root.ln.wf02.wt02.hardware TEXT encoding=PLAIN\nIoTDB > create timeseries root.ln.wf02.wt02.status BOOLEAN encoding=PLAIN\nIoTDB > create timeseries root.sgcc.wf03.wt01.status BOOLEAN encoding=PLAIN\nIoTDB > create timeseries root.sgcc.wf03.wt01.temperature FLOAT encoding=RLE\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("p",[e._v("Notice that when in the CREATE TIMESERIES statement the encoding method conflicts with the data type, the system gives the corresponding error prompt as shown below:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB > create timeseries root.ln.wf02.wt02.status WITH DATATYPE=BOOLEAN, ENCODING=TS_2DIFF\nerror: encoding TS_2DIFF does not support BOOLEAN\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("Please refer to "),s("RouterLink",{attrs:{to:"/UserGuide/Master/Data-Concept/Encoding.html"}},[e._v("Encoding")]),e._v(" for correspondence between data type and encoding.")],1),e._v(" "),s("h2",{attrs:{id:"create-aligned-timeseries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-aligned-timeseries"}},[e._v("#")]),e._v(" Create Aligned Timeseries")]),e._v(" "),s("p",[e._v("The SQL statement for creating a group of timeseries are as follows:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB> CREATE ALIGNED TIMESERIES root.ln.wf01.GPS(latitude FLOAT encoding=PLAIN compressor=SNAPPY, longitude FLOAT encoding=PLAIN compressor=SNAPPY)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("You can set different datatype, encoding, and compression for the timeseries in a group of aligned timeseries")]),e._v(" "),s("p",[e._v("It is also supported to set an alias, tag, and attribute for aligned timeseries.")]),e._v(" "),s("h2",{attrs:{id:"delete-timeseries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#delete-timeseries"}},[e._v("#")]),e._v(" Delete Timeseries")]),e._v(" "),s("p",[e._v("To delete the timeseries we created before, we are able to use "),s("code",[e._v("(DELETE | DROP) TimeSeries <PathPattern>")]),e._v(" statement.")]),e._v(" "),s("p",[e._v("The usage are as follows:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB> delete timeseries root.ln.wf01.wt01.status\nIoTDB> delete timeseries root.ln.wf01.wt01.temperature, root.ln.wf02.wt02.hardware\nIoTDB> delete timeseries root.ln.wf02.*\nIoTDB> drop timeseries root.ln.wf02.*\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("h2",{attrs:{id:"show-timeseries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#show-timeseries"}},[e._v("#")]),e._v(" Show Timeseries")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("SHOW LATEST? TIMESERIES pathPattern? whereClause? limitClause?")]),e._v(" "),s("p",[e._v("There are four optional clauses added in SHOW TIMESERIES, return information of time series")])])]),e._v(" "),s("p",[e._v("Timeseries information includes: timeseries path, alias of measurement, database it belongs to, data type, encoding type, compression type, tags and attributes.")]),e._v(" "),s("p",[e._v("Examples:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("SHOW TIMESERIES")]),e._v(" "),s("p",[e._v("presents all timeseries information in JSON form")])]),e._v(" "),s("li",[s("p",[e._v("SHOW TIMESERIES <"),s("code",[e._v("PathPattern")]),e._v(">")]),e._v(" "),s("p",[e._v("returns all timeseries information matching the given <"),s("code",[e._v("PathPattern")]),e._v(">. SQL statements are as follows:")])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB> show timeseries root.**\nIoTDB> show timeseries root.ln.**\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("The results are shown below respectively:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+--------+-------------------+\n|                     timeseries|   alias|     database|dataType|encoding|compression|                                       tags|                                              attributes|deadband|deadband parameters|\n+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+--------+-------------------+\n|root.sgcc.wf03.wt01.temperature|    null|    root.sgcc|   FLOAT|     RLE|     SNAPPY|                                       null|                                                    null|    null|               null|\n|     root.sgcc.wf03.wt01.status|    null|    root.sgcc| BOOLEAN|   PLAIN|     SNAPPY|                                       null|                                                    null|    null|               null|\n|             root.turbine.d1.s1|newAlias| root.turbine|   FLOAT|     RLE|     SNAPPY|{"newTag1":"newV1","tag4":"v4","tag3":"v3"}|{"attr2":"v2","attr1":"newV1","attr4":"v4","attr3":"v3"}|    null|               null|\n|     root.ln.wf02.wt02.hardware|    null|      root.ln|    TEXT|   PLAIN|     SNAPPY|                                       null|                                                    null|    null|               null|\n|       root.ln.wf02.wt02.status|    null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|                                       null|                                                    null|    null|               null|\n|  root.ln.wf01.wt01.temperature|    null|      root.ln|   FLOAT|     RLE|     SNAPPY|                                       null|                                                    null|    null|               null|\n|       root.ln.wf01.wt01.status|    null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|                                       null|                                                    null|    null|               null|\n+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+--------+-------------------+\nTotal line number = 7\nIt costs 0.016s\n\n+-----------------------------+-----+-------------+--------+--------+-----------+----+----------+--------+-------------------+\n|                   timeseries|alias|     database|dataType|encoding|compression|tags|attributes|deadband|deadband parameters|\n+-----------------------------+-----+-------------+--------+--------+-----------+----+----------+--------+-------------------+\n|   root.ln.wf02.wt02.hardware| null|      root.ln|    TEXT|   PLAIN|     SNAPPY|null|      null|    null|               null|\n|     root.ln.wf02.wt02.status| null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|null|      null|    null|               null|\n|root.ln.wf01.wt01.temperature| null|      root.ln|   FLOAT|     RLE|     SNAPPY|null|      null|    null|               null|\n|     root.ln.wf01.wt01.status| null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|null|      null|    null|               null|\n+-----------------------------+-----+-------------+--------+--------+-----------+----+----------+--------+-------------------+\nTotal line number = 4\nIt costs 0.004s\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br")])]),s("ul",[s("li",[s("p",[e._v("SHOW TIMESERIES LIMIT INT OFFSET INT")]),e._v(" "),s("p",[e._v("returns all the timeseries information start from the offset and limit the number of series returned. For example,")])])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("show timeseries root.ln.** limit 10 offset 10\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ul",[s("li",[s("p",[e._v("SHOW LATEST TIMESERIES")]),e._v(" "),s("p",[e._v("all the returned timeseries information should be sorted in descending order of the last timestamp of timeseries")])])]),e._v(" "),s("p",[e._v("It is worth noting that when the queried path does not exist, the system will return no timeseries.")]),e._v(" "),s("h2",{attrs:{id:"count-timeseries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#count-timeseries"}},[e._v("#")]),e._v(" Count Timeseries")]),e._v(" "),s("p",[e._v("IoTDB is able to use "),s("code",[e._v("COUNT TIMESERIES <Path>")]),e._v(" to count the number of timeseries matching the path. SQL statements are as follows:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB > COUNT TIMESERIES root.**\nIoTDB > COUNT TIMESERIES root.ln.**\nIoTDB > COUNT TIMESERIES root.ln.*.*.status\nIoTDB > COUNT TIMESERIES root.ln.wf01.wt01.status\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("Besides, "),s("code",[e._v("LEVEL")]),e._v(" could be defined to show count the number of timeseries of each node at the given level in current Metadata Tree. This could be used to query the number of sensors under each device. The grammar is: "),s("code",[e._v("COUNT TIMESERIES <Path> GROUP BY LEVEL=<INTEGER>")]),e._v(".")]),e._v(" "),s("p",[e._v("For example, if there are several timeseries (use "),s("code",[e._v("show timeseries")]),e._v(" to show all timeseries):")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+--------+-------------------+\n|                     timeseries|   alias|     database|dataType|encoding|compression|                                       tags|                                              attributes|deadband|deadband parameters|\n+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+--------+-------------------+\n|root.sgcc.wf03.wt01.temperature|    null|    root.sgcc|   FLOAT|     RLE|     SNAPPY|                                       null|                                                    null|    null|               null|\n|     root.sgcc.wf03.wt01.status|    null|    root.sgcc| BOOLEAN|   PLAIN|     SNAPPY|                                       null|                                                    null|    null|               null|\n|             root.turbine.d1.s1|newAlias| root.turbine|   FLOAT|     RLE|     SNAPPY|{"newTag1":"newV1","tag4":"v4","tag3":"v3"}|{"attr2":"v2","attr1":"newV1","attr4":"v4","attr3":"v3"}|    null|               null|\n|     root.ln.wf02.wt02.hardware|    null|      root.ln|    TEXT|   PLAIN|     SNAPPY|                               {"unit":"c"}|                                                    null|    null|               null|\n|       root.ln.wf02.wt02.status|    null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|                    {"description":"test1"}|                                                    null|    null|               null|\n|  root.ln.wf01.wt01.temperature|    null|      root.ln|   FLOAT|     RLE|     SNAPPY|                                       null|                                                    null|    null|               null|\n|       root.ln.wf01.wt01.status|    null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|                                       null|                                                    null|    null|               null|\n+-------------------------------+--------+-------------+--------+--------+-----------+-------------------------------------------+--------------------------------------------------------+--------+-------------------+\nTotal line number = 7\nIt costs 0.004s\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br")])]),s("p",[e._v("Then the Metadata Tree will be as below:")]),e._v(" "),s("center",[s("img",{staticStyle:{width:"100%","max-width":"600px","margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"https://user-images.githubusercontent.com/19167280/69792176-1718f400-1201-11ea-861a-1a83c07ca144.jpg"}})]),e._v("\nAs can be seen, `root` is considered as `LEVEL=0`. So when you enter statements such as:\n"),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB > COUNT TIMESERIES root.** GROUP BY LEVEL=1\nIoTDB > COUNT TIMESERIES root.ln.** GROUP BY LEVEL=2\nIoTDB > COUNT TIMESERIES root.ln.wf01.* GROUP BY LEVEL=2\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("You will get following results:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("+------------+-----------------+\n|      column|count(timeseries)|\n+------------+-----------------+\n|   root.sgcc|                2|\n|root.turbine|                1|\n|     root.ln|                4|\n+------------+-----------------+\nTotal line number = 3\nIt costs 0.002s\n\n+------------+-----------------+\n|      column|count(timeseries)|\n+------------+-----------------+\n|root.ln.wf02|                2|\n|root.ln.wf01|                2|\n+------------+-----------------+\nTotal line number = 2\nIt costs 0.002s\n\n+------------+-----------------+\n|      column|count(timeseries)|\n+------------+-----------------+\n|root.ln.wf01|                2|\n+------------+-----------------+\nTotal line number = 1\nIt costs 0.002s\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br")])]),s("blockquote",[s("p",[e._v("Note: The path of timeseries is just a filter condition, which has no relationship with the definition of level.")])]),e._v(" "),s("h2",{attrs:{id:"tag-and-attribute-management"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tag-and-attribute-management"}},[e._v("#")]),e._v(" Tag and Attribute Management")]),e._v(" "),s("p",[e._v("We can also add an alias, extra tag and attribute information while creating one timeseries.")]),e._v(" "),s("p",[e._v("The differences between tag and attribute are:")]),e._v(" "),s("ul",[s("li",[e._v("Tag could be used to query the path of timeseries, we will maintain an inverted index in memory on the tag: Tag -> Timeseries")]),e._v(" "),s("li",[e._v("Attribute could only be queried by timeseries path : Timeseries -> Attribute")])]),e._v(" "),s("p",[e._v("The SQL statements for creating timeseries with extra tag and attribute information are extended as follows:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("create timeseries root.turbine.d1.s1(temprature) with datatype=FLOAT, encoding=RLE, compression=SNAPPY tags(tag1=v1, tag2=v2) attributes(attr1=v1, attr2=v2)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("The "),s("code",[e._v("temprature")]),e._v(" in the brackets is an alias for the sensor "),s("code",[e._v("s1")]),e._v(". So we can use "),s("code",[e._v("temprature")]),e._v(" to replace "),s("code",[e._v("s1")]),e._v(" anywhere.")]),e._v(" "),s("blockquote",[s("p",[e._v("IoTDB also supports "),s("RouterLink",{attrs:{to:"/UserGuide/Master/Reference/DML-Data-Manipulation-Language.html"}},[e._v("using AS function")]),e._v(" to set alias. The difference between the two is: the alias set by the AS function is used to replace the whole time series name, temporary and not bound with the time series; while the alias mentioned above is only used as the alias of the sensor, which is bound with it and can be used equivalent to the original sensor name.")],1)]),e._v(" "),s("blockquote",[s("p",[e._v("Notice that the size of the extra tag and attribute information shouldn't exceed the "),s("code",[e._v("tag_attribute_total_size")]),e._v(".")])]),e._v(" "),s("p",[e._v("We can update the tag information after creating it as following:")]),e._v(" "),s("ul",[s("li",[e._v("Rename the tag/attribute key")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ALTER timeseries root.turbine.d1.s1 RENAME tag1 TO newTag1\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ul",[s("li",[e._v("reset the tag/attribute value")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ALTER timeseries root.turbine.d1.s1 SET newTag1=newV1, attr1=newV1\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ul",[s("li",[e._v("delete the existing tag/attribute")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ALTER timeseries root.turbine.d1.s1 DROP tag1, tag2\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ul",[s("li",[e._v("add new tags")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ALTER timeseries root.turbine.d1.s1 ADD TAGS tag3=v3, tag4=v4\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ul",[s("li",[e._v("add new attributes")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ALTER timeseries root.turbine.d1.s1 ADD ATTRIBUTES attr3=v3, attr4=v4\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ul",[s("li",[e._v("upsert alias, tags and attributes")])]),e._v(" "),s("blockquote",[s("p",[e._v("add alias or a new key-value if the alias or key doesn't exist, otherwise, update the old one with new value.")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ALTER timeseries root.turbine.d1.s1 UPSERT ALIAS=newAlias TAGS(tag3=v3, tag4=v4) ATTRIBUTES(attr3=v3, attr4=v4)\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("ul",[s("li",[e._v("show timeseries using tags")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("SHOW TIMESERIES (<`PathPattern`>)? WhereClause\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("returns all the timeseries information that satisfy the where condition and match the pathPattern. SQL statements are as follows:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("ALTER timeseries root.ln.wf02.wt02.hardware ADD TAGS unit=c\nALTER timeseries root.ln.wf02.wt02.status ADD TAGS description=test1\nshow timeseries root.ln.** where unit=c\nshow timeseries root.ln.** where description contains 'test1'\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br")])]),s("p",[e._v("The results are shown below respectly:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('+--------------------------+-----+-------------+--------+--------+-----------+------------+----------+--------+-------------------+\n|                timeseries|alias|     database|dataType|encoding|compression|        tags|attributes|deadband|deadband parameters|\n+--------------------------+-----+-------------+--------+--------+-----------+------------+----------+--------+-------------------+\n|root.ln.wf02.wt02.hardware| null|      root.ln|    TEXT|   PLAIN|     SNAPPY|{"unit":"c"}|      null|    null|               null|\n+--------------------------+-----+-------------+--------+--------+-----------+------------+----------+--------+-------------------+\nTotal line number = 1\nIt costs 0.005s\n\n+------------------------+-----+-------------+--------+--------+-----------+-----------------------+----------+--------+-------------------+\n|              timeseries|alias|     database|dataType|encoding|compression|                   tags|attributes|deadband|deadband parameters|\n+------------------------+-----+-------------+--------+--------+-----------+-----------------------+----------+--------+-------------------+\n|root.ln.wf02.wt02.status| null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|{"description":"test1"}|      null|    null|               null|\n+------------------------+-----+-------------+--------+--------+-----------+-----------------------+----------+--------+-------------------+\nTotal line number = 1\nIt costs 0.004s\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br")])]),s("ul",[s("li",[e._v("count timeseries using tags")])]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("COUNT TIMESERIES (<`PathPattern`>)? WhereClause\nCOUNT TIMESERIES (<`PathPattern`>)? WhereClause GROUP BY LEVEL=<INTEGER>\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br")])]),s("p",[e._v("returns all the number of timeseries that satisfy the where condition and match the pathPattern. SQL statements are as follows:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("count timeseries\ncount timeseries root.** where unit = c\ncount timeseries root.** where unit = c group by level = 2\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br")])]),s("p",[e._v("The results are shown below respectly :")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("IoTDB> count timeseries\n+-----------------+\n|count(timeseries)|\n+-----------------+\n|                6|\n+-----------------+\nTotal line number = 1\nIt costs 0.019s\nIoTDB> count timeseries root.** where unit = c\n+-----------------+\n|count(timeseries)|\n+-----------------+\n|                2|\n+-----------------+\nTotal line number = 1\nIt costs 0.020s\nIoTDB> count timeseries root.** where unit = c group by level = 2\n+--------------+-----------------+\n|        column|count(timeseries)|\n+--------------+-----------------+\n|  root.ln.wf02|                2|\n|  root.ln.wf01|                0|\n|root.sgcc.wf03|                0|\n+--------------+-----------------+\nTotal line number = 3\nIt costs 0.011s\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br"),s("span",{staticClass:"line-number"},[e._v("8")]),s("br"),s("span",{staticClass:"line-number"},[e._v("9")]),s("br"),s("span",{staticClass:"line-number"},[e._v("10")]),s("br"),s("span",{staticClass:"line-number"},[e._v("11")]),s("br"),s("span",{staticClass:"line-number"},[e._v("12")]),s("br"),s("span",{staticClass:"line-number"},[e._v("13")]),s("br"),s("span",{staticClass:"line-number"},[e._v("14")]),s("br"),s("span",{staticClass:"line-number"},[e._v("15")]),s("br"),s("span",{staticClass:"line-number"},[e._v("16")]),s("br"),s("span",{staticClass:"line-number"},[e._v("17")]),s("br"),s("span",{staticClass:"line-number"},[e._v("18")]),s("br"),s("span",{staticClass:"line-number"},[e._v("19")]),s("br"),s("span",{staticClass:"line-number"},[e._v("20")]),s("br"),s("span",{staticClass:"line-number"},[e._v("21")]),s("br"),s("span",{staticClass:"line-number"},[e._v("22")]),s("br"),s("span",{staticClass:"line-number"},[e._v("23")]),s("br"),s("span",{staticClass:"line-number"},[e._v("24")]),s("br"),s("span",{staticClass:"line-number"},[e._v("25")]),s("br"),s("span",{staticClass:"line-number"},[e._v("26")]),s("br")])]),s("blockquote",[s("p",[e._v("Notice that, we only support one condition in the where clause. Either it's an equal filter or it is an "),s("code",[e._v("contains")]),e._v(" filter. In both case, the property in the where condition must be a tag.")])]),e._v(" "),s("p",[e._v("create aligned timeseries")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("create aligned timeseries root.sg1.d1(s1 INT32 tags(tag1=v1, tag2=v2) attributes(attr1=v1, attr2=v2), s2 DOUBLE tags(tag3=v3, tag4=v4) attributes(attr3=v3, attr4=v4))\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[e._v("The execution result is as follows:")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('IoTDB> show timeseries\n+--------------+-----+-------------+--------+--------+-----------+-------------------------+---------------------------+--------+-------------------+\n|    timeseries|alias|     database|dataType|encoding|compression|                     tags|                 attributes|deadband|deadband parameters|\n+--------------+-----+-------------+--------+--------+-----------+-------------------------+---------------------------+--------+-------------------+\n|root.sg1.d1.s1| null|     root.sg1|   INT32|     RLE|     SNAPPY|{"tag1":"v1","tag2":"v2"}|{"attr2":"v2","attr1":"v1"}|    null|               null|\n|root.sg1.d1.s2| null|     root.sg1|  DOUBLE| GORILLA|     SNAPPY|{"tag4":"v4","tag3":"v3"}|{"attr4":"v4","attr3":"v3"}|    null|               null|\n+--------------+-----+-------------+--------+--------+-----------+-------------------------+---------------------------+--------+-------------------+\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("p",[e._v("Support query：")]),e._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('IoTDB> show timeseries where tag1=\'v1\'\n+--------------+-----+-------------+--------+--------+-----------+-------------------------+---------------------------+--------+-------------------+\n|    timeseries|alias|     database|dataType|encoding|compression|                     tags|                 attributes|deadband|deadband parameters|\n+--------------+-----+-------------+--------+--------+-----------+-------------------------+---------------------------+--------+-------------------+\n|root.sg1.d1.s1| null|     root.sg1|   INT32|     RLE|     SNAPPY|{"tag1":"v1","tag2":"v2"}|{"attr2":"v2","attr1":"v1"}|    null|               null|\n+--------------+-----+-------------+--------+--------+-----------+-------------------------+---------------------------+--------+-------------------+\n')])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br")])]),s("p",[e._v("The above operations are supported for timeseries tag, attribute updates, etc.")])],1)}),[],!1,null,null,null);s.default=n.exports}}]);