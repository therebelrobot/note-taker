var Vue = require('vue')
var VueRouter = require('vue-router')
var _ = require('lodash')
var store = require('store2')
var marked = require('marked')
var moment = require('moment')

Vue.use(VueRouter)

// load views
var newNoteView = require('./views/new/new-note')
var newNoteTemplate = require('./views/new/new-note.html')
var editNoteView = require('./views/edit/edit-note')
var editNoteTemplate = require('./views/edit/edit-note.html')
var displayNoteView = require('./views/display/display-note')
var displayNoteTemplate = require('./views/display/display-note.html')
var listNotesView = require('./views/list/list-notes')
var listNotesTemplate = require('./views/list/list-notes.html')

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
    component: listNotesView(context, listNotesTemplate)
  },
  '/new': {
    component: newNoteView(context, newNoteTemplate)
  },
  '/note/:noteId': {
    component: displayNoteView(context, displayNoteTemplate)
  },
  '/note/:noteId/edit': {
    component: editNoteView(context, editNoteTemplate)
  }
})

context.router.start(App, '#note-taker-app')
