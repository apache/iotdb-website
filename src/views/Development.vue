<template>
  <div>
    <div class="container">
      <div class="row  markdown-body">
        <div class="col-sm-8">
          <loading v-if="seen"></loading>
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

  export default {
    name: "Development",
    components: {
      'footer-bar': Footer,
      'my-sidebar': SideBar,
      'vue-markdown': markdown,
      'loading': LoadingBar,
    },
    data() {
      return {
        msg: 'Welcome to Community Page',
        toc: "",
        md: "",
        locate: "",
        seen: true,
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
          "Contributing": Global.SUPPORT_VERSION[Global.PROGRESS_STR]['doc-prefix'] +
          Global.SUPPORT_VERSION[Global.PROGRESS_STR]['branch'] + "/docs/Development/Development-Contributing.md",
          "Contributing-Document": Global.SUPPORT_VERSION[Global.PROGRESS_STR]['doc-prefix'] +
          Global.SUPPORT_VERSION[Global.PROGRESS_STR]['branch'] + "/docs/Development/Development-Document.md",
          "IDE": Global.SUPPORT_VERSION[Global.PROGRESS_STR]['doc-prefix'] +
          Global.SUPPORT_VERSION[Global.PROGRESS_STR]['branch'] + "/docs/Development/Development-IDE.md",
          "Tsfile": Global.SUPPORT_VERSION[Global.PROGRESS_STR]['doc-prefix'] +
          Global.SUPPORT_VERSION[Global.PROGRESS_STR]['branch'] + "/tsfile/format-changelist.md",
          "RPC": Global.SUPPORT_VERSION[Global.PROGRESS_STR]['doc-prefix'] +
          Global.SUPPORT_VERSION[Global.PROGRESS_STR]['branch'] + "/service-rpc/rpc-changelist.md",
          "Development-Chinese": Global.SUPPORT_VERSION[Global.PROGRESS_STR]['doc-prefix'] +
          Global.SUPPORT_VERSION[Global.PROGRESS_STR]['branch'] + "/docs/Development/Development-Chinese.md",
          "Development-VoteRelease": Global.SUPPORT_VERSION[Global.PROGRESS_STR]['doc-prefix'] +
          Global.SUPPORT_VERSION[Global.PROGRESS_STR]['branch'] + "/docs/Development/Development-VoteRelease.md",
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
        axios.get(url).then(function (response) {
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

  .markdown-body {
    font-size: 16px;
  }

</style>
