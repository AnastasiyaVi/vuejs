<template>
	<div>
		<nav class="pagination">
			<div class="page-item">
				<button type="button" class="page-link" v-if="page != 1" @click="page--">
					<i class=" fa fa-solid fa-arrow-left"></i>
				</button>
			</div>
			<div class="page-item">
				<button type="button" class="page-link" v-for="(pageNumber, index) in pages.slice(page - 1, page + 5)"
					:key="index" @click="page = pageNumber">
					{{ pageNumber }}
				</button>
			</div>
			<div class="page-item">
				<button type="button" @click="page++" v-if="page < pages.length" class="page-link">
					<i class="fa fa-solid fa-arrow-right"></i>
				</button>
			</div>
		</nav>
	</div>
</template>

<script>
export default {
	name: 'Pagination',
	props: {
		// selectList: {
		//     type: Array,
		//     default: () => [ ]
		// },
	},
	data() {
		return {
			selectList: [],
			page: 1,
			perPage: 5,
			pages: [],
		};
	},
	methods: {
		getSelectList() {
			// let data = [];
			for (let i = 0; i < 20; i++) {
				this.selectList.push({
					index: this.index,
					date: this.date,
					category: this.category,
					value: this.value
				});
			}
		},
		setPages() {
			let numberOfPages = Math.ceil(
				this.selectList.length / this.perPage,
			);
			for (let index = 1; index <= numberOfPages; index++) {
				this.pages.push(index);
			}
		},
		paginate(selectList) {
			let page = this.page;
			let perPage = this.perPage;
			let from = page * perPage - perPage;
			let to = page * perPage;
			return selectList.slice(from, to);
		},
	},
	computed: {
		displayedSelectList() {
			return this.paginate(this.selectList);
		},
	},
	watch: {
		selectList() {
			this.setPages();
		},
	},
	created() {
		this.getSelectList();
	},
};
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


}

.page-link:hover {
	background-color: grey;
	color: white;
}
</style>
