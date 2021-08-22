<template>
  <ProCard>
    <template #header>
      <span>{{ $t('bill.invoice.company.title') }}</span>
      <el-button
        v-if="companyInfo"
        type="primary"
        @click="openEditDialog"
      >{{ $t('globalVar.modify') }}</el-button>
    </template>
    <div
      v-if="companyInfo"
      class="container"
    >
      <div class="company-info">
        <div class="company-info-list">
          <div class="company-info-title">
            {{ $t('bill.invoice.company.companyName') }}
          </div>
          <div class="company-info-desc">
            {{ companyInfo.company_name }}
          </div>
        </div>
        <div class="company-info-list">
          <div class="company-info-title">
            {{ $t('bill.invoice.company.identifier') }}
          </div>
          <div class="company-info-desc">
            {{ companyInfo.identifier }}
          </div>
        </div>
        <div class="company-info-list">
          <div class="company-info-title">
            {{ $t('globalVar.modifyTime') }}
          </div>
          <div class="company-info-desc">
            {{ companyInfo.updatetime_text }}
          </div>
        </div>
      </div>
      <div class="tips-box">
        {{ $t('bill.invoice.company.modifyTips') }}
      </div>
    </div>
    <el-empty
      v-else
      :image-size="40"
      :description="$t('bill.invoice.company.notCompanyDesc')"
    >
      <el-button
        type="primary"
        @click="openEditDialog"
      >{{ $t('bill.invoice.company.addCompanyBtn') }}</el-button>
    </el-empty>
    <EditCompanyInfoDialog
      ref="editCompanyInfoDialog"
      :company-info="companyInfo"
    />
  </ProCard>
</template>

<script>
import ProCard from '@/components/ProCard'
import EditCompanyInfoDialog from './EditCompanyInfoDialog'
export default {
  name: 'CompanyCard',
  components: {
    ProCard,
    EditCompanyInfoDialog
  },
  props: {
    companyInfo: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
    }
  },
  methods: {
    openEditDialog() {
      this.$refs.editCompanyInfoDialog.dialogVisible = true
    }
  }
}
</script>

<style scoped lang="scss">
.el-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  ::v-deep .el-card {
    &__header {
      position: relative;
      .el-button {
        position: absolute;
        right: 50px;
        top: 46px;
        transform: translateY(-50%);
      }
    }
    &__body {
      flex: 1;
    }
  }
}

.container {
  background-color: #eeeeee;
  padding: 16px;
  box-sizing: border-box;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .company-info {
    &-list {
      display: flex;
      & + .company-info-list {
        margin-top: 16px;
      }
    }
    &-title {
      color: $color-primary;
      width: 104px;
    }
    &-desc {
      color: $color-text-regular;
    }
  }
  .tips-box {
    border: 1px solid $border-color-secondary;
    border-radius: 4px;
    padding: 8px 18px;
    line-height: 21px;
    color: $color-info;
    white-space: pre-line;
    text-align: center;
  }
}
.el-empty {
  padding: 0;
  ::v-deep .el-empty__description {
    margin-top: 5px;
  }
  ::v-deep .el-empty__bottom {
    margin-top: 8px;
  }
}
</style>
