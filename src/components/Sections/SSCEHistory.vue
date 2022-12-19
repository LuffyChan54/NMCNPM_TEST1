<template>
  <div class="CEHistory">
    <div class="CEtopMenu">
      <div class="CETOPbtns">
        <button
          :class="{ active: this.status === 'Import' }"
          @click="changeToImport"
        >
          <h1>Nhập Kho</h1>
        </button>
        <button
          :class="{ active: this.status === 'Export' }"
          @click="changeToExport"
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

    <div class="CEunder">
      <div v-for="(product, idx) in ProductHistoryCE" :key="idx" class="CECard">
        <h1>Tên: {{ product.name }}</h1>
        <h1>({{ changeToNameType(product.type) }})</h1>
        <h1>SL: {{ product.quantity }}</h1>
        <h1 v-if="this.status === 'Import' && this.isDataLoaded">
          Tổng tiền: {{ product.totalCost }}
        </h1>
        <h1 v-if="this.status === 'Import' && this.isDataLoaded">
          Nguồn: {{ product.source }}
        </h1>
        <h1 v-if="this.status === 'Import' && this.isDataLoaded">
          {{ converDate(product.date) }}
        </h1>
        <h1 v-if="this.status === 'Export' && this.isDataLoaded">
          {{ converDate(product.time) }}
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: "Import",
      isDataLoaded: false,
      date: "",
      data: [],
    };
  },
  methods: {
    changeToImport() {
      this.status = "Import";
      this.$store.dispatch("resetHistoryIE");
      this.isDataLoaded = false;
    },
    changeToExport() {
      this.status = "Export";
      this.$store.dispatch("resetHistoryIE");

      this.isDataLoaded = false;
    },

    async searchIEByDate() {
      await this.$store
        .dispatch("searchHistoryIE", {
          status: this.status,
          date: this.date,
        })
        .then(() => {
          // this.data = arr;
          this.isDataLoaded = true;
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

  computed: {
    ProductHistoryCE() {
      return this.$store.state.ProductHistoryCE;
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
  gap: 1rem;
  grid-template-columns: 1.5fr 1fr 1fr 1fr 1.5fr 1fr;
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
