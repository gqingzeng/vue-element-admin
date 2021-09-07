<template>
  <el-cascader
    :options="list"
    :props="{
      value: 'id',
      label: 'name',
      ...props,
    }"
    v-bind="$attrs"
    v-on="$listeners"
  />
</template>

<script>
import { getStatics } from '@/api/common'
export default {
  name: 'AreaCascader',
  components: {

  },
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      required: true
    },
    props: {
      type: Object,
      default: () => ({})
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
      const { type } = this
      this.loading = true
      getStatics({ type }).then(res => {
        const { data, msg } = res
        this.list = data || msg
        console.log(res)
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>

<style scoped lang="scss">
</style>
