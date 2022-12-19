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
          <button @click="goToCashierTurnover">
            <h1>Doanh Thu</h1>
          </button>
          <button @click="goToCashierHistory">
            <h1>Lịch Sử</h1>
          </button>
          <button @click="goToCashierExport">
            <h1>Nhập Xuất Kho</h1>
          </button>
          <button @click="goToCashierDelivery">
            <h1>Quầy Giao Hàng</h1>
          </button>
        </div>
      </div>

      <div class="CHUnderMenuCTN">
        <div class="CHUnderMenuBTNS">
          <slot name="buttons"></slot>
        </div>
        <div class="mainCTN">
          <slot name="mainCTN"></slot>
        </div>
      </div>
    </container>
  </template>
  <ErrorPage v-else></ErrorPage>
</template>

<script>
import ErrorPage from "@/pages/ErrorPage.vue";
import container from "../Containers/Container.vue";
export default {
  data() {
    return {
      isOpenMenu: false,
    };
  },
  components: {
    ErrorPage,
    container,
  },
  methods: {
    goToCashierDelivery(event) {
      event.preventDefault();
      this.$router.push("/cashierdelivery");
    },
    goToCashierExport(event) {
      event.preventDefault();
      this.$router.push("/cashierexport");
    },
    goToCashierHistory(event) {
      event.preventDefault();
      this.$router.push("/cashierhistory");
    },
    goToCashierSchedule(event) {
      event.preventDefault();
      this.$router.push("/cashierschedule");
    },
    goToCashierTurnover(event) {
      event.preventDefault();
      this.$router.push("/cashierturnover");
    },
    goToCashierHome(event) {
      event.preventDefault();

      this.$router.push("/cashierhome");
    },
    logout() {
      this.$store.dispatch("logout");
    },
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    },
    isAdmin() {
      return this.$store.state.account.role === "admin";
    },
  },
};
</script>

<style>
/* START COPY=============================== */
.mainCTN {
  padding: 2rem 1rem;
  background: var(--dark);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-top-right-radius: var(--radius);
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
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

.CASHIERMENU {
  z-index: 1000;
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

.CHUnderMenuBTNS {
  display: flex;
  gap: 1.5rem;
}

.CHUnderMenuBTNS > button {
  border: none;
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
  background: var(--yellow);
  padding: 0.5rem 1.5rem;
  cursor: pointer;
}

.CHUnderMenuBTNS > button.active {
  background: var(--dark);
}

.CHUnderMenuBTNS > button.active > h1 {
  color: var(--yellow);
}

.CHUnderMenuBTNS > button > h1 {
  font-size: 1.5rem;
  color: var(--dark);
}

/* STOP COPY=============================== */
</style>
