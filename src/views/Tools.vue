<template>
  <div class="background-image">
    <div class="main container" style="width:95%">
      <br>
      <div class="row">
        <div class="col-xs-6">
          <div class="scene">
            <img src="../assets/img/tools.jpg">
          </div>
        </div>
        <div class="col-xs-6">
          <div class="introduction">
            <p>Introduction of copywriting(coming soon...)</p>
          </div>
        </div>
      </div>
      <br>
      <hr/>
      <br>
      <div class="row">
        <div class="col-xs-3" v-for="tool in Tools">
          <div class="tool sidebar thumbnail">
            <h1>{{tool.header}}</h1>
            <p v-html="tool.content"></p>
            <br>
            <hr/>
            <div class="tool-download">
              <button data-toggle="modal" data-target="#myModal" type="button"
                      class="tool-download-button btn btn-default">
                Download
              </button>
              <br>
              <br>
            </div>
            <div class="tool-documentation">
              <button data-toggle="modal" data-target="#myModal" type="button"
                      class="tool-documentation-button btn btn-default">
                <span style="color: white; ">Documentation</span>
              </button>
              <br>
              <br>
            </div>
          </div>
        </div>
      </div>
      <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"
           aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span
                aria-hidden="true">&times;</span></button>
              <h2 class="modal-title">Coming soon...</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer-bar/>
  </div>
</template>

<script>
  import Footer from "../components/Footer"
  export default {
    name: "Tools",
    components: {
      'footer-bar': Footer
    },
    data() {
      return {
        "Tools": [
          {
            "header": "IoTDB-Cli",
            "content": "Client tool used to read and <br/>write data from IoTDB",
            "Download": "",
            "Documentation": ""
          },
          {
            "header": "Grafana Connector",
            "content": "Time Series Data<br/>Visualization",
            "Download": "",
            "Documentation": ""
          },
          {
            "header": "Hadoop Connector",
            "content": "Connector tool to use Hadoop<br/>to process data from IoTDB",
            "Download": "",
            "Documentation": ""
          },
          {
            "header": "Spark Connector",
            "content": "Connector tool to use spark<br/>to process data",
            "Download": "",
            "Documentation": ""
          }
        ]
      }
    },
    methods: {}
  }
</script>

<style scoped>

  .background-image {
    background: antiquewhite no-repeat;
  }

  .scene {
    border: 2px solid;
    border-radius: 10px;
    margin: 10px 10px 10px 10px;
    padding: 10px;
    background: white;
  }

  .scene > img {
    width: 100%;
    height: auto;
    display: block;
  }

  .introduction {
    border: 2px solid;
    border-radius: 20px;
    margin: 10px 10px 10px 10px;
    padding: 10px;
    background: black;
  }

  .introduction > p {
    color: white;
  }

  .tool {
    border: 6px solid;
    border-radius: 20px;
    background: black;
    padding: 20px 20px;
    width: 100%;
  }

  .tool > h1 {
    color: white;
    text-align: center;
  }

  .tool > p {
    color: white;
    text-align: center;
    font-size: large;
  }

  .tool-download {
    text-align: center;
    margin-top: 30px;
  }

  .tool-documentation {
    text-align: center;
    margin-top: 10px;
  }

  .tool-download-button {
    border-radius: 20px;
    width: 80%;
    background: #fcac45;
    font-size: x-large;
    font-weight: bold;
    border: 2px solid #fcac45;
  }

  .tool-documentation-button {
    border-radius: 20px;
    width: 80%;
    background: black;
    font-size: x-large;
    font-weight: bold;
    border: 2px solid #fcac45;
  }

</style>
