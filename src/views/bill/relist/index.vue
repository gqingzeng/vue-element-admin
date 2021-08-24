<template>
  <div class="app-container">
    <ProCard :header="$t('bill.relist.title')">
      <el-button plain icon="el-icon-refresh" @click="fetchData(true)">{{ $t('globalVar.refresh') }}</el-button>
      <ProTable :column="tableColumn" :data="listData" />
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
import { getUserRelist } from '@/api/user'
export default {
  name: 'BillRelistPage',
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
          label: this.$t('bill.rech.rechType'),
          align: 'center'
        },
        {
          label: this.$t('globalVar.goodsName'),
          align: 'center'
        },
        {
          label: this.$t('bill.relist.rechAmount'),
          align: 'center',
          prop: 'money',
          repend: '￥'
        },
        {
          label: this.$t('bill.relist.rechTime'),
          align: 'center',
          prop: 'createtime'
        }
      ],
      listFetchApi: getUserRelist
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
