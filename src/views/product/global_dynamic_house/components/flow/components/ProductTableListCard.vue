<template>
  <ProCard :header="$t('product.purchasedProduct')">
    <ProTable
      ref="table"
      v-loading="loading"
      :column="tableColumn"
      :data="listData"
    />
    <pagination
      v-bind="listPage"
      @pagination="paginationChange"
    />
    <RenewDialog ref="renewDialogRef" />
  </ProCard>
</template>

<script>
import ProCard from '@/components/ProCard'
import requestListMixins from '@/mixins/requestList'
import RenewDialog from './RenewDialog'
import { getUserSetMeal } from '@/api/device'

export default {
  name: 'ProductTableListCard',
  components: {
    ProCard,
    RenewDialog
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
      listQuery: {
        status: this.status,
        type: this.type
      },
      listFetchApi: getUserSetMeal,
      tableColumn: [
        {
          type: 'index',
          width: 60,
          label: this.$t('globalVar.index'),
          align: 'center'
        },
        {
          label: this.$t('product.productName'),
          align: 'center',
          prop: 'name'
        },
        {
          label: this.$t('product.purchaseTime'),
          align: 'center',
          prop: 'createtime_text'
        },
        {
          label: this.$t('product.generateSubAccountNum'),
          align: 'center',
          empty: this.$t('globalVar.infinite')
        },
        {
          label: this.$t('product.subAccountThread'),
          align: 'center',
          empty: this.$t('globalVar.infinite')
        },
        {
          label: this.$t('product.expirationTime'),
          align: 'center',
          empty: this.$t('globalVar.infinite')
        },
        {
          label: this.$t('globalVar.operate'),
          align: 'center',
          width: 100,
          btnList: [
            {
              text: this.$t('globalVar.renew'),
              type: 'text',
              onClick: this.openRenewDialog
            }
          ]
        }
      ]
    }
  },
  created() {
    this.fetchData(true)
  },
  methods: {
    openRenewDialog() {
      this.$refs.renewDialogRef.dialogVisible = true
    }
  }
}
</script>

<style scoped lang="scss">
.el-card {
  margin-top: 20px;
}
</style>
