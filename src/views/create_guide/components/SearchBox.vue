<template>
  <ProCard
    v-loading="loading"
    :header="$t('createGuide.search.title')"
  >
    <el-form
      ref="formRule"
      label-position="top"
      inline
      :model="formData"
      :rules="formRules"
    >
      <div class="form-item-group">
        <el-form-item
          :label="$t('createGuide.search.purpose')"
          prop="guide_id"
        >
          <el-cascader
            v-model="formData.guide_id"
            :options="purposeTreeList"
            :props="{
              children: 'tree',
              value: 'id',
              label: 'name',
              emitPath: false,
            }"
          />
        </el-form-item>
        <el-form-item
          :label="$t('globalVar.ipTimeLen')"
          prop="ip_timelen"
        >
          <el-input
            v-model="formData.ip_timelen"
            type="number"
          />
        </el-form-item>
        <el-form-item
          :label="$t('createGuide.search.quantityPerDay')"
          prop="ip_num"
        >
          <el-input
            v-model="formData.ip_num"
            type="number"
          />
        </el-form-item>
        <el-form-item
          :label="$t('createGuide.search.flow')"
          prop="bill"
        >
          <el-input
            v-model="formData.bill"
            type="number"
          />
        </el-form-item>
      </div>
      <div class="form-item-group">
        <el-form-item
          :label="$t('createGuide.search.onlineQuantity')"
          prop="ip_online"
        >
          <el-input
            v-model="formData.ip_online"
            type="number"
          />
        </el-form-item>
        <el-form-item
          :label="$t('createGuide.search.useDevice')"
          prop="device"
        >
          <el-select v-model="formData.device">
            <el-option
              v-for="item in deviceList"
              :key="item"
              :label="item"
              :value="item"
            />
          </el-select>
        </el-form-item>
        <el-form-item
          :label="$t('createGuide.search.targetWebSiteName')"
          prop="name"
        >
          <el-input v-model="formData.name" />
        </el-form-item>
        <el-form-item label=" ">
          <el-button
            type="primary"
            class="el-icon-search"
            @click="handleSumbit"
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
import { userGuide } from '@/api/set_meal'
export default {
  name: 'SearchBox',
  components: {
    ProCard
  },
  data() {
    return {
      loading: false,
      formData: {
        guide_id: '',
        name: '',
        ip_timelen: '',
        ip_num: '',
        device: '',
        ip_online: '',
        bill: ''
      },
      formRules: {
        guide_id: [
          { required: true, message: this.$t('createGuide.search.purposePlaceholder'), trigger: 'blur' }
        ],
        ip_timelen: [
          { required: true, message: this.$t('globalVar.ipTimeLenPlaceholder'), trigger: 'blur' }
        ],
        ip_num: [
          { required: true, message: this.$t('createGuide.search.quantityPerDayPlaceholder'), trigger: 'blur' }
        ],
        device: [
          { required: true, message: this.$t('createGuide.search.useDevicePlaceholder'), trigger: 'blur' }
        ],
        ip_online: [
          { required: true, message: this.$t('createGuide.search.onlineQuantityPlaceholder'), trigger: 'blur' }
        ],
        bill: [
          { required: true, message: this.$t('createGuide.search.flowPlaceholder'), trigger: 'blur' }
        ]
      },
      purposeTreeList: [],
      deviceList: []
    }
  },
  created() {
    this.getGuideList()
  },
  methods: {
    getGuideList() {
      this.loading = true
      getGuideList().then(res => {
        const { data = {}} = res
        const { guide = [], device = [] } = data
        this.purposeTreeList = guide
        this.deviceList = device
      }).finally(() => {
        this.loading = false
      })
    },
    handleSumbit() {
      this.$refs.formRule.validate((valid) => {
        if (valid) {
          const { formData } = this
          this.loading = true
          userGuide(formData).then(res => {
            const { data } = res
            const { type = [], status = [] } = data
            this.$emit('confirm', { type, status })
          }).finally(() => {
            this.loading = false
          })
        }
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

  .el-cascader,
  .el-button,
  .el-input,
  .el-select {
    width: 100%;
  }
}
</style>
