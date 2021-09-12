<template>
  <div class="product-box">
    <div class="product-name">{{ name }}</div>
    <div class="product-money">￥{{ money }}</div>
    <div
      v-if="isHot === '1'"
      class="product-hot"
    >
      <svg-icon icon-class="remen" />
      <div class="product-hot-text">HOT</div>
    </div>
    <template v-if="type === PROXY_TYPE.GLOBAL_DYNAMIC_HOUSE && status === PROXY_STATUS.TIME">
      <div class="product-time" />
      <!-- <i18n
        class="product-ip-num"
        path="components.productBox.subAccountNum"
        tag="div"
      >
        <span>{{ num }}</span>
      </i18n>
      <i18n
        class="product-ip-num"
        path="components.productBox.subAccountThread"
        tag="div"
      >
        <span>{{ num }}</span>
      </i18n> -->
      <div class="product-footer desc">
        <span>{{ $t('components.productBox.infiniteFlow') }}</span>
        <span>{{ $t('components.productBox.ipTotalDesc') }}</span>
      </div>
    </template>
    <div class="product-footer buy">
      去购买
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
  components: {

  },
  props: {
    name: {
      type: String,
      default: ''
    },
    type: {
      type: [Number, String],
      default: 0
    },
    money: {
      type: [Number, String],
      default: 0
    },
    status: {
      type: [Number, String],
      default: 0
    },
    num: {
      type: [Number, String],
      default: 0
    },
    isHot: {
      type: [Number, String],
      default: 0
    },
    timelen: {
      type: [Number, String],
      default: 0
    }
  },
  data() {
    return {
      PROXY_TYPE,
      PROXY_STATUS
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.product {
  &-box {
    text-align: center;
    width: 280px;
    border-radius: 4px;
    border: 1px solid $border-color;
    position: relative;
    padding-top: 30px;
    cursor: pointer;

    &.active,
    &:hover {
      border: 1px solid $color-warning;
      .product {
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
  &-ip-num {
    font-size: 16px;
    margin-top: 10px;
    & > span {
      color: $color-danger;
      font-size: 18px;
      margin: 0 3px;
      font-weight: bold;
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
    height: 36px;
    line-height: 36px;
    margin-top: 10px;
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
</style>
