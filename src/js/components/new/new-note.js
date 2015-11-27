var template = require('./new-note.html')

module.exports = function (context) {
  var Vue = context.deps.Vue
  var _ = context.deps.lodash
  var store = context.deps.store
  var marked = context.deps.marked
  return Vue.extend({
    template: template,
    replace: true,
    data: function () {
      var note = {
        title: '',
        content: ''
      }
      // if not there, route to note not found
      console.log('new-note mounted')
      return {
        title: note.title,
        rawContent: note.content
      }
    },
    computed: {
      content: function () {
        return marked(this.rawContent)
      }
    },
    methods:{
      saveNewNote: function (event){
        var note = {
          title:this.title,
          content:this.rawContent
        }
        var newNote = context.model.saveNote(note)
        if(newNote){
          context.router.go('/note/'+newNote.id)
        } else{
          console.error('error in saving note')
        }
      }
    }
  })
}
