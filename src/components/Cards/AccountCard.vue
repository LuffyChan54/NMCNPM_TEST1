<template>
  <div @click="toggleSubMenuAccount" class="accountCTN">
    <div class="imgAccountCTN">
      <img
        :src="require(`../../assets/imgs/${avatar}`)"
        alt="avatar"
        class="imgAccount"
      />
    </div>
    <div v-if="this.isDropMenu" class="dropDownAcc">
      <div @click="gotoInfopage" class="accMenuTitle">
        <h1>Tài khoản</h1>
      </div>
      <div @click="gotoHistorypage" class="accMenuTitle">
        <h1>Lịch Sử</h1>
      </div>
      <div @click="logout" class="accMenuTitle">
        <h1>Đăng xuất</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDropMenu: false,
    };
  },
  computed: {
    avatar() {
      return this.$store.state.account.img;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    gotoInfopage() {
      this.$router.push("info");
    },
    gotoHistorypage() {
      this.$store.dispatch("resetUserBillInfo");
      this.$router.push("Userhistory");
    },
    toggleSubMenuAccount() {
      this.isDropMenu = !this.isDropMenu;
    },
  },
};
</script>

<style scoped>
.accountCTN {
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background: var(--yellow);
  position: relative;
  cursor: pointer;
}

.dropDownAcc {
  position: absolute;
  top: 110%;
  left: 0;
  border-radius: var(--radius);
  background: var(--white);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 120%;
  box-shadow: 0px 2px 10px rgb(47, 47, 47, 0.4);
}
.accMenuTitle:hover {
  background: var(--yellow);
}
.accMenuTitle {
  text-align: center;
  width: 100%;
  padding: 1rem;
  border-radius: var(--radius);
  border: var(--border_lg) solid var(--dark);
  background: var(--white);
  cursor: pointer;
}

.accMenuTitle > h1 {
  font-size: 1.5rem;
  color: var(--dark);
}

.imgAccountCTN {
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.imgAccountCTN > img {
  width: 8rem;
  height: auto;
  object-fit: cover;
}
</style>
