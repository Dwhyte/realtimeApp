<template>
  <v-container>
    <form @submit.prevent="login">
      <v-text-field v-model="form.email" type="email" label="E-mail" required></v-text-field>
      <v-text-field v-model="form.password" label="Password" type="password" required></v-text-field>

      <v-btn color="green" type="submit">Login</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: null,
        password: null
      }
    };
  },
  methods: {
    submit() {
      console.log("yay you clickedd me! >> Submit button");
    },
    clear() {
      console.log("clear button has been clicked");
    },
    login() {
      User.login(this.form);
    }
  }
};
</script>

<style>
</style>
