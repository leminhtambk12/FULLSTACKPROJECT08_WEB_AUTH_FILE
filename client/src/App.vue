<template>
  <v-app>
    <Navbar />
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",

  components: { Navbar },

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
