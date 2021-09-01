<template>
  <div class="app-container">
    <ProCard :header="$t('bill.consume.title')">
      <el-button plain icon="el-icon-refresh" @click="fetchData(true)">{{ $t('globalVar.refresh') }}</el-button>
      <ProTable v-loading="loading" :column="tableColumn" :data="listData" />
      <pagination
        v-bind="listPage"
        @pagination="paginationChange"
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
          label: this.$t('globalVar.goodsName'),
          align: 'center'
        },
        {
          label: this.$t('bill.consume.consumeAmount'),
          align: 'center',
          prop: 'createtime_text'
        },
        {
          label: this.$t('bill.consume.consumeTime'),
          align: 'center'
        },
        {
          label: this.$t('globalVar.orderStatus'),
          align: 'center'
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
.el-table {
  margin-top: 20px;
}
</style>
