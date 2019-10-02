<template>
  <div class="register">
    <h1>{{ $t('register.h1') }}</h1>
    <v-row>
      <v-col cols="6">
        <v-form
          ref="form"
          v-model="valid"
          :lazy-validation="lazy"
        >
          <v-text-field 
            v-model="lastname"
            :rules="rules.lastnameRules"
            :label="$t('register.lastname')"
            required
          >{{ $t('register.lastname') }}</v-text-field>
          <v-text-field 
            v-model="firstname"
            :rules="rules.firstnameRules"
            :label="$t('register.firstname')"
            required
          >{{ $t('register.firstname') }}</v-text-field>
          <v-text-field 
            v-model="email"
            :rules="rules.emailRules"
            :label="$t('login.email')"
            required
          >{{ $t('login.email') }}</v-text-field>
          <v-text-field
            v-model="password"
            type="password"
            :rules="rules.passwordRules"
            :label="$t('login.password')"
            required
            :hint="$t('register.hint.password')"
          >{{ $t('login.password') }}</v-text-field>
          <v-text-field
            v-model="passwordRepeat"
            type="password"
            :rules="rules.passwordRepeatRules"
            :label="$t('register.passwordRepeat')"
            required
            :hint="$t('register.hint.password')"
          >{{ $t('register.passwordRepeat') }}</v-text-field>
          <v-progress-circular indeterminate v-if="isLoading"></v-progress-circular>
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="register"
          >
            {{ $t('register.createAccount') }}
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
      passwordRepeat: '',
      lastname: '',
      firstname: '',
      "rules": {
        emailRules: [
          v => !!v || 'Adresse mail est requis',
          v => /.+@.+\..+/.test(v) || 'Adresse mail doit être valide',
        ],
        passwordRules: [
          v => v.length >= 8 || 'Votre mot de passe doit contenir au moins 8 caractères',
        ],
        passwordRepeatRules: [
          v => this.passwordRepeat === this.password || 'Votre mot de passe doit correspondre',
        ],
        lastnameRules: [
          v => v.length < 20 || '20 caractères maximum',
        ],
        firstnameRules: [
          v => v.length < 20 || '20 caractères maximum',
        ]
      }
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.app.isLoading,
    })
  },
  methods: {
    register() {
      this.$store.dispatch('authentication/register', 
        { 
          email: this.email, 
          password: this.password, 
          passwordConfirm: this.passwordRepeat,
          lastname: this.lastname,
          firstname: this.firstname,
          vm: this 
        }
      );
    }
  },
}
</script>

<style lang="scss" scoped>

</style>