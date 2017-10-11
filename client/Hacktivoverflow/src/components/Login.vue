<template lang="html">
  <div class="">
    <form class="form-horizontal">
      <fieldset>
        <legend>Wellcome to Hacktivoverflow</legend>
        <div class="form-group">
          <label for="inputEmail" class="col-md-2 control-label">Username</label>
          <div class="col-md-8">
            <input type="text" class="form-control" placeholder="Username" v-model="formlogin.username">
          </div>
        </div>
        <div class="form-group">
          <label for="inputPassword" class="col-md-2 control-label">Password</label>
          <div class="col-md-8">
            <input type="password" class="form-control" placeholder="Password" v-model="formlogin.password">
          </div>
        </div>
        <button @click="login(formlogin)" class="btn btn-primary" type="button" name="button">Login</button>
        <button @click="register()" class="btn btn-danger" type="button" name="button">Register</button>
      </fieldset>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      formlogin: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      axios.post(`http://35.197.131.206/users/signin`, this.formlogin)
      .then(data => {
        console.log(data)
        localStorage.setItem('token', data.data.token)
        this.$router.push('/index')
      })
      .catch(err => {
        console.log(err)
      })
    },
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
    },
    register () {
      this.$router.push('/register')
    }
  },
  created () {
    this.ceklogin()
  }
}
</script>

<style  scoped>
  body {
    width:600px;
    height:480px;
    position:absolute;
    left:40%;
    top:30%;
    margin-left:-75px; /* (300/2) */
    margin-top:-60px;  /* (240/2) */
  }
</style>
