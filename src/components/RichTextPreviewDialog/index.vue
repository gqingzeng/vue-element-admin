<template>
  <el-dialog
    :visible.sync="dialogVisible"
    append-to-body
    v-bind="$attrs"
    v-on="$listeners"
  >
    <div v-html="richText" />
    <template #footer>
      <el-button type="info" @click="dialogVisible = false">{{ $t('globalVar.close') }}</el-button>
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: 'RichTextPreviewDialog',
  components: {

  },
  inheritAttrs: false,
  data() {
    return {
      dialogVisible: false,
      richText: ''
    }
  },
  methods: {
    openDialog(richText) {
      this.richText = richText
      this.dialogVisible = true
    }
  }
}
</script>

<style scoped lang="scss">
.el-button {
  width: 220px;
}
</style>
