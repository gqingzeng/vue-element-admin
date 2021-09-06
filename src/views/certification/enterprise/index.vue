<template>
  <div class="app-container">
    <ProCard :header="$t('certification.enterprise.title')">
      <ProSteps :active="activeStep">
        <ProStep :title="$t('certification.enterprise.step1')" />
        <ProStep :title="$t('certification.enterprise.step2')" />
      </ProSteps>
      <component :is="activeStepComponent" />
    </ProCard>
  </div>
</template>

<script>
import { getLocalStorageKey } from '@/utils/localStorage'
import ProCard from '@/components/ProCard'
import { ProSteps, ProStep } from '@/components/ProSteps'
import { getQueryObject } from '@/utils'
const componentMaps = {
  1: () => import('./components/BasicInfo'),
  2: () => import('./components/CheckSuccess')
}
export default {
  name: 'CertificationEnterprisePage',
  components: {
    ProCard,
    ProSteps,
    ProStep
  },
  data() {
    return {
      activeStep: 1
    }
  },
  computed: {
    activeStepComponent() {
      const { activeStep } = this
      return componentMaps[activeStep]
    }
  },
  created() {
    window.addEventListener('storage', this.handleEnterpriseAuthRedirectSuccess)
  },
  destroyed() {
    window.removeEventListener('storage', this.handleEnterpriseAuthRedirectSuccess)
  },
  methods: {
    handleEnterpriseAuthRedirectSuccess(event) {
      if (event.key === getLocalStorageKey('enterpriseAuthRedirectHash')) {
        const { status } = getQueryObject(event.newValue)
        console.log(status)
        if (status === '1') {
          this.activeStep = 2
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.pro-steps {
  margin-bottom: 30px;
}
</style>
