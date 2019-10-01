import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css';
import '@mdi/font/css/materialdesignicons.css';
import axios from './axios.config';
import i18n from './i18n'

Vue.config.productionTip = false;


const token = localStorage.getItem('token')
if(token) {
  axios.defaults.headers.common['Authorization'] = token;
}

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')

