<template lang="html">
  <div class="">
    <navbar></navbar>
    <listquestion/>
    <router-view></router-view>
  </div>
</template>

<script>
import navbar from '@/components/navbar'
import listquestion from '@/components/listquestion'
export default {
  data () {
    return {
      allquestion: []
    }
  },
  components: {
    navbar,
    listquestion
  },
  methods: {
    ceklogin () {
      if (localStorage.token) {
        if (localStorage.token !== 'undefined') {
          this.$router.push('/index')
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
