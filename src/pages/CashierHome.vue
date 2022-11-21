<template>
  <template v-if="this.isLogin && this.userRole === 'admin'">
    <Container class="CHCTN">
      <div class="CHMenuAboveCTN">
        <i
          @click="this.isOpenMenu = true"
          class="fa fa-bars"
          aria-hidden="true"
        ></i>
        <button @click="logout" class="logoutBTN">
          <h1>Đăng Xuất</h1>
        </button>
      </div>

      <div class="CHUnderMenuCTN">
        <div class="CHUnderMenuBTNS">
          <button
            :class="{ active: this.statusSell === 'offline' }"
            class="offline"
            @click="this.statusSell = 'offline'"
          >
            <h1>OFFLINE</h1>
          </button>
          <button
            :class="{ active: this.statusSell === 'online' }"
            class="online"
            @click="this.statusSell = 'online'"
          >
            <h1>ONLINE</h1>
          </button>
        </div>

        <div v-if="this.statusSell === 'offline'" class="mainCTN">
          <div class="mainListBTNS">
            <div class="section-btns">
              <SSButton
                class="cashier"
                :class="{ active: this.status === 'rice' }"
                :quantity="this.quantity('rice')"
                @click="onClickFoodBTN($event, 'rice')"
              >
                <template #img>
                  <img class="RiceIcon" src="../assets/imgs/riceIcon.png" />
                </template>
                Cơm
              </SSButton>
              <SSButton
                class="cashier"
                :class="{ active: this.status === 'noodles' }"
                :quantity="this.quantity('noodles')"
                @click="onClickFoodBTN($event, 'noodles')"
              >
                <template #img>
                  <img class="RiceIcon" src="../assets/imgs/noodlesIcon.png" />
                </template>
                Món Nước</SSButton
              >
              <SSButton
                class="cashier"
                :class="{ active: this.status === 'cake' }"
                :quantity="this.quantity('cake')"
                @click="onClickFoodBTN($event, 'cake')"
              >
                <template #img>
                  <img class="RiceIcon" src="../assets/imgs/cakeIcon.png" />
                </template>
                Bánh Ngọt</SSButton
              >
              <SSButton
                class="cashier"
                :class="{ active: this.status === 'gas' }"
                :quantity="this.quantity('gas')"
                @click="onClickFoodBTN($event, 'gas')"
              >
                <template #img>
                  <img class="RiceIcon" src="../assets/imgs/gasIcon.png" />
                </template>
                Có Gas
              </SSButton>
              <SSButton
                class="cashier"
                :class="{ active: this.status === 'noGas' }"
                :quantity="this.quantity('noGas')"
                @click="onClickFoodBTN($event, 'noGas')"
              >
                <template #img>
                  <img class="RiceIcon" src="../assets/imgs/noGasIcon.png" />
                </template>
                Không Có Gas</SSButton
              >
            </div>
            <button @click="onSellClick" class="sellBTN">
              <h1>BÁN</h1>
            </button>
          </div>

          <div class="section-cards">
            <div class="ctn-cards">
              <food-card
                class="cashier"
                v-for="food in products"
                :key="food.id"
                :quantity="currSelected(food.id)"
                @resetQuantity="resetQuantity(food.id)"
                @icrQuantity="icrQuantity(food.id)"
                @dcrQuantity="dcrQuantity(food.id)"
              >
                <template #img>
                  <img
                    :src="require(`../assets/imgs/${food.img}`)"
                    :alt="food.name"
                  />
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
        </div>

        <div v-if="this.statusSell === 'online'" class="mainCTN">
          <div class="mainListBTNS">
            <div class="section-btns">
              <button
                @click="this.onlineStatus = 'doing'"
                class="doing"
                :class="{ active: this.onlineStatus === 'doing' }"
              >
                <h1>Chưa Hoàn Thành</h1>
              </button>
              <button
                @click="this.onlineStatus = 'done'"
                class="done"
                :class="{ active: this.onlineStatus === 'done' }"
              >
                <h1>Đã Hoàn Thành</h1>
              </button>
            </div>
            <div class="searchBillOnlineCTN">
              <label for="">Tìm Kiếm:</label>
              <input type="text" placeholder="Mã hoá đơn" />
              <div @click="searchByBIllID" class="searchICON">
                <i class="fa fa-search" aria-hidden="true"></i>
              </div>
            </div>
          </div>
          <div class="mainListSearch">
            <h1>Số lượng: 3</h1>
            <BillCardDoing v-if="this.onlineStatus === 'doing'"></BillCardDoing>
            <BillCardDone v-if="this.onlineStatus === 'done'"></BillCardDone>
          </div>
        </div>
      </div>

      <div v-if="this.isOpenMenu" class="CASHIERMENU">
        <i
          @click="this.isOpenMenu = false"
          class="fa fa-times"
          aria-hidden="true"
        ></i>
        <div class="MENUBTNS">
          <button @click="this.isOpenMenu = false">
            <h1>Trang Chủ</h1>
          </button>
          <button @click="goToCashierSchedule">
            <h1>Lên Lịch Bán Hàng</h1>
          </button>
          <button @click="goToCashierTurnover">
            <h1>Doanh Thu</h1>
          </button>
          <button @click="goToCashierHistory">
            <h1>Lịch Sử</h1>
          </button>
          <button>
            <h1>Nhập Xuất Kho</h1>
          </button>
          <button>
            <h1>Quầy Giao Hàng</h1>
          </button>
        </div>
      </div>
    </Container>
  </template>
  <ErrorPage v-else></ErrorPage>

  <teleport to="body" v-if="this.showCashierBill">
    <BaseModel @closeModel="successPayment">
      <div
        class="CashierBillOverView"
        v-if="!this.isPayMentSuccess && !this.isPayMentError"
      >
        <div class="CHCheckBill">
          <h1>Xác Nhận</h1>
        </div>
        <div class="productContainer">
          <template v-for="product in BillProducts" :key="product.id">
            <h1 class="ProductName">{{ product.name }}</h1>
            <h1>{{ product.quantity }}</h1>
            <h1>{{ product.total }}đ</h1>
          </template>
        </div>
        <div class="rulerContainer"></div>
        <div class="totalContainer">
          <h1>Tổng</h1>
          <h1>{{ this.totalCost }}đ</h1>
        </div>
        <button @click="doAdminPayment" class="CashierSellBTN">
          <h1>In Hoá Đơn</h1>
        </button>
      </div>
      <SuccessCard
        v-if="this.isPayMentSuccess"
        @onClickSuccessBTN="successPayment"
      >
        <h1>Thành Công</h1>
      </SuccessCard>
      <ErrorCard v-if="this.isPayMentError">
        <h1>Thanh Toán Thất Bại</h1>
      </ErrorCard>
    </BaseModel>
  </teleport>
