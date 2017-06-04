<template>
	<div class="home">
		<header>
			<span>欢迎访问-2017学年重庆市大学生综合保障保险投保系统</span>
		</header>
		<section>
			<div>
				<p>亲爱的同学：</p>
				<article>
					大学，激昂青春与活力，生活，充满激情也蕴藏风险，一份保单，对自己负责，也为家人分忧！“理性防范风险，享受充足保障”，大学生综合保障保险，是“城乡保”的有效且必要的补充，两者不重叠，并实现了无缝对接，在参加“城乡保”同时参加“学补险”，可以得到3650天360度的呵护，是享受充足保障的双保险！
				</article>
			</div>
		</section>
		<footBtn :path="'/details/safeguard'" :text="'在线投保'"></footBtn>
	</div>
</template>
<script>
	import footBtn from './footBtn.vue'
	export default {
		components:{
			footBtn
		}
	}
</script>
<style lang="scss">
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
				width: 450px;
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
			padding-bottom: 30px;
			.mint-button {
				background-color: #FFDB22 ;
				color: #9E5932 ;
				padding: 5px 150px;
			}
		}
	}
</style>