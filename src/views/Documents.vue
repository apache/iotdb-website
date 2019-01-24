<template>
  <div>
    <div class="main container-fluid" >
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
          <div id="text-catalogue" class="content center-block" style="width: 15%;overflow: auto">
            <div v-for="item in result">
              <h5 style="font-size: 16px" data-toggle="collapse" v-if="typeof(item[0]) != 'undefined'" :data-target="item[0].replace(/ /g, '').replace(/:/g, '')" @click="changeChapterNavContent($event)" :class="item[0].slice(1)">
                {{item[0].slice(1).concat("▼")}}
              </h5>
              <ul class="list-group collapse in" v-if="typeof(item[0]) != 'undefined'" :id="item[0].slice(1).replace(/ /g, '').replace(/:/g, '')">
                <li v-for="chapter in item" :class="item[0].slice(1)" v-if="chapter.startsWith('##')" @click="changeSectionNavContent($event)">
                  {{chapter.slice(2)}}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!--content part-->
        <div class="col-xs-10 fixed-middle">
          <ul class="breadcrumb direct" id="bread-chapter">
            <li><a style='color:#fcac45;'>{{version}}</a></li>
            <li><a style='color:#fcac45;'>{{chapter}}</a></li>
            <li><a style='color:#fcac45;'></a></li>
          </ul>
          <div id="text-content" class="text-field">
            <vue-markdown class="markdown-area" :source="document" :toc="true" :toc-anchor-link="true" toc-anchor-link-symbol=""></vue-markdown>
          </div>
          <div class="find-mistake">
            <p>This documentation is open source. Find mistakes? Want to contribute? Go for it.</p>
          </div>
        </div>
      </div>
    </div>
    <footer-bar/>
  </div>
</template>

