import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import statusbar from '@/store/modules/iphoneX-statusbar.js'
const store = new Vuex.Store({
	modules: {
		statusbar
	}
})
export default store