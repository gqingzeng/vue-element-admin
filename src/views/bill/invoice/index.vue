<template>
  <div class="app-container">
    <el-row type="flex">
      <el-col :xl="14" :lg="sidebar.opened ? 24 : 12" :md="24">
        <ExplainCard />
      </el-col>
      <el-col :xl="10" :lg="sidebar.opened ? 24 : 12" :md="24">
        <CompanyCard />
      </el-col>
    </el-row>
    <TableListCard />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ExplainCard from './components/ExplainCard'
import CompanyCard from './components/CompanyCard'
import TableListCard from './components/TableListCard'
export default {
  name: 'BillInvoicePage',
  components: {
    ExplainCard,
    CompanyCard,
    TableListCard
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters(['sidebar'])
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.el-row--flex {
  flex-wrap: wrap;
}
</style>
