import ProTable from '@/components/ProTable'
import Pagination from '@/components/Pagination'
export default {
  components: {
    Pagination,
    ProTable
  },
  data() {
    return {
      listQuery: {},
      listData: [],
      listPage: {
        total: 0,
        page: 1,
        pagesize: 1
      },
      listDataFiled: 'rows',
      listFetchApi: () => { Promise.resolve() }
    }
  },
  methods: {
    async fetchData(isReset = false) {
      if (isReset) {
        this.listPage.page = 1
      }
      const loading = this.$loading({
        text: this.$t('globalVar.loading')
      })
      try {
        const { total, list } = await this.listFetch()
        this.listData = list
        this.listPage.total = total
      } catch (error) {
        this.$message.error(error.message)
      } finally {
        loading.close()
      }
    },
    listFetch() {
      return new Promise((resolve, reject) => {
        const { listDataFiled, listFetchApi, listQuery, listPage } = this
        // eslint-disable-next-line
        const { total, ...argsPage } = listPage
        const params = {
          ...argsPage,
          ...listQuery
        }
        listFetchApi(params).then(res => {
          const { data } = res
          const { [listDataFiled]: list = [], total = 0 } = data || {}
          resolve({ list, total })
        }).catch(err => {
          reject(err)
        }).finally(() => {

        })
      })
    },
    paginationChange({ page, pagesize }) {
      this.listPage.page = page
      this.listPage.pagesize = pagesize
      this.fetchData()
    }
  }
}
