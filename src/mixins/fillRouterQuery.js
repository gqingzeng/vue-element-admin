export default {
  methods: {
    fillRouterQuery(val) {
      const query = Object.keys(val).reduce((obj, key) => {
        if (val[key]) {
          obj[key] = val[key]
        }
        return obj
      }, {})
      if (!Object.keys(query).length) {
        return
      }
      this.$router.push({
        path: this.$route.path,
        query: {
          ...this.$route.query,
          ...query
        }
      })
    }
  }
}
