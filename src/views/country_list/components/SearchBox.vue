<template>
  <ProCard :header="$t('countryList.searchBox.header')">
    <el-input
      v-model="queryData.keyWords"
      clearable
      :placeholder="$t('countryList.searchBox.placeholder')"
    />
    <el-button
      icon="el-icon-search"
      type="primary"
      @click="handleQuery"
    >{{ $t('globalVar.search') }}</el-button>
  </ProCard>
</template>

<script>
import ProCard from '@/components/ProCard'
export default {
  name: 'SearchBox',
  components: {
    ProCard
  },
  data() {
    return {
      queryData: {
        keyWords: ''
      }
    }
  },
  methods: {
    resetQuery() {
      this.queryData.keyWords = ''
    },
    handleQuery() {
      this.$emit('query', this.queryData)
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep .el-input {
  width: 640px;
  &__inner {
    border-radius: 0;
  }
}
.el-button {
  width: 130px;
  border-radius: 0;
}
</style>
