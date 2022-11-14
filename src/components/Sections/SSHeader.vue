<template>
  <container>
    <div class="background">
      <div class="header--submenu">
        <i class="fa fa-cutlery cantinIcon" aria-hidden="true"></i>
        <RegularBTN class="BTNDangnhap">Đăng Nhập</RegularBTN>
      </div>

      <div class="header--content">
        <div class="content--text">
          <h1 class="header--mainTitle">
            HÃY ĐỂ CHÚNG TÔI CHĂM LO CHO BỮA ĂN CỦA BẠN
          </h1>
          <p class="header--subTitle">
            Đa dạng món ăn, dinh dưỡng đầy đủ . Chúng tôi sẽ mang đến cho bạn
            một thiên đường ẩm thực. Hãy thử ngay nào!
          </p>
        </div>

        <div>
          <RegularBTN class="BTNDangKy">Đăng ký ngay!</RegularBTN>
        </div>
      </div>

      <div class="header--contentIMG"></div>
      <div class="header--CTNIMG">
        <img src="../../assets/imgs/Dish1.png" alt="MonAn" />
      </div>
      <ImageCard class="header--imgcard imgcard1">
        <img src="../../assets/imgs/bgCanteen1.jpg" alt="" />
      </ImageCard>
      <ImageCard class="header--imgcard imgcard2">
        <img src="../../assets/imgs/bgCanteen2.jpg" alt="" />
      </ImageCard>
      <ImageCard class="header--imgcard imgcard3">
        <img src="../../assets/imgs/bgCanteen3.jpg" alt="" />
      </ImageCard>
    </div>
  </container>
</template>

<script>
import Container from "../Containers/Container.vue";
import RegularBTN from "../Buttons/RegularBTN.vue";
import ImageCard from "../Cards/ImageCard.vue";

export default {
  components: {
    Container,
    RegularBTN,
    ImageCard,
  },
};
</script>

<style scoped>
.background {
  display: flex;
  color: var(--dark);
  width: 100%;
  height: 40rem;
  position: relative;
}

.header--imgcard {
  position: absolute;
  transform: translate(-50%, -50%);
}

.header--imgcard.imgcard1 {
  top: 80%;
  left: 80%;
}

.header--imgcard.imgcard2 {
  top: 60%;
  left: 76%;
}

.header--imgcard.imgcard3 {
  top: 70%;
  left: 90%;
}

.header--submenu {
  position: absolute;
  top: 5%;
  padding: 0 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
}

.header--content {
  width: 50%;
}

.header--contentIMG {
  width: 50%;
  background: var(--yellow);
  clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);

  position: relative;
  overflow: unset;
}
.header--CTNIMG {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: var(--yellow);
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
}

.header--CTNIMG > img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 18rem;
  height: 18rem;
  filter: drop-shadow(0px 0px 10px var(--dark));
  object-fit: cover;
}
.content--text {
  letter-spacing: 2px;
  width: 60%;
  display: grid;
  margin-top: 18rem;
  gap: 1rem;
}
.cantinIcon {
  font-size: 3rem;
  color: var(--dark);
}

.BTNDangKy {
  margin-top: 2rem;
}
</style>
