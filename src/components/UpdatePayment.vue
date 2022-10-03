<template>
    <div>
        <div class="addData">
            <input class="inputData" v-model="data" placeholder="date" />
            <select class="inputData" v-model="selected">
                <option value="" disabled selected>Choose category...</option>
                <option v-for="(option, idx) in getCategories" :key="idx">
                    {{ option }}
                </option>
            </select>

            <input class="inputData" v-model.number="value" type="number" placeholder="value" />
            <button class="addDataButton" @click="onClick">Save</button>
        </div>
    </div>
</template>
  
<script>
export default {
    name: "UpdatePayment",
    props: {
        property: {
            type: Object,
            default: () => { },
        },
    },
    data: () => ({
        id: "",
        data: "",
        category: "",
        value: null,
        selected: "",
    }),
    methods: {
        fetchData() {
            const findItem = this.$store.getters.getDataById(this.property.id);
            console.log(findItem);
            this.id = findItem[0].id;
            this.data = findItem[0].data;
            this.category = findItem[0].category;
            this.value = findItem[0].value;
            this.selected = findItem[0].category;
        },
        onClick() {
            const data = {
                id: this.id,
                data: this.data,
                category: this.selected,
                value: this.value,
            };
            this.$emit("updatePayment", data, "true");
            this.$modal.hide();
        },
    },
    computed: {
        getCategories() {
            return this.$store.getters.getCategoryList;
        },
    },
    created() {
        this.fetchData();
    },
};
</script>
  
<style>
.addData {
    display: flex;
    flex-direction: column;
}

.inputData {
    text-transform: capitalize;
    padding: 15px 5px;
    margin: 5px 0;
    border: 1px solid #dddddd;
}

.addDataButton {
    width: 150px;
    background: #3bba9f;
    color: #fff;
    text-transform: uppercase;
    padding: 10px;
    align-self: flex-end;
    margin: 10px 0;
}
</style>