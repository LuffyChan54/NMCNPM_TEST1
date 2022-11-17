<template>
  <div class="doingFoodCTN">
    <div class="statusFood">
      <h1>Đang hoàn thành</h1>
      <div class="percentFinish">
        <h1>3</h1>
        <h1>/</h1>
        <h1>4</h1>
      </div>
    </div>
    <div class="statusFoodDetails">
      <div class="sttProductItem">
        <div class="sttPNameCTN">
          <h1>Cơm chiên</h1>
        </div>
        <h1 class="STTquantity">1</h1>
        <div class="sttPIDCTN">
          <h1 class="letter">A</h1>
          <h1 class="number">5</h1>
        </div>
      </div>
      <div class="sttProductItem">
        <div class="sttPNameCTN">
          <h1>Cơm chiên</h1>
        </div>
        <h1 class="STTquantity">1</h1>
        <div class="sttPIDCTN">
          <h1 class="letter">A</h1>
          <h1 class="number">5</h1>
        </div>
      </div>
      <div class="sttProductItem">
        <div class="sttPNameCTN">
          <h1>Cơm chiên</h1>
        </div>
        <h1 class="STTquantity">1</h1>
        <div class="sttPIDCTN">
          <h1 class="letter">A</h1>
          <h1 class="number">5</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.doingFoodCTN {
  position: relative;
  width: 50%;
}
.statusFood {
  width: 100%;
  padding: 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  border-radius: var(--radius);
  border: var(--border_lg) solid var(--dark);
  background: var(--yellow);
  font-size: 2rem;
  align-items: center;
  color: var(--dark);
  cursor: pointer;
}

.statusFood > h1 {
  font-size: 2rem;
  color: var(--dark);
  letter-spacing: 1px;
}

.percentFinish {
  display: flex;
  gap: 0.5rem;
}

.percentFinish h1 {
  font-size: 2.5rem;
}

.percentFinish > h1:nth-child(1) {
  color: var(--dark);
}

.percentFinish > h1:nth-child(3) {
  color: var(--green);
}

.STTquantity {
  width: fit-content;
  justify-self: end;
}

.statusFoodDetails {
  z-index: 1000;
  width: 100%;
  padding: 0.5rem 1rem;
  background: var(--white);
  border-radius: var(--radius);
  box-shadow: 0px 2px 10px rgba(47, 47, 47, 0.4);
  position: absolute;
  top: 105%;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sttProductItem {
  display: grid;
  grid-template-columns: 3fr 1fr 2fr;
  gap: 1rem;
  color: var(--dark);
  font-size: 1.5rem;
}

.sttPNameCTN {
  width: 100%;
  background: var(--stt-yellow);
  border-radius: var(--radius);
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  color: var(--white);
}

.sttPNameCTN > h1 {
  font-size: 1.5rem;
}

.sttPIDCTN {
  justify-self: end;
  width: fit-content;
  display: flex;
  gap: 0.5rem;
}

.sttPIDCTN .letter {
  color: var(--stt-yellow);
}
</style>
