<template>
  <ProCard v-loading="loading">
    <template
      v-if="proxyTypeList.length"
      #header
    >
      {{ $t('createGuide.recommend.title') }}
    </template>
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
        <div
          v-for="item in packageList"
          :key="item.id"
          class="package-item"
        >
          <div class="package-name">{{ item.name }}</div>
          <div class="package-money">￥{{ item.money }}</div>
          <div
            v-if="item.is_hot === '1'"
            class="package-hot"
          >
            <svg-icon icon-class="remen" />
            <div class="package-hot-text">HOT</div>
          </div>
          <div
            v-if="formData.type === PROXY_TYPE.GLOBAL_DYNAMIC_HOUSE && formData.status === PROXY_STATUS.TIME"
            class="package-footer desc"
          >
            <span>xxx</span>
            <span>{{ $t('createGuide.recommend.ipTotalDesc') }}</span>
          </div>
          <div class="package-footer buy">
            {{ formData }}
            {{ PROXY_TYPE }}
            去购买
          </div>
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
  PROXY_TYPE,
  PROXY_STATUS,
  PROXY_TYPE_LIST,
  PROXY_STATUS_LIST
} from '@/constant/proxy'
import { getPackageSelect } from '@/api/set_meal'
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
      PROXY_TYPE,
      PROXY_STATUS,
      chargingTypeList,
      formData: {
        type: '',
        status: ''
      },
      loading: false,
      packageList: []
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
        this.getPackageSelect()
      })
    },
    getPackageSelect() {
      const { formData } = this
      this.loading = true
      getPackageSelect(formData).then(res => {
        const { data = [] } = res
        this.packageList = data
      }).finally(() => {
        this.loading = false
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
.package {
  &-list {
    border-bottom: 1px solid $border-color;
    padding: 60px 0;
  }
  &-item {
    text-align: center;
    width: 280px;
    height: 150px;
    border-radius: 4px;
    border: 1px solid $border-color;
    position: relative;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;

    &.active,
    &:hover {
      border: 1px solid $color-warning;
      .package {
        &-footer {
          &.desc {
            display: none;
          }
          &.buy {
            display: block;
          }
        }
      }
    }
  }
  &-name {
    font-weight: bold;
    color: $color-text-regular;
  }
  &-money {
    font-size: 30px;
    color: $color-danger;
    line-height: 32px;
    font-weight: bold;
  }
  &-hot {
    position: absolute;
    top: -22px;
    right: -4px;
    .svg-icon {
      font-size: 65px;
    }
    &-text {
      position: absolute;
      color: #fff;
      top: 50%;
      right: 8px;
      transform: translateY(-50%);
    }
  }
  &-footer {
    height: 36px;
    line-height: 36px;
    &.desc {
      background-color: rgba($color-warning, 0.1);
      color: $color-warning;
      display: flex;
      align-items: center;
      & > span {
        flex: 1;
        text-align: center;
        position: relative;
        & + span {
          &::before {
            content: "";
            width: 1px;
            height: 12px;
            background-color: $color-warning;
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
          }
        }
      }
    }
    &.buy {
      display: none;
      background-color: $color-danger;
      color: #ffffff;
    }
  }
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
