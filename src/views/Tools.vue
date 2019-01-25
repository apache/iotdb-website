<template>
  <div>
    <div class="container">
      <br>
      <div class="row">
        <div class="col-lg-8">
          <div class="scene">
            <img src="../assets/img/tools.jpg">
          </div>
        </div>
        <div class="col-lg-4">
          <div class="introduction">
            <p><b>IoTDB</b> is an open-source time series database developed by THULab(link) which is written in JAVA.
              In order
              to enable IoTDB to more fully support the application of time series data, we have developed a few tools
              for IoTDB expansion.
            </p>
            <ul>
              <li><b>SQL-Like Client(Cli).</b> The Client is developed for users to interact with IoTDB engine in command line.</li>
              <li><b>Spark & Hadoop Connector.</b> IoTDB can be also efficiently integrated with other computing frameworks in big data ecosystems (Hadoop and Spark) for advanced data analytics.
              </li>
              <li><b>Grafana.</b> Grafana is developed for users to visualize time series data in IoTDB using Grafana.</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="blank-row"></div>
      <div class="tools">
        <div class="row">
          <div v-for="tool in Tools">
            <div class="col-md-6 col-lg-3">
              <div class="tool thumbnail">
                <h3>{{tool.header}}</h3>
                <div class="content">
                  <p v-html="tool.content"></p>
                </div>
                <hr style="border-top: 1px solid rgb(100,100,100)"/>
                <div class="tool-download">
                  <button type="button"
                          class="tool-download-button btn btn-default">
                    <a v-bind:href="tool.download">
                      <p style="font-size: medium;margin:0px 5px 0px 5px">Download</p>
                    </a>
                  </button>
                </div>
                <div class="brank-row"></div>
                <div class="tool-documentation">
                  <button type="button" class="tool-documentation-button btn btn-default">
                    <router-link :to=tool.documentation>
                      <p style="color: white; font-size: medium;margin:0px 5px 0px 5px">Documentation</p>
                    </router-link>
                  </button>
                  <br>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer-bar/>
  </div>
</template>

<script>
  import Footer from "../components/FooterFixed"

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
            "content": "Client tool used to read and <br/>write data",
            "download": this.GLOBAL.downloadIotdbCli,
            "documentation": "/Tools/Cli"
          },
          {
            "header": "Grafana Connector",
            "content": "Time Series Data<br/>Visualization",
            "download": this.GLOBAL.downloadGrafanaConnector,
            "documentation": "/Tools/Grafana"
          },
          {
            "header": "Hadoop Connector",
            "content": "Connector tool to use Hadoop to process data from IoTDB",
            "download": this.GLOBAL.downloadHadoopConnector,
            "documentation": "/Tools/Hadoop"
          },
          {
            "header": "Spark Connector",
            "content": "Connector tool to use spark<br/>to process data",
            "download": this.GLOBAL.downloadSparkConnector,
            "documentation": "/Tools/Spark"
          }
        ]
      }
    },
    methods: {}
  }
</script>

<style scoped>

  .scene {
    /*border: 1px solid;*/
    /*border-radius: 1px;*/
    /*padding: 10px;*/
    background: white;
    float: left;
  }

  .scene > img {
    width: 100%;
    height: auto;
    display: block;
  }

  .introduction {
    border: 1px solid;
    border-radius: 2px;
    border-color: rgb(89，93，105);
    border-style: dashed;
    /*background-color: rgb(56,56,68);*/
    /*margin: 2px 2px 2px 2px;*/
    float: right;
    height: 100%;
    overflow: auto;
    padding: 15px 15px 25px 15px;
  }

  .introduction > p {
    /*color: white;*/
    color: black;
    font-size: medium;
    word-break: break-all;
    font-size: 14px;
    line-height: 1.6;

  }

  .introduction > ul {
    /*color: white;*/
    color: black;
    word-break: break-all;
    font-size: 14px;
    padding-left: 20px;
    /*letter-spacing:0.5px;*/
    line-height: 1.6;
  }

  .introduction > p > b {
    color: #fcac45;
    font-size: 20px;
  }

  .introduction > ul > li > b {
    color: #fcac45;
  }

  .tool {
    text-align: center;
    border: 2px solid;
    background: rgb(49,49,60);
    padding: 20px 20px;
    width: 98%;
  }

  .content {
    height: 80px;
  }

  .content > p {
    color: white;
    text-align: center;
    font-size: small;
    margin-bottom: 0;
  }

  .tool > h3 {
    color: white;
    text-align: center;
    height: 40px;
  }

  .tool > p {
    color: white;
    text-align: center;
    font-size: small;
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
    border-radius: 6px;
    width: 90%;
    background: #fcac45;
    font-size: x-large;
    border: 1px solid #fcac45;
  }

  .tool-download-button > a:hover, a:visited, a:link, a:active {
    color: white;
  }

  .tool-documentation-button {
    border-radius: 6px;
    width: 90%;
    background: rgb(56,56,68);
    font-size: x-large;
    border: 1px solid #fcac45;
  }

  .tools .col-lg-3 {
    margin-bottom: 20px;
    text-align: center;
  }

  .tools .col-lg-3 p {
    margin-right: 10px;
    margin-left: 10px;
  }

  .tools h2 {
    font-weight: normal;
  }

  .tools h1 {
    font-weight: normal;
  }

  .blank-row {
    height: 25px;
  }

  .content > p {
    font-size: 16px;
  }


</style>
