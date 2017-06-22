<template>
	<div class="details">
		<mt-header title="大学生综合保障保险">
		    <router-link to="/" slot="left">
		    	<mt-button icon="back">返回</mt-button>
		    </router-link>
		    <router-link to="/" slot="right">
		    	<i class="fa fa-home fa-2x"></i>
		    </router-link>
		</mt-header>
		<div class="wrapper" v-if="axiosSuccuss">
			<section class="first">
				<p>大学生综合保障保险</p>
				<div class="info">
					<img src="../../static/img/stu.png" alt="stu">
					<div>
						<p class="clear">
							<span>承保年龄：</span><span>{{details.insProductAgeRegulation}}</span>
						</p>
						<p class="clear">
							<span>保障期限：</span><span>{{details.insProductValidDuration}}</span>
						</p>
						<p class="clear">
							<span>可购份数：</span><span>{{details.insProductAmountRegulation}}</span>
						</p>
					</div>
				</div>
				<p class="desc">
					{{details.insProductIntroduction}}
				</p>
			</section>
			<section class="second">
				<article class="project">
					保障计划：
					<span :class="{'proSel': price == value.productPlanPrice}" @click="changePrice(value.productPlanPrice, index)" v-for="(value, index) in details.productPlanList">{{value.productPlanPrice}}元</span>
				</article>
				<article class="start">
					<span class="left">开始时间</span>
					<div class="right">
						<span>{{firstTimeText}}</span>
						<i class="fa fa-calendar" aria-hidden="true" @click = "openStartPicker"></i>
					</div>
					<div class="clearfix"></div>
					<mt-datetime-picker
				    	ref="start"
				    	type="date"
				    	v-model="firstTime"
				    	:startDate="firstPickerTime.start"
				    	:endDate="firstPickerTime.end"
				    	@confirm="changeStartTime">
				    </mt-datetime-picker>
				</article>
				<article class="end">
					<span class="left">结束时间</span>
					<div class="right">
						<span>{{secondTimeText}}</span>
						<i class="fa fa-calendar" aria-hidden="true" @click = "openEndPicker"></i>
					</div>
					<div class="clearfix"></div>
					<mt-datetime-picker
				    	ref="end"
				    	type="date"
				    	v-model="secondTime"
				    	:startDate="secondPickerTime.start"
				    	:endDate="secondPickerTime.end"
				    	@confirm="changeEndTime">
				    </mt-datetime-picker>
				</article>
			</section>
			<section class="third">
				<nav>
					<router-link v-for="(item,index) in navInfo" :to="item.path" tag="span" class="navSpan" :key="index">{{item.value}}</router-link>
				</nav>
				<router-view></router-view>
			</section>
			<section class="fourth">
				<mt-radio
					title="投保公司"
					v-model="company"
					:options="['平安', '大地']">
				</mt-radio>
			</section>
			<footBtn :path="'/order'" :text="'￥'+price+' 立即投保'"></footBtn>
		</div>
		<div class="spinner__modal--details" v-if="!axiosSuccuss">
			<mt-spinner type="fading-circle" color="#E35353" :size="100"></mt-spinner>
		</div>
	</div>

	
