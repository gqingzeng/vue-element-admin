<template>
  <div class="summary-box">
    <ProCard>
      <div class="data-box">
        <ExtensionInfo :extension-info="extensionInfo" />
        <el-divider direction="vertical" />
        <ExtensionTotal />
      </div>
    </ProCard>
    <ExtensionLinkCard />
  </div>
</template>

<script>
import ProCard from '@/components/ProCard'
import ExtensionInfo from './ExtensionInfo'
import ExtensionTotal from './ExtensionTotal'
import ExtensionLinkCard from './ExtensionLinkCard'
export default {
  name: 'Summary',
  components: {
    ProCard,
    ExtensionInfo,
    ExtensionTotal,
    ExtensionLinkCard
  },
  props: {
    extensionInfo: {
      type: Object,
      default: () => ({})
    }
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
.data-box {
 padding-top: 50px;
}
.data-box {
  display: flex;
  .el-divider {
    height: 100px;
  }
}
</style>
