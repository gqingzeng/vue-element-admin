<template>
  <div class="pro-steps">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ProSteps',
  components: {

  },
  props: {
    active: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      steps: []
    }
  },
  watch: {
    steps(steps) {
      steps.forEach((child, index) => {
        child.index = index
      })
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.pro-steps {
  display: flex;
  align-items: center;
}
</style>
