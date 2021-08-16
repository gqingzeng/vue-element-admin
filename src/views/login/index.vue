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
          <el-tab-pane :label="$t('login.passwordTitle')" name="password">
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
                <el-input
                  v-model="loginForm.webCaptcha"
                  prefix-icon="el-icon-circle-check"
                  :placeholder="$t('login.captchaPlaceholder')"
                  @keyup.enter.native="handleLogin"
                />
                <div class="captcha-box">
                  xxx
                </div>
              </el-form-item>
            </template>
          </el-tab-pane>
          <el-tab-pane :label="$t('login.captchaTitle')" name="captcha">
            <template v-if="loginModel === 'captcha'">
              <el-form-item prop="mobile">
                <el-input
                  v-model="loginForm.mobile"
                  :placeholder="$t('login.mobilePlaceholder')"
                  prefix-icon="el-icon-mobile-phone"
                />
              </el-form-item>
              <el-form-item prop="captcha">
                <el-input
                  v-model="loginForm.captcha"
                  :placeholder="$t('login.captchaPlaceholder')"
                  prefix-icon="el-icon-circle-check"
                  @keyup.enter.native="handleLogin"
                />
              </el-form-item>
            </template>
          </el-tab-pane>
        </el-tabs>
        <div class="user-box">
          <el-button type="text">{{ $t('login.accountRegister') }}</el-button>
          <el-button type="text">{{ $t('login.forgetPassword') }}</el-button>
        </div>
        <div class="login-btn-box">
          <el-button :loading="loading" type="primary" @click="handleLogin">{{ $t('login.logIn') }}</el-button>
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
          <div
            v-for="platform in thirdpartyPlatform"
            :key="platform"
            class="thirdparty-platform-item"
          >{{ platform }}</div>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import LangSelect from '@/components/LangSelect'

const thirdpartyPlatform = ['qq', '微信', '支付']

export default {
  name: 'Login',
  components: { LangSelect },
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
        account: '',
        password: '',
        webCaptcha: '',
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
  methods: {
    handleLogin() {
      // this.$refs.loginForm.validate(valid => {
      // if (valid) {
      this.loading = true
      const parasm = {
        username: 'admin',
        password: '111111'
      }
      this.$store.dispatch('user/login', parasm)
        .then(() => {
          this.$router.push({ path: this.redirect || '/', query: this.otherQuery })
          this.loading = false
        })
        .catch(() => {
          this.loading = false
        })
        // }
      // })
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
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
  border-radius: 0px 4px 4px 0px;
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
      &__content {
        margin-bottom: 26px;
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
      .el-input__prefix {
        left: 0;
      }
      .el-input__inner {
        height: 60px;
        line-height: 60px;
        padding-left: 60px;
      }
      .el-input__icon {
        width: 60px;
        font-size: 24px;
        box-sizing: border-box;
        line-height: 60px;
      }
    }
    .captcha-form-item {
      margin-bottom: 0;
      ::v-deep .el-form-item__content {
        display: flex;
        .el-input {
          flex: 1;
        }
        .captcha-box {
          width: 160px;
          height: 60px;
          border-radius: 4px;
          background: #eeeeee;
          margin-left: 20px;
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
    .thirdparty-platform {
      &-list {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 60px;
      }
      &-item {
        width: 61px;
        height: 61px;
        background-color: red;
        margin: 0 26px;
      }
    }
  }
}
</style>
