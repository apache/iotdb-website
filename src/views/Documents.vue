<template>
  <div>
    <div class="main container" style="width: 100%;height: 100%">
      <div class="row" style="margin: 0 0;height:90%">
        <!--sidebar part-->
        <div class="col-xs-2 sidebar" style="">
          <div class="version text-center">
            <div class="dropdown center-block" style="width: 80%;">
              <button id="version-current" class="btn dropdown-toggle" data-toggle="dropdown" style="width: 100%">
                IoTDB v0.7
                <b class="caret right-block"></b>
              </button>
              <ul class="dropdown-menu">
                <li v-for="entry in versions">
                  <router-link :to="entry.url">{{entry.text}}</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div id="text-catalogue" class="content center-block" style="width: 14%;overflow: auto">
            <div v-for="item in result">
              <h5 data-toggle="collapse" :data-target="item[0].replace(/ /g, '').replace(/:/g, '')"
                  @click="change_chap_navi_content($event)" :class="item[0].slice(1)">{{item[0].slice(1).concat("▼")}}</h5>
              <ul class="list-group collapse in" :id="item[0].slice(1).replace(/ /g, '').replace(/:/g, '')">
                <li v-for="chapter in item" :class="item[0].slice(1)" v-if="chapter.startsWith('##')"
                    @click="change_navi_content($event)">
                  {{chapter.slice(2)}}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!--content part-->
        <div class="col-xs-10 fixed-middle">
          <ul class="breadcrumb direct" id="bread_chapter">
            <li><a style='color:#fcac45;'>IoTDB 0.7</a></li>
            <li><a style='color:#fcac45;' href="#chapter-1-overview">Chapter 1: Overview</a></li>
            <li><a style='color:#fcac45;' href="#what-is-iotdb">What is IoTDB</a></li>
          </ul>
          <div id="text_content" class="text_field">
            <vue-markdown class="markdown-area" :source="document_test" :toc="true"
                          :toc-anchor-link="true" toc-anchor-link-symbol=""></vue-markdown>
          </div>
          <div class="find-mistake">
            <p>This documentation is open source. Find mistakes? Want to contribute? Go for it.</p>
          </div>
        </div>
      </div>

    </div>
    <footer_bar/>
  </div>
</template>

