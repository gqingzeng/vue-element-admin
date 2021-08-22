<template>
  <ProCard :header="$t('extension.withdraw.withdrawLog')">
    <el-button plain icon="el-icon-refresh" @click="fetchData(true)">{{ $t('globalVar.refresh') }}</el-button>
    <ProTable :column="tableColumn" :data="listData" />
    <pagination
      v-bind="listPage"
      @pagination="paginationChange"
    />
  </ProCard>
</template>

<script>
import requestListMixins from '@/mixins/requestList'
import ProCard from '@/components/ProCard'
import { getWithdayList } from '@/api/user_extension'
import { WITHDRAW_TYPE, WITHDRAW_STATUS } from '@/constant/withdraw'
export default {
  name: 'BillConsumePage',
  components: {
    ProCard
  },
  mixins: [requestListMixins],
  data() {
    return {
      tableColumn: [
        {
          type: 'index',
          width: 60,
          label: this.$t('globalVar.index'),
          align: 'center'
        },
        {
          label: this.$t('extension.withdraw.withdrawTime'),
          align: 'center',
          prop: 'addtime_text'
        },
        {
          label: this.$t('globalVar.amountOfMoney'),
          align: 'center',
          prop: 'money'
        },
        {
          label: this.$t('extension.withdraw.paymentTime'),
          align: 'center',
          prop: 'updatetime_text',
          empty: '--'
        },
        {
          label: this.$t('extension.withdraw.withdrawType'),
          align: 'center',
          prop: 'whth_type',
          formatter: (row) => {
            const { whth_type } = row
            return this.$t(`globalVar.${WITHDRAW_TYPE[whth_type]}`)
          }
        },
        {
          label: this.$t('globalVar.status'),
          align: 'center',
          prop: 'status',
          formatter: (row) => {
            const { whth_type } = row
            return this.$t(`globalVar.${WITHDRAW_STATUS[whth_type]}`)
          }
        }
      ],
      listFetchApi: getWithdayList
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
</style>
