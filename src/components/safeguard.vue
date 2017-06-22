<template>
	<div class="safeguard">
		<table class="sf-2">
			<tr v-for="plan in productPlanList.planItemsList">
				<td>{{plan.planItemsName}}</td>
				<td>{{plan.planItemsAmount}}</td>
			</tr>
		</table>
		<table class="sf-3">
			<tr>
				<td rowspan="2">第三责任险</td>
				<td>累计限额</td>
				<td>8万</td>
			</tr>
			<tr>
				<td>医疗限额</td>
				<td>2万</td>
			</tr>
		</table>
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
				price: 'getPrice',
				productPlanList: 'getProductPlanList'
			})
		}
	}
</script>
<style lang="scss" scoped>
	.safeguard{
		padding: 20px 0;
		table{
			display: table;
			width: 100%;
		}
		tr{
			width: 100%;
			&:after{
				display: block;
				content: '';
				clear: both;
				height: 0;
				visibility: hidden;
			}
			td{
				
				padding: 10px 20px;
			}
		}
		.sf-2{
			td{
				box-sizing: border-box;
				float: left;
				width: 50%;
				&:last-child{
					text-align: right;
				}
			}
		}
		.sf-3{
			tr{
				td{
					&:last-child{
						text-align: right;
					}
				}
			}
		}

		
	}

</style>