<template>
  <template v-if="this.userRole === 'user'">
    <LoadingModelVue v-if="this.isLoading"></LoadingModelVue>
    <container>
      <div class="InfoCTN">
        <div class="InfoHeader">
          <SSSubInfoHeader></SSSubInfoHeader>
          <div class="InfoIMGCTN">
            <div class="InfoSmallCir">
              <div class="InfoWrapAvatar">
                <div v-if="this.imgFileChange" class="InfoAVTCTN">
                  <img :src="this.tempSrc" alt="avatar" />
                </div>
                <div v-else class="InfoAVTCTN">
                  <img :src="this.imageUser" alt="avatar" />
                </div>
              </div>
            </div>

            <h1 class="InfoUserID">ID: {{ this.idUser }}</h1>
          </div>

          <div class="ChangeAVTC">
            <label class="labelChangeAvatar" for="avatar"
              >Thay đổi hình đại diện</label
            >
            <input
              @change="uploadImg"
              class="inputChangeAvatar"
              type="file"
              name="avatar"
            />
            <div class="ChangeAVTCTNBTN">
              <button @click="changeAvatar">Cập Nhật</button>
              <button @click="resetChange">Huỷ Thay Đổi</button>
            </div>
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
import LoadingModelVue from "@/components/Models/LoadingModel.vue";
import UserInfoForm from "../components/Forms/UserInfoForm.vue";

import { storage } from "../configs/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default {
  components: {
    ErrorPage,
    SSFooter,
    container,
    SSSubInfoHeader,
    UserInfoForm,
    LoadingModelVue,
  },
  data() {
    return {
      imgFileChange: "",
      tempSrc: "",
      // valueInput: "",
    };
  },
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    },
    userRole() {
      return this.$store.state.account.role;
    },
    isLogin() {
      return this.$store.state.isLogin;
    },
    idUser() {
      return this.$store.state.account.id;
    },
    imageUser() {
      return this.$store.state.account.image;
    },
  },

  methods: {
    uploadImg(e) {
      this.imgFileChange = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e2) => {
        this.tempSrc = e2.target.result;
      };

      reader.readAsDataURL(this.imgFileChange);
    },

    resetChange() {
      this.imgFileChange = "";
      // this.valueInput = "";
    },

    changeAvatar() {
      if (this.imgFileChange) {
        // console.log(this.imgFileChange);
        this.$store.dispatch("setIsLoading");
        const storageRef = ref(
          storage,
          this.idUser + "/" + this.imgFileChange.name
        );
        uploadBytes(storageRef, this.imgFileChange).then(() => {
          getDownloadURL(storageRef).then((url) => {
            this.$store.dispatch("changeAvatarUser", { url });
          });
        });
      }
    },
  },
};
</script>

<style scoped>
.ChangeAVTCTNBTN {
  display: flex;
  justify-content: space-between;
}
.ChangeAVTC {
  position: absolute;
  left: 80%;
  transform: translate(-50%);
  display: flex;
  flex-direction: column;
  top: 76%;
  padding: 1rem;
  border-radius: var(--radius);
  background: var(--white);
  box-shadow: 2px 2px 10px 0px rgba(47, 47, 47, 0.4);
  gap: 1rem;
}

.ChangeAVTC label,
.ChangeAVTC input {
  width: 24rem;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1.2px;
  color: var(--dark);
}

.ChangeAVTC input {
  border: none;
  background: var(--blue);
  border-radius: var(--radius);
  padding: 0.5rem;
}

.ChangeAVTC input:focus {
  outline: none;
}

.ChangeAVTC button {
  font-size: 1.5rem;
  color: var(--dark);
  padding: 0.5rem 1.5rem;
  border-radius: var(--radius);
  background: var(--yellow);
  cursor: pointer;
  width: fit-content;
  font-weight: bold;
  border: none;
}
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
  /* width: 10rem;
  height: auto; */
  object-fit: cover;
  inline-size: 100%;
  height: auto;
  height: 100%;
  object-position: center;
}

.InfoContent {
  padding: 2rem 0;
}
</style>
