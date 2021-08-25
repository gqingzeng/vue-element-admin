<template>
  <div class="app-container">
    <ProCard :header="$t('certification.personal.title')">
      <ProSteps :active="activeStep" simple>
        <ProStep :title="$t('certification.personal.step1')" />
        <ProStep :title="$t('certification.personal.step2')" />
        <ProStep :title="$t('certification.personal.step3')" />
      </ProSteps>
      <keep-alive>
        <component :is="activeStepComponent" :form-data="formData" @updateStep="updateStep" />
      </keep-alive>
    </ProCard>
  </div>
</template>

<script>
import ProCard from '@/components/ProCard'
import { ProSteps, ProStep } from '@/components/ProSteps'

const componentMaps = {
  1: () => import('./components/BasicInfo'),
  2: () => import('./components/CheckMethod'),
  3: () => import('./components/CheckSuccess')
}

export default {
  name: 'CertificationPersonalPage',
  components: {
    ProCard,
    ProSteps,
    ProStep
  },
  data() {
    return {
      activeStep: 1,
      formData: {}
    }
  },
  computed: {
    activeStepComponent() {
      const { activeStep } = this
      return componentMaps[activeStep]
    }
  },
  methods: {
    updateStep(step, formData) {
      this.activeStep = step
      if (formData) {
        this.formData = formData
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
