<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view></router-view>
    <Copyright></Copyright>
  </div>
</template>

<script>
import Copyright from './view/Copyright'
export default {
  name: 'app',
  components: {
    Copyright
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #212121;
  background:#f5f5f5;
  position: relative;
  min-height: 100%;
  padding-bottom: 80px;
  flex: 1;
}
.trans-opacity-enter-active, .trans-opacity-leave-active{
  transition: opacity 0.5s;
}
.trans-opacity-enter, .trans-opacity-leave-active{
  opacity: 0;
}
</style>
