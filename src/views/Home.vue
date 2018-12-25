<template>
  <div>
    <div class="main container" style="max-width: 1200px; min-width: 900px">
    <div class="row">
        <div class="col-md-8 col-sm-12">
            <div>
                <p class="home-tittle">Apache IoTDB (incubating) (Database for Internet of Things)</p>
              <p>Apache IoTDB (incubating) (Database for Internet of Things) is an integrated data management engine designed for timeseries data which was initially developed by Tsinghua University. Now Apache IoTDB (incubating) is an effort undergoing incubation at The Apache Software Foundation (ASF), sponsored by the Incubator.
                It can provide users specific services for data collection, storage and analysis. Due to its light weight structure, high performance and usable features together with its intense integration with Hadoop and Spark ecology, Apache IoTDB (incubating) can meet the requirements of massive dataset storage, high-speed data input and complex data analysis in the IoT industrial field.</p>
            </div>
            <div>
                <p class="home-tittle">Scenarios</p>
                <div id="myCarousel" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="item active">
                            <img src="https://user-images.githubusercontent.com/1021782/50415807-2ad11300-0858-11e9-938d-e5604de13d66.png" alt="First slide">
                            <div class="Scenarios">
                                <h1 style="margin-top: 0">Single Machine Management</h1>
                                <p> There are many sensors in an advanced equipment, e.g., a meteorological station, a wind turbine, for collecting the work status data.
                                If the embedded board supports Java or Go (in developing), then TsFile can be run on the embedded board to store data locally.
                                In this way, TsFile provides the ability to save data with high throughput, compress data, and time/value query.
                                Then, generated TsFiles can be transmitted to the data center, which has an IoTDB instance.
                                The IoTDB instance can ingest external TsFiles directly, without re-inserting data one point by one point.
                                </p>
                                <p>
                                If the embedded board supports Java and requires rich query functions, then an IoTDB instance can be installed on the device.
                              </p>
                            </div>
                        </div>
                        <div class="item">
                            <img src="https://user-images.githubusercontent.com/1021782/50415867-6e2b8180-0858-11e9-9cdc-7729f8c056a6.png" alt="Second slide">
                            <div class="Scenarios">
                                <h1 style="margin-top: 0">Local Controller</h1>
                                <p> Suppose there is a factory and there are tens of devices in the factory. IoTDB can be installed on a local controller server in the factory to manage the data of tens of devices.
                                The local controller server can be a normal PC, or a workstation. The IoTDB instance provides the ability to persist data and query data with SQL-like interface.
                                The generated TsFiles can be transmitted to the IoTDB instance in the cloud, which is similar with the Single Machine Management scenario.
                                </p>
                            </div>
                        </div>
                        <div class="item">
                            <img src="https://user-images.githubusercontent.com/1021782/50415866-6e2b8180-0858-11e9-81a6-4c47d1df25ca.png" alt="Third slide">
                            <div class="Scenarios">
                                <h1 style="margin-top: 0">Cloud Data Management</h1>
                                <p>A car company installed sensors on its cars to collect monitoring information such as the driving status of the vehicle.
                                These automotive devices have limited hardware configurations and are difficult to carry complex applications.
                                Cars with sensors can be connected to each other or send data via narrow-band IoT or 4G.
                                </p>
                            </div>
                        </div>
                    </div>
                    <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
            <div>
                <p class="home-tittle" style="padding-top: 15px">Main Features</p>
                <div class="row feature">
                    <div class="col-xs-4" v-for="item in featureBlock1" @mouseover="hover($event)" @mouseleave="unhover($event)">
                      <div class="row feature-title-row">
                        <div class="col-xs-3">
                            <img :src=item.featureSrc style="vertical-align:middle">
                        </div>
                        <div class="col-xs-9 feature-title"><p>{{item.featureTitle}}</p></div>
                      </div>
                          <p class="feature-content">{{item.featureContent}}</p>
                          <hr/>
                    </div>
                </div>
                <div class="row feature">
                    <div class="col-xs-4" v-for="item in featureBlock2" @mouseover="hover($event)" @mouseleave="unhover($event)">
                      <div class="row feature-title-row">
                        <div class="col-xs-3 ">
                            <img :src=item.featureSrc style="vertical-align:middle">
                        </div>
                        <div class="col-xs-9 feature-title"><p>{{item.featureTitle}}</p></div>
                      </div>
                          <p class="feature-content">{{item.featureContent}}</p>
                          <hr/>
                    </div>
                </div>
            </div>
        </div>
        <side-bar/>
    </div>

</div>
    <footer-bar/>
  </div>
