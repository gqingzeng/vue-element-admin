<template>
  <el-upload
    :action="action"
    :show-file-list="showFileList"
    :accept="accept"
    :data="{
      ...data,
      access_token
    }"
    :on-success="handleSuccess"
    :on-error="onError"
    :before-upload="beforeUpload"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </el-upload>
</template>

<script>
import { mapGetters } from 'vuex'
import { uploadAction } from '@/api/common'
import { getLocationHost } from '@/utils'
export default {
  name: 'UploadImage',
  components: {

  },
  props: {
    action: {
      type: String,
      default: () => {
        return `${getLocationHost()}${uploadAction}`
      }
    },
    showFileList: {
      type: Boolean,
      default: false
    },
    accept: {
      type: String,
      default: 'image/jpeg,image/png,image/jpg'
    },
    data: {
      type: Object,
      default: () => {
        return {}
      }
    },
    onSuccess: {
      type: Function,
      default: function() { }
    },
    onError: {
      type: Function,
      default: function() { }
    },
    size: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters(['access_token'])
  },
  methods: {
    handleSuccess(res, file, fileList) {
      const { onSuccess, onError } = this
      const { code, data, msg } = res
      if (code === 1) {
        const { fullurl } = data
        onSuccess && onSuccess(fullurl, file, fileList)
      } else {
        this.$message.error(msg || this.$t('globalVar.uploadError'))
        onError && onError(msg, file, fileList)
      }
    },
    beforeUpload(file) {
      const { size } = this
      if (size) {
        const isStandard = file.size <= size
        const mUnit = size / 1024 / 1024
        if (isStandard) {
          this.$message.error(`${this.$t('globalVar.uploadSizeError')} ${mUnit}M!`)
          return false
        }
      }
      return true
    }
  }
}
</script>

<style scoped lang="scss">
</style>
