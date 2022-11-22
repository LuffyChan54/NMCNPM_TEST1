<template>
  <div class="CEHistory">
    <div class="CEtopMenu">
      <div class="CETOPbtns">
        <button
          :class="{ active: this.status === 'Import' }"
          @click="this.status = 'Import'"
        >
          <h1>Nhập Kho</h1>
        </button>
        <button
          :class="{ active: this.status === 'Export' }"
          @click="this.status = 'Export'"
        >
          <h1>Xuất Kho</h1>
        </button>
      </div>

      <div class="CETOPSearch">
        <label for="">Tìm Theo Ngày</label>
        <input v-model="this.date" type="date" />
        <div @click="searchIEByDate" class="CEiconSearch">
          <i class="fa fa-search" aria-hidden="true"></i>
        </div>
      </div>
    </div>

    <div class="CEunder" v-if="this.data.length !== 0">
      <div v-for="(product, idx) in data" :key="idx" class="CECard">
        <h1>{{ product.name }}</h1>
        <h1>({{ changeToNameType(product.type) }})</h1>
        <h1>{{ product.quantity }}</h1>
        <h1>{{ product.totalCost }}</h1>
        <h1>{{ product.source }}</h1>
        <h1>{{ converDate(product.date) }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: "Import",
      date: "",
      data: [],
    };
  },
  methods: {
    searchIEByDate() {
      this.$store
        .dispatch("searchHistoryIE", {
          status: this.status,
          date: this.date,
        })
        .then((arr) => {
          this.data = arr;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    changeToNameType(type) {
      switch (type) {
        case "rice":
          return "Cơm";
        case "noodles":
          return "Các Món Nước";
        case "cake":
          return "Bánh Ngọt";
        case "gas":
          return "Nước Có Gas";
        case "noGas":
          return "Nước Không Có Gas";
      }
    },
    converDate(date) {
      const arr = date.split("-");
      return `${arr[2]}/${arr[1]}/${arr[0]}`;
    },
  },
};
</script>

<style scoped>
.CEunder {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.CECard {
  display: grid;
  grid-template-columns: 1fr 1.5fr 0.5fr 1fr 1fr 1fr;
  background: var(--white);
  border-radius: var(--radius);
  padding: 0.5rem 1rem;
}

.CECard h1 {
  font-size: 1.5rem;
  color: var(--dark);
}
.CEiconSearch {
  padding: 0.6rem;
  border-radius: 50%;
  cursor: pointer;
  background: var(--yellow);
}

.CEiconSearch i {
  font-size: 2rem;
  color: var(--dark);
  font-weight: bold;
}
.CETOPSearch input:focus {
  outline: none;
}
.CETOPSearch input {
  border: none;
  border-radius: var(--radius);
  padding: 0.5rem 1.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--dark);
  letter-spacing: 1px;
}
.CETOPSearch label {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--white);
}
.CETOPSearch {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.CETOPbtns {
  display: flex;
  gap: 2rem;
}
.CEHistory {
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.CEtopMenu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.CEtopMenu button {
  cursor: pointer;
  background: var(--white);
  color: var(--dark);
  border-radius: var(--radius);
  border: 0;
  padding: 0.5rem 1.5rem;
}

.CEtopMenu button h1 {
  font-size: 1.5rem;
  color: var(--dark);
}

.CEtopMenu button.active {
  background: var(--blue);
}
</style>
