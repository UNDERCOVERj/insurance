<template>
	<div class="order__info">
		<p>
			<span>订单编号：</span>
			<span>{{orderNum}}</span>
		</p>
		<p>
			<span>产品名称：</span>
			<span>{{proNum}}</span>
		</p>
		<p>
			<span>保障期间：</span>
			<span>{{time.startTime}} 至 {{time.endTime}}</span>
		</p>
	</div>
</template>
<script>
	import {mapGetters} from 'vuex'
	export default {
		name: 'orderInfo',
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
		}
	}
</script>
<style lang="scss" scoped>
	.order__info{
			&>p{
				box-sizing: border-box;
				border-top: 1px solid #d9d9d9;
				margin: 0;
				padding: 10px;
				span{
					display: inline-block;
					&:first-child{
						width: 5em;
					}
					&:last-child{
						color: #E35353;
					}
				}
				&:last-child{
					border-bottom: 1px solid #d9d9d9;
				}
			}
		}
</style>