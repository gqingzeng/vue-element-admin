<template>
  <el-card :header="$t('countryList.searchBox.header')" shadow="never">
    <el-input :placeholder="$t('countryList.searchBox.placeholder')" />
    <el-button icon="el-icon-search" type="primary">{{ $t('globalVar.search') }}</el-button>
  </el-card>
</template>

<script>
export default {
  name: 'SearchBox',
  components: {

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
