<template lang="html">
  <div class="">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import Detailquestion from '@/components/Detailquestion'
export default {
  data () {
    return {
      allquestion: []
    }
  },
  components: {
    navbar,
    Detailquestion
  },
  methods: {
    ceklogin () {
      if (localStorage.token) {
        if (localStorage.token !== 'undefined') {
          return
        } else {
          this.$router.push('/')
        }
      } else {
        this.$router.push('/')
      }
    }
  },
  created () {
    this.ceklogin()
  }
}

</script>

<style lang="css">
</style>
