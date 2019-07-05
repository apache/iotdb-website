<template>
  <div>
    <p class="language-button" v-if="eng==true">[切换到中文版本]</p>
    <p class="language-button" v-else>[Switch to English Version]</p>
  </div>
</template>

<script>
export default {
  name: "LanguageButton",
  props: ['eng']
}
</script>

<style scoped>
  .language-button {
    text-align: right;
    margin-right: 30px;
    color: #fcac45;
    cursor: pointer;
  }
</style>
