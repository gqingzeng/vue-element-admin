<template>
  <div
    v-loading="loading"
    class="info-list"
  >
    <div class="info-item">
      <div class="info-label">
        {{ $t('extension.summary.monthExtensionTotal') }}
      </div>
      <div class="info-content color-regular">
        <span>￥</span>{{ extensionTotal.month }}
      </div>
      <div class="info-content-tips">
        {{ $t('extension.summary.monthExtensionTotalTips') }}
      </div>
    </div>
    <div class="info-item">
      <div class="info-label">
        {{ $t('extension.summary.weekExtensionTotal') }}
      </div>
      <div class="info-content color-regular">
        <span>￥</span>{{ extensionTotal.week }}
      </div>
      <div class="info-content-tips">
        {{ $t('extension.summary.weekExtensionTotalTips') }}
      </div>
    </div>
    <div class="info-item">
      <div class="info-label">
        {{ $t('extension.summary.chainTotal') }}
      </div>
      <div class="info-content color-danger">
        {{ extensionTotal.chain }}%
      </div>
      <div class="info-content-tips">
        {{ $t('extension.summary.chainTotalTips') }}
      </div>
    </div>
  </div>
</template>

<script>
import { getExtensionTotal } from '@/api/user_extension'
export default {
  name: 'ExtensionInfo',
  components: {

  },
  data() {
    return {
      loading: false,
      extensionTotal: {}
    }
  },
  created() {
    this.getExtensionTotal()
  },
  methods: {
    getExtensionTotal() {
      this.loading = true
      getExtensionTotal().then(res => {
        this.extensionTotal = res.data
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>

<style scoped lang="scss">
.info {
  &-list {
    flex: 1;
    display: flex;
  }
  &-item {
    flex: 1;
    text-align: center;
  }
  &-label {
    color: $color-info;
    line-height: 21px;
  }
  &-content {
    margin-top: 25px;
    font-size: 30px;
    height: 36px;
    line-height: 36px;
    font-weight: bold;
    .el-button {
      display: block;
      margin: 0 auto;
    }
    & > span {
      font-size: 20px;
    }
    &-tips {
      color: $color-secondary;
      margin-top: 24px;
    }
  }
}
</style>
