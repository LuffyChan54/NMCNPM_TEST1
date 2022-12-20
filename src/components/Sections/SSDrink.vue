<template>
  <container class="drink-ctn">
    <div class="section-ctn">
      <!-- TITLES -->
      <div class="section-intro">
        <h1 class="section--title">Đồ uống</h1>
        <p class="section--subTitle">Số ở trên là số đồ uống mà bạn đã chọn</p>
      </div>
      <!-- SECTION BUTTONS -->
      <div class="section-btns">
        <SSButton
          :class="{ active: this.drinkStatus === 'gas' }"
          :quantity="this.quantity('gas')"
          @click="onClickFoodBTN($event, 'gas')"
        >
          <template #img>
            <img class="RiceIcon" src="../../assets/imgs/gasIcon.png" />
          </template>
          Có Gas
        </SSButton>
        <SSButton
          :class="{ active: this.drinkStatus === 'noGas' }"
          :quantity="this.quantity('noGas')"
          @click="onClickFoodBTN($event, 'noGas')"
        >
          <template #img>
            <img class="RiceIcon" src="../../assets/imgs/noGasIcon.png" />
          </template>
          Không Có Gas</SSButton
        >
      </div>
      <!--DRINKS CARDS -->
      <div class="section-cards">
        <div class="ctn-cards">
          <food-card
            v-for="(drink, idx) in this.products"
            :key="idx"
            :quantity="currSelected(drink.id)"
            @resetQuantity="resetQuantity(drink.id)"
            @icrQuantity="icrQuantity(drink.id)"
            @dcrQuantity="dcrQuantity(drink.id)"
          >
            <template #img>
              <img :src="drink.img" :alt="drink.name" />
            </template>
            <template #h1Name>
              <h1>{{ drink.name }}</h1>
            </template>
            <template #h1Total>
              <h1>Còn lại: {{ drink.total }}</h1>
            </template>
            <template #h1Price>
              <h1>{{ drink.price }} đ</h1>
            </template>
          </food-card>
        </div>
      </div>
    </div>
  </container>
</template>

<script>
import container from "../Containers/Container.vue";
import SSButton from "../Buttons/SectionBTN.vue";
import FoodCard from "../Cards/FoodCard.vue";
export default {
  components: {
    container,
    SSButton,
    FoodCard,
  },
  data() {
    return {
      drinkStatus: "gas",
    };
  },
  methods: {
    onClickFoodBTN(event, val) {
      event.preventDefault();
      this.drinkStatus = val;
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
    products() {
      return this.$store.getters.getTypeArr(this.drinkStatus);
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
.drink-ctn {
  background: rgba(253, 196, 70, 0.6) !important;
}
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
