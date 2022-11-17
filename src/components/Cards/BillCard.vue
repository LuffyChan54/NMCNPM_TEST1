<template>
  <div class="bill-ctn">
    <div class="id-container">
      <div class="id-wrapper">
        <div class="id-Item" v-for="idpos in idPositions" :key="idpos.id">
          <h1 class="letter" :style="{ color: idpos.color }">
            {{ idpos.letter }}
          </h1>
          <h1 class="number">{{ idpos.number }}</h1>
        </div>
      </div>
      <button class="questionMark" @click="turnOnTutorial">
        <h1>?</h1>
      </button>
    </div>
    <div class="TimeContainer">
      <h1>Thời gian: {{ this.currTime }}</h1>
    </div>
    <div class="userContainer">
      <h1>Tên người mua: {{ this.account.fullName }}</h1>
      <h1>ID người mua: {{ this.account.id }}</h1>
    </div>
    <div class="idBillContainer">
      <h1>Mã hoá đơn: {{ this.idBill }}</h1>
    </div>
    <div class="productContainer">
      <template v-for="product in products" :key="product.id">
        <h1 class="ProductName">{{ product.name }}</h1>
        <h1>{{ this.getqSelected(product.id) }}</h1>
        <h1>{{ this.getqSelected(product.id) * product.price }}đ</h1>
      </template>
    </div>
    <div class="rulerContainer"></div>
    <div class="totalContainer">
      <h1>Tổng</h1>
      <h1>{{ this.totalCost }}đ</h1>
    </div>
    <BuyBTN @click="doUserPayment">
      <h1>THANH TOÁN</h1>
    </BuyBTN>
    <div class="countContainer">
      <h1>{{ this.count }}</h1>
    </div>
  </div>
  <Teleport to="body">
    <BaseModel v-if="this.isTutorialOn" @closeModel="this.isTutorialOn = false">
      <div class="tutorialCTN">
        <div class="EX-header">
          <h1>Ví dụ</h1>
          <div class="EX">
            <h1 class="EXletter">A</h1>
            <h1 class="EXnumber">7</h1>
          </div>
        </div>
        <div class="EX-content">
          <h1>Hàng của bạn được đặt ở:</h1>
          <h1>Quầy A</h1>
          <h1>Hàng Xanh</h1>
          <h1>Vị trí 7</h1>
        </div>
      </div>
    </BaseModel>
  </Teleport>
</template>

<script>
import BaseModel from "../Models/BaseModel.vue";
import BuyBTN from "../Buttons/BuyBTN.vue";
export default {
  components: {
    BuyBTN,
    BaseModel,
  },
  data() {
    return {
      count: 0,
      isTutorialOn: false,
    };
  },
  methods: {
    doUserPayment() {
      this.$store.dispatch("doUserPayment");
    },
    turnOnTutorial() {
      this.isTutorialOn = true;
    },
  },
  watch: {
    count: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.count--;
          }, 1000);
        } else {
          if (this.isPrintBill) {
            this.count = this.getCount;
          }
        }
      },
      immediate: true, // This ensures the watcher is triggered upon creation
    },
  },
  computed: {
    isPrintBill() {
      return this.$store.state.isPrintBill;
    },
    getCount() {
      return this.$store.state.timeWaitingBill;
    },
    getqSelected() {
      return (id) => this.$store.getters.getqSelected(id);
    },
    totalCost() {
      return this.$store.state.totalCost;
    },
    products() {
      return this.$store.getters.getProductSelected();
    },
    idPositions() {
      return this.$store.state.idValidPosition;
    },
    currTime() {
      let rs = "";
      let objectDate = new Date();
      let day = objectDate.getDate();
      let month = objectDate.getMonth() + 1;
      let year = objectDate.getFullYear();
      let hours = objectDate.getHours();
      let minutes = objectDate.getMinutes();

      rs = `${hours}:${minutes} ${day}/${month}/${year}`;
      return rs;
    },
    account() {
      return this.$store.state.account;
    },
    idBill() {
      return this.$store.state.idBill;
    },
  },
};
</script>

<style scoped>
.tutorialCTN {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 2rem;
  border-radius: var(--radius);
  border: var(--border_lg) solid var(--dark);
  background: var(--white);
  color: var(--dark);
}

.EX-header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.EX {
  width: fit-content;
  display: flex;
  gap: 0.5rem;
}

.EX .EXletter {
  font-size: 2rem;
  color: var(--stt-green);
}

.EX .Number {
  font-size: 2rem;
  color: var(--dark);
}

.EX-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--dark);
  width: 100%;
}

.EX-content > h1:not(:nth-child(1)) {
  align-self: center;
  background: var(--yellow);
  border-radius: var(--radius);
  padding: 0.5rem;
}

.EX-content > h1:nth-child(3) {
  color: var(--stt-green);
}
.countContainer {
  justify-self: center;
  border-radius: 50%;
  background: var(--yellow);
  width: 4rem;
  height: 4rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.countContainer > h1 {
  color: var(--dark);
  font-size: 2rem;
}
.bill-ctn {
  font-size: 0.8rem;
  border-radius: var(--radius);
  border: var(--border_lg) solid var(--dark);
  background: var(--white);
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
}

.id-container {
  position: relative;
  width: 100%;
}

.questionMark {
  position: absolute;
  top: 10%;
  left: 90%;
  width: 2rem;
  height: 2rem;
  border: var(--border_lg) solid var(--dark);
  border-radius: 50%;
  background: var(--yellow);
  cursor: pointer;
  color: var(--dark);
}

.questionMark > h1 {
  color: var(--dark);
  font-weight: 800;
  font-size: 1rem;
}
.id-wrapper {
  width: 100%;
  display: grid;
  justify-content: center;
  grid-auto-flow: column;
  gap: 1rem;
  overflow-x: auto;
  grid-auto-columns: 21%;
  padding: 1rem 0.5rem;
}
.id-Item {
  display: flex;
}

.id-Item .letter {
  font-size: 3rem;
  font-weight: bold;
  color: var(--stt-green);
}
.id-Item .number {
  color: var(--dark);
  font-size: 3rem;
}

.TimeContainer {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  color: var(--dark);
}

.userContainer {
  width: 100%;
  color: var(--dark);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.idBillContainer {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  color: var(--dark);
}

.productContainer {
  max-height: 10rem;
  max-width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr 2fr;
  gap: 0.5rem;
  justify-items: end;
  color: var(--dark);
  overflow-x: hidden;
  overflow-y: auto;
}

.productContainer .ProductName {
  justify-self: start;
}

.rulerContainer {
  width: 100%;
  height: 0.5rem;
  background: var(--yellow);
}

.totalContainer {
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: var(--dark);
}
</style>
