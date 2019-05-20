<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs8>
        <question v-for="question in questions" :key="question.path" :data="question"></question>
      </v-flex>
      <v-flex xs4>
        <appsidebar></appsidebar>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import question from "./Question";
import AppSidebar from "./AppSidebar";
export default {
  name: "forum",
  components: {
    question: question,
    appsidebar: AppSidebar
  },
  data() {
    return {
      questions: null
    };
  },
  created() {
    axios
      .get("/api/question")
      .then(res => (this.questions = res.data.data))
      .catch(error => console.log(error.response.data));
  }
};
</script>

<style>
</style>
