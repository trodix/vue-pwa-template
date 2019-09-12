<template>
  <div id="app">
    <!-- <v-snackbar v-model="snackShow" top :color="snackColor">{{ snackValue }}
      <v-btn color="white" text @click="snackShow = false">Fermer</v-btn>
    </v-snackbar> -->
    <Snackbar></Snackbar>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
import Snackbar from './components/Snackbar';
export default {
  components: {
    Snackbar
  },
  data () {
    return {snackName: ''}
  },
  methods: {
    snackTime: function (snack) {
      this.setSnack(this.snackName)
    },
    ...mapMutations({
      setSnack: 'app/setSnack'
    })
  }
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
