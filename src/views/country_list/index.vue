<template>
  <div>
    <SearchBox />
    <el-card shadow="never">
      <el-tabs v-model="activeName">
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
    </el-card>
  </div>
</template>

<script>
import { COUNTRY_LIST } from '@/constant/countryList'
import SearchBox from './components/SearchBox'
console.log(COUNTRY_LIST)
export default {
  name: 'CountryListPage',
  components: {
    SearchBox
  },
  data() {
    return {
      COUNTRY_LIST,
      activeName: COUNTRY_LIST[0].continent_name,
      tableData: COUNTRY_LIST[0].list
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.el-card {
  margin-top: 20px;
  .el-table {
    margin-top: 5px;
  }
}
</style>
