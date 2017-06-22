<template>
	<div class="index__home">
		<div class="home">
			<header v-if="axiosSuccuss">
				<span>{{resData.introPageTitle}}</span>
			</header>
			<section v-if="axiosSuccuss">
				<div>
					<p>亲爱的同学：</p>
					<article>
						{{resData.introPageFulltext}}
					</article>
				</div>
			</section>
			<footBtn :path="'/details/safeguard'" :text="'在线投保'"></footBtn>
		</div>
		<div class="spinner__modal" v-if="!axiosSuccuss">
			<mt-spinner type="fading-circle" color="yellow" :size="100"></mt-spinner>
		</div>
	</div>
	
</template>
<script>
	import footBtn from './footBtn.vue'
	import api from '../api/API.js'
	export default {
		data() {
			return {
				axiosSuccuss: false,
				resData:{
					introPageTitle: '',
					introPageFulltext: ''
				}
			}
		},
		components:{
			footBtn
		},
		created() {
			var indexData = localStorage.hasOwnProperty('indexData') ? localStorage.getItem('indexData') : null;
			if(indexData == null) {
				api.getIndex('http://zhaorj.natapp1.cc/insurance/index').then((res) => {
					var data = res.data;
					this.resData = Object.assign({}, this.resData, data);
					this.axiosSuccuss = true;
				}, (err) => {
					console.log(err);
				})
			}else {
			    this.resData = Object.assign({}, this.resData, JSON.parse(indexData));
				this.axiosSuccuss = true;
			    
			}
		},
		beforeDestroy() {
			localStorage.setItem("indexData", JSON.stringify(this.resData));
			this.axiosSuccuss = false;
		}
	}
</script>
<style lang="scss">
	.index__home{
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
		.mint-spinner-fading-circle{
			margin: 0 auto;
		}
		.spinner__modal{
			width: 100%;
			height: 100%;
			z-index: 10;
			position: absolute;
			top: 50px;
		}
	}
	.home {
		width: 100%;
		height: 100%;
		position: relative;
		overflow: hidden;
		background-color: #E35353;
		box-sizing: border-box;
		padding: 80px 0 80px 0;
		header {
			position: absolute;
			text-align: center;
			padding: 10px 0;
			width: 100%;
			top: 0;
			left: 0;
			color: #fff;
			span{
				font-size: 1.3em;
			}
		}
		section {
			height: 100%;
			width: 100%;
			position: relative;
			color: black;
			div{
				box-sizing: border-box;
				padding: 40px 20px;
				background-color: #fff;
				min-width: 200px;
				position: absolute;
				transform: translate(-50%,-50%);
				top: 50%;
				left: 50%;
			}
			article {
				text-indent: 2em;
				word-wrap: break-word;
				word-break: break-all;
				text-decoration: underline;
				line-height: 1.5;
			}
			p {
				margin: 0;
			}
		}
		footer {
			position: absolute;
			bottom: 0px;
			left: 0px;
			.mint-button {
				background-color: #FFDB22 ;
				color: #9E5932 ;
			}
		}
		
	}
</style>