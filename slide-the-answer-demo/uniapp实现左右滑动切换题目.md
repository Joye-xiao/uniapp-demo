# uniapp实现左右滑动切换题目

[TOC]

## 需求

- 做一个答题功能，用户在屏幕上左右滑动，切换到上一题或下一题。

## 思路

- 监听触摸事件 touchstart 和 touchend，根据相减的距离的正负判断是左滑（上一题）还是右滑（下一题）

## 实现

> 页面：设置滑动页面的区域；用 v-for 遍历数据；用 v-if 控制展示隐藏题目；给数据绑定触摸事件

~~~js
<view class="slide-the-answer-container" >
    <!-- 滑动页面区域 -->
    <view 
        class="slide-area" 
        v-for="(item,index) in topic"
        v-if="index==nth || newIndex==index"
        @touchstart="touchStart"
        @touchend="touchEnd($event,index)">
    	<!-- 答题盒子 -->
        <view class="topic-box">
            <view>{{item.title}}</view>
        </view>
    </view>
</view>
~~~

> data 数据：

~~~js
startX: 0, // 滑动开始x轴位置
moveX: 0, // 滑动的x轴距离
nth: 0, // 当前第几题（以下标计算）
newIndex: 0, // 滑动到第几题（以下标计算）
topic: [ // 题目
    { title: '第1题' },
    { title: '第2题' },
    { title: '第3题' },
    { title: '第4题' },
    { title: '第5题' },
    { title: '第6题' },
    { title: '第7题' },
    { title: '第8题' },
    { title: '第9题' },
    { title: '第10题' }
]
~~~

>触摸事件：判断用户手势，切换题目

~~~js
touchStart(e) { // 手指触摸屏幕时触发，有一个手指放在屏幕上也会触发
    // 获取触摸时的原点
    this.startX = e.changedTouches[0].pageX // 触摸目标在页面中的X坐标
    console.log('开始触摸：', this.startX);
},
touchEnd(e,index) { // 手指离开屏幕时触发
    // 获取滑动距离
    const moveX = e.changedTouches[0].pageX - this.startX
    // 判断滑动方向
    if (moveX < -100 && index<this.topic.length-1) {
    	// 【下一题】 判断大幅度左滑且不是最后一题
        this.newIndex=this.newIndex+1
        this.nth= this.nth+1
        console.log('第'+this.index+'题');
    }
    else if (moveX > 100 && index!= 0) { 
         // 【上一题】 判断大幅度右滑且不是第一题
         this.newIndex=this.newIndex-1
         this.nth=this.nth-1
    }
}
~~~



触摸事件

-  touchstart：手指触摸屏幕时触发，有一个手指放在屏幕上也会触发
-  touchmove：手指滑动屏幕时连续触发
-  touchend：手指离开屏幕时触发

触摸事件的默认参数 event 中包含了三个用于跟踪触摸的属性对象的数组：

- touches：当前跟踪的触摸操作的touch对象的数组
- targetTouches：特定于事件目标的Touch对象的数组

- changeTouches：自上次触摸以来发生了什么改变的touch对象的数组

每个Touch对象包含的属性如下：

- clientX：触摸目标在视口中的x坐标。 　clientY：触摸目标在视口中的y坐标。
- pageX：触摸目标在页面中的x坐标。 　  pageY：触摸目标在页面中的y坐标。
- screenX：触摸目标在屏幕中的x坐标。    screenY：触摸目标在屏幕中的y坐标。
- identifier：标识触摸的唯一ID。                target：触摸的DOM节点目标。



## 完整代码

[GitHub：uniapp实现用户左右滑动切换题目功能](https://github.com/Joye-xiao/uniapp-demo/tree/master/slide-the-answer-demo)
