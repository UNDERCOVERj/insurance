<template>
	<footer>
		<router-link :to="path" tag="div">
			<mt-button type="primary" size="normal">{{text}}</mt-button>
		</router-link>
	</footer>
</template>
<script>
	import {mapGetters} from 'vuex'
	export default {
		name: 'footBtn',
		data() {
			return {

			}
		},
		props: {
			path: String,
			text: String
		}
	}
</script>
<style lang="scss" scoped>
	footer {
		width: 100%;
		text-align: center;
		margin: 30px 0;
		div{
			display: inline-block;
		}
		button {
			background-color: #E35353;
			color: #fff;
			padding: 10px 80px;
		}
	}
</style>