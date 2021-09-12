<template>
  <ProCard :header="$t('product.purchasedProduct')">
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
    <RenewDialog ref="renewDialogRef" />
  </ProCard>
</template>

<script>
import ProCard from '@/components/ProCard'
import requestListMixins from '@/mixins/requestList'
import RenewDialog from './RenewDialog'
export default {
  name: 'ProductTableListCard',
  components: {
    ProCard,
    RenewDialog
  },
  mixins: [requestListMixins],
  data() {
    return {
      listData: [{}],
      tableColumn: [
        {
          type: 'index',
          width: 60,
          label: this.$t('globalVar.index'),
          align: 'center'
        },
        {
          label: this.$t('product.productName'),
          align: 'center'
        },
        {
          label: this.$t('product.purchaseTime'),
          align: 'center'
        },
        {
          label: this.$t('product.generateSubAccountNum'),
          align: 'center'
        },
        {
          label: this.$t('product.subAccountThread'),
          align: 'center'
        },
        {
          label: this.$t('product.expirationTime'),
          align: 'center'
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
