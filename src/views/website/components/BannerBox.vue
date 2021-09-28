<template>
  <div class="banner-box">
    <img
      class="banner-image"
      src="@/assets/images/website/banner.png"
      alt=""
    >
    <div class="banner-content">
      <div class="banner-title">
        {{ $t('website.bannerTitle') }}
      </div>
      <div class="advantage-list">
        <div
          v-for="item in advantageList"
          :key="item"
          class="advantage-item"
        >{{ $t(`website.${item}`) }}</div>
      </div>
      <div class="banner-tips">
        {{ $t('website.bannerTips') }}
      </div>
      <div class="btn-list">
        <el-button>{{ $t('website.seePackage') }}</el-button>
        <el-button type="warning">{{ $t('website.freeTrial') }}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerBox',
  components: {

  },
  data() {
    return {
      advantageList: [
        'cloudArchitecture',
        'highAnonymity',
        'highAvailability',
        'highConcurrency'
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.banner {
  &-box {
    position: relative;
  }
  &-image {
    width: 100%;
    display: block;
  }
  &-content {
    position: absolute;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    width: $websiteContainer;
    margin: 0 auto;
    z-index: 1;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &-title {
    white-space: pre;
    font-weight: bold;
    font-size: 34px;
    line-height: 50px;
  }
  &-tips {
    white-space: pre;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    margin-top: 15px;
  }
}
.advantage {
  &-list {
    display: flex;
    align-items: center;
    margin-top: 50px;
  }
  &-item {
    font-size: 16px;
    font-weight: 500;
    border-radius: 8px;
    border: 2px solid rgba(255, 255, 255, 0.4);
    padding: 12px 26px;
    & + .advantage-item {
      margin-left: 10px;
    }
  }
}
.btn-list {
  margin-top: 150px;
  .el-button {
    border-radius: 8px;
    font-size: 20px;
    font-weight: bold;
    padding: 20px 40px;
  }
}
</style>
