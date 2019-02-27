<style scoped rel="stylesheet/scss" lang="scss">
</style>
<template>
  <div id="app">
    <header class="main-header clearfix">
      <span class="logo-mini">
        <a href="javascript:;;" class="banner">
          <img alt="Logo" class="img-responsive center-block logo">
        </a>
        <h3 class="">国家局</h3>
      </span>
      <!-- Header Navbar -->
      <nav class="navbar navbar-static-top" role="navigation">
        <!-- Sidebar toggle button-->
        <a v-if="false" href="javascript:;;" class="sidebar-toggle" role="button">
          <span class="sr-only"> </span>
        </a>
        <div class="navbar-menu">
          <ul style="margin-left: 30px">
          </ul>
        </div>
      </nav>
    </header>
    <router-view>111</router-view>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'App',
    mounted () { },
    data () {
      return {
      }
    },
    computed: {
      ...mapState([
      ])
    },
    methods: {
      init () { }
    },
    watch: {
    }
  }
</script>
