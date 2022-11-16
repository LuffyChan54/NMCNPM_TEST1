<template>
  <button class="buy-btn">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style>
.buy-btn {
  background: var(--stt-green);
  border-radius: var(--radius);
  border: none;
  padding: 0.5rem 1rem;
  color: var(--white);
  cursor: pointer;
}
.buy-btn > h1 {
  font-family: inherit;
  font-size: 1.5rem;
}
</style>
