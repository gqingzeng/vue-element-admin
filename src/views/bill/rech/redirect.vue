<script>
import { setItem } from '@/utils/localStorage'

export default {
  name: 'RechRedirectPage',
  created() {
    const hash = window.location.hash
    setItem('rechRedirectPageCallbackHash', hash)
    window.close()
  },
  render: function(h) {
    return h() // avoid warning message
  }
}
</script>

