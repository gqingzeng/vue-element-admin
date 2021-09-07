<template>
  <div class="app-container">
    <ProCard :header="$t('product.globalDynamicHouse.title')">
      <el-tabs v-model="activeName">
        <el-tab-pane
          v-for="(item, key) in componentsMap"
          :key="key"
          :name="key"
        >
          <template #label>
            <span class="tab-pane-label">{{ $t(`product.globalDynamicHouse.tab.${key}`) }}</span>
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
  month: () => import('./components/month')
}
export default {
  name: 'ProductGlobalDynamicHousePage',
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
</style>
