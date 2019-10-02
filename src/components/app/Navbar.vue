<template>
    <div>
        <v-app-bar app>
            <v-app-bar-nav-icon @click.stop="drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>{{ VUE_APP_NAME }}</v-toolbar-title>
            <div class="flex-grow-1">
                <div id="nav">
                    <router-link to="/">Home</router-link>
                </div>
            </div>
            <div class="d-flex nav-tools">
                <template v-if="isLoggedIn">
                    <v-btn @click="logout" text>
                        <span>Déconnexion</span>
                        <v-icon>mdi-logout</v-icon>
                    </v-btn>
                </template>
                <template v-else>
                    <v-btn to="/register" text>
                        <span class="hidden-sm-and-down">Créer mon compte</span>
                        <v-icon>mdi-account-plus</v-icon>
                    </v-btn>
                    <v-btn to="/login" text>
                        <span class="hidden-sm-and-down">Se connecter</span>
                        <v-icon>mdi-account</v-icon>
                    </v-btn>
                </template>
                <v-select class="lang" :items="langs" @change="onChangeLang" :value="$i18n.locale"></v-select>
            </div>
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
            langs: [
                "fr",
                "en"
            ]
        }
    },
    computed: {
        ...mapState({
            isLoggedIn: state => state.authentication.isLoggedIn,
        }),
        VUE_APP_NAME() {
            return process.env.VUE_APP_NAME;
        }        
    },
    methods: {
        drawer() {
            this.$store.commit('app/drawer')
            console.log("Navbar", this.$store.state.app.drawer)
        },
        logout() {
            this.$store.dispatch('authentication/logout')
            console.log("Logout", this.isLoggedIn)
        },
        onChangeLang() {
            console.log("setItem", this.$i18n.locale);
            localStorage.setItem('lang', this.$i18n.locale);
        }
    }
    
}
</script>

<style lang="scss" scoped>
.lang {
    max-width: 50px;
}
.nav-tools * {
    margin: 0 6px;
}

</style>
