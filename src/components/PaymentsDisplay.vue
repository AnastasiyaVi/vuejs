<template>
    <div class="payment__table">
        <div class="payment__header">
            <div class="payment__header-item">Nr.</div>
            <div class="payment__header-item">Date</div>
            <div class="payment__header-item">Category</div>
            <div class="payment__header-item">Value</div>
        </div>
        <div class="payment__line" v-for="(item, index) in items" :key="index">

            <div class="payment__line-item">{{index +1}}</div>
            <div class="payment__line-item">{{item.date}}</div>
            <div class="payment__line-item">{{item.category}}</div>
            <div class="payment__line-item">{{item.value}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PaymentsDisplay',
    props: {
        items: {
            type: Array,
            default: () => []
        },
    },
    data() {
        return {
        }
    },
}
</script>

<style scoped>
.payment__table {
    width: 90%;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    align-items: space-between;
}

.payment__header {
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-bottom: 2px solid #000;
}

.block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.payment__header-item {
    font-style: oblique;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 0.8rem;
    align-self: center;
}

.payment__line {
    height: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    border-bottom: 1px solid #000;
    align-items: center;
    text-align: center;
}

.payment__line-item {
    width: 100px;
}
</style>
