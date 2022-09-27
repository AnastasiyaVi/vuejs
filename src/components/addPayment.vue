<template>
    <div class="add-wrapper">
        <div class="add-info">
            <label class="add-info__label" for="">Date</label>
            <input class="add-info__input" placeholder="add date" v-model.trim="date" />
        </div>
        <div class="add-info">
            <label class="add-info__label" for="">Category</label>

            <select-list :dictionaryList="getCategorylist" />


        </div>
        <div class="add-info">
            <label class="add-info__label" for="">Value</label>
            <input class="add-info__input" placeholder="insert price" v-model="value" />
        </div>
        <div class="add-btns">
            <button class="add-btn__cancel" @click="onCancel">Cancel</button>
            <button class="add-btn__save" @click="onSave">Save</button>
        </div>
    </div>
</template>

<script>
import SelectList from './SelectList.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
    name: 'addPayment',
    components: { SelectList },
    emits: ['saveEmit', 'cancelEmit'],
    data() {
        return {
            date: '',
            category: '',
            value: 0,
        };
    },
    methods: {
        onSave() {

            const { category, value } = this;

            const data = {
                date: this.date || this.getCurrentDate,
                category,
                value,
            };
            this.$emit('saveEmit', data);
        },
        onCancel() {
            this.$emit('cancelEmit');
        },
    },
    computed: {
        ...mapGetters(['getCategorylist']),
        getCurrentDate() {
            const date = new Date();
            const d = date.getDate();
            const m = date.getMonth();
            const y = date.getFullYear();
            return `${d}.${m}.${y}`;
        },
    },
    actions: {
        ...mapActions(['loadCategories']),
    },
    mounted() {
        this.$store.dispatch('loadCategories');
    },
};
</script>


<style lang="scss" scoped>
.add-wrapper {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}

.add-info {
    width: 70%;
    margin: 5px auto;
    display: flex;
    justify-content: space-between;
}

.add-info__label {
    color: #4a484a;
}

.add-info__input {
    color: #1f2122;
    outline: #3f95cd;
    border: 1px solid rgb(203, 202, 202);
    box-shadow: 0 0 3px rgb(184, 182, 182);
    padding: 5px 0 5px 5px;
}

.add-info__input::placeholder {
    color: #959494;
}

.add-btns {
    width: 70%;
    margin: 20px auto 10px;
    display: flex;
    justify-content: space-evenly;
}

.add-btn__save {
    width: 100px;
    height: 30px;
    background-color: #3bba9f;
    border: 1px solid #3f95cd;
    border-radius: 3px;
    color: white;
}

.add-btn__save:hover {
    background-color: white;
    color: #3bba9f;
}

.add-btn__cancel {
    background-color: rgb(186, 182, 182);
    border: 1px solid rgb(12, 12, 12);
    width: 100px;
    height: 30px;
    border-radius: 3px;
    color: white;
}

.add-btn__cancel:hover {
    color: rgb(186, 182, 182);
    background-color: white;
}
</style>
