<template>
  <ProCard :header="$t('createGuide.recommend.title')">
    <template v-if="proxyTypeList.length">
      <div class="field-item">
        <div class="field-item-label">
          {{ $t('createGuide.recommend.proxyType') }}：
        </div>
        <div class="field-item-content">
          <div class="select-list">
            <div
              v-for="item in proxyTypeList"
              :key="item.key"
              class="select-item"
              :class="{
                active: formData.type === item.key
              }"
              @click="handleSetFormData(item.key,'type')"
            >{{ $t(`createGuide.recommend.${item.name}`) }}</div>
          </div>
        </div>
      </div>
      <div class="field-item">
        <div class="field-item-label">
          {{ $t('createGuide.recommend.chargingType') }}：
        </div>
        <div class="field-item-content">
          <div class="select-list">
            <div
              v-for="item in proxyStatusList"
              :key="item.key"
              class="select-item"
              :class="{
                active: formData.status === item.key
              }"
              @click="handleSetFormData(item.key,'chargingType')"
            >{{ $t(`createGuide.recommend.${item.name}`) }}</div>
          </div>
        </div>
      </div>
      <div class="package-list">
        <div class="package-item">
          xxx
        </div>
      </div>
    </template>
    <div class="field-item other-recommend">
      <div class="field-item-label">{{ $t('createGuide.recommend.otherRecommendTitle') }}：</div>
      <div class="field-item-content">
        <el-button
          v-for="item in chargingTypeList"
          :key="item"
          type="primary"
        >{{ item }}</el-button>
      </div>
    </div>
  </ProCard>
</template>

<script>
import ProCard from '@/components/ProCard'
import {
  PROXY_TYPE_LIST,
  PROXY_STATUS_LIST
} from '@/constant/proxy'

const chargingTypeList = [
  '按时间计费',
  '按流量计费',
  '按IP数计费'
]
export default {
  components: {
    ProCard
  },
  props: {
    type: {
      type: Array,
      default: () => []
    },
    status: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      chargingTypeList,
      formData: {
        type: '',
        status: ''
      }
    }
  },
  computed: {
    proxyTypeList() {
      const { type = [] } = this
      return PROXY_TYPE_LIST.filter(item => type.includes(item.key))
    },
    proxyStatusList() {
      const { status = [] } = this
      return PROXY_STATUS_LIST.filter(item => status.includes(item.key))
    }
  },
  methods: {
    initData() {
      this.$nextTick(() => {
        const { proxyTypeList, proxyStatusList } = this
        const [defaultTypeObj = {}] = proxyTypeList
        const [defaultStatusObj = {}] = proxyStatusList
        this.formData.type = defaultTypeObj.key
        this.formData.status = defaultStatusObj.key
      })
    },
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
.package-list {
  border-bottom: 1px solid $border-color;
}
.other-recommend {
  height: 80px;
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
