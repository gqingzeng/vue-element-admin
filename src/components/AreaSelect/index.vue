<template>
  <el-select
    filterable
    v-bind="$attrs"
    v-on="$listeners"
  >
    <el-option
      v-for="item in list"
      :key="item.id"
      :value="item.id"
      :label="item.name"
    />
  </el-select>
</template>

<script>
import { getStatics } from '@/api/common'
export default {
  name: 'AreaSelect',
  inheritAttrs: false,
  props: {
    type: {
      type: Number,
      required: true
    },
    status: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      loading: false,
      list: []
    }
  },
  watch: {
    type: {
      immediate: true,
      handler() {
        this.getStatics()
      }
    }
  },
  methods: {
    getStatics() {
      const { type, status } = this
      this.loading = true
      getStatics({ type, status }).then(res => {
        const { data } = res
        this.list = data
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>

<style scoped lang="scss">
</style>
