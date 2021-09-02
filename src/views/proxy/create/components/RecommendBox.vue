<template>
  <ProCard :header="$t('proxy.create.recommend.title')">
    <div class="field-item">
      <div class="field-item-label">
        {{ $t('proxy.create.recommend.proxyType') }}：
      </div>
      <div class="field-item-content">
        <div class="select-list">
          <div
            v-for="item in proxyTypeList"
            :key="item"
            class="select-item"
            :class="{
              active: formData.proxyType === item
            }"
            @click="handleSetFormData(item,'proxyType')"
          >{{ item }}</div>
        </div>
      </div>
    </div>
    <div class="field-item">
      <div class="field-item-label">
        {{ $t('proxy.create.recommend.chargingType') }}：
      </div>
      <div class="field-item-content">
        <div class="select-list">
          <div
            v-for="item in chargingTypeList"
            :key="item"
            class="select-item"
            :class="{
              active: formData.chargingType === item
            }"
            @click="handleSetFormData(item,'chargingType')"
          >{{ item }}</div>
        </div>
      </div>
    </div>
    <div class="package-list">
      <div class="package-item">
        xxx
      </div>
    </div>
    <div class="field-item other-recommend">
      <div class="field-item-label">{{ $t('proxy.create.recommend.otherRecommendTitle') }}：</div>
      <div class="field-item-content">
        <el-button v-for="item in chargingTypeList" :key="item" type="primary">{{ item }}</el-button>
      </div>
    </div>
  </ProCard>
</template>

<script>
import ProCard from '@/components/ProCard'
const proxyTypeList = [
  '全球动态住宅',
  '全球静态住宅',
  '全球数据中心'
]
const chargingTypeList = [
  '按时间计费',
  '按流量计费',
  '按IP数计费'
]
export default {
  components: {
    ProCard
  },
  data() {
    return {
      proxyTypeList,
      chargingTypeList,
      formData: {
        proxyType: '全球动态住宅',
        chargingType: '按时间计费'
      }
    }
  },
  methods: {
    handleSetFormData(val, key) {
      this.formData[key] = val
    }
  }
}
</script>

<style scoped lang="scss">
.el-card {
  margin-top: 20px;
}
::v-deep .el-card__body {
  padding-bottom: 0;
}
.field-item {
  display: flex;
  align-items: center;
  & + .field-item {
    margin-top: 36px;
  }
  &-label {
    color: $color-text-regular;
  }
  &-content {
    padding: 0 20px;
  }
}
.select {
  &-list {
    display: flex;
    align-items: center;
  }
  &-item {
    border-radius: 4px;
    border: 1px solid $border-color-secondary;
    height: 30px;
    line-height: 30px;
    padding: 0 12px;
    cursor: pointer;
    & + .select-item {
      margin-left: 20px;
    }
    &.active {
      color: $color-warning;
      border-color: $color-warning;
      background-color: mix(#ffffff, $color-warning, 90%);
    }
  }
}
.other-recommend {
  height: 80px;
  border-top: 1px solid $border-color;
  .field-item-label {
    color: $color-primary;
    font-weight: bold;
  }
  .el-button {
    height: 30px;
    padding: 0 12px;
    & + .el-button {
      margin-left: 20px;
    }
  }
}
</style>
