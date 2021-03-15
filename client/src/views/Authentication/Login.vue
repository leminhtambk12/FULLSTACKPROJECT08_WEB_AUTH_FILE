<template>
  <div id="login">
    <v-card style="width: 60%;" class="mx-auto">
      <v-card-title class="headline primary white--text">
        Login
      </v-card-title>
      <hr />
      <v-card-text>
        <form>
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
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
};
</script>

<style lang="scss" scoped></style>
