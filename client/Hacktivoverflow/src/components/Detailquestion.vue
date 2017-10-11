<template lang="html">
  <div class="">
    <div class="container">
      <div class="panel panel-default">
        <div class="panel-heading">{{question.title}}</div>
        <div class="panel-body">{{question.content}}</div>
{{question.answer[0].replyContent}}
      </div>


      <div class="panel panel-default" v-for = 'ans in question.answer'>
        <div class="panel-heading">{{ans}}</div>
        <div class="panel-body">{{ans.replyContent}}</div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  props: ['id'],
  data () {
    return {
      question: {
        title: '',
        content: '',
        createdby: '',
        answer: [],
        thumbup: [],
        thumbdown: []
      }
    }
  },
  computed: {
    ...mapState([
      'questions'
    ])
  },
  methods: {
    getone (id) {
      axios.get(`http://35.197.131.206/question/` + id)
      .then(result => {
        console.log('ini result', result)
        this.question = result.data
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  method () {
  },
  created () {
    this.getone(this.id)
    // console.log('ini this question', this.question)
  },
  watch: {
    id () {
      this.getone(this.id)
    }
  }
}
</script>

<style lang="css">
</style>
