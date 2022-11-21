<template>
  <button class="CUnderBTN">
    <h1>
      <slot></slot>
    </h1>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.CUnderBTN {
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: var(--radius);
  background: var(--yellow);
  display: flex;
  justify-content: center;
  align-items: center;
}

.CUnderBTN > h1 {
  font-size: 1.5rem;
  color: var(--dark);
}
</style>
