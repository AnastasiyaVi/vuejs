<template>
	<div>
		<button @click="onClick">Clicked {{ counter }}</button>
	</div>
</template>

<script>
export default {
	name: 'Counter',
	data() {
		return {
			counter: 0,
		};
	},
	methods: {
		onClick() {
			this.counter++;
		},
	},
	beforeCreate() {
		console.log('beforeCreate');
	},
	created() {
		console.log('create');
	},
	beforeMount() {
		console.log('beforeMount');
	},
	mounted() {
		// 	console.dir(this.$el);
		const btn = this.$el;
		if (!btn) return;
		btn.addEventListener('click', () => {
			console.log('clickedMounted');
		});
		console.log(this.$el);
	},
	beforeUpdate() {
		console.log('beforeUpdate');
	},
	updated() {
		console.log('update');
	},
	beforeDestroy() {
		console.log('beforeDestroy');
	},
	destroyed() {
		const btn = this.$el;
		if (!btn) return;
		btn.removeEventListener('click', () => {

		});
		console.log('listenerDestryed');
	},
};
</script>

<style lang="scss" scoped>

</style>
