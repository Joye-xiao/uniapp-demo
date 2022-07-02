import Vue from 'vue'
import Vuex from 'vuex'

import statusBar from '@/store/modules/statusBar.js'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		statusBar
	}
})

