<template>
  <container>
    <div class="section-ctn">
      <!-- TITLES -->
      <div class="section-intro">
        <h1 class="section--title">Các món ăn hôm nay</h1>
        <p class="section--subTitle">Số ở trên là số món mà bạn đã chọn</p>
      </div>
      <!-- SECTION BUTTONS -->
      <div class="section-btns">
        <SSButton
          :class="{ active: this.foodStatus === 'rice' }"
          :quantity="this.quantity('rice')"
          @click="onClickFoodBTN($event, 'rice')"
        >
          <template #img>
            <img class="RiceIcon" src="../../assets/imgs/riceIcon.png" />
          </template>
          Cơm
        </SSButton>
        <SSButton
          :class="{ active: this.foodStatus === 'noodles' }"
          :quantity="this.quantity('noodles')"
          @click="onClickFoodBTN($event, 'noodles')"
        >
          <template #img>
            <img class="RiceIcon" src="../../assets/imgs/noodlesIcon.png" />
          </template>
          Món Nước</SSButton
        >
        <SSButton
          :class="{ active: this.foodStatus === 'cake' }"
          :quantity="this.quantity('cake')"
          @click="onClickFoodBTN($event, 'cake')"
        >
          <template #img>
            <img class="RiceIcon" src="../../assets/imgs/cakeIcon.png" />
          </template>
          Bánh Ngọt</SSButton
        >
      </div>
      <!--FOOD CARDS -->
      <div class="section-cards">
        <div class="ctn-cards">
          <food-card
            v-for="(food, idx) in this.products"
            :key="idx"
            :quantity="currSelected(food.id)"
            @resetQuantity="resetQuantity(food.id)"
            @icrQuantity="icrQuantity(food.id)"
            @dcrQuantity="dcrQuantity(food.id)"
          >
            <template #img>
              <img
                :src="require(`../../assets/imgs/${food.img}`)"
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
      foodStatus: "rice",
    };
  },
  methods: {
    onClickFoodBTN(event, val) {
      event.preventDefault();
      this.foodStatus = val;
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
      return this.$store.getters.getTypeArr(this.foodStatus);
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
