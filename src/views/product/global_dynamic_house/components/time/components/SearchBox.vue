<template>
  <el-form
    ref="formRef"
    label-position="top"
    :model="formData"
    :rules="formRules"
  >
    <div class="form-item-group">
      <el-form-item
        :label="$t('globalVar.country')"
        prop="country"
      >
        <AreaSelect
          v-model="formData.country"
          :type="type"
          :status="status"
        />
      </el-form-item>
      <el-form-item
        :label="$t('globalVar.isDiff')"
        prop="is_diff"
      >
        <el-radio-group v-model="formData.is_diff">
          <el-radio
            v-for="item in IS_DIFF_LIST"
            :key="item.key"
            :label="item.key"
          >{{ $t(`globalVar.${item.name}`) }}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item
        :label="$t('globalVar.diffCycle')"
        prop="diffUser"
      >
        <el-input-number
          v-model="formData.diffUser"
          :max="2"
        />
      </el-form-item>
      <el-form-item
        :label="$t('globalVar.subAccountNum')"
        prop="num"
      >
        <el-input-number
          v-model="formData.num"
          :min="1"
        />
      </el-form-item>
    </div>
    <div class="form-item-group">
      <el-form-item
        :label="$t('globalVar.ipTimeLen')"
        prop="changeInterval"
      >
        <IpTimeLenSelect
          v-model="formData.changeInterval"
          default-first
        />
      </el-form-item>
      <el-form-item
        :label="$t('globalVar.protocol')"
        prop="agree"
      >
        <ProxyProtocolSelect
          v-model="formData.agree"
          default-first
        />
      </el-form-item>
      <el-form-item :label="$t('product.balanceSubAccount')">
        <el-input
          v-model="balanceSubAccount"
          readonly
        />
      </el-form-item>
      <el-form-item label=" ">
        <el-button
          :loading="loading"
          type="primary"
          class="el-icon-download"
          @click="handleAddAccount"
        >
          {{ $t('product.generateProxy') }}
        </el-button>
      </el-form-item>
    </div>
  </el-form>
</template>

<script>
import AreaSelect from '@/components/AreaSelect'
import IpTimeLenSelect from '@/components/IpTimeLenSelect'
import ProxyProtocolSelect from '@/components/ProxyProtocolSelect'
import { IS_DIFF_LIST } from '@/constant/product'
import { addTimeSetmealIp } from '@/api/device'
export default {
  name: 'SearchBox',
  inject: ['productViews'],
  components: {
    AreaSelect,
    IpTimeLenSelect,
    ProxyProtocolSelect
  },
  props: {
    type: {
      type: Number,
      required: true
    },
    status: {
      type: Number,
      required: true
    },
    totalInfo: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      IS_DIFF_LIST,
      formData: {
        country: '',
        is_diff: 0,
        diffUser: '',
        num: 1,
        changeInterval: '',
        agree: ''
      },
      formRules: {
        country: [
          { required: true, message: this.$t('globalVar.countryPlaceholder') }
        ]
      },
      loading: false
    }
  },
  computed: {
    balanceSubAccount() {
      const { totalInfo } = this
      const { base } = totalInfo
      return base
    }
  },
  methods: {
    handleAddAccount() {
      this.$refs.formRef.validate((valid) => {
        if (valid) {
          const { formData, type } = this
          this.loading = true
          addTimeSetmealIp({ ...formData, type }).then(res => {
            this.$message.success(this.$t('globalVar.generateSuccess'))
            this.productViews.$emit('generateProxySuccess')
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
