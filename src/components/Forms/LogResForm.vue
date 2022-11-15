<template>
  <form class="form--logres">
    <div class="btn-container">
      <RegularBTNVue
        :class="{ active: this.status === 'login' }"
        @click="onChangeBTN($event, 'login')"
        >Đăng Nhập</RegularBTNVue
      >
      <RegularBTNVue
        :class="{ active: this.status === 'register' }"
        @click="onChangeBTN($event, 'register')"
        >Đăng Ký</RegularBTNVue
      >
    </div>
    <div class="ruler"></div>
    <div class="inputCTN">
      <label for="inputEmail">Email</label>
      <input id="inputEmail" type="email" />
    </div>
    <div v-if="this.status !== 'forgetPW'" class="inputCTN">
      <label for="inputPassword">Password</label>
      <input id="inputPassword" type="password" />
    </div>
    <div v-if="this.status === 'register'" class="inputCTN">
      <label for="inputPasswordAgain">PasswordAgain</label>
      <input id="inputPasswordAgain" type="password" />
    </div>

    <p v-if="this.status === 'forgetPW'" class="subTitleForgetPW">
      Mật khẩu sẽ được gửi về email mà bạn đã đăng ký
    </p>

    <RegularBTNVue v-if="this.status === 'login'" class="checkLogin">
      <p class="titleCheckBTN">Đăng nhập</p>
    </RegularBTNVue>
    <RegularBTNVue v-if="this.status === 'register'" class="checkRegister">
      <p class="titleCheckBTN">Đăng ký</p>
    </RegularBTNVue>
    <RegularBTNVue v-if="this.status === 'forgetPW'" class="checkForgetPW">
      <p class="titleCheckBTN">Lấy lại mật khẩu</p>
    </RegularBTNVue>
    <div v-if="this.status === 'login'" class="wrap-forgetPW">
      <a
        v-if="this.status === 'login'"
        @click="onChangeBTN($event, 'forgetPW')"
        class="forgetPassword"
      >
        Quên Mật Khẩu?
      </a>
    </div>
  </form>
</template>

<script>
import RegularBTNVue from "../Buttons/RegularBTN.vue";
export default {
  emits: ["onChangeBTN"],
  props: {
    status: String,
  },
  data() {
    return {};
  },
  components: {
    RegularBTNVue,
  },
  methods: {
    onChangeBTN(event, val) {
      event.preventDefault();
      this.$emit("onChangeBTN", val);
    },
  },
};
</script>

<style scoped>
.form--logres {
  display: flex;
  flex-direction: column;
  border-radius: var(--radius);
  background: var(--yellow);
  color: var(--dark);
  padding: 1rem;
  gap: 1rem;
  transition: all 0.3s ease-in-out;
}
.titleCheckBTN {
  font-size: 2rem;
}

.btn-container {
  display: flex;
  gap: 1rem;
}

.ruler {
  height: 1rem;
  background: var(--dark);
}
.inputCTN > label {
  font-family: inherit;
  font-weight: bold;
  margin-bottom: 0.2rem;
  display: block;
}

.inputCTN > input {
  border: none;
  height: 3rem;
  width: 100%;
  background: var(--white);
  border-radius: var(--radius);
  font-family: inherit;
  padding: 0.2rem 0.5rem;
  font-weight: bold;
  letter-spacing: 1.2px;
  color: var(--dark);
  font-size: 1.5rem;
}
.inputCTN > input:focus {
  outline: none;
}

.forgetPassword {
  display: inline-block;
  font-family: inherit;
  cursor: pointer;
  text-decoration: underline;
  font-style: italic;
  margin: 0.4 rem;
}
.wrap-forgetPW {
  align-self: center;
}

.subTitleForgetPW {
  font-size: 1rem;
  font-style: italic;
}
</style>