</template>
<script>
import {mapGetters} from 'vuex'
import footBtn from './footBtn.vue'
import api from '../api/API.js'
	export default {
		data() {
			return {
				proFlag:true,
				navSel: '',
				navInfo: [
					{value:'保障范围',path:'/details/safeguard'},
					{value:'保险条款',path:'/details/clause'},
					{value:'投保须知',path:'/details/notice'},
					{value:'注意事项',path:'/details/attention'}
				],
				company: '',
				axiosSuccuss: false,
				firstTime: '',//开始时间
				secondTime: '',//结束时间
				firstTimeText: '2016-6-2',//开始时间文本
				secondTimeText: '2017-6-2',//结束时间文本
				firstPickerTime: {
					start: '',
					end: ''
				},//第一个控件时间期间
				secondPickerTime: {
					start: '',
					end: ''
				},//第二个控件时间期间
				duration: 10
			}
		},
		methods: {
			openStartPicker() {
		    	this.$refs.start.open();
		    },
		    openEndPicker() {
		    	this.$refs.end.open();
		    },
		    changeStartTime() {
		    	var num = +this.details.insProductValidDuration.slice(0, 1);
				this.firstTimeText = this.getTimeFormat(this.firstTime);
				this.secondTime = new Date(this.firstTime.getFullYear() + num,this.firstTime.getMonth(), this.firstTime.getDate())
				this.$store.commit('CHANGE_STARTTIME',this.firstTimeText);
				this.secondTimeText = this.getTimeFormat(this.secondTime);
				this.$store.commit('CHANGE_ENDTIME',this.secondTimeText);
			},
			changeEndTime() {
				var num = this.details.insProductValidDuration.slice(0, 1);
				this.secondTimeText = this.getTimeFormat(this.secondTime);
				this.$store.commit('CHANGE_ENDTIME',this.secondTimeText);
				this.firstTime = new Date(this.secondTime.getFullYear() - num,this.secondTime.getMonth(), this.secondTime.getDate());
				this.firstTimeText = this.getTimeFormat(this.firstTime);
				this.$store.commit('CHANGE_STARTTIME',this.firstTimeText);
			},
			getTimeFormat(str) {
				var date = new Date(str);
				var year = date.getFullYear();
				var month = date.getMonth() + 1;
				var day = date.getDate();
				return year+'-'+month+'-'+day;
			},
			changePrice(value, index) {
				this.$store.commit('CHANGE_PRICE',value);
				this.$store.commit('CHANGE_PRODUCTPLANLIST', index);
			},
			setTime(num = 1) {
				var now = new Date(), year = now.getFullYear(), month = now.getMonth(), date = now.getDate();
				var firstPickerStart = new Date(year, month, date);
				var firstPickerEnd = new Date(firstPickerStart.getFullYear() + this.duration, month, date);
				var secondPickerStart = new Date(firstPickerStart.getFullYear() + parseInt(num), month, date);
				var secondPickerEnd = new Date(secondPickerStart.getFullYear() + this.duration, month, date);
				this.firstPickerTime.start = firstPickerStart;
				this.firstPickerTime.end = firstPickerEnd;
				this.secondPickerTime.start = secondPickerStart;
				this.secondPickerTime.end = secondPickerEnd;
				this.firstTime = firstPickerStart;
				this.secondTime = secondPickerStart;
				this.changeStartTime();
			}
		},
		computed: {
			...mapGetters({
				price: 'getPrice',
				details: 'getDetails',
				productPlanList: 'getProductPlanList'
			})
		},
		components: {
			footBtn
		},
		created() {
			var detailData = localStorage.hasOwnProperty('detailData') ? localStorage.getItem('detailData') : null;
			if(detailData == null) {
				api.getDetail('http://zhaorj.natapp1.cc/insurance/detail').then((res) => {
					console.log(res.data);
					var data = res.data.data;
					console.log(data)
					this.$store.commit('CHANGE_DETAILS', data);
					this.$store.commit('CHANGE_PRODUCTPLANLIST');//改变price & productPlanList
					this.axiosSuccuss = true;
					this.setTime(this.details.insProductValidDuration.slice(0, 1));
				},(err) => {
					console.error(err);
				})
			}else {
				this.$store.commit('CHANGE_DETAILS', JSON.parse(localStorage.getItem('detailData')));
				this.$store.commit('CHANGE_PRODUCTPLANLISTanother', JSON.parse(localStorage.getItem('productPlanList')));
				this.$store.commit('CHANGE_PRICE', localStorage.getItem('price'))
				this.setTime(this.details.insProductValidDuration.slice(0, 1));
				this.axiosSuccuss = true;
			}
		},
		beforeDestroy() {
			localStorage.setItem('detailData', JSON.stringify(this.details));
			localStorage.setItem('productPlanList', JSON.stringify(this.productPlanList))
			localStorage.setItem('price', this.price)
		}
		
	}
</script>
<style lang="scss"> 
	.details {
		position: relative;
		.spinner__modal--details{
			margin-top: 100px;
			.mint-spinner-fading-circle{
				margin: 0 auto;
			}
		}
		.mint-header{
			background-color: #E35353;
		}
		.first{
			padding: 10px;
			.info {
				img{
					width: 80px;
					height: auto;
					border: none;
					display: inline-block;
					vertical-align: middle;
					margin-right: 5px;
				}
				div{
					display: inline-block;
					vertical-align: middle;
					p{
						display: block;
						margin: 0;
						span{
							float: left;
							&:first-child{
								width: 5em;
							}
							&:last-child{
								width: 10em;
								word-wrap: break-word;
								word-break: break-all;
							}
						}
					}
				}

			}
			.desc{
				word-wrap: break-word;
				word-break: break-all;
				padding: 10px 0px;
				box-sizing: border-box;
				border-width: 1px 0 1px 0;
				border-style: solid;
				border-color: #bfcbd9;
				margin: 0;
				line-height: 1.15;
			}
		}
		.second{
			padding: 20px 10px;
			article{
				border-bottom: 1px solid #bfcbd9;
				padding: 20px 0;
			}
			.project{
				span{
					display: inline-block;
					border: 1px solid #E35353;
					box-sizing: border-box;
					padding: 5px 10px;
					border-radius: 4px;
					margin-right: 5px;
					cursor: pointer;
					user-select: none;
					ms-user-select: none;
					moz-user-select: none;
					webkit-user-select: none;
					&:before{
						display: inline-block;
						width: 7px;
						content: '';
						height: 5px;
						border-width: 0 0 2px 2px;
						border-color: #fff;
						border-style: solid;
						transform: rotate(-45deg);
						vertical-align: middle;
						margin: -4px 5px 0 0;
					}
				}
			}
			.start,.end{
				.left{
					float: left;
				}
				.right{
					float: right;
				}
			}
		}
		.third{
			padding: 10px;
			nav{
				display: flex;
				align-items: center;
				justify-content: space-around;
				.router-link-active{
					border-bottom: 2px solid #E35353;
					color: #E35353;
				}
			}
			.navSpan{
				box-sizing: border-box;
				width: 25%;
				text-align: center;
				padding: 20px 0;
			}
		}
		.fourth{
			padding: 20px 10px;
		}
	}
	.proSel{
		background-color: #E35353;
		color: #fff;
	}

</style>