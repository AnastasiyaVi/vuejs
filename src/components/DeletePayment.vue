<template>
    <div>
        <button class="btn-modal-edit" @click="onClick">Del</button>
    </div>
</template>
  
<script>
export default {
    name: "DeletePayment",
    props: {
        property: {
            type: Object,
            default: () => { },
        },
    },
    methods: {
        onClick() {
            const data = this.property;
            this.$emit("deleteItem", data);
        },
    },
};
</script>
  
<style lang="scss" scoped>
.btn-modal-edit {
    border: none;
    padding: 10px 10px;
    background-color: rgb(221, 216, 216);
    width: 120px;
    color: rgb(44, 44, 44);
    cursor: pointer;
}
</style>