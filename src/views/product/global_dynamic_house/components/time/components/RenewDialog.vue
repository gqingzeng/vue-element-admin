<template>
  <el-dialog
    :visible.sync="dialogVisible"
    :title="$t('globalVar.renew')"
  >
    <el-form
      :model="formData"
      label-position="top"
    >
      <el-form-item label="续费时长">
        <el-select v-model="formData.time">
          <el-option
            value="1"
            label="一个月"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="是否使用优惠卷">
        <el-radio-group v-model="formData.time">
          <el-radio label="1">是</el-radio>
          <el-radio label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="续费数量">
        <el-input v-model="formData.time" />
      </el-form-item>
      <el-form-item label="续费金额">
        <el-input v-model="formData.time" />
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
export default {
  name: 'RenewDialog',
  components: {

  },
  data() {
    return {
      dialogVisible: false,
      formData: {

      }
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
</style>
