<template>

    <v-card class="py-4 px-4">
        <v-card-title>
            <span class="text-h5">Add new category</span>
        </v-card-title>

        <v-card-text>
            <v-container>
                <v-row>
                    <v-col cols="12" sm="6" md="4">
                        <v-text-field v-model="newCategory" label="Category" required></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="12" sm="6" md="4">
                        <v-select v-model="selected" :items="getCategories" label="Choose category..." required>
                        </v-select>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
            <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
        </v-card-actions>
    </v-card>
</template>
  
<script>

export default {
    name: "AddCategory",
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
        save() {
            this.$store.commit("updateCategory", this.newCategory);
        },
        close() {
            const data = false;
            this.$emit("closeAddCategory", data, "true");
        },
    },
    computed: {
        getCategories() {
            return this.$store.getters.getCategoryList;
        },
    },
};
</script>