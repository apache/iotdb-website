<template>
  <div id="loading-bar">
    <span class="loading-icon"></span>
    <span class="loading-icon"></span>
    <span class="loading-icon"></span>
    <span class="loading-icon"></span>
  </div>
</template>

<script>
  export default {
    name: "LoadingBar",
  }
</script>

<style>
  #loading-bar {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    width: 3em;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
  }

  .loading-icon {
    width: 0.6em;
    height: 2em;
    background-color: orange;
  }

  .loading-icon:nth-of-type(1) {
    animation: grow 1s -0.45s ease-in-out infinite;
  }

  .loading-icon:nth-of-type(2) {
    animation: grow 1s -0.3s ease-in-out infinite;
  }

  .loading-icon:nth-of-type(3) {
    animation: grow 1s -0.15s ease-in-out infinite;
  }

  .loading-icon:nth-of-type(4) {
    animation: grow 1s ease-in-out infinite;
  }

  @keyframes grow {
    0%,
    100% {
      transform: scaleY(1);
    }

    50% {
      transform: scaleY(2);
    }
  }
</style>
