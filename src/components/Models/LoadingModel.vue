<template>
  <Teleport v-if="this.isLoading" to="body">
    <div class="LoadingCTN">
      <h1>LOADING...</h1>
    </div>
  </Teleport>
</template>

<script>
export default {
  components: {},
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
  },
};
</script>

<style scoped>
.LoadingCTN {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(47, 47, 47, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000000;
}

.LoadingCTN h1 {
  font-size: 2rem;
  padding: 1rem 3rem;
  border-radius: var(--radius);
  background: var(--white);
  color: var(--dark);
  font-weight: bold;
}
</style>
