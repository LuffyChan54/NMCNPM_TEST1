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
      <input v-model="this.inputEmail" id="inputEmail" name="" type="email" />
    </div>
    <div v-if="this.status === 'register'" class="inputCTN">
      <label for="inputFullName">Họ Tên</label>
      <input v-model="this.inputFullName" id="inputFullName" type="text" />
    </div>
    <div v-if="this.status !== 'forgetPW'" class="inputCTN">
      <label for="inputPassword">Mật Khẩu</label>
      <input
        v-model="this.inputPW"
        required
        id="inputPassword"
        type="password"
      />
    </div>
    <div v-if="this.status === 'register'" class="inputCTN">
      <label for="inputPasswordAgain">Xác Nhận Mật Khẩu</label>
      <input
        v-model="this.inputConfirmPW"
        id="inputPasswordAgain"
        type="password"
      />
    </div>

    <div
      style="display: flex; align-items: center; gap: 1rem"
      v-if="this.status === 'login'"
    >
      <label
        style="color: var(--dark); font-size: 1.5rem; font-weight: bold"
        for=""
        >Lưu đăng nhập!</label
      >
      <input
        style="border: none; height: 2rem; width: 2rem; cursor: pointer"
        type="checkbox"
        class="rememberme"
        v-model="rememberMe"
      />
    </div>

    <p v-if="this.status === 'forgetPW'" class="subTitleForgetPW">
      Mật khẩu sẽ được gửi về email mà bạn đã đăng ký
    </p>

    <p
      v-if="!this.statusLogin && this.status === 'login'"
      style="color: var(--stt-red)"
      class="subTitleForgetPW"
    >
      Sai tên tài khoản hoặc mật khẩu!
    </p>

    <RegularBTNVue
      @click="login"
      v-if="this.status === 'login'"
      class="checkLogin"
    >
      <p class="titleCheckBTN">Đăng nhập</p>
    </RegularBTNVue>

    <p
      v-if="
        this.statusRegister &&
        this.status === 'register' &&
        !this.checkConfirmPW
      "
      style="color: var(--stt-red)"
      class="subTitleForgetPW"
    >
      Xác nhận mật khẩu sai!
    </p>
    <p
      v-if="
        !this.statusRegister &&
        this.status === 'register' &&
        this.checkConfirmPW
      "
      style="color: var(--stt-red)"
      class="subTitleForgetPW"
    >
      Đăng ký thất bại! Email đã được sử dụng!
    </p>

    <p
      v-if="!this.isValidEmail"
      style="color: var(--stt-red)"
      class="subTitleForgetPW"
    >
      Email không hợp lệ
    </p>

    <p
      v-if="
        this.registerFlag &&
        this.statusRegister &&
        this.status === 'register' &&
        this.checkConfirmPW
      "
      style="color: var(--stt-green)"
      class="subTitleForgetPW"
    >
      Đăng ký thành công
    </p>

    <RegularBTNVue
      @click="register"
      v-if="this.status === 'register'"
      class="checkRegister"
    >
      <p class="titleCheckBTN">Đăng ký</p>
    </RegularBTNVue>
    <RegularBTNVue
      @click="forgetPW"
      v-if="this.status === 'forgetPW'"
      class="checkForgetPW"
    >
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
    return {
      inputEmail: "",
      inputPW: "",
      inputFullName: "",
      inputConfirmPW: "",
      statusLogin: true,

      registerFlag: false,

      statusRegister: true,
      checkConfirmPW: true,
      rememberMe: "",

      isValidEmail: true,
    };
  },
  components: {
    RegularBTNVue,
  },
  methods: {
    onChangeBTN(event, val) {
      event.preventDefault();
      this.isValidEmail = true;

      this.$emit("onChangeBTN", val);
    },

    async login(event) {
      event.preventDefault();

      const regexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

      if (!regexp.test(String(this.inputEmail).toLowerCase())) {
        this.isValidEmail = false;
        return;
      }

      const resultLogin = await this.$store.dispatch("login", {
        email: this.inputEmail,
        pw: this.inputPW,
        rememberMe: this.rememberMe,
      });

      if (resultLogin == "success") {
        this.statusLogin = true;
      } else {
        this.statusLogin = false;
      }
      // .then(() => {
      //   this.statusLogin = true;
      // })
      // .catch(() => {
      //   this.statusLogin = false;
      // });
    },
    register(event) {
      event.preventDefault();

      const regexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

      if (!regexp.test(String(this.inputEmail).toLowerCase())) {
        this.isValidEmail = false;
        return;
      }

      if (this.inputPW !== this.inputConfirmPW) {
        this.isValidEmail = true;

        this.checkConfirmPW = false;
      } else {
        this.isValidEmail = true;

        this.$store
          .dispatch("register", {
            email: this.inputEmail,
            fullname: this.inputFullName,
            pw: this.inputPW,
          })
          .then(() => {
            this.statusRegister = true;
            this.registerFlag = true;
            // console.log("Thanh cong", rs);
          })
          .catch((err) => {
            this.statusRegister = false;
            console.log("That bai", err);
          });
      }
    },
    forgetPW(event) {
      event.preventDefault();
      this.$store.dispatch("forgetPW", { email: this.inputEmail });
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
  font-size: 1.2rem;
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
