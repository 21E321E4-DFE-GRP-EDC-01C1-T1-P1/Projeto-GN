<template>
  <div id="content">
    <MainMenu />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import MainMenu from './components/MainMenu.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
      MainMenu, Footer
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
    background: linear-gradient(rgb(106, 184, 106),rgb(123, 179, 123),rgb(140, 190, 140));
}
main {
    color: #2c3e50;
    margin-top: 5%;
    padding-bottom: 472px;
}
</style>
