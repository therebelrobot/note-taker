module.exports = function editNoteContructor (context, template) {
  var Vue = context.deps.Vue
  var marked = context.deps.marked
  return Vue.extend({
    template: template,
    replace: true,
    data: function editNoteMount () {
      // retrieve url params
      var params = this.$route.params
      var noteId = params.noteId
      // retrieve Note from localstorage
      var note = context.model.getNote(noteId)
      // if not there, route to note not found
      console.log('edit-note mounted')
      return {
        id: noteId,
        title: note.title,
        rawContent: note.content
      }
    },
    computed: {
      content: function () {
        return marked(this.rawContent)
      }
    },
    methods: {
      saveNote: function (event) {
        var note = {
          id: this.id,
          title: this.title,
          content: this.rawContent
        }
        var newNote = context.model.saveNote(note)
        if (newNote) {
          context.router.go('/note/' + newNote.id)
        } else {
          console.error('error in saving note')
        }
      },
      deleteNote: function (event) {
        context.model.deleteNote(this.id)
        context.router.go('/')
      }
    }
  })
}
