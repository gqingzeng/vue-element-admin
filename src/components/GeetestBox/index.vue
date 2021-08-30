<template>
  <div ref="captchaBox" class="captcha-box" />
</template>

<script>
import initGeetest from 'initGeetest'
import { geetestStart, geetestValibile } from '@/api/common'
import { mapGetters } from 'vuex'
export default {
  name: 'GeetestBox',
  inheritAttrs: false,
  props: {
    width: {
      type: String,
      default: '100%'
    }
  },
  data() {
    return {
      captchaObj: null
    }
  },
  computed: {
    ...mapGetters(['language'])
  },
  created() {
    this.init()
  },
  beforeDestroy() {
    this.destroy()
  },
  methods: {
    init() {
      geetestStart().then(res => {
        const { data = {}} = res
        const { width, language } = this
        const { challenge, gt, new_captcha, success } = data
        // 更多前端配置参数说明请参见：http://docs.geetest.com/install/client/web-front/
        initGeetest({
          gt,
          challenge,
          offline: !success,
          new_captcha: new_captcha,
          width,
          lang: language,
          ...this.$attrs
        }, this.initGeetestCallback)
      })
    },
    initGeetestCallback(captchaObj) {
      this.$nextTick(() => {
        captchaObj.appendTo(this.$refs.captchaBox)
        this.captchaObj = captchaObj
        captchaObj.onReady(() => {
          this.$emit('ready')
        })
        captchaObj.onSuccess(() => {
          const result = this.getValidate()
          const {
            geetest_challenge,
            geetest_seccode,
            geetest_validate
          } = result
          const params = {
            challenge: geetest_challenge,
            seccode: geetest_seccode,
            validate: geetest_validate
          }
          geetestValibile(params).then(res => {
            console.log(res)
          })
          this.$emit('success', result)
        })
        captchaObj.onError(() => {
          this.$emit('error')
        })
      })
    },
    reset() {
      this.captchaObj?.reset()
    },
    destroy() {
      this.captchaObj?.destroy()
    },
    verify() {
      this.captchaObj?.verify()
    },
    getValidate() {
      return this.captchaObj?.getValidate()
    },
    bindForm(el) {
      this.captchaObj?.bindForm(el)
    }
  }
}
</script>

<style scoped lang="scss">
</style>
