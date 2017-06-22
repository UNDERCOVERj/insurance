<template>
	<div class="payment">
		<mt-header title="支付">
		    <router-link to="/order" slot="left">
		    	<mt-button icon="back">返回</mt-button>
		    </router-link>
		    <router-link to="/" slot="right">
		    	<i class="fa fa-home fa-2x"></i>
		    </router-link>
		</mt-header>
		<section class="payment-info">
			<p class="info__price">
				<span>应付金额：</span>
				<span>￥{{price}}</span>
			</p>
			<orderInfo></orderInfo>
		</section>
		<p class="payMethod">
			支付方式
		</p>
		<section>
			<h4>银联支付</h4>
			<div class="banks">
				<p>支持银行：</p>
				<div class="clear">
					<span v-for="bank in banks" :class="['bankCart', {'bankActive' : nowbank === bank}]" @click="nowbank = bank">{{bank}}</span>
				</div>
			</div>
		</section>
		<p class="warnings">注意：如果投保过程中断或支付未成功需重新填写信息</p>
		<section class="field">
			<mt-field label="银行卡卡号：" placeholder="必填" v-model="bankId" :attr="{required:'required'}"></mt-field>
			<mt-field label="发卡行：" placeholder="必填" v-model="nowbank" :readonly="true" :disableClear="true"></mt-field>
			<mt-field label="卡片类型：" placeholder="必填" value="借记卡" :readonly="true" :disableClear="true"></mt-field>
			<mt-field label="姓名：" placeholder="必填" v-model="username" :attr="{required:'required'}"></mt-field>
			<mt-field label="证件号码：" placeholder="必填" v-model="idNum" :attr="{required:'required'}"></mt-field>
			<mt-field label="手机号码：" placeholder="请输入银行预留的手机号码" v-model="telNum" :attr="{required:'required'}"></mt-field>
		</section>
		<p class="warnings">
			支付保费视同同意一下内容：
		</p>
		<p class="warnings">
			投保人已认真阅读并理解“本产品方案使用的保险条款”,产品详情页面和投保须知的各项内容，包括保险条数有关责任免除的条数，投保人同意委托北京联合经济有限公司进行投保，理赔等相关事宜。
		</p>
		<footBtn :path="'success'" :text="'￥'+price+' 确认支付'"></footBtn>
	</div>
</template>
<script>
	import {mapGetters} from 'vuex'
	import orderInfo from './orderInfo.vue'
	import footBtn from './footBtn.vue'
	export default {
		data() {
			return {
				'orderNum' : 'DDH1234567890',
				'proNum' : '大学生综合保障保险',
				'banks' : ['工商银行','农业银行','中国银行','建设银行','光大银行'],
				'nowbank' : '',
				"bankId" : '',
				"username": '',
				'idNum': '',
				"telNum": ''
			}
		},
		computed: {
			...mapGetters({
				price: 'getPrice',
				time: 'getTime'
			})
		},
		components: {
			orderInfo,
			footBtn
		}
	}
</script>
<style lang="scss">

	.payment{
		.mint-header{
			background-color: #E35353;
		}
		.payMethod{
			margin: 0;
			padding: 10px;
			background-color: #F5F5F5
		}
		.warnings{
			font-size: 0.75em;
			background-color: #F5F5F5;
			color: #E35353;
			margin: 0;
			padding: 10px;
			line-height: 1.15;
		}
		section{
			&>p{
				padding: 10px;
				margin: 0;
				span{
					display: inline-block;
					&:first-child{
						width: 5em;
					}
					&:last-child{
						color: #E35353;
					}
				}
			}
			h4{
				text-align: center;
			}
			.banks{
				&>p{
					padding-left: 10px;
				}
				p{
					color: #E35353;
				}
				&>div{
					box-sizing: border-box;
					padding-left: 5em;
				}
				.bankCart{
					float: left;
					padding: 10px 15px;
					margin: 10px;
					box-sizing: border-box;
					border: 1px solid #E35353;
					border-radius: 5px;
				}
				.bankActive{
					background-color: #E35353;
					color: #fff;
				}

			}
			
		}
	}
</style>