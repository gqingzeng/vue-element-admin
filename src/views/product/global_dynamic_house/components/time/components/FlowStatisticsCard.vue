<template>
  <ProCard :header="$t('globalVar.flowStatistics')">
    <div class="info-box">
      <i18n
        path="product.flowUsage"
        tag="div"
        class="flow-usage"
      >
        <span>{{ totalInfo.total }}</span>
        <span>{{ totalInfo.use }}</span>
      </i18n>
      <i18n
        path="product.residualFlow"
        tag="div"
        class="residual-flow"
      >
        <span>{{ totalInfo.base }}</span>
      </i18n>
    </div>
    <el-progress
      :percentage="percentage"
      status="warning"
      :show-text="false"
      :stroke-width="10"
    />
  </ProCard>
</template>

<script>
import ProCard from '@/components/ProCard'
export default {
  name: 'FlowStatisticsCard',
  components: {
    ProCard
  },
  props: {
    totalInfo: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
    }
  },
  computed: {
    percentage() {
      const { totalInfo } = this
      const { total = 0, use = 0 } = totalInfo
      if (Number(total) === 0 || Number(use) === 0) {
        return 0
      }
      return Number(use) / Number(total)
    }
  }
}
</script>

<style scoped lang="scss">
.el-card {
  margin-top: 20px;
}
.info-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  padding: 15px 0;
  .flow-usage {
    color: $color-info;
  }
  .residual-flow {
    color: $color-text-regular;

    & > span {
      font-weight: bold;
    }
  }
}
</style>
