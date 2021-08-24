import { logout, getUserInfo } from '@/api/user'
import { getAccessToken, setAccessToken, removeAccessToken } from '@/utils/auth'
import { resetRouter } from '@/router'

const state = {
  access_token: getAccessToken(),
  userInfo: {
    avatar: '',
    birthday: null,
    email: '',
    id: 0,
    level: 0,
    mobile: '',
    money: '',
    nickname: '',
    price: 0,
    score: 0,
    username: '',
    ref: ''
  }
}

const mutations = {
  SET_ACCESS_TOKEN: (state, access_token) => {
    state.access_token = access_token
  },
  SET_USER_INFO: (state, userInfo) => {
    state.userInfo = userInfo
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    // const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      const access_token = '052c94ce6403c595c328d78488132c11'
      // login({ username: username.trim(), password: password }).then(response => {
      //   const { data } = response
      commit('SET_ACCESS_TOKEN', access_token)
      setAccessToken(access_token)
      //   resolve()
      // }).catch(error => {
      //   reject(error)
      // })
      resolve()
    })
  },

  // get user info
  getUserInfo({ commit }) {
    return new Promise((resolve, reject) => {
      getUserInfo().then(response => {
        const { data } = response
        if (!data) {
          reject('Verification failed, please Login again.')
        }
        // commit('SET_ACCESS_TOKEN', data.access_token)
        commit('SET_USER_INFO', data)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // user logout
  logout({ commit, state, dispatch }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        commit('SET_ACCESS_TOKEN', '')
        removeAccessToken()
        resetRouter()

        // reset visited views and cached views
        // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
        dispatch('tagsView/delAllViews', null, { root: true })

        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_ACCESS_TOKEN', '')
      removeAccessToken()
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
