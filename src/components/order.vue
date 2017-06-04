<template>
	<div class="order">
		<mt-header title="订单填写">
		    <router-link to="/details/safeguard" slot="left">
		    	<mt-button icon="back">返回</mt-button>
		    </router-link>
		    <router-link to="/" slot="right">
		    	<i class="fa fa-home fa-2x"></i>
		    </router-link>
		</mt-header>
		<section class="order-info">
			<p class="order-info__details">
				<span>大学生综合保障保险投保信息</span>
				<i :class="['right','fa',detailInfo ? 'fa-chevron-down' : 'fa-chevron-up']" aria-hidden="true" @click="detailInfo = !detailInfo"></i>
			</p>
			<transition name="info__details">
				<p v-if="detailInfo" class="info__details-text">大学生综合保障保险俗称“综合险”，是“城乡保”的有效且必要的补充，两者不重叠，并实现了无缝对接，学生在参加“城乡保”同时参加“综合险”，可以得到365天360度的保障，是享受充足保障的双保险。</p>
			</transition>
			<div class="order-info__applicant">
				<p class="title">投保人信息</p>
				<mt-field label="姓名：" placeholder="必填" v-model="applicantName" :attr="{required:'required'}"></mt-field>
				<div class="order-info__applicant--id">
					<mt-field label="证件类型" v-model="id" :readonly="true" :disableClear="true" @click.native="changePositionFlag"></mt-field>
					<i :class="['fa posiRight',posiRightFlag ? 'fa-chevron-down' : 'fa-chevron-up']" @click="changePositionFlag"></i>
					<mt-actionsheet
					  :actions="actions"
					  cancelText=""
					  v-model="posiRightFlag">
					</mt-actionsheet>
				</div>
				<mt-field label="证件号码：" placeholder="必填" v-model="idNum" :attr="{required:'required'}"></mt-field>
				<mt-field label="手机号码：" placeholder="必填" v-model="telNum" :attr="{required:'required'}" type="tel"></mt-field>
			</div>
			<div class="order-info__insured">
				<p class="title">被保险人信息</p>
				<mt-field label="姓名：" placeholder="必填" v-model="insuredName" :attr="{required:'required'}"></mt-field>
				<div class="order-info__applicant--id">
					<mt-field label="证件类型" v-model="insuredId" :readonly="true" :disableClear="true" @click.native="changeInsuredPositionFlag"></mt-field>
					<i :class="['fa posiRight',insuredPosiRightFlag ? 'fa-chevron-down' : 'fa-chevron-up']" @click="changeInsuredPositionFlag"></i>
					<mt-actionsheet
					  :actions="insuredActions"
					  cancelText=""
					  v-model="insuredPosiRightFlag">
					</mt-actionsheet>
				</div>
				<mt-field label="电子邮箱：" placeholder="必填" v-model="insuredEmail" :attr="{required:'required'}" type="email"></mt-field>
				<mt-field label="证件号码：" placeholder="必填" v-model="insuredIdNum" :attr="{required:'required'}" @input.native="changeBirth()" @keyup.native="keyupEvent($event)" :disableClear="true"></mt-field>
				<mt-field label="出生日期：" placeholder="自动填写" v-model="insuredBirth" :readonly="true" :disableClear="true"></mt-field>
				<mt-field label="学校名称：" placeholder="必填" v-model="schoolName" :attr="{required:'required'}"></mt-field>
				<mt-field label="学院名称：" placeholder="必填" v-model="academyName" :attr="{required:'required'}"></mt-field>
				<mt-field label="所属年级：" placeholder="必填" v-model="grade" :attr="{required:'required'}"></mt-field>
				<div class="switch">
					<span>是否有社会保险：</span>
					<mt-switch v-model="isSocialty">{{isSocialty ? '是' : '否'}}</mt-switch>
				</div>
				<mt-field label="受益人：" value="法定受益人" :readonly="true" :disableClear="true"></mt-field>
				<mt-field label="客服编号：" value="0101-12456" :readonly="true" :disableClear="true"></mt-field>
				<div class="checklist">
					<mt-checklist
					    v-model="haveRead"
					    :options="['我已阅读']">
					</mt-checklist>
					<a href="#">《投保声明》</a>
				</div>
				
			</div>
		</section>
		<footBtn :path="'/payment'" :text="'￥'+price+' 下一步'"></footBtn>
	</div>
