<script>
import { setItem } from '@/utils/localStorage'

export default {
  name: 'EnterpriseAuthRedirect',
  created() {
    const hash = window.location.hash
    setItem('enterpriseAuthRedirectHash', hash)
    window.close()
  },
  render: function(h) {
    return h() // avoid warning message
  }
}
</script>
