<template>
  <div>
    <div class="main container" style="width: 100%;height: 100%">
    <div class="row" style="margin: 0 0;">
        <div class="col-xs-2" style="height: 100%;overflow: auto;">
            <div class="version text-center">
                <div class="dropdown center-block"  style="width: 80%; ">
                    <button class="btn dropdown-toggle" data-toggle="dropdown" style="width: 100%">
                        IoTDB v0.7
                        <b class="caret right-block"></b>
                    </button>
                    <ul class="dropdown-menu">
                        <li>
                            <a id="action-1" href="#">IoTDB v0.7</a>
                        </li>
                        <li>
                            <a href="#">IoTDB v0.7</a>
                        </li>
                        <li>
                            <a href="#">IoTDB v0.7</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="content center-block" style="width: 80%;margin-bottom: 110px">
                <h4>Overview</h4>
                <ul class="list-group">
                    <li class="Overview" @click="change_navi_content($event)">section1</li>
                    <li class="Overview" @click="change_navi_content($event)">section2</li>
                    <li class="Overview" @click="change_navi_content($event)">section3</li>
                    <li class="Overview" @click="change_navi_content($event)">section4</li>
                    <li class="Overview" @click="change_navi_content($event)">section5</li>
                </ul>
                <h4>Chapter2</h4>
                <ul class="list-group">
                    <li class="Chapter2" @click="change_navi_content($event)">section1</li>
                    <li class="Chapter2" @click="change_navi_content($event)">section2</li>
                    <li class="Chapter2" @click="change_navi_content($event)">section3</li>
                    <li class="Chapter2" @click="change_navi_content($event)">section4</li>
                    <li class="Chapter2" @click="change_navi_content($event)">section5</li>
                </ul>
                <h4>Chapter3</h4>
                <ul class="list-group">
                    <li class="Chapter3" @click="change_navi_content($event)">section1</li>
                    <li class="Chapter3" @click="change_navi_content($event)">section2</li>
                    <li class="Chapter3" @click="change_navi_content($event)">section3</li>
                    <li class="Chapter3" @click="change_navi_content($event)">section4</li>
                    <li class="Chapter3" @click="change_navi_content($event)">section5</li>
                </ul>
                <h4>Chapter4</h4>
                <ul class="list-group">
                    <li class="Chapter4" @click="change_navi_content($event)">section1</li>
                    <li class="Chapter4" @click="change_navi_content($event)">section2</li>
                    <li class="Chapter4" @click="change_navi_content($event)">section3</li>
                    <li class="Chapter4" @click="change_navi_content($event)">section4</li>
                    <li class="Chapter4" @click="change_navi_content($event)">section5</li>
                </ul>
                <h4>Chapter5</h4>
                <ul class="list-group">
                    <li class="Chapter5" @click="change_navi_content($event)">section1</li>
                    <li class="Chapter5" @click="change_navi_content($event)">section2</li>
                    <li class="Chapter5" @click="change_navi_content($event)">section3</li>
                    <li class="Chapter5" @click="change_navi_content($event)">section4</li>
                    <li class="Chapter5" @click="change_navi_content($event)">section5</li>
                </ul>

            </div>
        </div>

        <div class="col-xs-10 fixed-middle">
            <ul class="breadcrumb direct" id="bread_chapter">

            </ul>
            <div class="text_field">
              <p id="text_content">

              </p>
            </div>
        </div>
    </div>

</div>
    <footer_bar/>
  </div>
</template>

<script>
    import Footer from "../components/FooterFixed"
    export default {
      name: "Documents",
      data() {
      },
      components:{
        'footer_bar':Footer
      },
      methods:{
        change_navi_content:function(event) {
          var chapter=event.currentTarget.className;
          var section=event.currentTarget.innerText;
          var x=document.getElementById("bread_chapter");
          var y=document.getElementById("text_content");
          x.innerHTML="<li><a href='#'>"+chapter+"</a></li>"+"<li><a>"+section+"</a></li>";
          y.innerText=chapter+section;
        }

      }
    }
</script>

<style scoped>

  .text_field{
    position:fixed;
    overflow: auto;
    height:70%;
  }
  .fixed-middle{
    position: fixed;
    top:50px;
    left: 17%;

  }
  .col-xs-2{
      background: #222222;
      padding: 0 0;
  }
  .main{
      padding: 0;
  }
  .dropdown{
      margin-top: 10px;
      margin-bottom: 10px;
  }
  .dropdown>ul{
      width:100%;
  }
  h4{
      color: #fcac45;
  }
  .list-group>li{
      list-style-type: none;
      color: #eff0f8;
  }
  .direct a:link{
      color: #fcac45;
  }
  .version{
      border-bottom: 1px solid #eff0f8;
  }
  button{
      background:#fcac45 ;
  }
</style>
