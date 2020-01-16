export default {
  state: {
    app: {
      collapse: false, // 左边导航折叠状态
      isFullScreen: false // 是否全屏
    }
  },
  getters: {
    getCollapse: state => {
      return state.app.collapse
    },
    getFullScreen: state => {
      return state.app.isFullScreen
    }
  },
  mutations: {
    setCollapse (state, value) {
      state.app.collapse = value
    },
    setFullScreen (state, value) {
      state.app.isFullScreen = value
    }
  }
}
