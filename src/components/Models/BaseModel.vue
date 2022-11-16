<template>
  <div class="modal--container">
    <div class="modal--content">
      <slot></slot>
      <button v-if="!isPrintBill" @click="closeModel" class="modal--btnClose">
        <i class="fa fa-times modal--iconClose" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["closeModel"],
  methods: {
    closeModel() {
      this.$emit("closeModel");
    },
  },
  computed: {
    isPrintBill() {
      return this.$store.state.isPrintBill;
    },
  },
};
</script>

<style scoped>
.modal--container {
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(47, 47, 47, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal--content {
  position: absolute;
  padding: 1rem;
}

.modal--btnClose {
  position: absolute;
  top: 5%;
  left: 95%;
  transform: translate(-50%, -50%);
  width: 4em;
  height: 3.2rem;
  border-radius: 50%;
  border: var(--border_lg) solid var(--dark);
  color: var(--dark);
  background: var(--yellow);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.modal--iconClose {
  font-size: 2rem;
}
</style>
