<template>
  <LoadingModelVue v-if="this.isLoading"></LoadingModelVue>

  <router-view></router-view>
</template>

<script>
import LoadingModelVue from "./components/Models/LoadingModel.vue";

export default {
  name: "App",
  components: {
    LoadingModelVue,
  },

  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
};
</script>
