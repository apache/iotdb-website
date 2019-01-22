<template>
  <div class="col-xs-2 sidebar" style="">
    <div class="version text-center">
      <div class="dropdown center-block" style="width: 80%;">
        <button class="btn dropdown-toggle" data-toggle="dropdown" style="width: 100%">
          IoTDB v0.7
          <b class="caret right-block"></b>
        </button>
        <ul class="dropdown-menu">
          <li>
            <a id="action-1" href="#">IoTDB v0.6</a>
          </li>
          <li>
            <a href="#">IoTDB v0.5</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="content center-block" style="width: 80%;height:600px;overflow: auto">
      <h4>Overview</h4>
      <ul class="list-group">
        <li class="Overview" v-for="item in Chapter1" @click="change_navi_content($event)">{{item.section}}</li>
      </ul>
      <h4>Chapter2</h4>
      <ul class="list-group">
        <li class="Chapter2" v-for="item in Chapter2" @click="change_navi_content($event)">{{item.section}}</li>
      </ul>
      <h4>Chapter3</h4>
      <ul class="list-group">
        <li class="Chapter3" v-for="item in Chapter3" @click="change_navi_content($event)">{{item.section}}</li>
      </ul>
      <h4>Chapter4</h4>
      <ul class="list-group">
        <li class="Chapter4" v-for="item in Chapter4" @click="change_navi_content($event)">{{item.section}}</li>
      </ul>
      <h4>Chapter5</h4>
      <ul class="list-group">
        <li class="Chapter5" v-for="item in Chapter5" @click="change_navi_content($event)">{{item.section}}</li>
      </ul>
      <h4>Chapter6</h4>
      <ul class="list-group">
        <li class="Chapter6" v-for="item in Chapter6" @click="change_navi_content($event)">{{item.section}}</li>
      </ul>
      <h4>Chapter7</h4>
      <ul class="list-group">
        <li class="Chapter7" v-for="item in Chapter7" @click="change_navi_content($event)">{{item.section}}</li>
      </ul>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Chapter",
    data() {
      return {
        Chapter1: [
          {section: "What is IoTDB"},
          {section: "Architecture"},
          {section: "Scenario"},
          {section: "Features"}
        ],
        Chapter2: [
          {section: "Build"},
          {section: "Configure"},
          {section: "Start"},
        ],
        Chapter3: [
          {section: "Key Concepts and Terminology"},
          {section: "Data Type"},
          {section: "Coding"},
          {section: "Compression"},
        ],
        Chapter4: [
          {section: "Scenario Description and Sample Data"},
          {section: "Data Model Selection and Creation"},
          {section: "Data Access"},
          {section: "Data Query"},
        ],
        Chapter5: [
          {section: "Deployment"},
          {section: "Configuration"},
          {section: "System log"},
          {section: "Data Management"},
          {section: ""}
        ],
        Chapter6: [
          {section: "Cli/shell tool"},
          {section: "Spark"},
        ],
        Chapter7: [
          {section: "IoTDB Query Statement"},
          {section: "Reference"},
        ],
      }
    },
    methods: {
      change_navi_content: function (event) {
        let version = this.$route.params.version;
        var chapter = event.currentTarget.className;
        var section = event.currentTarget.innerText;
        var x = document.getElementById("bread_chapter");
        var y = document.getElementById("markdown-area");
        x.innerHTML = "<li><a style='color:#fcac45;'>IoTDB 0.7</a></li>" + "<li><a href='#' style='color:#fcac45;'>" +
          chapter + "</a></li>" + "<li><a style='color:#fcac45;'>" + section + "</a></li>";
        y.innerText = version + "IoTDB" + chapter + section;
      }

    }
  }

</script>

<style scoped>
  .col-xs-2 {
    background: #222222;
    padding: 0 0;
  }

  .sidebar {
    position: fixed;
    top: 50px;
    bottom: 0;
    left: 0;
    z-index: 1000;
    display: block;
    overflow-x: hidden;
    overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */
  }

  .dropdown {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .dropdown > ul {
    width: 100%;
  }

  .list-group > li {
    cursor: pointer;
  }

  h4 {
    color: #fcac45;
  }

  .list-group > li {
    list-style-type: none;
    color: #eff0f8;
    margin-bottom: 5px;
  }

  .direct > li > a:link {
    color: #fcac45;
  }

  .version {
    border-bottom: 1px solid #eff0f8;
  }

  button {
    background: #fcac45;
  }

  .dropdown-menu {
    text-align: center;
  }
</style>
