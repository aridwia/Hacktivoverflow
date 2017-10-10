<template lang="html">
<div class="">
  <div class="col col-md-offset-3 col-md-5">
    <div class="form-group">
      <label class="control-label" for="focusedInput">Username</label>
      <input class="form-control"  type="text" v-model="login.username">
    </div>
    <div class="form-group">
      <label class="control-label" for="focusedInput">Password</label>
      <input class="form-control"  type="text" v-model="login.password">
    </div>
    <div class="form-group">
      <label class="control-label" for="focusedInput">Email</label>
      <input class="form-control"  type="text" v-model="login.email">
    </div>
    <button @click="submitUser(login), pindah()" class="btn btn-primary" type="submit" name="button">Register</button>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      login: {
        username: '',
        password: '',
        email: ''
      }
    }
  },
  methods: {
    ...mapActions([
      'submitUser'
    ])
  },
  pindah () {
    this.$router.push('/')
  }
}
</script>

<style lang="css">
</style>
