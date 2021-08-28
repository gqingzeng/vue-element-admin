<template>
  <el-form
    ref="formRule"
    :model="formData"
    :rules="formRules"
    label-position="top"
  >
    <el-form-item :label="$t('certification.personal.basicInfo.country')">
      <el-input
        readonly
        :value="$t('certification.personal.basicInfo.countryPlaceholder')"
      />
    </el-form-item>
    <el-form-item
      prop="name"
      :label="$t('certification.personal.basicInfo.name')"
    >
      <el-input
        v-model="formData.name"
        :placeholder="$t('certification.personal.basicInfo.namePlaceholder')"
      />
    </el-form-item>
    <el-form-item
      prop="idCardNo"
      :label="$t('certification.personal.basicInfo.idCardNo')"
    >
      <el-input
        v-model="formData.idCardNo"
        :placeholder="$t('certification.personal.basicInfo.idCardNoPlaceholder')"
      />
    </el-form-item>
    <el-form-item
      prop="mobile"
      :label="$t('certification.personal.basicInfo.mobile')"
    >
      <el-input
        v-model="formData.mobile"
        :placeholder="$t('certification.personal.basicInfo.mobilePlaceholder')"
      />
    </el-form-item>
    <el-form-item
      prop="captcha"
      :label="$t('certification.personal.basicInfo.captcha')"
    >
      <el-input
        v-model="formData.captcha"
        :placeholder="$t('certification.personal.basicInfo.captchaPlaceholder')"
      />
      <el-button
        type="warning"
        :loading="captchaLoading"
        :disabled="countDown > 0"
        @click="getCaptcha"
      >{{ countDown ? `${countDown} s` : $t('certification.personal.basicInfo.getCaptchaBtnText') }}</el-button>
    </el-form-item>
    <el-button
      class="submit-btn"
      type="primary"
      @click="handleSubmit"
    >{{ $t('certification.personal.submitBtnText') }}</el-button>
  </el-form>
</template>

<script>
import { aliyunCheck, aliyunSend } from '@/api/aliyun'
export default {
  name: 'BasicInfo',
  components: {

  },
  data() {
    return {
      formData: {
        name: '',
        idCardNo: '',
        mobile: '',
        captcha: ''
      },
      formRules: {
        name: [
          { required: true, message: this.$t('certification.personal.basicInfo.namePlaceholder'), trigger: 'blur' }
        ],
        idCardNo: [
          { required: true, message: this.$t('certification.personal.basicInfo.idCardNoPlaceholder'), trigger: 'blur' }
        ],
        mobile: [
          { required: true, message: this.$t('certification.personal.basicInfo.mobilePlaceholder'), trigger: 'blur' }
        ],
        captcha: [
          { required: true, message: this.$t('certification.personal.basicInfo.captchaPlaceholder'), trigger: 'blur' }
        ]
      },
      captchaLoading: false,
      timerId: null,
      countDown: 0
    }
  },
  beforeDestroy() {
    this.stopTimer()
  },
  methods: {
    handleSubmit() {
      this.$refs.formRule.validate((valid) => {
        if (valid) {
          const { formData } = this
          const loading = this.$loading({
            text: this.$t('certification.personal.basicInfo.checkLoading')
          })
          aliyunCheck(formData).then(res => {
            this.$emit('updateStep', 2, formData)
          }).finally(() => {
            loading.close()
          })
        }
      })
    },
    getCaptcha() {
      this.$refs.formRule.validateField('mobile', (errMsg) => {
        if (!errMsg) {
          this.captchaLoading = true
          const { formData } = this
          const { mobile } = formData
          aliyunSend({ mobile }).then(res => {
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
    }
  }
}
</script>

<style scoped lang="scss">
.el-form {
  ::v-deep .el-form-item__content {
    display: flex;
    width: 500px;
    .el-input {
      flex: 1;
      & + .el-button {
        margin-left: 10px;
        width: 150px;
      }
    }
  }
}
.submit-btn {
  width: 240px;
  height: 50px;
  margin-top: 30px;
}
</style>
