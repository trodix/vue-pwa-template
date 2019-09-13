<template>
  <div class="login">
    <h1>Se connecter</h1>
    <v-row>
      <v-col cols="6">
        <v-form
          ref="form"
          v-model="valid"
          :lazy-validation="lazy"
        >
          <v-text-field 
            v-model="email"
            :rules="emailRules"
            label="Adresse mail"
            required
          >Adresse mail</v-text-field>
          <v-text-field
            v-model="password"
            :rules="passwordRules"
            label="Mot de passe"
            required
            hint="Au moins 8 caractères"
          >Mot de passe</v-text-field>
          <v-progress-circular indeterminate v-if="isLoading"></v-progress-circular>
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="login"
          >
            Connexion
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
      emailRules: [
        v => !!v || 'Adresse mail est requis',
        v => /.+@.+\..+/.test(v) || 'Adresse mail doit être valide',
      ],
      passwordRules: [
        v => v.length >= 8 || 'Votre mot de passe doit contenir au moins 8 caractères',
      ],
    }
  },
  computed: {
    ...mapState({
      isLoading: state => state.authentication.isLoading,
    })
  },
  methods: {
    login(email, password) {
      this.$store.dispatch('authentication/login', { email, password, vm: this })
    }
  },
}
</script>
<style lang="scss" scoped>

</style>
