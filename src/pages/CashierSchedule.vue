<template>
  <SSCashierTemplate>
    <template #buttons>
      <button
        :class="{ active: this.day === 'Monday' }"
        @click="this.day = 'Monday'"
      >
        <h1>Thứ Hai</h1>
      </button>
      <button
        :class="{ active: this.day === 'Tuesday' }"
        @click="this.day = 'Tuesday'"
      >
        <h1>Thứ Ba</h1>
      </button>
      <button
        :class="{ active: this.day === 'Wednesday' }"
        @click="this.day = 'Wednesday'"
      >
        <h1>Thứ Tư</h1>
      </button>
      <button
        :class="{ active: this.day === 'Thursday' }"
        @click="this.day = 'Thursday'"
      >
        <h1>Thứ Năm</h1>
      </button>
      <button
        :class="{ active: this.day === 'Friday' }"
        @click="this.day = 'Friday'"
      >
        <h1>Thứ Sáu</h1>
      </button>
      <button
        :class="{ active: this.day === 'Saturday' }"
        @click="this.day = 'Saturday'"
      >
        <h1>Thứ Bảy</h1>
      </button>
    </template>
    <template #mainCTN>
      <div class="mainListBTNS">
        <div class="section-btns">
          <button
            @click="this.status = 'rice'"
            :class="{ active: this.status === 'rice' }"
          >
            <h1>Cơm</h1>
          </button>
          <button
            @click="this.status = 'noodles'"
            :class="{ active: this.status === 'noodles' }"
          >
            <h1>Món Nước</h1>
          </button>
          <button
            @click="this.status = 'cake'"
            :class="{ active: this.status === 'cake' }"
          >
            <h1>Bánh Ngọt</h1>
          </button>
          <button
            @click="this.status = 'gas'"
            :class="{ active: this.status === 'gas' }"
          >
            <h1>Có Gas</h1>
          </button>
          <button
            @click="this.status = 'noGas'"
            :class="{ active: this.status === 'noGas' }"
          >
            <h1>Không Có Gas</h1>
          </button>
        </div>
        <div class="SchedulesBTNs">
          <button>
            <h1>Thêm Món Ăn</h1>
          </button>
          <button>
            <h1>Đăng Lên</h1>
          </button>
        </div>
      </div>
    </template>
  </SSCashierTemplate>
</template>

<script>
import SSCashierTemplate from "@/components/Sections/SSCashierTemplate.vue";
export default {
  data() {
    return {
      day: "Monday",
      status: "rice",
    };
  },
  components: {
    SSCashierTemplate,
  },
};
</script>

<style scoped>
.SchedulesBTNs {
  display: flex;
  gap: 1rem;
}

.SchedulesBTNs button {
  border: var(--border_md) solid var(--white);
  border-radius: var(--radius);
  cursor: pointer;
  background: var(--stt-green);
  padding: 0.5rem 1.5rem;
}

.SchedulesBTNs button h1 {
  font-size: 1.5rem;
  color: var(--white);
}
.mainListBTNS {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.section-btns {
  display: flex;
  gap: 1.5rem;
}

.section-btns button {
  border-radius: var(--radius);
  background: var(--white);
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease-in;
}

.section-btns button.active {
  background: var(--blue);
}

.section-btns button > h1 {
  font-size: 1.5rem;
  color: var(--dark);
}
</style>
