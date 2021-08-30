<template>
  <div class="login-container">
    <lang-select class="set-language" />
    <div class="login-box">
      <img
        class="login-box-sidebar"
        src="@/assets/images/login/sidebar.png"
      >
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        class="login-form"
        autocomplete="on"
        label-position="left"
      >
        <el-tabs v-model="loginModel">
          <el-tab-pane
            :label="$t('login.passwordTitle')"
            name="password"
          >
            <template v-if="loginModel === 'password'">
              <el-form-item prop="account">
                <el-input
                  v-model="loginForm.account"
                  :placeholder="$t('login.accountPlaceholder')"
                  prefix-icon="el-icon-message"
                />
              </el-form-item>
              <el-form-item prop="password">
                <el-input
                  v-model="loginForm.password"
                  type="password"
                  show-password
                  :placeholder="$t('login.passwordPlaceholder')"
                  prefix-icon="el-icon-lock"
                />
              </el-form-item>
              <el-form-item
                prop="webCaptcha"
                class="captcha-form-item"
              >
                <GeetestBox />
              </el-form-item>
            </template>
          </el-tab-pane>
          <el-tab-pane
            :label="$t('login.captchaTitle')"
            name="captcha"
          >
            <template v-if="loginModel === 'captcha'">
              <el-form-item prop="mobile">
                <el-input
                  v-model="loginForm.mobile"
                  :placeholder="$t('login.mobilePlaceholder')"
                  prefix-icon="el-icon-mobile-phone"
                />
              </el-form-item>
              <el-form-item
                prop="captcha"
                class="captcha-form-item"
              >
                <el-input
                  v-model="loginForm.captcha"
                  :placeholder="$t('login.captchaPlaceholder')"
                  prefix-icon="el-icon-circle-check"
                  @keyup.enter.native="handleLogin"
                />
                <el-button
                  type="warning"
                  :loading="captchaLoading"
                  :disabled="countDown > 0"
                  @click="getCaptcha"
                >{{ countDown ? `${countDown} s` : $t('certification.personal.basicInfo.getCaptchaBtnText') }}</el-button>
              </el-form-item>
            </template>
          </el-tab-pane>
        </el-tabs>
        <div class="user-box">
          <router-link
            to="./register"
            class="el-link el-link--primary is-underline"
          >{{ $t('login.accountRegister') }}</router-link>
          <el-button type="text">{{ $t('login.forgetPassword') }}</el-button>
        </div>
        <div class="login-btn-box">
          <el-button
            :loading="loading"
            type="primary"
            @click="handleLogin"
          >{{ $t('login.logIn') }}</el-button>
        </div>
        <i18n
          class="tips"
          path="login.agreementTips"
          tag="div"
        >
          <span>{{ $t('login.accountAgreement') }}</span>
          <span>{{ $t('login.privacyAgreement') }}</span>
        </i18n>
        <div class="thirdparty-platform-list">
          <svg-icon
            v-for="item in thirdpartyPlatform"
            :key="item.value"
            :icon-class="item.icon"
            @click.native="handleThirdpartyLogin(item)"
          />
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { setItem, getItem, getLocalStorageKey } from '@/utils/localStorage'
import LangSelect from '@/components/LangSelect'
import GeetestBox from '@/components/GeetestBox'
import { sendSms, getThirdUrl } from '@/api/user'
import openWindow from '@/utils/open-window'
import { getQueryObject } from '@/utils'

const thirdpartyPlatform = [
  {
    label: 'QQ',
    value: 'qq',
    icon: 'qqzhanghu'
  },
  {
    label: '支付宝',
    value: 'aliyun',
    icon: 'zhifubaozhanghu'
  },
  {
    label: '微信',
    value: 'wechat',
    icon: 'weixinzhanghu'
  }
]

