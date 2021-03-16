<template>
  <div id="error">
    <v-container>
      <div class="error pa-3 mx-auto" v-if="error !== ''">
        {{ error }}
      </div>
    </v-container>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["error"]),
  },
};
</script>

<style lang="scss" scoped></style>
