<template>
  <div>
    <ProCard>
      <el-alert
        :closable="false"
        type="primary"
        :title="`${$t('extension.withdraw.withdrawTotalTips')}`"
      />
      <div class="withdraw-type-title">
        {{ $t('extension.withdraw.withdrawAlipay') }}
      </div>
      <el-form
        ref="formRule"
        :model="formData"
        :rules="formRules"
        label-position="top"
        inline
      >
        <el-form-item :label="$t('extension.withdraw.alipayNo')" prop="alipay_no">
          <el-input v-model="formData.alipay_no" :placeholder="$t('extension.withdraw.alipayNoPlaceholder')" />
          <div class="tips"><i class="el-icon-warning" />{{ $t('extension.withdraw.withdrawAlipayTips') }}</div>
        </el-form-item>
        <el-form-item :label="$t('extension.withdraw.alipayName')" prop="alipay_name">
          <el-input v-model="formData.alipay_no" :placeholder="$t('extension.withdraw.alipayNamePlaceholder')" />
        </el-form-item>
        <el-button type="primary" @click="handleWithdraw('1')">
          <svg-icon icon-class="a-ziyuan1" />
          {{ $t('extension.withdraw.AlipayBtnText') }}
        </el-button>
      </el-form>
      <div class="withdraw-type-title">
        {{ $t('extension.withdraw.withdrawBalance') }}
      </div>
      <el-button type="primary" class="balance-btn" @click="handleWithdraw('0')">
        {{ $t('extension.withdraw.withdrawBalance') }}
      </el-button>
      <div class="tips">{{ $t('extension.withdraw.withdrawBalanceTips') }}</div>
    </ProCard>
    <TableListCard />
  </div>
</template>

<script>
import ProCard from '@/components/ProCard'
import TableListCard from './TableListCard'
import { userWithday } from '@/api/user_extension'
import { WITHDRAW_TYPE } from '@/constant/withdraw'
export default {
  name: 'Withdraw',
  components: {
    ProCard,
    TableListCard
  },
  props: {
    extensionInfo: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      WITHDRAW_TYPE,
      formData: {
        alipayNo: '',
        alipayName: ''
      },
      formRules: {
        alipay_no: [
          { required: true, message: this.$t('extension.withdraw.alipayNoRequiredTips'), trigger: 'blur' }
        ],
        alipay_name: [
          { required: true, message: this.$t('extension.withdraw.alipayNameRequiredTips'), trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    async handleWithdraw(type) {
      if (type === '1') {
        const valid = await this.$refs.formRule.validate().then(() => true).catch(() => false)
        if (!valid) {
          return
        }
      }
      const loading = this.$loading({
        text: this.$t('globalVar.auditingLoading')
      })
      const { formData } = this
      const params = {
        type,
        ...formData
      }
      userWithday(params).then(res => {
        this.$message.success(this.$t('globalVar.auditingSuccess'))
      }).finally(() => {
        loading.close()
      })
    }
  }
}
</script>

<style scoped lang="scss">
.withdraw-type-title {
  color: $color-primary;
  font-weight: bold;
  margin-top: 30px;
}
.el-form {
  margin-top: 10px;
  .el-input {
    width: 300px;
  }
  .el-button {
    margin-top: 40px;
  }
}
.tips {
  color:  $color-warning;
  font-size: 12px;
  margin-top: 10px;
  line-height: 24px;
  white-space: pre-line;
}
.balance-btn {
  margin-top: 26px;
}
</style>
