<template>
	<view class="the-iphoneX-container">
		<!-- 放置状态栏高度（顶部安全距离） -->
		<view :style="{ height: statusBarHeight + 'px' }"></view>
		
		<view class="header-bg">
			<!-- 设置背景图高度（设计稿高度 + 状态栏高度） statusBarHeight单位是px, 转rpx要乘以2 -->
			<image :style="{ height: (295 + statusBarHeight * 2) + 'rpx' }" src="@/static/header_bg.png" mode=""></image>
		</view>
		<view class="user-info-container">
			<view class="avatar">
				<image src="@/static/avatar.png" mode=""></image>
			</view>
			<view>用户名</view>
		</view>
	</view>
</template>

<script>
	import { mapState, mapMutations } from 'vuex' // 1. 引入 vuex 中 mapState 和 mapMutations 辅助函数
	export default {
		computed: {
			...mapState({
				// 2. 从state中拿到数据
				statusBarHeight: state => state.statusBar.statusBarHeight
			})
		},
		methods: { 
			...mapMutations([ // 3. 导入mutation里的方法名
				'getStatusBarHeight'
			])
		},
		onLoad() {
			this.getStatusBarHeight() // 4. 页面加载时调用getStatusBarHeight方法
		}
	}
</script>

<style lang="scss" scoped>
	.the-iphoneX-container{
		width: 100%;
		.header-bg{
			width: 100%;
			height: auto;
			position: fixed;
			top: 0;
			left: 0;
			z-index: -1;
			image{
				width: 100%;
				// height: 295rpx;  // 设计稿图片高度
				height: auto;
			}
		}
		.user-info-container{
			width: 100%;
			height: 200rpx;
			display: flex;
			flex-direction: row;
			align-items: center;
			padding: 50rpx;
			margin-top: 25rpx;
			box-sizing: border-box;
			color: white;
			image{
				width: 150rpx;
				height: 150rpx;
				margin-right: 20rpx;
			}
		}
	}
</style>