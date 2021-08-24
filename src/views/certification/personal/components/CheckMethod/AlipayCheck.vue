<template>
  <div class="alipay-check-box">
    <svg-icon icon-class="z-alipay" />
    <div class="qr-code">
      <img :src="qrCode">
    </div>
    <i18n
      class="alipay-check-box-tips"
      path="certification.personal.checkMethod.alipayQrcodeTips"
      tag="div"
    >
      <span>{{ formData.name }}</span>
    </i18n>
  </div>
</template>

<script>
export default {
  name: 'AlipayCheck',
  components: {

  },
  props: {
    formData: {
      type: Object,
      default: () => ({})
    },
    qrCode: {
      type: String,
      default: ''
    }
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
.alipay-check-box {
  text-align: center;
  .svg-icon {
    font-size: 50px;
    color: #00aaee;
  }
  .qr-code img {
    width: 200px;
    height: 200px;
    margin-top: 20px;
  }
  &-tips {
    font-size: 18px;
    font-weight: bold;
    margin-top: 20px;
    &> span {
      color: $color-warning;
      margin: 0 6px;
    }
  }
}
</style>
