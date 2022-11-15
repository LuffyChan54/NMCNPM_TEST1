<template>
  <button class="RegularBTN">
    <p class="contentRBTN">
      <slot></slot>
    </p>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.RegularBTN {
  /* width: 12.5rem; */
  padding: 1rem 2rem;
  /* height: 4rem; */

  border-radius: var(--radius);
  border: var(--border_lg) solid var(--dark);
  background-color: var(--white);
  text-align: center;
  cursor: pointer;
  transition: all 0.25s ease-in;
}

.RegularBTN.active {
  background: var(--blue);
}

.contentRBTN {
  font-size: 1.5rem;
  color: var(--dark);
  font-weight: bold;
}
</style>
