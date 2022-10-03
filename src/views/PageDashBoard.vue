<!-- <template>
    <div>
        <h1>DashBoard</h1>
        <add-payment v-if="addBtnIsShown" @cancelEmit="emitAction" @saveEmit="addPayment" />
        <button class="add-btn" @click="addBtnIsShown = !addBtnIsShown" v-if="!addBtnIsShown">
            ADD NEW COST +
        </button>
        <payments-display :items="getPaymentList" />
    </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import AddPayment from "../components/addPayment.vue";
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
export default {
    name: "PageDashboard",
    components: {
        PaymentsDisplay,
        AddPayment,
    },
    data() {
        return {
            addBtnIsShown: false
        };
    },
    computed: {
        ...mapGetters(["getPaymentList", "getFullPaymentValue"]),
    },
    methods: {
        ...mapMutations(["setPaymentListData"]),
        actionEmit() {
            this.addBtnIsShown = false;
        },
        addPayment(data) {
            this.$store.commit("addDataToPaymentList", data);
        },
        goTopage(pageName) {
            this.$router.push({
                name: pageName,
            });
            console.log(pageName);
        },

    },
};
</script>

<style lang="scss" scoped>
.add-btn {

    background-color: #3bba9f;
    border: 1px solid #3f95cd;
    border-radius: 3px;
    color: white;
    padding: 10px 20px;
}

.add-btn:hover {
    color: #3bba9f;
    background-color: white;
}
</style> -->