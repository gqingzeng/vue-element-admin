<template>
  <div class="app-container">
    <BalanceCard />
    <el-row :gutter="20">
      <el-col :span="12">
        <NoticeCard />
        <FlowCard type="globalDynamicHouse" />
      </el-col>
      <el-col :span="12">
        <HelpCard />
        <FlowCard type="staticHouse" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BalanceCard from './components/BalanceCard'
import HelpCard from './components/HelpCard'
import NoticeCard from './components/NoticeCard'
import FlowCard from './components/FlowCard'
export default {
  name: 'Dashboard',
  components: {
    BalanceCard,
    NoticeCard,
    HelpCard,
    FlowCard
  },
  data() {
    return {
    }
  },
  created() {
  }
}
</script>
