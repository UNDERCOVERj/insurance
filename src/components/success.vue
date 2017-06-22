<template>
	<div class="success">
		<mt-header title="支付成功"></mt-header>
		<div class="success__icon">
			<i class="fa fa-check-circle-o fa-5x" aria-hidden="true"></i><span>支付成功</span>
		</div>
		<orderInfo></orderInfo>
	</div>
</template>
<script>
	import {mapGetters} from 'vuex'
	import orderInfo from './orderInfo.vue'
	export default {
		data() {
			return {
				'orderNum' : 'DDH1234567890',
				'proNum' : '大学生综合保障保险',
			}
		},
		computed: {
			...mapGetters({
				time: 'getTime'
			})
		},
		components: {
			orderInfo
		}
	}
</script>
<style lang="scss" scoped>
	.success{
		.mint-header{
			background-color: #E35353;
		}
		.success__icon{
			text-align: center;
			padding: 30px;
			i{
				color: #E35353;
				vertical-align: middle;
			}
			span{
				display: inline-block;
				margin-left: 15px;
			}
		}
		
	}
</style>