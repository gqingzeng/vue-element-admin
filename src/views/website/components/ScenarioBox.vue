<template>
  <div class="selection-reason-box">
    <div class="selection-reason-content">
      <div class="title">
        {{ $t('website.selectionReason.title') }}
      </div>
      <ul>
        <li v-for="item in list" :key="item.title">
          <img :src="item.icon" class="item-icon">
          <div class="item-title">{{ $t(`website.selectionReason.${item.title}`) }}</div>
          <div class="item-tips">{{ $t(`website.selectionReason.${item.tips}`) }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectionReason',
  components: {

  },
  data() {
    return {
      list: [
        {
          title: 'api',
          tips: 'apiTips',
          icon: require('@/assets/images/website/selected-reason-api.png')
        },
        {
          title: 'country',
          tips: 'countryTips',
          icon: require('@/assets/images/website/selected-reason-country.png')
        },
        {
          title: 'num',
          tips: 'numTips',
          icon: require('@/assets/images/website/selected-reason-num.png')
        },
        {
          title: 'flexible',
          tips: 'flexibleTips',
          icon: require('@/assets/images/website/selected-reason-flexible.png')
        },
        {
          title: 'customized',
          tips: 'customizedTips',
          icon: require('@/assets/images/website/selected-reason-customized.png')
        },
        {
          title: 'time',
          tips: 'timeTips',
          icon: require('@/assets/images/website/selected-reason-time.png')
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
    font-size: 30px;
    position: relative;
    display: inline-block;
    z-index: 1;
    &::before {
      left: -25px;
      bottom: -5px;
      position: absolute;
      content: '';
      width: 60px;
      height: 15px;
      background-image: linear-gradient(to right, #FFFFFF, rgba($color-primary, .2));
      z-index: -1;
    }
    &::after {
      right: -20px;
      top: 0px;
      position: absolute;
      content: '';
      width: 60px;
      height: 15px;
      background-image: linear-gradient(to right, rgba($color-warning, .2) , #FFFFFF);
      z-index: -1;
    }
  }
  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    li {
      text-align: center;
      list-style: none;
      width: 33.33%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 230px;
      }
      .item-title {
        color: $color-primary;
        font-weight: bold;
        font-size: 24px;
      }

      .item-tips {
        color: $color-info;
        line-height: 21px;
        width: 230px;
      }
    }
  }
}
</style>
