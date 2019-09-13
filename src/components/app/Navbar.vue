<template>
    <div>
        <v-app-bar app>
            <v-app-bar-nav-icon @click.stop="drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>Vue Pwa Template</v-toolbar-title>
            <div class="flex-grow-1">
                <div id="nav">
                    <router-link to="/">Home</router-link>
                </div>
            </div>
            <v-btn to="/login">
                <span>Se connecter</span>
                <v-icon>mdi-account</v-icon>
            </v-btn>
        </v-app-bar>
        <Drawer/>
   </div> 
</template>
<script>
import { mapState } from 'vuex';
import Drawer from './Drawer';

export default {
    components: {
        Drawer
    },
    
    data() {
        return {

        }
    },
    computed: {

    },
    methods: {
        drawer() {
            this.$store.commit('app/drawer')
            console.log("Navbar", this.$store.state.app.drawer)
        }
    }
    
}
</script>
