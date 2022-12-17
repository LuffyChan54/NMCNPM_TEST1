<template>
  <BaseModelVue @closeModel="closeModel">
    <div v-if="!this.doAddMoney" class="addMoneyCTN">
      <div class="addMoneyTitleCTN">
        <h1>Nạp card</h1>
      </div>
      <div class="addMoneyInputCard">
        <label>Nhập mã số thẻ</label>
        <input v-model="this.cardCode" type="text" name="" id="" />
      </div>
      <sepecialBTN @click="addMoney" style="align-self: center">
        <h1>Xác Nhận</h1>
      </sepecialBTN>
    </div>
    <ErrorCard v-if="this.doAddMoney && this.statusAction === false">
      <h1>Nạp thẻ thất bại!</h1>
    </ErrorCard>
    <SuccessCard
      v-if="this.doAddMoney && this.statusAction === true"
      @onClickSuccessBTN="closeModel"
    >
      <h1>Nạp thẻ thành công!</h1>
    </SuccessCard>
  </BaseModelVue>
</template>

<script>
import BaseModelVue from "./BaseModel.vue";
import sepecialBTN from "../Buttons/SpecialBTN.vue";
import ErrorCard from "../Cards/ErrorCard.vue";
import SuccessCard from "../Cards/SuccessCard.vue";
export default {
  data() {
    return {
      cardCode: "",
      doAddMoney: false,
      statusAction: "",
    };
  },
  emits: ["closeModel"],
  components: {
    BaseModelVue,
    sepecialBTN,
    ErrorCard,
    SuccessCard,
  },
  methods: {
    closeModel() {
      this.doAddMoney = false;
      this.statusAction = "";
      this.$emit("closeModel");
    },
    async addMoney() {
      this.doAddMoney = true;
      const rs = await this.$store.dispatch("addMoney", this.cardCode);

      if (rs === "success") {
        this.statusAction = true;
      } else {
        this.statusAction = false;
      }
    },
  },
};
</script>

<style scoped>
.addMoneyCTN {
  border-radius: var(--radius);
  background: var(--white);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.addMoneyTitleCTN {
  width: fit-content;
  border-radius: var(--radius);
  background: var(--yellow);
  padding: 0.5rem;
  text-align: center;
}
.addMoneyTitleCTN > h1 {
  font-size: 1.5rem;
  color: var(--dark);
}

.addMoneyInputCard {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--dark);
  font-size: 1.5rem;
}

.addMoneyInputCard > label {
  font-weight: bold;
}
.addMoneyInputCard > input {
  border: var(--border_lg) solid var(--dark);
  background: var(--white);
  border-radius: var(--radius);
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1.5px;
  color: var(--dark);
}
</style>
