<template>
  <div>
    <div class="footer">
      <el-button @click="handlePreStep">{{ $t('globalVar.preStep') }}</el-button>
      <el-button
        class="submit-btn"
        type="primary"
        @click="handleSubmit"
      >{{ $t('certification.personal.submitBtnText') }}</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IDCheck',
  components: {

  },
  data() {
    return {

    }
  },
  methods: {
    handlePreStep() {
      this.$emit('back')
    },
    handleSubmit() {

    }
  }
}
</script>

<style scoped lang="scss">
.footer {
  text-align: center;
  margin-top: 50px;
}
</style>
