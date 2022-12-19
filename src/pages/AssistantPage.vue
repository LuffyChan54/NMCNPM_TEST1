<template>
  <template v-if="this.isLogin && this.isAssistant">
    <Container class="assistantCTN">
      <div class="ASmainCTN">
        <button @click="logout" class="ASLogout">
          <h1>Đăng xuất</h1>
        </button>

        <div class="ASBTNS">
          <button
            :class="{ active: this.status === 'bill' }"
            @click="changeToBill"
          >
            <h1>Hoá đơn</h1>
          </button>

          <button
            :class="{ active: this.status === 'position' }"
            @click="changeToPosAss"
          >
            <h1>Vị trí</h1>
          </button>
        </div>

        <div class="ASsearch" v-if="this.status === 'bill'">
          <label for="">Nhập mã hoá đơn</label>
          <input v-model="this.idBill" type="text" />
          <div @click="searchDoingBillByID" class="ASsearchIcon">
            <i class="fa fa-search" aria-hidden="true"></i>
          </div>
        </div>

        <div
          @click="getAllDoingBillAssistant"
          class="ASinfoTotal"
          v-if="this.status === 'bill'"
        >
          <h1>Tất cả ({{ this.ASSISTANTBILLS.length }})</h1>
        </div>

        <div v-if="this.status === 'bill'" class="AScontainerBill">
          <div
            v-for="(bill, idx) in ASSISTANTBILLS"
            :key="idx"
            class="ASbillCard"
          >
            <h1>{{ bill.idBill }}</h1>
            <button
              v-for="(product, idex) in bill.dataProduct"
              :key="idex"
              :style="{
                background:
                  product.statusProduct === 'done'
                    ? 'var(--stt-green)'
                    : 'var(--stt-yellow)',
              }"
              class="ASbtnCheck"
              @click="checkProductDone($event, bill.idBill, product.idProduct)"
            >
              <h1>{{ product.nameProduct }}</h1>
              <h1>{{ product.quantity }}</h1>
              <div class="ASBillPos">
                <h1 :style="{ color: product.colorPos }" class="letter">
                  {{ product.position }}
                </h1>
                <!-- <h1 class="number">{{ product.idPos.number }}</h1> -->
              </div>
            </button>
          </div>
        </div>

        <div v-if="this.status === 'position'" class="ASposCTN">
          <div class="AStitleCTN">
            <h1>Nhập mã vị trí đã trống</h1>
            <p>Ấn vào để huỷ bỏ</p>
          </div>

          <div class="CTNPosEmpty">
            <div
              v-for="(pos, idx) in ArrPos"
              :key="idx"
              class="PosCTN"
              @click="deleteArrPosEl($event, idx)"
            >
              <h1 :style="{ color: pos.color }" class="letter">
                {{ pos.letter }}
              </h1>
              <h1>{{ pos.number }}</h1>
            </div>
          </div>

          <div class="ASinputCTN">
            <div class="ASinputPos">
              <input v-model="this.targetPos" type="text" />
              <div @click="generatePos" class="ASIconCheck">
                <i class="fa fa-check" aria-hidden="true"></i>
              </div>
            </div>
            <h1>Chọn Màu</h1>
            <div class="ASinputColors">
              <div
                v-for="(color, idx) in colors"
                :key="idx"
                :style="{ background: color }"
                :class="{ active: this.indexCheckColor === idx }"
                class="AScolor"
                @click="pickColor($event, idx, color)"
              ></div>
            </div>
          </div>
        </div>
        <button
          v-if="this.status === 'bill'"
          @click="updateBill"
          class="ASaccept"
        >
          <h1>Xác Nhận</h1>
        </button>

        <button
          v-if="this.status === 'position'"
          @click="updatePosEmpty"
          class="ASaccept"
        >
          <h1>Xác Nhận</h1>
        </button>
      </div>
    </Container>
  </template>
  <ErrorPage v-else></ErrorPage>
</template>

