<template>
  <div class="formInfoUserCTN">
    <div class="formInfoTitle">
      <h1>Thông tin cá nhân</h1>
    </div>
    <div class="formInfoContent">
      <div class="formInfoItem">
        <label for="">Họ Và Tên</label>
        <div class="formInfoItemInput">
          <input
            :disabled="this.changeName === false"
            type="text"
            v-model="this.fullNameUser"
          />
          <i
            @click="this.changeName = !this.changeName"
            class="fa fa-pencil-square"
            aria-hidden="true"
          ></i>
        </div>
      </div>

      <div class="formInfoItem">
        <label for="">Email</label>
        <div class="formInfoItemInput">
          <input disabled type="email" :value="this.getEmailUser" />
        </div>
      </div>

      <button @click="this.isChangePW = true" class="changePassWordBTN">
        <h1>Đổi mật khẩu</h1>
      </button>

      <button @click="saveChangeInfo" class="saveInfoBTN">
        <h1>Lưu Thông Tin</h1>
      </button>
    </div>
  </div>
  <teleport to="body">
    <BaseModel v-if="isChanged" @closeModel="this.isChanged = false">
      <SuccessCard @onClickSuccessBTN="this.isChanged = false">
        <h1>Thay đổi tên thành công!</h1>
      </SuccessCard>
    </BaseModel>
  </teleport>
  <ChangePWModal
    v-if="this.isChangePW"
    @closeModel="this.isChangePW = false"
  ></ChangePWModal>
</template>

<script>
import BaseModel from "../Models/BaseModel.vue";
import SuccessCard from "../Cards/SuccessCard.vue";
import ChangePWModal from "../Models/ChangePWModal.vue";
export default {
  components: {
    BaseModel,
    SuccessCard,
    ChangePWModal,
  },
  data() {
    return {
      fullNameUser: "",
      isChanged: false,
      isChangePW: false,
      changeName: false,
    };
  },
  methods: {
    async saveChangeInfo() {
      this.changeName = false;
      await this.$store.dispatch("changeUserName", this.fullNameUser);

      this.isChanged = true;
    },
  },
  created() {
    this.fullNameUser = this.getNameUser;
  },
  computed: {
    getNameUser() {
      return this.$store.state.account.fullName;
    },
    getEmailUser() {
      return this.$store.state.account.email;
    },
  },
};
</script>

<style scoped>
.formInfoUserCTN {
  border-radius: var(--radius);
  background: var(--yellow);
  padding: 1rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
}
.formInfoTitle {
  border-radius: var(--radius);
  background: var(--blue);
  color: var(--dark);
  padding: 0.5rem;
  width: fit-content;
}

.formInfoContent {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.formInfoItem {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.formInfoItem > label {
  font-weight: bold;
  color: var(--dark);
  font-size: 1.5rem;
}

.formInfoItemInput {
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
}

.formInfoItemInput input {
  border: none;
  border-radius: var(--radius);
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 1.5px;
  color: var(--dark);
}

.formInfoItemInput i {
  border-radius: var(--radius);
  font-size: 4rem;
  color: var(--dark);
  cursor: pointer;
}
.formInfoItemInput input:focus {
  outline: none;
}

.changePassWordBTN {
  margin-top: 1rem;
  width: fit-content;
  padding: 1rem 2rem;
  border: var(--border_lg) solid var(--dark);
  background: var(--white);
  color: var(--dark);
  border-radius: var(--radius);
  cursor: pointer;
  font-size: 1rem;
}

.saveInfoBTN {
  margin-top: 1rem;

  width: 100%;
  text-align: center;
  padding: 1rem 2rem;
  border: var(--border_lg) solid var(--dark);
  background: var(--blue);
  color: var(--dark);
  border-radius: var(--radius);
  cursor: pointer;
  font-size: 1rem;
}
</style>
