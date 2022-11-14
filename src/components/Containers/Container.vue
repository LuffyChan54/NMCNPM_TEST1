<template>
  <div id="container">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#container {
  background: var(--white);
  width: 90vw;
  max-width: 1440px;
  height: 100%;
  padding: 0 2rem;
}
</style>
