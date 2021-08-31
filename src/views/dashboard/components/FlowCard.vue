<template>
  <ProCard>
    <template #header>
      {{ $t(`dashboard.flow.${type}`) }}
      <div class="date-box">
        <el-date-picker
          v-model="time"
          type="month"
          value-format="yyyy-MM"
          @change="getAccountFlowList"
        />
        <div class="data-value-box">
          {{ getDateText() }}
          <i class="el-icon-arrow-down" />
        </div>
      </div>
    </template>
  </ProCard>
</template>

<script>
import dayjs from 'dayjs'
import ProCard from '@/components/ProCard'
import { getAccountFlowList } from '@/api/user'
const typeMap = {
  globalDynamicHouse: 0,
  staticHouse: 1
}
export default {
  name: 'FlowCard',
  components: {
    ProCard
  },
  props: {
    type: {
      type: String,
      default: 'globalDynamicHouse'
    }
  },
  data() {
    return {
      time: dayjs().format('YYYY-MM'),
      list: []
    }
  },
  created() {
    this.getAccountFlowList()
  },
  methods: {
    getDateText() {
      const { time } = this
      return dayjs(time).format('MMM')
    },
    getAccountFlowList() {
      const { type, time } = this
      const params = {
        type: typeMap[type],
        time
      }
      getAccountFlowList(params).then(res => {
        const { data = {}} = res
        const { rows } = data
        this.list = rows
      })
    }
  }
}
</script>

<style scoped lang="scss">
.el-card {
  margin-top: 20px;
}
::v-deep .el-card__header {
  position: relative;
  .date-box {
    position: absolute;
    right: 50px;
    top: 26px;
    width: 120px;
    height: 40px;
    line-height: 40px;
    border-radius: 4px;
    overflow: hidden;
    .data-value-box {
      height: 100%;
      width: 100%;
      position: absolute;
      z-index: 0;
      background-color: rgba($color-primary, 0.06);
      color: $color-primary;
      font-size: 18px;
      font-weight: 400;
      padding: 0 30px;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      .el-icon-arrow-down {
        font-size: 14px;
        margin-left: 4px;
        color: $color-text-regular;
      }
    }
    .el-date-editor {
      z-index: 1;
      opacity: 0;
    }
  }
}
</style>
