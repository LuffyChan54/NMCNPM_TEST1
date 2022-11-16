<template>
  <button class="SectionBTN">
    <slot name="img"></slot>
    <h1><slot></slot></h1>
    <div class="quantity">
      <h3>{{ this.quantity }}</h3>
    </div>
  </button>
</template>

<script>
export default {
  props: {
    quantity: Number,
  },
};
</script>

<style>
.SectionBTN {
  padding: 0.5rem 1rem;
  border-radius: var(--radius);
  border: none;
  background: #fff;
  color: var(--dark);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  box-shadow: 0px 2px 10px 0px rgba(47, 47, 47, 0.4);
  transition: all 0.25s ease-in;
  cursor: pointer;
  position: relative;
}

.SectionBTN > h1 {
  font-size: 2rem;
}

.SectionBTN.active {
  background: var(--blue);
}

.RiceIcon {
  width: 1.5rem;
  height: auto;
}
.quantity {
  position: absolute;
  top: 5%;
  left: 100%;
  transform: translate(-50%, -50%);
  background: var(--yellow);
  border: var(--border_lg) solid var(--dark);
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}
.quantity > h3 {
  font-size: 1.5rem;
  font-family: inherit;
  font-weight: bold;
  color: var(--dark);
}
</style>
