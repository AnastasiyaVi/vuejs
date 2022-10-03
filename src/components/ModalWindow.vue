<template>
    <div class="wrapper">
        <div class="header">
            <p>{{ settings.header }}</p>
        </div>
        <div class="content">
            <component :is="settings.name" :property="settings" @updatePayment="updatePayment"
                @addNewCategory="addCategory" />
        </div>
        <div class="footer">
            <button class="close-btn" @click="$modal.hide()">Close</button>
        </div>
    </div>
</template>
  
<script>
import AddPayment from "./AddPayment.vue";
import UpdatePayment from "./UpdatePayment.vue";
import CategorySelect from "./CategorySelect.vue";
export default {
    components: { AddPayment, UpdatePayment, CategorySelect },
    props: {
        settings: Object,
    },
    methods: {
        updatePayment(data) {
            console.log("updatePayment");
            console.log(data);
            this.$store.commit("updateData", data);
        },
        addCategory(data) {
            console.log("addCategory = " + data);
            this.$store.commit("updateCategory", data);
        },
    },
};
</script>
  
<style lang="scss" scoped>
.wrapper {
    position: absolute;
    width: 350px;
    top: 10px;
    left: 100px;
    padding: 10px;
    background: #fff;
    box-shadow: 0 4px 5px 3px rgba(0, 0, 0, 0.2);
}

.header {
    background: rgb(220, 219, 219);
    height: 40px;
    align-items: center;
    display: flex;
    justify-content: center;
}

.header p {
    margin: 0;
    padding: 5px;
    font-family: sans-serif;

    text-align: center;
    font-weight: bold;
}

.footer {
    background: rgb(220, 219, 219);
    display: flex;
    justify-content: flex-end;
}

.close-btn {
    width: 100px;
    font-size: 18px;
    background: #f1e3dd;
    color: #000;
    padding: 5px;
    margin: 10px 5px;
}
</style>