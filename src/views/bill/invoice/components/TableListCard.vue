<template>
  <ProCard>
    <template #header>
      <span>{{ $t('bill.invoice.rechargeLog.title') }}</span>
      <el-button plain @click="fetchData(true)">{{ $t('globalVar.refresh') }}</el-button>
    </template>
    <ProTable :column="tableColumn" :data="listData" />
    <pagination
      v-bind="listPage"
      @pagination="paginationChange"
    />
  </ProCard>
</template>

<script>
import ProCard from '@/components/ProCard'
import { getRechargeLog } from '@/api/invoice'
import requestListMixins from '@/mixins/requestList'
export default {
  name: 'TableListCard',
  components: {
    ProCard
  },
  mixins: [requestListMixins],
  data() {
    return {
      tableColumn: [
        {
          type: 'selection',
          align: 'center'
        },
        {
          type: 'index',
          width: 60,
          label: this.$t('globalVar.index'),
          align: 'center'
        },
        {
          label: this.$t('globalVar.orderNo'),
          align: 'center'
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
        },
        {
          label: this.$t('globalVar.amountOfMoney'),
          align: 'center',
          prop: 'createtime_text'
        },
        {
          label: this.$t('globalVar.refund'),
          align: 'center'
        }
      ],
      listFetchApi: getRechargeLog
    }
  },
  created() {
    this.fetchData(true)
  },
  methods: {

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
</style>
