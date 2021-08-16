<template>
  <div class="dashboard-container">
    <StatisticsCard />
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminDashboard from './admin'
import editorDashboard from './editor'
import StatisticsCard from './components/StatisticsCard'
import { getIndexInfo } from '@/api/dashboard'
export default {
  name: 'Dashboard',
  components: { adminDashboard, editorDashboard, StatisticsCard },
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
    if (!this.roles.includes('admin')) {
      this.currentRole = 'editorDashboard'
    }
    getIndexInfo().then(res => {
      console.log(res)
    })
  }
}
</script>
