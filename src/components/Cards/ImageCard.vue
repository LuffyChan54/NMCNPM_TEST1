<template>
  <div class="ImageCTN">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style>
.ImageCTN {
  width: 16rem;
  height: 10rem;
  border-radius: var(--radius);
  border: var(--border_lg) solid var(--dark);
  box-shadow: 0px 2px 10px var(--dark);
  overflow: hidden;
}

.ImageCTN > img {
  width: 100%;
}
</style>
