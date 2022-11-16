<template>
  <SSHeader></SSHeader>
  <SSFood></SSFood>
  <SSDrink></SSDrink>
</template>

<script>
import SSHeader from "../components/Sections/SSHeader.vue";
import SSFood from "../components/Sections/SSFood.vue";
import SSDrink from "../components/Sections/SSDrink.vue";
export default {
  components: {
    SSHeader,
    SSFood,
    SSDrink,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
