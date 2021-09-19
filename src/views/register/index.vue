<template>
  <div class="register-container">
    <ProCard class="register-box">
      <el-form
        ref="registerForm"
        :model="formData"
        :rules="registerRules"
      >
        <el-tabs v-model="formData.type" @tab-click="handleTabClick">
          <el-tab-pane
            :label="$t('register.mobileRegister')"
            name="0"
          />
          <el-tab-pane
            :label="$t('register.emailRegister')"
            name="1"
          />
        </el-tabs>
        <el-form-item prop="username">
          <el-input
            v-model="formData.username"
            :placeholder="$t('register.usernamePlaceholder')"
            prefix-icon="el-icon-user"
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="formData.password"
            type="password"
            show-password
            :placeholder="$t('register.passwordPlaceholder')"
            prefix-icon="el-icon-lock"
          />
        </el-form-item>
        <el-form-item prop="password_confirm">
          <el-input
            v-model="formData.password_confirm"
            type="password"
            show-password
            :placeholder="$t('register.passwordConfirmPlaceholder')"
            prefix-icon="el-icon-lock"
          />
        </el-form-item>
        <el-form-item
          v-if="formData.type === '0'"
          prop="mobile"
        >
          <el-input
            v-model="formData.mobile"
            :placeholder="$t('register.mobilePlaceholder')"
            prefix-icon="el-icon-mobile-phone"
          />
        </el-form-item>
        <el-form-item
          v-else
          prop="email"
        >
          <el-input
            v-model="formData.email"
            :placeholder="$t('register.emailPlaceholder')"
            prefix-icon="el-icon-message"
          />
        </el-form-item>
        <el-form-item
          class="code-form-item"
          prop="code"
        >
          <el-input
            v-model="formData.code"
            :placeholder="$t('register.codePlaceholder')"
            prefix-icon="el-icon-circle-check"
            @keyup.enter.native="handleRegister"
          />
          <el-button
            type="warning"
            :loading="codeLoading"
            :disabled="countDown > 0"
            @click="handleOpenGeetestBox"
          >{{ countDown ? `${countDown} s` : $t('certification.personal.basicInfo.getCaptchaBtnText') }}</el-button>
        </el-form-item>
        <el-form-item prop="ref">
          <el-input
            v-model="formData.ref"
            :placeholder="$t('register.refPlaceholder')"
            prefix-icon="el-icon-present"
            @keyup.enter.native="handleRegister"
          />
        </el-form-item>
        <i18n
          class="tips"
          path="register.agreementTips"
          tag="div"
        >
          <span>{{ $t('register.accountAgreement') }}</span>
          <span>{{ $t('register.privacyAgreement') }}</span>
        </i18n>
        <div class="register-btn-box">
          <el-button
            type="primary"
            @click="handleRegister"
          >{{ $t('register.registerBtn') }}</el-button>
        </div>
        <div class="login-tips">
          {{ $t('register.hasAccount') }}
          <router-link
            :to="{path: './login', query: $route.query}"
            class="el-link el-link--primary is-underline"
          >{{ $t('register.goLogin') }}</router-link>
        </div>
      </el-form>
    </ProCard>
    <GeetestBox
      ref="geetestBoxRef"
      product="bind"
      @success="getCaptcha"
    />
  </div>
</template>

<script>
import ProCard from '@/components/ProCard'
import GeetestBox from '@/components/GeetestBox'
import { validEmail, validMobile } from '@/utils/validate'
import { sendSms, sendEmail } from '@/api/user'
export default {
  name: 'Register',
  components: {
    ProCard,
    GeetestBox
  },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t('register.usernamePlaceholder')))
      } else {
        callback()
      }
    }

    const validatePassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t('register.passwordPlaceholder')))
      } else {
        callback()
      }
    }

    const validatePasswordConfirm = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t('register.passwordConfirmPlaceholder')))
      } else {
        callback()
      }
    }

    const validateMobile = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t('register.mobilePlaceholder')))
      } else if (!validMobile(value)) {
        callback(new Error(this.$t('register.mobileErrorPlaceholder')))
      } else {
        callback()
      }
    }

    const validateEmail = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t('register.MobilePlaceholder')))
      } else if (!validEmail(value)) {
        callback(new Error(this.$t('register.emailErrorPlaceholder')))
      } else {
        callback()
      }
    }

    const validateCode = (rule, value, callback) => {
      if (!value) {
        callback(new Error(this.$t('register.codePlaceholder')))
      } else {
        callback()
      }
    }

    return {
      formData: {
        type: '0',
        ref: '',
        username: '',
        password: '',
        password_confirm: '',
        email: '',
        mobile: '',
        code: ''
      },
      registerRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }],
        password_confirm: [{ required: true, trigger: 'blur', validator: validatePasswordConfirm }],
        email: [{ required: true, trigger: 'blur', validator: validateEmail }],
        mobile: [{ required: true, trigger: 'blur', validator: validateMobile }],
        code: [{ required: true, trigger: 'blur', validator: validateCode }]
      },
      loading: false,
      codeLoading: false,
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
    this.formData.ref = this.$route.query.ref
  },
  methods: {
    handleRegister() {
      this.$refs.registerForm.validate(valid => {
        if (valid) {
          this.loading = true
          const { formData, redirect, otherQuery } = this
          this.$store.dispatch('user/register', formData).then(() => {
            this.$router.push({ path: redirect || '/dashboard', query: otherQuery })
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
    getCaptcha(geetestParams) {
      this.codeLoading = true
      const { formData } = this
      const { type, mobile, email } = formData
      const params = {
        ...geetestParams,
        event: 'register'
      }
      if (type === '0') {
        params.mobile = mobile
      } else {
        params.email = email
      }
      const fetchApi = type === '0' ? sendSms : sendEmail
      fetchApi(params).then(() => {
        this.countDown = 60
        this.startTimer()
      }).finally(() => {
        this.codeLoading = false
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
    handleOpenGeetestBox() {
      const { formData } = this
      const { type } = formData
      const field = type === '0' ? 'mobile' : 'email'
      this.$refs.registerForm.validateField(field, (errMsg) => {
        if (!errMsg) {
          this.$refs.geetestBoxRef.verify()
        }
      })
    },
    handleTabClick() {
      this.$refs.registerForm.resetFields()
    }
  }
}
</script>

<style lang="scss" scoped>
.register-container {
  min-height: 100%;
  width: 100%;
  background: url("~@/assets/images/register/bg.png") 100% no-repeat;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0px 4px 4px 0px;
  position: relative;
}

::v-deep .el-tabs {
  &__hedaer {
    margin-bottom: 20px;
  }
  &__nav {
    width: 100%;
    display: flex;
  }
  &__item {
    flex: 1;
    text-align: center;
    font-size: 24px;
    height: 80px;
    line-height: 80px;
  }
}
.el-form {
  width: 460px;
}
.el-form-item {
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

.register-btn-box {
  margin-top: 20px;
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
.code-form-item {
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
}
.login-tips {
  text-align: center;
  margin-top: 10px;
}
</style>
