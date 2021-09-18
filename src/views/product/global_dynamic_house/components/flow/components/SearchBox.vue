<template>
  <el-form label-position="top">
    <div class="form-item-group">
      <el-form-item label="地区">
        <AreaCascader v-model="formData.country" type="1" />
      </el-form-item>
      <el-form-item label="是否去重">
        <el-radio-group v-model="formData.is_diff">
          <el-radio :label="1">是</el-radio>
          <el-radio :label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="去重周期">
        <el-input-number v-model="formData.diffUser" :max="2" />
      </el-form-item>
      <el-form-item label="子账号数量">
        <el-input-number v-model="formData.num" />
      </el-form-item>
    </div>
    <div class="form-item-group">
      <el-form-item label="IP时长">
        <AreaCascader type="1" />
      </el-form-item>
      <el-form-item label="协议">
        <el-radio-group>
          <el-radio :label="1">是</el-radio>
          <el-radio :label="0">否</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="当前可用剩余流量">
        <el-input readonly />
      </el-form-item>
      <el-form-item label=" ">
        <el-button
          type="primary"
          class="el-icon-download"
        >
          生成代理
        </el-button>
      </el-form-item>
    </div>
  </el-form>
</template>

<script>
import AreaCascader from '@/components/AreaCascader'

export default {
  name: 'SearchBox',
  components: {
    AreaCascader
  },
  data() {
    return {
      formData: {
        is_diff: 0,
        diffUser: ''
      }
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.form-item-group {
  display: flex;
  justify-content: space-between;
  &:last-child {
    .el-form-item {
      margin-bottom: 0;
    }
  }
}
.el-form-item {
  flex-shrink: 0;
  width: calc((100% - 60px) / 4);
  margin-right: 0;
  ::v-deep &__label {
    height: 40px;
  }
  & + .el-form-item {
    margin-left: 20px;
  }

  .el-cascader,
  .el-button,
  .el-input,
  .el-select {
    width: 100%;
  }
}
</style>
