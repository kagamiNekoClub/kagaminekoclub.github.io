<template>
  <div id="app">
    <router-view>
    </router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
  html,body{
    color: grey;
    height: 100%;
    background-color: #efedee;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align:center;
    background-color: #efedee;
  }
</style>
