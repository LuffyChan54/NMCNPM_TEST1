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
          <!-- <button
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
          </button> -->
        </div>
        <div class="SchedulesBTNs">
          <button @click="this.isOpenAddNew = true">
            <h1>Thêm Món Ăn</h1>
          </button>
          <button @click="this.isUpload = true">
            <h1>Đăng Lên</h1>
          </button>
        </div>
      </div>
      <SSSchedule
        @isAllowChange="this.isUpload = false"
        :isUpload="this.isUpload"
        :indexDay="this.indexDay"
        :status="this.status"
        :formAddNewInfo="this.formAddNewInfo"
        :sendObj="this.sendObj"
        @resetAddNew="this.resetFormInfo"
      ></SSSchedule>
    </template>
  </SSCashierTemplate>
  <teleport v-if="this.isOpenAddNew" to="body">
    <BaseModel @closeModel="this.isOpenAddNew = false">
      <div class="formAddNewProduct">
        <div class="ANP-title">
          <h1>Thông Tin</h1>
        </div>
        <div class="formAddNewItem">
          <label for="">Hình Ảnh:</label>
          <input type="image" src="" alt="" />
        </div>
        <div class="formAddNewItem">
          <label for="">Tên Món:</label>
          <input
            v-model="this.formAddNewInfo.name"
            style="width: 14rem; text-align: center"
            type="text"
          />
        </div>
        <div class="formAddNewItem">
          <label for="">Số lượng:</label>
          <input
            v-model="this.formAddNewInfo.total"
            style="width: 5rem"
            type="number"
          />
        </div>
        <div class="formAddNewItem">
          <label for="">Giá Bán:</label>
          <input
            v-model="this.formAddNewInfo.price"
            style="width: 8rem"
            type="number"
          />
        </div>
        <div class="formAddNewItem">
          <label for="">Loại:</label>
          <select v-model="this.formAddNewInfo.type">
            <option value="rice">Cơm</option>
            <option value="noodles">Món Nước</option>
            <!-- <option value="cake">Bánh Ngọt</option>
            <option value="gas">Nước Có Gas</option>
            <option value="noGas">Nước Không Có Gas</option> -->
          </select>
        </div>
        <button @click="addNew">
          <h1>Xác Nhận</h1>
        </button>
      </div>
    </BaseModel>
  </teleport>
</template>

<script>
import SSCashierTemplate from "@/components/Sections/SSCashierTemplate.vue";
import SSSchedule from "@/components/Sections/SSSchedule.vue";
import BaseModel from "@/components/Models/BaseModel.vue";
export default {
  data() {
    return {
      arrDays: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      sendObj: false,
      isUpload: false,
      today: "",
      day: "",
      status: "rice",
      isOpenAddNew: false,
      formAddNewInfo: {
        id: "new",
        name: "",
        img: "comchien.jpg",
        type: "",
        price: 0,
        total: 0,
      },
    };
  },
  computed: {
    indexDay() {
      return this.arrDays.indexOf(this.day);
    },
  },
  methods: {
    resetFormInfo() {
      this.formAddNewInfo.id = "new";
      this.formAddNewInfo.name = "";
      this.formAddNewInfo.img = "comchien.jpg";
      this.formAddNewInfo.type = "";
      this.formAddNewInfo.price = 0;
      this.formAddNewInfo.total = 0;

      this.isOpenAddNew = false;
      this.sendObj = false;
    },
    addNew(event) {
      event.preventDefault();
      if (
        this.formAddNewInfo.name !== "" &&
        this.formAddNewInfo.price !== 0 &&
        this.formAddNewInfo.total !== 0 &&
        this.formAddNewInfo.type !== ""
      ) {
        this.isUpload = false;
        this.sendObj = true;
      }
    },
  },
  components: {
    SSCashierTemplate,
    SSSchedule,
    BaseModel,
  },
  created() {
    const date = new Date();
    this.day = this.arrDays[date.getDay()];
    this.today = this.day;
  },
};
</script>

<style scoped>
.formAddNewItem {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.formAddNewItem label {
  font-size: 1.5rem;
  color: var(--dark);
  font-weight: bold;
}

.formAddNewItem select {
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: var(--radius);
  background: var(--yellow);
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--dark);
}

.formAddNewItem select option {
  font-weight: bold;
  background: var(--white);
}

.formAddNewItem input {
  border: none;
  border-radius: var(--radius);
  background: var(--yellow);
  color: var(--dark);
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  font-weight: bold;
  letter-spacing: 1px;
}

.formAddNewItem select:focus,
.formAddNewItem input:focus {
  outline: 2px solid var(--yellow);
}
.formAddNewProduct {
  padding: 1rem;
  border-radius: var(--radius);
  background: var(--white);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.formAddNewProduct > button {
  margin-top: 2rem;
  border: var(--border_lg) solid var(--dark);
  border-radius: var(--radius);
  background: var(--white);
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  width: fit-content;
  align-self: center;
}

.formAddNewProduct > button h1 {
  font-size: 1.5rem;
  color: var(--dark);
}

.ANP-title {
  width: fit-content;
  padding: 0.5rem 1rem;
  background: var(--yellow);
  border-radius: var(--radius);
  text-align: center;
  align-self: center;
  margin-bottom: 2rem;
}

.ANP-title h1 {
  font-size: 1.5rem;
  color: var(--dark);
}

/* FINISH FORM INPUT */
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
