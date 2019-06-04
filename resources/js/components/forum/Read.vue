<template>
  <div v-if="question">
    <editquestion v-if="editing" :data="question"></editquestion>
    <showquestion v-else :data="question"></showquestion>
    <v-container>
      <replies :question="question"></replies>
      <newreply v-if="loggedIn" :questionSlug="question.slug"></newreply>
      <div v-else class="mt-4">
        <router-link to="/login">Log in to Reply</router-link>
      </div>
    </v-container>
  </div>
</template>

<script>
import newreply from "../reply/newReply";
import replies from "../reply/replies";
import showQuestion from "./showQuestion";
import editQuestion from "./editQuestion";

export default {
  components: {
    showquestion: showQuestion,
    editquestion: editQuestion,
    replies: replies,
    newreply: newreply
  },
  data() {
    return {
      question: null,
      editing: false
    };
  },
  created() {
    this.listen(), this.getQuestion();
  },
  computed: {
    loggedIn() {
      return User.loggedIn();
    }
  },
  methods: {
    listen() {
      EventBus.$on("startEditing", () => {
        this.editing = true;
      });

      EventBus.$on("cancelEditing", () => {
        this.editing = false;
      });
    },
    getQuestion() {
      axios
        .get(`/api/question/${this.$route.params.slug}`)
        .then(res => (this.question = res.data.data))
        .catch(error => console.log(error.response.data));
    }
  }
};
</script>

<style>
</style>
