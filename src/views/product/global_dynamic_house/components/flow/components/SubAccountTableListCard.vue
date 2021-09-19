<template>
  <ProCard :header="$t('product.globalDynamicHouse.subAccountList')">
    <div class="operate-box">
      <div>
        <el-button plain>
          {{ $t('product.batchExportSubAccount') }}
        </el-button>
        <el-button plain>
          {{ $t('globalVar.batchDelete') }}
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
import { getAccountList } from '@/api/device'

export default {
  name: 'ProductTableListCard',
  components: {
    ProCard
  },
  mixins: [requestListMixins],
  props: {
    type: {
      type: Number,
      required: true
    },
    status: {
      type: Number,
      required: true
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
          label: this.$t('globalVar.createTime'),
          align: 'center',
          prop: 'createTime'
        },
        {
          label: this.$t('globalVar.ip'),
          align: 'center',
          prop: 'ip'
        },
        {
          label: this.$t('globalVar.port'),
          align: 'center',
          prop: 'port'
        },
        {
          label: this.$t('globalVar.account'),
          align: 'center',
          prop: 'username'
        },
        {
          label: this.$t('globalVar.password'),
          align: 'center',
          prop: 'password'
        },
        {
          label: this.$t('globalVar.country'),
          align: 'center',
          prop: 'country'
        },
        {
          label: this.$t('globalVar.protocol'),
          align: 'center',
          prop: 'agree'
        },
        {
          label: this.$t('globalVar.isDiff'),
          align: 'center',
          prop: 'is_diff'
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
      ],
      listQuery: {
        type: this.type
      },
      listFetchApi: getAccountList
    }
  },
  created() {
    this.fetchData(true)
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
