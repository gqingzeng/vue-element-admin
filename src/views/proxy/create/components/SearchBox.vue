<template>
  <ProCard v-loading="loading" :header="$t('proxy.create.search.title')">
    <el-form label-position="top" inline>
      <div class="form-item-group">
        <el-form-item :label="$t('proxy.create.search.businessType')" prop="businessType">
          <el-select v-model="formData.businessType" />
        </el-form-item>
        <el-form-item :label="$t('proxy.create.search.useCase')" prop="useCase">
          <el-select v-model="formData.useCase" />
        </el-form-item>
        <el-form-item :label="$t('proxy.create.search.targetWebSiteName')" prop="targetWebSiteName">
          <el-input v-model="formData.targetWebSiteName" />
        </el-form-item>
        <el-form-item :label="$t('proxy.create.search.purpose')" prop="purpose">
          <el-select v-model="formData.purpose" />
        </el-form-item>
      </div>
      <div class="form-item-group">
        <el-form-item :label="$t('proxy.create.search.ipTime')" prop="ipTime">
          <el-input v-model="formData.ipTime" />
        </el-form-item>
        <el-form-item :label="$t('proxy.create.search.quantityPerDay')" prop="quantityPerDay">
          <el-input v-model="formData.quantityPerDay" />
        </el-form-item>
        <el-form-item :label="$t('proxy.create.search.useDevice')" prop="useDevice">
          <el-select v-model="formData.useDevice" />
        </el-form-item>
        <el-form-item :label="$t('proxy.create.search.onlineQuantity')" prop="onlineQuantity">
          <el-input v-model="formData.onlineQuantity" />
        </el-form-item>
      </div>
      <div class="form-item-group">
        <el-form-item>
          <el-button type="primary" class="el-icon-search">
            {{ $t('proxy.create.search.createProxyBtn') }}
          </el-button>
        </el-form-item>
      </div>
    </el-form>
  </ProCard>
</template>

<script>
import ProCard from '@/components/ProCard'
import { guideList } from '@/api/common'
export default {
  name: 'SearchBox',
  components: {
    ProCard
  },
  data() {
    return {
      loading: false,
      formData: {
        businessType: '',
        useCase: '',
        targetWebSiteName: '',
        purpose: '',
        ipTime: '',
        quantityPerDay: '',
        useDevice: '',
        onlineQuantity: ''
      }
    }
  },
  created() {
    this.guideList()
  },
  methods: {
    guideList() {
      this.loading = true
      guideList().then(res => {
        console.log(res)
      }).finally(() => {
        this.loading = false
      })
    }
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
  width: 300px;
  margin-right: 0;

  & + .el-form-item {
    margin-left: 20px;
  }
  .el-button,
  .el-input,
  .el-select {
    width: 100%;
  }
}
</style>
