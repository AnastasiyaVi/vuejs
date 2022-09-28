<template>
	<div class="pagination">
		<button v-for="page in pageCount" :key="page" v-bind:class="{ active: isActive(page) }"
			@click="changePage('page' + page)">
			{{ page }}
		</button>
	</div>
</template>
  
<script>
export default {
	name: "Pagination",
	props: {
		pageCount: Number,
		activePage: Number,
	},
	methods: {
		changePage(page) {
			console.log("New page = " + page);
			this.$emit("changePage", page, "true");
		},
		isActive(page) {
			return page === this.activePage;
		},
	},
};
</script>
  
<style  lang="scss" scoped>
.pagination {
	display: inline-block;
}

.pagination button {
	color: black;
	float: left;
	padding: 3px 16px;
	font-size: 26px;
	border: none;
	margin: 0 5px 0 0;
}

.pagination button.active {
	background-color: #3bba9f;
	color: white;
}

.pagination button:hover:not(.active) {
	background-color: #ddd;
}
</style>