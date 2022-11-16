<template>
  <container>
    <div class="section-ctn">
      <!-- TITLES -->
      <div class="section-intro">
        <h1 class="section--title">Các món ăn hôm nay</h1>
        <p class="section--subTitle">Số ở trên là số món má bạn đã chọn</p>
      </div>
      <!-- SECTION BUTTONS -->
      <div class="section-btns">
        <SSButton
          :class="{ active: this.foodStatus === 'rice' }"
          :quantity="this.quantity.rice"
          @click="onClickFoodBTN($event, 'rice')"
        >
          <template #img>
            <img class="RiceIcon" src="../../assets/imgs/riceIcon.png" />
          </template>
          Cơm
        </SSButton>
        <SSButton
          :class="{ active: this.foodStatus === 'noodles' }"
          :quantity="this.quantity.noodles"
          @click="onClickFoodBTN($event, 'noodles')"
        >
          <template #img>
            <img class="RiceIcon" src="../../assets/imgs/noodlesIcon.png" />
          </template>
          Món Nước</SSButton
        >
        <SSButton
          :class="{ active: this.foodStatus === 'cake' }"
          :quantity="this.quantity.cake"
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
            v-for="(food, idx) in this.foods"
            :key="idx"
            :quantity="this.buyFoods[idx]"
            @resetQuantity="resetQuantity(idx)"
            @icrQuantity="icrQuantity(idx)"
            @dcrQuantity="dcrQuantity(idx)"
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
              <h1>{{ food.price }}</h1>
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
      quantity: {
        rice: 0,
        noodles: 0,
        cake: 0,
      },
      foodStatus: "rice",
      foods: [
        {
          type: "rice",
          img: "comchien.jpg",
          total: 10,
          name: "Cơm Chiên",
          price: 25000,
        },
        {
          type: "rice",
          img: "comchien.jpg",
          total: 10,
          name: "Cơm Chiên",
          price: 25000,
        },
        {
          type: "rice",
          img: "comchien.jpg",
          total: 10,
          name: "Cơm Chiên",
          price: 25000,
        },
        {
          type: "rice",
          img: "comchien.jpg",
          total: 10,
          name: "Cơm Chiên",
          price: 25000,
        },
        {
          type: "rice",
          img: "comchien.jpg",
          total: 10,
          name: "Cơm Chiên",
          price: 25000,
        },
        {
          type: "rice",
          img: "comchien.jpg",
          total: 10,
          name: "Cơm Chiên",
          price: 25000,
        },
        {
          type: "rice",
          img: "comchien.jpg",
          total: 10,
          name: "Cơm Chiên",
          price: 25000,
        },
        {
          type: "rice",
          img: "comchien.jpg",
          total: 10,
          name: "Cơm Chiên",
          price: 25000,
        },
      ],
      buyFoods: [0],
    };
  },
  methods: {
    icrTypeQuantity(type) {
      if (type === "rice") {
        this.quantity.rice++;
      } else if (type === "noodles") {
        this.quantity.noodles++;
      } else {
        this.quantity.cake++;
      }
    },
    dcrTypeQuantity(type) {
      if (type === "rice") {
        if (this.quantity.rice > 0) this.quantity.rice--;
      } else if (type === "noodles") {
        if (this.quantity.noodles > 0) this.quantity.noodles--;
      } else {
        if (this.quantity.cake > 0) this.quantity.cake--;
      }
    },
    resetTypeQuantity(type, idx) {
      if (type === "rice") {
        this.quantity.rice -= this.buyFoods[idx];
      } else if (type === "noodles") {
        this.quantity.noodles -= this.buyFoods[idx];
      } else {
        this.quantity.cake -= this.buyFoods[idx];
      }
    },
    onClickFoodBTN(event, val) {
      event.preventDefault();
      this.foodStatus = val;
    },
    icrQuantity(idx) {
      this.icrTypeQuantity(this.foods[idx].type);

      if (this.buyFoods[idx] === this.foods[idx].total) {
        //do nothing
      } else {
        this.buyFoods[idx]++;
      }
    },
    dcrQuantity(idx) {
      this.dcrTypeQuantity(this.foods[idx].type);

      if (this.buyFoods[idx] === 0) {
        //do nothing
      } else {
        this.buyFoods[idx]--;
      }
    },
    resetQuantity(idx) {
      this.resetTypeQuantity(this.foods[idx].type, idx);
      this.buyFoods[idx] = 0;
    },
  },
};
</script>

<style scoped>
.section-ctn {
  padding: 2rem 0;
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
