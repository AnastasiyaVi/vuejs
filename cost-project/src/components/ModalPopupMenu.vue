<template>
    <div id="menu">
        <ul class="menu-options">
            <li class="menu-option">
                <button class="btn-modal-edit" @click="onEditClick">Edit </button>
            </li>
            <li class="menu-option">
                <delete-payment :property="settings" @deleteItem="deleteData" />
            </li>
        </ul>
        <modal-window v-if="settings.name" :settings="settings" />
    </div>
</template>
  
<script>
import DeletePayment from "./DeletePayment.vue";
import ModalWindow from "./ModalWindow.vue";
export default {
    name: "ModalPopupMenu",
    components: {
        DeletePayment,
        ModalWindow,
    },
    props: {
        settings: Object,
    },
    methods: {
        onEditClick() {
            this.$modal.show("UpdatePayment", {
                id: this.settings.id,
                show: !this.settings.show,
                header: "Edit number " + this.settings.id,
            });
        },
        deleteData(data) {
            this.$modal.hide();
            this.$store.commit("deleteDataFromList", data.id);
        },
    },
    mounted() {
        const menu = document.querySelector("#menu");
        //позиционирование контекстного меню
        window.addEventListener("click", (event) => {
            event.preventDefault();
            menu.style.setProperty("--mouse-x", event.clientX + 10 + "px");
            menu.style.setProperty("--mouse-y", event.clientY + "px");
        });
    },
};
</script>
  
<style lang="scss" scoped>
#menu {
    --mouse-x: 0;
    --mouse-y: 0;
    position: fixed;
    margin: 0;
    left: 0;
    top: 0;
    width: 160px;
    background: #fff;
    box-shadow: 0 4px 5px 3px rgba(0, 0, 0, 0.2);
    transform: translateX(min(var(--mouse-x), calc(100vw - 100%))) translateY(min(var(--mouse-y), calc(100vh - 100%)));
}

.menu-options {
    list-style: none;
    padding: 10px 0;
    margin: 0;
}

.menu-option {
    font-weight: 500;
    font-size: 18px;
    padding: 10px 40px 10px 20px;
    cursor: pointer;
}

.menu-option:hover {
    background: rgba(0, 0, 0, 0.2);
}





.btn-modal-edit {
    border: none;
    padding: 10px 10px;
    background-color: rgb(221, 216, 216);
    width: 120px;
    color: rgb(44, 44, 44);
    cursor: pointer;
}
</style>