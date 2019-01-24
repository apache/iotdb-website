<template>
  <div>
    <div class="container">
      <div class="row markdown-body">
        <div class="col-sm-8">
          <vue-markdown v-bind:source="md" :toc="true" :toc-anchor-link-symbol="toc" :postrender="parse"></vue-markdown>
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
  import Golbal from '../components/Global'

  export default {
    name: "SingleTool",
    components: {
      'footer-bar': Footer,
      'my-sidebar': SideBar,
      'vue-markdown': markdown,
    },
    data() {
      return {
        msg: 'Welcome to Tool Page',
        md: "",
        toc: "",
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
        return this.$route.params.content
      },
      fetchData() {
        const dict = {
          "Cli": Golbal.SUPPORT_VERSION[Golbal.LATEST_VERSION]['doc-prefix'] +
            Golbal.SUPPORT_VERSION[Golbal.LATEST_VERSION]['branch'] +
            "/docs/Documentation/UserGuide" +
            Golbal.SUPPORT_VERSION[Golbal.LATEST_VERSION]['version'] + "/7-Tools-Cli.md",
          "Grafana": Golbal.SUPPORT_VERSION[Golbal.LATEST_VERSION]['doc-prefix'] +
            Golbal.SUPPORT_VERSION[Golbal.LATEST_VERSION]['branch'] +
            "/docs/Documentation/UserGuide" +
            Golbal.SUPPORT_VERSION[Golbal.LATEST_VERSION]['version'] + "/7-Tools-Grafana.md",
          "Hadoop": Golbal.SUPPORT_VERSION[Golbal.LATEST_VERSION]['doc-prefix'] +
            Golbal.SUPPORT_VERSION[Golbal.LATEST_VERSION]['branch'] +
            "/docs/Documentation/UserGuide" +
            Golbal.SUPPORT_VERSION[Golbal.LATEST_VERSION]['version'] + "/7-Tools-Hadoop.md",
          "Spark": Golbal.SUPPORT_VERSION[Golbal.LATEST_VERSION]['doc-prefix'] +
            Golbal.SUPPORT_VERSION[Golbal.LATEST_VERSION]['branch'] +
            "/docs/Documentation/UserGuide" +
            Golbal.SUPPORT_VERSION[Golbal.LATEST_VERSION]['version'] + "/7-Tools-spark.md",
        };
        const content = this.content();
        console.log(content);
        let url = null;
        if (content in dict) {
          url = dict[content];
        } else {
          this.$router.push('/404');
        }
        const pointer = this;
        axios.get(url)
          .then(function (response) {
            pointer.md = response.data;
          })
      },
      parse(html){
        return Golbal.isReadyForPrerender(html)
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
