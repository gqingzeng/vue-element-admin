<template>
  <div class="selection-reason-box">
    <div class="selection-reason-content">
      <div class="title">
        {{ $t('website.cooperativePartner.title') }}
      </div>
      <div class="sub-title">
        {{ $t('website.cooperativePartner.subTitle') }}
      </div>
      <div class="swiper-box">
        <Swiper :options="swiperOptions">
          <SwiperSlide v-for="item in list" :key="item.title">
            <div class="enterprise-box">
              <svg-icon :icon-class="item.icon" class="item-icon" />
            </div>
          </SwiperSlide>
        </Swiper>
        <div slot="button-prev" ref="swiperPrev" class="swiper-button-prev" />
        <div slot="button-next" ref="swiperNext" class="swiper-button-next" />
      </div>
      <div class="use-tips">
        <div />
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'CooperativePartner',
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 4,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        lazy: {
          loadPrevNext: true
        },
        watchSlidesVisibility: true
      },
      list: [
        {
          title: 'api',
          tips: 'apiTips',
          icon: 'selected-reason-api'
        },
        {
          title: 'country',
          tips: 'countryTips',
          icon: 'selected-reason-country'
        },
        {
          title: 'num',
          tips: 'numTips',
          icon: 'selected-reason-num'
        },
        {
          title: 'flexible',
          tips: 'flexibleTips',
          icon: 'selected-reason-flexible'
        },
        {
          title: 'customized',
          tips: 'customizedTips',
          icon: 'selected-reason-customized'
        },
        {
          title: 'time',
          tips: 'timeTips',
          icon: 'selected-reason-time'
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.selection-reason-box {
  background: url('~@/assets/images/website/selected-reason-bg.png') 100% no-repeat;
}
.selection-reason-content {
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
      width: 90px;
      height: 10px;
      background-image: linear-gradient(to right, rgba(#FFFFFF, 0), rgba(#A5C1FF, .26));
      z-index: -1;
    }
    &::after {
      right: -38px;
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
  .swiper-box {
    position: relative;
  }
  .swiper-container {
    /* margin: 0 20px;
    padding: 0 -20px; */
    box-sizing: border-box;
  }
  /* .swiper-wrapper {
    padding: 0 20px;
  } */
  .enterprise-box {
    border-radius: 4px;
    border: 2px solid rgba(26, 50, 159, 0.06);
    width: 268px;
    height: 100px;
    font-size: 100px;
    box-sizing: border-box;
    margin: 0 auto;
  }
  .swiper-button-prev {
    left: 0;
  }
  .swiper-button-next {
    right: 0;
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: $color-primary;
    background-color: rgba($color-primary, .1);
    width: 55px;
    height: 55px;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
    margin-top: 0;
    &::after {
      font-size: 28px;
    }
  }
}
 /* .swiper-container{
  --swiper-theme-color: #ff6600;
  --swiper-navigation-color: $color-primary;
  --swiper-navigation-size: 30px;
} */
</style>
