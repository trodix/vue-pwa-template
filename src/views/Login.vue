<template>
  <div class="login">
    <h1>{{ $t('login.h1') }}</h1>
    <v-row>
      <v-col cols="6">
        <v-form
          ref="form"
          v-model="valid"
          :lazy-validation="lazy"
        >
          <v-text-field 
            v-model="email"
            :rules="rules.emailRules"
            :label="$t('login.email')"
            required
          >{{ $t('login.email.label') }}</v-text-field>
          <v-text-field
            v-model="password"
            type="password"
            :rules="rules.passwordRules"
            :label="$t('login.password')"
            required
            hint="Au moins 8 caractères"
          >{{ $t('login.password') }}</v-text-field>
          <v-progress-circular indeterminate v-if="isLoading"></v-progress-circular>
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="login"
          >
            {{ $t('login.connect') }}
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="js">
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      valid: true,
      lazy: false,
      email: '',
      password: '',
      "rules": {
        emailRules: [
          v => !!v || 'Adresse mail est requis', // $t('login.rules.email.required'), don't work for translating rules :/
          v => /.+@.+\..+/.test(v) || 'Adresse mail doit être valide',
        ],
        passwordRules: [
          v => v.length >= 8 || 'Votre mot de passe doit contenir au moins 8 caractères',
        ],
      }
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.app.isLoading,
    })
  },
  methods: {
    login() {
      this.$store.dispatch('authentication/login', { email: this.email, password: this.password, vm: this })
    }
  },
}
</script>
<style lang="scss" scoped>

</style>
