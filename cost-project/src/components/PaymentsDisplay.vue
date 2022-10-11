<template>

    <div>
        <v-data-table :headers="header" :items="getPaymentList" :items-per-page="getItemsPerPage"
            :hide-default-footer="true" item-key="id" class="elevation-1">
            <template v-slot:top>
                <v-dialog v-model="dialog" max-width="500px">
                    <v-card>
                        <v-card-title>
                            <span class="text-h5">Edit item</span>
                        </v-card-title>

                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.data" label="Data"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.category" label="Category"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" sm="6" md="4">
                                        <v-text-field v-model="editedItem.value" label="Value"></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="close">
                                Cancel
                            </v-btn>
                            <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
                <v-dialog v-model="dialogDelete" max-width="500px">
                    <v-card>
                        <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                            <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                            <v-spacer></v-spacer>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </template>

            <template v-slot:item.actions="{ item }">
                <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
                <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
            </template>
        </v-data-table>

        <v-pagination v-model="page" :length="pageCount" :page="page" @input="changePage"></v-pagination>
    </div>
</template>
  
<script>

export default {
    name: "PlaymentsDisplay",
    props: {
        pageCount: Number,
    },
    data() {
        return {
            header: [
                { text: "#", value: "id", align: "left", sortable: false },
                { text: "Date", value: "data", sortable: false },
                { text: "Category", value: "category", sortable: false },
                { text: "Value", value: "value", sortable: false },
                { text: "Actions", value: "actions", sortable: false },
            ],
            page: 1,
            dialog: false,
            dialogDelete: false,
            editedItem: {
                id: "",
                data: "",
                category: "",
                value: 0,
            },
            defaultItem: {
                id: "",
                data: "",
                category: "",
                value: 0,
            },
        };
    },
    methods: {
        changePage(page) {
            console.log("Page = " + page);
            this.page = page;
            this.$store.dispatch("fetchData", "page" + page);
        },
        editItem(item) {
            this.editedItem = Object.assign({}, item);
            this.dialog = true;
        },
        deleteItem(item) {
            this.editedItem = Object.assign({}, item);
            this.dialogDelete = true;
        },
        deleteItemConfirm() {
            this.$store.commit("deleteDataFromList", this.editedItem);
            this.closeDelete();
        },
        close() {
            this.dialog = false;
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
            });
        },
        closeDelete() {
            this.dialogDelete = false;
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
            });
        },
        save() {
            console.log("save item");
            console.log(this.editedItem);
            this.$store.commit("updateData", this.editedItem);
            this.close();
        },
    },
    computed: {
        getPaymentList() {
            return this.$store.getters.getPaymentList;
        },
        getItemsPerPage() {
            const list = this.$store.getters.getPaymentList;
            return list == undefined ? 10 : list.length;
        },
    },
    watch: {
        dialog(val) {
            val || this.close();
        },
        dialogDelete(val) {
            val || this.closeDelete();
        },
    },
};
</script>