<template>
  <ProCard>
    <template #header>
      {{ $t('dashboard.notice.title') }}
      <div class="more-btn">{{ $t('globalVar.more') }}</div>
    </template>
    <ul class="notice-list">
      <li
        v-for="(item, idx) in listData"
        :key="idx"
        @click="openArticleDetail(item)"
      >
        <span>{{ item.title }}</span>
        <i class="el-icon-arrow-right" />
      </li>
    </ul>
    <RichTextPreviewDialog
      ref="richTextPreviewDialogRef"
      :title="$t('dashboard.notice.title')"
    />
  </ProCard>
</template>

<script>
import ProCard from '@/components/ProCard'
import { getArticle } from '@/api/common'
import RichTextPreviewDialog from '@/components/RichTextPreviewDialog'
import requestListMixins from '@/mixins/requestList'
export default {
  name: 'NoticeCard',
  components: {
    ProCard,
    RichTextPreviewDialog
  },
  mixins: [requestListMixins],
  data() {
    return {
      listFetchApi: getArticle,
      listQuery: {
        type: 0
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    openArticleDetail(item) {
      this.$refs.richTextPreviewDialogRef.openDialog(item.content)
    }
  }
}
</script>

<style scoped lang="scss">
.el-card {
  margin-top: 20px;
}
::v-deep .el-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.more-btn {
  font-size: 16px;
  color: $color-info;
  cursor: pointer;
  font-weight: normal;
  &:hover {
    color: $color-primary;
  }
}
.notice-list {
  margin: 0;
  padding: 0;
  & > li {
    line-height: 32px;
    color: $color-text-regular;
    padding: 0 10px 0 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 4px;
    cursor: pointer;
    &::before {
      content: "";
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: $color-primary;
    }
    & > span {
      flex: 1;
      padding: 0 8px;
      display: block;
    }
    &:hover {
      color: #ffffff;
      background-color: $color-primary;
      &::before {
        background-color: #ffffff;
      }
      .el-icon-arrow-right {
        color: #ffffff;
      }
    }
    .el-icon-arrow-right {
      float: right;
      line-height: 32px;
    }
  }
}
</style>
