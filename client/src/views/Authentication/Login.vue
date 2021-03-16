<template>
  <div id="login">
    <v-card style="width: 60%;" class="mx-auto">
      <v-card-title class="headline primary white--text">
        Login
      </v-card-title>
      <hr />
      <v-card-text>
        <form @submit.prevent="loginUser">
          <v-text-field
            v-model="username"
            label="Username"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            label="Password"
            required
          ></v-text-field>

          <v-btn class="mr-4 primary white--text" type="submit">
            Login
          </v-btn>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <router-link to="/register">
            Need an account?
          </router-link>
        </form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(["login"]),
    loginUser() {
      let user = {
        username: this.username,
        password: this.password,
      };
      this.login(user).then((res) => {
        if (res.data.success) {
          this.$router.push("/profile");
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
