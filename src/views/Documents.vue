<template>
  <div>
    <div class="main container" style="width: 100%;height: 100%">
      <div class="row" style="margin: 0 0;height:90%">
        <div class="col-xs-2 sidebar" style="">
          <div class="version text-center">
            <!--<div class="dropdown center-block" style="width: 80%;">-->
              <!--<button class="btn dropdown-toggle" data-toggle="dropdown" style="width: 100%">-->
                <!--IoTDB v0.7-->
                <!--<b class="caret right-block"></b>-->
              <!--</button>-->
              <!--<ul class="dropdown-menu">-->
                <!--<li>-->
                  <!--<a id="action-1" href="#">IoTDB v0.6</a>-->
                <!--</li>-->
                <!--<li>-->
                  <!--<a href="#">IoTDB v0.5</a>-->
                <!--</li>-->
              <!--</ul>-->
            <!--</div>-->
          <select v-model="selectedVersionUrl" id="select-version">
            <option class="version-message" v-for="iotdbVersion in downloadVersionList" :value="iotdbVersion.url">{{iotdbVersion.text}}</option>
          </select>
          </div>
          <div class="content center-block" style="width: 14%;overflow: auto">
            <h4>Overview</h4>
            <ul class="list-group">
              <li class="overview" v-for="item in Chapter1" @click="change_navi_content($event)">{{item.section}}</li>
            </ul>
            <h4>Chapter2</h4>
            <ul class="list-group">
              <li class="chapter2" v-for="item in Chapter2" @click="change_navi_content($event)">{{item.section}}</li>
            </ul>
            <h4>Chapter3</h4>
            <ul class="list-group">
              <li class="chapter3" v-for="item in Chapter3" @click="change_navi_content($event)">{{item.section}}</li>
            </ul>
            <h4>Chapter4</h4>
            <ul class="list-group">
              <li class="chapter4" v-for="item in Chapter4" @click="change_navi_content($event)">{{item.section}}</li>
            </ul>
            <h4>Chapter5</h4>
            <ul class="list-group">
              <li class="chapter5" v-for="item in Chapter5" @click="change_navi_content($event)">{{item.section}}</li>
            </ul>
            <h4>Chapter6</h4>
            <ul class="list-group">
              <li class="chapter6" v-for="item in Chapter6" @click="change_navi_content($event)">{{item.section}}</li>
            </ul>
            <h4>Chapter7</h4>
            <ul class="list-group">
              <li class="chapter7" v-for="item in Chapter7" @click="change_navi_content($event)">{{item.section}}</li>
            </ul>

          </div>
        </div>

        <div class="col-xs-10 fixed-middle">
          <ul class="breadcrumb direct" id="bread_chapter">
            <li><a style='color:#fcac45;'>IoTDB 0.7</a></li>
            <li><a style='color:#fcac45;'>overview</a></li>
            <li><a style='color:#fcac45;'>What is IoTDB</a></li>
          </ul>
          <div id="text_content" class="text_field">
            <vue-markdown id="markdown-area" :source="version7[active]" :toc="true" :toc-anchor-link="true"></vue-markdown>
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

  export default {
    name: "Documents",
    data() {
      return {
        downloadVersionList: [
          { text: 'iotdb-v7.0', url: 'https://github.com/apache/incubator-iotdb'},
          { text: 'iotdb-v8.0', url: 'https://github.com/apache/incubator-iotdb' },
          { text: 'iotdb-v9.0', url: 'https://github.com/apache/incubator-iotdb' }
          ],
        Chapter1: [
          {section: "What is IoTDB"},
          {section: "Architecture"},
          {section: "Scenario"},
          {section: "Features"}
        ],
        Chapter2: [
          {section: "Build"},
          {section: "Configure"},
          {section: "Start"},
        ],
        Chapter3: [
          {section: "Key Concepts and Terminology"},
          {section: "Data Type"},
          {section: "Coding"},
          {section: "Compression"},
        ],
        Chapter4: [
          {section: "Scenario Description and Sample Data"},
          {section: "Data Model Selection and Creation"},
          {section: "Data Access"},
          {section: "Data Query"},
        ],
        Chapter5: [
          {section: "Deployment"},
          {section: "Configuration"},
          {section: "System log"},
          {section: "Data Management"},
          {section: ""}
        ],
        Chapter6: [
          {section: "Cli/shell tool"},
          {section: "Spark"},
        ],
        Chapter7: [
          {section: "IoTDB Query Statement"},
          {section: "Reference"},
        ],

        version7: {
          overview: require("../assets/version0.7/ch1.md"),
          chapter2: require("../assets/version0.7/ch2.md"),
          chapter3: require("../assets/version0.7/ch3.md"),
          chapter4: require("../assets/version0.7/ch4.md"),
          chapter5: require("../assets/version0.7/ch5.md"),
          chapter6: require("../assets/version0.7/ch6.md"),
          chapter7: require("../assets/version0.7/ch7.md")
        },
        active: "overview",

      }
    },
    components: {
      'footer_bar': Footer,
      // 'chapter_bar': Chapter,
      'vue-markdown': MarkDown,
    },
    created(){
      this.selectedVersionUrl = this.downloadVersionList[0].url;
    },
    methods: {
      change_navi_content: function (event) {
        let version = this.$route.params.version;
        var chapter = event.currentTarget.className;
        var section = event.currentTarget.innerText;
        var x = document.getElementById("bread_chapter");
        // var y = document.getElementById("markdown-area");
        x.innerHTML = "<li><a style='color:#fcac45;'>IoTDB 0.7</a></li>" + "<li><a href='#' style='color:#fcac45;'>" +
          chapter + "</a></li>" + "<li><a style='color:#fcac45;'>" + section + "</a></li>";
        // y.innerText = version;
        this.active = chapter;
      }
    }
  }
</script>

<style scoped>

  .text_field {
    position: fixed;
    overflow: auto;
    top: 100px;
    left: 20%;
    right: 5%;
    bottom: 200px;
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
  }

  h4 {
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
    border-bottom: 1px solid #eff0f8;
  }

  button {
    background: #fcac45;
  }

  #select-version{
    background: #fcac45;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 6px 12px;
    height: 35px;
    width:80%;
    text-align: center;
  }

  .version-message{
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


</style>
