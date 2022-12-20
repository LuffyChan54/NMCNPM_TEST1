<template>
  <container>
    <div class="section-ctn">
      <div class="section-intro">
        <h1 class="section--title">Các mặt hàng bạn đã chọn</h1>
        <p class="section--subTitle">
          Click vào để huỷ, click tăng giảm để điều chỉnh số lượng
        </p>
      </div>

      <div class="wrap-overview-money">
        <div class="section-overview">
          <h1>Cơm: {{ this.quantity("rice") }}</h1>
          <h1>Có Gas: {{ this.quantity("gas") }}</h1>
          <h1>Món Nước: {{ this.quantity("noodles") }}</h1>
          <h1>Không Có Gas: {{ this.quantity("noGas") }}</h1>
          <h1>Bánh Ngọt: {{ this.quantity("cake") }}</h1>
        </div>

        <div class="section-money">
          <h1>Tổng tiền</h1>

          <div class="money-ctn">
            <h1>{{ this.totalCost }}đ</h1>
          </div>
          <h1 v-if="isLogin" class="currMoney">/ {{ this.currMoney }}đ</h1>
        </div>
      </div>

      <div class="section-products">
        <div class="ctn-cards">
          <food-card
            v-for="food in products"
            :key="food.id"
            :quantity="currSelected(food.id)"
            @resetQuantity="resetQuantity(food.id)"
            @icrQuantity="icrQuantity(food.id)"
            @dcrQuantity="dcrQuantity(food.id)"
          >
            <template #img>
              <img :src="food.img" :alt="food.name" />
            </template>
            <template #h1Name>
              <h1>{{ food.name }}</h1>
            </template>
            <template #h1Total>
              <h1>Còn lại: {{ food.total }}</h1>
            </template>
            <template #h1Price>
              <h1>{{ food.price }} đ</h1>
            </template>
          </food-card>
        </div>
      </div>

      <SpecialBTN class="btnPay" @click="payment">
        <h1>Thanh Toán</h1>
      </SpecialBTN>
    </div>
  </container>
  <Teleport to="body">
    <BaseModel v-if="!isValidPayMent" @closeModel="validPayMent">
      <ErrorCard>
        <h1>Không Đủ Tiền!</h1>
      </ErrorCard>
    </BaseModel>
  </Teleport>
  <Teleport to="body">
    <BaseModel v-if="showScreenBill" @closeModel="cancelPayBill">
      <BillCard v-if="isPrintBill"> </BillCard>
      <ErrorCard v-else> <h1>Hết Thời Gian Chờ!</h1></ErrorCard>
    </BaseModel>
  </Teleport>
  <Teleport to="body">
    <BaseModel
      v-if="showScreenBill && NumberValidIDPOS === 0"
      @closeModel="cancelPayBill"
    >
      <ErrorCard> <h1>Rất tiếc, không đủ vị trí nhận hàng!</h1></ErrorCard>
    </BaseModel>
  </Teleport>
  <Teleport to="body">
    <BaseModel v-if="this.isSuccessPayment === true">
      <SuccessCard @onClickSuccessBTN="onClickSuccessBTN">
        <h1>Đặt Món Thành Công!</h1>
      </SuccessCard>
    </BaseModel>
    <BaseModel
      v-if="this.isSuccessPayment === false"
      @closeModel="onClickSuccessBTN"
    >
      <ErrorCard>
        <h1>Đặt Món Thất Bại!</h1>
      </ErrorCard>
    </BaseModel>
  </Teleport>
</template>

<script>
import container from "../Containers/Container.vue";
import FoodCard from "../Cards/FoodCard.vue";
import SpecialBTN from "../Buttons/SpecialBTN.vue";
import BaseModel from "../Models/BaseModel.vue";
import ErrorCard from "../Cards/ErrorCard.vue";
import BillCard from "../Cards/BillCard.vue";
import SuccessCard from "../Cards/SuccessCard.vue";
export default {
  components: {
    container,
    FoodCard,
    SpecialBTN,
    BaseModel,
    ErrorCard,
    BillCard,
    SuccessCard,
  },
  computed: {
    NumberValidIDPOS() {
      return this.$store.state.NumberValidIDPOS;
    },
    isSuccessPayment() {
      return this.$store.state.isSuccessPayment;
    },
    quantity() {
      return (val) => this.$store.state.qTypeSelected[val];
    },
    totalCost() {
      return this.$store.state.totalCost;
    },
    currMoney() {
      return this.$store.state.account.money;
    },
    products() {
      return this.$store.getters.getProductSelected();
    },
    currSelected() {
      return (id) => {
        return this.$store.getters.getqSelected(id);
      };
    },
    isValidPayMent() {
      return this.$store.state.isValidPayMent;
    },
    isLogin() {
      return this.$store.state.isLogin;
    },
    isPrintBill() {
      return this.$store.state.isPrintBill;
    },
    showScreenBill() {
      return this.$store.state.showScreenBill;
    },
  },
  methods: {
    onClickSuccessBTN() {
      this.$store.dispatch("resetIsSuccessPayment");
    },
    icrQuantity(id) {
      this.$store.commit("icrQSelected", id);
    },
    dcrQuantity(id) {
      this.$store.commit("dcrQSelected", id);
    },
    resetQuantity(id) {
      this.$store.commit("resetQSelected", id);
    },
    validPayMent() {
      this.$store.dispatch("resetValidPayment");
    },
    payment() {
      this.$store.dispatch("showUserPayment");
    },
    cancelPayBill() {
      this.$store.dispatch("changeShowScreenBill");
      this.$store.dispatch("cancelUserPayment");
    },
  },
};
</script>

<style scoped>
.section-ctn {
  padding: 4rem 0;
  color: var(--dark);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
  gap: 2rem;
}

.section-overview {
  flex: 1;
  border-radius: var(--radius);
  padding: 1rem 2rem;
  background: var(--yellow);
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: start;
  align-items: center;
  gap: 1rem;
  color: var(--dark);
}

.section-overview > h1 {
  font-size: 1.5rem;
}

.wrap-overview-money {
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.section-money {
  flex: 1.5;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
  align-items: center;
  padding: 0 2rem;
}

.currMoney {
  grid-row: 2;
  grid-column: 2;
}
.total-money {
  display: flex;
  justify-content: space-between;
  color: var(--dark);
}

.total-money > h1 {
  font-size: 1.5rem;
}
.money-ctn {
  width: fit-content;
  background: var(--yellow);
  border-radius: var(--radius);
  border: var(--border_lg) solid var(--dark);
  padding: 0.5rem 1rem;
}

.money-ctn > h1 {
  font-size: 1.5rem;
}

.section-products {
  width: 100%;
}

.ctn-cards {
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  gap: 1rem;
  overflow-x: auto;
  grid-auto-columns: 21%;
  padding: 1rem 0.5rem;
}

.btnPay {
  align-self: center;
}
</style>
