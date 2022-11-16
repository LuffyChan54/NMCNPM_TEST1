import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      qTypeSelected: {
        rice: 0,
        noodles: 0,
        cake: 0,
        gas: 0,
        noGas: 0,
      },
      qSelected: {},
      products: [
        {
          id: "r1",
          type: "rice",
          img: "comchien.jpg",
          total: 10,
          name: "Cơm Chiên",
          price: 25000,
        },
        {
          id: "r2",
          type: "rice",
          img: "comchien.jpg",
          total: 20,
          name: "Cơm Hải Sản",
          price: 35000,
        },
        {
          id: "r3",
          type: "rice",
          img: "comchien.jpg",
          total: 20,
          name: "Cơm Nấm",
          price: 25000,
        },
        {
          id: "r4",
          type: "rice",
          img: "comchien.jpg",
          total: 20,
          name: "Cơm Tấm",
          price: 25000,
        },
        {
          id: "r5",
          type: "rice",
          img: "comchien.jpg",
          total: 20,
          name: "Cơm Gà Chiên",
          price: 25000,
        },
        {
          id: "r6",
          type: "rice",
          img: "comchien.jpg",
          total: 20,
          name: "Cơm Gà Xé",
          price: 25000,
        },
        {
          id: "r7",
          type: "rice",
          img: "comchien.jpg",
          total: 20,
          name: "Cơm Thập Cẩm",
          price: 25000,
        },
        {
          id: "r8",
          type: "rice",
          img: "comchien.jpg",
          total: 20,
          name: "Cơm Báo Đen",
          price: 25000,
        },
        {
          id: "n1",
          type: "noodles",
          img: "comchien.jpg",
          total: 20,
          name: "Mì xào bò",
          price: 35000,
        },
        {
          id: "n2",
          type: "noodles",
          img: "comchien.jpg",
          total: 20,
          name: "Mì xào heo",
          price: 35000,
        },
        {
          id: "n3",
          type: "noodles",
          img: "comchien.jpg",
          total: 20,
          name: "Mì xào gà",
          price: 35000,
        },
        {
          id: "n4",
          type: "noodles",
          img: "comchien.jpg",
          total: 20,
          name: "Mì hảo hảo",
          price: 35000,
        },
        {
          id: "n5",
          type: "noodles",
          img: "comchien.jpg",
          total: 20,
          name: "Mì xào gà",
          price: 35000,
        },
        {
          id: "n6",
          type: "noodles",
          img: "comchien.jpg",
          total: 20,
          name: "Mì trứng",
          price: 35000,
        },
        {
          id: "n7",
          type: "noodles",
          img: "comchien.jpg",
          total: 20,
          name: "Mì trộn",
          price: 35000,
        },
        {
          id: "n8",
          type: "noodles",
          img: "comchien.jpg",
          total: 20,
          name: "Mì xào cỏ",
          price: 35000,
        },
        {
          id: "n9",
          type: "noodles",
          img: "comchien.jpg",
          total: 20,
          name: "Mì xào cần",
          price: 35000,
        },
        {
          id: "c1",
          type: "cake",
          img: "comchien.jpg",
          total: 20,
          name: "Bánh mì ngọt",
          price: 15000,
        },
        {
          id: "c2",
          type: "cake",
          img: "comchien.jpg",
          total: 20,
          name: "Bánh mì mặn",
          price: 15000,
        },
        {
          id: "c3",
          type: "cake",
          img: "comchien.jpg",
          total: 20,
          name: "Bánh mì lợ",
          price: 15000,
        },
        {
          id: "c4",
          type: "cake",
          img: "comchien.jpg",
          total: 20,
          name: "Bánh mì trứng",
          price: 15000,
        },
        {
          id: "c5",
          type: "cake",
          img: "comchien.jpg",
          total: 20,
          name: "Bánh mì xíu",
          price: 15000,
        },
        {
          id: "c6",
          type: "cake",
          img: "comchien.jpg",
          total: 20,
          name: "Bánh mì que",
          price: 15000,
        },
        {
          id: "c7",
          type: "cake",
          img: "comchien.jpg",
          total: 20,
          name: "Bánh mì",
          price: 15000,
        },
        {
          id: "c8",
          type: "cake",
          img: "comchien.jpg",
          total: 20,
          name: "Bánh mì sữa",
          price: 15000,
        },
      ],
    };
  },
  getters: {
    getTypeArr: (state) => (type) => {
      return state.products.filter((product) => product.type === type);
    },
    getqSelected: (state) => (id) => {
      return state.qSelected[id] || 0;
    },
    getProduct: (state) => (id) => {
      return state.products.filter((product) => product.id === id)[0];
    },
  },
  mutations: {
    icrQSelected(state, id) {
      if (state.qSelected[id] === this.getters.getProduct(id).total) {
        //donothing
      } else {
        this.dispatch("updateTypeSelected", { status: "icr", id });

        if (state.qSelected[id]) {
          state.qSelected[id]++;
        } else {
          state.qSelected[id] = 1;
        }
      }
    },
    dcrQSelected(state, id) {
      this.dispatch("updateTypeSelected", { status: "dcr", id });

      if (state.qSelected[id] === 1) {
        delete state.qSelected[id];
      } else {
        if (state.qSelected[id]) {
          state.qSelected[id]--;
        }
      }
    },
    resetQSelected(state, id) {
      this.dispatch("updateTypeSelected", { status: "reset", id });
      if (state.qSelected[id]) {
        delete state.qSelected[id];
      }
    },
  },
  actions: {
    updateTypeSelected({ commit, state }, { status, id }) {
      commit;
      switch (status) {
        case "icr":
          state.qTypeSelected[this.getters.getProduct(id).type]++;
          break;
        case "dcr":
          if (state.qSelected[id] >= 1) {
            state.qTypeSelected[this.getters.getProduct(id).type]--;
          }

          break;
        case "reset":
          state.qTypeSelected[this.getters.getProduct(id).type] -=
            state.qSelected[id];
          break;
      }
    },
  },
});

export default store;
