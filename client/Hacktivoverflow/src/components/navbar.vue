<template lang="html">
  <div class="home">
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="/index">Hacktivoverflow</a>
        </div>
        <ul class="nav navbar-nav">
          <li class="active"><a href="/index">Home</a></li>
          <!-- <li><a href="#">Page 1</a></li>
          <li><a href="#">Page 2</a></li> -->
        </ul>
        <form class="navbar-form navbar-left">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search">
            <div class="input-group-btn">
              <button class="btn btn-default" type="button">
                <i class="glyphicon glyphicon-search"></i>
              </button>
            </div>
          </div>
          <button @click="logout" type="button" class="btn btn-default">Logout</button>
        </form>
      </div>
    </nav>

    <!-- <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">Hacktivoverflow</a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li><form class="navbar-form navbar-left" role="search">
              <div class="form-group">
                <input type="text" class="form-control" placeholder="Search">
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form></li>
            <li><button @click="logout" type="submit" name="button">Logout</button></li>
          </ul>
        </div> -->

      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    logout () {
      localStorage.removeItem('token')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="css">
</style>
