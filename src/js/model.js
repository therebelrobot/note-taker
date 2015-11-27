module.exports = function (context) {
  context.deps.store = context.deps.store.namespace('note-taker')
  var store = context.deps.store
  var moment = context.deps.moment
  var _ = context.deps.lodash

  if (!store.get('list')) {
    var notes = [
      {
        id: 1,
        title: 'Template Note',
        content: '# h1 Heading 8-)\n## h2 Heading\n### h3 Heading\n#### h4 Heading'+
          '\n##### h5 Heading\n###### h6 Heading\n\n\n## Horizontal Rules\n\n___\n\n'+
          '---\n\n***\n\n\n## Typographic replacements\n\nEnable typographer option to'+
          ' see result.\n\n(c) (C) (r) (R) (tm) (TM) (p) (P) +-\n\ntest.. test... '+
          'test..... test?..... test!....\n\n!!!!!! ???? ,,  -- ---\n\n"Smartypants, '+
          'double quotes" and \'single quotes\'\n\n\n## Emphasis\n\n**This is bold '+
          'text**\n\n__This is bold text__\n\n*This is italic text*\n\n_This is italic '+
          'text_\n\n~~Strikethrough~~\n\n\n## Blockquotes\n\n\n> Blockquotes can also '+
          'be nested...\n>> ...by using additional greater-than signs right next to '+
          'each other...\n> > > ...or with spaces between arrows.\n\n\n## Lists\n\n'+
          'Unordered\n\n+ Create a list by starting a line with `+`, `-`, or `*`\n+ '+
          'Sub-lists are made by indenting 2 spaces:\n  - Marker character change forces '+
          'new list start:\n    * Ac tristique libero volutpat at\n    + Facilisis in '+
          'pretium nisl aliquet\n    - Nulla volutpat aliquam velit\n+ Very easy!\n\n'+
          'Ordered\n\n1. Lorem ipsum dolor sit amet\n2. Consectetur adipiscing elit\n3. '+
          'Integer molestie lorem at massa\n\n\n1. You can use sequential numbers...\n1. '+
          '...or keep all the numbers as `1.`\n\nStart numbering with offset:\n\n57. foo\n'+
          '1. bar\n\n\n## Code\n\nInline `code`\n\nIndented code\n\n    // Some comments\n'+
          '    line 1 of code\n    line 2 of code\n    line 3 of code\n\n\nBlock code '+
          '"fences"\n\n```\nSample text here...\n```\n\n## '+
          'Tables\n\n| Option | Description |\n| ------ | ----------- |\n| data   | path to '+
          'data files to supply the data that will be passed into templates. |\n| engine | '+
          'engine to be used for processing templates. Handlebars is the default. |\n| ext'+
          '    | extension to be used for dest files. |\n\nRight aligned columns\n\n| Option'+
          ' | Description |\n| ------:| -----------:|\n| data   | path to data files to'+
          ' supply the data that will be passed into templates. |\n| engine | engine to'+
          ' be used for processing templates. Handlebars is the default. |\n| ext    | '+
          'extension to be used for dest files. |\n\n\n## Links\n\n[link text]'+
          '(http://dev.nodeca.com)\n\n[link with title](http://nodeca.github.io/pica/demo/ '+
          '"title text!")\n\nAutoconverted link https://github.com/nodeca/pica (enable'+
          ' linkify to see)\n\n\n## Images\n\n![Minion](https://octodex.github.com/'+
          'images/minion.png)\n![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg'+
          ' "The Stormtroopocat")\n\nLike links, Images also have a footnote style '+
          'syntax\n\n![Alt text][id]\n\nWith a reference later in the document defining '+
          'the URL location\n\n[id]: https://octodex.github.com/images/dojocat.jpg'+
          '  "The Dojocat"\n\n\n'
      }, {
        id: 2,
        title: 'Another Note',
        content: '# h1 Heading 8-)\n## h2 Heading\n### h3 Heading\n#### h4 Heading'+
          '\n##### h5 Heading\n###### h6 Heading\n\n\n## Horizontal Rules\n\n___\n\n'+
          '---\n\n***\n\n\n## Typographic replacements\n\nEnable typographer option to'+
          ' see result.\n\n(c) (C) (r) (R) (tm) (TM) (p) (P) +-\n\ntest.. test... '+
          'test..... test?..... test!....\n\n!!!!!! ???? ,,  -- ---\n\n"Smartypants, '+
          'double quotes" and \'single quotes\'\n\n\n## Emphasis\n\n**This is bold '+
          'text**\n\n__This is bold text__\n\n*This is italic text*\n\n_This is italic '+
          'text_\n\n~~Strikethrough~~\n\n\n## Blockquotes\n\n\n> Blockquotes can also '+
          'be nested...\n>> ...by using additional greater-than signs right next to '+
          'each other...\n> > > ...or with spaces between arrows.\n\n\n## Lists\n\n'+
          'Unordered\n\n+ Create a list by starting a line with `+`, `-`, or `*`\n+ '+
          'Sub-lists are made by indenting 2 spaces:\n  - Marker character change forces '+
          'new list start:\n    * Ac tristique libero volutpat at\n    + Facilisis in '+
          'pretium nisl aliquet\n    - Nulla volutpat aliquam velit\n+ Very easy!\n\n'+
          'Ordered\n\n1. Lorem ipsum dolor sit amet\n2. Consectetur adipiscing elit\n3. '+
          'Integer molestie lorem at massa\n\n\n1. You can use sequential numbers...\n1. '+
          '...or keep all the numbers as `1.`\n\nStart numbering with offset:\n\n57. foo\n'+
          '1. bar\n\n\n## Code\n\nInline `code`\n\nIndented code\n\n    // Some comments\n'+
          '    line 1 of code\n    line 2 of code\n    line 3 of code\n\n\nBlock code '+
          '"fences"\n\n```\nSample text here...\n```\n\n## '+
          'Tables\n\n| Option | Description |\n| ------ | ----------- |\n| data   | path to '+
          'data files to supply the data that will be passed into templates. |\n| engine | '+
          'engine to be used for processing templates. Handlebars is the default. |\n| ext'+
          '    | extension to be used for dest files. |\n\nRight aligned columns\n\n| Option'+
          ' | Description |\n| ------:| -----------:|\n| data   | path to data files to'+
          ' supply the data that will be passed into templates. |\n| engine | engine to'+
          ' be used for processing templates. Handlebars is the default. |\n| ext    | '+
          'extension to be used for dest files. |\n\n\n## Links\n\n[link text]'+
          '(http://dev.nodeca.com)\n\n[link with title](http://nodeca.github.io/pica/demo/ '+
          '"title text!")\n\nAutoconverted link https://github.com/nodeca/pica (enable'+
          ' linkify to see)\n\n\n## Images\n\n![Minion](https://octodex.github.com/'+
          'images/minion.png)\n![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg'+
          ' "The Stormtroopocat")\n\nLike links, Images also have a footnote style '+
          'syntax\n\n![Alt text][id]\n\nWith a reference later in the document defining '+
          'the URL location\n\n[id]: https://octodex.github.com/images/dojocat.jpg'+
          '  "The Dojocat"\n\n\n'
      }
    ]
    var list = _.map(notes, function (note) {
      return {
        id: note.id,
        title: note.title,
        lastModified: note.lastModified
      }
    })
    saveList.bind(context.deps)(list)
    _.forEach(notes, saveNote.bind(context.deps))
  }
  return {
    getList: getList.bind(context.deps),
    getNote: getNote.bind(context.deps),
    saveNote: saveNote.bind(context.deps),
    deleteNote: deleteNote.bind(context.deps),
    deleteAllNotes: deleteAllNotes.bind(context.deps)
  }
}
function getList () {
  var store = this.store
  console.log('getting list')
  try {
    var allNotes = store.get('list')
    console.log(allNotes)
    allNotes = JSON.parse(allNotes)
    console.log(allNotes)
    return allNotes
  } catch(e) {
    console.error(e)
    return false
  }
}
function saveList (list) {
  var store = this.store
  try {
    allNotes = JSON.stringify(list)
    store.set('list', allNotes)
    return true
  } catch(e) {
    console.error(e)
    return false
  }
}
function getNote (id) {
  var store = this.store
  try {
    var thisNote = store.get(id)
    thisNote = JSON.parse(thisNote)
    return thisNote
  } catch(e) {
    console.error(e)
    return false
  }
}
function saveNote (note) {
  var store = this.store
  var _ = this.lodash
  var moment = this.moment
  note.lastModified = moment().format('X')
  try {
    var allNotes = getList.bind(this)()
    if (!note.id) {
      note.id = getNextId.bind(this)()
    } else {
      allNotes = _.reject(allNotes, {id: parseInt(note.id, 10)})

    }
    allNotes.push({
      id: parseInt(note.id, 10),
      title: note.title,
      lastModified: note.lastModified
    })
    noteJSON = JSON.stringify(note)
    store.set(note.id, noteJSON)
    saveList.bind(this)(allNotes)
    return note
  } catch(e) {
    console.error(e)
    return false
  }
}
function getNextId () {
  var store = this.store
  var _ = this.lodash
  var allNotes = getList.bind(this)()
  var allIDs = _.pluck(allNotes, 'id')
  var highestID = 0
  _.forEach(allIDs, function (id) {
    id = parseInt(id, 10)
    if (id > highestID) {
      highestID = id
    }
  })
  highestID++
  return highestID
}
function getNote (id) {
  var store = this.store
  try {
    var thisNote = store.get(id)
    thisNote = JSON.parse(thisNote)
    return thisNote
  } catch(e) {
    console.error(e)
    return false
  }
}
function deleteNote (id) {
  var store = this.store
  var _ = this.lodash
  try {
    if (!store.get(id)) {
      console.error('note id', id, 'does not exist. Cannot delete.')
      return false
    }
    var allNotes = getList.bind(this)()
    console.log('deleting this note',allNotes)
    store.remove(id)
    allNotes = _.reject(allNotes, {id: parseInt(id,10)})
    console.log('afterdelete',allNotes)
    saveList.bind(this)(allNotes)
    return true
  } catch(e) {
    console.error(e)
    return false
  }
}
function deleteAllNotes () {
  var store = this.store
  try {
    store.clearAll()
    store.set('list', '[]')
    return true
  } catch(e) {
    console.error(e)
    return false
  }
}