<script>
  import Footer from "../components/FooterFixed"
  // import Chapter from "../components/Chapter"
  import MarkDown from "vue-markdown"
  import axios from 'axios'

  export default {
    name: "Documents",
    data() {
      return {
        versions: [
          {text: 'IoTDB v0.7', url: '/Documents/ver7/sec1'},
          {text: 'IoTDB v0.6', url: '/Documents/ver6/sec1'},
        ],
        document_test: "",
        result: [],
      }
    },
    components: {
      'footer_bar': Footer,
      'vue-markdown': MarkDown,
    },
    created() {
      this.generateCatalogue();
      this.fetchData();
    },
    watch: {
      // 如果路由有变化，会再次执行该方法
      '$route': 'fetchData',
      '$route.params.version': 'getButtonVersion',
    },
    methods: {
      getButtonVersion() {
        document.getElementById("version-current").innerHTML = this.getVersionString() + "<b class=\"caret right-block\"></b>";
        this.generateCatalogue();
      },
      getVersionString() {
        let version = this.$route.params.version;
        let versionString = "";
        if (version == "ver7") {
          versionString = "IoTDB v0.7";
        }
        else if (version == "ver6") {
          versionString = "IoTDB v0.6"
        }
        return versionString;
      },
      change_chap_navi_content: function (event) {
        let ver = this.getVersionString();
        let chapter = event.currentTarget.innerText.replace(/▼/g, '');
        var x = document.getElementById("bread_chapter");
        x.innerHTML = "<li><a style='color:#fcac45;'>" + ver + "</a></li>" + "<li><a style='color:#fcac45;' href='#" +
          chapter.trim().toLocaleLowerCase().replace(/ /g, '-').replace(/:/g, '') + "'>" +
          chapter + "</a></li>";
        let sect = event.currentTarget.className;
        this.$route.params.section = "sec" + sect.replace(/[^0-9]/ig, "");
        this.fetchData();

        location.href = '#' + chapter.trim().toLocaleLowerCase().replace(/ /g, '-').replace(/:/g, '');
      },
      change_navi_content: function (event) {
        let version = this.getVersionString();
        var chapter = event.currentTarget.className;
        var section = event.currentTarget.innerText;
        var x = document.getElementById("bread_chapter");
        // var y = document.getElementById("markdown-area");
        x.innerHTML = "<li><a style='color:#fcac45;'>" + version + "</a></li>" + "<li><a style='color:#fcac45;' href='#" +
          chapter.trim().toLocaleLowerCase().replace(/ /g, '-').replace(/:/g, '') + "'>" +
          chapter + "</a></li>" + "<li><a style='color:#fcac45;' href='#" +
          section.toLocaleLowerCase().replace(/ /g, '-') + "'>" + section + "</a></li>";
        this.$route.params.section = "sec" + chapter.replace(/[^0-9]/ig, "");
        this.fetchData();

        location.href = "#" + section.toLocaleLowerCase().replace(/ /g, '-');
      },
      // get the version
      getVersion() {
        return this.$route.params.version;
      },
      // get the section
      getSection() {
        return this.$route.params.section;
      },
      // use version and section to render markdown
      fetchData() {
        const dict = {
          "ver7sec1": "https://raw.githubusercontent.com/apache/incubator-iotdb/doc/docs/Documentation/UserGuideV0.7.0/1-Overview.md",
          "ver7sec2": "https://raw.githubusercontent.com/apache/incubator-iotdb/doc/docs/Documentation/UserGuideV0.7.0/2-Concept.md",
          "ver7sec3": "https://raw.githubusercontent.com/apache/incubator-iotdb/doc/docs/Documentation/UserGuideV0.7.0/3-Operation%20Manual.md",
          "ver7sec4": "https://raw.githubusercontent.com/apache/incubator-iotdb/doc/docs/Documentation/UserGuideV0.7.0/4-Deployment%20and%20Management.md",
          "ver7sec5": "https://raw.githubusercontent.com/apache/incubator-iotdb/doc/docs/Documentation/UserGuideV0.7.0/5-SQL%20Documentation.md",
          "ver7sec6": "https://raw.githubusercontent.com/apache/incubator-iotdb/doc/docs/Documentation/UserGuideV0.7.0/6-JDBC%20Documentation.md",
          // "ver7sec7": "https://github.com/apache/incubator-iotdb/blob/doc/docs/Documentation/UserGuideV0.7/1-Overview.md",
          "ver6sec1": "https://raw.githubusercontent.com/apache/incubator-iotdb/doc/docs/Documentation/UserGuideV0.7.0/7-Tools-Cli.md",
        };
        const content = this.getVersion() + this.getSection();
        let url = null;
        if (content in dict) {
          url = dict[content];
        } else {
          this.$router.push('/404');
        }
        // console.log(url);
        const pointer = this;
        axios.get(url)
          .then(function (response) {
            // console.log(response.data);
            pointer.document_test = response.data;
            // console.log(pointer);
          })
          .catch(function (error) {
            console.log(error);
          })
          .then(function () {
          });
      },
      //generate the sidebar information when version changes
      generateCatalogue() {
        this.result = [];
        const dict7 = {
          "ver7sec1": "https://raw.githubusercontent.com/apache/incubator-iotdb/doc/docs/Documentation/UserGuideV0.7.0/1-Overview.md",
          "ver7sec2": "https://raw.githubusercontent.com/apache/incubator-iotdb/doc/docs/Documentation/UserGuideV0.7.0/2-Concept.md",
          "ver7sec3": "https://raw.githubusercontent.com/apache/incubator-iotdb/doc/docs/Documentation/UserGuideV0.7.0/3-Operation%20Manual.md",
          "ver7sec4": "https://raw.githubusercontent.com/apache/incubator-iotdb/doc/docs/Documentation/UserGuideV0.7.0/4-Deployment%20and%20Management.md",
          "ver7sec5": "https://raw.githubusercontent.com/apache/incubator-iotdb/doc/docs/Documentation/UserGuideV0.7.0/5-SQL%20Documentation.md",
          "ver7sec6": "https://raw.githubusercontent.com/apache/incubator-iotdb/doc/docs/Documentation/UserGuideV0.7.0/6-JDBC%20Documentation.md",
          // "ver7sec7": "https://github.com/apache/incubator-iotdb/blob/doc/docs/Documentation/UserGuideV0.7/1-Overview.md",
        };
        const dict6 = {
          "ver6sec1": "https://raw.githubusercontent.com/apache/incubator-iotdb/doc/docs/Documentation/UserGuideV0.7.0/7-Tools-Cli.md",
        };
        if (this.getVersion() == "ver7") {
          for (let section in dict7) {
            this.result.push([]);
            let url = dict7[section];
            let tmp = null;
            const pointer = this;
            axios.get(url)
              .then(function (response) {
                console.log(section.substr(section.length - 1, 1));
                tmp = response.data;
                // console.log(tmp);
                var rows = new Array();
                rows = tmp.split("\n");
                // console.log(typeof(rows[0]));
                for (let item of rows) {
                  // console.log(typeof item);
                  if (item.startsWith("#") && !item.startsWith("###")) {
                    // console.log(item);
                    pointer.result[section.substr(section.length - 1, 1) - 1].push(item);
                  }
                }
              })
          }
        }
        else if (this.getVersion() == "ver6") {
          for (let section in dict6) {
            this.result.push([]);
            let url = dict6[section];
            let tmp = null;
            const pointer = this;
            axios.get(url)
              .then(function (response) {
                console.log(section.substr(section.length - 1, 1));
                tmp = response.data;
                // console.log(tmp);
                var rows = new Array();
                rows = tmp.split("\n");
                // console.log(typeof(rows[0]));
                for (let item of rows) {
                  // console.log(typeof item);
                  if (item.startsWith("#") && !item.startsWith("###")) {
                    // console.log(item);
                    pointer.result[section.substr(section.length - 1, 1) - 1].push(item);
                  }
                }
              })
          }
        }
      }
    }
  }
