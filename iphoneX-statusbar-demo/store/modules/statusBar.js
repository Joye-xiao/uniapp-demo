export default {
	state: { // 存放数据
		statusBarHeight: 0
	},
	mutations: { // 修改state中的数据
		getStatusBarHeight(state) { // 获取状态栏高度（顶部安全距离）
			state.statusBarHeight = uni.getSystemInfoSync().statusBarHeight
		}
	}
}