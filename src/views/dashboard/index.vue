<template>
  <div class="app-container">
    <BalanceCard />
    <el-row :gutter="20">
      <el-col :span="12">
        <NoticeCard />
        <FlowChartCard :type="PROXY_TYPE.GLOBAL_DYNAMIC_HOUSE" />
      </el-col>
      <el-col :span="12">
        <HelpCard />
        <FlowChartCard :type="PROXY_TYPE.GLOBAL_STATIC_HOUSE" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BalanceCard from './components/BalanceCard'
import HelpCard from './components/HelpCard'
import NoticeCard from './components/NoticeCard'
import FlowChartCard from '@/components/FlowChartCard'
import { PROXY_TYPE } from '@/constant/proxy'
export default {
  name: 'Dashboard',
  components: {
    BalanceCard,
    NoticeCard,
    HelpCard,
    FlowChartCard
  },
  data() {
    return {
      PROXY_TYPE
    }
  },
  created() {
  }
}
</script>
