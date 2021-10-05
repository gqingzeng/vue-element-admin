<template>
  <div class="app-container">
    <ProCard class="pro-card">
      <template #header>
        {{ $t('product.globalComputerRoom.title') }}
        <router-link :to="{name: 'ProductBuyPage'}">
          <el-button
            type="warning"
            size="mini"
            round
          >
            {{ $t('product.globalComputerRoom.titleBuyBtnText') }}
            <i class="el-icon-right" />
          </el-button>
        </router-link>
      </template>
      <el-tabs v-model="activeName">
        <el-tab-pane
          v-for="(item, key) in componentsMap"
          :key="key"
          :name="key"
        >
          <template #label>
            <span class="tab-pane-label">{{ $t(`product.tab.${key}`) }}</span>
          </template>
        </el-tab-pane>
      </el-tabs>
    </ProCard>
    <component :is="activeComponent" />
  </div>
</template>

<script>
import ProCard from '@/components/ProCard'

const componentsMap = {
  flow: () => import('./components/flow'),
  time: () => import('./components/time'),
  num: () => import('./components/num')
}

export default {
  name: 'ProductGlobalComputerRoomPage',
  components: {
    ProCard
  },
  data() {
    return {
      activeName: 'flow',
      componentsMap
    }
  },
  computed: {
    activeComponent() {
      const { activeName } = this
      return componentsMap[activeName]
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.pro-card {
  ::v-deep .el-card {
    &__header {
      .el-button {
        padding-right: 34px;
        position: relative;
        margin-left: 55px;
        .el-icon-right {
          position: absolute;
          top: 4px;
          right: 5px;
          width: 18px;
          height: 18px;
          background-color: #ffffff;
          display: inline-block;
          border-radius: 50%;
          color: $color-warning;
          line-height: 18px;
          text-align: center;
          font-size: 12px;
          font-weight: bold;
        }
      }
    }
    &__body {
      padding-bottom: 0;
      .el-tabs__header {
        margin-bottom: 0;
      }
    }
  }
}
</style>
