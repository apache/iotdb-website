<template>
  <div class="con">
    <div class="con-avatar" :style="{ backgroundImage: 'url(' + photoUrl + ')' }">
    </div>
    <div class="con-info">
      <p class="con-name">{{name}}</p>
      <div class="con-detailed-info">
        <p>{{role}}</p>
        <p>{{org}}</p>
      </div>
      <div class="con-apache-info" v-if="id !== undefined">
        <p class="con-id">Apache ID: {{id}}</p>
        <p class="con-date">Starting date: {{date}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "SingleContributor",
    props: ['avatar', 'name', 'org', 'role', 'id', 'date'],
    data() {
      let name = this.avatar;
      return {
        photoUrl: name === undefined ? require('../assets/img/contributor-avatar/user.jpg') :
          name.startsWith("http") ? name : require('../assets/img/contributor-avatar/' + name)
      }
    }
  }
</script>

<style scoped>
  .con {
    padding: 20px;
    display: inline-block;
    vertical-align: top;
  }

  .con-avatar {
    vertical-align: top;
    margin-right: 20px;
    display: inline-block;
    width: 100px;
    height: 120px;
    background: no-repeat center center;
    background-size: cover;
  }

  .con-info {
    display: inline-block;
    font-size: 14px;
    height: 120px;
  }

  .con-detailed-info p {
    margin: 0;
  }

  .con-detailed-info {
    margin-bottom: 10px;
  }

  .con-apache-info p {
    margin: 0;
    color: #888;
  }

  .con-name {
    font-size: 16px;
    font-weight: 500;
  }
</style>
