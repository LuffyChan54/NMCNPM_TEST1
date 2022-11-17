<template>
  <SSHeader></SSHeader>
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
export default {
  components: {
    SSHeader,
    SSFood,
    SSDrink,
    SSPayMent,
    SSAbout,
    SSFooter,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
