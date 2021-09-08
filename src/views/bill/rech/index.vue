<template>
  <div class="app-container">
    <ProCard :header="$t('bill.rech.title')">
      <el-form
        ref="formRule"
        label-position="top"
        :model="formData"
        :rules="formRules"
      >
        <el-form-item
          v-if="formData.type === RECH_TYPE.CDKEY"
          :label="$t('globalVar.CDKEY')"
        >
          <el-input
            v-model.number="formData.cardno"
            class="money-input"
            :placeholder="$t('globalVar.CDKEYPlaceholder')"
          />
        </el-form-item>
        <el-form-item
          v-else
          :label="$t('globalVar.amountOfMoney')"
        >
          <el-input
            v-model.number="formData.money"
            class="money-input"
            type="number"
            :placeholder="$t('globalVar.amountOfMoneyPlaceholder')"
          >
            <span
              slot="prefix"
              class="el-input__icon"
            >
              ￥
            </span>
          </el-input>
          <div class="preset-box">
            <div class="preset-label">
              {{ $t('bill.rech.presetLabel') }}：
            </div>
            <div class="preset-list">
              <div
                v-for="money in presetMoneyList"
                :key="money"
                class="preset-item"
                :class="{
                  active: money === formData.money
                }"
                @click="setRechMoney(money)"
              >
                ￥{{ money }}
              </div>
            </div>
          </div>
        </el-form-item>
        <el-form-item :label="$t('bill.rech.rechType')">
          <div class="rech-type-list">
            <div
              v-for="item in RECH_TYPE_LIST"
              :key="item.key"
              class="rech-type-item"
              :class="{
                active: formData.type === item.key
              }"
              @click="setRechType(item.key)"
            >
              <div class="rech-type-icon">
                <svg-icon :icon-class="item.icon" />
              </div>
              <div class="rech-icon">
                {{ $t(`globalVar.${item.name}`) }}
              </div>
            </div>
          </div>
        </el-form-item>
      </el-form>
      <el-button
        :loading="loading"
        type="primary"
        class="rech-btn"
        @click="handleSubmit"
      >{{ $t('bill.rech.rechBtnText') }}</el-button>
    </ProCard>
  </div>
</template>

<script>
import ProCard from '@/components/ProCard'
import { RECH_TYPE, RECH_TYPE_LIST } from '@/constant/bill'
import { wechatAliyun } from '@/api/user'
import openWindow from '@/utils/open-window'
export default {
  name: 'BillRechPage',
  components: {
    ProCard
  },
  data() {
    return {
      RECH_TYPE,
      RECH_TYPE_LIST,
      presetMoneyList: [20, 30, 40, 100, 150],
      formData: {
        money: 30,
        cardno: '',
        type: RECH_TYPE.WECHART
      },
      formRules: {
        money: [
          { required: true, message: this.$t('globalVar.amountOfMoneyPlaceholder'), trigger: 'blur' }
        ],
        cardno: [
          { required: true, message: this.$t('globalVar.CDKEYPlaceholder'), trigger: 'blur' }
        ]
      },
      loading: false
    }
  },
  created() {
  },
  methods: {
    setRechMoney(money) {
      this.formData.money = money
    },
    setRechType(type) {
      this.formData.type = type
    },
    handleSubmit() {
      this.$refs.formRule.validate((valid) => {
        if (valid) {
          const { formData } = this
          this.loading = true
          wechatAliyun(formData).then(res => {
            console.log(res)
            const { type } = formData
            if (type !== RECH_TYPE.CDKEY) {
              const { data } = res
              const { code_url } = data
              openWindow(code_url, 700, 700)
            }
          }).finally(() => {
            this.loading = false
          })
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
.money-input {
  width: 300px;
}
.preset {
  &-box {
    display: flex;
    align-items: center;
    padding: 0 5px;
    line-height: 16px;
    font-size: 12px;
    margin-top: 10px;
  }
  &-label {
    color: $color-primary;
  }
  &-list {
    display: flex;
    align-items: center;
  }
  &-item {
    border-radius: 4px;
    border: 1px solid $border-color-secondary;
    height: 20px;
    line-height: 20px;
    padding: 0 8px;
    margin: 0 3px;
    cursor: pointer;
    &.active {
      color: $color-warning;
      border-color: $color-warning;
      background-color: mix(#ffffff, $color-warning, 90%);
    }
  }
}

.rech-type {
  &-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    color: $color-text-regular;
  }
  &-item {
    display: flex;
    align-items: center;
    height: 40px;
    width: 300px;
    border-radius: 4px;
    border: 1px solid $border-color;
    box-sizing: border-box;
    cursor: pointer;
    margin-bottom: 20px;
    margin-right: 110px;
    &.active {
      color: $color-warning;
      border-color: $color-warning;
      background-color: mix(#ffffff, $color-warning, 90%);
    }
  }
  &-icon {
    width: 40px;
    text-align: center;
    color: $color-primary;
    font-size: 18px;
  }
}
.rech-btn {
  width: 240px;
  margin-top: 40px;
}
</style>
