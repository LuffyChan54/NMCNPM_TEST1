<template>
  <div class="ExportCTN">
    <div class="ExportBTNS">
      <button
        :class="{ active: this.status === 'gas' }"
        @click="this.status = 'gas'"
      >
        <h1>Nước Uống Có Gas</h1>
      </button>

      <button
        :class="{ active: this.status === 'noGas' }"
        @click="this.status = 'noGas'"
      >
        <h1>Nước Uống Không Gas</h1>
      </button>

      <button
        :class="{ active: this.status === 'cake' }"
        @click="this.status = 'cake'"
      >
        <h1>Bánh Ngọt</h1>
      </button>
    </div>

    <div class="productInfoCTN">
      <div class="ExportCard">
        <h1>Tên Sản Phẩm: Coca cola</h1>
        <h1>Số Lượng Tồn: 15</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: "gas",
    };
  },
};
</script>

<style scoped>
.ExportInputItem {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.ExportCard h1 {
  font-size: 1rem;
  color: var(--dark);
}
.ExportCard {
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 1rem;
  align-items: center;
}
.productInfoCTN {
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 2rem;
  border-radius: var(--radius);
  background: var(--yellow);
}
.ExportBTNS button {
  border: none;
  border-radius: var(--radius);
  background: var(--white);
  cursor: pointer;
  padding: 0.5rem 1.5rem;
}

.ExportBTNS button.active {
  background: var(--blue);
}

.ExportBTNS button h1 {
  font-size: 1.5rem;
  color: var(--dark);
}
.ExportBTNS {
  display: flex;
  gap: 1rem;
}
.ExportCTN {
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
</style>
