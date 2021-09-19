<template>
  <el-select
    filterable
    v-bind="$attrs"
    v-on="$listeners"
  >
    <el-option
      v-for="item in PROXY_PROTOCOL_LIST"
      :key="item.key"
      :value="item.key"
      :label="item.name"
    />
  </el-select>
</template>

<script>
import {
  PROXY_PROTOCOL_LIST
} from '@/constant/proxy'
export default {
  name: 'ProxyProtocolSelect',
  props: {
    defaultFirst: {
      type: Boolean
    }
  },
  data() {
    return {
      PROXY_PROTOCOL_LIST
    }
  },
  created() {
    if (this.defaultFirst) {
      this.$emit('input', PROXY_PROTOCOL_LIST[0].key)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
