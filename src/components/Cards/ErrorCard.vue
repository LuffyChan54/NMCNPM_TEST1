<template>
  <div class="error-ctn">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
.error-ctn {
  padding: 2rem 4rem;
  background: var(--stt-red);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--dark);
  border-radius: var(--radius);
  border: var(--border_lg) solid var(--dark);
}

.error-ctn h1 {
  font-size: 2rem;
}
</style>
