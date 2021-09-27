<template>
  <el-dropdown
    trigger="click"
    class="international"
    @command="handleSetLanguage"
  >
    <div class="lange-box" :class="`lange-box-${type}`">
      <svg-icon
        class-name="international-icon"
        icon-class="yuyan"
      />
      <div class="lange-text">{{ languageText }}</div>
      <i class="el-icon-arrow-down el-icon--right" />
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="item in languageOptions"
        :key="item.value"
        :disabled="item.value === language"
        :command="item.value"
      >
        {{ item.label }}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import dayjs from 'dayjs'
const languageTextMap = {
  'zh-cn': '中文',
  en: 'English'
}
export default {
  name: 'LangSelect',
  props: {
    type: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    languageOptions() {
      return Object.keys(languageTextMap).map(value => ({ value, label: languageTextMap[value] }))
    },
    language() {
      return this.$store.getters.language
    },
    languageText() {
      const { language } = this
      return languageTextMap[language]
    }
  },
  methods: {
    handleSetLanguage(lang) {
      this.$i18n.locale = lang
      dayjs.locale(lang)
      this.$store.dispatch('app/setLanguage', lang)
      this.$message({
        message: 'Switch Language Success',
        type: 'success'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.lange-box {
  display: flex;
  align-items: center;
  color: $color-info;
  cursor: pointer;
  &-primary {
    color: $color-primary;
  }

  .lange-text {
    margin: 0 4px 0 10px;
  }
}
</style>
