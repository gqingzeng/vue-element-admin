<template>
  <el-dropdown
    trigger="click"
    class="international"
    @command="handleSetLanguage"
  >
    <el-button type="text">
      <svg-icon
        class-name="international-icon"
        icon-class="language"
      />
      {{ languageText }}
      <i class="el-icon-arrow-down el-icon--right" />
    </el-button>
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
const languageTextMap = {
  zh: '中文',
  en: 'English',
  es: 'Español',
  ja: '日本語'
}
export default {
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
      console.log(lang)
      this.$i18n.locale = lang
      this.$store.dispatch('app/setLanguage', lang)
      this.$message({
        message: 'Switch Language Success',
        type: 'success'
      })
    }
  }
}
</script>
