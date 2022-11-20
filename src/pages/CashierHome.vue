<template>
  <template v-if="this.isLogin && this.userRole === 'admin'">
    <Container>
      <div class="CHMenuAboveCTN">
        <i class="fa fa-bars" aria-hidden="true"></i>
        <button class="logoutBTN">
          <h1>Đăng Xuất</h1>
        </button>
      </div>

      <div class="CHUnderMenuCTN">
        <div class="CHUnderMenuBTNS">
          <button class="offline">
            <h1>OFFLINE</h1>
          </button>
          <button class="online">
            <h1>ONLINE</h1>
          </button>
        </div>

        <div class="mainCTN">
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
            <button class="sellBTN">
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
      </div>
    </Container>
  </template>
  <ErrorPage v-else></ErrorPage>
</template>

<script>
import ErrorPage from "./ErrorPage.vue";
import Container from "../components/Containers/Container.vue";
import SSButton from "../components/Buttons/SectionBTN.vue";
import FoodCard from "../components/Cards/FoodCard.vue";
export default {
  components: {
    ErrorPage,
    Container,
    SSButton,
    FoodCard,
  },
  data() {
    return {
      status: "rice",
    };
  },
  methods: {
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
  gap: 1rem;
  overflow-x: auto;
  grid-auto-columns: 21%;
  padding: 1rem 0.5rem;
}
</style>
