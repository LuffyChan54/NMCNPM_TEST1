<template>
  <SSCashierTemplate>
    <template #buttons>
      <button
        :class="{ active: this.status === 'Import' }"
        @click="this.status = 'Import'"
      >
        <h1>Nhập Kho</h1>
      </button>
      <button
        :class="{ active: this.status === 'Export' }"
        @click="this.status = 'Export'"
      >
        <h1>Xuất Kho</h1>
      </button>
      <button
        :class="{ active: this.status === 'History' }"
        @click="this.status = 'History'"
      >
        <h1>Lịch Sử</h1>
      </button>
      <button
        :class="{ active: this.status === 'Inventory' }"
        @click="this.status = 'Inventory'"
      >
        <h1>Tồn Kho</h1>
      </button>
    </template>
    <template #mainCTN>
      <div v-if="this.status === 'Import'" class="CECTN">
        <div class="CEtitle">
          <h1>Thông Tin Nhập Kho</h1>
        </div>
        <div class="dateImport">
          <label for="">Ngày Nhập</label>
          <input v-model="date" type="date" />
        </div>

        <div class="CEWrapperProduct">
          <div
            v-for="(product, idx) in ImportProduct"
            :key="idx"
            class="CTNProductImport"
          >
            <h1>Sản phẩm {{ idx + 1 }}:</h1>
            <div class="CTProductInfo">
              <div class="CTInfoItem">
                <label for="">Tên Sản Phẩm:</label>
                <input v-model="product.name" type="text" />
              </div>
              <div class="CTInfoItem">
                <label for="">Nguồn Nhập:</label>
                <input v-model="product.source" type="text" />
              </div>
              <div class="CTInfoItem">
                <label for="">Số Lượng:</label>
                <input v-model="product.quantity" type="number" />
              </div>
              <div class="CTInfoItem">
                <label for="">Tổng Tiền:</label>
                <input v-model="product.totalCost" type="number" />
              </div>
              <div class="CTInfoItem">
                <label for="">Giá 1 Sản Phẩm:</label>
                <input v-model="product.price" type="number" />
              </div>
              <div class="CTInfoItem">
                <label for="">Hình Ảnh:</label>
                <input type="image" />
              </div>
              <div class="CTInfoItem">
                <label for="">Loại:</label>
                <select v-model="product.type">
                  <option value="rice">Cơm</option>
                  <option value="noodles">Món Nước</option>
                  <option value="cake">Bánh Ngọt</option>
                  <option value="gas">Nước Có Gas</option>
                  <option value="noGas">Nước Không Có Gas</option>
                </select>
              </div>

              <button @click="removeImportProduct" class="CIdeleteProduct">
                <h1>Xoá Sản Phẩm</h1>
              </button>
            </div>
          </div>
        </div>
        <button @click="addImportProduct" class="addNewExport">
          <h1>Thêm Sản Phẩm</h1>
        </button>

        <button @click="importProducts" class="import">
          <h1>Nhập Hàng</h1>
        </button>
      </div>

      <CSCEHistory v-if="this.status === 'History'"></CSCEHistory>
    </template>
  </SSCashierTemplate>
</template>

<script>
import SSCashierTemplate from "@/components/Sections/SSCashierTemplate.vue";

import CSCEHistory from "../components/Sections/SSCEHistory.vue";
export default {
  data() {
    return {
      date: "",
      status: "Import",
      ImportProduct: [
        {
          name: "",
          source: "",
          quantity: "",
          totalCost: "",
          price: "",
          img: "comchien.jpg",
          type: "",
        },
      ],
    };
  },
  components: {
    SSCashierTemplate,
    CSCEHistory,
  },
  methods: {
    importProducts(event) {
      event.preventDefault();
      this.ImportProduct.forEach((product) => {
        product["date"] = this.date;
      });
      this.$store.dispatch("importProducts", this.ImportProduct);

      this.ImportProduct = [];
      this.addImportProduct();
    },
    addImportProduct() {
      let obj = {
        name: "",
        source: "",
        quantity: "",
        totalCost: "",
        status: "import",
        price: "",
        img: "comchien.jpg",
        type: "",
      };
      this.ImportProduct.push(obj);
    },

    removeImportProduct() {
      this.ImportProduct.pop();
    },
  },
};
</script>

<style scoped>
.CIdeleteProduct {
  width: fit-content;
  border-radius: var(--radius);
  border: none;
  background: var(--yellow);
  padding: 0.5rem 1.5rem;
  cursor: pointer;
}

.CIdeleteProduct h1 {
  font-size: 1.5rem;
  color: var(--dark) !important;
}
.CEWrapperProduct {
  max-height: 22rem;
  display: grid;
  grid-auto-flow: row;
  gap: 2rem;
  overflow-y: auto;
  grid-auto-rows: 70%;
  padding: 1rem 0rem;
}
.import {
  align-self: center;
  width: fit-content;
  border-radius: var(--radius);
  border: none;
  background: var(--yellow);
  padding: 0.5rem 1.5rem;
  cursor: pointer;
}

.import h1 {
  font-size: 2rem;
  color: var(--dark);
}
.addNewExport {
  width: fit-content;
  border-radius: var(--radius);
  border: none;
  background: var(--white);
  padding: 0.5rem 1.5rem;
  cursor: pointer;
}

.addNewExport h1 {
  font-size: 1.5rem;
  color: var(--dark);
}
.CTInfoItem {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.CTInfoItem label {
  font-size: 1rem;
  font-weight: bold;
  color: var(--white);
}

.CTInfoItem select,
.CTInfoItem input {
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: var(--radius);
  font-weight: bold;
  letter-spacing: 1.5px;
  color: var(--dark);
  font-size: 1rem;
}
.CTInfoItem select:focus,
.CTInfoItem input:focus {
  outline: none;
}
.CTProductInfo {
  align-self: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 3rem;
  grid-row-gap: 1rem;
}
.CTNProductImport h1 {
  font-size: 1.5rem;
  color: var(--white);
}
.CTNProductImport {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.dateImport input:focus {
  outline: none;
}
.dateImport input {
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: var(--radius);
  font-weight: bold;
  letter-spacing: 1.5px;
  color: var(--dark);
  font-size: 1.5rem;
}
.dateImport label {
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--white);
}
.dateImport {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.CEtitle {
  width: fit-content;
  padding: 0.5rem 1.5rem;
  border-radius: var(--radius);
  background: var(--white);
  align-self: center;
}

.CEtitle h1 {
  font-size: 1.5rem;
  color: var(--dark);
}
.CECTN {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
}
</style>
