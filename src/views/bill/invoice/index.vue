<template>
  <div class="app-container">
    <el-row type="flex">
      <el-col :xl="14" :lg="sidebar.opened ? 24 : 12" :md="24">
        <ExplainCard />
      </el-col>
      <el-col :xl="10" :lg="sidebar.opened ? 24 : 12" :md="24">
        <CompanyCard :company-info="companyInfo" />
      </el-col>
    </el-row>
    <TableListCard :company-info="companyInfo" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ExplainCard from './components/ExplainCard'
import CompanyCard from './components/CompanyCard'
import TableListCard from './components/TableListCard'
import { getUserCompanyInfo } from '@/api/invoice'
export default {
  name: 'BillInvoicePage',
  components: {
    ExplainCard,
    CompanyCard,
    TableListCard
  },
  data() {
    return {
      companyInfo: null
    }
  },
  computed: {
    ...mapGetters(['sidebar'])
  },
  created() {
    this.getUserCompanyInfo()
  },
  methods: {
    getUserCompanyInfo() {
      getUserCompanyInfo().then(res => {
        const { data } = res
        this.companyInfo = data
      }).finally(() => {
      })
    }
  }
}
</script>

<style scoped lang="scss">
.el-row--flex {
  flex-wrap: wrap;
}
</style>
