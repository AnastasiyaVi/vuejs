<template>
    <div class="select">
        <select v-model="selected">
            <option v-for="(option, idx) in dictionaryList" :key="idx" :value="option">
                {{ option }}
            </option>
        </select>
    </div>
</template>
  
<script>
export default {
    name: "SelectList",
    props: {
        dictionaryList: {
            type: Array,
            default: () => [],
            require: true
        }
    },
    data() {
        return {
            selected: '',
        }
    }
};
</script>
  
<style lang="scss">
select {

    width: 176px;
    color: #1f2122;
    outline: #3f95cd;
    border: 1px solid #cbcaca;
    box-shadow: 0 0 3px #b8b6b6;
    padding: 5px 0 5px 5px;
}
</style>