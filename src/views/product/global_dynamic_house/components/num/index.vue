<template>
  <div>
    <ProCard>
      <SearchBox
        :type="type"
        :status="status"
        :total-info="totalInfo"
      />
    </ProCard>
    <ProductTableListCard
      :type="type"
      :status="status"
    />
    <SubAccountTableListCard
      :type="type"
      :status="status"
    />
    <el-row :gutter="20">
      <el-col :span="12">
        <FlowStatisticsCard
          :type="type"
          :status="status"
          :total-info="totalInfo"
        />
        <HelpCard />
      </el-col>
      <el-col :span="12">
        <FlowChartCard
          :type="type"
          :status="status"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import ProCard from '@/components/ProCard'
import SearchBox from './components/SearchBox'
import ProductTableListCard from './components/ProductTableListCard'
import SubAccountTableListCard from './components/SubAccountTableListCard'
import FlowStatisticsCard from './components/FlowStatisticsCard'
import HelpCard from '../../../components/HelpCard'
import FlowChartCard from '@/components/FlowChartCard'
import { getBaseTotal } from '@/api/total'
import {
  PROXY_TYPE,
  PROXY_STATUS
} from '@/constant/proxy'
export default {
  components: {
    ProCard,
    SearchBox,
    ProductTableListCard,
    SubAccountTableListCard,
    FlowStatisticsCard,
    HelpCard,
    FlowChartCard
  },
  provide() {
    return {
      productViews: this
    }
  },
  data() {
    return {
      type: PROXY_TYPE.GLOBAL_DYNAMIC_HOUSE,
      status: PROXY_STATUS.IP_NUM,
      totalInfo: {}
    }
  },
  created() {
    this.getBaseTotal()
  },
  methods: {
    getBaseTotal() {
      const { type } = this
      getBaseTotal({ type }).then(res => {
        const { data } = res
        const { num } = data
        this.totalInfo = num
      })
    }
  }
}
</script>

<style scoped lang="scss">
</style>
