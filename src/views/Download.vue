<template>
  <div class="main container" style="max-width: 1200px; min-width: 900px">
    <div class="row">
      <div class="col-md-8 col-sm-12">
        <h1 class="download-title" style="color:#fcac45">Release Version</h1>
        <p>Please choose a version:
          <select v-model="selectedVersionUrl">
            <option v-for="iotdbVersion in downloadVersionList" :value="iotdbVersion.url">{{iotdbVersion.text}}</option>
          </select>
        </p>
        <p>Main features and change list of each version, please check <a :href="releaseNotesUrl" style="color:#fcac45">Release Notes</a>.</p>

        <h1 class="download-title" style="color:#fcac45">Get Source Code</h1>
        <p>Go to our <a :href="iotdbGithubUrl" style="color:#fcac45">Github</a>, have fun with IoTDB source code!</p>
        <!--<p>{{ selectedVersionUrl}}</p>-->
      </div>
      <my-sidebar :download_url="selectedVersionUrl"/>
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
        iotdbGithubUrl: 'https://github.com/apache/incubator-iotdb',
        releaseNotesUrl: 'https://github.com/apache/incubator-iotdb',
        selectedVersionUrl: '',
        downloadVersionList: [
          { text: 'iotdb-v7.0', url: 'https://github.com/apache/incubator-iotdb'},
          { text: 'iotdb-v8.0', url: 'https://github.com/apache/incubator-iotdb' },
          { text: 'iotdb-v9.0', url: 'https://github.com/apache/incubator-iotdb' }
        ]
      }
    },
    created(){
      this.selectedVersionUrl = this.downloadVersionList[0].url;
    },
    methods: {

      downloadBtnClicked() {
        window.open(this.selectedVersionUrl, '_blank'+this.selectedVersionUrl);

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
  .main>div{
    margin-top: 10px;
  }
  .download-title {
    margin-bottom: 5px;
    font-size: 30px;
    font-weight: 600;
  }
</style>

