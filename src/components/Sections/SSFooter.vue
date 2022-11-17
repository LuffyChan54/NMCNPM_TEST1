<template>
  <container class="SSFooter">
    <div class="footerwrapper">
      <div class="FooterInfoCTN">
        <h1>Căn tin HCMUS</h1>
        <div class="FooterContact">
          <i class="fa fa-phone phoneIcon" aria-hidden="true"></i>
          <p>0123456789</p>
          <i class="fa fa-envelope emailIcon" aria-hidden="true"></i>
          <p>canteenhcmus@gmail.com</p>
          <i class="fa fa-map-marker addressIcon" aria-hidden="true"></i>
          <p>Linh Trung - Thủ Đức</p>
        </div>
      </div>
      <div class="FooterContactCTN">
        <h1>Theo dõi chúng tôi qua</h1>
        <div class="iconsCTN">
          <img src="../../assets/imgs/facebookIcon.png" alt="" />
          <img src="../../assets/imgs/twitterIcon.png" alt="" />
          <img src="../../assets/imgs/instagramIcon.png" alt="" />
        </div>
      </div>
    </div>
  </container>
</template>

<script>
import container from "../Containers/Container.vue";
export default {
  components: {
    container,
  },
};
</script>

<style scoped>
.SSFooter {
  background: var(--dark) !important;
}

.footerwrapper {
  margin-bottom: 2rem;
  padding: 2rem 0;
  color: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.FooterInfoCTN {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
}

.FooterInfoCTN > h1 {
  color: var(--blue);
}
.FooterContact {
  display: grid;
  grid-template-columns: 1fr 4fr;
  justify-content: start;
  gap: 1rem;
}

.FooterContactCTN {
  width: 40%;
  align-self: self-start;
}

.FooterContact > i {
  font-size: 2rem;
  color: var(--blue);
}

.FooterContact > p {
  font-style: italic;
  font-size: 1.5rem;
}

.FooterContactCTN {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: var(--blue);
  gap: 2rem;
}

.iconsCTN {
  width: 60%;

  display: flex;
  justify-content: space-between;
}

.iconsCTN > img {
  width: 3rem;
  height: auto;
}
</style>
