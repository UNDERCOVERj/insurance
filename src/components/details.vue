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
		<section class="first">
			<p>大学生综合保障保险</p>
			<div class="info">
				<img src="../../static/img/stu.png" alt="stu">
				<p>
					<span>承保年龄：在校大学生、含硕士博士生</span>
					<span>保障期限：1年</span>
					<span>可购份数：1份</span>
				</p>
			</div>
			<p class="desc">
				大学生综合保障保险俗称“综合险”，是“城乡保”的有效且必要的补充，两者不重叠，并实现了无缝对接，学生在参加“城乡保”同时参加“综合险”，可以得到365天360度的保障，是享受充足保障的双保险。
			</p>
		</section>
		<section class="second">
			<article class="project">
				保障计划：
				<span :class="{'proSel': price == value}" @click="changePrice(value)" v-for="value in priceArr">{{value}}元</span>
			</article>
			<article class="start">
				<span class="left">开始时间</span>
				<div class="right">
					<span>{{startTimeText}}</span>
					<i class="fa fa-calendar" aria-hidden="true" @click = "openStartPicker"></i>
				</div>
				<div class="clearfix"></div>
				<mt-datetime-picker
			    	ref="start"
			    	type="date"
			    	v-model="startTime"
			    	:startDate="pickerTime.start"
			    	:endDate="pickerTime.end"
			    	@confirm="changeStartTime">
			    </mt-datetime-picker>
			</article>
			<article class="end">
				<span class="left">结束时间</span>
				<div class="right">
					<span>{{endTimeText}}</span>
					<i class="fa fa-calendar" aria-hidden="true" @click = "openEndPicker"></i>
				</div>
				<div class="clearfix"></div>
				<mt-datetime-picker
			    	ref="end"
			    	type="date"
			    	v-model="endTime"
			    	:startDate="pickerTime.start"
			    	:endDate="pickerTime.end"
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
</template>
<script>
import {mapGetters} from 'vuex'
import footBtn from './footBtn.vue'
	export default {
		data() {
			return {
				proFlag:true,
				startTimeText: '2016-6-2',
				endTimeText: '2017-6-2',
				startTime: '',
				endTime: '',
				pickerTime: {
					start: '',
					end: ''
				},
				navSel: '',
				navInfo: [
					{value:'保障范围',path:'/details/safeguard'},
					{value:'保险条款',path:'/details/clause'},
					{value:'投保须知',path:'/details/notice'},
					{value:'注意事项',path:'/details/attention'}
				],
				company: '',
				priceArr: [60, 100]
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
				this.startTimeText = this.getTimeFormat(this.startTime);
				this.$store.commit('CHANGE_STARTTIME',this.startTimeText);
			},
			changeEndTime() {
				this.endTimeText = this.getTimeFormat(this.endTime);
				this.$store.commit('CHANGE_ENDTIME',this.endTimeText);
			},
			getTimeFormat(str) {
				var date = new Date(str);
				var year = date.getFullYear();
				var month = date.getMonth() + 1;
				var day = date.getDate();
				return year+'-'+month+'-'+day;
			},
			changePrice(value) {
				this.$store.commit('CHANGE_PRICE',value);
			}
		},
		computed: {
			...mapGetters({
				price: 'getPrice'
			})
		},
		components: {
			footBtn
		},
		created() {
			var now = new Date()
			var start = new Date(now.getFullYear(), now.getMonth(), now.getDate());
			var end = new Date(now.getFullYear() + 10, now.getMonth(), now.getDate());
			var startTime = new Date(now.getFullYear(), now.getMonth(), now.getDate());
			var endTime = new Date(now.getFullYear() + 2, now.getMonth(), now.getDate())
			this.pickerTime.start = start;
			this.startTime = startTime;
			this.pickerTime.end = end;
			this.endTime = endTime;
			this.changeStartTime();
			this.changeEndTime();
		}
		
	}
</script>
<style lang="scss" scoped> 
	.details {
		.mint-header{
			background-color: #E35353;
		}
		.first{
			padding: 10px;
			.info {
				img{
					width: 100px;
					height: auto;
					border: none;
					display: inline-block;
					vertical-align: middle;
				}
				p{
					display: inline-block;
					vertical-align: middle;
					span{
						display: block;
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
	footer {
		width: 100%;
		text-align: center;
		padding-bottom: 30px;
		div{
			display: inline-block;
		}
		button {
			background-color: #E35353;
			color: #fff;
			padding: 10px 80px;
		}
	}
	.proSel{
		background-color: #E35353;
		color: #fff;
	}
</style>