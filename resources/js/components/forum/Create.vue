<template>
  <v-container>
    <form @submit.prevent="create">
      <v-text-field v-model="form.title" type="text" label="Title"></v-text-field>
      <v-autocomplete
        v-model="form.category_id"
        :items="categories"
        item-value="id"
        item-text="name"
        label="Category"
      ></v-autocomplete>

      <markdown-editor v-model="form.body" ref="markdownEditor"></markdown-editor>

      <v-btn color="green" type="submit">Create</v-btn>
    </form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        title: null,
        category_id: null,
        body: null
      },
      categories: {},
      errors: {}
    };
  },
  created() {
    axios
      .get("/api/category")
      .then(res => (this.categories = res.data.data))
  },
  methods: {
    create() {
      axios.post("/api/question", this.form)
        .then(res => this.$router.push(res.data.path))
        .catch(error => this.errors = error.response.data.error)
    }
  }
};
</script>

<style>
</style>
