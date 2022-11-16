<template>
  <div class="card--container" :class="{ active: this.quantity > 0 }">
    <div @click="onToggle" class="container-img">
      <slot name="img"></slot>
    </div>
    <div class="container-content">
      <div class="control--btn">
        <button @click="dcrQuantity" class="btn decreaseBTN">
          <p>-</p>
        </button>
        <h1>{{ this.quantity }}</h1>
        <button @click="icrQuantity" class="btn">
          <p>+</p>
        </button>
      </div>
      <div class="sub-container">
        <div class="sub-content">
          <div class="nameCTN">
            <slot name="h1Name"></slot>
          </div>
          <slot name="h1Total"></slot>
          <slot name="h1Price"></slot>
        </div>
        <button @click="onToggle" class="check-btn">
          <i class="fa fa-check" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ["resetQuantity", "icrQuantity", "dcrQuantity"],
  props: {
    quantity: Number,
  },
  methods: {
    resetQuantity() {
      this.$emit("resetQuantity");
    },
    icrQuantity() {
      this.$emit("icrQuantity");
    },
    dcrQuantity() {
      this.$emit("dcrQuantity");
    },
    onToggle() {
      if (this.quantity > 0) {
        this.resetQuantity();
      } else {
        this.icrQuantity();
      }
    },
  },
};
</script>

<style>
.card--container {
  width: 14rem;
  height: 22rem;
  border-radius: var(--radius);
  color: var(--dark);
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 2px 10px 5px rgba(47, 47, 47, 0.4);
}

.card--container.active {
  background: var(--yellow);
}

.container-img {
  overflow: hidden;
  height: 50%;
  width: 100%;
  cursor: pointer;
}

.container-img > img {
  inline-size: 100%;
  object-fit: cover;
  aspect-ratio: 16/12;
}

.control--btn {
  display: flex;
  padding: 0.5rem 1rem;
  justify-content: space-around;
  align-items: center;
}

.control--btn h1 {
  opacity: 0.6;
}

.card--container.active .control--btn h1 {
  opacity: 1;
}

.control--btn > button {
  text-align: center;
  font-size: 2rem;
  border: none;
  background: var(--dark);
  padding: 0 0.5rem;
  color: var(--white);
  border-radius: var(--radius);
  cursor: pointer;
}
.decreaseBTN > p {
  transform: translateY(-10%);
  width: 1.2rem;
}

.container-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.sub-container {
  padding: 0 0.5rem;
  display: flex;
  gap: 0.2rem;
  justify-content: space-between;
}

.check-btn {
  height: 3rem;
  border-radius: var(--radius);
  width: 3rem;
  background: var(--white);
  align-self: end;
  cursor: pointer;
}

.check-btn i {
  opacity: 0;
  color: var(--dark);
  font-size: 2rem;
}

.card--container.active .check-btn {
  background: var(--blue);
}
.card--container.active .check-btn i {
  opacity: 1;
}

.nameCTN {
  height: 2rem;
  overflow: hidden;
}

.sub-content h1 {
  font-family: inherit;
  font-size: 1.5rem;
}

.sub-container h1:nth-child(3) {
  color: var(--yellow);
}

.card--container.active .sub-container h1:nth-child(3) {
  color: var(--dark);
}
</style>
