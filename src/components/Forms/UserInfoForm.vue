<template>
  <div class="formInfoUserCTN">
    <div class="formInfoTitle">
      <h1>Thông tin cá nhân</h1>
    </div>
    <div class="formInfoContent">
      <div class="formInfoItem">
        <label for="">Họ Và Tên</label>
        <div class="formInfoItemInput">
          <input type="text" value="LuffyChan" />
          <i class="fa fa-pencil-square" aria-hidden="true"></i>
        </div>
      </div>

      <div class="formInfoItem">
        <label for="">Email</label>
        <div class="formInfoItemInput">
          <input type="email" value="LuffyChan123456@gmail.com" />
        </div>
      </div>

      <button class="changePassWordBTN">
        <h1>Đổi mật khẩu</h1>
      </button>

      <button class="saveInfoBTN">
        <h1>Lưu Thông Tin</h1>
      </button>
    </div>
  </div>
</template>

<script>
export default {};
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
