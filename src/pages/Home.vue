<template>
  <SSHeader></SSHeader>
  <SSFood></SSFood>
  <SSDrink></SSDrink>
  <SSPayMent></SSPayMent>
</template>

<script>
import SSHeader from "../components/Sections/SSHeader.vue";
import SSFood from "../components/Sections/SSFood.vue";
import SSDrink from "../components/Sections/SSDrink.vue";
import SSPayMent from "../components/Sections/SSPayMent.vue";
export default {
  components: {
    SSHeader,
    SSFood,
    SSDrink,
    SSPayMent,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
