<template>
	<view class="the-iphoneX-container">
		 <!-- 放置状态栏高度 -->
		<view :style="{ height: statusBarHeight + 'px' }"></view>
		
		<view  class="header-bg">
			<image :style="{height:(295 + statusBarHeight*2) + 'rpx'}" src="@/static/header_bg.png" mode=""></image>
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
				// height: 295rpx;
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