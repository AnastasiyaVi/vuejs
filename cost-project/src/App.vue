
<template>
  <v-app>
    <v-app-bar app>
      <v-btn to="/add/payment/Food?value=100" plain :ripple="false">Food</v-btn>
      <v-btn to="/add/payment/Sport?value=200" plain :ripple="false">Sport</v-btn>
      <v-btn to="/add/payment/Education?value=500" plain :ripple="false">Education</v-btn>
      <v-btn plain :ripple="false" @click="dialogCategory = !dialogCategory">Category <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view @addNewPayment="addData" @closeAddPayment="closeAddData" />
      </v-container>
      <v-container>
        <v-row>
          <v-col>
            <div class="text-h5 text-md-h4 mb-8">My personal Cost</div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-dialog v-model="dialog" width="500">
              <template v-slot:activator="{ on }">
                <v-btn color="teal" dark v-on="on">Add new cost <v-icon>mdi-plus</v-icon>
                </v-btn>
              </template>
              <v-card class="py-4 px-4">
                <add-payment :dialog="dialog" @addNewPayment="addData" @closeAddPayment="closeAddData" />
              </v-card>
            </v-dialog>

            <v-dialog v-model="dialogCategory" width="500">
              <add-category @closeAddCategory="closeAddCategory" />
            </v-dialog>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <PaymentsDisplay :pageCount="pageCount" />
          </v-col>
          <v-col cols="6">
            <chart :chartData="dataForChart" :options="chartOptions" />
          </v-col>
        </v-row>
      </v-container>

      <transition name="fade">
        <modal-window v-if="modalSettings.name" :settings="modalSettings" />
      </transition>
    </v-main>
  </v-app>
</template>

<script>

import AddPayment from "./components/AddPayment.vue";
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import AddCategory from "./components/AddCategory.vue";
import Chart from "./chart/chart.js";
import { mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "App",
  components: {
    PaymentsDisplay,
    Chart,
    AddPayment,
    AddCategory,
  },
  data: () => ({
    dialog: false,
    dialogCategory: false,
    modalSettings: {},
    chartOptions: {
      legend: {
        display: true,
        position: "right",
        align: "middle",
      },
      title: {
        display: true,
        text: "Costs by categories",
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  }),
  methods: {
    ...mapMutations([
      "setPaymentListData",
      "addDataToPaymentsList",
      "updateCategory",
      "deleteDataFromList",
    ]),
    ...mapActions(["fetchData", "fetchCategory"]),
    addData(data) {
      console.log("addData");
      this.addDataToPaymentsList(data);
    },
    closeAddData(data) {
      this.dialog = data;
    },
    closeAddCategory(data) {
      this.dialogCategory = data;
    }
  },
  computed: {
    ...mapGetters({
      categories: "getCategoryList",
      pageCount: "getPageCount",
      activePage: "getActivePage",
      dataForChart: "getChartData",
    }),
  },
  created() {
    this.$store.dispatch("fetchData", "page1");
    this.fetchCategory();
  },
};

</script>
