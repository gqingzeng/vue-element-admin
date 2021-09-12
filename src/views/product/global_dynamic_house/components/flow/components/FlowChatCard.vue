<template>
  <ProCard v-loading="loading">
    <template #header>
      {{ $t('globalVar.flowChat') }}
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
    <div ref="chartBox" class="chart-box" />
  </ProCard>
</template>

<script>
import * as echarts from 'echarts/core'
import { GridComponent, TooltipComponent } from 'echarts/components'
import { LineChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import dayjs from 'dayjs'
import ProCard from '@/components/ProCard'
import { getAccountFlowList } from '@/api/user'
import variables from '@/styles/variables.scss'
import resizeChartMixins from '@/mixins/resizeChart'

echarts.use(
  [GridComponent, TooltipComponent, LineChart, CanvasRenderer]
)
const typeMap = {
  globalDynamicHouse: 0,
  staticHouse: 1
}
export default {
  name: 'FlowCard',
  components: {
    ProCard
  },
  mixins: [resizeChartMixins],
  props: {
    type: {
      type: String,
      default: 'globalDynamicHouse'
    }
  },
  data() {
    return {
      time: dayjs().format('YYYY-MM'),
      chart: null,
      loading: false
    }
  },
  created() {
    this.getAccountFlowList()
  },
  mounted() {
    this.chart = echarts.init(this.$refs.chartBox)
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
      this.loading = true
      getAccountFlowList(params).then(res => {
        const { data = {}} = res
        const { rows = [] } = data
        const seriesData = rows.map(item => {
          const { flow, time } = item
          return [time, flow]
        })
        this.setOptions(seriesData)
      }).finally(() => {
        this.loading = false
      })
    },
    setOptions(seriesData) {
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          textStyle: {
            color: '#FFFFFF'
          },
          backgroundColor: variables.colorPrimary,
          padding: [15, 17],
          formatter: (params) => {
            const { data } = params[0]
            const [time, flow] = data
            return `${dayjs(time).format('MM-DD')}<br /> ${this.$t(`dashboard.flow.yAxisName`)}:${flow}`
          }
        },
        xAxis: {
          type: 'time',
          name: this.$t(`dashboard.flow.xAxisName`),
          boundaryGap: false,
          interval: 5 * 24 * 60 * 60 * 100,
          axisLine: {
            lineStyle: {
              color: variables.borderColor
            }
          },
          axisLabel: {
            color: variables.colorInfo
          },
          nameTextStyle: {
            color: variables.colorInfo
          }
        },
        yAxis: {
          type: 'value',
          name: this.$t(`dashboard.flow.yAxisName`),
          axisLabel: {
            color: variables.colorInfo
          },
          nameTextStyle: {
            color: variables.colorInfo
          }
        },
        series: [{
          data: seriesData,
          type: 'line',
          symbol: 'roundRect',
          showSymbol: false,
          itemStyle: {
            borderWidth: 8,
            color: variables.colorWarning,
            borderColor: variables.colorWarning
          },
          lineStyle: {
            width: 4,
            color: variables.colorPrimary
          }
        }]
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
.chart-box {
  height: 420px;
}
</style>
