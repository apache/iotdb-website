<template>
  <div>
    <div class="main container-fluid">
      <div class="row" style="margin: 0 0;height:90%">
        <!--sidebar part-->
        <div class="col-xs-3 sidebar">
          <div class="version text-center">
            <div class="center-block" style="width: 80%;">
              <select class="version-select" v-model="selectVersion">
                <option v-for="entry in versionList" :value="entry.text">
                  {{entry.text}}
                </option>
              </select>
            </div>
          </div>
          <div id="text-catalogue" class="content center-block" style="overflow: auto">
            <div v-for="item in result">
              <h5 style="font-size: 16px" data-toggle="collapse" v-if="typeof(item[0]) != 'undefined'"
                  :data-target="item[0].replace(/ /g, '').replace(/:/g, '')" :class="item[0].slice(1)">
                {{item[0]}}
              </h5>
              <ul class="list-group collapse in" v-if="typeof(item[0]) != 'undefined'"
                  :id="item[0].slice(1).replace(/ /g, '').replace(/:/g, '')">
                <li v-for="chapter in item" :class="item[0].slice(1)" v-if="chapter.startsWith('##')"
                    @click="changeSectionNavContent($event)">
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
          </ul>
          <div class="text-field" id="text-content">
            <language-button :eng="eng" @click.native="switchLanguage()"/>
            <vue-markdown class="markdown-area" :source="document" :toc="true" :toc-anchor-link="true"
                          toc-anchor-link-symbol=""></vue-markdown>
            <p class="find-mistake">This documentation is open source. Find mistakes? Want to contribute? <span
              class="go-to-development" @click="goToDevelopment()">Go for it.</span></p>
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
  import Global from '../components/Global'
  import LanguageButton from '../components/LanguageButton'

  export default {
    name: "Documents",
    data() {
      return {
        versionList: [],
        selectVersion: {},
        document: "",
        result: [],
        version: "",
        chapter: "",
        section: "",
        text: "",
        eng: true
      }
    },
    components: {
      'vue-markdown': MarkDown,
      'language-button': LanguageButton
    },
    created() {
      this.init();
      this.generateCatalogue();
      this.fetchData();
    },
    watch: {
      '$route': 'fetchData',
      '$route.params.version': 'updateDocument',
      '$route.params.chapter': 'updateDocument',
      '$route.params.section': 'updateDocument',
      selectVersion: function (newVersion) {
        let version = "progress";
        if (newVersion.startsWith("V")) {
          version = newVersion.substr(1);
        }
        let url = "/Documents/" + version + "/chap1/sec1";
        this.$router.push(url);
      }
    },
    methods: {
      init() {
        for (let key in Global.SUPPORT_VERSION) {
          this.versionList.push({
            text: Global.SUPPORT_VERSION[key]['text'],
            url: '/Documents/' + key + '/chap1/sec1'
          })
        }
        let version = this.getVersion();
        if (version === "progress") {
          this.selectVersion = "In progress";
        } else {
          this.selectVersion = "V" + version;
        }
        this.text = this.getVersionString();
      },
      getVersionString() {
        let version = this.$route.params.version;
        if (version in Global.SUPPORT_VERSION) {
          return Global.SUPPORT_VERSION[version]['text']
        }
        return "";
      },
      changeSectionNavContent: function (event) {
        let chapter = event.currentTarget.className;
        let section = event.currentTarget.innerText;
        this.$route.params.chapter = "chap" + chapter.replace(/[^0-9]/ig, "");
        this.$route.params.section = "sec" + section.replace(/[^0-9]/ig, "");
        let url = "/Documents/" + this.getVersion() + "/" + this.getChapter() + "/" + this.getSection();
        this.$router.push(url);
      },
      // get the version
      getVersion() {
        return this.$route.params.version;
      },
      // get the chapter
      getChapter() {
        return this.$route.params.chapter;
      },
      // get the section
      getSection() {
        return this.$route.params.section;
      },
      updateDocument() {
        if (this.text !== this.getVersionString()) {
          this.text = this.getVersionString();
          location.reload();
        }
      },
      switchLanguage() {
        this.eng = this.eng !== true;
        this.fetchData();
      },
      // use version and section to render markdown
      fetchData() {
        const docLanguageUrl = this.eng ? Global.DOC_ENG_PREFIX : Global.DOC_CHN_PREFIX;
        let version = this.getVersion();
        if (version in Global.SUPPORT_VERSION) {
          let chapter = Number(this.getChapter().substr(4));
          // this is for special case of branch v0.8.x
          if (version === "0.8.x") {
            chapter -= 1
          }
          let section = Number(this.getSection().substr(3));
          let url = Global.SUPPORT_VERSION[version]['doc-prefix'] + Global.SUPPORT_VERSION[version]['branch'] +
            Global.DOC_ENG_PREFIX + "/UserGuide/" + Global.SUPPORT_VERSION[version]['content'];
          axios.get(url).then(() => {
            this.chapter = this.result[chapter][0].substr(2);
            this.section = this.result[chapter][section].trim().substr(3);
            url = Global.SUPPORT_VERSION[version]['doc-prefix'] + Global.SUPPORT_VERSION[version]['branch'] +
              docLanguageUrl + "/UserGuide/" + this.chapter.substr(8).replace(': ', '-') + "/" + this.section + ".md";
            axios.get(url)
              .then((response) => {
                this.document = response.data;
                document.getElementById("text-content").scrollTop = 0;
              })
              .catch(function (error) {
                console.log(error);
              });
          });
        } else {
          this.$router.push('/404');
        }
      },
      //generate the sidebar information when version changes
      generateCatalogue() {
        this.result = [];
        let version = this.getVersion();
        if (version in Global.SUPPORT_VERSION) {
          let url = Global.SUPPORT_VERSION[version]['doc-prefix'] + Global.SUPPORT_VERSION[version]['branch'] +
            Global.DOC_ENG_PREFIX + "/UserGuide/" + Global.SUPPORT_VERSION[version]['content'];
          axios.get(url).then((response) => {
            let rows = response.data.split("\n");
            let i = -1;
            for (let item of rows) {
              if (item.startsWith("#")) {
                this.result.push([item]);
                i++;
              } else if (item.startsWith("*")) {
                this.result[i].push("##" + item.substr(1));
              }
            }
          });
        } else {
          this.$router.push('/404');
        }
      },
      goToDevelopment() {
        this.$router.push('/Development/Contributing-Document');
      }
    }
  }

