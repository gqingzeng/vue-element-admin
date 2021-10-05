<template>
  <ProCard :header="$t('product.globalStaticHouse.subAccountList')">
    <div class="operate-box">
      <div>
        <el-button
          plain
          :disabled="!selectedList.length"
          @click="handleDownload"
        >
          {{ $t('product.batchExportSubAccount') }}
        </el-button>
        <el-button
          plain
          :disabled="!selectedList.length"
          @click="deleteList"
        >
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
      @selection-change="handleTableSelectionChange"
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
import {
  getAccountTimeList,
  accountDelete,
  deleteList
} from '@/api/device'

export default {
  name: 'ProductTableListCard',
  components: {
    ProCard
  },
  mixins: [requestListMixins],
  inject: ['productViews'],
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
              className: 'color-danger',
              onClick: this.accountDelete
            }
          ]
        }
      ],
      listQuery: {
        type: this.type
      },
      listFetchApi: getAccountTimeList,
      selectedList: []
    }
  },
  created() {
    this.fetchData(true)
    this.productViews.$on('generateProxySuccess', this.fetchData)
  },
  beforeDestroy() {
    this.productViews.$off('generateProxySuccess', this.fetchData)
  },
  methods: {
    accountDelete({ row }) {
      this.$confirm(this.$t('globalVar.confirmDelete'), this.$t('globalVar.tips')).then(() => {
        const { type, status } = this
        const { id } = row
        this.loading = true
        accountDelete({ type, status, id }).then(res => {
          this.$message.success(this.$t('globalVar.deleteSuccess'))
          this.fetchData()
        }).finally(() => {
          this.loading = false
        })
      })
    },
    handleTableSelectionChange(val) {
      this.selectedList = val
    },
    deleteList() {
      this.loading = true
      const { selectedList } = this
      const ids = selectedList.map(item => item.id).join(',')
      deleteList(ids).then(res => {
        this.fetchData(true)
        this.$message.success(this.$t('globalVar.deleteSuccess'))
      }).finally(() => {
        this.loading = false
      })
    },
    handleDownload() {
      this.downloadLoading = true
      import('@/vendor/Export2Excel').then(excel => {
        const tHeader = [
          this.$t('globalVar.createTime'),
          this.$t('globalVar.ip'),
          this.$t('globalVar.port'),
          this.$t('globalVar.account'),
          this.$t('globalVar.password'),
          this.$t('globalVar.country'),
          this.$t('globalVar.protocol'),
          this.$t('globalVar.isDiff')
        ]
        const filterVal = [
          'createTime',
          'ip',
          'port',
          'username',
          'password',
          'country',
          'agree',
          'is_diff'
        ]
        const data = this.formatJson(filterVal, this.selectedList)
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: this.$t('product.globalDynamicHouse.subAccountList')
        })
        this.downloadLoading = false
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        return v[j]
      }))
    }
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
