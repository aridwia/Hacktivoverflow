<template lang="html">
  <div class="">
    <div class="container">
      <div class="panel panel-success">
        <div class="panel-heading">
          <h3 class="panel-title">{{onequestion.title}}</h3>
        </div>
        <div class="panel-body">
          {{onequestion.content}}
          <!-- {{onequestion}} -->
        </div>
        <div class="panel-footer">
          <button  type="button" class="btn btn-warning btn-sm glyphicon glyphicon-file" data-toggle="modal" data-target="#replyquestion" @click="operedit(onequestion)"> Reply</button>
        </div>
      </div>

      <!-- Modal reply question -->
      <div class="modal fade" id="replyquestion" role="dialog">
        <div class="modal-dialog">

          <!-- Modal content-->
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">&times;</button>
              <h4 class="modal-title">Reply question</h4>
            </div>
            <div class="modal-body">

              <div class="panel panel-success">
                <div class="panel-heading">
                  <h3 class="panel-title">{{onequestion.title}}</h3>
                </div>
                <div class="panel-body">
                  {{onequestion.content}}<br><br>

                  <div class="form-group">
                    <div class="col-lg-12">
                      <textarea class="form-control" rows="3" placeholder ="type your answer" v-model="newreply.replycontent" ></textarea>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal" @click="submitreply(newreply)">Post</button>
              <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>

        </div>
      </div>



      <div class="panel panel-primary" v-for = "ans in onequestion.answer">
          <div class="panel-heading">
            {{ans.createdby.username}}
          </div>
          <div class="panel-body">
            {{ans.replyContent}}
          </div>
          <div class="panel-footer">
            <button  type="button" class="btn btn-warning btn-sm glyphicon glyphicon-pencil" data-toggle="modal" data-target="#"> Edit</button>
            <button  class=" btn btn-danger btn-sm glyphicon glyphicon-trash" type="submit"> Delete</button>
          </div>
      </div>

    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import { mapState, mapActions } from 'vuex'
export default {
  props: ['id'],
  data () {
    return {
      newreply: {
        replyContent: '',
        idquest: this.id
      },
      questionreply: []
    }
  },
  computed: {
    ...mapState([
      'onequestion'
    ])
  },
  methods: {
    ...mapActions([
      'submitreply', 'getonequestion'
    ]),
    operedit (id) {
      this.questionreply = id
    }
  },
  created () {
    this.getonequestion(this.id)
  },
  watch: {
    id () {
      this.getonequestion(this.id)
    }
  }
}
</script>

<style lang="css">
</style>



// import axios from 'axios'
// import { mapState, mapActions } from 'vuex'
// export default {
//   props: ['id'],
//   data () {
//     return {
//       question: {
//         title: '',
//         content: '',
//         createdby: '',
//         answer: [],
//         thumbup: [],
//         thumbdown: []
//       },
//       newreply: {
//         replyContent: '',
//         idquest: this.id
//       },
//       questionreply: []
//     }
//   },
//   computed: {
//     ...mapState([
//       'onequestion'
//     ])
//   },
//   methods: {
//     ...mapActions([
//       'submitreply','getonequestion'
//     ]),
//     getone (id) {
//       axios.get(`http://35.197.131.206/question/` + id)
//       .then(result => {
//         console.log('ini result', result)
//         this.question = result.data
//         console.log('ini this question', this.question)
//       })
//       .catch(err => {
//         console.log(err)
//       })
//     },
//     operedit (id) {
//       this.questionreply = id
//     }
//   },
//   created () {
//     this.getone(this.id)
//   },
//   watch: {
//     id () {
//       this.getone(this.id)
//     }
//   }
// }
