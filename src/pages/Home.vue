<template>
  <SSHeader v-if="!isLogin"></SSHeader>
  <SSHeaderUserAfter v-if="isLogin"></SSHeaderUserAfter>
  <SSFood></SSFood>
  <SSDrink></SSDrink>
  <SSPayMent></SSPayMent>
  <SSAbout></SSAbout>
  <SSFooter></SSFooter>
</template>

<script>
import SSHeader from "../components/Sections/SSHeader.vue";
import SSFood from "../components/Sections/SSFood.vue";
import SSDrink from "../components/Sections/SSDrink.vue";
import SSPayMent from "../components/Sections/SSPayMent.vue";
import SSAbout from "../components/Sections/SSAbout.vue";
import SSFooter from "../components/Sections/SSFooter.vue";
import SSHeaderUserAfter from "../components/Sections/SSHeaderUserAfter.vue";
export default {
  components: {
    SSHeader,
    SSFood,
    SSDrink,
    SSPayMent,
    SSAbout,
    SSFooter,
    SSHeaderUserAfter,
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
  },
};
</script>
