<template>
  <el-dialog
    :title="dialogTitle"
    :visible.sync="dialogVisible"
    top="100px"
    width="600px"
    @open="handleDialogOpen"
  >
    <el-form
      ref="formRule"
      :model="formData"
      :rules="formRules"
      label-width="120px"
    >
      <el-form-item
        required
        prop="company_name"
        :label="$t('bill.invoice.company.editDialog.companyNameLabel')"
      >
        <el-input
          v-model="formData.company_name"
          :placeholder="$t('bill.invoice.company.editDialog.companyNamePlaceholder')"
        />
      </el-form-item>
      <el-form-item
        required
        prop="identifier"
        :label="$t('bill.invoice.company.editDialog.identifierLabel')"
      >
        <el-input
          v-model="formData.identifier"
          :placeholder="$t('bill.invoice.company.editDialog.identifierPlaceholder')"
        />
      </el-form-item>
      <el-form-item
        required
        prop="address"
        :label="$t('bill.invoice.company.editDialog.addressLabel')"
      >
        <el-input
          v-model="formData.address"
          :placeholder="$t('bill.invoice.company.editDialog.addressPlaceholder')"
        />
      </el-form-item>
      <el-form-item
        required
        prop="phone"
        :label="$t('bill.invoice.company.editDialog.phoneLabel')"
      >
        <el-input
          v-model="formData.phone"
          :placeholder="$t('bill.invoice.company.editDialog.phonePlaceholder')"
        />
      </el-form-item>
      <el-form-item
        required
        prop="bank"
        :label="$t('bill.invoice.company.editDialog.bankLabel')"
      >
        <el-input
          v-model="formData.bank"
          :placeholder="$t('bill.invoice.company.editDialog.bankPlaceholder')"
        />
      </el-form-item>
      <el-form-item
        required
        prop="account"
        :label="$t('bill.invoice.company.editDialog.accountLabel')"
      >
        <el-input
          v-model="formData.account"
          :placeholder="$t('bill.invoice.company.editDialog.accountPlaceholder')"
        />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="handleCancel">{{ $t('globalVar.cancel') }}</el-button>
      <el-button type="primary" @click="handleConfirm">{{ $t('globalVar.confirm') }}</el-button>
    </template>
  </el-dialog>
</template>

<script>
import { updateCompanyInfor, addCompanyInfor } from '@/api/invoice'
export default {
  name: 'EditCompanyInfoDialog',
  components: {

  },
  props: {
    companyInfo: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      dialogVisible: false,
      formData: {
        id: '',
        company_name: '',
        identifier: '',
        address: '',
        phone: '',
        bank: '',
        account: ''
      },
      formRules: {
        company_name: [
          { required: true, message: this.$t('bill.invoice.company.editDialog.companyNamePlaceholder'), trigger: 'blur' }
        ],
        identifier: [
          { required: true, message: this.$t('bill.invoice.company.editDialog.identifierPlaceholder'), trigger: 'blur' }
        ],
        address: [
          { required: true, message: this.$t('bill.invoice.company.editDialog.addressPlaceholder'), trigger: 'blur' }
        ],
        phone: [
          { required: true, message: this.$t('bill.invoice.company.editDialog.phonePlaceholder'), trigger: 'blur' }
        ],
        bank: [
          { required: true, message: this.$t('bill.invoice.company.editDialog.bankPlaceholder'), trigger: 'blur' }
        ],
        account: [
          { required: true, message: this.$t('bill.invoice.company.editDialog.accountPlaceholder'), trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    dialogTitle() {
      const { formData } = this
      const { id } = formData
      const titleKey = id ? 'modifyTitle' : 'createTitle'
      return this.$t(`bill.invoice.company.editDialog.${titleKey}`)
    }
  },
  methods: {
    handleDialogOpen() {
      const { formData, companyInfo } = this
      this.formData = Object.keys(formData).reduce((obj, key) => {
        obj[key] = companyInfo[key]
        return obj
      }, {})
    },
    handleCancel() {
      this.dialogVisible = false
    },
    handleConfirm() {
      this.$refs.formRule.validate(valid => {
        if (valid) {
          const { formData } = this
          const { id } = formData
          const loading = this.$loading({
            text: this.$t(`globalVar.${id ? 'modifyLoading' : 'saveLoading'}`)
          })
          const fetchApi = id ? updateCompanyInfor : addCompanyInfor
          fetchApi(formData).then(res => {
            this.$message.success(this.$t(`globalVar.${id ? 'modifySuccess' : 'saveSuccess'}`))
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
.el-button {
  width: 40%;
}
</style>
