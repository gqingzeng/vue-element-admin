<template>
  <div class="app-container">
    <ProCard v-loading="loading">
      <div class="field-item">
        <div class="field-item-label">
          {{ $t('globalVar.proxyType') }}：
        </div>
        <div class="field-item-content">
          <div class="select-list">
            <div
              v-for="item in PROXY_TYPE_LIST"
              :key="item.key"
              class="select-item"
              :class="{
                active: formData.type === item.key
              }"
              @click="handleSetFormData(item.key,'type')"
            >{{ $t(`globalVar.${item.name}`) }}</div>
          </div>
        </div>
      </div>
      <div class="field-item">
        <div class="field-item-label">
          {{ $t('globalVar.chargingType') }}：
        </div>
        <div class="field-item-content">
          <div class="select-list">
            <div
              v-for="item in PROXY_STATUS_LIST"
              :key="item.key"
              class="select-item"
              :class="{
                active: formData.status === item.key
              }"
              @click="handleSetFormData(item.key, 'status')"
            >{{ $t(`globalVar.${item.name}`) }}</div>
          </div>
        </div>
      </div>
      <ProductBox
        :product-list="packageList"
        :type="formData.type"
        :status="formData.status"
      />
    </ProCard>
  </div>
</template>

<script>
import ProCard from '@/components/ProCard'
import ProductBox from '@/components/ProductBox'
import {
  PROXY_TYPE_MAP,
  PROXY_STATUS_MAP,
  PROXY_TYPE_LIST,
  PROXY_STATUS_LIST
} from '@/constant/proxy'
import { getPackageSelect } from '@/api/set_meal'
import fillRouterQueryMixins from '@/mixins/fillRouterQuery'
export default {
  name: 'ProductBuyPage',
  components: {
    ProCard,
    ProductBox
  },
  mixins: [fillRouterQueryMixins],
  data() {
    return {
      PROXY_TYPE_LIST,
      PROXY_STATUS_LIST,
      formData: {
        type: 0,
        status: 0
      },
      loading: false,
      packageList: []
    }
  },
  beforeRouteEnter(to, form, next) {
    to.meta.activeMenu = form.path
    next()
  },
  created() {
    const { type, status } = this.$route.query
    if (PROXY_TYPE_MAP[type]) {
      this.formData.type = type
    }
    if (PROXY_STATUS_MAP[status]) {
      this.formData.type = type
    }
    this.getPackageSelect()
  },
  methods: {
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
      this.fillRouterQuery({ [key]: val })
      this.getPackageSelect()
    }
  }
}
</script>

<style scoped lang="scss">
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
</style>
