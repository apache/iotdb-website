(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{425:function(s,e,a){"use strict";a.r(e);var n=a(19),t=Object(n.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"how-to-vote-for-a-release"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-vote-for-a-release"}},[s._v("#")]),s._v(" How to vote for a release")]),s._v(" "),e("p",[s._v("For non-Chinese users, please read https://cwiki.apache.org/confluence/display/IOTDB/Validating+a+staged+Release")]),s._v(" "),e("h2",{attrs:{id:"download-everything-under-voting-version-rc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#download-everything-under-voting-version-rc"}},[s._v("#")]),s._v(" Download everything under voting version / rc")]),s._v(" "),e("p",[s._v("https://dist.apache.org/repos/dist/dev/iotdb/")]),s._v(" "),e("h2",{attrs:{id:"import-the-public-key-of-the-release-manager"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#import-the-public-key-of-the-release-manager"}},[s._v("#")]),s._v(" Import the public key of the release manager")]),s._v(" "),e("p",[s._v("https://dist.apache.org/repos/dist/dev/iotdb/KEYS")]),s._v(" "),e("p",[s._v("At the bottom is the public key of the Release Manager (RM)")]),s._v(" "),e("p",[s._v("Install gpg2")]),s._v(" "),e("h3",{attrs:{id:"the-first-method"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-first-method"}},[s._v("#")]),s._v(" the first method")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("The beginning of the public key is this\npub   rsa4096 2019-10-15 [SC]\n      10F3B3F8A1201B79AA43F2E00FC7F131CAA00430\n      \nOr this\n\npub   rsa4096/28662AC6 2019-12-23 [SC]\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("Download the public key")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("gpg2 --receive-keys 10F3B3F8A1201B79AA43F2E00FC7F131CAA00430 (or 28662AC6)\n\nor (Designation keyserver) \ngpg2 --keyserver p80.pool.sks-keyservers.net --recv-keys 10F3B3F8A1201B79AA43F2E00FC7F131CAA00430 (或 28662AC6)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h3",{attrs:{id:"the-second-method"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#the-second-method"}},[s._v("#")]),s._v(" The second method")]),s._v(" "),e("p",[s._v("Copy the following paragraph into a text file and name it "),e("code",[s._v("key.asc")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("-----BEGIN PGP PUBLIC KEY BLOCK-----\nVersion: GnuPG v2\n...\n-----END PGP PUBLIC KEY BLOCK-----\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("Import RM's public key to your computer")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("gpg2 --import key.asc\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"verify-the-source-distribution"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#verify-the-source-distribution"}},[s._v("#")]),s._v(" Verify the source distribution")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("Verify that there are  NOTICE, LICENSE, and the content is correct.")])]),s._v(" "),e("li",[e("p",[s._v("Verify README, RELEASE_NOTES")])]),s._v(" "),e("li",[e("p",[s._v("Validation header")])])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mvn -B apache-rat:check\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("Verify signatures and hashes")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("gpg2 --verify apache-iotdb-0.12.0-source-release.zip.asc apache-iotdb-0.12.0-source-release.zip\n\nappear Good Singnature \n\nshasum -a512 apache-iotdb-0.12.0-source-release.zip\n\nCompared with the corresponding .sha512, the same is fine.\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("ul",[e("li",[s._v("Verify compilation")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mvnw install\n\nShould end up all SUCCESS\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h2",{attrs:{id:"verifying-the-binary-release"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#verifying-the-binary-release"}},[s._v("#")]),s._v(" Verifying the binary release")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("Verify that there are NOTICE, LICENSE, and the content is correct.")])]),s._v(" "),e("li",[e("p",[s._v("Verify README, RELEASE_NOTES")])]),s._v(" "),e("li",[e("p",[s._v("Verify signatures and hashes")])])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("gpg2 --verify apache-iotdb-0.12.0-bin.zip.asc apache-iotdb-0.12.0-bin.zip\n\nappear Good Singnature \n\nshasum -a512 apache-iotdb-0.12.0-bin.zip\n\nCompared with the corresponding .sha512, the same is fine.\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("ul",[e("li",[s._v("Verify that it starts and the sample statements execute correctly")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("nohup ./sbin/start-server.sh >/dev/null 2>&1 &\n\n./sbin/start-cli.sh\n\nCREATE DATABASE root.turbine;\nCREATE TIMESERIES root.turbine.d1.s0 WITH DATATYPE=DOUBLE, ENCODING=GORILLA;\ninsert into root.turbine.d1(timestamp,s0) values(1,1);\ninsert into root.turbine.d1(timestamp,s0) values(2,2);\ninsert into root.turbine.d1(timestamp,s0) values(3,3);\nselect * from root;\n\nPrints the following:\n+-----------------------------------+------------------+\n|                               Time|root.turbine.d1.s0|\n+-----------------------------------+------------------+\n|      1970-01-01T08:00:00.001+08:00|               1.0|\n|      1970-01-01T08:00:00.002+08:00|               2.0|\n|      1970-01-01T08:00:00.003+08:00|               3.0|\n+-----------------------------------+------------------+\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br")])]),e("h2",{attrs:{id:"sample-mail"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sample-mail"}},[s._v("#")]),s._v(" Sample mail")]),s._v(" "),e("p",[s._v("Email can be sent after verification")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Hi,\n\n+1 (PMC could binding)\n\nThe source release:\nLICENSE and NOTICE [ok]\nsignatures and hashes [ok]\nAll files have ASF header [ok]\ncould compile from source: ./mvnw clean install [ok]\n\nThe binary distribution:\nLICENSE and NOTICE [ok]\nsignatures and hashes [ok]\nCould run with the following statements [ok]\n\nCREATE DATABASE root.turbine;\nCREATE TIMESERIES root.turbine.d1.s0 WITH DATATYPE=DOUBLE, ENCODING=GORILLA;\ninsert into root.turbine.d1(timestamp,s0) values(1,1);\ninsert into root.turbine.d1(timestamp,s0) values(2,2);\ninsert into root.turbine.d1(timestamp,s0) values(3,3);\nselect * from root;\n\nThanks,\nxxx\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br")])]),e("h2",{attrs:{id:"small-tools"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#small-tools"}},[s._v("#")]),s._v(" small tools")]),s._v(" "),e("ul",[e("li",[s._v("Print out lines containing certain characters (just look at the top output, you don't need to look at the bottom file)")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('find . -type f -exec grep -i "copyright" {} \\; -print | sort -u\nfind **/src -type f -exec grep -i "copyright" {} \\; -print | sort -u\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])])}),[],!1,null,null,null);e.default=t.exports}}]);