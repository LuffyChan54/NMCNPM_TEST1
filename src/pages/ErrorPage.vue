<template>
  <div class="ErrorCTN">
    <div class="ctnError">
      <h1>404</h1>
    </div>
    <h1>KHÔNG TÌM THẤY TRANG BẠN CẦN</h1>
    <p>Trang này có thể đã bị thay đổi hoặc do bạn không có quyền truy cập!</p>
    <SpecialBTN @click="backHome"><h1>Trang Chủ</h1></SpecialBTN>
  </div>
</template>

<script>
import SpecialBTN from "@/components/Buttons/SpecialBTN.vue";
export default {
  components: {
    SpecialBTN,
  },
  methods: {
    backHome() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
.ErrorCTN {
  margin-top: -2rem;
  width: 100vw;
  height: 100vh;
  background: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--dark);
  gap: 1rem;
}

.ErrorCTN > h1 {
  letter-spacing: 1.5px;
}

.ErrorCTN > p {
  font-size: 1.5rem;
  font-style: italic;
  opacity: 0.8;
}
.ctnError {
  margin-bottom: 8rem;
  width: 15rem;
  height: 15rem;
  transform: rotate(-45deg);
  background: var(--yellow);
  border: 10px dashed var(--dark);
  display: flex;
  justify-content: center;
  align-items: center;
}

.ctnError > h1 {
  font-size: 5rem;
  color: var(--dark);
  transform: rotate(45deg);
  letter-spacing: 5px;
}
</style>
