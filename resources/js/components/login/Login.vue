<template>
  <v-container>
    <form @submit.prevent="login">
      <v-text-field v-model="form.email" type="email" label="E-mail"></v-text-field>
      <v-text-field v-model="form.password" label="Password" type="password"></v-text-field>

      <v-btn color="green" type="submit">Login</v-btn>
      <router-link to="/signup">
        <v-btn color="blue">Sign Up</v-btn>
      </router-link>
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
  created() {
    if (User.loggedIn()) {
      this.$router.push({ name: "forum" });
    }
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
      //   this.$router.push({ name: "forum" });
    }
  }
};
</script>

<style>
</style>
