<template>
  <div class="navbar">
    <div class="logo">
      <svg-icon icon-class="logo"/>
    </div>
    <div class="user">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <svg-icon icon-class="user"/> admin
        </div>
        <el-dropdown-menu slot="dropdown" class="user-dropdown">
          <router-link class="inlineBlock" to="/">
            <el-dropdown-item>
              主页
            </el-dropdown-item>
          </router-link>
          <el-dropdown-item divided>
            <span style="display:block;" @click="logout">登出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload() // 为了重新实例化vue-router对象 避免bug
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.navbar {
  height: 60px;
  padding: 0 50px;
  background: #262628;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo{
    .svg-icon{
      font-size: 100px;
    }
  }
  .user{
    height: 23px;
    width: max-content;
    .avatar-container {
      .avatar-wrapper {
        cursor: pointer;
        color:white;
        .svg-icon{
          font-size: 24px;
        }
      }
    }
  }

}
</style>

