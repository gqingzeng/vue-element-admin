<template>
  <div class="app-container">
    <ProCard :header="$t('profile.title')">
      <el-form
        :model="formData"
        label-position="top"
      >
        <el-form-item :label="$t('profile.avatar')" class="avatar-form-item">
          <UploadImage
            :size="2 * 1024 * 1024"
            :on-success="uploadAvatarSuccess"
          >
            <el-avatar
              v-if="formData.avatar"
              shape="square"
              :size="80"
              :src="formData.avatar"
            />
            <i
              v-else
              class="el-icon-plus"
            />
          </UploadImage>
          <div class="tips"> <i class="el-icon-warning color-warning" />{{ $t('profile.avatarTips') }}</div>
        </el-form-item>
        <el-form-item
          :label="$t('profile.username')"
          prop="username"
        >
          <el-input
            v-model="formData.username"
            :placeholder="$t('profile.usernamePlaceholder')"
          />
        </el-form-item>
        <el-form-item
          :label="$t('profile.mobile')"
          prop="mobile"
        >
          <el-input
            v-model="formData.mobile"
            :placeholder="$t('profile.mobilePlaceholder')"
          >
            <template slot="suffix">
              <el-button type="text">{{ $t('profile.goVerify') }}</el-button>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item
          :label="$t('profile.email')"
          prop="email"
        >
          <el-input
            v-model="formData.email"
            :placeholder="$t('profile.emailPlaceholder')"
          >
            <template slot="suffix">
              <el-button
                type="success"
                plain
                icon="el-icon-circle-check"
              >{{ $t('profile.verifySuccess') }}</el-button>
            </template>
          </el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" class="submit-btn">
        {{ $t('globalVar.submit') }}
      </el-button>
    </ProCard>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProCard from '@/components/ProCard'
import UploadImage from '@/components/UploadImage'
export default {
  name: 'Profile',
  components: {
    ProCard,
    UploadImage
  },
  data() {
    return {
      formData: {
        avatar: '',
        username: '',
        mobile: '',
        email: ''
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
      const { userInfo } = this
      const {
        avatar,
        username,
        email,
        mobile
      } = userInfo
      this.formData = {
        avatar,
        username,
        mobile,
        email
      }
    },
    uploadAvatarSuccess(avatar) {
      this.formData.avatar = avatar
    }
  }
}
</script>

<style lang="scss" scoped>
.avatar-form-item {
  ::v-deep .el-form-item__content {
    display: flex;
  }
  .tips {
    font-size: 14px;
    color: $color-primary;
    margin-left: 35px;
    i {
      margin-right: 5px;
    }
  }
  ::v-deep .el-avatar > img {
    width: 100%;
    height: 100%;
  }
}
.el-input {
  width: 500px;
  ::v-deep {
    .el-input__inner {
      padding-right: 110px;
    }
    .el-input__suffix {
      padding: 0 10px;
      width: auto;
    }
  }
  .el-button {
    font-size: 14px;
    &--text {
      color: $color-primary;
    }
    &--success {
      padding: 3px 10px;
    }
  }
}
.submit-btn {
  width: 240px;
  margin-top: 50px;
}
</style>
