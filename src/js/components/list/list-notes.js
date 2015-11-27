module.exports = function listNoteConstructor (context, template) {
  var Vue = context.deps.Vue
  var _ = context.deps.lodash
  var store = context.deps.store
  var moment = context.deps.moment
  return Vue.extend({
    template: template,
    replace: true,
    data: function listNoteMount () {
      // retrieve Notes from localstorage
      var notesList = context.model.getList()
      notesList = _.map(notesList, function(note){
        note.lastModified = moment(note.lastModified, 'X').fromNow()
        return note
      })
      console.log('list-notes mounted')
      return {
        notes: notesList
      }
    },
    methods:{
      deleteAllNotes: function(event){
        context.model.deleteAllNotes()
        this.notes = []
      }
    }
  })
}
