<template>
  <div class="info-list">
    <div class="info-item">
      <div class="info-label">
        {{ $t('globalVar.status') }}
      </div>
      <div class="info-content">
        <el-button
          size="small"
          type="primary"
          round
        > {{ $t(`extension.status.${EXTENSION_STATUS[userInfo.extension_status]}`) }} </el-button>
      </div>
    </div>
    <div class="info-item">
      <div class="info-label">
        {{ $t('globalVar.percentage') }}
      </div>
      <div class="info-content color-warning">
        {{ extensionInfo.option }}%
      </div>
    </div>
    <div class="info-item">
      <div class="info-label">
        {{ $t('extension.summary.extractable') }}
      </div>
      <div class="info-content color-primary">
        <span>￥</span>{{ extensionInfo.extractable }}
      </div>
    </div>
    <div class="info-item">
      <div class="info-label">
        {{ $t('extension.summary.unsettled') }}
      </div>
      <div class="info-content color-primary">
        <span>￥</span>{{ extensionInfo.unsettled }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { EXTENSION_STATUS } from '@/constant/extension'
export default {
  name: 'ExtensionInfo',
  components: {

  },
  props: {
    extensionInfo: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      EXTENSION_STATUS
    }
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  methods: {

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
  }
}
</style>