</script>

<style scoped>
  #bread-chapter {
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
    font-size: 16px;
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
    margin-top: 50px;
    text-align: center;
    color: #fcac45;
  }

  .go-to-development {
    text-decoration: underline;
    cursor: pointer;
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

  .version-select {
    border: none;
    outline: none;
    border-radius: 5px;
    width: 100%;
    height: 40px;
    margin: 30px 0;
    background: #fcac45;
  }

  select::-ms-expand {
    display: none;
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

  .list-group > li:hover {
    background: grey;
    border: 5px grey;
    border-radius: 5px;
  }

  .direct > li > a:link {
    color: #fcac45;
  }

  .version {
    border-bottom: 1px solid #666666;
  }

  button {
    height: 40px;
    background: #fcac45;
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

  .doc-footer {
    position: fixed;
    width: 76%;
    bottom: 0px;
    right: 0px;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    color: #fff;
    background: #222222;
  }

  @media (min-width: 768px) {
    .fixed-middle {
      top: 170px;
    }

    #text-content {
      top: 210px;
    }

    .sidebar {
      top: 150px;
    }

    .content.center-block {
      top: 222px;
    }
  }

  @media (min-width: 990px) {
    .fixed-middle {
      top: 120px;
    }

    #text-content {
      top: 160px;
    }

    .sidebar {
      top: 100px;
    }

    .content.center-block {
      top: 180px;
    }
  }

  @media (min-width: 1200px) {
    .fixed-middle {
      top: 70px;
    }

    #text-content {
      top: 110px;
    }

    .sidebar {
      top: 50px;
    }

    .content.center-block {
      top: 122px;
    }
  }


</style>
