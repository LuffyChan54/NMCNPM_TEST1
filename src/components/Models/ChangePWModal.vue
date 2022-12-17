<template>
  <teleport to="body">
    <BaseModel @closeModel="closeModel">
      <div v-if="this.statusChangePW === 'default'" class="changePWCTN">
        <div class="changePWTitle">
          <h1>Đổi mật khẩu</h1>
        </div>

        <div class="changePWItem">
          <label for="">Nhập mật khẩu cũ</label>
          <input v-model="this.oldPW" type="password" />
        </div>

        <div class="changePWItem">
          <label for="">Nhập mật khẩu Mới</label>
          <input v-model="this.newPW" type="password" />
        </div>

        <SpecialBTN @click="changePW">
          <h1>Xác Nhận</h1>
        </SpecialBTN>
      </div>
      <ErrorCard v-if="this.statusChangePW === 'fail'">
        <h1>Đổi mật khẩu thất bại!</h1>
      </ErrorCard>
      <SuccessCard
        @onClickSuccessBTN="closeModel"
        v-if="this.statusChangePW === 'success'"
      >
        <h1>Thay đổi mật khẩu thành công!</h1>
      </SuccessCard>
    </BaseModel>
  </teleport>
</template>

<script>
import BaseModel from "./BaseModel.vue";
import SpecialBTN from "../Buttons/SpecialBTN.vue";
import ErrorCard from "../Cards/ErrorCard.vue";
import SuccessCard from "../Cards/SuccessCard.vue";
export default {
  data() {
    return {
      oldPW: "",
      newPW: "",
      statusChangePW: "default",
    };
  },
  emits: ["closeModel"],
  components: {
    BaseModel,
    SpecialBTN,
    ErrorCard,
    SuccessCard,
  },
  methods: {
    closeModel() {
      this.statusChangePW = "default";
      this.$emit("closeModel");
    },
    async changePW() {
      const rs = await this.$store.dispatch("changePW", {
        oldPW: this.oldPW,
        newPW: this.newPW,
      });

      if (rs === "success") {
        this.statusChangePW = "success";
      } else {
        this.statusChangePW = "fail";
      }
    },
  },
};
</script>

<style scoped>
.changePWCTN {
  border-radius: var(--radius);
  background: var(--white);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--dark);
}

.changePWTitle {
  width: fit-content;
  padding: 0.5rem;
  background: var(--yellow);
  border-radius: var(--radius);
}
.changePWTitle > h1 {
  font-size: 1.5rem !important;
}

.changePWItem {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--dark);
}

.changePWItem label {
  font-size: 1.5rem;
  font-weight: bold;
}

.changePWItem input {
  border-radius: var(--radius);
  background: var(--white);
  border: var(--border_lg) solid var(--dark);
  font-size: 1.5rem;
  letter-spacing: 1.5px;
  padding: 0.5rem 1rem;
  font-weight: bold;
}
</style>
