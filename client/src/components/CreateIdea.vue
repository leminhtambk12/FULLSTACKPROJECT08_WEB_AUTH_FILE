<template>
  <div>
    <h1>Create an idea</h1>
    <form @submit.prevent="CreateIdea">
      <v-textarea
        v-model="idea"
        outlined
        name="input-7-4"
        label="Idea Description"
      ></v-textarea>
      <br />
      <v-btn type="submit" color="success">Submit</v-btn>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      idea: "",
    };
  },
  methods: {
    ...mapActions(["createIdea"]),
    CreateIdea() {
      this.createIdea(this.idea);
    },
  },
};
</script>

<style scoped></style>
