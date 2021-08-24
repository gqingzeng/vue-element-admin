<template>
  <div class="pro-step" :class="currentStatus">
    <i class="triangle-left" />
    <div class="pro-step-title">
      <span class="pro-step-icon">{{ index + 1 }}</span>
      {{ title }}
    </div>
    <i class="triangle-right" />
  </div>
</template>

<script>
export default {
  name: 'ProStep',
  components: {

  },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      index: -1
    }
  },
  computed: {
    currentStatus() {
      const { index } = this
      const { active } = this.$parent
      return (index + 1) <= active ? 'success' : 'wait'
    }
  },
  beforeCreate() {
    this.$parent.steps.push(this)
  },
  beforeDestroy() {
    const steps = this.$parent.steps
    const index = steps.indexOf(this)
    if (index >= 0) {
      steps.splice(index, 1)
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.pro-step {
  flex: 1;
  height: 40px;
  line-height: 40px;
  text-align: center;
  padding: 0 25px;
  position: relative;
  &:first-child {
    padding-left: 0;
    .triangle-left {
      display: none;
    }
  }
  &:last-child {
    padding-right: 0;
    .triangle-right {
      display: none;
    }
  }
  .triangle-left {
    width: 0;
    height: 0;
    position: absolute;
    left: 0;
    top: 0;
  }
  .triangle-right {
    width: 0;
    height: 0;
    position: absolute;
    right: 0px;
    top: 0;
  }

  &.wait {
    .triangle-left {
      border-top: 20px solid transparent;
      border-left: 25px solid #ffffff;
      border-bottom: 20px solid transparent;
      background-color: rgba($color-primary, 0.09);
    }
    .pro-step-title {
      background-color: rgba($color-primary, 0.09);
      color: $color-info;
      .pro-step-icon {
        background: $color-info;
        color: #FFFFFF;
      }
    }

    .triangle-right {
      border-top: 20px solid transparent;
      border-left: 25px solid rgba($color-primary, 0.09);
      border-bottom: 20px solid transparent;
      background-color: #ffffff;
    }
  }
  &.success {
    .triangle-left {
      border-top: 20px solid transparent;
      border-left: 25px solid #ffffff;
      border-bottom: 20px solid transparent;
      background-color: $color-primary;
    }
    .pro-step-title {
      background-color: $color-primary;
      color: #ffffff;
      .pro-step-icon {
        background: #ffffff;
        color: $color-primary;
      }
    }

    .triangle-right {
      border-top: 20px solid transparent;
      border-left: 25px solid $color-primary;
      border-bottom: 20px solid transparent;
      background-color: #ffffff;
    }
  }

  .pro-step-icon {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 18px;
    height: 18px;
    font-size: 14px;
    box-sizing: border-box;
    transition: .15s ease-out;
    border-radius: 50%;
    margin-right: 8px;
  }
}
</style>
