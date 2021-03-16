<template>
  <div id="profile">
    <v-card style="width: 60%;" class="mx-auto">
      <v-card-title class="headline primary white--text">
        UserProfile
      </v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item>
            <v-list-item-title> Name: {{ user.name }} </v-list-item-title>
          </v-list-item>
          <hr />
          <v-list-item>
            <v-list-item-title>
              Username: {{ user.username }}
            </v-list-item-title>
          </v-list-item>
          <hr />
          <v-list-item>
            <v-list-item-title> Email:{{ user.email }} </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["getProfile"]),
  },
  computed: mapGetters(["user"]),
  created() {
    this.getProfile();
  },
};
</script>

<style lang="scss" scoped></style>
