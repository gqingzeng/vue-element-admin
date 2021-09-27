<template>
  <el-header
    height="70px"
    style="text-align: right; font-size: 12px"
  >
    <div class="header-container">
      <div class="header-sidebar">
        <img
          src="@/assets/images/logo.png"
          class="sidebar-logo"
        >
        <img
          src="@/assets/images/logo-title.png"
          class="sidebar-title"
        >
      </div>
      <div class="header-right">
        <router-link to="/dashboard">{{ $t('website.dashboard') }}</router-link>
        <router-link to="/dashboard">{{ $t('website.product') }}</router-link>
        <router-link to="/dashboard">{{ $t('website.price') }}</router-link>
        <router-link to="/dashboard">{{ $t('website.scenario') }}</router-link>
        <router-link to="/dashboard">{{ $t('website.help') }}</router-link>
        <LangSelect />
        <router-link to="/login">{{ $t('website.login') }}</router-link>
        <router-link to="/register">
          <el-button
            type="primary"
            size="small"
          >{{ $t('website.register') }}</el-button>
        </router-link>
      </div>
    </div>
  </el-header>
</template>

<script>
import LangSelect from '@/components/LangSelect'

export default {
  name: 'WebsiteHeader',
  components: {
    LangSelect
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.el-header {
  padding: 0;
  background-color: #fff;
  box-shadow: 0px 2px 4px 0px rgba(160, 174, 255, 0.5);
}
.header {
  &-container {
    width: $websiteContainer;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &-sidebar {
    display: flex;
    align-items: center;
    cursor: pointer;
    .sidebar {
      &-logo {
        height: 40px;
        margin-right: 10px;
      }
      &-title {
        height: 15px;
      }
    }
  }
  &-right {
    display: flex;
    align-items: center;
    ::v-deep .lange-box {
      margin: 0 36px;
    }
    & > a {
      font-size: 16px;
      color: $color-info;
      & + a {
        margin-left: 36px;
      }
      &:hover {
        color: $color-primary;
        font-weight: bold;
      }
      .el-button {
        font-size: 16px;
        padding: 5px 11px;
      }
    }
  }
}
</style>
