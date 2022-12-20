import { createStore } from "vuex";
import axios from "axios";
import Cookies from "js-cookie";

import { storage } from "../configs/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

import router from "@/router";

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

      isFullPos: false,

      TurnOver: 0,

      //Bills after user search by date #REQUEST TO GET
      UserBillInfo: [],

      ProductHistoryCE: [],

      //IDBill wait for this payment #REQUEST TO GET
      idBill: "ID1234",

      currTimeUserBill: "",

      isCancelledBill: false,

      //ACCOUNT info after login (not include password!) #REQUEST TO GET
      account: {
        // id: "ACCOUNT123",
        // fullName: "Luffy Chan",
        // email: "LuffyChan@gmail.com",
        // img: "avt.jpg",
        // money: 100000,
        // role: "admin",
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
        // {
        //   id: "ng6",
        //   type: "noGas",
        //   img: "nogas.jpg",
        //   total: 20,
        //   name: "Trà Đào",
        //   price: 10000,
        // },
      ],

      isLoading: false,

      //DATATEST ALL THE products be choosed! #REQUEST TO GET
      PRODUCTBOUGHT: [],

      //NUMBER PRODUCTS IS DOING #REQUEST TO GET
      productFinish: 0,

      //NUMBER VALID ID POS TO THIS PAYMENT #REQUEST TO GET
      NumberValidIDPOS: 0,

      //Products in schedule #REQUEST TO GET
      //NOTYPE
      productsSchedule: [
        {
          day: 0,
          products: {
            rice: [],
            noodles: [],
            cake: [],
            gas: [],
            noGas: [],
          },
        },
        {
          day: 1,
          products: [
            {
              id: "r1",
              name: "Cơm chiên",
              img: "comchien.jpg",
              type: "rice",
              price: 25000,
              total: 50,
            },
            {
              id: "r2",
              name: "Cơm chiên",
              img: "comchien.jpg",
              type: "rice",
              price: 35000,
              total: 30,
            },
            {
              id: "r3",
              name: "Cơm chiên",
              img: "comchien.jpg",
              type: "rice",
              price: 25000,
              total: 20,
            },
            {
              id: "r4",
              name: "Cơm chiên",
              img: "comchien.jpg",
              type: "rice",
              price: 25000,
              total: 50,
            },
            {
              id: "r5",
              name: "Cơm chiên",
              img: "comchien.jpg",
              type: "rice",
              price: 35000,
              total: 30,
            },
            {
              id: "r6",
              name: "Cơm chiên",
              img: "comchien.jpg",
              type: "rice",
              price: 25000,
              total: 20,
            },
          ],
        },
        {
          day: 2,
          products: [
            {
              id: "n1",
              name: "Cơm chiên",
              img: "comchien.jpg",
              type: "rice",
              price: 25000,
              total: 50,
            },
            {
              id: "n2",
              name: "Cơm chiên",
              img: "comchien.jpg",
              type: "rice",
              price: 35000,
              total: 30,
            },
            {
              id: "n3",
              name: "Cơm chiên",
              img: "comchien.jpg",
              type: "rice",
              price: 25000,
              total: 20,
            },
            {
              id: "n4",
              name: "Cơm chiên",
              img: "comchien.jpg",
              type: "rice",
              price: 25000,
              total: 50,
            },
            {
              id: "n5",
              name: "Cơm chiên",
              img: "comchien.jpg",
              type: "rice",
              price: 35000,
              total: 30,
            },
            {
              id: "n6",
              name: "Cơm chiên",
              img: "comchien.jpg",
              type: "rice",
              price: 25000,
              total: 20,
            },
          ],
        },
        {
          day: 3,
          products: [
            {
              id: "c1",
              name: "Cơm chiên",
              img: "comchien.jpg",
              type: "rice",
              price: 25000,
              total: 50,
            },
            {
              id: "c2",
              name: "Cơm chiên",
              img: "comchien.jpg",
              type: "rice",
              price: 35000,
              total: 30,
            },
            {
              id: "c3",
              name: "Cơm chiên",
              img: "comchien.jpg",
              type: "rice",
              price: 25000,
              total: 20,
            },
            {
              id: "c4",
              name: "Cơm chiên",
              img: "comchien.jpg",
              type: "rice",
              price: 25000,
              total: 50,
            },
            {
              id: "c5",
              name: "Cơm chiên",
              img: "comchien.jpg",
              type: "rice",
              price: 35000,
              total: 30,
            },
            {
              id: "c6",
              name: "Cơm chiên",
              img: "comchien.jpg",
              type: "rice",
              price: 25000,
              total: 20,
            },
          ],
        },
      ],
      //TYPED
      productsTypedSche: [
        {
          day: 1,
          products: {
            rice: [
              // {
              //   // id: "r1",
              //   // name: "Cơm chiên",
              //   // img: "comchien.jpg",
              //   // type: "rice",
              //   // price: 25000,
              //   // total: 50,
              // },
              // {
              //   // id: "r2",
              //   // name: "Cơm chiên",
              //   // img: "comchien.jpg",
              //   // type: "rice",
              //   // price: 35000,
              //   // total: 30,
              // },
            ],
            noodles: [
              // {
              //   // id: "n1",
              //   // name: "Phở tái",
              //   // img: "noodles.jpg",
              //   // type: "noodles",
              //   // price: 25000,
              //   // total: 10,
              // },
              // {
              //   // id: "n2",
              //   // name: "Mì xào bò",
              //   // img: "noodles.jpg",
              //   // type: "noodles",
              //   // price: 35000,
              //   // total: 20,
              // },
            ],
            cake: [],
            gas: [],
            noGas: [],
          },
        },
        {
          day: 2,
          products: {
            rice: [
              // {
              //   // id: "r1",
              //   // name: "Cơm chiên",
              //   // img: "comchien.jpg",
              //   // type: "rice",
              //   // price: 25000,
              //   // total: 50,
              // },
              // {
              //   // id: "r2",
              //   // name: "Cơm chiên",
              //   // img: "comchien.jpg",
              //   // type: "rice",
              //   // price: 35000,
              //   // total: 30,
              // },
            ],
            noodles: [
              // {
              //   // id: "n1",
              //   // name: "Phở tái",
              //   // img: "noodles.jpg",
              //   // type: "noodles",
              //   // price: 25000,
              //   // total: 10,
              // },
              // {
              //   // id: "n2",
              //   // name: "Mì xào bò",
              //   // img: "noodles.jpg",
              //   // type: "noodles",
              //   // price: 35000,
              //   // total: 20,
              // },
            ],
            cake: [],
            gas: [],
            noGas: [],
          },
        },
        {
          day: 3,
          products: {
            rice: [],
            noodles: [],
            cake: [],
            gas: [],
            noGas: [],
          },
        },
        {
          day: 4,
          products: {
            rice: [],
            noodles: [],
            cake: [],
            gas: [],
            noGas: [],
          },
        },
        {
          day: 5,
          products: {
            rice: [],
            noodles: [],
            cake: [],
            gas: [],
            noGas: [],
          },
        },
        {
          day: 6,
          products: {
            rice: [],
            noodles: [],
            cake: [],
            gas: [],
            noGas: [],
          },
        },
      ],

      //BILL IN ASSISTANT REQUEST TO GET
      ASSISTANTBILLS: [],

      //ASSISTANT REQUEST TO GET COLORS;
      colors: [],

      //PRODUCTS IMPORTED CASHIER #WILL BE DELETE
      productImported: {
        cake: [],
        gas: [],
        noGas: [],
      },

      //DATATEST ALL THE BILLS OF THIS USER! #WILL BE DELETED
      USERBILLS: [],

      /*TRUE/FALSE VARIABLES: */
      isHasFoodSelected: false,
      isPrintBill: false, //Check to print basemodel bill
      showScreenBill: false, //check to print bill
      openLoginForm: false, //check to Open login form
      isValidPayMent: true, //check to valid payment
      isLogin: false, //check LOGIN
      isSuccessPayment: "none", //check to alert success or fail of payment

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

      //IMPROVE CODE
      RiceProduct: [],
      NoodlesProduct: [],
      CakeProduct: [],
      GasProduct: [],
      NoGasProduct: [],

      //Products in CASHIER bill
      ProductsAdminBill: [],

      //PRODUCT IN BILL IS DOING CASHIER AND ASSISTANT
      BillsDoing: [],

      //PRODUCT IN BILL IS DONE CASHIER AND ASSISTANT
      BillsDone: [],
    };
  },
  getters: {
    //CASHIER GET PRODUCTS IN SCHEDULE
    getProductTypeSche: (state) => (day, type) => {
      state.productsTypedSche.forEach((el) => {
        if (el.day === day) {
          return el.products[type];
          // if (el.products[type].length !== 0) {
          //   return el.products[type];
          // }
          // else{
          //   //el.products[types].push()
          // }
        }
      });
    },
    //CASHIER GET BILL DOING
    getBillDoing: (state) => () => {
      state.BillsDoing = [];
      state.UserBillInfo.forEach((bill) => {
        let check = false;
        bill.products.forEach((product) => {
          if (product.status === "doing") {
            check = true;
          }
        });
        if (check) {
          state.BillsDoing.push(bill);
        }
      });

      return state.BillsDoing;
    },

    //CASHIER GET BILL DONE
    getBillDone: (state) => () => {
      state.BillsDone = [];
      state.BillsDone.forEach((bill) => {
        let check = true;
        bill.products.forEach((product) => {
          if (product.status === "doing") {
            check = false;
          }
        });
        if (check) {
          state.BillsDone.push(bill);
        }
      });
      return state.BillsDone;
    },

    //CASHIER GET PRODUCTS IN CASHIER BILL
    getProductCahierBill: (state, getters) => () => {
      state.ProductsAdminBill = [];
      getters.getProductSelected().forEach((product) => {
        let obj = {};
        obj.id = product.id;
        obj.name = product.name;
        obj.quantity = state.qSelected[product.id];
        obj.total = obj.quantity * product.price;
        state.ProductsAdminBill.push(obj);
      });

      return state.ProductsAdminBill;
    },

    //START USER CASHIER GET TYPE PRODUCT WILL BE SOLD TODAY BY TYPE
    getTypeArr: (state) => (type) => {
      if (type === "rice") {
        if (state.RiceProduct.length !== 0) {
          return state.RiceProduct;
        } else {
          state.RiceProduct = state.products.filter(
            (product) => product.type === type
          );
          return state.RiceProduct;
        }
      }
      if (type === "noodles") {
        if (state.NoodlesProduct.length !== 0) {
          return state.NoodlesProduct;
        } else {
          state.NoodlesProduct = state.products.filter(
            (product) => product.type === type
          );
          return state.NoodlesProduct;
        }
      }
      if (type === "cake") {
        if (state.CakeProduct.length !== 0) {
          return state.CakeProduct;
        } else {
          state.CakeProduct = state.products.filter(
            (product) => product.type === type
          );
          return state.CakeProduct;
        }
      }
      if (type === "gas") {
        if (state.GasProduct.length !== 0) {
          return state.GasProduct;
        } else {
          state.GasProduct = state.products.filter(
            (product) => product.type === type
          );
          return state.GasProduct;
        }
      }
      if (type === "noGas") {
        if (state.NoGasProduct.length !== 0) {
          return state.NoGasProduct;
        } else {
          state.NoGasProduct = state.products.filter(
            (product) => product.type === type
          );
          return state.NoGasProduct;
        }
      }
    },
    //START USER CASHIER GET PRODUCT SELECTED
    getqSelected: (state) => (id) => {
      return state.qSelected[id] || 0;
    },
    //START USER CASHIER ASSISTANT GET PRODUCT BY ID
    getProduct: (state) => (id) => {
      return state.products.filter((product) => product.id === id)[0];
    },
    //START USER CASHIER GET PRODUCT SELECTED
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
    //START USER CHANGE PRODUCT SELECTED!
    icrQSelected(state, id) {
      if (!state.isLogin) {
        state.openLoginForm = true;
        return;
      }

      if (state.account.role === "user") {
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
      }

      if (state.qSelected[id] === this.getters.getProduct(id).total) {
        //donothing
      } else {
        if (
          state.totalCost + this.getters.getProduct(id).price <=
            state.account.money ||
          state.account.role === "admin"
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

      if (state.account.role === "user") {
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

      if (state.account.role === "user") {
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
      }

      this.dispatch("updateTypeSelected", { status: "reset", id });
      if (state.qSelected[id]) {
        delete state.qSelected[id];
      }
    },
  },
  actions: {
    setIsLoading({ commit, state }) {
      state.isLoading = true;
    },
    resetIsLoading({ commit, state }) {
      state.isLoading = false;
    },

    async changeAvatarUser({ commit, state }, { url }) {
      commit;
      state;
      const accessToken = Cookies.get("accessToken");

      const config = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "x-access-token": accessToken,
        },
      };

      const data = {
        image: url,
      };

      state.isLoading = true;
      await axios
        .post(
          "https://back-end-can-teen-manage-25.vercel.app/api/v1/user/changeImage",
          data,
          config
        )
        .then((rs) => {
          // console.log("gia tri tra ve khi thay doi avatar", rs);
          state.account.image = url;
          state.isLoading = false;
        })
        .catch((err) => {
          state.isLoading = false;
          console.log(err);
        });
    },

    //START USER CASHIER ASSISTANT LOGIN==================
    async login({ commit, state }, { email, pw, rememberMe }) {
      commit;
      state;
      Cookies;
      rememberMe;

      let config = {
        headers: {},
      };

      let data = {
        password: pw,
        email: email,
      };

      // let msg = "";

      state.isLoading = true;
      await axios
        .post(
          "https://back-end-can-teen-manage-25.vercel.app/api/v1/auth/login",
          data,
          config
        )
        .then((rs) => {
          state.isLoading = false;

          const accessToken = rs.data.data.accessToken;
          Cookies.set("accessToken", accessToken);
          // msg = "success";

          const objectType = {
            "639c26402ed8ed438c491e6e": "user",
            "639c2644049287301661111b": "admin",
            "639c2657049287301661111d": "assistant",
          };

          state.account["id"] = rs.data.data.user.IdUser;
          state.account["fullName"] = rs.data.data.user.username;
          state.account["email"] = rs.data.data.user.email;
          state.account["money"] = +rs.data.data.user.property;
          state.account["image"] = rs.data.data.user.image;
          state.account["role"] = objectType[rs.data.data.user.roleID];

          router.push("/");

          state.isLogin = true;
        })
        .catch(() => {
          state.isLoading = false;

          // msg = "fail";
          // console.log("that bai", err);
        });

      // return msg;

      // return new Promise((resolve, reject) => {
      //   if (email === "huydz@gmail.com" && pw === "123") {
      //     if (rememberMe) {
      //       localStorage.setItem("isKeepLogin", true);
      //     }
      //     this.state.isLogin = true;

      //     resolve("Success");
      //   } else {
      //     reject("Fail");
      //   }
      // });
    },
    resetOpenLoginForm({ commit, state }) {
      commit;
      state.openLoginForm = false;
    },
    checkKeepLogin({ commit, state }) {
      commit;

      if (localStorage.getItem("isKeepLogin") === "true") {
        state.isLogin = true;
      }
    },
    //START USER REGISTER===============
    async register({ commit, state }, { email, fullname, pw }) {
      state;
      commit;

      // import Cookies from 'js-cookie';

      let config = {
        headers: {
          // 'accessToken': Cookies.get('accessToken'),
        },
      };

      let data = {
        username: fullname,
        password: pw,
        email: email,
      };

      state.isLoading = true;

      const res = await axios.post(
        "https://back-end-can-teen-manage-25.vercel.app/api/v1/auth/register",
        data,
        config
      );

      state.isLoading = false;

      return res;

      // return new Promise((resolve, reject) => {

      //   if (email !== "huydz@gmail.com") {
      //     console.log(fullname, pw);
      //     state.isLogin = true;
      //     resolve("success");
      //   } else {
      //     reject("fail");
      //   }
      // });
    },
    //START USER FORGET PASSWORD========
    async forgetPW({ commit, state }, { email }) {
      commit;
      state;

      let config = {
        headers: {},
      };

      let data = {
        email: email,
      };

      state.isLoading = true;
      await axios
        .post(
          "https://back-end-can-teen-manage-25.vercel.app/api/v1/auth/forgotPassword",
          data,
          config
        )
        .then(() => {
          state.isLoading = false;
        });
    },
    //START USER CASHIER ASSISTANT LOGOUT=================
    async logout({ commit, state }) {
      localStorage.removeItem("isKeepLogin");
      commit;

      const accessToken = Cookies.get("accessToken");

      const config = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "x-access-token": accessToken,
        },
      };

      state.isLoading = true;
      state.isLogin = false;

      await axios
        .post(
          "https://back-end-can-teen-manage-25.vercel.app/api/v1/user/logout",
          {},
          config
        )
        .then(() => {
          state.isLoading = false;

          state.isLogin = false;
          state.account = [];
          Cookies.remove("accessToken");
          window.location.reload();
        });

      state.isLogin = false;

      router.push("/");
    },
    //START USER CHANGE INFO USER======
    async changeUserName({ commit, state }, newName) {
      commit;
      state;

      const accessToken = Cookies.get("accessToken");

      const config = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "x-access-token": accessToken,
        },
      };

      const data = {
        username: newName,
      };

      let flag;

      state.isLoading = true;
      await axios
        .post(
          "https://back-end-can-teen-manage-25.vercel.app/api/v1/user/profile",
          data,
          config
        )
        .then((rs) => {
          state.isLoading = false;

          state.account.fullName = rs.data.data.username;
          flag = "success";
        })
        .catch((err) => {
          state.isLoading = false;

          console.log(err);
          flag = "error";
        });
      return flag;
    },
    async changePW({ commit, state }, { oldPW, newPW }) {
      commit;
      state;
      const accessToken = Cookies.get("accessToken");

      const config = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "x-access-token": accessToken,
        },
      };

      const data = {
        confirmPassword: oldPW,
        newPassword: newPW,
      };
      state.isLoading = true;
      let flag;
      await axios
        .post(
          "https://back-end-can-teen-manage-25.vercel.app/api/v1/user/changePassword",
          data,
          config
        )
        .then(() => {
          state.isLoading = false;
          flag = "success";
        })
        .catch((err) => {
          console.log(err);
          state.isLoading = false;

          flag = "fail";
        });
      return flag;
    },
    //START USER HISTORY==========
    resetUserBillInfo({ commit, state }) {
      commit;
      state.UserBillInfo = [];
    },
    async searchBillByDate({ commit, state }, { date }) {
      commit;
      state;
      state.UserBillInfo = [];
      // state.USERBILLS.forEach((el) => {
      //   if (el.day === day && el.month === month && el.year === year) {
      //     state.UserBillInfo.push(el);
      //   }
      // });

      const accessToken = Cookies.get("accessToken");

      // console.log("access token ", accessToken);

      const config = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "x-access-token": accessToken,
        },
      };

      const data = {
        date,
      };

      state.isLoading = true;

      await axios
        .post(
          "https://back-end-can-teen-manage-25.vercel.app/api/v1/user/getHistoryBill",
          data,
          config
        )
        .then((rs) => {
          state.isLoading = false;

          // console.log("bill da mua", rs);
          state.UserBillInfo = rs.data.data;
          state.UserBillInfo.forEach((billEl) => {
            billEl["idPositions"] = [];
            billEl.product.forEach((posBill) => {
              billEl["idPositions"].push(posBill.position);
            });
          });

          // console.log("state.UserBillInfo: ", state.UserBillInfo);
          // state.UserBillInfo   ["idPositions"] = []
        })
        .catch((err) => {
          state.isLoading = false;

          console.log(err);
        });
    },
    //START USER ADDMONEY TO ACCOUNT====
    async addMoney({ commit, state }, cardCode) {
      commit;

      const accessToken = Cookies.get("accessToken");

      const config = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "x-access-token": accessToken,
        },
      };

      const data = {
        codePrice: cardCode,
      };

      let flag;
      state.isLoading = true;
      await axios
        .post(
          "https://back-end-can-teen-manage-25.vercel.app/api/v1/user/addProperty",
          data,
          config
        )
        .then((rs) => {
          state.isLoading = false;

          if (rs.data.message === "add property user successfuly") {
            state.account.money = rs.data.data.property;
            flag = "success";
          } else {
            throw 1;
          }
        })
        .catch(() => {
          state.isLoading = false;

          flag = "fail";
        });

      return flag;
      // return new Promise((resolve, reject) => {
      //   if (cardCode === "123456789") {
      //     state.account.money += 50000;
      //     resolve("SUCCESS");
      //   } else {
      //     reject("FAIL");
      //   }
      // });
    },
    //START USER PAYMENT===========
    changeShowScreenBill({ commit, state }) {
      commit;
      state.showScreenBill = false;
    },
    async showUserPayment({ commit, state }) {
      commit;
      if (!state.isLogin) {
        state.openLoginForm = true;
        return;
      }
      if (Object.keys(state.qSelected).length === 0) {
        return;
      }

      // if (state.NumberValidIDPOS === 0) {
      //   return;
      // }

      const accessToken = Cookies.get("accessToken");

      const config = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "x-access-token": accessToken,
        },
      };

      const objSell = JSON.parse(JSON.stringify(state.qSelected));

      let productSell = [];

      const keysObjSell = Object.keys(objSell);
      const valuesObjSell = Object.values(objSell);

      for (let i = 0; i < keysObjSell.length; i++) {
        const temp = {
          id: keysObjSell[i],
          number: valuesObjSell[i],
        };
        productSell.push(temp);
      }

      let today = new Date();

      const getDateVal =
        today.getDate() < 10 ? "0" + today.getDate() : today.getDate();

      let buyTime =
        today.getHours() +
        ":" +
        today.getMinutes() +
        " " +
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        getDateVal;

      const data = {
        buyTime,
        product: productSell,
      };

      // console.log("data", data);

      // state.showScreenBill = true;
      // state.isPrintBill = true;
      // let flag;

      state.idValidPosition = [];

      state.isLoading = true;

      await axios
        .post(
          "https://back-end-can-teen-manage-25.vercel.app/api/v1/user/createOnlineBill",
          data,
          config
        )
        .then((rs) => {
          state.isLoading = false;
          // console.log("ket qua tra ve", rs.data.data);
          store.state.isCancelledBill = true;
          const data = rs.data.data;

          data.product.forEach((e) => {
            state.idValidPosition.push(e.position);
          });

          state.NumberValidIDPOS = 1;

          state.currTimeUserBill = data.time;
          state.showScreenBill = true;
          state.isPrintBill = true;

          state.idBill = data.idBill;
        })
        .catch((err) => {
          state.isLoading = false;

          console.log("that bai ", err);
          // state.isFullPos = true;
          state.showScreenBill = true;

          state.NumberValidIDPOS = 0;
        });

      state.TimeOutFn = setTimeout(() => {
        store.state.isCancelledBill = true;
        store.dispatch("cancelUserPayment");
        state.isPrintBill = false;
      }, state.timeWaitingBill * 1000);
    },
    async doUserPayment({ commit, state }, { currTime }) {
      commit;
      state;
      currTime;
      // let newBill = {};
      // newBill["idPositions"] = [];
      // state.idValidPosition.forEach((pos) => {
      //   newBill.idPositions.push(pos);
      // });
      // newBill["time"] = currTime.split(" ")[0];
      // newBill["day"] = currTime.split(" ")[1].split("/")[0];
      // newBill["month"] = currTime.split(" ")[1].split("/")[1];
      // newBill["year"] = currTime.split(" ")[1].split("/")[2];
      // newBill["userName"] = state.account.fullName;
      // newBill["userID"] = state.account.id;
      // newBill["billID"] = state.idBill;
      // newBill["products"] = [];

      // this.getters.getProductSelected().forEach((product) => {
      //   const qtt = state.qSelected[product.id];
      //   let obj = {};
      //   obj.name = product.name;
      //   obj.quantity = qtt;
      //   obj.cost = qtt * product.price;
      //   newBill.products.push(obj);
      // });
      // newBill["totalCost"] = state.totalCost;
      // //add new bill after success
      // state.USERBILLS.push(newBill);

      //add to doing products:
      // let indexPOS = 0;
      // this.getters.getProductSelected().forEach((product) => {
      //   let obj = {};
      //   obj.status = "doing";
      //   obj.name = product.name;
      //   obj.quantity = state.qSelected[product.id];
      //   if (
      //     product.type === "rice" ||
      //     product.type === "noodles" ||
      //     product.type === "cake"
      //   ) {
      //     obj.pos = state.idValidPosition[indexPOS];
      //     state.idValidPosition[indexPOS].status = "used";
      //     indexPOS++;
      //   }
      //   state.PRODUCTBOUGHT.push(obj);

      const accessToken = Cookies.get("accessToken");

      const config = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "x-access-token": accessToken,
        },
      };

      const data = {
        idBill: state.idBill,
        confirm: true,
      };

      await axios
        .post(
          "https://back-end-can-teen-manage-25.vercel.app/api/v1/user/confirmBill",
          data,
          config
        )
        .then(() => {
          state.isSuccessPayment = true;
          state.account.money -= state.totalCost;
        })
        .catch(() => {
          state.isSuccessPayment = false;
        });
      state.isCancelledBill = false;

      //reset======================

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
    },
    async cancelUserPayment({ commit, state }) {
      commit;
      state;
      if (state.TimeOutFn) {
        clearTimeout(state.TimeOutFn);
      }

      if (state.isCancelledBill) {
        const accessToken = Cookies.get("accessToken");

        const config = {
          headers: {
            Authorization: "Bearer " + accessToken,
            "x-access-token": accessToken,
          },
        };

        const data = {
          idBill: state.idBill,
          confirm: false,
        };

        // console.log("du lieu data khi huy: ", data);

        await axios
          .post(
            "https://back-end-can-teen-manage-25.vercel.app/api/v1/user/confirmBill",
            data,
            config
          )
          .then(() => {
            // console.log("da huy vi tri cho", rs);
          })
          .catch((err) => {
            console.log("bi loi huy vi tri", err);
          });
        state.isCancelledBill = false;
        return;
      }
    },
    resetIsSuccessPayment({ commit, state }) {
      commit;
      state.isSuccessPayment = "rong";
    },
    resetValidPayment({ commit, state }) {
      commit;
      state.isValidPayMent = true;
    },
    //START USER UPDATE TYPE SELECTED===
    updateTypeSelected({ commit, state }, { status, id }) {
      commit;
      switch (status) {
        case "icr":
          if (
            state.totalCost + this.getters.getProduct(id).price <=
              this.state.account.money ||
            state.account.role === "admin"
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

    //CASHIER PAYMENT=========================
    async doAdminPayment({ commit, state }) {
      commit;
      state;

      // console.log("san pham ban: ", state.ProductsAdminBill);

      const accessToken = Cookies.get("accessToken");

      const config = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "x-access-token": accessToken,
        },
      };

      const objSell = JSON.parse(JSON.stringify(state.ProductsAdminBill));

      let productSell = [];

      objSell.forEach((e) => {
        const temp = {
          id: e.id,
          number: e.quantity,
        };

        productSell.push(temp);
      });

      let today = new Date();
      const getDateVal =
        today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
      let buyTime =
        today.getHours() +
        ":" +
        today.getMinutes() +
        " " +
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        getDateVal;

      const data = {
        product: productSell,
        buyTime,
      };

      // console.log("data gui len", data);

      let flag;
      state.isLoading = true;
      await axios
        .post(
          "https://back-end-can-teen-manage-25.vercel.app/api/v1/cashier/createBill",
          data,
          config
        )
        .then(() => {
          // console.log("Ban thanh cong: ", rs);
          state.isLoading = false;

          store.dispatch("getAllTodayProducts");

          state.qTypeSelected.rice = 0;
          state.qTypeSelected.noodles = 0;
          state.qTypeSelected.cake = 0;
          state.qTypeSelected.gas = 0;
          state.qTypeSelected.noGas = 0;
          state.qSelected = {};
          state.totalCost = 0;
          flag = "success";
        })
        .catch(() => {
          state.isLoading = false;

          flag = "fail";
        });
      return flag;
      // return new Promise((resolve, reject) => {
      //   if (state.ProductsAdminBill.length !== 0) {
      //     const arrIDSelected = Object.keys(state.qSelected);
      //     arrIDSelected.forEach((id) => {
      //       this.getters.getProduct(id).total -= state.qSelected[id];
      //     });
      //     state.qTypeSelected.rice = 0;
      //     state.qTypeSelected.noodles = 0;
      //     state.qTypeSelected.cake = 0;
      //     state.qTypeSelected.gas = 0;
      //     state.qTypeSelected.noGas = 0;
      //     state.qSelected = {};
      //     state.totalCost = 0;
      //     resolve("Success");
      //   } else {
      //     reject("Fail");
      //   }
      // });
    },

    //CASHIER UPDATE SCHEDULE=================
    async cashierUpdateSche({ commit, state }, newObj) {
      commit;
      state;
      // state.productsTypedSche[newObj.day - 1] = newObj;

      const accessToken = Cookies.get("accessToken");

      const config = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "x-access-token": accessToken,
        },
      };

      newObj.products = [...newObj.products.rice, ...newObj.products.noodles];
      state.isLoading = true;

      for (let idex in newObj.products) {
        let pro = newObj.products[idex];
        if (pro.id === "new") {
          const storageRef = ref(storage, "ImageFood/" + pro.FileImg.name);
          await uploadBytes(storageRef, pro.FileImg).then(async () => {
            await getDownloadURL(storageRef).then((url) => {
              state.isLoading = false;
              newObj.products[idex].img = url;
            });
          });
        }
      }

      const currObj = JSON.parse(JSON.stringify(newObj));

      const data = { ...currObj };

      state.isLoading = true;

      // let flag;
      await axios
        .post(
          "https://back-end-can-teen-manage-25.vercel.app/api/v1/cashier/addProduct",
          data,
          config
        )
        .then(() => {
          state.isLoading = false;
        })
        .catch(() => {
          state.isLoading = false;
        });

      store.dispatch("cashierGetSchedule");
    },

    //CASHIER GET SHEDULE PRODUCTS=================

    async cashierGetSchedule({ commit, state }) {
      commit;
      state;
      // state.productsTypedSche[newObj.day - 1] = newObj;

      const accessToken = Cookies.get("accessToken");

      const config = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "x-access-token": accessToken,
        },
      };
      state.isLoading = true;
      await axios
        .post(
          "https://back-end-can-teen-manage-25.vercel.app/api/v1/cashier/allProduct",
          {},
          config
        )
        .then((rs) => {
          state.isLoading = false;

          state.productsTypedSche = rs.data.data;
        })
        .catch(() => {
          state.isLoading = false;
        });
    },

    //CASHIER UPDATE PRODUCT IMPORTED
    async importProducts({ commit, state }, newArrProduct) {
      commit;
      state;
      const accessToken = Cookies.get("accessToken");

      const config = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "x-access-token": accessToken,
        },
      };

      let data = {
        product: newArrProduct,
      };

      state.isLoading = true;

      for (let idx in data.product) {
        let pro = data.product[idx];

        const storageRef = ref(storage, "product/" + pro.FileImg.name);
        await uploadBytes(storageRef, pro.FileImg).then(async () => {
          await getDownloadURL(storageRef).then((url) => {
            data.product[idx].img = url;
          });
        });
      }

      data = JSON.parse(JSON.stringify(data));

      console.log("data import", data);

      await axios
        .post(
          "https://back-end-can-teen-manage-25.vercel.app/api/v1/cashier/importGoods",
          data,
          config
        )
        .then(() => {
          state.isLoading = false;

          // console.log(rs);
        })
        .catch((err) => {
          state.isLoading = false;

          console.log(err);
        });

      // newArrProduct.forEach((product) => {
      //   state.productImported.push(product);
      // });
      // console.log(state.productImported);
    },

    async getProductImported({ commit, state }) {
      commit;
      state;

      state.productImported = [];
      const accessToken = Cookies.get("accessToken");

      const config = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "x-access-token": accessToken,
        },
      };
      state.isLoading = true;

      await axios
        .post(
          "https://back-end-can-teen-manage-25.vercel.app/api/v1/cashier/inventory",
          {
            dummytext: "huyhaha",
          },
          config
        )
        .then((rs) => {
          state.isLoading = false;

          state.productImported = rs.data;
        })
        .catch((err) => {
          state.isLoading = false;

          console.log(err);
        });
    },

    async exportProduct({ commit, state }, { idPro, quantity }) {
      commit;
      state;
      const accessToken = Cookies.get("accessToken");

      const config = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "x-access-token": accessToken,
        },
      };

      let data = {
        id: idPro,
        quantity,
      };

      data = JSON.parse(JSON.stringify(data));
      state.isLoading = true;

      await axios
        .post(
          "https://back-end-can-teen-manage-25.vercel.app/api/v1/cashier/exportGoods",
          data,
          config
        )
        .then(() => {
          state.isLoading = false;

          store.dispatch("getProductImported");
        })
        .catch((err) => {
          state.isLoading = false;

          console.log(err);
        });
    },

    async destroyProduct({ commit, state }, { id, quantity }) {
      commit;
      state;
      const accessToken = Cookies.get("accessToken");

      const config = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "x-access-token": accessToken,
        },
      };

      let data = {
        id,
        quantity,
      };

      data = JSON.parse(JSON.stringify(data));
      state.isLoading = true;

      await axios
        .post(
          "https://back-end-can-teen-manage-25.vercel.app/api/v1/cashier/removeGood",
          data,
          config
        )
        .then(() => {
          state.isLoading = false;

          store.dispatch("getProductImported");
        })
        .catch((err) => {
          state.isLoading = false;

          console.log(err);
        });
    },

    //CASHIER SEARCH IMPORT PRODUCT BY DATE
    searchProductIE({ commit, state }, { status, date }) {
      commit;
      state;
      status;
      date;
    },

    resetHistoryIE({ commit, state }) {
      commit;
      state;
      state.ProductHistoryCE = [];
    },

    //CASHIER SEARCH HISTORY PRODUCT IE
    async searchHistoryIE({ commit, state }, { status, date }) {
      commit;
      state;

      state.ProductHistoryCE = [];

      const accessToken = Cookies.get("accessToken");

      const config = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "x-access-token": accessToken,
        },
      };

      if (!date) {
        date = "allDay";
      }

      let data = {
        date,
      };

      data = JSON.parse(JSON.stringify(data));

      // console.log("data gui len", data);

      let urlPath;

      if (status === "Import") {
        urlPath =
          "https://back-end-can-teen-manage-25.vercel.app/api/v1/cashier/importHistory";
      } else {
        urlPath =
          "https://back-end-can-teen-manage-25.vercel.app/api/v1/cashier/exportHistory";
      }
      state.isLoading = true;

      await axios
        .post(urlPath, data, config)
        .then((rs) => {
          state.isLoading = false;

          // console.log("data history", rs);
          // store.dispatch("getProductImported");
          state.ProductHistoryCE = rs.data.products;
          return;
        })
        .catch((err) => {
          state.isLoading = false;

          console.log(err);
          return;
        });
    },

    async setUpDelivery({ commit, state }, { letters, color, numPerColor }) {
      commit;
      state;

      const accessToken = Cookies.get("accessToken");

      const config = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "x-access-token": accessToken,
        },
      };
      let data = {
        letter: letters,
        color,
        numPerColor,
      };

      // data = JSON.parse(JSON.stringify(data));
      state.isLoading = true;
      await axios
        .post(
          "https://back-end-can-teen-manage-25.vercel.app/api/v1/cashier/createPosition",
          data,
          config
        )
        .then(() => {
          state.isLoading = false;

          // store.dispatch("getProductImported");
        })
        .catch((err) => {
          state.isLoading = false;

          console.log(err);
        });
    },

    async getTurnOverToday({ commit, state }) {
      commit;
      state;

      const accessToken = Cookies.get("accessToken");

      const config = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "x-access-token": accessToken,
        },
      };
      // data = JSON.parse(JSON.stringify(data));
      state.isLoading = true;

      await axios
        .post(
          "https://back-end-can-teen-manage-25.vercel.app/api/v1/cashier/getTodayRevenue",
          {},
          config
        )
        .then((rs) => {
          state.isLoading = false;

          // store.dispatch("getProductImported");
          // console.log("ressult gui ve: ", rs);
          state.TurnOver = rs.data.revenue;
        })
        .catch((err) => {
          state.isLoading = false;

          console.log(err);
        });
    },

    async getTurnOverThisMonth({ commit, state }) {
      commit;
      state;
      let today = new Date();

      let start = new Date(today.getFullYear() + "-" + (today.getMonth() + 1));
      start = start.getTime();
      let end = new Date(
        today.getFullYear() +
          "-" +
          (today.getMonth() + 1) +
          "-" +
          today.getDate()
      );
      end = end.getTime();

      const accessToken = Cookies.get("accessToken");

      const config = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "x-access-token": accessToken,
        },
      };
      // data = JSON.parse(JSON.stringify(data));
      state.isLoading = true;
      await axios
        .post(
          "https://back-end-can-teen-manage-25.vercel.app/api/v1/cashier/getMonthRevenue",
          {
            start,
            end,
          },
          config
        )
        .then((rs) => {
          state.isLoading = false;

          // store.dispatch("getProductImported");
          // console.log("ressult gui ve: ", rs);
          state.TurnOver = rs.data.revenue;
        })
        .catch((err) => {
          state.isLoading = false;

          console.log(err);
        });
    },

    async getTurnoverAtDate({ commit, state }, { date }) {
      commit;
      state;
      const accessToken = Cookies.get("accessToken");

      const config = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "x-access-token": accessToken,
        },
      };

      const data = {
        start: date,
        end: date,
      };
      state.isLoading = true;
      await axios
        .post(
          "https://back-end-can-teen-manage-25.vercel.app/api/v1/cashier/getRevenueInPeriodTime",
          data,
          config
        )
        .then((rs) => {
          state.isLoading = false;

          // store.dispatch("getProductImported");
          state.TurnOver = rs.data.revenue;
        })
        .catch((err) => {
          state.isLoading = false;

          console.log(err);
        });
    },

    async getTurnoverFromTo({ commit, state }, { start, end }) {
      commit;
      state;
      const accessToken = Cookies.get("accessToken");

      const config = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "x-access-token": accessToken,
        },
      };

      const data = {
        start,
        end,
      };
      state.isLoading = true;
      await axios
        .post(
          "https://back-end-can-teen-manage-25.vercel.app/api/v1/cashier/getRevenueInPeriodTime",
          data,
          config
        )
        .then((rs) => {
          // store.dispatch("getProductImported");
          state.isLoading = false;

          state.TurnOver = rs.data.revenue;
        })
        .catch((err) => {
          state.isLoading = false;

          console.log(err);
        });
    },

    async getAllTodayProducts({ commit, state }) {
      commit;
      state;
      // const accessToken = Cookies.get("accessToken");

      const config = {
        headers: {
          // Authorization: "Bearer " + accessToken,
          // "x-access-token": accessToken,
        },
      };
      state.isLoading = true;
      await axios
        .get(
          "https://back-end-can-teen-manage-25.vercel.app/api/v1/auth/",
          {},
          config
        )
        .then((rs) => {
          state.isLoading = false;

          state.RiceProduct = [];
          rs.data.data.rice.forEach((el) => {
            const objtemp = {
              id: el.id,
              type: "rice",
              img: el.img,
              total: el.quantity,
              name: el.name,
              price: el.price,
            };
            state.RiceProduct.push(objtemp);
          });

          state.NoodlesProduct = [];
          rs.data.data.noodles.forEach((el) => {
            const objtemp = {
              id: el.id,
              type: "noodles",
              img: el.img,
              total: el.quantity,
              name: el.name,
              price: el.price,
            };
            state.NoodlesProduct.push(objtemp);
          });

          state.GasProduct = [];
          rs.data.data.gas.forEach((el) => {
            const objtemp = {
              id: el.id,
              type: "gas",
              img: el.img,
              total: el.quantity,
              name: el.name,
              price: el.price,
            };
            state.GasProduct.push(objtemp);
          });

          state.NoGasProduct = [];
          rs.data.data.noGas.forEach((el) => {
            const objtemp = {
              id: el.id,
              type: "noGas",
              img: el.img,
              total: el.quantity,
              name: el.name,
              price: el.price,
            };
            state.NoGasProduct.push(objtemp);
          });

          state.CakeProduct = [];
          rs.data.data.cake.forEach((el) => {
            const objtemp = {
              id: el.id,
              type: "cake",
              img: el.img,
              total: el.quantity,
              name: el.name,
              price: el.price,
            };
            state.CakeProduct.push(objtemp);
          });

          state.products = [
            ...state.RiceProduct,
            ...state.NoodlesProduct,
            ...state.CakeProduct,
            ...state.GasProduct,
            ...state.NoGasProduct,
          ];
        })
        .catch((err) => {
          state.isLoading = false;

          console.log(err);
        });
    },

    async getCurrProStatus({ commit, state }) {
      commit;
      state;
      const accessToken = Cookies.get("accessToken");

      const config = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "x-access-token": accessToken,
        },
      };
      state.isLoading = true;
      await axios
        .post(
          "https://back-end-can-teen-manage-25.vercel.app/api/v1/user/uncompleteBill",
          {},
          config
        )
        .then((rs) => {
          state.isLoading = false;

          // state.productImported = rs.data;
          // console.log("gia tri tra ve, ", rs);
          const data = rs.data.billUncomplete.result;

          state.PRODUCTBOUGHT = [];
          data.forEach((billEl) => {
            billEl.data.forEach((e) => {
              state.PRODUCTBOUGHT.push(e);
            });
          });

          // console.log(state.PRODUCTBOUGHT);
        })
        .catch((err) => {
          state.isLoading = false;

          console.log(err);
        });
    },

    async getMoneyUsedInMonth({ commit, state }) {
      commit;
      state;
      const accessToken = Cookies.get("accessToken");

      state.moneyUsedInMonth = 0;

      const config = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "x-access-token": accessToken,
        },
      };
      state.isLoading = true;
      await axios
        .post(
          "https://back-end-can-teen-manage-25.vercel.app/api/v1/user/getTotalMoneySpentInMonth",
          {},
          config
        )
        .then((rs) => {
          state.isLoading = false;

          // state.productImported = rs.data;
          // console.log("gia tri tra ve, ", rs);
          // console.log("ket qua tra ve:", rs);

          state.moneyUsedInMonth = rs.data.money;

          // console.log(state.PRODUCTBOUGHT);
        })
        .catch((err) => {
          state.isLoading = false;

          console.log(err);
        });
    },

    async getDoingBills({ commit, state }) {
      commit;
      state;

      state.UserBillInfo = [];

      const accessToken = Cookies.get("accessToken");

      const config = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "x-access-token": accessToken,
        },
      };
      const today = new Date();
      const getDateVal =
        today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
      state.isLoading = true;

      const date =
        today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + getDateVal;

      await axios
        .post(
          "https://back-end-can-teen-manage-25.vercel.app/api/v1/cashier/getUnCompletedBill",
          {
            date,
          },
          config
        )
        .then((rs) => {
          state.isLoading = false;

          // state.moneyUsedInMonth = rs.data.money;
          // console.log("hoa don chua hoan thanh", rs);

          state.UserBillInfo = rs.data.data;
          state.UserBillInfo.forEach((billEl) => {
            billEl["idPositions"] = [];
            billEl.product.forEach((posBill) => {
              if (posBill.position !== {}) {
                billEl["idPositions"].push(posBill.position);
              }
            });
          });
          // console.log(state.PRODUCTBOUGHT);
        })
        .catch((err) => {
          state.isLoading = false;

          console.log("Loi khi lay hoa don chua hoan thanh", err);
        });
    },

    async getDoneBills({ commit, state }) {
      commit;
      state;

      state.UserBillInfo = [];

      const accessToken = Cookies.get("accessToken");

      const config = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "x-access-token": accessToken,
        },
      };

      const today = new Date();
      const getDateVal =
        today.getDate() < 10 ? "0" + today.getDate() : today.getDate();
      state.isLoading = true;

      const date =
        today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + getDateVal;

      // console.log("date gui len: ", date);

      const data = {
        date,
      };

      state.isLoading = true;
      await axios
        .post(
          "https://back-end-can-teen-manage-25.vercel.app/api/v1/cashier/getCompletedBill",
          data,
          config
        )
        .then((rs) => {
          // console.log("gia tri gui ve ", rs);
          state.isLoading = false;

          // state.moneyUsedInMonth = rs.data.money;
          // console.log("hoa don chua hoan thanh", rs);
          state.UserBillInfo = rs.data.data;
          state.UserBillInfo.forEach((billEl) => {
            billEl["idPositions"] = [];
            billEl.product.forEach((posBill) => {
              billEl["idPositions"].push(posBill.position);
            });
          });

          // console.log(state.PRODUCTBOUGHT);
        })
        .catch((err) => {
          state.isLoading = false;

          console.log("Loi khi lay hoa don chua hoan thanh", err);
        });
    },

    async searchByBIllID({ commit, state }, { status, id }) {
      commit;
      state;

      state.UserBillInfo = [];

      const accessToken = Cookies.get("accessToken");

      const config = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "x-access-token": accessToken,
        },
      };

      const data = {
        status,
        id,
      };

      // console.log("data gui len", data);
      state.isLoading = true;
      await axios
        .post(
          "https://back-end-can-teen-manage-25.vercel.app/api/v1/cashier/getBillByID",
          data,
          config
        )
        .then((rs) => {
          state.isLoading = false;

          // state.moneyUsedInMonth = rs.data.money;
          // console.log("hoa don chua hoan thanh", rs);

          // console.log("ket qua tra ve : ", rs);

          state.UserBillInfo = rs.data.data;
          state.UserBillInfo.forEach((billEl) => {
            billEl["idPositions"] = [];
            billEl.product.forEach((posBill) => {
              billEl["idPositions"].push(posBill.position);
            });
          });

          // console.log(state.PRODUCTBOUGHT);
        })
        .catch(() => {
          state.isLoading = false;

          // console.log("Loi khi lay hoa don theo id", err);
        });
    },

    resetIsFullPos({ commit, state }) {
      commit;
      state.isFullPos = false;
    },

    resetValueUserBillInfo({ commit, state }) {
      commit;
      state.UserBillInfo = [];
    },

    async seachBIllByIDCS({ commit, state }, { id }) {
      commit;
      state;
      state.UserBillInfo = [];

      const accessToken = Cookies.get("accessToken");

      const config = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "x-access-token": accessToken,
        },
      };

      const data = {
        id,
        // status: "done",
      };

      // console.log("data gui len", data);
      state.isLoading = true;
      await axios
        .post(
          "https://back-end-can-teen-manage-25.vercel.app/api/v1/cashier/getHistoryBillByID",
          data,
          config
        )
        .then((rs) => {
          state.isLoading = false;

          // state.moneyUsedInMonth = rs.data.money;
          // console.log("hoa don chua hoan thanh", rs);

          // console.log("ket qua tra ve : ", rs);

          state.UserBillInfo = rs.data.data;
          state.UserBillInfo.forEach((billEl) => {
            billEl["idPositions"] = [];
            billEl.product.forEach((posBill) => {
              billEl["idPositions"].push(posBill.position);
            });
          });

          // console.log(state.PRODUCTBOUGHT);
        })
        .catch((err) => {
          console.log("loi khi lay hd theo id: ", err);
          state.isLoading = false;

          // console.log("Loi khi lay hoa don theo id", err);
        });
    },

    async searchBillByDayCashier({ commit, state }, { date }) {
      commit;
      state.UserBillInfo = [];

      const accessToken = Cookies.get("accessToken");

      const config = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "x-access-token": accessToken,
        },
      };

      const data = {
        date,
        // status: "done",
      };

      // console.log("data gui len", data);
      state.isLoading = true;
      await axios
        .post(
          "https://back-end-can-teen-manage-25.vercel.app/api/v1/cashier/getBillByDate",
          data,
          config
        )
        .then((rs) => {
          state.isLoading = false;

          // state.moneyUsedInMonth = rs.data.money;
          // console.log("hoa don chua hoan thanh", rs);

          // console.log("ket qua tra ve : ", rs);

          state.UserBillInfo = rs.data.data;
          state.UserBillInfo.forEach((billEl) => {
            billEl["idPositions"] = [];
            billEl.product.forEach((posBill) => {
              billEl["idPositions"].push(posBill.position);
            });
          });

          // console.log(state.PRODUCTBOUGHT);
        })
        .catch((err) => {
          console.log("loi khi lay hd theo id: ", err);
          state.isLoading = false;

          // console.log("Loi khi lay hoa don theo id", err);
        });
    },

    //ASSISTANT CHECKPRODUCT

    async getAllDoingBillAssistant({ commit, state }) {
      commit;
      state;
      const accessToken = Cookies.get("accessToken");

      const config = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "x-access-token": accessToken,
        },
      };
      state.ASSISTANTBILLS = [];

      state.isLoading = true;
      await axios
        .post(
          "https://back-end-can-teen-manage-25.vercel.app/api/v1/position/getListBillUncomplete",
          {},
          config
        )
        .then((rs) => {
          state.isLoading = false;
          state.ASSISTANTBILLS = rs.data.data;
        })
        .catch((err) => {
          state.isLoading = false;
          console.log("loi khi lay hoa don doing ", err);
        });
    },

    checkProductDone({ commit, state }, { idBill, idProduct }) {
      commit;
      state.ASSISTANTBILLS.forEach((el) => {
        if (el.idBill === idBill) {
          el.dataProduct.forEach((e) => {
            if (e.idProduct === idProduct) {
              e.statusProduct = e.statusProduct === "done" ? "doing" : "done";
            }
          });
        }
      });
    },

    async getAllColorPos({ commit, state }) {
      commit;
      state;
      const accessToken = Cookies.get("accessToken");

      const config = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "x-access-token": accessToken,
        },
      };

      state.isLoading = true;
      await axios
        .post(
          "https://back-end-can-teen-manage-25.vercel.app/api/v1/position/getPositionTableColor",
          {},
          config
        )
        .then((rs) => {
          state.isLoading = false;
          state.colors = rs.data.colors;
        })
        .catch((err) => {
          state.isLoading = false;
          console.log("loi khi update hoa don", err);
        });
    },

    async updatePosEmpty({ commit, state }, { listPosition }) {
      commit;
      state;
      const accessToken = Cookies.get("accessToken");

      const config = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "x-access-token": accessToken,
        },
      };

      // console.log("data gui len: ", listbill);

      const data = {
        listPosition,
      };

      state.isLoading = true;
      await axios
        .post(
          "https://back-end-can-teen-manage-25.vercel.app/api/v1/position/setEmptyPosition",
          data,
          config
        )
        .then(() => {
          state.isLoading = false;
        })
        .catch((err) => {
          state.isLoading = false;
          console.log("loi khi free vi tri", err);
        });
    },

    async searchDoingBillByID({ commit, state }, { idBill }) {
      commit;
      state;
      const accessToken = Cookies.get("accessToken");

      const config = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "x-access-token": accessToken,
        },
      };

      const data = {
        idBill,
      };
      state.ASSISTANTBILLS = [];
      state.isLoading = true;
      await axios
        .post(
          "https://back-end-can-teen-manage-25.vercel.app/api/v1/position/getBillUncompleteByID",
          data,
          config
        )
        .then((rs) => {
          state.isLoading = false;
          state.ASSISTANTBILLS = rs.data.data;
        })
        .catch((err) => {
          state.isLoading = false;
          console.log("loi khi free vi tri", err);
        });
    },

    async updateBill({ commit, state }) {
      commit;
      state;
      const accessToken = Cookies.get("accessToken");

      const config = {
        headers: {
          Authorization: "Bearer " + accessToken,
          "x-access-token": accessToken,
        },
      };

      let listBill = [];

      state.ASSISTANTBILLS.forEach((bill) => {
        const updateBill = {
          idBill: bill.idBill,
          products: [],
        };

        bill.dataProduct.forEach((idb) => {
          if (idb.statusProduct === "done") {
            updateBill.products.push(idb.idProduct);
          }
        });
        listBill.push(updateBill);
      });

      // console.log("data gui len: ", listbill);

      const data = {
        listBill,
      };

      state.isLoading = true;
      await axios
        .post(
          "https://back-end-can-teen-manage-25.vercel.app/api/v1/position/setStatusProduct",
          data,
          config
        )
        .then(() => {
          // state.isLoading = false;
          store.dispatch("getAllDoingBillAssistant");
          // state.ASSISTANTBILLS = rs.data.data;
        })
        .catch((err) => {
          state.isLoading = false;
          console.log("loi khi update hoa don", err);
        });
    },
  },
});

export default store;
