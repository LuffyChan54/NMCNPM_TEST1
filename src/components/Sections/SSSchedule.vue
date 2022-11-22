<template>
  <div class="CScontentCTN">
    <CashierUnderBTN @click="setIsAllowChange" style="width: fit-content"
      >Chỉnh Sửa</CashierUnderBTN
    >
    <div class="CSCardCTN">
      <div v-for="(product, idx) in currProducts" :key="idx" class="CSCard">
        <div class="CSCardimgCTN">
          <img :src="require(`../../assets/imgs/${product.img}`)" />
        </div>
        <div class="CSCardContent">
          <div class="CSCardItem">
            <input
              :disabled="this.isChangeName === false"
              type="text"
              v-model="product.name"
            />
            <i
              :style="{ visibility: this.isAllowChange ? 'unset' : 'hidden' }"
              @click="this.isChangeName = true"
              class="fa fa-pencil-square"
              aria-hidden="true"
            ></i>
          </div>
          <div class="CSCardItem">
            <div>
              <h1>Số Lượng:</h1>
              <input
                :disabled="this.isChangeQuantity === false"
                type="number"
                :value="product.total"
              />
            </div>
            <i
              :style="{ visibility: this.isAllowChange ? 'unset' : 'hidden' }"
              @click="this.isChangeQuantity = true"
              class="fa fa-pencil-square"
              aria-hidden="true"
            ></i>
          </div>
          <div class="CSCardItem">
            <div>
              <h1>Giá Bán:</h1>
              <input
                :disabled="this.isChangePrice === false"
                type="number"
                :value="product.price"
                step="1000"
              />
            </div>
            <i
              :style="{ visibility: this.isAllowChange ? 'unset' : 'hidden' }"
              @click="this.isChangePrice = true"
              class="fa fa-pencil-square"
              aria-hidden="true"
            ></i>
          </div>
          <button @click="deleteProduct($event, idx)">
            <h1>Huỷ Món</h1>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import CashierUnderBTN from "../Buttons/CashierUnderBTN.vue";
export default {
  data() {
    return {
      isAllowChange: false,
      isChangeName: false,
      isChangeQuantity: false,
      isChangePrice: false,
      products: [],
      // currProducts: [],
    };
  },
  emits: ["isAllowChange", "resetAddNew"],
  methods: {
    deleteProduct(event, id) {
      event.preventDefault();
      this.currProducts.splice(id, 1);
    },
    setIsAllowChange() {
      this.isAllowChange = true;
      this.$emit("isAllowChange");
    },
  },
  props: {
    isUpload: Boolean,
    indexDay: Number,
    status: String,
    sendObj: Boolean,
    formAddNewInfo: Object,
  },
  components: {
    CashierUnderBTN,
  },
  created() {
    this.products = _.cloneDeep(this.$store.state.productsTypedSche);
  },
  computed: {
    updateDayStatus() {
      return { day: this.indexDay, stt: this.status };
    },
    currObj() {
      if (this.products.length !== 0) {
        return this.products[this.indexDay - 1];
      } else {
        return {};
      }
    },
    currProducts() {
      if (this.currObj !== {}) {
        return this.currObj.products[this.status];
      } else {
        return [];
      }
    },
  },
  watch: {
    sendObj: {
      handler(value) {
        if (value === true) {
          this.currObj.products[this.formAddNewInfo.type].push(
            _.cloneDeep(this.formAddNewInfo)
          );
          this.$emit("resetAddNew");
        }
      },
      immediate: true,
    },
    // updateDayStatus: {
    //   handler(value) {
    //     if (this.products.length !== 0) {
    //       this.currObj = this.products[value.day - 1];
    //       this.currProducts = this.currObj.products[value.stt];
    //     }
    //   },
    //   immediate: true,
    // },

    isUpload: {
      handler(value) {
        if (value === true) {
          this.isAllowChange = false;
          this.isChangeName = false;
          this.isChangePrice = false;
          this.isChangeQuantity = false;
          if (this.currProducts.length !== 0) {
            this.$store.dispatch("cashierUpdateSche", this.currObj);
          }
        }
      },
      immediate: true,
    },
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.CScontentCTN {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.CSCardCTN {
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  gap: 2rem;
  overflow-x: auto;
  grid-auto-columns: 21%;
  padding: 1rem 0rem;
}

.CSCard {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: var(--radius);
}
.CSCardimgCTN {
  height: 50%;
  width: 100%;
  overflow: hidden;
}

.CSCardimgCTN > img {
  height: 100%;
  inline-size: 100%;
  object-fit: cover;
  aspect-ratio: 16/12;
}

.CSCardContent {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: var(--yellow);
}

.CSCardContent > button {
  border: var(--border_lg) solid var(--dark);
  border-radius: var(--radius);
  background: var(--white);
  padding: 0.5rem 1.5rem;
  cursor: pointer;
}
.CSCardContent > button h1 {
  font-size: 1.5rem;
  color: var(--dark);
}
.CSCardItem {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.CSCardItem > div {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}

.CSCardItem > div h1 {
  font-size: 1rem;
  color: var(--dark);
}

.CSCardItem > div input {
  width: 6rem;
  border: 0;
  border-radius: var(--radius);
  padding: 0.5rem 1rem;
  color: var(--dark);
  font-weight: bold;
  background: var(--white);
  font-size: 1rem;
  text-align: center;
}

.CSCardItem:nth-of-type(1) input {
  text-align: center;
  font-weight: bold;
  border: none;
  border-radius: var(--radius);
  background: var(--white);
  padding: 0.5rem 1rem;
  width: 100%;
  font-size: 1.5rem;
  color: var(--dark);
}

.CSCardItem i {
  font-size: 3rem;
  cursor: pointer;
  color: var(--dark);
}
</style>
