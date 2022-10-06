<template>
	<div class="container">
		<div id="app" :class="[$style.wrapper]">
			<header>
				<h1 class="title-head">My personal cost</h1>

				<div>
					<ul :class="[$style.menu]">
						<li :class="[$style.menu_item]">
							<router-link to="/add/payment/Food?value=100">Food</router-link>
						</li>
						<li :class="[$style.menu_item]">
							<router-link to="/add/payment/Sport?value=200">Sport</router-link>
						</li>
						<li :class="[$style.menu_item]">
							<router-link to="/add/payment/Education?value=500">Education</router-link>
						</li>
						<li :class="[$style.menu_item]">
							<router-link to="/add/payment/">Other</router-link>
						</li>
						<li :class="[$style.menu_item]">
							<a href="#" @click="addCategoryClick">Category</a>
						</li>
					</ul>
				</div>

				<main>
					<div class="content-page">
						<router-view @addNewPayment="addData" />
					</div>
					<PaymentsDisplay />

					<Pagination @changePage="changePage" :pageCount="pageCount" :activePage="activePage" />
					<transition name="fade">
						<modal-window v-if="modalSettings.name" :settings="modalSettings" />
					</transition>
				</main>
			</header>
		</div>
	</div>

</template>
  
<script>
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import { mapGetters, mapMutations, mapActions } from "vuex";
import Pagination from "./components/Pagination.vue";
export default {
	name: "App",
	components: {
		PaymentsDisplay,
		Pagination,
		ModalWindow: () =>
			import("./components/ModalWindow.vue"),
	},
	data() {
		return {
			page: "",
			modalSettings: {},
		};
	},
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
		changePage(page) {
			console.log("Page = " + page);
			this.fetchData(page);
		},
		//modal
		onShow(settings) {
			this.modalSettings = settings;
			console.log(settings);
		},
		onHide() {
			this.modalSettings = {};
		},
		addCategoryClick() {
			this.$modal.show("CategorySelect", { header: "Add new category" });
		},
	},
	computed: {
		...mapGetters({
			categories: "getCategoryList",
			pageCount: "getPageCount",
			activePage: "getActivePage",
		}),
	},
	created() {

		if (!this.categories.length) {
			this.fetchCategory();
		}
	},
	mounted() {
		this.$modal.EventBus.$on("shown", this.onShow);
		this.$modal.EventBus.$on("hide", this.onHide);

	},
	beforeDestroy() {
		this.$modal.EventBus.$off("shown", this.onShow);
		this.$modal.EventBus.$off("hide", this.onHide);
	},
};
</script>


  
<style lang="scss" module>
* {
	max-width: 1140px;
	margin: 0 auto;
	text-align: center;
	font-family: sans-serif;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 50px;

}



.wrapper {
	background: #fff;
}

.menu {
	list-style: none;
	margin: 0;
	padding: 0;
	margin-top: 30px;
	display: flex;
	justify-content: center;

}

.menu_item a {
	font-size: 26px;
	color: #3bba9f;
	text-decoration: none;
	/*убираем подчеркивание текста ссылок*/
}


.menu_item {
	padding: 10px;
	margin: 0;
	/*Добавляем отступ у пунктов меню*/
}
</style>
