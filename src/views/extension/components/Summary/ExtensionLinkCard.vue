<template>
  <ProCard :header="$t('extension.summary.extensionLinkTitle')">
    <div class="link-box">
      <el-input v-model="link" readonly />
      <el-button
        v-clipboard:copy="link"
        icon="el-icon-document-copy"
        type="text"
      >{{ $t('globalVar.copyLink') }}</el-button>
    </div>
    <i18n
      class="tips"
      path="extension.summary.copyLinkTips"
      tag="div"
    >
      <span>ref</span>
      <span>{{ userInfo.ref }}</span>
    </i18n>
  </ProCard>
</template>

<script>
import { mapGetters } from 'vuex'
import ProCard from '@/components/ProCard'
import { getLocationHost } from '@/utils'
export default {
  name: 'ExtensionLinkCard',
  components: {
    ProCard
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['userInfo']),
    link() {
      const { userInfo } = this
      const { ref } = userInfo
      return `${getLocationHost()}${this.$router.resolve('/').href}?ref=${ref}`
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.el-card {
  margin-top: 20px;
}
.link-box {
  display: flex;
  align-content: center;
  .el-input {
    width: 400px;
  }
  .el-button {
    color: $color-warning;
    margin-left: 10px;
  }
}
.tips {
  margin-top: 35px;
  padding: 0 20px;
  & > span {
    color: $color-warning;
  }
}
</style>