</template>

<script>
  import SideBar from "../components/SideBar";
  import Footer from "../components/Footer"
  //import  "../assets/js/index"
  export default {
    name: "Home",
    components: {
      'side-bar': SideBar,
      'footer-bar': Footer
    },
    data() {
      return {
        msg: 'Welcome to Home Page',
        featureBlock1:[
          {featureSrc:require("../assets/img/home-icon1.png"),featureTitle:"High-throughput read and write",
          featureContent:"Apache IoTDB (incubating) supports millions of low-power devices' strong connection data access, high-speed data read and write for intelligent networking devices and mixed devices mentioned above."},
          {featureSrc:require("../assets/img/home-icon2.png"),featureTitle:"Efficient directory structure",
          featureContent:"Apache IoTDB (incubating) supports efficient oganization for complex timeseries data structure from intelligent networking devices, oganization for timeseries data from devices of the same type, fuzzy searching strategy for massive and complex directory of timeseries data."},
          {featureSrc:require("../assets/img/home-icon3.png"),featureTitle:"Rich query semantics",
          featureContent:"Apache IoTDB (incubating) supports time alignment for timeseries data accross devices and sensors, computation in timeseries field (frequency domain transformation) and rich aggregation function support in time dimension."},
        ],
        featureBlock2:[
          {featureSrc:require("../assets/img/home-icon4.png"),featureTitle:"Low cost on hardware",
          featureContent:"Apache IoTDB (incubating) can reach a high compression ratio of disk storage "},
          {featureSrc:require("../assets/img/home-icon5.png"),featureTitle:"Flexible deployment",
          featureContent:"Apache IoTDB (incubating) provides users one-click installation tool on the cloud, once-decompressed-used terminal tool and the bridge tool between cloud platform and terminal tool (Data Synchronization Tool)."},
          {featureSrc:require("../assets/img/home-icon6.png"),featureTitle:"Intense integration with Open Source Ecosystem",
          featureContent:"Apache IoTDB (incubating) supports Hadoop, Spark, etc. analysis ecosystems and Grafana visualization tool."},
        ]
      }
    },
    methods: {
      hover: function (e) {
        e.currentTarget.style.boxShadow = "2px 2px 10px #909090"
      },
      unhover: function (e) {
        e.currentTarget.style.boxShadow = "";
      }
    }
  }

</script>

<style scoped>

  .feature>.col-xs-4>span{
    margin-left:10px;
  }
  .main>div{
    margin-top: 10px;
  }
  .home-tittle{
      color: #fcac45;
      font-size:x-large;
      font-weight: 600;
  }
  .feature{
      display: table;
  }
  .feature>.col-xs-4{
      padding-top: 20px;
      padding-right: 20px;
      padding-left: 20px;
      float: none;
      display: table-cell;
      vertical-align: top;
  }
  @media (min-width: 1px) {
    .feature>.col-xs-4 {
      height: 250px;
    }
    .feature-title-row{
      height: 60px;
    }
  }

  @media (min-width: 975px) {
    .feature>.col-xs-4 {
      height: 388px;
    }
    .feature-title-row{
      height: 98px;
    }
  }
  @media (min-width: 1200px) {
    .feature>.col-xs-4 {
      height: 307px;
    }
    .feature-title-row{
      height: 77px;
    }
  }

  .Scenarios{
      padding: 5px 10px;
      background: black;
      color: white;
  }
  .carousel-control.left {
    background-image:none;
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);
  }
  .carousel-control.right {
    left: auto;
    right: 0;
    background-image:none;
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);
  }

  .carousel-indicators > li, .carousel-indicators > .active{
    height: 3px;
    width: 30px;
    border-radius: 0px;
    margin: 0px;
    border: none;
  }
  .carousel-indicators > li{
    background-color: rgba(255,255,255,.5);
  }
  .carousel-indicators > .active{
    background-color: white;
  }
  @media (min-width: 1px) {
    .carousel-indicators {
      bottom: 90px;
    }
  }

  @media (min-width: 1000px) {
    .carousel-indicators {
      bottom: 110px;
    }
  }
  @media (min-width: 1640px) {
    .carousel-indicators {
      bottom: 105px;
    }
  }
  .feature>.col-xs-4>img{
    width:50px;
    height: 50px;
    margin:0 8px 8px 0;
  }
  hr{
    position:absolute;
    bottom:0;
    left: 10px;
    right: 10px;
    margin:0;
  }
  .row>div>img{
    width: 50px;
    height: 50px;
  }

  .feature-title>p{
    font-size: medium;
  }

</style>
