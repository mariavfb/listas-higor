<template>
  <v-app>
    <Menu></Menu>
    <AppBar></AppBar>

    <v-content>
      <Carousel></Carousel>
    </v-content>

    <Footer></Footer>
  </v-app>
</template>

<script>
import Menu from './components/Menu.vue'
import AppBar from './components/AppBar.vue'
import Carousel from './components/Carousel.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Menu,
    AppBar,
    Carousel,
    Footer
  }
}
</script>