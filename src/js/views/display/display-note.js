module.exports = function displayNoteConstructor (context, template) {
  var Vue = context.deps.Vue
  var marked = context.deps.marked
  var moment = context.deps.moment
  return Vue.extend({
    template: template,
    replace: true,
    data: function displayNoteMount () {
      // retrieve url params
      var params = this.$route.params
      var noteId = params.noteId
      // retrieve Note from localstorage
      var note = context.model.getNote(noteId)
      note.content = marked(note.content)
      // if not there, route to note not found
      console.log('display-note mounted')
      return {
        id: noteId,
        title: note.title,
        lastModified: moment(note.lastModified, 'X').fromNow(),
        content: note.content
      }
    }
  })
}
