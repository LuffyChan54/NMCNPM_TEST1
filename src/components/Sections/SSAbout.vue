<template>
  <container class="aboutSS--ctn">
    <div class="About--content">
      <div class="ctn--who">
        <h1>Chúng tôi là ai?</h1>
        <h1>Căn tin trường đại học Khoa Học Tự Nhiên</h1>
        <p>
          Với hơn 10 năm kinh nghiệm trong nghề, chúng tôi là tập hợp những đầu
          bếp giỏi nhất đáp ứng nhu cầu ăn uống của các bạn. Với phương châm sức
          khoẻ là vàng, chúng tôi luôn đảm bảo được nguồn nguyên liệu cũng như
          quá trình chế biến tuân thủ theo quy định về vệ sinh an toàn thực
          phẩm. Không giang rộng rãi, thoáng mát chắc chắn sẽ làm cho bạn cảm
          thấy hài lòng. Nào hãy đến và tận hưởng những gì tốt nhất cho bạn!
        </p>
        <h1 class="author">Chủ căn tin HCMUS</h1>
      </div>
      <div class="ctn--where">
        <h1>Chúng tôi ở đâu?</h1>
        <p>Cơ sở chính: Phía sau hội trường B (cơ sở Linh Trung Thủ Đức)</p>
      </div>
      <div class="ctn--when">
        <h1>Khi nào chúng tôi hoạt động?</h1>
        <div class="ctn-time">
          <h1>6:00 - 18:00 Hằng ngày</h1>
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
.aboutSS--ctn {
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../../assets/imgs/AboutBG.jpg") center center no-repeat !important;
  background-size: contain;
  position: relative;
  z-index: 1;
}

.aboutSS--ctn::after {
  content: "";
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(247, 247, 240, 0.4);
}

.About--content {
  margin: 2rem 0;
  z-index: 3;
  background: rgba(247, 247, 240, 0.8);
  border-radius: var(--radius);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.ctn--when,
.ctn--where,
.ctn--who {
  color: var(--dark);
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.ctn--who > h1:not(:nth-child(1)) {
  font-size: 1.5rem;
}

.ctn--where > p,
.ctn--who > p {
  font-size: 1.5rem;
  line-height: 1.5;
  letter-spacing: 1px;
  font-style: italic;
}

.author {
  width: fit-content;
  align-self: flex-end;
  font-style: italic;
}

.ctn-time {
  width: fit-content;
  padding: 1rem 2rem;
  border-radius: var(--radius);
  background: var(--yellow);
}

.ctn-time h1 {
  font-style: italic;
}
</style>
