<template>
  <ProCard :header="$t(`product.statistics${statusName}`)">
    <div class="info-box">
      <i18n
        :path="`product.usage${statusName}`"
        tag="div"
        class="usage-total"
      >
        <span>{{ totalInfo.total }}</span>
        <span>{{ totalInfo.use }}</span>
      </i18n>
      <i18n
        :path="`product.residual${statusName}`"
        tag="div"
        class="residual-total"
      >
        <span>{{ totalInfo.base }}</span>
      </i18n>
    </div>
    <el-progress
      :percentage="percentage"
      status="warning"
      :show-text="false"
      :stroke-width="10"
    />
  </ProCard>
</template>

<script>
import { upperFirst } from 'lodash-es'
import ProCard from '@/components/ProCard'
import { PROXY_STATUS_MAP } from '@/constant/proxy'
export default {
  name: 'TotalCard',
  components: {
    ProCard
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
      PROXY_STATUS_MAP
    }
  },
  computed: {
    percentage() {
      const { totalInfo } = this
      const { total = 0, use = 0 } = totalInfo
      if (Number(total) === 0 || Number(use) === 0) {
        return 0
      }
      return Number(use) / Number(total)
    },
    statusName() {
      const { status } = this
      return upperFirst(PROXY_STATUS_MAP[status].name)
    }
  },
  methods: {
    upperFirst
  }
}
</script>

<style scoped lang="scss">
.el-card {
  margin-top: 20px;
}
.info-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  padding: 15px 0;
  .usage-total {
    color: $color-info;
  }
  .residual-total {
    color: $color-text-regular;

    & > span {
      font-weight: bold;
    }
  }
}
</style>