<script>
import ErrorPage from "./ErrorPage.vue";
import Container from "@/components/Containers/Container.vue";
export default {
  created() {
    this.$store.dispatch("getAllDoingBillAssistant");
  },
  data() {
    return {
      status: "bill",
      targetColor: "",
      targetPos: "",
      indexCheckColor: "",
      ArrPos: [],
      idBill: "",
    };
  },
  components: {
    ErrorPage,
    Container,
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
    isAssistant() {
      return this.$store.state.account.role === "assistant";
    },
    ASSISTANTBILLS() {
      return this.$store.state.ASSISTANTBILLS;
    },
    colors() {
      return this.$store.state.colors;
    },
  },
  methods: {
    searchDoingBillByID() {
      this.$store.dispatch("searchDoingBillByID", { idBill: this.idBill });
    },
    changeToPosAss() {
      this.status = "position";
      this.$store.dispatch("getAllColorPos");
    },
    changeToBill() {
      this.status = "bill";
      this.$store.dispatch("getAllDoingBillAssistant");
    },
    getAllDoingBillAssistant() {
      this.$store.dispatch("getAllDoingBillAssistant");
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
    deleteArrPosEl(event, index) {
      event;
      this.ArrPos.splice(index, 1);
    },
    updateBill() {
      this.$store.dispatch("updateBill");
    },
    async updatePosEmpty() {
      // console.log(this.ArrPos);
      await this.$store.dispatch("updatePosEmpty", {
        listPosition: this.ArrPos,
      });
      this.ArrPos = [];
    },
    pickColor(event, idx, color) {
      event.preventDefault();
      this.indexCheckColor = idx;
      this.targetColor = color;
    },
    generatePos() {
      let obj = {};
      obj.id = this.targetPos;
      obj.letter = this.targetPos[0];
      obj.number = +this.targetPos.slice(1);
      obj.color = this.targetColor;
      obj.status = "empty";
      this.ArrPos.push(obj);
      this.targetColor = "";
      this.targetPos = "";
      this.indexCheckColor = "";
    },
    checkProductDone(event, idB, idP) {
      event.preventDefault();

      this.$store.dispatch("checkProductDone", { idBill: idB, idProduct: idP });
    },
  },
};
</script>

<style scoped>
.ASposCTN {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.AStitleCTN {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.AStitleCTN h1 {
  font-size: 1.5rem;
  color: var(--dark);
}

.AStitleCTN p {
  font-size: 1.5rem;
  font-style: italic;
  color: var(--dark);
}

.CTNPosEmpty {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.PosCTN {
  width: fit-content;
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
  border: var(--border_lg) solid var(--dark);
  border-radius: var(--radius);
  background: var(--white);
  cursor: pointer;
}

.PosCTN h1 {
  font-size: 1.5rem;
  color: var(--dark);
}

.PosCTN .letter {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--stt-yellow);
}

.ASinputCTN {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.ASinputPos {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}
.ASinputPos input {
  border: var(--border_lg) solid var(--dark);
  border-radius: var(--radius);
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
  padding: 0.5rem 1.5rem;
  color: var(--dark);
}

.ASIconCheck {
  padding: 0.5rem;
  border-radius: var(--radius);
  border: var(--border_lg) solid var(--dark);
  background: var(--yellow);
  cursor: pointer;
}

.ASIconCheck i {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--dark);
}

.ASinputCTN h1 {
  font-size: 1.5rem;
  color: var(--dark);
}
.ASinputColors {
  display: flex;
  gap: 1rem;
}

.AScolor {
  width: 4rem;
  height: 4rem;
  border-radius: var(--radius);
  background: var(--stt-green);

  cursor: pointer;
}

.AScolor.active {
  border: var(--border_lg) solid var(--dark);
}

.ASaccept {
  border-radius: var(--radius);
  width: fit-content;
  align-self: center;
  border: var(--border_lg) solid var(--dark);
  padding: 0.5rem 1.5rem;
  background: var(--yellow);
  cursor: pointer;
}

.ASaccept h1 {
  font-size: 1.5rem;
  color: var(--dark);
}

/* IN POS ASSISTANT =========================================*/
.ASBillPos .letter {
  font-size: 1.5rem;
  color: var(--stt-yellow);
}

.ASBillPos .number {
  font-size: 1.5rem;
  color: var(--dark);
}
.ASBillPos {
  width: fit-content;
  padding: 0.5rem 1.5rem;
  display: flex;
  gap: 0.5rem;
  border-radius: var(--radius);
  background: var(--white);
}

.ASbtnCheck {
  cursor: pointer;
  border: none;
  border-radius: var(--radius);
  background: var(--stt-yellow);
  padding: 0.5rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 1rem;
  align-items: center;
}

.ASbillCard h1 {
  font-size: 1.5rem;
  color: var(--white);
  align-self: center;
}
.ASbillCard {
  width: 23rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: var(--dark);
  border-radius: var(--radius);
  height: fit-content;
}
.AScontainerBill {
  margin-top: 2rem;
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 30%;
  gap: 2rem;
}
.ASinfoTotal h1 {
  font-size: 1.5rem;
  color: var(--dark);
}

.ASinfoTotal {
  border-radius: var(--radius);
  border: var(--border_lg) solid var(--dark);
  padding: 0.5rem 1.5rem;
  background: var(--yellow);
  width: fit-content;
  cursor: pointer;
}
.ASsearchIcon {
  padding: 0.5rem;
  border-radius: 50%;
  background: var(--yellow);
  cursor: pointer;
}

.ASsearchIcon i {
  font-size: 2rem;
  color: var(--dark);
  font-weight: bold;
}

.ASsearch input:focus {
  outline: none;
}
.ASsearch input {
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: var(--radius);
  font-size: 1.5rem;
  color: var(--dark);
  font-weight: bold;
  letter-spacing: 1px;
}
.ASsearch label {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--dark);
}
.ASbtnCheck h1 {
  font-size: 1.5rem;
  color: var(--dark);
}
.ASsearch {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.ASBTNS button {
  border: var(--border_lg) solid var(--dark);
  border-radius: var(--radius);
  cursor: pointer;
  background: var(--white);
  padding: 0.5rem 1.5rem;
}

.ASBTNS button h1 {
  font-size: 1.5rem;
  color: var(--dark);
}
.ASBTNS button.active {
  background: var(--blue);
}
.ASBTNS {
  display: flex;
  gap: 1rem;
}
.ASLogout {
  align-self: flex-end;
  border: var(--border_lg) solid var(--dark);
  border-radius: var(--radius);
  background: var(--yellow);
  cursor: pointer;
  padding: 0.5rem 1.5rem;
}

.ASLogout h1 {
  font-size: 1.5rem;
  color: var(--dark);
}
.ASmainCTN {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.assistantCTN {
  padding: 4rem 2rem !important;
}
</style>
