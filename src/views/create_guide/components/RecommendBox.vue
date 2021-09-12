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
      <div class="product-list">
        <ProductBox
          v-for="item in packageList"
          :key="item.id"
          :name="item.name"
          :num="item.num"
          :money="item.money"
          :is-hot="item.is_hot"
          :timelen="item.timelen"
          :type="formData.type"
          :status="formData.status"
          @buy="handleBuyPackage(item)"
        />
      </div>
    </template>
    <div class="field-item other-recommend">
      <div class="field-item-label">{{ $t('createGuide.recommend.otherRecommendTitle') }}：</div>
      <div class="field-item-content">
        <router-link
          v-for="item in productListPage"
          :key="item.name"
          :to="{name: item.name}"
          class="router-link"
        >
          <el-button type="primary">{{ $t(`route.${item.title}`) }}</el-button>
        </router-link>
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
import ProductBox from '@/components/ProductBox'
const productListPage = [
  {
    name: 'ProductGlobalDynamicHousePage',
    title: 'product-globalDynamicHouse'
  },
  {
    name: 'ProductGlobalStaticHousePage',
    title: 'product-globalStaticHouse'
  },
  {
    name: 'ProductGlobalComputerRoomPage',
    title: 'product-globalComputerRoom'
  },
  {
    name: 'ProductChinaStatic',
    title: 'product-chinaStatic'
  }
]
export default {
  components: {
    ProCard,
    ProductBox
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
      productListPage,
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
    },
    handleBuyPackage() {

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
.product-list {
  border-bottom: 1px solid $border-color;
  padding: 60px 0;
}
.other-recommend {
  height: 80px;
  .field-item-label {
    color: $color-primary;
    font-weight: bold;
  }
  .router-link + .router-link {
    margin-left: 20px;
  }
  .el-button {
    height: 30px;
    padding: 0 12px;
  }
}
</style>
