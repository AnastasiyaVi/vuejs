<template>
    <div class="payments-list">
        <table class="table">
            <tr>
                <th>#</th>
                <th>Date</th>
                <th>Category</th>
                <th>Value</th>
                <th></th>
            </tr>

            <tr v-for="(item, idx) in getPaymentList" :key="idx">
                <td>{{ item.id }}</td>
                <td>{{ item.data }}</td>
                <td>{{ item.category }}</td>
                <td>{{ item.value }}</td>
                <td class="table_menu">
                    <button class="popup_menu_button" @click.prevent="clickHandle(item.id)">
                        <i class="fa fa-solid fa-ellipsis-vertical"></i>
                    </button>
                </td>
            </tr>
        </table>
        <transition name="fade">
            <modal-popup-menu v-if="modalSettings.show" :settings="modalSettings" />
        </transition>
    </div>
</template>

<script>
import ModalPopupMenu from "./ModalPopupMenu.vue";
export default {
    name: "PlaymentsDisplay",
    components: {
        ModalPopupMenu,
    },
    props: {
        list: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            modalSettings: {
                show: false,
            },
        };
    },
    methods: {
        clickHandle(id) {
            console.log(id);
            this.$modal.show("", { id: id, show: !this.modalSettings.show });
        },
        onShow(settings) {
            this.modalSettings = settings;
            console.log(settings);
        },
        onHide() {
            this.modalSettings = {};
        },
    },
    computed: {
        getPaymentList() {
            return this.$store.getters.getPaymentList;
        },
    },
    created() {
        this.$store.dispatch("fetchData", "page1");
    },
    mounted() {
        this.$modal.EventBus.$on("shown", this.onShow);
        this.$modal.EventBus.$on("hide", this.onHide);
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

.popup_menu_button {
    border: none;
    fill: #000;
    background-color: transparent;
    position: relative;
}

.popup_menu_button:hover {
    transform: scale(1.5);
    fill: #000;
}

.popup_menu_button:active {
    fill: #fff;
}

.popup_menu_button:focus {
    fill: #000;
    outline: none;
}

.table_menu {
    width: 50px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
  