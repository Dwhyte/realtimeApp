<template>
  <showquestion :data="question"></showquestion>
</template>

<script>
import showQuestion from "./showQuestion";
export default {
  components: {
    showquestion: showQuestion
  },
  data() {
    return {
      question: {}
    };
  },
  created() {
    axios
      .get(`/api/question/${this.$route.params.slug}`)
      .then(res => (this.question = res.data.data))
      .catch(error => console.log(error.response.data));
  }
};
</script>

<style>
</style>
