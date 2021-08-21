<template>
  <div class="dashboard-container">
    <StatisticsCard />
    <component :is="currentRole" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import adminDashboard from './admin'
import StatisticsCard from './components/StatisticsCard'
export default {
  name: 'Dashboard',
  components: { adminDashboard, StatisticsCard },
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
