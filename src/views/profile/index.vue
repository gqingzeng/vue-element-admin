<template>
  <div class="app-container">
    <ProCard :header="$t('profile.title')">
      <!-- <el-form>
xxx
      </el-form> -->
    </ProCard>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProCard from '@/components/ProCard'
export default {
  name: 'Profile',
  components: {
    ProCard
  },
  data() {
    return {
      formData: {

      }
    }
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  created() {
    this.setFormData()
  },
  methods: {
    setFormData() {
      // const { userInfo } = this;
      // const {
      //   avatar,
      //   username,
      //   nickname,
      //   birthday,
      //   bio
      // } = userInfo
    }
  }
}
</script>
