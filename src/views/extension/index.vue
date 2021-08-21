<template>
  <div class="app-container">
    <ProCard :header="$t('extension.title')">
      <el-tabs v-model="activeName">
        <el-tab-pane name="summary">
          <template #label>
            <span class="tab-pane-label">{{ $t('extension.tabs.summary') }}</span>
          </template>
        </el-tab-pane>
      </el-tabs>
      <component :is="activeComponent" />
    </ProCard>
  </div>
</template>

<script>
import ProCard from '@/components/ProCard'
const componentMap = {
  summary: () => import('./components/Summary')
}
export default {
  name: 'ExtensionPage',
  components: {
    ProCard
  },
  data() {
    return {
      activeName: 'summary'
    }
  },
  computed: {
    activeComponent() {
      const { activeName } = this
      return componentMap[activeName]
    }
  },
  created() {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">

</style>
