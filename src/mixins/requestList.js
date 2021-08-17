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
        pageSize: 20
      },
      listDataFiled: 'list',
      listFetchApi: () => { Promise.resolve() }
    }
  },
  methods: {
    async fetchData(isReset = false) {
      if (isReset) {
        this.listPage.page = 1
      }
      const loading = this.$loading(this.$t('globalVar.loading'))
      try {
        const { total, list } = await this.listFetch()
        loading.close()
        this.listData = list
        this.listPage.total = total
      } catch (error) {
        this.$message.error(error.message)
        loading.close()
      }
    },
    async listFetch() {
      const { listDataFiled, listFetchApi, listQuery, listPage } = this
      try {
        const res = await listFetchApi({ ...listQuery, ...listPage })
        const { [listDataFiled]: list, total } = res
        return Promise.resolve({ list, total })
      } catch (err) {
        return Promise.reject(err)
      }
    },
    changeListPage(page) {
      this.listPage.page = page
      this.fetchData()
    },
    changeListPageSize(pageSize) {
      this.listPage.pageSize = pageSize
      this.fetchData()
    }
  }
}
