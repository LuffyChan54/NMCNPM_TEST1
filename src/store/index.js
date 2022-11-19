import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      //
      moneyUsedInMonth: 80000,
      QuantityTypeUsed: {
        rice: 0,
        noodles: 0,
        cake: 0,
        gas: 0,
        noGas: 0,
      },
      //testDATA USERBILLS
      USERBILLS: [
        {
          idPositions: [
            {
              id: "A7",
              letter: "A",
              number: 7,
              status: "wait",
              color: "#198754",
            },
            {
              id: "B9",
              letter: "B",
              number: 9,
              status: "wait",
              color: "#ffc107",
            },
          ],
          time: "7:00",
          day: "07",
          month: "11",
          year: "2022",
          userName: "LuffyChan",
          userID: "ID1234",
          billID: "HD1234",
          products: [
            {
              name: "Cơm Chiên",
              quantity: 1,
              cost: 25000,
            },
            {
              name: "Bánh mì ngọt",
              quantity: 2,
              cost: 20000,
            },
          ],
          totalCost: 45000,
        },
        {
          idPositions: [
            {
              id: "A7",
              letter: "A",
              number: 7,
              status: "wait",
              color: "#198754",
            },
            {
              id: "B9",
              letter: "B",
              number: 9,
              status: "wait",
              color: "#ffc107",
            },
          ],
          time: "12:00",
          day: "08",
          month: "11",
          year: "2022",
          userName: "LuffyChan",
          userID: "ID1234",
          billID: "HD1234",
          products: [
            {
              name: "Cơm Chiên",
              quantity: 1,
              cost: 25000,
            },
            {
              name: "Bánh mì ngọt",
              quantity: 2,
              cost: 20000,
            },
          ],
          totalCost: 45000,
        },
        {
          idPositions: [
            {
              id: "A7",
              letter: "A",
              number: 7,
              status: "wait",
              color: "#198754",
            },
            {
              id: "B9",
              letter: "B",
              number: 9,
              status: "wait",
              color: "#ffc107",
            },
          ],
          time: "9:00",
          day: "10",
          month: "11",
          year: "2022",
          userName: "LuffyChan",
          userID: "ID1234",
          billID: "HD1234",
          products: [
            {
              name: "Cơm Chiên",
              quantity: 1,
              cost: 25000,
            },
            {
              name: "Bánh mì ngọt",
              quantity: 2,
              cost: 20000,
            },
          ],
          totalCost: 45000,
        },
        {
          idPositions: [
            {
              id: "A7",
              letter: "A",
              number: 7,
              status: "wait",
              color: "#198754",
            },
            {
              id: "B9",
              letter: "B",
              number: 9,
              status: "wait",
              color: "#ffc107",
            },
          ],
          time: "9:00",
          day: "09",
          month: "11",
          year: "2022",
          userName: "LuffyChan",
          userID: "ID1234",
          billID: "HD1234",
          products: [
            {
              name: "Cơm Chiên",
              quantity: 1,
              cost: 25000,
            },
            {
              name: "Bánh mì ngọt",
              quantity: 2,
              cost: 20000,
            },
          ],
          totalCost: 45000,
        },
      ],
      UserBillInfo: [],
      //
      isSuccessPayment: false,
      timeWaitingBill: 10,
      idBill: "ID1234",
      isPrintBill: false,
      showScreenBill: false,
      openLoginForm: false,
      isValidPayMent: true,
      isLogin: true,

      //
      TimeOutFn: null,
      idValidPosition: [
        {
          id: "A7",
          letter: "A",
          number: 7,
          status: "wait",
          color: "#198754",
        },
        {
          id: "B9",
          letter: "B",
          number: 9,
          status: "wait",
          color: "#ffc107",
        },
        {
          id: "C5",
          letter: "C",
          number: 5,
          status: "wait",
          color: "#6f42c1",
        },
        {
          id: "C5",
          letter: "C",
          number: 5,
          status: "wait",
          color: "#dc3545",
        },
      ],
      account: {
        id: "ACCOUNT123",
        password: "123",
        fullName: "Luffy Chan",
        email: "LuffyChan@gmail.com",
        img: "avt.jpg",
        money: 100000,
        role: "user",
      },
      totalCost: 0,
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
          img: "noodles.jpg",
          total: 20,
          name: "Mì xào bò",
          price: 35000,
        },
        {
          id: "n2",
          type: "noodles",
          img: "noodles.jpg",
          total: 20,
          name: "Mì xào heo",
          price: 35000,
        },
        {
          id: "n3",
          type: "noodles",
          img: "noodles.jpg",
          total: 20,
          name: "Mì xào gà",
          price: 35000,
        },
        {
          id: "n4",
          type: "noodles",
          img: "noodles.jpg",
          total: 20,
          name: "Mì hảo hảo",
          price: 35000,
        },
        {
          id: "n5",
          type: "noodles",
          img: "noodles.jpg",
          total: 20,
          name: "Mì xào gà",
          price: 35000,
        },
        {
          id: "n6",
          type: "noodles",
          img: "noodles.jpg",
          total: 20,
          name: "Mì trứng",
          price: 35000,
        },
        {
          id: "n7",
          type: "noodles",
          img: "noodles.jpg",
          total: 20,
          name: "Mì trộn",
          price: 35000,
        },
        {
          id: "n8",
          type: "noodles",
          img: "noodles.jpg",
          total: 20,
          name: "Mì xào cỏ",
          price: 35000,
        },
        {
          id: "n9",
          type: "noodles",
          img: "noodles.jpg",
          total: 20,
          name: "Mì xào cần",
          price: 35000,
        },
        {
          id: "c1",
          type: "cake",
          img: "cake.jpg",
          total: 20,
          name: "Bánh mì ngọt",
          price: 15000,
        },
        {
          id: "c2",
          type: "cake",
          img: "cake.jpg",
          total: 20,
          name: "Bánh mì mặn",
          price: 15000,
        },
        {
          id: "c3",
          type: "cake",
          img: "cake.jpg",
          total: 20,
          name: "Bánh mì lợ",
          price: 15000,
        },
        {
          id: "c4",
          type: "cake",
          img: "cake.jpg",
          total: 20,
          name: "Bánh mì trứng",
          price: 15000,
        },
        {
          id: "c5",
          type: "cake",
          img: "cake.jpg",
          total: 20,
          name: "Bánh mì xíu",
          price: 15000,
        },
        {
          id: "c6",
          type: "cake",
          img: "cake.jpg",
          total: 20,
          name: "Bánh mì que",
          price: 15000,
        },
        {
          id: "c7",
          type: "cake",
          img: "cake.jpg",
          total: 20,
          name: "Bánh mì",
          price: 15000,
        },
        {
          id: "c8",
          type: "cake",
          img: "cake.jpg",
          total: 20,
          name: "Bánh mì sữa",
          price: 15000,
        },
        {
          id: "g1",
          type: "gas",
          img: "cocacola.jpg",
          total: 20,
          name: "Coca Cola",
          price: 10000,
        },
        {
          id: "g2",
          type: "gas",
          img: "cocacola.jpg",
          total: 20,
          name: "Pepsi",
          price: 10000,
        },
        {
          id: "g3",
          type: "gas",
          img: "cocacola.jpg",
          total: 20,
          name: "Fanta",
          price: 10000,
        },
        {
          id: "g4",
          type: "gas",
          img: "cocacola.jpg",
          total: 20,
          name: "Seven up",
          price: 10000,
        },
        {
          id: "g5",
          type: "gas",
          img: "cocacola.jpg",
          total: 20,
          name: "Bia Sài Gòn",
          price: 10000,
        },
        {
          id: "g6",
          type: "gas",
          img: "cocacola.jpg",
          total: 20,
          name: "Sting",
          price: 10000,
        },
        {
          id: "ng1",
          type: "noGas",
          img: "nogas.jpg",
          total: 20,
          name: "Trà Xanh",
          price: 10000,
        },
        {
          id: "ng2",
          type: "noGas",
          img: "nogas.jpg",
          total: 20,
          name: "Nutriboots",
          price: 10000,
        },
        {
          id: "ng3",
          type: "noGas",
          img: "nogas.jpg",
          total: 20,
          name: "Tăng Lực",
          price: 10000,
        },
        {
          id: "ng4",
          type: "noGas",
          img: "nogas.jpg",
          total: 20,
          name: "Bí Đao",
          price: 10000,
        },
        {
          id: "ng5",
          type: "noGas",
          img: "nogas.jpg",
          total: 20,
          name: "Chanh Muối",
          price: 10000,
        },
        {
          id: "ng6",
          type: "noGas",
          img: "nogas.jpg",
          total: 20,
          name: "Trà Đào",
          price: 10000,
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
    getProductSelected: (state, getters) => () => {
      const productsID = Object.keys(state.qSelected);
      let rs = [];
      productsID.forEach((id) => {
        rs.push(getters.getProduct(id));
      });
      return rs;
    },
  },
  mutations: {
    icrQSelected(state, id) {
      if (!state.isLogin) {
        state.openLoginForm = true;
        return;
      }

      if (state.qSelected[id] === this.getters.getProduct(id).total) {
        //donothing
      } else {
        if (
          state.totalCost + this.getters.getProduct(id).price <=
          state.account.money
        ) {
          this.dispatch("updateTypeSelected", { status: "icr", id });

          if (state.qSelected[id]) {
            state.qSelected[id]++;
          } else {
            state.qSelected[id] = 1;
          }
        } else {
          state.isValidPayMent = false;
        }
      }
    },
    dcrQSelected(state, id) {
      if (!state.isLogin) {
        state.openLoginForm = true;
        return;
      }

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
      if (!state.isLogin) {
        state.openLoginForm = true;
        return;
      }

      this.dispatch("updateTypeSelected", { status: "reset", id });
      if (state.qSelected[id]) {
        delete state.qSelected[id];
      }
    },
  },
  actions: {
    searchBillByDate({ commit, state }, { year, month, day }) {
      commit;
      state;
      state.UserBillInfo = [];
      state.USERBILLS.forEach((el) => {
        if (el.day === day && el.month === month && el.year === year) {
          state.UserBillInfo.push(el);
        }
      });
    },
    logout({ commit, state }) {
      commit;
      state.isLogin = false;
    },
    changeUserName({ commit, state }, newName) {
      commit;
      state.account.fullName = newName;
    },
    changePW({ commit, state }, { oldPW, newPW }) {
      commit;
      return new Promise((resolve, reject) => {
        if (oldPW === state.account.password) {
          state.account.password = newPW;
          resolve("SUCCESS");
        } else {
          reject("FAIL");
        }
      });
    },
    addMoney({ commit, state }, cardCode) {
      commit;
      return new Promise((resolve, reject) => {
        if (cardCode === "123456789") {
          state.account.money += 50000;
          resolve("SUCCESS");
        } else {
          reject("FAIL");
        }
      });
    },
    changeShowScreenBill({ commit, state }) {
      commit;
      state.showScreenBill = false;
    },
    showUserPayment({ commit, state }) {
      commit;
      if (!state.isLogin) {
        state.openLoginForm = true;
        return;
      }
      if (Object.keys(state.qSelected).length === 0) {
        return;
      }
      state.showScreenBill = true;
      state.isPrintBill = true;
      state.TimeOutFn = setTimeout(() => {
        state.isPrintBill = false;
      }, state.timeWaitingBill * 1000);
    },
    doUserPayment({ commit, state }) {
      commit;
      state.account.money -= state.totalCost;
      const arrIDSelected = Object.keys(state.qSelected);
      arrIDSelected.forEach((id) => {
        this.getters.getProduct(id).total -= state.qSelected[id];
      });
      state.qTypeSelected.rice = 0;
      state.qTypeSelected.noodles = 0;
      state.qTypeSelected.cake = 0;
      state.qTypeSelected.gas = 0;
      state.qTypeSelected.noGas = 0;
      state.qSelected = {};
      state.totalCost = 0;
      state.showScreenBill = false;
      clearTimeout(state.TimeOutFn);
      state.isPrintBill = false;
      state.isSuccessPayment = true;
    },
    cancelUserPayment({ commit, state }) {
      commit;
      state;
      if (state.TimeOutFn) {
        clearTimeout(state.TimeOutFn);
      }
    },
    resetIsSuccessPayment({ commit, state }) {
      commit;
      state.isSuccessPayment = false;
    },
    resetValidPayment({ commit, state }) {
      commit;
      state.isValidPayMent = true;
    },
    resetOpenLoginForm({ commit, state }) {
      commit;
      state.openLoginForm = false;
    },
    updateTypeSelected({ commit, state }, { status, id }) {
      commit;
      switch (status) {
        case "icr":
          if (
            state.totalCost + this.getters.getProduct(id).price <=
            this.state.account.money
          ) {
            state.qTypeSelected[this.getters.getProduct(id).type]++;
            state.totalCost += this.getters.getProduct(id).price;
          } else {
            state.isValidPayMent = false;
          }

          break;
        case "dcr":
          if (state.qSelected[id] >= 1) {
            state.qTypeSelected[this.getters.getProduct(id).type]--;
            state.totalCost -= this.getters.getProduct(id).price;
          }

          break;
        case "reset":
          state.qTypeSelected[this.getters.getProduct(id).type] -=
            state.qSelected[id];
          state.totalCost -=
            state.qSelected[id] * this.getters.getProduct(id).price;

          break;
      }
    },
  },
});

export default store;
