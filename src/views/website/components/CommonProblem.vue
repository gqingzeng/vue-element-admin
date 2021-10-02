<template>
  <div
    v-loading="loading"
    class="problem-box"
  >
    <div class="problem-box-content">
      <div class="title">
        {{ $t('website.commonProblem.title') }}
      </div>
      <el-collapse accordion>
        <el-collapse-item v-for="item in listData" :key="item.id" :title="item.title">
          <div v-html="item.content" />
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import { getArticle } from '@/api/common'
import requestListMixins from '@/mixins/requestList'
export default {
  name: 'CommonProblem',
  mixins: [requestListMixins],
  data() {
    return {
      listFetchApi: getArticle,
      listQuery: {
        type: 0
      },
      listPage: {
        page: 1,
        pagesize: 5
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {

  }
}
</script>

<style scoped lang="scss">
.problem-box {
  background: url("~@/assets/images/website/problem-bg.png") no-repeat;
  background-size:100% 100%;
  background-attachment:fixed;

  &-content {
    text-align: center;
    margin: 0 auto;
    width: $websiteContainer;
    padding: 110px 0;
    .title {
      color: #ffffff;
      font-weight: bold;
      font-size: 24px;
      position: relative;
      display: inline-block;
      z-index: 1;
      margin-bottom: 90px;
      &::before {
        left: -65px;
        bottom: -15px;
        position: absolute;
        content: "";
        width: 80px;
        height: 10px;
        background-image: linear-gradient(
          to right,
          rgba(#ffffff, 0),
          rgba(#e2ecfe, 0.7)
        );
        z-index: -1;
      }
      &::after {
        right: -120px;
        top: 0px;
        position: absolute;
        content: "";
        width: 150px;
        height: 15px;
        background-image: linear-gradient(
          90deg,
          rgba(#ffda84, 0.7),
          rgba(#ffffff, 0)
        );
        z-index: -1;
      }
    }
  }
  .el-collapse {
    border: none;
  }
  .el-collapse-item + .el-collapse-item.is-active {
    border-bottom: none;
  }
  .el-collapse-item.is-active {
    background-color: #fff;
    padding: 2px 37px;
    margin: -2px -37px;
    border-radius: 10px;
    ::v-deep .el-collapse-item {
      &__header {
        color: $color-primary;
      }
    }
  }
  ::v-deep .el-collapse-item__header {
    background-color: transparent;
    color: #FFFFFF;
    height: 96px;
    line-height: 96px;
    font-size: 16px;
  }
}
</style>
