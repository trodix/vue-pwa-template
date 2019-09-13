<template>
    <v-app>
      <Navbar/>
      <v-content>
        <v-container fluid>
          <router-view/>
        </v-container>
      </v-content>
      <!-- <v-footer app>
        
      </v-footer> -->
    </v-app>
</template>
<script>
import Navbar from './components/app/Navbar';


export default {
  components: {
    Navbar
  },
  data() {
    return {
      
    }
  },
  computed: {

  },
  
}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
