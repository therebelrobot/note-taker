var Vue = require('vue')
var VueRouter = require('vue-router')
var _ = require('lodash')
var store = require('store2')
var marked = require('marked')
var moment = require('moment')

Vue.use(VueRouter)

// load components
var newNoteComponent = require('./components/new/new-note')
var newNoteTemplate = require('./components/new/new-note.html')
var editNoteComponent = require('./components/edit/edit-note')
var editNoteTemplate = require('./components/edit/edit-note.html')
var displayNoteComponent = require('./components/display/display-note')
var displayNoteTemplate = require('./components/display/display-note.html')
var listNotesComponent = require('./components/list/list-notes')
var listNotesTemplate = require('./components/list/list-notes.html')

// Bootstrap application
var App = Vue.extend({})
var context = {
  deps: {
    lodash: _,
    store: store,
    Vue: Vue,
    marked: marked,
    moment: moment
  }
}

context.model = require('./model')(context)

context.router = new VueRouter()
context.router.map({
  '/': {
    component: listNotesComponent(context, listNotesTemplate)
  },
  '/new': {
    component: newNoteComponent(context, newNoteTemplate)
  },
  '/note/:noteId': {
    component: displayNoteComponent(context, displayNoteTemplate)
  },
  '/note/:noteId/edit': {
    component: editNoteComponent(context, editNoteTemplate)
  }
})

context.router.start(App, '#note-taker-app')
