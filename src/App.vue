<template>
  <div id="content">
    <MainMenu />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import MainMenu from './components/MainMenu.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
      MainMenu, Footer
  },
  methods: {
    ...mapActions(['fetchUsers'])
  },
  created() {
    this.fetchUsers()
  },
  watch: {
  $route(to) {
     document.title = `${to.meta.title}`;
    }
  }
}
</script>

<style>
* {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}
body {
    height: 100%;
    background: url('./assets/background.png') no-repeat fixed 20% 35%;
    /* background: linear-gradient(rgb(106, 184, 106),rgb(123, 179, 123),rgb(140, 190, 140)) no-repeat fixed; */
}
main {
    color: #2c3e50;
    margin-top: 2%;
}
</style>
