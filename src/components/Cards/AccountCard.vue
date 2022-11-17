<template>
  <div class="accountCTN">
    <div class="imgAccountCTN">
      <img
        :src="require(`../../assets/imgs/${avatar}`)"
        alt="avatar"
        class="imgAccount"
      />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    avatar() {
      return this.$store.state.account.img;
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
