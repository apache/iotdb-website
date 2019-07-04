<template>
  <div>
    <div class="container">
      <div class="row markdown-body">
        <div class="col-sm-8">
          <loading v-if="seen"></loading>
          <language-button v-if="seen==false" :eng="eng" @click.native="switchLanguage()" />
          <vue-markdown v-if="seen==false" v-bind:source="md" :toc="true" :toc-anchor-link-symbol="toc" :postrender="parse"></vue-markdown>
        </div>
        <my-sidebar/>
      </div>
    </div>
    <br>
    <br>
    <br>
    <footer-bar/>
  </div>
</template>

<script>
  import Footer from "../components/FooterFixed"
  import SideBar from '../components/SideBar'
  import markdown from 'vue-markdown'
  import axios from 'axios'
  import Global from '../components/Global'
  import LoadingBar from '../components/Loading'
  import LanguageButton from '../components/LanguageButton'

  export default {
    name: "Community",
    components: {
      'footer-bar': Footer,
      'my-sidebar': SideBar,
      'vue-markdown': markdown,
      'loading': LoadingBar,
      'language-button': LanguageButton
    },
    data() {
      return {
        msg: 'Welcome to Community Page',
        md: "",
        toc: "",
        seen: true,
        eng: true
      }
    },
    created() {
      this.fetchData();
    },
    watch: {
      '$route': 'fetchData'
    },
    methods: {
      content: function () {
        return this.$route.params.doc
      },
      switchLanguage()  {
        this.eng = this.eng !== true;
        this.fetchData();
      },
      fetchData() {
        const docLanguageUrl = this.eng ? Global.DOC_ENG_PREFIX : Global.DOC_CHN_PREFIX;
        const dict = {
          "Quick Start": Global.SUPPORT_VERSION[Global.DEFAULT_VERSION]['doc-prefix'] +
            Global.SUPPORT_VERSION[Global.DEFAULT_VERSION]['branch'] + docLanguageUrl +
            "/QuickStart.md",
          "Frequently asked questions": Global.SUPPORT_VERSION[Global.DEFAULT_VERSION]['doc-prefix'] +
            Global.SUPPORT_VERSION[Global.DEFAULT_VERSION]['branch'] + docLanguageUrl +
            '/Frequently%20asked%20questions.md',
        };
        const content = this.content();
        let url = null;
        if (content in dict) {
          url = dict[content];
        } else {
          this.$router.push('/404');
        }
        const pointer = this;
        this.seen = true;
        axios.get(url)
          .then(function (response) {
            pointer.md = response.data;
            pointer.seen = false;
          })
      },
      parse(html){
        return Global.isReadyForPrerender(html)
      }
    }
  }
</script>
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  body {
    font-family: Georgia, "Times New Roman", Times, serif;
    color: #555;
  }

  .pager > li > a {
    width: 140px;
    padding: 10px 20px;
    text-align: center;
    border-radius: 30px;
  }

  .blog-footer p:last-child {
    margin-bottom: 0;
  }

</style>
