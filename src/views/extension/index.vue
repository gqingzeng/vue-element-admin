<template>
  <div class="app-container">
    <ProCard :header="$t('extension.title')" class="extension-card">
      <el-tabs v-model="activeName">
        <el-tab-pane name="summary">
          <template #label>
            <span class="tab-pane-label">{{ $t('extension.tabs.summary') }}</span>
          </template>
        </el-tab-pane>
        <el-tab-pane name="withdraw">
          <template #label>
            <span class="tab-pane-label">{{ $t('extension.tabs.withdraw') }}</span>
          </template>
        </el-tab-pane>
        <el-tab-pane name="settlementLog">
          <template #label>
            <span class="tab-pane-label">{{ $t('extension.tabs.settlementLog') }}</span>
          </template>
        </el-tab-pane>
        <el-tab-pane name="unsettled">
          <template #label>
            <span class="tab-pane-label">{{ $t('extension.tabs.unsettled') }}</span>
          </template>
        </el-tab-pane>
        <el-tab-pane name="invalidLog">
          <template #label>
            <span class="tab-pane-label">{{ $t('extension.tabs.invalidLog') }}</span>
          </template>
        </el-tab-pane>
      </el-tabs>
    </ProCard>
    <component
      :is="activeComponent"
      :key="activeName"
      v-loading="loading"
      :active-name="activeName"
      :extension-info="extensionInfo"
    />
  </div>
</template>

<script>
import ProCard from '@/components/ProCard'
import { getExtensionInfo } from '@/api/user_extension'
const componentMap = {
  summary: () => import('./components/Summary'),
  withdraw: () => import('./components/Withdraw'),
  settlementLog: () => import('./components/ExtracTableList'),
  unsettled: () => import('./components/ExtracTableList'),
  invalidLog: () => import('./components/ExtracTableList')
}
export default {
  name: 'ExtensionPage',
  components: {
    ProCard
  },
  data() {
    return {
      loading: false,
      activeName: 'summary',
      extensionInfo: {}
    }
  },
  computed: {
    activeComponent() {
      const { activeName } = this
      return componentMap[activeName]
    }
  },
  created() {
    this.getExtensionInfo()
  },
  methods: {
    getExtensionInfo() {
      this.loading = true
      getExtensionInfo().then(res => {
        this.extensionInfo = res.data
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>

<style scoped lang="scss">
 .extension-card > ::v-deep .el-card__body {
  padding-bottom: 0;
}
::v-deep .el-tabs__header {
  margin-bottom: 0;
}
</style>
