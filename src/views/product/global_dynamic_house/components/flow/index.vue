<template>
  <div>
    <ProCard>
      <SearchBox />
    </ProCard>
    <ProductTableListCard />
    <SubAccountTableListCard />
    <el-row :gutter="20">
      <el-col :span="12">
        <FlowStatisticsCard />
        <HelpCard />
      </el-col>
      <el-col :span="12">
        <FlowChatCard />
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
import HelpCard from './components/HelpCard'
import FlowChatCard from './components/FlowChatCard'
export default {
  components: {
    ProCard,
    SearchBox,
    ProductTableListCard,
    SubAccountTableListCard,
    FlowStatisticsCard,
    HelpCard,
    FlowChatCard
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
</style>
