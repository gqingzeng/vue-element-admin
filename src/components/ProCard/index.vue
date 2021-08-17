<template>
  <el-card
    shadow="never"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template #header>
      <slot name="header" />
    </template>
    <slot />
  </el-card>
</template>

<script>
export default {
  name: 'ProCard',
  components: {

  },
  inheritAttrs: false,
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
</style>
