<template>
  <div class="selection-reason-box">
    <div class="selection-reason-content">
      <div class="title">
        {{ $t('website.selectionReason.title') }}
      </div>
      <ul>
        <li v-for="item in list" :key="item.title">
          <svg-icon :icon-class="item.icon" class="item-icon" />
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
    margin-bottom: 50px;
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
      margin-bottom: 20px;
      .item-icon {
        font-size: 200px;
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
        margin-top: 10px;
      }
    }
  }
}
</style>
