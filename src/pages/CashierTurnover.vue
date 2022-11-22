<template>
  <template v-if="this.isLogin && this.isAdmin">
    <container class="CTCTN">
      <div class="CTMENUAboveCTN">
        <i
          @click="this.isOpenMenu = true"
          class="fa fa-bars"
          aria-hidden="true"
        ></i>
        <button @click="logout" class="logoutBTN">
          <h1>Đăng Xuất</h1>
        </button>
      </div>
      <div v-if="this.isOpenMenu" class="CASHIERMENU">
        <i
          @click="this.isOpenMenu = false"
          class="fa fa-times"
          aria-hidden="true"
        ></i>
        <div class="MENUBTNS">
          <button @click="goToCashierHome">
            <h1>Trang Chủ</h1>
          </button>
          <button @click="goToCashierSchedule">
            <h1>Lên Lịch Bán Hàng</h1>
          </button>
          <button @click="this.isOpenMenu = false">
            <h1>Doanh Thu</h1>
          </button>
          <button @click="goToCashierHistory">
            <h1>Lịch Sử</h1>
          </button>
          <button @click="goToCashierExport">
            <h1>Nhập Xuất Kho</h1>
          </button>
          <button>
            <h1>Quầy Giao Hàng</h1>
          </button>
        </div>
      </div>

      <div class="CTMENUUnder">
        <div class="Turnover">
          <h1>15000000đ</h1>
        </div>

        <div class="btnTurnover">
          <button>
            <h1>Doanh Thu Hôm Nay</h1>
          </button>
          <button>
            <h1>Doanh Thu Tháng Này</h1>
          </button>
        </div>

        <div class="TurnoverSearchCTN">
          <h1>Doanh Thu:</h1>
          <div class="CTItem">
            <label for="">Vào Ngày:</label>
            <input type="date" />
            <div class="iconSearch">
              <i class="fa fa-search" aria-hidden="true"></i>
            </div>
          </div>
          <div class="CTItem">
            <label for="">Từ Ngày:</label>
            <input type="date" />

            <label for="">Đến Ngày:</label>
            <input type="date" />

            <div class="iconSearch">
              <i class="fa fa-search" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </container>
  </template>
  <ErrorPage v-else></ErrorPage>
</template>

<script>
import ErrorPage from "./ErrorPage.vue";
import container from "../components/Containers/Container.vue";

export default {
  components: {
    ErrorPage,
    container,
  },
  data() {
    return {
      isOpenMenu: false,
    };
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
    isAdmin() {
      return this.$store.state.account.role === "admin";
    },
  },
  methods: {
    goToCashierExport(event) {
      event.preventDefault();
      this.$router.push("/cashierexport");
    },
    goToCashierSchedule(event) {
      event.preventDefault();
      this.$router.push("/cashierschedule");
    },
    goToCashierHistory(event) {
      event.preventDefault();
      this.$router.push("/cashierhistory");
    },
    goToCashierHome(event) {
      event.preventDefault();

      this.$router.push("/cashierhome");
    },
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style scoped>
.iconSearch {
  cursor: pointer;
  padding: 1rem;
  border-radius: 50%;
  background: var(--yellow);
}

.iconSearch i {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--dark);
}
.CTItem {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.CTItem > label {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--white);
}

.CTItem > input {
  font-size: 1.5rem;
  color: var(--dark);
  font-weight: bold;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: var(--radius);
  background: var(--white);
}

.CTItem > input:focus {
  outline: none;
}
.TurnoverSearchCTN {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
}

.TurnoverSearchCTN h1 {
  font-size: 1.5rem;
  color: var(--white);
}
.btnTurnover {
  display: flex;
  gap: 1.5rem;
}

.btnTurnover button {
  border-radius: var(--radius);
  border: none;
  background: var(--yellow);
  padding: 0.5rem 1.5rem;
  cursor: pointer;
}

.btnTurnover button h1 {
  font-size: 1.5rem;
  color: var(--dark);
}
.Turnover {
  width: fit-content;
  border-radius: var(--radius);
  background: var(--white);
  padding: 0.5rem 1.5rem;
  align-self: center;
}

.Turnover h1 {
  font-size: 2rem;
  color: var(--dark);
}
.CTMENUUnder {
  width: 100%;
  border-radius: var(--radius);
  background: var(--dark);
  padding: 2rem 4rem 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
  justify-content: center;
}
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
.CTCTN {
  position: relative;
  padding: 3rem 2rem !important;
  transition: 0.4s all ease-in;
}

.CTMENUAboveCTN {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  align-items: center;
}

.CTMENUAboveCTN > i {
  font-size: 2rem;
  cursor: pointer;
  color: var(--dark);
}

.CTMENUAboveCTN > button {
  border: var(--border_lg) solid var(--dark);
  border-radius: var(--radius);
  background: var(--white);
  padding: 0.5rem 1.5rem;
  cursor: pointer;
}

.CTMENUAboveCTN > button > h1 {
  color: var(--dark);
  font-size: 1.5rem;
}
</style>
