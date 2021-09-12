<template>
  <ProCard :header="$t('globalVar.flowStatistics')">
    <div class="info-box">
      <i18n
        path="product.flowUsage"
        tag="div"
        class="flow-usage"
      >
        <span>1</span>
        <span>2</span>
      </i18n>
      <i18n
        path="product.residualFlow"
        tag="div"
        class="residual-flow"
      >
        <span>1</span>
      </i18n>
    </div>
    <el-progress
      :percentage="50"
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
  data() {
    return {

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

    &> span {
      font-weight: bold;
    }
  }
}
</style>
