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
            <template v-if="isLoggedIn">
                <v-btn @click="logout" >
                    <span>Déconnexion</span>
                    <v-icon>mdi-logout</v-icon>
                </v-btn>
            </template>
            <template v-else>
                <v-btn to="/register">
                    <span>Créer mon compte</span>
                    <!-- <v-icon>mdi-add</v-icon> -->
                </v-btn>
                <v-btn to="/login">
                    <span>Se connecter</span>
                    <v-icon>mdi-account</v-icon>
                </v-btn>
            </template>
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
        ...mapState({
            isLoggedIn: state => state.authentication.isLoggedIn,
        })
    },
    methods: {
        drawer() {
            this.$store.commit('app/drawer')
            console.log("Navbar", this.$store.state.app.drawer)
        },
        logout() {
            this.$store.dispatch('authentication/logout')
            console.log("Logout", this.isLoggedIn)
        }
    }
    
}
</script>