</script>

<style scoped>

  .text_field {
    position: fixed;
    overflow-x: hidden;
    overflow-y: auto;
    top: 120px;
    left: 20%;
    right: 8%;
    bottom: 100px;
  }

  .fixed-middle {
    position: fixed;
    top: 60px;
    left: 17%;
    /*height: 50px;*/
  }

  .fixed-middle > ul {
    height: 36px;
  }

  .main {
    padding: 0;
  }

  .direct > li > a {
    color: #fcac45;
  }

  .find-mistake {
    text-align: center;
    position: fixed;
    left: 20%;
    right: 0;
    bottom: 50px;
  }

  .col-xs-2 {
    background: #222222;
    padding: 0 0;
  }

  .sidebar {
    position: fixed;
    top: 50px;
    bottom: 0;
    left: 0;
    z-index: 1000;
    display: block;
    overflow-x: hidden;
    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
  }

  .dropdown {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .dropdown > ul {
    width: 100%;
  }

  .list-group > li {
    cursor: pointer;
    margin-left: 10px;
  }

  h5 {
    color: #fcac45;
  }

  .list-group > li {
    list-style-type: none;
    color: #eff0f8;
    margin-bottom: 5px;
  }

  .direct > li > a:link {
    color: #fcac45;
  }

  .version {
    border-bottom: 1px solid #666666;
  }

  button {
    height:40px;
    background: #fcac45;
  }

  #select-version {
    background: #fcac45;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 6px 12px;
    height: 35px;
    width: 80%;
    text-align: center;
  }

  .version-message {
    text-align: center;
  }

  .dropdown-menu {
    text-align: center;
  }

  .content.center-block {
    position: fixed;
    left: 2%;
    top: 120px;
    bottom: 50px;
  }

  .text_field > .markdown-area > p {
    width: 50px;
  }

  div.mark-down > p > img {
    width: 50px;
  }


</style>
