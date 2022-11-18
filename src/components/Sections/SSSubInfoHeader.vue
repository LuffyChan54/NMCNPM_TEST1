<template>
  <div class="InfoBTNS">
    <i
      @click="this.$router.push('/')"
      class="fa fa-arrow-circle-left iconBackHome"
      aria-hidden="true"
    ></i>
    <div class="InfoMoneyCTN">
      <h1>{{ this.money }}đ</h1>
      <i
        @click="this.isOpenAddMoney = true"
        class="fa fa-plus-circle iconAddMoney"
        aria-hidden="true"
      ></i>
    </div>
  </div>
  <AddMoneyModal
    v-if="this.isOpenAddMoney"
    @closeModel="this.isOpenAddMoney = false"
  >
  </AddMoneyModal>
</template>

<script>
import AddMoneyModal from "../Models/AddMoneyModal.vue";
export default {
  data() {
    return {
      isOpenAddMoney: false,
    };
  },
  components: {
    AddMoneyModal,
  },
  computed: {
    money() {
      return this.$store.state.account.money;
    },
  },
};
</script>

<style scoped>
.InfoBTNS {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--dark);
}

.iconBackHome {
  font-size: 3.5rem;
  cursor: pointer;
}
.InfoMoneyCTN {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;
}

.InfoMoneyCTN h1 {
  font-size: 3rem;
}

.InfoMoneyCTN i {
  font-size: 3.5rem;
  cursor: pointer;
}
</style>
