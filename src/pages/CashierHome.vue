<template>
  <h1 v-if="this.isLogin">CASHIER PAGE</h1>
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

<style scoped></style>