export default {
  name: 'Login',
  components: { LangSelect, GeetestBox },
  data() {
    const validateAccount = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t('login.accountPlaceholder')))
      } else {
        callback()
      }
    }

    const validatePassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t('login.passwordPlaceholder')))
      } else {
        callback()
      }
    }

    const validateWebCaptcha = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t('login.captchaPlaceholder')))
      } else {
        callback()
      }
    }

    const validateMobile = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t('login.captchaPlaceholder')))
      } else {
        callback()
      }
    }
    const validateCaptcha = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t('login.captchaPlaceholder')))
      } else {
        callback()
      }
    }
    return {
      thirdpartyPlatform,
      loginModel: 'password',
      loginForm: {
        account: 'aniutest',
        password: '123123.0',
        webCaptcha: 'xxx',
        mobile: '',
        captcha: ''
      },
      loginRules: {
        account: [{ required: true, trigger: 'blur', validator: validateAccount }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }],
        webCaptcha: [{ required: true, trigger: 'blur', validator: validateWebCaptcha }],
        mobile: [{ required: true, trigger: 'blur', validator: validateMobile }],
        captcha: [{ required: true, trigger: 'blur', validator: validateCaptcha }]
      },
      loading: false,
      captchaLoading: false,
      countDown: 0,
      redirect: undefined,
      otherQuery: {}
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        const query = route.query
        if (query) {
          this.redirect = query.redirect
          this.otherQuery = this.getOtherQuery(query)
        }
      },
      immediate: true
    }
  },
  created() {
    window.addEventListener('storage', this.handleThirdlogin)
  },
  destroyed() {
    window.removeEventListener('storage', this.handleThirdlogin)
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          const { loginModel, loginForm, redirect, otherQuery } = this
          const {
            account,
            password,
            webCaptcha,
            mobile,
            captcha
          } = loginForm
          console.log(webCaptcha)
          let params = {
            account,
            password
          }
          let dispatchUrl = 'user/login'
          if (loginModel === 'captcha') {
            params = {
              mobile,
              captcha
            }
            dispatchUrl = 'user/mobilelogin'
          }
          this.$store.dispatch(dispatchUrl, params).then(() => {
            this.$router.push({ path: redirect || '/', query: otherQuery })
          }).finally(() => {
            this.loading = false
          })
        }
      })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    },
    getCaptcha() {
      this.$refs.loginForm.validateField('mobile', (errMsg) => {
        if (!errMsg) {
          this.captchaLoading = true
          const { loginForm } = this
          const { mobile } = loginForm
          sendSms({ mobile, event: 'mobilelogin' }).then(res => {
            this.countDown = 60
            this.startTimer()
          }).finally(() => {
            this.captchaLoading = false
          })
        }
      })
    },
    startTimer() {
      this.stopTimer()
      const { countDown } = this
      if (countDown) {
        this.countDown = countDown - 1
        setTimeout(() => {
          this.startTimer()
        }, 1000)
      }
    },
    stopTimer() {
      const { timerId } = this
      timerId && clearTimeout(timerId)
    },
    handleThirdpartyLogin(item) {
      const { value: platform } = item
      const loading = this.$loading({
        text: this.$t('globalVar.loading')
      })
      getThirdUrl({ platform }).then(res => {
        const { data } = res
        const { url } = data
        setItem('thirdpartLoginPlatform', platform)
        openWindow(url, platform, 540, 540)
      }).catch(() => {
      }).finally(() => {
        loading.close()
      })
    },
    handleThirdlogin(event) {
      if (event.key === getLocalStorageKey('thirdpartLoginPlatformHash')) {
        const { redirect, otherQuery } = this
        const { auth_code: code } = getQueryObject(event.newValue)
        const platform = getItem('thirdpartLoginPlatform')
        const params = {
          code,
          platform
        }
        this.$store.dispatch('user/thirdlogin', params).then(() => {
          this.$router.push({ path: redirect || '/', query: otherQuery })
        }).finally(() => {
          this.loading = false
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  min-height: 100%;
  width: 100%;
  background: url("~@/assets/images/login/bg.png") 100% no-repeat;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  .set-language {
    position: absolute;
    top: 27px;
    font-size: 18px;
    right: 27px;
    cursor: pointer;
  }

  .login-box {
    display: flex;
    background-color: #fff;
    &-sidebar {
      width: 600px;
    }
  }
  .login-form {
    position: relative;
    width: 600px;
    padding: 0 76px 0 64px;
    margin: 0 auto;
    overflow: hidden;
    box-sizing: border-box;

    ::v-deep .el-tabs {
      &__header {
        margin-bottom: 80px;
      }

      &__nav {
        width: 100%;
        display: flex;
      }

      &__item {
        flex: 1;
        text-align: center;
        font-size: 24px;
        height: 100px;
        line-height: 100px;
      }
    }

    .el-form-item {
      margin-bottom: 40px;

      ::v-deep .el-form-item__error {
        font-size: 14px;
      }
    }

    ::v-deep .el-input {
      font-size: 20px;
      .el-input__suffix {
        right: 0;
        width: 60px;
      }
      .el-input__prefix {
        left: 0;
        width: 60px;
      }
      .el-input__inner {
        height: 60px;
        line-height: 60px;
        padding: 0 60px;
      }
      .el-input__icon {
        width: 60px;
        font-size: 24px;
        box-sizing: border-box;
        line-height: 60px;
      }
    }
    .captcha-form-item {
      margin-bottom: 26px;

      ::v-deep .el-form-item__content {
        display: flex;
        align-content: center;
        .captcha-box,
        .el-input {
          flex: 1;
        }
        .el-button {
          margin-left: 10px;
          width: 150px;
        }
      }

      ::v-deep .geetest_holder.geetest_wind {
        height: 60px;
        .geetest_radar_btn,
        .geetest_success_btn {
          border-radius: 4px;
          border-color: #EEEEEE;
        }
        .geetest_radar {
          margin: 15px;
        }
        .geetest_radar_tip,
        .geetest_success_radar_tip {
          height: 60px;
          line-height: 60px;
          padding: 0 60px;
        }
        .geetest_logo,
        .geetest_success_logo {
          top: 20px;
          right: 20px;
        }
        .geetest_success_btn .geetest_success_box {
          top: 18px;
          left: 18px;
        }
      }
    }
    .user-box {
      display: flex;
      justify-content: space-between;
      margin-bottom: 40px;
      .el-button {
        padding: 0;
      }
    }
    .login-btn-box {
      .el-button {
        width: 100%;
        height: 70px;
      }
    }
    .tips {
      display: flex;
      align-items: center;
      justify-content: center;
      color: $color-info;
      margin-top: 24px;
      & > span {
        color: $color-primary;
        cursor: pointer;
      }
    }
    .thirdparty-platform-list {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 60px;
      .svg-icon {
        font-size: 60px;
        margin: 0 26px;
        cursor: pointer;
      }
    }
  }
}
</style>
