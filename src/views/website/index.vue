<template>
  <el-container direction="vertical">
    <Sticky :z-index="100">
      <Header />
    </Sticky>
    <el-main>
      <BannerBox />
      <div style="height:500px">
        xxx
      </div>
    </el-main>
  </el-container>
</template>

<script>
import Sticky from '@/components/Sticky'
import Header from './components/Header'
import BannerBox from './components/BannerBox'
export default {
  name: 'WebsitePage',
  components: {
    Sticky,
    Header,
    BannerBox
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
.el-container {
  height: 100%;
  min-width: $websiteContainer + 20px;
}
.el-main {
  padding: 0;
  flex-shrink: 0;
}
</style>
