import { createStore } from 'vuex'

export default createStore({
  state: {
    isDarkTheme: false,
    isDesktopdevice: false,
  },
  getters: {
  },
  mutations: { 
    setTheme(state){
      state.isDarkTheme = state.isDarkTheme ? false : true;
    },
    isDesktop(state) {
      state.isDesktopdevice = true;
    }
  },
  actions: {
  },
  modules: {
  }
})
