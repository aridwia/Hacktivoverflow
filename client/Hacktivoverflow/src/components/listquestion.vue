<template lang="html">
  <div class="container">

    <div class="pull-left">
      <button type="button" class="btn btn-primary glyphicon glyphicon-pencil btn btn-info btn-lg" data-toggle="modal" data-target="#tes"> Create Question</button>

      <!-- Modal -->
      <div class="modal fade" id="tes" role="dialog">
        <div class="modal-dialog">

          <!-- Modal content-->
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title">Create your question</h4>
            </div>
            <div class="modal-body">
              <!-- <form @submit.prevent="submitQuestion(formquestion)" class="form-horizontal"> -->
              <form v-on:submit="getquestion()" class="form-horizontal">
                <fieldset>
                  <div class="form-group">
                    <label for="inputTitle" class="col-lg-2 control-label">Title</label>
                    <div class="col-lg-10">
                      <input type="text" class="form-control" v-model="title" placeholder=" input your title">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="textArea" class="col-lg-2 control-label">Question</label>
                    <div class="col-lg-10">
                      <textarea class="form-control" rows="3" v-model="question" placeholder ="input your question"></textarea>
                      <span class="help-block">A longer block of help text that breaks onto a new line and may extend beyond one line.</span>
                    </div>
                  </div>
                </fieldset>
                  <button type="submit" data-dismiss="modal" class="btn btn-primary">Post</button>
              </form>
            </div>
            <div class="modal-footer">
              <!-- <button type="button" class="btn btn-default" data-dismiss="modal">Close</button> -->
              <!-- <button type="submit" class="btn btn-default">Post</button> -->
            </div>
          </div>

        </div>
      </div>

    </div><br><br><br>

    <div class="panel panel-default" v-for='question in questions'>
      <div class="panel-heading">{{question.title}}</div>
      <div class="panel-body">
        {{question.content}}
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
import { mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      title: '',
      question: ''
    }
  },
  components: {
  },
  computed: {
    ...mapState([
      'questions'
    ])
  },
  methods: {
    ...mapActions([
      'getallquestion',
      'submitQuestion'
    ]),
    getquestion () {
      let quest = this
      axios.post('http://localhost:3000/question', {
        title: quest.title,
        content: quest.question
      })
      .then(data => {
        console.log(data)
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    this.getallquestion()
  }
}
</script>

<style lang="css">
</style>
