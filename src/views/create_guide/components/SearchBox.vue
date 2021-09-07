<template>
  <ProCard
    v-loading="loading"
    :header="$t('createGuide.search.title')"
  >
    <el-form
      label-position="top"
      inline
    >
      <div class="form-item-group">
        <el-form-item
          :label="$t('createGuide.search.purpose')"
          prop="businessType"
          class="purpose-form-item"
          required
        >
          <el-cascader
            v-model="formData.businessType"
            :options="purposeTreeList"
            :props="{
              children: 'tree',
              value: 'id',
              label: 'name'
            }"
          />
        </el-form-item>
        <el-form-item
          :label="$t('createGuide.search.targetWebSiteName')"
          prop="targetWebSiteName"
        >
          <el-input v-model="formData.targetWebSiteName" />
        </el-form-item>
        <el-form-item
          :label="$t('createGuide.search.ipTime')"
          prop="ipTime"
        >
          <el-input v-model="formData.ipTime" />
        </el-form-item>
      </div>
      <div class="form-item-group">
        <el-form-item
          :label="$t('createGuide.search.quantityPerDay')"
          prop="quantityPerDay"
        >
          <el-input v-model="formData.quantityPerDay" />
        </el-form-item>
        <el-form-item
          :label="$t('createGuide.search.useDevice')"
          prop="useDevice"
        >
          <el-select v-model="formData.useDevice" />
        </el-form-item>
        <el-form-item
          :label="$t('createGuide.search.onlineQuantity')"
          prop="onlineQuantity"
        >
          <el-input v-model="formData.onlineQuantity" />
        </el-form-item>
        <el-form-item label=" ">
          <el-button
            type="primary"
            class="el-icon-search"
          >
            {{ $t('createGuide.search.createProxyBtn') }}
          </el-button>
        </el-form-item>
      </div>
    </el-form>
  </ProCard>
</template>

<script>
import ProCard from '@/components/ProCard'
import { getGuideList } from '@/api/common'
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
      },
      purposeTreeList: []
    }
  },
  created() {
    this.getGuideList()
  },
  methods: {
    getGuideList() {
      this.loading = true
      getGuideList().then(res => {
        const { data = [] } = res
        this.purposeTreeList = data
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
  flex-shrink: 0;
  width: calc((100% - 60px) / 4);
  margin-right: 0;
  ::v-deep &__label {
    height: 40px;
  }
  & + .el-form-item {
    margin-left: 20px;
  }

  &.purpose-form-item {
    width: calc((100% - 20px) / 2);
  }
  .el-cascader,
  .el-button,
  .el-input,
  .el-select {
    width: 100%;
  }
}
</style>
