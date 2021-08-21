<template>
  <ProCard :header="$t('bill.invoice.explain.title')">
    <div class="container">
      <div class="tips-list">
        <div class="tips-title">
          {{ $t('bill.invoice.explain.cycle') }}
        </div>
        <div class="tips-desc">
          {{ $t('bill.invoice.explain.cycleDesc') }}
        </div>
      </div>
      <div class="tips-list">
        <div class="tips-title">
          {{ $t('bill.invoice.explain.type') }}
        </div>
        <div class="tips-desc">
          {{ $t('bill.invoice.explain.typeDesc') }}
        </div>
      </div>
      <div class="tips-list">
        <div class="tips-title">
          {{ $t('bill.invoice.explain.note') }}
        </div>
        <div class="tips-desc">
          {{ $t('bill.invoice.explain.noteDesc') }}
        </div>
      </div>
    </div>
  </ProCard>
</template>

<script>
import ProCard from '@/components/ProCard'
export default {
  name: 'ExplainCard',
  components: {
    ProCard
  },
  data() {
    return {
      ProCard
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.el-card {
  height: 100%;
  display: flex;
  flex-direction: column;
}
::v-deep .el-card__body{
  flex: 1;
  box-sizing: border-box;
}
.container {
  background-color: #eeeeee;
  padding: 16px;
  box-sizing: border-box;
  height: 100%;
  .tips {
    &-list {
      display: flex;
      & + .tips-list {
        margin-top: 16px;
      }
    }
    &-title {
      color: $color-primary;
      flex-shrink: 0;
      width: 104px;
    }
    &-desc {
      color: $color-text-regular;
    }
  }
}
</style>
