<template>
  <ProCard>
    <template #header>
      {{ $t('dashboard.help.title') }}
      <a
        class="more-btn"
        href="#"
        target="_blank"
      >{{ $t('globalVar.more') }}</a>
    </template>
    <ul class="help-list">
      <li
        v-for="(item, idx) in helpList"
        :key="idx"
      >
        <a
          :href="item.link"
          target="_blank"
        >{{ item.title }}</a>
        <i class="el-icon-arrow-right" />
      </li>
    </ul>
  </ProCard>
</template>

<script>
import ProCard from '@/components/ProCard'
export default {
  name: 'HelpCard',
  components: {
    ProCard
  },
  data() {
    return {
      helpList: [
        {
          title: '关于在线充值的说明',
          link: ''
        },
        {
          title: '关于全球静态住宅的说明',
          link: ''
        },
        {
          title: '关于个人信息中，实名认证的问题',
          link: ''
        }
      ]
    }
  },
  methods: {

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
.help-list {
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
    &::before {
      content: "";
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: $color-primary;
    }
    & > a {
      flex: 1 ;
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
