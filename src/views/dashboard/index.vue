<template>
  <div class="app-container">
    <BalanceCard />
    <el-row :gutter="20">
      <el-col :span="12">
        <NoticeCard />
      </el-col>
      <el-col :span="12">
        <HelpCard />
      </el-col>
    </el-row>
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminDashboard from './admin'
import BalanceCard from './components/BalanceCard'
import HelpCard from './components/HelpCard'
import NoticeCard from './components/NoticeCard'
export default {
  name: 'Dashboard',
  components: { adminDashboard, BalanceCard, NoticeCard, HelpCard },
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
  }
}
</script>
