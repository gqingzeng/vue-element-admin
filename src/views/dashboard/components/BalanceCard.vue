<template>
  <ProCard :header="$t('dashboard.balance.title')">
    <div class="header">
      <div class="balance">
        <span>￥</span> {{ userInfo.price }}
      </div>
      <el-button
        type="primary"
        round
      >
        <span>{{ $t('dashboard.balance.goRecharge') }}</span>
        <i class="el-icon-right" />
      </el-button>
    </div>
    <el-divider />
    <div class="footer">
      <div class="box warning">
        <div class="tips">{{ $t('dashboard.balance.createGuideTips') }}</div>
        <router-link :to="{name: 'ProxyCreatePage'}">
          <el-button type="warning">
            {{ $t('dashboard.balance.createGuide') }}
            <i class="el-icon-arrow-right" />
          </el-button>
        </router-link>
      </div>
      <div class="box info">
        <div class="tips">{{ $t('dashboard.balance.extensionGuideTips') }}</div>
        <router-link :to="{name: 'ExtensionPage'}">
          <el-button type="info">
            {{ $t('dashboard.balance.extensionGuide') }}
            <i class="el-icon-arrow-right" />
          </el-button>
        </router-link>
      </div>
    </div>
  </ProCard>
</template>

<script>
import { mapGetters } from 'vuex'
import ProCard from '@/components/ProCard'
export default {
  name: 'BalanceCard',
  components: {
    ProCard
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.el-card {
  width: 540px;
}
.header {
  display: flex;
  align-items: center;
  .balance {
    flex: 1;
    font-size: 40px;
    font-weight: bold;
    display: flex;
    align-items: flex-end;
    line-height: 1;
    & > span {
      width: 20px;
      height: 20px;
      background-color: $color-warning;
      display: block;
      color: #ffffff;
      font-size: 12px;
      line-height: 20px;
      text-align: center;
      border-radius: 50%;
      margin-right: 4px;
      margin-bottom: 4px;
    }
  }
  .el-button {
    height: 32px;
    width: 110px;
    padding: 0 4px 0 14px;
    box-sizing: border-box;
    & > ::v-deep span {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .el-icon-right {
      width: 24px;
      height: 24px;
      background-color: #ffffff;
      display: inline-block;
      border-radius: 50%;
      color: $color-primary;
      line-height: 24px;
      text-align: center;
      font-size: 14px;
      font-weight: bold;
    }
  }
}
.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .box {
    width: 200px;
    padding: 15px;
    border-radius: 5px;
    font-size: 15px;
    .tips {
      line-height: 26px;
    }
    .el-button {
      padding: 0;
      margin: 0 auto;
      border-radius: 50%;
      width: 164px;
      height: 36px;
      border-radius: 18px;
      margin-top: 13px;
    }
    &.warning {
      background-color: mix(#ffffff, $color-warning, 90%);
      color: $color-warning;
    }
    &.info {
      background-color: mix(#ffffff, #5fbde5, 90%);
      color: #5fbde5;
      .el-button {
        background-color: #5fbde5;
        color: #ffffff;
        border-color: #5fbde5;
        &:hover,
        &:focus {
          border-color: mix(#ffffff, #5fbde5, 20%);
          background-color: mix(#ffffff, #5fbde5, 20%);
        }
      }
    }
  }
}
</style>
