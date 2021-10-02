<template>
  <div class="scenario-box">
    <div class="scenario-box-content">
      <div class="title">
        {{ $t('website.scenarioBox.title') }}
      </div>
      <div class="sub-title">
        {{ $t('website.scenarioBox.subTitle') }}
      </div>
      <ul>
        <li v-for="item in list" :key="item.title">
          <svg-icon :icon-class="item.icon" class="item-icon" />
          <div class="item-title">{{ $t(`website.scenarioBox.${item.title}`) }}</div>
          <div v-if="item.tips" class="item-tips">{{ $t(`website.scenarioBox.${item.tips}`) }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScenarioBox',
  components: {

  },
  data() {
    return {
      list: [
        {
          title: 'ad',
          tips: 'adTips',
          icon: 'scenario-box-ad'
        },
        {
          title: 'brand',
          tips: 'brandTips',
          icon: 'scenario-box-brand'
        },
        {
          title: 'seo',
          tips: 'seoTips',
          icon: 'scenario-box-seo'
        },
        {
          title: 'market',
          tips: 'marketTips',
          icon: 'scenario-box-market'
        },
        {
          title: 'ticket',
          tips: 'ticketTips',
          icon: 'scenario-box-ticket'
        },
        {
          title: 'webTest',
          tips: 'webTestTips',
          icon: 'scenario-box-web-test'
        },
        {
          title: 'financeStat',
          tips: 'financeStatTips',
          icon: 'scenario-box-finance-stat'
        },
        {
          title: 'more',
          icon: 'scenario-box-more'
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.scenario-box {
  background: url('~@/assets/images/website/scenario-bg.png') 100% no-repeat;
  &-content {
    text-align: center;
    margin: 0 auto;
    width: $websiteContainer;
    padding: 130px 0;
    .title {
      color: #FFFFFF;
      font-weight: bold;
      font-size: 24px;
      position: relative;
      display: inline-block;
      z-index: 1;
      &::before {
        left: -65px;
        bottom: -15px;
        position: absolute;
        content: '';
        width: 80px;
        height: 10px;
        background-image: linear-gradient(to right, rgba(#FFFFFF, 0), rgba(#E2ECFE, .7));
        z-index: -1;
      }
      &::after {
        right: -110px;
        top: 0px;
        position: absolute;
        content: '';
        width: 150px;
        height: 15px;
        background-image:linear-gradient(90deg, rgba(#FFDA84, .7) , rgba(#FFFFFF, 0));
        z-index: -1;
      }
    }
    .sub-title {
      color: rgba(#FFFFFF, .5);
      margin-bottom: 90px;
      margin-top: 15px;
    }
    ul {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin: 0;
      padding: 0;
      li {
        text-align: center;
        list-style: none;
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 100px;
        .item-icon {
          font-size: 50px;
        }
        .item-title {
          color: #FFFFFF;
          margin-top: 10px;
          white-space: pre;
        }

        .item-tips {
          color: rgba(#FFFFFF, .5);
          line-height: 21px;
          width: 270px;
          margin-top: 35px;
        }
      }
    }
  }
}
</style>
