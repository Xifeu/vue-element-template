<template>
  <section class="app-main">
    <div class="nav">
      <breadcrumb />
    </div>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'

export default {
  name: 'AppMain',
  components: {
    Breadcrumb
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'avatar'
    ])
  },
  methods: {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.app-main {
  min-height: calc(100vh - 60px);
  position: relative;
  .nav{
    height: 40px;
    .el-breadcrumb {
      line-height: 40px;
    }
  }
}
</style>
