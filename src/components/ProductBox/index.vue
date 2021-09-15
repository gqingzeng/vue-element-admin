<template>
  <div class="product-list">
    <div
      v-for="item in productList"
      :key="item.id"
      class="product-box"
    >
      <div class="product-header">
        <div class="product-name">{{ item.name }}</div>
        <div class="product-money">￥{{ item.money }}</div>
        <div
          v-if="item.is_hot === '1'"
          class="product-hot"
        >
          <svg-icon icon-class="remen" />
          <div class="product-hot-text">HOT</div>
        </div>
      </div>
      <div class="product-content">
        <i18n
          v-if="showFlowInfo"
          class="product-info-item"
          path="components.productBox.flowInfo"
          tag="div"
        >
          {{ item.bill }}
        </i18n>
        <i18n
          v-if="showSubAccountNum"
          class="product-info-item"
          path="components.productBox.subAccountNum"
          tag="div"
        >
          {{ item.num }}
        </i18n>
        <i18n
          v-if="showSubAccountThread"
          class="product-info-item"
          path="components.productBox.subAccountThread"
          tag="div"
        >
          {{ item.thread }}
        </i18n>
        <div
          v-if="showIpTotalDesc"
          class="product-info-item"
        >
          {{ $t('components.productBox.ipTotalDesc') }}
        </div>
        <div
          v-if="showInfiniteTime"
          class="product-info-item"
        >
          {{ $t('components.productBox.infiniteTime') }}
        </div>
        <div
          v-if="showInfiniteSubAccountNun"
          class="product-info-item"
        >
          {{ $t('components.productBox.infiniteSubAccountNun') }}
        </div>
        <div
          v-if="showInfiniteSubAccountThread"
          class="product-info-item"
        >
          {{ $t('components.productBox.infiniteSubAccountThread') }}
        </div>
        <i18n
          v-if="showIpUnitPrice"
          class="product-info-item"
          path="components.productBox.ipUnitPrice"
          tag="div"
        >
          {{ item.ipUnitPrice }}
        </i18n>
        <i18n
          v-if="showOriginalPrice"
          class="product-info-item original-price"
          path="components.productBox.originalPrice"
          tag="div"
        >
          {{ item.originalPrice }}
        </i18n>
        <div v-if="showGlobalStaticHouseTimeTips" class="product-info-item">
          {{ $t('components.productBox.globalStaticHouseTimeTips') }}
        </div>
      </div>
      <div
        class="product-footer"
        @click="handlePurchase"
      >
        去购买
      </div>
    </div>
  </div>
</template>

<script>
import {
  PROXY_TYPE,
  PROXY_STATUS
} from '@/constant/proxy'
export default {
  name: 'ProductBox',
  props: {
    productList: {
      type: Array,
      default: () => []
    },
    type: {
      type: Number,
      default: 0
    },
    status: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      PROXY_TYPE,
      PROXY_STATUS
    }
  },
  computed: {
    showFlowInfo() {
      const { type, status } = this
      return type === PROXY_TYPE.GLOBAL_DYNAMIC_HOUSE && [PROXY_STATUS.TIME, PROXY_STATUS.FLOW].includes(status)
    },
    showSubAccountNum() {
      const { type, status } = this
      return type === PROXY_TYPE.GLOBAL_DYNAMIC_HOUSE && status === PROXY_STATUS.TIME
    },
    showSubAccountThread() {
      const { type, status } = this
      return type === PROXY_TYPE.GLOBAL_DYNAMIC_HOUSE && status === PROXY_STATUS.TIME
    },
    showIpTotalDesc() {
      const { type, status } = this
      if (type === PROXY_TYPE.GLOBAL_DYNAMIC_HOUSE) {
        return true
      }
      if (type === PROXY_TYPE.GLOBAL_COMPUTER_ROOM && status === PROXY_STATUS.IP_NUM) {
        return true
      }
      if (type === PROXY_TYPE.GLOBAL_STATIC_HOUSE && status === PROXY_STATUS.IP_NUM) {
        return true
      }
      return false
    },
    showInfiniteTime() {
      const { type, status } = this
      if (status === PROXY_STATUS.IP_NUM) {
        return true
      }
      return [type === PROXY_TYPE.GLOBAL_DYNAMIC_HOUSE, PROXY_TYPE.GLOBAL_COMPUTER_ROOM].includes(type) && status === PROXY_STATUS.FLOW
    },
    showInfiniteSubAccountNun() {
      const { type, status } = this
      return [type === PROXY_TYPE.GLOBAL_DYNAMIC_HOUSE, PROXY_TYPE.GLOBAL_STATIC_HOUSE].includes(type) && status === PROXY_STATUS.FLOW
    },
    showInfiniteSubAccountThread() {
      const { status } = this
      return [PROXY_STATUS.FLOW, PROXY_STATUS.IP_NUM].includes(status)
    },
    showIpUnitPrice() {
      const { status } = this
      return status === PROXY_STATUS.IP_NUM
    },
    showOriginalPrice() {
      const { type, status } = this
      return [PROXY_TYPE.GLOBAL_STATIC_HOUSE, PROXY_TYPE.GLOBAL_COMPUTER_ROOM].includes(type) && status === PROXY_STATUS.TIME
    },
    showGlobalStaticHouseTimeTips() {
      const { type, status } = this
      return [PROXY_TYPE.GLOBAL_STATIC_HOUSE, PROXY_TYPE.GLOBAL_COMPUTER_ROOM].includes(type) && status === PROXY_STATUS.TI
    }
  },
  methods: {
    handlePurchase() {
      this.$emit('purchase')
    }
  }
}
</script>

<style scoped lang="scss">
.product {
  &-list {
    border-bottom: 1px solid $border-color;
    padding: 60px 0;
    display: flex;
    flex-wrap: wrap;
  }
  &-box {
    text-align: center;
    width: 280px;
    border-radius: 4px;
    position: relative;
    cursor: pointer;
    margin-right: 80px;
    margin-bottom: 40px;
    &:hover {
      .product-header,
      .product-content {
        border-color: $color-warning;
      }
    }
  }
  &-header {
    height: 110px;
    padding: 25px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid $border-color;
    border-left: 1px solid $border-color;
    border-right: 1px solid $border-color;
  }
  &-content {
    border-left: 1px solid $border-color;
    border-right: 1px solid $border-color;
    background-color: rgba($color-warning, 0.1);
    color: $color-warning;
    line-height: 21px;
    padding: 20px 0;
  }
  &-info-item {
    & + & {
      margin-top: 16px;
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
    margin-top: 10px;
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
  &-desc {
    display: flex;
    align-items: center;
    text-align: center;
    & > div {
      flex: 1;
    }
  }
  &-footer {
    height: 50px;
    line-height: 50px;
    background-color: $color-danger;
    color: #ffffff;
    border-radius: 0 0 4px 4px;
  }
}
</style>
