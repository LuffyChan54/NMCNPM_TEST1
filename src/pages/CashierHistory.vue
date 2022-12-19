<template>
  <SSCashierTemplate>
    <template #buttons>
      <!-- <button
        :class="{ active: this.status === 'statistic' }"
        @click="this.status = 'statistic'"
      >
        <h1>Thống Kê</h1>
      </button> -->
      <button
        :class="{ active: this.status === 'history' }"
        @click="this.status = 'history'"
      >
        <h1>Lịch Sử</h1>
      </button>
    </template>
    <template v-if="this.status === 'statistic'" #mainCTN>
      <!-- <div class="CHStatisticCTN">
        <h1>Cơm: 2</h1>
        <h1>Nước Có Gas: 2</h1>
        <h1>Món Nước: 0</h1>
        <h1>Nước Không Có Gas: 0</h1>
      </div>
      <div class="CHBTNS">
        <CashierUnderBTN @click="getTurnOverToday">Hôm Nay</CashierUnderBTN>
        <CashierUnderBTN @click="getTurnOverMonth">Tháng Này</CashierUnderBTN>
      </div>
      <div class="CSearchCTN">
        <div class="CItem">
          <label for="">Vào Ngày:</label>
          <input type="date" />
          <div @click="getTurnOverByDay" class="iconSearch">
            <i class="fa fa-search" aria-hidden="true"></i>
          </div>
        </div>
        <div class="CItem">
          <label for="">Từ Ngày:</label>
          <input type="date" />

          <label for="">Đến Ngày:</label>
          <input type="date" />

          <div @click="getTurnOverFDTD" class="iconSearch">
            <i class="fa fa-search" aria-hidden="true"></i>
          </div>
        </div>
      </div> -->
    </template>

    <template v-else #mainCTN>
      <div class="CSearchCTN">
        <h1>Tìm kiếm hoá đơn theo:</h1>
        <div class="CSearchCTN2">
          <div class="CItem">
            <label for="">Mã Hoá Đơn:</label>
            <input v-model="this.idBill" type="text" />
            <div @click="seachBIllByIDCS" class="iconSearch">
              <i class="fa fa-search" aria-hidden="true"></i>
            </div>
          </div>
          <div class="CItem">
            <label for="">Ngày:</label>
            <input v-model="this.date" type="date" />
            <div @click="seachBIllByDateCS" class="iconSearch">
              <i class="fa fa-search" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <BillCardUsed></BillCardUsed>
      </div>
    </template>
  </SSCashierTemplate>
</template>

<script>
import SSCashierTemplate from "@/components/Sections/SSCashierTemplate.vue";
// import CashierUnderBTN from "@/components/Buttons/CashierUnderBTN.vue";
import BillCardUsed from "@/components/Cards/BillCardUsed.vue";
export default {
  created() {
    this.$store.dispatch("resetValueUserBillInfo");
  },
  data() {
    return {
      status: "history",
      idBill: "",
      date: "",
    };
  },
  components: {
    SSCashierTemplate,
    // CashierUnderBTN,
    BillCardUsed,
  },
  methods: {
    // getTurnOverToday() {},
    // getTurnOverMonth() {},
    // getTurnOverByDay() {},
    // getTurnOverFDTD() {},
    seachBIllByIDCS() {
      this.$store.dispatch("seachBIllByIDCS", { id: this.idBill });
      //lich su tim kiem theo id
    },
    seachBIllByDateCS() {
      //lich su tim kiem theo ngay
      // console.log("this date", this.date);
      this.$store.dispatch("searchBillByDayCashier", { date: this.date });
    },
  },
};
</script>

<style scoped>
.CSearchCTN2 {
  display: flex;
  justify-content: space-between;
}
.CHBTNS {
  display: flex;
  gap: 2rem;
}
.CHStatisticCTN {
  align-self: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: start;
  gap: 1.5rem;
}

.CHStatisticCTN > h1 {
  font-size: 1.5rem;
  color: var(--yellow);
}

/*  */
.CSearchCTN {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
}

.CSearchCTN h1 {
  font-size: 1.5rem;
  color: var(--white);
}
.CSearchCTN {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
}

.CSearchCTN h1 {
  font-size: 1.5rem;
  color: var(--white);
}

.CItem {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.CItem > label {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--white);
}

.CItem > input {
  font-size: 1.5rem;
  color: var(--dark);
  font-weight: bold;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: var(--radius);
  background: var(--white);
}

.CItem > input:focus {
  outline: none;
}

.iconSearch {
  cursor: pointer;
  padding: 1rem;
  border-radius: 50%;
  background: var(--yellow);
}

.iconSearch i {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--dark);
}
</style>