</template>
<script>
import {mapGetters} from 'vuex'
import footBtn from './footBtn.vue'
	export default {
		data() {
			return {
				detailInfo: false,
				posiRightFlag: false,
				insuredPosiRightFlag: false,//被保险人身份证flag
				applicantName: '',//姓名
				idNum:'',//证件号码
				telNum:'',//手机号码
				insuredIdNum:'',//被保险人证件号码
				insuredName: '',//被保险人姓名
				insuredId:'身份证',//被保险人id类别
				insuredEmail:'',
				id: '身份证',
				insuredBirth: '',//被保险人出生日期
				schoolName: '',//被保险人学校名称
				academyName: '',//被保险人学院名称
				grade: '',//所属年级
				actions:[{'name':'身份证','method':this.changeId},{'name':'护照','method':this.changeId}],
				insuredActions:[{'name':'身份证','method':this.changeInsuredId},{'name':'护照','method':this.changeInsuredId}],
				isSocialty: false,//是否参加社会保险
				haveRead: [],
			}
		},
		methods: {
			changePositionFlag() {
				this.posiRightFlag=!this.posiRightFlag;
			},
			changeInsuredPositionFlag() {
				this.insuredPosiRightFlag=!this.insuredPosiRightFlag;
			},
			changeId(item, index) {
				this.id = item.name;
			},
			changeInsuredId(item, index) {
				this.insuredId = item.name;
			},
			changeBirth() {
				var num = this.insuredIdNum, len = num.length
				if(len > 6 && len < 11) {
					this.insuredBirth = num.slice(6, 10);
				}else if(len > 10 && len < 13) {
					this.insuredBirth = num.slice(6, 10)+'-'+num.slice(10,12);
				}else if(len > 12) {
					this.insuredBirth = num.slice(6, 10)+'-'+num.slice(10,12)+'-'+num.slice(12,14);
				}else {
					this.insuredBirth = ''
				}
			},
			keyupEvent(e) {
				this.insuredIdNum=this.insuredIdNum.replace(/\D/g,'')
			}
		},
		computed: {
			...mapGetters({
				price: 'getPrice'
			})
		},
		components: {
			footBtn
		}
	}
</script>
<style lang="scss">
	.order{
		.mint-header{
			background-color: #E35353;
		}
		.order-info{
			.order-info__details{
				box-sizing: border-box;
				padding: 0 20px;
			}
			.right{
				float: right;
			}
			.info__details-text{
				box-sizing: border-box;
				padding: 0 20px;
			}
			.order-info__applicant--id{
				position: relative;
				.posiRight{
					position: absolute;
					right: 20px;
					top: 50%;
					transform: translateY(-50%);
					bottom: 0;
				}
			}
			.switch{
				font-size: 16px;
				box-sizing: border-box;
				border-top: 1px solid #d9d9d9;
				padding: 5px 0;
				margin-left: 10px;
				&>label,&>span{
					display: inline-block;
					vertical-align: middle;
					margin-right: 10px;

				}
				&>span{
					margin-right: 30px;
				}
				.mint-switch-core{
					vertical-align: middle;
				}
				.mint-switch-label{
					vertical-align: middle;
				}
			}
			.checklist{
				font-size: 16px;
				position: relative;
				&>a{
					position: absolute;
					left: 120px;
					top: 50%;
					transform: translateY(-50%);
					text-decoration: none;
				}
				
			}
		}
		.title{
			margin: 0;
			padding: 10px 20px;
			background-color: #F5F5F5;
		}

	}
	
	.info__details-enter-active, .info__details-leave-active {
		transition: all .3s ease;
	}
	.info__details-enter, .info__details-leave-active {
		transform: translateX(-300px)
	}
</style>