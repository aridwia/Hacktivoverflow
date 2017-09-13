<template lang="html">
  <div class="">
    <navbar></navbar>
    <listquestion></listquestion>
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
  }
}
</script>

<style lang="css">
</style>
