<template>
	<div class="attention">
		<a href="#">{{productPlanList.productPlanNotice}}</a>
	</div>
</template>
<script>
import {mapGetters} from 'vuex'
	export default {
		data() {
			return {

			}
		},
		computed: {
			...mapGetters({
				productPlanList: 'getProductPlanList'
			})
		}
	}
</script>
<style lang="scss" scoped>
	.attention{
		padding: 20px 0;
	}
</style>