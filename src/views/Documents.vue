<template>
  <div>
    <div class="main container-fluid" >
      <div class="row" style="margin: 0 0;height:90%">
        <!--sidebar part-->
        <div class="col-xs-3 sidebar">
          <div class="version text-center">
            <div class="dropdown center-block" style="width: 80%;">
              <button id="version-current" class="btn dropdown-toggle" data-toggle="dropdown" style="width: 100%">
                IoTDB {{text}}
                <b class="caret right-block"></b>
              </button>
              <ul class="dropdown-menu">
                <li v-for="entry in versions">
                  <router-link :to="entry.url">{{entry.text}}</router-link>
                </li>
              </ul>
            </div>
          </div>
          <div id="text-catalogue" class="content center-block" style="overflow: auto">
            <div v-for="item in result">
              <h5 style="font-size: 16px" data-toggle="collapse" v-if="typeof(item[0]) != 'undefined'" :data-target="item[0].replace(/ /g, '').replace(/:/g, '')" @click="changeChapterNavContent($event)" :class="item[0].slice(1)">
                {{item[0]}}
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
        <div class="col-xs-9 fixed-middle">
          <ul class="breadcrumb direct" id="bread-chapter">
            <li><a style='color:#fcac45;'>{{text}}</a></li>
            <li><a style='color:#fcac45;'>{{chapter}}</a></li>
            <li><a style='color:#fcac45;'>{{content}}</a></li>
          </ul>
          <div class="text-field" id="text-content">
            <vue-markdown class="markdown-area" :source="document" :toc="true" :toc-anchor-link="true" toc-anchor-link-symbol=""></vue-markdown>
            <p class="find-mistake">This documentation is open source. Find mistakes? Want to contribute? Go for it.</p>
          </div>
          <div class="doc-footer">
            <span>Copyright © 2019 The Apache Software Foundation. Apache and the Apache feather logo are trademarks of The Apache Software Foundation.</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
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
        chapter: "",
        content: "",
        text: "",
      }
    },
    components: {
      'vue-markdown': MarkDown,
    },
    created() {
      this.init();
      this.generateCatalogue();
      this.fetchData();
    },
    watch: {
      '$route': 'fetchData',
      '$route.params.version': 'updateDocument',
      '$route.params.section': 'updateDocument',
    },
    methods: {
      init(){
        for(let key in Golbal.SUPPORT_VERSION){
          this.versions.push({
            text: Golbal.SUPPORT_VERSION[key]['text'],
            url: '/Documents/'+ key + '/sec1'
          })
        }
        let version = this.getVersion();
        if(version in Golbal.SUPPORT_VERSION){
          if(version === Golbal.LATEST_STR){
            this.version = Golbal.DEFAULT_VERSION;
          } else {
            this.version = version;
          }
          this.updateSection();
        }
        this.text = this.getVersionString();
      },
      getVersionString() {
        let version = this.$route.params.version;
        if (version in Golbal.SUPPORT_VERSION){
          return Golbal.SUPPORT_VERSION[version]['text']
        }
        return "";
      },
      changeChapterNavContent: function (event) {
        let ver = this.getVersion();
        let url = "/Documents/"+ver+"/sec"+event.currentTarget.className.replace(/[^0-9]/ig, "");
        this.$router.push(url);
      },
      changeSectionNavContent: function (event) {
        let version = this.getVersionString();
        var chapter = event.currentTarget.className;
        var section = event.currentTarget.innerText;
        console.log(chapter);
        this.updateHeader(version, chapter.trim(), section);
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
      updateDocument(){
        this.updateVersion();
        this.updateSection();
      },
      updateVersion() {
        this.text = this.getVersionString();
        this.generateCatalogue();
      },
      updateSection() {
        let version = this.getVersion();
        let chapter = Number(this.getSection().substr(3)) - 1;
        if(chapter >= 0 && chapter <  Golbal.SUPPORT_VERSION[version]['chapters'].length){
          this.chapter = Golbal.SUPPORT_VERSION[version]['chapters'][chapter].substr(0, Golbal.SUPPORT_VERSION[version]['chapters'][chapter].length - 3);
        } else {
          this.$router.push('/404');
        }
      },
      updateHeader(chapter, section, content){
        this.chapter = section;
        this.content = content;
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
    margin-left: 2%;
    margin-right: 17%;
    max-width: 900px;
    left: 25%;
  }

  .text-field {
    position: fixed;
    overflow-x: hidden;
    overflow-y: auto;
    top: 120px;
    left: 25%;
    bottom: 50px;
    margin-left: 2%;
    margin-right: 15%;
    max-width: 1000px;
  }

  .fixed-middle {
    position: fixed;
    top: 70px;
    left: 24%;
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
  }

  .sidebar {
    position: fixed;
    top: 65px;
    bottom: 0;
    left: 0;
    z-index: 1000;
    display: block;
    overflow-x: hidden;
    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
    background: #222222;
    padding: 0 0;
    line-height: 8px;

  }

  .dropdown {
    margin-top: 30px;
    margin-bottom: 30px;
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

  .doc-footer{
    position: fixed;
    width: 76%;
    bottom: 0px;
    right: 0px;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align:center;
    color:#fff;
    background:#222222;
  }

  @media (min-width: 768px) {
    .fixed-middle {
      top: 170px;
    }
    #text-content{
      top: 210px;
    }
    .sidebar{
      top: 150px;
    }
    .content.center-block{
      top: 222px;
    }
  }

  @media (min-width: 990px) {
    .fixed-middle {
     top: 120px;
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
      top: 70px;
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


</style>
