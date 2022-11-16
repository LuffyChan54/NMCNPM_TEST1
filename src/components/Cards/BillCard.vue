<template>
  <div class="bill-ctn">
    <div class="id-container">
      <div class="id-wrapper">
        <div class="id-Item">
          <h1 class="letter">A</h1>
          <h1 class="number">5</h1>
        </div>
        <div class="id-Item">
          <h1 class="letter">A</h1>
          <h1 class="number">5</h1>
        </div>
        <div class="id-Item">
          <h1 class="letter">A</h1>
          <h1 class="number">5</h1>
        </div>
        <div class="id-Item">
          <h1 class="letter">A</h1>
          <h1 class="number">5</h1>
        </div>
        <div class="id-Item">
          <h1 class="letter">A</h1>
          <h1 class="number">5</h1>
        </div>
        <div class="id-Item">
          <h1 class="letter">A</h1>
          <h1 class="number">5</h1>
        </div>
      </div>
      <button class="questionMark">
        <h1>?</h1>
      </button>
    </div>
    <div class="TimeContainer">
      <h1>Thời gian: 9:00 09/11/2022</h1>
    </div>
    <div class="userContainer">
      <h1>Tên người mua: LuffyChan</h1>
      <h1>ID người mua: ID1234</h1>
    </div>
    <div class="idBillContainer">
      <h1>Mã hoá đơn: HD1234</h1>
    </div>
    <div class="productContainer">
      <h1 class="ProductName">Cơm Chiên</h1>
      <h1>1</h1>
      <h1>25000đ</h1>

      <h1 class="ProductName">Cơm Chiên</h1>
      <h1>1</h1>
      <h1>25000đ</h1>
      <h1 class="ProductName">Cơm Chiên</h1>
      <h1>1</h1>
      <h1>25000đ</h1>
      <h1 class="ProductName">Cơm Chiên</h1>
      <h1>1</h1>
      <h1>25000đ</h1>
      <h1 class="ProductName">Cơm Chiên</h1>
      <h1>1</h1>
      <h1>25000đ</h1>
      <h1 class="ProductName">Cơm Chiên</h1>
      <h1>1</h1>
      <h1>25000đ</h1>
      <h1 class="ProductName">Cơm Chiên</h1>
      <h1>1</h1>
      <h1>25000đ</h1>
      <h1 class="ProductName">Cơm Chiên</h1>
      <h1>1</h1>
      <h1>25000đ</h1>
    </div>
    <div class="rulerContainer"></div>
    <div class="totalContainer">
      <h1>Tổng</h1>
      <h1>80000đ</h1>
    </div>
    <BuyBTN>
      <h1>THANH TOÁN</h1>
    </BuyBTN>
  </div>
</template>

<script>
import BuyBTN from "../Buttons/BuyBTN.vue";
export default {
  components: {
    BuyBTN,
  },
};
</script>

<style scoped>
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
  height: 10rem;
  width: 100%;
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
