<template>
  <template v-if="this.isLogin">
    <container>
      <div class="UserHistoryCTN">
        <div class="UserHistoryHeader">
          <SSSubInfoHeader></SSSubInfoHeader>
        </div>

        <div class="UserHistoryUsedCTN">
          <h1>Tháng này bạn đã dùng:</h1>
          <div class="UserHistoryOverview">
            <div class="UserHistoryUsedItem">
              <h1>Cơm: {{ this.QuantityTypeUsed.rice }}</h1>
            </div>
            <div class="UserHistoryUsedItem">
              <h1>Món nước: {{ this.QuantityTypeUsed.noodles }}</h1>
            </div>
            <div class="UserHistoryUsedItem">
              <h1>Có gas: {{ this.QuantityTypeUsed.gas }}</h1>
            </div>
            <div class="UserHistoryUsedItem">
              <h1>KCó gas: {{ this.QuantityTypeUsed.noGas }}</h1>
            </div>
            <div class="UserHistoryUsedItem">
              <h1>Bánh ngọt: {{ this.QuantityTypeUsed.cake }}</h1>
            </div>
          </div>
        </div>

        <div class="UserHistoryCost">
          <h1>Tổng số tiền đã chi:</h1>
          <div class="UserHistoryTTCost">
            <h1>{{ this.moneyUsedInMonth }}đ</h1>
          </div>
        </div>

        <div class="watchBill">
          <h1>Xem lại các hoá đơn</h1>
          <div class="UserHistorySearchCTN">
            <input v-model="this.dateInput" type="date" name="" id="" />
            <div class="searchBillCTN">
              <i
                @click="searchBillByDate"
                class="fa fa-search"
                aria-hidden="true"
              ></i>
            </div>
          </div>
          <BillCardUsed></BillCardUsed>
        </div>
      </div>
    </container>
    <SSFooter></SSFooter>
  </template>
  <ErrorPage v-else></ErrorPage>
</template>

<script>
import ErrorPage from "./ErrorPage.vue";
import container from "../components/Containers/Container.vue";
import SSSubInfoHeader from "@/components/Sections/SSSubInfoHeader.vue";
import SSFooter from "@/components/Sections/SSFooter.vue";
import BillCardUsed from "../components/Cards/BillCardUsed.vue";
export default {
  components: {
    ErrorPage,
    container,
    SSSubInfoHeader,
    SSFooter,
    BillCardUsed,
  },
  data() {
    return {
      dateInput: "",
    };
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
    QuantityTypeUsed() {
      return this.$store.state.QuantityTypeUsed;
    },
    moneyUsedInMonth() {
      return this.$store.state.moneyUsedInMonth;
    },
  },
  methods: {
    searchBillByDate() {
      const dateArr = this.dateInput.split("-");
      this.$store.dispatch("searchBillByDate", {
        year: dateArr[0],
        month: dateArr[1],
        day: dateArr[2],
      });
    },
  },
};
</script>

<style scoped>
.UserHistoryCTN {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  color: var(--dark);
}
.UserHistoryHeader {
  padding: 3rem 0 5rem;
}

.UserHistoryUsedCTN {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.UserHistoryOverview {
  max-width: 60%;
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 2rem;
}

.UserHistoryUsedItem {
  background: var(--yellow);
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  border-radius: var(--radius);
}

.UserHistoryCost {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
}

.UserHistoryTTCost {
  width: fit-content;
  background: var(--yellow);
  border-radius: var(--radius);
  padding: 0.5rem 1rem;
}

.watchBill {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.UserHistorySearchCTN {
  width: fit-content;
  display: flex;
  gap: 2rem;
}

.UserHistorySearchCTN > input {
  border-radius: var(--radius);
  background: #d9d9d9;
  padding: 0.5rem;
  color: var(--dark);
  font-weight: bold;
  border: none;
  font-size: 1.5rem;
}

.UserHistorySearchCTN > input:focus {
  outline: none;
}

.searchBillCTN {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  cursor: pointer;
  background: var(--yellow);
  overflow: hidden;
  border: var(--border_lg) solid var(--dark);
  width: 3rem;
  height: 3rem;
}

.searchBillCTN > i {
  font-weight: bold;
  font-size: 1.5rem;
}
</style>
