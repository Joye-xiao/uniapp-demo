// 获取状态栏高度模块
export default {
		state: {
			statusBarHeight: 0
		},
		mutations: {
			getStatusBarHeight(state) {
				state.statusbar = uni.getSystemInfoSync().statusBarHeight
			}
		}
}