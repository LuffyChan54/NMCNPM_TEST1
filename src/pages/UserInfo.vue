<template>
  <div v-if="this.isLogin" class="userInfoCtn"></div>
  <ErrorPage v-else></ErrorPage>
</template>

<script>
import ErrorPage from "./ErrorPage.vue";
export default {
  components: {
    ErrorPage,
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
  },
};
</script>

<style></style>
