<template>
  <div id="register">
    <v-card style="width: 60%;" class="mx-auto">
      <v-card-title class="headline primary white--text">
        Register
      </v-card-title>
      <hr />
      <v-card-text>
        <form @submit.prevent="registerUser">
          <v-text-field v-model="name" label="Name" required></v-text-field>
          <v-text-field
            v-model="username"
            label="Username"
            required
          ></v-text-field>
          <v-text-field v-model="email" label="Email" required></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            required
          ></v-text-field>
          <v-text-field
            v-model="confirm_password"
            label="Confirm_password"
            required
          ></v-text-field>
          <v-btn class="mr-4 primary white--text" type="submit">
            Register
          </v-btn>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <router-link to="/login">
            Already have an account?
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
      name: "",
      username: "",
      email: "",
      password: "",
      confirm_password: "",
    };
  },
  methods: {
    ...mapActions(["register"]),
    registerUser() {
      let user = {
        name: this.name,
        username: this.username,
        email: this.email,
        password: this.password,
        confirm_password: this.confirm_password,
      };
      this.register(user).then((res) => {
        if (res.data.success) {
          this.$router.push("/login");
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
