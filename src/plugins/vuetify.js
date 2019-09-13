import Vue from 'vue';
import Vuetify, { VSnackbar } from 'vuetify/lib';
import colors from 'vuetify/lib/util/colors'
import VuetifyToast from 'vuetify-toast-snackbar';

Vue.use(Vuetify, {
  theme: {
    themes: {
      light: {
        primary: colors.purple,
        secondary: colors.grey.darken1,
        accent: colors.shades.black,
        error: colors.red.accent3,
      },
      dark: {
        primary: colors.blue.lighten3,
      },
    },
  },
  components: {
    VSnackbar
  }
});

Vue.use(VuetifyToast);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
});
