<template>
  <container>
    <div class="afterLoginHeaderCTN">
      <div class="Money-Account-CTN">
        <div class="moneyCTN">
          <div class="currMoney">
            <img src="../../assets/imgs/moneyIcon.png" />
            <h1>{{ money }}đ</h1>
          </div>
          <specialBTN @click="this.isAddMoney = true">
            <h1 style="font-size: 2rem">Nạp tiền</h1>
          </specialBTN>
        </div>
        <accountCard></accountCard>
      </div>

      <p class="titialTutorial">Click vào để xem chi tiết</p>

      <statusFoodCard></statusFoodCard>
    </div>
  </container>
  <AddMoneyModal
    v-if="this.isAddMoney"
    @closeModel="this.isAddMoney = false"
  ></AddMoneyModal>
</template>

<script>
import container from "../Containers/Container.vue";
import specialBTN from "../Buttons/SpecialBTN.vue";
import accountCard from "../Cards/AccountCard.vue";
import statusFoodCard from "../Cards/StatusFoodCard.vue";
import AddMoneyModal from "../Models/AddMoneyModal.vue";
export default {
  components: {
    container,
    specialBTN,
    accountCard,
    statusFoodCard,
    AddMoneyModal,
  },
  data() {
    return {
      isAddMoney: false,
    };
  },
  computed: {
    money() {
      return this.$store.state.account.money;
    },
  },
  created() {
    if (
      this.$store.state.account.role === "admin" &&
      this.$store.state.isLogin
    ) {
      this.$router.push("/cashierhome");
    }
  },
};
</script>

<style scoped>
.afterLoginHeaderCTN {
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  gap: 2rem;
}

.Money-Account-CTN {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.moneyCTN {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
}

.currMoney {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--dark);
}

.currMoney img {
  width: 3rem;
  height: auto;
}

.currMoney h1 {
  font-size: 2.5rem;
}

.titialTutorial {
  font-size: 1rem;
  color: var(--dark);
  font-style: italic;
}
</style>
