<template>
  <div class="category">
    <input class="inputData" v-model="newCategory" placeholder="add new category" />
    <button class="addDataButton" @click="onClick">Add category</button>
    <div>
      <select class="inputData" v-model="selected">
        <option value="" disabled selected>Category...</option>
        <option v-for="(option, idx) in categories" :key="idx">
          {{ option }}
        </option>
      </select>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "CategorySelect",
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selected: "",
      newCategory: "",
    };
  },
  methods: {
    onClick() {
      const data = this.newCategory;
      this.$emit("addNewCategory", data, "true");
    },
  },
  computed: {
    getCategories() {
      return this.$store.getters.getCategoryList;
    },
  },
};
</script>
  
<style lang="scss" scoped>
.category {
  margin: 10px 0 0 0;

}

.inputData {
  text-transform: capitalize;
  padding: 15px 5px;
  margin: 5px 0;
  border: 1px solid #dddddd;
  font-size: 18px;
  width: 200px;
}

.addDataButton {
  width: 200px;
  background: #3bba9f;
  color: #fff;
  text-transform: uppercase;
  padding: 15px;
  align-self: flex-end;
  margin: 10px 0 0 10px;
  font-size: 18px;
  border: 1px solid grey;
}

.addDataButton:hover {
  color: #3bba9f;
  background: #fff;
}
</style>