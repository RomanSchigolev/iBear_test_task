<template>
  <div class="transactions__form">
    <form @submit.prevent="transactionToList">
      <input type="text" class="transactions__input" v-model="transaction" />
      <button type="submit" class="transactions__added">
        <span>
          <svg
            class="transactions__added__icon"
            viewBox="0 0 448 448"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m272 184c-4.417969 0-8-3.582031-8-8v-176h-80v176c0 4.417969-3.582031 8-8 8h-176v80h176c4.417969 0 8 3.582031 8 8v176h80v-176c0-4.417969 3.582031-8 8-8h176v-80zm0 0"
            />
          </svg>
        </span>
      </button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { v1 } from "uuid";

export default {
  name: "v-text-field",
  data() {
    return {
      transaction: "",
    };
  },
  methods: {
    ...mapActions(["ADD_TRANSACTION"]),
    transactionToList() {
      this.ADD_TRANSACTION({
        title: this.transaction.trim(),
        id: v1(),
      });
      this.transaction = "";
    },
  },
};
</script>

<style scoped>
.transactions__form form {
  display: flex;
}

.transactions__input {
  width: 100%;
  padding: 30px;
  border-radius: 15px 0 0 15px;
  border: none;
  font-size: 18px;
}

.transactions__added {
  width: 20%;
  border-radius: 0 15px 15px 0;
  border: none;
  background-color: #c4c4c4;
}

.transactions__added__icon {
  width: 25px;
}
</style>