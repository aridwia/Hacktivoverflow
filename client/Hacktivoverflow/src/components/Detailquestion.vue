<template lang="html">
  <div class="">
<router-view/>
    <div class="panel panel-default">
      <div class="panel-heading" >title</div>
      <div class="panel-body">content</div>
    </div>

  </div>
</template>

<script>
export default {
  props: ['id']
}
</script>

<style lang="css">
</style>
