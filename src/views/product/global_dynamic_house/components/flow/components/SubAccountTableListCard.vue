<template>
  <ProCard :header="$t('product.globalDynamicHouse.subAccountList')">
    <div class="operate-box">
      <div>
        <el-button plain>
          {{ $t('product.batchExportSubAccount') }}
        </el-button>
        <el-button plain>
          {{ $t('globalVar.batchRenew') }}
        </el-button>
      </div>
      <el-button
        plain
        icon="el-icon-refresh"
        @click="fetchData(true)"
      >{{ $t('globalVar.refresh') }}</el-button>
    </div>
    <ProTable
      ref="table"
      v-loading="loading"
      row-key="id"
      :column="tableColumn"
      :data="listData"
    />
    <pagination
      v-bind="listPage"
      @pagination="paginationChange"
    />
  </ProCard>
</template>

<script>
import ProCard from '@/components/ProCard'
import requestListMixins from '@/mixins/requestList'
export default {
  name: 'ProductTableListCard',
  components: {
    ProCard
  },
  mixins: [requestListMixins],
  data() {
    return {
      listData: [{}],
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
          label: this.$t('globalVar.createTime'),
          align: 'center'
        },
        {
          label: this.$t('globalVar.ip'),
          align: 'center'
        },
        {
          label: this.$t('globalVar.port'),
          align: 'center'
        },
        {
          label: this.$t('globalVar.account'),
          align: 'center'
        },
        {
          label: this.$t('globalVar.password'),
          align: 'center'
        },
        {
          label: this.$t('globalVar.country'),
          align: 'center'
        },
        {
          label: this.$t('globalVar.protocol'),
          align: 'center'
        },
        {
          label: this.$t('product.whetherFilter'),
          align: 'center'
        },
        {
          label: this.$t('globalVar.operate'),
          align: 'center',
          width: 180,
          btnList: [
            {
              text: this.$t('product.modifySubAccount'),
              type: 'text'
            },
            {
              text: this.$t('globalVar.delete'),
              type: 'text',
              className: 'color-danger'
            }
          ]
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.el-card {
  margin-top: 20px;
}
.operate-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
}
</style>
