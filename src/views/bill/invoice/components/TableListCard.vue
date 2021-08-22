<template>
  <ProCard>
    <template #header>
      <span>{{ $t('bill.invoice.rechargeLog.title') }}</span>
      <el-button
        plain
        icon="el-icon-refresh"
        @click="fetchData(true)"
      >{{ $t('globalVar.refresh') }}</el-button>
    </template>
    <ProTable
      ref="table"
      row-key="id"
      :column="tableColumn"
      :data="listData"
      @selection-change="handleSelectionChange"
    />
    <div class="total-box">
      <div class="select-total">
        <div class="money">{{ $t('bill.invoice.rechargeLog.selectedMoney') }}：{{ selectedMoney }}</div>
        <div class="count">{{ $t('bill.invoice.rechargeLog.selectedCount') }}：{{ selectedCount }}/ {{ listPage.total }}</div>
      </div>
      <el-button
        type="primary"
        :disabled="!companyInfo || !selectedCount"
        @click="handleAddInvoice"
      >{{ $t('bill.invoice.rechargeLog.invoicingBtn') }}</el-button>
    </div>
    <pagination
      v-bind="listPage"
      @pagination="paginationChange"
    />
  </ProCard>
</template>

<script>
import ProCard from '@/components/ProCard'
import { getRechargeLog, addInvoice } from '@/api/invoice'
import requestListMixins from '@/mixins/requestList'
export default {
  name: 'TableListCard',
  components: {
    ProCard
  },
  mixins: [requestListMixins],
  props: {
    companyInfo: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      tableColumn: [
        {
          type: 'selection',
          align: 'center',
          reserveSelection: true
        },
        {
          type: 'index',
          width: 60,
          label: this.$t('globalVar.index'),
          align: 'center'
        },
        {
          label: this.$t('globalVar.orderNo'),
          align: 'center',
          prop: 'id'
        },
        {
          label: this.$t('globalVar.createTime'),
          align: 'center',
          prop: 'createtime_text'
        },
        {
          label: this.$t('bill.invoice.rechargeLog.invoiceAmount'),
          align: 'center',
          prop: 'money',
          prepend: '$'
        }
        // {
        //   label: this.$t('globalVar.amountOfMoney'),
        //   align: 'center',
        //   prop: 'createtime_text'
        // },
        // {
        //   label: this.$t('globalVar.refund'),
        //   align: 'center'
        // }
      ],
      listFetchApi: getRechargeLog,
      selectedList: []
    }
  },
  computed: {
    selectedMoney() {
      const { selectedList } = this
      const total = selectedList.reduce((total, item) => {
        const { money } = item
        total += (Number(money) || 0)
        return total
      }, 0)
      return total.toFixed(2)
    },
    selectedCount() {
      const { selectedList } = this
      return selectedList.length
    }
  },
  created() {
    this.fetchData(true)
  },
  methods: {
    handleSelectionChange(val) {
      this.selectedList = val
    },
    handleAddInvoice() {
      const { companyInfo, selectedList } = this
      this.$confirm(companyInfo.company_name, this.$t('bill.invoice.rechargeLog.invoicingConfirmTitle')).then(res => {
        const loading = this.$loading({
          text: this.$t('bill.invoice.rechargeLog.addInvoiceLoading')
        })
        const ids = selectedList.map(item => item.id)
        addInvoice({ ids }).then(res => {
          this.$message.success(this.$t('bill.invoice.rechargeLog.addInvoiceSuccess'))
          this.fetchData(true)
          this.$refs.table.clearSelection()
        }).finally(() => {
          loading.close()
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">
.el-card {
  margin-top: 20px;
}
::v-deep .el-card {
  &__header {
    position: relative;
    .el-button {
      position: absolute;
      right: 50px;
      top: 46px;
      transform: translateY(-50%);
    }
  }
}
.total-box {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 30px;
  text-align: right;
  .money {
    color: $color-primary;
  }
  .count {
    color: $color-info;
  }
  .el-button {
    margin-left: 10px;
  }
}
</style>
