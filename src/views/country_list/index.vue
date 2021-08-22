<template>
  <div class="app-container">
    <SearchBox ref="searchBoxRef" @query="handleQuery" />
    <ProCard class="table-container">
      <el-tabs v-model="activeName" @tab-click="handleContinentChange">
        <el-tab-pane
          v-for="item in COUNTRY_LIST"
          :key="item.continent_name"
          :name="item.continent_name"
        >
          <template #label>
            <span class="tab-pane-label">{{ item.continent_cname }}</span>
          </template>
        </el-tab-pane>
      </el-tabs>
      <el-table
        :data="tableData"
        stripe
        border
      >
        <el-table-column
          align="center"
          :label="$t('countryList.countryNameLabel')"
          prop="country_cname"
        />
        <el-table-column
          align="center"
          :label="$t('countryList.countryCodeLabel')"
          prop="country_code"
        />
      </el-table>
    </ProCard>
  </div>
</template>

<script>
import { COUNTRY_LIST, COUNTRY_MAP } from '@/constant/countryList'
import SearchBox from './components/SearchBox'
import ProCard from '@/components/ProCard'
export default {
  name: 'CountryListPage',
  components: {
    SearchBox,
    ProCard
  },
  data() {
    return {
      COUNTRY_LIST,
      activeName: COUNTRY_LIST[0].continent_name,
      tableData: COUNTRY_LIST[0].list
    }
  },
  methods: {
    handleContinentChange() {
      this.$refs.searchBoxRef.resetQuery()
      const { activeName } = this
      this.tableData = COUNTRY_MAP[activeName].list
    },
    handleQuery(queryData) {
      const { activeName } = this
      const { keyWords } = queryData
      if (keyWords) {
        this.tableData = COUNTRY_MAP[activeName].list.filter(item => {
          const { country_cname } = item
          return country_cname.includes(keyWords)
        })
      } else {
        this.tableData = COUNTRY_MAP[activeName].list
      }
    }
  }
}
</script>

<style scoped lang="scss">
.table-container {
  margin-top: 20px;
}
</style>
