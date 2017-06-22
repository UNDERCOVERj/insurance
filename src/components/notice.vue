<template>
	<div class="notice">
		<p>{{productPlanList.productPlanAttention}}</p>
	</div>
</template>
<script>
	import {mapGetters} from 'vuex'
	export default {
		computed: {
			...mapGetters({
				productPlanList: 'getProductPlanList'
			})
		}
	}
</script>
<style lang="scss" scoped>
	.notice{
		p{
			text-indent: 2em;
		}
	}
</style>