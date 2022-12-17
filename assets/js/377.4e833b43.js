(window.webpackJsonp=window.webpackJsonp||[]).push([[377],{780:function(s,e,t){"use strict";t.r(e);var a=t(19),n=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"query-result-alignment"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#query-result-alignment"}},[s._v("#")]),s._v(" Query Result Alignment")]),s._v(" "),e("p",[s._v("In addition, IoTDB supports two other results set format: 'align by device' and 'disable align'.")]),s._v(" "),e("h2",{attrs:{id:"align-by-device"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#align-by-device"}},[s._v("#")]),s._v(" align by device")]),s._v(" "),e("p",[s._v("The 'align by device' indicates that the deviceId is considered as a column. Therefore, there are totally limited columns in the dataset.")]),s._v(" "),e("p",[s._v("The SQL statement is:")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T00:"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v(":"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" align "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" device\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("The result shows below:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+-----------------------------+-----------------+-----------+------+--------+\n|                         Time|           Device|temperature|status|hardware|\n+-----------------------------+-----------------+-----------+------+--------+\n|2017-11-01T00:00:00.000+08:00|root.ln.wf01.wt01|      25.96|  true|    null|\n|2017-11-01T00:01:00.000+08:00|root.ln.wf01.wt01|      24.36|  true|    null|\n|1970-01-01T08:00:00.001+08:00|root.ln.wf02.wt02|       null|  true|      v1|\n|1970-01-01T08:00:00.002+08:00|root.ln.wf02.wt02|       null| false|      v2|\n|2017-11-01T00:00:00.000+08:00|root.ln.wf02.wt02|       null|  true|      v2|\n|2017-11-01T00:01:00.000+08:00|root.ln.wf02.wt02|       null|  true|      v2|\n+-----------------------------+-----------------+-----------+------+--------+\nTotal line number = 6\nIt costs 0.012s\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("h3",{attrs:{id:"disable-align"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#disable-align"}},[s._v("#")]),s._v(" disable align")]),s._v(" "),e("p",[s._v("The 'disable align' indicates that there are 2 columns for each time series in the result set. Disable Align Clause can only be used at the end of a query statement. Disable Align Clause cannot be used with Aggregation, Fill Statements, Group By or Group By Device Statements, but can with Limit Statements. The display principle of the result table is that only when the column (or row) has existing data will the column (or row) be shown, with nonexistent cells being empty.")]),s._v(" "),e("p",[s._v("The SQL statement is:")]),s._v(" "),e("div",{staticClass:"language-sql line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" root"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ln"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("time")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2017")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("T00:"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v(":"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("00")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("disable")]),s._v(" align\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("The result shows below:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("+-----------------------------+--------------------------+-----------------------------+------------------------+-----------------------------+-----------------------------+-----------------------------+------------------------+\n|                         Time|root.ln.wf02.wt02.hardware|                         Time|root.ln.wf02.wt02.status|                         Time|root.ln.wf01.wt01.temperature|                         Time|root.ln.wf01.wt01.status|\n+-----------------------------+--------------------------+-----------------------------+------------------------+-----------------------------+-----------------------------+-----------------------------+------------------------+\n|1970-01-01T08:00:00.001+08:00|                        v1|1970-01-01T08:00:00.001+08:00|                    true|2017-11-01T00:00:00.000+08:00|                        25.96|2017-11-01T00:00:00.000+08:00|                    true|\n|1970-01-01T08:00:00.002+08:00|                        v2|1970-01-01T08:00:00.002+08:00|                   false|2017-11-01T00:01:00.000+08:00|                        24.36|2017-11-01T00:01:00.000+08:00|                    true|\n|2017-11-01T00:00:00.000+08:00|                        v2|2017-11-01T00:00:00.000+08:00|                    true|                         null|                         null|                         null|                    null|\n|2017-11-01T00:01:00.000+08:00|                        v2|2017-11-01T00:01:00.000+08:00|                    true|                         null|                         null|                         null|                    null|\n+-----------------------------+--------------------------+-----------------------------+------------------------+-----------------------------+-----------------------------+-----------------------------+------------------------+\nTotal line number = 4\nIt costs 0.018s\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);