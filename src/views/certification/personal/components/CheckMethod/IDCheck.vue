<template>
  <div>
    <el-alert
      type="primary"
      :title="$t('certification.personal.checkMethod.idImageCheckCautions')"
      :closable="false"
      :description="$t('certification.personal.checkMethod.idImageCheckCautionsTips')"
    />
    <div class="upload-wrap">
      <div class="upload-wrap-item">
        <div class="color-regular title">{{ $t('certification.personal.checkMethod.idCardNoHandPlaceholder') }}</div>
        <div class="color-danger sub-title">{{ $t('certification.personal.checkMethod.uploadImageTips') }}</div>
        <UploadImage
          class="upload-box"
          :size="tenM"
          :on-success="(...args) => uploadSuccess('idCardNoHand', ...args)"
        >
          <el-image
            v-if="formData.idCardNoHand"
            :src="formData.idCardNoHand"
            fit="contain"
          />
          <i
            v-else
            class="el-icon-plus"
          />
        </UploadImage>
      </div>
      <div class="upload-wrap-item">
        <div class="color-regular">{{ $t('certification.personal.checkMethod.idCardNoPositivePlaceholder') }}</div>
        <div class="color-danger sub-title">{{ $t('certification.personal.checkMethod.uploadImageTips') }}</div>
        <UploadImage
          class="upload-box"
          :size="tenM"
          :on-success="(...args) => uploadSuccess('idCardNoPositive', ...args)"
        >
          <el-image
            v-if="formData.idCardNoPositive"
            :src="formData.idCardNoPositive"
            fit="contain"
          />
          <i
            v-else
            class="el-icon-plus"
          />
        </UploadImage>
      </div>
      <div class="upload-wrap-item">
        <div class="color-regular">{{ $t('certification.personal.checkMethod.idCardNoBackPlaceholder') }}</div>
        <div class="color-danger sub-title">{{ $t('certification.personal.checkMethod.uploadImageTips') }}</div>
        <UploadImage
          class="upload-box"
          :size="tenM"
          :on-success="(...args) => uploadSuccess('idCardNoBack', ...args)"
        >
          <el-image
            v-if="formData.idCardNoBack"
            :src="formData.idCardNoBack"
            fit="contain"
          />
          <i
            v-else
            class="el-icon-plus"
          />
        </UploadImage>
      </div>
    </div>
    <div class="footer">
      <el-button @click="handlePreStep">{{ $t('globalVar.preStep') }}</el-button>
      <el-button
        class="submit-btn"
        type="primary"
        @click="handleSubmit"
      >{{ $t('certification.personal.submitBtnText') }}</el-button>
    </div>
  </div>
</template>

<script>
import UploadImage from '@/components/UploadImage'
import { CHECK_TYPE } from '@/constant/certification'
export default {
  name: 'IDCheck',
  components: {
    UploadImage
  },
  data() {
    return {
      tenM: 10 * 1024 * 1024,
      formData: {
        idCardNoPositive: '',
        idCardNoBack: '',
        idCardNoHand: ''
      }
    }
  },
  methods: {
    uploadSuccess(key, url) {
      this.formData[key] = url
    },
    handlePreStep() {
      this.$emit('back')
    },
    handleSubmit() {
      const { formData } = this
      const notFillKey = Object.keys(formData).find(key => !formData[key])
      if (notFillKey) {
        this.$message.error(this.$t(`certification.personal.checkMethod.${notFillKey}Placeholder`))
        return
      }
      this.$emit('submit', CHECK_TYPE.ID, formData)
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep .el-alert__description {
  white-space: pre-line;
}
.upload-wrap {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  &-item {
    font-size: 14px;
    text-align: center;
    .sub-title {
      margin: 8px 0;
    }
  }

  .upload-box {
    margin: 0 10px;
    border: 1px dashed $border-color;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 342.4px;
    height: 216px;
    text-align: center;
    line-height: 216px;
    &:hover {
      border-color: $color-primary;
    }
  }

  .el-icon-plus {
    display: block;
    font-size: 50px;
    color: #8c939d;
    height: 100%;
    width: 100%;
  }
  .el-image {
    display: block;
    height: 100%;
    width: 100%;
  }
}
.footer {
  text-align: center;
  margin-top: 50px;
}
</style>