</template>

<script>
import ErrorPage from "./ErrorPage.vue";
import Container from "../components/Containers/Container.vue";
import SSButton from "../components/Buttons/SectionBTN.vue";
import FoodCard from "../components/Cards/FoodCard.vue";
import BaseModel from "@/components/Models/BaseModel.vue";
import SuccessCard from "@/components/Cards/SuccessCard.vue";
import ErrorCard from "@/components/Cards/ErrorCard.vue";
import BillCardDoing from "@/components/Cards/BillCardDoing.vue";
import BillCardDone from "@/components/Cards/BillCardDone.vue";
export default {
  components: {
    ErrorPage,
    Container,
    SSButton,
    FoodCard,
    BaseModel,
    SuccessCard,
    ErrorCard,
    BillCardDoing,
    BillCardDone,
  },
  data() {
    return {
      isOpenMenu: false,
      status: "rice",
      statusSell: "offline",
      showCashierBill: false,
      isPayMentSuccess: false,
      isPayMentError: false,

      onlineStatus: "doing",
    };
  },
  methods: {
    goToCashierSchedule(event) {
      event.preventDefault();
      this.$router.push("/cashierschedule");
    },
    goToCashierHistory(event) {
      event.preventDefault();
      this.$router.push("/cashierhistory");
    },
    goToCashierTurnover(event) {
      event.preventDefault();
      this.$router.push("/cashierturnover");
    },
    searchByBIllID() {},
    onSellClick() {
      if (this.BillProducts.length !== 0) {
        this.showCashierBill = true;
      }
    },
    successPayment() {
      this.showCashierBill = false;
      this.isPayMentSuccess = false;
      this.isPayMentError = false;
    },
    doAdminPayment(event) {
      event.preventDefault();
      this.$store
        .dispatch("doAdminPayment")
        .then(() => {
          this.isPayMentSuccess = true;
        })
        .catch(() => {
          this.isPayMentError = true;
        });
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
    onClickFoodBTN(event, val) {
      event.preventDefault();
      this.status = val;
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
  },
  computed: {
    totalCost() {
      return this.$store.state.totalCost;
    },
    BillProducts() {
      return this.$store.getters.getProductCahierBill();
    },
    userRole() {
      return this.$store.state.account.role;
    },
    isLogin() {
      return this.$store.state.isLogin;
    },

    products() {
      return this.$store.getters.getTypeArr(this.status);
    },
    currSelected() {
      return (id) => {
        return this.$store.getters.getqSelected(id);
      };
    },
    quantity() {
      return (val) => this.$store.state.qTypeSelected[val];
    },
  },
};
</script>

<style scoped>
.MENUBTNS {
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
}

.MENUBTNS > button {
  width: 100%;
  border-radius: var(--radius);
  border: var(--border_lg) solid var(--dark);
  background: var(--white);
  padding: 0.5rem 1.5rem;
  transition: 0.2s all ease-in;
  cursor: pointer;
}

.MENUBTNS > button:hover {
  background: var(--yellow);
}

.MENUBTNS > button h1 {
  font-size: 1.5rem;
  color: var(--dark);
}
.CASHIERMENU {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--white);
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem;
  gap: 3rem;
}

.CASHIERMENU i {
  font-size: 3rem;
  font-weight: bold;
  color: var(--dark);
  cursor: pointer;
}
.mainListSearch {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.mainListSearch > h1 {
  font-size: 1.5rem;
  color: var(--white);
}
.searchBillOnlineCTN {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.searchBillOnlineCTN label {
  font-size: 1.5rem;
  color: var(--white);
  font-weight: bold;
}

.searchICON {
  padding: 0.5rem;
  border-radius: 50%;
  background: var(--yellow);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.searchBillOnlineCTN i {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--dark);
}

.searchBillOnlineCTN input {
  border-radius: var(--radius);
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1px;
  border: none;
  color: var(--dark);
}
.searchBillOnlineCTN input:focus {
  outline: none;
}

.done,
.doing {
  border-radius: var(--radius);
  background: var(--white);
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  border: none;
}

.done.active,
.doing.active {
  background: var(--blue);
}

.done > h1,
.doing > h1 {
  font-size: 1.5rem;
  color: var(--dark);
}
.CashierSellBTN {
  background: var(--stt-green);
  border-radius: var(--radius);
  border: var(--border_lg) solid var(--dark);
  padding: 0.5rem 1.5rem;
  cursor: pointer;
}

.CashierSellBTN > h1 {
  font-size: 1.5rem;
  color: var(--white);
}
.productContainer {
  max-height: 15rem;
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
.CHCheckBill {
  padding: 0.5rem 1.5rem;
  width: fit-content;
  border-radius: var(--radius);
  background: var(--yellow);
}

.CHCheckBill > h1 {
  font-size: 1.5rem;
  color: var(--dark);
}
.CashierBillOverView {
  border-radius: var(--radius);
  background: var(--white);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
.CHMenuAboveCTN {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  align-items: center;
}

.CHMenuAboveCTN > i {
  font-size: 2rem;
  cursor: pointer;
  color: var(--dark);
}

.CHMenuAboveCTN > button {
  border: var(--border_lg) solid var(--dark);
  border-radius: var(--radius);
  background: var(--white);
  padding: 0.5rem 1.5rem;
  cursor: pointer;
}

.CHMenuAboveCTN > button > h1 {
  color: var(--dark);
  font-size: 1.5rem;
}
.CHCTN {
  position: relative;
  padding: 3rem 2rem !important;
  transition: 0.4s all ease-in;
}
.CHUnderMenuBTNS {
  display: flex;
  gap: 1.5rem;
}

.CHUnderMenuBTNS > button {
  border: none;
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
  background: var(--yellow);
  padding: 0.5rem 1.5rem;
  cursor: pointer;
}

.CHUnderMenuBTNS > button.active {
  background: var(--dark);
}

.CHUnderMenuBTNS > button.active > h1 {
  color: var(--yellow);
}

.CHUnderMenuBTNS > button > h1 {
  font-size: 1.5rem;
  color: var(--dark);
}
.mainCTN {
  padding: 2rem 1rem;
  background: var(--dark);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
}
.sellBTN {
  padding: 0.5rem 1rem;
  border: var(--border_md) solid var(--white);
  border-radius: var(--radius);
  background: var(--stt-green);
  cursor: pointer;
}

.sellBTN > h1 {
  font-size: 1.5rem;
  color: var(--white);
}
.mainListBTNS {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.section-btns {
  display: flex;
  gap: 1.5rem;
}
.section-cards {
  width: 100%;
}

.ctn-cards {
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  gap: 2rem;
  overflow-x: auto;
  grid-auto-columns: 21%;
  padding: 1rem 0rem;
}
</style>
