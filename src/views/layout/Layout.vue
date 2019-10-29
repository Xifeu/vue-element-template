<template>
  <div class="app-wrapper">
    <el-container>
      <el-header>
        <navbar/>
      </el-header>
      <el-container>
        <el-aside style="width: 200px;">
          <sidebar class="sidebar-container"/>
        </el-aside>
        <el-main>
          <app-main/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain } from './components'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  // mixins: [ResizeMixin],
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  @import './Layout.scss';
</style>
