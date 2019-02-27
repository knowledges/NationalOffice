<style rel="stylesheet/scss" lang="scss" scoped></style>
<template>
    <div>
      首页
      <router-link to="/industry">工业总体</router-link>
      <router-link to="/trade">行业总体</router-link>
      <router-link to="/business">商业总体</router-link>
    </div>
</template>
<script>
export default {
  name: '',
  components: {},
  props: {},
  data () {
    return {}
  },
  watch: {},
  mounted () {
    let headers = {}
    headers.userCode = '320300020101'
    headers.password = '123456'
    this.$fetch({
      url: 'login.do',
      method: 'POST',
      headers
    }).then((response) => {
      console.log(response)
    })
  },
  methods: {}
}
</script>

