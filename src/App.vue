<template>
  <div id="content">
    <MainMenu />
    <router-view/>
  </div>
</template>

<script>
import MainMenu from './components/MainMenu.vue'

export default {
  components: {
      MainMenu
  }
}
</script>

<style>
* {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}
#content {
    height: 100%;
    background: rgb(123, 179, 123);
}
main {
    color: #2c3e50;
    margin-top: 5%;
    padding-bottom: 472px;
}
footer {
    position: absolute;
    width: 100%;
    height: 60px;
    color: white;
    padding: 1px;
    background-color: black;
}
</style>
