<template>
	<div id="app">
		<div class="wrapper">
			<header>
				<h1 class="title">My personal Cost</h1>
				<h2 class="subtitle">Total: {{ getFullPaymentValue }}</h2>
			</header>
			<main>
				<add-payment v-if="addBtnIsShown" @cancelEmit="emitAction" @saveEmit="addPayment" />
				<button class="add-btn" @click="addBtnIsShown = !addBtnIsShown" v-if="!addBtnIsShown">
					ADD NEW COST +
				</button>
				<payments-display :items="getPaymentList" />
			</main>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex';
import PaymentsDisplay from './components/PaymentsDisplay.vue';
import AddPayment from './components/addPayment.vue';
export default {
	name: 'App',
	components: {
		PaymentsDisplay,
		AddPayment,
	},
	data() {
		return {
			addBtnIsShown: false
		}
	},
	actions: {
		...mapActions([
			'fetchData'
		])
	},
	computed: {
		...mapGetters([
			'getPaymentList',
			'getFullPaymentValue'
		]),
	},
	created() {
		// this.setPaymentListData(this.fetchData())
	},
	mounted() {
		this.$store.dispatch('fetchData')
	},
	methods: {
		...mapMutations([
			'setPaymentListData'
		]),
		emitAction() {
			this.addBtnIsShown = false;
		},
		addPayment(data) {
			this.$store.commit('addDataToPaymentList', data)
		}
	}
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
