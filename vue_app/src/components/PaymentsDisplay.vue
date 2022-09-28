<template>
    <div class="payments-list">
        <table class="table">
            <tr>
                <th>#</th>
                <th>Date</th>
                <th>Category</th>
                <th>Value</th>
            </tr>

            <tr v-for="(item, idx) in list" :key="idx">
                <td>{{ item.id }}</td>
                <td>{{ item.data }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.value }}</td>
            </tr>
        </table>
    </div>
</template>
  
<script>
export default {
    name: "PlaymentsDisplay",
    props: {
        list: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {};
    },
};
</script>
  
<style lang="scss" scoped>
.table {
    width: 50%;
    margin-bottom: 20px;
    border-collapse: collapse;
}

.table th {


    padding: 15px 5px;
    border-bottom: 1px solid #dddddd;
}

.table td {
    border-bottom: 1px solid #dddddd;
    padding: 15px 5px;
}
</style>
  