<template>
    <div class="col-md-4 col-md-3 col-sm-6 fixed-side">
        <div class="sidebar thumbnail" style="background:#f8f8f8;padding: 10px 10px;">
            <div class="sidebar-module">
                <h4>Latest News</h4>
                <ol class="list-unstyled">
                  <!--<li lang="en">-->
                    <!--1. New version of Apache IoTDB (incubating) is released in June, 2018.-->
                    <!--This version released 4 new features in Apache IoTDB (incubating) Engine and released-->
                    <!--a Apache IoTDB (incubating)-Transfer-Tool for transfer files back from edge to data center.-->
                    <!--Also, it contains 6 bug fixes, improvements and enhancements since 0.6.0.-->
                  <!--</li>-->
                  <li lang="en">
                    1. Users are encouraged to read the overview of major changes in <router-link to="/Documents">release notes</router-link>,
                    download this version in <router-link to="/Download">download page</router-link>
                    and view documents in <router-link to="/Documents">documentation page</router-link>.
                  </li>
                </ol>
            </div>
            <div class="sidebar-module">
                <h4>Github repo</h4>
                <ol class="list-unstyled">
                    <li><a href="https://github.com/thulab/iotdb">GitHub</a></li>
                </ol>
            </div>
        </div>
        <button type="button" class="btn btn-warning" style="font-size: 2rem" @click="downloadBtnClicked">Download</button>
        <button type="button" class="btn btn-default" style="margin-top: 15px;border-color: #fcac45;background: white;font-size: 2rem">Quick Start</button>
    </div>
</template>

<script>
    export default {
      name: "SideBar",
      methods: {
        downloadBtnClicked(){
          this.$router.push({path:'/Download'})
        }
      }
    }
</script>

<style scoped>
  .fixed-side{
    position:fixed;
    top:70px;
    right: 15%;
  }
  button{
    width: 100%;
    font-size: x-large;
    font-weight: bold;
  }
  @media  (max-width: 990px) {
    .fixed-side{
      display: none;
    }
  }
  @media ( max-width: 1600px ){
    .fixed-side{
      right: 8%;
      top: 110px;
    }
  }
  @media ( max-width: 1700px ){
    .fixed-side{
      right: 10%;
      top: 110px;
    }
  }
</style>
