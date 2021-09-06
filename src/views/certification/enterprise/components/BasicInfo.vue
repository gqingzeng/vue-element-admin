<template>
  <el-form
    ref="formRule"
    :model="formData"
    :rules="formRules"
    label-position="top"
  >
    <el-form-item
      prop="name"
      :label="$t('certification.enterprise.basicInfo.organizationName')"
    >
      <el-input
        v-model="formData.name"
        :placeholder="$t('certification.enterprise.basicInfo.organizationNamePlaceholder')"
      />
    </el-form-item>
    <el-form-item
      prop="idNumber"
      :label="$t('certification.enterprise.basicInfo.organizationNo')"
    >
      <el-input
        v-model="formData.idNumber"
        :placeholder="$t('certification.enterprise.basicInfo.organizationNoPlaceholder')"
      />
    </el-form-item>
    <el-form-item
      prop="orgLegalName"
      :label="$t('certification.enterprise.basicInfo.organizationLegalName')"
    >
      <el-input
        v-model="formData.orgLegalName"
        :placeholder="$t('certification.enterprise.basicInfo.organizationLegalNamePlaceholder')"
      />
    </el-form-item>
    <el-form-item
      prop="orgLegalIdNumber"
      :label="$t('certification.enterprise.basicInfo.organizationLegalNo')"
    >
      <el-input
        v-model="formData.orgLegalIdNumber"
        :placeholder="$t('certification.enterprise.basicInfo.organizationLegalNoPlaceholder')"
      />
    </el-form-item>
    <el-button
      class="submit-btn"
      type="primary"
      @click="handleSubmit"
    >{{ $t('certification.enterprise.basicInfo.submitBtnText') }}</el-button>
  </el-form>
</template>

<script>
import { aliyunVerifyOwner } from '@/api/aliyun'
import openWindow from '@/utils/open-window'
export default {
  name: 'BasicInfo',
  components: {

  },
  data() {
    return {
      formData: {
        name: '',
        idNumber: '',
        orgLegalName: '',
        orgLegalIdNumber: ''
      },
      formRules: {
        name: [
          { required: true, message: this.$t('certification.enterprise.basicInfo.organizationNamePlaceholder'), trigger: 'blur' }
        ],
        idNumber: [
          { required: true, message: this.$t('certification.enterprise.basicInfo.organizationNoPlaceholder'), trigger: 'blur' }
        ],
        orgLegalName: [
          { required: true, message: this.$t('certification.enterprise.basicInfo.organizationLegalNamePlaceholder'), trigger: 'blur' }
        ],
        orgLegalIdNumber: [
          { required: true, message: this.$t('certification.enterprise.basicInfo.organizationLegalNoPlaceholder'), trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit() {
      this.$refs.formRule.validate((valid) => {
        if (valid) {
          const { formData } = this
          const loading = this.$loading({
            text: this.$t('globalVar.checkLoading')
          })
          aliyunVerifyOwner(formData).then(res => {
            const { data } = res
            const { url } = data
            openWindow(url, this.$t('certification.enterprise.title'), 600, 600)
          }).finally(() => {
            loading.close()
          })
        }
      })
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
