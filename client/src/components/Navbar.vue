<template>
  <div id="navbar">
    <v-app-bar app color="primary" class="white--text" flat dark>
      <v-container fluid>
        <div class="titleApp">
          <router-link to="/" class="white--text headline">
            MEVN-Youtube_Ideas
          </router-link>
        </div>
        <div style="float:right;">
          <v-btn color="primary" depressed>
            <router-link class="white--text" to="/">Home</router-link>
          </v-btn>
          <v-btn color="primary" depressed>
            <router-link class="white--text" to="/about">About</router-link>
          </v-btn>
          <v-btn color="primary" depressed>
            <router-link class="white--text" to="/register">
              Register
            </router-link>
          </v-btn>
          <v-btn color="primary" depressed>
            <router-link class="white--text" to="/login">Login</router-link>
          </v-btn>
          <v-btn color="primary" depressed>
            <router-link class="white--text" to="/profile">Profile</router-link>
          </v-btn>
          <v-btn color="primary" depressed>
            <a href="#" class="logout">Logout</a>
          </v-btn>
        </div>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.titleApp {
  display: inline-block;
  width: 30%;
}
.logout {
  color: #fff;
}
</style>
