<template>
	<div class="safeguard">
		<table class="sf-2">
			<tr>
				<td>身故、残疾</td>
				<td>8万</td>
			</tr>
			<tr>
				<td>住院医疗、疾病</td>
				<td>1万</td>
			</tr>
			<tr>
				<td>意外医疗</td>
				<td>3万</td>
			</tr>
			<tr>
				<td>重大疾病</td>
				<td>5万</td>
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