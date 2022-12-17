<template>
  <template v-if="this.userRole === 'user'">
    <container>
      <div class="InfoCTN">
        <div class="InfoHeader">
          <SSSubInfoHeader></SSSubInfoHeader>
          <div class="InfoIMGCTN">
            <div class="InfoSmallCir">
              <div class="InfoWrapAvatar">
                <div class="InfoAVTCTN">
                  <img src="../assets/imgs/avt.jpg" alt="avatar" />
                </div>
              </div>
            </div>
            <h1 class="InfoUserID">ID: {{ this.idUser }}</h1>
          </div>
        </div>

        <div class="InfoContent">
          <UserInfoForm></UserInfoForm>
        </div>
      </div>
    </container>
    <SSFooter></SSFooter>
  </template>
  <ErrorPage v-else></ErrorPage>
</template>

<script>
import ErrorPage from "./ErrorPage.vue";
import SSFooter from "../components/Sections/SSFooter.vue";
import container from "../components/Containers/Container.vue";
import SSSubInfoHeader from "@/components/Sections/SSSubInfoHeader.vue";

import UserInfoForm from "../components/Forms/UserInfoForm.vue";

export default {
  components: {
    ErrorPage,
    SSFooter,
    container,
    SSSubInfoHeader,
    UserInfoForm,
  },
  computed: {
    userRole() {
      return this.$store.state.account.role;
    },
    isLogin() {
      return this.$store.state.isLogin;
    },
    idUser() {
      return this.$store.state.account.id;
    },
  },
};
</script>

<style scoped>
.InfoCTN {
  display: flex;
  flex-direction: column;
  gap: 15rem;
  align-items: center;
}

.InfoHeader {
  width: calc(100% + 4rem);
  padding: 5rem 2rem 7rem;
  background: var(--yellow);
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
}

.InfoIMGCTN {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1rem;
  border-radius: 50%;
  background: transparent;
  border: 10px solid var(--yellow);
}

.InfoUserID {
  width: 1000%;
  text-align: center;
  position: absolute;
  top: 120%;
  left: 50%;
  color: var(--dark);
  transform: translate(-50%, -50%);
}
.InfoSmallCir {
  padding: 1rem;
  border-radius: 50%;
  background: transparent;
  border: 10px solid var(--dark);
}
.InfoWrapAvatar {
  padding: 1rem;
  border-radius: 50%;
  background: var(--yellow);
}

.InfoAVTCTN {
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  overflow: hidden;
}

.InfoAVTCTN > img {
  width: 10rem;
  height: auto;
}

.InfoContent {
  padding: 2rem 0;
}
</style>
