<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container>
        <Errors />
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
import Errors from "./components/Errors";
export default {
  name: "App",

  components: { Navbar, Errors },

  data() {
    return {};
  },
};
</script>
<style>
/* Reset Css  */
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
a {
  text-decoration: none;
  color: #fff;
}
</style>
