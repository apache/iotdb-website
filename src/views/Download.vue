<template>
  <div class="main container" style="max-width: 1200px; min-width: 900px">
    <div class="row">
      <div class="col-md-8 col-sm-12">
        <h1 class="blog-post-title" style="color:#fcac45">Release Version</h1>
        <p>Please choose a version:
          <select id="sparkVersionSelect" v-model="selected_version_url">
            <option v-for="iot_version in download_version_list" :value="iot_version.url">{{iot_version.text}}</option>
          </select>
        </p>
        <p>Main features and change list of each version, please check <a :href="release_notes_url">Release Notes</a>.</p>

        <h1 class="blog-post-title" style="color:#fcac45">Get Source Code</h1>
        <p>Go to our <a :href="iotdb_github_url">Github</a>, have fun with IoTDB source code!</p>
        <!--<p>{{ selected_version_url}}</p>-->
      </div>
      <my-sidebar :download_url="selected_version_url"/>
    </div>
  </div>

</template>

<script>
  import SideBar from '../components/SideBar'
  export default {
    name: "Download",
    components: {
      'my-sidebar': SideBar
    },
    data() {
      return {
        iotdb_github_url: 'https://github.com/thulab/iotdb.git',
        release_notes_url: 'https://github.com/thulab/iotdb.git',
        selected_version_url: '',
        download_version_list: [
          { text: 'iotdb-v7.0', url: 'https://github.com/thulab/iotdb.git7'},
          { text: 'iotdb-v8.0', url: 'https://github.com/thulab/iotdb.git8' },
          { text: 'iotdb-v9.0', url: 'https://github.com/thulab/iotdb.git9' }
        ]
      }
    },
    created(){
      //如果没有这句代码，select中初始化会是空白的，默认选中就无法实现
      this.selected_version_url = this.download_version_list[0].url;
    },
    methods: {

      download_btn_clicked() {
        window.open(this.selected_version_url, '_blank'+this.selected_version_url);

      }
    }
  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  button{
    width: 100%;font-size: x-large;font-weight: bold;
  }
  div{
    margin-top: 10px;
  }
</style>

