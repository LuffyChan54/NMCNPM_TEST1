<template>
  <div class="Special-btn">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
.Special-btn {
  width: fit-content;
  background: var(--yellow);
  border-radius: var(--radius);
  border: var(--border_lg) solid var(--dark);
  padding: 1rem 3rem;
  color: var(--dark);
  cursor: pointer;
}

.Special-btn > h1 {
  color: var(--dark);
  font-size: 2rem;
}
</style>
