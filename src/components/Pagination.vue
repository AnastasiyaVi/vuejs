<template>
	<div class="pagination">
		<div class="page-item page-link" @click="onClick(cur - 1)"><i class=" fa fa-solid fa-arrow-left"></i></div>
		<div class="page-item page-link" v-for="i in amount" :key="i" @click="onClick(i)">{{ i }}</div>
		<div class="page-item page-link" @click="onClick(cur + 1)"><i class="fa fa-solid fa-arrow-right"></i></div>
	</div>
</template>
  
<script>
export default {
	props: {
		length: Number,
		n: Number,
		cur: Number
	},
	computed: {
		amount() {
			return Math.ceil(this.length / this.n)
		}
	},
	methods: {
		onClick(p) {
			if (p < 1 || p > this.amount) {
				return
			}
			this.$emit('paginate', p)
		}
	}
}
</script>
  
<style scoped>
.pagination {
	width: 50%;
	margin: 20px auto;
}

.page-item {
	display: inline-block;

}

.page-link {
	font-size: 14px;
	color: #0d0e0d;
	font-weight: 500;
	border: none;
	border-radius: 3px;
	padding: 10px 20px;
	cursor: pointer;
}

.page-link:hover {
	background-color: grey;
	color: white;
}
</style>
