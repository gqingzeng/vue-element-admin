<template>
  <div class="app-container">
    <SearchBox />
    <RecommendBox />
    <div class="documentation-nav">
      <div class="documentation-nav-title">
        {{ $t('createGuide.documentation.title') }}
      </div>
      <div class="documentation-nav-list">
        <div v-for="item in documentationNavList" :key="item" class="documentation-nav-item">
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBox from './components/SearchBox'
import RecommendBox from './components/RecommendBox'
export default {
  name: 'CreateGuidePage',
  components: {
    SearchBox,
    RecommendBox
  },
  data() {
    return {
      documentationNavList: [
        '关于在线充值的说明',
        '关于全球静态住宅的说明'
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.documentation-nav {
  background-color: #fff;
  padding: 30px 50px;
  box-sizing: border-box;
  margin-top: 20px;
  display: flex;
  align-items: center;

  &-title {
    color: $color-info;
  }
  &-list {
    display: flex;
    align-items: center;
    padding: 0 50px;
  }
  &-item {
    color: $color-text-regular;
    cursor: pointer;
    & + .documentation-nav-item {
      margin-left: 70px;
    }
  }
}
</style>
