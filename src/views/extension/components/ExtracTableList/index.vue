<template>
  <ProCard :header="$t('extension.withdraw.withdrawLog')">
    <el-button plain @click="fetchData(true)">{{ $t('globalVar.refresh') }}</el-button>
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
import { getExtractableList } from '@/api/user_extension'

const statusMap = {
  settlementLog: '0',
  unsettled: '1',
  invalidLog: '2'
}

export default {
  name: 'ExtracTableList',
  components: {
    ProCard
  },
  mixins: [requestListMixins],
  props: {
    activeName: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      listQuery: {
        status: statusMap[this.activeName]
      },
      tableColumn: [
        {
          type: 'index',
          width: 60,
          label: this.$t('globalVar.index'),
          align: 'center'
        },
        {
          label: this.$t('globalVar.time'),
          align: 'center',
          prop: 'addtime_text'
        },
        {
          label: this.$t('globalVar.amountOfMoney'),
          align: 'center',
          prop: 'money'
        },
        {
          label: this.$t('globalVar.balance'),
          align: 'center',
          prop: 'updatetime_text',
          empty: '--'
        }
      ],
      listFetchApi: getExtractableList
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
.el-table {
  margin-top: 20px;
}
</style>