<script>
  import Footer from "../components/FooterFixed"
  import MarkDown from "vue-markdown"
  import axios from 'axios'
  import Golbal from '../components/Global'

  export default {
    name: "Documents",
    data() {
      return {
        versions: [],
        document: "",
        result: [],
        version: "",
        chapter: ""
      }
    },
    components: {
      'footer-bar': Footer,
      'vue-markdown': MarkDown,
    },
    created() {
      this.init();
      this.generateCatalogue();
      this.fetchData();
    },
    watch: {
      '$route': 'fetchData',
      '$route.params.version': 'getButtonVersion',
    },
    methods: {
      init(){
        for(let key in Golbal.SUPPORT_VERSION){
          if(key != Golbal.LATEST_STR){
            this.versions.push({
              text: "IoTDB " + Golbal.SUPPORT_VERSION[key]['version'],
              url: '/Documents/'+ key + '/sec1'
            })
          }
        }
        let version = this.getVersion();
        let chapter = Number(this.getSection().substr(3)) - 1;
        if(version in Golbal.SUPPORT_VERSION){
          if(version === Golbal.LATEST_STR){
            this.version = Golbal.LATEST_VERSION;
          } else {
            this.version = version;
          }
          this.chapter = Golbal.SUPPORT_VERSION[version]['chapters'][chapter].substr(0, Golbal.SUPPORT_VERSION[version]['chapters'][chapter].length - 3);
        }
      },
      getButtonVersion() {
        document.getElementById("version-current").innerHTML = this.getVersionString() + "<b class=\"caret right-block\"></b>";
        this.generateCatalogue();
      },
      getVersionString() {
        let version = this.$route.params.version;
        if (version in Golbal.SUPPORT_VERSION){
          if (version === Golbal.LATEST_STR){
            return "IoTDB v"+Golbal.LATEST_VERSION;
          } else{
            return "IoTDB v"+version;
          }
        }
        return "";
      },
      changeChapterNavContent: function (event) {
        let ver = this.getVersionString();
        let chapter = event.currentTarget.innerText.replace(/▼/g, '');
        var x = document.getElementById("bread-chapter");
        x.innerHTML = "<li><a style='color:#fcac45;'>" + ver + "</a></li>" + "<li><a style='color:#fcac45;' href='#" +
          chapter.trim().toLocaleLowerCase().replace(/ /g, '-').replace(/:/g, '') + "'>" +
          chapter + "</a></li>";
        let sect = event.currentTarget.className;
        this.$route.params.section = "sec" + sect.replace(/[^0-9]/ig, "");
        this.fetchData();

        location.href = '#' + chapter.trim().toLocaleLowerCase().replace(/ /g, '-').replace(/:/g, '');
      },
      changeSectionNavContent: function (event) {
        let version = this.getVersionString();
        var chapter = event.currentTarget.className;
        var section = event.currentTarget.innerText;
        var x = document.getElementById("bread-chapter");
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
        let version = this.getVersion();
        let chapter = Number(this.getSection().substr(3)) - 1;
        let url = null;
        if (version in Golbal.SUPPORT_VERSION) {
          url = Golbal.SUPPORT_VERSION[version]['doc-prefix'] + Golbal.SUPPORT_VERSION[version]['branch'] +
            "/docs/Documentation/UserGuide" + Golbal.SUPPORT_VERSION[version]['version'] + "/" +
            Golbal.SUPPORT_VERSION[version]['chapters'][chapter];
        } else {
          this.$router.push('/404');
        }
        const pointer = this;
        axios.get(url)
          .then(function (response) {
            pointer.document = response.data;
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
        let version = this.getVersion();
        if (version in Golbal.SUPPORT_VERSION) {
          for(let i = 0; i < Golbal.SUPPORT_VERSION[version]['chapters'].length; i++){
            this.result.push([]);
          }
          for(let i = 0; i < Golbal.SUPPORT_VERSION[version]['chapters'].length; i++){
            let url = Golbal.SUPPORT_VERSION[version]['doc-prefix'] + Golbal.SUPPORT_VERSION[version]['branch'] +
              "/docs/Documentation/UserGuide" + Golbal.SUPPORT_VERSION[version]['version'] + "/" +
              Golbal.SUPPORT_VERSION[version]['chapters'][i];
            const pointer = this;
            axios.get(url).then(function (response) {
              let rows = response.data.split("\n");
              for (let item of rows) {
                if (item.startsWith("#") && !item.startsWith("###")) {
                  pointer.result[i].push(item);
                }
              }
            })
          }
        } else {
          this.$router.push('/404');
        }
      }
    }
  }
  
</script>

<style scoped>
  #bread-chapter{
    margin-left: 11%;
    margin-right: 8%;
  }

  .text-field {
    position: fixed;
    overflow-x: hidden;
    overflow-y: auto;
    top: 120px;
    left: 20%;
    bottom: 100px;
    margin-left: 8%;
    margin-right: 8%;
  }

  .fixed-middle {
    position: fixed;
    top: 60px;
    left: 17%;
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
    padding: 5px;
    max-width: 80%;

  }
  .list-group > li:hover{
    background: grey;
    border: 5px  grey;
    border-radius: 5px;
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

  .dropdown-menu {
    text-align: center;
  }

  .content.center-block {
    position: fixed;
    margin-left: 20px;
    top: 120px;
    bottom: 50px;
  }

  .text-field > .markdown-area > p {
    width: 50px;
  }

  div.mark-down > p > img {
    width: 50px;
  }


  @media (min-width: 768px) {
    .fixed-middle {
      top: 207px;
    }
    #text-content{
      top: 253px;
    }
    .sidebar{
      top: 204px;
    }
    .content.center-block{
      top: 272px;
    }
  }

  @media (min-width: 990px) {
    .fixed-middle {
     top: 110px;
    }
    #text-content{
      top: 160px;
    }
    .sidebar{
      top: 100px;
    }
    .content.center-block{
      top: 180px;
    }
  }

  @media (min-width: 1200px) {
    .fixed-middle {
      top: 60px;
    }
    #text-content{
      top: 110px;
    }
    .sidebar{
      top: 50px;
    }
    .content.center-block{
      top: 122px;
    }
  }

  @media screen and (max-width: 400px) {
    .footer {
      display: none;
    }
  }
</style>
