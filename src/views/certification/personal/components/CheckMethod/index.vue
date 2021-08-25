<template>
  <div>
    <el-alert
      type="primary"
      :closable="false"
      :title="$t('certification.personal.checkMethod.tips')"
    />
    <div class="container">
      <template v-if="!showCheckComponent">
        <div class="check-type-box">
          <div
            class="check-type-box-item"
            :class="{active: CHECK_TYPE.ALIPAY === activeType}"
            @click="setActiveType(CHECK_TYPE.ALIPAY)"
          >
            <svg-icon icon-class="z-alipay" />
            <div class="check-type-box-title">{{ $t('certification.personal.checkMethod.alipayCheckTitle') }}</div>
            <div class="check-type-box-sub-title">{{ $t('certification.personal.checkMethod.alipayCheckSubTitle') }}</div>
            <div class="check-type-box-tips">{{ $t('certification.personal.checkMethod.alipayCheckTips') }}</div>
            <el-tag
              effect="dark"
              type="warning"
              size="mini"
            >{{ $t('globalVar.recommend') }}</el-tag>
          </div>
          <div
            class="check-type-box-item"
            :class="{active: CHECK_TYPE.ID === activeType}"
            @click="setActiveType(CHECK_TYPE.ID)"
          >
            <svg-icon icon-class="shenfenzheng" />
            <div class="check-type-box-title">{{ $t('certification.personal.checkMethod.idImageCheckTitle') }}</div>
            <div class="check-type-box-sub-title">{{ $t('certification.personal.checkMethod.idImageCheckSubTitle') }}</div>
            <i18n
              class="check-type-box-tips"
              path="certification.personal.checkMethod.idImageCheckTips"
              tag="div"
            >
              {{ formData.name }}
            </i18n>
          </div>
        </div>
        <div class="footer">
          <el-button
            type="text"
            icon="el-icon-back"
            @click="handleBack"
          >{{ $t('certification.personal.checkMethod.backBasicInfo') }}</el-button>
        </div>
      </template>
      <template v-else>
        <component
          :is="checkComponent"
          :form-data="formData"
          :qr-code="base64"
          @back="handlePreStep"
          @submit="aliyunVerify"
        />
      </template>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { CHECK_TYPE } from '@/constant/certification'
import { aliyunVerify, aliyunResultInfor } from '@/api/aliyun'
const checkComponentMap = {
  [CHECK_TYPE.ID]: () => import('./IDCheck'),
  [CHECK_TYPE.ALIPAY]: () => import('./AlipayCheck')
}

export default {
  name: 'CheckMethod',
  components: {

  },
  props: {
    formData: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      CHECK_TYPE,
      activeType: '',
      base64: '',
      certify_id: '',
      timerId: null
    }
  },
  computed: {
    checkComponent() {
      const { activeType } = this
      return checkComponentMap[activeType]
    },
    showCheckComponent() {
      const { activeType, certify_id } = this
      if (!activeType) {
        return false
      }
      if (activeType === CHECK_TYPE.ID) {
        return true
      }
      if (activeType === CHECK_TYPE.ALIPAY && certify_id) {
        return true
      }
      return false
    }
  },
  beforeDestroy() {
    this.stopPolling()
  },
  methods: {
    ...mapActions('user', ['getUserInfo']),
    setActiveType(type) {
      this.activeType = type
      if (CHECK_TYPE.ALIPAY === type) {
        this.aliyunVerify(type)
      }
    },
    aliyunVerify(type) {
      const loading = this.$loading({
        text: this.$t('globalVar.checkLoading')
      })
      const { formData } = this
      // eslint-disable-next-line
      const { captcha, ...args } = formData
      aliyunVerify({ ...args, type }).then(res => {
        const { base64, certify_id } = res.data
        this.base64 = base64
        this.certify_id = certify_id
        if (CHECK_TYPE.ALIPAY === type) {
          this.startPolling()
        } else {
          this.getUserInfo()
        }
      }).finally(() => {
        loading.close()
      })
    },
    handleBack() {
      this.$emit('updateStep', 1)
    },
    handlePreStep() {
      this.activeType = ''
    },
    startPolling() {
      this.timerId = setTimeout(() => {
        const { certify_id } = this
        aliyunResultInfor({ certify_id }).then(res => {
          this.$message.success(this.$t('globalVar.checkSuccess'))
          this.stopPolling()
          this.$emit('updateStep', 3)
          this.getUserInfo()
        }).catch(() => {
          this.startPolling()
        })
      }, 1000)
    },
    stopPolling() {
      const { timerId } = this
      timerId && clearTimeout(timerId)
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  margin-top: 40px;
}
.check-type-box {
  display: flex;
  align-items: center;
  justify-content: center;
  &-item {
    margin: 0 10px;
    border: 1px solid $border-color;
    border-radius: 4px;
    text-align: center;
    padding: 20px;
    width: 300px;
    height: 230px;
    cursor: pointer;
    &.active,
    &:hover {
      border-color: $color-warning;
      background-color: mix(#ffffff, $color-warning, 90%);
      .svg-icon {
        color: #00aaee;
      }
    }
  }
  .svg-icon {
    font-size: 50px;
    color: $color-info;
  }
  &-title {
    font-size: 20px;
    font-weight: bold;
    margin-top: 30px;
    color: $color-text-regular;
  }
  &-sub-title {
    color: $color-info;
    margin-top: 6px;
    font-size: 14px;
  }
  &-tips {
    margin-top: 20px;
  }
  .el-tag {
    margin-top: 5px;
  }
}
.footer {
  text-align: center;
  margin-top: 50px;
}
</style>
