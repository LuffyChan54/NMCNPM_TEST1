<template>
  <div class="successCTN">
    <div class="titleCTN">
      <slot></slot>
    </div>
    <button @click="onClickSuccessBTN" class="successBTN">
      <h1>OK</h1>
    </button>
  </div>
</template>

<script>
export default {
  emits: ["onClickSuccessBTN"],
  methods: {
    onClickSuccessBTN() {
      this.$emit("onClickSuccessBTN");
    },
  },
};
</script>

<style>
.successCTN {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--radius);
  background: var(--white);
  border: var(--borer_lg) solid var(--dark);
  color: var(--dark);
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 4rem;
}

.titleCTN {
  border-radius: var(--radius);
  color: var(--white);
  background: var(--stt-green);
  padding: 2rem 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.titleCTN > h1 {
  font-size: 2rem;
  color: var(--white);
}

.successBTN {
  border: var(--borer_lg) solid var(--dark);
  border-radius: var(--radius);
  background: var(--yellow);
  color: var(--dark);
  cursor: pointer;
  padding: 1rem 2rem;
}
</style>
