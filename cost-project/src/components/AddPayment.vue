<template>

    <v-form>
        <v-text-field v-model="date" label="Date" required></v-text-field>
        <v-select v-model="selected" :items="getCategories" label="Choose category..." required></v-select>
        <v-text-field v-model="value" label="Value" required></v-text-field>
        <v-btn color="teal" dark @click="onClick">Add<v-icon>mdi-plus</v-icon>
        </v-btn>
        <v-btn class="mr-4" color="teal" dark @click="onClose" v-if="dialog">Cancel</v-btn>
    </v-form>
</template>
  
<script>

export default {
    name: "AddPayment",
    props: {
        dialog: Boolean,
    },
    data: () => ({
        date: "",
        category: "",
        value: null,
        selected: "",
    }),
    methods: {
        fetchData() {
            const category = this.$route.params.category;
            if (category != undefined) {
                this.selected = category;
            } else {
                this.selected = "";
            }
            this.date = this.getCurrentDate;
            const urlSearchParams = new URLSearchParams(window.location.search);
            const params = Object.fromEntries(urlSearchParams.entries());
            this.value = params["value"];
        },
        onClick() {
            const data = {
                data: this.data || this.getCurrentDate,
                category: this.selected,
                value: this.value,
            };
            console.log("add", data);
            this.$emit("addNewPayment", data, "true");
        },
        onClose() {
            const data = false;
            this.$emit("closeAddPayment", data, "true");
        }
    },
    computed: {
        getCurrentDate() {
            const today = new Date();
            let d = today.getDate();
            if (d < 10) {
                d = "0" + d;
            }
            let m = today.getMonth() + 1;
            if (m < 10) {
                m = "0" + m;
            }
            const y = today.getFullYear();
            return `${d}.${m}.${y}`;
        },
        getCategories() {
            return this.$store.getters.getCategoryList;
        },
    },
    created() {

        this.fetchData();
    },
    watch: {

        $route: "fetchData",
    },
};
</script>