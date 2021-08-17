<template>
  <div>
    <ProCard :header="$t('bill.consume.title')">
      <ProTable :column="tableColumn" />
      <pagination
        :total="listPage.total"
        :page.sync="listPage.page"
        :limit.sync="listPage.pageSize"
        @pagination="fetchData"
      />
    </ProCard>
  </div>
</template>

<script>
import requestListMixins from '@/mixins/requestList'
import ProCard from '@/components/ProCard'
import { getUserConsume } from '@/api/user'
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
          type: 'selection'
        },
        {
          type: 'index',
          width: 100,
          label: this.$t('globalVar.index')
        },
        {
          label: '订单号'
        },
        {
          label: '商品名称'
        },
        {
          label: '充值金额'
        },
        {
          label: '充值时间'
        },
        {
          label: '订单状态'
        }
      ],
      listFetchApi: getUserConsume
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
</style>
