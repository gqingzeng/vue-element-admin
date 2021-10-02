<template>
  <div v-loading="loading" class="price-box">
    <div class="price-box-content">
      <div class="title">
        {{ $t('website.priceBox.title') }}
      </div>
      <div class="sub-title">
        {{ $t('website.priceBox.subTitle') }}
      </div>
      <el-tabs :value="formData.type" @tab-click="handleProxyTypeChange">
        <el-tab-pane
          v-for="item in PROXY_TYPE_LIST"
          :key="item.key"
          :name="item.key + ''"
          :label="$t(`globalVar.${item.name}`)"
        />
      </el-tabs>
      <div class="proxy-status-list">
        <div
          v-for="item in PROXY_STATUS_LIST"
          :key="item.key"
          class="proxy-status-item"
          :class="{
            active: item.key === formData.status
          }"
          @click="handleProxyStatusChange(item.key)"
        >{{ $t(`globalVar.${item.name}`) }}</div>
      </div>
      <div class="product-list">
        <!-- <Swiper>
          <SwiperSlide v-for="item in packageList" :key="item.id">

          </SwiperSlide>
        </Swiper> -->
        <ProductBox
          :product-list="packageList"
          :type="Number(formData.type)"
          :status="formData.status"
        />
      </div>
      <div class="more-btn">
        <router-link :to="{name: 'ProductBuyPage'}">
          {{ $t('website.priceBox.moreProductBtn') }}
          <i class="el-icon-arrow-right" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { PROXY_TYPE_LIST, PROXY_STATUS_LIST } from '@/constant/proxy'
import { getPackageSelect } from '@/api/set_meal'
// import { Swiper, SwiperSlide } from 'swiper/vue';
// import 'swiper/css'
import ProductBox from '@/components/ProductBox'

export default {
  name: 'PriceBox',
  components: {
    // Swiper,
    // SwiperSlide,
    ProductBox
  },
  data() {
    return {
      PROXY_TYPE_LIST,
      PROXY_STATUS_LIST,
      formData: {
        type: PROXY_TYPE_LIST[0].key + '',
        status: PROXY_STATUS_LIST[0].key
      },
      loading: false,
      packageList: []
    }
  },
  created() {
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
    handleProxyTypeChange(tab) {
      const { formData } = this
      console.log(tab)
      if (formData.type !== tab.name) {
        this.formData.type = tab.name
        this.getPackageSelect()
      }
    },
    handleProxyStatusChange(val) {
      const { formData } = this
      if (formData.status !== val) {
        this.formData.status = val
        this.getPackageSelect()
      }
    }
  }
}
</script>

<style scoped lang="scss">
.price-box {
  background: url('~@/assets/images/website/selected-reason-bg.png') 100% no-repeat;
  &-content {
    text-align: center;
    margin: 0 auto;
    width: $websiteContainer;
    padding: 130px 0;
    .title {
      color: $color-primary;
      font-weight: bold;
      font-size: 24px;
      position: relative;
      display: inline-block;
      z-index: 1;
      &::before {
        left: -55px;
        bottom: -15px;
        position: absolute;
        content: '';
        width: 80px;
        height: 10px;
        background-image: linear-gradient(to right, rgba(#FFFFFF, 0), rgba(#A5C1FF, .26));
        z-index: -1;
      }
      &::after {
        right: -55px;
        top: 0px;
        position: absolute;
        content: '';
        width: 90px;
        height: 15px;
        background-image: linear-gradient(to right, #FFDA84 , rgba(#FFFFFF, 0));
        z-index: -1;
      }
    }
    .sub-title {
      color: #A4AEDA;
      margin-bottom: 50px;
      margin-top: 20px;
    }
  }
  ::v-deep .el-tabs__nav-scroll {
    display: flex;
    justify-content: center;
  }
  .proxy-status {
    &-list {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 30px;
    }
    &-item {
      padding: 10px 36px;
      color: $color-info;
      background-color: rgba($color-info, .1);
      margin: 0 25px;
      border-radius: 4px;
      &.active {
        background-color: $color-warning;
        color: #FFFFFF;
      }
    }
  }
  .more-btn a {
    color: $color-info;
    &:hover {
      color: $color-primary;
    }
  }
}
</style>
