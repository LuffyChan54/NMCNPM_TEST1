<template>
  <SSCashierTemplate>
    <template #buttons>
      <button class="active">
        <h1>Thông Tin Quầy Nhận Hàng</h1>
      </button>
    </template>
    <template #mainCTN>
      <div class="DeliverySetupCTN">
        <div class="DeliveryItem">
          <label for="">Nhập số lượng quầy hiện có:</label>
          <input v-model="numberLetters" type="number" />
          <h1>Bắt đầu: {{ this.letters[0] || "" }}</h1>
          <h1>Kết thúc: {{ this.letters[this.numberLetters - 1] || "" }}</h1>
        </div>
        <div class="DeliveryItem">
          <label for="">Nhập số lượng màu cho mỗi quầy:</label>
          <input type="number" v-model="this.numberColors" />

          <div class="DeliveryColors">
            <template v-for="(el, idx) in colors" :key="idx">
              <label style="color: var(--white)">Màu {{ idx + 1 }}</label>
              <input v-model="el.color" type="color" />
            </template>
          </div>
        </div>
        <div class="DeliveryItem">
          <label for="">Nhập số lượng vị trí cho một màu</label>
          <input type="number" v-model="this.numPerColor" />
        </div>
      </div>

      <button @click="setupDelivery" class="deliverySetupBTN">
        <h1>Xác Nhận</h1>
      </button>
    </template>
  </SSCashierTemplate>
</template>

<script>
import SSCashierTemplate from "@/components/Sections/SSCashierTemplate.vue";
export default {
  data() {
    return {
      numberLetters: 0,
      numberColors: 0,
      numPerColor: 0,
      // letters: [],
    };
  },
  computed: {
    letters() {
      let rs = [];
      for (let i = 0; i < this.numberLetters; i++) {
        rs.push(String.fromCharCode(65 + i));
      }
      return rs;
    },
    colors() {
      let rs = [];
      for (let i = 0; i < this.numberColors; i++) {
        rs.push({ color: "#000000" });
      }
      return rs;
    },
  },
  methods: {
    setupDelivery() {
      let obj = {
        letters: this.letters,
        color: this.colors,
        numPerColor: this.numPerColor,
      };

      this.$store.dispatch("setUpDelivery", obj);
    },
  },
  components: {
    SSCashierTemplate,
  },
};
</script>

<style scoped>
.deliverySetupBTN {
  width: fit-content;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: var(--radius);
  background: var(--yellow);
  cursor: pointer;
  align-self: center;
}
.DeliveryColors label {
  font-size: 1.5rem;
  font-weight: bold;
}
.DeliveryColors {
  align-items: center;
  display: flex;
  gap: 1rem;
}
.DeliverySetupCTN {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
}

.DeliveryItem {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.DeliveryItem > label {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--white);
}

.DeliveryItem > input {
  width: 8rem;
  padding: 0.5rem 1.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  border: none;
  border-radius: var(--radius);
  color: var(--dark);
}

.DeliveryItem > input:focus {
  outline: none;
}

.DeliveryItem h1 {
  font-size: 1.5rem;
  color: var(--yellow);
}
</style>
