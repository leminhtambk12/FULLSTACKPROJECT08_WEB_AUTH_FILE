<template>
  <div class="home">
    <v-row>
      <v-col>
        <v-card
          v-for="idea in ideas.ideas"
          :key="idea._id"
          class="mx-auto mb-4"
          max-width="400"
          outlined
        >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">
                {{ idea.idea }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions class="text-button">
            <v-btn outlined rounded text @click="upVoteIdea(idea)">
              UpVote
            </v-btn>
            <span class="ml-4 mr-4">{{ idea.vote }}</span>
            <v-btn outlined rounded text @click="downVoteIdea(idea)">
              DownVote
            </v-btn>
            <v-spacer></v-spacer>
            <v-icon
              class="mdi mdi-trash-can"
              @click="deleteIdea(idea._id)"
            ></v-icon>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col>
        <v-btn @click="$router.push('/create-idea')" class="primary">
          Add New Idea
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Home",
  components: {},
  async created() {
    await this.getIdeas();
  },
  methods: {
    ...mapActions(["getIdeas", "upVoteIdea", "downVoteIdea", "deleteIdea"]),
  },
  computed: {
    ...mapState(["ideas"]),
  },
};
</script>
<style scoped></style>
