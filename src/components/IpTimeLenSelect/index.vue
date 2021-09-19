<template>
  <el-select
    filterable
    v-bind="$attrs"
    v-on="$listeners"
  >
    <el-option
      v-for="item in list"
      :key="item"
      :value="item"
      :label="item + $t('globalVar.minute')"
    />
  </el-select>
</template>

<script>
import { getTimelenSetting } from '@/api/common'
export default {
  name: 'IpTimeLenSelect',
  props: {
    defaultFirst: {
      type: Boolean
    }
  },
  data() {
    return {
      loading: false,
      list: []
    }
  },
  created() {
    this.getTimelenSetting()
  },
  methods: {
    getTimelenSetting() {
      const { type, status } = this
      this.loading = true
      getTimelenSetting({ type, status }).then(res => {
        const { data } = res
        this.list = data
        if (this.defaultFirst) {
          this.$emit('input', data[0])
        }
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>

<style scoped lang="scss">
</style>
