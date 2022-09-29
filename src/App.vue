<template>
	<div id="app">
		<div class="wrapper">
			<header>
				<h1 class="title">My personal costs</h1>

			</header>
			<main>
				<add-payment v-if="addBtnIsShown" @cancelEmit="emitAction" @saveEmit="addPayment" />
				<button class="add-btn" @click="addBtnIsShown = !addBtnIsShown" v-if="!addBtnIsShown">
					ADD NEW COST +
				</button>
				<payments-display :items="paymentsList" />
				<pagination :selectList="paymentsList" />
			</main>
		</div>
	</div>
</template>

<script>
import AddPayment from './components/addPayment.vue';
import Pagination from './components/Pagination.vue';
import PaymentsDisplay from './components/PaymentsDisplay.vue';

export default {
	name: 'App',
	components: {
		PaymentsDisplay,
		AddPayment,
		Pagination,
	},

	data() {
		return {
			paymentsList: [],
			addBtnIsShown: false,
		};
	},
	methods: {
		addPayment(data) {
			this.paymentsList.push(data);
		},
		emitAction() {
			this.addBtnIsShown = false;
		},
		fetchData() {
			return [
				{
					date: '21.09.2022',
					category: 'Food',
					value: '123',
				},
				{
					date: '21.09.2022',
					category: 'Transport',
					value: '13',
				},
				{
					date: '21.09.2022',
					category: 'Housing',
					value: '12',
				},
			];
		},
	},
	created() {
		this.paymentsList = this.fetchData();
	},
};
</script>

<style lang="scss" scoped>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}

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
</style>
