<template>
	<view class="slide-the-answer-container" >
		<!-- 滑动页面区域 -->
		<view class="slide-area" v-for="(item,index) in topic" v-if="index==nth || newIndex==index" @touchstart="touchStart" @touchend="touchEnd($event,index)">
			<!-- 答题盒子 -->
			<view class="topic-box">
				<view>{{item.title}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				startX: 0, // 滑动开始x轴位置
				moveX: 0, // 滑动的x轴距离
				nth: 0, // 当前第几题（以下标计算）
				newIndex: 0, // 滑动到第几题（以下标计算）
				topic: [ // 题目
					{
						title: '第1题'
					},
					{
						title: '第2题'
					},
					{
						title: '第3题'
					},
					{
						title: '第4题'
					},
					{
						title: '第5题'
					},
					{
						title: '第6题'
					},
					{
						title: '第7题'
					},
					{
						title: '第8题'
					},
					{
						title: '第9题'
					},
					{
						title: '第10题'
					}
				]
			}
		},
		methods: {
			touchStart(e) { // 手指触摸屏幕时触发，有一个手指放在屏幕上也会触发
				// 获取触摸时的原点
				this.startX = e.changedTouches[0].pageX // 触摸目标在页面中的X坐标
				console.log('开始触摸：', this.startX);
			},
			touchEnd(e,index) { // 手指离开屏幕时触发
				// 获取滑动距离
				console.log(e);
				const moveX = e.changedTouches[0].pageX - this.startX
				console.log(moveX);
				// 判断滑动方向
				if (moveX < -100 && index<this.topic.length-1) { // 下一题 判断大幅度左滑且不是最后一题
					this.newIndex=this.newIndex+1
					this.nth= this.nth+1
					console.log('第'+this.index+'题');
				}
				else if (moveX > 100 && index!= 0) { // 上一题 判断大幅度右滑且不是第一题
					this.newIndex=this.newIndex-1
					this.nth=this.nth-1
					console.log(this.index);
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.slide-the-answer-container{
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #eee;
		.slide-area{
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			.topic-box{
				width: 80%;
				height: 900rpx;
				background-color: #fff;
				border: 10rpx solid black;
			}
		}
	}
</style>