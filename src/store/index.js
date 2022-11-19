import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      //Total money user paid in this month! #REQUEST TO GET
      moneyUsedInMonth: 80000,

      //The numbers of each type which used by user! #REQUEST TO GET
      QuantityTypeUsed: {
        rice: 0,
        noodles: 0,
        cake: 0,
        gas: 0,
        noGas: 0,
      },

      //Bills after user search by date #REQUEST TO GET
      UserBillInfo: [],

      //IDBill wait for this payment #REQUEST TO GET
      idBill: "ID1234",

      //ACCOUNT info after login (not include password!) #REQUEST TO GET
      account: {
        id: "ACCOUNT123",
        password: "123",
        fullName: "Luffy Chan",
        email: "LuffyChan@gmail.com",
        img: "avt.jpg",
        money: 100000,
        role: "user",
      },

      //IDPOSITIONS valid to put all the food user choosed! #REQUEST TO GET
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

      //All the product will be sold today! #REQUEST TO GET
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

      //DATATEST ALL THE products be choosed! #REQUEST TO GET
      PRODUCTBOUGHT: [],

      //NUMBER PRODUCTS IS DOING #REQUEST TO GET
      productFinish: 0,

      //NUMBER VALID ID POS TO THIS PAYMENT #REQUEST TO GET
      NumberValidIDPOS: 10,

      //DATATEST ALL THE BILLS OF THIS USER! #WILL BE DELETED
      USERBILLS: [],

      /*TRUE/FALSE VARIABLES: */
      isHasFoodSelected: false,
      isPrintBill: false, //Check to print basemodel bill
      showScreenBill: false, //check to print bill
      openLoginForm: false, //check to Open login form
      isValidPayMent: true, //check to valid payment
      isLogin: false, //check LOGIN
      isSuccessPayment: false, //check to alert success or fail of payment

      //Time set to wait user accept or deny pay
      timeWaitingBill: 10,

      //Function to response after 10s
      TimeOutFn: null,

      //Variable to show the cost in page
      totalCost: 0,

      //The numbers of each type that user choosed
      qTypeSelected: {
        rice: 0,
        noodles: 0,
        cake: 0,
        gas: 0,
        noGas: 0,
      },

      //The id and quantity of each item user choosed! (>=1)
      qSelected: {},
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

      let type = this.getters.getProduct(id).type;
      if (type === "gas" || type === "noGas") {
        let check = false;
        Object.keys(state.qSelected).forEach((elid) => {
          if (
            this.getters.getProduct(elid).type === "rice" ||
            this.getters.getProduct(elid).type === "noodles" ||
            this.getters.getProduct(elid).type === "cake"
          ) {
            check = true;
          }
        });
        if (!check) {
          return;
        }
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

      let type = this.getters.getProduct(id).type;
      if (
        state.qSelected[id] === 1 &&
        (type === "rice" || type === "noodles" || type === "cake")
      ) {
        let check = false;
        Object.keys(state.qSelected).forEach((elid) => {
          if (
            elid !== id &&
            (this.getters.getProduct(elid).type === "rice" ||
              this.getters.getProduct(elid).type === "noodles" ||
              this.getters.getProduct(elid).type === "cake")
          ) {
            check = true;
          }
        });
        if (!check) {
          state.qSelected = {};
          state.totalCost = 0;
          state.qTypeSelected.rice = 0;
          state.qTypeSelected.noodles = 0;
          state.qTypeSelected.cake = 0;
          state.qTypeSelected.gas = 0;
          state.qTypeSelected.noGas = 0;
          return;
        }
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

      let type = this.getters.getProduct(id).type;
      if (type === "rice" || type === "noodles" || type === "cake") {
        let check = false;
        Object.keys(state.qSelected).forEach((elid) => {
          if (
            elid !== id &&
            (this.getters.getProduct(elid).type === "rice" ||
              this.getters.getProduct(elid).type === "noodles" ||
              this.getters.getProduct(elid).type === "cake")
          ) {
            check = true;
          }
        });
        if (!check) {
          state.qSelected = {};
          state.totalCost = 0;
          state.qTypeSelected.rice = 0;
          state.qTypeSelected.noodles = 0;
          state.qTypeSelected.cake = 0;
          state.qTypeSelected.gas = 0;
          state.qTypeSelected.noGas = 0;
          return;
        }
      }

      this.dispatch("updateTypeSelected", { status: "reset", id });
      if (state.qSelected[id]) {
        delete state.qSelected[id];
      }
    },
  },
  actions: {
    forgetPW({ commit, state }, { email }) {
      commit;
      state;
      console.log(email);
    },
    checkKeepLogin({ commit, state }) {
      commit;

      if (localStorage.getItem("isKeepLogin") === "true") {
        state.isLogin = true;
      }
    },
    login({ commit, state }, { email, pw, rememberMe }) {
      commit;
      state;
      return new Promise((resolve, reject) => {
        if (email === "huydz@gmail.com" && pw === "123") {
          if (rememberMe) {
            localStorage.setItem("isKeepLogin", true);
          }
          this.state.isLogin = true;

          resolve("Success");
        } else {
          reject("Fail");
        }
      });
    },
    register({ commit, state }, { email, fullname, pw }) {
      commit;
      return new Promise((resolve, reject) => {
        if (email !== "huydz@gmail.com") {
          console.log(fullname, pw);
          state.isLogin = true;
          resolve("success");
        } else {
          reject("fail");
        }
      });
    },
    resetUserBillInfo({ commit, state }) {
      commit;
      state.UserBillInfo = [];
    },
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
      localStorage.removeItem("isKeepLogin");
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

      if (state.NumberValidIDPOS === 0) {
        return;
      }
      state.isPrintBill = true;
      state.TimeOutFn = setTimeout(() => {
        state.isPrintBill = false;
      }, state.timeWaitingBill * 1000);
    },
    doUserPayment({ commit, state }, { currTime }) {
      commit;
      let newBill = {};
      newBill["idPositions"] = [];
      state.idValidPosition.forEach((pos) => {
        newBill.idPositions.push(pos);
      });
      newBill["time"] = currTime.split(" ")[0];
      newBill["day"] = currTime.split(" ")[1].split("/")[0];
      newBill["month"] = currTime.split(" ")[1].split("/")[1];
      newBill["year"] = currTime.split(" ")[1].split("/")[2];
      newBill["userName"] = state.account.fullName;
      newBill["userID"] = state.account.id;
      newBill["billID"] = state.idBill;
      newBill["products"] = [];

      this.getters.getProductSelected().forEach((product) => {
        const qtt = state.qSelected[product.id];
        let obj = {};
        obj.name = product.name;
        obj.quantity = qtt;
        obj.cost = qtt * product.price;
        newBill.products.push(obj);
      });
      newBill["totalCost"] = state.totalCost;
      //add new bill after success
      state.USERBILLS.push(newBill);
      //add to doing products:
      let indexPOS = 0;
      this.getters.getProductSelected().forEach((product) => {
        let obj = {};
        obj.status = "doing";
        obj.name = product.name;
        obj.quantity = state.qSelected[product.id];
        if (
          product.type === "rice" ||
          product.type === "noodles" ||
          product.type === "cake"
        ) {
          obj.pos = state.idValidPosition[indexPOS];
          state.idValidPosition[indexPOS].status = "used";
          indexPOS++;
        }
        state.PRODUCTBOUGHT.push(obj);
      });
      //reset======================
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
